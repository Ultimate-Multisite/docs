---
id: wu_admin_notices
title: Filter - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices

Razvijalcem omogoča filtriranje admin obvestil, ki jih doda Ultimate Multisite.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $notices | `array` | Seznam obvestil za to določeno ploščo. |
| $all_notices | `array` | Seznam dodanih obvestil, ločenih po ploščah. |
| $panel | `string` | Plošča, za katero se pridobijo obvestila. |
| $filter | `string` | Ali so bila obvestila, ki jih je mogoče opustiti, filtrirana ven. |
| $dismissed_messages | `array` | Seznam ključev opuščenih obvestil. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

Določeno v [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) v vrstici 121


## Vrne {#returns}
