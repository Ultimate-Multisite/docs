---
id: wu_magic_link_login
title: Дія - wu_magic_link_login
sidebar_label: wu_magic_link_login
_i18n_hash: 4682ae341c1806000c2d4ca3f0af0b2e
---
# Action: wu_magic_link_login {#action-wumagiclinklogin}

Виконується після того, як користувач увійшов за допомогою магічного посилання.

## Параметри {#parameters}

| Ім'я | Тип | Опис |
|------|------|-------------|
| $user_id | `int` | ID користувача. |
| $site_id | `int` | ID сайту. |

### З версії {#since}

- 2.0.0
### Джерело {#source}

Визначено у [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L240) на рядку 240
