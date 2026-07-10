---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew {#action-wumembershipprerenew}

Üzvlük yenilənməsindən əvvəl işə düşür.

## Parametr(lər) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Təyin ediləcək yeni bitmə tarixi. |
| $membership_id | `int` | Üzvliyin ID-si. |
| $membership | `\Membership` | Üzvlük obyekti. |

### Nə vaxtdan {#since}

- 2.0
### Mənbə {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) faylında 2204-cü sətirdə təyin edilmişdir.
