---
id: wu_should_create_domain_record_for_site
title: Filtr - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Filtruje, czy Ultimate Multisite powinien utworzyć rekord domeny dla nowo utworzonej witryny.

Użyj tego filtra, aby pominąć lub odroczyć automatyczne tworzenie rekordu domeny dla witryn, które używają współdzielonej domeny bazowej formularza realizacji zakupu, hosta wewnętrznego albo domeny, którą inna integracja będzie zarządzać osobno.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $create | `bool` | Czy rekord domeny powinien zostać utworzony. |
| $site | `WP_Site` | Obiekt nowo utworzonej witryny. |

### Od wersji {#since}

- 2.13.0

### Źródło {#source}

Zdefiniowano w `inc/functions/domain.php`.


## Zwraca {#returns}

Wartość logiczna wskazująca, czy utworzyć rekord domeny.
