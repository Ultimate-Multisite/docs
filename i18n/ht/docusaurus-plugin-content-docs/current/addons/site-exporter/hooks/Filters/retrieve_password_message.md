---
id: retrieve_password_message
title: Filtè - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filtè: retrieve_password_message

Filtre kò mesaj imel reyinisyalizasyon modpas la.

## Paramèt {#parameters}

| Non | Kalite | Deskripsyon |
|------|------|-------------|
| $message | `string` | Mesaj imel default. |
| $key | `string` | Kle aktivasyon an. |
| $user_login | `string` | Non itilizatè pou itilizatè a. |
| $user_data | `\WP_User` | Objè WP_User. |

### Depi {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Sous {#source}

Defini nan [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) nan liy 149


## Retounen {#returns}
Mesaj imel default.
