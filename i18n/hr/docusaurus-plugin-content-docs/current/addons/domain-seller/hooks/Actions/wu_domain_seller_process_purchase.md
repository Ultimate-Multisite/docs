---
id: wu_domain_seller_process_purchase
title: Radnja - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

Pokreće se kada se kupnja domene obrađuje nakon dovršetka završetka kupnje.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objekt plaćanja. |
| $checkout_data | `array&lt;string,mixed&gt;` | Potpuni podaci završetka kupnje iz obrasca za registraciju. |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) u retku 246
