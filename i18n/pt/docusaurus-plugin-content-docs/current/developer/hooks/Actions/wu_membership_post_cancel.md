---
id: wu_membership_post_cancel
title: Ação - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Ação: wu_membership_post_cancel

Aciona depois de a membership ser cancelada.

Isto aciona o email de cancelamento.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $membership_id | `int` | O ID da membership. |
| $membership | `\WP_Ultimo\Models\Membership` | Objeto membership. |

### Desde

- 2.0
### Fonte

Definido em [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) na linha 2290
