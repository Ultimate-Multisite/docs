---
id: wu_should_create_domain_record_for_site
title: Filter - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Filtruje, či má Ultimate Multisite vytvoriť záznam domény pre novo vytvorenú stránku.

Použite tento filter na potlačenie alebo odloženie automatického vytvárania záznamu domény pre stránky, ktoré používajú zdieľanú základnú doménu platobného formulára, interného hostiteľa alebo doménu, ktorú bude samostatne spravovať iná integrácia.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $create | `bool` | Či sa má záznam domény vytvoriť. |
| $site | `WP_Site` | Novo vytvorený objekt stránky. |

### Od verzie

- 2.13.0

### Zdroj

Definované v `inc/functions/domain.php`.


## Návratová hodnota

Boolean označujúci, či sa má vytvoriť záznam domény.
