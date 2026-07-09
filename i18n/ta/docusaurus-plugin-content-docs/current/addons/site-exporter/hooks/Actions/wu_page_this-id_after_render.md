---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

ஒரு குறிப்பிட்ட பக்கம் ரெண்டர் (render) ஆன பிறகு இது செயல்படும்.

**பயன்பாடு:** இங்குள்ள dynamic பகுதியானது, சரியான page id உடன் மாற்றப்பட வேண்டும். உதாரணமாக: add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## அளவுருக்கள் {#parameters}

| பெயர் | வகை | விளக்கம் |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | பக்கத்தின் ID. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page இன்ஸ்டன்ஸ். |

### எப்போது இருந்து {#since}

- 1.8.2
### ஆதாரம் {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) இல் 394 வரியில் வரையறுக்கப்பட்டுள்ளது.
