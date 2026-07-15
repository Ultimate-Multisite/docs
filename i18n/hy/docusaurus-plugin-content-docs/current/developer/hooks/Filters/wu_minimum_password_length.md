---
id: wu_minimum_password_length
title: Ֆիլտր - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Զտում է գաղտնաբառի նվազագույն երկարությունը։

Կիրառվում է միայն, երբ wu_enforce_password_rules-ը true է։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $min_length | `int` | Գաղտնաբառի նվազագույն երկարությունը։ Լռելյայն՝ 12 (համապատասխանում է Defender Pro-ին)։ |
| $defender_active | `bool` | Արդյոք Defender Pro Strong Password-ը ակտիվ է։ |

### Սկսած {#since}

- 2.4.0
### Աղբյուր {#source}

Սահմանված է [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) ֆայլում՝ 543-րդ տողում։
