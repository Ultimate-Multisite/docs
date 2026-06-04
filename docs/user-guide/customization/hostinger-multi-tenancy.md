---
title: "Hostinger Multi-Tenancy"
sidebar_position: 8
---

# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 adds a Hostinger multi-tenancy capability so hosted domains can participate in sovereign tenant provisioning alongside the existing Hostinger domain-mapping integration.

Use this capability when tenant domains and isolated tenant infrastructure are managed through Hostinger hPanel.

## Setup notes

1. Configure the core Hostinger integration under **Ultimate Multisite > Settings > Host Integrations**.
2. Confirm the Hostinger API token can manage the target domain or subdomain.
3. Enable the Multi-Tenancy addon.
4. Configure the tenant isolation strategy before publishing the tenant.
5. Run the migration verification workflow before sending production traffic to the tenant.

The Hostinger capability uses the shared Hostinger connection for host-side operations. DNS must still point to the correct Hostinger account, and hPanel account limits still apply.

## Capability-specific changes

- Sovereign tenants can be created with host-aware domain operations.
- Same-machine database host strings are normalized before grant verification.
- Hostinger-managed tenants should use the database host value shown in hPanel unless the WordPress runtime requires a local override.
- SSO visits rely on the tenant domain resolving to the Hostinger-hosted tenant.

## Troubleshooting Hostinger tenants

- If a tenant install fails, verify the domain is already attached to the Hostinger account.
- If database verification fails, compare the tenant DB username, database name, and host binding with hPanel.
- If **Visit (SSO)** fails, confirm DNS and SSL are active for the tenant domain.
- If teardown leaves host resources behind, remove any remaining databases, users, or folders from hPanel after confirming backups.
