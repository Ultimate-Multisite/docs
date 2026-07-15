---
id: wu_domain_seller_process_purchase
title: Akce - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Spustí se, když je zpracováván nákup domény po dokončení platby.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objekt platby. |
| $checkout_data | `array&lt;string,mixed&gt;` | Kompletní údaje z pokladny z formuláře pro registraci. |

### Od {#since}

- 2.0.0
### Zdroj {#source}

Definováno v [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) na řádku 246
