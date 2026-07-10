---
id: wu_domain_seller_process_purchase
title: Akcia - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

Spustí sa, keď sa nákup domény spracúva po dokončení checkoutu.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objekt platby. |
| $checkout_data | `array&lt;string,mixed&gt;` | Úplné údaje checkoutu z registračného formulára. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) na riadku 246
