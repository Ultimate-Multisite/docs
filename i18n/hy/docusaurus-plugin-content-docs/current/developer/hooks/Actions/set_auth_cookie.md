---
id: set_auth_cookie
title: Գործողություն - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Գործողություն՝ set_auth_cookie {#action-setauthcookie}

Գործարկվում է անմիջապես նախքան նույնականացման cookie-ի սահմանվելը։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $auth_cookie | `string` | Նույնականացման cookie-ի արժեքը։ |
| $expire | `int` | Ժամանակը, երբ մուտքի արտոնյալ ժամանակահատվածը ավարտվում է՝ որպես UNIX ժամանակադրոշմ։ Լռելյայն՝ cookie-ի ժամկետի ավարտից 12 ժամ անց։ |
| $expiration | `int` | Ժամանակը, երբ նույնականացման cookie-ի ժամկետը ավարտվում է՝ որպես UNIX ժամանակադրոշմ։ Լռելյայն՝ այս պահից 14 օր հետո։ |
| $user_id | `int` | Օգտատիրոջ ID։ |
| $scheme | `string` | Նույնականացման սխեմա։ Արժեքները ներառում են 'auth' կամ 'secure_auth'։ |
| $token | `string` | Օգտատիրոջ session token-ը, որն օգտագործվում է այս cookie-ի համար։ |

### Սկսած {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Աղբյուր {#source}

Սահմանված է [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124)-ում՝ 124-րդ տողում
