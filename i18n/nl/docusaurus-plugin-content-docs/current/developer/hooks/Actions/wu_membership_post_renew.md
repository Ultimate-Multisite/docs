---
id: wu_membership_post_renew
title: Actie - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Actie: wu_membership_post_renew

Wordt geactiveerd na de verlenging van het lidmaatschap.

## Parameters {#parameters}

| Naam | Type | Beschrijving |
|------|------|-------------|
| $expiration | `string` | New expiration date to be set. |
| $membership_id | `int` | The ID of the membership. |
| $membership | `\Membership` | Membership object. |

### Sinds {#since}

- 2.0
### Bron {#source}

Gedefinieerd in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) op regel 2235
