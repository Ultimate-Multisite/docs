---
title: Hvordan konfigurerer man domænemapping
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Sådan konfigurerer du domænemapping (v2)

_**VIGTIG BEMÆRK: Denne artikel henviser til Ultimate Multisite version 2.x.**_

En af de mest kraftfulde funktioner ved et premium netværk er muligheden for at tilbyde vores kunder en chance for at tilføje en top-niveau domæne til deres sider. Efter altså, hvad ser mere professionelt ud: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) eller [_**joesbikeshop.com**_](http://joesbikeshop.com)? Det er derfor, Ultimate Multisite tilbyder denne funktion indbygget, uden behov for tredjeparts plugins.

## Hvad er domænemapping?

Som navnet antyder, er domænemapping evnen fra Ultimate Multisite til at modtage en anmodning om et custom domæne og mappe den anmodning til den tilsvarende side i netværket med det pågældende domæne tilknyttet.

### Sådan opsætter du domænemapping på dit Ultimate Multisite Netværk

Domænemapping kræver nogle indstillinger fra din side for at virke. Held og lykke, Ultimate Multisite automatiserer det tunge arbejde for dig, så du nemt kan opfylde kravene.

Under installationen af Ultimate Multisite vil wizard'en automatisk kopiere og installere **sunrise.php** i den udpegede mappe. **Wizard'en vil ikke tillade dig at fortsætte, før dette trin er fuldført**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard med sunrise.php trin -->

Dette betyder, at når Ultimate Multisite installationswizard'en har afsluttet opsætningen af dit netværk, kan du begynde at mappe det custom domæne med det samme.

Bemærk, at domænemapping i Ultimate Multisite ikke er obligatorisk. Du har mulighed for at bruge WordPress Multisites indbyggede domænemappefunktion eller enhver anden domænemappelsesløsning.

Hvis du skal deaktivere domænemappingen for Ultimate Multisite for at give plads til andre løsninger, kan du slå denne funktion fra under **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Lige under dette valg kan du også se indstillingen **Force Admin Redirect** (Tving administrativ omdirigering). Denne mulighed lader dig styre, om dine kunder kun skal kunne tilgå deres admin-dashboard på deres brugerdefinerede domæne og subdomain eller kun på ét af dem.

Hvis du vælger **Force redirect to mapped domain** (Tving omdirigering til det kortlagte domæne), vil dine kunder kun kunne tilgå deres admin-dashboard på deres brugerdefinerede domæner.

Muligheden **Force redirect to network domain** (Tving omdirigering til netværksdomænet) gør præcis det modsatte – dine kunder må kun få adgang til deres dashboards på deres subdomain, selv hvis de forsøger at logge ind på deres brugerdefinerede domæner.

Og muligheden **Allow access to the admin by both mapped domain domain and network domain** (Tillad adgang til admin fra både det kortlagte domæne og netværksdomænet) giver dem mulighed for at få adgang til deres admin-dashboards både på subdomænen og det brugerdefinerede domæne.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Der er to måder at kortlægge et brugerdefineret domæne på. Den første måde er ved at kortlægge domænenavnet fra dit netværksadministrator-dashboard som superadministrator, og den anden er via subsite administrator-dashboard under kontopogen.

Men før du begynder at kortlægge det brugerdefinerede domæne til en af dine subsites i dit netværk, skal du sikre dig, at **DNS-indstillingerne** for domænenavnet er korrekt konfigureret.

### Sikring af korrekt konfiguration af domænets DNS-indstillinger

For at en mappingen kan virke, skal du sikre dig, at domænet, du planlægger at mappe, peger på din Netværks IP-adresse. Bemærk, at du har brug for Netværks IP-adressen – altså IP-adressen til det domæne, hvor Ultimate Multisite er installeret – ikke IP-adressen til det brugerdefinerede domæne, du vil mappe. For at søge efter IP-adressen for et specifikt domæne foreslår vi at gå til [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), for eksempel.

For korrekt at mappe domænet skal du tilføje en **A RECORD** i din **DNS** konfiguration, der peger på den pågældende **IP-adresse**. DNS-administration varierer meget mellem forskellige domæneregistreringsfirmaer, men der findes masser af tutorials online, hvis du søger efter " _Creating A Record on XXXX_ ", hvor XXXX er dit domæneregistreringsfirma (f.eks. " _Creating A Record on_ _GoDaddy_ ").

Hvis du har problemer med at få det til at virke, **kontakt support hos din domæneregistreringsudbyder**, og de vil kunne hjælpe dig med denne del.

Hvis du planlægger at lade dine kunder mappe deres egne domæner, skal de selv udføre arbejdet på dette punkt. Henvis dem til deres registreringstjenestens supportsystem, hvis de ikke kan oprette A Record'et.

### Mappe et brugerdefineret domænenavn som Super Admin

Når du er logget ind som super admin på dit netværk, kan du nemt tilføje og administrere brugerdefinerede domænenavne ved at gå under **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Her kan du klikke på knappen **Tilføj domæne** øverst, og dette vil å åbne en modal vindue, hvor du kan indtaste og udfylde **det brugerdefinerede domænenavn**, **undersiden**, du ønsker at anvende det brugerdefinerede domænenavn på, og beslutte, om du vil sætte det som **primært domænenavn** eller ej (bemærk, at du kan mappe **flere domænenavne til én underside**).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Når du har indtastet alle oplysninger, kan du derefter klikke på knappen **Tilføj eksisterende domæne** nederst.

Dette starter processen med at verificere og hente DNS-oplysningerne for det brugerdefinerede domæne. Du vil også se en log nederst på siden, hvor du kan følge processen, den gennemgår. Denne proces kan tage et par minutter at fuldføre.

Ultimate Multisite v2.13.0 opretter automatisk også den interne domænered, når en ny side oprettes på en host, der skal behandles som et domæne pr. side. Hvis hosten er netværkets primære domæne, eller et af de fælles checkout-form basale domæner konfigureret i feltet **Site URL**, springes den automatiske mappede-domænered over, så det fælles basale domæne forbliver tilgængeligt for alle sider, der bruger det.

**Stage** eller status vil ændre sig fra **Tjekker DNS** til **Klar** (Ready), hvis alt er korrekt opsat.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Hvis du klikker på domænenavnet, kan du se nogle muligheder indeni. Lad os lige kigge hurtigt på dem:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** Dette er det stadie, domænet befinder sig i. Når du tilføjer et domæne for første gang, vil det sandsynligvis være på **Tjek DNS**. Processen tjekker DNS-indlæg og bekræfter, at de er korrekte. Derefter placeres domænet på **Tjek SSL**. Ultimate Multisite tjekker, om domænet har et SSL-certifikat eller ej, og kategoriserer dit domæne som **Klar** eller **Klar (uden SSL)**.

**Site:** Underdomænet, der er forbundet med dette domæne. Det kortlagte domæne vil vise indholdet af denne specifikke site.

**Active:** Du kan slå denne mulighed til eller fra for at aktivere eller deaktivere domænet.

**Is Primary Domain?:** Dine kunder kan have flere kortlagte domæner for hver site. Brug denne mulighed til at vælge, om dette er det primære domæne for den specifikke site.

**Is Secure?:** Selvom Ultimate Multisite tjekker, om domænet har et SSL-certifikat eller ej, før du aktiverer det, kan du manuelt vælge at indlæse domænet med eller uden et SSL-certifikat. Bemærk, at hvis websitet ikke har et SSL-certifikat og du forsøger at tvinge indlæsning med SSL, kan det give dig fejl.

### Kortlægning af et custom domænenavn som Subsite bruger

Subsite administratorer kan også kortlægge custom domænenavne fra deres subsite admin dashboard.

Først skal du sikre dig, at du aktiverer denne mulighed under indstillingerne for **Domain mapping**. Se skærmbilledet nedenfor.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Du kan også sætte eller konfigurere denne mulighed under **Plan** niveau eller produktmuligheder på **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Når en af disse muligheder er aktiveret og en subsite bruger tillades at mappe egne domænenavne, skal subsite brugeren se en metabox under **Account** siden kaldet **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Brugeren kan klikke på knappen **Add Domain**, og det vil åbne et modal vindue med nogle instruktioner.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Derefter kan brugeren klikke på **Next Step** og fortsætte med at tilføje det custom domænenavn. De kan også vælge, om dette skal være hoveddomænet eller ej.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Klik på **Add Domain** starter processen med at verificere og hente DNS-oplysninger for det custom domænenavn.

### Om Domæne Synkronisering (Domain Syncing)

Domæne synkronisering er en proces, hvor Ultimate Multisite tilføjer det custom domænenavn til din hostingkonto som et add-on domæne **for at domænemappingen kan fungere**.

Domæne synkronisering sker automatisk, hvis din hostingudbyder har integration med Ultimate Multisites domænemappefunktion. I øjeblikket er disse hostingudbydere _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ og _Cpanel._

Når en host-udbyder integration er aktiv, kan Ultimate Multisite også sætte op (enqueue) den DNS- eller subdomainoprettelsesopgave på udbyderens side for nyoprettede sider. Hvis der ikke er nogen integration til at lytte efter den opgave, springes baggrundsjobbet over for at undgå no-op queue-poster. DNS- og SSL-tjek for mappede domæner fortsætter med at køre gennem den normale domænefaseproces.

Du skal aktivere denne integration i indstillingerne for Ultimate Multisite under fanen **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Bemærk, at hvis din hostingudbyder ikke er en af de ovennævnte udbydere, **skal du manuelt synkronisere eller tilføje domænenavnet** til din hostingkonto._
