---
id: wu_handle_user_meta_fields
title: Дзеянне - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Гэты экшэн дазваляе раbyggu-дэўперам плагінаў захаваць метададзеныя карыстальніка рознымі спосабамі, калі гэта неабходна.

## Параметры

| Назва | Тып | Апісан |
|------|------|-------------|
| $meta_repository | `array` | Спіс метапаляў, структураваны па паля => значэнне. |
| $user | `\WP_User` | Объект карыстальніка WordPress. |
| $customer | `\Customer` | Объект кліента Ultimate Multisite. |
| $checkout | `\Checkout` | Клас аплатам (checkout). |

### З версіі

- 2.0.4
### Вынік

Вызначаны ў [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) на 1244-й парэдзе.
