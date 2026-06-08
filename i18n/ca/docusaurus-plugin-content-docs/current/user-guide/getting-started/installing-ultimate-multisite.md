---
title: Instal·lant Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instal·lació d'Ultimate Multisite

:::note
Aquest tutorial assumeix que ja teniu instal·lat i configurat WordPress Multisite. Per aprendre com fer-ho, consulteu [aquest tutorial](https://www.wpbeginner.com/glossary/multisite/) de WP Beginner.
:::

## Instal·lar el Plugin

Ultimate Multisite és disponible de manera gratuïta a [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Des del vostre **Network Admin Dashboard**, aneu a **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Cercareu **"Ultimate Multisite"** (amb com quotes per a una cerca exacta) i apareixerà com el primer resultat. Cliqueu sobre **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Una vegada instal·lat, cliqueu sobre **Network Activate** per activar el plugin a tot el vostre network.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Després de l'activació, sereu rediriguts automàticament al Setup Wizard.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

El Setup Wizard us guiarà per configurar Ultimate Multisite en uns 10 minuts.

### Welcome

Cliqueu sobre **Get Started** per començar.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Pre-install Checks

Aquest pas comprueba la informació del vostre sistema i l'instal·lació de WordPress per assegurar-se que compleix amb els requisits d'Ultimate Multisite. Si tot té bé, cliqueu sobre **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Botó Network Activate (v2.6.1+)
Si Ultimate Multisite s'ha instal·lat però **no s'ha activat encara a nivell de network** — per exemple, si cliqueu sobre **Activate** (a nivell de site) en lloc de **Network Activate** des de la pantalla de plugins del network — el pas de Pre-install Checks ho detectarà i mostrarà un botó de **Network Activate**.

Faire clic a **Network Activate** activa el plugin a tot el vostre network multisite automàticament. Una vegada activat, el wizard continua normalment fins al pas d'instal·lació. No necessiteu abandonar el wizard per corregir l'estat d'activació.
:::

### Installation

L'instal·lador crearà les taules de la base de dades necessàries i instal·larà el fitxer `sunrise.php` que Ultimate Multisite necessita per funcionar. Cliqueu sobre **Install** per continuar.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Your Company

Rengeu la informació de la vostra empresa i configureu la vostra moneda per defecte. Aquesta informació es farà servir a tot el vostre platform WaaS. Cliqueu sobre **Continue** quan terminiu.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Default Content

Aquest pas us permet instal·lar templates, productes i altre contingut inicial predefinits. És un bon manera de familiaritzar-se amb les funcionalitats d'Ultimate Multisite. Cliqueu sobre **Install** per afegir el contingut per defecte, o saltieu aquest pas si preferiu començar des de zero.

![Default content installation step](/img/installation/wizard-default-content.png)

### Recommended Plugins

Instal·leu opcionalment plugins complementaris recomanats. Cliqueu sobre **Install** per afegir-los o saltieu per continuar.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Ready!

És tot! La vostra instal·lació d'Ultimate Multisite està completada. Ara podeu començar a construir la vostra plataforma Website as a Service des del **Network Admin Dashboard**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Ara només has de divertir-te!
