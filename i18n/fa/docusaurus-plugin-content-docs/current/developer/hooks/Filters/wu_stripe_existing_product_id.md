---
id: wu_stripe_existing_product_id
title: فیلتر - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# فیلتر: wu_stripe_existing_product_id

این فیلتر، شناسه محصولی را که باید بررسی شود، فیلتر می‌کند. اگر این شناسه وجود داشته باشد، اشتراک جدید از همین محصول استفاده خواهد کرد.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $product_id | `string` | شناسه محصول Stripe که باید بررسی شود. |
| $name | `string` | نام محصول. |

### منبع {#source}

در خط ۲۷۴۱، در [inc/gateways/class-base-stripe-gateway.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) تعریف شده است.
