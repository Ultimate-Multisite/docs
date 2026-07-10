---
id: wu_minimum_password_length
title: فلٽر - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# فلٽر: wu_minimum_password_length {#filter-wuminimumpasswordlength}

گهٽ ۾ گهٽ پاسورڊ ڊيگهه کي فلٽر ڪريو.

صرف تڏهن لاڳو ٿيندو جڏهن wu_enforce_password_rules سچو هجي.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $min_length | `int` | گهٽ ۾ گهٽ پاسورڊ ڊيگهه. ڊفالٽ 12 (Defender Pro سان ملندڙ). |
| $defender_active | `bool` | ڇا Defender Pro مضبوط پاسورڊ فعال آهي. |

### کان وٺي {#since}

- 2.4.0
### ذريعو {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) ۾ قطار 543 تي بيان ٿيل آهي.
