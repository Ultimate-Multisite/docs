---
id: wu_domain_seller_complete_registration
title: Veiksmas - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Veiksmas: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

Suveikia, kai mokėjimas pereina į būseną, kuri turėtų inicijuoti domeno registraciją.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Mokėjimo objektas. |
| $old_status | `string` | Ankstesnė mokėjimo būsena prieš perėjimą. |

### Nuo {#since}

- 2.0.0
### Šaltinis {#source}

Apibrėžta [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) 266 eilutėje
