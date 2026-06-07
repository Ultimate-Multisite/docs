---
id: wu_sso_url
title: "Filter - wu_sso_url"
sidebar_label: "wu_sso_url"
---

# Filter: wu_sso_url

Filters generated SSO URLs before they are returned for cross-domain customer actions.

Use this filter when an integration needs to add trusted context to a sovereign-tenant SSO link or replace the broker URL while preserving Ultimate Multisite's token validation.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | Generated SSO URL. |
| $user | `WP_User` | User who will be authenticated by the SSO visit. |
| $site_id | `int` | Target site ID for the visit. |
| $redirect_to | `string` | Destination URL after successful SSO validation. |

### Since

- 2.13.0

### Source

Defined in `inc/sso/class-sso.php`.


## Returns

Filtered SSO URL.
