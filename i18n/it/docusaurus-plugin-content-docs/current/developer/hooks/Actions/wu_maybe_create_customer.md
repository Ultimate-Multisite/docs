---
id: wu_maybe_create_customer
title: Azione - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Allow plugin developers to do additional stuff when the customer is added.

Here's where we add the hooks for adding the customer->user to the main site as well, for example.

## Parameters {#parameters}

| Name | Type | Descrizione |
|------|------|-------------|
| $customer | `\Customer` | Il cliente che è stato forse creato. |
| $checkout | `\Checkout` | La classe checkout corrente. |

### Da {#since}

- 2.0.0

### Fonte {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) at line 1156
