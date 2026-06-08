---
id: networks_pre_user_is_network_admin
title: Filtrační funkce - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filtr: networks_pre_user_is_network_admin

Filtruje sítě, z nichž je uživatel administrátor, a slouží k obejití standardního procesu.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $ | `array\|bool\|null` | Seznam ID sítí nebo false. Jakékoli giá trị kromě null zkratuje proces. |
| $ | `int` | ID uživatele, pro kterého se mají síťové sítě vrátit. |

### Od verze

- 2.0.0
### Zdroj

Definováno v [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) na řádku 688
