---
title: Opprette ditt første abonnementsprodukt
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Opprette ditt første abonnementsprodukt (v2) {#creating-your-first-subscription-product-v2}

_**VIKTIG MERKNAD: Denne artikkelen er kun for brukere av Ultimate Multisite versjon 2.x. Hvis du bruker versjon 1.x,**_ **_**se denne artikkelen**_**.

For å begynne å drive nettverket ditt og selge tjenestene dine til potensielle brukere, må du ha ulike abonnementsalternativer. Hvordan oppretter du disse produktene? Hvilke typer produkter kan du tilby? I denne artikkelen dekker vi alt du trenger å vite om produkter.

## Produkttype {#product-type}

Med Ultimate Multisite kan du tilby to kategorier produkter til kundene dine: **planer** og **tillegg** **(Order Bump)**. Tillegg kan deles inn i to typer:**pakker** og **tjenester**. Vi ser på forskjellene og særtrekkene deres videre.

  * **Planer** : det grunnleggende produktet i Ultimate Multisite. Kunden din kan bare ha et medlemskap hvis det er knyttet til en plan. En plan gir kundene dine ett eller flere nettsteder (det avhenger av konfigurasjonene i planen din) med begrensningene du angir på redigeringssiden for produktet.

  * **Pakker** : tillegg som påvirker funksjonaliteten i Ultimate Multisite-planer direkte. De endrer begrensninger eller legger til nye ressurser, plugins eller temaer i den opprinnelige planen kunden din kjøpte. For eksempel kan en grunnleggende plan tillate 1 000 besøk per måned, og du kan gjøre tilgjengelig en pakke som utvider dette tallet til 10 000.

  * **Tjenester:** tillegg som ikke endrer funksjonaliteten i Ultimate Multisite. De er oppgaver du vil utføre for kunden din i tillegg til planen de kjøpte. For eksempel kan kunden din kjøpe en plan som tillater ett enkelt nettsted, og også betale for en ekstra tjeneste som lager designet for dette nettstedet.

## Administrere produkter {#managing-products}

For mange kan fanen **Produkter** i Ultimate Multisite **(Ultimate Multisite > Produkter)** likestilles med planer i et tradisjonelt hostingmiljø.

I Ultimate Multisite definerer fanen Produkter oppsettet og begrensningene som gjelder for et bestemt produkt eller en bestemt tjeneste. Slike oppsett omfatter beskrivelse av produkt eller tjeneste, pris, skatter og tillatelser.

Denne delen vil hjelpe deg med å forstå denne viktige hjørnesteinen i Ultimate Multisite.

![Siden med produktliste](/img/config/products-list.png)

## Legge til produkter {#adding-products}

Enten det er en plan, pakke eller tjeneste, er inngangspunktet for å definere et nytt element via **Ultimate Multisite > Produkter > Legg til produkt**.

![Knapp for å legge til produkt](/img/config/product-add-button.png)

Grensesnittet inneholder to dominerende seksjoner. Til venstre er det flere faner som hjelper med å definere produktet, og til høyre er det noen seksjoner for å definere grunnprisen for produktet, dets aktive tilstand og produktbilde.

![Oversikt over redigeringssiden for produkt](/img/config/product-edit-full.png)

### Beskrivelse {#description}

Den grunnleggende produktinformasjonen kan defineres ved å oppgi et produktnavn og en beskrivelse. Disse identifikatorene vises overalt der produktinformasjonen kreves, som ved valg av plan og priser, fakturaer, oppgraderinger og lignende.

![Seksjon for produktbeskrivelse](/img/config/product-description.png)

### Pristype {#pricing-type}

På høyre side av grensesnittet kan grunnprisen defineres.

![Seksjon for pris og lagring](/img/config/product-pricing-save.png)

Ultimate Multisite støtter tre ulike pristyper. Alternativet **betalt** ber nettverksadministratoren om informasjon om produktets pris og faktureringsfrekvens.

### Prising {#pricing}

Priskomponenten definerer produktets grunnpris og faktureringsintervall.

![Seksjon for pris og lagring](/img/config/product-pricing-save.png)

dermed vil en eksempelpris på $29.99 med en innstilling på 1 måned fakturere $29.99 hver måned. Tilsvarende vil en pris på $89.97 med en innstilling på 3 måneder fakturere dette beløpet hvert kvartal.

### Faktureringssykluser {#billing-cycles}

Seksjonen for faktureringssykluser angir frekvensen for det nevnte faktureringsintervallet og forstås vanligvis i lys av kontrakter eller faste perioder.

![Seksjon for pris og lagring](/img/config/product-pricing-save.png)

For eksempel vil en produktpris på $29.99 med et intervall på 1 måned og 12 faktureringssykluser fakturere $29.99 per måned for produktet over de påfølgende 12 månedene. Med andre ord vil en slik innstilling etablere en fastprisperiode på $29.99 per måned i 12 måneder og deretter stoppe faktureringen.

### Prøveperiode {#trial-period}

Ved å aktivere bryteren for tilbud om prøveperiode kan nettverksadministratoren definere en prøveperiode for produktet.

![Seksjon for pris og lagring](/img/config/product-pricing-save.png)

I prøveperioden kan kunder bruke produktet gratis og vil ikke bli fakturert før prøveperioden er utløpt.

### Oppstartsgebyr {#setup-fee}

Du kan også legge til et oppstartsgebyr på planen din.

![Seksjon for pris og lagring](/img/config/product-pricing-save.png)

Dette betyr at kunden din betaler et ekstra beløp ved første belastning (i tillegg til planprisen) som tilsvarer gebyret du definerte i denne seksjonen.

### Aktiv {#active}

Aktiv-bryteren definerer i praksis om produktet er tilgjengelig for kunder ved nye registreringer.

![Aktiv-bryter](/img/config/product-active.png)

Hvis det finnes eksisterende kunder på denne planen, vil det å sette bryteren til deaktivert tilstand i praksis videreføre planen for eksisterende kunder og fjerne den fra fremtidige registreringer. **Eksisterende kunder på planen vil fortsette å bli fakturert** til de flyttes til en ny plan eller fjernes fra planen.

### Produktbilde {#product-image}

Knappen **Last opp bilde** lar nettverksadministratoren bruke mediebiblioteket til å velge eller laste opp et produktbilde.

![Seksjon for produktbilde](/img/config/product-image.png)

### Slett {#delete}

Knappen **Slett produkt** sletter produktet fra systemet. Den vises når produktet er publisert.

![Seksjon for sletting av produkt](/img/config/product-delete.png)

I motsetning til andre slettinger blir produktet ikke lagt i noen papirkurvtilstand. Når det først er slettet, er handlingen derfor irreversibel.

### Produktalternativer {#product-options}

Når produktinformasjonen på grunnnivå er definert, hjelper produktalternativene nettverksadministratoren med å definere produktets spesifikke attributter ytterligere.

#### Generelt {#general}

Fanen **Generelt** definerer de generelle attributtene for produktet som ikke gjelder for noen av de andre produktspesifikke fanene.

![Fanen Generelt](/img/config/product-general-tab.png)

Den selvforklarende **produkt-slug** definerer sluggen som produktet identifiseres med i URL-er og andre områder av Ultimate Multisite.

Ultimate Multisite støtter flere produkttyper, nemlig abonnement, pakke og tjeneste. Fanene **Produktalternativer** justeres dynamisk avhengig av den angitte produkttypen.

**Kunderolle** angir rollen kunden tildeles når nettstedet opprettes. Vanligvis vil dette for de fleste nettverksadministratorer være Ultimate Multisite-standard eller Administrator. Standardrollen for Ultimate Multisite kan angis i **Ultimate Multisite > Settings > Login & Registration**.

![Innstillinger for kunderolle](/img/config/product-customer-role-settings.png)

#### Opp- og nedgraderinger {#up--downgrades}

Denne fanen angir oppgraderings- og nedgraderingsstiene som er tilgjengelige for en kunde innenfor deres spesifikke nivå.

For å forstå dette konseptet kan du vurdere et eksempel der en nisjeinstallasjon av Ultimate Multisite tilbyr læringsadministrasjonsløsninger til kundene sine. For å oppnå dette defineres tre abonnementer (Basic, Plus og Premium), og spesifikke plugins aktiveres for hvert abonnement (se senere i denne delen for instruksjoner om hvordan du aktiverer plugins).

Hvis Ultimate Multisite-installasjonen også betjener bedriftsnettsteder eller eCommerce-nettsteder, kan disse abonnementene kreve at andre plugins installeres og aktiveres.

I denne sammenhengen ville det være uønsket og problematisk å la eLearning-kunder gå over til eCommerce-abonnementer, siden disse abonnementene, prisene og begrensningene kanskje ikke passer.

For å begrense kundens sti og forhindre hendelser kan nettverksadministratoren derfor definere en abonnementsgruppe og innenfor den gruppen angi abonnementene kunden kan gå over til.

![Fanen Opp- og nedgraderinger](/img/config/product-upgrades.png)

For å definere en abonnementsgruppe angir du de kompatible abonnementene i listen **abonnementsgruppe**. **produktrekkefølge** bestemmer hvordan abonnementene sorteres og vises fra lavest til høyest.

Ultimate Multisite inkluderer også en **order bump**-funksjon der relevante tilleggsprodukter og tjenester kan legges til abonnementer. Disse tilbys kunden som tilleggselementer som kan legges til abonnementer ved checkout eller under en oppgradering.

#### Prisvariasjoner {#price-variations}

Prisvariasjoner lar nettverksadministratoren angi alternative prisnivåer avhengig av varighet. Denne innstillingen gjør det mulig å tilby månedlig, kvartalsvis, årlig eller en hvilken som helst annen faktureringsperiode for samme produkt. Du kan for eksempel sette opp et produkt til $29.99/måned med et rabattert årlig alternativ til $249.99/år.

![Fanen Prisvariasjoner](/img/config/product-price-variations-tab.png)

For å opprette prisvariasjoner setter du bryteren **Aktiver prisvariasjoner** til aktiv og klikker på knappen **Legg til ny prisvariasjon**.

![Produktprisvariasjoner](/img/config/product-price-variations.png)

For å angi en variasjon setter du varighet, periode og pris for variasjonen. Flere variasjoner kan legges til ved å klikke på knappen igjen.

Hvis for eksempel grunnprisen for produktet ditt er $29.99 per måned, kan du legge til:

  * **3 måneder** til $79.99 (en liten rabatt sammenlignet med månedlig)
  * **1 år** til $249.99 (en betydelig rabatt for årlig forpliktelse)

:::tip Vise en bryter for faktureringsperiode på frontend

Prisvariasjoner alene legger ikke til en bryter eller veksler i frontend checkout. For å la kunder bytte mellom faktureringsperioder (f.eks. månedlig / årlig), må du legge til et **Periodevalg**-felt i checkout-skjemaet ditt. Se [Checkout-skjemaer: Legge til en bryter for periodevalg](checkout-forms#adding-a-period-selection-toggle) for trinnvise instruksjoner.
:::

#### Avgifter {#taxes}

Fanen **Avgifter** samsvarer med avgiftsinnstillingene som er angitt i **Ultimate Multisite > Settings > Taxes**, og mer spesifikt de definerte avgiftssatsene. For å aktivere avgifter og definere gjeldende avgiftssatser, se dokumentasjonen på **Ultimate Multisite: Settings**

![Fanen Avgifter](/img/config/product-taxes.png)

I et tidligere eksempel definerte vi en lokal avgiftssats på 7,25 % som gjelder for kunder i California (USA).

Når avgiftssatsen er definert i **Ultimate Multisite > Settings > Manage Tax Rates**, kan den velges på produktnivå.

![Fanen Avgifter](/img/config/product-taxes.png)

For å angi at et produkt er en avgiftspliktig vare, setter du bryteren **Er avgiftspliktig** til aktiv og velger gjeldende avgiftssats fra nedtrekksmenyen Avgiftskategori.

#### Nettstedmaler {#site-templates}

I hovedsak er nettstedmaler komplette WordPress-nettsteder som klones til en kundes nettsted ved starten av abonnementet deres.

![Fanen Nettstedmaler](/img/config/product-site-templates.png)

Nettverksadministratoren oppretter og konfigurerer malnettstedet som et vanlig WordPress-nettsted med aktiverte og konfigurerte temaer, plugins og innhold. Malnettstedet klones ordrett til kunden.

Denne fanen lar nettverksadministratoren angi oppførselen til nettstedmaler ved et nytt abonnement. For å bruke nettstedmaler for dette abonnementet setter du bryteren **Tillat nettstedmaler** til aktiv tilstand.

Når **Tillat nettstedmaler** er deaktivert, kan kunder på abonnementet ikke velge maler, selv om et checkout-skjema, en delbar lenke eller en URL-parameter ellers ville gjort maler tilgjengelige. Ultimate Multisite håndhever nå denne grensen gjennom en fallback-kjede på tvers av de tilgjengelige inngangspunktene: abonnementsinnstillinger kontrolleres først, deretter malinnstillinger for checkout-skjema, og deretter forhåndsvalgte eller URL-angitte maler. Dette holder abonnementsgrenser konsekvente og forhindrer at maler vises for produkter som ikke skal tilby dem.

**Modusen for valg av nettstedsmal** definerer oppførselen til nettstedsmaler under abonnementsprosessen.

Innstillingen **S** **tandard** følger trinnene i utsjekkingsskjemaet. Hvis nettverksadministratoren har definert et trinn for valg av mal i utsjekkingsprosessen og trinnet er definert med maler, vil denne innstillingen respektere direktivene som er etablert i utsjekkingstrinnet.

Å angi **T** **ilordne nettstedsmal** tvinger valget av den angitte malen. Som følge av dette fjernes eventuelle trinn for valg av mal i utsjekkingsprosessen.

Til slutt overstyrer **V** **elg tilgjengelige nettstedsmaler** malene som er angitt i utsjekkingstrinnet, med malene som er valgt i denne innstillingen. En forhåndsvalgt mal kan også defineres for å hjelpe kunden med valget.

Til syvende og sist, hvis nettverksadministratoren ønsker at valg av mal skal skje i utsjekkingstrinnene, vil innstillingen ' _standard_ ' være tilstrekkelig. Alternativt, for å fjerne og låse valg av mal og delegere valget til abonnementsinnstillingene, kan alternativene ' _tilordne ny mal_ ' eller ' _velg tilgjengelige nettstedsmaler_ ' være ønskelige.

#### Nettsteder {#sites}

Fanen **Nettsteder** er en del av Ultimate Multisite sin begrensningsfunksjonalitet.

![Nettsteder-fane](/img/config/product-sites.png)

Denne innstillingen angir det maksimale antallet nettsteder en kunde kan opprette under medlemskapet sitt.

For å aktivere begrensningen setter du bryteren **begrens nettsteder** til aktiv tilstand og angir maksimalt antall nettsteder i feltet **nettstedskvote**.

#### Besøk {#visits}

Fanen **Besøk** er en ytterligere del av Ultimate Multisite sitt begrensningssystem. Denne innstillingen gjør det mulig å telle og deretter strupe unike besøkende til en kundes nettsted.

![Besøk-fane](/img/config/product-visits.png)

Fra et markedsføringsperspektiv kan nettverksadministratorer bruke denne innstillingen som et middel til å oppmuntre kunder til å oppgradere abonnementet sitt når grensene er nådd. Denne innstillingen kan også hjelpe nettverksadministratoren med å begrense og forhindre overdreven trafikk til nettsteder for å bevare systemressurser.

For å bruke denne funksjonen setter du bryteren **begrens unike besøk** til aktiv tilstand og angir maksimalt antall unike besøkende i feltet **kvote for unike besøk**.

Når denne grensen er nådd, vil Ultimate Multisite slutte å vise kundens nettsted i stedet for å vise en melding som angir at grensene er overskredet.

#### Brukere {#users}

Ultimate Multisite sine begrensninger for 'Brukere' lar nettverksadministratoren pålegge grenser for antallet brukere som kan opprettes og tilordnes roller.

![Brukere-fane](/img/config/product-users.png)

For å aktivere begrensningsfunksjonen setter du bryteren **begrens bruker** til aktiv tilstand ved å skyve den til høyre.

Deretter, for hver rolle som skal begrenses, setter du bryteren ved siden av den til aktiv tilstand og definerer den maksimale øvre grensen i det aktuelle feltet.

#### Innleggstyper {#post-types}

Fanen **Innleggstyper** lar nettverksadministratoren pålegge detaljerte grenser for det omfattende utvalget av innleggstyper i WordPress.

![Innleggstyper-fane](/img/config/product-post-types.png)

På grunn av konstruksjonen av WordPress er innlegg og innleggstyper en betydelig komponent i kjernefunksjonaliteten, og derfor er Ultimate Multisite sitt begrensningssystem utformet for å hjelpe nettverksadministratoren med å etablere og opprettholde grenser.

For å aktivere dette delsystemet for grenser setter du bryteren **begrens innleggstyper** til aktiv tilstand ved å skyve den til høyre.

Deretter, for hver innleggstype som skal begrenses, slår du den på ved å skyve den til høyre og angi den maksimale øvre grensen i det aktuelle feltet.

#### Diskplass {#disk-space}

Fanen **Diskplass** lar nettverksadministratorer begrense plassen som forbrukes av kunder.

![Diskplass-fane](/img/config/product-disk-space.png)

Vanligvis i et WordPress multisite deles kjernefilene mellom alle nettsteder, og individuelle kataloger opprettes for mediefiler og opplastinger som disse innstillingene og begrensningene gjelder for.

For å aktivere begrensningen for diskbruk setter du bryteren **begrens diskstørrelse per nettsted** til aktiv tilstand ved å skyve den til høyre.

Deretter angir du den maksimale øvre grensen i megabyte i feltet **diskplasskvot** e.

#### Egendefinert domene {#custom-domain}

Ved å slå på dette alternativet kan du tillate egendefinerte domener spesifikt på dette abonnementet.

![Egendefinerte domener-fane](/img/config/product-custom-domains.png)

#### Temaer {#themes}

Fanen **Temaer** i produktalternativene lar nettverksadministratoren gjøre temaer tilgjengelige for kunder for valg og eventuelt tvinge temaets tilstand.

![Temaer-fane](/img/config/product-themes.png)

_**Merk: For at temaer skal gjøres tilgjengelige for kunder, må de være nettverksaktivert av nettverksadministratoren.**_

![Side for nettverkstemaer](/img/config/product-themes-network-enabled.png)

Alternativet **synlighet** definerer om dette temaet er synlig for kunden når de ser fanen **Utseende > Temaer** på nettstedet sitt. Å sette dette alternativet til **Skjult** fjerner temaet fra visningen og begrenser dermed muligheten til å velge og aktivere det.

![Temaer-fane](/img/config/product-themes.png)

Valget **oppførsel** lar nettverksadministratoren definere temaets tilstand når kundenettstedet opprettes.

I tilstanden **T** **ilgjengelig** gjøres temaet tilgjengelig for kunden for egenaktivering. Omvendt fjerner tilstanden **Ikke tilgjengelig** kundens mulighet til å aktivere temaet. Til slutt tvinger alternativet **Tving aktivering** valg og aktivering av temaet, og setter det dermed som standard ved opprettelse av nettstedet.

#### Plugins {#plugins}

I likhet med Temaer-fanen lar Ultimate Multisite nettverksadministratoren definere synligheten til plugins for kunder, samt tilstanden deres når et nytt nettsted opprettes.

![Plugins-fane](/img/config/product-plugins.png)

Nedtrekksmenyen **synlighet** lar pluginen enten være synlig eller skjult for kunden når den vises på nettstedet deres gjennom menyalternativet Plugins.

Nettverksadministratoren kan ytterligere manipulere oppførselen til pluginene ved å bruke alternativene i nedtrekksmenyen for oppførsel.

![Pluginer-fane](/img/config/product-plugins.png)

Valget **Default** respekterer plugin-tilstanden som er definert i nettstedsmalen valgt av kunden. Dermed vil pluginer som er aktivert i malen, forbli aktivert når malen klones til kundens nettsted.

**Force Activate** setter pluginen i en aktiv tilstand ved opprettelse av nettsted, og omvendt deaktiverer **Force Inactivate** pluginen ved opprettelse av nettsted. I begge disse tilfellene kan pluginens tilstand endres manuelt av kunden via deres WordPress Plugins-meny.

Innstillingen **Force Activate & Lock** fungerer på lignende måte, men hindrer at plugin-tilstanden endres av kunden. Dermed vil en innstilling med Force Activate and Lock tvinge pluginen til aktiv tilstand og hindre kunden i å deaktivere den. På samme måte vil innstillingen **Force Inactivate & Lock** tvinge pluginen til inaktiv tilstand og hindre brukeren i å aktivere pluginen.

Nettverksadministratoren bør vurdere innstillingene Force Activate & Lock og Force Inactivate & Lock sammen med nettstedsmaler, siden pluginer og plugin-tilstander i malene kan påvirkes av disse innstillingene hvis de velges.

#### Tilbakestill begrensninger {#reset-limitations}

Fanen **Reset Limitations** tilbakestiller alle egendefinerte grenser definert på produktet. For å tilbakestille begrensninger klikker du på knappen **reset limitations**.

![Fanen Tilbakestill begrensninger](/img/config/product-reset-limitations.png)

For å bekrefte handlingen skyver du **confirm reset**-bryteren til aktiv tilstand til høyre og klikker på knappen **reset limitations**.

![Fanen Tilbakestill begrensninger](/img/config/product-reset-limitations.png)

## Rediger, dupliser eller slett produkt {#edit-duplicate-or-delete-product}

Eksisterende produkter kan redigeres, dupliseres eller slettes ved å gå til **Ultimate Multisite > Products** og holde pekeren over det eksisterende produktnavnet.

![Handlinger ved hover over produkt](/img/config/product-hover-actions.png)
