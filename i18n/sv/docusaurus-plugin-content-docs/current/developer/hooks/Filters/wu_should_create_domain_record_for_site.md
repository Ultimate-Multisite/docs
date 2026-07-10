---
id: wu_should_create_domain_record_for_site
title: Filter - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Filtrerar om Ultimate Multisite ska skapa en domänpost för en nyligen skapad webbplats.

Använd detta filter för att undertrycka eller skjuta upp automatiskt skapande av domänposter för webbplatser som använder en delad basdomän för checkout-formulär, en intern värd eller en domän som en annan integration kommer att hantera separat.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $create | `bool` | Om domänposten ska skapas. |
| $site | `WP_Site` | Det nyligen skapade webbplatsobjektet. |

### Sedan {#since}

- 2.13.0

### Källa {#source}

Definierad i `inc/functions/domain.php`.


## Returer {#returns}

Boolean som anger om domänposten ska skapas.
