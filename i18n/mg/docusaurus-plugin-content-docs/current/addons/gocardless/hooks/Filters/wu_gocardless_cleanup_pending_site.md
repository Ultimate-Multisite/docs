---
id: wu_gocardless_cleanup_pending_site
title: Sivana - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Sivana: wu_gocardless_cleanup_pending_site

Miasa alohan'ny hamafana tranonkala miandry kamboty ho an'ny maha-mpikambana GoCardless nofoanana.

Avereno false avy amin'ity sivana ity mba hisorohana ny famafana.

## Masontsivana {#parameters}

| Anarana | Karazana | Famaritana |
|------|------|-------------|
| $blog_id | `int` | ID-n'ny bilaogy WordPress an'ilay tranonkala miandry. |
| $membership | `\WP_Ultimo\Models\Membership` | Ilay maha-mpikambana nofoanana. |
| $old_status | `string` | Ny sata talohan'ny fanafoanana. |

### Hatramin'ny {#since}

- 2.0.0
### Loharano {#source}

Voafaritra ao amin'ny [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) amin'ny andalana 1086
