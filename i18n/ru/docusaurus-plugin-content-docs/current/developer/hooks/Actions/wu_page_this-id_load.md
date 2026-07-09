---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Действие: wu_page_${this->id}_load {#action-wupagethis-idload}

Позволяет разработчикам плагинов добавлять дополнительные хуки к нашим страницам.

## Параметры {#parameters}

| Имя | Тип | Описание |
|------|------|-------------|
| $id | `string` | Идентификатор этой страницы. |
| $page_hook | `string` | Хук страницы этой страницы. |
| $admin_page | `self` | Экземпляр страницы. |

### С версии {#since}

- 1.8.2
- 2.0.4: Добавлен третий параметр: экземпляр страницы.

### Источник {#source}

Определено в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) на строке 332
