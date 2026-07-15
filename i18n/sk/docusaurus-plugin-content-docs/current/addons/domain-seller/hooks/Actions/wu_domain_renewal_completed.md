---
id: wu_domain_renewal_completed
title: Akcia - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Akcia: wu_domain_renewal_completed

Spustí sa po úspešnom obnovení domény.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Platba, ktorá spustila obnovenie. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadáta obnovenia (domain_name, years, customer_id atď.). |
| $result | `array&lt;string,mixed&gt;` | Surové pole výsledku vrátené registrátorom vrátane nového expiry_date. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) na riadku 594
