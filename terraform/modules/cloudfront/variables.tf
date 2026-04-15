variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
}

variable "environment" {
  description = "Environment name (e.g. production, staging)"
  type        = string
}

variable "domain_name" {
  description = "Root domain name (e.g. rossandryangroup.com)"
  type        = string
}

variable "s3_website_endpoint" {
  description = "S3 website endpoint (e.g. www.rossandryangroup.com.s3-website-us-west-1.amazonaws.com)"
  type        = string
}

variable "s3_bucket_name" {
  description = "Name of the S3 bucket (used for origin ID)"
  type        = string
}

variable "acm_certificate_arn" {
  description = "ARN of the ACM certificate in us-east-1"
  type        = string
}

variable "route53_zone_id" {
  description = "Route 53 hosted zone ID for DNS records"
  type        = string
}

variable "price_class" {
  description = "CloudFront price class"
  type        = string
  default     = "PriceClass_100"
}
