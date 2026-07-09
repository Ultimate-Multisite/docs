---
id: wu_domain_seller_process_purchase
title: Aðgerð - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Aðgerð: wu_domain_seller_process_purchase

Keyrist þegar verið er að vinna úr domain-kaupum eftir að afgreiðslu er lokið.

## Færibreytur

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Greiðsluhluturinn. |
| $checkout_data | `array&lt;string,mixed&gt;` | Öll afgreiðslugögn úr skráningareyðublaðinu. |

### Frá útgáfu

- 2.0.0
### Uppruni

Skilgreint í [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) á línu 246
