---
id: wu_handle_user_meta_fields
title: Akcija - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Akcija: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Omogućava programerima pluginova da sačuvaju podatke korisnika (meta podatke) na različite načine, ako je to potrebno.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $meta_repository | `array` | Lista meta polja, strukturirana po ključ => vrijednost. |
| $user | `\WP_User` | Objekt korisnika WordPressa. |
| $customer | `\Customer` | Objekt klijenta Ultimate Multisite-a. |
| $checkout | `\Checkout` | Klasa za naplatu (checkout class). |

### Od {#since}

- 2.0.4
### Izvor {#source}

Definisano u [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) na liniji 1244
