---
id: wu_should_create_domain_record_for_site
title: Szűrő - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Szűrő: wu_should_create_domain_record_for_site

Szűri, hogy az Ultimate Multisite létrehozzon-e domainrekordot egy újonnan létrehozott webhelyhez.

Ezzel a szűrővel letilthatod vagy késleltetheted az automatikus domainrekord-létrehozást azoknál a webhelyeknél, amelyek megosztott fizetési űrlap alapdomaint, belső hostot vagy olyan domaint használnak, amelyet egy másik integráció külön fog kezelni.

## Paraméterek {#parameters}

| Név | Típus | Leírás |
|------|------|-------------|
| $create | `bool` | Létre kell-e hozni a domainrekordot. |
| $site | `WP_Site` | Az újonnan létrehozott webhely objektuma. |

### Ettől kezdve {#since}

- 2.13.0

### Forrás {#source}

Meghatározva itt: `inc/functions/domain.php`.


## Visszatérési érték {#returns}

Logikai érték, amely jelzi, hogy létre kell-e hozni a domainrekordot.
