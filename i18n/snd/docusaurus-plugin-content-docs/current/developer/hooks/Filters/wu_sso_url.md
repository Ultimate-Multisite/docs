---
id: wu_sso_url
title: فلٽر - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

cross-domain گراهڪ عملن لاءِ واپس ڪرڻ کان اڳ ٺاهيل SSO URLs کي filter ڪري ٿو.

هي filter تڏهن استعمال ڪريو جڏهن ڪنهن integration کي sovereign-tenant SSO link ۾ قابل اعتماد context شامل ڪرڻو هجي يا Ultimate Multisite جي token validation برقرار رکندي broker URL مٽائڻي هجي.

## پيرا ميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $sso_url | `string` | ٺاهيل SSO URL. |
| $user | `WP_User` | اهو user جنهن جي SSO visit ذريعي تصديق ڪئي ويندي. |
| $site_id | `int` | visit لاءِ هدف site ID. |
| $redirect_to | `string` | ڪامياب SSO validation کان پوءِ destination URL. |

### کان وٺي

- 2.13.0

### ذريعو

`inc/sso/class-sso.php` ۾ بيان ٿيل.


## واپسي

Filtered SSO URL.
