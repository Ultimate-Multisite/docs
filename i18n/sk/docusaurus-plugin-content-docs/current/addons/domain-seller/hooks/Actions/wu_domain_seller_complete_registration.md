---
id: wu_domain_seller_complete_registration
title: Akcia - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Spustí sa, keď platba prejde do stavu, ktorý má spustiť registráciu domény.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objekt platby. |
| $old_status | `string` | Predchádzajúci stav platby pred prechodom. |

### Od verzie

- 2.0.0
### Zdroj

Definované v [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) na riadku 266
