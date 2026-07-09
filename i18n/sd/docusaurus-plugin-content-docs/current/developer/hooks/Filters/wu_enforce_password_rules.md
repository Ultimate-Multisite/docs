---
id: wu_enforce_password_rules
title: فلٽر - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

ڇا اضافي پاسورڊ قاعدا لاڳو ڪرڻا آهن، ان کي Filter ڪريو.

جڏهن true هجي، گهٽ ۾ گهٽ ڊيگهه ۽ اکرن جون گهرجون لاڳو ڪري ٿو. "Super Strong" سيٽنگ لاءِ يا جڏهن Defender Pro جي Strong Password خصوصيت فعال هجي ته پاڻمرادو فعال ٿيندو آهي.

## Parameter

| Name | Type | وضاحت |
|------|------|-------------|
| $enforce_rules | `bool` | ڇا اضافي قاعدا لاڳو ڪرڻا آهن. |
| $strength_setting | `string` | ايڊمن سيٽنگ جي قيمت. |
| $defender_active | `bool` | ڇا Defender Pro Strong Password فعال آهي. |

### کان وٺي

- 2.4.0
### Source

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) ۾ line 531 تي بيان ٿيل
