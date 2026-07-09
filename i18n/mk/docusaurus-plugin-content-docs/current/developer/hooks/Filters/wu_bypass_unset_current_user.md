---
id: wu_bypass_unset_current_user
title: Филтер - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Филтер: wu_bypass_unset_current_user

Дозволува на програмерите да го заобиколат кодот за unset на тековниот корисник.

Враќање што било друго освен null ќе го заобиколи unset на тековниот најавен корисник. Ова може да биде корисно во некои сценарија, на пример, кога се работи со под-сајтови што се користат како администраторски панели.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null за продолжување, што било друго за да се заобиколи. |
| $current_user | `false\|\WP_User` | Објектот на тековниот корисник. |

### Од верзија

- 2.0.11
### Извор

Дефинирано во [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) на линија 221


## Враќања
