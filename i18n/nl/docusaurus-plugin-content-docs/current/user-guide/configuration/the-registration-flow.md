---
title: De registratiestroom
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# De registratieflow (v2)

_**BELANGRIJKE OPMERKING: Dit artikel verwijst naar Ultimate Multisite versie 2.x.**_

Gebruikers kunnen zich op verschillende manieren registreren op je netwerk. Ze kunnen je registratieformulier gebruiken of een deelbare link naar een vooraf geselecteerd plan. Hier laten we zien hoe je klanten zich op je netwerk kunnen registreren via de beschikbare paden en wat er gebeurt nadat ze zich op je netwerk hebben geregistreerd.

## Het registratieformulier gebruiken: {#using-the-registration-form}

Dit is het standaard registratieproces. Je maakt een registratiepagina met een **checkoutformulier** en dit is de plek waar je klanten naartoe gaan om zich op je netwerk te registreren en zich op een plan te abonneren. Je kunt meerdere registratiepagina's hebben, elk met een ander registratieformulier als je dat wilt.

De standaardpagina voor registratie is [_**yourdomain.com/register**_](http://yourdomain.com/register), maar je kunt dit op elk moment wijzigen via **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Nadat een gebruiker op je registratiepagina is aangekomen (meestal door op een knop **Sign in** of **Buy now** te klikken), zien ze daar je registratieformulier.

![Registratieformulier weergegeven op de registratiepagina](/img/frontend/registration-form.png)

Hier is een voorbeeld van het checkoutformulier zoals het op de frontend verschijnt:

![Frontend checkoutregistratieformulier](/img/config/checkout-frontend-registration.png)

Ze hoeven alleen alle verplichte velden in te vullen - e-mailadres, gebruikersnaam, wachtwoord, enz... - en voor het plan te betalen of hun e-mailadres te bevestigen als ze zich registreren voor een gratis plan of een betaald plan met proefperiode zonder betaalinformatie.

Op de "Thank you"-pagina zien ze een bericht dat aangeeft of ze hun e-mailadres moeten bevestigen of dat hun website al is geactiveerd en ze deze kunnen gaan gebruiken.

![Thank You-pagina na registratie](/img/frontend/registration-thank-you.png)

Als bevestiging van het e-mailadres vereist is, moeten ze naar hun e-mailinbox gaan en op de verificatielink klikken. Hun website wordt niet geactiveerd als hun e-mailadres niet wordt geverifieerd.

Als ze zich hebben geregistreerd voor een betaald plan of als e-mailverificatie niet verplicht is op je netwerk, wordt hun website direct na de checkout geactiveerd en krijgen ze een link te zien om in te loggen op hun dashboard.

![Site geactiveerd met link om in te loggen op dashboard](/img/frontend/site-activated.png)

## Een deelbare link gebruiken: {#using-a-shareable-link}

Het registratieproces met een deelbare link is in principe hetzelfde als bij het registratieformulier. Het enige verschil is dat je klanten met een deelbare link een product of websitesjabloon vooraf geselecteerd kunnen hebben op het checkoutformulier (zie de sectie Producten en sjablonen vooraf selecteren via URL-parameters) of misschien een couponcode toegevoegd kunnen hebben (zie de sectie URL-parameters gebruiken).

Het registratieproces blijft hetzelfde: ze moeten hun naam, gebruikersnaam, e-mailadres, websitenaam en titel, enz... invullen, maar het plan of sitesjabloon is al vooraf voor hen geselecteerd.

### Registreren met handmatige betalingen: {#registering-using-manual-payments}

Als je PayPal, Stripe of een andere betaalgateway die door Ultimate Multisite of de add-on-integraties wordt aangeboden niet wilt gebruiken, kun je handmatige betalingen gebruiken voor je klanten. Op deze manier kun je een factuur voor hen genereren die ze na registratie op je netwerk kunnen betalen via je gewenste betalingsverwerker.

Het registratieproces is exact hetzelfde als hierboven, maar op de registratiepagina zien je klanten een bericht dat aangeeft dat ze een e-mail zullen ontvangen met verdere instructies om de betaling te voltooien.

![Bericht over handmatige betaling tijdens registratie](/img/frontend/registration-manual-notice.png)

En nadat de registratie is voltooid, zien ze de betalingsinstructies die je hebt ingesteld (en ontvangen ze deze ook in hun e-mail).

![Betalingsinstructies weergegeven na registratie](/img/frontend/registration-payment-instructions.png)

De betalingsinstructies kunnen worden gewijzigd via **Ultimate Multisite > Settings > Payments** nadat je de betaaloptie **Manual** hebt ingeschakeld:

![Schakelaar voor handmatige betaling met veld voor betalingsinstructies](/img/config/manual-gateway-settings.png)

Nadat je klanten de handmatige betaling hebben voltooid en je de bevestiging hebben gestuurd, moet je de **betaling handmatig bevestigen** om het klantlidmaatschap en de website te activeren.

Ga hiervoor naar **Ultimate Multisite > Payments** en zoek de klantbetaling. Deze zou nog steeds de status **Pending** moeten tonen.

![Betalingenlijst met openstaande handmatige betaling](/img/admin/payments-list.png)

Klik op het betalingsnummer en je kunt de status wijzigen naar **Completed**.

![Pagina met betalingsgegevens](/img/admin/payment-edit.png)

![Betalingsstatus wijzigen naar Completed](/img/admin/payment-status-completed.png)

Nadat je de status hebt gewijzigd naar **Completed**, zou je een bericht **Activate membership** moeten zien. Zet deze optie **aan** om het lidmaatschap en de website die aan deze klant zijn gekoppeld te activeren. Klik daarna op **Save Payment**.

![Schakelaar voor Activate membership en knop Save Payment](/img/admin/payment-activate-membership.png)

Je klant zou nu toegang moeten hebben tot het dashboard en alle functies waarop hij of zij is geabonneerd.
