---
id: wu_handle_customer_meta_fields
title: Toiminto - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Toiminto: wu_handle_customer_meta_fields

Salli plugin-kehittäjien tallentaa metatietoja eri tavoilla, jos heidän tarvitsee.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $meta_repository | `array` | Metakenttien luettelo, rakenteessa avain =&gt; arvo. |
| $customer | `\Customer` | Ultimate Multisite -asiakasobjekti. |
| $checkout | `\Checkout` | Checkout-luokka. |

### Alkaen versiosta {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) rivillä 1211
