---
id: wu_make_primary_domain_redirect_url
title: පෙරහන - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

වසමක් ප්‍රධාන ලෙස සැකසීමෙන් පසු යළි-යොමු URL එක පෙරහන් කරයි.

වසමක් සාර්ථකව ප්‍රධාන ලෙස සැකසූ පසු පරිශීලකයන් යළි-යොමු කරන ස්ථානය සංවර්ධකයන්ට අභිරුචිකරණය කිරීමට ඉඩ දෙයි. පෙරනිමියෙන්, ප්‍රධාන අඩවියේ වත්මන් URL එකට, හෝ වෙනස් කරන අඩවියේ පරිපාලක URL එකට යළි-යොමු කරයි.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $redirect_url | `string` | පෙරනිමි යළි-යොමු URL එක. ප්‍රධාන අඩවිය නම් වත්මන් URL එක, නැතහොත් වත්මන් අඩවියේ පරිපාලක URL එක. |
| $current_site | `int` | ප්‍රධාන බවට පත් කරන වසම අයත් අඩවියේ ID එක. |
| $domain | `\Domain` | ප්‍රධාන බවට පත් කළ වසම් වස්තුව. |
| $old_primary_domains | `array` | පෙර ප්‍රධානව තිබූ වසම්වල ID අරාව. |

### සිට {#since}

- 2.0.0
### මූලාශ්‍රය {#source}

639 වැනි පේළියේ [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) තුළ අර්ථ දක්වා ඇත


## ප්‍රතිලාභ {#returns}
පෙරහන් කළ යළි-යොමු URL එක.
