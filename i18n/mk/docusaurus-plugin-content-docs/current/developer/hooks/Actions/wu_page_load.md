---
id: wu_page_load
title: Акција - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Дејство: wu_page_load

Овозможува на развивачите на plugin-и да додаваат дополнителни hooks на нашите страници.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $id | `string` | ID на оваа страница. |
| $page_hook | `string` | Page hook на оваа страница. |
| $admin_page | `self` | Инстанцата на страницата. |

### Од верзија

- 1.8.2
- 2.0.4: Додаден трет параметар: инстанцата на страницата.
### Извор

Дефинирано во [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) на линија 318
