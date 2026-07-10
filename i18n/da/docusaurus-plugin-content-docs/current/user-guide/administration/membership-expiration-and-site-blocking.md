---
title: Medlemskabets udløb og sites blokering
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Medlemskabets udløb og sites blokering {#membership-expiration-and-site-blocking}

Denne guide forklarer, hvordan Ultimate Multisite håndterer medlemskabets udløb, prøveperioders afslutning og blokering af front-end sider. Den dækker hele livscyklussen for et medlemskab fra aktiv til udløbet, indstillingerne, der styrer, om sider skal blokeres, og hvad du skal tjekke, hvis sider stadig er tilgængelige efter et medlemskab er udløbet.

## Medlemskabets statuslivscyklus {#membership-status-lifecycle}

Hvert medlemskab i Ultimate Multisite har én af følgende statusser:

:::note Gratis medlemskaber er livstidsmedlemskaber
Gratis medlemskaber udløber ikke automatisk. Ultimate Multisite behandler dem som livstidsadgang, så de inkluderes ikke i tjek for udløb, medmindre en administrator ændrer deres status eller flytter kunden til et andet produkt.
:::

| Status | Betydning |
|---|---|
| **Pending** (Ventende) | Ventende på første betaling eller e-mail bekræftelse |
| **Trialing** (Prøveperiode) | Aktiv prøveperiode, ingen betaling indsamlet endnu |
| **Active** (Aktiv) | Betalt og gældende |
| **On Hold** (På pause) | Fornyelsesbetaling er ventet (faktura oprettet, venter på betaling) |
| **Expired** (Udløbet) | Er passeret udløbsdatoen og fristperioden uden fornyelse |
| **Cancelled** (Afbrudt) | Eksplicit afbrudt af kunden eller administrator |

### Hvordan medlemskaber skifter til udløbet {#how-memberships-transition-to-expired}

Ultimate Multisite kører en baggrundstjek **hver time**, som leder efter medlemskaber, der skal markeres som udløbne. Denne tjek bruger [Action Scheduler](https://actionscheduler.org/) (ikke direkte WP-Cron) og kører som den planlagte handling `wu_membership_check`.

Udløbschecket har en **indbygget fristperiode på 3 dage** som standard. Et medlemskab vil ikke blive markeret som `expired`, før 3 dage efter dets `date_expiration` er passeret. Dette giver kunder tid til at gennemføre en forsinket betaling, før deres status ændres.

:::info
Den 3-d dags udløbsmulighed er adskilt fra indstillingen om grace period for Frontend Block. Udløbsmuligheden styrer, hvornår **status ændres** fra aktiv/på hold til udløbet. Grace period for frontend block styrer, hvornår **webstedet blokeres**, efter at status allerede er ændret.
:::

#### Automatisk fornyelse vs. Ikke-automatisk fornyelse af medlemskaber {#auto-renewing-vs-non-auto-renewing-memberships}

Denne forskel er vigtig for at forstå udløbsadfærden:

- **Ikke-automatisk fornyelige medlemskaber** (`auto_renew = false`): Den timebaserede cron job håndterer hele livscyklussen – den opretter fornyelsesbetalinger, skifter medlemskabet til på hold og markerer det til sidst som udløbet, hvis betaling ikke modtages.

- **Automatisk fornyelige medlemskaber** (`auto_renew = true`): Cron'ens udløbskontrol **springer disse helt over**. Betalingsportalen (Stripe, PayPal osv.) forventes at underrette Ultimate Multisite via webhooks, når et abonnement fejler eller annulleres. Hvis webhooket ikke modtages – på grund af en forkert konfigureret endpoint, en nedetid hos portalerne eller en annullering uden for systemet – kan medlemskabet forbliver `active` i det ubestemte, selv efter at udløbsdatoen er passeret.

### Hvordan prøveperioder slutter {#how-trials-end}

Når prøveperioden for et trialing medlemskab udløber, foretager systemet følgende:

1. Opretter en ventende fornyelsesbetaling med det fulde abonnementsbeløb
2. Skifter medlemskabets status fra `trialing` til `on-hold`
3. Sender en e-mail med notifikation om fornyelsesbetaling til kunden

Denne proces kører på samme timeplan som den almindelige udløbskontrol, men **kun for ikke-automatisk fornyelige medlemskaber**. For automatisk fornyelige prøveperioder håndterer betalingsportalen overgangen fra prøveperiode til betalt abonnement.

## Bloker Frontend Adgang {#block-frontend-access}

Som standard, når et medlemskab udløber eller sættes på pause, er **kun wp-admin dashboardet begrænset**. Websidens offentlige frontend forbliver tilgængelig for besøgende. For også at blokere offentlig adgang skal du aktivere indstillingen **Block Frontend Access**.

### Konfiguration af Indstillingen {#configuring-the-setting}

Gå til **Ultimate Multisite > Settings > Memberships** og aktiver **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Her er et fuldt overblik over medlemskabindstillingssiden:

![Membership settings full page](/img/config/settings-membership-full.png)

Tre relaterede indstillinger styrer denne adfærd:

| Indstilling | Beskrivelse | Standardværdi |
|---|---|---|
| **Block Frontend Access** | Hovedtasteren. Når den er aktiveret, blokerer den offentlige frontend for netværkswebsteder, når deres medlemskab ikke længere er aktivt. | Deaktiveret |
| **Frontend Block Grace Period** | Antal dage, man skal vente efter, at medlemskabet er inaktivt, før blokering sker. Sæt til `0` for øjeblikkelig blokering. | 0 |
| **Frontend Block Page** | En side på hovedwebstedet, som besøgende omdirigeres til, når et site bliver blokeret. Hvis den ikke er sat, ser besøgende en generisk besked: "Dette site er ikke tilgængeligt i øjeblikket," med et link til login-siden for site-administratoren. | Ingen |

### Hvad Besøgende Ser, Når Et Site Er Blokeret {#what-visitors-see-when-a-site-is-blocked}

Når frontend-adgang er blokeret, vil besøgende på sitet enten:

1. **Omdirigeres** til den side, du har valgt i **Frontend Block Page** (hvis konfigureret), eller
2. **Se en standardbesked**: "Dette site er ikke tilgængeligt i øjeblikket," med et link til login-siden for site-administratoren.

Site-administratorer kan stadig logge ind – login-siden bliver aldrig blokeret.

### Hvad Blokeres og Hvornår {#what-gets-blocked-and-when}

Blokeringsadfærd afhænger af medlemskabets status:

| Medlemskabets Status | Frontend Bloker? | Fristid Applied? |
|---|---|---|
| Aktiv | Nej | -- |
| Prøver (Trialing) | **Nej** (se note nedenfor) | -- |
| På pause (On Hold) | Betragtes som aktiv – ikke blokeret | -- |
| Udløbet (Expired) | **Ja**, hvis Bloker Frontend Access er aktiveret | Ja |
| Annuleret (Cancelled) | **Ja**, altid (uanset indstilling) | **Nej** -- blokeret med det samme |
| Ventende (Pending) | Ikke blokeret via medlemskabskontrol | -- |

:::warning Prøvemedlemskaber er ikke blokeret
Selvom en prøveperiode er slut, vil et medlemskab med status `trialing` **ikke** blive blokeret på frontenden. Prøven skal først skifte til en anden status (typisk `on-hold` via cron jobben, derefter `expired`, hvis det ikke er betalt). Hvis du ser prøvemedlemskaber, der ikke har skiftet status, tjek fejlfindingssektionen nedenfor.
:::

:::note Annulerede medlemskaber omgår fristiden
Annulerede medlemskaber bliver altid blokeret, når udløbsdatoen er passeret, uanset om Bloker Frontend Access er aktiveret. Frontend Block Grace Period gælder **ikke** for annullerede medlemskaber.
:::

## Fejlfinding: Sider forbliver tilgængelige efter udløb {#troubleshooting-sites-remaining-accessible-after-expiration}

Hvis sider stadig er offentligt tilgængelige efter, at et medlemskab er udløbet, skal du gennemgå disse tjek i denne rækkefølge:

### 1. Bekræft, at indstillingen Bloker Frontend Access er aktiveret {#1-verify-the-block-frontend-access-setting-is-enabled}

Gå til **Ultimate Multisite > Settings > Memberships** og bekræft, at toggle-knappen for **Block Frontend Access** er slået til. Denne indstilling er **deaktiveret som standard**, hvilket betyder, at kun wp-admin bliver begrænset, når et medlemskab bliver inaktivt.

### 2. Tjek Frontend Block Grace Period {#2-check-the-frontend-block-grace-period}

På samme indstillingsside skal du tjekke værdien **Frontend Block Grace Period**. Hvis denne er sat til 7 dage for eksempel, vil frontenden ikke blive blokeret før 7 dage efter medlemskabets udløbsdato – selvom medlemskabets status allerede er `expired`.

Sæt den til `0`, hvis du ønsker øjeblikkelig blokering, når medlemskabet bliver inaktivt.

### 3. Bekræft at Medlemskabets Status Faktisk Er Ændret {#3-confirm-the-membership-status-has-actually-changed}

Gå til **Ultimate Multisite > Memberships** og tjek status for det berørte medlemskab. Hvis det stadig viser `active` på trods af, at udløbsdatoen er passeret, er overgangen i status ikke sket. Almindelige årsager:

- **Medlemskabet genfornyes automatisk**: Tjek feltet `auto_renew` på redigeringssiden for medlemskabet. Hvis automatisk fornyelse er aktiveret, springer udløbskronen denne medlemskab over – den stoler på betalingsportalen til at rapportere fejlen. Tjek dit gateway-dashboard (Stripe, PayPal) for at bekræfte, at abonnementsstatus matcher det, Ultimate Multisite viser.

- **Cron jobbet har ikke kørt**: Se næste trin.

### 4. Verificer at Action Scheduler Er Kørende {#4-verify-action-scheduler-is-running}

Ultimate Multisite bruger Action Scheduler til sine cron jobs. Gå til **Tools > Scheduled Actions** i netværksadministratoren og kig efter:

- **`wu_membership_check`** – Denne skal fremstå som en gentagen handling, der kører hver time. Hvis den mangler, bliver medlemskabstjek ikke planlagt.
- **`wu_async_mark_membership_as_expired`** – Disse er individuelle opgaver til at markere specifikke medlemskaber som udløbne. Hvis du ser fejlede handlinger her, kan de indeholde fejlmeddelelser, der forklarer årsagen.

Hvis du ser fastlåste eller fejlede handlinger, kan du have et problem med Action Scheduler. Almindelige årsager:

- **`DISABLE_WP_CRON` er sat til `true`** i `wp-config.php` uden en system-niveau cron-erstatning
- **Lav trafik på siden** -- WP-Cron kører kun, når nogen besøger siden

For at sikre pålidelig cron-kørsel skal du opsætte en system cron job:

```bash
# Kør hver 5. minut via wget
*/5 * * * * wget -q -O /dev/null "https://din-netværks-url.com/wp-cron.php?doing_wp_cron"

# Eller via WP-CLI
*/5 * * * * cd /sti/til/wordpress && wp cron event run --due-now --url=https://din-netværks-url.com
```

### 5. Tjek for problemer med Gateway Webhooks (Automatisk genfornyelse af Medlemskaber) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Hvis et medlemskab automatisk fornyes, og gateway-abonnementet er blevet annulleret eller fejlet, men Ultimate Multisite stadig viser det som `aktivt`:

- **Stripe**: Gå til Stripe Dashboard > Customers og tjek abonnementsstatus. Verificer derefter, at webhook-endpointet er aktivt under Developers > Webhooks. Endpoint'en skal pege på din side og vise succesfulde leveringer.
- **PayPal**: Tjek abonnementsstatus i din PayPal business konto og bekræft IPN/webhook levering.

Hvis gateway viser abonnementet som annulleret, men Ultimate Multisite ikke gør det, er webhook-notifikationen sandsynligvis gået tabt. Du kan manuelt ændre medlemskabets status i **Ultimate Multisite > Memberships > [Rediger Medlemskab]**.

### 6. Tjek Udløbsgrænseperioden (Cron Niveau) {#6-check-the-expiration-grace-period-cron-level}

Cron-tjekket har sin egen udløbsgrænseperiode (standard: 3 dage) før et medlemskab markeres som udløbet. Dette er adskilt fra udløbsgrænseperioden for frontend-blokken. Den samlede tid, før en side blokeres, kan være:

**Udløbsgrænseperiode (3 dage)** + **Frontend-blokkens grænseperiode (din indstilling)** = Samlet forsinkelse

For eksempel, med standardindstillinger og en 7-dages frontend grace period kan det tage op til 10 dage efter `date_expiration`, før siden reelt bliver blokeret.

### 7. Manuel udløb af et medlemskab {#7-manually-expire-a-membership}

Hvis du har brug for at blokere en side med det samme uden at vente på cron-cyklussen, kan du manuelt ændre medlemskabets status:

1. Gå til **Ultimate Multisite > Memberships**
2. Klik på det berørte medlemskab
3. Skift status til **Expired** (Udløbet) eller **Cancelled** (Afbrudt)
4. Klik på **Save** (Gem)

Frontend-blokeringen træder i kraft ved den næste sideindlæsning (underlagt Frontend Block Grace Period for udløbne medlemskaber, eller øjeblikkeligt for afbrudte medlemskaber).

## Sammenfatning {#summary}

Den fulde tidslinje fra udløbsdato til sidblokering:

```text
date_expiration passerer
       |
       v
  [3-dages cron grace period]     <-- medlemskabet vises stadig som aktiv/på hold
       |
       v
  Cron marker medlemskabet som "expired" (udløbet)
       |
       v
  [Frontend Block Grace Period]  <-- konfigureret i Settings > Memberships
       |
       v
  Sidens frontend blokeres
```

For afbrudte medlemskaber er vejen kortere:

```text
  Medlemskab afbrudt
       |
       v
  date_expiration passerer (ingen grace period)
       |
       v
  Sidens frontend blokeres øjeblikkeligt
```

## Udviklerreference {#developer-reference}

Følgende hooks og filters giver dig mulighed for at tilpasse udløbs- og blokeringsadfærd:

| Hook/Filter | Beskrivelse |
|---|---|
| `wu_membership_grace_period_days` | Filtrer antal dage før en medlemskab markeres som udløbet (standard: 3) |
| `wu_schedule_membership_check_interval` | Filtrer intervallet mellem medlemskabstjek (standard: 1 time) |
| `wu_membership_renewal_days_before_expiring` | Filtrer, hvor mange dage før udløb der skal oprettes en fornyelsesbetaling (standard: 3) |
| `wu_blocked_site_reactivation_url` | Filtrer for at give et brugerdefineret genaktiveringslink, når en side er blokeret |
| `wu_membership_is_active` | Filtrer om et medlemskab betragtes som aktivt |
| `wu_membership_expired_check_query_params` | Filtrer de query-parametre, der bruges til at finde udløbne medlemskaber |
| `wu_membership_trial_check_query_params` | Filtrer de query-parametre, der bruges til at finde udløbne prøveperioder |
