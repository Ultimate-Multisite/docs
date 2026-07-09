---
title: Installera Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Installera Ultimate Multisite {#installing-ultimate-multisite}

:::note
Den här guiden förutsätter att du redan har WordPress Multisite installerat och konfigurerat. Om du vill veta hur, kolla in den här guiden [https://www.wpbeginner.com/glossary/multisite/](https://www.wpbeginner.com/glossary/multisite/) från WP Beginner.
:::

## Installera plugin-programmet {#installing-the-plugin}

Ultimate Multisite finns tillgängligt gratis på [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Från din **Nätverksadministratörs instrumentpanel**, gå till **Plugins → Lägg till nytt plugin-program**.

![Sida för att lägga till ett nytt plugin-program i nätverksadministratörens instrumentpanel](/img/installation/add-new-plugin.png)

Sök efter **"Ultimate Multisite"** (med citattecken för en exakt matchning), så visas det som det första resultatet. Klicka på **Installera nu**.

![Sökresultat som visar Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

När installationen är klar, klicka på **Aktivera i nätverket** för att aktivera plugin-programmet i hela ditt nätverk.

![Plugin-program installerat med knappen Aktivera i nätverket](/img/installation/plugin-installed.png)

Efter aktivering kommer du automatiskt att omdirigeras till installationsguiden.

![Plugin-program aktiverat och omdirigerad till guiden](/img/installation/plugin-activated.png)

## Installationsguide {#setup-wizard}

Installationsguiden guidar dig genom konfigurationen av Ultimate Multisite på cirka 10 minuter.

### Välkommen {#welcome}

Klicka på **Kom igång** för att börja.

![Välkomstskärm för installationsguiden](/img/installation/wizard-welcome.png)

### Förhandskontroller före installation {#pre-install-checks}

Det här steget kontrollerar din systeminformation och WordPress-installation för att säkerställa att den uppfyller Ultimate Multisites krav. Om allt ser bra ut, klicka på **Gå till nästa steg**.

![Förhandskontroller som visar systemkraven](/img/installation/wizard-pre-install-checks.png)

:::note Knappen Aktivera i nätverket (v2.6.1+)
Om Ultimate Multisite har installerats men **ännu inte aktiverats i nätverket** – till exempel om du klickade på **Aktivera** (enskild webbplats) istället för **Aktivera i nätverket** från skärmen med nätverksplugin-program – kommer steget Förhandskontroller att upptäcka detta och visa en knapp **Aktivera i nätverket**.

Genom att klicka på **Aktivera i nätverket** aktiveras plugin-programmet automatiskt i hela ditt multisite-nätverk. När det är aktiverat fortsätter guiden normalt till installationssteget. Du behöver inte lämna guiden för att åtgärda aktiveringstillståndet.
:::

### Installation {#installation}

Installationsprogrammet skapar de nödvändiga databastabellerna och installerar filen `sunrise.php` som Ultimate Multisite behöver för att fungera. Klicka på **Installera** för att fortsätta.

![Installationssteget som visar databastabeller och sunrise.php](/img/installation/wizard-installation.png)

### Ditt företag {#your-company}

Fyll i din företagsinformation och ange din standardvaluta. Den här informationen kommer att användas i hela din WaaS-plattform. Klicka på **Fortsätt** när du är klar.

![Konfigurationssteget för ditt företag](/img/installation/wizard-your-company.png)

### Standardinnehåll {#default-content}

Detta steg låter dig installera fördefinierade mallar, produkter och annat startinnehåll. Det här är ett bra sätt att bekanta sig med Ultimate Multisites funktioner. Klicka på **Installera** för att lägga till standardinnehållet eller hoppa över det här steget om du föredrar att börja från grunden.

![Steg för installation av standardinnehåll](/img/installation/wizard-default-content.png)

### Rekommenderade plugin-program {#recommended-plugins}

Installera valfritt rekommenderade tilläggsplugin-program. Klicka på **Installera** för att lägga till dem eller hoppa över för att fortsätta.

![Steg med rekommenderade plugin-program](/img/installation/wizard-recommended-plugins.png)

### Klart! {#ready}

Det är allt! Din Ultimate Multisite-installation är klar. Du kan nu börja bygga din webbplats som en tjänst från **Nätverksadministratörens instrumentpanel**.

![Installationen är klar – skärmen Klar](/img/installation/wizard-ready.png)

![Nätverksadministratörens instrumentpanel med aktiverad Ultimate Multisite](/img/installation/network-dashboard.png)

Ha så kul!
