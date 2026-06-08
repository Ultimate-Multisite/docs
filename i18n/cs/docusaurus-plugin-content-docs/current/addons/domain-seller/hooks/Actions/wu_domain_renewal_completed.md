---
id: wu_domain_renewal_completed
title: Akce - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Spouští se po úspěšném obnovení domény.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Úhrada, která vyvolala obnovu. |
| $renewal_data | `array<string,mixed>` | Metainformace o obnově (jméno domény, roky, ID zákazníka atd.). |
| $result | `array<string,mixed>` | Rohový pole výsledků vrácené registrar odkazující na nové datum expirace. |

### Od

- 2.0.0
### Zdroj

Definováno v [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) na řádku 594
