---
id: retrieve_password_message
title: Àlẹmọ - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Àlẹmọ: retrieve_password_message

Ó ń ṣe àlẹmọ ara ìfiránṣẹ́ imeeli ìtúntò ọ̀rọ̀ aṣínà.

## Àwọn Paramita {#parameters}

| Orúkọ | Irú | Àpèjúwe |
|------|------|-------------|
| $message | `string` | Ìfiránṣẹ́ imeeli aiyipada. |
| $key | `string` | Kọ́kọ́rọ́ ìmúṣiṣẹ́. |
| $user_login | `string` | Orúkọ aṣàmúlò fún aṣàmúlò náà. |
| $user_data | `\WP_User` | Ohun WP_User. |

### Láti {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Orísun {#source}

Ti ṣàlàyé nínú [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ní ila 149


## Àwọn ohun tí ó dá padà {#returns}
Ìfiránṣẹ́ imeeli aiyipada.
