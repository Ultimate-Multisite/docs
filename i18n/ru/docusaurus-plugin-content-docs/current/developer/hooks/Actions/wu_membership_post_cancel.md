---
id: wu_membership_post_cancel
title: Действие - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Действие: wu_membership_post_cancel

Вызывается после отмены членства.

Это вызывает письмо об отмене.

## Параметры

| Name | Type | Description |
|------|------|-------------|
| $membership_id | `int` | Идентификатор членства. |
| $membership | `\WP_Ultimo\Models\Membership` | Объект членства. |

### С версии

- 2.0

### Источник

Определено в [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) на строке 2290
