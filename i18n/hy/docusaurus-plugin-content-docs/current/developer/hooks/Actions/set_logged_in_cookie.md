---
id: set_logged_in_cookie
title: Գործողություն - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Գործողություն՝ set_logged_in_cookie {#action-setloggedincookie}

Գործարկվում է անմիջապես նախքան մուտք գործած նույնականացման cookie-ի սահմանումը։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $logged_in_cookie | `string` | Մուտք գործած cookie-ի արժեքը։ |
| $expire | `int` | Ժամանակը, երբ մուտքի արտոնյալ ժամանակահատվածը ավարտվում է՝ որպես UNIX timestamp։ Լռելյայնը cookie-ի վավերականության ավարտից 12 ժամ հետո է։ |
| $expiration | `int` | Ժամանակը, երբ մուտք գործած նույնականացման cookie-ի վավերականությունը ավարտվում է՝ որպես UNIX timestamp։ Լռելյայնը այս պահից 14 օր հետո է։ |
| $user_id | `int` | Օգտատիրոջ ID։ |
| $scheme | `string` | Նույնականացման սխեմա։ Լռելյայն՝ 'logged_in'։ |
| $token | `string` | Օգտատիրոջ սեսիայի token-ը, որը պետք է օգտագործվի այս cookie-ի համար։ |

### Սկսած {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Աղբյուր {#source}

Սահմանված է [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141)-ում՝ 141-րդ տողում
