---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filtre: retrieve_password_message

Şifre sıfırlama e-postasının mesaj gövdesini filtreler.

## Parametreler

| Ad | Tür | Açıklama |
|------|------|-------------|
| $message | `string` | Varsayılan e-posta mesajı. |
| $key | `string` | Aktivasyon anahtarı. |
| $user_login | `string` | Kullanıcının kullanıcı adı. |
| $user_data | `\WP_User` | WP_User nesnesi. |

### Versiyon

- 2.8.0
- 4.1.0: `<code>$user_login</code>` ve `<code>$user_data</code>` parametreleri eklendi.
### Kaynak

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) dosyasının 149. satırında tanımlanmıştır.


## Dönüş Değeri
Varsayılan e-posta mesajı.
