---
id: wu_sso_enabled
title: Филтер - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Филтер: wu_sso_enabled {#filter-wussoenabled}

Омогућите/онемогућите могућност јединствене пријаве између домена.

Филтрирајте ову вредност да бисте у потпуности искључили јединствену пријаву, или је уместо тога условно омогућили.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $enabled | `bool` | Да ли SSO треба да буде омогућен? True за укључено, вредност налик false за искључено. |

### Од верзије {#since}

- 2.0.11
### Извор {#source}

Дефинисано у [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) у реду 110


## Враћа {#returns}
Да ли је SSO омогућен или није.
