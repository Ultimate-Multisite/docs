---
id: wu_sso_enabled
title: Filter - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled {#filter-wussoenabled}

Megemeli/kikapcsolja a másoddoménes egyszeri bejelentkezési (single-sign-on) funkciót.

Ha ezt az értéket használja, teljesen kikapcsolhatja az egyszeri bejelentkezést, vagy feltételekhez kötve kapcsolhatja be.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $enabled | `bool` | Be kell-e kapcsolni az SSO-t? `true` ki van, `false`-ish ki van. |

### Since {#since}

- 2.0.11
### Source {#source}

Definíciója található [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) fájlban, 110-sorban.


## Returns {#returns}
Megéri, hogy az SSO be van-e kapcsolva, vagy ki.
