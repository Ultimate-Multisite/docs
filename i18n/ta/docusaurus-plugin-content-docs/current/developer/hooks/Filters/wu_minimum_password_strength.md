---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

தேவையான குறைந்தபட்ச கடவுச்சொல் வலிமையை (zxcvbn மதிப்பெண்) ஃபில்டர் செய்ய உதவுகிறது.

வலிமை நிலைகள்: - 0, 1: மிக பலவீனமானது - 2: பலவீனமானது - 3: நடுத்தரம் - 4: வலிமையானது (இயல்புநிலை)

## அளவுருக்கள் {#parameters}

| Name | Type | விளக்கம் |
|------|------|-------------|
| $min_strength | `int` | தேவைப்படும் குறைந்தபட்ச வலிமை நிலை. |
| $strength_setting | `string` | நிர்வாக அமைப்பின் மதிப்பு (medium, strong, super_strong). |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
