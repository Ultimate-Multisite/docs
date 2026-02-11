---
title: Betalingen en facturen beheren
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Beheren van betalingen en facturen

## Betalingsinstellingen

Voordat je begint met het ontvangen van betalingen, moet je de betalingsgerelateerde instellingen configureren. Navigeer naar **Ultimate Multisite → Settings** en klik op het **Payment** tabblad.

![Betaalinstellingen tab](/img/admin/settings-payments-top.png)

### Algemene betalingsopties

In de algemene instellingen kun je configureren:

- **Currency** — De standaardvaluta die voor transacties wordt gebruikt
- **Currency Position** — Waar het valutapictogram verschijnt (voor/na het bedrag)

![Betalingsgateway-instellingen](/img/admin/settings-payments-options.png)

### Betalingsgateways

Ultimate Multisite ondersteunt meerdere betalingsgateways. Je kunt elke gateway inschakelen en configureren via het Betalingsinstellingen-tabblad.

![Configuratie van betalingsgateway](/img/admin/settings-payments-gateways.png)

Beschikbare gateways zijn onder andere:

- **Stripe** — Creditcardbetalingen via Stripe
- **PayPal** — PayPal-betalingen
- **Manual** — Voor offline of aangepaste betalingsverwerking

Elke gateway heeft een eigen configuratiesectie waarin je API-sleutels en andere instellingen invoert.

![Extra gateway-instellingen](/img/admin/settings-payments-gateways-2.png)

### Sandbox-modus

Je kunt **Sandbox Mode** inschakelen om je betalingsintegratie te testen voordat je live gaat. Wanneer sandbox-modus actief is, worden er geen echte kosten in rekening gebracht.

## Betalingen bekijken

Navigeer naar de pagina **Payments** onder Ultimate Multisite om alle transacties in je netwerk te zien.

![Betalingenlijst](/img/admin/payments-list.png)

Je kunt betalingen filteren op status (voltooid, in behandeling, mislukt, terugbetaald) en zoeken naar specifieke transacties.

Klik op een betaling om alle details te zien, inclusief de line items, bijbehorende lidmaatschap, klantinformatie en betalingsgatewaygegevens.

## Facturen

Ultimate Multisite kan automatisch facturen genereren voor betalingen. Je kunt het factuursjabloon en het nummeringsformaat aanpassen via de Betalingsinstellingen.

Factuuraanpassingsopties omvatten:

- **Company name and address** weergegeven op facturen
- **Invoice numbering** formaat en volgorde
- **Logo** weergegeven in de factuurheader
- **Custom footer text** voor voorwaarden, notities of juridische informatie

Om het factuursjabloon aan te passen, ga naar **Ultimate Multisite → Settings → Payment** en zoek naar de factuurgerelateerde instellingen.
