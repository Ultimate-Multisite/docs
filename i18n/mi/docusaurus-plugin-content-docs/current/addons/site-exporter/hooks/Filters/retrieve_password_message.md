---
id: retrieve_password_message
title: Tātari - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Tātari: retrieve_password_message

Ka tātari i te tinana karere o te mēra tautuhi kupuhipa.

## Tawhā

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $message | `string` | Karere mēra taunoa. |
| $key | `string` | Te kī whakahohe. |
| $user_login | `string` | Te ingoa kaiwhakamahi mō te kaiwhakamahi. |
| $user_data | `\WP_User` | Ahanoa WP_User. |

### Mai i

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Pūtake

Kua tautuhia i [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) i te rārangi 149


## Whakahoki
Karere mēra taunoa.
