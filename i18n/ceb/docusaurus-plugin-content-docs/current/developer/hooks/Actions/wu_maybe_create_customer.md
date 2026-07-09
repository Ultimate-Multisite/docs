---
id: wu_maybe_create_customer
title: Aksyon - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Aksyon: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Tugoti ang mga tig-ugmad sa plugin nga mobuhat og dugang nga mga butang kung madugang ang kustomer.

Ania diin namo idugang ang mga hook para sa pagdugang sa customer-&gt;user ngadto usab sa pangunang sityo, pananglitan.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $customer | `\Customer` | Ang kustomer nga tingali nahimo. |
| $checkout | `\Checkout` | Ang kasamtangang klase sa proseso sa pagpalit. |

### Sukad {#since}

- 2.0.0
### Tinubdan {#source}

Gihubit sa [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) sa linya 1156
