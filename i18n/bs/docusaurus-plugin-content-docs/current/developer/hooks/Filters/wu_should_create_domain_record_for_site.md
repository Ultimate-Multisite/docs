---
id: wu_should_create_domain_record_for_site
title: Filter - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Filtrira da li Ultimate Multisite treba kreirati zapis domene za novokreiranu stranicu.

Koristite ovaj filter da suzbijete ili odgodite automatsko kreiranje zapisa domene za stranice koje koriste zajedničku osnovnu domenu obrasca za naplatu, interni host ili domenu kojom će druga integracija upravljati odvojeno.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $create | `bool` | Da li zapis domene treba biti kreiran. |
| $site | `WP_Site` | Novokreirani objekt stranice. |

### Od verzije {#since}

- 2.13.0

### Izvor {#source}

Definisano u `inc/functions/domain.php`.


## Vraća {#returns}

Boolean koji označava da li treba kreirati zapis domene.
