---
id: wu_minimum_password_strength
title: Filtrs - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filtrs: wu_minimum_password_strength

Filtrē minimālo nepieciešamo paroles stiprumu (zxcvbn rezultātu).

Stipruma līmeņi: - 0, 1: Ļoti vāja - 2: Vāja - 3: Vidēja - 4: Stipra (noklusējums)

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $min_strength | `int` | Nepieciešamais minimālais stipruma līmenis. |
| $strength_setting | `string` | Administratora iestatījuma vērtība (medium, strong, super_strong). |

### Kopš

- 2.4.0
### Avots

Definēts [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) 516. rindā
