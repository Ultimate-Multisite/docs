---
id: retrieve_password_title
title: Süzgüç - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Süzgüç: retrieve_password_title

Paroly täzeden düzmek emailiniň temasyny süzgüçden geçirýär.

## Parametrler {#parameters}

| Ady | Görnüşi | Beýany |
|------|------|-------------|
| $title | `string` | Bellenen email ady. |
| $user_login | `string` | Ulanyjy üçin ulanyjy ady. |
| $user_data | `\WP_User` | WP_User obýekti. |

### Şondan bäri {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Çeşme {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) içinde 135-nji setirde kesgitlenen


## Gaýtarýar {#returns}
Bellenen email ady.
