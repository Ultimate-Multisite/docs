---
id: wu_should_create_domain_record_for_site
title: Filter - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Filtrerer, om Ultimate Multisite skal oprette en domæneregistrering for et nyoprettet site.

Brug dette filter til at undertrykke eller udskyde automatisk oprettelse af domæneregistreringer for sites, der bruger et delt checkout-formular-basedomæne, en intern host eller et domæne, som en anden integration vil administrere separat.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $create | `bool` | Om domæneregistreringen skal oprettes. |
| $site | `WP_Site` | Det nyoprettede site-objekt. |

### Siden {#since}

- 2.13.0

### Kilde {#source}

Defineret i `inc/functions/domain.php`.


## Returnerer {#returns}

Boolesk værdi, der angiver, om domæneregistreringen skal oprettes.
