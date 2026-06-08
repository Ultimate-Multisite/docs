---
id: wu_admin_notices
title: Filtre - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filtre: wu_admin_notices

Permet als desenvolupadors filtrar els avisos d'administració afegits per Ultimate Multisite.

## Paràmetres

| Nom | Tip | Descripció |
|------|------|-------------|
| $notices | `array` | Llista d'avisos per a aquell panel en particular. |
| $all_notices | `array` | Llista dels avisos afegits, segregats per panel. |
| $panel | `string` | Panel on que fer recuperar els avisos. |
| $filter | `string` | Si els avisos eliminables han estat filtrats. |
| $dismissed_messages | `array` | Llista de les claures dels avisos eliminats. |

### Des de

- 2.0.0
### Font

Definït en [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) a la línia 121


## Retorns
