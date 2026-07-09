---
id: wu_page_this-id_before_render
title: 'ක්‍රියාව - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

විශේෂිත පිටුවක් render කිරීමට පෙර ක්‍රියාත්මක වේ.

භාවිතය: dynamic කොටස වලංගු page id එකකින් ප්‍රතිස්ථාපනය කළ යුතුය, උදා. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## පරාමිතීන්

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | පිටුවේ id එක. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page instance එක. |

### සිට

- 1.8.2
### මූලාශ්‍රය

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) තුළ 368 වන පේළියේ අර්ථ දක්වා ඇත.
