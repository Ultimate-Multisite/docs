---
id: wu_handle_customer_meta_fields
title: Veiksmas - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Veiksmas: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

Leidžia plugin kūrėjams išsaugoti meta duomenis skirtingais būdais, jei jiems to reikia.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $meta_repository | `array` | Meta laukų sąrašas, struktūruotas kaip key =&gt; value. |
| $customer | `\Customer` | Ultimate Multisite kliento objektas. |
| $checkout | `\Checkout` | Atsiskaitymo klasė. |

### Nuo {#since}

- 2.0.0
### Šaltinis {#source}

Apibrėžta [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) 1211 eilutėje
