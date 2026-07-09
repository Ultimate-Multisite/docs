---
id: wu_maybe_create_customer
title: عمل - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# عمل: wu_maybe_create_customer {#action-wumaybecreatecustomer}

plugin ڊولپرن کي اجازت ڏيو ته جڏهن گراهڪ شامل ٿئي ته اضافي ڪم ڪري سگهن.

هتي اهو هنڌ آهي جتي اسين گراهڪ-&gt;user کي مکيه سائيٽ ۾ پڻ شامل ڪرڻ لاءِ hooks شامل ڪريون ٿا، مثال طور.

## پيراميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $customer | `\Customer` | اهو گراهڪ جيڪو شايد ٺاهيو ويو. |
| $checkout | `\Checkout` | موجوده checkout ڪلاس. |

### کان وٺي {#since}

- 2.0.0
### ذريعو {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) ۾ لائين 1156 تي بيان ٿيل آهي
