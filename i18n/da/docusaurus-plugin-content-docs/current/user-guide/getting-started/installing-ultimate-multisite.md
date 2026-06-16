---
title: Installering af Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Installation af Ultimate Multisite

:::note
Denne vejledning forudsætter, at du allerede har WordPress Multisite installeret og konfigureret. For at lære hvordan, kan du se denne vejledning [her](https://www.wpbeginner.com/glossary/multisite/) fra WP Beginner.
:::

## Installation af plugin'et

Ultimate Multisite er tilgængeligt gratis på [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Fra dit **Netværksadministrator-dashboard** skal du gå til **Plugins → Tilføj nyt plugin**.

![Side med "Tilføj nyt plugin" i Netværksadministrator](/img/installation/add-new-plugin.png)

Søg efter **"Ultimate Multisite"** (med anførselstegn for et præcist match), og det vil vises som det første resultat. Klik på **Installer nu**.

![Søgeresultater, der viser Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Når det er installeret, skal du klikke på **Netværksaktiver** for at aktivere plugin'et i hele dit netværk.

![Plugin installeret med knappen "Netværksaktiver"](/img/installation/plugin-installed.png)

Efter aktivering bliver du automatisk omdirigeret til installationsguiden.

![Plugin aktiveret og omdirigeret til guiden](/img/installation/plugin-activated.png)

## Installationsguide

Installationsguiden vil guide dig gennem konfigurationen af Ultimate Multisite på cirka 10 minutter.

### Velkommen

Klik på **Kom i gang** for at starte.

![Velkomstskærm til installationsguiden](/img/installation/wizard-welcome.png)

### Forudgående kontrol

Dette trin kontrollerer dine systemoplysninger og WordPress-installation for at sikre, at den opfylder Ultimate Multisites krav. Hvis alt ser godt ud, skal du klikke på **Gå til næste trin**.

![Forudgående kontrol, der viser systemkrav](/img/installation/wizard-pre-install-checks.png)

:::note Knap "Netværksaktiver" (v2.6.1+)
Hvis Ultimate Multisite er installeret, men **endnu ikke netværksaktiveret** – for eksempel hvis du klikkede på **Aktiver** (enkeltstående side) i stedet for **Netværksaktiver** fra skærmen med netværksplugins – vil trinnet "Forudgående kontrol" registrere dette og vise en knap **Netværksaktiver**.

Ved at klikke på **Netværksaktiver** aktiveres plugin'et automatisk i hele dit multisite-netværk. Når det er aktiveret, fortsætter guiden normalt til installationstrinnet. Du behøver ikke forlade guiden for at rette aktiveringstilstanden.
:::

### Installation

Installationsprogrammet opretter de nødvendige databasetabeller og installerer filen `sunrise.php`, som Ultimate Multisite har brug for for at fungere. Klik på **Installer** for at fortsætte.

![Installationstrin, der viser databasetabeller og sunrise.php](/img/installation/wizard-installation.png)

### Din virksomhed

Udfyld dine virksomhedsoplysninger, og angiv din standardvaluta. Disse oplysninger vil blive brugt i hele din WaaS-platform. Klik på **Fortsæt**, når du er færdig.

![Konfigurationstrin "Din virksomhed"](/img/installation/wizard-your-company.png)

### Standardindhold

Dette trin giver dig mulighed for at installere foruddefinerede skabeloner, produkter og andet startindhold. Dette er en god måde at blive fortrolig med Ultimate Multisites funktioner. Klik på **Installer** for at tilføje standardindholdet, eller spring dette trin over, hvis du foretrækker at starte fra bunden.

![Installationstrin for standardindhold](/img/installation/wizard-default-content.png)

### Anbefalede plugins

Du kan eventuelt installere anbefalede tilhørende plugins. Klik på **Installer** for at tilføje dem, eller spring over for at fortsætte.

![Trin med anbefalede plugins](/img/installation/wizard-recommended-plugins.png)

### Klar!

Det var det! Din Ultimate Multisite-installation er fuldført. Du kan nu begynde at opbygge din Website as a Service-platform fra **Netværksadministrator-dashboardet**.

![Installation fuldført - skærm "Klar"](/img/installation/wizard-ready.png)

![Netværksadministrator-dashboard med aktiveret Ultimate Multisite](/img/installation/network-dashboard.png)

God fornøjelse!
