---
id: wu_page_this-id_load
title: 'Acció - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Aquesta acció: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Permet als desenvolupadors de plugins afegir ganchos (hooks) addicionals a les nostres pàgines.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $id | `string` | L'ID d'aquesta pàgina. |
| $page_hook | `string` | El ganxo de la pàgina d'aquesta pàgina. |
| $admin_page | `self` | L'instància de la pàgina. |

### Des de {#since}

- 1.8.2
- 2.0.4: S'ha afegit un tercer paràmetre: l'instància de la pàgina.
### Font {#source}

Definida en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) a la línia 332
