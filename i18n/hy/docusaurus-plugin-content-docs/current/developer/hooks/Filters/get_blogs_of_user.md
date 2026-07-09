---
id: get_blogs_of_user
title: Զտիչ - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Զտիչ՝ get_blogs_of_user

Այստեղ կրկնում է սկզբնական WP զտիչը՝ ապահովության համար։

Զտում է այն կայքերի ցանկը, որոնց օգտատերը պատկանում է։

## Պարամետրեր

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $sites | `object[]` | Օգտատիրոջը պատկանող կայքերի օբյեկտների զանգված։ |
| $user_id | `int` | Օգտատիրոջ ID։ |
| $all | `bool` | Արդյոք վերադարձվող կայքերի զանգվածը պետք է պարունակի բոլոր կայքերը, ներառյալ նրանք, որոնք նշված են որպես 'deleted', 'archived' կամ 'spam'։ Լռելյայն՝ false։ |

### Սկսած

- 2.0.11
### Աղբյուր

Սահմանված է [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851)-ում՝ 851-րդ տողում
