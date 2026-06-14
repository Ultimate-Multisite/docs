---
title: Verificação de Migração Soberana
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verificação de Migração Soberana

Ultimate Multisite: Multi-Tenancy 1.2.0 inclui comandos de verificação WP-CLI para migrações de inquilinos soberanos. Use-os quando uma migração de inquilino, visita SSO ou instalação isolada não se comportarem como esperado.

## Comandos a serem executados

Execute a verificação na instalação do WordPress da rede:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Use o ID do site para o inquilino que você está migrando. O primeiro comando verifica se o inquilino não depende mais de dados legados do lado da rede. O segundo comando verifica se os jobs de push soberano podem processar e esvaziar (drain).

## Falhas comuns

### Concessões do banco de dados não correspondem ao host

Se a verificação relatar falhas de concessão ou de usuário escritor, verifique o host do banco de dados configurado. `localhost`, `127.0.0.1` e um nome de serviço de container são hosts MySQL de concessão diferentes. Atualize a vinculação do host do inquilino ou as concessões do banco de dados e execute a verificação novamente.

### Instalações Bedrock ou locais não conseguem conectar

Instalações Bedrock e socket local podem relatar o banco de dados como `localhost` enquanto o runtime se conecta através de um endereço normalizado. A versão 1.2.0 normaliza strings de host na mesma máquina, mas sobrescritas de host personalizadas ainda podem entrar em conflito com as concessões do banco de dados.

### Fila de push assíncrono não esvazia (drain)

Se `verify-sovereign-push` não terminar, verifique o Action Scheduler ou o runner assíncrono configurado. Limpe os jobs falhos somente depois de confirmar que estão seguros para serem reprocessados ou descartados.

### Contagem de usuários do inquilino está incorreta

A migração deve provisionar usuários para o inquilino soberano. Se o usuário de instalação esperado estiver faltando, execute novamente a etapa de provisionamento de usuários antes de tentar o SSO novamente.

### Visita SSO é rejeitada

O login automático de inquilino sem estado exige que o domínio do inquilino, o origin pin (pino de origem), o propósito do token, o nonce e a expiração sejam iguais. Confirme se a URL do inquilino está correta e tente fazer o login logo após gerar a visita SSO.

## Quando tentar novamente

Tente verificar após cada alteração na infraestrutura. Não mude o tráfego de produção, exclua os dados da origem ou remova as credenciais de migração até que todos os verificações sejam aprovados.
