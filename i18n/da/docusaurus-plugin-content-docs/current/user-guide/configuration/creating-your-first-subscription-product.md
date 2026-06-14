---
title: Opret din første abonnementsprodukt
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Oprettelse af dit Første Abonnementsprodukt (v2)

_**VIGTIG BEMÆRK: Denne artikel er kun til brugere af Ultimate Multisite version 2.x. Hvis du bruger version 1.x,**_ **_se denne artikel**_**.

For at komme i gang med at køre dit netværk og begynde at sælge dine tjenester til potentielle brugere, skal du have forskellige abonnementsmuligheder. Hvordan opretter du disse produkter? Hvilke typer produkter kan du tilbyde? I denne artikel dækker vi alt, du skal vide om produkter.

## Produkt Type

Med Ultimate Multisite kan du tilbyde dine kunder to kategorier af produkter: **plans** og **add-ons (Order Bump)**. Add-ons kan opdeles i to typer: **packages** og **services**. Vi ser på forskellene og særlige forhold mellem dem næste gang.

  * **Plans**: Det grundlæggende produkt for Ultimate Multisite. Din kunde kan kun have et medlemskab, hvis det er knyttet til en plan. En plan giver dine kunder ét eller flere sider (det afhænger af konfigurationerne i din plan) med de begrænsninger, du sætter på din produktdesignside.

  * **Packages**: Add-ons, der direkte påvirker Ultimate Multisite plans funktionalitet. De ændrer begrænsningerne eller tilføjer nye ressourcer, plugins eller themes til den oprindelige plan, kunden har købt. For eksempel kan en basisplan tillade 1.000 besøg om måneden, og du kan tilbyde et package, der udvider dette tal til 10.000.

  * **Services**: Add-ons, der ikke ændrer Ultimate Multisites funktionalitet. Det er opgaver, du vil udføre for din kunde i addition til den plan, de har købt. For eksempel kan din kunde købe en plan, der tillader én side, og også betale for en ekstra service, som vil designe denne side.

## Administrering af Produkter

For mange kan **Products** fan i Ultimate Multisite **(Ultimate Multisite > Products)** sammenlignes med planer i et traditionelt hostingmiljø.

I Ultimate Multisite definerer Products-fanen konstruktionen og begrænsningerne, der gælder for et specifikt produkt eller service. Disse konstruktioner strækker sig over produkt- eller serviceskrivelse, pris, skatter og tilladelser.

Dette afsnit vil hjælpe dig med at forstå dette essentielle fundament i Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Tilføjelse af produkter

Uanset om det er en plan, et pakke eller en service, er indgangen til at definere et nyt element via **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Brugergrænsefladen indeholder to hovedsektioner. Til venstre er der flere faner, der hjælper med definitionen af produktet, og til højre er der et par sektioner til at definere produktets basispris, dets aktive status og produktbillede.

![Product edit page overview](/img/config/product-edit-full.png)

### Beskrivelse

Den grundlæggende produktinformation kan defineres ved at angive et produktnavn og en beskrivelse. Disse identifikatorer vises, hvor produktinformation er nødvendig, såsom plan- og prisvalg, fakturaer, opgraderinger osv.

![Product description section](/img/config/product-description.png)

### Pristype

På højre side af grænsefladen kan basisprisen defineres.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite understøtter tre forskellige prismodeller. **Paid** (betalt) muligheden beder netværksadministratoren om information vedrørende produktets pris og faktureringsfrekvens.

### Pris

Priskomponenten definerer den basisproduktpris og faktureringsintervallet.

![Prissætning og gem"-sektion](/img/config/product-pricing-save.png)

dette betyder, at en pris på 29,99 $ med indstillingen om 1 måned vil faktureres 29,99 $ hver måned. På samme måde vil en pris på 89,97 $ med indstillingen om 3 måneder blive faktureret dette beløb hvert kvartal.

### Faktureringscyklusser

Faktureringscyklussen specificerer hyppigheden af den nævnte betalingsperiode og forstås generelt i lyset af kontrakter eller faste perioder.

![Prissætning og gem"-sektion](/img/config/product-pricing-save.png)

For eksempel vil en produktpris på 29,99 $ med en interval på 1 måned og 12 faktureringscyklusser blive faktureret 29,99 $ per måned for produktet over de følgende 12 måneder. Med andre ord et sådant indstilling vil etablere en fast prisperiode på 29,99 $ per måned i 12 måneder og derefter stoppe faktureringen.

### Prøveperiode

Ved at aktivere afbryderen for tilbudsprøve kan netværksadministratoren definere en prøveperiode for produktet.

![Prissætning og gem"-sektion](/img/config/product-pricing-save.png)

I prøveperioden har kunder frihed til at bruge produktet og vil ikke blive faktureret, indtil prøveperioden er afsluttet.

### Opsætningsgebyr

Du kan også pålægge et opsætningsgebyr til din plan.

![Prissætning og gem"-sektion](/img/config/product-pricing-save.png)

Dette betyder, at din kunde vil betale et ekstra beløb ved den første betaling (udover prisplanen), som svarer til gebyret, du har defineret i denne sektion.

### Aktiv

Aktiv afbryderen definerer effektivt, om produktet er tilgængeligt for kunder til nye registreringer.

![Aktiv afbryder](/img/config/product-active.png)

Hvis der allerede er kunder på denne plan, vil at slå togglen til deaktiveret effektivt "grandfader" planen og fjerne den fra fremtidige registreringer. **Eksisterende kunder på planen vil fortsat blive faktureret**, indtil de skifter til en ny plan eller fjernes fra planen.

### Produktbillede

Knappen **Upload Image** giver netværksadministratoren mulighed for at bruge mediebiblioteket til at vælge eller uploade et produktbillede.

![Product image section](/img/config/product-image.png)

### Slet

Knappen **Delete Product** sletter produktet fra systemet. Den vises først, når produktet er offentliggjort.

![Delete product section](/img/config/product-delete.png)

I modsætning til andre sletninger bliver produktet ikke placeret i en skraldespandstilstand. Derfor er handlingen irreversibel, når den er slettet.

### Produktmuligheder

Når de grundlæggende produktinformationer er defineret, hjælper produktmulighederne netværksadministratoren med yderligere at definere de specifikke attributter for produktet.

#### Generelt

Fanen **General** definerer de generelle egenskaber ved produktet, som ikke gælder for nogen af de andre produkt-specifikke faner.

![General tab](/img/config/product-general-tab.png)

Den selvforklarende **product slug** definerer den slug, hvormed produktet identificeres i URL'er og andre områder af Ultimate Multisite.

Ultimate Multisite understøtter flere produktstyper, nemlig Plan, Package og Service. Fanerne **Product Options** justeres dynamisk afhængigt af den specificerede produktstype.

**Customer Role** angiver rollen, der tildeles kunden, når siden oprettes. Typisk for de fleste netværksadministratorer vil dette være Ultimate Multisites standardrolle eller Administrator. Standardrollen i Ultimate Multisite kan indstilles i **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Opgraderinger og nedgraderinger

Denne fane specificerer de opgraderings- og nedgraderingsveje, som en kunde har til rådighed inden for deres specifikke niveau.

For at forstå dette koncept kan du forestille dig et eksempel, hvor en niche Ultimate Multisite installation tilbyder læringsledelsel til sine kunder. For at opnå disse tre planer (Basic, Plus og Premium) defineres de, og specifikke plugins aktiveres for hvert plan (se senere i denne sektion for instruktioner om, hvordan man aktiverer plugins).

Hvis Ultimate Multisite installationen også betjener virksomheds- eller e-handelswebsteder, kan disse planer kræve forskellige plugins til at blive installeret og aktiveret.

I sådanne tilfælde vil det være uønsket og problematisk at tillade eLearning kunder at skifte til e-handelsplaner, da disse planer, prissætning og begrænsninger muligvis ikke passer.

For at begrænse kundens vej og forhindre problemer kan netværksadministrator definere en plangruppe og inden for denne gruppe specificere de planer, kunden kan skifte til.

![Up and Downgrades tab](/img/config/product-upgrades.png)

For at definere en plangruppe skal du angive de kompatible planer i listen over **plan grupper**. **Produktordren** bestemmer, hvordan planer er ordnet og vises fra laveste til højeste.

Ultimate Multisite inkluderer også en **order bump** funktion, hvor passende tillægsprodukter og -tjenester kan tilføjes til planer. Disse tilbydes kunden som yderligere varer, der kan tilføjes til planer ved kassen eller under en opgradering.

#### Prisvariationer

Prisvariationer giver netværksadministratoren mulighed for at specificere alternative prisniveauer afhængigt af varigheden. Denne indstilling gør det muligt at tilbyde månedlige, kvartalsvise, årlige eller enhver anden faktureringsperiode for det samme produkt. For eksempel kan du opsætte et produkt til $29,99/måned med en nedsat årlig mulighed til $249,99/år.

![Price Variations tab](/img/config/product-price-variations-tab.png)

For at oprette prisvariationer skal du sætte afbryderen **Enable Price Variations** til aktiv og klikke på knappen **Add new Price Variation**.

![Product price variations](/img/config/product-price-variations.png)

For at indtaste en variation skal du angive varighed, periode og pris for variationen. Yderligere variationer kan indtastes ved at trykke på knappen igen.

For eksempel, hvis din basisproduktpris er $29,99 pr. måned, kan du tilføje:

  * **3 Måneder** til $79,99 (en lille rabat sammenlignet med månedlig)
  * **1 År** til $249,99 (en betydelig rabat for årlig forpligtelse)

:::tip Visning af en Faktureringsperiode Toggle på Frontend

Prisvariationer alene tilføjer ikke en toggle eller et skift til frontend-kassen. For at lade kunder skifte mellem faktureringsperioder (f.eks. Månedlig / Årlig), skal du tilføje et felt **Period Selection** til din kasseformular. Se [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) for trin-for-trin instruktioner.
:::

#### Skatter

Fanen **Taxes** stemmer overens med skatteindstillingerne specificeret i **Ultimate Multisite > Settings > Taxes** og mere specifikt de definerede satser. For at aktivere skatter og definere de gældende skattesatser skal du se dokumentationen på [Ultimate Multisite: Settings](ultimate-multisite-settings).

![Taxes tab](/img/config/product-taxes.png)

I et tidligere eksempel definerede vi en lokal skattesats på 7,25 % gældende for kunder i Californien (USA).

Når skattesatsen er defineret i **Ultimate Multisite > Settings > Manage Tax Rates**, kan den vælges på produktniveau.

![Taxes tab](/img/config/product-taxes.png)

For at angive, at et produkt er skattepligtigt, skal du sætte **Is Taxable**-toggles til aktiv og vælge den relevante sats fra rullemenuen Tax Category.

#### Site Templates

I bund og grund er site templates komplette WordPress-websteder, der kopieres til en kunders site ved start af deres abonnement.

![Site Templates tab](/img/config/product-site-templates.png)

Netværksadministratoren opretter og konfigurerer template-sitet som et almindeligt WordPress-site med aktiverede og konfigurerede themes, plugins og indhold. Template-sitet kopieres præcis til kunden.

Denne fane giver netværksadministratoren mulighed for at specificere adfærden af site templates ved en ny abonnement. For at bruge site templates til denne plan skal du sætte **Allow Site Templates**-toggles til aktiv tilstand.

Når **Allow Site Templates** er deaktiveret, kan kunder på planen ikke vælge templates, selvom et checkout-formular, et delbart link eller en URL-parameter ellers ville gøre templates tilgængelige. Ultimate Multisite håndhæver nu denne grænse gennem en fallback-kæde på tværs af de tilgængelige indgangspunkter: planindstillinger tjekkes først, derefter template-indstillinger for checkout-formularer, og til sidst prævalente eller URL-leverede templates. Dette sikrer konsistens i planbegrænsninger og forhindrer templates i at dukke op for produkter, der ikke burde tilbyde dem.

**site template selection mode** definerer adfærden af site templates under abonnementsprocessen.

Standardind indstillingen følger trinene i kassen. Hvis netværksadministratoren har defineret et valg af skabelon trin i betalingsprocessen, og trinnet er defineret med skabeloner, vil denne indstilling respektere de direktiver, der er fastsat i betalingstrinnet.

Ved at specificere **Tildel site template** tvinges valget af den specificerede skabelon igennem. Følgelig fjernes alle trin til skabelonvalg i betalingsprocessen.

Til sidst overstyrer **Vælg tilgængelige site templates** de skabeloner, der er specificeret i betalingstrinnet, med de skabeloner, der vælges i denne indstilling. En forudvalgt skabelon kan også defineres for at hjælpe kunden med valget.

Til sidst vil ' _default_ ' indstillingen være tilstrækkelig, hvis netværksadministratoren ønsker, at skabelonvalg skal ske i betalingstrinene. Alternativt kan det være ønskeligt at fjerne og låse skabelonvalget samt delegere valget til planindstillingerne ved at bruge mulighederne ' _assign new template_ ' eller ' _choose available site templates_ '.

#### Sites

**Sites** fanen er en del af Ultimate Multisites begrænsningsfunktionalitet.

![Sites tab](/img/config/product-sites.png)

Denne indstilling specificerer det maksimale antal sites, en kunde kan oprette under deres medlemskab.

For at aktivere begrænsningen skal du sætte **limit sites** toggle til aktiv tilstand og angive det maksimale antal sites i feltet **site allowance**.

#### Visits

**Visits** fanen er en yderligere del af Ultimate Multisites begrænsningssystem. Denne indstilling tillader regnskab og efterfølgende throttling af unikke besøgende på en kundes site.

![Visits tab](/img/config/product-visits.png)

Fra et marketingperspektiv kan netværksadministratorer bruge denne indstilling som et middel til at opfordre kunder til at opgradere deres plan, når grænserne er nået. Denne indstilling kan også hjælpe netværksadministratoren med at begrænse og forhindre overdreven trafik til sider for at bevare systemressourcerne.

For at bruge denne funktion skal du sætte **limit unique visits**-toggles til aktiv tilstand og specificere det maksimale antal unikke besøgende i feltet **unique visits quota**.

Når denne grænse er nået, vil Ultimate Multisite stoppe med at betjene kundens side i stedet for at vise en besked om, at grænserne er overskredet.

#### Brugere

Ultimate Multisites 'Users'-begrænsninger giver netværksadministratoren mulighed for at sætte grænser for antallet af brugere, der kan oprettes og tildeles roller.

![Users tab](/img/config/product-users.png)

For at aktivere begrænsningsfunktionen skal du sætte **limit user**-toggles til aktiv tilstand ved at trække den mod højre.

Derefter for hver rolle, der skal begrænses, skal du sætte togglen ved siden af den til aktiv tilstand og definere den maksimale øvre grænse i det relevante felt.

#### Indholdstyper (Post Types)

**Post Types**-fanen giver netværksadministratoren mulighed for at pålægge detaljerede begrænsninger på det omfattende udvalg af indholdstyper i WordPress.

![Post Types tab](/img/config/product-post-types.png)

På grund af opbygningen af WordPress er opslag og indholdstyper en vigtig del af dens kernefunktionalitet, og derfor er Ultimate Multisites begrænsningers system designet til at hjælpe netværksadministratoren med at etablere og vedligeholde grænser.

For at aktivere dette begrænsningssystem skal du sætte **limit post types**-toggles til aktiv tilstand ved at trække den mod højre.

Næste gang, for hver posttype der skal begrænses, slår du den til ved at glide den til højre og specificere den maksimale øvre grænse i det relevante felt.

#### Diskplads

**Disk Space**-fanen giver netværksadministratorer mulighed for at begrænse pladsen, som kunderne optager.

![Disk Space tab](/img/config/product-disk-space.png)

Typisk i et WordPress multisite deles kernefilerne på tværs af alle sider, og de individuelle mapper oprettet til medie-filer og uploads er det, hvor disse indstillinger og begrænsninger gælder.

For at aktivere begrænsningen af diskpladsen skal du sætte **limit disk size per site**-toggles til aktiv tilstand ved at glide den til højre.

Derefter specificerer du den maksimale øvre grænse i megabytes i feltet **disk space allowance**.

#### Custom Domain (Tilpasset domæne)

Ved at slå denne mulighed til kan du tillade custom domains på dette specifikke abonnement.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes (Temamuligheder)

**Themes**-fanen i produktindstillingerne giver netværksadministratorer mulighed for at gøre temaer tilgængelige for kunderne til valg og eventuelt tvinge temaets tilstand.

![Themes tab](/img/config/product-themes.png)

_**Bemærk: For at temaer kan gøres tilgængelige for kunderne skal de være netværksaktiveret af netværksadministrator.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Muligheden **visibility** definerer, om dette tema er synligt for kunden, når de ser på deres tab **Appearance > Themes** i deres site. Ved at sætte denne mulighed til **Hidden** fjernes temaet fra visningen og begrænser dermed muligheden for at vælge og aktivere det.

![Themes tab](/img/config/product-themes.png)

Valget **behavior** lader netværksadministratorer definere temaets tilstand ved oprettelsen af kundens site.

I den tilgængelige tilstand er temaet tilgængeligt for kunden selv at aktivere. Omvendt fjerner den ikke-tilgængelige tilstand muligheden for, at kunden kan aktivere temaet. Til sidst tvinger muligheden **Force Activate** valget og aktiveringen af temaet, hvilket sætter det som standard ved oprettelse af siden.

#### Plugins

Ligesom i Themes-fanen tillader Ultimate Multisite netværksadministratoren at definere synligheden af plugins for kunder samt deres tilstand ved oprettelse af en ny side.

![Plugins tab](/img/config/product-plugins.png)

Rullemenuen **visibility** (synlighed) lader plugin enten være synlig eller skjult for kunden, når de ser på deres side via menuindstillingen Plugins.

Netværksadministratoren kan yderligere manipulere adfærden af plugins ved at bruge mulighederne i rullemenuen **behavior** (adfærd).

![Plugins tab](/img/config/product-plugins.png)

Valget **Default** respekterer plugin-tilstanden defineret i side-skabelonen, som kunden har valgt. Så plugins, der er aktiveret i skabelonen, vil forblive aktive, når skabelonen kopieres til kundens side.

**Force Activate** sætter plugin'et i en aktiv tilstand ved oprettelse af siden, og omvendt deaktiverer **Force Inactivate** plugin'et ved oprettelse af siden. I begge disse tilfælde kan plugin'ets tilstand manuelt ændres af kunden gennem deres WordPress Plugins menu.

Indstillingen **Force Activate & Lock** fungerer på samme måde, men forhindrer kunden i at ændre pluginets tilstand. En indstilling på Force Activate og Lock vil tvinge pluginet ind i sin aktive tilstand og forhindre kunden i at deaktivere det. På samme måde vil indstillingen **Force Inactivate & Lock** tvinge pluginet ind i sin inaktive tilstand og forhindre brugeren i at aktivere pluginet.

Netværksadministrator kan overveje at bruge indstillingerne Force Activate & Lock og Force Inactivate & Lock i kombination med sidtempler som plugins, da pluginets tilstand inden for templerne kan påvirkes af disse indstillinger, hvis de vælges.

#### Nulstilling af begrænsninger

Fanen **Reset Limitations** nulstiller alle brugerdefinerede grænser defineret for produktet. For at nulstille begrænsning skal du klikke på knappen **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

For at bekræfte handlingen, skal du slæbe **confirm reset**-tasterne til aktiv position på højre side og klikke på knappen **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Rediger, kopier eller slet produkt

Eksisterende produkter kan redigeres, kopieres eller slettes ved at navigere til **Ultimate Multisite > Products** og holde musen over det eksisterende produktnavn.

![Product hover actions](/img/config/product-hover-actions.png)
