---
id: wu_gocardless_cleanup_pending_site
title: Filtre - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filtè: wu_gocardless_cleanup_pending_site

Deklanche anvan efase yon site annatant ki òfelen pou yon membership GoCardless ki anile.

Retounen false nan filtè sa a pou anpeche efasman an.

## Paramèt

| Non | Kalite | Deskripsyon |
|------|------|-------------|
| $blog_id | `int` | ID blog WordPress site annatant lan. |
| $membership | `\WP_Ultimo\Models\Membership` | membership ki anile a. |
| $old_status | `string` | Estati a anvan anilasyon an. |

### Depi

- 2.0.0
### Sous

Defini nan [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) nan liy 1086
