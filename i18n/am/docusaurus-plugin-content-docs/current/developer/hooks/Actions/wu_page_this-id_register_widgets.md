---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets {#action-wupagethis-idregisterwidgets}

ይህ hook widgetዎች ለዚህ ገጽ ከተመዘገቡ በኋላ ይሰራል።

በhook ስም ውስጥ ያለው ተለዋዋጭ ክፍል፣ `$this->id`፣ የገጹን ID ያመለክታል።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | የገጹ ID። |
| $page_hook | `string` | የገጹ hook። |
| $page | `object` | የገጹን object። |

### Since {#since}

- 2.4.10
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) at line 755
