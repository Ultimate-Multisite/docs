---
title: Instalando Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instalando Ultimate Multisite

:::note
Este tutorial asume que ya tienes WordPress Multisite instalado y configurado. Para aprender cómo hacerlo, consulta [este tutorial](https://www.wpbeginner.com/glossary/multisite/) de WP Beginner.
:::

## Instalando el plugin

Ultimate Multisite está disponible de forma gratuita en [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Desde tu **Panel de administración de la red**, ve a **Plugins → Añadir nuevo plugin**.

![Página "Añadir nuevo plugin" del Panel de administración de la red](/img/installation/add-new-plugin.png)

Busca **"Ultimate Multisite"** (con comillas para una coincidencia exacta) y aparecerá como el primer resultado. Haz clic en **Instalar ahora**.

![Resultados de búsqueda mostrando Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Una vez instalado, haz clic en **Activar en la red** para activar el plugin en toda tu red.

![Plugin instalado con el botón "Activar en la red"](/img/installation/plugin-installed.png)

Después de la activación, serás redirigido automáticamente al Asistente de configuración.

![Plugin activado y redirigido al asistente](/img/installation/plugin-activated.png)

## Asistente de configuración

El Asistente de configuración te guiará a través de la configuración de Ultimate Multisite en aproximadamente 10 minutos.

### Bienvenida

Haz clic en **Comenzar** para empezar.

![Pantalla de bienvenida del Asistente de configuración](/img/installation/wizard-welcome.png)

### Comprobaciones previas a la instalación

Este paso comprueba la información de tu sistema y la instalación de WordPress para asegurarse de que cumple con los requisitos de Ultimate Multisite. Si todo parece correcto, haz clic en **Ir al siguiente paso**.

![Comprobaciones previas a la instalación mostrando los requisitos del sistema](/img/installation/wizard-pre-install-checks.png)

:::note Botón "Activar en la red" (v2.6.1+)
Si Ultimate Multisite se instaló pero **no se ha activado aún en la red** (por ejemplo, si hiciste clic en **Activar** [sitio único] en lugar de **Activar en la red** desde la pantalla de plugins de la red), el paso de Comprobaciones previas a la instalación detectará esto y mostrará un botón **Activar en la red**.

Al hacer clic en **Activar en la red**, se activará el plugin en toda tu red multisitio automáticamente. Una vez activado, el asistente continuará normalmente con el paso de instalación. No es necesario que salgas del asistente para solucionar el estado de activación.
:::

### Instalación

El instalador creará las tablas de base de datos necesarias e instalará el archivo `sunrise.php` que Ultimate Multisite necesita para funcionar. Haz clic en **Instalar** para continuar.

![Paso de instalación mostrando las tablas de la base de datos y sunrise.php](/img/installation/wizard-installation.png)

### Tu empresa

Completa la información de tu empresa y establece tu moneda predeterminada. Esta información se utilizará en toda tu plataforma WaaS. Haz clic en **Continuar** cuando hayas terminado.

![Paso de configuración "Tu empresa"](/img/installation/wizard-your-company.png)

### Contenido predeterminado

Este paso te permite instalar plantillas predefinidas, productos y otro contenido inicial. Esta es una excelente manera de familiarizarte con las características de Ultimate Multisite. Haz clic en **Instalar** para agregar el contenido predeterminado o omite este paso si prefieres comenzar desde cero.

![Paso de instalación del contenido predeterminado](/img/installation/wizard-default-content.png)

### Plugins recomendados

Opcionalmente, instala los plugins complementarios recomendados. Haz clic en **Instalar** para agregarlos o continúa sin ellos.

![Paso de plugins recomendados](/img/installation/wizard-recommended-plugins.png)

### ¡Listo!

¡Eso es todo! Tu instalación de Ultimate Multisite está completa. Ahora puedes comenzar a construir tu plataforma de Sitios web como servicio desde el **Panel de administración de la red**.

![Configuración completada: pantalla "Listo"](/img/installation/wizard-ready.png)

![Panel de administración de la red con Ultimate Multisite activo](/img/installation/network-dashboard.png)

¡Adelante y diviértete!
