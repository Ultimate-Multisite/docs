---
title: Opsætning af manuelle betalinger
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Opsætning af manuelle betalinger (v2)

_**VIGTIG BEMÆRKNING: Denne artikel henviser til Ultimate Multisite version 2.x.**_

Manuelle betalinger er en måde, hvorpå du kan tilbyde andre betalingsmetoder, hvis **Stripe** eller **PayPal** ikke er tilgængelige for dine brugere. Det kan være en bankoverførsel eller en anden betalingsmetode, der er tilgængelig lokalt for dine brugere.

## Sådan aktiverer du manuelle betalinger

Opsætning af manuel betaling er meget nemt. Du skal blot aktivere det under betalingsgateways og indtaste detaljerede instruktioner om, hvordan brugeren skal sende betalingen.

Gå først til **Ultimate Multisite > Settings > Payments**. Under **Payment Gateways** skal du slå **Manual** til. Du vil se, at en boks med **Payment Instructions** vises for dig.

Tilføj de oplysninger i denne boks, som din kunde skal bruge for at foretage betalingen. Det kan for eksempel være dine bankkontooplysninger og din e-mail, så kunden kan sende dig betalingsbekræftelsen.

![Skift for manuel betalingsgateway med tekstområde til Payment Instructions](/img/config/manual-gateway-expanded.png)

Her er grænsefladen for indstillingerne for den manuelle gateway:

![Indstillinger for manuel gateway](/img/config/manual-gateway-settings.png)

Når du har sat det op, skal du blot klikke på **Save Settings**, og så er det gjort. Når brugere registrerer sig på dit netværk, vil de se en besked, der fortæller dem, at de vil modtage dine instruktioner til at fuldføre købet.

![Registreringsbekræftelsesbesked, der fortæller brugeren, at de vil modtage betalingsinstruktioner](/img/frontend/registration-manual-notice.png)

Og de vil også modtage en besked på din **Thank You**-side med dine betalingsinstruktioner.

<!-- Skærmbillede ikke tilgængeligt: Thank You-side, der viser betalingsinstruktioner efter checkout -->

## Bekræftelse af manuelle betalinger

For at bekræfte en manuel betaling skal du gå til menuen **Payments** i venstre bjælke. Der kan du se alle betalingerne på dit netværk og deres detaljer, herunder deres **status**. En manuel betaling vil altid have statussen **Pending**, indtil du manuelt ændrer den.

![Betalingsliste, der viser afventende manuel betaling](/img/admin/payments-list.png)

Gå ind på betalingssiden ved at klikke på **referencekoden**. På denne side har du alle detaljer om den afventende betaling, såsom reference-ID, produkter, tidsstempler og mere.

![Side med betalingsdetaljer, der viser referencekode, produkter og totaler](/img/admin/payment-edit.png)

I højre kolonne kan du ændre betalingens status. Hvis du ændrer den til **Completed** og **slår Activate Membership til**, aktiveres din kundes websted, og deres medlemskab vil være aktivt.

![Side til redigering af betaling med Status sat til Completed og Activate Membership slået til](/img/admin/payment-activate-membership.png)
