---
id: wu_minimum_password_strength
title: Filtru - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

Iffiltra s-saħħa minima tal-password meħtieġa (punteġġ zxcvbn).

Livelli ta' saħħa: - 0, 1: Dgħajfa ħafna - 2: Dgħajfa - 3: Medja - 4: Qawwija (default)

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Il-livell minimu ta' saħħa meħtieġ. |
| $strength_setting | `string` | Il-valur tas-setting tal-admin (medium, strong, super_strong). |

### Minn {#since}

- 2.4.0
### Sors {#source}

Definit f'[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) fil-linja 516
