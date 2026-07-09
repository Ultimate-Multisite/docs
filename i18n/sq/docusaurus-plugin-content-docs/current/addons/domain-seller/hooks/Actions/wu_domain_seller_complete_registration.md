---
id: wu_domain_seller_complete_registration
title: Veprim - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Veprim: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

Aktivizohet kur një pagesë kalon në një status që duhet të nxisë regjistrimin e domenit.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objekti i pagesës. |
| $old_status | `string` | Statusi i mëparshëm i pagesës para kalimit. |

### Që nga {#since}

- 2.0.0
### Burimi {#source}

Përcaktuar në [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) në rreshtin 266
