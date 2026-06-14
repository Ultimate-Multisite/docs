---
title: Installeer Manuele Betalings
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Opstel van Handmatige Betalings (v2)

_**BELANGRIKE OPMERKING: Hierdie artikel verwys na Ultimate Multisite weergawe 2.x.**_

Handmatige betalings is 'n manier vir jou om alternatiewe betalingsmetodes aan te bied vir situasies waar **Stripe** of **PayPal** nie beskikbaar is vir jou gebruikers nie. Dit kan 'n oorbetaling of bankoordraging wees, of enige ander betalingsmetode wat vir jou gebruikers plaaslik beskikbaar is.

## Hoe om Handmatige Betalings te Aktiveer

Die opstel van handmatige betalings is baie maklik. Jy moet dit net aktiver in die betalingshekwerk en gedetailleerde instruksies voer oor hoe die gebruiker die betaling moet stuur.

Gaan eers na **Ultimate Multisite > Settings > Payments**. Onder **Payment Gateways** , skakel **Manual** aan. Jy sal sien dat 'n **Payment Instructions**-boks vir jou verskyn.

Voeg die inligting by wat jou kliënt benodig om die betaling te doen. Dit kan jou bankrekeningbesonderhede en jou e-posadres wees sodat die kliënt jou die betalingsbevestiging kan stuur, byvoorbeeld.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Hier is die handmatige hekwerk-instellings-koppelvlak:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Nadat jy dit opgestel het, klik net op **Save Settings** en dit is done. Wanneer gebruikers by jou netwerk registreer, sal hulle 'n boodskap sien wat hulle laat weet dat hulle jou instruksies sal ontvang om die aankoop te voltooi.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

En hulle sal ook 'n boodskap op jou **Thank You**-bladsy met jou betalingsinstruksies ontvang.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Bevestiging van Handmatige Betalings

Om 'n handmatige betaling te bevestig, gaan na die **Payments**-menu aan die linkerkantbalk. Daar kan jy al die betalings op jou netwerk en hul besonderhede sien, insluitend hul **status**. 'n Handmatige betaling sal altyd 'n **Pending**-status hê totdat jy dit handmatig verander.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Gaan na die betalingsbladsy deur op die **reference code** te klik. Op hierdie bladsy het jy al die besonderhede van die uitstaande betaling, soos verwysings-ID, produkte, tydstempels en meer.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Aan die regterkolom kan jy die status van die betaling verander. Dit na **Completed** verander en die **toggling the Activate Membership**-opsie sal jou kliënt se webwerf aktiver en hul lidmaatskap sal aktief wees.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
