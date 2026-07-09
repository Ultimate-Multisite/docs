---
id: get_blogs_of_user
title: Filter – get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Pre istotu replikuje pôvodný WP Filter.

Filtruje zoznam stránok, ku ktorým používateľ patrí.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $sites | `object[]` | Pole objektov stránok patriacich používateľovi. |
| $user_id | `int` | ID používateľa. |
| $all | `bool` | Či má vrátené pole stránok obsahovať všetky stránky vrátane tých, ktoré sú označené ako „deleted“, „archived“ alebo „spam“. Predvolené false. |

### Od verzie

- 2.0.11
### Zdroj

Definované v [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) na riadku 851
