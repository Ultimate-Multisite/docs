---
id: wu_bypass_unset_current_user
title: فلټر - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# فلټر: wu_bypass_unset_current_user

پرمخ‌وړونکو ته اجازه ورکوي چې د اوسني کارن د unset کولو کوډ څخه تېر شي.

له null پرته هر څه بېرته ورکول به د ننوتلي اوسني کارن unset کول بای‌پاس کړي. دا په ځینو سناریوګانو کې ګټور کېدای شي، د بېلګې په توګه، کله چې له فرعي وېب‌ځایونو سره کار کوئ چې د ادارې پینلونو په توګه کارول کېږي.

## پارامېټرونه

| نوم | ډول | تشریح |
|------|------|-------------|
| $null_or_bypass | `mixed` | د مخکې تګ لپاره Null، او بل هر څه د دې د بای‌پاس کولو لپاره. |
| $current_user | `false\|\WP_User` | د اوسني کارن څیز. |

### له

- 2.0.11
### سرچینه

په [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) کې په 221 کرښه کې تعریف شوی


## بېرته ورکول
