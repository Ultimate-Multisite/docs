---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Udløses før sletning af et forældreløst afventende site for et annulleret GoCardless-medlemskab.

Returnér false fra dette filter for at forhindre sletning.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $blog_id | `int` | WordPress-blog-ID for det afventende site. |
| $membership | `\WP_Ultimo\Models\Membership` | Det annullerede medlemskab. |
| $old_status | `string` | Statussen før annullering. |

### Siden

- 2.0.0
### Kilde

Defineret i [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) på linje 1086
