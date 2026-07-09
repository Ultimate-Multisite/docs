---
id: retrieve_password_message
title: Szűrő - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Szűrő: retrieve_password_message {#filter-retrievepasswordmessage}

Szűrőzi a jelszó visszaállítási e-mail üzenetének tartalmát.

## Paraméterek {#parameters}

| Név | Típus | Leírás |
|------|------|-------------|
| $message | `string` | Az alapértelmezett e-mail üzenet. |
| $key | `string` | Az aktivációs kulcs. |
| $user_login | `string` | Az felhasználónév. |
| $user_data | `\WP_User` | WP_User objektum. |

### Megjelenés {#since}

- 2.8.0
- 4.1.0: Hozzáadva <code>$user_login</code> és <code>$user_data</code> paramétereit.

### Forrás {#source}

Meghatározva a [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) fájlban, 149-sorban.

## Visszaadja {#returns}
Az alapértelmezett e-mail üzenet.
