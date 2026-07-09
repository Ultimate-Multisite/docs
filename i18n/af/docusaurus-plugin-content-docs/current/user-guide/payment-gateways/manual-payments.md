---
title: Handmatige betalings opstel
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Stel handmatige betalings op (v2) {#setting-up-manual-payments-v2}

_**BELANGRIKE NOTA: Hierdie artikel verwys na Ultimate Multisite weergawe 2.x.**_

Handmatige betalings is ’n manier waarop jy ander betaalmetodes kan aanbied indien **Stripe** of **PayPal** nie vir jou gebruikers beskikbaar is nie. Dit kan ’n elektroniese oorbetaling of bankoorplasing wees, of enige ander betaalmetode wat plaaslik vir jou gebruikers beskikbaar is.

## Hoe om handmatige betalings te aktiveer {#how-to-enable-manual-payments}

Om handmatige betaling op te stel is baie maklik. Jy hoef dit net onder betalingspoorte te aktiveer en gedetailleerde instruksies in te voer oor hoe die gebruiker die betaling moet stuur.

Gaan eers na **Ultimate Multisite > Instellings > Betalings**. Onder **Betalingspoorte** , skakel **Handmatig** aan. Jy sal sien dat ’n **Betalingsinstruksies**-blokkie vir jou sal verskyn.

Voeg in hierdie blokkie die inligting by wat jou kliënt nodig sal hê om die betaling te maak. Dit kan byvoorbeeld jou bankrekeningbesonderhede en jou e-pos wees sodat die kliënt vir jou die betalingsbevestiging kan stuur.

![Handmatige betalingspoort-skakelaar met Betalingsinstruksies-teksarea](/img/config/manual-gateway-expanded.png)

Hier is die handmatige poort se instellingskoppelvlak:

![Handmatige poortinstellings](/img/config/manual-gateway-settings.png)

Nadat jy dit opgestel het, klik net op **Stoor instellings** en dit is klaar. Wanneer gebruikers by jou netwerk registreer, sal hulle ’n boodskap sien wat vir hulle sê dat hulle jou instruksies sal ontvang om die aankoop te voltooi.

![Registrasiebevestigingsboodskap wat vir die gebruiker sê dat hulle betalingsinstruksies sal ontvang](/img/frontend/registration-manual-notice.png)

En hulle sal ook ’n boodskap op jou **Dankie**-bladsy ontvang met jou betalingsinstruksies.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Bevestiging van handmatige betalings {#confirming-manual-payments}

Om ’n handmatige betaling te bevestig, gaan na die **Betalings**-kieslys op die linkerbalk. Daar kan jy al die betalings op jou netwerk en hul besonderhede sien, insluitend hul **status**. ’n Handmatige betaling sal altyd ’n **Hangende** status hê totdat jy dit handmatig verander.

![Betalingslys wat hangende handmatige betaling wys](/img/admin/payments-list.png)

Gaan die betalingsbladsy binne deur op die **verwysingskode** te klik. Op hierdie bladsy het jy al die besonderhede van die hangende betaling, soos verwysings-ID, produkte, tydstempels en meer.

![Betalingsbesonderhedebladsy wat verwysingskode, produkte en totale wys](/img/admin/payment-edit.png)

In die regterkolom kan jy die status van die betaling verander. Deur dit na **Voltooi** te verander en die **Aktiveer lidmaatskap**-opsie aan te skakel, sal jou kliënt se werf geaktiveer word en hul lidmaatskap sal aktief wees.

![Betalingswysigingsbladsy met Status gestel op Voltooi en Aktiveer lidmaatskap-skakelaar](/img/admin/payment-activate-membership.png)
