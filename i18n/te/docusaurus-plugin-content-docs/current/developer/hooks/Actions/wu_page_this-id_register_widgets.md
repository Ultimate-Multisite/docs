---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets

ఈ పేజీకి విడ్జెట్‌లు రిజిస్టర్ అయిన తర్వాత ఇది పనిచేస్తుంది (Fires).

హుక్ పేరులోని డైనమిక్ భాగం, `$this->id`, అనేది పేజీ ఐడిని (page id) సూచిస్తుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | పేజీ ఐడి. |
| $page_hook | `string` | పేజీ హుక్. |
| $page | `object` | పేజీ ఆబ్జెక్ట్. |

### Since {#since}

- 2.4.10
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) లోని 755వ లైన్‌లో నిర్వచించబడింది.
