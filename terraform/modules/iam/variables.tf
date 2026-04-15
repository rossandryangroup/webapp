variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
}

variable "environment" {
  description = "Environment name (e.g. production, staging)"
  type        = string
}

variable "github_repository" {
  description = "GitHub repository in owner/repo format for OIDC trust policy"
  type        = string
}
