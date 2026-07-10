---
id: wu_page_added
title: Գործողություն - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Գործողություն: wu_page_added {#action-wupageadded}

Թույլ է տալիս plugin մշակողներին գործարկել լրացուցիչ գործողություններ, երբ էջերը գրանցվում են։

Ի տարբերություն wu_page_load-ի, որը գործարկվում է միայն այն ժամանակ, երբ դիտվում է որոշակի էջ, այս hook-ը գործարկվում է գրանցման պահին՝ յուրաքանչյուր admin էջի համար, որն ավելացվում է Ultimate Multisite կոդի միջոցով։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $page_id | `string` | Այս էջի ID-ն։ |
| $page_hook | `string` | Այս էջի hook-ի անունը։ |

### Սկսած {#since}

- 2.0.0
### Աղբյուր {#source}

Սահմանված է [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228)-ում՝ 228-րդ տողում
