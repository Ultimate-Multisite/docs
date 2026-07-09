---
title: Kasseformularer
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout formular {#checkout-forms}

Checkout Forms er en nem og fleksibel måde at eksperimentere med forskellige tilgange på, når du prøver at konvertere nye kunder.

Ultimate Multisite 2.0 tilbyder en Checkout Form editor, som lader dig oprette så mange formularer som helst med forskellige felter, produkter osv.

For at få adgang til denne funktion skal du gå til menuen Checkout Forms på venstre sidebjælke.

![Checkout Forms list](/img/config/checkout-forms-list.png)

På denne side kan du se alle dine checkout formularer.

Listen inkluderer en **Status** kolonne, så du kan bekræfte, om hver formular i øjeblikket er tilgængelig for kunder:

| Status | Betydning |
|---|---|
| **Aktiv** | Formular kan bruges hvor som helst, dens shortcode eller registreringsside er publiceret. |
| **Inaktiv** | Formular er gemt, men deaktiveret. Kunder kan ikke gennemføre betaling med den, før du aktiverer den igen. |

Brug statuskolonnen før du redigerer en offentlig registreringsflow, især når du bevarer udkast- eller sæsonbestemte checkout formularer sammen med dine live formularer.

Hvis du vil oprette en ny, skal du blot klikke på Tilføj Checkout Form øverst på siden.

Du kan vælge en af disse tre muligheder som dit udgangspunkt: enkelt trin, flere trin eller tom. Klik derefter for at gå til Editoren.

Når du vælger **enkelt trin** eller **flere trin** som dit udgangspunkt, inkluderer formular-skabelonen nu automatisk et felt til **Template Selection**. Dette felt lader dine kunder vælge en siteskabelon under registreringsprocessen. Du kan lade den stå, fjerne den eller flytte den som ethvert andet felt i editoren.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternativ kan du redigere eller duplikere de formularer, du allerede har, ved at klikke på mulighederne nedenfor navnet på formularen. Der finder du også muligheder for at kopiere formularens shortcode eller slette formularen.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Oversigt over Checkout Form Editor {#checkout-form-editor-overview}

Checkout form editor giver dig et omfattende interface til at bygge dine registreringsformularer. Her er et overblik over editorlayoutet:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Redigering af en Checkout Form {#editing-a-checkout-form}

Du kan oprette checkout formularer til forskellige formål. I dette eksempel arbejder vi med en registreringsformular.

Når du navigerer til checkout form editor, skal du give din formular et navn (som kun bruges til intern reference) og en slug (som bruges til at oprette shortcodes osv.).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Formularer består af trin og felter. Du kan tilføje et nyt trin ved at klikke på Tilføj nyt checkout trin (Add New Checkout Step).

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

På den første fane i modalvinduet udfylder du indholdet af dit formulartrin. Giv det et ID, et navn og en beskrivelse. Disse elementer bruges primært internt.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Næste gang sætter du synligheden for trinnet. Du kan vælge mellem "Altid vis", "Vis kun for loggede brugere" eller "Vis kun for gæster".

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Til sidst konfigurerer du trinets stil. Disse er valgfri felter.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Nu er det tid til at tilføje felter til vores første trin. Klik blot på Tilføj nyt felt (Add New Field) og vælg typen af sektion, du ønsker.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Hvert felt har forskellige parametre, der skal udfyldes. Til denne første indgang vælger vi "Brugernavn"-feltet.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Du kan tilføje så mange trin og felter som du har brug for. Til at vise dine produkter, så kunderne kan vælge et, skal du bruge feltet "Prisseddel". Hvis du vil lade dine kunder vælge en skabelon, tilføj så feltet "Skabelonvalg". Og så videre.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Bemærk:** brugernavn, e-mail, adgangskode, websitetitel, websitets URL, ordrestresumé, betaling og indsende-knappen er obligatoriske felter for at oprette en checkout form._

Mens du arbejder på din checkout form, kan du altid bruge "Forhåndsvisning"-knappen til at se, hvordan dine kunder vil se formularen. Du kan også skifte mellem visning som eksisterende bruger eller besøgende.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Til sidst, i "Avancerede muligheder", kan du konfigurere beskeden til "Tak"-siden, tilføje snippets til at spore konverteringer, tilføje custom CSS til din checkout form eller begrænse den til bestemte lande.

![Advanced Options](/img/config/checkout-form-advanced.png)

Du kan også manuelt aktivere eller deaktivere din checkout form ved at slå denne mulighed i højre kolonne til, eller permanent slette formularen.

![Active toggle](/img/config/checkout-form-active.png)

For at slette en formular, klik på slet-muligheden i formularens handlinger:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Glem ikke at gemme din checkout-formular!

![Save button](/img/config/checkout-form-save.png)

For at få dit forms shortcode skal du klikke på Generer Shortcode og kopiere resultatet, der vises i modalvinduet.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Feltet Prissedataene {#the-pricing-table-field}

Feltet **Prissedataene** viser dine produkter på checkout-formularen, så kunder kan vælge en plan. Når du redigerer dette felt, kan du konfigurere flere muligheder:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Her er hvordan prissedataene vises på registreringsformularen i frontenden:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Produkter**: Vælg, hvilke produkter der skal vises og rækkefølgen, de optræder i.
  * **Tving forskellige varigheder**: Når dette er aktiveret, vises alle produkter uanset om de har en matchende prisvariation for den i øjeblikket valgte faktureringsperiode. Når det er deaktiveret (standard), skjules produkter uden variation for den valgte periode.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Skjul når forudvalgt**: Skjuler prissedataene, når en plan allerede er blevet valgt via URL'en (f.eks. `/register/premium`).
  * **Prissedatabladstabel**: Vælg det visuelle skabelon til prissedata-tabellen (Simpel Liste, Legacy osv.).

Hvis du tilføjer et produkt til Prissedataene, før formularen indeholder de felter, der kræves for at gennemføre den pågældende produkts checkout-flow, viser redaktøren nu en advarsel. Brug advarslen til at tilføje det manglende nødvendige felt, før du udgiver eller gemmer ændringer til en aktiv registreringsform.

### Tilføj en valgmulighed til periodevalg {#adding-a-period-selection-toggle}

Hvis du har opsat [Price Variations](creating-your-first-subscription-product#price-variations) på dine produkter (f.eks. månedlig og årlig pris), kan du tilføje et **Periodevalg** felt til dit kasseformular. Dette felt viser en toggle, som giver kunder mulighed for at skifte mellem betalingsperioder, og prisseddelen opdateres dynamisk i realtid.

#### Trin 1: Opsæt Price Variations på dine produkter {#step-1-set-up-price-variations-on-your-products}

Før du tilføjer Periodevalg-feltet, skal du sikre dig, at dine produkter har price variations konfigureret. Gå til **Ultimate Multisite > Products**, rediger et produkt og gå til fanen **Price Variations** for at tilføje alternative betalingsperioder (f.eks. Årlig til en nedsat pris).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Trin 2: Tilføj Periodevalg-feltet til dit kasseformular {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Gå til **Ultimate Multisite > Checkout Forms** og rediger din kasseformular.

2. Scroll ned til trinnet, der indeholder dit felt med **Pricing Table**, og klik på **Add new Field**.

3. I dialogboksen til valg af felt-type skal du vælge **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfigurer de perioder, du ønsker at tilbyde. Hvert valg skal have:
   * **Duration**: Antallet (f.eks. `1`)
   * **Duration unit**: Periode-typen (Dage, Uger, Måneder eller År)
   * **Label**: Teksten kunderne vil se (f.eks. "Månedlig", "Årlig")

5. Klik på **+ Add Option** for at tilføje flere valgmuligheder. Disse muligheder skal matche de price variations, du har konfigureret på dine produkter.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Vælg en **Period Selector Template** (Clean er standardvalget og genererer en simpel stiliseret selector klar til custom CSS).

7. Klik på **Gem felt**.

#### Trin 3: Placér feltet over prislisten {#step-3-position-the-field-above-the-pricing-table}

For den bedste brugeroplevelse skal du sikre dig, at Feltet til valg af periode vises **før** Prislisten-feltet i dit kasse trin. Du kan trække felter for at ændre rækkefølgen i kassen formularredigereren. På denne måde vælger kunder først en faktureringsperiode og ser derefter priser for den pågældende periode.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Sådan fungerer det i frontend {#how-it-works-on-the-frontend}

Når det er konfigureret, vil kunder, der besøger din registreringsside, se periodeselektoren over prislisten. Når de klikker på en anden faktureringsperiode:

  * Prislisten opdateres øjeblikkeligt for at vise priserne for den valgte periode (ingen genindlæsning af siden er nødvendig).
  * Hvis **Force Different Durations** er deaktiveret på Prislisten-feltet, vil produkter uden prisvariation for den valgte periode blive skjult.
  * Hvis **Force Different Durations** er aktiveret, forbliver alle produkter synlige, selvom de ikke har en variation for den valgte periode (de vil vise deres standardpris).

#### Forudvalg af en faktureringsperiode via URL'en {#pre-selecting-a-billing-period-via-url}

Du kan også forudvælge et produkt og en faktureringsperiode gennem URL'en. Ultimate Multisite understøtter disse URL-mønstre:

  * `/register/premium` — Vælger kun "Premium" produktet som standard
  * `/register/premium/12` — Vælger produktet og 12 måneders varighed
  * `/register/premium/1/year` — Vælger produktet med en 1-årig varighed

### Feltet til skabelonvalg {#the-template-selection-field}

**Skabelonvalgsfeltet** lader kunder vælge en sideskabelon under kassen. Det er nu inkluderet som standard i både **single step** og **multi-step** kasseformularskabelonerne, der tilføjes i Ultimate Multisite v2.6.1.

#### Tilføj feltet manuelt {#adding-the-field-manually}

Hvis du arbejder med en formular, der blev oprettet før v2.6.1, eller startede fra en tom skabelon:

1. Gå til **Ultimate Multisite > Checkout Forms** og rediger din checkout-formular.
2. I trinnet, hvor sites detaljer indsamles, klik på **Tilføj nyt felt**.
3. Vælg **Template Selection** i dialogboksen for feltindstillingstype.
4. Konfigurer feltet:
   - **Label** — Overskriften, som kunder ser over skabelon-gitteret (f.eks. "Vælg en siteskabelon").
   - **Required** — Om kunder skal vælge en skabelon, før de kan fortsætte.

#### Sådan fungerer det {#how-it-works}

Når en kunde vælger en skabelon under checkout, bruger Ultimate Multisite den til at opsætte deres nye site. De viste skabeloner kommer fra din liste over **Site Templates** (**Ultimate Multisite > Site Templates**). Kun skabeloner markeret som tilgængelige for kunder vises her.

### Checkout-formular basedomæner {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 behandler domæner konfigureret i felterne **Site URL** på checkout-formularen som netværksbasedomæner. Brug feltets indstillinger for tilgængelige domæner, når du ønsker, at kunder skal oprette sites under én eller flere delte registreringsdomæner, såsom `example.com` og `sites.example.com`.

Delte checkout-formular basedomæner behandles ikke som per-site custom domain mappings (tilpasninger af domænen). Når en kunde opretter et undermappe site på en af disse baser, opretter Ultimate Multisite ikke en mapped-domain-post, der ville få den delte host til kun at tilhøre det ene site. Den delte host forbliver tilgængelig for søskende sites, der bruger samme checkout-formular base.

Bevar custom domæner til per-kunde mappede hosts, såsom `customer-example.com`. Bevar checkout-formular basedomæner til delte registreringshosts, som mange sites kan bruge.

#### Fjerne feltet {#removing-the-field}

Hvis du ikke tilbyder websitetemplates, fjern derefter feltet "Template Selection" fra dit formular. Kunden vil da modtage det standard-template, der er konfigureret under **Ultimate Multisite > Settings > Site Templates**.
