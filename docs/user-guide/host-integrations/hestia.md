---
title: "Hestia Control Panel Integration"
sidebar_position: 7
---

# Hestia Control Panel Integration

This guide explains how to configure the Ultimate Multisite Hestia integration so mapped domains in your network are automatically added (and removed) as Web Domain Aliases in Hestia.

- Hestia CLI reference: v-add-web-domain-alias / v-delete-web-domain-alias
- Official REST API doc: https://hestiacp.com/docs/server-administration/rest-api.html

## What It Does
- When a domain is mapped in Ultimate Multisite, the integration calls the Hestia API to run:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- When a domain mapping is removed, it runs:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Optionally adds/removes the `www.` alias depending on your “Auto-create www subdomain” setting in Domain Mapping settings.

## Prerequisites
- An existing Hestia Web Domain that already points to your WordPress installation. The integration will attach aliases to this base domain.
- Hestia API access enabled. You can authenticate using either a password or an API hash/token.

See Hestia’s REST API docs for enabling API access and authentication details:
https://hestiacp.com/docs/server-administration/rest-api.html

## Configuration (Wizard → Integrations → Hestia)
Provide the following values:

- `WU_HESTIA_API_URL` (required)
  - The base API endpoint, typically `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (required)
  - Hestia user used for API commands (often `admin`).
- `WU_HESTIA_API_PASSWORD` or `WU_HESTIA_API_HASH` (at least one)
  - Choose one authentication method: password or API hash/token.
- `WU_HESTIA_ACCOUNT` (required)
  - The account (owner) of the Web Domain in Hestia; this is the first argument to the CLI.
- `WU_HESTIA_WEB_DOMAIN` (required)
  - The existing Hestia Web Domain that serves your WordPress (aliases will be attached here).
- `WU_HESTIA_RESTART` (optional; default `yes`)
  - Whether to restart/reload services after alias changes.

You can let the wizard inject these constants into `wp-config.php`, or define them manually.

## Verifying Setup
- In the wizard “Testing” step, the plugin calls `v-list-web-domains <WU_HESTIA_ACCOUNT> json` via the API. A success response confirms connectivity and authentication.
- After mapping a domain, check in Hestia: Web > the base domain > Aliases. You should see the new alias added.

## Notes & Tips
- Ensure `WU_HESTIA_WEB_DOMAIN` already exists and is owned by `WU_HESTIA_ACCOUNT`.
- If SSL is required, manage certificates at Hestia. This integration currently handles aliases only.
- The plugin may also add/remove `www.<domain>` depending on your Domain Mapping “www subdomain” setting.

## Example API Call (cURL)
Below is a conceptual example (adjust to your environment). Refer to the official doc for exact parameters.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

For delete, use `cmd=v-delete-web-domain-alias` and the same args.

## Troubleshooting
- HTTP error from API: verify `WU_HESTIA_API_URL` is reachable and includes `/api`.
- Auth errors: confirm `WU_HESTIA_API_USER` and either `WU_HESTIA_API_PASSWORD` or `WU_HESTIA_API_HASH`.
- “Missing account/base domain” in logs: ensure `WU_HESTIA_ACCOUNT` and `WU_HESTIA_WEB_DOMAIN` are set and valid in Hestia.

## References
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
