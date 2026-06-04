---
title: "Multi-Tenancy Isolation"
sidebar_position: 12
---

# Multi-Tenancy Isolation

Ultimate Multisite: Multi-Tenancy 1.2.0 supports per-subsite database and filesystem isolation for sovereign tenants. This keeps tenant data separate while preserving network-level provisioning, billing, and administration.

## Isolation strategy

Use sovereign isolation for customers that require stronger data separation, dedicated filesystem storage, or a separate host boundary.

Each sovereign tenant should have:

- A dedicated tenant database or database prefix strategy approved for the host.
- A dedicated tenant filesystem root.
- A tenant registry entry that maps the site to its database, root path, hostname, and isolation model.
- A migration verification result before the tenant is considered live.

## Database host binding

Version 1.2.0 changes the default same-machine host binding behavior for sovereign installs. Same-machine values such as `localhost` are normalized so Bedrock, FrankenPHP, and containerized WordPress installs can grant and verify permissions against the host string MySQL actually sees.

When configuring a sovereign tenant:

1. Set the database host to the value required by the tenant runtime.
2. Use `localhost` for local socket installs when the host expects local connections.
3. Use `127.0.0.1` or a service hostname only when the database server grants privileges to that host.
4. Run migration verification after changing the host binding.

If verification reports grant failures, compare the tenant DB user grants with the configured host binding. A user granted for `user@localhost` is different from `user@127.0.0.1` or `user@%`.

## Filesystem root

The tenant root should be stable across restarts and deployments. Avoid temporary mount paths. For Bedrock-style installs, confirm the tenant root points at the WordPress web root expected by the tenant bootstrap, not only the project root.

## Provisioning order

For new sovereign tenants, use this order:

1. Create the tenant registry entry.
2. Create the tenant database and database user.
3. Bootstrap the tenant schema.
4. Provision tenant users.
5. Configure tenant filesystem paths.
6. Run migration verification.
7. Switch routing or DNS after verification passes.

This order prevents partially isolated tenants from receiving traffic before the database writer, users, and filesystem are ready.
