---
title: De Registratie Flow
sidebar_position: 3
_i18n_hash: 3e38d2f50683a422650956e5a3b0dff9
---
# De registratieflow (v2)

_**BELANGRIJK OPMERKING: Dit artikel verwijst naar Ultimate Multisite versie 2.x.**_

Gebruikers kunnen zich op verschillende manieren registreren op uw netwerk. Ze kunnen uw registratieformulier gebruiken of een deelbare link naar een vooraf geselecteerd plan. Hier laten we zien hoe uw klanten zich kunnen registreren op uw netwerk via de beschikbare paden en wat er gebeurt nadat ze zich op uw netwerk hebben geregistreerd.

## Gebruik van het registratieformulier:

Dit is het standaardregistratieproces. U maakt een registratiepagina met een **checkoutformulier** en dit is waar uw klanten zich op uw netwerk zullen registreren en zich abonneren op een plan. U kunt meerdere registratiepagina's hebben, elk met een ander registratieformulier als u dat wilt.

De standaardpagina voor registratie is [_**yourdomain.com/register**_](http://yourdomain.com/register), maar u kunt dit op elk moment wijzigen via **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Nadat een gebruiker uw registratiepagina heeft bereikt (meestal door op een **Sign in** of **Buy now** knop te klikken), zullen ze uw registratieformulier daar zien.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hDcy7S8pBK.png)

Alles wat ze moeten doen is het invullen van alle verplichte velden - e-mail, gebruikersnaam, wachtwoord, enz... - en betalen voor het plan of hun e-mailadres bevestigen als ze zich registreren voor een gratis plan of een betaald plan met proefperiode zonder betalingsinformatie.

Op de pagina 'Thank you' zullen ze een bericht zien waarin staat of ze hun e-mailadres moeten bevestigen of dat hun website al is geactiveerd en ze deze kunnen gaan gebruiken.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FnXxCLt0YW.png)

Als een e-mailadresbevestiging vereist is, moeten ze naar hun e-mailinbox gaan en op de verificatielink klikken. Hun website wordt niet geactiveerd als hun e-mailadres niet wordt geverifieerd.

Als ze zich hebben geregistreerd op een betaald plan of de e-mailverificatie niet verplicht is op uw netwerk, wordt hun website direct na de afrekening geactiveerd en krijgen ze een link om in te loggen op hun dashboard.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DJwvUqQnQU.png)

## Gebruik van een deelbare link:

Het registreren via een deelbare link is in principe hetzelfde als het registratieformulier, het enige verschil is dat uw klanten via een deelbare link een product of website-sjabloon vooraf kunnen selecteren op het checkoutformulier (zie de sectie Pre-selecting products and templates via URL parameters) of misschien een kortingscode toegevoegd (zie de sectie Using URL Parameters).

Het registratieproces zal hetzelfde zijn: ze moeten hun naam, gebruikersnaam, e-mailadres, website-naam en titel, enz... invullen, maar het plan of de site-sjabloon is al voor hen vooraf geselecteerd.

### Registreren met handmatige betalingen:

Als u geen gebruik wilt maken van PayPal, Stripe of een andere betalingsgateway die door Ultimate Multisite of zijn add-on-integraties wordt aangeboden, kunt u handmatige betalingen voor uw klanten gebruiken. Op deze manier kunt u een factuur genereren die ze kunnen betalen via uw voorkeursbetalingsverwerker nadat ze zich op uw netwerk hebben geregistreerd.

Het registratieproces is precies hetzelfde als hierboven, maar op de registratiepagina zien uw klanten een bericht dat ze een e-mail met verdere instructies zullen ontvangen om de betaling te voltooien.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-iSli6MoFGw.png)

En nadat de registratie is voltooid, zien ze de betalingsinstructies die u heeft ingesteld (en ontvangen ze deze ook per e-mail).

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hX0GPWYfEA.png)

De betalingsinstructies kunnen worden gewijzigd via **Ultimate Multisite > Settings > Payments** nadat u de optie **Manual** hebt ingeschakeld:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RpPGDd0BZo.png)

Nadat uw klanten de handmatige betaling hebben voltooid en u de bevestiging hebben gestuurd, moet u **handmatig de betaling bevestigen** om het klantlidmaatschap en de website te activeren.

Ga hiervoor naar **Ultimate Multisite > Payments** en zoek de klantbetaling. Deze moet nog steeds een status **Pending** tonen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-2rW0tFemEP.png)

Klik op het betalingsnummer en u kunt de status wijzigen naar **Completed**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-KiRQKw3wGg.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-NPFNchZrUa.png)

Na het wijzigen van de status naar **Completed** ziet u een bericht **Activate membership**. Schakel deze optie **aan** om het lidmaatschap en de website die aan deze klant zijn gekoppeld te activeren. Klik vervolgens op **Save Payment**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-e3R91KmnUV.png)

Uw klant zou nu toegang moeten hebben tot het dashboard en alle functies waarop ze zich hebben geabonneerd.
