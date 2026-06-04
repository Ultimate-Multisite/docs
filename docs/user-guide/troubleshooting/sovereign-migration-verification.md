---
title: "Sovereign Migration Verification"
sidebar_position: 16
---

# Sovereign Migration Verification

Ultimate Multisite: Multi-Tenancy 1.2.0 includes WP-CLI verification commands for sovereign tenant migrations. Use them when a tenant migration, SSO visit, or isolated install does not behave as expected.

## Commands to run

Run verification from the network WordPress install:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Use the site ID for the tenant you are migrating. The first command checks that the tenant no longer depends on legacy network-side data. The second command verifies that sovereign push jobs can process and drain.

## Common failures

### Database grants do not match the host

If verification reports grant or writer-user failures, check the configured database host. `localhost`, `127.0.0.1`, and a container service name are different MySQL grant hosts. Update the tenant host binding or database grants, then rerun verification.

### Bedrock or local installs cannot connect

Bedrock and local socket installs may report the database as `localhost` while the runtime connects through a normalized address. Version 1.2.0 normalizes same-machine host strings, but custom host overrides can still conflict with database grants.

### Async push queue does not drain

If `verify-sovereign-push` does not finish, check Action Scheduler or the configured async runner. Clear failed jobs only after confirming they are safe to retry or discard.

### Tenant user count is wrong

The migration should provision users for the sovereign tenant. If the expected install user is missing, rerun the user provisioning step before retrying SSO.

### SSO visit is rejected

Stateless tenant autologin requires the tenant domain, origin pin, token purpose, nonce, and expiry to match. Confirm the tenant URL is correct and the login is attempted shortly after generating the SSO visit.

## When to retry

Retry verification after each infrastructure change. Do not switch production traffic, delete the source data, or remove migration credentials until all verification checks pass.
