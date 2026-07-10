---
title: Lidmaatskapverval en Wesblokkering
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Lidmaatskap Verloop en Waflakking van die Webwerf {#membership-expiration-and-site-blocking}

Hierdie gids verduidelik hoe Ultimate Multisite lidmaatskapverloop, proefperiode-eindigings en die waflakking van die webwerf op die voorgrond hanteer. Dit dek die lewensiklus van 'n lidmaatskap van aktief tot verbyverloop, die instellings wat bepaal of webwerwe waafgelak word, en wat om te kyk is wanneer webwerwe toeganklik bly nadat 'n lidmaatskap verbygeloop het.

## Lidmaatskap Status Lewensiklus {#membership-status-lifecycle}

Elke lidmaatskap in Ultimate Multisite het een van die volgende statusse:

:::note Gratis lidmaatskappe is lewenslank
Gratis lidmaatskappe verloor nie outomaties nie. Ultimate Multisite behandel dit as lewenslange toegang, dus word dit nie ingesluit in verloopkontrolle tensy 'n administrateur hul status verander of die kliënt na 'n ander produk skuif.
:::

| Status | Betekenis |
|---|---|
| **Pending** | Wag op eerste betaling of e-posverifikasie |
| **Trialing** | Aktiewe proefperiode, nog geen betaling ontvang nie |
| **Active** | Betaal en aktueel |
| **On Hold** | Hernuwingsbetaling wag (faktuur geskep, wag op betaling) |
| **Expired** | Verby die verloopdatum en grasperiode sonder hernuwing |
| **Cancelled** | Uitdruklik gekanselleer deur die kliënt of administrateur |

### Hoe Lidmaatskappe na Verbygeloop Verskuif {#how-memberships-transition-to-expired}

Ultimate Multisite voer 'n agtergrondkontrole **elke uur** uit wat soek na lidmaatskappe wat gemerk moet word as verbygeloop. Hierdie kontrole gebruik [Action Scheduler](https://actionscheduler.org/) (nie WP-Cron direk nie) en loop as die `wu_membership_check` geplante aksie.

Die verloopkontrole het standaard 'n **ingeboude grasperiode van 3 dae**. 'n Lidmaatskap sal nie gemerk word as `expired` totdat 3 dae verby sy `date_expiration` is. Dit gee kliënte tyd om 'n laat betaling te voltooi voordat hul status verander.

:::info
Die 3-dae verloopgrasperiode is geskei van die Frontend Block Grace Period-instelling wat hieronder beskryf word. Die verloopgrasperiode beheer wanneer die **status verander** van aktief/op-hou na verbygeloop. Die frontend block grasperiode beheer wanneer die **webwerf waafgelak word** nadat die status reeds verander het.
:::

#### Outomaties Hernuwing teenoor Nie-Outomaties Hernuwing Lidmaatskappe {#auto-renewing-vs-non-auto-renewing-memberships}

Hierdie onderskeiding is krities om verloopgedrag te verstaan:

- **Nie-outomaties-hernuwing lidmaatskappe** (`auto_renew = false`): Die uurlikse cron-werk hanteer die hele lewensiklus – dit skep hernuwingsbetalings, skuif die lidmaatskap na op-hou, en merk dit uiteindelik as verbygeloop indien betaling nie ontvang word nie.

- **Outomaties-hernuwing lidmaatskappe** (`auto_renew = true`): Die cron verloopkontrole **skiet hierdie heeltemal oor**. Die betalingshekwerk (Stripe, PayPal, ens.) word verwag om Ultimate Multisite via webhooks te waarsku wanneer 'n subskripsie misluk of gekanselleer word. Indien die webhook nie ontvang word – as gevolg van 'n verkeerd gekonfigureerde eindpunt, 'n hekwerk-onderbreking, of 'n subskripsie wat buite die stelsel gekanselleer is – kan die lidmaatskap onbeperkt `active` bly selfs nadat die verloopdatum verby is.

### Hoe Proefperiodes Eindig {#how-trials-end}

Wanneer 'n lidmaatskap se proefperiode eindig, doen die stelsel die volgende:

1. Skep 'n uitstaande hernuwingsbetaling met die volle subskripsiebedrag
2. Verskuif die lidmaatskapstatus van `trialing` na `on-hold`
3. Stuur 'n hernuwingsbetalings-wenkings-e-pos aan die kliënt

Hierdie proses loop op dieselfde uurlike rooster as die gewone verloopkontrole, maar **net vir nie-outomaties-hernuwing lidmaatskappe**. Vir outomaties-hernuwing proewe hanteer die betalingshekwerk die oorgang van proef na betaalde subskripsie.

## Waflakking van Voorgrondtoegang {#block-frontend-access}

Standaard, wanneer 'n lidmaatskap verbygeloop of op-hou, word **net die wp-admin dashboard beperk**. Die webwerf se openbare voorgrond bly toeganklik vir besoekers. Om ook openbare toegang te blokkeer, moet u die **Block Frontend Access**-instelling aktiver.

### Konfigureer die Instelling {#configuring-the-setting}

Navigeer na **Ultimate Multisite > Settings > Memberships** en skakel **Block Frontend Access** in.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Hier is 'n volledige uitsig van die lidmaatskapinstellingsblad:

![Membership settings full page](/img/config/settings-membership-full.png)

Drie verwante instellings beheer hierdie gedrag:

| Instelling | Beskrywing | Standaard |
|---|---|---|
| **Block Frontend Access** | Hoof-skakelaar. Wanneer ingeskakel, blokkeer dit die openbare voorgrond van netwerkwebwerwe wanneer hul lidmaatskap nie meer aktief is nie. | Uit |
| **Frontend Block Grace Period** | Aantal dae om te wag nadat die lidmaatskap inaktief geraak het voordat dit geblokkeer word. Stel op `0` om onmiddellik te blokkeer. | 0 |
| **Frontend Block Page** | 'n Bladsy op die hoofwebwerf om besoekers na te herlei wanneer 'n webwerf geblokkeer is. Indien nie ingestel nie, sien besoekers 'n algemene "Webwerf nie beskikbaar nie" boodskap. | Geen |

### Wat Besoekers Sien Wanneer 'n Webwerf Geblokkeer Is {#what-visitors-see-when-a-site-is-blocked}

Wanneer voorgrondtoegang geblokkeer is, sal besoekers na die webwerf óf:

1. **Na die bladsy herlei** wat u in **Frontend Block Page** gekies het (indien gekonfigureer), óf
2. **'n Standaardboodskap sien**: "Hierdie webwerf is tans nie beskikbaar nie." met 'n skakel na die aanmeldingsblad vir die webwerfadministrateur.

Webwerfadministrateurs kan steeds aanmeld -- die aanmeldingsblad word nooit geblokkeer nie.

### Wat Geblokkeer Word en Wanneer {#what-gets-blocked-and-when}

Die blokkeergedrag hang af van die lidmaatskapstatus:

| Lidmaatskap Status | Voorgrond Geblokkeer? | Grasperiode Toeggepas? |
|---|---|---|
| Active | Nee | -- |
| Trialing | **Nee** (sien nota hieronder) | -- |
| On Hold | Beskou as aktief -- nie geblokkeer nie | -- |
| Expired | **Ja**, indien Block Frontend Access aan is | Ja |
| Cancelled | **Ja**, altyd (ongeag instelling) | **Nee** -- onmiddellik geblokkeer |
| Pending | Nie geblokkeer via lidmaatskapkontrole nie | -- |

:::warning Proeflidmaatskappe word nie geblokkeer
Selfs al het 'n proefperiode geëindig, sal 'n lidmaatskap met die `trialing` status **nie** op die voorgrond geblokkeer word nie. Die proef moet eers oorgeskakel na 'n ander status (tipies `on-hold` via die cron-werk, dan `expired` indien onbetaald). As u proeflidmaatskappe sien wat nie oorgeskakel het nie, kyk na die probleemoplossing afdeling hieronder.
:::

:::note Gekanselleerde lidmaatskappe omseil die grasperiode
Gekanselleerde lidmaatskappe word altyd geblokkeer sodra die verloopdatum verby is, ongeag of Block Frontend Access ingeskakel is. Die Frontend Block Grace Period pas **nie** op gekanselleerde lidmaatskappe toe nie.
:::

## Probleemoplossing: Webwerwe Bly Toeganklik Ná Verloop {#troubleshooting-sites-remaining-accessible-after-expiration}

As webwerwe openbaar toeganklik bly nadat 'n lidmaatskap verbygeloop het, werk die volgende kontroles in volgorde deur:

### 1. Verifieer dat die Block Frontend Access Instelling Ingeskakel Is {#1-verify-the-block-frontend-access-setting-is-enabled}

Gaan na **Ultimate Multisite > Settings > Memberships** en bevestig dat die **Block Frontend Access**-skakelaar aan is. Hierdie instelling is **standaard uit**, wat beteken dat slegs wp-admin beperk word wanneer 'n lidmaatskap inaktief word.

### 2. Kontroleer die Frontend Block Grace Period {#2-check-the-frontend-block-grace-period}

Op dieselfde instellingsblad, kyk na die **Frontend Block Grace Period**-waarde. As hierdie op 7 dae gestel is, sal die voorgrond nie geblokkeer word totdat 7 dae verby die lidmaatskap se verloopdatum is -- selfs al is die lidmaatskapstatus reeds `expired`.

Stel dit op `0` as u onmiddellike blokkeerders wil hê nadat die lidmaatskap inaktief geraak het.

### 3. Bevestig dat die Lidmaatskap Status Werkelik Verander Het {#3-confirm-the-membership-status-has-actually-changed}

Gaan na **Ultimate Multisite > Memberships** en kyk na die status van die betrokke lidmaatskap. As dit steeds `active` toon ten spyte van die verloopdatum wat verby is, het die status-oorgang nie plaasgevind nie. Algemene oorsake:

- **Die lidmaatskap is outomaties-hernuwing**: Kyk na die `auto_renew` vel op die lidmaatskap-redigeerblad. As outomatiese hernuwing ingeskakel is, skiet die verloop-cron hierdie lidmaatskap oor -- dit vertrou op die betalingshekwerk om die mislukking te rapporteer. Kyk na u hekwerk-dashboard (Stripe, PayPal) om te bevestig dat die subskripsiestatus ooreenstem met wat Ultimate Multisite toon.

- **Die cron-werk het nie gehardloop nie**: Kyk na die volgende stap.

### 4. Verifieer dat Action Scheduler Loop {#4-verify-action-scheduler-is-running}

Ultimate Multisite gebruik Action Scheduler vir sy cron-werke. Gaan na **Tools > Scheduled Actions** in die netwerkadministrasie en kyk na:

- **`wu_membership_check`** -- Dit behoort as 'n herhalende aksie te verskyn wat elke uur loop. As dit ontbreek, word die lidmaatskapkontrolle nie geskeduleer nie.
- **`wu_async_mark_membership_as_expired`** -- Dit is individuele take om spesifieke lidmaatskappe as verbygeloop te merk. As u hierdeur mislukte aksies sien, kan hulle foutboodskappe bevat wat verduidelik waarom.

As u vasgevang of mislukte aksies sien, het u dalk 'n Action Scheduler-probleem. Algemene oorsake:

- **`DISABLE_WP_CRON` is op `true` gestel** in `wp-config.php` sonder 'n stelsel-vlak cron-vervanger
- **Lae webwerfverkeer** -- WP-Cron loop slegs wanneer iemand die webwerf besoek.

Om betroubare cron-uitvoering te verseker, stel 'n stelsel-cronwerk op:

```bash
# Loop elke 5 minute via wget
*/5 * * * * wget -q -O /dev/null "https://u-netwerk-url.com/wp-cron.php?doing_wp_cron"

# Of via WP-CLI
*/5 * * * * cd /pad/na/wordpress && wp cron event run --due-now --url=https://u-netwerk-url.com
```

### 5. Kontroleer op Hekwerk Webhook Probleeme (Outomaties-hernuwing Lidmaatskappe) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

As die lidmaatskap outomaties-hernuwing is en die hekwerk-subskripsie gekanselleer of misluk het, maar Ultimate Multisite steeds toon dat dit `active` is:

- **Stripe**: Gaan na die Stripe Dashboard > Customers en kyk die subskripsiestatus. Verifieer dan dat die webhook-eindpunt aktief is onder Developers > Webhooks. Die eindpunt moet na u webwerf wys en suksesvolle lewerings toon.
- **PayPal**: Kontroleer die subskripsiestatus in u PayPal-besigheidrekening en verifieer IPN/webhook-lewering.

As die hekwerk die subskripsie as gekanselleer toon, maar Ultimate Multisite nie, is die webhook-wenking waarskynlik verlore. U kan die lidmaatskapstatus handmatig in **Ultimate Multisite > Memberships > [Redigeer Lidmaatskap]** verander.

### 6. Kontroleer die Verloopgrasperiode (Cron Vlak) {#6-check-the-expiration-grace-period-cron-level}

Die cron-kontrole het sy eie grasperiode (standaard: 3 dae) voordat dit 'n lidmaatskap as verbygeloop merk. Dit is geskei van die voorgrond blok grasperiode. Die totale tyd voordat 'n webwerf geblokkeer kan word, kan wees:

**Verloopgrasperiode (3 dae)** + **Voorgrond blok grasperiode (u instelling)** = Totale vertraging

Byvoorbeeld, met standaardinstellings en 'n 7-dae voorgrond grasperiode, kan dit tot 10 dae neem nadat die `date_expiration` verby is voordat die webwerf werklik geblokkeer word.

### 7. Handmatig 'n Lidmaatskap Verbygeloop {#7-manually-expire-a-membership}

As u 'n webwerf onmiddellik wil blokkeer sonder om op die cron-siklus te wag, kan u die lidmaatskapstatus handmatig verander:

1. Gaan na **Ultimate Multisite > Memberships**
2. Klik op die betrokke lidmaatskap
3. Verander die status na **Expired** of **Cancelled**
4. Klik op **Save**

Die voorgrondblokkeerders sal plaasvind op die volgende bladsy-laaiing (onderhewig aan die Frontend Block Grace Period vir verbygeloop lidmaatskappe, of onmiddellik vir gekanselleerde lidmaatskappe).

## Opsomming {#summary}

Die volledige tydlyn van verloopdatum tot webwerfblokkeerders:

```text
date_expiration verby
       |
       v
  [3-dae cron grasperiode]     <-- lidmaatskap toon steeds as aktief/op-hou
       |
       v
  Cron merk lidmaatskap as "expired"
       |
       v
  [Frontend Block Grace Period]  <-- gekonfigureer in Settings > Memberships
       |
       v
  Webwerf voorgrond word geblokkeer
```

Vir gekanselleerde lidmaatskappe is die pad korter:

```text
  Lidmaatskap gekanselleer
       |
       v
  date_expiration verby (geen grasperiode)
       |
       v
  Webwerf voorgrond word onmiddellik geblokkeer
```

## Ontwikkelaars Verwysing {#developer-reference}

Die volgende hooks en filters stel u in staat om die verloop- en blokkeergedrag aan te pas:

| Hook/Filter | Beskrywing |
|---|---|
| `wu_membership_grace_period_days` | Filter die aantal grasperiode dae voordat 'n lidmaatskap as verbygeloop gemerk word (standaard: 3) |
| `wu_schedule_membership_check_interval` | Filter die interval tussen lidmaatskapkontroles (standaard: 1 uur) |
| `wu_membership_renewal_days_before_expiring` | Filter hoeveel dae voor verloop om 'n hernuwingsbetaling te skep (standaard: 3) |
| `wu_blocked_site_reactivation_url` | Filter om 'n aangepaste reaktivering-URL te verskaf wanneer 'n webwerf geblokkeer word |
| `wu_membership_is_active` | Filter of 'n lidmaatskap as aktief beskou word |
| `wu_membership_expired_check_query_params` | Filter die kweryparameters wat gebruik word om verbygeloop lidmaatskappe te vind |
| `wu_membership_trial_check_query_params` | Filter die kweryparameters wat gebruik word om verbygeloop proewe te vind |
