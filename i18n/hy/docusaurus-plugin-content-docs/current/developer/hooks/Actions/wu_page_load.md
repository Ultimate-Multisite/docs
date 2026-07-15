---
id: wu_page_load
title: Գործողություն - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Գործողություն: wu_page_load

Թույլ է տալիս plugin մշակողներին մեր էջերին ավելացնել լրացուցիչ hooks։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $id | `string` | Այս էջի ID-ն։ |
| $page_hook | `string` | Այս էջի էջի hook-ը։ |
| $admin_page | `self` | Էջի օրինակը։ |

### Սկսած {#since}

- 1.8.2
- 2.0.4: Ավելացվել է երրորդ պարամետրը՝ էջի օրինակը։
### Աղբյուր {#source}

Սահմանված է [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318)-ում՝ 318-րդ տողում
