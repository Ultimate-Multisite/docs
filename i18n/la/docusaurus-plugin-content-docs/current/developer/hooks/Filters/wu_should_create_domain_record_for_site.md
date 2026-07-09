---
id: wu_should_create_domain_record_for_site
title: Filtrum - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtrum: wu_should_create_domain_record_for_site

Filtrat utrum Ultimate Multisite inscriptionem dominii pro situ nuper creato creare debeat.

Hoc filtro utere ut creationem automaticam inscriptionis dominii supprimatur aut differatur pro sitibus qui utuntur dominio basali communis formae solutionis, hospite interno, aut dominio quod alia integratio separatim administrabit.

## Parametra

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $create | `bool` | Utrum inscriptio dominii creanda sit. |
| $site | `WP_Site` | Obiectum situs nuper creati. |

### Ex quo

- 2.13.0

### Fons

Definitum in `inc/functions/domain.php`.


## Redditus

Booleanum indicans utrum inscriptio dominii creanda sit.
