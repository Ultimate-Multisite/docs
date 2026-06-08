---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site

Wordt uitgevoerd voordat een verlaten, wachtende site wordt verwijderd vanwege een geannuleerd GoCardless-lidmaatschap.

Retourneer `false` vanuit dit filter om de verwijdering te voorkomen.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $blog_id | `int` | De WordPress blog ID van de wachtende site. |
| $membership | `\WP_Ultimo\Models\Membership` | Het geannuleerde lidmaatschap. |
| $old_status | `string` | De status vóór de annulering. |

### Sinds

- 2.0.0
### Bron

Geïndefinieerd in [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) op regel 1086
