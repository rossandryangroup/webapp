# =============================================================================
# Terraform Root Configuration
# =============================================================================
# Manages rossandryangroup.com static site infrastructure:
#   - Route 53 hosted zone (imported)
#   - ACM certificate with DNS validation (auto-renewing)
#   - CloudFront distribution (imported, updated with new cert)
#   - S3 bucket for static site (imported)
#   - IAM OIDC provider + deploy role for GitHub Actions
#
# This is Ross's own AWS account (349658890906), not the shared VPC.
# =============================================================================

terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket  = "ross-ryan-group-tf-state-us-east-2"
    key     = "production/terraform.tfstate"
    region  = "us-east-2"
    encrypt = true
  }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "terraform"
    }
  }
}

# CloudFront requires ACM certs in us-east-1
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"

  default_tags {
    tags = {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "terraform"
    }
  }
}

# Existing S3 bucket is in us-west-1
provider "aws" {
  alias  = "us_west_1"
  region = "us-west-1"

  default_tags {
    tags = {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "terraform"
    }
  }
}

# =============================================================================
# DNS / TLS (Route 53 + ACM Certificate)
# =============================================================================

module "dns" {
  source = "./modules/dns"

  providers = {
    aws           = aws
    aws.us_east_1 = aws.us_east_1
  }

  project_name = var.project_name
  environment  = var.environment
  domain_name  = var.domain_name
}

# =============================================================================
# S3 Static Site
# =============================================================================

module "s3" {
  source = "./modules/s3"

  providers = {
    aws = aws.us_west_1
  }

  project_name = var.project_name
  environment  = var.environment
  bucket_name  = var.s3_bucket_name
}

# =============================================================================
# CloudFront Distribution
# =============================================================================

module "cloudfront" {
  source = "./modules/cloudfront"

  project_name        = var.project_name
  environment         = var.environment
  domain_name         = var.domain_name
  s3_website_endpoint = module.s3.website_endpoint
  s3_bucket_name      = module.s3.bucket_name
  acm_certificate_arn = module.dns.acm_certificate_arn
  route53_zone_id     = module.dns.route53_zone_id
  price_class         = var.cloudfront_price_class
}

# =============================================================================
# IAM (OIDC + GitHub Actions Deploy Role)
# =============================================================================

module "iam" {
  source = "./modules/iam"

  project_name      = var.project_name
  environment       = var.environment
  github_repository = var.github_repository
}
