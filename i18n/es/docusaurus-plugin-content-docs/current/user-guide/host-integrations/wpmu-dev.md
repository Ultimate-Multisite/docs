---
title: Integración WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integración WPMU DEV

## Visión general
WPMU DEV es una plataforma integral de WordPress que ofrece alojamiento, complementos y servicios para sitios de WordPress. Esta integración permite la sincronización automática de dominios y la gestión de certificados SSL entre Ultimate Multisite y el alojamiento WPMU DEV.

## Características
- Sincronización automática de dominios
- Gestión de certificados SSL
- Intentos extendidos de verificación de certificados SSL

## Requisitos
La integración detecta automáticamente si estás alojando en WPMU DEV y utiliza la API incorporada. No se requiere configuración adicional si estás alojando en WPMU DEV.

La integración verifica la presencia de la constante `WPMUDEV_HOSTING_SITE_ID`, que se define automáticamente al alojar en WPMU DEV.

## Instrucciones de configuración

### 1. Verificar el alojamiento WPMU DEV
Si estás alojando en WPMU DEV, las constantes necesarias ya deberían estar definidas. Verifica que:
1. La constante `WPMUDEV_HOSTING_SITE_ID` está definida en tu entorno
2. Tienes una membresía activa de WPMU DEV con acceso a la API

### 2. Habilitar la integración
1. En tu administración de WordPress, ve a Ultimate Multisite > Settings
2. Navega a la pestaña "Domain Mapping"
3. Desplázate hacia abajo hasta "Host Integrations"
4. Habilita la integración WPMU DEV
5. Haz clic en "Save Changes"

## Cómo funciona

### Sincronización de dominios
Cuando un dominio se asigna en Ultimate Multisite:
1. La integración utiliza la API de WPMU DEV para agregar el dominio a tu cuenta de alojamiento
2. También agrega automáticamente la versión www del dominio
3. WPMU DEV gestiona la configuración del dominio y la emisión del certificado SSL

### Gestión de certificados SSL
La integración está configurada para aumentar el número de intentos de verificación de certificados SSL para el alojamiento WPMU DEV, ya que puede tardar algún tiempo en emitir e instalar los certificados SSL. Por defecto, intentará hasta 10 veces la verificación de certificados SSL, en comparación con los 5 intentos estándar.

## Notas importantes

### Eliminación de dominios
Actualmente, la API de WPMU DEV no ofrece una forma de eliminar dominios. Cuando se elimina una asignación de dominio en Ultimate Multisite, el dominio permanecerá en tu cuenta de alojamiento WPMU DEV. Tendrás que eliminarlo manualmente del panel de control de alojamiento WPMU DEV si es necesario.

### Autenticación API
La integración utiliza la clave API de WPMU DEV que se almacena en tu base de datos de WordPress como la opción `wpmudev_apikey`. Esto se configura automáticamente cuando conectas tu sitio a WPMU DEV.

## Solución de problemas

### Problemas de conexión API
- Verifica que tu sitio esté correctamente conectado a WPMU DEV
- Verifica que la opción `wpmudev_apikey` esté configurada en tu base de datos de WordPress
- Asegúrate de que tu membresía WPMU DEV esté activa

### Problemas de certificados SSL
- WPMU DEV puede tardar algún tiempo en emitir certificados SSL (normalmente 5-15 minutos)
- La integración está configurada para comprobar hasta 10 veces los certificados SSL
- Si los certificados SSL aún no se emiten después de varios intentos, contacta al soporte de WPMU DEV

### Dominio no añadido
- Revisa los registros de Ultimate Multisite en busca de mensajes de error
- Verifica que el dominio no esté ya añadido a WPMU DEV
- Asegúrate de que tu plan de alojamiento WPMU DEV admita el número de dominios que estás añadiendo
