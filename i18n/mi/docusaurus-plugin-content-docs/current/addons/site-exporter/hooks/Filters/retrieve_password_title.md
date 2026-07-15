---
id: retrieve_password_title
title: Tātari - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Tātari: retrieve_password_title

Ka tātari i te kaupapa o te īmēra tautuhi anō kupuhipa.

## Ngā tawhā {#parameters}

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $title | `string` | Taitara īmēra taunoa. |
| $user_login | `string` | Te ingoa kaiwhakamahi mō te kaiwhakamahi. |
| $user_data | `\WP_User` | Ahanoa WP_User. |

### Mai i {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Pūtake {#source}

Kua tautuhia ki [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) i te rārangi 135


## Ngā whakahokinga {#returns}
Taitara īmēra taunoa.
