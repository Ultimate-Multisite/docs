---
id: wu_domain_seller_process_purchase
title: Dejanje - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Sproži se, ko se nakup domene obdeluje po zaključku checkouta.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objekt plačila. |
| $checkout_data | `array&lt;string,mixed&gt;` | Celotni podatki checkouta iz obrazca za prijavo. |

### Od {#since}

- 2.0.0
### Vir {#source}

Določeno v [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) v vrstici 246
