---
title: Integração ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integração com o ServerPilot

## Visão Geral {#overview}
O ServerPilot é um serviço em nuvem para hospedar sites WordPress e outros sites PHP em servidores da DigitalOcean, Amazon, Google ou qualquer outro provedor de servidor. Esta integração permite a sincronização automática de domínios e gerenciamento de certificados SSL entre Ultimate Multisite e ServerPilot.

## Recursos {#features}
- Sincronização automática de domínio
- Gerenciamento de certificado SSL com Let's Encrypt
- Renovação automática do SSL

## Requisitos {#requirements}
As seguintes constantes devem ser definidas no seu arquivo `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'seu_client_id');
define('WU_SERVER_PILOT_API_KEY', 'sua_api_key');
define('WU_SERVER_PILOT_APP_ID', 'seu_app_id');
```

## Instruções de Configuração {#setup-instructions}

### 1. Obtenha suas Credenciais da API do ServerPilot {#1-get-your-serverpilot-api-credentials}

1. Faça login no seu painel do ServerPilot
2. Vá para "Account" > "API" (Conta > API)
3. Crie uma nova chave de API se você ainda não tiver uma
4. Copie seu Client ID e sua API Key

### 2. Obtenha seu App ID {#2-get-your-app-id}

1. No seu painel do ServerPilot, vá para "Apps" (Aplicativos)
2. Selecione o aplicativo onde seu multisite WordPress está hospedado
3. O App ID é visível na URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Adicione as Constantes ao wp-config.php {#3-add-constants-to-wp-configphp}

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'seu_client_id');
define('WU_SERVER_PILOT_API_KEY', 'sua_api_key');
define('WU_SERVER_PILOT_APP_ID', 'seu_app_id');
```

### 4. Ative a Integração {#4-enable-the-integration}

1. No seu painel de administração do WordPress, vá para Ultimate Multisite > Settings (Configurações)
2. Navegue até a aba "Domain Mapping" (Mapeamento de Domínio)
3. Role para baixo até "Host Integrations" (Integrações de Hospedagem)
4. Ative a integração ServerPilot
5. Clique em "Save Changes" (Salvar Alterações)

## Como Funciona {#how-it-works}

### Sincronização de Domínio {#domain-syncing}

Quando um domínio é mapeado no Ultimate Multisite:

1. A integração recupera a lista atual de domínios do ServerPilot
2. Ela adiciona o novo domínio à lista (junto com uma versão www, se aplicável)
3. Ela envia a lista atualizada para o ServerPilot via API
4. O ServerPilot atualiza a lista de domínios da sua aplicação

### Gerenciamento de Certificado SSL {#ssl-certificate-management}

Após a sincronização dos domínios:

1. A integração habilita automaticamente o AutoSSL para a sua aplicação
2. O ServerPilot cuida da emissão e instalação do certificado SSL usando Let's Encrypt
3. O ServerPilot também gerencia a renovação automática dos certificados SSL

## Verificação do Certificado SSL {#ssl-certificate-verification}

A integração é configurada para aumentar o número de tentativas de verificação do certificado SSL para o ServerPilot, já que pode levar algum tempo para o ServerPilot emitir e instalar os certificados SSL. Por padrão, ele tentará até 5 vezes, mas isso pode ser ajustado usando filtros.

## Solução de Problemas {#troubleshooting}

### Problemas de Conexão da API {#api-connection-issues}
- Verifique se seu Client ID e API Key estão corretos
- Confirme se o seu App ID está correto
- Certifique-se de que sua conta do ServerPilot tenha as permissões necessárias

### Problemas com o Certificado SSL {#ssl-certificate-issues}
- O ServerPilot exige que os domínios tenham registros DNS válidos apontando para o seu servidor antes de emitir os certificados SSL
- Se os certificados SSL não estiverem sendo emitidos, verifique se seus domínios estão apontando corretamente para o endereço IP do seu servidor
- Pode levar algum tempo para o ServerPilot emitir e instalar os certificados SSL (geralmente 5 a 15 minutos)

### Domínio Não Adicionado {#domain-not-added}
- Verifique os logs do Ultimate Multisite em busca de quaisquer mensagens de erro
- Confirme se o domínio ainda não foi adicionado ao ServerPilot
- Certifique-se de que seu plano do ServerPilot suporta o número de domínios que você está adicionando

### Remoção de Domínio {#domain-removal}
- Atualmente, a API do ServerPilot não oferece uma maneira de remover domínios individuais.
- Quando um mapeamento de domínio é removido no Ultimate Multisite, a integração atualizará a lista de domínios no ServerPilot para excluir o domínio removido.
