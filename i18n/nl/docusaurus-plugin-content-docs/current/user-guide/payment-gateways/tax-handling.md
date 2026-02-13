---
title: Belastingverwerking
sidebar_position: 4
_i18n_hash: 087a366fc43cafff9e887f68e71e23fe
---
# Belastingbeheer

Ultimate Multisite heeft een belastingverzamelingsmodule ingebouwd in onze core plugin, dus als je omzetbelasting wilt innen op je plannen, pakketten en diensten, kun je dit gemakkelijk doen zonder add-ons te installeren.

Voor bedrijven gevestigd in Europa bieden we een **add-on** die tools en functies toevoegt om beter te **ondersteunen bij de BTW**-naleving.

Ultimate Multisite doet geen aangifte of afdracht van belastingen namens u bij de overheid; we helpen u gewoon om de juiste belastingen te innen op het moment van de transactie. **U moet de belastingen nog steeds zelf afdragen.**

## Belastingverzameling inschakelen

Belastingverzameling is standaard niet ingeschakeld. Om het in te schakelen, moet je naar **Ultimate Multisite > Settings > Taxes** gaan en de schakelaar voor 'Enable Taxes' inschakelen.

![Enable Taxes toggle in tax settings](/img/config/settings-taxes.png)

### Belasting uitgesloten vs. Belasting inbegrepen

Standaard zijn alle productprijzen exclusief belasting, wat betekent dat belastingen **niet zijn inbegrepen** in de prijs van het product. Als we bepalen dat een klant belasting moet betalen over een bepaalde aankoop, voegen we de belastingen **bovenop** het subtotaal toe.

Als je liever hebt dat belastingen zijn inbegrepen in de prijs van je product, kun je dit doen door de instelling **Inclusive Tax** in te schakelen.

![Inclusive Tax setting toggle](/img/config/settings-taxes.png)

Vergeet niet om de gemaakte wijzigingen **op te slaan**.

## Belastingtarieven aanmaken

Nadat je Belastingverzameling hebt ingeschakeld, moet je belastingtarieven voor specifieke locaties aanmaken met onze belastingtarieven-editor.

Je kunt de editor openen door op de knop **Manage Tax Rates** in de zijbalk van de belastinginstellingenpagina te klikken.

![Manage Tax Rates button on the sidebar](/img/config/settings-taxes.png)

Op de pagina met belastingtarieven-editor kun je nieuwe belastingtarieven toevoegen door op de knop **Add new Row** te klikken.

![Tax rates editor with Add new Row button](/img/config/settings-taxes.png)

Je moet elk belastingtarief een **titel** geven (gebruikt op facturen). Vervolgens kun je het **land** (verplicht), de **staat** en de **stad** (beide optioneel) kiezen waar deze belasting wordt geheven. Ten slotte voeg je het **belastingtarief in procenten** toe.

### Belastingcategorieën

Je kunt ook meerdere Belastingcategorieën aanmaken om verschillende belastingtarieven toe te voegen voor verschillende soorten producten.

Klik op **Add new Tax Category**, typ vervolgens de naam van je categorie en druk op **Create**.

![Add new Tax Category button](/img/config/settings-taxes.png)

![Creating a new tax category](/img/config/settings-taxes.png)

Om door categorieën te bladeren, klik op **Switch** en selecteer de categorie waaraan je nieuwe belastingen wilt toevoegen.

![Switch between tax categories](/img/config/settings-taxes.png)

![Selecting a tax category to view](/img/config/settings-taxes.png)

Je kunt de belastingcategorie voor een bepaald product instellen door naar de **Product edit page** te gaan en vervolgens naar het tabblad Belasting.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Op hetzelfde scherm kun je de schakelaar **Is Taxable?** uitschakelen om Ultimate Multisite te laten weten dat het geen belasting moet innen op dat specifieke product.

## Europese BTW-ondersteuning

Zoals eerder vermeld, hebben we een add-on beschikbaar voor klanten in de EU die extra vereisten hebben vanwege de Europese BTW-regelgeving.

Onze BTW-tools helpen bij een aantal belangrijke zaken:

- Eenvoudig laden van EU-BTW-tarieven;
- BTW-nummerverzameling en -validatie - en omgekeerde belastingheffing voor BTW-vrijgestelde entiteiten (zoals bedrijven met geldige BTW-nummers);

Om die add-on te installeren, ga je naar **Ultimate Multisite > Settings** en klik je vervolgens op de link **Check our Add-ons** in de zijbalk.

![Settings page with add-ons sidebar link](/img/config/settings-taxes.png)

Je wordt doorgestuurd naar onze add-ons-pagina. Daar kun je zoeken naar de **Ultimate Multisite VAT add-on** en deze installeren.

![VAT add-on on the add-ons page](/img/config/settings-taxes.png)

![VAT add-on install dialog](/img/config/settings-taxes.png)

Ga vervolgens naar **Network Admin > Plugins** en activeer die add-on netwerkbreed.

![Network Activate the VAT add-on](/img/config/settings-taxes.png)

Als je teruggaat naar het tabblad **Tax Settings**, zie je nieuwe opties beschikbaar. Schakel de optie **Enable VAT Support** in om de nieuwe BTW-tools in te schakelen. Vergeet niet om je instellingen **op te slaan**!

![Enable VAT Support toggle in tax settings](/img/config/settings-taxes.png)

### Laden van BTW-tarieven

Een van de tools die onze integratie toevoegt, is het vermogen om de belastingtarieven voor EU-lidstaten te laden. Dit kan worden gedaan door de pagina met belastingtarieven-editor te bezoeken nadat EU-BTW-ondersteuning is ingeschakeld.

Onderaan de pagina zie je de BTW-ladenopties. Door een tarieftype te selecteren en op de knop **Update EU VAT Rates** te klikken, worden de belastingtarieven voor elke EU-lidstaat opgehaald en automatisch ingevuld in de tabel. Vervolgens hoef je het alleen nog op te slaan.

### ![VAT rates pulling options with Update EU VAT Rates button](/img/config/settings-taxes.png)

Je kunt de waarden ook bewerken nadat je ze hebt opgehaald. Om dit te doen, bewerk je eenvoudig de tabelregel die je nodig hebt en klik je op opslaan om de nieuwe waarden op te slaan.

### BTW-validatie

Wanneer BTW-ondersteuning is ingeschakeld, voegt Ultimate Multisite een extra veld toe aan het afrekenformulier, onder het factuuradresveld. Het veld verschijnt alleen voor klanten die zich in de EU bevinden.

![VAT number field on the checkout form](/img/config/settings-taxes.png)

Ultimate Multisite valideert vervolgens het BTW-nummer en als het als geldig wordt teruggegeven, wordt het omgekeerde belastingheffingsmechanisme toegepast en wordt het belastingtarief op die bestelling op 0% ingesteld.
