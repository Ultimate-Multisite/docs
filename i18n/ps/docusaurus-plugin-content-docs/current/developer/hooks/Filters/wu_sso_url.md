---
id: wu_sso_url
title: فلټر - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# فلټر: wu_sso_url

د cross-domain پېرېدونکي کړنو لپاره جوړ شوي SSO URLs مخکې له دې فلټر کوي چې بېرته وګرځول شي.

دا فلټر هغه مهال وکاروئ کله چې یو ادغام اړتیا ولري د sovereign-tenant SSO لینک ته باوري زمینه ورزیاته کړي یا د broker URL بدل کړي، په داسې حال کې چې د Ultimate Multisite د token تایید خوندي وساتي.

## پارامېټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $sso_url | `string` | جوړ شوی SSO URL. |
| $user | `WP_User` | هغه کارن چې د SSO لیدنې له لارې به تصدیق شي. |
| $site_id | `int` | د لیدنې لپاره د هدف وېبپاڼې ID. |
| $redirect_to | `string` | د بریالي SSO تایید وروسته د منزل URL. |

### له نسخې راهیسې {#since}

- 2.13.0

### سرچینه {#source}

په `inc/sso/class-sso.php` کې تعریف شوی.


## راستنوي {#returns}

فلټر شوی SSO URL.
