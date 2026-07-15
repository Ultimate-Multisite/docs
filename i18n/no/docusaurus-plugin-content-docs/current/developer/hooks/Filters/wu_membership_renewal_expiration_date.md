---
id: wu_membership_renewal_expiration_date
title: Filter - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date

Filtrerer den beregnede utløpsdatoen slik at den settes etter fornyelsen.

## Parametere {#parameters}

| Name | Type | Beskrivelse |
|------|------|-------------|
| $expiration | `string` | Den beregnede utløpsdatoen. |
| $plan | `\Product` | Medlemskapsnivåobjekt. |
| $membership_id | `int` | ID-en til medlemskapet. |
| $membership | `\Membership` | Medlemskapsobjekt. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) på linje 2192
