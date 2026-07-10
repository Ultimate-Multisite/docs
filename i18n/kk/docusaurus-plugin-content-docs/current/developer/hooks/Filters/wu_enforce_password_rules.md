---
id: wu_enforce_password_rules
title: Сүзгі - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Қосымша құпиясөз ережелерін қолдану-қолданбауды сүзеді.

true болғанда, ең аз ұзындық пен таңба талаптарын қолданады. "Super Strong" параметрі үшін немесе Defender Pro-ның Strong Password мүмкіндігі белсенді болғанда автоматты түрде қосылады.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $enforce_rules | `bool` | Қосымша ережелерді қолдану-қолданбау. |
| $strength_setting | `string` | Admin параметрінің мәні. |
| $defender_active | `bool` | Defender Pro Strong Password белсенді-белсенді еместігі. |

### Бастап {#since}

- 2.4.0
### Дереккөз {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) ішінде 531-жолда анықталған
