---
id: wu_membership_post_renew
title: Ação - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

Aciona após a renovação da subscrição.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $expiration | `string` | Nova data de expiração a ser definida. |
| $membership_id | `int` | O ID da subscrição. |
| $membership | `\Membership` | Objeto de subscrição. |

### Desde

- 2.0
### Fonte

Definido em [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) na linha 2235
