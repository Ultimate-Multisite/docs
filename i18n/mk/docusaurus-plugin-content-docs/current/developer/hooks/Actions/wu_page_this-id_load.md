---
id: wu_page_this-id_load
title: 'Дејство - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Дозволува на развивачите на plugin да додаваат дополнителни куки на нашите страници.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $id | `string` | ID на оваа страница. |
| $page_hook | `string` | Куката на страницата за оваа страница. |
| $admin_page | `self` | Инстанцата на страницата. |

### Од верзија {#since}

- 1.8.2
- 2.0.4: Додаден е трет параметар: инстанцата на страницата.
### Извор {#source}

Дефинирано во [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) на линија 332
