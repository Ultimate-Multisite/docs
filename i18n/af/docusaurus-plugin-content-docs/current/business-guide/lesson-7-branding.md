---
title: 'Les 7: Maak Dit Joune'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Les 7: Maak Dit Joune

Jou kliënte moet nooit voel of hulle "net 'n WordPress plugin" gebruik nie. Hulle moet voel of hulle FitSite gebruik – 'n platform wat gebou is vir hul bedryf. Hierdie les dek branding, white-labeling, en hoe om die platform te laat voel soos 'n eie produk.

## Waar Ons Gebly Het {#where-we-left-off}

FitSite het 'n werkende checkout-proses wat fiksheidsstudio-eienaars van plankeuse na 'n werklike webwerf neem. Nou laat ons die hele ervaring voel soos 'n samehangende, gebrande produk.

## Jou Platform Domein {#your-platform-domain}

Die fondasie van jou handelsmerk is jou domein. Vir FitSite:

- **Hoofdomein**: `fitsite.com` (jou bemarkingswebwerf en netwerkwortel)
- **Kliëntwebwerwe**: `studioname.fitsite.com` (subdomeine)
- **Aangepaste domeine**: Kliënte op Growth en Pro-planne kan hul eie domein koppel

### Opstel van Jou Domein {#setting-up-your-domain}

1. Registreer jou platformdomein
2. Wys dit na jou hosting-verskaareder
3. Konfigureer wildcard DNS (`*.fitsite.com`) vir kliëntsubdomeine
4. Verseker dat wildcard SSL aktief is

Kyk na [How to Configure Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) vir gedetailleerde instruksies.

## White-Labeling van die Admin-Ervaring {#white-labeling-the-admin-experience}

Wanneer 'n fiksheidsstudio-eienaar in hul webwerf-dashboard aanmeld, moet hulle jou handelsmerk sien, nie WordPress of Ultimate Multisite branding nie.

### Maatgemaakte Aanmeldbladsy {#custom-login-page}

Pas die WordPress-aanmeldbladsy aan om te wys:

- Jou FitSite logo
- Fiksheids-gepaste agtergrondbeeldmateriaal
- Jou handelsmerkkleure

### Dashboard Branding {#dashboard-branding}

Gebruik die [Admin Page Creator](/addons/admin-page-creator) bykomsteen of aangepaste CSS om:

- Die WordPress-logo vervang met jou FitSite logo
- Die admin-kleurskema aan te pas om by jou handelsmerk te pas
- 'n Maatgemaakte dashboard-widget by te voeg met fiksheids-spesifieke vinnige skakels en hulpbronne

### Maatgemaakte Admin-Bladsye {#custom-admin-pages}

Oorweeg om maatgemaakte admin-bladsye te skep wat die mees relevante aksies vir fiksheidsstudio-eienaars aan die oppervlak bring:

- "Redigeer Jou Klasrooster"
- "Pas Trainerprofiele Op"
- "Bekyk Jou Webwerf"

Dit verminder die leerkromme deur nis-relevante aksies vooraan te plaas in plaas daarvan om dit in die standaard WordPress-menu te begrawe.

## Branding van Jou Kommunikasie {#branding-your-communications}

Elke e-pos, faktuur en kennisgewing moet jou handelsmerk versterk.

### Sisteem-E-posse {#system-emails}

Navigeer na **Ultimate Multisite > Settings > Emails** en pas al die sisteem-e-posse aan:

- **Van naam**: FitSite
- **Van e-pos**: hello@fitsite.com
- **E-pos-templates**: Gebruik jou handelsmerkkleure en logo
- **Taal**: Fiksheids-spesifiek deurgaans

Belangrike e-posse om aan te pas:

| E-pos | Algemene Weergawe | FitSite Weergawe |
|-------|----------------|-----------------|
| Welkom | "Jou nuwe webwerf is gereed" | "Jou fiksheidsstudio-webwerf is live" |
| Betalingskwitansie | "Betaling ontvang" | "FitSite-abonnementbetaling bevestig" |
| Proefperiode eindig | "Jou proefperiode eindig binnekort" | "Jou FitSite-proefperiode eindig oor 3 dae – hou jou studio-webwerf live" |

### Fakture {#invoices}

Pas faktuurtemplates aan met:

- Jou FitSite logo en handelsmerkkleure
- Jou besigheidsbesonderhede
- Fiksheids-spesifieke produkname (nie algemene plan-ID's nie)

## Die Kliënt-Webwerf {#the-customer-facing-site}

Jou hoofdomein (`fitsite.com`) benodig 'n bemarkingswebwerf wat die platform verkoop. Dit is geskei van die Ultimate Multisite netwerk-admin – dit is die publieke gesig van jou besigheid.

Belangrike bladsye:

- **Hoofblad**: Duidelike waardeproposisie vir fiksheidsbesighede
- **Kenmerke**: Wat FitSite doen, in fiksheids terme
- **Pryse**: Jou drie planne met nis-spesifieke kenmerkvergelykings
- **Voorbeelde**: Wys webwerwe wat op die platform gebou is
- **Aanmeld**: Skakels na jou checkout-formulier

:::tip Jou Bemarkingswebwerf Kan 'n Netwerkwebwerf Wees
Skep jou bemarkingswebwerf as 'n webwerf binne jou eie netwerk. Dit laat jou toe om dit vanaf dieselfde dashboard te bestuur en demonstreer jou eie platform se vermoëns.
:::

## Maatgemaakte Domein vir Kliënte {#custom-domain-for-customers}

Vir kliënte op planne wat aangepaste domeine insluit, dokumenteer die proses dan duidelik:

1. Kliënt registreer of oordra hul domein na 'n registrator
2. Kliënt pas DNS aan om na jou platform te wys (verskaf presiese rekords)
3. Ultimate Multisite hanteer die domein-mapping en SSL

Skep 'n hulp-artikel of kennisbank-inskrywing spesifiek vir hierdie proses, geskryf vir nie-tegniese fiksheidsstudio-eienaars.

## Die FitSite Netwerk Tot Nou {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Wat Ons Hierdie Les Gebou Het {#what-we-built-this-lesson}

- **Platformdomein en DNS** geconfigureer vir 'n gebrande ervaring
- **White-labeled admin** met FitSite branding deurgaans
- **Aangepaste kommunikasie** – e-posse, fakture en kennisgewings alles op handelsmerk
- **'n Bemarkingswebwerf** wat FitSite aan fiksheidsstudio-eienaars verkoop
- **Dokumentasie vir aangepaste domeine** vir kliënte wat hul eie domein wil hê

---

**Volgende:** [Les 8: Kliënt Onboarding](lesson-8-onboarding) – ons ontwerp die ervaring wat 'n nuwe aanmelding omskep na 'n aktiewe, gelukkige kliënt.
