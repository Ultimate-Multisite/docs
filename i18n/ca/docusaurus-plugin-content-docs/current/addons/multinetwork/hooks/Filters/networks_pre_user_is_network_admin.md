---
id: networks_pre_user_is_network_admin
title: Filtre - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

Filtra les xarxes de les quals un usuari és administrador, per saltar el procés normalment.

## Paràmetres

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | Una llista d'ID de xarxa o fals. Qualsevol cosa que no sigui `null` saltarà el procés. |
| $ | `int` | L'ID d'usuari per les quals s'han de retornar les xarxes. |

### Des

- 2.0.0
### Font

Definit en [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) a la línia 688
