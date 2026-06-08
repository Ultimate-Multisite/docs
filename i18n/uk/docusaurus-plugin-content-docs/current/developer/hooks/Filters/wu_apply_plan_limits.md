---
id: wu_apply_plan_limits
title: Фільтр - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Фільтр: wu_apply_plan_limits

Дозволяє розробникам плагінів обійти обмеження.

Ви можете використати цей фільтр, щоб запустити довільний код до того, як будуть ініційовані будь-які обмеження. Якщо фільтр повертає будь-яке істинне значення (truthy value), процес продовжиться; якщо він повертає будь-яке хибне значення (falsy value), код повернеться, і жоден із гачків нижче не спрацює.

### Зверніть увагу

- 1.7.0
### Джерело

- Визначено в [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) на рядку 52
- Визначено в [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) на рядку 98
## Повертає
