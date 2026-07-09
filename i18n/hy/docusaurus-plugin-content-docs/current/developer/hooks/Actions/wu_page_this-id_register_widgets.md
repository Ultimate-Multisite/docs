---
id: wu_page_this-id_register_widgets
title: 'Գործողություն - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets {#action-wupagethis-idregisterwidgets}

Գործարկվում է այս էջի համար վիջեթների գրանցումից հետո։

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $id | `string` | Էջի նույնացուցիչը։ |
| $page_hook | `string` | Էջի hook-ը։ |
| $page | `object` | Էջի օբյեկտը։ |

### Սկսած {#since}

- 2.4.10
### Աղբյուր {#source}

Սահմանված է [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) ֆայլում՝ 755-րդ տողում
