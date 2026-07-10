---
id: wu_should_create_domain_record_for_site
title: Filtras - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtras: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Filtruoja, ar Ultimate Multisite turėtų sukurti domeno įrašą naujai sukurtai svetainei.

Naudokite šį filtrą, kad sustabdytumėte arba atidėtumėte automatinį domeno įrašo kūrimą svetainėms, kurios naudoja bendrą checkout formos bazinį domeną, vidinį hostą arba domeną, kurį kita integracija valdys atskirai.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $create | `bool` | Ar domeno įrašas turėtų būti sukurtas. |
| $site | `WP_Site` | Naujai sukurtos svetainės objektas. |

### Nuo {#since}

- 2.13.0

### Šaltinis {#source}

Apibrėžta `inc/functions/domain.php`.


## Grąžina {#returns}

Boolean reikšmę, nurodančią, ar kurti domeno įrašą.
