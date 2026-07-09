---
id: wu_apply_signup_fee
title: Զտիչ - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Ֆիլտր՝ wu_apply_signup_fee

Ֆիլտրում է՝ արդյոք գրանցման վճարը պետք է կիրառվի, թե ոչ։

## Պարամետրեր

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $add_signup_fee | `bool` | Ավելացնե՞լ գրանցման վճարը, թե ոչ։ |
| $product | `object` | Անդամակցության մակարդակի օբյեկտ։ |
| $this | `\WP_Ultimo\Checkout\Cart` | Գրանցման օբյեկտ։ |

### Սկսած

- 3.1
### Աղբյուր

Սահմանված է [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769)-ում՝ 1769-րդ տողում
