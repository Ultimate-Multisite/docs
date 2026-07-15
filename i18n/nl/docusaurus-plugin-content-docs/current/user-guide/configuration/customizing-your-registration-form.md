---
title: Je registratieformulier aanpassen
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Je registratieformulier aanpassen

Om je netwerk er uniek uit te laten zien ten opzichte van alle andere SaaS die op het WordPress-platform zijn gebouwd, kun je met Ultimate Multisite je registratie- en inlogpagina’s aanpassen met onze functie **Checkout Forms**.

Hoewel ze een eenvoudige en flexibele manier zijn om te experimenteren met verschillende benaderingen bij het converteren van nieuwe klanten, worden ze vooral gebruikt om gepersonaliseerde registratieformulieren te maken. Dit artikel laat zien hoe je dat kunt doen.

## Inlog- en registratiepagina’s: {#login-and-registration-pages}

Bij de installatie van Ultimate Multisite worden automatisch aangepaste inlog- en registratiepagina’s op je hoofdsite aangemaakt. Je kunt deze standaardpagina’s op elk moment wijzigen via je pagina **Ultimate Multisite > Settings > Login & Registration**.

![Instellingenpagina voor inloggen en registratie](/img/config/settings-general.png)

Hier is een volledig overzicht van de instellingenpagina voor inloggen en registratie:

![Volledige instellingenpagina voor inloggen en registratie](/img/config/settings-login-registration-full.png)

Laten we kijken naar elk van de opties die je kunt aanpassen op de pagina **Login & Registration**:

  * **Registratie inschakelen:** Met deze optie schakel je registratie op je netwerk in of uit. Als deze is uitgeschakeld, kunnen je klanten zich niet registreren en zich niet abonneren op je producten.

  * **E-mailverificatie inschakelen:** Als deze optie is ingeschakeld, ontvangen klanten die zich abonneren op een gratis abonnement of een betaald abonnement met een proefperiode een verificatie-e-mail en moeten ze op de verificatielink klikken voordat hun websites worden aangemaakt.

  * **Standaard registratiepagina:** Dit is de standaardpagina voor registratie. Deze pagina moet op je website gepubliceerd zijn en een registratieformulier bevatten (ook bekend als checkoutformulier) - waar je klanten zich op je producten abonneren. Je kunt zoveel registratiepagina’s en checkoutformulieren maken als je wilt; vergeet alleen niet de shortcode van het checkoutformulier op de registratiepagina te plaatsen, anders verschijnt het niet.

  * **Aangepaste inlogpagina gebruiken:** Met deze optie kun je een aangepaste inlogpagina gebruiken in plaats van de standaard wp-login.php-pagina. Als deze optie is ingeschakeld, kun je selecteren welke pagina wordt gebruikt voor inloggen via de optie **Default login page** (direct hieronder).

  * **De oorspronkelijke inlog-URL verbergen (wp-login.php)** : Als je de oorspronkelijke inlog-URL wilt verbergen, kun je deze optie inschakelen. Dit is handig om brute-force-aanvallen te voorkomen. Als deze optie is ingeschakeld, toont Ultimate Multisite een 404-fout wanneer een gebruiker de oorspronkelijke wp-login.php-link probeert te openen

  * **Synchrone sitepublicatie afdwingen:** Nadat een klant zich op een product in een netwerk abonneert, moet de nieuwe in behandeling zijnde site worden omgezet naar een echte netwerksite. Het publicatieproces gebeurt via Job Queue, asynchroon. Schakel deze optie in om af te dwingen dat de publicatie in hetzelfde verzoek als de aanmelding plaatsvindt.

Laten we nu andere opties bekijken die nog steeds relevant zijn voor het inlog- en registratieproces. Ze staan direct onder **Other options** op dezelfde Login & registration-pagina:

  * **Standaardrol:** Dit is de rol die je klanten op hun website hebben na het aanmeldproces.

  * **Jumper inschakelen:** Schakelt de Jumper-snelkoppeling in het beheergedeelte in. Met Jumper kunnen beheerders snel naar Ultimate Multisite-schermen, netwerkobjecten en andere ondersteunde bestemmingen springen zonder door elk menu te bladeren. Schakel dit uit als je dat snelle navigatiehulpmiddel liever uit de beheerinterface verbergt.

  * **Gebruikers ook toevoegen aan de hoofdsite:** Als je deze optie inschakelt, wordt de gebruiker na het aanmeldproces ook toegevoegd aan de hoofdsite van je netwerk. Als je deze optie inschakelt, verschijnt direct hieronder ook een optie om de **standaardrol** van deze gebruikers op je website in te stellen.

  * **Meerdere accounts inschakelen:** Sta gebruikers toe om accounts te hebben op verschillende sites van je netwerk met hetzelfde e-mailadres. Als deze optie is uitgeschakeld, kunnen je klanten geen Account aanmaken op andere websites die op je netwerk draaien met hetzelfde e-mailadres.

En dat zijn alle opties met betrekking tot inloggen en registratie die je kunt aanpassen! Vergeet niet je instellingen op te slaan nadat je klaar bent met bewerken.

## Meerdere registratieformulieren gebruiken: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 biedt een checkoutformulier-editor waarmee je zoveel formulieren kunt maken als je wilt, met verschillende velden, aangeboden producten, enzovoort.

Zowel de inlog- als de registratiepagina’s zijn ingesloten met shortcodes: **[wu_login_form]** op de inlogpagina en**[wu_checkout]** voor de registratiepagina. Je kunt de registratiepagina verder aanpassen door checkoutformulieren te bouwen of te maken.

Om deze functie te openen, ga je naar het menu **Checkout Forms** in de linkerzijbalk.

![Checkout Forms-menu in de zijbalk](/img/config/checkout-forms-list.png)

Op deze pagina kun je alle checkoutformulieren zien die je hebt.

Als je een nieuwe wilt maken, klik je gewoon bovenaan de pagina op **Add Checkout Form**.

Je kunt een van deze drie opties als startpunt selecteren: één stap, meerdere stappen of leeg. Klik daarna op **Go to the Editor**.

![Checkoutformulier toevoegen met opties voor één stap, meerdere stappen of leeg](/img/config/checkout-forms-list.png)

Je kunt ook de formulieren die je al hebt bewerken of dupliceren door op de opties onder de naam te klikken. Daar vind je ook de opties om de shortcode van het formulier te kopiëren of het formulier te verwijderen.

![Hoveracties voor checkoutformulier met bewerken, dupliceren en verwijderen](/img/config/checkout-form-hover-actions.png)

Als je één stap of meerdere stappen selecteert, is het checkoutformulier al vooraf ingevuld met de basisstappen die nodig zijn om te werken. Daarna kun je, als je wilt, extra stappen toevoegen.

### Een Checkout Form bewerken: {#editing-a-checkout-form}

Zoals we eerder noemden, kun je checkoutformulieren maken voor verschillende doeleinden. In dit voorbeeld werken we aan een registratieformulier.

Nadat je naar de checkoutformulier-editor bent gegaan, geef je je formulier een naam (die alleen voor interne referentie wordt gebruikt) en een slug (bijvoorbeeld gebruikt om shortcodes te maken).

![Checkoutformuliereditor met naam- en slugvelden](/img/config/checkout-form-name-slug.png)

Formulieren bestaan uit stappen en velden. Je kunt een nieuwe stap toevoegen door op **Add New Checkout Step** te klikken.

![Knop Add New Checkout Step](/img/config/checkout-form-add-step.png)

Vul op het eerste tabblad van het modale venster de inhoud van de stap van je formulier in. Geef deze een ID, een naam en een beschrijving. Deze items worden meestal intern gebruikt.

![Tabblad met inhoud van checkoutstap met ID, naam en beschrijving](/img/config/checkout-form-step-content.png)

Stel vervolgens de zichtbaarheid van de stap in. Je kunt kiezen tussen **Always show** , **Only show for logged in users** of **Only show for guests**.

![Zichtbaarheidsopties voor checkoutstap](/img/config/checkout-form-step-visibility.png)

Configureer ten slotte de stijl van de stap. Dit zijn optionele velden.

![Stijlconfiguratie van checkoutstap](/img/config/checkout-form-step-style.png)

Nu is het tijd om velden aan onze eerste stap toe te voegen. Klik gewoon op **Add New Field** en selecteer het type sectie dat je wilt.

![Knop Add New Field](/img/config/checkout-form-add-field-button.png)![Keuzemenu voor veldtype](/img/config/checkout-form-field-type-dropdown.png)

Elk veld heeft verschillende parameters die ingevuld moeten worden. Voor deze eerste invoer selecteren we het veld **Username**.

![Configuratie van Username-veld](/img/config/checkout-form-username-content.png)![Parameters van Username-veld](/img/config/checkout-form-username-visibility.png)![Aanvullende instellingen van Username-veld](/img/config/checkout-form-username-style.png)

Je kunt zoveel stappen en velden toevoegen als je nodig hebt. Gebruik het veld Pricing Table om je producten weer te geven zodat je klanten er één kunnen kiezen. Als je je klanten een template wilt laten kiezen, voeg dan het veld Template Selection toe. Enzovoort.

![Checkoutformuliereditor met template-selectieveld](/img/config/checkout-form-with-template-field.png)

_**Opmerking:** Als je een product aanmaakt nadat je je checkoutformulier hebt gemaakt, moet je het product toevoegen in de sectie Pricing table. Als je het niet toevoegt, verschijnt het product niet voor je klanten op de registratiepagina._

_**Opmerking 2:** gebruikersnaam, e-mail, wachtwoord, sitetitel, site-URL, besteloverzicht, betaling en verzendknop zijn verplichte velden om een checkoutformulier te maken._

Terwijl je aan je checkoutformulier werkt, kun je altijd de Preview-knop gebruiken om te zien hoe je klanten het formulier zullen zien. Je kunt ook wisselen tussen weergave als bestaande gebruiker of als bezoeker.

![Preview-knop in de checkoutformuliereditor](/img/config/checkout-form-preview-button.png)![Voorbeeld van checkoutformulier als bezoeker of bestaande gebruiker](/img/config/checkout-form-preview-modal.png)

Ten slotte kun je bij **Advanced Options** het bericht voor de **Thank You**-pagina configureren, snippets toevoegen om conversies bij te houden, aangepaste CSS aan je checkoutformulier toevoegen of het beperken tot bepaalde landen.

![Advanced Options met Thank You-pagina, conversietracking en aangepaste CSS](/img/config/checkout-form-advanced.png)

Je kunt je checkoutformulier ook handmatig inschakelen of uitschakelen door deze optie in de rechterkolom om te schakelen, of het formulier permanent verwijderen.

![Actieve schakelaar en verwijderoptie voor checkoutformulier](/img/config/checkout-form-active.png)

Vergeet niet je checkoutformulier op te slaan!

![Knop Save Checkout Form](/img/config/checkout-form-save.png)

Om de shortcode van je formulier te krijgen, klik je op **Generate Shortcode** en kopieer je het resultaat dat in het modale venster wordt getoond.

![Generate Shortcode-modal met shortcode om te kopiëren](/img/config/checkout-form-editor.png)

_**Opmerking:** Je moet deze shortcode aan je registratiepagina toevoegen om dit checkoutformulier eraan toe te voegen._

## Producten en templates vooraf selecteren via URL-parameters: {#pre-selecting-products-and-templates-via-url-parameters}

Als je aangepaste prijstabellen voor je producten wilt maken en op het checkoutformulier het product of de template die je klant kiest vanaf je prijstabel- of templatespagina vooraf wilt selecteren, kun je hiervoor URL-parameters gebruiken.

### **Voor abonnementen:** {#for-plans}

Ga naar **Ultimate Multisite > Products > Select a plan**. Je zou bovenaan de pagina de knop **Click to copy Shareable Link** moeten zien. Dit is de link die je kunt gebruiken om dit specifieke abonnement vooraf te selecteren op je checkoutformulier.

![Productpagina met knop voor deelbare link](/img/config/products-list.png)

Let op dat deze deelbare link alleen geldig is voor **Plans**. Je kunt geen deelbare links gebruiken voor pakketten of diensten.

### Voor templates: {#for-templates}

Als je site templates vooraf wilt selecteren op je checkoutformulier, kun je de parameter **?template_id=X** gebruiken in de URL van je registratiepagina. De "X" moet worden vervangen door het **ID-nummer van de site template**. Ga naar **Ultimate Multisite > Sites** om dit nummer te krijgen.

Klik op **Manage** direct onder de site template die je wilt gebruiken. Je ziet het SITE ID-nummer. Gebruik dit nummer gewoon voor deze specifieke site template om deze vooraf te laten selecteren op je checkoutformulier. In ons geval hier zou de URL-parameter **?template_id=2** zijn.

![Lijst met Sites die site template-ID toont](/img/config/site-templates-list.png)

Stel dat onze netwerkwebsite [**www.mynetwork.com**](http://www.mynetwork.com) is en onze registratiepagina met ons checkoutformulier zich op de pagina **/register** bevindt. De volledige URL met deze vooraf geselecteerde site template ziet eruit als [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

En als je wilt, kun je zowel producten als templates vooraf selecteren voor je checkoutformulier. Je hoeft alleen maar de deelbare link van het abonnement te kopiëren en de template-parameter aan het einde te plakken. Het ziet eruit als [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
