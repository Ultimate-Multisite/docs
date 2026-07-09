---
title: Betaald worden
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Betaald worden (v2)

_**BELANGRIJKE OPMERKING: Dit artikel verwijst naar Ultimate Multisite versie 2.x.**_

Ultimate Multisite heeft een ingebouwd lidmaatschaps- en factureringssysteem. Om ons factureringssysteem te laten functioneren, hebben we de meest gebruikte betalingsgateways in e-commerce geïntegreerd. De standaard betalingsgateways in Ultimate Multisite zijn _Stripe_ , _PayPal_ , en Handmatige betaling. Je kunt ook _WooCommerce_ , _GoCardless_ en _Payfast_ gebruiken om betalingen te ontvangen door hun respectieve add-ons te installeren.

## Basisinstellingen

Je kunt elk van deze betalingsgateways configureren onder de betalingsinstellingen van Ultimate Multisite. Je vindt dit via **Ultimate Multisite menu > Instellingen > Betalingen.**

![Pagina met betalingsinstellingen in Ultimate Multisite met het Betalingen-paneel](/img/config/payments-settings-page.png)

Voordat je je betalingsgateway instelt, bekijk eerst de basisbetalingsinstellingen die je kunt configureren:

**Automatische verlengi** **ng afdwingen:** Dit zorgt ervoor dat de betaling automatisch wordt herhaald aan het einde van elke factureringscyclus, afhankelijk van de factureringsfrequentie die de gebruiker heeft geselecteerd.

<!-- Screenshot niet beschikbaar: schakelaar voor Automatische verlenging afdwingen op de pagina Betalingsinstellingen -->

Ultimate Multisite v2.13.0 controleert of de actieve gateway een herbruikbare verlengingsreferentie heeft voordat een terugkerend lidmaatschap met ingeschakelde automatische verlenging wordt opgeslagen. Een verlengingsreferentie kan een gateway-abonnement, factureringsovereenkomst, opgeslagen vault-token of gelijkwaardige herbruikbare betaalmethode zijn. Als de gateway meldt dat er geen bruikbare referentie bestaat, slaat Ultimate Multisite het lidmaatschap op, maar schakelt automatische verlenging uit en registreert de status van de ontbrekende referentie, zodat een beheerder of supportproces de klant kan vragen om de betaling opnieuw te autoriseren vóór de verlengingsdatum.

Dit voorkomt dat een lidmaatschap lijkt automatisch te verlengen wanneer de gateway alleen eenmalige betalingen kan innen. Gateway-add-ons moeten bevestigen dat terugkerende checkouts een herbruikbare referentie opslaan, vooral wanneer de gateway zowel eenmalige afschrijving als vaulted-/abonnementsbetaalmodi ondersteunt.

**Proefperiodes zonder betalings** **methode toestaan:** Als deze optie is ingeschakeld, hoeft je klant tijdens het registratieproces geen financiële gegevens toe te voegen. Dit is pas vereist zodra de proefperiode verloopt.

<!-- Screenshot niet beschikbaar: schakelaar voor Proefperiodes zonder betalingsmethode toestaan op de pagina Betalingsinstellingen -->

**Factuur verzenden bij betalingsbevestiging:** Dit geeft je de optie om wel of geen factuur te verzenden na betaling. Let op: gebruikers hebben toegang tot hun betalingsgeschiedenis onder hun subsite Dashboard. Deze optie is niet van toepassing op de Handmatige gateway.

<!-- Screenshot niet beschikbaar: schakelaar voor Factuur verzenden bij betalingsbevestiging op de pagina Betalingsinstellingen -->

**Factuurnummeringsschema:** Hier kun je kiezen tussen een betalingsreferentiecode of een sequentieel nummerschema. Als je ervoor kiest om een betalingsreferentiecode voor je facturen te gebruiken, hoef je niets te configureren. Als je ervoor kiest om een sequentieel nummerschema te gebruiken, moet je het **volgende factuurnummer** configureren (Dit nummer wordt gebruikt als het factuurnummer voor de volgende factuur die op het systeem wordt gegenereerd. Het wordt telkens met één verhoogd wanneer er een nieuwe factuur wordt aangemaakt. Je kunt het wijzigen en opslaan om het sequentiële factuurnummer terug te zetten naar een specifieke waarde) en het **voorvoegsel van het factuurnummer.**

<!-- Screenshot niet beschikbaar: dropdown voor factuurnummeringsschema met opties Betalingsreferentiecode en Sequentieel nummer -->

<!-- Screenshot niet beschikbaar: velden Volgend factuurnummer en voorvoegsel van factuurnummer weergegeven wanneer Sequentieel nummer is geselecteerd -->

## Waar je de gateways kunt vinden:

Je kunt de betalingsgateways op dezelfde pagina instellen ( **Ultimate Multisite > Instellingen > Betalingen**). Direct onder **actieve betalingsgateways** kun je het volgende zien: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ en _Handmatig_.

![Sectie Actieve betalingsgateways met Stripe, Stripe Checkout, PayPal en Handmatig](/img/config/payments-active-gateways.png)

We hebben een apart artikel voor elke betalingsgateway dat je door de stappen leidt om deze in te stellen; je vindt ze via de links hieronder.

Je kunt betalingsgegevens bekijken en bewerken:

![Interface voor het bewerken van betalingen](/img/admin/payment-edit.png)

Hier is een volledige weergave van de pagina voor het bewerken van betalingen:

![Volledige interface voor het bewerken van betalingen](/img/admin/payment-edit-full.png)

Hier is ook een volledige weergave van de instellingen voor betalingsgateways:

![Volledige pagina met instellingen voor betalingsgateways](/img/config/settings-payments-gateways-full.png)

**De Stripe-gateway instellen**

**De PayPal-gateway instellen**** **

**Handmatige betalingen instellen**

Als je nu _WooCommerce_ , _GoCardless_ of _Payfast_ als je betalingsgateway wilt gebruiken, moet je hun **add-ons installeren en configureren**.

### Hoe je de WooCommerce add-on installeert:

We begrijpen dat _Stripe_ en _PayPal_ in sommige landen niet beschikbaar zijn, wat Ultimate Multisite-gebruikers beperkt of belemmert om onze plugin effectief te gebruiken. Daarom hebben we een add-on gemaakt om _WooCommerce,_ te integreren, een zeer populaire e-commerceplugin. Ontwikkelaars over de hele wereld hebben add-ons gemaakt om verschillende betalingsgateways ermee te integreren. We hebben hiervan gebruikgemaakt om de betalingsgateways uit te breiden die je met het factureringssysteem van Ultimate Multisite kunt gebruiken.

_**BELANGRIJK:** Ultimate Multisite: WooCommerce Integration vereist dat WooCommerce ten minste op je hoofdsite is geactiveerd._

Ga eerst naar de add-onspagina. Je vindt die via **Ultimate Multisite > Instellingen**. Je zou de tabel **Add-ons** moeten zien. Klik op **Bekijk onze add-ons**.

<!-- Screenshot niet beschikbaar: Add-ons-tabel in de zijbalk van Ultimate Multisite-instellingen met de link Bekijk onze add-ons -->

Nadat je op **Bekijk onze add-ons** hebt geklikt, word je doorgestuurd naar de add-onspagina. Hier vind je alle Ultimate Multisite add-ons. Klik op de add-on **Ultimate Multisite: WooCommerce Integration**.

![Add-onspagina met Ultimate Multisite add-ons, inclusief WooCommerce Integration](/img/addons/addons-page.png)

Er verschijnt een venster met de add-on-details. Klik gewoon op **Nu installeren**.

<!-- Schermafbeelding niet beschikbaar: dialoogvenster met details van de Ultimate Multisite WooCommerce Integration add-on met knop Nu installeren -->

Nadat de installatie is voltooid, word je doorgestuurd naar de plugins-pagina. Klik hier gewoon op **Netwerk activeren** en de WooCommerce add-on wordt geactiveerd op je netwerk.

<!-- Schermafbeelding niet beschikbaar: plugins-pagina met de link Netwerk activeren voor de WooCommerce Integration add-on -->

Nadat je deze hebt geactiveerd, ontvang je een herinnering als je de WooCommerce plugin nog steeds niet op je website hebt geïnstalleerd en geactiveerd.

<!-- Schermafbeelding niet beschikbaar: beheerdersmelding die de beheerder eraan herinnert de WooCommerce plugin te installeren en te activeren -->

Om meer te lezen over de WooCommerce Integration add-on, **klik hier**.

### Hoe je de GoCardless add-on installeert:

De stappen om de _GoCardless_ add-on te installeren zijn vrijwel hetzelfde als bij de _WooCommerce_ add-on. Ga naar de add-ons-pagina en selecteer de **Ultimate Multisite: GoCardless Gateway** add-on.

<!-- Schermafbeelding niet beschikbaar: add-ons-pagina met de Ultimate Multisite GoCardless Gateway add-on gemarkeerd -->

Het add-on-venster verschijnt. Klik op **Nu installeren**.

<!-- Schermafbeelding niet beschikbaar: dialoogvenster met details van de Ultimate Multisite GoCardless Gateway add-on met knop Nu installeren -->

Nadat de installatie is voltooid, word je doorgestuurd naar de plugins-pagina. Klik hier gewoon op **Netwerk activeren** en de _GoCardless_ add-on wordt geactiveerd op je netwerk.

<!-- Schermafbeelding niet beschikbaar: plugins-pagina met de link Netwerk activeren voor de GoCardless Gateway add-on -->

Om te leren hoe je aan de slag gaat met de _GoCardless_ gateway, **lees dit artikel**.

### Hoe je de Payfast add-on installeert:

Ga naar de add-ons-pagina en selecteer de **Ultimate Multisite: Payfast Gateway** add-on.

<!-- Schermafbeelding niet beschikbaar: add-ons-pagina met de Ultimate Multisite Payfast Gateway add-on gemarkeerd -->

Het add-on-venster verschijnt. Klik op **Nu installeren.**

<!-- Schermafbeelding niet beschikbaar: dialoogvenster met details van de Ultimate Multisite Payfast Gateway add-on met knop Nu installeren -->

Nadat de installatie is voltooid, word je doorgestuurd naar de plugins-pagina. Klik hier gewoon op **Netwerk activeren** en de _Payfast_ add-on wordt geactiveerd op je netwerk.

<!-- Schermafbeelding niet beschikbaar: plugins-pagina met de link Netwerk activeren voor de Payfast Gateway add-on -->
