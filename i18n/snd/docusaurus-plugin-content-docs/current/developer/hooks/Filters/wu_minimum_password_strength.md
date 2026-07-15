---
id: wu_minimum_password_strength
title: فلٽر - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# فلٽر: wu_minimum_password_strength

گهربل گهٽ ۾ گهٽ پاسورڊ طاقت کي فلٽر ڪريو (zxcvbn score).

طاقت جون سطحون: - 0, 1: تمام ڪمزور - 2: ڪمزور - 3: وچولي - 4: مضبوط (default)

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $min_strength | `int` | گهربل گهٽ ۾ گهٽ طاقت جي سطح. |
| $strength_setting | `string` | admin setting value (medium, strong, super_strong). |

### کان وٺي {#since}

- 2.4.0
### ذريعو {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) ۾ line 516 تي بيان ٿيل
