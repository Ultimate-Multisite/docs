---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Szűrőként módosítja az átirányítási URL-t, amikor egy domainet elsődlegesnek təmindőít.

Ez a szűrő lehetővé teszi a fejlesztők számára, hogy testre szabják, hogy a felhasználók hová kerülnek átirányításra, miután sikeresen beállították egy domainet elsődlegesnek. Alapértelmezés szerint az átirányítás az aktuális URL-re történik a fő oldalon, vagy az oldal admin URL-jára, amelyet módosítottak.

## Paraméterek

| Name | Type | Leírás |
|------|------|-------------|
| $redirect_url | `string` | Az alapértelmezett átirányítási URL. Vagy az aktuális URL (ha fő oldal), vagy az aktuális oldal admin URL-ja. |
| $current_site | `int` | Az ID az oldalnál, amelynek domainjának elsődlegesnek təmindőítése történik. |
| $domain | `\Domain` | Az objektum, amely a domainet elsődlegesnek təmindőítette. |
| $old_primary_domains | `array` | Array az ID-kkel, amelyek korábban elsődlegesek voltak. |

### Since

- 2.0.0
### Source

Defined in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) at line 639


## Vrági
Az átirányított, szűrő által módosított URL-t.
