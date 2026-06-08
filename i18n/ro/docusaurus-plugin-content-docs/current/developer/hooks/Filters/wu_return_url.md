---
id: wu_return_url
title: Filtru - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Permite dezvoltatorilor să modifice URL-ul de retur al gateway-ului folosit după procesele de checkout.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $return_url | `string` | URL-ul către care se redirecționează după proces. |
| $gateway | `self` | Instanța gateway-ului. |
| $payment | `\WP_Ultimo\Models\Payment` | Instanța de plată Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Comanda curentă de coș Ultimate Multisite. |

### De la

- 2.0.20
### Sursă

Definit în [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) la linia 683


## Returnează
