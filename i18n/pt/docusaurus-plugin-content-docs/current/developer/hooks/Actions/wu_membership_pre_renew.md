---
id: wu_membership_pre_renew
title: Ação - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Ação: wu_membership_pre_renew {#action-wumembershipprerenew}

Aciona antes da renovação da membership.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $expiration | `string` | Nova data de expiração a ser definida. |
| $membership_id | `int` | O ID da membership. |
| $membership | `\Membership` | Objeto membership. |

### Desde {#since}

- 2.0
### Fonte {#source}

Definido em [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) na linha 2204
