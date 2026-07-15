---
title: Stjórnun betalingar og vöndu skjalanna
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Stjórnun greiðslum og faktu

## Greiðslustillingar {#payment-settings}

Fyrir að þú byrjar að fá greiðslur þarftu að stilla greiðslustillingarinn. Navigera í **Ultimate Multisite → Settings** og klikka á flugvötti **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Hér er fullt sýn á síðunni fyrir greiðslustillingar:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Almennar greiðslustillingar {#general-payment-options}

Í almennum stillingunum geturð þú stillt:

- **Currency** — Skilfandi valuta sem er notað fyrir greiðslur
- **Currency Position** — Hvar skilfandi symbolinn kemur (fyrir/eftir eftir ákveðnum fjárhæð)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Greiðslustöðvar (Payment Gateways) {#payment-gateways}

Ultimate Multisite stendur fyrir fleiri greiðslustöðvum. Þú getur aktivert og stillt hverja þær úr flugvötti **Payment**.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Til aðgengileg stöðvar eru:

- **Stripe** — Kredittkortgreiðslur með Stripe
- **PayPal** — PayPal greiðslur
- **Manual** — Til oflinn eða sérstaka greiðslustöðvum

Hver stöðva hefur sína eigin skiptingarskilninga fyrir þar sem þú skilur API keys og andre stillingar.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode (Teststöð) {#sandbox-mode}

Þú getur aktivert **Sandbox Mode** til að prófa greiðslustöðva þín áður en þú byrjar við. Þegar sandbox mode er á, verða ekki framkvæmdar raunverulegar greiðslur.

## Sjá greiðslur {#viewing-payments}

Navigera í **Payments** síðuna undir Ultimate Multisite til að sjá allar skiptingarnir yfir nýtinguna þína.

![Payments list](/img/admin/payments-list.png)

Þú getur filtríð greiðslur eftir stöðu (fullfærð, pending, failed, refunded) og leita eftir sérstökum skiptingum.

Klikk á betalningu til að sjá allar upplýsingar um hana, sérstaklega liðin í reikningum, tengd lánning/meðferðir, viðskiptavarkupplunar og upplýsingar um betalingsvegi.

## Reikningar (Invoices) {#invoices}

Ultimate Multisite getur sjálft aðgengst að skráningum fyrir betalingar. Þú getur sérsniðið mallinn reikninga og formáttir númerunar með innstillingunum fyrir betalingar.

Átkomandi valkostir fyrir sniðning reikninga eru:

- **Fyrirtækja námsmiðli og hefur** sem sýnist á reikningum
- **Formáttur og sekvens** fyrir númerun reikninga
- **Logó** sem sýnist í hvarfari reikningans
- **Sérsniðin texti í hvarfari** fyrir viðskiptalög, athugasemdir eða lögfræðilega upplýsingar

Til að sniðast reikningamallinn, ferðu yfir til **Ultimate Multisite → Settings → Payment** og leita eftir innstillingunum sem eru tengdar reikningum.
