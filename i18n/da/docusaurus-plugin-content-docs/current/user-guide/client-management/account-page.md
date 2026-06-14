---
title: Kunde konto side
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Din Klientens Konto side (v2)

_**VIGTIG BEMÆRK: Denne artikel henviser til Ultimate Multisite version 2.x.**_

Når kunder abonnerer på en plan i dit netværk, får de adgang til en hjemmeside og dens dashboard med vigtig information om deres betalinger, medlemskaber, domæner, planbegrænsninger osv...

I denne tutorial vil vi guide dig gennem kundens konto side, og du vil se, hvad dine kunder kan se og gøre derinde.

## Konto Siden

Konto-siden er tilgængelig ved at klikke på **Account** (Konto) inde i din kunders dashboard.

![Konto menu i kundens dashboard](/img/account-page/account-menu.png)

På suveræne tenant netværk bevarer Ultimate Multisite v2.13.0 denne kundeoplevelse på hovedsiden. Hvis en kunde åbner konto, checkout, faktura, regning, sideadministration, skift af template eller domæne-mapping fra en suveræn tenant, peger handlingerne tilbage til hovedsidens kundepanel, så netværkets fakturerings- og medlemskabsoplysninger forbliver autoritative.

Når kunden kommer fra en suveræn tenant, kan hovedsidens kundepanel indeholde et link tilbage til tenant-siden. Linket vises kun, når Ultimate Multisite kan validere målet for returneringen som en af kundens sider, hvilket forhindrer vilkårlige omdirigeringer, samtidig med at tenant-arbejdsgangen bevares.

![Oversigt over kundens konto side](/img/account-page/overview.png)

Efter at kunden har klikket på den, vil de se et overblik over deres medlemskab, faktureringsadresse, fakturaer, domæner, sidbegrænsninger og kan også ændre **Site Template** (hvis det er tilladt i dit netværk).

De kan også ændre medlemskabet til en anden plan eller købe et andet pakke- eller serviceudbud, du tilbyder. Lad os se på hvert afsnit separat.

### Overblik over dit medlemskab:

Det første felt lige under jeres kundes websitets navn viser et overblik over jeres nuværende plan og de købte tjenester/pakker, der er forbundet med det. Feltet viser også medlemsnummeret, det oprindelige beløb, der blev betalt for det, hvor meget planen og eventuelle tjenester/pakker koster, samt hvor mange gange medlemskabet er faktureret for. De kan også se, om medlemskabet er **Aktiv**, **Udløbet** eller **Afbrudt**.

![Medlemskabsoverblik der viser plan, beløb og faktureringsdetaljer](/img/account-page/membership-card.png)

Lige under dette felt kan jeres kunder se felterne **Om denne side** og **Sidegrænser**. Disse felter viser dem alle begrænsningerne, der følger med deres plan: diskplads, indlæg, sider, besøg osv... Disse grænser kan konfigureres på hver plan-side i **Ultimate Multisite > Products**.

![Om denne side og Sidegrænser blokke der viser planbegrænsninger](/img/account-page/site-limits.png)

Til højre for **Dit medlemskab** kan kunderne klikke på **Ændring**. Dette vil vise dem alle tilgængelige planer og pakker/tjenester. Hvis de vælger en anden plan, gælder begrænsningerne for den valgte plan i stedet for de nuværende begrænsninger for medlemskabet – det er ligegyldigt, om de nedgraderer eller opgraderer.

Nu, hvis jeres kunder vælger at købe pakker eller tjenester til dette nuværende medlemskab – som mere diskplads eller besøg – vil selve medlemskabet ikke ændres, men kun de nye pakker vil blive tilføjet til det.

Bemærk, at kuponkoder ikke kan tilføjes på denne side til ændring af medlemskab. Hvis kunden brugte en kuponkode ved det første medlemskabskøb, vil koden også gælde for dette nye medlemskab.

### Opdatering af faktureringsadresse:

På kontoprisen kan dine kunder også opdatere deres faktureringsadresse. De skal blot klikke på **Opdater** ved siden af _Faktureringsadresse_.

![Faktureringsadresse sektion med Opdater-knap](/img/account-page/billing-address.png)

Et nyt vindue vil åbne sig for din kunde. Alt, de skal gøre, er at udfylde den nye adresse og klikke på _Gem ændringer_.

![Form til opdatering af faktureringsadresse](/img/account-page/billing-address-form.png)

### Ændring af sidtemplet:

For at lade dine kunder ændre deres sidtempler skal du gå til **Ultimate Multisite > Indstillinger > Sites** og slå muligheden **Tillad skift af templer (Allow Template Switching)** til.

Også i **Ultimate Multisite > Produkter**, vælg dine planer og gå til fanen **Sidtempler**. Sørg for, at indstillingen **Tillad sidtempler (Allow Site Templates)** er slået til, og under **Valg af sidtemplet (Site Template Selection Mode)** skal du vælge **Vælg tilgængelige sidtempler (Choose Available Site Templates)**.

![Produkt fanen for sidtempler med valg af sidtemplet](/img/config/product-site-templates.png)

Du vil kunne se alle de tilgængelige sidtempler på din hjemmeside. Vælg, hvilke du vil gøre tilgængelige og hvilke du ikke ønsker, at dine kunder under denne plan skal have adgang til. Bemærk, at disse muligheder også påvirker betalingsformularen, så et template, der vælges som **Ikke tilgængeligt**, vil ikke dukke op på registreringssiden for denne plan.

Nu kan dine kunder klikke på **Skift sidtemplet (Change Site Template)** inde på deres kontopage.

![Knap til at skifte sidtemplet på kontopage](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 viser et redesignet panel til skift af templer. Panelet starter med et **nuværende-template kort (current-template card)**, så kunder kan se, hvilket template der er aktivt, før de vælger en erstatning.

En vedkommende forbliver en permanent gittervis oversigt over tilgængelige sidtempler, mens kunderne gennemgår deres muligheder. Dette hjælper dem med at sammenligne de templer, der er tilladt for deres plan, uden at miste overblikket over det nuværende valg.

![Liste over tilgængelige sidtempler for planen](/img/config/site-templates-list.png)

Når de har valgt den, de ønsker at skifte til, vil de blive bedt om at bekræfte ændringen.

![Bekræftelsesdialog ved skift af sidemodel](/img/account-page/template-switch-confirm.png)

Efter du har slået bekræftelsen til og klikket på **Process Switch**, vil den nye sidemodel blive brugt på din kunders hjemmeside.

Kunder kan også bruge **Reset current template** fra dette panel, hvis de skal nulstille siden tilbage til den i øjeblikket tildelte temabelag. Ligesom ved at skifte til en anden temabelag kan nulstilling af et temabelag overskrive indholdet på siden, så kunder bør kun bekræfte det, når de forstår nulstillingshandlingen.

### Tilføjelse af brugerdefinerede domæner:

Dine kunder vil også have mulighed for at tilføje en brugerdefineret domæne til denne plan på deres kontoside. For at lade dine kunder bruge brugerdefinerede domæner, skal du gå til **Ultimate Multisite > Indstillinger >** **Domænemapping**.

Slå muligheden **Enable Domain Mapping** til. Dette vil give dine kunder mulighed for at bruge brugerdefinerede domæner på netværksniveau.

Glem ikke også at tjekke, om domænemapping er aktiveret på produktbasis – fordi du kan begrænse et produkt, så dine kunder ikke må bruge brugerdefinerede domæner.

Gå til **Ultimate Multisite > Produkter**. Vælg den plan, du ønsker, og gå til fanen **Custom Domains**. Slå muligheden **Allow Custom Domains** til.

![Fanen for brugerdefinerede domæner med slå Custom Domains til-knap](/img/config/product-custom-domains.png)

Dette vil give alle kunder, der er abonnenter på denne specifikke plan, mulighed for at bruge egne domæner. Nu kan dine kunder tilføje en egen domæne på Kontop-siden ved at klikke på **Tilføj domæne**.

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

Det første vindue, der åbner, vil vise dine kunder en besked, der instruerer dem i, hvordan de opdaterer deres DNS-oplysninger for at få denne custom domain til at virke på dit netværk.

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Denne besked kan redigeres (af dig) i **Ultimate Multisite > Indstillinger > Domænemapping > Tilføj nye domæneinstruktioner**.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Her er et fuldt overblik over siden for domænemapping-indstillinger:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

Efter at have klikket på **Næste trin** kan dine kunder tilføje deres custom domænenavn og vælge, om denne custom domain skal være den primære. Bemærk, at dine kunder kan bruge flere custom domæner til deres hjemmesider, så de kan vælge, hvilken der skal være den primære.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

Efter at have klikket på **Tilføj domæne** vil domænen blive tilføjet til din kunders konto. Alt, de nu skal gøre, er at ændre DNS-oplysningerne for denne custom domain hos deres domæneregistreringsudbyder.

### Ændring af adgangskode:

Inde i kontodashbordet kan dine kunder også ændre deres adgangskode ved at klikke på **Ænd adgangskode**.

![Change Password button on account page](/img/account-page/change-password-button.png)

Dette vil vise et nyt vindue, hvor dine kunder skal indtaste deres nuværende adgangskode og derefter den nye adgangskode, de ønsker at bruge.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Farezone:

Vi har også to muligheder vist i **Farezonen**: **Slet Site** og **Slet Konto**. Begge disse handlinger er placeret i Farezonen, fordi disse to handlinger ikke kan rulles tilbage. Hvis dine kunder sletter deres hjemmeside eller deres konto, kan de ikke genvinde dem.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Hvis dine kunder klikker på et af disse to muligheder, vil de blive vist et vindue, hvor de skal slå muligheden til at fjerne hjemmesiden eller konto fra, og de vil blive advaret om, at denne handling ikke kan rulles tilbage.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Hvis de sletter deres hjemmeside, vil deres konto og medlemskab stadig være uberørt. De vil blot miste alt indhold på deres hjemmeside. Hvis de sletter deres konto, vil alle hjemmesider, medlemskaber og oplysninger vedrørende denne konto blive tabt.
