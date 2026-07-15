---
id: wu_gocardless_cleanup_pending_site
title: Sefe - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

E sebetsa pele ho hlakola saete e emetseng e se nang mong bakeng sa botho ba GoCardless bo hlakotsweng.

Kgutlisa false ho tswa ho filter ena ho thibela ho hlakolwa.

## Diparametha {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID ya saete e emetseng. |
| $membership | `\WP_Ultimo\Models\Membership` | Botho bo hlakotsweng. |
| $old_status | `string` | Boemo pele ho ho hlakolwa. |

### Ho tloha {#since}

- 2.0.0
### Mohlodi {#source}

E hlalositswe ho [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) moleng wa 1086
