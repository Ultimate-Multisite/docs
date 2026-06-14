---
title: Installation af Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Installation af Ultimate Multisite

:::note
Denne guide antager, at du allerede har installeret og opsat WordPress Multisite. For at lære hvordan du gør det, tjek [denne tutorial](https://www.wpbeginner.com/glossary/multisite/) fra WP Beginner.
:::

## Installation af Plugin'et

Ultimate Multisite er gratis tilgængelig på [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Fra dit **Network Admin Dashboard** skal du gå til **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Søg efter **"Ultimate Multisite"** (med anførselstegn for en præcis match), og den vil dukke op som det første resultat. Klik på **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Når installationen er færdig, klik på **Network Activate** for at aktivere plugin'et i hele dit netværk.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Efter aktivering bliver du automatisk omdirigeret til Opsætningsguiden (Setup Wizard).

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Opsætningsguide (Setup Wizard)

Opsætningsguiden vil guide dig i at konfigurere Ultimate Multisite på omkring 10 minutter.

### Velkommen

Klik på **Get Started** for at komme i gang.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Forudgående tjek

Dette trin tjekker din systeminformation og WordPress-installationen for at sikre, at den opfylder kravene til Ultimate Multisite. Hvis alt ser rigtigt ud, klik på **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate knappen (v2.6.1+)
Hvis Ultimate Multisite er installeret, men **ikke endnu aktiveret i netværket** – for eksempel hvis du klikkede på **Aktiver** (single-site) i stedet for **Network Activate** fra plugin-skærmen for netværksprodukter – vil trinnet Pre-install Checks opdage dette og vise en knap til **Network Activate**.

Ved at klikke på **Network Activate** aktiverer du automatisk plugin'et på tværs af hele dit multisite netværk. Når det er aktiveret, fortsætter wizarden normalt videre til installations trinnet. Du behøver ikke forlade wizarden for at rette aktiveringsstatus.
:::

### Installation

Installer vil oprette de nødvendige database-tabeller og installere filen `sunrise.php`, som Ultimate Multisite har brug for til at fungere. Klik på **Install** for at fortsætte.

![Installation trin, der viser database-tabeller og sunrise.php](/img/installation/wizard-installation.png)

### Dit Firmanavn

Udfyld virksomhedsinformation og sæt din standardvaluta. Denne information vil blive brugt gennem hele din WaaS platform. Klik på **Fortsæt**, når du er færdig.

![Dit firmanavns konfigurations trin](/img/installation/wizard-your-company.png)

### Standardindhold

Dette trin lader dig installere foruddefinerede skabeloner, produkter og andet startindhold. Det er en god måde at komme bekendt med Ultimate Multisites funktioner på. Klik på **Install** for at tilføje standardindhold, eller spring dette trin over, hvis du foretrækker at starte helt fra bunden.

![Installationstrin for standardindhold](/img/installation/wizard-default-content.png)

### Anbefalede plugins

Installer eventuelt anbefalede tilbehørsprodukter (companion plugins). Klik på **Install** for at tilføje dem eller spring over for at fortsætte.

![Trin for anbefalede plugins](/img/installation/wizard-recommended-plugins.png)

### Klar!

Det er det! Din Ultimate Multisite installation er færdig. Du kan nu begynde at bygge din Website as a Service platform fra **Network Admin Dashboard**.

![Opsætning fuldført - Klar skærm](/img/installation/wizard-ready.png)

![Network Admin Dashboard med Ultimate Multisite aktiv](/img/installation/network-dashboard.png)

Gå bare i gang og ha lidt sjov!
