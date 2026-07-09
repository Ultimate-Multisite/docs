---
id: wu_membership_post_renew
title: Ação - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Ação: wu_membership_post_renew

Acionada após a renovação da assinatura.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $expiration | `string` | New expiration date to be set. |
| $membership_id | `int` | The ID of the membership. |
| $membership | `\Membership` | Membership object. |

### Desde

- 2.0
### Fonte

Definido em [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) na linha 2235
