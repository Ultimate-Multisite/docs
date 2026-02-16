---
title: Sette opp manuelle betalinger
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# Sette opp manuelle betalinger (v2)

_**VIKTIG MERKNAD: Denne artikkelen gjelder Ultimate Multisite versjon 2.x.**_

Manuelle betalinger lar deg tilby andre betalingsmetoder dersom **Stripe** eller **PayPal** ikke er tilgjengelig for brukerne dine. Det kan være bankoverføring eller andre betalingsmetoder som er tilgjengelige lokalt for brukerne dine.

## Slik aktiverer du manuelle betalinger

Det er veldig enkelt å sette opp manuell betaling. Du trenger bare å aktivere det under betalingsløsninger og skrive inn detaljerte instruksjoner om hvordan brukeren skal sende betalingen.

Først går du til **Ultimate Multisite > Innstillinger > Betalinger**. Under **Betalingsløsninger** slår du på **Manuell**. Da vil det dukke opp en boks for **Betalingsinstruksjoner**.

I denne boksen legger du inn informasjonen kunden trenger for å gjennomføre betalingen. Det kan for eksempel være bankkontoopplysningene dine og e-postadressen din, slik at kunden kan sende deg betalingsbekreftelsen.

![Bryter for manuell betalingsløsning og boks for betalingsinstruksjoner](/img/config/settings-payment-gateways.png)

Når du har satt det opp, klikker du bare på **Lagre innstillinger**, og du er ferdig. Når brukere registrerer seg på nettverket ditt, vil de se en melding om at de vil motta instruksjonene dine for å fullføre kjøpet.

![Melding om manuell betaling vist under registrering](/img/config/settings-payment-gateways.png)

De vil også få en melding på **Takk**-siden din med betalingsinstruksjonene dine.

![Takk-side som viser betalingsinstruksjoner](/img/config/settings-payment-gateways.png)

## Bekrefte manuelle betalinger

For å bekrefte en manuell betaling går du til **Betalinger**-menyen i sidepanelet til venstre. Der kan du se alle betalingene i nettverket ditt og detaljene deres, inkludert **status**. En manuell betaling vil alltid ha statusen **Venter** til du endrer den manuelt.

![Betalingsliste som viser ventende manuell betaling](/img/admin/payments-list.png)

Gå inn på betalingssiden ved å klikke på **referansekoden**. På denne siden finner du alle detaljene om den ventende betalingen, som referanse-ID, produkter, tidsstempler og mer.

![Betalingsdetaljside med referansekode og produkter](/img/admin/payments-list.png)

I kolonnen til høyre kan du endre statusen på betalingen. Ved å endre den til **Fullført** og **slå på Aktiver medlemskap**-valget, aktiverer du kundens nettsted og medlemskapet deres blir aktivt.

![Endring av betalingsstatus til Fullført med Aktiver medlemskap-bryter](/img/admin/payments-list.png)
