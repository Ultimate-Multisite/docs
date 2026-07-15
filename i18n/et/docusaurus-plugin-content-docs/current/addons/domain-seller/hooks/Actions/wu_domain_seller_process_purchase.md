---
id: wu_domain_seller_process_purchase
title: Toiming - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Toiming: wu_domain_seller_process_purchase

Käivitatakse, kui domeeni ostu töödeldakse pärast checkouti lõpetamist.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Makseobjekt. |
| $checkout_data | `array&lt;string,mixed&gt;` | Täielikud checkouti andmed signup-vormilt. |

### Alates {#since}

- 2.0.0
### Allikas {#source}

Määratletud failis [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) real 246
