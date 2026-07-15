---
id: wu_minimum_password_strength
title: Shaandhee - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Filter-garee awoodda ugu yar ee erayga sirta ah ee loo baahan yahay (zxcvbn score).

Heerarka awoodda: - 0, 1: Aad u daciif - 2: Daciif - 3: Dhexdhexaad - 4: Xooggan (default)

## Halbeegyada {#parameters}

| Magac | Nooc | Sharaxaad |
|------|------|-------------|
| $min_strength | `int` | Heerka awoodda ugu yar ee loo baahan yahay. |
| $strength_setting | `string` | Qiimaha dejinta admin-ka (medium, strong, super_strong). |

### Tan iyo {#since}

- 2.4.0
### Isha {#source}

Waxaa lagu qeexay [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) safka 516
