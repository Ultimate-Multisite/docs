---
id: wu_maybe_create_customer
title: "Action - wu_maybe_create_customer"
sidebar_label: "wu_maybe_create_customer"
---

# Action: wu_maybe_create_customer

Allow plugin developers to do additional stuff when the customer is added.

Here's where we add the hooks for adding the customer-&gt;user to the main site as well, for example.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | The customer that was maybe created. |
| $checkout | `\Checkout` | The current checkout class. |

### Since

- 2.0.0
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) at line 1156

