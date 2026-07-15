---
id: wu_domain_seller_process_purchase
title: Toiminto - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Käynnistyy, kun verkkotunnuksen ostoa käsitellään checkoutin valmistumisen jälkeen.

## Parametrit {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Maksuobjekti. |
| $checkout_data | `array&lt;string,mixed&gt;` | Täydet checkout-tiedot rekisteröitymislomakkeelta. |

### Alkaen {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) rivillä 246
