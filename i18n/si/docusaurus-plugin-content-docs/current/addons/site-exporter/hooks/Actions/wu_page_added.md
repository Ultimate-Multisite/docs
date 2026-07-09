---
id: wu_page_added
title: ක්‍රියාව - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# ක්‍රියාව: wu_page_added {#action-wupageadded}

පිටු ලියාපදිංචි කරන විට අමතර දේවල් ක්‍රියාත්මක කිරීමට plugin සංවර්ධකයින්ට ඉඩ දෙයි.

නිශ්චිත පිටුවක් දර්ශනය වන විට පමණක් ක්‍රියාත්මක වන wu_page_load මෙන් නොව, WP Ultimo කේතය භාවිතයෙන් එක් කරන සෑම admin පිටුවක් සඳහාම ලියාපදිංචි කිරීමේදී මෙම hook ක්‍රියාත්මක වේ.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | මෙම පිටුවේ ID එක. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | මෙම පිටුවට ජනනය කළ hook එක. |

### සිට {#since}

- 2.0.0
### මූලාශ්‍රය {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) හි 203 වන පේළියේ අර්ථ දක්වා ඇත.
