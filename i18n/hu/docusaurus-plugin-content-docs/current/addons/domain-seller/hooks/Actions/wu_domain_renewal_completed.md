---
id: wu_domain_renewal_completed
title: Akció - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Elkettődik, ha egy domain sikeresen megújításra került.

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Az a fizetés, ami a megújítást indította el. |
| $renewal_data | `array&lt;string,mixed&gt;` | Megújítási metadaták (domain_name, years, customer_id stb.). |
| $result | `array&lt;string,mixed&gt;` | A regisztrátortól érkező, eredeti eredmény tömb, amely tartalmazza az új `expiry_date`-et. |

### Elkövetkezés

- 2.0.0
### Forrás

Meghatározva a [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) fájlban, 594-sorban.
