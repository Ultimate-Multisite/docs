---
id: wu_should_create_domain_record_for_site
title: Filtr - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtr: wu_should_create_domain_record_for_site

Filtruje, zda má Ultimate Multisite vytvořit záznam domény pro nově vytvořený web.

Použijte tento filtr k potlačení nebo odložení automatického vytvoření záznamu domény pro weby, které používají sdílenou základní doménu platebního formuláře, interního hostitele nebo doménu, kterou bude samostatně spravovat jiná integrace.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $create | `bool` | Zda má být záznam domény vytvořen. |
| $site | `WP_Site` | Objekt nově vytvořeného webu. |

### Od verze {#since}

- 2.13.0

### Zdroj {#source}

Definováno v `inc/functions/domain.php`.


## Návratová hodnota {#returns}

Booleovská hodnota označující, zda vytvořit záznam domény.
