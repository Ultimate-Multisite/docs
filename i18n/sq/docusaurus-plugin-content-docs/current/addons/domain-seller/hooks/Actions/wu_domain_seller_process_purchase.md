---
id: wu_domain_seller_process_purchase
title: Veprim - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

Aktivizohet kur një blerje domeni po përpunohet pas përfundimit të checkout.

## Parametrat {#parameters}

| Emri | Type | Përshkrimi |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objekti i pagesës. |
| $checkout_data | `array&lt;string,mixed&gt;` | Të dhënat e plota të checkout nga formulari i regjistrimit. |

### Që nga {#since}

- 2.0.0
### Burimi {#source}

Përcaktuar në [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) në rreshtin 246
