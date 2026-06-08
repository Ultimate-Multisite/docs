---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Hii inafilta nguvu ya chini ya neno la siri inayohitajika (kwa alama ya zxcvbn).

Viwango vya nguvu: - 0, 1: Dhifu sana - 2: Dhifu - 3: Wastani - 4: Nguvu (kwa kawaida)

## Vigezo

| Name | Type | Maelezo |
|------|------|-------------|
| $min_strength | `int` | Kiwango cha chini cha nguvu kinachohitajika. |
| $strength_setting | `string` | Thamani ya mipangilio ya admin (medium, strong, super_strong). |

### Tangu

- 2.4.0
### Chanzo

Imefafanuliwa katika [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) kwenye mstari wa 516
