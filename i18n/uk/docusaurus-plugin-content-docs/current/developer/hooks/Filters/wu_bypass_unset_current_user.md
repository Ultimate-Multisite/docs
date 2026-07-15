---
id: wu_bypass_unset_current_user
title: Фільтр - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Дозволяє розробникам обійти код, який скидає поточного користувача.

Повернення будь-чого, крім `null`, обійде скидання поточного авторизованого користувача. Це може бути корисно в певних сценаріях, наприклад, при роботі з підсайтами, які використовуються як адміністративні панелі.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | `null` для пропуску, будь-що інше для обходу. |
| $current_user | `false\|\WP_User` | Об'єкт поточного користувача. |

### Since {#since}

- 2.0.11
### Source {#source}

Визначено в [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) на рядку 221

## Returns {#returns}
