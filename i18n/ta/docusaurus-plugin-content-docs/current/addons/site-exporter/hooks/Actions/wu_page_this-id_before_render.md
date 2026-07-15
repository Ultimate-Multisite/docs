---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_{$this->id}_before_render

ஒரு குறிப்பிட்ட பக்கம் ரெண்டர் (render) செய்வதற்கு முன் இது இயங்கும்.

பயன்பாடு: டைனமிக் பகுதியானது ஒரு சரியான பக்கம் ID உடன் மாற்றப்பட வேண்டும், உதாரணமாக: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | பக்கத்தின் ID. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | அடிப்படை நிர்வாகப் பக்கத்தின் (Base Admin Page) நிகழ்வு (instance). |

### எப்போது இருந்து {#since}

- 1.8.2
### மூலம் (Source) {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) இல் 368 வரியில் வரையறுக்கப்பட்டுள்ளது.
