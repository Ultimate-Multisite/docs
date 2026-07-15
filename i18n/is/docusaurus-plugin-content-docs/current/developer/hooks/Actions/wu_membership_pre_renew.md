---
id: wu_membership_pre_renew
title: Aðgerð - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

Keyrist áður en aðild er endurnýjuð.

## Færibreytur {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Ný gildistími sem á að stilla. |
| $membership_id | `int` | Auðkenni aðildarinnar. |
| $membership | `\Membership` | Aðildarhlutur. |

### Síðan {#since}

- 2.0
### Uppruni {#source}

Skilgreint í [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) í línu 2204
