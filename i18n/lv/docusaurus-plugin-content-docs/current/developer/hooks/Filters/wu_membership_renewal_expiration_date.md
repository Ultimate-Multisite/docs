---
id: wu_membership_renewal_expiration_date
title: Filtrs - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filtrs: wu_membership_renewal_expiration_date {#filter-wumembershiprenewalexpirationdate}

Filtrē aprēķināto derīguma termiņa datumu, kas jāiestata pēc atjaunošanas.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $expiration | `string` | Aprēķinātais derīguma termiņa datums. |
| $plan | `\Product` | Dalības līmeņa objekts. |
| $membership_id | `int` | Dalības ID. |
| $membership | `\Membership` | Dalības objekts. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) 2192. rindā
