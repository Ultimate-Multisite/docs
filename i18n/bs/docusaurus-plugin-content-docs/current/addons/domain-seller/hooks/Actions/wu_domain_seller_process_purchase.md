---
id: wu_domain_seller_process_purchase
title: Akcija - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Akcija: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

Pokreće se kada se obrađuje kupnja domena nakon završetka naplate (checkout-a).

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objekt plaćanja. |
| $checkout_data | `array<string,mixed>` | Puni podaci sa formulara za registraciju (checkout). |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definisano je u [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) na liniji 246
