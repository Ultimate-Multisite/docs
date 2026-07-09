---
id: wu_page_this-id_load
title: 'Akcia - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

Umožňuje vývojárom doplnkov pridať na naše stránky ďalšie hooky.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $id | `string` | ID tejto stránky. |
| $page_hook | `string` | Hook tejto stránky. |
| $admin_page | `self` | Inštancia stránky. |

### Od verzie

- 1.8.2
- 2.0.4: Pridaný tretí parameter: inštancia stránky.
### Zdroj

Definované v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) na riadku 332
