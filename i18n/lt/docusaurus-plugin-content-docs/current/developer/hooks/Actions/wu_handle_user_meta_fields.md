---
id: wu_handle_user_meta_fields
title: Veiksmas - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Leidžia plugin kūrėjams išsaugoti naudotojo meta duomenis skirtingais būdais, jei jiems to reikia.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $meta_repository | `array` | Meta laukų sąrašas, struktūruotas kaip key =&gt; value. |
| $user | `\WP_User` | WordPress naudotojo objektas. |
| $customer | `\Customer` | Ultimate Multisite kliento objektas. |
| $checkout | `\Checkout` | Atsiskaitymo klasė. |

### Nuo {#since}

- 2.0.4
### Šaltinis {#source}

Apibrėžta [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) 1244 eilutėje
