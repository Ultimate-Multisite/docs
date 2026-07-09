---
id: wu_should_create_domain_record_for_site
title: Hidlydd - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Hidlydd: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Yn hidlo a ddylai Ultimate Multisite greu cofnod parth ar gyfer safle newydd ei greu.

Defnyddiwch y hidlydd hwn i atal neu ohirio creu cofnod parth awtomatig ar gyfer safleoedd sy'n defnyddio parth sylfaen ffurflen dalu a rennir, gwesteiwr mewnol, neu barth y bydd integreiddiad arall yn ei reoli ar wahân.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $create | `bool` | A ddylid creu'r cofnod parth. |
| $site | `WP_Site` | Gwrthrych y safle newydd ei greu. |

### Ers {#since}

- 2.13.0

### Ffynhonnell {#source}

Wedi'i ddiffinio yn `inc/functions/domain.php`.


## Dychweliadau {#returns}

Gwerth Booleaidd sy'n nodi a ddylid creu'r cofnod parth.
