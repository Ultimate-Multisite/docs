---
title: Skattehåndtering
sidebar_position: 4
_i18n_hash: a50fddb07455f714128e042744ab5859
---
# Håndtering av avgifter

Ultimate Multisite har en innebygd modul for avgiftsinnkreving i kjernepluginen, så hvis du trenger å kreve inn merverdiavgift på abonnementer, pakker og tjenester, kan du enkelt gjøre det uten å installere tillegg.

For selskaper i Europa tilbyr vi et **tillegg** som gir verktøy og funksjoner for bedre **MVA-støtte**.

Ultimate Multisite rapporterer eller betaler ikke avgifter til myndighetene på dine vegne; vi hjelper deg bare med å kreve inn riktig avgift når transaksjonen gjennomføres. **Du må fortsatt rapportere og betale avgiftene selv.**

## Aktivere avgiftsinnkreving

Avgiftsinnkreving er ikke aktivert som standard. For å aktivere det, gå til **Ultimate Multisite > Innstillinger > Avgifter** og slå på innstillingen Aktiver avgifter.

![Bryter for å aktivere avgifter i avgiftsinnstillingene](/img/config/settings-taxes.png)

### Avgift ekskludert vs. avgift inkludert

Som standard er alle produktprisene dine uten avgift, noe som betyr at avgifter **ikke er inkludert** i produktprisen. Hvis vi fastslår at en kunde skal betale avgift på et gitt kjøp, legger vi avgiftene **på toppen av** delbeløpet.

Hvis du foretrekker at avgiftene er inkludert i produktprisen, kan du gjøre dette ved å aktivere innstillingen **Inklusiv avgift**.

![Bryter for innstillingen Inklusiv avgift](/img/config/settings-taxes.png)

Ikke glem å **lagre** endringene du har gjort.

### 

## Opprette avgiftssatser

Etter at du har aktivert avgiftsinnkreving, må du opprette avgiftssatser for bestemte steder ved hjelp av vår avgiftssatsredigerer.

Du får tilgang til redigereren ved å klikke på knappen **Administrer avgiftssatser** i sidepanelet på innstillingssiden for avgifter.

![Knappen Administrer avgiftssatser i sidepanelet](/img/config/settings-taxes.png)

På redigeringssiden for avgiftssatser kan du legge til nye avgiftssatser ved å klikke på knappen **Legg til ny rad**.

![Avgiftssatsredigerer med knappen Legg til ny rad](/img/config/settings-taxes.png)

Du må gi hver avgiftssats en **tittel** (brukes på fakturaer). Deretter kan du velge **land** (obligatorisk), **delstat/fylke** og **by** (begge valgfrie) der denne avgiften skal belastes. Til slutt legger du inn **avgiftssatsen i prosent**.

### Avgiftskategorier

Du kan også opprette flere avgiftskategorier for å legge til forskjellige avgiftssatser for ulike typer produkter.

Klikk på **Legg til ny avgiftskategori**, skriv inn navnet på kategorien og trykk **Opprett**.

![Knappen Legg til ny avgiftskategori](/img/config/settings-taxes.png)

![Opprette en ny avgiftskategori](/img/config/settings-taxes.png)

For å bla gjennom kategorier, klikk på **Bytt** og velg kategorien du vil legge til nye avgifter i.

![Bytte mellom avgiftskategorier](/img/config/settings-taxes.png)

![Velge en avgiftskategori å vise](/img/config/settings-taxes.png)

Du kan angi avgiftskategorien for et bestemt produkt ved å gå til **produktredigeringssiden** og deretter til fanen Avgifter.

![Produktets avgiftsfane med avgiftskategori og avgiftspliktig-bryter](/img/config/product-taxes.png)

På samme skjerm kan du slå av bryteren **Er avgiftspliktig?** for å fortelle Ultimate Multisite at det ikke skal kreves inn avgift på dette produktet.

## Europeisk MVA-støtte

Som nevnt tidligere har vi et tillegg tilgjengelig for kunder i EU som har tilleggskrav på grunn av europeiske MVA-regler.

Våre MVA-verktøy hjelper med et par viktige ting:

  * Enkel innlasting av EU MVA-satser;

  * Innsamling og validering av MVA-nummer – og omvendt avgiftsplikt for MVA-fritatte enheter (som selskaper med gyldige MVA-numre);

For å installere dette tillegget, gå til **Ultimate Multisite > Innstillinger** og klikk deretter på lenken **Se våre tillegg** i sidepanelet.

![Innstillingssiden med lenke til tillegg i sidepanelet](/img/config/settings-taxes.png)

Du blir omdirigert til vår tilleggsside. Der kan du søke etter **Ultimate Multisite VAT add-on** og installere det.

![MVA-tillegget på tilleggssiden](/img/config/settings-taxes.png)

![Installasjonsdialog for MVA-tillegget](/img/config/settings-taxes.png)

Gå deretter til **Nettverksadmin > Plugins** og aktiver tillegget for hele nettverket.

![Nettverksaktiver MVA-tillegget](/img/config/settings-taxes.png)

Hvis du går tilbake til **fanen for avgiftsinnstillinger**, vil du se nye alternativer tilgjengelig. Slå på alternativet **Aktiver MVA-støtte** for å aktivere de nye MVA-verktøyene. Ikke glem å **lagre** innstillingene dine!

![Bryter for Aktiver MVA-støtte i avgiftsinnstillingene](/img/config/settings-taxes.png)

### Hente MVA-satser

Et av verktøyene integrasjonen vår legger til, er muligheten til å laste inn avgiftssatser for EUs medlemsland. Dette kan gjøres ved å besøke redigeringssiden for avgiftssatser etter at du har aktivert EU MVA-støtte.

Nederst på siden finner du alternativene for henting av MVA-satser. Ved å velge en satstype og klikke på knappen **Oppdater EU MVA-satser** hentes og fylles tabellen automatisk ut med avgiftssatsene for hvert EU-medlemsland. Deretter trenger du bare å lagre.

### ![Alternativer for henting av MVA-satser med knappen Oppdater EU MVA-satser](/img/config/settings-taxes.png)

Du kan også redigere verdiene etter at de er hentet. For å gjøre dette, rediger ganske enkelt raden du trenger og klikk for å lagre de nye verdiene.

### MVA-validering

Når MVA-støtte er aktivert, legger Ultimate Multisite til et ekstra felt i betalingsskjemaet, under fakturaadressen. Feltet vises bare for kunder som befinner seg i EU.

![Felt for MVA-nummer i betalingsskjemaet](/img/config/settings-taxes.png)

Ultimate Multisite validerer deretter MVA-nummeret, og hvis det kommer tilbake som gyldig, anvendes omvendt avgiftsplikt og avgiftssatsen settes til 0 % på den ordren.
