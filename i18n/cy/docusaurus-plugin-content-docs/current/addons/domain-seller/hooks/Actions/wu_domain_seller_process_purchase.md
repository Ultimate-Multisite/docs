---
id: wu_domain_seller_process_purchase
title: Gweithred - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Yn tanio pan fydd pryniant parth yn cael ei brosesu ar ôl cwblhau checkout.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Gwrthrych y taliad. |
| $checkout_data | `array&lt;string,mixed&gt;` | Data checkout llawn o’r ffurflen gofrestru. |

### Ers {#since}

- 2.0.0
### Ffynhonnell {#source}

Wedi’i ddiffinio yn [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) ar linell 246
