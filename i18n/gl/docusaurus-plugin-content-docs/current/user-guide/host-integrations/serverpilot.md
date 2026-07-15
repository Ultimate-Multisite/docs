---
title: Integración ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integración ServerPilot

## Visión Geral {#overview}
ServerPilot é un servicio en nuvem para alojar sitios WordPress e outros sites em PHP en servidores da DigitalOcean, Amazon, Google ou qualquer outro provedor de servidor. Esta integração permite a sincronização automática de domínios e o gerenciamento de certificados SSL entre Ultimate Multisite e ServerPilot.

## Funcionalidades {#features}
- Sincronização automática de domínio
- Gerenciamento de certificado SSL com Let's Encrypt
- Renovação automática do SSL

## Requisitos {#requirements}
As seguintes constantes devem ser definidas no seu arquivo `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Instruções de Configuração {#setup-instructions}

### 1. Obtenha suas Credenciais da API do ServerPilot {#1-get-your-serverpilot-api-credentials}

1. Faça login no seu painel (dashboard) do ServerPilot
2. Vá para "Account" > "API"
3. Crie uma nova chave de API se ainda não tiver uma
4. Copie o seu Client ID e a sua API Key

### 2. Obtenha seu App ID {#2-get-your-app-id}

1. No seu painel do ServerPilot, vá para "Apps"
2. Selecione o app onde o seu multisite WordPress está hospedado
3. O App ID é visível na URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Adicione as Constantes ao wp-config.php {#3-add-constants-to-wp-configphp}

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Habilite a Integração {#4-enable-the-integration}

1. No seu painel de administração do WordPress, vá para Ultimate Multisite > Settings (Configurações)
2. Navegue até à aba "Domain Mapping" (Mapeamento de Domínio)
3. Role para baixo até "Host Integrations" (Integrações de Hospedagem)
4. Habilite a integração ServerPilot
5. Clique em "Save Changes" (Salvar Alterações)

## Como Funciona {#how-it-works}

### Sincronização de Domínio {#domain-syncing}

Quando um domínio é mapeado no Ultimate Multisite:

1. A integración recupera a lista actual de domínios do ServerPilot
2. Adiciona o novo domínio à lista (coa versión www, se aplicable)
3. Envia a lista actualizada ao ServerPilot vía API
4. O ServerPilot actualiza a lista de domínios da súa aplicación

### Gestión de Certificados SSL {#ssl-certificate-management}

Após sincronizar os domínios:

1. A integración activa automáticamente o AutoSSL para a súa aplicación
2. O ServerPilot gestiona a emisión e instalación do certificado SSL utilizando Let's Encrypt
3. O ServerPilot tamén gestiona a renovación automática dos certificados SSL

## Verificación de Certificados SSL {#ssl-certificate-verification}

A integración está configurada para aumentar o número de intentos de verificación de certificados SSL para o ServerPilot, ya que pode levar tempo ao ServerPilot para emitir e instalar os certificados SSL. Por defecto, intentará hasta 5 veces, pero isto pode ser ajustado utilizando filtros.

## Solución de Problemas {#troubleshooting}

### Problemas de Conexión API {#api-connection-issues}
- Verifique que o seu Client ID e API Key son correctos
- Compruebe que o seu App ID é correcto
- Asegúrese de que a súa conta do ServerPilot ten as permiñas necesarias

### Problemas de Certificados SSL {#ssl-certificate-issues}
- O ServerPilot requiere que os domínios sexan válidos registros DNS que apunten ao seu servidor antes de emitir os certificados SSL
- Se os certificados SSL non se están emitiñando, verifique que os seus domínios apunten correctamente á dirección IP do seu servidor
- Pode levar tempo ao ServerPilot para emitir e instalar os certificados SSL (usualmente 5-15 minutos)

### Dominio Non Añadido {#domain-not-added}
- Verifique nos logs de Ultimate Multisite se hai algun mensaje de erro
- Verifique que o dominio non está añadido a ServerPilot
- Asegúrese de que o seu plan do ServerPilot suporta o número de domínios que está a añadir

### Remoção de Domínio {#domain-removal}
- Atualmente, a API do ServerPilot não oferece uma forma de remover domínios individuais.
- Quando um mapeamento de domínio é removido no Ultimate Multisite, a integração atualizará a lista de domínios no ServerPilot para excluir o domínio removido.
