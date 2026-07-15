---
id: wu_gocardless_cleanup_pending_site
title: سۈزگۈچ - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

ئەمەلدىن قالدۇرۇلغان GoCardless ئەزالىقى ئۈچۈن ئىگىسىز قالغان كۈتۈۋاتقان تور بېكەتنى ئۆچۈرۈشتىن بۇرۇن ئىجرا بولىدۇ.

ئۆچۈرۈشنى توسۇش ئۈچۈن بۇ filter دىن false قايتۇرۇڭ.

## پارامېتىرلار {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | كۈتۈۋاتقان تور بېكەتنىڭ WordPress blog ID سى. |
| $membership | `\WP_Ultimo\Models\Membership` | ئەمەلدىن قالدۇرۇلغان ئەزالىق. |
| $old_status | `string` | ئەمەلدىن قالدۇرۇشتىن بۇرۇنقى ھالەت. |

### باشلاپ {#since}

- 2.0.0
### مەنبە {#source}

1086-قۇردا [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ئىچىدە ئېنىقلانغان
