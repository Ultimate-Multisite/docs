---
id: wu_domain_became_primary
title: Ação - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Ação: wu_domain_became_primary

Dispara quando um domínio se torna o domínio principal de um site.

Esta ação é acionada quando o sinalizador primary_domain de um domínio é definido como true, seja ao criar um novo domínio principal ou ao atualizar um domínio existente para se tornar principal.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | O domínio que se tornou principal. |
| $blog_id | `int` | O ID do blog do site afetado. |
| $was_new | `bool` | Se este é um domínio recém-criado. |

### Desde

- 2.0.0

### Fonte

Definido em [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) na linha 560
