---
title: Installeer Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Installeer Ultimate Multisite

:::note
Hierdie handleiding gaan uit dat jy reeds WordPress Multisite geïnstalleer en geconfigureer het. Om te leer hoe, kyk na hierdie handleiding by WP Beginner.
:::

## Installeer die Plugin

Ultimate Multisite is gratis beskikbaar op [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Gaan van jou **Network Admin Dashboard** na **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Soek na **"Ultimate Multisite"** (met aanhalingstekens vir 'n presiese pas) en dit sal as die eerste resultaat verskyn. Klik op **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Nadat dit geïnstalleer is, klik op **Network Activate** om die plugin oor jou hele network te aktiveer.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Na aktivering word jy outomaties na die Setup Wizard herlei.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Die Setup Wizard sal jou deur die konfigurasie van Ultimate Multisite lei binne ongeveer 10 minute.

### Welkom

Klik op **Get Started** om te begin.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Voor-installasie Kontrole

Hierdie stap kontroleer jou stelsel-inligting en WordPress-installasie om te verseker dat dit aan Ultimate Multisite se vereistes voldoen. As alles goed lyk, klik op **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate button (v2.6.1+)
As Ultimate Multisite geïnstalleer is maar **nog nie network-geaktiveer** is — byvoorbeeld, as jy **Activate** (single-site) geklik het in plaas van **Network Activate** vanaf die network plugins skerm — sal die Voor-installasie Kontrole stap dit opmerk en 'n **Network Activate** knoppie vertoon.

Om op **Network Activate** te klik, aktiveer die plugin outomaties oor jou hele multisite network. Sodra dit geaktiveer is, gaan die wizard normaalweg na die installasiestap. Jy hoef nie die wizard te verlaat om die aktiveringsstatus reg te stel nie.
:::

### Installasie

Die installer sal die nodige database-tabels skep en die `sunrise.php` lêer installeer wat Ultimate Multisite benodig om te funksioneer. Klik op **Install** om voort te gaan.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Jou Maatskappy

Vul jou maatskinligting in en stel jou standaardvaluut in. Hierdie inligting sal deur jou WaaS platform gebruik word. Klik op **Continue** wanneer jy klaar is.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Standaardinhoud

Hierdie stap laat jou toe om vooraf gedefinieerde templates, produkte en ander begininhoud te installeer. Dit is 'n goeie manier om bekend te raak met Ultimate Multisite se kenmerke. Klik op **Install** om die standaardinhoud by te voeg, of skip hierdie stap oor as jy verkies om van die begin af te begin.

![Default content installation step](/img/installation/wizard-default-content.png)

### Aanbevole Plugins

Installeer opsioneel aanbevole bygehangde plugins. Klik op **Install** om hulle by te voeg of skip om voort te gaan.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Gereed!

Dit is dit! Jou Ultimate Multisite-installasie is voltooi. Jy kan nou begin om jou Website as a Service platform vanaf die **Network Admin Dashboard** te bou.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Gaan en het pret!
