---
title: Het installeren van Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Het installeren van Ultimate Multisite

:::note
Deze handleiding gaat ervan uit dat je WordPress Multisite al hebt geïnstalleerd en geconfigureerd. Raadpleeg [deze handleiding](https://www.wpbeginner.com/glossary/multisite/) van WP Beginner om te leren hoe.
:::

## Het installeren van de plugin

Ultimate Multisite is gratis beschikbaar op [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Ga vanaf je **Netwerkbeheerder Dashboard** naar **Plugins → Nieuwe Plugin toevoegen**.

![Pagina 'Nieuwe plugin toevoegen' in het Netwerkbeheerder Dashboard](/img/installation/add-new-plugin.png)

Zoek naar **"Ultimate Multisite"** (met aanhalingstekens voor een exacte overeenkomst), dan verschijnt deze als eerste resultaat. Klik op **Nu installeren**.

![Zoekresultaten met Ultimate Multisite weergegeven](/img/installation/search-ultimate-multisite.png)

Klik na de installatie op **Netwerk activeren** om de plugin voor je hele netwerk te activeren.

![Geïnstalleerde plugin met knop 'Netwerk activeren'](/img/installation/plugin-installed.png)

Na activering word je automatisch doorgestuurd naar de Setup Wizard.

![Plugin geactiveerd en doorverwezen naar de wizard](/img/installation/plugin-activated.png)

## Setup Wizard

De Setup Wizard begeleidt je in ongeveer 10 minuten bij het configureren van Ultimate Multisite.

### Welkom

Klik op **Aan de slag** om te beginnen.

![Welkomstscherm van de Setup Wizard](/img/installation/wizard-welcome.png)

### Voorafgaande controles

Deze stap controleert je systeemgegevens en WordPress-installatie om er zeker van te zijn dat deze voldoen aan de vereisten van Ultimate Multisite. Als alles in orde is, klik dan op **Ga naar de volgende stap**.

![Voorafgaande controles met weergave van systeemeisen](/img/installation/wizard-pre-install-checks.png)

:::note Knop 'Netwerk activeren' (v2.6.1+)
Als Ultimate Multisite is geïnstalleerd, maar **nog niet op netwerkniveau is geactiveerd** – bijvoorbeeld als je in plaats van **Netwerk activeren** vanaf het scherm met netwerkplugins op **Activeren** (voor een enkele site) hebt geklikt – dan detecteert de stap 'Voorafgaande controles' dit en wordt er een knop **Netwerk activeren** weergegeven.

Klik op **Netwerk activeren** om de plugin automatisch voor je hele multisite-netwerk te activeren. Na activering gaat de wizard normaal verder naar de installatiestap. Je hoeft de wizard niet af te sluiten om de activatiestatus aan te passen.
:::

### Installatie

De installer maakt de benodigde databasetabellen en installeert het bestand `sunrise.php` dat Ultimate Multisite nodig heeft om te functioneren. Klik op **Installeren** om verder te gaan.

![Installatiestap met weergave van databasetabellen en sunrise.php](/img/installation/wizard-installation.png)

### Je bedrijf

Vul je bedrijfsgegevens in en stel de standaardvaluta in. Deze informatie wordt gebruikt in je WaaS-platform. Klik op **Doorgaan** als je klaar bent.

![Configuratiestap 'Je bedrijf'](/img/installation/wizard-your-company.png)

### Standaardinhoud

Met deze stap kun je vooraf gedefinieerde sjablonen, producten en andere startinhoud installeren. Dit is een goede manier om vertrouwd te raken met de functies van Ultimate Multisite. Klik op **Installeren** om de standaardinhoud toe te voegen, of sla deze stap over als je liever vanaf nul begint.

![Stap voor het installeren van standaardinhoud](/img/installation/wizard-default-content.png)

### Aanbevolen plugins

Installeer optioneel aanbevolen aanvullende plugins. Klik op **Installeren** om ze toe te voegen of ga verder zonder.

![Stap met aanbevolen plugins](/img/installation/wizard-recommended-plugins.png)

### Klaar!

Dat is alles! Je Ultimate Multisite-installatie is voltooid. Nu kun je beginnen met het bouwen van je Website as a Service-platform vanaf het **Netwerkbeheerder Dashboard**.

![Setup voltooid - Klaar scherm](/img/installation/wizard-ready.png)

![Netwerkbeheerder Dashboard met actieve Ultimate Multisite](/img/installation/network-dashboard.png)

Veel plezier!
