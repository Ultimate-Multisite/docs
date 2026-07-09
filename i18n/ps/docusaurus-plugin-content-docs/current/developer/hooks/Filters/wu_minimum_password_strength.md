---
id: wu_minimum_password_strength
title: فلټر - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# فلټر: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

د اړین لږ تر لږه پاسورډ ځواک فلټر کړئ (zxcvbn نمره).

د ځواک کچې: - 0, 1: ډېر کمزوری - 2: کمزوری - 3: منځنی - 4: پیاوړی (اصلي)

## پارامترونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $min_strength | `int` | د اړتیا وړ لږ تر لږه ځواک کچه. |
| $strength_setting | `string` | د مدیر تنظیم ارزښت (medium, strong, super_strong). |

### له نسخې راهیسې {#since}

- 2.4.0
### سرچینه {#source}

په [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) کې په 516 کرښه تعریف شوی.
