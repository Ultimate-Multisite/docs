---
title: Integração Cloudways
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways Integration

## Overview
Cloudways é uma plataforma de hospedagem em nuvem gerenciada que permite implantar sites WordPress em vários provedores de nuvem como DigitalOcean, AWS, Google Cloud e outros. Esta integração permite sincronização automática de domínios e gerenciamento de certificados SSL entre Ultimate Multisite e Cloudways.

## Features
- Sincronização automática de domínios
- Gerenciamento de certificados SSL
- Suporte a domínios extras
- Validação DNS para certificados SSL

## Requirements
As seguintes constantes devem ser definidas no seu arquivo `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opcionalmente, você também pode definir:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Setup Instructions

### 1. Get Your Cloudways API Credentials

1. Faça login no seu painel Cloudways
2. Vá para "Account" > "API Keys"
3. Gere uma chave API se você ainda não tiver uma
4. Copie seu e-mail e chave API

### 2. Get Your Server and Application IDs

1. No seu painel Cloudways, vá para "Servers"
2. Selecione o servidor onde seu multisite WordPress está hospedado
3. O Server ID é visível na URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Vá para "Applications" e selecione seu aplicativo WordPress
5. O App ID é visível na URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Add Constants to wp-config.php

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Se você tem domínios adicionais que devem sempre ser incluídos:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Enable the Integration

1. No seu painel WordPress, vá para Ultimate Multisite > Settings
2. Navegue até a aba "Domain Mapping"
3. Role para baixo até "Host Integrations"
4. Ative a integração Cloudways
5. Clique em "Save Changes"

## How It Works

### Domain Syncing

Quando um domínio é mapeado no Ultimate Multisite:

1. A integração recupera todos os domínios atualmente mapeados
2. Ela adiciona o novo domínio à lista (junto com uma versão www, se aplicável)
3. Ela envia a lista completa para o Cloudways via API
4. O Cloudways atualiza os aliases de domínio para sua aplicação

Nota: A API do Cloudways requer o envio da lista completa de domínios a cada vez, não apenas adicionando ou removendo domínios individuais.

### SSL Certificate Management

Após os domínios serem sincronizados:

1. A integração verifica quais domínios têm registros DNS válidos apontando para seu servidor
2. Ela envia uma solicitação ao Cloudways para instalar certificados SSL Let's Encrypt para esses domínios
3. O Cloudways lida com a emissão e instalação do certificado SSL

## Extra Domains

A constante `WU_CLOUDWAYS_EXTRA_DOMAINS` permite que você especifique domínios adicionais que devem sempre ser incluídos ao sincronizar com o Cloudways. Isso é útil para:

- Domínios que não são gerenciados pelo Ultimate Multisite
- Domínios curinga (por exemplo, `*.example.com`)
- Domínios de desenvolvimento ou staging

## Troubleshooting

### API Connection Issues
- Verifique se seu e-mail e chave API estão corretos
- Verifique se seus IDs de servidor e aplicação estão corretos
- Certifique-se de que sua conta Cloudways tem as permissões necessárias

### SSL Certificate Issues
- O Cloudways exige que os domínios tenham registros DNS válidos apontando para seu servidor antes de emitir certificados SSL
- A integração valida registros DNS antes de solicitar certificados SSL
- Se os certificados SSL não estão sendo emitidos, verifique se seus domínios estão apontando corretamente para o endereço IP do seu servidor

### Domain Not Added
- Verifique os logs do Ultimate Multisite para quaisquer mensagens de erro
- Verifique se o domínio já não está adicionado ao Cloudways
- Certifique-se de que seu plano Cloudways suporte o número de domínios que você está adicionando
