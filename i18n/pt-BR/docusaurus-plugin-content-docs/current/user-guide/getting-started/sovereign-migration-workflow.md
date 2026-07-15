---
title: Fluxo de Migração Soberana
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Fluxo de Migração Soberana

Ultimate Multisite: Multi-Tenancy 1.2.0 adiciona portões de verificação de migração para mover um subsite padrão para a infraestrutura do inquilino soberano.

## Antes de começar {#before-you-start}

Confirme que você tem:

- Um backup atual do site de origem.
- O addon Multi-Tenancy ativo.
- O banco de dados, o diretório raiz do sistema de arquivos e o domínio do inquilino de destino prontos.
- Uma vinculação do host do banco de dados que corresponda ao ambiente de destino.
- Acesso para executar comandos WP-CLI para a rede.

## Fluxo de trabalho recomendado {#recommended-workflow}

1. Prepare o banco de dados e o sistema de arquivos do inquilino de destino.
2. Registre ou atualize as configurações de isolamento do inquilino.
3. Execute a migração do inquilino.
4. Provisione ou verifique os usuários do inquilino.
5. Esvazie (drene) os jobs de migração assíncronos.
6. Execute a verificação da migração soberana.
7. Acesse o inquilino com SSO.
8. Altere o DNS ou o roteamento somente após a verificação ser aprovada.

## Portões de verificação {#verification-gates}

O fluxo de trabalho de verificação checa a migração de vários ângulos:

- O esquema do inquilino existe e pode ser escrito pelo escritor do banco de dados do inquilino.
- O host do banco de dados configurado tem permissões válidas.
- Os usuários do inquilino estão presentes e correspondem à contagem esperada de usuários da instalação soberana.
- A fila de push assíncrono pode ser esvaziada com sucesso.
- Os caminhos de dados legados no lado da rede não são mais necessários para o inquilino soberano.

Trate falhas de verificação como bloqueios pré-lançamento. Corrija o problema relatado no banco de dados, usuário, fila ou roteamento e execute a verificação novamente antes de expor o inquilino aos clientes.

## Primeira visita à produção {#first-production-visit}

Após a aprovação da verificação, use **Visitar (SSO)** na tela de gerenciamento do site para a primeira visita administrativa. Isso confirma o roteamento do inquilino, o tratamento do token SSO, o *origin pinning* e o provisionamento de usuários no lado do inquilino em uma etapa controlada.
