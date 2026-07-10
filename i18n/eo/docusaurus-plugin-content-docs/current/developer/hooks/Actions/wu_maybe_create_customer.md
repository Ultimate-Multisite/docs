---
id: wu_maybe_create_customer
title: Ago - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Permesu al plugin-programistoj fari pliajn aferojn kiam la kliento estas aldonita.

Jen kie ni aldonas la hooks por aldoni la customer-&gt;user ankaŭ al la ĉefa retejo, ekzemple.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $customer | `\Customer` | La kliento kiu eble estis kreita. |
| $checkout | `\Checkout` | La aktuala pagproceza klaso. |

### Ekde {#since}

- 2.0.0
### Fonto {#source}

Difinita en [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) ĉe linio 1156
