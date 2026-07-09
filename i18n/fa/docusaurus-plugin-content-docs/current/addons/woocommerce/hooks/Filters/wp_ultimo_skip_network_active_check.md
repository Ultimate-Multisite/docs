---
id: wp_ultimo_skip_network_active_check
title: فیلتر - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# فیلتر: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

این فیلتر به توسعه‌دهندگان اجازه می‌دهد تا بررسی فعال بودن شبکه (network activation check) را نادیده بگیرند (short-circuit کنند).

این کار زمانی مفید است که از راه‌اندازی‌های سفارشی و مبتنی بر کامپوزر (composer-based) استفاده می‌کنید، مانند Bedrock، که در این حالت استفاده از پلاگین‌ها به عنوان mu-plugins امری عادی است.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $skip_network_activation_check | `bool` | اگر می‌خواهیم بررسی را نادیده بگیریم یا خیر، پیش‌فرض آن `false` است. |

### از زمان {#since}

- 2.0.0
### منبع {#source}

در [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) در خط ۲۷۲ تعریف شده است.


## مقدار بازگشتی {#returns}
اگر مایلید بررسی را نادیده بگیرید، `true` و در غیر این صورت `false` برمی‌گرداند.
