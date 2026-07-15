---
id: wu_minimum_password_strength
title: ఫిల్టర్ - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

అవసరమైన కనీస పాస్‌వర్డ్ బలం (zxcvbn స్కోర్)ను ఫిల్టర్ చేస్తుంది.

బలం స్థాయిలు: - 0, 1: చాలా బలహీనమైన - 2: బలహీనమైన - 3: మధ్యస్థం - 4: బలంగా (డిఫాల్ట్)

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | అవసరమైన కనీస బలం స్థాయి. |
| $strength_setting | `string` | అడ్మిన్ సెట్టింగ్ విలువ (medium, strong, super_strong). |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
