---
id: wu_should_create_domain_record_for_site
title: Filter - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Filtrerer om Ultimate Multisite skal opprette en domeneoppføring for et nyopprettet site.

Bruk dette filteret til å undertrykke eller utsette automatisk opprettelse av domeneoppføringer for sites som bruker et delt basedomene for checkout-skjema, en intern host eller et domene som en annen integrasjon vil administrere separat.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $create | `bool` | Om domeneoppføringen skal opprettes. |
| $site | `WP_Site` | Det nyopprettede site-objektet. |

### Siden {#since}

- 2.13.0

### Kilde {#source}

Definert i `inc/functions/domain.php`.


## Returverdi {#returns}

Boolsk verdi som angir om domeneoppføringen skal opprettes.
