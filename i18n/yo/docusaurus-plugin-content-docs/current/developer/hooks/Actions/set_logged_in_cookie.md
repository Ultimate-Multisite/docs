---
id: set_logged_in_cookie
title: Ìṣe - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

Ó máa ń ṣiṣẹ́ lẹ́sẹ̀kẹsẹ̀ ṣáájú kí cookie ìjẹ́rìísí logged-in tó ṣètò.

## Àwọn Parameter

| Orúkọ | Type | Àpèjúwe |
|------|------|-------------|
| $logged_in_cookie | `string` | Iye cookie logged-in. |
| $expire | `int` | Àkókò tí àkókò àánú ìwọlé máa parí gẹ́gẹ́ bí UNIX timestamp. Àìyípadà jẹ́ wákàtí 12 lẹ́yìn àkókò ìparí cookie náà. |
| $expiration | `int` | Àkókò tí cookie ìjẹ́rìísí logged-in máa parí gẹ́gẹ́ bí UNIX timestamp. Àìyípadà jẹ́ ọjọ́ 14 láti ìsinsìnyí. |
| $user_id | `int` | ID oníṣe. |
| $scheme | `string` | Ètò ìjẹ́rìísí. Àìyípadà 'logged_in'. |
| $token | `string` | token session oníṣe láti lò fún cookie yìí. |

### Láti ìgbà

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Orísun

Ti ṣàlàyé nínú [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) ní laini 141
