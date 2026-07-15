---
id: wu_gocardless_cleanup_pending_site
title: Shaandheeye - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Shaandheeye: wu_gocardless_cleanup_pending_site

Wuxuu shaqeeyaa ka hor inta aan la tirtirin goob sugitaan ku jirta oo agoon ah oo loogu talagalay xubinimada GoCardless ee la joojiyey.

Ka soo celi false shaandheeyahan si aad uga hortagto tirtirka.

## Halbeegyada {#parameters}

| Magac | Nooc | Sharaxaad |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID-ga goobta sugitaanka ku jirta. |
| $membership | `\WP_Ultimo\Models\Membership` | Xubinimada la joojiyey. |
| $old_status | `string` | Xaaladdii ka hor joojinta. |

### Laga bilaabo {#since}

- 2.0.0
### Isha {#source}

Waxaa lagu qeexay [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) safka 1086
