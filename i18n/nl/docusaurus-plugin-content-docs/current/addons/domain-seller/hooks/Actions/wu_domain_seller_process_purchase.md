---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Wordt uitgevoerd wanneer een domeinkaankoop wordt verwerkt na voltooiing van de checkout.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Het betalingsobject. |
| $checkout_data | `array&lt;string,mixed&gt;` | Alle checkoutgegevens van het inschrijfformulier. |

### Sinds

- 2.0.0
### Bron

Is gedefinieerd in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) op regel 246
