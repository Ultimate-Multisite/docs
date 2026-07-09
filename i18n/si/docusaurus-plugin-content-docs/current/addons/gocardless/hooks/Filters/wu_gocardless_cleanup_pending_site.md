---
id: wu_gocardless_cleanup_pending_site
title: පෙරහන - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# පෙරහන: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

අවලංගු කළ GoCardless සාමාජිකත්වයක් සඳහා වූ අනාථ බලාපොරොත්තු වෙමින් තිබෙන අඩවියක් මකා දැමීමට පෙර ක්‍රියාත්මක වේ.

මකා දැමීම වැළැක්වීමට මෙම පෙරහනෙන් false ආපසු දෙන්න.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $blog_id | `int` | බලාපොරොත්තු වෙමින් තිබෙන අඩවියේ WordPress blog ID. |
| $membership | `\WP_Ultimo\Models\Membership` | අවලංගු කළ සාමාජිකත්වය. |
| $old_status | `string` | අවලංගු කිරීමට පෙර තත්ත්වය. |

### සිට {#since}

- 2.0.0
### මූලාශ්‍රය {#source}

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) හි 1086 පේළියේ නිර්වචනය කර ඇත.
