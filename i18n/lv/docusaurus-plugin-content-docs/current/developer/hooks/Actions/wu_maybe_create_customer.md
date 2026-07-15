---
id: wu_maybe_create_customer
title: Darbība - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Darbība: wu_maybe_create_customer

Ļauj plugin izstrādātājiem veikt papildu darbības, kad klients tiek pievienots.

Piemēram, šeit mēs pievienojam āķus klienta-&gt;lietotāja pievienošanai arī galvenajai vietnei.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $customer | `\Customer` | Klients, kas, iespējams, tika izveidots. |
| $checkout | `\Checkout` | Pašreizējā checkout klase. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) 1156. rindā
