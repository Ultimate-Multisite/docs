---
title: Avgiftshåndtering
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Avgiftshåndtering {#tax-handling}

Ultimate Multisite har en modul for innkreving av avgifter innebygd i vår kjerne-plugin, så hvis du trenger å kreve inn salgsavgifter på planene, pakkene og tjenestene dine, kan du enkelt gjøre det uten å måtte installere noen tillegg.

For selskaper som holder til i Europa, tilbyr vi et **tillegg** som legger til verktøy og funksjoner for bedre å **støtte MVA**-etterlevelse.

Ultimate Multisite leverer ikke inn eller betaler avgifter på dine vegne til myndighetene; vi hjelper deg ganske enkelt med å kreve inn de riktige avgiftene på transaksjonstidspunktet. **Du må fortsatt betale inn avgiftene selv.**

## Aktivere innkreving av avgifter {#enabling-tax-collection}

Innkreving av avgifter er ikke aktivert som standard. For å aktivere det må du gå til **Ultimate Multisite > Innstillinger > Avgifter** og slå på innstillingen Aktiver avgifter.

![Aktiver avgifter-bryter øverst på siden for avgiftsinnstillinger](/img/config/settings-taxes-enable.png)

Her er en full visning av siden for avgiftsinnstillinger:

![Full side for avgiftsinnstillinger](/img/config/settings-taxes-full.png)

Du kan også vise avgiftsinnstillingene for individuelle produkter:

![Avgiftsinnstillinger for produkter](/img/config/settings-taxes.png)

### Avgift ekskludert vs. avgift inkludert {#tax-excluded-vs-tax-included}

Som standard er alle produktprisene dine ekskludert avgift, noe som betyr at avgifter **ikke er inkludert** i produktets pris. Hvis vi fastslår at en kunde skal betale avgifter på et gitt kjøp, legger vi til avgiftene **på toppen av** deltotalen.

Hvis du foretrekker å ha avgifter inkludert i produktets pris, kan du gjøre det ved å aktivere innstillingen **Inkludert avgift**.

![Rad med Inkludert avgift-bryter under innstillingen Aktiver avgifter](/img/config/settings-taxes-inclusive.png)

Ikke glem å **lagre** endringene du har gjort.

###

## Opprette avgiftssatser {#creating-tax-rates}

Etter at du har aktivert innkreving av avgifter, må du opprette avgiftssatser for bestemte steder ved hjelp av vår redigerer for avgiftssatser.

Du får tilgang til redigereren ved å klikke på knappen **Administrer avgiftssatser** i sidepanelet på siden for avgiftsinnstillinger.

![Administrer avgiftssatser-lenke i Avgiftssatser-panelet på innstillingssiden](/img/config/settings-taxes-manage-rates.png)

På siden for redigering av avgiftssatser kan du legge til nye avgiftssatser ved å klikke på knappen **Legg til ny rad**.

![Tabell for redigering av avgiftssatser med Legg til ny rad-knapp øverst](/img/config/tax-rates-editor.png)

Du må gi hver avgiftssats en **tittel** (brukes på fakturaer). Deretter kan du velge **land** (påkrevd), **delstat/fylke,** og **by** (begge valgfrie) der denne avgiften skal kreves inn. Til slutt legger du til **avgiftssatsen i prosent**.

### Avgiftskategorier {#tax-categories}

Du kan også opprette flere avgiftskategorier for å legge til ulike avgiftssatser for ulike typer produkter.

Klikk på **Legg til ny avgiftskategori** , skriv deretter inn kategoriens navn og trykk på **Opprett**.

![Legg til ny avgiftskategori-knapp øverst i redigereren for avgiftssatser](/img/config/tax-categories-add.png)

![Inndatafelt for navn på avgiftskategori i modalen for oppretting av kategori](/img/config/tax-categories-create-modal.png)

For å bla gjennom kategorier klikker du på **Bytt** og velger kategorien du vil legge til nye avgifter i.

![Bytt-nedtrekksknapp for å endre mellom avgiftskategorier](/img/config/tax-categories-switch.png)

![Nedtrekksvelger for avgiftskategori som viser tilgjengelige kategorier](/img/config/tax-categories-select.png)

Du kan angi avgiftskategori for et bestemt produkt ved å gå til **redigeringssiden for produktet** og deretter til fanen Avgifter.

![Produktets avgiftsfane med avgiftskategori og avgiftspliktig-bryter](/img/config/product-taxes.png)

På den samme skjermen kan du slå av bryteren **Er avgiftspliktig?** for å la Ultimate Multisite vite at det ikke skal kreve inn avgifter på det aktuelle produktet.

## Europeisk MVA-støtte {#european-vat-support}

Som nevnt tidligere har vi et tillegg tilgjengelig for kunder i EU som har ytterligere krav på grunn av europeiske MVA-regler.

MVA-verktøyene våre hjelper med et par viktige ting:

  * Enkel innlasting av EU-MVA-satser;

  * Innsamling og validering av MVA-nummer – og omvendt avgiftsberegning for MVA-fritatte enheter (som selskaper med gyldige MVA-numre);

For å installere dette tillegget går du til **Ultimate Multisite > Innstillinger** og klikker deretter på sidepanel-lenken **Sjekk tilleggene våre**.

![Sidepanel på innstillingssiden med lenken Sjekk tilleggene våre](/img/config/settings-taxes-addons-link.png)

Du blir omdirigert til siden vår for tillegg. Der kan du søke etter **Ultimate Multisite MVA-tillegget** og installere det.

<!-- Skjermbilde utilgjengelig: MVA-tilleggsflis på Tillegg-siden -->

<!-- Skjermbilde utilgjengelig: Installer nå-dialog for MVA-tillegget -->

Gå deretter til **Nettverksadmin > Plugins** og aktiver dette tillegget for hele nettverket.

<!-- Skjermbilde utilgjengelig: Nettverksaktiver-handling for MVA-tillegget på Plugins-siden -->

Hvis du går tilbake til **fanen Avgiftsinnstillinger** , ser du nye alternativer tilgjengelig. Slå på alternativet **Aktiver MVA-støtte** for å aktivere de nye MVA-verktøyene. Ikke glem å **lagre** innstillingene dine!

<!-- Skjermbilde utilgjengelig: Aktiver MVA-støtte-bryter i avgiftsinnstillingene etter aktivering av tillegget -->

### Hente inn MVA-satser {#pulling-on-vat-tax-rates}

Et av verktøyene integrasjonen vår legger til, er muligheten til å laste inn avgiftssatsene for EU-medlemsland. Dette kan gjøres ved å besøke siden for redigering av avgiftssatser etter at EU-MVA-støtte er aktivert.

Nederst på siden ser du alternativene for henting av MVA. Hvis du velger en satstype og klikker på knappen **Oppdater EU-MVA-satser**, hentes satsene inn og tabellen fylles automatisk ut med avgiftssatsene for hvert EU-medlemsland. Deretter trenger du bare å lagre det.

![Oppdater EU-MVA-satser-knapp nederst i redigereren for avgiftssatser](/img/config/tax-rates-vat-pull.png)

Du kan også redigere verdiene etter at du har hentet dem inn. For å gjøre det redigerer du ganske enkelt tabellraden du trenger, og klikker for å lagre de nye verdiene.

### MVA-validering {#vat-validation}

Når MVA-støtte er aktivert, legger Ultimate Multisite til et ekstra felt i checkout-skjemaet, under fakturaadressefeltet. Feltet vises bare for kunder som befinner seg i EU.

<!-- Skjermbilde utilgjengelig: MVA-nummerfelt på frontend checkout-skjemaet under fakturaadressen -->

Ultimate Multisite vil deretter validere VAT Number, og hvis det kommer tilbake som gyldig, brukes reverse charge-mekanismen og skattesatsen settes til 0 % på den bestillingen.
