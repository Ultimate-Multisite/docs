---
title: Integración con RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integración RunCloud

## Visión general
RunCloud es una plataforma de gestión de servidores basada en la nube que te permite desplegar y gestionar aplicaciones web en tus propios servidores en la nube de manera sencilla. Esta integración permite la sincronización automática de dominios y la gestión de certificados SSL entre Ultimate Multisite y RunCloud.

## Funcionalidades
- Sincronización automática de dominios
- Gestión de certificados SSL
- Eliminación de dominios cuando se eliminan las asignaciones

## Requisitos
Las siguientes constantes deben estar definidas en tu archivo `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Instrucciones de configuración

### 1. Obtén tus credenciales API de RunCloud

1. Inicia sesión en tu panel de RunCloud
2. Ve a "Perfil de usuario" (haz clic en tu foto de perfil en la esquina superior derecha)
3. Selecciona "API" del menú
4. Haz clic en "Generar clave API" si aún no tienes una
5. Copia tu clave API y tu secreto API

### 2. Obtén tus IDs de servidor y aplicación

1. En tu panel de RunCloud, ve a "Servidores"
2. Selecciona el servidor donde está alojado tu multisite de WordPress
3. El ID del servidor es visible en la URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Ve a "Aplicaciones web" y selecciona tu aplicación de WordPress
5. El ID de la aplicación es visible en la URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Añade las constantes a wp-config.php

Añade las siguientes constantes a tu archivo `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Habilita la integración

1. En el administrador de WordPress, ve a Ultimate Multisite > Ajustes
2. Navega a la pestaña "Mapeo de dominios"
3. Desplázate hacia abajo hasta "Integraciones de host"
4. Habilita la integración RunCloud
5. Haz clic en "Guardar cambios"

## Cómo funciona

Cuando un dominio se asigna en Ultimate Multisite:

1. La integración envía una solicitud a la API de RunCloud para agregar el dominio a tu aplicación
2. Si el dominio se agrega correctamente, la integración también volverá a desplegar los certificados SSL
3. Cuando se elimina una asignación de dominio, la integración eliminará el dominio de RunCloud

Para instalaciones con subdominios, la integración gestionará automáticamente la creación de subdominios en RunCloud cuando se añadan nuevos sitios a tu red.

## Solución de problemas

### Problemas de conexión API

- Verifica que tus credenciales API sean correctas
- Verifica que tus IDs de servidor y aplicación sean correctos
- Asegúrate de que tu cuenta RunCloud tenga los permisos necesarios

### Problemas con certificados SSL

- RunCloud puede tardar un tiempo en emitir certificados SSL
- Verifica que tus dominios apunten correctamente a la dirección IP de tu servidor
- Revisa la configuración SSL de RunCloud para tu aplicación

### Dominio no añadido

- Revisa los registros de Ultimate Multisite en busca de mensajes de error
- Verifica que el dominio no esté ya añadido a RunCloud
- Asegúrate de que tu plan RunCloud soporte múltiples dominios
