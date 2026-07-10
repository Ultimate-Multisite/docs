---
title: Bestuur van Betalings en Fakture
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Bestuur van Betalings en Fakture {#managing-payments-and-invoices}

## Betalingsinstellings {#payment-settings}

Voordat jy begin met die ontvang van betalings, moet jy die betaling-verwante instellings konfigureer. Navigeer na **Ultimate Multisite → Settings** en klik op die **Payment** tab.

![Payment settings tab](/img/admin/settings-payments-top.png)

Hier is 'n volledige uitsig van die betalingsinstellingsbladsy:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Algemene Betalingsopsies {#general-payment-options}

In die algemene instellings kan jy konfigureer:

- **Currency** — Die standaardvaluut wat vir transaksies gebruik word
- **Currency Position** — Waar die valuta-simbool verskyn (voor/ná die bedrag)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Betalingspoorte (Payment Gateways) {#payment-gateways}

Ultimate Multisite ondersteun verskeie betalingspoorte. Jy kan elkeen van hierdie poorte inskakel en konfigureer vanaf die Payment settings tab.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Besoekbare poorte sluit in:

- **Stripe** — Kreditkaartbetalings via Stripe
- **PayPal** — PayPal-betalings
- **Manual** — Vir offline of aangepaste betalingsverwerking

Elke poort het sy eie konfigurasiegedeelte waar jy API-sleutels en ander instellings invoer.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox-modus {#sandbox-mode}

Jy kan **Sandbox Mode** inskakel om jou betalingsintegrasie te toets voordat jy dit live skakel. Wanneer sandbox-modus aktief is, sal geen werklike heffings gemaak word nie.

## Betalings Bekyk {#viewing-payments}

Navigeer na die **Payments** bladsy onder Ultimate Multisite om alle transaksies oor jou netwerk te sien.

![Payments list](/img/admin/payments-list.png)

Jy kan betalings filter volgens status (voltooi, uitstaande, misluk, terugbetaal) en na spesifieke transaksies soek.

Klik op 'n betaling om al sy besonderhede te sien, insluitend die itemlyste, verbonde lidmaatskap, kliëntinligting en betalingspoort-data.

## Fakture {#invoices}

Ultimate Multisite kan outomaties fakture genereer vir betalings. Jy kan die faktuur-sjabloon en nommerreeks konfigureer vanaf die Betalingsinstellings.

Faktur-aanpassingopsies sluit in:

- **Maatskappy se naam en adres** wat op fakture vertoon word
- **Faktuurnommerreeks** formaat en volgorde
- **Logo** wat op die faktuurkop vertoon word
- **Aangepaste voettekstek** vir terme, notas of wetlike inligting

Om die faktuur-sjabloon aan te pas, gaan na **Ultimate Multisite → Settings → Payment** en soek na die faktuur-verwante instellings.
