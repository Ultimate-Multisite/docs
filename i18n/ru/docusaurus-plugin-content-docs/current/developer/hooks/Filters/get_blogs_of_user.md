---
id: get_blogs_of_user
title: Фильтр - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Фильтр: get_blogs_of_user

Реплицирует оригинальный WP Filter здесь, для дополнительной уверенности.

Фильтрует список сайтов, к которым принадлежит пользователь.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $sites | `object[]` | Массив объектов сайтов, принадлежащих пользователю. |
| $user_id | `int` | ID пользователя. |
| $all | `bool` | Нужно ли возвращаемый массив сайтов содержать все сайты, включая те, которые помечены как 'удалённые', 'архивированные' или 'спам'. По умолчанию false. |

### С версии

- 2.0.11

### Источник

Определено в [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) на строке 851
