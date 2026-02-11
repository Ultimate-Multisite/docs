---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Filters the redirect URL after making a domain primary.

Allows developers to customize where users are redirected after successfully setting a domain as primary. By default, redirects to the current URL on the main site, or to the admin URL of the site being modified.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | De standaard omleidings-URL. Ofwel de huidige URL (indien hoofdsite) of de admin-URL van de huidige site. |
| $current_site | `int` | Het ID van de site waarvan het domein als primair wordt ingesteld. |
| $domain | `\Domain` | Het domeinobject dat als primair is ingesteld. |
| $old_primary_domains | `array` | Array van ID's van domeinen die eerder primair waren. |

### Since

- 2.0.0

### Source

Defined in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) at line 639

## Returns

The filtered redirect URL.
