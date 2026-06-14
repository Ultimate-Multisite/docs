---
title: Integratio GridPanee
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integrare con GridPane

## Visius
GridPane est un painel de control de alojamiento especializado para profesionales serios de WordPress. Esta integración permite la sincronización automática de dominios y la gestión de certificados SSL entre Ultimate Multisite y GridPane.

## Característica
- Sincronización automática de dominios
- Gestión de certificados SSL
- Configuración automática de la constante SUNRISE

## Requisitos
Las siguientes constantes deben definirse en tu archivo `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'tu_clave_api');
define('WU_GRIDPANE_SERVER_ID', 'tu_id_servidor');
define('WU_GRIDPANE_APP_ID', 'tu_id_sitio');
```

## Instrucciones de Configuración

### 1. Obtener tus Credenciales de API de GridPane

1. Inicia sesión en tu panel de control de GridPane
2. Ve a "Settings" > "API" (Configuración > API)
3. Genera una clave de API si aún no la tienes
4. Copia tu clave de API

### 2. Obtener tus IDs de Servidor y Sitio

1. En tu panel de control de GridPane, ve a "Servers" (Servidores)
2. Selecciona el servidor donde está alojado tu multisite de WordPress
3. Anota el ID del Servidor (visible en la URL o en la página de detalles del servidor)
4. Ve a "Sites" (Sitios) y selecciona tu sitio de WordPress
5. Anota el ID del Sitio (visible en la URL o en la página de detalles del sitio)

### 3. Añadir Constantes a wp-config.php

Añade las siguientes constantes a tu archivo `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'tu_clave_api');
define('WU_GRIDPANE_SERVER_ID', 'tu_id_servidor');
define('WU_GRIDPANE_APP_ID', 'tu_id_sitio');
```

### 4. Habilitar la Integración

1. En tu administración de WordPress, ve a Ultimate Multisite > Settings (Ultimate Multisite > Configuración)
2. Navega a la pestaña "Domain Mapping" (Mapeo de Dominios)
3. Desplázate hasta "Host Integrations" (Integraciones de Alojamiento)
4. Habilita la integración con GridPane
5. Haz clic en "Save Changes" (Guardar Cambios)

## Cómo Funciona

Cuando se mapea un dominio en Ultimate Multisite:

1. La integración envía una solicitud a la API de GridPane para añadir el dominio a tu sitio.
2. GridPane se encarga automáticamente del aprovisionamiento del certificado SSL.
3. Cuando se elimina un mapeo de dominio, la integración eliminará el dominio de GridPane.

La integración también gestiona automáticamente la constante SUNRISE en tu archivo wp-config.php, que es necesaria para que el mapeo de dominios funcione correctamente.

## Gestión de la Constante SUNRISE

Una característica única de la integración de GridPane es que revierte automáticamente la constante SUNRISE en wp-config.php para evitar conflictos con el propio sistema de mapeo de dominios de GridPane. Esto asegura que ambos sistemas puedan funcionar juntos sin problemas.

## Solución de Problemas

### Problemas de Conexión API
- Verifica que tu clave API sea correcta.
- Comprueba que tus IDs de servidor y sitio sean correctos.
- Asegúrate de que tu cuenta de GridPane tenga los permisos necesarios.

### Problemas con el Certificado SSL
- A GridPane puede llevar algo de tiempo emitir certificados SSL.
- Verifica que tus dominios apunten correctamente a la dirección IP de tu servidor.
- Revisa la configuración de SSL de GridPane para tu sitio.

### Dominio No Añadido
- Comprueba los registros de Ultimate Multisite en busca de cualquier mensaje de error.
- Verifica que el dominio no esté ya añadido a GridPane.
- Asegúrate de que los registros DNS de tu dominio estén configurados correctamente.
