# =============================================================================
# DNS Module
# =============================================================================
# Manages Route 53 hosted zone (imported) and ACM certificate with DNS
# validation. The cert is created in us-east-1 (required for CloudFront).
# ACM auto-renews DNS-validated certs as long as the CNAME records exist.
# =============================================================================

terraform {
  required_providers {
    aws = {
      source                = "hashicorp/aws"
      configuration_aliases = [aws.us_east_1]
    }
  }
}

# =============================================================================
# Route 53 Hosted Zone (import existing: Z2M4WZM6U5W43M)
# =============================================================================

resource "aws_route53_zone" "main" {
  name = var.domain_name

  tags = {
    Name        = var.domain_name
    Environment = var.environment
  }

  lifecycle {
    prevent_destroy = true
  }
}

# =============================================================================
# ACM Certificate (us-east-1, required for CloudFront)
# =============================================================================

resource "aws_acm_certificate" "main" {
  provider = aws.us_east_1

  domain_name               = var.domain_name
  subject_alternative_names = ["*.${var.domain_name}"]
  validation_method         = "DNS"

  tags = {
    Name        = "${var.project_name}-cert"
    Environment = var.environment
  }

  lifecycle {
    create_before_destroy = true
  }
}

# =============================================================================
# DNS Validation Records
# =============================================================================

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.main.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 300
  type            = each.value.type
  zone_id         = aws_route53_zone.main.zone_id
}

resource "aws_acm_certificate_validation" "main" {
  provider = aws.us_east_1

  certificate_arn         = aws_acm_certificate.main.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}
