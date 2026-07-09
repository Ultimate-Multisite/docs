---
id: wu_sso_url
title: فلٽر - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url {#filter-wussourl}

ڪراس-ڊومين گراهڪ عملن لاءِ واپس ڪرڻ کان اڳ ٺاهيل SSO URLs کي فلٽر ڪري ٿو.

هي فلٽر استعمال ڪريو جڏهن ڪنهن integration کي خودمختيار-tenant SSO link ۾ ڀروسي جوڳو context شامل ڪرڻو هجي يا broker URL کي بدلائڻو هجي، جڏهن ته Ultimate Multisite جي token validation کي برقرار رکيو وڃي.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $sso_url | `string` | ٺاهيل SSO URL. |
| $user | `WP_User` | اهو يوزر جنهن جي SSO visit ذريعي تصديق ڪئي ويندي. |
| $site_id | `int` | visit لاءِ هدف site ID. |
| $redirect_to | `string` | ڪامياب SSO validation کان پوءِ منزل URL. |

### کان وٺي {#since}

- 2.13.0

### ذريعو {#source}

`inc/sso/class-sso.php` ۾ بيان ٿيل.


## واپسيون {#returns}

فلٽر ٿيل SSO URL.
