---
title: Afrekenformulieren
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkoutformulieren {#checkout-forms}

Checkoutformulieren zijn een eenvoudige en flexibele manier om te experimenteren met verschillende benaderingen wanneer je nieuwe klanten probeert te converteren.

Ultimate Multisite 2.0 biedt een editor voor Checkoutformulieren waarmee je zoveel formulieren kunt maken als je wilt, met verschillende velden, aangeboden producten, enz.

Ga naar het menu Checkout Forms in de linkerzijbalk om deze functie te openen.

![Lijst met Checkoutformulieren](/img/config/checkout-forms-list.png)

Op deze pagina kun je alle checkoutformulieren zien die je hebt.

De lijsttabel bevat een kolom **Status**, zodat je kunt bevestigen of elk formulier momenteel beschikbaar is voor klanten:

| Status | Betekenis |
|---|---|
| **Active** | Het formulier kan overal worden gebruikt waar de shortcode of registratiepagina ervan is gepubliceerd. |
| **Inactive** | Het formulier is opgeslagen maar uitgeschakeld. Klanten kunnen de checkout er niet mee voltooien totdat je het weer inschakelt. |

Gebruik de statuskolom voordat je een openbare registratiestroom bewerkt, vooral wanneer je concept- of seizoensgebonden checkoutformulieren naast je live formulieren bewaart.

Als je een nieuwe wilt maken, klik je gewoon op Add Checkout Form bovenaan de pagina.

Je kunt een van deze drie opties als startpunt selecteren: één stap, meerstaps of leeg. Klik daarna op Go to the Editor.

Wanneer je **single step** of **multi-step** als startpunt kiest, bevat de formsjabloon nu standaard een **Template Selection**-veld. Met dit veld kunnen je klanten tijdens het registratieproces een sitesjabloon kiezen. Je kunt het laten staan, verwijderen of verplaatsen zoals elk ander veld in de editor.

![Checkout Form-editor](/img/config/checkout-form-editor.png)

Je kunt ook de formulieren die je al hebt bewerken of dupliceren door op de opties onder de naam te klikken. Daar vind je ook de opties om de shortcode van het formulier te kopiëren of om het formulier te verwijderen.

![Checkout form-hoveracties](/img/config/checkout-form-hover-actions.png)

#### Overzicht van de Checkout Form-editor {#checkout-form-editor-overview}

De checkout form-editor biedt een uitgebreide interface voor het bouwen van je registratieformulieren. Hier is een overzicht van de editorindeling:

![Overzicht van de Checkout Form-editor](/img/config/checkout-form-editor-overview.png)

### Een Checkout Form bewerken {#editing-a-checkout-form}

Je kunt checkout forms maken voor verschillende doeleinden. In dit voorbeeld werken we aan een registratieformulier.

Nadat je naar de checkout form-editor bent gegaan, geef je je formulier een naam (die alleen voor interne referentie wordt gebruikt) en een slug (bijvoorbeeld gebruikt om shortcakes te maken).

![Checkout Form-editor](/img/config/checkout-form-editor.png)

Formulieren bestaan uit stappen en velden. Je kunt een nieuwe stap toevoegen door op Add New Checkout Step te klikken.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Op het eerste tabblad van het modale venster vul je de inhoud van de stap van je formulier in. Geef deze een ID, een naam en een beschrijving. Deze items worden meestal intern gebruikt.

![Inhoudstabblad van afrekenformulierstap](/img/config/checkout-form-step-content.png)

Stel vervolgens de zichtbaarheid van de stap in. Je kunt kiezen tussen "Altijd tonen", "Alleen tonen voor ingelogde gebruikers" of "Alleen tonen voor gasten".

![Zichtbaarheidstabblad van afrekenformulierstap](/img/config/checkout-form-step-visibility.png)

Configureer ten slotte de stijl van de stap. Dit zijn optionele velden.

![Stijltabblad van afrekenformulierstap](/img/config/checkout-form-step-style.png)

Nu is het tijd om velden toe te voegen aan onze eerste stap. Klik gewoon op Nieuw veld toevoegen en selecteer het type sectie dat je wilt.

![Afrekenformulierstap met velden](/img/config/checkout-form-step-with-fields.png)

Elk veld heeft verschillende parameters die moeten worden ingevuld. Voor deze eerste invoer selecteren we het veld "Gebruikersnaam".

![Dropdown voor selectie van veldtype](/img/config/checkout-form-field-type-dropdown.png)

![Inhoudsinstellingen van gebruikersnaamveld](/img/config/checkout-form-username-content.png)

![Zichtbaarheidsinstellingen van gebruikersnaamveld](/img/config/checkout-form-username-visibility.png)

![Stijlinstellingen van gebruikersnaamveld](/img/config/checkout-form-username-style.png)

Je kunt zoveel stappen en velden toevoegen als je nodig hebt. Om je producten weer te geven zodat je klanten er een kunnen kiezen, gebruik je het Prijstabel-veld. Als je je klanten een sjabloon wilt laten kiezen, voeg je het Sjabloonselectie-veld toe. Enzovoort.

![Dialoogvenster Nieuw veld toevoegen](/img/config/checkout-form-add-field-dialog.png)

_**Opmerking:** gebruikersnaam, e-mail, wachtwoord, site-titel, site-URL, besteloverzicht, betaling en verzendknop zijn verplichte velden om een checkout-formulier te maken._

Terwijl je aan je checkout-formulier werkt, kun je altijd de Preview-knop gebruiken om te zien hoe je clients het formulier zullen zien. Je kunt ook wisselen tussen weergeven als bestaande gebruiker of als bezoeker

![Preview-knop van checkout-formulier](/img/config/checkout-form-preview-button.png)

![Preview-modal van checkout-formulier](/img/config/checkout-form-preview-modal.png)

Tot slot kun je bij Advanced Options het bericht voor de "Thank You"-pagina configureren, snippets toevoegen om conversies bij te houden, custom CSS aan je checkout-formulier toevoegen of het beperken tot bepaalde landen.

![Advanced Options](/img/config/checkout-form-advanced.png)

Je kunt je checkout-formulier ook handmatig inschakelen of uitschakelen door deze optie in de rechterkolom om te zetten, of het formulier permanent verwijderen.

![Active-schakelaar](/img/config/checkout-form-active.png)

Om een formulier te verwijderen, klik je op de verwijderoptie in de formulieracties:

![Verwijderoptie voor checkout-formulier](/img/config/checkout-form-delete.png)

Vergeet niet je checkout-formulier op te slaan!

![Opslaan-knop](/img/config/checkout-form-save.png)

Om de shortcode van je formulier te krijgen, klik je op Generate Shortcode en kopieer je het resultaat dat in het modalvenster wordt weergegeven.

![Opslaan-knop met shortcode](/img/config/checkout-form-save.png)

### Het veld Pricing Table {#the-pricing-table-field}

Het veld **Pricing Table** toont je producten op het afrekenformulier zodat klanten een abonnement kunnen kiezen. Wanneer je dit veld bewerkt, kun je verschillende opties configureren:

![Instellingen van het Pricing Table-veld](/img/config/pricing-table-field-settings.png)

Zo verschijnt de prijstabel op het frontend registratieformulier:

![Frontend afrekenprijstabel](/img/config/frontend-checkout-pricing-table.png)

  * **Producten**: Selecteer welke producten worden weergegeven en in welke volgorde ze verschijnen.
  * **Force Different Durations**: Wanneer ingeschakeld, worden alle producten getoond, ongeacht of ze een overeenkomende prijsvariatie hebben voor de momenteel geselecteerde factureringsperiode. Wanneer uitgeschakeld (standaard), worden producten zonder variatie voor de geselecteerde periode verborgen.
    ![Optie Pricing Table Force Different Durations](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected**: Verbergt de prijstabel wanneer er al een abonnement via de URL is geselecteerd (bijv. `/register/premium`).
  * **Pricing Table Template**: Kies de visuele template voor de prijstabel (Simple List, Legacy, enz.).

Als je een product toevoegt aan de Pricing Table voordat het formulier de velden bevat die vereist zijn om de checkout-flow van dat product te voltooien, toont de editor nu een waarschuwing. Gebruik de waarschuwing om het ontbrekende verplichte veld toe te voegen voordat je wijzigingen publiceert of opslaat voor een live registratieformulier.

### Een periodekeuze-toggle toevoegen {#adding-a-period-selection-toggle}

Als je [Price Variations](creating-your-first-subscription-product#price-variations) op je producten hebt geconfigureerd (bijv. maandelijkse en jaarlijkse prijzen), kun je een **Period Selection**-veld toevoegen aan je checkout-formulier. Dit veld toont een schakelaar waarmee klanten kunnen wisselen tussen factureringsperioden, en de prijstabel wordt dynamisch in realtime bijgewerkt.

#### Stap 1: Stel Price Variations in op je producten {#step-1-set-up-price-variations-on-your-products}

Voordat je het Period Selection-veld toevoegt, moet je ervoor zorgen dat je producten price variations geconfigureerd hebben. Ga naar **Ultimate Multisite > Products**, bewerk een product en navigeer naar het tabblad **Price Variations** om alternatieve factureringsperioden toe te voegen (bijv. Jaarlijks tegen een gereduceerde prijs).

![Price Variations-tabblad op een product](/img/config/product-price-variations-tab.png)

#### Stap 2: Voeg het Period Selection-veld toe aan je checkout-formulier {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Ga naar **Ultimate Multisite > Checkout Forms** en bewerk je checkout-formulier.

2. Scrol omlaag naar de stap die je **Pricing Table**-veld bevat en klik op **Add new Field**.

3. Klik in het dialoogvenster voor veldtypeselectie op **Period Select**.

![Dialoogvenster Add New Field met Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Configureer de periode-opties. Elke optie heeft nodig:
   * **Duration**: Het getal (bijv. `1`)
   * **Duration unit**: Het periodetype (Dagen, Weken, Maanden of Jaren)
   * **Label**: De tekst die klanten zullen zien (bijv. "Maandelijks", "Jaarlijks")

5. Klik op **+ Add Option** om meer periodekeuzes toe te voegen. Deze opties moeten overeenkomen met de prijsvariaties die je op je producten hebt geconfigureerd.

![Instellingen van het veld Period Selection](/img/config/period-selection-field-settings.png)

6. Kies een **Period Selector Template** (Clean is de standaard, waarmee een eenvoudige gestileerde selector wordt weergegeven die klaar is voor aangepaste CSS).

7. Klik op **Save Field**.

#### Stap 3: Plaats het veld boven de prijstabel {#step-3-position-the-field-above-the-pricing-table}

Voor de beste gebruikerservaring moet je ervoor zorgen dat het veld Period Selection **vóór** het veld Pricing Table verschijnt in je checkout-stap. Je kunt velden verslepen om ze opnieuw te ordenen in de checkout-formuliereditor. Zo kiezen klanten eerst een factureringsperiode en zien ze daarna de prijzen voor die periode.

![Checkout-formuliereditor met veldvolgorde](/img/config/checkout-form-editor-with-fields.png)

#### Hoe het werkt op de frontend {#how-it-works-on-the-frontend}

Zodra dit is geconfigureerd, zien klanten die je registratiepagina bezoeken de periode-selector boven de prijstabel. Wanneer ze op een andere factureringsperiode klikken:

  * De prijstabel wordt direct bijgewerkt om prijzen voor de geselecteerde periode te tonen (geen paginaherlading nodig).
  * Als **Force Different Durations** is uitgeschakeld op het veld Pricing Table, worden producten zonder prijsvariatie voor de geselecteerde periode verborgen.
  * Als **Force Different Durations** is ingeschakeld, blijven alle producten zichtbaar, zelfs als ze geen variatie voor de geselecteerde periode hebben (ze tonen dan hun standaardprijs).

#### Een factureringsperiode vooraf selecteren via URL {#pre-selecting-a-billing-period-via-url}

Je kunt ook vooraf een product en factureringsperiode selecteren via de URL. Ultimate Multisite ondersteunt deze URL-patronen:

  * `/register/premium` — Selecteert alleen vooraf het product "Premium"
  * `/register/premium/12` — Selecteert vooraf het product en een duur van 12 maanden
  * `/register/premium/1/year` — Selecteert vooraf het product met een duur van 1 jaar

### Het Template Selection-veld {#the-template-selection-field}

Met het veld **Template Selection** kunnen klanten tijdens checkout een site-template kiezen. Het is nu standaard opgenomen in de checkout-formuliersjablonen voor **single step** en **multi-step** die zijn toegevoegd in Ultimate Multisite v2.6.1.

#### Het veld handmatig toevoegen {#adding-the-field-manually}

Als je werkt met een formulier dat vóór v2.6.1 is gemaakt, of bent begonnen met een leeg sjabloon:

1. Ga naar **Ultimate Multisite > Checkout Forms** en bewerk je checkout-formulier.
2. Klik in de stap waar sitegegevens worden verzameld op **Add new Field**.
3. Selecteer **Template Selection** in het dialoogvenster voor het veldtype.
4. Configureer het veld:
   - **Label** — De kop die klanten boven het template-raster zien (bijv. "Kies een site-template").
   - **Required** — Of klanten een template moeten selecteren voordat ze verdergaan.

#### Hoe het werkt {#how-it-works}

Wanneer een klant tijdens checkout een template kiest, gebruikt Ultimate Multisite dit bij het provisionen van hun nieuwe site. De getoonde templates komen uit je lijst **Site Templates** (**Ultimate Multisite > Site Templates**). Alleen templates die zijn gemarkeerd als beschikbaar voor klanten verschijnen hier.

### Basisdomeinen voor checkout-formulieren {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 behandelt domeinen die zijn geconfigureerd in checkout-formulier **Site URL**-velden als netwerkbasisdomeinen. Gebruik de instellingen voor beschikbare domeinen van het veld wanneer je wilt dat klanten sites aanmaken onder een of meer gedeelde registratiedomeinen, zoals `example.com` en `sites.example.com`.

Gedeelde basisdomeinen van checkout-formulieren worden niet behandeld als aangepaste domeinkoppelingen per site. Wanneer een klant een subdirectory-site aanmaakt op een van die basisdomeinen, maakt Ultimate Multisite geen gekoppeld-domeinrecord aan waardoor de gedeelde host alleen bij die ene site zou horen. De gedeelde host blijft beschikbaar voor verwante sites die hetzelfde basisdomein van het checkout-formulier gebruiken.

Gebruik aangepaste domeinen voor per klant gekoppelde hosts, zoals `customer-example.com`. Gebruik basisdomeinen van checkout-formulieren voor gedeelde registratiehosts die door veel sites kunnen worden gebruikt.

#### Het veld verwijderen {#removing-the-field}

Als je geen site-templates aanbiedt, verwijder dan het veld Template Selection uit je formulier. Klanten ontvangen dan de standaardtemplate die is geconfigureerd onder **Ultimate Multisite > Settings > Site Templates**.
