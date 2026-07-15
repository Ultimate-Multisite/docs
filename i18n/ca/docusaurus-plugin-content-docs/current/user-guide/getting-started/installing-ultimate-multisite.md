---
title: Instal·lant Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instal·lació de l'Ultimate Multisite

:::note
Aquest tutorial assumeix que ja teniu instal·lat i configurat el WordPress Multisite. Per obtenir més informació, consulteu [aquest tutorial](https://www.wpbeginner.com/glossary/multisite/) de WP Beginner.
:::

## Instal·lació del connector {#installing-the-plugin}

L'Ultimate Multisite està disponible gratuïtament a [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Des del vostre **Panell d'administració de la xarxa**, aneu a **Connectors → Afegeix un nou connector**.

![Pàgina "Afegeix un nou connector" al panell d'administració de la xarxa](/img/installation/add-new-plugin.png)

Cerqueu **"Ultimate Multisite"** (amb les cometes per a una coincidència exacta) i apareixerà com el primer resultat. Feu clic a **Instal·la ara**.

![Resultats de la cerca que mostren l'Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Un cop instal·lat, feu clic a **Activa a tota la xarxa** per activar el connector a tota la vostra xarxa.

![Connector instal·lat amb el botó "Activa a tota la xarxa"](/img/installation/plugin-installed.png)

Després de l'activació, se us redirigirà automàticament al màquina d'instal·lació.

![Connector activat i redirigit al màquina](/img/installation/plugin-activated.png)

## Màquina d'instal·lació {#setup-wizard}

La màquina d'instal·lació us guiarà en la configuració de l'Ultimate Multisite en uns 10 minuts.

### Benvingut {#welcome}

Feu clic a **Comença** per començar.

![Pantalla de benvinguda de la màquina d'instal·lació](/img/installation/wizard-welcome.png)

### Comprovacions prèvies a la instal·lació {#pre-install-checks}

Aquest pas comprova la informació del sistema i la instal·lació de WordPress per assegurar-se que compleix els requisits de l'Ultimate Multisite. Si tot està bé, feu clic a **Vés al següent pas**.

![Comprovacions prèvies a la instal·lació que mostren els requisits del sistema](/img/installation/wizard-pre-install-checks.png)

:::note Botó "Activa a tota la xarxa" (v2.6.1+)
Si l'Ultimate Multisite s'ha instal·lat però **encara no s'ha activat a tota la xarxa** —per exemple, si heu fet clic a **Activa** (d'un sol lloc) en comptes de **Activa a tota la xarxa** des de la pantalla de connectors de la xarxa— el pas de les comprovacions prèvies a la instal·lació ho detectarà i mostrarà un botó **Activa a tota la xarxa**.

En fer clic a **Activa a tota la xarxa**, s'activarà el connector a tota la vostra xarxa multisite automàticament. Un cop activat, la màquina continuarà normalment fins al pas d'instal·lació. No cal que sortiu de la màquina per solucionar l'estat d'activació.
:::

### Instal·lació {#installation}

El programa d'instal·lació crearà les taules de base de dades necessàries i instal·larà el fitxer `sunrise.php` que l'Ultimate Multisite necessita per funcionar. Feu clic a **Instal·la** per continuar.

![Pas d'instal·lació que mostra les taules de la base de dades i el fitxer sunrise.php](/img/installation/wizard-installation.png)

### La vostra empresa {#your-company}

Ompliu la informació de la vostra empresa i configureu la moneda predeterminada. Aquesta informació s'utilitzarà a tota la vostra plataforma WaaS. Feu clic a **Continua** quan hàgiu acabat.

![Pas de configuració "La vostra empresa"](/img/installation/wizard-your-company.png)

### Contingut per defecte {#default-content}

Aquest pas us permet instal·lar plantilles predefinides, productes i altres continguts d'inici. Aquesta és una bona manera de familiaritzar-vos amb les funcions de l'Ultimate Multisite. Feu clic a **Instal·la** per afegir el contingut per defecte o salteu aquest pas si preferiu començar des de zero.

![Pas d'instal·lació del contingut per defecte](/img/installation/wizard-default-content.png)

### Connectors recomanats {#recommended-plugins}

Instal·leu connectors complementaris recomanats, si voleu. Feu clic a **Instal·la** per afegir-los o continueu sense fer-ho.

![Pas dels connectors recomanats](/img/installation/wizard-recommended-plugins.png)

### A punt! {#ready}

I ja està! La vostra instal·lació de l'Ultimate Multisite s'ha completat. Ara podeu començar a construir la vostra plataforma de servei de llocs web des del **Panell d'administració de la xarxa**.

![Instal·lació completa: pantalla "A punt"](/img/installation/wizard-ready.png)

![Panell d'administració de la xarxa amb l'Ultimate Multisite activat](/img/installation/network-dashboard.png)

Endavant, diverteix-vos!
