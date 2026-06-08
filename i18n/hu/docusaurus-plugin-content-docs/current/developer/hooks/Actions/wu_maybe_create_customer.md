---
id: wu_maybe_create_customer
title: Akció - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

Lehetővé teszi a plugin fejlesztőknek, hogy további funkciókat implementáljanak, amikor a vásárló hozzáadása történik.

Itt adjuk hozzá a hurok (hooks) helyét, amelyek például a vásárló-táblázatot a fő oldalra is adják hozzá.

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $customer | `\Customer` | A vásárló, akit esetleg létrehozták. |
| $checkout | `\Checkout` | Az aktuális checkout osztály. |

### Since

- 2.0.0
### Source

Definíciója található [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) fájlban, 1156-sorban.
