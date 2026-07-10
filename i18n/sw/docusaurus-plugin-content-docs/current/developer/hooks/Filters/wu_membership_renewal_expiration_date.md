---
id: wu_membership_renewal_expiration_date
title: Kichujio - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date {#filter-wumembershiprenewalexpirationdate}

Inarekebisha tarehe ya mwisho ya kuisha (expiration date) iliyohesabiwa ili kuhakikisha inatangazwa baada ya upya (renewal).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Tarehe ya mwisho ya kuisha iliyohesabiwa. |
| $plan | `\Product` | Kichwa cha kiwango cha ushirikishwaji (Membership level object). |
| $membership_id | `int` | Kitambulisho cha ushirikishwaji. |
| $membership | `\Membership` | Kichwa cha ushirikishwaji (Membership object). |

### Tangu {#since}

- 2.0.0
### Chanzo {#source}

Imefafanuliwa katika [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) kwenye mstari wa 2192
