---
title: Hantera betalningar och fakturor
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Hantera betalningar och fakturor

## Betalningsinställningar {#payment-settings}

Innan du börjar ta emot betalningar behöver du konfigurera de betalningsrelaterade inställningarna. Gå till **Ultimate Multisite → Inställningar** och klicka på fliken **Betalning**.

![Flik för betalningsinställningar](/img/admin/settings-payments-top.png)

Här är en fullständig vy av sidan för betalningsinställningar:

![Fullständig sida för betalningsinställningar](/img/admin/settings-payments-full.png)

### Allmänna betalningsalternativ {#general-payment-options}

I de allmänna inställningarna kan du konfigurera:

- **Valuta** — Standardvalutan som används för transaktioner
- **Valutaposition** — Var valutasymbolen visas (före/efter beloppet)

![Inställningar för betalningsgateway](/img/admin/settings-payments-options.png)

### Betalningsgateways {#payment-gateways}

Ultimate Multisite stöder flera betalningsgateways. Du kan aktivera och konfigurera var och en från fliken Betalningsinställningar.

![Konfiguration av betalningsgateway](/img/admin/settings-payments-gateways.png)

Tillgängliga gateways inkluderar:

- **Stripe** — Kreditkortsbetalningar via Stripe
- **PayPal** — PayPal-betalningar
- **Manual** — För offlinebetalningar eller anpassad betalningshantering

Varje gateway har sin egen konfigurationssektion där du anger API-nycklar och andra inställningar.

![Ytterligare gatewayinställningar](/img/admin/settings-payments-gateways-2.png)

### Sandbox-läge {#sandbox-mode}

Du kan aktivera **Sandbox-läge** för att testa din betalningsintegration innan du går live. När sandbox-läget är aktivt görs inga riktiga debiteringar.

## Visa betalningar {#viewing-payments}

Gå till sidan **Betalningar** under Ultimate Multisite för att se alla transaktioner i ditt nätverk.

![Betalningslista](/img/admin/payments-list.png)

Du kan filtrera betalningar efter status (slutförda, väntande, misslyckade, återbetalda) och söka efter specifika transaktioner.

Klicka på en betalning för att se dess fullständiga detaljer, inklusive radposter, associerat medlemskap, kundinformation och data från betalningsgateway.

## Fakturor {#invoices}

Ultimate Multisite kan automatiskt generera fakturor för betalningar. Du kan anpassa fakturamallen och numreringsformatet från betalningsinställningarna.

Alternativ för fakturaanpassning inkluderar:

- **Företagsnamn och adress** som visas på fakturor
- **Fakturanumrering** format och sekvens
- **Logotyp** som visas i fakturahuvudet
- **Anpassad sidfotstext** för villkor, anteckningar eller juridisk information

För att anpassa fakturamallen, gå till **Ultimate Multisite → Inställningar → Betalning** och leta efter de fakturarelaterade inställningarna.
