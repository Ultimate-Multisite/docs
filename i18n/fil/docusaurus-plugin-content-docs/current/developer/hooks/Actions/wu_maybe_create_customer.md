---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

Pinapayagan nito ang mga developer ng plugin na gumawa ng karagdagang aksyon kapag nadagdag ang customer.

Dito, halimbawa, namin idinadagdag ang mga hooks para maidagdag din ang customer->user sa pangunahing site.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | Ang customer na maaaring nabuo. |
| $checkout | `\Checkout` | Ang kasalukuyang class ng checkout. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) at line 1156
