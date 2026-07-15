---
id: wu_dashboard_this-tab_widgets
title: 'Action - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# Action: wu_dashboard_{$this->tab}_widgets

Plugin உருவாக்குபவர்கள் (developers) இந்த செயல்பாடு மூலம் நெட்வொர்க் டாஷ்போர்டு பேனலில் விட்ஜெட்டுகளைச் சேர்க்க முடியும்.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | விளக்கம் (Description) |
|------|------|-------------|
| $tab | `string` | தற்போதைய Tab-ஐக் குறிக்கும். |
| $screen | `\WP_Screen` | ஸ்கிரீன் ஆப்ஜெக்ட் (screen object). |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | Ultimate Multisite நிர்வாகப் பக்கத்தின் (admin page) நிகழ்வு (instance). |

### எப்போது (Since) {#since}

- 2.0.0
### மூலம் (Source) {#source}

[`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) என்ற கோப்பின் 214 வரியில் வரையறுக்கப்பட்டுள்ளது.
