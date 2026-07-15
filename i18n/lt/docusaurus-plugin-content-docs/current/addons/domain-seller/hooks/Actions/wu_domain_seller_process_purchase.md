---
id: wu_domain_seller_process_purchase
title: Veiksmas - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Veiksmas: wu_domain_seller_process_purchase

Suveikia, kai domeno pirkimas apdorojamas po checkout užbaigimo.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Mokėjimo objektas. |
| $checkout_data | `array&lt;string,mixed&gt;` | Visi checkout duomenys iš registracijos formos. |

### Nuo {#since}

- 2.0.0
### Šaltinis {#source}

Apibrėžta [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) 246 eilutėje
