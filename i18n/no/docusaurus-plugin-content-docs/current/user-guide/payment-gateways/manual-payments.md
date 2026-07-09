---
title: Konfigurere manuelle betalinger
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Sette opp manuelle betalinger (v2)

_**VIKTIG MERKNAD: Denne artikkelen refererer til Ultimate Multisite versjon 2.x.**_

Manuelle betalinger er en måte for deg å tilby andre betalingsmetoder dersom **Stripe** eller **PayPal** ikke er tilgjengelig for brukerne dine. Det kan være en bankoverføring eller en annen betalingsmetode som er tilgjengelig for brukerne dine lokalt.

## Slik aktiverer du manuelle betalinger

Det er veldig enkelt å sette opp manuell betaling. Du trenger bare å aktivere det under betalingsportaler og legge inn detaljerte instruksjoner om hvordan brukeren skal sende betalingen.

Gå først til **Ultimate Multisite > Settings > Payments**. Under **Payment Gateways** slår du **Manual** på. Du vil se at en **Payment Instructions**-boks vises for deg.

Legg til informasjonen kunden din trenger for å gjennomføre betalingen i denne boksen. Det kan for eksempel være bankkontodetaljene dine og e-posten din, slik at kunden kan sende deg betalingsbekreftelsen.

![Bryter for manuell betalingsportal med tekstområde for Payment Instructions](/img/config/manual-gateway-expanded.png)

Her er grensesnittet for innstillinger for manuell betalingsportal:

![Innstillinger for manuell betalingsportal](/img/config/manual-gateway-settings.png)

Etter at du har satt det opp, klikker du bare på **Save Settings**, så er det gjort. Når brukere registrerer seg i nettverket ditt, vil de se en melding som forteller dem at de vil motta instruksjonene dine for å fullføre kjøpet.

![Registreringsbekreftelse som forteller brukeren at de vil motta betalingsinstruksjoner](/img/frontend/registration-manual-notice.png)

Og de vil også motta en melding på **Thank You**-siden din med betalingsinstruksjonene dine.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Bekrefte manuelle betalinger

For å bekrefte en manuell betaling går du til **Payments**-menyen i venstre felt. Der kan du se alle betalingene i nettverket ditt og detaljene deres, inkludert **status**. En manuell betaling vil alltid ha statusen **Pending** til du endrer den manuelt.

![Betalingsliste som viser ventende manuell betaling](/img/admin/payments-list.png)

Gå inn på betalingssiden ved å klikke på **reference code**. På denne siden har du alle detaljene om den ventende betalingen, som referanse-ID, produkter, tidsstempler og mer.

![Side med betalingsdetaljer som viser referansekode, produkter og totalbeløp](/img/admin/payment-edit.png)

I høyre kolonne kan du endre statusen for betalingen. Hvis du endrer den til **Completed** og **slår på Activate Membership**-alternativet, aktiveres kundens nettsted, og medlemskapet deres blir aktivt.

![Side for redigering av betaling med Status satt til Completed og Activate Membership-bryter](/img/admin/payment-activate-membership.png)
