---
id: wu_magic_link_login
title: Գործողություն - wu_magic_link_login
sidebar_label: wu_magic_link_login
_i18n_hash: 4682ae341c1806000c2d4ca3f0af0b2e
---
# Action: wu_magic_link_login

Գործարկվում է, երբ օգտատերը մուտք է գործում magic link-ի միջոցով։

## Պարամետրեր

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $user_id | `int` | Օգտատիրոջ ID-ն։ |
| $site_id | `int` | Կայքի ID-ն։ |

### Սկսած

- 2.0.0
### Աղբյուր

Սահմանված է [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L240)-ում՝ 240-րդ տողում
