---
id: wu_checkout_form_base_domains
title: Szűrő - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Szűrő: wu_checkout_form_base_domains

Szűri a megosztott checkout-űrlap alapdomaineket, amelyekből nem szabad mapped-domain rekordokat létrehozni.

Akkor használd ezt a szűrőt, amikor egy integráció további alapdomaineket biztosít a checkout-űrlap **Site URL** mezőihez. Az e szűrő által visszaadott domaineket a rendszer megosztott regisztrációs hosztokként kezeli, nem pedig egyes site-okhoz tartozó egyéni domainekként.

## Paraméterek {#parameters}

| Név | Típus | Leírás |
|------|------|-------------|
| $domains | `array` | A checkout-űrlap konfigurációjából összegyűjtött megosztott alapdomainek. |

### Bevezetve {#since}

- 2.13.0

### Forrás {#source}

Definiálva itt: `inc/functions/domain.php`.


## Visszatérési érték {#returns}

Normalizált checkout-űrlap alapdomainek tömbje.
