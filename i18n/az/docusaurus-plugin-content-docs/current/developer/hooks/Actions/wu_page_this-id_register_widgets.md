---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

Bu səhifə üçün widget-lar qeydiyyatdan keçdikdən sonra işə düşür.

Hook adının dinamik hissəsi olan `$this->id`, səhifənin ID-sinə işarə edir.

## Parametrlər

| Ad | Növ | Təsvir |
|------|------|-------------|
| $id | `string` | Səhifənin ID-si. |
| $page_hook | `string` | Səhifə hook-u. |
| $page | `object` | Səhifə obyektidir. |

### Nə vaxtdan

- 2.4.10
### Mənbə

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) at line 755
