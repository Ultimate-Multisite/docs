---
title: Integración RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integración RunCloud

## Visión Geral {#overview}
RunCloud é unha plataforma de xestión de servidores basada en nube que te permite desplegar e taminar web applications con facilidade nos teus propios servidores en a nube. Esta integración permite a sincronización automática de domínios e a xestión de certificados SSL entre Ultimate Multisite e RunCloud.

## Características {#features}
- Sincronización automática de dominios
- Xestión de certificados SSL
- Eliminación do dominio cando se boran as mapeás

## Requisitos {#requirements}
As seguintes constantes deben estar definidas no teu ficheiro `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'tu_api_key');
define('WU_RUNCLOUD_API_SECRET', 'tu_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'tu_server_id');
define('WU_RUNCLOUD_APP_ID', 'tu_app_id');
```

## Instrución de Configuración {#setup-instructions}

### 1. Obtén as Credenciais API de RunCloud {#1-get-your-runcloud-api-credentials}

1. Inicia sesión no teu dashboard de RunCloud
2. Ve a "User Profile" (clica na túa foto de perfil no canto superior direito)
3. Seleita "API" do menú
4. Clica en "Generate API Key" se non tes hai unha ya
5. Copia a tua API Key e o API Secret

### 2. Obtén os IDs do Servidor e da App {#2-get-your-server-and-app-ids}

1. No teu dashboard de RunCloud, ve a "Servers" (Servidores)
2. Seleita o servidor onde está alojado o teu multisite de WordPress
3. O Server ID é visible na URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Ve a "Web Applications" e selecciona a túa aplicación de WordPress
5. O App ID é visible na URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Añade as Constantes a wp-config.php {#3-add-constants-to-wp-configphp}

Añade as seguintes constantes ao teu ficheiro `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'tu_api_key');
define('WU_RUNCLOUD_API_SECRET', 'tu_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'tu_server_id');
define('WU_RUNCLOUD_APP_ID', 'tu_app_id');
```

### 4. Habilita a Integración {#4-enable-the-integration}

1. No teu admin de WordPress, ve a Ultimate Multisite > Settings
2. Navega até à aba "Domain Mapping" (Mapeamento de Domínios)
3. Rola para baixo até "Host Integrations" (Integracións do Alojamento)
4. Activa a integración RunCloud
5. Clica en "Save Changes" (Guardar Alterações)

## Como Funciona {#how-it-works}

Cando que se mapea un dominio en Ultimate Multisite:

1. A integración envía unha petición á API de RunCloud para añadir o dominio á túa aplicación
2. Se o dominio se añade con éxito, a integración tamén redeployará os certificados SSL
3. Cando se remove un mapeamento de dominio, a integración removerá o dominio de RunCloud

Para instalacións de subdominios, a integración tratará automáticamente da creación de subdominios en RunCloud cando se añaden novos sitios á túa rede.

## Solución de Problemas (Troubleshooting) {#troubleshooting}

### Problemas de Conexión API {#api-connection-issues}
- Verifica que as tus credenciais API son correctas
- Comprueba que os teus IDs do servidor e da aplicación son correctos
- Asegúrate de que a túa conta RunCloud ten as permiñas necesarias

### Problemas de Certificados SSL {#ssl-certificate-issues}
- RunCloud pode levar algun tempo para emitir certificados SSL
- Verifica que os teus dominios apuntan correctamente á dirección IP do teu servidor
- Comprueba as configuracións SSL de RunCloud para a túa aplicación

### Dominio Non Añadido {#domain-not-added}
- Comprueba os logs de Ultimate Multisite en busca de calquera mensaxe de erro
- Verifica que o dominio non está añadido ata RunCloud
- Asegúrate de que o teu plan RunCloud suporta múltiples dominios
