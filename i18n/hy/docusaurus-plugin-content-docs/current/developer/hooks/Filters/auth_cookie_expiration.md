---
id: auth_cookie_expiration
title: Զտիչ - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Ֆիլտր՝ auth_cookie_expiration {#filter-authcookieexpiration}

Ֆիլտրում է նույնականացման cookie-ի ժամկետի ավարտի ժամանակահատվածի տևողությունը։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $length | `int` | Ժամկետի ավարտի ժամանակահատվածի տևողությունը վայրկյաններով։ |
| $user_id | `int` | Օգտատիրոջ ID։ |
| $remember | `bool` | Արդյոք հիշել օգտատիրոջ մուտքը։ Լռելյայն՝ false։ |

### Սկսած {#since}

- 2.8.0
### Աղբյուր {#source}

Սահմանված է [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52)-ում՝ 52-րդ տողում։
