---
title: Isolamento Multi-Tenant
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Isolamento Multi-Tenant

Ultimate Multisite: Multi-Tenancy 1.2.0 suporta isolamento de banco de dados e sistema de arquivos por subsite para inquilinos soberanos. Isso mantém os dados do inquilino separados enquanto preserva o provisionamento em nível de rede, faturamento e administração.

## Estratégia de Isolamento {#isolation-strategy}

Use o isolamento soberano para clientes que necessitem de separação de dados mais forte, armazenamento de sistema de arquivos dedicado ou um limite de host separado.

Cada inquilino soberano deve ter:

- Um banco de dados dedicado ou uma estratégia de prefixo de banco de dados aprovada para o host.
- Uma raiz de sistema de arquivos dedicada do inquilino.
- Uma entrada no registro do inquilino que mapeia o site para seu banco de dados, caminho raiz, nome de host e modelo de isolamento.
- Um resultado de verificação de migração antes que o inquilino seja considerado ativo.

## Vinculação do Host do Banco de Dados {#database-host-binding}

A Versão 1.2.0 altera o comportamento padrão de vinculação de host na mesma máquina para instalações soberanas. Valores na mesma máquina, como `localhost`, são normalizados para que Bedrock, FrankenPHP e instalações do WordPress conteinerizadas possam conceder e verificar permissões contra a string de host MySQL que realmente vê.

Ao configurar um inquilino soberano:

1. Defina o host do banco de dados para o valor exigido pelo runtime do inquilino.
2. Use `localhost` para instalações locais de socket quando o host espera conexões locais.
3. Use `127.0.0.1` ou um nome de host de serviço apenas quando o servidor de banco de dados conceder privilégios a esse host.
4. Execute a verificação de migração após alterar a vinculação do host.

Se as verificações reportarem falhas na concessão, compare as permissões do usuário do DB do inquilino com a vinculação do host configurada. Um usuário concedido para `user@localhost` é diferente de `user@127.0.0.1` ou `user@%`.

## Raiz do Sistema de Arquivos {#filesystem-root}

A raiz do inquilino deve ser estável após reinicializações e implantamentos. Evite caminhos de montagem temporários. Para instalações no estilo Bedrock, confirme se a raiz do inquilino aponta para a raiz da web do WordPress esperada pelo bootstrap do inquilino, e não apenas para a raiz do projeto.

## Ordem de provisionamento {#provisioning-order}

Para novos inquilinos soberanos, use esta ordem:

1. Criar a entrada no registro do inquilino.
2. Criar o banco de dados e o usuário do banco de dados do inquilino.
3. Bootstrapar o esquema do inquilino.
4. Provisionar usuários do inquilino.
5. Configurar os caminhos do sistema de arquivos do inquilino.
6. Executar a verificação da migração.
7. Alterar o roteamento ou DNS após a verificação ser bem-sucedida.

Esta ordem evita que inquilinos parcialmente isolados recebam tráfego antes que o escritor do banco de dados, os usuários e o sistema de arquivos estejam prontos.

## Fluxos de gerenciamento de clientes soberanos {#sovereign-customer-management-flows}

O Ultimate Multisite v2.13.0 mantém as ações de gerenciamento de clientes no site principal quando o modo soberano está ativado. Um inquilino ainda pode rodar como uma instalação do WordPress isolada, mas ações voltadas ao cliente que dependem de faturamento de rede, associação ou dados de conta compartilhada devem redirecionar o cliente para o site principal em vez de tentar concluir a ação dentro da execução do inquilino.

O fluxo do site principal se aplica a:

- Alterações de checkout e planos.
- Visão geral da conta e ações de perfil do cliente.
- Atualizações de endereço de faturamento e telas de gerenciamento de pagamento.
- Visualizações de fatura e histórico de pagamentos.
- Ações de gerenciamento de site, como adicionar ou excluir um site.
- Troca de template.
- Mapeamento de domínio e alterações de domínio principal.

Quando o cliente inicia uma dessas ações a partir de um inquilino soberano (sovereign tenant), o Ultimate Multisite constrói a URL do site principal correspondente e mantém o inquilino de origem como destino de retorno, quando for seguro fazê-lo. Isso permite que os clientes concluam a ação gerenciada contra os registros da rede e depois retornem ao contexto do inquilino sem duplicar o estado de faturamento ou associação no banco de dados soberano.

Para os operadores, a regra prática é: mantenha as páginas de faturamento (billing), conta (account), checkout, fatura (invoice), template e gerenciamento de domínio disponíveis no site principal para redes soberanas. Os dashboards dos inquilinos podem linkar para essas páginas, mas o site principal permanece a fonte da verdade para a ação.
