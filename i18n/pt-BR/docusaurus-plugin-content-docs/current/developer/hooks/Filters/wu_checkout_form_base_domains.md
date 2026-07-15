---
id: wu_checkout_form_base_domains
title: Filtro - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filtro: wu_checkout_form_base_domains

Filtra os domínios base compartilhados do formulário de checkout que não devem se tornar registros de domínio mapeado.

Use este filtro quando uma integração fornece domínios base adicionais para campos **Site URL** do formulário de checkout. Os domínios retornados por este filtro são tratados como hosts de registro compartilhados em vez de domínios personalizados por site.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $domains | `array` | Domínios base compartilhados coletados da configuração do formulário de checkout. |

### Desde {#since}

- 2.13.0

### Fonte {#source}

Definido em `inc/functions/domain.php`.


## Retornos {#returns}

Array de domínios base normalizados do formulário de checkout.
