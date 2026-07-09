---
id: wu_domain_seller_complete_registration
title: Aksi - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Aksi: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

Mlaku nalika pambayaran owah menyang status sing kudu micu registrasi domain.

## Paramèter {#parameters}

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objek pambayaran. |
| $old_status | `string` | Status pambayaran sadurungé sadurunge transisi. |

### Wiwit {#since}

- 2.0.0
### Sumber {#source}

Ditetepaké ing [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) ing baris 266
