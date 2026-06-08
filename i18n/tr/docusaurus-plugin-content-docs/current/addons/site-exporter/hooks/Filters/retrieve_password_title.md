---
id: retrieve_password_title
title: Filtre - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filtre: retrieve_password_title

Şifre sıfırlama e-postasının konusunu filtreler.

## Parametreler

| Ad | Tür | Açıklama |
|------|------|-------------|
| $title | `string` | Varsayılan e-posta başlığı. |
| $user_login | `string` | Kullanıcının kullanıcı adı. |
| $user_data | `\WP_User` | WP_User nesnesi. |

### Kullanılmaya Başladığı Versiyon

- 2.8.0
- 4.4.0: <code>$user_login</code> ve <code>$user_data</code> parametreleri eklendi.
### Kaynak

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) dosyasındaki 135. satırda tanımlanmıştır.


## Dönüş Değeri
Varsayılan e-posta başlığı.
