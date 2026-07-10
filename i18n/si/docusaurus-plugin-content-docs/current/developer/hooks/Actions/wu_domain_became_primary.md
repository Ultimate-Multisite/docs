---
id: wu_domain_became_primary
title: ක්‍රියාව - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# ක්‍රියාව: wu_domain_became_primary {#action-wudomainbecameprimary}

වසමක් අඩවියක ප්‍රධාන වසම බවට පත් වූ විට ක්‍රියාත්මක වේ.

නව ප්‍රධාන වසමක් නිර්මාණය කරන විට හෝ පවතින වසමක් ප්‍රධාන වසම බවට පත් කිරීමට යාවත්කාලීන කරන විට, වසමේ primary_domain flag එක true ලෙස සැකසූ විට මෙම ක්‍රියාව සක්‍රිය වේ.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | ප්‍රධාන වූ වසම. |
| $blog_id | `int` | බලපෑමට ලක් වූ අඩවියේ blog ID එක. |
| $was_new | `bool` | මෙය අලුතින් නිර්මාණය කළ වසමක්ද යන්න. |

### සිට {#since}

- 2.0.0
### මූලාශ්‍රය {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) තුළ 560 පේළියේ නිර්වචනය කර ඇත.
