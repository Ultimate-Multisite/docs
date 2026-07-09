---
title: Integração Multi-Tenancy
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integração de Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 altera vários pontos de contato de integração para tenants soberanos, verificação de migração e automação do ciclo de vida de tenants.

## Fluxo de bootstrap de tenant

Integrações que criam ou modificam tenants devem seguir esta ordem:

1. Resolver o registro do tenant e o modelo de isolamento.
2. Criar ou verificar o gravador do banco de dados do tenant.
3. Fazer o bootstrap do schema do tenant.
4. Provisionar usuários do tenant.
5. Registrar o roteamento e os caminhos do sistema de arquivos do tenant.
6. Executar a verificação de migração antes de expor o tenant.

Não pressuponha que um tenant soberano possa reutilizar a conexão do banco de dados da rede. Use o registro de tenants e as abstrações de gravador fornecidas pelo addon.

## Hooks de SSO e REST

O autologin sem estado do tenant usa tokens de curta duração com uma declaração de propósito, proteção contra repetição de JTI, um limite de expiração e fixação de origem. Integrações que adicionam botões de login ou links de gerenciamento remoto devem gerar visitas ao tenant pelo fluxo de SSO suportado, em vez de construir URLs de login do tenant diretamente.

Eventos de auditoria de API no lado da rede e resumos diários estão disponíveis para gateways de tenants soberanos. Use esses logs ao depurar sistemas externos que chamam endpoints de ciclo de vida de tenants.

## URLs de ações de clientes soberanos

Ultimate Multisite v2.13.0 roteia ações de clientes de tenants soberanos de volta para o site principal para fluxos de conta, checkout, cobrança, fatura, site, troca de template e mapeamento de domínio. Integrações que renderizam links de gerenciamento no lado do tenant devem apontar essas ações para o painel de cliente do site principal e incluir um destino de retorno validado quando o usuário deve poder navegar de volta para o tenant após concluir a ação.

Use o wrapper SSO principal para links de gerenciamento entre domínios:

```php
$url = wu_with_sso($main_site_customer_url);
```

A URL gerada continua filtrável por meio de `wu_sso_url`, que recebe a URL de SSO, o usuário atual, o ID do site de destino e o contexto de redirecionamento. Add-ons podem usar esse filtro para anexar contexto específico do provedor ou substituir a URL do broker, preservando a validação de token do Ultimate Multisite.

Não duplique o estado de membership, fatura, endereço de cobrança, template ou gerenciamento de domínio dentro do tenant soberano. Trate o dashboard do tenant como o lançador e o painel de cliente do site principal como o sistema de registro para ações gerenciadas.

## Verificação de migração

Após uma integração de migração ou ciclo de vida alterar dados do tenant, execute os gates de verificação:

- `wp tenant verify-no-legacy --site=<site-id>` confirma que o tenant não depende mais de caminhos legados no lado da rede.
- `wp tenant verify-sovereign-push --site=<site-id>` confirma que jobs de push soberano podem processar e drenar.

Integrações devem tratar falhas de verificação como um bloqueador de implantação e evitar marcar um tenant como ativo até que a falha seja resolvida.

## Exclusão de tenant

Fluxos de exclusão devem chamar o caminho de teardown do addon para que as credenciais do banco de dados do tenant sejam limpas. Integrações externas podem remover recursos do provedor após o teardown ser bem-sucedido, mas não devem excluir bancos de dados ou pastas do host enquanto verificações ou jobs de push assíncrono ainda estiverem em execução.

## Roteador de banco de dados obsoleto

O `Database_Router` legado foi substituído por um stub de depreciação. Novas integrações devem resolver tenants por meio do roteador de sites atual e das APIs de registro de tenants, em vez de depender da classe de roteador antiga.
