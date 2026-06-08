---
id: wu_maybe_create_customer
title: Hərəkət - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

Plugin developerlərə müştəri əlavə edildikdə əlavə əməliyyatlar yerinə yetirməyə imkan verir.

Məsələn, müştəridən istifadəçi (user) məlumatını əsas sayta da əlavə etmək üçün hookları burada əlavə edirik.

## Parametrlər

| Ad | Növ | Təsvir |
|------|------|-------------|
| $customer | `\Customer` | Ola bilər ki, yaradılan müştəri. |
| $checkout | `\Checkout` | Hazırkı checkout sinifi. |

### Nə vaxtdan

- 2.0.0
### Mənbə

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) at line 1156
