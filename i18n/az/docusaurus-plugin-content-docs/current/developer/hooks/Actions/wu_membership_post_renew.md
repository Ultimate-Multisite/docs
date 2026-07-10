---
id: wu_membership_post_renew
title: Action - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew {#action-wumembershippostrenew}

Üzvlük yeniləndikdən sonra işə düşür.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Təyin ediləcək yeni bitmə tarixi. |
| $membership_id | `int` | Üzvliyin ID-si. |
| $membership | `\Membership` | Üzvlük obyekti. |

### Since {#since}

- 2.0
### Source {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) faylında 2235-ci sətirində təyin edilmişdir.
