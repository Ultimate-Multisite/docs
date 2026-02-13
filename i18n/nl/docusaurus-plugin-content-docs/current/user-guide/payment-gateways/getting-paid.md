---
title: Betaald worden
sidebar_position: 15
_i18n_hash: b7e644488bb1bef802e024319be88725
---
# Ontvangen van betalingen (v2)

_**BELANGRIJK: Deze artikel verwijst naar Ultimate Multisite versie 2.x.**_

Ultimate Multisite heeft een ingebouwd lidmaatschap- en factureringssysteem. Voor ons factureringssysteem om te functioneren, hebben we de meest gebruikte betalingsgateways in e-commerce geïntegreerd. De standaard betalingsgateways in Ultimate Multisite zijn _Stripe_, _PayPal_ en Handmatige betaling. Je kunt ook _WooCommerce_, _GoCardless_ en _Payfast_ gebruiken om betalingen te ontvangen door hun respectievelijke add-ons te installeren.

## Basisinstellingen

Je kunt elke van deze betalingsgateways configureren onder de betalingsinstellingen van Ultimate Multisite. Je vindt het door te gaan naar **Ultimate Multisite menu > Instellingen > Betalingen.**

![Payment settings page in Ultimate Multisite](/img/config/settings-payment-gateways.png)

Voordat je je betalingsgateway instelt, bekijk je alstublieft de basisbetalingsinstellingen die je kunt configureren:

**Force auto-rene** **w:** Dit zorgt ervoor dat de betaling automatisch herhaalt aan het einde van elke factureringscyclus, afhankelijk van de factureringsfrequentie die de gebruiker heeft geselecteerd.

![Force auto-renew toggle setting](/img/config/settings-payment-gateways.png)

**Allow trials without payment** **method:** Met deze optie hoeft je klant geen financiële informatie toe te voegen tijdens het registratieproces. Dit is alleen vereist wanneer de proefperiode verloopt.

![Allow trials without payment method toggle](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** Hiermee kun je kiezen of je een factuur wilt sturen na betaling. Merk op dat gebruikers toegang hebben tot hun betalingsgeschiedenis onder hun subsite-dashboard. Deze optie geldt niet voor de Handmatige gateway.

![Send invoice on payment confirmation toggle](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** Hier kun je kiezen tussen een betalingsreferentiecode of een sequentieel nummerschema. Als je kiest voor een betalingsreferentiecode voor je facturen, hoef je niets te configureren. Als je kiest voor een sequentieel nummerschema, moet je het **next invoice number** configureren (Dit nummer wordt gebruikt als factuurnummer voor de volgende factuur die op het systeem wordt gegenereerd. Het wordt met één verhoogd elke keer dat een nieuwe factuur wordt aangemaakt. Je kunt het wijzigen en opslaan om het sequentiële factuurnummer op een specifieke waarde te resetten) en het **invoice number prefix.**

![Invoice numbering scheme selection](/img/config/settings-payment-gateways.png)

![Sequential invoice number and prefix settings](/img/config/settings-payment-gateways.png)

## Waar je de gateways kunt vinden:

Je kunt de betalingsgateways op dezelfde pagina instellen ( **Ultimate Multisite > Instellingen > Betalingen**). Recht onder **active payment gateways** kun je zien: _Stripe_, _Stripe Checkout_, _PayPal_ en _Manual_.

![Active payment gateways list](/img/config/settings-payment-gateways.png)

We hebben een apart artikel voor elke betalingsgateway die je door de stappen leidt om deze in te stellen, die je kunt vinden op de onderstaande links.

**Stripe gateway instellen**

**PayPal gateway instellen**

**Handmatige betalingen instellen**

Nu, als je _WooCommerce_, _GoCardless_ of _Payfast_ als je betalingsgateway wilt gebruiken, moet je **installeren en configureren** hun add-ons.

### Hoe de WooCommerce add-on te installeren:

We begrijpen dat _Stripe_ en _PayPal_ niet beschikbaar zijn in sommige landen, waardoor Ultimate Multisite-gebruikers beperkt worden of het gebruik van onze plugin wordt gehinderd. Daarom hebben we een add-on gemaakt om _WooCommerce_ te integreren, een zeer populair e-commerce-plugin. Ontwikkelaars over de hele wereld hebben add-ons gemaakt om verschillende betalingsgateways te integreren. We hebben hiervan gebruikgemaakt om de betalingsgateways die je kunt gebruiken met het Ultimate Multisite-factureringssysteem uit te breiden.

**BELANGRIJK:** Ultimate Multisite: WooCommerce Integration vereist dat WooCommerce ten minste op je hoofdsite is geactiveerd.

Ga eerst naar de add-ons-pagina. Je kunt deze vinden door te gaan naar **Ultimate Multisite > Instellingen**. Je zou de **Add-ons**-tabel moeten zien. Klik op **Check our Add-ons**.

![Settings page with add-ons section](/img/config/settings-general.png)

Na het klikken op **Check our Add-ons** word je doorgestuurd naar de add-ons-pagina. Hier kun je alle Ultimate Multisite-add-ons vinden. Klik op de **Ultimate Multisite: WooCommerce Integration** add-on.

![Add-ons page listing available add-ons](/img/config/settings-general.png)

Een venster verschijnt met de add-on-details. Klik gewoon op **Install Now**.

![WooCommerce add-on install dialog](/img/config/settings-general.png)

Na de installatie word je doorgestuurd naar de plugins-pagina. Klik hier gewoon op **Network Activate** en de WooCommerce add-on wordt geactiveerd op je netwerk.

![Network Activate the WooCommerce add-on](/img/config/settings-general.png)

Na activatie, als je nog steeds de WooCommerce-plugin niet hebt geïnstalleerd en geactiveerd op je website, ontvang je een herinnering.

![WooCommerce activation reminder notice](/img/config/settings-general.png)

Om meer te lezen over de WooCommerce Integration add-on, **klik hier**.

### Hoe de GoCardless add-on te installeren:

De stappen om de _GoCardless_ add-on te installeren zijn vrijwel hetzelfde als bij de _WooCommerce_ add-on. Ga naar de add-ons-pagina en selecteer de **Ultimate Multisite: GoCardless Gateway** add-on.

![Add-ons page listing available add-ons](/img/config/settings-general.png)

Het add-on-venster verschijnt. Klik op **Install Now**.

![GoCardless add-on install dialog](/img/config/settings-general.png)

Na de installatie word je doorgestuurd naar de plugins-pagina. Klik hier gewoon op **Network Activate** en de _GoCardless_ add-on wordt geactiveerd op je netwerk.

![Network Activate the GoCardless add-on](/img/config/settings-general.png)

Om te leren hoe je aan de slag gaat met de _GoCardless_ gateway, **lees dit artikel**.

### Hoe de Payfast add-on te installeren:

Ga naar de add-ons-pagina en selecteer de **Ultimate Multisite: Payfast Gateway** add-on.

![Add-ons page listing available add-ons](/img/config/settings-general.png)

Het add-on-venster verschijnt. Klik op **Install Now.**

![Payfast add-on install dialog](/img/config/settings-general.png)

Na de installatie word je doorgestuurd naar de plugins-pagina. Klik hier gewoon op **Network Activate** en de _Payfast_ add-on wordt geactiveerd op je netwerk.

![Network Activate the Payfast add-on](/img/config/settings-general.png)
