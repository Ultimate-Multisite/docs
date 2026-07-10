---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Plugin developers ko ijazat deta hai ke jab customer add ho to woh mazeed kaam kar saken.

Masalan, yahan hum woh hooks add karte hain jisse customer ko user ke taur par main site par bhi add kiya ja sake.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | Woh customer jo shayad banaya gaya ho. |
| $checkout | `\Checkout` | Maujooda checkout class. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) at line 1156
