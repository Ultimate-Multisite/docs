---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c3ef7f96b45f5b4175d13585a6cca368
---
# Action: wu_page_{$this->id}_before_render {#action-wupagethis-idbeforerender}

Позволява на разработчиците на плагини да добавят допълнително съдържание преди да изведем страницата.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | Идентификаторът (ID) на тази страница. |
| $page | `object` | Обектът на страницата. |

### От {#since}

- 1.8.2
### Източник {#source}

Дефинирано в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L398) на линия 398
