---
title: Belastingafhandeling
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Belastingafhandeling {#tax-handling}

Ultimate Multisite heeft een module voor belastinginning ingebouwd in onze core plugin, dus als je verkoopbelastingen op je plannen, pakketten en diensten moet innen, kun je dat eenvoudig doen zonder add-ons te hoeven installeren.

Voor bedrijven in Europa bieden we een **uitbreiding** die tools en functies toevoegt om naleving van **btw** beter te ondersteunen.

Ultimate Multisite dient geen belastingen in en draagt geen belastingen namens jou af aan de overheid; we helpen je simpelweg de juiste belastingen te innen op het moment van de transactie. **Je moet belastingen nog steeds zelf afdragen.**

## Belastinginning inschakelen {#enabling-tax-collection}

Belastinginning is standaard niet ingeschakeld. Om dit in te schakelen, ga je naar **Ultimate Multisite > Instellingen > Belastingen** en zet je de instelling Belastingen inschakelen aan.

![Schakelaar Belastingen inschakelen bovenaan de pagina met belastinginstellingen](/img/config/settings-taxes-enable.png)

Hier is een volledige weergave van de pagina met belastinginstellingen:

![Volledige pagina met belastinginstellingen](/img/config/settings-taxes-full.png)

Je kunt ook de belastinginstellingen voor individuele producten bekijken:

![Belastinginstellingen voor producten](/img/config/settings-taxes.png)

### Exclusief belasting vs. inclusief belasting {#tax-excluded-vs-tax-included}

Standaard zijn al je productprijzen exclusief belasting, wat betekent dat belastingen **niet zijn inbegrepen** in de prijs van het product. Als we bepalen dat een klant belasting moet betalen over een bepaalde aankoop, voegen we de belastingen **boven op** het subtotaal toe.

Als je liever wilt dat belastingen zijn inbegrepen in de prijs van je product, kun je dat doen door de instelling **Inclusieve belasting** in te schakelen.

![Rij met schakelaar Inclusieve belasting onder de instelling Belastingen inschakelen](/img/config/settings-taxes-inclusive.png)

Vergeet niet de wijzigingen die je hebt aangebracht **op te slaan**.

###

## Belastingtarieven aanmaken {#creating-tax-rates}

Nadat je belastinginning hebt ingeschakeld, moet je belastingtarieven voor specifieke locaties aanmaken met onze editor voor belastingtarieven.

Je kunt de editor openen door op de knop **Belastingtarieven beheren** in de zijbalk van de pagina met belastinginstellingen te klikken.

![Link Belastingtarieven beheren in het paneel Belastingtarieven op de instellingenpagina](/img/config/settings-taxes-manage-rates.png)

Op de editorpagina voor belastingtarieven kun je nieuwe belastingtarieven toevoegen door op de knop **Nieuwe rij toevoegen** te klikken.

![Editortabel voor belastingtarieven met knop Nieuwe rij toevoegen bovenaan](/img/config/tax-rates-editor.png)

Je moet elk belastingtarief een **titel** geven (gebruikt op facturen). Daarna kun je het **land** (vereist), de **staat/provincie,** en de **stad** (beide optioneel) kiezen waar deze belasting in rekening wordt gebracht. Voeg ten slotte het **belastingtarief in procenten** toe.

### Belastingcategorieën {#tax-categories}

Je kunt ook meerdere belastingcategorieën aanmaken om verschillende belastingtarieven voor verschillende soorten producten toe te voegen.

Klik op **Nieuwe belastingcategorie toevoegen** , schrijf vervolgens de naam van je categorie en druk op **Aanmaken**.

![Knop Nieuwe belastingcategorie toevoegen bovenaan de editor voor belastingtarieven](/img/config/tax-categories-add.png)

![Invoerveld Naam belastingcategorie in de modal voor categorie aanmaken](/img/config/tax-categories-create-modal.png)

Om door categorieën te bladeren, klik je op **Wisselen** en selecteer je de categorie waaraan je nieuwe belastingen wilt toevoegen.

![Dropdownknop Wisselen om tussen belastingcategorieën te wisselen](/img/config/tax-categories-switch.png)

![Dropdown voor belastingcategorieselectie met beschikbare categorieën](/img/config/tax-categories-select.png)

Je kunt de belastingcategorie voor een bepaald product instellen door naar de **Productbewerkingspagina** te gaan en vervolgens naar het tabblad Belastingen.

![Tabblad Productbelastingen met belastingcategorie en belastbaar-schakelaar](/img/config/product-taxes.png)

Op datzelfde scherm kun je de schakelaar **Is belastbaar?** uitzetten om Ultimate Multisite te laten weten dat het geen belastingen op dat bepaalde product moet innen.

## Europese btw-ondersteuning {#european-vat-support}

Zoals eerder vermeld, hebben we een uitbreiding beschikbaar voor klanten in de EU die aanvullende vereisten hebben vanwege Europese btw-regelgeving.

Onze btw-tools helpen met een paar belangrijke zaken:

  * Eenvoudig laden van EU-btw-tarieven;

  * Verzamelen en valideren van btw-nummers - en verlegging van btw voor vrijgestelde entiteiten (zoals bedrijven met geldige btw-nummers);

Om die uitbreiding te installeren, ga je naar **Ultimate Multisite > Instellingen** en klik je vervolgens op de zijbalklink **Bekijk onze uitbreidingen**.

![Zijbalk van instellingenpagina met link Bekijk onze uitbreidingen](/img/config/settings-taxes-addons-link.png)

Je wordt doorgestuurd naar onze uitbreidingenpagina. Daar kun je zoeken naar de **Ultimate Multisite btw-uitbreiding** en deze installeren.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Ga vervolgens naar **Netwerkbeheer > Plugins** en activeer die uitbreiding netwerkbreed.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Als je teruggaat naar het **tabblad Belastinginstellingen** , zie je nieuwe opties beschikbaar. Zet de optie **Btw-ondersteuning inschakelen** aan om de nieuwe btw-tools in te schakelen. Vergeet niet je instellingen **op te slaan**!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Btw-belastingtarieven ophalen {#pulling-on-vat-tax-rates}

Een van de tools die onze integratie toevoegt, is de mogelijkheid om de belastingtarieven voor EU-lidstaten te laden. Dat kan door de editorpagina voor belastingtarieven te bezoeken nadat je EU-btw-ondersteuning hebt ingeschakeld.

Onderaan de pagina zie je de opties voor het ophalen van btw. Door een tarieftype te selecteren en op de knop **EU-btw-tarieven bijwerken** te klikken, wordt de tabel opgehaald en automatisch gevuld met de belastingtarieven voor elke EU-lidstaat. Daarna hoef je deze alleen nog maar op te slaan.

![Knop EU-btw-tarieven bijwerken onderaan de editor voor belastingtarieven](/img/config/tax-rates-vat-pull.png)

Je kunt de waarden ook bewerken nadat je ze hebt opgehaald. Om dat te doen, bewerk je eenvoudig de tabelregel die je nodig hebt en klik je om de nieuwe waarden op te slaan.

### Btw-validatie {#vat-validation}

Wanneer btw-ondersteuning is ingeschakeld, voegt Ultimate Multisite een extra veld toe aan het checkout-formulier, onder het veld voor het factuuradres. Het veld wordt alleen weergegeven voor klanten in de EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite valideert dan het btw-nummer en als dit als geldig terugkomt, wordt de verleggingsregeling toegepast en wordt het belastingtarief op 0% ingesteld voor die bestelling.
