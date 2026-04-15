output "deploy_role_arn" {
  description = "IAM role ARN for GitHub Actions deployment"
  value       = aws_iam_role.github_actions_deploy.arn
}

output "deploy_role_name" {
  description = "IAM role name for GitHub Actions deployment"
  value       = aws_iam_role.github_actions_deploy.name
}

output "oidc_provider_arn" {
  description = "ARN of the GitHub Actions OIDC provider"
  value       = aws_iam_openid_connect_provider.github_actions.arn
}
