---
id: wu_membership_post_cancel
title: Ação - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Ação: wu_membership_post_cancel {#action-wumembershippostcancel}

Aciona depois de a membership ser cancelada.

Isto aciona o email de cancelamento.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $membership_id | `int` | O ID da membership. |
| $membership | `\WP_Ultimo\Models\Membership` | Objeto membership. |

### Desde {#since}

- 2.0
### Fonte {#source}

Definido em [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) na linha 2290
