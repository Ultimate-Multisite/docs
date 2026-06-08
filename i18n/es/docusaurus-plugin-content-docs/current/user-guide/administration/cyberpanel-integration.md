---
title: Integración con CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integración con CyberPanel

Esta guía explica cómo configurar la integración de Ultimate Multisite con CyberPanel para que los dominios mapeados en su red se añadan (y se eliminen) automáticamente como hosts virtuales en CyberPanel, con la opción de aprovisionamiento automático de SSL mediante Let's Encrypt.

## Qué hace

- Cuando se mapea un dominio en Ultimate Multisite, la integración llama a la API de CyberPanel para crear un host virtual para ese dominio.
- Cuando se elimina un mapeo de dominio, la integración llama a la API para eliminar el host virtual correspondiente.
- Cuando se habilita el auto-SSL, la integración activa la emisión del certificado Let's Encrypt inmediatamente después de crear el host virtual.
- Opcionalmente, añade/elimina el alias `www.` dependiendo de la configuración "Auto-create www subdomain" en la configuración de Mapeo de Dominios.

## Requisitos previos

- Una instancia de CyberPanel en funcionamiento (se recomienda v2.3 o posterior) accesible desde su servidor WordPress.
- Un sitio web existente en CyberPanel que ya sirva la raíz de su red WordPress. La integración adjuntará nuevos hosts virtuales a este servidor.
- Acceso a la API de CyberPanel habilitado. La autenticación utiliza su nombre de usuario y contraseña de administrador de CyberPanel.
- Sus registros DNS para los dominios mapeados deben apuntar ya a la dirección IP de su servidor antes de que el auto-SSL pueda emitir un certificado válido.

## Requisitos

Se deben definir las siguientes constantes en su archivo `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opcionalmente, también puede definir:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Por defecto: true — emite SSL Let's Encrypt después de la creación del dominio
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Por defecto: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Usado para el contacto del certificado SSL
```

## Instrucciones de configuración

### 1. Habilitar la API de CyberPanel

1. Inicie sesión en el dashboard de CyberPanel como administrador.
2. Vaya a **Security** > **SSL** y confirme que SSL está activo en la propia interfaz de CyberPanel (requerido para llamadas API seguras).
3. La API de CyberPanel está disponible por defecto en `https://your-server-ip:8090/api/`. No son necesarios pasos adicionales para habilitarla; está activa por defecto para los usuarios administradores.

### 2. Añadir constantes a wp-config.php

Añada las siguientes constantes a su archivo `wp-config.php` antes de la línea `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Para habilitar el auto-SSL (recomendado):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Habilitar la integración

1. En el administrador de su red WordPress, vaya a **Ultimate Multisite** > **Settings**.
2. Navegue hasta la pestaña **Domain Mapping**.
3. Desplácese hacia abajo hasta **Host Integrations**.
4. Habilite la integración **CyberPanel**.
5. Haga clic en **Save Changes**.

### 4. Verificar la conectividad

Utilice la prueba de conexión integrada en el asistente de configuración:

1. Vaya a **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Haga clic en **Test Connection**.
3. Un mensaje de éxito confirma que el plugin puede comunicarse con la API de CyberPanel y autenticarse correctamente.

## Cómo funciona

### Mapeo de dominios

Cuando se mapea un dominio en Ultimate Multisite:

1. La integración envía una solicitud `POST` a `/api/createWebsite` en su host CyberPanel.
2. CyberPanel crea un nuevo host virtual para el dominio bajo el paquete configurado.
3. El directorio raíz se establece para que apunte al directorio raíz de su red WordPress.
4. Cuando se elimina el mapeo de dominio, la integración llama a `/api/deleteWebsite` para limpiar el host virtual.

### Auto-SSL

Cuando `WU_CYBERPANEL_AUTO_SSL` es `true`:

1. Después de crear el host virtual, la integración llama a `/api/issueSSL` para el dominio.
2. CyberPanel solicita un certificado Let's Encrypt utilizando el desafío ACME HTTP-01.
3. CyberPanel renueva automáticamente el certificado antes de que expire.

> **Importante:** Los DNS deben propagarse completamente a la dirección IP de su servidor antes de que Let's Encrypt pueda validar el dominio. Si la emisión de SSL falla inmediatamente después del mapeo, espere la propagación de DNS y vuelva a activar el SSL desde el dashboard de CyberPanel en **SSL** > **Manage SSL**.

### Subdominio www

Si **Auto-create www subdomain** está habilitado en la configuración de Mapeo de Dominios, la integración también crea un alias de host virtual para `www.<dominio>` y, cuando el auto-SSL está activo, emite un certificado que cubre tanto la variante *apex* como la *www*.

### Redireccionadores de correo electrónico

Cuando el addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) está activo, CyberPanel también puede proporcionar redireccionadores de correo electrónico para clientes. Los redireccionadores dirigen mensajes de una dirección de dominio a otra bandeja de entrada sin crear un buzón completo, lo cual es útil para alias como `info@customer-domain.test` o `support@customer-domain.test`.

Antes de habilitar los redireccionadores para clientes:

1. Confirme que las constantes de CyberPanel anteriores están configuradas y que la prueba de conexión es exitosa.
2. Habilite el proveedor de correo electrónico de CyberPanel en la configuración del addon Emails.
3. Confirme que el dominio del cliente ya existe en CyberPanel antes de crear el redireccionador.
4. Cree un redireccionador de prueba y envíe un mensaje a través de él antes de ofrecer la función en planes de producción.

Si la creación del redireccionador falla, revise primero los registros de actividad de Ultimate Multisite, y luego confirme en CyberPanel que el dominio de origen existe y que el usuario API tiene permisos de gestión de correo electrónico.

## Referencia de configuración

| Constante | Requerido | Por defecto | Descripción |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Sí | — | URL completa de su instancia de CyberPanel, incluyendo puerto, ej. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Sí | — | Nombre de usuario de administrador de CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Sí | — | Contraseña de administrador de CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Sí | `Default` | Paquete de hosting de CyberPanel para asignar a nuevos hosts virtuales |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | Emite un certificado SSL Let's Encrypt después de la creación del dominio |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | Versión de PHP para nuevos hosts virtuales (debe coincidir con una versión instalada en CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | No | — | Correo de contacto para el registro del certificado SSL |

## Notas importantes

- La API de CyberPanel utiliza autenticación de token basada en sesiones. La integración maneja la adquisición del token automáticamente en cada llamada a la API.
- Su cuenta de administrador de CyberPanel debe tener permisos para crear y eliminar sitios web.
- CyberPanel se ejecuta por defecto en el puerto `8090`. Si su servidor utiliza un firewall, asegúrese de que este puerto sea accesible desde el servidor de aplicaciones de WordPress.
- La integración no gestiona los registros DNS. Debe apuntar los DNS del dominio a la dirección IP de su servidor antes de mapear el dominio en Ultimate Multisite.
- Si utiliza OpenLiteSpeed (OLS), se activa automáticamente un reinicio suave después de los cambios de host virtual. No se necesita intervención manual.

## Solución de problemas

### Conexión API rechazada

- Verifique que el puerto `8090` esté abierto en el firewall de su servidor.
- Confirme que el valor `WU_CYBERPANEL_HOST` incluya el protocolo correcto (`https://`) y el puerto.
- Compruebe que su certificado SSL de CyberPanel sea válido; los certificados autofirmados pueden causar fallos de verificación TLS. Establezca `WU_CYBERPANEL_VERIFY_SSL` en `false` solo en entornos de red privada confiables.

### Errores de autenticación

- Confirme que su `WU_CYBERPANEL_USERNAME` y `WU_CYBERPANEL_PASSWORD` son correctos iniciando sesión en CyberPanel directamente.
- CyberPanel bloquea cuentas después de varios intentos fallidos de inicio de sesión. Revise **Security** > **Brute Force Monitor** en CyberPanel si se producen bloqueos.

### Dominio no creado

- Revise el registro de actividad de Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) en busca de mensajes de error de la API.
- Verifique que el paquete definido en `WU_CYBERPANEL_PACKAGE` exista en CyberPanel (**Packages** > **List Packages**).
- Asegúrese de que el dominio no esté ya registrado como un sitio web en CyberPanel; la creación de un sitio web duplicado devuelve un error.

### Certificado SSL no emitido

- Confirme que los DNS se han propagado completamente: `dig +short your-domain.com` debe devolver la IP de su servidor.
- Let's Encrypt aplica límites de tasa. Si ha emitido varios certificados recientemente para el mismo dominio, espere antes de reintentar.
- Compruebe los registros SSL de CyberPanel en **Logs** > **Error Logs** para obtener detalles sobre fallos en la emisión de certificados.
- Como alternativa, puede emitir SSL manualmente desde CyberPanel: **SSL** > **Manage SSL** > seleccionar el dominio > **Issue SSL**.

## Referencias

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
