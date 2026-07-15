---
id: wu_checkout_order_created
title: Дзея - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Выклікаецца пасля таго, як заказ па адрахуванні будзе цалкам сфармаваны.

Аддоны могуць выкарыстоўваць гэта для стварэння дадатковых ўзносаў для прадуктаў, якія маюць сабастоянныя цыклы выстаўлення рахункаў.

## Паметрыкі {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Объект кошыка/заказа. |
| $customer | `\WP_Ultimo\Models\Customer` | Кліент. |
| $membership | `\WP_Ultimo\Models\Membership` | Асноўны ўзнос. |
| $payment | `\WP_Ultimo\Models\Payment` | Плацмент. |

### Since {#since}

- 2.5.0
### Source {#source}

Вызначаны ў [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) на 891-й парэдзе.
