---
id: wu_page_this-id_load
title: 'Գործողություն - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Թույլ է տալիս պլագինների մշակողներին ավելացնել լրացուցիչ հուկեր մեր էջերին։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $id | `string` | Այս էջի ID-ն։ |
| $page_hook | `string` | Այս էջի էջի հուկը։ |
| $admin_page | `self` | Էջի օրինակը։ |

### Սկսած {#since}

- 1.8.2
- 2.0.4: Ավելացվել է երրորդ պարամետրը՝ էջի օրինակը։
### Աղբյուր {#source}

Սահմանված է [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332)-ում՝ 332-րդ տողում
