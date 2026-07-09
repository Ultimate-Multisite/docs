---
id: wu_should_create_domain_record_for_site
title: Filter - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Filtreerib, kas Ultimate Multisite peaks looma domeenikirje äsja loodud saidi jaoks.

Kasuta seda filtrit automaatse domeenikirje loomise tõkestamiseks või edasilükkamiseks saitide puhul, mis kasutavad jagatud checkout-vormi põhidomeeni, sisemist hosti või domeeni, mida mõni teine integratsioon haldab eraldi.

## Parameetrid

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $create | `bool` | Kas domeenikirje tuleks luua. |
| $site | `WP_Site` | Äsja loodud saidi objekt. |

### Alates versioonist

- 2.13.0

### Allikas

Määratletud failis `inc/functions/domain.php`.


## Tagastab

Tõeväärtus, mis näitab, kas domeenikirje luua.
