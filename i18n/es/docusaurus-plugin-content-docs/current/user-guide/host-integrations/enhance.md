---
title: Mejorar la integración del panel de control
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Control Panel Integración

## Visión general
Enhance es un panel de control moderno que ofrece potentes capacidades de automatización y gestión de hosting. Esta integración permite la sincronización automática de dominios y la gestión de certificados SSL entre Ultimate Multisite y Enhance Control Panel.

**Discusión relacionada:** Ver [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) para consejos de la comunidad e información adicional.

## Características
- Sincronización automática de dominios cuando se asignan dominios en Ultimate Multisite
- Provisionamiento automático de certificados SSL vía LetsEncrypt cuando el DNS se resuelve
- Soporte de subdominios para redes que operan en modo subdominio
- Eliminación de dominio cuando se borran las asignaciones
- Prueba de conexión para verificar credenciales API

## Requisitos

### Requisitos del sistema
- Panel de control Enhance instalado y accesible
- Instalación de WordPress Multisite alojada o conectada a un servidor Enhance
- Servidor web Apache (Enhance actualmente soporta configuraciones Apache; LiteSpeed Enterprise está disponible a costo reducido)

### Acceso a la API
Debes tener acceso de administrador al Panel de control Enhance para crear tokens API.

## Obtención de tus credenciales API

### 1. Crear un token API

1. Inicia sesión en tu Panel de control Enhance como administrador
2. Haz clic en **Configuración** en el menú de navegación
3. Navega a **Tokens de acceso**
4. Haz clic en **Crear token**
5. Asigna al token un nombre descriptivo (p. ej., "Ultimate Multisite Integration")
6. Asigna el rol **Administrador del sistema**
7. Para la fecha de expiración:
   - Deja vacío si deseas que el token nunca expire
   - O establece una fecha de expiración específica por motivos de seguridad
8. Haz clic en **Crear**

Después de la creación, se mostrarán tu **Access Token** y **Organization ID**. **Guárdalos inmediatamente** ya que el token solo se mostrará una vez.

### 2. Obtener tu ID de organización

El ID de organización se muestra en la página de Tokens de acceso en un cuadro de información azul etiquetado "Org ID: {your_id}".  
El ID de organización es un UUID con formato como: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

También puedes encontrar el ID de organización de un cliente de la siguiente manera:
1. Ir a la página **Clientes**
2. Haz clic en **Gestionar cliente** para el cliente relevante
3. Observa la URL - el ID de organización son los caracteres alfanuméricos después de `/customers/`

### 3. Obtener tu ID de servidor

Para encontrar tu ID de servidor (requerido para operaciones de dominio):
1. En el Panel de control Enhance, navega a **Servidores**
2. Haz clic en el servidor donde se ejecuta tu instalación de WordPress
3. El ID de servidor (formato UUID) será visible en la URL o en los detalles del servidor
4. Alternativamente, puedes usar la API para listar servidores:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

El ID de servidor sigue el formato UUID: `00000000-0000-0000-0000-000000000000`

### 4. Obtener tu URL API

Tu URL API es la URL de tu Panel de control Enhance con `/api/` añadido:

```
https://your-enhance-panel.com/api/
```

**Importante:** La ruta `/api/` es obligatoria. Los errores comunes incluyen:
- Usar solo el dominio sin `/api/`
- Usar HTTP en lugar de HTTPS (HTTPS es obligatorio por seguridad)

## Configuración

### Constantes requeridas

Añade las siguientes constantes a tu archivo `wp-config.php`:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Configuración mediante el Asistente de Integración

1. En tu administrador de WordPress, ve a **Ultimate Multisite** > **Settings**
2. Navega a la pestaña **Integrations**
3. Busca **Enhance Control Panel Integration** y haz clic en **Configuración**
4. El asistente te guiará a través de la configuración:
   - **Paso 1:** Introducción y descripción de características
   - **Paso 2:** Ingresa tus credenciales API (Token, URL API, ID de servidor)
   - **Paso 3:** Prueba la conexión
   - **Paso 4:** Revisa y activa

Puedes elegir:
- Permitir que el asistente inyecte las constantes en tu archivo `wp-config.php` automáticamente
- Copiar las definiciones de constantes y agregarlas manualmente

## Configuración adicional de WordPress

Según los comentarios de la comunidad ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), es posible que necesites configurar estos ajustes adicionales:

### Configuración de .htaccess

Si experimentas problemas con el mapeo de dominios:
1. Elimina el archivo `.htaccess` original de Enhance
2. Sustituye con el archivo estándar `.htaccess` de WordPress Multisite

### Constantes de cookie

Añade estas constantes a `wp-config.php` para asegurar un manejo correcto de las cookies en dominios mapeados:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Cómo funciona

### Cuando se mapea un dominio

1. Un usuario mapea un dominio personalizado en Ultimate Multisite (o se crea un nuevo sitio en modo subdominio)
2. La integración envía una solicitud POST a la API de Enhance: `/servers/{server_id}/domains`
3. Enhance agrega el dominio a la configuración de tu servidor
4. Cuando el DNS se resuelve a tu servidor, Enhance provisiona automáticamente un certificado SSL vía LetsEncrypt
5. El dominio se vuelve activo con HTTPS

### Cuando se elimina un dominio

1. Se elimina una asignación de dominio en Ultimate Multisite
2. La integración consulta a Enhance para encontrar el ID del dominio
3. Se envía una solicitud DELETE a: `/servers/{server_id}/domains/{domain_id}`
4. Enhance elimina el dominio de la configuración de tu servidor

### Verificación de DNS y SSL

Ultimate Multisite incluye verificación de DNS y SSL incorporada:
- Puedes configurar el intervalo de verificación en **Configuración de mapeo de dominio** (predeterminado: 300 segundos/5 minutos)
- El sistema verificará la propagación de DNS antes de marcar un dominio como activo
- La validez del certificado SSL se verifica automáticamente
- Enhance gestiona la provisión de SSL automáticamente, por lo que no se requiere configuración manual de SSL

## Verificación de la configuración

### Prueba de conexión

1. En el Asistente de Integración, utiliza el paso **Prueba de conexión**
2. El plugin intentará listar dominios en tu servidor
3. Un mensaje de éxito confirma:
   - Las credenciales API son correctas
   - La URL API es accesible
   - El ID de servidor es válido
   - Los permisos están configurados correctamente

### Después de mapear un dominio

1. Mapea un dominio de prueba en Ultimate Multisite
2. Revisa los registros de Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifica en el Panel de control Enhance que el dominio fue añadido:
   - Ve a **Servidores** > **Tu Servidor** > **Dominios**
   - El nuevo dominio debería aparecer en la lista
4. Una vez que el DNS se propague, verifica que el SSL se haya provisionado automáticamente

## Solución de problemas

### Problemas de conexión API

**Error: "Failed to connect to Enhance API"**  
Verifica que `WU_ENHANCE_API_URL` incluya `/api/` al final  
- Asegúrate de usar HTTPS, no HTTP  
- Verifica que el panel Enhance sea accesible desde tu servidor WordPress  
- Verifica que no haya reglas de firewall bloqueando la conexión

**Error: "Enhance API Token not found"**  
- Asegúrate de que `WU_ENHANCE_API_TOKEN` esté definido en `wp-config.php`  
- Verifica que el token no haya sido eliminado o expirado en Enhance  
- Verifica si hay errores tipográficos en el valor del token

**Error: "Server ID is not configured"**  
- Verifica que `WU_ENHANCE_SERVER_ID` esté definido en `wp-config.php`  
- Asegúrate de que el ID de servidor sea un formato UUID válido  
- Confirma que el servidor exista en tu panel Enhance

### Dominio no añadido

**Revisa los registros:**  
1. Ve a **Ultimate Multisite** > **Logs**  
2. Filtra por **integration-enhance**  
3. Busca mensajes de error que indiquen el problema

**Causas comunes:**  
- Formato de nombre de dominio inválido  
- El dominio ya existe en Enhance  
- Permisos API insuficientes (asegúrate de que el token tenga el rol Administrador del sistema)  
- El ID de servidor no coincide con el servidor real en Enhance

### Problemas con el certificado SSL

**SSL no se provisiona:**  
- Verifica que el DNS apunte a la dirección IP de tu servidor  
- Verifica que el dominio se resuelva correctamente: `nslookup yourdomain.com`  
- Enhance requiere que el DNS se resuelva antes de poder provisionar SSL  
- La provisión de SSL suele tardar de 5 a 10 minutos después de la propagación del DNS  
- Verifica los registros del Panel de control Enhance para errores específicos de SSL

**Solución de problemas manual de SSL en Enhance:**  
1. Ve a **Servidores** > **Tu Servidor** > **Dominios**  
2. Busca tu dominio y verifica su estado SSL  
3. Puedes activar manualmente la provisión de SSL si es necesario

### Intervalo de verificación DNS

Si los dominios o certificados SSL tardan demasiado en activarse:  
1. Ve a **Ultimate Multisite** > **Settings** > **Mapeo de dominio**  
2. Busca la configuración **Intervalo de verificación DNS**  
3. Ajusta desde el valor predeterminado de 300 segundos a un valor menor (mínimo: 10 segundos)  
4. **Nota:** Los intervalos más cortos significan verificaciones más frecuentes pero mayor carga del servidor

### Errores de autenticación

**Errores HTTP 401/403:**  
- Regenera tu token API en Enhance  
- Verifica que el token tenga el rol **Administrador del sistema**  
- Verifica que el token no haya expirado  
- Asegúrate de usar el ID de organización correcto (aunque normalmente no es necesario en la URL)

### Análisis de registros

Habilita el registro detallado:

```php
// Add to wp-config.php for enhanced debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Luego revisa los registros en:  
- Registros de Ultimate Multisite: **Ultimate Multisite** > **Logs**  
- Registro de depuración de WordPress: `wp-content/debug.log`  
- Registros del panel Enhance: disponibles en la interfaz de administración de Enhance

## Referencia API

### Autenticación

Todas las solicitudes API utilizan autenticación con token Bearer:

```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoints comunes utilizados

**Listar servidores:**  

```
GET /servers
```

**Listar dominios en un servidor:**  

```
GET /servers/{server_id}/domains
```

**Agregar un dominio:**  

```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Eliminar un dominio:**  

```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Documentación completa de la API

Documentación completa de la API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Mejores prácticas

### Seguridad

- **Nunca commits tokens API al control de versiones**  
- Almacena tokens en `wp-config.php`, que debe excluirse de Git  
- Usa tokens con permisos adecuados (Administrador del sistema para la integración completa)  
- Establece fechas de expiración de tokens para entornos de producción  
- Rota tokens periódicamente

### Rendimiento

- Usa el intervalo de verificación DNS predeterminado (300 segundos) para evitar llamadas API excesivas  
- Monitorea recursos del servidor Enhance al ejecutar operaciones de dominio a gran escala  
- Considera distribuir las adiciones de dominio si mapeas muchos dominios a la vez

### Monitoreo

- Revisa regularmente los registros de Ultimate Multisite para errores de integración  
- Configura monitoreo para adiciones de dominio fallidas  
- Verifica que los certificados SSL se provisionen correctamente  
- Mantén un ojo en la capacidad del servidor Enhance y los límites de dominio

## Recursos adicionales

- **Documentación oficial de Enhance:** [https://enhance.com/docs](https://enhance.com/docs)  
- **Documentación API de Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)  
- **Foro comunitario de Enhance:** [https://community.enhance.com](https://community.enhance.com)  
- **Discusión de GitHub:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)  
- **Guía de mapeo de dominios de Ultimate Multisite:** Ver la página wiki "How to Configure Domain Mapping v2"

## Soporte

Si encuentras problemas:  
1. Revisa la sección de Solución de problemas anterior  
2. Revisa los registros de Ultimate Multisite  
3. Consulta las [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)  
4. Contacta al soporte de Enhance para problemas específicos del panel  
5. Crea una nueva discusión con registros de error detallados para asistencia comunitaria

## Notas

- Esta integración maneja solo alias de dominio; Enhance gestiona SSL automáticamente  
- La integración soporta tanto mapeos de dominios personalizados como sitios basados en subdominio  
- La creación automática de subdominio www puede configurarse en la configuración de mapeo de dominio  
- Enhance actualmente soporta configuraciones Apache (LiteSpeed Enterprise disponible)  
- La eliminación de dominio desde Ultimate Multisite eliminará el dominio de Enhance pero puede que no elimine los certificados SSL asociados de inmediato
