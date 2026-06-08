---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

பக்கங்கள் பதிவு செய்யப்படும்போது கூடுதல் செயல்பாடுகளை இயக்க plugin உருவாக்குநர்கள் அனுமதிக்கப்படுகிறார்கள்.

`wu_page_load`-இன் contrárioமாக, இது ஒரு குறிப்பிட்ட பக்கம் பார்க்கப்படும்போது மட்டும் இயங்குவதில்லை. மாறாக, WP Ultimo குறியீட்டைப் பயன்படுத்தி சேர்க்கப்படும் ஒவ்வொரு நிர்வாகப் பக்கத்திற்கும் (admin page) இது பதிவு செய்யப்படும்போதே இயங்கும்.

## அளவுருக்கள் (Parameters)

| பெயர் (Name) | வகை (Type) | விளக்கம் (Description) |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | இந்த பக்கத்தின் ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | இந்த பக்கத்திற்கு உருவாக்கப்படும் ஹூக். |

### இருந்தே (Since)

- 2.0.0
### மூலம் (Source)

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) என்ற கோப்பில் 203 வரியில் வரையறுக்கப்பட்டுள்ளது.
