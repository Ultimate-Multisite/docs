---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

Filtrează rețelele ale căror administrator este un utilizator, pentru a ocoli procesul.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | Listă de ID-uri de rețea sau false. Orice valoare care nu este null va ocoli procesul. |
| $ | `int` | ID-ul utilizatorului pentru care ar trebui returnate rețelele. |

### Since {#since}

- 2.0.0
### Source {#source}

Definit în [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) la linia 688
