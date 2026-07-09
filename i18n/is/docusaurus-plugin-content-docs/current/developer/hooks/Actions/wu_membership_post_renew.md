---
id: wu_membership_post_renew
title: Aðgerð - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Aðgerð: wu_membership_post_renew {#action-wumembershippostrenew}

Keyrist eftir endurnýjun aðildarinnar.

## Færibreytur {#parameters}

| Nafn | Tegund | Lýsing |
|------|------|-------------|
| $expiration | `string` | Ný lokadagsetning sem á að stilla. |
| $membership_id | `int` | Auðkenni aðildarinnar. |
| $membership | `\Membership` | Aðildarhlutur. |

### Síðan {#since}

- 2.0
### Uppruni {#source}

Skilgreint í [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) í línu 2235
