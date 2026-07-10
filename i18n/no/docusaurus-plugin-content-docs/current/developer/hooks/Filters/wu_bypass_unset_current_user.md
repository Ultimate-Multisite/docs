---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Lar utviklere omgå koden som fjerner den nåværende brukeren.

Å returnere noe annet enn null vil omgå fjerningen av den nåværende påloggede brukeren. Dette kan være nyttig i enkelte scenarioer, for eksempel når man jobber med undernettsteder som brukes som administrasjonspaneler.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null for å fortsette, alt annet for å omgå det. |
| $current_user | `false\|\WP_User` | Objektet til den nåværende brukeren. |

### Siden {#since}

- 2.0.11
### Kilde {#source}

Definert i [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) på linje 221


## Returnerer {#returns}
