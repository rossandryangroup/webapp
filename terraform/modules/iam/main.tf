# =============================================================================
# IAM Module
# =============================================================================
# Creates the GitHub Actions OIDC provider and deploy role for CI/CD.
# This is a fresh account, so the OIDC provider is created as a resource
# (not a data source like in the shared VPC account).
# =============================================================================

# =============================================================================
# GitHub Actions OIDC Provider
# =============================================================================
# AWS allows only one OIDC provider per URL per account. If this already
# exists, import it:
#   terraform import module.iam.aws_iam_openid_connect_provider.github_actions \
#     arn:aws:iam::349658890906:oidc-provider/token.actions.githubusercontent.com
# =============================================================================

resource "aws_iam_openid_connect_provider" "github_actions" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]

  tags = {
    Name        = "github-actions-oidc"
    Environment = var.environment
  }
}

# =============================================================================
# CI/CD Deployment Role (assumed by GitHub Actions via OIDC)
# =============================================================================

resource "aws_iam_role" "github_actions_deploy" {
  name = "${var.project_name}-github-actions-deploy"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Federated = aws_iam_openid_connect_provider.github_actions.arn
        }
        Action = "sts:AssumeRoleWithWebIdentity"
        Condition = {
          StringEquals = {
            "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com"
          }
          StringLike = {
            "token.actions.githubusercontent.com:sub" = "repo:${var.github_repository}:*"
          }
        }
      }
    ]
  })

  tags = {
    Name        = "${var.project_name}-github-actions-deploy"
    Environment = var.environment
  }
}

resource "aws_iam_role_policy_attachment" "github_actions_admin" {
  role       = aws_iam_role.github_actions_deploy.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}
