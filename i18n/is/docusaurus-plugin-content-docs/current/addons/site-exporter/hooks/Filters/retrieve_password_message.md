---
id: retrieve_password_message
title: Sía - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Sía: retrieve_password_message

Síar meginmál skilaboða í tölvupósti fyrir endurstillingu lykilorðs.

## Færibreytur

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $message | `string` | Sjálfgefin tölvupóstskilaboð. |
| $key | `string` | Virkjunarlykillinn. |
| $user_login | `string` | Notandanafnið fyrir notandann. |
| $user_data | `\WP_User` | WP_User hlutur. |

### Frá útgáfu

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Uppruni

Skilgreint í [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) í línu 149


## Skilar
Sjálfgefin tölvupóstskilaboð.
