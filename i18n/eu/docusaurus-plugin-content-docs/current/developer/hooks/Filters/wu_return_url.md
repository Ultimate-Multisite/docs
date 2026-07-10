---
id: wu_return_url
title: Iragazkia - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Iragazkia: wu_return_url {#filter-wureturnurl}

Garatzaileei ordainketa-prozesuen ondoren erabiltzen den itzulera-URL-a aldatzeko aukera ematen die.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $return_url | `string` | prozesuaren ondoren birbideratzeko URL-a. |
| $gateway | `self` | ordainketa-pasabidearen instantzia. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite ordainketaren instantzia. |
| $cart | `\WP_Ultimo\Checkout\Cart` | uneko Ultimate Multisite saski-eskaera. |

### Noiztik {#since}

- 2.0.20
### Iturburua {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) fitxategian definitua, 683. lerroan


## Itzultzen du {#returns}
