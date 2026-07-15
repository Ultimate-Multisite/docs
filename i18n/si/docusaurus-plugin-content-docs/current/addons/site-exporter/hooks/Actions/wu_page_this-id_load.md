---
id: wu_page_this-id_load
title: 'ක්‍රියාව - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

විශේෂිත පිටුවකට අමතර hooks එක් කිරීමට දිගු සංවර්ධකයන්ට ඉඩ දෙයි.

භාවිතය: ගතික කොටස වලංගු පිටු ID එකකින් ප්‍රතිස්ථාපනය කළ යුතුය, උදා. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | මෙම පිටුවේ ID එක. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | මෙම පිටුව සඳහා ජනනය කළ hook එක. |

### සිට {#since}

- 1.8.2
### මූලාශ්‍රය {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) තුළ, 301 පේළියේ අර්ථ දක්වා ඇත.
