---
id: wu_enforce_password_rules
title: Фильтр - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Өстәмә серсүз кагыйдәләрен мәҗбүр итү-итмәүне фильтрлый.

true булганда, минималь озынлык һәм символ таләпләрен мәҗбүр итә. "Super Strong" көйләмәсе өчен яки Defender Pro'ның Strong Password функциясе актив булганда автоматик рәвештә кабызыла.

## Параметрлар {#parameters}

| Name | Type | Тасвирлама |
|------|------|-------------|
| $enforce_rules | `bool` | Өстәмә кагыйдәләрне мәҗбүр итү-итмәү. |
| $strength_setting | `string` | Администратор көйләмәсе кыйммәте. |
| $defender_active | `bool` | Defender Pro Strong Password актив булу-булмавы. |

### Бирле {#since}

- 2.4.0
### Чыганак {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) эчендә 531 нче юлда билгеләнгән
