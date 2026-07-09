---
id: wu_enforce_password_rules
title: فلٽر - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# فلٽر: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

فلٽر ڪري ٿو ته ڇا اضافي پاسورڊ قاعدا لاڳو ڪيا وڃن.

جڏهن true هجي، گهٽ ۾ گهٽ ڊيگهه ۽ اکرن جون گهرجون لاڳو ڪري ٿو. "انتهائي مضبوط" سيٽنگ لاءِ يا جڏهن Defender Pro جي مضبوط پاسورڊ خاصيت فعال هجي ته پاڻمرادو فعال ٿئي ٿو.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $enforce_rules | `bool` | ڇا اضافي قاعدا لاڳو ڪيا وڃن. |
| $strength_setting | `string` | منتظم سيٽنگ جي قيمت. |
| $defender_active | `bool` | ڇا Defender Pro مضبوط پاسورڊ فعال آهي. |

### کان وٺي {#since}

- 2.4.0
### ذريعو {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) ۾ لڪير 531 تي بيان ٿيل آهي.
