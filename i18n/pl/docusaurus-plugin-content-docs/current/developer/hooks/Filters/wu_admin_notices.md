---
id: wu_admin_notices
title: Filtry - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices

Pozwala deweloperom filtrować powiadomienia administracyjne dodane przez Ultimate Multisite.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $notices | `array` | Lista powiadomień dla danego panelu. |
| $all_notices | `array` | Lista dodanych powiadomień, pogrupowana według panelu. |
| $panel | `string` | Panel, z którego należy pobrać powiadomienia. |
| $filter | `string` | Czy powiadomienia, które można zamknąć, zostały wyfiltrowane. |
| $dismissed_messages | `array` | Lista kluczy powiadomień, które zostały zamknięte. |

### Od

- 2.0.0
### Źródło

Zdefiniowane w [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) w linii 121.


## Zwraca
