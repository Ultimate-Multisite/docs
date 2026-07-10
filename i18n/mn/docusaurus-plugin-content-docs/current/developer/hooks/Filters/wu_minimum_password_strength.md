---
id: wu_minimum_password_strength
title: Шүүлтүүр - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Шүүлтүүр: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

Шаардагдах нууц үгийн хамгийн бага бат бөхийн түвшнийг шүүнэ (zxcvbn оноо).

Бат бөхийн түвшнүүд: - 0, 1: Маш сул - 2: Сул - 3: Дунд - 4: Бат бөх (анхдагч)

## Параметрүүд {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Шаардлагатай хамгийн бага бат бөхийн түвшин. |
| $strength_setting | `string` | Админы тохиргооны утга (medium, strong, super_strong). |

### Хойш {#since}

- 2.4.0
### Эх сурвалж {#source}

516-р мөрөнд [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516)-д тодорхойлсон
