---
id: wu_magic_link_enforce_user_agent
title: Фільтр - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

Filter, який визначає, чи потрібно застосовувати перевірку за User Agent.

Встановіть значення `false`, щоб токени працювали в різних браузерах/пристроях. Це знижує рівень безпеки, але підвищує зручність використання.

## Параметри {#parameters}

| Ім'я | Тип | Опис |
|------|------|-------------|
| $enforce | `bool` | Чи потрібно застосовувати відповідність User Agent. |

### Починаючи з {#since}

- 2.0.0
### Джерело {#source}

Визначено у [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) на рядку 410.
