---
title: Opgradering af en plan
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Opgradering en Plan (v2)

_**VIGTIG BEMÆRK: Denne artikel refererer til Ultimate Multisite version 2.x.**_

Dine kunder kan opgradere deres planer når som helst. De kan enten opgradere til en anden plan eller købe ydelser eller pakker, du tilbyder på dit netværk.

I denne tutorial vil vi dække, hvordan de kan opgradere deres plan og hvad der sker efter opgraderingsprocessen.

For at opgradere deres plan skal dine kunder logge ind på deres dashboard og gå til siden **Account** (Konto).

![Customer subsite dashboard with Account menu link visible](/img/account-page/account-menu.png)

På Account-siden vil de se deres nuværende medlemskab og den plan, der er forbundet med det. For at opgradere til en anden plan skal de klikke på **Change** (Skift) i øverste højre hjørne af sektionen **Your Membership** (Dit Medlemskab).

![Account page Your Membership card with Change button](/img/account-page/membership-change-button.png)

De vil blive omdirigeret til en checkout-formular, hvor alle de tilgængelige planer vises.

De kan også se **services og pakker tilgængelige for deres nuværende plan**, hvis de blot ønsker at købe en specifik service eller pakke (som f.eks. ubegrænsede besøg eller diskplads i vores eksempel her), uden at opgradere selve planen.

![Upgrade picker showing available plans and packages on the customer side](/img/account-page/upgrade-picker.png)

Når de har valgt det produkt, de ønsker at købe, vil de se, hvor meget de skal betale lige nu – eksklusive eventuelle eksisterende kreditter – og hvor meget de bliver opkrævet på den næste faktureringsdato.

Normalt, hvis produktet er en anden plan og betalingen foregår mellem et medlemskabsværdiforringelse, vil de modtage en kredit for det beløb, der er betalt for den første plan.

![Opdateringsoversigt over betaling, der viser kredit anvendt og næste faktureringsbeløb](/img/account-page/upgrade-summary.png)

Hvis de vælger en plan eller et pakke, som ikke ændrer noget i forhold til den nuværende abonnement, vil du se en besked, der forklarer det.

![Bemærk, når den valgte plan ikke ændrer abonnementet](/img/account-page/upgrade-no-change.png)

Når betalingen er gennemført, vil de nye produkter blive tilføjet til dine kunders konto, og alle begrænsninger eller funktioner for de nye produkter vil øjeblikkeligt blive tilføjet: besøgstal, diskplads, indlæg osv...

##

## Upgrade- og nedgraderingsstier {#upgrade-and-downgrade-paths}

På hvert af dine produkter vil du have en **Up & Downgrades** fane. Det første valg på denne fane er et felt kaldet **Plan Group**.

**Plan groups** er det, der lader dig fortælle Ultimate Multisite, at visse planer tilhører den samme "familie", og derfor skal bruges til at opbygge muligheder for opgradering/nedgradering.

![Produktredigering Up- og Downgrades fane med Plan Group felt](/img/config/product-upgrades-plan-group.png)

For eksempel har du en **Gratis plan**, en **Basisplan** og en **Premium plan** til rådighed. Du ønsker, at brugere abonneret på den **Gratis plan** kun kan opgradere til **Premium plan**, og du vil ikke have dem til at se "Basisplan" som et opgraderingsmulighed. Alt, hvad du skal gøre, er at tildele det samme plan gruppe navn til både Gratis- og Premium-planerne som vist i skærmbillederne nedenfor.

![Produkt side for Gratis Plan med High End plan gruppe tildelt](/img/config/product-upgrades-free.png)

![Produkt side for Premium Plan med High End plan gruppe tildelt](/img/config/product-upgrades-premium.png)

Dette skal fortælle Ultimate Multisite, at der findes en "familie" af planer i netværket kaldet **High End**. Når du tilbyder opgraderinger eller nedgraderinger, skal kun planer fra samme familie præsenteres som et valg for brugeren.
