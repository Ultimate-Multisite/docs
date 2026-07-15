---
id: wu_domain_has_correct_dns
title: Szűrő - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Szűrő: wu_domain_has_correct_dns

Lehetővé teszi a plugin fejlesztőknek új ellenőrzések hozzáadását, amelyek alapján meghatározható a találat.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $result | `bool` | az aktuális eredmény. |
| $domain | `self` | Az aktuális domain példány. |
| $domains_and_ips | `array` | A DNS keresés során található domainek és IP-k listája. |

### Since {#since}

- 2.0.4
### Source {#source}

Definíciója található [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) fájlban, 455-ös sorban.


## Várható érték {#returns}
Megmutatja, hogy a DNS megfelelően van beállítva-e, vagy nem.
