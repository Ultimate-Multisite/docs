---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Filter die vereiste minimum wagwoordsterkte (zxcvbn-telling).

Sterktevlakke: - 0, 1: Baie swak - 2: Swak - 3: Medium - 4: Sterk (standaard)

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $min_strength | `int` | Die vereiste minimum sterktevlak. |
| $strength_setting | `string` | Die administrasie-instellingswaarde (medium, strong, super_strong). |

### Sedert {#since}

- 2.4.0
### Bron {#source}

Bepaald in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) op lyn 516
