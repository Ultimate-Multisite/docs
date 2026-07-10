---
id: signup_get_available_languages
title: Szűrő - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages {#filter-signupgetavailablelanguages}

Szűrőként fogja meghatározni a front-end oldal regisztrációjához elérhető nyelvek listáját.

Ha üres tömböt adunk ebbe a hook-hoz, akkor kikapcsolja a beállítás megjelenítését a regisztrációs űrlapon, és a site létrehozásakor az alapértelmezett nyelvet fogja használni. Az még nem telepített nyelveket eltávolítja a listából.

## Paraméterek {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | Elérhető nyelvek. |

### Since {#since}

- 4.4.0
### Source {#source}

Defined in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) at line 117
