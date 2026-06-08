---
id: wu_maybe_create_customer
title: Acțiune - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Acțiune: wu_maybe_create_customer

Permite dezvoltatorilor de plugin să adauge funcționalități suplimentare atunci când clientul este adăugat.

Aici adăugăm hook-urile pentru a adăuga și clientul->utilizatorul pe site-ul principal, de exemplu.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $customer | `\Customer` | Clientul care a fi putut fi creat. |
| $checkout | `\Checkout` | Clasa curentă de checkout. |

### De la

- 2.0.0
### Sursă

Definit în [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) la linia 1156
