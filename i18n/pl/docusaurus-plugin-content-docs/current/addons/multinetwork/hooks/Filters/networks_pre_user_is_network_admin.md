---
id: networks_pre_user_is_network_admin
title: Filtr - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filtr: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

Filtr, który pozwala na określenie sieci, dla których użytkownik jest administratorem, co pozwala ominąć standardową procedurę.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $ | `array\|bool\|null` | Lista ID sieci lub fałsz. Wszystko oprócz `null` spowoduje pominięcie standardowej procedury. |
| $ | `int` | ID użytkownika, dla którego należy zwrócić sieci. |

### Od wersji {#since}

- 2.0.0
### Źródło {#source}

Zdefiniowane w [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) w linii 688
