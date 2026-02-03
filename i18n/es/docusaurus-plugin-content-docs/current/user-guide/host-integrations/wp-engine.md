---
title: Integración con WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Integración

## Resumen
WP Engine es una plataforma de alojamiento gestionado premium para WordPress que ofrece rendimiento optimizado, seguridad y escalabilidad para sitios WordPress. Esta integración permite la sincronización automática de dominios entre Ultimate Multisite y WP Engine.

## Características
- Sincronización automática de dominios
- Soporte de subdominios para instalaciones multisite
- Integración sin problemas con los sistemas existentes de WP Engine

## Requisitos
La integración detecta automáticamente si estás alojado en WP Engine y utiliza la API incorporada de WP Engine. No se requiere configuración adicional si el plugin WP Engine está activo y configurado correctamente.

Sin embargo, si necesitas configurar manualmente la integración, puedes definir una de estas constantes en tu archivo `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Preferred method
// OR
define('WPE_API', 'your_api_key'); // Alternative method
```

## Instrucciones de configuración

### 1. Verificar el plugin WP Engine

Si estás alojado en WP Engine, el plugin WP Engine ya debería estar instalado y activado. Verifica que:

1. El plugin WP Engine está activo
2. El archivo `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` existe

### 2. Habilitar la integración

1. En el administrador de WordPress, ve a Ultimate Multisite > Configuración
2. Navega a la pestaña "Mapeo de dominios"
3. Desplázate hacia abajo hasta "Integraciones de host"
4. Habilita la integración WP Engine
5. Haz clic en 'Guardar cambios'

## Cómo funciona

### Sincronización de dominios

Cuando un dominio se asigna en Ultimate Multisite:

1. La integración utiliza la API de WP Engine para agregar el dominio a tu instalación de WP Engine
2. WP Engine gestiona la configuración del dominio y la emisión del certificado SSL
3. Cuando se elimina un mapeo de dominio, la integración eliminará el dominio de WP Engine

### Soporte de subdominios

Para instalaciones multisite con subdominios:

1. La integración agrega cada subdominio a WP Engine cuando se crea un nuevo sitio
2. WP Engine gestiona la configuración del subdominio
3. Cuando se elimina un sitio, la integración eliminará el subdominio de WP Engine

## Notas importantes

### Dominios comodín

Para instalaciones multisite con subdominios, se recomienda contactar al soporte de WP Engine para solicitar una configuración de dominio comodín. Esto permite que todos los subdominios funcionen automáticamente sin necesidad de agregar cada uno individualmente.

### Certificados SSL

WP Engine gestiona automáticamente la emisión y renovación de certificados SSL para todos los dominios añadidos a través de esta integración. No se requiere configuración adicional.

## Solución de problemas

### Problemas de conexión API
- Verifica que el plugin WP Engine esté activo y configurado correctamente
- Si has definido manualmente la clave API, verifica que sea correcta
- Contacta al soporte de WP Engine si tienes problemas con la API

### Dominio no añadido
- Revisa los registros de Ultimate Multisite en busca de mensajes de error
- Verifica que el dominio no esté ya añadido a WP Engine
- Asegúrate de que tu plan de WP Engine soporte el número de dominios que estás añadiendo

### Problemas de subdominios
- Si los subdominios no funcionan, contacta al soporte de WP Engine para solicitar una configuración de dominio comodín
- Verifica que tus configuraciones DNS estén correctamente configuradas para el dominio principal y los subdominios
