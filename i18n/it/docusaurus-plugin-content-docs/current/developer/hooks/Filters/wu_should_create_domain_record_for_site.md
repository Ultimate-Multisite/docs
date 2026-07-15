---
id: wu_should_create_domain_record_for_site
title: Filtro - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtro: wu_should_create_domain_record_for_site

Filtra se Ultimate Multisite deve creare un record di dominio per un sito appena creato.

Usa questo filtro per sopprimere o posticipare la creazione automatica del record di dominio per siti che usano un dominio di base del modulo di checkout condiviso, un host interno o un dominio che un'altra integrazione gestirà separatamente.

## Parametri {#parameters}

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $create | `bool` | Se il record di dominio debba essere creato. |
| $site | `WP_Site` | L'oggetto del sito appena creato. |

### Dalla versione {#since}

- 2.13.0

### Sorgente {#source}

Definito in `inc/functions/domain.php`.


## Restituisce {#returns}

Booleano che indica se creare il record di dominio.
