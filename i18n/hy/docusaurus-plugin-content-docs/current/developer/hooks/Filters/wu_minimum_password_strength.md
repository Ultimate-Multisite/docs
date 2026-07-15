---
id: wu_minimum_password_strength
title: Զտիչ - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Զտիչ՝ wu_minimum_password_strength

Զտում է պահանջվող գաղտնաբառի նվազագույն ուժգնությունը (zxcvbn միավոր)։

Ուժգնության մակարդակներ՝ - 0, 1: Շատ թույլ - 2: Թույլ - 3: Միջին - 4: Ուժեղ (լռելյայն)

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $min_strength | `int` | Պահանջվող նվազագույն ուժգնության մակարդակը։ |
| $strength_setting | `string` | Ադմինի կարգավորման արժեքը (medium, strong, super_strong)։ |

### Սկսած {#since}

- 2.4.0
### Աղբյուր {#source}

Սահմանված է [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516)-ում՝ 516-րդ տողում։
