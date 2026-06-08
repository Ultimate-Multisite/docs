---
id: wu_apply_plan_limits
title: Szűrő - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Szűrő: wu_apply_plan_limits

Ez a szűrő lehetővé teszi a plugin fejlesztők számára, hogy rövidkörűen leállítsák a korlátozásokat.

Ezt a szűrőt használhatja, hogy bármilyen kódblokkot futtasson a korlátozások megkezdése előtt. Ha a szűrő bármilyen igaz értékkel (truthy value) tér vissza, a folyamat tovább halad. Ha viszont bármilyen hamis értékkel (falsy value) tér vissza, a kód visszatér, és az alábbi hookok közül egyik sem fut.

### Since

- 1.7.0
### Source

- Meghatározva a [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) fájlban, 52-sorban
- Meghatározva a [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) fájlban, 98-sorban
## Returns
