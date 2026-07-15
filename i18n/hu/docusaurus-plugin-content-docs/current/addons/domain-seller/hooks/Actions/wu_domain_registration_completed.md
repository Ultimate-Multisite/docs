---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Elindul, amikor egy domain sikeresen regisztrált.

## Paraméterek {#parameters}

| Neve | Típusa | Leírás |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Az a fizetés, ami a regisztrációt indította el. |
| $registration_data | `array&lt;string,mixed&gt;` | Regisztrációs metadaták (domain_name, provider_id, years, expiry_date stb.). |
| $result | `array&lt;string,mixed&gt;` | Az a hamis (eredeti) eredmény tömb, amit a regisztrátor ad vissza. |

### Desde {#since}

- 2.0.0
### Forrás {#source}

Meghatározva a [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) fájlban, 1204-sorban.
