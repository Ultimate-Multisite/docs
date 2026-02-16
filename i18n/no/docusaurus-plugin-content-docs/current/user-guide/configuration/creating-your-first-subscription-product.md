---
title: Opprette ditt første abonnementsprodukt
sidebar_position: 6
_i18n_hash: ec2328e89406069449b4078a2724c029
---
# Opprette ditt første abonnementsprodukt (v2)

_**VIKTIG MERKNAD: Denne artikkelen gjelder kun for brukere av Ultimate Multisite versjon 2.x. Hvis du bruker versjon 1.x,**_ **_**se denne artikkelen**_**.

For å komme i gang med nettverket ditt og begynne å selge tjenestene dine til potensielle brukere, må du ha ulike abonnementsalternativer. Hvordan oppretter du disse produktene? Hvilke typer produkter kan du tilby? I denne artikkelen dekker vi alt du trenger å vite om produkter.

## Produkttype

Med Ultimate Multisite kan du tilby to kategorier av produkter til kundene dine: **planer** og **tillegg** **(Order Bump)**. Tillegg kan deles inn i to typer: **pakker** og **tjenester**. Vi skal se på forskjellene og særegenhetene deres nedenfor.

  * **Planer**: det grunnleggende produktet i Ultimate Multisite. Kunden din kan bare ha et medlemskap hvis det er knyttet til en plan. En plan gir kundene dine ett eller flere nettsteder (avhengig av planens innstillinger) med de begrensningene du setter på produktredigeringssiden.

  * **Pakker**: tillegg som påvirker funksjonaliteten til Ultimate Multisite-planer direkte. De endrer begrensninger eller legger til nye ressurser, plugins eller temaer til den opprinnelige planen kunden kjøpte. For eksempel kan en basisplan tillate 1 000 besøk per måned, og du kan tilby en pakke som utvider dette til 10 000.

  * **Tjenester:** tillegg som ikke endrer Ultimate Multisites funksjonalitet. Dette er oppgaver du utfører for kunden i tillegg til planen de kjøpte. For eksempel kan kunden kjøpe en plan som tillater ett enkelt nettsted og i tillegg betale for en ekstra tjeneste der du designer dette nettstedet.

## Administrere produkter

For mange kan **Produkter**-fanen i Ultimate Multisite **(Ultimate Multisite > Products)** sammenlignes med planer i et tradisjonelt hostingmiljø.

I Ultimate Multisite definerer Produkter-fanen strukturen og begrensningene som gjelder for et spesifikt produkt eller en tjeneste. Slike strukturer omfatter produkt- eller tjenestebeskrivelse, pris, avgifter og tillatelser.

Denne seksjonen vil hjelpe deg med å forstå denne viktige hjørnesteinen i Ultimate Multisite.

![Produktlisteside](/img/config/products-list.png)

## Legge til produkter

Enten det er en plan, pakke eller tjeneste, er utgangspunktet for å definere et nytt element via **Ultimate Multisite > Products > Add Product**.

![Legg til produkt-knapp](/img/config/product-add-button.png)

Grensesnittet inneholder to hovedseksjoner. På venstre side er det flere faner som hjelper deg med å definere produktet, og på høyre side er det noen seksjoner for å definere grunnprisen på produktet, aktiv-status og produktbilde.

![Oversikt over produktredigeringssiden](/img/config/product-edit-full.png)

### Beskrivelse

Den grunnleggende produktinformasjonen kan defineres ved å oppgi et produktnavn og en beskrivelse. Disse identifikatorene vises overalt hvor produktinformasjonen trengs, som ved plan- og prisvalg, fakturaer, oppgraderinger og lignende.

![Produktbeskrivelsesseksjon](/img/config/product-description.png)

### Pristype

På høyre side av grensesnittet kan grunnprisen defineres.

![Pris- og lagreseksjon](/img/config/product-pricing-save.png)

Ultimate Multisite støtter tre ulike pristyper. **Betalt**-alternativet ber nettverksadministratoren om informasjon om produktets pris og faktureringsfrekvens.

### Prising

Priskomponenten definerer grunnprisen på produktet og faktureringsintervallet.

![Pris- og lagreseksjon](/img/config/product-pricing-save.png)

En eksempelpris på 299 kr med en innstilling på 1 måned vil fakturere 299 kr hver måned. Tilsvarende vil en pris på 899 kr med en innstilling på 3 måneder fakturere det beløpet hvert kvartal.

### Faktureringssykluser

Faktureringssyklus-seksjonen angir frekvensen på det nevnte faktureringsintervallet og forstås vanligvis i sammenheng med kontrakter eller faste perioder.

![Pris- og lagreseksjon](/img/config/product-pricing-save.png)

For eksempel vil en produktpris på 299 kr med et intervall på 1 måned og 12 faktureringssykluser fakturere 299 kr per måned for produktet over de påfølgende 12 månedene. Med andre ord vil en slik innstilling etablere en fastprisperiode på 299 kr per måned i 12 måneder, og deretter stoppe faktureringen.

### Prøveperiode

Ved å aktivere prøveperiode-bryteren kan nettverksadministratoren definere en prøveperiode for produktet.

![Pris- og lagreseksjon](/img/config/product-pricing-save.png)

I løpet av prøveperioden kan kundene bruke produktet fritt og vil ikke bli fakturert før prøveperioden er utløpt.

### Etableringsgebyr

Du kan også legge til et etableringsgebyr på planen din.

![Pris- og lagreseksjon](/img/config/product-pricing-save.png)

Dette betyr at kunden betaler et ekstra beløp ved første belastning (i tillegg til planprisen) som tilsvarer gebyret du definerte i denne seksjonen.

### Aktiv

Aktiv-bryteren definerer om produktet er tilgjengelig for kunder ved nye registreringer.

![Aktiv-bryter](/img/config/product-active.png)

Hvis det finnes eksisterende kunder på denne planen, vil det å deaktivere bryteren i praksis beholde planen for eksisterende kunder, men fjerne den fra fremtidige registreringer. **Eksisterende kunder på planen vil fortsatt bli fakturert** til de flyttes til en ny plan eller fjernes fra planen.

### Produktbilde

**Last opp bilde**-knappen lar nettverksadministratoren bruke mediebiblioteket til å velge eller laste opp et produktbilde.

![Produktbildeseksjon](/img/config/product-image.png)

### Slett

**Slett produkt**-knappen sletter produktet fra systemet. Den vises når produktet er publisert.

![Slett produktseksjon](/img/config/product-delete.png)

I motsetning til andre slettinger, plasseres ikke produktet i noen papirkurv-tilstand. Når det er slettet, er handlingen derfor irreversibel.

### Produktalternativer

Når den grunnleggende produktinformasjonen er definert, hjelper produktalternativene nettverksadministratoren med å definere de spesifikke egenskapene til produktet ytterligere.

#### Generelt

**Generelt**-fanen definerer de generelle egenskapene til produktet som ikke hører til noen av de andre produktspesifikke fanene.

![Generelt-fane](/img/config/product-general-tab.png)

Den selvforklarende **produkt-slug** definerer slug-en som produktet identifiseres med i URL-er og andre områder av Ultimate Multisite.

Ultimate Multisite støtter flere produkttyper, nemlig Plan, Pakke og Tjeneste. **Produktalternativer**-fanene justeres dynamisk avhengig av den angitte produkttypen.

**Kunderolle** angir rollen kunden får tildelt når nettstedet opprettes. For de fleste nettverksadministratorer vil dette vanligvis være Ultimate Multisite-standard eller Administrator. Standard Ultimate Multisite-rolle kan settes i **Ultimate Multisite > Settings > Login & Registration**.

![Kunderolleinnstillinger](/img/config/product-customer-role-settings.png)

#### Opp- og nedgraderinger

Denne fanen angir oppgraderings- og nedgraderingsveiene som er tilgjengelige for en kunde innenfor deres spesifikke nivå.

For å forstå dette konseptet, tenk på et eksempel der en nisje Ultimate Multisite-installasjon tilbyr læringsadministrasjonsløsninger til sine kunder. For å oppnå dette er tre planer (Basis, Pluss og Premium) definert, og spesifikke plugins er aktivert for hver plan (se senere i denne seksjonen for instruksjoner om hvordan du aktiverer plugins).

Hvis Ultimate Multisite-installasjonen også betjener bedriftsnettsteder eller e-handelsnettsteder, kan disse planene kreve at andre plugins installeres og aktiveres.

I denne sammenhengen ville det være uønsket og problematisk å la e-læringskunder gå over til e-handelsplaner, ettersom disse planene, prisene og begrensningene kanskje ikke passer.

For å begrense kundens vei og forhindre problemer kan nettverksadministratoren derfor definere en plangruppe og innenfor den gruppen spesifisere hvilke planer kunden kan gå over til.

![Opp- og nedgraderinger-fane](/img/config/product-upgrades.png)

For å definere en plangruppe, spesifiser de kompatible planene i **plangruppe**-listen. **Produktrekkefølge** bestemmer hvordan planene sorteres og vises fra laveste til høyeste.

Ultimate Multisite inkluderer også en **order bump**-funksjon der passende tilleggsprodukter og tjenester kan legges til planer. Disse tilbys kunden som ekstra elementer som kan legges til planer ved utsjekking eller under en oppgradering.

#### Prisvariasjoner

Prisvariasjoner lar nettverksadministratoren spesifisere alternative prisnivåer avhengig av varighet. Denne innstillingen gjør det mulig å etablere prisnivåer for 3 måneder, 6 måneder eller årlig, eller hvilken som helst annen varighet og frekvens som passer bruksområdet.

![Prisvariasjoner-fane](/img/config/product-price-variations.png)

For å etablere prisvariasjoner, sett **aktiver prisvariasjoner**-bryteren til aktiv og klikk på **Legg til ny prisvariasjon**-knappen.

For å legge inn en variasjon, sett varigheten, perioden og prisen for variasjonen. Flere variasjoner kan legges inn ved å klikke på knappen igjen.

![Prisvariasjoner-fane](/img/config/product-price-variations.png)

#### Avgifter

**Avgifter**-fanen samsvarer med avgiftsinnstillingene som er spesifisert i **Ultimate Multisite > Settings > Taxes** og mer spesifikt de definerte avgiftssatsene. For å aktivere avgifter og definere gjeldende avgiftssatser, se dokumentasjonen under **Ultimate Multisite: Settings**

![Avgifter-fane](/img/config/product-taxes.png)

I et tidligere eksempel definerte vi en lokal avgiftssats på 7,25 % som gjelder for kunder i California (USA).

Når avgiftssatsen er definert i **Ultimate Multisite > Settings > Manage Tax Rates**, kan den velges på produktnivå.

![Avgifter-fane](/img/config/product-taxes.png)

For å indikere at et produkt er en avgiftspliktig vare, sett **Er avgiftspliktig**-bryteren til aktiv og velg gjeldende avgiftssats fra Avgiftskategori-rullegardinmenyen.

#### Nettstedmaler

I bunn og grunn er nettstedmaler komplette WordPress-nettsteder som klones til kundens nettsted ved starten av abonnementet deres.

![Nettstedmaler-fane](/img/config/product-site-templates.png)

Nettverksadministratoren oppretter og konfigurerer malnettstedet som et vanlig WordPress-nettsted med aktiverte og konfigurerte temaer, plugins og innhold. Malnettstedet klones uendret til kunden.

Denne fanen lar nettverksadministratoren spesifisere oppførselen til nettstedmaler ved et nytt abonnement. For å bruke nettstedmaler, sett **tillat nettstedmaler**-bryteren til aktiv tilstand.

**Nettstedmal-valgmodus** definerer oppførselen til nettstedmaler under abonnementsprosessen.

**Standard**-innstillingen følger trinnene i utsjekkingsskjemaet. Hvis nettverksadministratoren har definert et malvalgstrinn i utsjekkingsprosessen og trinnet er definert med maler, vil denne innstillingen respektere direktivene som er etablert i utsjekkingstrinnet.

Ved å spesifisere **Tilordne nettstedmal** tvinges valget av den spesifiserte malen. Som en konsekvens fjernes eventuelle malvalgstrinn i utsjekkingsprosessen.

Til slutt overstyrer **Velg tilgjengelige nettstedmaler** malene som er spesifisert i utsjekkingstrinnet med malene som er valgt i denne innstillingen. En forhåndsvalgt mal kan også defineres for å hjelpe kunden med valget.

Hvis nettverksadministratoren ønsker at malvalg skal skje i utsjekkingstrinnene, vil innstillingen «_standard_» være tilstrekkelig. Alternativt, for å fjerne og låse malvalg og delegere valget til planinnstillingene, kan alternativene «_tilordne ny mal_» eller «_velg tilgjengelige nettstedmaler_» være ønskelige.

#### Nettsteder

**Nettsteder**-fanen er en del av Ultimate Multisites begrensningsfunksjonalitet.

![Nettsteder-fane](/img/config/product-sites.png)

Denne innstillingen spesifiserer maksimalt antall nettsteder en kunde kan opprette under sitt medlemskap.

For å aktivere begrensningen, sett **begrens nettsteder**-bryteren til aktiv tilstand og spesifiser maksimalt antall nettsteder i **nettstedkvote**-feltet.

#### Besøk

**Besøk**-fanen er en ytterligere del av Ultimate Multisites begrensningssystem. Denne innstillingen tillater registrering og påfølgende begrensning av unike besøkende til kundens nettsted.

![Besøk-fane](/img/config/product-visits.png)

Fra et markedsføringsperspektiv kan nettverksadministratorer bruke denne innstillingen som et middel for å oppmuntre kunder til å oppgradere planen sin når grensene nås. Denne innstillingen kan også hjelpe nettverksadministratoren med å begrense og forhindre overdreven trafikk til nettsteder for å bevare systemressurser.

For å bruke denne funksjonen, sett **begrens unike besøk**-bryteren til aktiv tilstand og spesifiser maksimalt antall unike besøkende i **kvote for unike besøk**-feltet.

Når denne grensen nås, vil Ultimate Multisite slutte å vise kundens nettsted og i stedet vise en melding som indikerer at grensene er overskredet.

#### Brukere

Ultimate Multisites «Brukere»-begrensninger lar nettverksadministratoren sette grenser for antall brukere som kan opprettes og tilordnes roller.

![Brukere-fane](/img/config/product-users.png)

For å aktivere begrensningsfunksjonen, sett **begrens bruker**-bryteren til aktiv tilstand ved å skyve den til høyre.

Deretter, for hver rolle som skal begrenses, sett bryteren ved siden av den til aktiv tilstand og definer den maksimale øvre grensen i det aktuelle feltet.

#### Innholdstyper

**Innholdstyper**-fanen lar nettverksadministratoren sette detaljerte begrensninger på det omfattende utvalget av innholdstyper i WordPress.

![Innholdstyper-fane](/img/config/product-post-types.png)

På grunn av WordPress' oppbygning er innlegg og innholdstyper en betydelig komponent i kjernefunksjonaliteten, og derfor er Ultimate Multisites begrensningssystem designet for å hjelpe nettverksadministratoren med å etablere og opprettholde grenser.

For å aktivere dette begrensningssystemet, sett **begrens innholdstyper**-bryteren til aktiv tilstand ved å skyve den til høyre.

Deretter, for hver innholdstype som skal begrenses, slå den på ved å skyve den til høyre og spesifiser den maksimale øvre grensen i det aktuelle feltet.

#### Diskplass

**Diskplass**-fanen lar nettverksadministratorer begrense plassen som brukes av kunder.

![Diskplass-fane](/img/config/product-disk-space.png)

Vanligvis i en WordPress multisite deles kjernefilene mellom alle nettsteder, og individuelle mapper opprettes for mediefiler og opplastinger som disse innstillingene og begrensningene gjelder for.

For å aktivere diskbruksbegrensningen, sett **begrens diskstørrelse per nettsted**-bryteren til aktiv tilstand ved å skyve den til høyre.

Deretter spesifiser den maksimale øvre grensen i megabyte i **diskplasskvote**-feltet.

#### Egendefinert domene

Ved å slå på dette alternativet kan du tillate egendefinerte domener på denne spesifikke planen.

![Egendefinerte domener-fane](/img/config/product-custom-domains.png)

#### Temaer

**Temaer**-fanen i produktalternativene lar nettverksadministratoren gjøre temaer tilgjengelige for kunder for valg og eventuelt tvinge tilstanden til temaet.

![Temaer-fane](/img/config/product-themes.png)

_**Merk: For at temaer skal gjøres tilgjengelige for kunder, må de være nettverksaktiverte av nettverksadministratoren.**_

![Nettverkstemaer-side](/img/config/product-themes-network-enabled.png)

**Synlighet**-alternativet definerer om dette temaet er synlig for kunden når de viser sin **Utseende > Temaer**-fane på nettstedet sitt. Å sette dette alternativet til **Skjult** fjerner temaet fra visning og begrenser dermed muligheten til å velge og aktivere det.

![Temaer-fane](/img/config/product-themes.png)

**Oppførsel**-valget lar nettverksadministratoren definere tilstanden til temaet ved opprettelse av kundenettstedet.

I **Tilgjengelig**-tilstanden gjøres temaet tilgjengelig for kunden for selvaktivering. Motsatt fjerner **Ikke tilgjengelig**-tilstanden kundens mulighet til å aktivere temaet. Til slutt tvinger **Tving aktivering**-alternativet valg og aktivering av temaet og setter det som standard ved nettstedopprettelse.

#### Plugins

I likhet med Temaer-fanen lar Ultimate Multisite nettverksadministratoren definere synligheten av plugins for kunder samt deres tilstand ved opprettelse av et nytt nettsted.

![Plugins-fane](/img/config/product-plugins.png)

**Synlighet**-rullegardinmenyen tillater at pluginen enten er synlig eller skjult for kunden når den vises på nettstedet deres gjennom Plugins-menyvalget.

Nettverksadministratoren kan videre manipulere oppførselen til plugins ved å bruke alternativene i oppførsel-rullegardinmenyen.

![Plugins-fane](/img/config/product-plugins.png)

**Standard**-valget respekterer plugintilstanden som er definert i nettstedmalen valgt av kunden. Dermed vil plugins som er aktivert i malen forbli aktivert når malen klones til kundens nettsted.

**Tving aktivering** setter pluginen i aktiv tilstand ved nettstedopprettelse, og motsatt deaktiverer **Tving deaktivering** pluginen ved nettstedopprettelse. I begge disse tilfellene kan pluginens tilstand endres manuelt av kunden gjennom deres WordPress Plugins-meny.

**Tving aktivering og lås**-innstillingen fungerer tilsvarende, men forhindrer at plugintilstanden endres av kunden. Dermed vil en innstilling på Tving aktivering og lås tvinge pluginen til aktiv tilstand og forhindre kunden fra å deaktivere den. Tilsvarende vil **Tving deaktivering og lås**-innstillingen tvinge pluginen til inaktiv tilstand og forhindre brukeren fra å aktivere pluginen.

Nettverksadministratoren kan vurdere Tving aktivering og lås og Tving deaktivering og lås-innstillingene i sammenheng med nettstedmaler, ettersom plugins og plugintilstander i malene kan bli påvirket av disse innstillingene hvis de er valgt.

#### Nullstill begrensninger

**Nullstill begrensninger**-fanen nullstiller alle egendefinerte begrensninger som er definert på produktet. For å nullstille begrensninger, klikk på **nullstill begrensninger**-knappen.

![Nullstill begrensninger-fane](/img/config/product-reset-limitations.png)

For å bekrefte handlingen, skyv **bekreft nullstilling**-bryteren til aktiv tilstand til høyre og klikk på **nullstill begrensninger**-knappen.

![Nullstill begrensninger-fane](/img/config/product-reset-limitations.png)

## Rediger, dupliser eller slett produkt

Eksisterende produkter kan redigeres, dupliseres eller slettes ved å navigere til **Ultimate Multisite > Products** og holde musepekeren over det eksisterende produktnavnet.

![Produkthandlinger ved musepeker](/img/config/product-hover-actions.png)
