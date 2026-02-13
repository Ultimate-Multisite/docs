---
title: Asistente de configuración de Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Asistente de Configuración Multisitio

Ultimate Multisite incluye un asistente incorporado que convierte automáticamente una instalación estándar de WordPress en una red Multisitio de WordPress. Esto elimina la necesidad de editar manualmente `wp-config.php` o ejecutar comandos de base de datos.

:::tip
Si su instalación de WordPress ya está funcionando como una red Multisitio, puede omitir este paso por completo. El asistente solo aparece cuando Multisitio aún no está habilitado.
:::

## ¿Cuándo aparece el asistente?

Cuando activa Ultimate Multisite en una instalación estándar (no Multisitio) de WordPress, el plugin detecta que Multisitio no está habilitado y lo redirige automáticamente al Asistente de Configuración Multisitio en lugar del asistente de configuración regular.

También puede acceder directamente a través de **WP Admin > Ultimate Multisite > Multisite Setup**.

## Requisitos previos

Antes de ejecutar el asistente, asegúrese de que:

- Tiene **acceso de administrador** a su instalación de WordPress
- El archivo `wp-config.php` de su servidor es **escribible** por el servidor web
- Tiene una **copia de seguridad reciente** de sus archivos y base de datos

:::warning
El asistente modifica su archivo `wp-config.php` y crea nuevas tablas en la base de datos. Siempre realice una copia de seguridad antes de continuar.
:::

## Paso 1: Bienvenida

La primera pantalla explica qué es WordPress Multisite y lo que hará el asistente:

- Habilitar la función Multisitio en su configuración de WordPress
- Crear las tablas de base de datos de red necesarias
- Agregar las constantes multisite requeridas a `wp-config.php`
- Activar en red Ultimate Multisite en toda la red

![Asistente de Configuración Multisitio - Paso de bienvenida](/img/installation/multisite-wizard/wizard-welcome.png)

Haga clic en **Continuar** para continuar.

## Paso 2: Configuración de la Red

Este paso le solicita que configure la configuración de su red.

### Estructura del Sitio

Elija cómo se organizarán los sitios de su red:

- **Subdominios** (Recomendado) — Los sitios obtienen su propio subdominio, por ejemplo `site1.sudominio.com`
- **Subdirectorios** — Los sitios se crean como rutas, por ejemplo `sudominio.com/site1`

:::note
Si elige subdominios, deberá configurar **DNS comodín** y un **certificado SSL comodín** para su dominio. La mayoría de los hosts de WordPress gestionados lo manejan automáticamente. Consulte [Ultimate Multisite 101](./ultimate-multisite-101) para una comparación detallada.
:::

### Título de la Red

Introduzca un nombre para su red. Por defecto, se utiliza el título actual del sitio con "Network" añadido. Puede cambiarlo más tarde desde la configuración de la red.

### Correo Electrónico del Administrador de la Red

La dirección de correo electrónico utilizada para las notificaciones de administración de la red. Por defecto, se utiliza la dirección de correo electrónico del usuario actual.

![Asistente de Configuración Multisitio - Configuración de la Red](/img/installation/multisite-wizard/wizard-network-configuration.png)

Después de completar los campos, haga clic en **Continuar** para continuar.

## Paso 3: Instalación

Haga clic en el botón **Instalar** para comenzar. El asistente realiza cinco pasos automatizados en secuencia, cada uno mostrando su progreso en tiempo real:

![Asistente de Configuración Multisitio - Instalación pendiente](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Paso | Descripción |
|------|-------------|
| **Habilitar Multisitio** | Agrega la constante `WP_ALLOW_MULTISITE` a `wp-config.php` |
| **Crear Red** | Crea las tablas de base de datos multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) y las llena con su configuración de red |
| **Actualizar Configuración** | Agrega las constantes finales de multisite a `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etc.) |
| **Corregir Cookies** | Asegura que la URL del sitio sea correcta en los metadatos de la red para evitar problemas de autenticación después de la activación |
| **Activar Plugin en Red** | Activa Ultimate Multisite en la red para que se ejecute en toda la red |

Cada paso muestra uno de estos estados:

- **Pendiente** — En espera de ser procesado
- **Instalando...** — En ejecución
- **¡Éxito!** — Completado con éxito
- **Mensaje de error** — Ocurrió un error (el mensaje describirá el problema)

Una vez que todos los pasos se completen con éxito, verá un estado verde "¡Éxito!" para cada elemento:

![Asistente de Configuración Multisitio - Instalación completa](/img/installation/multisite-wizard/wizard-installation-complete.png)

El asistente luego procederá automáticamente a la pantalla de finalización.

## Paso 4: Completo

Una vez que la instalación esté completa, verá un mensaje de éxito que confirma que WordPress Multisite ha sido habilitado.

![Asistente de Configuración Multisitio - Configuración Completa](/img/installation/multisite-wizard/wizard-complete.png)

Ahora puede continuar con el asistente de configuración de Ultimate Multisite para configurar su plataforma WaaS (detalles de la empresa, contenido predeterminado, pasarelas de pago, etc.).

:::note
Después de que la instalación multisite se complete, su navegador se redirigirá a través del administrador de red recién habilitado. Es posible que deba iniciar sesión nuevamente ya que las cookies de autenticación se actualizan para el entorno multisite.
:::

## Configuración Manual de Respaldo

Si el asistente no puede escribir en su archivo `wp-config.php` (debido a permisos de archivo o restricciones del servidor), mostrará el código exacto que necesita agregar manualmente:

1. Las **constantes de wp-config.php** que deben agregarse por encima de la línea `/* That's all, stop editing! */`
2. Las **reglas de reescritura .htaccess** apropiadas para la estructura de sitio elegida (subdominio o subdirectorio)

Después de realizar los cambios manuales, actualice la página y el asistente detectará que multisite ya está activo.

## Solución de Problemas

### El asistente indica que wp-config.php no es escribible

El proceso del servidor web necesita permiso de escritura en el archivo `wp-config.php`. Puede:

- Cambiar temporalmente los permisos del archivo a `644` o `666`
- Usar las instrucciones de configuración manual de respaldo proporcionadas por el asistente
- Pedir ayuda a su proveedor de hosting

### Los sitios no son accesibles después de la configuración (subdominios)

Si eligió la estructura de subdominio, necesita configurar **DNS comodín** para su dominio. Agregue un registro DNS:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

Verifique con su proveedor de hosting si no está seguro de cómo configurarlo.

### Problemas de autenticación después de la configuración

Si ha cerrado sesión o experimenta errores de cookies después de la configuración multisite:

1. Borre las cookies de su navegador para el sitio
2. Inicie sesión nuevamente en `yourdomain.com/wp-login.php`
3. Si el problema persiste, verifique que su `wp-config.php` no tenga `COOKIE_DOMAIN` establecido en `false` — esto es un problema conocido en instalaciones multisite de subdominio

### Un paso falló durante la instalación

Si uno de los pasos de instalación muestra un error:

1. Tome nota del mensaje de error mostrado
2. Regrese al paso de configuración e intente nuevamente
3. Si el error persiste, verifique el registro de errores PHP de su servidor para obtener más detalles
4. Los pasos que ya se completaron se omitirán en ejecuciones posteriores (el instalador es idempotente)
