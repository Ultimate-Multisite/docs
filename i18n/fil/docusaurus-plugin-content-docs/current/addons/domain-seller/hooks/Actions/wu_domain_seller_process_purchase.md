---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Tumatakbo ito kapag pinoproseso ang pagbili ng domain pagkatapos makumpleto ang checkout.

## Mga Parameter

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ang object ng bayad. |
| $checkout_data | `array<string,mixed>` | Kumpletong data ng checkout mula sa form ng pagpaparehistro. |

### Since

- 2.0.0
### Source

Tinukoy sa [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) sa linya 246
