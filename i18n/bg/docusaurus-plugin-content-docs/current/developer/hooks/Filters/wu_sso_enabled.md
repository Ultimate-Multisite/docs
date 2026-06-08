---
id: wu_sso_enabled
title: Филтър - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

Включва/изключва възможността за single-sign-on (SSO) през различни домейни.

Можете да филтрирате това поле, за да изключите напълно single-sign-on или да го активирате само при определени условия.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | Трябва ли SSO да е активиран? `True` за включен, `false` за изключен. |

### Since

- 2.0.11
### Source

Дефинирано в [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) на линия 110


## Returns
Връща дали SSO е активиран или не.
