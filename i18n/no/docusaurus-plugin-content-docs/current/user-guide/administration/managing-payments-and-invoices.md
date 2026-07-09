---
title: Administrere betalinger og fakturaer
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Administrere betalinger og fakturaer

## Betalingsinnstillinger

Før du begynner å motta betalinger, må du konfigurere de betalingsrelaterte innstillingene. Gå til **Ultimate Multisite → Innstillinger** og klikk på fanen **Betaling**.

![Fane for betalingsinnstillinger](/img/admin/settings-payments-top.png)

Her er en full visning av siden for betalingsinnstillinger:

![Full side for betalingsinnstillinger](/img/admin/settings-payments-full.png)

### Generelle betalingsalternativer

I de generelle innstillingene kan du konfigurere:

- **Valuta** — Standardvalutaen som brukes for transaksjoner
- **Valutaposisjon** — Hvor valutasymbolet vises (før/etter beløpet)

![Innstillinger for betalingsgateway](/img/admin/settings-payments-options.png)

### Betalingsgatewayer

Ultimate Multisite støtter flere betalingsgatewayer. Du kan aktivere og konfigurere hver enkelt fra fanen Betalingsinnstillinger.

![Konfigurasjon av betalingsgateway](/img/admin/settings-payments-gateways.png)

Tilgjengelige gatewayer inkluderer:

- **Stripe** — Kredittkortbetalinger via Stripe
- **PayPal** — PayPal-betalinger
- **Manuell** — For offline eller tilpasset betalingsbehandling

Hver gateway har sin egen konfigurasjonsdel der du oppgir API-nøkler og andre innstillinger.

![Ytterligere gateway-innstillinger](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode

Du kan aktivere **Sandbox Mode** for å teste betalingsintegrasjonen før du går live. Når sandbox-modus er aktiv, blir det ikke gjort noen reelle belastninger.

## Vise betalinger

Gå til siden **Betalinger** under Ultimate Multisite for å se alle transaksjoner på tvers av nettverket ditt.

![Betalingsliste](/img/admin/payments-list.png)

Du kan filtrere betalinger etter status (fullført, venter, mislykket, refundert) og søke etter spesifikke transaksjoner.

Klikk på en betaling for å se alle detaljer, inkludert linjeelementer, tilknyttet medlemskap, kundeinformasjon og betalingsgateway-data.

## Fakturaer

Ultimate Multisite kan automatisk generere fakturaer for betalinger. Du kan tilpasse fakturamal og nummereringsformat fra betalingsinnstillingene.

Alternativer for fakturatilpasning inkluderer:

- **Firmanavn og adresse** som vises på fakturaer
- **Fakturanummerering** format og sekvens
- **Logo** som vises i fakturahodet
- **Egendefinert bunntekst** for vilkår, notater eller juridisk informasjon

For å tilpasse fakturamalen går du til **Ultimate Multisite → Innstillinger → Betaling** og ser etter de fakturarelaterte innstillingene.
