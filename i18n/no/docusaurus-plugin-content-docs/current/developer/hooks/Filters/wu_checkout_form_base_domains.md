---
id: wu_checkout_form_base_domains
title: Filter - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Filtrerer delte basisdomener for betalingsskjema som ikke skal bli oppføringer for tilordnede domener.

Bruk dette filteret når en integrasjon tilbyr flere basisdomener for **Site URL**-felt i betalingsskjema. Domener som returneres av dette filteret, behandles som delte registreringsverter i stedet for egendefinerte domener per nettsted.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $domains | `array` | Delte basisdomener samlet inn fra konfigurasjon av betalingsskjema. |

### Siden {#since}

- 2.13.0

### Kilde {#source}

Definert i `inc/functions/domain.php`.


## Returer {#returns}

Array med normaliserte basisdomener for betalingsskjema.
