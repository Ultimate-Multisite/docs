---
title: Opsætning af manuelle betalinger
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Opsætning af manuelle betalinger (v2)

_**VIGTIG BEMÆRK: Denne artikel henviser til Ultimate Multisite version 2.x.**_

Manuelle betalinger er en måde, hvor du kan tilbyde andre betalingsmetoder, hvis **Stripe** eller **PayPal** ikke er tilgængelige for dine brugere. Det kan være en bankoverførsel eller enhver anden betalingsmetode, der er tilgængelig lokalt for dine brugere.

## Sådan aktiverer du manuelle betalinger

Opsætning af manuelle betalinger er meget nem. Du skal blot aktivere dem under betalingsgateways og indtaste detaljerede instruktioner om, hvordan brugeren skal sende betalingen.

Først skal du gå til **Ultimate Multisite > Indstillinger > Betalinger**. Under **Betalingsgateways** skal du slå **Manuel** til. Du vil se en **Betalingsinstruktioner** boks dukke op for dig.

Tilføj informationen, din kunde skal bruge for at foretage betalingen, i denne boks. Det kan være dine bankkontodetaljer og din e-mail, så kunden kan sende dig bekræftelsen på betalingen osv.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Her er grænsefladen for indstillinger af den manuelle gateway:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Når du har opsat det, skal du blot klikke på **Gem indstillinger**, og det er gjort. Når brugere tilmelder sig dit netværk, vil de se en besked, der fortæller dem, at de vil modtage dine instruktioner til at gennemføre købet.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

De vil også modtage en besked på din **Takke** side med dine betalingsinstruktioner.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Bekræftelse af manuelle betalinger

For at bekræfte en manuel betaling skal du gå til menuen **Payments** på venstre side. Der kan du se alle betalingerne i dit netværk og deres detaljer, herunder deres **status**. En manuel betaling vil altid have status **Pending**, indtil du selv ændrer den.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Indtast betalingssiden ved at klikke på **referencekode**. På denne side finder du alle detaljerne om den ventende betaling, såsom reference ID, produkter, tidsstempler og mere.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

I højre kolonne kan du ændre betalingens status. Ved at ændre den til **Completed** og slå muligheden **Activate Membership** til vil din kunders site blive aktiveret, og deres medlemskab bliver aktivt.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
