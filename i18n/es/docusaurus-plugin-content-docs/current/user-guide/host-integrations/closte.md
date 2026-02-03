---
title: Integración Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integración

## Visión general
Closte es una plataforma de alojamiento gestionado de WordPress construida sobre la infraestructura de Google Cloud. Esta integración permite la sincronización automática de dominios y la gestión de certificados SSL entre Ultimate Multisite y Closte.

## Funcionalidades
- Sincronización automática de dominios
- Gestión de certificados SSL
- Soporte de dominios comodín
- No se necesita configuración si se ejecuta en Closte

## Requisitos
La siguiente constante debe estar definida en tu archivo `wp-config.php` si estás usando Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Esta constante suele estar ya definida si estás alojado en Closte.

## Instrucciones de configuración

### 1. Verifica tu Closte API Key
Si estás alojado en Closte, la constante `CLOSTE_CLIENT_API_KEY` debería estar ya definida en tu archivo `wp-config.php`. Puedes verificarlo revisando tu archivo `wp-config.php`.

### 2. Habilita la integración
1. En el administrador de WordPress, ve a Ultimate Multisite > Settings
2. Navega a la pestaña "Domain Mapping"
3. Desplázate hacia abajo hasta "Host Integrations"
4. Habilita la integración Closte
5. Haz clic en "Save Changes"

## Cómo funciona
Cuando un dominio se asigna en Ultimate Multisite:
1. La integración envía una solicitud a la API de Closte para agregar el dominio a tu aplicación
2. Closte gestiona automáticamente la provisión de certificados SSL
3. Cuando se elimina la asignación de un dominio, la integración eliminará el dominio de Closte

La integración también funciona con la configuración del intervalo de verificación DNS en Ultimate Multisite, lo que te permite configurar con qué frecuencia el sistema verifica la propagación DNS y la emisión de certificados SSL.

## Creación de registros de dominio
Esta integración garantiza que cuando se crea o duplica un sitio, se crea automáticamente un registro de dominio. Esto es particularmente importante para la integración Closte, ya que la creación del registro de dominio desencadena la API de Closte para crear el dominio y el certificado SSL.

## Solución de problemas

### Problemas de conexión API
- Verifica que tu Closte API key sea correcta
- Asegúrate de que tu cuenta Closte tenga los permisos necesarios

### Problemas de certificado SSL
- Closte puede tardar algún tiempo en emitir certificados SSL (generalmente 5-10 minutos)
- Verifica que tus dominios apunten correctamente a la dirección IP de tu servidor Closte
- Revisa los registros DNS de tu dominio para asegurarte de que estén correctamente configurados

### Dominio no añadido
- Revisa los registros de Ultimate Multisite en busca de mensajes de error
- Verifica que el dominio no esté ya añadido a Closte
- Asegúrate de que los registros DNS de tu dominio estén correctamente configurados

### Intervalo de verificación DNS
- Si los certificados SSL tardan demasiado en emitirse, puedes ajustar el intervalo de verificación DNS en la configuración de Domain Mapping
- El intervalo predeterminado es de 300 segundos (5 minutos), pero puedes configurarlo tan bajo como 10 segundos para una verificación más rápida durante las pruebas
