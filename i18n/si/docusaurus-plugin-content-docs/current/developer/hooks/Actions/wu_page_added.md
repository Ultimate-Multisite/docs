---
id: wu_page_added
title: ක්‍රියාව - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# ක්‍රියාව: wu_page_added

plugin සංවර්ධකයින්ට පිටු ලියාපදිංචි වන විට අමතර දේවල් ධාවනය කිරීමට ඉඩ දෙයි.

නිශ්චිත පිටුවක් බලන විට පමණක් ධාවනය වන wu_page_load ට වෙනස්ව, මෙම hook එක Ultimate Multisite code භාවිතයෙන් එක් කරන සෑම admin පිටුවක්ම ලියාපදිංචි කිරීමේදී ධාවනය වේ.

## පරාමිතීන්

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $page_id | `string` | මෙම පිටුවේ ID එක. |
| $page_hook | `string` | මෙම පිටුවේ hook නම. |

### සිට

- 2.0.0
### මූලාශ්‍රය

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) තුළ 228 වන පේළියේ අර්ථ දක්වා ඇත.
