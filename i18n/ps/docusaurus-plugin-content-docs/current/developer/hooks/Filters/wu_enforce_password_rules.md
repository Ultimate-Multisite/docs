---
id: wu_enforce_password_rules
title: فلټر - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Filter چې ایا د پټنوم اضافي اصول پلي شي که نه.

کله چې true وي، لږ تر لږه اوږدوالی او د تورو اړتیاوې پلي کوي. د "Super Strong" امستنې لپاره یا کله چې د Defender Pro د Strong Password ځانګړتیا فعاله وي، په اتومات ډول فعالېږي.

## پارامیټرونه

| نوم | ډول | تشریح |
|------|------|-------------|
| $enforce_rules | `bool` | ایا اضافي اصول پلي شي که نه. |
| $strength_setting | `string` | د اډمین امستنې ارزښت. |
| $defender_active | `bool` | ایا Defender Pro Strong Password فعال دی که نه. |

### له نسخې راهیسې

- 2.4.0
### سرچینه

په [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) کې په 531 کرښه تعریف شوی.
