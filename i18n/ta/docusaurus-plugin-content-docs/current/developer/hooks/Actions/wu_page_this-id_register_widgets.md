---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets

இந்த பக்கத்திற்கு விட்ஜெட்டுகள் (widgets) பதிவு செய்யப்பட்ட பிறகு இது இயங்கும்.

ஹூக் பெயரில் உள்ள மாறும் பகுதி, அதாவது `$this->id`, அது எந்தப் பக்கத்தின் ID-ஐக் குறிக்கிறது என்பதைக் குறிக்கிறது.

## அளவுருக்கள் (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | பக்கத்தின் ID. |
| $page_hook | `string` | பக்க ஹூக். |
| $page | `object` | பக்க ஆப்ஜெக்ட். |

### எப்போது இருந்து (Since)

- 2.4.10
### ஆதாரம் (Source)

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) இல் 755 வரியில் வரையறுக்கப்பட்டுள்ளது.
