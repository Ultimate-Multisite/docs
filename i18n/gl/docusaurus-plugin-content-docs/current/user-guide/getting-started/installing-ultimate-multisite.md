---
title: Instalación de Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instalación de Ultimate Multisite

:::note
Este tutorial supón que ya tienes instalado y configurado WordPress Multisite. Para aprender cómo hacerlo, consulta [este tutorial](https://www.wpbeginner.com/glossary/multisite/) por WP Beginner.
:::

## Instalando el Plugin

Ultimate Multisite está disponible de forma gratuita en [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Desde el **Network Admin Dashboard**, ve a **Plugins → Add New Plugin**.

![Página Network Admin Add New Plugin](/img/installation/add-new-plugin.png)

Busca **"Ultimate Multisite"** (con comillas para una coincidencia exacta) y aparecerá como el primer resultado. Haz clic en **Install Now** (Instalar ahora).

![Resultados de búsqueda mostrando Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Una vez instalado, haz clic en **Network Activate** (Activar red) para activar el plugin en toda tu red.

![Plugin instalado con botón Network Activate](/img/installation/plugin-installed.png)

Después de la activación, serás redirigido automáticamente al Asistente de Configuración (Setup Wizard).

![Plugin activado y redirigido al asistente](/img/installation/plugin-activated.png)

## Asistente de Configuración (Setup Wizard)

El Asistente de Configuración te guiará a través de la configuración de Ultimate Multisite en unos 10 minutos.

### Bienvenida

Haz clic en **Get Started** (Empezar) para comenzar.

![Pantalla de bienvenida del Setup Wizard](/img/installation/wizard-welcome.png)

### Verificaciones Preinstalación

Este paso comprueba la información de tu sistema y la instalación de WordPress para asegurarte de que cumple con los requisitos de Ultimate Multisite. Si todo parece correcto, haz clic en **Go to the Next Step** (Ir al siguiente paso).

![Verificaciones preinstalación mostrando requisitos del sistema](/img/installation/wizard-pre-install-checks.png)

:::note Botón Activar Red (v2.6.1+)
Se instaló Ultimate Multisite pero **aún no está activada en la red** — por ejemplo, si pulsaste **Activar** (sitio único) en vez de **Activar Red** desde la pantalla de plugins de red — el paso de Verificación Previa detectará esto y mostrará un botón de **Activar Red**.

Al pulsar **Activar Red**, o activa o plugin ao todo o seu sistema multisite automáticamente. Uma vez activado, o wizard continúa normalmente para o paso de instalación. Non hai que sair do wizard para arratar o estado de activación.
:::

### Instalación

O instalador creará as tábulas de base de datos necesarias e instalará o ficheiro `sunrise.php` que Ultimate Multisite necesita para funcionar. Pulse **Instalar** para continuar.

![Paso de instalación mostrando tábulas de base de datos e sunrise.php](/img/installation/wizard-installation.png)

### A Sua Empresa

Preencha a súa información da empresa e estableza a súa moeda predeterminada. Esta información será utilizada durante toda a súa plataforma WaaS. Pulse **Continuar** ao terminar.

![Paso de configuración da súa empresa](/img/installation/wizard-your-company.png)

### Contido Predefinido

Este paso permite instalar modelos, produtos e outro contido inicial predefinido. É unha gran forma de familiarizarse coas características de Ultimate Multisite. Pulse **Instalar** para añadir o contido predefinido, ou salte este paso se preferir empezar do zero.

![Paso de instalación de contido predefinido](/img/installation/wizard-default-content.png)

### Plugins Recomendados

Instale opcionalmente os plugins compañeiros recomendados. Pulse **Instalar** para añádelos ou salte para continuar.

![Paso de plugins recomendados](/img/installation/wizard-recommended-plugins.png)

### Listo!

¡Está feito! A súa instalación de Ultimate Multisite está completada. Agora podes empezar a construir a túa plataforma de Website as a Service desde o **Network Admin Dashboard**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

¡Póntete en marcha e dónate a currar!
