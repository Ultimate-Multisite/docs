---
title: Integração de Multi-Tenancy
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integração de Multi-Tenancy {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 altera vários pontos de integração para locatários soberanos, verificação de migração e automatização do ciclo de vida de locatários.

## Fluxo de arranque do locatário {#tenant-bootstrap-flow}

As integrações que criam ou modificam locatários devem seguir esta ordem:

1. Resolver o registo do locatário no registo central e o modelo de isolamento.
2. Criar ou verificar o escritor da base de dados do locatário.
3. Inicializar o esquema do locatário.
4. Aprovisionar utilizadores do locatário.
5. Registar o encaminhamento do locatário e os caminhos do sistema de ficheiros.
6. Executar a verificação de migração antes de expor o locatário.

Não assuma que um locatário soberano pode reutilizar a ligação à base de dados da rede. Use o registo de locatários e as abstrações de escritor fornecidas pelo complemento.

## SSO e ganchos REST {#sso-and-rest-hooks}

O autologin sem estado do locatário usa tokens de curta duração com uma declaração de finalidade, proteção contra repetição JTI, um limite de expiração e fixação de origem. As integrações que adicionam botões de login ou links de gestão remota devem gerar visitas ao locatário através do fluxo SSO suportado em vez de construírem diretamente URLs de login do locatário.

Eventos de auditoria da API do lado da rede e resumos diários estão disponíveis para gateways de locatários soberanos. Use esses registos ao depurar sistemas externos que chamam endpoints do ciclo de vida de locatários.

## URLs de ação de clientes soberanos {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 encaminha ações de clientes de locatários soberanos de volta para o site principal para fluxos de conta, checkout, faturação, fatura, site, troca de modelo e mapeamento de domínio. As integrações que apresentam links de gestão do lado do locatário devem apontar essas ações para o painel de cliente do site principal e incluir um destino de retorno validado quando o utilizador deve poder navegar de volta para o locatário depois de concluir a ação.

Use o wrapper SSO do núcleo para links de gestão entre domínios:

```php
$url = wu_with_sso($main_site_customer_url);
```

O URL gerado continua a poder ser filtrado através de `wu_sso_url`, que recebe o URL SSO, o utilizador atual, o ID do site de destino e o contexto de redirecionamento. Complementos podem usar esse filtro para acrescentar contexto específico do fornecedor ou para substituir o URL do broker, preservando a validação de tokens do Ultimate Multisite.

Não duplique o estado de adesão, fatura, morada de faturação, modelo ou gestão de domínio dentro do locatário soberano. Trate o painel do locatário como o lançador e o painel de cliente do site principal como o sistema de registo para ações geridas.

## Verificação de migração {#migration-verification}

Depois de uma migração ou integração de ciclo de vida alterar dados do locatário, execute os pontos de verificação:

- `wp tenant verify-no-legacy --site=<site-id>` confirma que o locatário já não depende de caminhos legados do lado da rede.
- `wp tenant verify-sovereign-push --site=<site-id>` confirma que tarefas de push soberano podem processar e esvaziar.

As integrações devem tratar a verificação falhada como um bloqueador de implementação e evitar marcar um locatário como ativo até a falha estar resolvida.

## Eliminação de locatários {#tenant-deletion}

Os fluxos de eliminação devem chamar o caminho de desmantelamento do complemento para que as credenciais da base de dados do locatário sejam limpas. Integrações externas podem remover recursos do fornecedor depois de o desmantelamento ser concluído com sucesso, mas não devem eliminar bases de dados ou pastas do alojamento enquanto a verificação ou tarefas de push assíncronas ainda estiverem em execução.

## Router de base de dados obsoleto {#deprecated-database-router}

O `Database_Router` legado foi substituído por um stub de depreciação. Novas integrações devem resolver locatários através das APIs atuais do router de site e do registo de locatários, em vez de dependerem da classe de router antiga.
