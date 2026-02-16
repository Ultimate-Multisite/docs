---
title: Administrere betalinger og fakturaer
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Administrere betalinger og fakturaer

## Betalingsinnstillinger

Før du begynner å motta betalinger, må du konfigurere innstillingene for betaling. Gå til **Ultimate Multisite → Innstillinger** og klikk på fanen **Betaling**.

![Fanen for betalingsinnstillinger](/img/admin/settings-payments-top.png)

### Generelle betalingsalternativer

I de generelle innstillingene kan du konfigurere:

- **Valuta** — Standardvalutaen som brukes for transaksjoner
- **Valutaplassering** — Hvor valutasymbolet vises (før/etter beløpet)

![Innstillinger for betalingsløsninger](/img/admin/settings-payments-options.png)

### Betalingsløsninger

Ultimate Multisite støtter flere betalingsløsninger. Du kan aktivere og konfigurere hver enkelt fra fanen for betalingsinnstillinger.

![Konfigurasjon av betalingsløsninger](/img/admin/settings-payments-gateways.png)

Tilgjengelige løsninger inkluderer:

- **Stripe** — Kortbetalinger via Stripe
- **PayPal** — PayPal-betalinger
- **Manuell** — For offline eller tilpasset betalingshåndtering

Hver betalingsløsning har sin egen konfigurasjonsseksjon hvor du legger inn API-nøkler og andre innstillinger.

![Flere innstillinger for betalingsløsninger](/img/admin/settings-payments-gateways-2.png)

### Sandkassemodus

Du kan aktivere **Sandkassemodus** for å teste betalingsintegrasjonen før du går live. Når sandkassemodus er aktiv, blir det ikke gjort noen reelle belastninger.

## Vise betalinger

Gå til **Betalinger**-siden under Ultimate Multisite for å se alle transaksjoner på tvers av nettverket ditt.

![Betalingsliste](/img/admin/payments-list.png)

Du kan filtrere betalinger etter status (fullført, ventende, mislykket, refundert) og søke etter spesifikke transaksjoner.

Klikk på en betaling for å se alle detaljer, inkludert linjeenheter, tilknyttet medlemskap, kundeinformasjon og data fra betalingsløsningen.

## Fakturaer

Ultimate Multisite kan automatisk generere fakturaer for betalinger. Du kan tilpasse fakturamalen og nummereringsformatet fra betalingsinnstillingene.

Alternativer for fakturatilpasning inkluderer:

- **Firmanavn og adresse** som vises på fakturaer
- **Fakturanummerering** — format og rekkefølge
- **Logo** som vises i fakturaens topptekst
- **Tilpasset bunntekst** for vilkår, notater eller juridisk informasjon

For å tilpasse fakturamalen, gå til **Ultimate Multisite → Innstillinger → Betaling** og se etter de fakturarelaterte innstillingene.
