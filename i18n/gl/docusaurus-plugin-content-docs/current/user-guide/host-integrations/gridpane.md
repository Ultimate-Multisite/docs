---
title: Integración de GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integración con GridPane {#gridpane-integration}

## Visión General {#overview}
GridPane é un painel de control de alojamiento especializado para WordPress, feito para profesionales sérios de WordPress. Esta integración permite a sincronización automática de domínios y la gestión de certificados SSL entre Ultimate Multisite e GridPane.

## Características {#features}
- Sincronización automática de dominios
- Gestión de certificados SSL
- Configuración automática da constante SUNRISE

## Requisitos {#requirements}
As constantes siguientes deben definirse no seu ficheiro `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'sua_chave_api');
define('WU_GRIDPANE_SERVER_ID', 'seu_id_do_servidor');
define('WU_GRIDPANE_APP_ID', 'seu_site_id');
```

## Instrucciones de Configuración {#setup-instructions}

### 1. Obtenha as Credenciais API da GridPane {#1-get-your-gridpane-api-credentials}

1. Inicie sesión no seu painel da GridPane
2. Vá a "Settings" > "API" (Configurações > API)
3. Gere uma chave API se ainda não tiver uma
4. Copie a sua chave API

### 2. Obtenha os IDs do Servidor e do Site {#2-get-your-server-and-site-ids}

1. No seu painel da GridPane, vá a "Servers" (Servidores)
2. Selecione o servidor onde está alojado o seu multisite WordPress
3. Anote o Server ID (visível na URL ou na página de detalhes do servidor)
4. Vá a "Sites" e selecione o seu site WordPress
5. Anote o Site ID (visível na URL ou na página de detalhes do site)

### 3. Adicione as Constantes ao wp-config.php {#3-add-constants-to-wp-configphp}

Adicione as seguintes constantes ao seu ficheiro `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'sua_chave_api');
define('WU_GRIDPANE_SERVER_ID', 'seu_id_do_servidor');
define('WU_GRIDPANE_APP_ID', 'seu_site_id');
```

### 4. Ative a Integração {#4-enable-the-integration}

1. No seu painel de administração do WordPress, vá a Ultimate Multisite > Settings (Configurações)
2. Navegue até à aba "Domain Mapping" (Mapeamento de Domínios)
3. Desça até "Host Integrations" (Integrações de Hospedagem)
4. Ative a integração da GridPane
5. Clique em "Save Changes" (Guardar Alterações)

## Como Funciona {#how-it-works}

Quando um domínio é mapeado no Ultimate Multisite:

1. A integración envía unha petición á API de GridPane para añadir o dominio ao teu sitio
2. GridPane maneixa automáticamente a aprovisionación do certificado SSL
3. Cando se remove unha mapeo de dominios, a integración removerá o dominio de GridPane

A integración tamén maneixa automáticamente a constante SUNRISE no teu ficheiro wp-config.php, que é necesaria para que o mapeo de dominios funcione correctamente.

## Gestión da Constante SUNRISE {#sunrise-constant-management}

Un característica única da integración de GridPane é que revierte automáticamente a constante SUNRISE en wp-config.php para evitar conflitos co propio sistema de mapeo de dominios de GridPane. Isto asegura que ambos sistemas funcionen juntos sen problemas.

## Solución de Problemas {#troubleshooting}

### Problemas de conexión API {#api-connection-issues}
- Verifica que a tua chave API é correcta
- Comprueba que o teu servidor e os IDs do sitio son correctos
- Asegúrate de que a túa conta de GridPane ten as permiñas necesarias

### Problemas de certificado SSL {#ssl-certificate-issues}
- A GridPane pode levar algun tempo para emitir certificados SSL
- Verifica que os teus dominios apuntan correctamente á dirección IP do teu servidor
- Comprueba os configuracións de SSL de GridPane para o teu sitio

### Dominio non añadido {#domain-not-added}
- Comprueba os logs de Ultimate Multisite en busca de calquera mensaxe de erro
- Verifica que o dominio non está añadido a GridPane
- Asegúrate de que os teus registros DNS do dominio están configurados correctamente
