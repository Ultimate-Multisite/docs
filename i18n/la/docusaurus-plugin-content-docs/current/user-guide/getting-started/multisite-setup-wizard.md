---
title: Magister Configurandi Multisitus
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Guía de Configuración del Asistente Multisite

Ultimate Multisite incluye un asistente incorporado que convierte automáticamente una instalación estándar de WordPress en una red WordPress Multisite. Esto elimina la necesidad de editar manualmente `wp-config.php` o ejecutar comandos de base de datos.

:::tip
Si tu instalación de WordPress ya está funcionando como una red Multisite, puedes omitir este paso por completo. El asistente solo aparece cuando Multisite aún no está habilitado.
:::

## ¿Cuándo Aparece el Asistente?

Cuando activas Ultimate Multisite en una instalación estándar (no Multisite) de WordPress, el plugin detecta que Multisite no está habilitado y te redirige automáticamente al Asistente de Configuración de Multisite en lugar del asistente de configuración regular.

También puedes acceder a él directamente en **WP Admin > Ultimate Multisite > Multisite Setup**.

## Requisitos Previos

Antes de ejecutar el asistente, asegúrate de que:

- Tienes **acceso de administrador** a tu instalación de WordPress
- El archivo `wp-config.php` de tu servidor es **modificable** por el servidor web
- Tienes una **copia de seguridad reciente** de tus archivos y base de datos

:::warning
El asistente modifica tu archivo `wp-config.php` y crea nuevas tablas de base de datos. Siempre crea una copia de seguridad antes de continuar.
:::

## Paso 1: Bienvenida

La primera pantalla explica qué es WordPress Multisite y lo que hará el asistente:

- Habilitar la función Multisite en tu configuración de WordPress
- Crear las tablas de base de datos de red necesarias
- Añadir las constantes multisite requeridas a `wp-config.php`
- Activar Ultimate Multisite en toda la red

![Asistente de Configuración de Multisite - Paso de Bienvenida](/img/installation/multisite-wizard/wizard-welcome.png)

Haz clic en **Continuar** para seguir adelante.

## Paso 2: Configuración de la Red

Este paso te pide que configures los ajustes de tu red.

### Estructura del Sitio

Scegli come organizaris vesteri siti:

- **Subdomini** (Consigliato) — Ogni sito ottiene il proprio subdomain, ad esempio `site1.yourdomain.com`
- **Sottodirectory** — I siti vengono creati come percorsi, ad esempio `yourdomain.com/site1`

:::note
Se scegli i subdomini, dovrai configurare un **DNS wildcard** e un **certificato SSL wildcard** per il tuo dominio. La maggior parte degli hosting WordPress gestiti lo fa automaticamente. Consulta [Ultimate Multisite 101](./ultimate-multisite-101) per un confronto dettagliato.
:::

### Titolo della Rete (Network Title)

Inserisci un nome per la tua rete. Questo predefinito è il titolo del tuo sito attuale con "Network" aggiunto. Puoi cambiarlo in seguito dalle impostazioni della rete.

### Email Amministratore Rete (Network Admin Email)

L'indirizzo email usato per le notifiche di amministrazione della rete. Questo predefinito è l'indirizzo email dell'utente corrente.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Dopo aver compilato i campi, clicca su **Continua** per procedere.

## Passo 3: Installazione (Installation)

Clicca sul pulsante **Installa** per iniziare. Il wizard esegue cinque passaggi automatici in sequenza, mostrando ogni progresso in tempo reale:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Paso | Descripción |
|------|-------------|
| **Habilitar Multisite** | Añade la constante `WP_ALLOW_MULTISITE` a `wp-config.php` |
| **Crear Red** | Crea las tablas de base de datos del multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) y llénalas con tu configuración de red |
| **Actualizar Configuración** | Añade las constantes finales del multisite a `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etc.) |
| **Corregir Cookies** | Asegura que la URL del sitio sea correcta en los metadatos de la red para evitar problemas de autenticación después de la activación |
| **Activar Plugin de Red** | Activa Ultimate Multisite para que funcione en toda la red |

Cada paso muestra uno de estos estados:

- **Pendiente** — Esperando ser procesado
- **Instalando...** — Actualmente en ejecución
- **¡Éxito!** — Completado con éxito
- **Mensaje de error** — Ocurrió un error (el mensaje describirá el problema)

Una vez que todos los pasos se completen con éxito, verás un estado verde de "¡Éxito!" para cada elemento:

![Asistente de Configuración Multisite - Instalación completa](/img/installation/multisite-wizard/wizard-installation-complete.png)

Luego, el asistente procederá automáticamente a la pantalla de finalización.

## Paso 4: Completar

Una vez que la instalación esté terminada, verás un mensaje de éxito confirmando que WordPress Multisite ha sido habilitado.

![Asistente de Configuración Multisite - Configuración completa](/img/installation/multisite-wizard/wizard-complete.png)

Ahora puedes continuar con el asistente de configuración de Ultimate Multisite para configurar tu plataforma WaaS (detalles de la empresa, contenido predeterminado, pasarelas de pago, etc.).

:::note
Postquam completatio installationis multisite terminat, browser tuus per novum network admin habilitatum redirebit. Possuitne necesse est redi uti, quia cookies authenticationes ad environem multisite novi sunt.
:::

## Fallback Configuratio Manualis

Si wizard non potest in tuum `wp-config.php` scriptum scribere (propter permissiones file vel restrictions server), hoc codicem exactum ostendit quod manu addere debet:

1. **constantes wp-config.php** quae super lineam `/* That's all, stop editing! */` adhiberi sunt
2. **regulae rewrite .htaccess** adhibitae ad structuram situm eligendam (subdomain vel subdirectory)

Post facto modificationes manuales fecisse, paginam refresce et wizard detectabit quod multisite nunc activum est.

## Solutio Problematum

### Wizard dicit quod wp-config.php non est scriptum

Processus server tuus necessitatem ad scriptum `wp-config.php` habet. Possuitis:

- Tempora permissiones file in `644` vel `666` mutare
- Instrucciones fallbak manuales quae wizard praebet uti
- Tuo fornitorem hosting assistance petere

### Situa non sunt accessibilia post setup (subdomain)

Si structuram subdomain eligisti, **wildcard DNS** ad tuum dominio configurare necesse est. Record DNS addere:

```
Type: A (vel CNAME)
Host: *
Value: [tuus server IP]
```

Cum tuo fornitorem hosting consultare si non scis quomodo hoc configurari debet.

### Problematicae authenticationes post setup

Si es logged out vel error cookies experiebatur post setup multisite:

1. Cookies browser tuos pro situo purgare
2. Redi uti in `yourdomain.com/wp-login.php`
3. Si opus manet, verifica quod `COOKIE_DOMAIN` in tuo `wp-config.php` non est ad `false` setum — hoc est nota problematica in installationibus multisite subdomain.

### Un step fallax fuit durante installationem

Si uno de los pasos de instalación muestra un error:

1. Anota el mensaje de error que se muestra.
2. Vuelve al paso de configuración e inténtalo de nuevo.
3. Si el error persiste, revisa el registro de errores de PHP de tu servidor para obtener más detalles.
4. Los pasos que ya se han completado se omitirán en ejecuciones posteriores (el instalador es idempotente).
