---
id: wu_page_this-id_after_render
title: 'ක්‍රියාව - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

නිශ්චිත පිටුවක් දර්ශනය කිරීමෙන් පසු ක්‍රියාත්මක වේ.

භාවිතය: චල කොටස වලංගු පිටු id එකකින් ප්‍රතිස්ථාපනය කළ යුතුය, උදා. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## පරාමිතීන්

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | පිටුවේ id එක. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page instance එක. |

### සිට

- 1.8.2
### මූලාශ්‍රය

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) හි 394 වන පේළියේ නිර්වචනය කර ඇත
