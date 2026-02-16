---
title: Nettstedsmaler
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# Nettstedmaler (v2)

_**MERK: Denne artikkelen gjelder Ultimate Multisite versjon 2.x. Hvis du bruker versjon 1.x,**_ **se denne artikkelen** _**.**_

Målet vårt når vi lager et premium-nettverk med Ultimate Multisite er å automatisere så mange prosesser som mulig, samtidig som vi gir kundene våre fleksibilitet og ulike alternativer å velge mellom når de oppretter nettstedene sine. En enkel måte å oppnå denne balansen på er å bruke funksjonen for nettstedmaler i Ultimate Multisite.

## Hva er en nettstedmal?

Som navnet tilsier, er en nettstedmal et ferdig oppsett som kan brukes som utgangspunkt når du oppretter nye nettsteder i nettverket ditt.

Dette betyr at du kan lage et grunnleggende nettsted, aktivere ulike plugins, velge et aktivt tema og tilpasse det akkurat slik du vil. Når kunden din så oppretter en ny konto, får de en kopi av grunnstedet ditt med alle tilpasninger og alt innhold allerede på plass – i stedet for et standard WordPress-nettsted uten meningsfylt innhold.

Det høres flott ut, men hvordan lager jeg en ny nettstedmal? Det er så enkelt som det kan bli.

## Opprette og redigere en ny nettstedmal

Nettstedmaler er bare vanlige nettsteder i nettverket ditt. For å opprette en ny mal går du enkelt til **Nettverksadmin > Ultimate Multisite > Nettsteder > Legg til nettsted.**

**![Knappen Legg til nettsted på nettsteder-listesiden](/img/config/site-templates-list.png)**

Dette åpner et modalvindu der du blir bedt om å fylle inn **Nettstedtittel, Nettsteddomene/-sti** og **Nettstedtype**. I nedtrekkslisten **Nettstedtype** må du velge **Nettstedmal** *.*

_![Modalvindu for å legge til nettstedmal med nedtrekksliste for nettstedtype](/img/config/site-templates-list.png)_

Nederst i skjemaet vil du se en **Kopier nettsted**-bryter. Denne lar deg opprette en ny nettstedmal basert på en eksisterende nettstedmal som utgangspunkt, slik at du sparer tid i stedet for å lage en nettstedmal fra bunnen av.

![Modalvindu for å legge til nettstedmal med kopier nettsted-bryter](/img/config/site-templates-list.png)

### Tilpasse innholdet i en nettstedmal

For å tilpasse nettstedmalen din navigerer du bare til kontrollpanelet og gjør de endringene du trenger. Du kan opprette nye innlegg, sider, aktivere plugins og endre det aktive temaet. Du kan til og med gå til Tilpasseren og endre alle slags tilpasningsalternativer.

Alle disse dataene blir kopiert over når en kunde oppretter et nytt nettsted basert på den nettstedmalen.

### Avanserte alternativer

Hvis du kan litt egendefinert koding, kan du bruke vårt Search and Replace API til å automatisk erstatte informasjon på det nye nettstedet etter at det er opprettet. Dette er nyttig for ting som å erstatte firmanavn på en Om oss-side, erstatte kontakt-e-posten på Kontakt-siden, osv.

### Bruke nettstedmaler

Ok, så du har laget en haug med forskjellige nettstedmaler med ulike design, temaer og innstillinger. Hvordan gjør du dem nyttige i nettverket ditt nå?

I bunn og grunn er det to tilnærminger du kan bruke nå (ikke samtidig):

  * Knytte én nettstedmal til hver av planene dine

**ELLER**

  * La kundene dine velge nettstedmaler selv under registreringen.

#### Modus 1: Tilordne nettstedmal

I denne modusen vil ikke kundene dine kunne velge en mal når de oppretter en konto. I stedet definerer du hvilken mal som skal brukes for hver av planene dine.

For å gjøre dette må du gå til **Ultimate Multisite > Produkter > Rediger**.

![Rediger produkt for å tilordne nettstedmal](/img/config/product-site-templates.png)

Dette tar deg til siden **Rediger produkt**. Under seksjonen **Produktalternativer** finner du fanen **Nettstedmal** og velger alternativet **Tilordne nettstedmal** fra nedtrekkslisten. Dette viser listen over tilgjengelige nettstedmaler og lar deg velge kun én nettstedmal dedikert til produktet.

![Fanen Nettstedmal i produkt med alternativet tilordne nettstedmal](/img/config/product-site-templates.png)

#### Modus 2: Velg tilgjengelig nettstedmal

I denne modusen gir du kundene dine et valg under registreringsprosessen. De vil kunne velge mellom ulike nettstedmaler du definerer under produktinnstillingene. Du har mulighet til å begrense hvilke nettstedmaler de kan velge under det valgte produktet. Dette lar deg ha forskjellige sett med nettstedmaler under hvert produkt, noe som er ideelt for å fremheve ulike funksjoner og egenskaper for et dyrere produkt.

På siden **Rediger produkt**, under seksjonen **Produktalternativer**, finner du fanen **Nettstedmal** og velger alternativet **Velg tilgjengelig nettstedmal** fra nedtrekkslisten. Dette viser listen over tilgjengelige nettstedmaler og lar deg velge hvilke nettstedmaler du ønsker skal være tilgjengelige. Du kan gjøre dette ved å velge oppførsel: **Tilgjengelig** hvis du vil at nettstedmalen skal være inkludert i listen. _**Ikke tilgjengelig**_ hvis du ikke vil at nettstedmalen skal vises som et alternativ. Og **Forhåndsvalgt** hvis du ønsker at en av nettstedmalene i listen skal være standardvalget.

![Velg tilgjengelige nettstedmaler med oppførselsalternativer](/img/config/product-site-templates.png)

### Standardmodus: Valg av nettstedmal i betalingsskjemaet

Hvis du ønsker at alle nettstedmalene dine skal være tilgjengelige under registreringen, eller kanskje ikke foretrekker det ekstra arbeidet med å tilordne eller spesifisere nettstedmaler under hvert produkt du oppretter, kan du enkelt sette opp valg av nettstedmal under **Betalingsskjemaet** ditt. For å gjøre dette går du bare til **Ultimate Multisite > Betalingsskjemaer**. Deretter klikker du **Rediger** under skjemaet du vil konfigurere.

![Listeside for betalingsskjemaer](/img/config/checkout-forms-list.png)

Dette åpner siden **Rediger betalingsskjema**. Finn feltet **Malvalg** og klikk **Rediger** under det.

![Betalingsskjema-editor med felt for malvalg](/img/config/checkout-form-editor.png)

Et modalvindu vil vises. Under feltet **Malnettsteder** kan du velge og liste opp alle nettstedmalene du ønsker skal være tilgjengelige under registreringen. Nettstedmalene du angir her vil være tilgjengelige uavhengig av hvilket produkt brukeren har valgt.

![Felt for malnettsteder i betalingsskjema-editoren](/img/config/checkout-form-step.png)

### Alternativer for nettstedmaler

Det finnes andre funksjoner for nettstedmaler som du kan slå av eller på under innstillingene for Ultimate Multisite.

![Alternativer for nettstedmaler i Ultimate Multisite-innstillinger](/img/config/settings-sites.png)

#### Tillat bytte av mal

Aktivering av dette alternativet lar kundene dine bytte malen de valgte under registreringsprosessen etter at kontoen og nettstedet er opprettet. Dette er nyttig fra kundens synspunkt siden det lar dem velge en annen mal hvis de senere finner ut at deres opprinnelige valg ikke var det beste for deres spesifikke behov.

#### Tillat brukere å bruke sitt nettsted som maler

Siden underside-brukere har brukt tid på å bygge og designe sitt eget nettsted, kan det hende de ønsker å klone og bruke det som en av nettstedmalene som er tilgjengelige når de oppretter et nytt underside i nettverket ditt. Dette alternativet lar dem gjøre nettopp det.

#### Kopier media ved malduplisering

Å huke av dette alternativet vil kopiere mediene som er lastet opp på malnettstedet til det nyopprettede nettstedet. Dette kan overstyres på hver av planene.

#### **Hindre søkemotorer fra å indeksere nettstedmaler**

Nettstedmaler som diskutert i denne artikkelen er grunnmaler, men fortsatt en del av nettverket ditt, noe som betyr at søkemotorer fortsatt kan finne dem. Dette alternativet lar deg skjule nettstedmalene slik at søkemotorer ikke indekserer dem.

## Forhåndsutfylle nettstedmaler med automatisk søk-og-erstatt

En av de kraftigste funksjonene i Ultimate Multisite er muligheten til å legge til vilkårlige tekst-, farge- og valgfelter i registreringsskjemaet. Når vi har fanget opp disse dataene, kan vi bruke dem til å forhåndsutfylle innholdet i visse deler av den valgte nettstedmalen. Når det nye nettstedet så publiseres, vil Ultimate Multisite erstatte plassholderne med den faktiske informasjonen som ble oppgitt under registreringen.

For eksempel, hvis du ønsker å få inn sluttbrukerens firmanavn under registreringen og automatisk plassere firmanavnet på hjemmesiden. På hjemmesiden til malnettstedet ditt må du legge til plassholderne, som i bildet nedenfor (plassholdere skal legges til omgitt av doble krøllparenteser - {{plassholder_navn}}).

![Hjemmeside med plassholdertekst i krøllparenteser](/img/config/site-templates-list.png)

Deretter kan du enkelt legge til et matchende registreringsfelt i betalingsskjemaet ditt for å fange opp disse dataene:

![Betalingsskjema med matchende registreringsfelt](/img/config/checkout-form-editor.png)

Kunden din vil deretter kunne fylle ut dette feltet under registreringen.

![Registreringsfelt utfylt av kunde](/img/config/checkout-form-step.png)

![Forhåndsvisning av registreringsskjemaet](/img/config/checkout-form-editor.png)

Ultimate Multisite vil deretter erstatte plassholderne med dataene kunden har oppgitt automatisk.

![Plassholdere erstattet med kundedata på nettstedet](/img/config/site-templates-list.png)

### Løse problemet med «mal full av plassholdere»

Alt dette er flott, men vi støter på et stygt problem: nå er nettstedmalene våre – som kan besøkes av kundene våre – fulle av stygge plassholdere som ikke forteller mye.

For å løse dette tilbyr vi muligheten til å sette midlertidige verdier for plassholderne, og vi bruker disse verdiene til å søke og erstatte innholdet deres på malnettstedene mens kundene dine besøker dem.

Du får tilgang til editoren for malplassholdere ved å gå til **Ultimate Multisite > Innstillinger > Nettsteder**, og deretter klikke på lenken **Rediger plassholdere** i sidepanelet.

![Plassholder-innstillinger under Nettsteder-innstillingssiden](/img/config/settings-sites.png)

Dette tar deg til innholdseditoren for plassholdere, der du kan legge til plassholdere og deres respektive innhold.

![Innholdseditor for malplassholdere](/img/config/settings-sites.png)
