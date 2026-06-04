---
title: "Sovereign Migration Workflow"
sidebar_position: 8
---

# Sovereign Migration Workflow

Ultimate Multisite: Multi-Tenancy 1.2.0 adds migration verification gates for moving a standard subsite into sovereign tenant infrastructure.

## Before you start

Confirm that you have:

- A current backup of the source site.
- The Multi-Tenancy addon active.
- The destination tenant database, filesystem root, and domain ready.
- A database host binding that matches the destination environment.
- Access to run WP-CLI commands for the network.

## Recommended workflow

1. Prepare the destination tenant database and filesystem.
2. Register or update the tenant isolation settings.
3. Run the tenant migration.
4. Provision or verify tenant users.
5. Drain async migration jobs.
6. Run sovereign migration verification.
7. Visit the tenant with SSO.
8. Switch DNS or routing only after verification passes.

## Verification gates

The verification workflow checks the migration from several angles:

- The tenant schema exists and can be written by the tenant database writer.
- The configured database host has valid grants.
- Tenant users are present and match the expected sovereign install user count.
- The async push queue can drain successfully.
- Legacy network-side data paths are no longer required for the sovereign tenant.

Treat verification failures as pre-launch blockers. Fix the reported database, user, queue, or routing issue, then run verification again before exposing the tenant to customers.

## First production visit

After verification passes, use **Visit (SSO)** from the site management screen for the first admin visit. This confirms tenant routing, SSO token handling, origin pinning, and tenant-side user provisioning in one controlled step.
