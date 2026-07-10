---
title: Håndtering af betalinger og fakturaer
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Administrering betalinger og fakturaer {#managing-payments-and-invoices}

## Betalingsindstillinger {#payment-settings}

Før du begynder at modtage betalinger, skal du indstille de relevante betalingsrelaterede indstillinger. Gå til **Ultimate Multisite → Indstillinger** og klik på fanen **Betaling**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Her er et fuldt overblik over siden for betalingsindstillinger:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Generelle betalingsmuligheder {#general-payment-options}

I de generelle indstillinger kan du konfigurere:

- **Valuta** — Standardvalutaen, der bruges til transaktioner
- **Valutaposition** — Hvor valutasymbolet vises (før/efter beløbet)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Betalingsportaler (Payment Gateways) {#payment-gateways}

Ultimate Multisite understøtter flere betalingsportaler. Du kan aktivere og konfigurere hver enkelt fra fanen Betaling.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Tilgængelige portaler inkluderer:

- **Stripe** — Kreditkortbetaling via Stripe
- **PayPal** — PayPal betalinger
- **Manuel** — Til offline eller specialtilpasset betalingsbehandling

Hver portal har sin egen konfigurationssektion, hvor du indtaster API-nøgler og andre indstillinger.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox-tilstand (Sandbox Mode) {#sandbox-mode}

Du kan aktivere **Sandbox Mode** til at teste din betalingsintegration, før du går i produktion. Når sandbox mode er aktiv, vil der ikke blive foretaget rigtige opkrævninger.

## Se betalinger {#viewing-payments}

Gå til siden **Betalinger** under Ultimate Multisite for at se alle transaktioner på tværs af dit netværk.

![Payments list](/img/admin/payments-list.png)

Du kan filtrere betalingerne efter status (fuldført, ventende, mislykket, refunderet) og søge efter specifikke transaktioner.

Klik på en betaling for at se alle detaljer, herunder varelisten, tilknyttet medlemskab, kundedata og data fra betalingsportalen.

## Fakturaer (Invoices) {#invoices}

Ultimate Multisite kan automatisk generere fakturaer for betalinger. Du kan tilpasse fakturaskabelonen og nummerformatet fra Indstillingerne for Betalinger (Payment settings).

Muligheder for fakturakustomisering inkluderer:

- **Virksomhedsnavn og adresse**, der vises på fakturaerne
- **Fakturanummerering**s format og rækkefølge
- **Logo**, der vises i fakturaens header
- **Tilpasset fodnote-tekst** til vilkår, noter eller juridisk information

For at tilpasse fakturaskabelonen skal du gå til **Ultimate Multisite → Indstillinger (Settings) → Betaling (Payment)** og kigge efter de indstillinger, der er relateret til fakturaer.
