---
id: wu_page_load
title: Acció - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Aquesta acció: wu_page_load

Permet als desenvolupadors de plugins afegir "hooks" addicionals a les nostres pàgines.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $id | `string` | L'ID d'aquesta pàgina. |
| $page_hook | `string` | El hook de la pàgina d'aquesta pàgina. |
| $admin_page | `self` | La pròpia instància de la pàgina. |

### Des de {#since}

- 1.8.2
- 2.0.4: S'ha afegit un tercer paràmetre: l'instància de la pàgina.
### Font {#source}

Definida en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) a la línia 318
