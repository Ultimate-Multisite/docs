---
id: wp_ultimo_skip_network_active_check
title: Iragazkia - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Iragazkia: wp_ultimo_skip_network_active_check

Garatzaileei sareko aktibazio-egiaztapena saihesteko aukera ematen die.

Hau erabilgarria da composer-en oinarritutako eta bestelako konfigurazio pertsonalizatuak erabiltzean, hala nola Bedrock, adibidez, non pluginak mu-plugins gisa erabiltzea ohikoa den.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Egiaztapena saltatu behar dugun ala ez; balio lehenetsia false da. |

### Noiztik {#since}

- 2.0.0
### Iturburua {#source}

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) fitxategian definitua, 272. lerroan


## Itzultzen du {#returns}
true egiaztapena saltatu nahi baduzu; bestela, false.
