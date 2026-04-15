# =============================================================================
# Root Outputs
# =============================================================================

output "route53_zone_id" {
  description = "Route 53 hosted zone ID"
  value       = module.dns.route53_zone_id
}

output "acm_certificate_arn" {
  description = "ARN of the ACM certificate"
  value       = module.dns.acm_certificate_arn
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = module.cloudfront.distribution_id
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = module.cloudfront.domain_name
}

output "s3_bucket_name" {
  description = "S3 bucket name"
  value       = module.s3.bucket_name
}

output "s3_website_endpoint" {
  description = "S3 website endpoint"
  value       = module.s3.website_endpoint
}

output "deploy_role_arn" {
  description = "IAM role ARN for GitHub Actions (set as AWS_ROLE_ARN secret)"
  value       = module.iam.deploy_role_arn
}
