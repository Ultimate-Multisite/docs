---
id: wu_return_url
title: Զտիչ - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Թույլ է տալիս մշակողներին փոխել վճարային դարպասի վերադարձի URL-ը, որն օգտագործվում է checkout գործընթացներից հետո։

## Պարամետրեր

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $return_url | `string` | URL-ը, որին պետք է վերահղել գործընթացից հետո։ |
| $gateway | `self` | վճարային դարպասի նմուշը։ |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite վճարման նմուշը։ |
| $cart | `\WP_Ultimo\Checkout\Cart` | ընթացիկ Ultimate Multisite զամբյուղի պատվերը։ |

### Սկսած

- 2.0.20
### Աղբյուր

Սահմանված է [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683)-ում՝ 683-րդ տողում


## Վերադարձնում է
