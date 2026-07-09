---
id: wu_maybe_create_customer
title: Գործողություն - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Գործողություն: wu_maybe_create_customer

Թույլ է տալիս plugin-ի մշակողներին կատարել լրացուցիչ գործողություններ, երբ հաճախորդը ավելացվում է։

Օրինակ՝ այստեղ ենք ավելացնում hooks՝ հաճախորդ-&gt;օգտվողին հիմնական կայքին նույնպես ավելացնելու համար։

## Պարամետրեր

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $customer | `\Customer` | Հաճախորդը, որը հնարավոր է ստեղծվել է։ |
| $checkout | `\Checkout` | Ընթացիկ checkout դասը։ |

### Սկսած

- 2.0.0
### Աղբյուր

Սահմանված է [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156)-ում՝ 1156-րդ տողում
