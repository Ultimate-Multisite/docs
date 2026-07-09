---
title: Nettstedsmaler
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Nettstedsmaler (v2)

_**MERK: Denne artikkelen viser til Ultimate Multisite versjon 2.x. Hvis du bruker versjon 1.x,**_ **se denne artikkelen** _**.**_

Målet vårt når vi oppretter et premium-nettverk med Ultimate Multisite, er å automatisere så mange prosesser som mulig, samtidig som vi gir kundene våre fleksibilitet og ulike alternativer å velge mellom når de oppretter nettstedene sine. En enkel måte å oppnå denne balansen på er å bruke Ultimate Multisite-funksjonen Site Templates.

## Hva er en nettstedsmal?

Som navnet antyder, er en nettstedsmal et standardnettsted som kan brukes som grunnlag når du oppretter nye nettsteder i nettverket ditt.

Dette betyr at du kan opprette et grunnnettsted, aktivere ulike plugins, angi et aktivt theme og tilpasse det på hvilken som helst måte du ønsker. Når kunden din deretter oppretter en ny Account, får de i stedet for et standard WordPress-nettsted uten meningsfullt innhold, en kopi av grunnnettstedet ditt med alle tilpasningene og alt innholdet allerede på plass.

Det høres flott ut, men hvordan oppretter jeg en ny nettstedsmal? Det er så enkelt som det kan bli.

## Opprette og redigere en ny nettstedsmal

Nettstedsmaler er bare vanlige nettsteder i nettverket ditt. For å opprette en ny mal kan du ganske enkelt gå til **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Legg til nettsted-knapp på listevisningen for nettsteder](/img/config/site-templates-list.png)**

Dette åpner et modalvindu der det ber om **nettstedstittel, nettstedsdomene/-bane** og **nettstedstype**. Under nedtrekksfeltet **Site Type** må du sørge for at du velger **Site Template** *.*

_![Modal for å legge til nettstedsmal med nedtrekksmeny for nettstedstype](/img/config/site-templates-list.png)_

Du kan også legge til en beskrivelse som vises for kunder, for å forklare hva malen inkluderer:

![Beskrivelsesfelt for nettstedsmal på redigeringsskjermen for nettstedsmal](/img/config/site-template-edit-description.png)

Nederst i skjemaet vil du se en **Copy Site**-bryter. Dette lar deg opprette en ny nettstedsmal basert på en eksisterende nettstedsmal som utgangspunkt, slik at du sparer tid i stedet for å opprette en nettstedsmal fra bunnen av.

![Modal for å legge til nettstedsmal med Copy Site-bryter](/img/config/site-templates-list.png)

### Tilpasse innholdet i en nettstedsmal

For å tilpasse nettstedsmalen din navigerer du ganske enkelt til Dashboard-panelet og gjør endringene du trenger. Du kan opprette nye innlegg, sider, aktivere plugins og endre det aktive theme. Du kan til og med gå til Customizer og endre alle slags tilpasningsalternativer.

![Redigeringsgrensesnitt for nettstedsmal](/img/config/site-template-edit.png)

Alle disse dataene blir kopiert over når en kunde oppretter et nytt nettsted basert på den nettstedsmalen.

### Avanserte alternativer

Hvis du kan litt tilpasset koding, kan du bruke vårt Search and Replace API til automatisk å erstatte informasjon på det nye nettstedet etter at det er opprettet. Dette er nyttig for ting som å erstatte firmanavn på en Om oss-side, erstatte kontakt-e-posten på kontaktsiden, osv.

### Bruke nettstedsmaler

Ok, så du har opprettet en rekke ulike nettstedsmaler med forskjellige design, themes og innstillinger. Hvordan gjør du dem nyttige i nettverket ditt nå?

I hovedsak finnes det to tilnærminger du kan bruke nå (ikke samtidig):

  * Knytte én nettstedsmal til hver av dine Plans

**ELLER**

  * La kundene dine velge nettstedsmalene selv under registreringen.

#### Modus 1: Tildel nettstedsmal

I denne modusen kan ikke kundene dine velge en mal når de oppretter en Account; i stedet definerer du hvilken mal som skal brukes på hver av dine Plans.

For å gjøre dette må du gå til **Ultimate Multisite > Products > Edit**.

![Rediger produkt for å tildele nettstedsmal](/img/config/product-site-templates.png)

Dette tar deg til siden **Edit Product**. Under seksjonen **Product Options** finner du fanen **Site template** og velger alternativet **Assign Site Template** fra nedtrekksfeltet. Dette viser listen over tilgjengelige nettstedsmaler og lar deg velge bare én nettstedsmal dedikert til produktet.

![Produktets nettstedsmal-fane med alternativet Assign Site Template](/img/config/product-site-templates.png)

#### Modus 2: Velg tilgjengelig nettstedsmal

I denne modusen gir du kundene dine et valg under registreringsprosessen. De kan velge mellom ulike nettstedsmaler du definerer under produktinnstillingene. Du har mulighet til å begrense hvilke nettstedsmaler de kan velge mellom under det valgte produktet. Dette lar deg ha ulike sett med nettstedsmaler under hvert produkt, noe som er ideelt for å fremheve ulike funksjoner og egenskaper for et dyrere produkt.

På siden **Edit Product**. Under seksjonen **Product Options** finner du fanen **Site template** og velger alternativet **Choose Available Site Template** fra nedtrekksfeltet. Dette viser listen over tilgjengelige nettstedsmaler og lar deg velge nettstedsmalen du ønsker skal være tilgjengelig. Du kan gjøre dette ved å velge dens Behavior: **Available** hvis du vil at nettstedsmalen skal inkluderes på listen. _**Not Available**_ hvis du vil at nettstedsmalen ikke skal vises som et alternativ. Og **Pre-selected** hvis du ønsker at en av nettstedsmalene i listen skal være valgt som standard.

![Velg tilgjengelige nettstedsmaler med atferdsalternativer](/img/config/product-site-templates.png)

### Standardmodus: Valg av nettstedsmal i Checkout-skjemaet

Hvis du ønsker at alle nettstedsmalene dine skal være tilgjengelige under registreringen, eller kanskje ikke foretrekker å gjøre ekstra arbeid med å tildele eller spesifisere nettstedsmaler under hvert produkt du oppretter, kan du ganske enkelt angi valg av nettstedsmal under **Checkout Form**. For å gjøre dette går du til **Ultimate Multisite > Checkout Forms** og klikker **Edit** under skjemaet du ønsker å konfigurere.

Dette viser siden **Edit Checkout Form**. Finn feltet **Template Selection** og klikk **Edit** under det.

Et modalvindu vises. Under feltet **Malsider** kan du velge og liste opp alle nettstedsmalene du vil skal være tilgjengelige under registrering. Nettstedsmalene du angir herfra, vil være tilgjengelige uavhengig av hvilket produkt brukeren valgte.

![Felt for malvalg i skjemaredigereren for utsjekking](/img/config/checkout-form-template-step.png)

På frontend ser kundene malvelgeren under utsjekking og kan velge startdesignet for det nye nettstedet sitt.

![Frontend-malvelger under registrering](/img/config/frontend-template-chooser.png)

### Alternativer for nettstedsmaler

Det finnes andre funksjoner for nettstedsmaler som du kan slå av eller på under innstillingene for Ultimate Multisite.

![Alternativer for nettstedsmaler i innstillingene for Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Tillat bytte av mal

Aktivering av dette alternativet vil la kundene dine bytte malen de velger under registreringsprosessen etter at kontoen og nettstedet er opprettet. Dette er nyttig fra kundens synspunkt, siden det lar dem velge en mal på nytt hvis de senere finner ut at det opprinnelige valget ikke var det beste for deres spesifikke behov.

#### Tillat brukere å bruke nettstedet sitt som maler

Siden brukere av undernettsteder har brukt tid på å bygge og designe sitt eget nettsted, kan de ønske å klone og bruke det som en av nettstedsmalene som er tilgjengelige når de oppretter et nytt undernettsted på nettverket ditt. Dette alternativet vil la dem gjøre det.

#### Kopier medier ved duplisering av mal

Hvis du krysser av for dette alternativet, kopieres mediene som er lastet opp på malnettstedet, til det nyopprettede nettstedet. Dette kan overstyres på hver av planene.

#### **Hindre søkemotorer i å indeksere nettstedsmaler**

Nettstedsmaler, slik de er omtalt i denne artikkelen, er standardoppsett, men fortsatt en del av nettverket ditt, noe som betyr at de fortsatt er tilgjengelige for søkemotorer å finne. Dette alternativet lar deg skjule nettstedsmalene slik at søkemotorer ikke kan indeksere dem.

## Forhåndsutfylling av nettstedsmaler med automatisk søk og erstatt

En av de kraftigste funksjonene i Ultimate Multisite er muligheten til å legge til vilkårlige tekst-, farge- og valgfelt i registreringsskjemaet. Når vi har fanget opp disse dataene, kan vi bruke dem til å forhåndsutfylle innholdet i bestemte deler av den valgte nettstedsmalen. Deretter, når det nye nettstedet publiseres, vil Ultimate Multisite erstatte plassholderne med den faktiske informasjonen som ble oppgitt under registrering.

Hvis du for eksempel ønsker å hente sluttbrukerens firmanavn under registrering og automatisk legge firmanavnet på startsiden. På startsiden til malnettstedet må du legge til plassholderne, som på bildet nedenfor (plassholdere skal legges til omgitt av doble krøllparenteser - {{placeholder_name}}).

![Startside med plassholdertekst i krøllparenteser](/img/config/site-templates-list.png)

Deretter kan du ganske enkelt legge til et samsvarende registreringsfelt i utsjekkingsskjemaet ditt for å fange opp disse dataene. Den samme skjemaredigereren for utsjekking som brukes til malvalg, lar deg plassere egendefinerte felt ved siden av malvelgeren:

![Malvalg og registreringsfelt i skjemaredigereren for utsjekking](/img/config/checkout-form-template-step.png)

Kunden din vil deretter kunne fylle ut dette feltet under registreringen.

![Frontend-utsjekkingsskjema med malvelger](/img/config/frontend-template-chooser.png)

Ultimate Multisite vil deretter automatisk erstatte plassholderne med dataene som kunden har oppgitt.

![Plassholdere erstattet med kundedata på nettstedet](/img/config/site-templates-list.png)

### Løse problemet med «mal full av plassholdere»

Alt dette er flott, men vi støter på et stygt problem: nå er nettstedsmalene våre – som kan besøkes av kundene våre – fulle av stygge plassholdere som ikke forteller mye.

For å løse dette tilbyr vi muligheten til å angi falske verdier for plassholderne, og vi bruker disse verdiene til å søke etter og erstatte innholdet deres på malnettstedene mens kundene dine besøker dem.

Du får tilgang til redigereren for malplassholdere ved å gå til **Ultimate Multisite > Innstillinger > Nettsteder**, og deretter, i sidefeltet, klikke på lenken **Rediger plassholdere**.

![Innstillinger for nettstedsmaler under innstillingssiden for nettsteder](/img/config/settings-sites-templates-section.png)

Dette tar deg til innholdsredigereren for plassholdere, der du kan legge til plassholdere og deres respektive innhold.

![Inngangspunkt for innholdsredigerer for malplassholdere](/img/config/settings-sites-templates-section.png)
