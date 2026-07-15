---
id: set_auth_cookie
title: Ìṣe - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Ó máa ń ṣiṣẹ́ lẹ́sẹ̀kẹsẹ̀ ṣáájú kí a tó ṣètò cookie ìfàṣẹsí.

## Àwọn Parameter {#parameters}

| Orúkọ | Type | Àpèjúwe |
|------|------|-------------|
| $auth_cookie | `string` | Iye cookie ìfàṣẹsí. |
| $expire | `int` | Àkókò tí àkókò àánú login máa parí gẹ́gẹ́ bí UNIX timestamp. Ìbẹ̀rẹ̀ jẹ́ wákàtí 12 lẹ́yìn àkókò ìparí cookie náà. |
| $expiration | `int` | Àkókò tí cookie ìfàṣẹsí máa parí gẹ́gẹ́ bí UNIX timestamp. Ìbẹ̀rẹ̀ jẹ́ ọjọ́ 14 láti báyìí. |
| $user_id | `int` | ID oníṣe. |
| $scheme | `string` | Ètò ìfàṣẹsí. Àwọn iye ní 'auth' tàbí 'secure_auth'. |
| $token | `string` | session token oníṣe láti lò fún cookie yìí. |

### Láti {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Orísun {#source}

A ṣàlàyé rẹ̀ nínú [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ní laini 124
