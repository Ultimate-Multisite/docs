---
id: retrieve_password_message
title: Shaandheeye - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Shaandheeye: retrieve_password_message {#filter-retrievepasswordmessage}

Wuxuu shaandheeyaa jirka farriinta iimaylka dib-u-dejinta erayga sirta ah.

## Xuduudaha {#parameters}

| Magac | Nooc | Sharaxaad |
|------|------|-------------|
| $message | `string` | Farriinta iimaylka caadiga ah. |
| $key | `string` | Furaha hawlgelinta. |
| $user_login | `string` | Magaca isticmaalaha ee isticmaalaha. |
| $user_data | `\WP_User` | Shayga WP_User. |

### Laga bilaabo {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Isha {#source}

Waxaa lagu qeexay [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) safka 149


## Soo celinta {#returns}
Farriinta iimaylka caadiga ah.
