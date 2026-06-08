---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

ആവശ്യമായ കുറഞ്ഞ പാസ്‌വേർഡ് ശക്തി (zxcvbn സ്കോർ) ഫിൽട്ടർ ചെയ്യാൻ ഇത് ഉപയോഗിക്കുന്നു.

ശക്തി നിലകൾ: - 0, 1: വളരെ ദുർബലം - 2: ദുർബലം - 3: ഇടത്തരം - 4: ശക്തം (ഡിഫോൾട്ട്)

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | ആവശ്യമായ കുറഞ്ഞ ശക്തി നില. |
| $strength_setting | `string` | അഡ്മിൻ സെറ്റിംഗ് മൂല്യം (medium, strong, super_strong). |

### Since

- 2.4.0
### Source

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
