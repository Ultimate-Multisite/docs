---
id: wu_domain_seller_process_purchase
title: Darbība - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Darbība: wu_domain_seller_process_purchase

Tiek izsaukts, kad pēc checkout pabeigšanas tiek apstrādāts domēna pirkums.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Maksājuma objekts. |
| $checkout_data | `array&lt;string,mixed&gt;` | Pilni checkout dati no reģistrācijas veidlapas. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) 246. rindā
