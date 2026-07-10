---
title: Installere Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Installere Ultimate Multisite {#installing-ultimate-multisite}

:::note
Denne veiledningen forutsetter at du allerede har installert og konfigurert WordPress Multisite. For å lære hvordan, kan du se denne veiledningen [her](https://www.wpbeginner.com/glossary/multisite/) fra WP Beginner.
:::

## Installere plugin-modulen {#installing-the-plugin}

Ultimate Multisite er tilgjengelig gratis på [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Fra ditt **Nettverksadministratorpanel**, gå til **Plugins → Legg til ny plugin-modul**.

![Side for å legge til en ny plugin-modul i Nettverksadministratorpanelet](/img/installation/add-new-plugin.png)

Søk etter **"Ultimate Multisite"** (med anførselstegn for et eksakt treff), og den vil vises som det første resultatet. Klikk på **Installer nå**.

![Søkeresultater som viser Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Når den er installert, klikker du på **Aktiver i nettverket** for å aktivere plugin-modulen i hele nettverket ditt.

![Plugin-modul installert med knappen Aktiver i nettverket](/img/installation/plugin-installed.png)

Etter aktivering blir du automatisk omdirigert til Oppsettsveiviseren.

![Plugin-modul aktivert og omdirigert til veiviseren](/img/installation/plugin-activated.png)

## Oppsettsveiviseren {#setup-wizard}

Oppsettsveiviseren vil guide deg gjennom konfigurasjonen av Ultimate Multisite på omtrent 10 minutter.

### Velkommen {#welcome}

Klikk på **Kom i gang** for å begynne.

![Velkomstskjerm for oppsettsveiviseren](/img/installation/wizard-welcome.png)

### Forhåndsinstallasjonssjekker {#pre-install-checks}

Dette trinnet sjekker systeminformasjonen og WordPress-installasjonen din for å sikre at den oppfyller Ultimate Multisites krav. Hvis alt ser bra ut, klikker du på **Gå til neste trinn**.

![Forhåndsinstallasjonssjekker som viser systemkrav](/img/installation/wizard-pre-install-checks.png)

:::note Aktiver i nettverket-knapp (v2.6.1+)
Hvis Ultimate Multisite ble installert, men **ikke er aktivert i nettverket ennå** – for eksempel hvis du klikket på **Aktiver** (enkeltsted) i stedet for **Aktiver i nettverket** fra skjermen for nettverksplugin-moduler – vil trinnet for forhåndsinstallasjonssjekker oppdage dette og vise en knapp med teksten **Aktiver i nettverket**.

Ved å klikke på **Aktiver i nettverket**, aktiveres plugin-modulen automatisk i hele multisitenettverket ditt. Når den er aktivert, fortsetter veiviseren normalt til installasjonstrinnet. Du trenger ikke å forlate veiviseren for å fikse aktiveringstilstanden.
:::

### Installasjon {#installation}

Installatøren vil opprette de nødvendige databasetabellene og installere filen `sunrise.php` som Ultimate Multisite trenger for å fungere. Klikk på **Installer** for å fortsette.

![Installasjonstrinn som viser databasetabeller og sunrise.php](/img/installation/wizard-installation.png)

### Ditt selskap {#your-company}

Fyll ut informasjon om selskapet ditt og angi standardvalutaen. Denne informasjonen vil bli brukt i hele WaaS-plattformen din. Klikk på **Fortsett** når du er ferdig.

![Konfigurasjonstrinn for "Ditt selskap"](/img/installation/wizard-your-company.png)

### Standardinnhold {#default-content}

Dette trinnet lar deg installere forhåndsdefinerte maler, produkter og annet startinnhold. Dette er en fin måte å bli kjent med Ultimate Multisites funksjoner. Klikk på **Installer** for å legge til standardinnholdet, eller hopp over dette trinnet hvis du foretrekker å starte fra bunnen av.

![Installasjonstrinn for standardinnhold](/img/installation/wizard-default-content.png)

### Anbefalte plugin-moduler {#recommended-plugins}

Du kan eventuelt installere anbefalte tilleggsplugin-moduler. Klikk på **Installer** for å legge dem til, eller hopp over for å fortsette.

![Trinn for anbefalte plugin-moduler](/img/installation/wizard-recommended-plugins.png)

### Ferdig! {#ready}

Det var det! Ultimate Multisite-installasjonen er fullført. Du kan nå begynne å bygge din "nettsted som en tjeneste"-plattform fra **Nettverksadministratorpanelet**.

![Oppsettet er fullført – Klar-skjerm](/img/installation/wizard-ready.png)

![Nettverksadministratorpanel med Ultimate Multisite aktivert](/img/installation/network-dashboard.png)

Kos deg!
