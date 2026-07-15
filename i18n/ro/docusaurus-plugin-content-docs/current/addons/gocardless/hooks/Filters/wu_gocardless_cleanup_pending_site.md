---
id: wu_gocardless_cleanup_pending_site
title: Filtru - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site

Se declanșează înainte de a șterge un site în așteptare (pending) orfan, asociat unei aderări GoCardless anulate.

Returnați `false` din acest filter pentru a preveni ștergerea.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $blog_id | `int` | ID-ul blogului WordPress al site-ului în așteptare. |
| $membership | `\WP_Ultimo\Models\Membership` | Aderarea anulată. |
| $old_status | `string` | Statusul înainte de anulare. |

### De la {#since}

- 2.0.0
### Sursă {#source}

Definit în [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) la linia 1086
