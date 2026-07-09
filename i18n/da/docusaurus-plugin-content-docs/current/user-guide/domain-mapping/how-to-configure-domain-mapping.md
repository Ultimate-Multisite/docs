---
title: Sådan konfigurerer du domænetilknytning
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Sådan konfigurerer du domænemapping (v2) {#how-to-configure-domain-mapping-v2}

_**VIGTIG BEMÆRKNING: Denne artikel henviser til Ultimate Multisite version 2.x.**_

En af de mest kraftfulde funktioner i et premium-netværk er muligheden for at tilbyde vores kunder en chance for at tilknytte et topdomæne til deres websteder. Når alt kommer til alt, hvad ser mest professionelt ud: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) eller [_**joesbikeshop.com**_](http://joesbikeshop.com)? Derfor tilbyder Ultimate Multisite den funktion indbygget, uden behov for at bruge tredjeparts-plugins.

## Hvad er domænemapping? {#whats-domain-mapping}

Som navnet antyder, er domænemapping den mulighed, som Ultimate Multisite tilbyder, til at modtage en anmodning om et brugerdefineret domæne og mappe den anmodning til det tilsvarende websted i netværket med det pågældende domæne tilknyttet.

### Sådan opsætter du domænemapping på dit Ultimate Multisite-netværk {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Domænemapping kræver noget opsætning fra din side for at fungere. Heldigvis automatiserer Ultimate Multisite det hårde arbejde for dig, så du nemt kan opfylde kravene.

Under installationen af Ultimate Multisite vil guiden automatisk kopiere og installere **sunrise.php** i den angivne mappe. **Guiden lader dig ikke fortsætte, før dette trin er fuldført**.

<!-- Skærmbillede ikke tilgængeligt: Ultimate Multisite-installationsguide med sunrise.php-trin -->

Det betyder, at når Ultimate Multisite-installationsguiden er færdig med at opsætte dit netværk, kan du begynde at mappe det brugerdefinerede domæne med det samme.

Bemærk, at domænemapping i Ultimate Multisite ikke er obligatorisk. Du har mulighed for at bruge WordPress Multisite native domænemapping-funktion eller en hvilken som helst anden domænemapping-løsning.

Hvis du har brug for at deaktivere Ultimate Multisite-domænemapping for at give plads til andre domænemapping-løsninger, kan du deaktivere denne funktion under **Ultimate Multisite > Indstillinger > Domænemapping**.

![Indstillingssiden for domænemapping, der viser admin-omdirigering, mapping-besked og DNS-indstillinger](/img/config/domain-mapping-settings.png)

Lige under denne mulighed kan du også se muligheden **Tving admin-omdirigering**. Denne mulighed lader dig kontrollere, om dine kunder kan få adgang til deres admin-dashboard både på deres brugerdefinerede domæne og underdomæne eller kun på et af dem.

Hvis du vælger **Tving omdirigering til mappet domæne**, vil dine kunder kun kunne få adgang til deres admin-dashboard på deres brugerdefinerede domæner.

Muligheden **Tving omdirigering til** **netværksdomæne** gør præcis det modsatte - dine kunder får kun tilladelse til at få adgang til deres dashboards på deres underdomæne, selv hvis de forsøger at logge ind på deres brugerdefinerede domæner.

Og muligheden **Tillad adgang til admin via både mappet domæne og netværksdomæne** lader dem få adgang til deres admin-dashboards både på underdomænet og det brugerdefinerede domæne.

![Dropdown for admin-omdirigering udvidet og viser de tre omdirigeringsmuligheder](/img/config/domain-mapping-redirect-options.png)

Der er to måder at mappe et brugerdefineret domæne på. Den første er ved at mappe domænenavnet fra dit netværks admin-dashboard som superadmin, og den anden er via undersidens admin-dashboard under kontosiden.

Men før du begynder at mappe det brugerdefinerede domæne til en af undersiderne i dit netværk, skal du sikre dig, at domænenavnets **DNS-indstillinger** er korrekt konfigureret.

###

### Sørg for, at domænets DNS-indstillinger er korrekt konfigureret {#making-sure-the-domain-dns-settings-are-properly-configured}

For at en mapping kan fungere, skal du sikre dig, at det domæne, du planlægger at mappe, peger på dit netværks IP-adresse. Bemærk, at du skal bruge netværkets IP-adresse - IP-adressen for det domæne, hvor Ultimate Multisite er installeret - ikke IP-adressen for det brugerdefinerede domæne, du vil mappe. For at søge efter IP-adressen for et specifikt domæne foreslår vi for eksempel at gå til [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

For at mappe domænet korrekt skal du tilføje en **A RECORD** i din **DNS**-konfiguration, der peger på den **IP-adresse**. DNS-administration varierer meget mellem forskellige domæneregistratorer, men der findes masser af vejledninger online, der dækker det, hvis du søger efter " _Creating A Record on XXXX_ ", hvor XXXX er din domæneregistrator (f.eks.: " _Creating A Record on_ _GoDaddy_ ").

Hvis du har problemer med at få dette til at fungere, **kontakt din domæneregistrators support**, så kan de hjælpe dig med denne del.

Hvis du planlægger at lade dine kunder mappe deres egne domæner, skal de selv udføre arbejdet i denne del. Henvis dem til deres registrators supportsystem, hvis de ikke kan oprette A Record.

### Mapping af brugerdefineret domænenavn som Super Admin {#mapping-custom-domain-name-as-super-admin}

Når du er logget ind som superadmin på dit netværk, kan du nemt tilføje og administrere brugerdefinerede domænenavne ved at gå til **Ultimate Multisite > Domains**.

![Domains-liste i Ultimate Multisite](/img/admin/domains-list.png)

På denne side kan du klikke på knappen **Tilføj domæne** øverst, og dette åbner et modalvindue, hvor du kan angive og udfylde **brugerdefineret domænenavn**, **undersiden** du ønsker at anvende det brugerdefinerede domænenavn på, og beslutte, om du vil sætte det som **primært domæne** eller ej (bemærk, at du kan mappe **flere domænenavne til én underside**).

![Tilføj domæne-modal med domænenavn, webstedsvælger og primært domæne-til/fra](/img/admin/domain-add-modal.png)

Når du har indtastet alle oplysningerne, kan du derefter klikke på knappen **Tilføj eksisterende domæne** nederst.

Dette starter processen med at verificere og hente DNS-oplysningerne for det brugerdefinerede domæne. Du vil også se en log nederst på siden, så du kan følge den proces, det gennemgår. Denne proces kan tage et par minutter at fuldføre.

Ultimate Multisite v2.13.0 opretter også automatisk den interne domæneregistrering, når et nyt websted oprettes på en vært, der skal behandles som et domæne pr. websted. Hvis værten er netværkets primære domæne, eller et af de delte basisdomæner til checkout-formularen, der er konfigureret på et **Site URL**-felt, springes den automatiske mapped-domain-registrering over, så det delte basisdomæne forbliver tilgængeligt for hvert websted, der bruger det.

Når en kunde registrerer et nyt domæne gennem Domain Seller v1.3.0 eller nyere, mapper Ultimate Multisite som standard automatisk det registrerede domæne til kundens netværkswebsted. Administratorer behøver ikke længere at tilføje en separat mapped-domain-registrering efter en vellykket registrering, medmindre de vil justere indstillinger såsom primary-domain-flaget, aktiveringstilstand eller SSL-håndtering.

**Stage** eller status bør ændre sig fra **Checking DNS** til **Ready**, hvis alt er sat korrekt op.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Hvis du klikker på domænenavnet, vil du kunne se nogle indstillinger inde i det. Lad os tage et hurtigt kig på dem:

![Detaljeside for domæne med stage, websted, aktiv, primær og SSL-til/fra-knapper](/img/admin/domain-edit.png)

**Stage:** Dette er det trin, som domænet befinder sig på. Når du først tilføjer domænet, vil det sandsynligvis være på **Checking DNS**-trinnet. Processen vil kontrollere DNS-posterne og bekræfte, at de er korrekte. Derefter vil domænet blive sat på **Checking SSL**-trinnet. Ultimate Multisite vil kontrollere, om domænet har SSL eller ej, og vil kategorisere dit domæne som **Ready** eller **Ready (without SSL)**.

**Site:** Det subdomæne, der er knyttet til dette domæne. Det mappede domæne vil vise indholdet fra dette specifikke websted.

**Active:** Du kan slå denne indstilling til eller fra for at aktivere eller deaktivere domænet.

**Is Primary Domain?:** Dine kunder kan have mere end ét mappet domæne for hvert websted. Brug denne indstilling til at vælge, om dette er det primære domæne for det specifikke websted.

**Is Secure?:** Selvom Ultimate Multisite kontrollerer, om domænet har et SSL-certifikat eller ej, før det aktiveres, kan du manuelt vælge at indlæse domænet med eller uden et SSL-certifikat. Bemærk, at hvis webstedet ikke har et SSL-certifikat, og du forsøger at gennemtvinge indlæsning med SSL, kan det give dig fejl.

### Mapping af brugerdefineret domænenavn som Subsite-bruger {#mapping-custom-domain-name-as-subsite-user}

Subsite-administratorer kan også mappe brugerdefinerede domænenavne fra deres subsite admin dashboard.

Først skal du sikre dig, at du aktiverer denne indstilling under **Domain mapping**-indstillingerne. Se skærmbilledet nedenfor.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Du kan også indstille eller konfigurere denne indstilling på **Plan**-niveauet eller produktindstillingerne under **Ultimate Multisite > Products**.

![Sektionen Brugerdefinerede domæner på siden til redigering af produkt](/img/config/product-custom-domains.png)

Når en af disse indstillinger er aktiveret, og en subsite-bruger har tilladelse til at mappe brugerdefinerede domænenavne, bør subsite-brugeren se en metabox på **Account**-siden kaldet **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Brugeren kan klikke på knappen **Add Domain**, og det vil åbne et modalvindue med nogle instruktioner.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Brugeren kan derefter klikke på **Next Step** og fortsætte med at tilføje det brugerdefinerede domænenavn. De kan også vælge, om dette skal være det primære domæne eller ej.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Klik på **Add Domain** vil starte processen med at verificere og hente DNS-oplysningerne for det brugerdefinerede domæne.

### Om domænesynkronisering {#about-domain-syncing}

Domænesynkronisering er en proces, hvor Ultimate Multisite tilføjer det brugerdefinerede domænenavn til din hostingkonto som et add-on-domæne **for at domain mapping kan fungere**.

Domænesynkronisering sker automatisk, hvis din hostingudbyder har integration med Ultimate Multisite-funktionen til domain mapping. I øjeblikket er disse hostingudbydere _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ og _Cpanel._

Når en hostingudbyder-integration er aktiv, kan Ultimate Multisite også sætte udbydersidens DNS- eller subdomæneoprettelsesopgave i kø for nyoprettede websteder. Hvis ingen integration lytter efter den opgave, springes baggrundsjobbet over for at undgå no-op-køposter. DNS- og SSL-kontroller for mappede domæner fortsætter med at køre gennem den normale domain-stage-proces.

Du skal aktivere denne integration i Ultimate Multisite-indstillingerne under fanen **Integration**.

![Fanen Integrations i Ultimate Multisite-indstillinger, der viser hostingudbydere](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Bemærk, at hvis din hostingudbyder ikke er en af de udbydere, der er nævnt ovenfor, **skal du manuelt synkronisere eller tilføje domænenavnet** til din hostingkonto._
