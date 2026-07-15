---
id: wu_should_create_domain_record_for_site
title: Filtar - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtar: wu_should_create_domain_record_for_site

Filtrira treba li Ultimate Multisite stvoriti zapis domene za novostvorenu web-stranicu.

Upotrijebite ovaj filtar za sprječavanje ili odgađanje automatskog stvaranja zapisa domene za web-stranice koje koriste zajedničku osnovnu domenu obrasca za naplatu, interni host ili domenu kojom će druga integracija upravljati zasebno.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $create | `bool` | Treba li zapis domene biti stvoren. |
| $site | `WP_Site` | Novostvoreni objekt web-stranice. |

### Od verzije {#since}

- 2.13.0

### Izvor {#source}

Definirano u `inc/functions/domain.php`.


## Povratna vrijednost {#returns}

Boolean koji označava treba li stvoriti zapis domene.
