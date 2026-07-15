---
id: wu_minimum_password_strength
title: Suodatin - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Suodata vaadittu salasanan vähimmäisvahvuus (zxcvbn-pisteet).

Vahvuustasot: - 0, 1: Erittäin heikko - 2: Heikko - 3: Keskitaso - 4: Vahva (oletus)

## Parametrit {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Vaadittu vähimmäisvahvuustaso. |
| $strength_setting | `string` | Ylläpitäjän asetusarvo (medium, strong, super_strong). |

### Alkaen {#since}

- 2.4.0
### Lähde {#source}

Määritelty tiedostossa [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) rivillä 516
