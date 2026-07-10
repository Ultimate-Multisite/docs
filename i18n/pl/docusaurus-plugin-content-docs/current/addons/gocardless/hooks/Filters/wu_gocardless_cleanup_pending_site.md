---
id: wu_gocardless_cleanup_pending_site
title: Filtr - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filtr: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Wywoływany przed usunięciem porzuconego, oczekującego miejsca (site) z powodu anulowania członkostwa GoCardless.

Aby zapobiec usunięciu, zwróć z tego filtra wartość `false`.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $blog_id | `int` | ID bloga WordPress, do którego należy oczekujące miejsce. |
| $membership | `\WP_Ultimo\Models\Membership` | Anulowane członkostwo. |
| $old_status | `string` | Status miejsca przed anulowaniem. |

### Od {#since}

- 2.0.0
### Źródło {#source}

Zdefiniowany w [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) w linii 1086
