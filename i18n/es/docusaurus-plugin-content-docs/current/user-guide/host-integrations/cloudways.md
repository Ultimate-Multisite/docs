---
title: Integración con Cloudways
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways Integración

## Visión general
Cloudways es una plataforma de alojamiento en la nube gestionada que te permite desplegar sitios de WordPress en varios proveedores de nube como DigitalOcean, AWS, Google Cloud y más. Esta integración permite la sincronización automática de dominios y la gestión de certificados SSL entre Ultimate Multisite y Cloudways.

## Características
- Sincronización automática de dominios
- Gestión de certificados SSL
- Soporte para dominios adicionales
- Validación DNS para certificados SSL

## Requisitos
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

## Instrucciones de configuración

### 1. Obtén tus credenciales de API de Cloudways

1. Inicia sesión en tu panel de Cloudways
2. Ve a "Account" > "API Keys"
3. Genera una clave API si aún no tienes una
4. Copia tu correo electrónico y tu clave API

### 2. Obtén tus IDs de servidor y aplicación

1. En tu panel de Cloudways, ve a "Servers"
2. Selecciona el servidor donde está alojado tu WordPress multisite
3. El ID del servidor es visible en la URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Ve a "Applications" y selecciona tu aplicación WordPress
5. El ID de la aplicación es visible en la URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Añade constantes a wp-config.php

Añade las siguientes constantes a tu archivo `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Si tienes dominios adicionales que siempre deben incluirse:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Habilita la integración

1. En el administrador de WordPress, ve a Ultimate Multisite > Settings
2. Navega a la pestaña "Domain Mapping"
3. Desplázate hacia abajo hasta "Host Integrations"
4. Habilita la integración de Cloudways
5. Haz clic en "Save Changes"

## Cómo funciona

### Sincronización de dominios

Cuando un dominio se asigna en Ultimate Multisite:

1. La integración recupera todos los dominios asignados actualmente
2. Añade el nuevo dominio a la lista (junto con una versión www si aplica)
3. Envía la lista completa a Cloudways a través de la API
4. Cloudways actualiza los alias de dominio para tu aplicación

Nota: La API de Cloudways requiere enviar la lista completa de dominios cada vez, no solo agregar o eliminar dominios individuales.

### Gestión de certificados SSL

Después de que los dominios se sincronicen:

1. La integración verifica qué dominios tienen registros DNS válidos apuntando a tu servidor
2. Envía una solicitud a Cloudways para instalar certificados SSL Let's Encrypt para esos dominios
3. Cloudways se encarga de la emisión e instalación del certificado SSL

## Dominios adicionales

La constante `WU_CLOUDWAYS_EXTRA_DOMAINS` permite especificar dominios adicionales que siempre deben incluirse al sincronizar con Cloudways. Esto es útil para:

- Dominios que no están gestionados por Ultimate Multisite
- Dominios comodín (p. ej., `*.example.com`)
- Dominios de desarrollo o staging

## Solución de problemas

### Problemas de conexión API

- Verifica que tu correo electrónico y clave API sean correctos
- Verifica que tus IDs de servidor y aplicación sean correctos
- Asegúrate de que tu cuenta de Cloudways tenga los permisos necesarios

### Problemas de certificados SSL

- Cloudways requiere que los dominios tengan registros DNS válidos apuntando a tu servidor antes de emitir certificados SSL
- La integración valida los registros DNS antes de solicitar certificados SSL
- Si los certificados SSL no se emiten, verifica que tus dominios apunten correctamente a la dirección IP de tu servidor

### Dominio no añadido

- Revisa los registros de Ultimate Multisite en busca de mensajes de error
- Verifica que el dominio no esté ya añadido a Cloudways
- Asegúrate de que tu plan de Cloudways soporte el número de dominios que estás añadiendo
