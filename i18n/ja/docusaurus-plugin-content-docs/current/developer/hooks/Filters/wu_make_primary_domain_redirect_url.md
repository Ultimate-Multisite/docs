---
id: wu_make_primary_domain_redirect_url
title: フィルタ - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Filters the redirect URL after making a domain primary.

Allows developers to customize where users are redirected after successfully setting a domain as primary. By default, redirects to the current URL on the main site, or to the admin URL of the site being modified.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | The default redirect URL. Either the current URL (if main site) or the admin URL of the current site. |
| $current_site | `int` | The ID of the site whose domain is being made primary. |
| $domain | `\Domain` | The domain object that was made primary. |
| $old_primary_domains | `array` | Array of IDs of domains that were previously primary. |

### Since

- 2.0.0
### Source

Defined in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) at line 639


## Returns
The filtered redirect URL.
