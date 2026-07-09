---
id: wu_should_create_domain_record_for_site
title: Filtro - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtro: wu_should_create_domain_record_for_site

Filtra se Ultimate Multisite deve criar um registo de domínio para um site recém-criado.

Use este filtro para suprimir ou adiar a criação automática de registos de domínio para sites que usam um domínio base de formulário de finalização de compra partilhado, um host interno ou um domínio que outra integração irá gerir separadamente.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $create | `bool` | Se o registo de domínio deve ser criado. |
| $site | `WP_Site` | O objeto do site recém-criado. |

### Desde

- 2.13.0

### Fonte

Definido em `inc/functions/domain.php`.


## Retorna

Booleano que indica se deve criar o registo de domínio.
