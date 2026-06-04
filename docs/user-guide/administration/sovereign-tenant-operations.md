---
title: "Sovereign Tenant Operations"
sidebar_position: 15
---

# Sovereign Tenant Operations

Ultimate Multisite: Multi-Tenancy 1.2.0 adds operational tooling for sovereign tenants: subsites that run with their own database, filesystem root, and routing context while remaining visible from the network admin.

Use this page when managing isolated customer sites, remote-site handoffs, or migrations that move a standard subsite into sovereign infrastructure.

## What changes for administrators

- **Stateless tenant autologin** — Network admins can visit a sovereign tenant without relying on long-lived shared session state. The SSO token is purpose-scoped, origin-pinned, replay-protected, and capped to a short expiry window.
- **Sovereign-aware routing** — Legacy isolated networks and sovereign tenants resolve through the same site router path, reducing bootstrap differences between old and new isolated installs.
- **Verified migration state** — Migration verification checks user provisioning, database writer permissions, queue drain status, and legacy table absence before a tenant is treated as complete.
- **Safer teardown** — Sovereign teardown now removes tenant credentials cleanly so deleted tenants do not leave stale database access behind.

## Visiting a sovereign tenant

1. Open **Network Admin > Ultimate Multisite > Sites**.
2. Select the sovereign tenant.
3. Use **Visit (SSO)** when available instead of copying passwords or creating temporary admin accounts.

The visit flow creates a short-lived login token for that tenant and records the SSO event in the tenant audit trail. If the button fails, check that the tenant domain resolves to the expected install and that the tenant can reach the network-side SSO endpoint.

## Remote-site operations checklist

Before changing a sovereign or remote tenant, confirm:

- The tenant domain points at the host that owns the tenant filesystem.
- The tenant database host matches the configured host binding for that install.
- The migration verification commands pass for the tenant.
- Async migration queues are drained before making DNS or ownership changes.
- The tenant admin user was provisioned during migration and can log in through SSO.

## Deleting sovereign tenants

Deleting a sovereign tenant is destructive. Confirm the backup and export status first, then delete from the site management screen. The 1.2.0 teardown flow removes tenant database credentials as part of cleanup, but administrators should still verify that host-level database users and folders are gone when using external hosting panels.

:::warning
Do not delete a sovereign tenant while migration verification is still running or while async push jobs are queued. Wait for verification to complete so teardown does not remove credentials needed by pending jobs.
:::
