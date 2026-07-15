---
id: retrieve_password_title
title: Akayunguruzo - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Akayunguruzo: retrieve_password_title

Kayungurura umutwe w'ubutumwa bwa email bwo gusubizaho ijambo ry'ibanga.

## Ibipimo {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $title | `string` | Umutwe wa email usanzwe. |
| $user_login | `string` | Izina ry'ukoresha ry'umukoresha. |
| $user_data | `\WP_User` | Ikintu cya WP_User. |

### Kuva {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Inkomoko {#source}

Byasobanuwe muri [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) ku murongo wa 135


## Ibyo isubiza {#returns}
Umutwe wa email usanzwe.
