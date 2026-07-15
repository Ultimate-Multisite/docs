---
title: 'Les 12: Die Besigheid Bedryf'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Les 12: Die Besigheid Bedryf

'n Platform is nie 'n projek wat jy voltooi nie – dit is 'n besigheid wat jy bedryf. Hierdie les dek die daaglikse werking van die bestuur van FitSite: ondersteuning, fakturering, onderhoud, en die geluk van kliënte.

## Waar Ons Gebly Het {#where-we-left-off}

FitSite is live en kliënte skryf in. Nou moet jy die operasie volhoubaar bedryf.

## Daaglikse Operasies {#daily-operations}

### Monitoriesering {#monitoring}

Kontroleer hierdie daagliks (of stel waarskuwings in):

- **Uptime**: Is die platform beskikbaar? Gebruik 'n uptime-monitorieseringdiens.
- **Nuwe registrasies**: Hoeveel nuwe kliënte het vandag geregistreer?
- **Mislukte betalings**: Is daar betalingsmislukking wat aandag benodig?
- **Ondersteuningsversoeke**: Is daar onbeantwoorde kliëntvrae?

### Kliëntondersteuning {#customer-support}

Jou nis-fokus is hier 'n voordeel. Aangesien al jou kliënte fiksheidsstudio's is, sal jy dieselfde vrae herhaaldelik sien:

**Algemene vrae wat jy sal kry:**

- "Hoe pas ek my klasrooster aan?"
- "Kan ek die kleure van my webwerf verander?"
- "Hoe voeg ek 'n nuwe afrigter by my webwerf?"
- "My domein werk nie"
- "Hoe kanselleer/gradeer ek my plan?"

Bou jou kennisbank (wat in Les 8 begin is) rondom hierdie herhalende vrae. Elke ondersteuningskaartjie wat 'n kennisbankartikel kon wees, is 'n teken om daardie artikel te skryf.

### Ondersteuningsvlakke {#support-tiers}

Soos jy groei, struktureer ondersteuning volgens plan:

| Plan | Ondersteuningsvlak | Reaksietyd |
|------|--------------|---------------|
| Starter | Kennisbank + e-pos | 48 uur |
| Growth | E-posondersteuning | 24 uur |
| Pro | Prioriteits-e-pos + aanleergesprek | 4 uur |

Die [Support Tickets addon](/addons/support-tickets) kan help om ondersteuningsversoeke binne die platform te bestuur.

## Faktureringse-operasies {#billing-operations}

### Herhalende Betalings {#recurring-payments}

Ultimate Multisite hanteer herhalende fakturering outomaties deur jou betalingshek. Jou taak is om te monitor vir:

- **Mislukte betalings**: Volg op betyds. Die meeste mislukkings is verlate kaarte, nie doelbewuste kansellasies nie.
- **Dunning**: Stel outomatiese herprobeerlogika in deur jou betalingshek (Stripe hanteer dit goed)
- **Kansellasieversoeke**: Verstaan waarom kliënte vertrek. Elke kansellasie is terugvoer.

### Bestuur van Lidmaatskap {#managing-memberships}

Navigeer na **Ultimate Multisite > Memberships** om:

- Alle aktiewe subskripsies te sien
- Gradeer- en afgradeerversoeke te hanteer
- Terugbetaling te verwerk wanneer nodig
- Proefperiode-verval te bestuur

Sien [Managing Memberships](/user-guide/administration/managing-memberships) vir die volledige verwysing.

### Fakturering {#invoicing}

Maak seker dat fakture korrek vir elke betaling gegenereer word. Kliënte kan fakture nodig hê vir besigheidskostebekoming. Sien [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices).

## Platformonderhoud {#platform-maintenance}

### WordPress en Plugin Opdaterings {#wordpress-and-plugin-updates}

As die netwerkbeheerder is jy verantwoordelik vir:

- **WordPress kernopdaterings**: Toets op 'n staging-werf voordat dit op produksie toegepas word
- **Plugin opdaterings**: Selfs – eers toets, dan netwerkwyd toepas
- **Tema-opdaterings**: Verifieer dat templates nog korrek lyk na tema-opdaterings
- **Ultimate Multisite opdaterings**: Volg die veranderingslogboek en toets voordat jy opdateer

:::warning Moenie in Produksie Opdateer Sonder Te Toets Nie
'n Gebreekte opdatering beïnvloed elke kliëntwebwerf op jou netwerk. Toets altyd op 'n staging-kopie van jou netwerk eers.
:::

### Sekuriteit {#security}

- Hou al die sagteware op datum
- Gebruik sterk wagwoorde en tweefaktor-verifikasie vir admin-rekeninge
- Monitor vir verdagte aktiwiteit
- Het 'n plan vir sekuriteitsvoorvalle

### Prestasie {#performance}

Soos jou netwerk groei, monitor:

- **Webbladlaaitye**: Is kliëntwebwerwe vinnig?
- **Bedienershulpbrongebruik**: CPU, geheue, skyfreis
- **Databasisprestasie**: Groot netwerke benodig databasisoptimalisering oor tyd

Oorweeg om caching (bladsy-cache, objek-cache) en 'n CDN te implementeer as jy dit nog nie gedoen het nie. Die [Cloudflare integration](/user-guide/host-integrations/cloudflare) hanteer baie hiervan.

## Bestuur van Kliëntlewensiklus {#customer-lifecycle-management}

### Churn Verminder {#reducing-churn}

Churn is die persentasie kliënte wat elke maand kanselleer. Vir 'n subskripsiebesigheid is die vermindering van churn net so belangrik as die verkryging van nuwe kliënte.

**Algemene redes waarom fiksheidsstudio-kliënte churn:**

- Hulle kon nie uitvind hoe om die platform te gebruik nie → verbeter die aanleerproses
- Die webwerf het nie goed genoeg gelyk nie → verbeter templates
- Hulle het nie waarde gesien nie → verbeter funksies of kommunikasie
- Hulle het 'n goedkoper alternatief gevind → versterk jou niswaarde
- Hulle besigheid het gesluit → onvermydelik, maar volg dit apart

### Aanmoediging van Opgraderings {#encouraging-upgrades}

Kliënte op Starter wat suksesvol is, moet aangemoedig word om op te gradeer:

- Wanneer hulle planlimiete bereik (webwerwe, berging), toon opgraderingsprompts
- Stuur gerigte e-posse wat Growth-plan kenmerke uitlig wat hulle sal bevoordeel
- Wys uit wat Growth/Pro kliënte gebou het

### Win-Back Kampanjes {#win-back-campaigns}

Wanneer 'n kliënt kanselleer:

1. Vra waarom (uitgangveroorsaking of e-pos)
2. Behandel hul kommer indien moontlik
3. Bied 'n afslag om terug te keer (30-60 dae na kansellasie)

## Weeklikse en Maandelikse Roetines {#weekly-and-monthly-routines}

### Weekliks {#weekly}

- Evalueer nuwe registrasies en kansellasies
- Beantwoord alle oop ondersteuningsversoeke
- Kontroleer platformprestasie en uptime
- Evalueer enige mislukkte betalings

### Maandeliks {#monthly}

- Analiseer sleutelmetrieke (MRR, churn, nuwe kliënte, opgraderings)
- Pas WordPress en plugin opdaterings toe (na staging-toets)
- Evalueer en verbeter die kennisbank op grond van ondersteuningspatrone
- Stuur 'n nuusbrief of opdatering aan kliënte (nuwe kenmerke, wenke, fiksheidsbedryfsnuus)

### Kwartaalliks {#quarterly}

- Evalueer pryse teenoor mededingers en kliëntterugvoer
- Evalueer template-ontwerpe – het hulle 'n verfrissing nodig?
- Beoordeel hostingkapasiteit – moet jy skaal?
- Evalueer en verbeter die aanleerproses op grond van aktiveringdata

## Wat Ons Hierdie Les Gebou Het {#what-we-built-this-lesson}

- **Daaglikse monitorieseringsroetines** vir uptime, registrasies, betalings en ondersteuning
- **'n Gelaagde ondersteuningsstruktuur** wat by planvlakke pas
- **Faktureringse-operasies** insluitend dunning en kansellasiehantering
- **Onderhoudsprosedures** vir opdaterings, sekuriteit en prestasie
- **Churn-verminderingstrategieë** spesifiek vir die fiksheidsnis
- **Weeklikse, maandelikse en kwartaallike operasionele roetines**

---

**Volgende:** [Les 13: Skaal Op](lesson-13-growth) -- FitSite groei van 'n klein operasie na 'n regte besigheid.
