---
title: Lidmaatschap verlopen en site blokkeren
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Expiratie van lidmaatschappen en blokkeren van de site

Deze handleiding legt uit hoe Ultimate Multisite omgaat met de expiratie van lidmaatschappen, het aflopen van proefperiodes en het blokkeren van de site op de frontend. Het behandelt de levenscyclus van een lidmaatschap, van actief naar verlopen, de instellingen die bepalen of sites worden geblokkeerd, en wat u moet controleren als sites toegankelijk blijven nadat een lidmaatschap is verlopen.

## Levenscyclus van het lidmaatschap {#membership-status-lifecycle}

Elk lidmaatschap in Ultimate Multisite heeft een van de volgende statussen:

:::note Gratis lidmaatschappen zijn levenslang
Gratis lidmaatschappen verlopen niet automatisch. Ultimate Multisite beschouwt ze als levenslange toegang, dus ze worden niet meegenomen in expiratiecontroles, tenzij een beheerder hun status wijzigt of de klant naar een ander product verplaatst.
:::

| Status | Betekenis |
|---|---|
| **Pending** | Wachtend op de eerste betaling of e-mailverificatie |
| **Trialing** | Actieve proefperiode, nog geen betaling ontvangen |
| **Active** | Betaald en geldig |
| **On Hold** | Verlengingsbetaling staat uit (factuur aangemaakt, wachtend op betaling) |
| **Expired** | Verstreken na de vervaldatum en de gratieperiode zonder verlenging |
| **Cancelled** | Expliciet geannuleerd door de klant of de beheerder |

### Hoe lidmaatschappen overgaan naar verlopen {#how-memberships-transition-to-expired}

Ultimate Multisite voert **elke uur** een achtergrondcontrole uit op lidmaatschappen die als verlopen moeten worden gemarkeerd. Deze controle gebruikt [Action Scheduler](https://actionscheduler.org/) (niet direct WP-Cron) en draait als de geplande actie `wu_membership_check`.

De expiratiecontrole heeft standaard een **ingebouwde gratieperiode van 3 dagen**. Een lidmaatschap wordt pas als `expired` gemarkeerd nadat 3 dagen zijn verstreken na de `date_expiration`. Dit geeft klanten tijd om een achterstallige betaling te voldoen voordat hun status verandert.

:::info
De 3-daagse expiratiegratieperiode is gescheiden van de instelling 'Frontend Block Grace Period' die hieronder wordt beschreven. De expiratiegratieperiode bepaalt wanneer de **status verandert** van actief/on-hold naar verlopen. De frontend block grace period bepaalt wanneer de **site wordt geblokkeerd** nadat de status al is veranderd.
:::

#### Auto-vernieuwende versus niet-auto-vernieuwende lidmaatschappen {#auto-renewing-vs-non-auto-renewing-memberships}

Dit onderscheid is cruciaal voor het begrijpen van het expiratiegedrag:

- **Niet-auto-vernieuwende lidmaatschappen** (`auto_renew = false`): De uurlijkse cron job beheert de volledige levenscyclus – het creëert verlengingsbetalingen, verandert het lidmaatschap naar on-hold, en markeert het uiteindelijk als verlopen als er geen betaling binnenkomt.

- **Auto-vernieuwende lidmaatschappen** (`auto_renew = true`): De cron expiratiecontrole **negeert deze volledig**. De payment gateway (Stripe, PayPal, etc.) wordt verwacht Ultimate Multisite te laten weten via webhooks wanneer een abonnement mislukt of wordt geannuleerd. Als de webhook niet wordt ontvangen – vanwege een verkeerd geconfigureerd endpoint, een gateway-uitval, of een abonnement dat buiten het systeem wordt geannuleerd – kan het lidmaatschap onbepaald `active` blijven, zelfs nadat de vervaldatum is verstreken.

### Hoe proefperiodes aflopen {#how-trials-end}

Wanneer de proefperiode van een proeflidmaatschap eindigt, voert het systeem de volgende stappen uit:

1. Het creëert een uitstaande verlengingsbetaling met het volledige abonnementsbedrag.
2. Het verandert de status van het lidmaatschap van `trialing` naar `on-hold`.
3. Het stuurt een e-mailmelding over de verlengingsbetaling naar de klant.

Dit proces draait op dezelfde uurlijkse planning als de reguliere expiratiecontrole, maar **alleen voor niet-auto-vernieuwende lidmaatschappen**. Voor auto-vernieuwende proefperiodes regelt de payment gateway de overgang van proef naar betaald abonnement.

## Frontend-toegang blokkeren {#block-frontend-access}

Standaard wordt, wanneer een lidmaatschap verloopt of op pauze wordt gezet, **alleen het wp-admin dashboard beperkt**. De openbare frontend van de site blijft toegankelijk voor bezoekers. Om ook de openbare toegang te blokkeren, moet u de instelling **Block Frontend Access** inschakelen.

### De instelling configureren {#configuring-the-setting}

Navigeer naar **Ultimate Multisite > Settings > Memberships** en schakel **Block Frontend Access** in.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Hier is een volledig overzicht van de instellingenpagina voor lidmaatschappen:

![Membership settings full page](/img/config/settings-membership-full.png)

Drie gerelateerde instellingen beheersen dit gedrag:

| Instelling | Beschrijving | Standaard |
|---|---|---|
| **Block Frontend Access** | Hoofd-toggle. Blokkeert de openbare frontend van netwerkwebsites wanneer het lidmaatschap niet langer actief is. | Uit |
| **Frontend Block Grace Period** | Aantal dagen wachten nadat het lidmaatschap inactief is voordat geblokkeerd wordt. Stel in op `0` om onmiddellijk te blokkeren. | 0 |
| **Frontend Block Page** | Een pagina op de hoofdsite waar bezoekers naartoe worden doorgestuurd wanneer een site geblokkeerd is. Als deze niet is ingesteld, zien bezoekers een algemene melding "Site niet beschikbaar". | Geen |

### Wat bezoekers zien wanneer een site geblokkeerd is {#what-visitors-see-when-a-site-is-blocked}

Wanneer de frontend-toegang is geblokkeerd, zullen bezoekers van de site ofwel:

1. **Worden doorgestuurd** naar de pagina die u heeft geselecteerd in **Frontend Block Page** (indien geconfigureerd), of
2. **Een standaardmelding zien**: "Deze site is op dit moment niet beschikbaar." met een link naar de inlogpagina voor de sitebeheerder.

Sitebeheerders kunnen nog steeds inloggen – de inlogpagina wordt nooit geblokkeerd.

### Wat en wanneer wordt geblokkeerd {#what-gets-blocked-and-when}

Het blokkeringsgedrag hangt af van de status van het lidmaatschap:

| Lidmaatschap Status | Frontend Geblokkeerd? | Gratieperiode van toepassing? |
|---|---|---|
| Active | Nee | -- |
| Trialing | **Nee** (zie opmerking hieronder) | -- |
| On Hold | Wordt beschouwd als actief -- niet geblokkeerd | -- |
| Expired | **Ja**, als Block Frontend Access aan staat | Ja |
| Cancelled | **Ja**, altijd (ongeacht de instelling) | **Nee** -- onmiddellijk geblokkeerd |
| Pending | Niet geblokkeerd via de lidmaatschapscontrole | -- |

:::warning Proeflidmaatschappen worden niet geblokkeerd
Zelfs als een proefperiode is afgelopen, zal een lidmaatschap met de status `trialing` **niet** worden geblokkeerd op de frontend. Het proeflidmaatschap moet eerst overgaan naar een andere status (meestal `on-hold` via de cron job, en vervolgens `expired` indien niet betaald). Als u proeflidmaatschappen ziet die niet zijn overgegaan, controleer dan de onderstaande sectie over probleemoplossing.
:::

:::note Geannuleerde lidmaatschappen omzeilen de gratieperiode
Geannuleerde lidmaatschappen worden altijd geblokkeerd nadat de vervaldatum is verstreken, ongeacht of Block Frontend Access ingeschakeld is. De Frontend Block Grace Period is **niet** van toepassing op geannuleerde lidmaatschappen.
:::

## Probleemoplossing: Sites blijven toegankelijk na expiratie {#troubleshooting-sites-remaining-accessible-after-expiration}

Als sites openbaar toegankelijk blijven nadat een lidmaatschap is verlopen, werk dan de volgende controles in volgorde door:

### 1. Controleer of de instelling Block Frontend Access is ingeschakeld {#1-verify-the-block-frontend-access-setting-is-enabled}

Ga naar **Ultimate Multisite > Settings > Memberships** en bevestig dat de toggle **Block Frontend Access** aan staat. Deze instelling is **standaard uit**, wat betekent dat alleen wp-admin wordt beperkt wanneer een lidmaatschap inactief wordt.

### 2. Controleer de Frontend Block Grace Period {#2-check-the-frontend-block-grace-period}

Op dezelfde instellingenpagina, controleer de waarde van de **Frontend Block Grace Period**. Als deze bijvoorbeeld is ingesteld op 7 dagen, wordt de frontend dan niet geblokkeerd totdat 7 dagen zijn verstreken na de vervaldatum van het lidmaatschap – zelfs als de lidmaatschapstatus al `expired` is.

Stel dit in op `0` als u onmiddellijke blokkering wilt nadat het lidmaatschap inactief is.

### 3. Bevestig dat de lidmaatschapstatus daadwerkelijk is veranderd {#3-confirm-the-membership-status-has-actually-changed}

Ga naar **Ultimate Multisite > Memberships** en controleer de status van het betreffende lidmaatschap. Als deze nog steeds `active` toont, ondanks dat de vervaldatum is verstreken, is de statusovergang niet gebeurd. Veelvoorkomende oorzaken:

- **Het lidmaatschap is auto-vernieuwend**: Controleer het veld `auto_renew` op de bewerkingspagina van het lidmaatschap. Als auto-vernieuwing is ingeschakeld, slaat de expiratiecron dit lidmaatschap over – het is afhankelijk van de payment gateway om de mislukking te melden. Controleer uw gateway dashboard (Stripe, PayPal) om te bevestigen dat de abonnementsstatus overeenkomt met wat Ultimate Multisite weergeeft.

- **De cron job is niet uitgevoerd**: Zie de volgende stap.

### 4. Controleer of Action Scheduler draait {#4-verify-action-scheduler-is-running}

Ultimate Multisite gebruikt Action Scheduler voor zijn cron jobs. Ga naar **Tools > Scheduled Actions** in het netwerkadmin en zoek naar:

- **`wu_membership_check`** -- Dit moet verschijnen als een terugkerende actie die elk uur draait. Als deze ontbreekt, worden de lidmaatschapscontroles niet gepland.
- **`wu_async_mark_membership_as_expired`** -- Dit zijn individuele taken om specifieke lidmaatschappen als verlopen te markeren. Als u hier mislukte acties ziet, kunnen deze foutmeldingen bevatten die uitleggen waarom.

Als u vastgelopen of mislukte acties ziet, heeft u mogelijk een probleem met Action Scheduler. Veelvoorkomende oorzaken:

- **`DISABLE_WP_CRON` is ingesteld op `true`** in `wp-config.php` zonder een systeem-niveau cronvervanging
- **Laag siteverkeer** -- WP-Cron draait alleen wanneer iemand de site bezoekt

Om betrouwbare cron-uitvoering te garanderen, stel u een systeemcronjob in:

```bash
# Run every 5 minutes via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Of via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Controleer op Webhook-problemen van de Gateway (Auto-vernieuwende lidmaatschappen) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Als het lidmaatschap auto-vernieuwend is en het abonnementsabonnement is geannuleerd of is mislukt, maar Ultimate Multisite toont het nog steeds als `active`:

- **Stripe**: Ga naar het Stripe Dashboard > Customers en controleer de abonnementsstatus. Controleer vervolgens of het webhook endpoint actief is onder Developers > Webhooks. Het endpoint moet wijzen naar uw site en succesvolle leveringen tonen.
- **PayPal**: Controleer de abonnementsstatus in uw PayPal zakelijke account en verifieer de IPN/webhook-levering.

Als de gateway het abonnement als geannuleerd weergeeft, maar Ultimate Multisite niet, is de webhook-melding waarschijnlijk verloren gegaan. U kunt de lidmaatschapstatus handmatig wijzigen in **Ultimate Multisite > Memberships > [Bewerk Lidmaatschap]**.

### 6. Controleer de Expiratiegratieperiode (Cron Niveau) {#6-check-the-expiration-grace-period-cron-level}

De croncontrole heeft zijn eigen gratieperiode (standaard: 3 dagen) voordat een lidmaatschap als verlopen wordt gemarkeerd. Dit is gescheiden van de frontend block grace period. De totale tijd voordat een site wordt geblokkeerd kan zijn:

**Expiratiegratieperiode (3 dagen)** + **Frontend block grace period (uw instelling)** = Totale vertraging

Bijvoorbeeld, met standaardinstellingen en een frontend gratieperiode van 7 dagen, kan het oplopen tot 10 dagen na de `date_expiration` voordat de site daadwerkelijk wordt geblokkeerd.

### 7. Handmatig een lidmaatschap laten verlopen {#7-manually-expire-a-membership}

Als u een site onmiddellijk wilt blokkeren zonder te wachten op de croncyclus, kunt u de status van het lidmaatschap handmatig wijzigen:

1. Ga naar **Ultimate Multisite > Memberships**
2. Klik op het betreffende lidmaatschap
3. Wijzig de status naar **Expired** of **Cancelled**
4. Klik op **Save**

De frontend-blokkering treedt in werking bij de volgende paginalading (onderhevig aan de Frontend Block Grace Period voor verlopen lidmaatschappen, of onmiddellijk voor geannuleerde lidmaatschappen).

## Samenvatting {#summary}

De volledige tijdlijn van vervaldatum tot siteblokkering:

```text
date_expiration verstreken
       |
       v
  [3-daagse cron gratieperiode]     <-- lidmaatschap toont nog steeds actief/on-hold
       |
       v
  Cron markeert lidmaatschap als "expired"
       |
       v
  [Frontend Block Grace Period]  <-- geconfigureerd in Settings > Memberships
       |
       v
  Site frontend wordt geblokkeerd
```

Voor geannuleerde lidmaatschappen is het pad korter:

```text
  Lidmaatschap geannuleerd
       |
       v
  date_expiration verstreken (geen gratieperiode)
       |
       v
  Site frontend wordt onmiddellijk geblokkeerd
```

## Developer Reference {#developer-reference}

De volgende hooks en filters stellen u in staat het expiratie- en blokkeringsgedrag aan te passen:

| Hook/Filter | Beschrijving |
|---|---|
| `wu_membership_grace_period_days` | Filtert het aantal gratieperiodagen voordat een lidmaatschap als verlopen wordt gemarkeerd (standaard: 3) |
| `wu_schedule_membership_check_interval` | Filtert het interval tussen lidmaatschapcontroles (standaard: 1 uur) |
| `wu_membership_renewal_days_before_expiring` | Filtert hoeveel dagen voor expiratie er een verlengingsbetaling moet worden aangemaakt (standaard: 3) |
| `wu_blocked_site_reactivation_url` | Filtert om een aangepaste reactivatie-URL te verstrekken wanneer een site is geblokkeerd |
| `wu_membership_is_active` | Filtert of een lidmaatschap als actief wordt beschouwd |
| `wu_membership_expired_check_query_params` | Filtert de query parameters die worden gebruikt om verlopen lidmaatschappen te vinden |
| `wu_membership_trial_check_query_params` | Filtert de query parameters die worden gebruikt om verlopen proefperiodes te vinden |
