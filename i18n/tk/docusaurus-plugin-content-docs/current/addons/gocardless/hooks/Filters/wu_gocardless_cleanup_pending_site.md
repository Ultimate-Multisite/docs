---
id: wu_gocardless_cleanup_pending_site
title: Süzgüç - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Ýatyrylan GoCardless agzalygy üçin eýesiz garaşylýan saýt pozulmazdan öň işledilýär.

Pozulmagynyň öňüni almak üçin bu filter-den false gaýtaryň.

## Parametrler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | Garaşylýan saýtyň WordPress blog ID-si. |
| $membership | `\WP_Ultimo\Models\Membership` | Ýatyrylan agzalyk. |
| $old_status | `string` | Ýatyrylmazdan öňki status. |

### Şondan bäri {#since}

- 2.0.0
### Çeşme {#source}

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) içinde 1086-njy setirde kesgitlenen.
