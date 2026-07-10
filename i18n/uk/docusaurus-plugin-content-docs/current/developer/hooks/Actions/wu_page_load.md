---
id: wu_page_load
title: Дія - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load {#action-wupageload}

Дозволяє розробникам плагінів додавати додаткові хуки до наших сторінок.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ID цієї сторінки. |
| $page_hook | `string` | Хук сторінки цієї сторінки. |
| $admin_page | `self` | Екземпляр сторінки. |

### Since {#since}

- 1.8.2
- 2.0.4: Додано третій параметр: екземпляр сторінки.
### Source {#source}

Визначено в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) на рядку 318
