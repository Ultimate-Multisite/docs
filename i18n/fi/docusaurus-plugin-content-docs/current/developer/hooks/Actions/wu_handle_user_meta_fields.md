---
id: wu_handle_user_meta_fields
title: Toiminto - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Salli plugin-kehittäjien tallentaa käyttäjän meta data eri tavoilla, jos heidän tarvitsee.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $meta_repository | `array` | Meta fields -luettelo, jäsennetty muodossa key =&gt; value. |
| $user | `\WP_User` | WordPress-käyttäjäobjekti. |
| $customer | `\Customer` | Ultimate Multisite -asiakasobjekti. |
| $checkout | `\Checkout` | Checkout-luokka. |

### Alkaen {#since}

- 2.0.4
### Lähde {#source}

Määritelty tiedostossa [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) rivillä 1244
