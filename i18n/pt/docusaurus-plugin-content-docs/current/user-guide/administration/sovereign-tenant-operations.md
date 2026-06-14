---
title: Operações de Inquilino Soberano
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operações de Tenant Soberano

Ultimate Multisite: Multi-Tenancy 1.2.0 adiciona ferramentas operacionais para tenants soberanos: subsites que rodam com seu próprio banco de dados, raiz do sistema de arquivos e contexto de roteamento, mantendo-se visíveis para o administrador da rede.

Use esta página ao gerenciar sites de clientes isolados, transferências de sites remotos ou migrações que movem um subsite padrão para infraestrutura soberana.

## O que muda para os administradores

- **Autologin do tenant sem estado (Stateless)** — Os administradores da rede podem visitar um tenant soberano sem depender de estado de sessão compartilhado de longa duração. O token SSO é com escopo definido, fixado à origem, protegido contra repetição e limitado a uma janela de expiração curta.
- **Roteamento consciente do soberano (Sovereign-aware routing)** — Redes isoladas legadas e tenants soberanos resolvem através do mesmo caminho de roteador do site, reduzindo as diferenças de inicialização entre instalações antigas e novas isoladas.
- **Estado de migração verificado** — Verificações de migração checam o provisionamento do usuário, permissões de escritor do banco de dados, status de escoamento da fila (queue drain) e ausência de tabelas legadas antes que um tenant seja tratado como completo.
- **Desativação mais segura (Safer teardown)** — A desativação soberana agora remove as credenciais do tenant de forma limpa para que tenants excluídos não deixem acesso obsoleto ao banco de dados.

## Visitando um tenant soberano

1. Abra **Network Admin > Ultimate Multisite > Sites**.
2. Selecione o tenant soberano.
3. Use **Visit (SSO)** quando disponível em vez de copiar senhas ou criar contas de administrador temporárias.

O fluxo de visita cria um token de login de curta duração para aquele tenant e registra o evento SSO no rastro de auditoria do tenant. Se o botão falhar, verifique se o domínio do tenant resolve para a instalação esperada e se o tenant consegue acessar o endpoint SSO do lado da rede.

## Checklist de operações de site remoto

Antes de alterar um tenant soberano ou remoto, confirme:

- O domínio do inquilino aponta para o host que possui o sistema de arquivos do inquilino.
- O host do banco de dados do inquilino corresponde ao binding de host configurado para aquela instalação.
- Os comandos de verificação da migração passam para o inquilino.
- As filas de migração assíncrona são esvaziadas antes de fazer alterações de DNS ou propriedade.
- O usuário administrador do inquilino foi provisionado durante a migração e pode fazer login através do SSO.

## Excluindo inquilinos soberanos

Excluir um inquilino soberano é destrutivo. Confirme o status de backup e exportação primeiro, depois exclua na tela de gerenciamento do site. O fluxo de desinstalação 1.2.0 remove as credenciais do banco de dados do inquilino como parte da limpeza, mas os administradores ainda devem verificar se os usuários e pastas do banco de dados no nível do host desapareceram ao usar painéis de hospedagem externos.

:::warning
Não exclua um inquilino soberano enquanto a verificação da migração ainda estiver em execução ou enquanto jobs de push assíncronos estiverem na fila. Aguarde a conclusão da verificação para que o desinstalação não remova credenciais necessárias para os jobs pendentes.
:::
