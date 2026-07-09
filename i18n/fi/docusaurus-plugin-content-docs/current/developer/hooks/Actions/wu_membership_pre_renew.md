---
id: wu_membership_pre_renew
title: Toiminto - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

Käynnistyy ennen membershipin uusimista.

## Parametrit

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Uusi asetettava vanhenemispäivä. |
| $membership_id | `int` | Membershipin ID. |
| $membership | `\Membership` | Membership-objekti. |

### Alkaen

- 2.0
### Lähde

Määritelty tiedostossa [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) rivillä 2204
