---
id: retrieve_password_message
title: Шүүлтүүр - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message {#filter-retrievepasswordmessage}

Нууц үг шинэчлэх имэйлийн зурвасын үндсэн хэсгийг шүүнэ.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $message | `string` | Өгөгдмөл имэйлийн зурвас. |
| $key | `string` | Идэвхжүүлэх түлхүүр. |
| $user_login | `string` | Хэрэглэгчийн хэрэглэгчийн нэр. |
| $user_data | `\WP_User` | WP_User объект. |

### Эхэлсэн хувилбар {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Эх сурвалж {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149)-д 149-р мөрөнд тодорхойлсон


## Буцаах утга {#returns}
Өгөгдмөл имэйлийн зурвас.
