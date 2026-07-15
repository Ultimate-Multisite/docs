---
title: Sitetempler
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Hjemmeside-skabeloner (v2)

_**OBS: Denne artikel henviser til Ultimate Multisite version 2.x. Hvis du bruger version 1.x, se denne artikel.**_

Vores mål når vi opretter et premium netværk med Ultimate Multisite er at automatisere så mange processer som muligt, samtidig med at vi giver vores kunder fleksibilitet og forskellige muligheder for valg, når de opretter deres hjemmesider. En nem måde at opnå denne balance på er ved at bruge funktionen Site Templates i Ultimate Multisite.

## Hvad er en Site Template? {#what-is-a-site-template}

Som navnet antyder er en Site Template et grundlagssite, der kan bruges som basis, når du opretter nye sider i dit netværk.

Det betyder, at du kan oprette en basis-site, aktivere forskellige plugins, sætte et aktivt tema og tilpasse den på enhver måde, du ønsker. Når din kunde derefter opretter en ny konto, får de ikke en standard WordPress-side uden meningsfuldt indhold; i stedet får de en kopi af din basis-site med alle tilpasninger og indhold allerede på plads.

Det lyder fantastisk, men hvordan laver jeg en ny site template? Det er så simpelt som det kan være.

## Oprettelse og redigering af en ny Site Template {#creating-and-editing-a-new-site-template}

Site Templates er bare almindelige sider i dit netværk. For at oprette en ny skabelon kan du blot gå til **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Tilføj site-knap på siden med listen over sites](/img/config/site-templates-list.png)**

Dette åbner et modal vindue, hvor der vil blive bedt om **Site titel, Site Domæne/sti** og **Site type**. Under rullemenuen for **Site Type** skal du sikre dig, at du vælger **Site Template** *.

_![Modal til tilføjelse af site template med site type rullemenu](/img/config/site-templates-list.png)_

Du kan også tilføje en beskrivelse rettet mod kunden for at forklare, hvad skabelonen indeholder:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Nederst på formularen finder du en afbryder til **Copy Site**. Denne vil give dig mulighed for at oprette en ny site template baseret på en eksisterende site template som udgangspunkt for at spare tid i stedet for at skulle lave en site template helt fra bunden.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Tilpasning af indholdet i en Site Template {#customizing-the-contents-of-a-site-template}

For at tilpasse din site template skal du blot gå til dens dashboard panel og foretage de ændringer, du har brug for. Du kan oprette nye opslag, sider, aktivere plugins og ændre det aktive tema. Du kan endda gå til Customizer og ændre alle slags tilpasningsmuligheder.

![Site template edit interface](/img/config/site-template-edit.png)

Al disse data vil blive kopieret over, når en kunde opretter en ny site baseret på den Site Template.

### Avancerede muligheder {#advanced-options}

Hvis du er bekendt med lidt custom coding, kan du bruge vores Search and Replace API til automatisk at erstatte informationer på den nye site efter dens oprettelse. Dette er nyttigt til ting som at erstatte virksomhedsnavne på en Om-side eller ændre kontakt-e-mailen på Kontakt-siden osv.

### Brug af Site Templates {#using-site-templates}

Ok, så du har lavet en masse forskellige Site Templates med forskellige designs, temaer og indstillinger. Hvordan gør du dem nyttige i dit netværk nu?

Grundlæggende er der nu to tilgange, du kan bruge (ikke samtidigt):

  * Tilføje én Site Template til hver af dine Plans

**ELLER**

  * Tillade dine kunder selv at vælge site templates under tilmelding.

#### Mode 1: Tildel Site Template {#mode-1-assign-site-template}

I denne tilstand kan dine kunder ikke vælge en skabelon, når de opretter en konto, men i stedet definerer du, hvilken skabelon der skal bruges på hver af dine planer.

For at gøre dette skal du gå til **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Dette vil føre dig til siden **Edit Product**. Under sektionen **Product Options** finder du fanen **Site template** og vælger indstillingen **Assign Site Template** fra rullemenuen. Dette åbner listen over tilgængelige skabeloner, og det giver dig mulighed for kun at vælge én skabelon dedikeret til produktet.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Tilstand 2: Vælg tilgængelig skabelon {#mode-2-choose-available-site-template}

I denne tilstand giver du dine kunder et valg under oprettelsesprocessen. De kan vælge mellem de forskellige skabeloner, du definerer under produktindstillingerne. Du har mulighed for at begrænse de skabeloner, de kan vælge imellem, under det valgte produkt. Dette gør det muligt for dig at have forskellige sæt af skabeloner under hvert produkt, hvilket er ideelt til at fremhæve forskellige funktioner og egenskaber for et dyrere produkt.

På siden **Rediger produkt**. Under sektionen **Produktmuligheder** finder du fanen **Hjemmeside-skabelon** og vælger **Vælg tilgængelig hjemmeside-skabelon** fra rullemenuen. Dette vil åbne listen over tilgængelige skabeloner, og du kan derefter vælge den hjemmeside-skabelon, du ønsker at være tilgængelig. Du kan gøre dette ved at vælge dens adfærd: **Tilgængelig**, hvis du ønsker, at skabelonen skal inkluderes på listen. _**Ikke tilgængelig**, hvis du ikke ønsker, at skabelonen vises som et valg. Og **Forudvalgt**, hvis du ønsker, at en af de listepræsenterede skabeloner skal være standardvalget.

![Vælg tilgængelige hjemmeside-skabeloner med adfærdsoptioner](/img/config/product-site-templates.png)

### Standardtilstand: Hjemmeside-skabelonvalg på kassen {#default-mode-site-template-selection-on-the-checkout-form}

Hvis du ønsker, at alle dine hjemmeside-skabeloner skal være tilgængelige under registreringen, eller måske ikke vil bruge ekstra tid på at tildele eller specificere hjemmeside-skabeloner under hvert produkt, du opretter. Så kan du blot indstille valg af hjemmeside-skabelon under dit **Kasseskema**. For at gøre dette skal du gå til **Ultimate Multisite > Kasseskemaer** og klikke på **Rediger** under det skema, du ønsker at konfigurere.

Dette vil åbne siden **Rediger kasseskema**. Find feltet **Skabelonvalg** og klik på **Rediger** under det.

En modal vindue vil dukke op. Under feltet **Skabeloner** kan du vælge og liste alle de hjemmeside-skabeloner, du ønsker skal være tilgængelige under registreringen. De skabeloner, du specificerer herfra, vil være tilgængelige uans, hvilket produkt brugeren har valgt.

![Skabelonvalgsfelt i kasseskemaeditoren](/img/config/checkout-form-template-step.png)

På frontenden ser kunder skabelonvælgeren under kassen og kan vælge det startdesign for deres nye side.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Valgmuligheder for siteskabeloner {#site-template-options}

Der er andre siteskabelonfunktioner til rådighed, som du kan slå fra eller til under indstillingerne for Ultimate Multisite.

![Site template options in Ultimate Multisite settings](/img/config/settings-sites-templates-section.png)

#### Tillad skift af skabeloner {#allow-template-switching}

Ved at aktivere denne mulighed får dine kunder mulighed for at skifte den skabelon, de vælger under oprettelsesprocessen efter konto og site er oprettet. Dette er nyttigt fra kundens side, da det giver dem mulighed for at genvælge en skabelon, hvis de senere finder ud af, at deres oprindelige valg ikke var bedst egnet til deres specifikke behov.

#### Tillad brugere at bruge deres site som skabeloner {#allow-users-to-use-their-site-as-templates}

Da subsite-brugere bruger tid på at bygge og designe deres egne sites, ønsker de måske at klone og bruge det som en af de tilgængelige siteskabeloner ved oprettelse af et nyt subsite i dit netværk. Denne mulighed giver dem mulighed for at opnå det.

#### Kopier medier ved skabelon-duplikering {#copy-media-on-template-duplication}

Ved at markere denne mulighed kopieres medierne, der er uploadet på skabelonsitet, til det nyoprettede site. Dette kan overstyres på hver af planerne.

#### **Forhindr søgemaskiner i at indeksere siteskabeloner** {#prevent-search-engines-from-indexing-site-templates}

Siteskabeloner som beskrevet i denne artikel er boilerplate, men de udgør stadig en del af dit netværk, hvilket betyder, at de stadig er tilgængelige for søgemaskiner. Denne mulighed giver dig mulighed for at skjule siteskabelonerne, så søgemaskiner kan indeksere dem.

## Forudfyldning af siteskabeloner med auto search-and-replace {#pre-populating-site-templates-with-auto-search-and-replace}

En af Ultimate Multisite er en af de mest kraftfulde funktioner evnen til at tilføje vilkårlige tekst, farver og valgfelter til registreringsformularen. Når vi har indsamlet disse data, kan vi bruge dem til forudfyldning af indhold i visse dele af det valgte skabelon-site. Derefter erstatter Ultimate Multisite pladsholderne med den faktiske information, der er indtastet under registreringen, når den nye site bliver offentliggjort.

For eksempel, hvis du ønsker at få din slutbrugeres virksomhedsnavn under registrering og automatisk placere virksomhedsnavnet på startsiden. På din skabelon-sites startside skal du tilføje pladsholderne, ligesom i billedet nedenfor (pladsholdere skal indkapsles af dobbelte klammer - {{placeholder_name}}).

![Homepage med pladsholdertekst i klammer](/img/config/site-templates-list.png)

Derefter kan du blot tilføje et matchende registreringsfelt på din checkout-form for at indsamle de data. Samme editor for checkout-formularen, der bruges til skabelonvalg, giver dig mulighed for at placere brugerdefinerede felter ved siden af skabelonvælgeren:

![Skabelonvalg og registreringsfelter i checkout-form editor](/img/config/checkout-form-template-step.png)

Din kunde kan derefter udfylde dette felt under registreringen.

![Frontend checkout form med skabelonvælger](/img/config/frontend-template-chooser.png)

Ultimate Multisite vil derefter automatisk erstatte pladsholderne med de data, kunden har angivet.

![Pladsholdere erstattet med kundedata på siden](/img/config/site-templates-list.png)

### Løsning på problemet med "skabelon fyldt med pladsholdere" {#solving-the-template-full-of-placeholders-problem}

Alt det er fantastisk, men vi støder på et grimt problem: nu er vores siteskabeloner – som vores kunder kan besøge – fyldt med grimme pladsholdere, der ikke fortæller meget.

For at løse det tilbyder vi muligheden for at sætte fiktive værdier ind i placeholderne, og vi bruger disse værdier til at søge og erstatte deres indhold på de skabelonerede sider, mens dine kunder besøger dem.

Du kan få adgang til redigeringsfeltet for skabelonens placeholders ved at gå til **Ultimate Multisite > Settings > Sites**, og derefter klikke på linket **Edit Placeholders** i sidepanelet.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Dette vil føre dig til redigeringsfeltet for placeholderens indhold, hvor du kan tilføje placeholders og deres respektive indhold.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
