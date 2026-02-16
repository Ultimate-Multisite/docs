---
title: Hantera betalningar och fakturor
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Hantera betalningar och fakturor

## Betalningsinställningar

Innan du börjar ta emot betalningar behöver du konfigurera de betalningsrelaterade inställningarna. Gå till **Ultimate Multisite → Inställningar** och klicka på fliken **Betalning**.

![Fliken för betalningsinställningar](/img/admin/settings-payments-top.png)

### Allmänna betalningsalternativ

I de allmänna inställningarna kan du konfigurera:

- **Valuta** — Standardvalutan som används för transaktioner
- **Valutaposition** — Var valutasymbolen visas (före/efter beloppet)

![Inställningar för betalningsgateway](/img/admin/settings-payments-options.png)

### Betalningsgateways

Ultimate Multisite stöder flera betalningsgateways. Du kan aktivera och konfigurera var och en från fliken Betalningsinställningar.

![Konfiguration av betalningsgateway](/img/admin/settings-payments-gateways.png)

Tillgängliga gateways inkluderar:

- **Stripe** — Kortbetalningar via Stripe
- **PayPal** — PayPal-betalningar
- **Manuell** — För offline- eller anpassad betalningshantering

Varje gateway har sin egen konfigurationssektion där du anger API-nycklar och andra inställningar.

![Ytterligare gateway-inställningar](/img/admin/settings-payments-gateways-2.png)

### Sandlådeläge

Du kan aktivera **Sandlådeläge** för att testa din betalningsintegration innan du går live. När sandlådeläget är aktivt görs inga riktiga debiteringar.

## Visa betalningar

Gå till sidan **Betalningar** under Ultimate Multisite för att se alla transaktioner i ditt nätverk.

![Betalningslista](/img/admin/payments-list.png)

Du kan filtrera betalningar efter status (genomförda, väntande, misslyckade, återbetalade) och söka efter specifika transaktioner.

Klicka på en betalning för att se alla detaljer inklusive radposter, kopplat medlemskap, kundinformation och data från betalningsgatewayen.

## Fakturor

Ultimate Multisite kan automatiskt generera fakturor för betalningar. Du kan anpassa fakturamallen och numreringsformatet från betalningsinställningarna.

Anpassningsalternativ för fakturor inkluderar:

- **Företagsnamn och adress** som visas på fakturor
- **Fakturanumrering** — format och sekvens
- **Logotyp** som visas i fakturahuvudet
- **Anpassad sidfotstext** för villkor, anteckningar eller juridisk information

För att anpassa fakturamallen, gå till **Ultimate Multisite → Inställningar → Betalning** och leta efter de fakturarelaterade inställningarna.
