# =============================================================================
# S3 Module
# =============================================================================
# Manages the S3 bucket for the static site. The bucket is imported from
# the existing www.rossandryangroup.com bucket in us-west-1.
#
# The bucket uses S3 website hosting (not OAC) because the existing
# CloudFront distribution uses a custom origin pointing at the website
# endpoint. This can be migrated to OAC later when building the new site.
# =============================================================================

resource "aws_s3_bucket" "website" {
  bucket = var.bucket_name

  tags = {
    Name        = var.bucket_name
    Environment = var.environment
  }
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website.id

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_versioning" "website" {
  bucket = aws_s3_bucket.website.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "website" {
  bucket = aws_s3_bucket.website.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}
