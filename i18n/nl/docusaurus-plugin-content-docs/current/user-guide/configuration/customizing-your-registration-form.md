---
title: Aanpassen van uw registratieformulier
sidebar_position: 17
_i18n_hash: f060f881656e229e05b8d6f83a85bd84
---
# Het aanpassen van je registratieformulier

Om je netwerk uniek te laten lijken ten opzichte van alle andere SaaS die op het WordPress-platform zijn gebouwd, stelt Ultimate Multisite je in staat om je registratie- en inlogpagina's aan te passen met onze functie **Checkout Forms**.

Hoewel ze een gemakkelijke en flexibele manier zijn om verschillende benaderingen uit te proberen bij het converteren van nieuwe klanten, worden ze vooral gebruikt om gepersonaliseerde registratieformulieren te maken. Dit artikel laat zien hoe je dat kunt doen.

## Login en registratiepagina's:

Bij de installatie van Ultimate Multisite worden automatisch aangepaste inlog- en registratiepagina's op je hoofdsit gemaakt. Je kunt deze standaardpagina's op elk moment wijzigen via je **Ultimate Multisite > Settings > Login & Registration** pagina.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-K3a5Ol4prD.png)

Laten we elk van de opties bekijken die je kunt aanpassen op de **Login & Registration** pagina:

  * **Enable registration:** Deze optie schakelt de registratie op je netwerk in of uit. Als deze is uitgeschakeld, kunnen je klanten zich niet registreren en abonneren op je producten.

  * **Enable email verification:** Als deze optie is ingeschakeld, ontvangen klanten die zich abonneren op een gratis plan of een betaald plan met een proefperiode een verificatie-e-mail en moeten ze op de verificatielink klikken om hun websites te laten aanmaken.

  * **Default registration page:** Dit is de standaardpagina voor registratie. Deze pagina moet gepubliceerd zijn op je website en een registratieformulier (ook bekend als checkoutformulier) bevatten - waar je klanten zich kunnen abonneren op je producten. Je kunt zo veel registratiepagina's en checkoutformulieren maken als je wilt, maar vergeet niet de shortcode van het checkoutformulier op de registratiepagina te plaatsen, anders verschijnt het niet.

  * **Use custom login page:** Deze optie laat je een aangepaste inlogpagina gebruiken, anders dan de standaard wp-login.php-pagina. Als deze optie is ingeschakeld, kun je kiezen welke pagina wordt gebruikt voor inloggen op de optie **Default login page** (rechtsonder).

  * **Obfuscate the original login url (wp-login.php)** : Als je de oorspronkelijke inlog-URL wilt verbergen, kun je deze optie inschakelen. Dit is handig om brute‑force aanvallen te voorkomen. Als deze optie is ingeschakeld, toont Ultimate Multisite een 404‑fout wanneer een gebruiker probeert de oorspronkelijke wp-login.php-link te openen.

  * **Force synchronous site publication:** Nadat een klant zich heeft geabonneerd op een product op een netwerk, moet de nieuwe wachtende site worden omgezet in een echte netwerksite. Het publicatieproces gebeurt via Job Queue, asynchroon. Schakel deze optie in om de publicatie te forceren in dezelfde aanvraag als de registratie.

Nu bekijken we andere opties die nog steeds relevant zijn voor het inlog- en registratieproces. Ze staan recht onder **Other options** op dezelfde Login & registration pagina:

  * **Default role:** Dit is de rol die je klanten op hun website krijgen na het registratieproces.

  * **Add users to the main site as well:** Het inschakelen van deze optie voegt de gebruiker ook toe aan de hoofdsit van je netwerk na het registratieproces. Als je deze optie inschakelt, verschijnt er ook een optie om de **default role** van deze gebruikers op je website in te stellen, recht hieronder.

  * **Enable multiple accounts:** Sta gebruikers toe om accounts te hebben op verschillende sites van je netwerk met hetzelfde e-mailadres. Als deze optie uitgeschakeld is, kunnen je klanten geen account aanmaken op andere websites die op je netwerk draaien met hetzelfde e-mailadres.

En dat zijn alle opties met betrekking tot inloggen en registreren die je kunt aanpassen! Vergeet niet je instellingen op te slaan nadat je klaar bent met bewerken.

## Meerdere registratieformulieren gebruiken:

Ultimate Multisite 2.0 biedt een checkoutformulier-editor waarmee je zo veel formulieren kunt maken als je wilt, met verschillende velden, aangeboden producten, enz.

Beide inlog- en registratiepagina's bevatten shortcodes: **[wu_login_form]** op de inlogpagina en **[wu_checkout]** voor de registratiepagina. Je kunt de registratiepagina verder aanpassen door checkoutformulieren te bouwen of te maken.

Om toegang te krijgen tot deze functie, ga naar het **Checkout Forms** menu, aan de linkerkant.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vvxvSRGAfu.png)

Op deze pagina zie je alle checkoutformulieren die je hebt.

Wil je er een nieuwe maken, klik dan op **Add Checkout Form** bovenaan de pagina.

Je kunt een van deze drie opties kiezen als startpunt: single step, multi-step of blank. Klik vervolgens op **Go to the Editor**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OVx7AlxoX5.png)

Je kunt ook de formulieren die je al hebt bewerken of dupliceren door op de opties onder de naam te klikken. Daar vind je ook de opties om de shortcode van het formulier te kopiëren of het formulier te verwijderen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LdsdAu67WF.png)

Als je single step of multi-step kiest, wordt het checkoutformulier al vooraf ingevuld met de basisstappen om te werken. Vervolgens kun je, indien gewenst, extra stappen toevoegen.

### Een checkoutformulier bewerken:

Zoals we eerder al zeiden, kun je checkoutformulieren maken voor verschillende doeleinden. In dit voorbeeld werken we aan een registratieformulier.

Na het navigeren naar de checkoutformulier-editor, geef je het formulier een naam (die alleen intern wordt gebruikt) en een slug (bijvoorbeeld om shortcodes te maken).

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RvbtUn4r3w.png)

Formulieren bestaan uit stappen en velden. Je kunt een nieuwe stap toevoegen door op **Add New Checkout Step** te klikken.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9Wgpw8DTj9.png)

Op het eerste tabblad van het modale venster vul je de inhoud van de stap van je formulier in. Geef het een ID, een naam en een beschrijving. Deze items worden voornamelijk intern gebruikt.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-lr6RKlgll1.png)

Stel vervolgens de zichtbaarheid van de stap in. Je kunt kiezen tussen **Always show**, **Only show for logged in users** of **Only show for guests**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-0Q6LxP9E90.png)

Ten slotte configureer je de stijl van de stap. Dit zijn optionele velden.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WmBuHXYH7N.png)

Nu is het tijd om velden toe te voegen aan onze eerste stap. Klik op **Add New Field** en selecteer het type sectie dat je wilt.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vM8n8QuTzk.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HkNUp6cWRG.png)

Elk veld heeft verschillende parameters om in te vullen. Voor deze eerste invoer kiezen we het **Username** veld.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PFaP6RufZU.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U6Mm10qIeF.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Lr1mEi1DlH.png)

Je kunt zo veel stappen en velden toevoegen als je nodig hebt. Om je producten voor je klanten zichtbaar te maken zodat ze er een kunnen kiezen, gebruik je het Pricing Table veld. Als je wilt dat je klanten een sjabloon kiezen, voeg je het Template Selection veld toe. En zo verder.

_**Opmerking:** Als je een product maakt na het maken van je checkoutformulier, moet je het product toevoegen in de Pricing table sectie. Als je het niet toevoegt, verschijnt het product niet bij je klanten op de registratiepagina._

_**Opmerking 2:** username, email, password, site title, site URL, order summary, payment, en submit button zijn verplichte velden om een checkoutformulier te maken._

Terwijl je aan je checkoutformulier werkt, kun je altijd de Preview-knop gebruiken om te zien hoe je klanten het formulier zien. Je kunt ook wisselen tussen weergave als bestaande gebruiker of bezoeker.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-3zPxZNqzkG.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YXZp7n5Nuw.png)

Ten slotte kun je op **Advanced Options** het bericht voor de **Thank You** pagina configureren, snippets toevoegen om conversies te volgen, aangepaste CSS toevoegen aan je checkoutformulier of het beperken tot bepaalde landen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TVQ9EUbGJ6.png)

Je kunt je checkoutformulier ook handmatig inschakelen of uitschakelen door deze optie in de rechterkolom in te schakelen, of het formulier permanent verwijderen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-N5wdel1IIp.png)

Vergeet niet je checkoutformulier op te slaan!

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rJPV89yQZt.png)

Om de shortcode van je formulier te krijgen, klik op **Generate Shortcode** en kopieer het resultaat dat in het modale venster wordt weergegeven.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RTJclNTnJZ.png)

_**Opmerking:** Je moet deze shortcode toevoegen aan je registratiepagina om dit checkoutformulier toe te voegen._

## Producten en sjablonen vooraf selecteren via URL‑parameters:

Als je aangepaste prijstabellen voor je producten wilt maken en vooraf het product of sjabloon op het checkoutformulier wilt selecteren dat je klant kiest uit je prijstabel of sjabloonpagina, kun je URL‑parameters gebruiken hiervoor.

### **Voor plannen:**

Ga naar **Ultimate Multisite > Products > Select a plan**. Je zou de knop **Click to copy Shareable Link** bovenaan de pagina moeten zien. Dit is de link die je kunt gebruiken om dit specifieke plan vooraf te selecteren op je checkoutformulier.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bUyOlBEfNj.png)

Let op dat deze shareable link alleen geldig is voor **Plans**. Je kunt shareable links niet gebruiken voor pakketten of diensten.

### Voor sjablonen:

Als je site‑sjablonen vooraf wilt selecteren op je checkoutformulier, kun je de parameter **?template_id=X** gebruiken op de URL van je registratiepagina. De 'X' moet worden vervangen door het **site template ID number**. Om dit nummer te krijgen, ga je naar **Ultimate Multisite > Sites**.

Klik op **Manage** recht onder het site‑sjabloon dat je wilt gebruiken. Je ziet het SITE ID nummer. Gebruik dit nummer gewoon voor dit specifieke site‑sjabloon om vooraf te selecteren op je checkoutformulier. In ons geval hier, zou de URL‑parameter **?template_id=2** zijn.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JEgVAVNYMu.png)

Stel dat onze netwerkwebsite [**www.mynetwork.com**](http://www.mynetwork.com) is en onze registratiepagina met ons checkoutformulier zich bevindt op de **/register** pagina. De volledige URL met dit site‑sjabloon vooraf geselecteerd ziet er uit als [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

En als je wilt, kun je zowel producten als sjablonen vooraf selecteren voor je checkoutformulier. Alles wat je hoeft te doen is de shareable link van het plan kopiëren en de sjabloonparameter aan het einde plakken. Het ziet er uit als [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
