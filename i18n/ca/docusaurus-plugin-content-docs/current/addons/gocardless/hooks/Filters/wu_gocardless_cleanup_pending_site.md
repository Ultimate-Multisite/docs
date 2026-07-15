---
id: wu_gocardless_cleanup_pending_site
title: Filtre - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site

S'executa abans de eliminar un lloc temporal desatjat per una membresria GoCardless cancelada.

Tornar `false` des d'aquest filtre per prevenir l'eliminació.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $blog_id | `int` | L'ID del blog de WordPress del lloc temporal. |
| $membership | `\WP_Ultimo\Models\Membership` | La membresria cancelada. |
| $old_status | `string` | L'estat abans de la cancelació. |

### Des {#since}

- 2.0.0
### Font {#source}

Definid a [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) a la línia 1086
