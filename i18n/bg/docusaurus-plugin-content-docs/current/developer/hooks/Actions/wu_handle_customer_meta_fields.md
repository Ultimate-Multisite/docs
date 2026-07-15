---
id: wu_handle_customer_meta_fields
title: Действие - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Действие: wu_handle_customer_meta_fields

Позволява на разработчиците на плагини да запазват мета данни по различни начини, ако е необходимо.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $meta_repository | `array` | Списък от мета полета, структуриран като ключ => стойност. |
| $customer | `\Customer` | Обектът за клиента на Ultimate Multisite. |
| $checkout | `\Checkout` | Класът за кеч аут (checkout). |

### От {#since}

- 2.0.0
### Източник {#source}

Дефиниран в [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) на линия 1211
