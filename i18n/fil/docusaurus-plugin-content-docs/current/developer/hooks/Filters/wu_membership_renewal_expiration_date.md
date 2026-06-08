---
id: wu_membership_renewal_expiration_date
title: Filter - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date

Sinusuri ng filter na ito ang kalkuladong petsa ng pag-expire upang matiyak na ito ay itatakda pagkatapos ng pag-renew.

## Mga Parameter

| Name | Type | Paglalarawan |
|------|------|-------------|
| $expiration | `string` | Ang kalkuladong petsa ng pag-expire. |
| $plan | `\Product` | Ang object ng antas ng membership. |
| $membership_id | `int` | Ang ID ng membership. |
| $membership | `\Membership` | Ang object ng membership. |

### Mula

- 2.0.0
### Pinagmulan

Tinukoy sa [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) sa linya 2192
