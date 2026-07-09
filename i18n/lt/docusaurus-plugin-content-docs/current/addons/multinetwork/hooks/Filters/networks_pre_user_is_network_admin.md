---
id: networks_pre_user_is_network_admin
title: Filtras - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filtras: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

Filtruoja tinklus, kurių administratorius yra naudotojas, kad procesas būtų sutrumpintas.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $ | `array\|bool\|null` | Tinklų ID sąrašas arba false. Bet kas, išskyrus null, sutrumpins procesą. |
| $ | `int` | Naudotojo ID, kuriam turėtų būti grąžinti tinklai. |

### Nuo {#since}

- 2.0.0
### Šaltinis {#source}

Apibrėžta [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) 688 eilutėje
