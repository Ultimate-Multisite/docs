---
id: networks_pre_user_is_network_admin
title: Filtrs - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filtrs: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

Filtrē tīklus, kuros lietotājs ir administrators, lai priekšlaicīgi pārtrauktu procesu.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $ | `array\|bool\|null` | Tīkla ID saraksts vai false. Jebkas, izņemot null, priekšlaicīgi pārtrauks procesu. |
| $ | `int` | Lietotāja ID, kuram jāatgriež tīkli. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) 688. rindā
