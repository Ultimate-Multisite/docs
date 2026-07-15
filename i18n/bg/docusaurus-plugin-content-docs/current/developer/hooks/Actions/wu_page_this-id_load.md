---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

Позволява на разработчиците на плагини да добавят допълнителни хукове към нашите страници.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $id | `string` | ID на тази страница. |
| $page_hook | `string` | Хук на страницата на тази страница. |
| $admin_page | `self` | Инстанцията на страницата. |

### От {#since}

- 1.8.2
- 2.0.4: Добавен трети параметър: инстанцията на страницата.
### Източник {#source}

Дефиниран в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) на ред 332
