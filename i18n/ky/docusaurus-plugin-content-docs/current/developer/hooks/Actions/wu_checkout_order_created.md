---
id: wu_checkout_order_created
title: Аракет - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Аракет: wu_checkout_order_created

Төлөө процесси боюнча буйрутма толук түзүлгөндөн кийин иштейт.

Кошумчалар муну көз карандысыз төлөм циклдери бар өнүмдөр үчүн кошумча мүчөлүктөрдү түзүүгө колдоно алат.

## Параметрлер

| Аталышы | Түрү | Сүрөттөмө |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Себет/буйрутма объекти. |
| $customer | `\WP_Ultimo\Models\Customer` | Кардар. |
| $membership | `\WP_Ultimo\Models\Membership` | Негизги мүчөлүк. |
| $payment | `\WP_Ultimo\Models\Payment` | Төлөм. |

### Чыгарылган версия

- 2.5.0
### Булак

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) ичинде 891-сапта аныкталган
