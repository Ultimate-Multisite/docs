---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Elaktívizálódik, amikor egy fizetési státuszon keresztül történő átmenetnek kell elindítania a domain regisztrációt.

## Paraméterek {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | A fizetési objektum. |
| $old_status | `string` | Az előző fizetési státusz az átmenet előtt. |

### Desde {#since}

- 2.0.0
### Forrás {#source}

Definálva van [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) fájlban, 266-sorban.
