---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets {#action-wupagethis-idregisterwidgets}

Bu hook, sayfa widget'ları kaydedildikten sonra tetiklenir.

Hook adındaki dinamik kısım olan `$this->id`, sayfa kimliğini (page id) ifade eder.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Sayfa kimliği. |
| $page_hook | `string` | Sayfa hook'u. |
| $page | `object` | Sayfa nesnesi (page object). |

### Since {#since}

- 2.4.10
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) at line 755
