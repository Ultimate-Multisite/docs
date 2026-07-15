---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets

Inafanywa kazi baada ya widgets zikusajiliwa kwa ukurasa huu.

Sehemu ya kiubadi (dynamic portion) ya jina la hook, `$this->id`, inarejelea kitambulisho cha ukurasa (page id).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Kitambulisho cha ukurasa. |
| $page_hook | `string` | Kichocheo cha ukurasa. |
| $page | `object` | Object (kikanganuzi) cha ukurasa. |

### Since {#since}

- 2.4.10
### Source {#source}

Imefafanuliwa katika [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) kwenye mstari wa 755
