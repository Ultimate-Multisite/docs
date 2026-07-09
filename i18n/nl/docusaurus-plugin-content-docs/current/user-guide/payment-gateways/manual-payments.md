---
title: Handmatige betalingen instellen
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Handmatige betalingen instellen (v2)

_**BELANGRIJKE OPMERKING: Dit artikel verwijst naar Ultimate Multisite versie 2.x.**_

Handmatige betalingen zijn een manier om andere betaalmethoden aan te bieden als **Stripe** of **PayPal** niet beschikbaar is voor je gebruikers. Dit kan een overschrijving of bankoverschrijving zijn, of een andere betaalmethode die lokaal beschikbaar is voor je gebruikers.

## Handmatige betalingen inschakelen

Het instellen van handmatige betaling is heel eenvoudig. Je hoeft het alleen in te schakelen onder betaalgateways en gedetailleerde instructies toe te voegen over hoe de gebruiker de betaling moet verzenden.

Ga eerst naar **Ultimate Multisite > Settings > Payments**. Schakel onder **Payment Gateways** **Manual** in. Je zult zien dat er een vak **Payment Instructions** voor je verschijnt.

Voeg in dit vak de informatie toe die je klant nodig heeft om de betaling uit te voeren. Dit kunnen bijvoorbeeld je bankrekeninggegevens en je e-mailadres zijn, zodat de klant je de betalingsbevestiging kan sturen.

![Schakelaar voor handmatige betaalgateway met tekstgebied voor Payment Instructions](/img/config/manual-gateway-expanded.png)

Hier is de instellingeninterface voor de handmatige gateway:

![Instellingen voor handmatige gateway](/img/config/manual-gateway-settings.png)

Klik na het instellen gewoon op **Save Settings** en het is klaar. Wanneer gebruikers zich registreren voor je netwerk, zien ze een bericht dat aangeeft dat ze je instructies zullen ontvangen om de aankoop te voltooien.

![Registratiebevestigingsbericht dat de gebruiker vertelt dat hij betalingsinstructies zal ontvangen](/img/frontend/registration-manual-notice.png)

En ze ontvangen ook een bericht op je **Thank You**-pagina met je betalingsinstructies.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Handmatige betalingen bevestigen

Om een handmatige betaling te bevestigen, ga je naar het menu **Payments** in de linkerbalk. Daar kun je alle betalingen op je netwerk en hun details zien, inclusief hun **status**. Een handmatige betaling heeft altijd de status **Pending** totdat je deze handmatig wijzigt.

![Betalingslijst met openstaande handmatige betaling](/img/admin/payments-list.png)

Open de betaalpagina door op de **referentiecode** te klikken. Op deze pagina heb je alle details van de openstaande betaling, zoals referentie-ID, producten, tijdstempels en meer.

![Pagina met betalingsdetails met referentiecode, producten en totalen](/img/admin/payment-edit.png)

In de rechterkolom kun je de status van de betaling wijzigen. Door deze te wijzigen naar **Completed** en de optie **Activate Membership** in te schakelen, wordt de site van je klant ingeschakeld en wordt hun membership actief.

![Pagina voor betalingsbewerking met Status ingesteld op Completed en schakelaar Activate Membership](/img/admin/payment-activate-membership.png)
