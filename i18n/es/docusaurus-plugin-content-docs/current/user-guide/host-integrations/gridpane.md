---
title: Integración de GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integración con GridPane

## Visión general
GridPane es un panel de control de hosting especializado en WordPress, diseñado para profesionales serios de WordPress. Esta integración permite la sincronización automática de dominios y la gestión de certificados SSL entre Ultimate Multisite y GridPane.

## Características
- Sincronización automática de dominios
- Gestión de certificados SSL
- Configuración automática de la constante SUNRISE

## Requisitos
Las siguientes constantes deben definirse en su archivo `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Instrucciones de configuración

### 1. Obtenga sus credenciales API de GridPane

1. Inicie sesión en su panel de control de GridPane
2. Vaya a "Configuración" > "API"
3. Genere una clave API si aún no tiene una
4. Copie su clave API

### 2. Obtenga sus IDs de servidor y sitio

1. En su panel de control de GridPane, vaya a "Servidores"
2. Seleccione el servidor donde está alojado su multisite de WordPress
3. Anote el ID del servidor (visible en la URL o en la página de detalles del servidor)
4. Vaya a "Sitios" y seleccione su sitio de WordPress
5. Anote el ID del sitio (visible en la URL o en la página de detalles del sitio)

### 3. Agregue constantes a wp-config.php

Agregue las siguientes constantes a su archivo `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Habilite la integración

1. En el administrador de WordPress, vaya a Ultimate Multisite > Configuración
2. Navegue a la pestaña "Mapeo de dominios"
3. Desplácese hacia abajo hasta "Integraciones de host"
4. Habilite la integración de GridPane
5. Haga clic en "Guardar cambios"

## Cómo funciona

Cuando un dominio se mapea en Ultimate Multisite:

1. La integración envía una solicitud a la API de GridPane para agregar el dominio a su sitio
2. GridPane gestiona automáticamente la provisión de certificados SSL
3. Cuando se elimina un mapeo de dominio, la integración eliminará el dominio de GridPane

La integración también gestiona automáticamente la constante SUNRISE en su archivo wp-config.php, lo que es necesario para que el mapeo de dominios funcione correctamente.

## Gestión de la constante SUNRISE

Una característica única de la integración GridPane es que revierte automáticamente la constante SUNRISE en wp-config.php para evitar conflictos con el propio sistema de mapeo de dominios de GridPane. Esto garantiza que ambos sistemas puedan funcionar juntos sin problemas.

## Solución de problemas

### Problemas de conexión API

- Verifique que su clave API sea correcta
- Verifique que sus IDs de servidor y sitio sean correctos
- Asegúrese de que su cuenta GridPane tenga los permisos necesarios

### Problemas con el certificado SSL

- GridPane puede tardar algún tiempo en emitir certificados SSL
- Verifique que sus dominios apunten correctamente a la dirección IP de su servidor
- Verifique la configuración SSL de GridPane para su sitio

### Dominio no agregado

- Verifique los registros de Ultimate Multisite en busca de mensajes de error
- Verifique que el dominio no esté ya agregado a GridPane
- Asegúrese de que los registros DNS de su dominio estén configurados correctamente
