---
title: Integración con ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integración con ServerPilot

## Visión general
ServerPilot es un servicio en la nube para alojar WordPress y otros sitios web PHP en servidores de DigitalOcean, Amazon, Google o cualquier otro proveedor de servidores. Esta integración permite la sincronización automática de dominios y la gestión de certificados SSL entre Ultimate Multisite y ServerPilot.

## Funcionalidades
- Sincronización automática de dominios
- Gestión de certificados SSL con Let's Encrypt
- Renovación automática de SSL

## Requisitos
Las siguientes constantes deben definirse en tu archivo `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Instrucciones de configuración

### 1. Obtén tus credenciales API de ServerPilot

1. Inicia sesión en tu panel de ServerPilot
2. Ve a "Account" > "API"
3. Crea una nueva clave API si aún no tienes una
4. Copia tu Client ID y tu API Key

### 2. Obtén tu App ID

1. En tu panel de ServerPilot, ve a "Apps"
2. Selecciona la aplicación donde está alojado tu WordPress multisite
3. El App ID es visible en la URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Añade las constantes a wp-config.php

Añade las siguientes constantes a tu archivo `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Habilita la integración

1. En tu panel de WordPress, ve a Ultimate Multisite > Settings
2. Navega a la pestaña "Domain Mapping"
3. Desplázate hacia abajo hasta "Host Integrations"
4. Habilita la integración de ServerPilot
5. Haz clic en "Save Changes"

## Cómo funciona

### Sincronización de dominios

Cuando un dominio se asigna en Ultimate Multisite:

1. La integración recupera la lista actual de dominios de ServerPilot
2. Añade el nuevo dominio a la lista (junto con una versión www si aplica)
3. Envía la lista actualizada a ServerPilot a través de la API
4. ServerPilot actualiza la lista de dominios para tu aplicación

### Gestión de certificados SSL

Después de que los dominios se sincronicen:

1. La integración habilita automáticamente AutoSSL para tu aplicación
2. ServerPilot gestiona la emisión e instalación del certificado SSL utilizando Let's Encrypt
3. ServerPilot también gestiona la renovación automática de los certificados SSL

## Verificación de certificados SSL

La integración está configurada para aumentar el número de intentos de verificación de certificados SSL para ServerPilot, ya que puede tardar algún tiempo en emitir e instalar los certificados SSL. Por defecto, intentará hasta 5 veces, pero esto se puede ajustar usando filtros.

## Solución de problemas

### Problemas de conexión API

- Verifica que tu Client ID y API Key sean correctos
- Verifica que tu App ID sea correcto
- Asegúrate de que tu cuenta de ServerPilot tenga los permisos necesarios

### Problemas de certificados SSL

- ServerPilot requiere que los dominios tengan registros DNS válidos que apunten a tu servidor antes de emitir certificados SSL
- Si los certificados SSL no se están emitiendo, verifica que tus dominios apunten correctamente a la dirección IP de tu servidor
- Puede tardar algún tiempo en que ServerPilot emita e instale los certificados SSL (normalmente 5-15 minutos)

### Dominio no añadido

- Revisa los registros de Ultimate Multisite en busca de mensajes de error
- Verifica que el dominio no esté ya añadido a ServerPilot
- Asegúrate de que tu plan de ServerPilot soporte el número de dominios que estás añadiendo

### Eliminación de dominio

Actualmente, la API de ServerPilot no ofrece una forma de eliminar dominios individuales. Cuando se elimina una asignación de dominio en Ultimate Multisite, la integración actualizará la lista de dominios en ServerPilot para excluir el dominio eliminado.
