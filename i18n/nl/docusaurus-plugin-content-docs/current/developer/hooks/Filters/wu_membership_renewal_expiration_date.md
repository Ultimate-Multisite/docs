---
id: wu_membership_renewal_expiration_date
title: Filter - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date

Filtert de berekende vervaldatum zodat deze na de verlenging wordt ingesteld.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $expiration | `string` | Berekende vervaldatum |
| $plan | `\Product` | Lidmaatschapniveau object |
| $membership_id | `int` | Het ID van het lidmaatschap |
| $membership | `\Membership` | Lidmaatschap object |

### Since

- 2.0.0

### Source

Gedefinieerd in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) op regel 2192
