---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

Umožňuje vývojářům manipulovat s dvojicemi domény/cesty.

To může být užitečné pro řadu věcí, například pro implementaci jakéhokoli typu testovacího prostředí (staging), různých serverů atd.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $d | `object` | Aktuální objekt obsahující klíče pro doménu a cestu. |
| $path_or_subdomain | `string` | Původní cesta/poddoména předaná do funkce. |

### Od {#since}

- 2.0.0
### Zdroj {#source}

Definováno v [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) na řádku 235

## Vrací {#returns}
Objekt obsahující klíče pro doménu a cestu.
