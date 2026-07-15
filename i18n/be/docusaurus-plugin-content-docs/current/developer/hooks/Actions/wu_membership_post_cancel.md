---
id: wu_membership_post_cancel
title: Дзеянне - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Дзея: wu_membership_post_cancel

Выклікаецца пасля адмены ўступства.

Гэтая дзея выклікае паведамленне па электроннай пошце аб адмене.

## Паметрыкі {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $membership_id | `int` | ID ўступства. |
| $membership | `\WP_Ultimo\Models\Membership` | Объект ўступства. |

### З {#since}

- 2.0
### Выказгодзе {#source}

Вызначана ў [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) на 2290-й кропцы
