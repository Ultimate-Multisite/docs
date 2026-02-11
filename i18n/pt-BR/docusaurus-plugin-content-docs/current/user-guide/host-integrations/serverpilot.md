---
title: Integração com ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integração ServerPilot

## Visão geral
ServerPilot é um serviço em nuvem para hospedagem de WordPress e outros sites PHP em servidores na DigitalOcean, Amazon, Google ou qualquer outro provedor de servidores. Esta integração permite sincronização automática de domínios e gerenciamento de certificados SSL entre Ultimate Multisite e ServerPilot.

## Funcionalidades
- Sincronização automática de domínios
- Gerenciamento de certificados SSL com Let's Encrypt
- Renovação automática de SSL

## Requisitos
As seguintes constantes devem ser definidas no seu arquivo `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Instruções de Configuração

### 1. Obtenha suas credenciais da API ServerPilot

1. Faça login no seu painel do ServerPilot
2. Vá para "Account" > "API"
3. Crie uma nova chave de API se você ainda não tiver uma
4. Copie seu Client ID e API Key

### 2. Obtenha seu App ID

1. No seu painel do ServerPilot, vá para "Apps"
2. Selecione o aplicativo onde seu multisite WordPress está hospedado
3. O App ID é visível na URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Adicione Constantes ao wp-config.php

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Ative a Integração

1. No seu admin do WordPress, vá para Ultimate Multisite > Settings
2. Navegue até a aba "Domain Mapping"
3. Role para baixo até "Host Integrations"
4. Ative a integração ServerPilot
5. Clique em "Save Changes"

## Como Funciona

### Sincronização de Domínios

Quando um domínio é mapeado no Ultimate Multisite:

1. A integração recupera a lista atual de domínios do ServerPilot
2. Ela adiciona o novo domínio à lista (junto com uma versão www, se aplicável)
3. Ela envia a lista atualizada ao ServerPilot via API
4. ServerPilot atualiza a lista de domínios para sua aplicação

### Gerenciamento de Certificado SSL

Após os domínios serem sincronizados:

1. A integração habilita automaticamente o AutoSSL para sua aplicação
2. ServerPilot lida com a emissão e instalação do certificado SSL usando Let's Encrypt
3. ServerPilot também lida com a renovação automática de certificados SSL

## Verificação de Certificado SSL

A integração está configurada para aumentar o número de tentativas de verificação de certificado SSL para o ServerPilot, pois pode levar algum tempo para o ServerPilot emitir e instalar certificados SSL. Por padrão, tentará até 5 vezes, mas isso pode ser ajustado usando filtros.

## Solução de Problemas

### Problemas de Conexão API

- Verifique se seu Client ID e API Key estão corretos
- Verifique se seu App ID está correto
- Certifique-se de que sua conta ServerPilot tem as permissões necessárias

### Problemas de Certificado SSL

- ServerPilot exige que os domínios tenham registros DNS válidos apontando para seu servidor antes de emitir certificados SSL
- Se os certificados SSL não estão sendo emitidos, verifique se seus domínios estão apontando corretamente para o endereço IP do seu servidor
- Pode levar algum tempo para o ServerPilot emitir e instalar certificados SSL (geralmente 5-15 minutos)

### Domínio Não Adicionado

- Verifique os logs do Ultimate Multisite em busca de mensagens de erro
- Verifique se o domínio não está já adicionado ao ServerPilot
- Certifique-se de que seu plano ServerPilot suporte o número de domínios que você está adicionando

### Remoção de Domínio

- Atualmente, a API do ServerPilot não fornece uma maneira de remover domínios individuais
- Quando um mapeamento de domínio é removido no Ultimate Multisite, a integração atualizará a lista de domínios no ServerPilot para excluir o domínio removido
