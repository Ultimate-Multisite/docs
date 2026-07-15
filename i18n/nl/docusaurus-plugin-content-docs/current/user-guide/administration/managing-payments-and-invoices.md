---
title: Betalingen en facturen beheren
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Betalingen en facturen beheren

## Betalingsinstellingen {#payment-settings}

Voordat je betalingen gaat ontvangen, moet je de betalingsgerelateerde instellingen configureren. Navigeer naar **Ultimate Multisite → Settings** en klik op het tabblad **Payment**.

![Tabblad Betalingsinstellingen](/img/admin/settings-payments-top.png)

Hier is een volledige weergave van de pagina met betalingsinstellingen:

![Volledige pagina Betalingsinstellingen](/img/admin/settings-payments-full.png)

### Algemene betalingsopties {#general-payment-options}

In de algemene instellingen kun je het volgende configureren:

- **Valuta** — De standaardvaluta die wordt gebruikt voor transacties
- **Valutapositie** — Waar het valutasymbool verschijnt (vóór/na het bedrag)

![Instellingen voor betalingsgateway](/img/admin/settings-payments-options.png)

### Betalingsgateways {#payment-gateways}

Ultimate Multisite ondersteunt meerdere betalingsgateways. Je kunt ze allemaal inschakelen en configureren via het tabblad Payment-instellingen.

![Configuratie van betalingsgateway](/img/admin/settings-payments-gateways.png)

Beschikbare gateways zijn onder andere:

- **Stripe** — Creditcardbetalingen via Stripe
- **PayPal** — PayPal-betalingen
- **Handmatig** — Voor offline of aangepaste betalingsverwerking

Elke gateway heeft een eigen configuratiesectie waar je API keys en andere instellingen invoert.

![Aanvullende gateway-instellingen](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode {#sandbox-mode}

Je kunt **Sandbox Mode** inschakelen om je betalingsintegratie te testen voordat je live gaat. Wanneer Sandbox Mode actief is, worden er geen echte kosten in rekening gebracht.

## Betalingen bekijken {#viewing-payments}

Navigeer naar de pagina **Payments** onder Ultimate Multisite om alle transacties in je netwerk te zien.

![Betalingenlijst](/img/admin/payments-list.png)

Je kunt betalingen filteren op status (voltooid, in behandeling, mislukt, terugbetaald) en zoeken naar specifieke transacties.

Klik op een betaling om de volledige details te bekijken, inclusief de regelitems, bijbehorend lidmaatschap, klantinformatie en betalingsgatewaygegevens.

## Facturen {#invoices}

Ultimate Multisite kan automatisch facturen genereren voor betalingen. Je kunt de factuursjabloon en het nummeringsformaat aanpassen via de betalingsinstellingen.

Opties voor het aanpassen van facturen zijn onder andere:

- **Bedrijfsnaam en adres** weergegeven op facturen
- **Factuurnummering** formaat en volgorde
- **Logo** weergegeven in de factuurkop
- **Aangepaste voettekst** voor voorwaarden, opmerkingen of juridische informatie

Om de factuursjabloon aan te passen, ga je naar **Ultimate Multisite → Settings → Payment** en zoek je naar de factuurgerelateerde instellingen.
