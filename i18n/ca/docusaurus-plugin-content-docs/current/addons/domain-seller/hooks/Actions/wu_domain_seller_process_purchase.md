---
id: wu_domain_seller_process_purchase
title: Acció - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Acció: wu_domain_seller_process_purchase

S'executa quan es processa una compra de domini després de completar el pagament.

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | L'objecte de pagament. |
| $checkout_data | `array&lt;string,mixed&gt;` | Tots les dades del tramit de caixa (signup) del formulari. |

### Des

- 2.0.0
### Font

Definit en [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) a la línia 246
