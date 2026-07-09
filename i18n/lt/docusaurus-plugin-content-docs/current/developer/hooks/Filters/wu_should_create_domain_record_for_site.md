---
id: wu_should_create_domain_record_for_site
title: Filtras - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtras: wu_should_create_domain_record_for_site

Filtruoja, ar Ultimate Multisite turėtų sukurti domeno įrašą naujai sukurtai svetainei.

Naudokite šį filtrą, kad sustabdytumėte arba atidėtumėte automatinį domeno įrašo kūrimą svetainėms, kurios naudoja bendrą checkout formos bazinį domeną, vidinį hostą arba domeną, kurį kita integracija valdys atskirai.

## Parametrai

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $create | `bool` | Ar domeno įrašas turėtų būti sukurtas. |
| $site | `WP_Site` | Naujai sukurtos svetainės objektas. |

### Nuo

- 2.13.0

### Šaltinis

Apibrėžta `inc/functions/domain.php`.


## Grąžina

Boolean reikšmę, nurodančią, ar kurti domeno įrašą.
