---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

ਇਹ ਐਕਸ਼ਨ ਉਦੋਂ ਚੱਲਦਾ ਹੈ ਜਦੋਂ ਇਸ ਪੇਜ ਲਈ widgets ਰਜਿਸਟਰ ਹੋ ਜਾਂਦੇ ਹਨ।

hook ਨਾਮ ਦਾ ਜੋ ਹਿੱਸਾ dynamic ਹੈ, `$this->id`, ਉਹ ਪੇਜ ID ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ਪੇਜ ਦੀ ID। |
| $page_hook | `string` | ਪੇਜ hook। |
| $page | `object` | ਪੇਜ ਆਬਜੈਕਟ। |

### Since

- 2.4.10
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) at line 755
