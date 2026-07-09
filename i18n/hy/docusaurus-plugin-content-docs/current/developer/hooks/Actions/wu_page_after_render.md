---
id: wu_page_after_render
title: Գործողություն - wu_page_after_render
sidebar_label: wu_page_after_render
_i18n_hash: df5c3e7ef27ab39b167189e082ed729b
---
# Գործողություն՝ wu_page_after_render {#action-wupageafterrender}

Թույլ է տալիս plugin մշակողներին ավելացնել լրացուցիչ բովանդակություն այն բանից հետո, երբ մենք տպում ենք էջը

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $page_id | `string` | Այս էջի id-ն |
| $page | `object` | Էջի օբյեկտը։ |

### Սկսած {#since}

- 1.8.2
### Աղբյուր {#source}

Սահմանված է [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L413)-ում՝ 413-րդ տողում
