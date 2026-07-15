---
title: Checkout-skjemaer
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Betalingsskjemaer

Betalingsskjemaer er en enkel og fleksibel måte å eksperimentere med ulike tilnærminger på når du prøver å konvertere nye kunder.

Ultimate Multisite 2.0 tilbyr en editor for betalingsskjemaer som lar deg opprette så mange skjemaer du vil, med ulike felter, produkter på tilbud osv.

For å få tilgang til denne funksjonen går du til menyen Betalingsskjemaer i venstre sidefelt.

![Liste over betalingsskjemaer](/img/config/checkout-forms-list.png)

På denne siden kan du se alle betalingsskjemaene du har.

Listetabellen inkluderer en **Status**-kolonne, slik at du kan bekrefte om hvert skjema for øyeblikket er tilgjengelig for kunder:

| Status | Betydning |
|---|---|
| **Aktiv** | Skjemaet kan brukes hvor som helst shortcode-en eller registreringssiden er publisert. |
| **Inaktiv** | Skjemaet er lagret, men deaktivert. Kunder kan ikke fullføre betaling med det før du aktiverer det igjen. |

Bruk statuskolonnen før du redigerer en offentlig registreringsflyt, spesielt når du har utkast eller sesongbaserte betalingsskjemaer ved siden av de aktive skjemaene dine.

Hvis du vil opprette et nytt, klikker du bare på Legg til betalingsskjema øverst på siden.

Du kan velge ett av disse tre alternativene som utgangspunkt: ett trinn, flere trinn eller tomt. Klikk deretter for å gå til editoren.

Når du velger **ett trinn** eller **flere trinn** som utgangspunkt, inkluderer skjemamalen nå et **Malvalg**-felt som standard. Dette feltet lar kundene dine velge en nettstedsmal under registreringsprosessen. Du kan la det stå, fjerne det eller flytte det som hvilket som helst annet felt i editoren.

![Editor for betalingsskjema](/img/config/checkout-form-editor.png)

Alternativt kan du redigere eller duplisere skjemaene du allerede har ved å klikke på alternativene under navnet. Der finner du også alternativene for å kopiere skjemaets shortcode eller slette skjemaet.

![Handlinger ved peker over betalingsskjema](/img/config/checkout-form-hover-actions.png)

#### Oversikt over editor for betalingsskjema {#checkout-form-editor-overview}

Editoren for betalingsskjemaer gir et omfattende grensesnitt for å bygge registreringsskjemaene dine. Her er en oversikt over editoroppsettet:

![Oversikt over editor for betalingsskjema](/img/config/checkout-form-editor-overview.png)

### Redigere et betalingsskjema {#editing-a-checkout-form}

Du kan opprette betalingsskjemaer for ulike formål. I dette eksempelet skal vi jobbe med et registreringsskjema.

Etter at du har navigert til editoren for betalingsskjemaer, gir du skjemaet et navn (som bare brukes som intern referanse) og en slug (brukes for eksempel til å opprette shortcodes).

![Editor for betalingsskjema](/img/config/checkout-form-editor.png)

Skjemaer består av trinn og felter. Du kan legge til et nytt trinn ved å klikke på Legg til nytt betalingstrinn.

![Legg til nytt betalingstrinn](/img/config/checkout-form-add-step.png)

I den første fanen i modalvinduet fyller du ut innholdet for skjematrinnet. Gi det en ID, et navn og en beskrivelse. Disse elementene brukes hovedsakelig internt.

![Innholdsfane for trinn i betalingsskjema](/img/config/checkout-form-step-content.png)

Deretter angir du synligheten for trinnet. Du kan velge mellom «Vis alltid», «Vis bare for innloggede brukere» eller «Vis bare for gjester».

![Synlighetsfane for trinn i betalingsskjema](/img/config/checkout-form-step-visibility.png)

Til slutt konfigurerer du stilen for trinnet. Dette er valgfrie felter.

![Stilfane for trinn i betalingsskjema](/img/config/checkout-form-step-style.png)

Nå er det på tide å legge til felter i det første trinnet vårt. Klikk bare på Legg til nytt felt og velg typen seksjon du vil ha.

![Trinn i betalingsskjema med felter](/img/config/checkout-form-step-with-fields.png)

Hvert felt har ulike parametere som skal fylles ut. For denne første oppføringen velger vi feltet «Brukernavn».

![Nedtrekksmeny for valg av felttype](/img/config/checkout-form-field-type-dropdown.png)

![Innstillinger for innhold i brukernavnfelt](/img/config/checkout-form-username-content.png)

![Innstillinger for synlighet i brukernavnfelt](/img/config/checkout-form-username-visibility.png)

![Innstillinger for stil i brukernavnfelt](/img/config/checkout-form-username-style.png)

Du kan legge til så mange trinn og felter som du trenger. For å vise produktene dine slik at kundene kan velge ett, bruker du Pristabell-feltet. Hvis du vil la kundene dine velge en mal, legger du til Malvalg-feltet. Og så videre.

![Dialog for Legg til nytt felt](/img/config/checkout-form-add-field-dialog.png)

_**Merk:** brukernavn, e-post, passord, nettstedstittel, nettsteds-URL, ordresammendrag, betaling og send inn-knapp er obligatoriske felter for å opprette et betalingsskjema._

Mens du jobber med betalingsskjemaet ditt, kan du alltid bruke Forhåndsvis-knappen for å se hvordan kundene dine vil se skjemaet. Du kan også bytte mellom visning som eksisterende bruker eller som besøkende

![Forhåndsvisningsknapp for betalingsskjema](/img/config/checkout-form-preview-button.png)

![Modal for forhåndsvisning av betalingsskjema](/img/config/checkout-form-preview-modal.png)

Til slutt kan du under Avanserte alternativer konfigurere meldingen for «Takk»-siden, legge til snippets for å spore konverteringer, legge til tilpasset CSS i betalingsskjemaet ditt eller begrense det til bestemte land.

![Avanserte alternativer](/img/config/checkout-form-advanced.png)

Du kan også aktivere eller deaktivere betalingsskjemaet manuelt ved å slå på/av dette alternativet i høyre kolonne, eller slette skjemaet permanent.

![Aktiv-bryter](/img/config/checkout-form-active.png)

For å slette et skjema klikker du på slettealternativet i skjemahandlingene:

![Slettealternativ for betalingsskjema](/img/config/checkout-form-delete.png)

Ikke glem å lagre betalingsskjemaet ditt!

![Lagre-knapp](/img/config/checkout-form-save.png)

For å få skjemaets shortcode klikker du på Generer shortcode og kopierer resultatet som vises i modalvinduet.

![Lagre-knapp med shortcode](/img/config/checkout-form-save.png)

### Pristabell-feltet {#the-pricing-table-field}

Feltet **Pristabell** viser produktene dine i betalingsskjemaet, slik at kunder kan velge en plan. Når du redigerer dette feltet, kan du konfigurere flere alternativer:

![Innstillinger for Pristabell-felt](/img/config/pricing-table-field-settings.png)

Slik vises pristabellen i registreringsskjemaet på frontend:

![Pristabell for frontend-kasse](/img/config/frontend-checkout-pricing-table.png)

  * **Produkter**: Velg hvilke produkter som skal vises, og rekkefølgen de vises i.
  * **Tving ulike varigheter**: Når aktivert, vises alle produkter uavhengig av om de har en samsvarende prisvariant for den valgte faktureringsperioden. Når deaktivert (standard), skjules produkter uten en variant for den valgte perioden.
    ![Alternativ for å tvinge varigheter i pristabell](/img/config/pricing-table-force-durations.png)
  * **Skjul når forhåndsvalgt**: Skjuler pristabellen når en plan allerede er valgt via URL-en (f.eks. `/register/premium`).
  * **Mal for pristabell**: Velg den visuelle malen for pristabellen (Enkel liste, Eldre, osv.).

Hvis du legger til et produkt i pristabellen før skjemaet inneholder feltene som kreves for å fullføre kasseløpet for det produktet, viser redigeringsverktøyet nå en advarsel. Bruk advarselen til å legge til det manglende obligatoriske feltet før du publiserer eller lagrer endringer for et aktivt registreringsskjema.

### Legge til en bryter for periodevalg {#adding-a-period-selection-toggle}

Hvis du har konfigurert [prisvarianter](creating-your-first-subscription-product#price-variations) på produktene dine (f.eks. månedlig og årlig prising), kan du legge til et **Periodevalg**-felt i kasseskjemaet. Dette feltet viser en bryter som lar kunder bytte mellom faktureringsperioder, og pristabellen oppdateres dynamisk i sanntid.

#### Trinn 1: Sett opp prisvarianter på produktene dine {#step-1-set-up-price-variations-on-your-products}

Før du legger til Periodevalg-feltet, må du sørge for at produktene dine har prisvarianter konfigurert. Gå til **Ultimate Multisite > Produkter**, rediger et produkt, og gå til fanen **Prisvarianter** for å legge til alternative faktureringsperioder (f.eks. årlig til rabattert pris).

![Fanen Prisvarianter på et produkt](/img/config/product-price-variations-tab.png)

#### Trinn 2: Legg til Periodevalg-feltet i kasseskjemaet {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Gå til **Ultimate Multisite > Kasseskjemaer** og rediger kasseskjemaet ditt.

2. Rull ned til trinnet som inneholder **Pristabell**-feltet, og klikk **Legg til nytt felt**.

3. I dialogen for valg av felttype klikker du **Velg periode**.

![Dialogen Legg til nytt felt som viser Velg periode](/img/config/checkout-form-add-field-dialog.png)

4. Konfigurer periodealternativene. Hvert alternativ trenger:
   * **Varighet**: Tallet (f.eks. `1`)
   * **Varighetsenhet**: Periodetypen (dager, uker, måneder eller år)
   * **Etikett**: Teksten kundene vil se (f.eks. "Månedlig", "Årlig")

5. Klikk **+ Legg til alternativ** for å legge til flere periodevalg. Disse alternativene må samsvare med prisvariantene du konfigurerte på produktene dine.

![Innstillinger for Periodevalg-felt](/img/config/period-selection-field-settings.png)

6. Velg en **Mal for periodevelger** (Ren er standard, som gjengir en enkel, stylet velger klar for tilpasset CSS).

7. Klikk **Lagre felt**.

#### Trinn 3: Plasser feltet over pristabellen {#step-3-position-the-field-above-the-pricing-table}

For best brukeropplevelse må du sørge for at Periodevalg-feltet vises **før** Pristabell-feltet i kassetrinnet. Du kan dra felter for å endre rekkefølgen i redigeringsverktøyet for kasseskjemaet. Slik velger kundene først en faktureringsperiode og ser deretter priser for den perioden.

![Redigeringsverktøy for kasseskjema som viser feltrekkefølge](/img/config/checkout-form-editor-with-fields.png)

#### Slik fungerer det i frontend {#how-it-works-on-the-frontend}

Når det er konfigurert, vil kunder som besøker registreringssiden din se periodevelgeren over pristabellen. Når de klikker på en annen faktureringsperiode:

  * Pristabellen oppdateres umiddelbart for å vise priser for den valgte perioden (ingen sideinnlasting kreves).
  * Hvis **Tving ulike varigheter** er deaktivert på Pristabell-feltet, blir produkter uten en prisvariant for den valgte perioden skjult.
  * Hvis **Tving ulike varigheter** er aktivert, forblir alle produkter synlige selv om de ikke har en variant for den valgte perioden (de vil vise standardprisen sin).

#### Forhåndsvelge en faktureringsperiode via URL {#pre-selecting-a-billing-period-via-url}

Du kan også forhåndsvelge et produkt og en faktureringsperiode via URL-en. Ultimate Multisite støtter disse URL-mønstrene:

  * `/register/premium` — Forhåndsvelger kun produktet "Premium"
  * `/register/premium/12` — Forhåndsvelger produktet og 12-måneders varighet
  * `/register/premium/1/year` — Forhåndsvelger produktet med en varighet på 1 år

### Feltet for malvalg {#the-template-selection-field}

**Malvalg**-feltet lar kunder velge en nettstedsmal under checkout. Det er nå inkludert som standard i kasseskjemamalene **enkelttrinn** og **flertrinn** som ble lagt til i Ultimate Multisite v2.6.1.

#### Legge til feltet manuelt {#adding-the-field-manually}

Hvis du arbeider med et skjema som ble opprettet før v2.6.1, eller startet fra en tom mal:

1. Gå til **Ultimate Multisite > Kasseskjemaer** og rediger kasseskjemaet ditt.
2. I trinnet der nettstedsdetaljer samles inn, klikker du **Legg til nytt felt**.
3. Velg **Malvalg** fra dialogen for felttype.
4. Konfigurer feltet:
   - **Etikett** — Overskriften kundene ser over malrutenettet (f.eks. "Velg en nettstedsmal").
   - **Obligatorisk** — Om kunder må velge en mal før de fortsetter.

#### Slik fungerer det {#how-it-works}

Når en kunde velger en mal under checkout, bruker Ultimate Multisite den når det nye nettstedet deres klargjøres. Malene som vises, kommer fra listen **Nettstedsmaler** (**Ultimate Multisite > Nettstedsmaler**). Bare maler som er merket som tilgjengelige for kunder, vises her.

### Basisdomener for kasseskjemaer {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 behandler domener som er konfigurert i **Nettsteds-URL**-felter i kasseskjemaer som basisdomener for nettverket. Bruk feltets innstillinger for tilgjengelige domener når du vil at kunder skal opprette nettsteder under ett eller flere delte registreringsdomener, som `example.com` og `sites.example.com`.

Delte checkout-form-basedomener behandles ikke som egendefinerte domenetilordninger per nettsted. Når en kunde oppretter et underkatalognettsted på en av disse basene, oppretter ikke Ultimate Multisite en tilordnet domenepost som ville fått den delte verten til å tilhøre bare det ene nettstedet. Den delte verten forblir tilgjengelig for søsternettsteder som bruker den samme checkout form-basen.

Behold egendefinerte domener for per-kunde-tilordnede verter, som `customer-example.com`. Behold checkout-form-basedomener for delte registreringsverter som mange nettsteder kan bruke.

#### Fjerne feltet {#removing-the-field}

Hvis du ikke tilbyr nettstedmaler, fjern Template Selection-feltet fra skjemaet ditt. Kunder vil da motta den standardmalen som er konfigurert under **Ultimate Multisite > Settings > Site Templates**.
