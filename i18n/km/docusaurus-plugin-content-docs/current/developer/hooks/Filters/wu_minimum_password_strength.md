---
id: wu_minimum_password_strength
title: តម្រង - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

ត្រងកម្រិតភាពរឹងមាំអប្បបរមារបស់ពាក្យសម្ងាត់ដែលត្រូវការ (ពិន្ទុ zxcvbn)។

កម្រិតភាពរឹងមាំ៖ - 0, 1៖ ខ្សោយខ្លាំង - 2៖ ខ្សោយ - 3៖ មធ្យម - 4៖ រឹងមាំ (លំនាំដើម)

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $min_strength | `int` | កម្រិតភាពរឹងមាំអប្បបរមាដែលត្រូវការ។ |
| $strength_setting | `string` | តម្លៃការកំណត់របស់អ្នកគ្រប់គ្រង (medium, strong, super_strong)។ |

### ចាប់តាំងពី {#since}

- 2.4.0
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) នៅបន្ទាត់ 516
