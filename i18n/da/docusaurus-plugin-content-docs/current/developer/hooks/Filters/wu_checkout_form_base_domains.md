---
id: wu_checkout_form_base_domains
title: Filter - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains

Filtrerer delte basisdomæner for betalingsformularer, som ikke bør blive til tilknyttede domæneregistreringer.

Brug dette filter, når en integration leverer yderligere basisdomæner til betalingsformularens **Websteds-URL**-felter. Domæner, der returneres af dette filter, behandles som delte registreringsværter i stedet for brugerdefinerede domæner pr. websted.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $domains | `array` | Delte basisdomæner indsamlet fra konfigurationen af betalingsformularen. |

### Siden {#since}

- 2.13.0

### Kilde {#source}

Defineret i `inc/functions/domain.php`.


## Returnerer {#returns}

Array af normaliserede basisdomæner for betalingsformularer.
