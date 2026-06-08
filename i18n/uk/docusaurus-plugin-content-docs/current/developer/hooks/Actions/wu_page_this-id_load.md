---
id: wu_page_this-id_load
title: 'Дія - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

Дозволяє розробникам плагінів додавати додаткові хуки до наших сторінок.

## Параметри

| Name | Type | Опис |
|------|------|-------------|
| $id | `string` | ID цієї сторінки. |
| $page_hook | `string` | Хук сторінки цієї сторінки. |
| $admin_page | `self` | Екземпляр сторінки. |

### Починаючи з

- 1.8.2
- 2.0.4: Додано третій параметр: екземпляр сторінки.
### Джерело

Визначено у [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) на рядку 332
