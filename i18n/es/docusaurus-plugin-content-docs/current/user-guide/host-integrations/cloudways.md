---
title: Integración con Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integración con Cloudways

## Resumen {#overview}
Cloudways es una plataforma de alojamiento en la nube gestionado que te permite desplegar sitios WordPress en varios proveedores de nube como DigitalOcean, AWS, Google Cloud y más. Esta integración permite la sincronización automática de dominios y la gestión de certificados SSL entre Ultimate Multisite y Cloudways.

## Funciones {#features}
- Sincronización automática de dominios
- Gestión de certificados SSL
- Soporte para dominios adicionales
- Validación DNS para certificados SSL

## Requisitos {#requirements}
Las siguientes constantes deben definirse en tu archivo `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opcionalmente, también puedes definir:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Instrucciones de configuración {#setup-instructions}

### 1. Obtén tus credenciales de API de Cloudways {#1-get-your-cloudways-api-credentials}

1. Inicia sesión en tu Dashboard de Cloudways
2. Ve a "Account" > "API Keys"
3. Genera una clave de API si aún no tienes una
4. Copia tu correo electrónico y la clave de API

### 2. Obtén tus ID de servidor y aplicación {#2-get-your-server-and-application-ids}

1. En tu Dashboard de Cloudways, ve a "Servers"
2. Selecciona el servidor donde está alojado tu multisitio WordPress
3. El ID del servidor es visible en la URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Ve a "Applications" y selecciona tu aplicación WordPress
5. El ID de la aplicación es visible en la URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Añade constantes a wp-config.php {#3-add-constants-to-wp-configphp}

Añade las siguientes constantes a tu archivo `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Si tienes dominios **externos** adicionales (fuera de tu red multisitio) que siempre deben mantenerse en la lista de alias de Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning No incluyas el comodín de tu propia red
**No** añadas `*.your-network.com` (ni ningún patrón de subdominio de tu propia red) a
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Consulta [Importante — problema con SSL comodín](#important--wildcard-ssl-pitfall)
más abajo para saber por qué esto impide que se emitan certificados SSL por inquilino.
:::

### 4. Activa la integración {#4-enable-the-integration}

1. En tu administrador de WordPress, ve a Ultimate Multisite > Settings
2. Navega a la pestaña "Domain Mapping"
3. Desplázate hacia abajo hasta "Host Integrations"
4. Activa la integración con Cloudways
5. Haz clic en "Save Changes"

## Cómo funciona {#how-it-works}

### Sincronización de dominios {#domain-syncing}

Cuando se asigna un dominio en Ultimate Multisite:

1. La integración recupera todos los dominios asignados actualmente
2. Añade el nuevo dominio a la lista (junto con una versión www si corresponde)
3. Envía la lista completa a Cloudways mediante la API
4. Cloudways actualiza los alias de dominio para tu aplicación

Nota: La API de Cloudways requiere enviar la lista completa de dominios cada vez, no solo añadir o eliminar dominios individuales.

### Gestión de certificados SSL {#ssl-certificate-management}

Después de sincronizar los dominios:

1. La integración comprueba qué dominios tienen registros DNS válidos que apuntan a tu servidor
2. Envía una solicitud a Cloudways para instalar certificados SSL de Let's Encrypt para esos dominios
3. Cloudways gestiona la emisión e instalación de los certificados SSL

La integración siempre solicita certificados Let's Encrypt **estándar** (no comodín) a
Cloudways. Si se proporciona un patrón comodín en `WU_CLOUDWAYS_EXTRA_DOMAINS`, el prefijo
`*.` se elimina antes de la solicitud SSL; el comodín en sí nunca es instalado por esta
integración. Para usar un certificado comodín en Cloudways tendrías que instalarlo
manualmente, pero hacerlo bloquea la emisión de Let's Encrypt por dominio para dominios personalizados asignados
(consulta el problema más abajo).

## Dominios adicionales {#extra-domains}

La constante `WU_CLOUDWAYS_EXTRA_DOMAINS` te permite especificar dominios **externos**
adicionales que siempre deben mantenerse en la lista de alias de la aplicación de Cloudways. Úsala para:

- Dominios externos que no son gestionados por Ultimate Multisite (por ejemplo, un sitio de marketing independiente que comparte la misma aplicación de Cloudways)
- Dominios aparcados o de staging que quieres mantener en la lista de alias de la aplicación

**No** uses esta constante para el comodín de subdominio de tu propia red
(por ejemplo, `*.your-network.com`). Consulta el problema de SSL comodín más abajo.

## Importante — problema con SSL comodín {#important--wildcard-ssl-pitfall}

Un error común al seguir la configuración predeterminada de Cloudways es añadir un comodín como
`*.your-network.com` a `WU_CLOUDWAYS_EXTRA_DOMAINS`, o instalar manualmente un certificado SSL
comodín de Cloudways para ese comodín.

**Si haces esto, Cloudways se negará a emitir certificados Let's Encrypt para los
dominios personalizados por inquilino que Ultimate Multisite asigna.** Cloudways reemplaza el certificado
SSL activo en la aplicación cada vez, y un certificado comodín preexistente en
la aplicación bloquea la emisión de Let's Encrypt por dominio de la que depende la integración.

### Configuración SSL recomendada en Cloudways para una red Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. En la pestaña **SSL Certificate** de la aplicación de Cloudways, instala un **certificado
   Let's Encrypt estándar** que cubra solo `your-network.com` y `www.your-network.com`
   — **no** un comodín.
2. **No** pongas `*.your-network.com` (ni ningún patrón de subdominio de tu propia red) en
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Reserva esa constante solo para dominios **externos**.
3. Crea el comodín de subdominio por inquilino solo a nivel de **DNS** (un registro `A` para
   `*.your-network.com` que apunte a la IP de tu servidor Cloudways) para que los subsitios resuelvan. El SSL
   para dominios personalizados asignados individuales se emite entonces automáticamente mediante la integración
   vía Let's Encrypt.

Si los dominios personalizados de tus inquilinos se quedan sin SSL, revisa la pestaña SSL de Cloudways. Si hay un certificado wildcard activo allí, elimínalo, vuelve a emitir un certificado estándar de Let's Encrypt solo para el dominio principal de la red y elimina cualquier entrada wildcard de `WU_CLOUDWAYS_EXTRA_DOMAINS`. Luego vuelve a activar un mapeo de dominio (o espera al siguiente) y la integración volverá a emitir certificados por dominio.

## Solución de problemas {#troubleshooting}

### Problemas de conexión con la API {#api-connection-issues}
- Verifica que tu correo electrónico y API key sean correctos
- Comprueba que los IDs de tu servidor y aplicación sean correctos
- Asegúrate de que tu Account de Cloudways tenga los permisos necesarios

### Problemas con certificados SSL {#ssl-certificate-issues}
- Cloudways requiere que los dominios tengan registros DNS válidos que apunten a tu servidor antes de emitir certificados SSL
- La integración valida los registros DNS antes de solicitar certificados SSL
- Si no se están emitiendo certificados SSL, comprueba que tus dominios apunten correctamente a la dirección IP de tu servidor
- **¿Dominios personalizados por inquilino bloqueados sin SSL?** Revisa la pestaña SSL Certificate de la aplicación de Cloudways. Si un certificado wildcard (instalado manualmente o que cubra `*.your-network.com`) está activo, Cloudways no emitirá certificados Let's Encrypt para dominios personalizados mapeados individualmente. Sustitúyelo por un certificado estándar de Let's Encrypt que cubra solo el dominio principal de la red (`your-network.com`, `www.your-network.com`) y elimina cualquier entrada wildcard de `WU_CLOUDWAYS_EXTRA_DOMAINS`. Luego vuelve a activar un mapeo de dominio (o espera al siguiente) y la integración solicitará certificados por dominio.

### Dominio no añadido {#domain-not-added}
- Revisa los registros de Ultimate Multisite por si hay mensajes de error
- Verifica que el dominio no se haya añadido ya a Cloudways
- Asegúrate de que tu plan de Cloudways admita el número de dominios que estás añadiendo
