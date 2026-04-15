# =============================================================================
# Root Variables
# =============================================================================

# -----------------------------------------------------------------------------
# General
# -----------------------------------------------------------------------------
variable "aws_region" {
  description = "AWS region to deploy to"
  type        = string
  default     = "us-east-2"
}

variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
  default     = "ross-ryan-group"
}

variable "environment" {
  description = "Environment name (e.g. production, staging)"
  type        = string
  default     = "production"
}

# -----------------------------------------------------------------------------
# Domain / DNS
# -----------------------------------------------------------------------------
variable "domain_name" {
  description = "Root domain name for the site"
  type        = string
  default     = "rossandryangroup.com"
}

# -----------------------------------------------------------------------------
# S3
# -----------------------------------------------------------------------------
variable "s3_bucket_name" {
  description = "Name of the existing S3 bucket for the static site"
  type        = string
  default     = "www.rossandryangroup.com"
}

# -----------------------------------------------------------------------------
# CloudFront
# -----------------------------------------------------------------------------
variable "cloudfront_price_class" {
  description = "CloudFront price class"
  type        = string
  default     = "PriceClass_100"
}

# -----------------------------------------------------------------------------
# GitHub Actions (CI/CD)
# -----------------------------------------------------------------------------
variable "github_repository" {
  description = "GitHub repository in owner/repo format for OIDC trust policy"
  type        = string
  default     = "dfp-side-hustle/cowork-ross"
}
