---
title: Multi-Tenancy Integration
sidebar_position: 6
---

# Multi-Tenancy Integration

Ultimate Multisite: Multi-Tenancy 1.2.0 changes several integration touchpoints for sovereign tenants, migration verification, and tenant lifecycle automation.

## Tenant bootstrap flow

Integrations that create or modify tenants should follow this order:

1. Resolve the tenant registry record and isolation model.
2. Create or verify the tenant database writer.
3. Bootstrap the tenant schema.
4. Provision tenant users.
5. Register tenant routing and filesystem paths.
6. Run migration verification before exposing the tenant.

Do not assume a sovereign tenant can reuse the network database connection. Use the tenant registry and writer abstractions provided by the addon.

## SSO and REST hooks

Stateless tenant autologin uses short-lived tokens with a purpose claim, JTI replay protection, an expiry cap, and origin pinning. Integrations that add login buttons or remote management links should generate tenant visits through the supported SSO flow instead of constructing tenant login URLs directly.

Network-side API audit events and daily summaries are available for sovereign tenant gateways. Use those logs when debugging external systems that call tenant lifecycle endpoints.

## Migration verification

After a migration or lifecycle integration changes tenant data, run the verification gates:

- `wp tenant verify-no-legacy --site=<site-id>` confirms the tenant no longer depends on legacy network-side paths.
- `wp tenant verify-sovereign-push --site=<site-id>` confirms sovereign push jobs can process and drain.

Integrations should treat failed verification as a deployment blocker and avoid marking a tenant live until the failure is resolved.

## Tenant deletion

Deletion flows should call the addon teardown path so tenant database credentials are cleaned up. External integrations may remove provider resources after teardown succeeds, but should not delete host databases or folders while verification or async push jobs are still running.

## Deprecated database router

The legacy `Database_Router` has been replaced by a deprecation stub. New integrations should resolve tenants through the current site router and tenant registry APIs rather than depending on the old router class.
