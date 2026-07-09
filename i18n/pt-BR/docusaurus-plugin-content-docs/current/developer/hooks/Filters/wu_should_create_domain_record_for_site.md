---
id: wu_should_create_domain_record_for_site
title: Filtro - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtro: wu_should_create_domain_record_for_site

Filtra se Ultimate Multisite deve criar um registro de domínio para um site recém-criado.

Use este filtro para suprimir ou adiar a criação automática de registro de domínio para sites que usam um domínio base de formulário de checkout compartilhado, um host interno ou um domínio que outra integração gerenciará separadamente.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $create | `bool` | Se o registro de domínio deve ser criado. |
| $site | `WP_Site` | O objeto do site recém-criado. |

### Desde

- 2.13.0

### Fonte

Definido em `inc/functions/domain.php`.


## Retorna

Booleano indicando se o registro de domínio deve ser criado.
