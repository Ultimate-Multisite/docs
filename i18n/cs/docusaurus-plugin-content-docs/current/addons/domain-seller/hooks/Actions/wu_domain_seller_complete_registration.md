---
id: wu_domain_seller_complete_registration
title: Akce - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Akce: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

Vyvolá se, když platba přejde do stavu, který by měl spustit registraci domény.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objekt platby. |
| $old_status | `string` | Předchozí stav platby před přechodem. |

### Od verze {#since}

- 2.0.0
### Zdroj {#source}

Definováno v [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) na řádku 266
