---
id: wu_checkout_order_created
title: عمل - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# اکشن: wu_checkout_order_created

این اکشن پس از اینکه سفارش پرداخت (checkout order) به طور کامل آماده شد، فعال می‌شود.

افزونه‌ها می‌توانند از این اکشن برای ایجاد عضویت‌های ثانویه برای محصولاتی که دوره‌های صورت‌حساب‌گیری مستقل دارند، استفاده کنند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | آبجکت سبد خرید/سفارش. |
| $customer | `\WP_Ultimo\Models\Customer` | مشتری. |
| $membership | `\WP_Ultimo\Models\Membership` | عضویت اصلی. |
| $payment | `\WP_Ultimo\Models\Payment` | پرداخت. |

### از نسخه {#since}

- 2.5.0
### منبع {#source}

در [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) در خط ۸۹۱ تعریف شده است.
