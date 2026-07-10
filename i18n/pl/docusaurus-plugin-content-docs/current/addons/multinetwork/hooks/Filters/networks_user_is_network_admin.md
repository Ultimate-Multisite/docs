---
id: networks_user_is_network_admin
title: Filtr - networks_user_is_network_admin
sidebar_label: networks_user_is_network_admin
_i18n_hash: f8e40a1c47591c0cab73d671cf681281
---
# Filtr: networks_user_is_network_admin {#filter-networksuserisnetworkadmin}

Filtruje sieci, dla których użytkownik jest administratorem.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $ | `array\|bool` | Lista identyfikatorów sieci lub `false`, jeśli użytkownik nie jest administratorem żadnej sieci. |
| $ | `int` | ID użytkownika, dla którego należy zwrócić sieci. |

### Od {#since}

- 2.0.0
### Źródło {#source}

Zdefiniowane w [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L703) w linii 703
