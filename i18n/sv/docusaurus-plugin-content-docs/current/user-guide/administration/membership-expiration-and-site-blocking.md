---
title: Medlemskapets utgång och blockering av webbplatsen
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Medlemskapets utgång och blockering av webbplats {#membership-expiration-and-site-blocking}

Den här guiden förklarar hur Ultimate Multisite hanterar utgång av medlemskap, provperioders slut och blockering av webbplatsen på frontenden. Den täcker medlemmskapets livscykel från aktivt till utgånget, inställningarna som styr om webbplatser blockeras, och vad du ska kontrollera om webbplatser förblir åtkomliga efter att ett medlemskap har gått ut.

## Medlemskapets statuslivscykel {#membership-status-lifecycle}

Varje medlemskap i Ultimate Multisite har en av följande statusar:

:::note Gratis medlemskap är livstidsrättigheter
Gratis medlemskap går inte ut automatiskt. Ultimate Multisite behandlar dem som livstidsåtkomst, så de ingår inte i utgångskontroller om inte en administratör ändrar statusen eller flyttar kunden till en annan produkt.
:::

| Status | Betydelse |
|---|---|
| **Pending** | Väntar på första betalningen eller e-postverifiering |
| **Trialing** | Aktiv provperiod, ingen betalning har tagits än |
| **Active** | Betalt och aktuellt |
| **On Hold** | Förnyelsebetalning utestående (faktura skapad, väntar på betalning) |
| **Expired** | Har passerat utgångsdatumet och nådperioden utan förnyelse |
| **Cancelled** | Explicit avbrutet av kunden eller administratören |

### Hur medlemskap går över till utgånget {#how-memberships-transition-to-expired}

Ultimate Multisite kör en bakgrundskontroll **var timme** som letar efter medlemskap som ska markeras som utgånget. Denna kontroll använder [Action Scheduler](https://actionscheduler.org/) (inte WP-Cron direkt) och körs som den schemalagda åtgärden `wu_membership_check`.

Utgångskontrollen har en **inbyggd nådperiod på 3 dagar** som standard. Ett medlemskap markeras inte som `expired` förrän 3 dagar efter att dess `date_expiration` har passerat. Detta ger kunderna tid att slutföra en sen betalning innan statusen ändras.

:::info
Den 3-dagars utgångsnåden är separat från inställningen för nådperiod vid blockering på frontenden som beskrivs nedan. Utgångsnåden styr när **statusen ändras** från aktiv/på paus till utgånget. Nåden vid blockering på frontenden styr när **webbplatsen blockeras** efter att statusen redan har ändrats.
:::

#### Auto-renewing vs. Non-Auto-Renewing Medlemskap {#auto-renewing-vs-non-auto-renewing-memberships}

Denna skillnad är kritisk för att förstå beteendet vid utgång:

- **Medlemskap som inte förnyas automatiskt** (`auto_renew = false`): Den timvisa cron-jobben hanterar hela livscykeln – den skapar förnyelsebetalningar, övergår medlemskapet till på paus, och markerar det slutligen som utgånget om betalning inte mottas.

- **Medlemskap som förnyas automatiskt** (`auto_renew = true`): Cron-utgångskontrollen **hoppar över dessa helt**. Betalningsgatewayen (Stripe, PayPal, etc.) förväntas meddela Ultimate Multisite via webhooks när ett abonnemang misslyckas eller avbryts. Om webhooken inte tas emot – på grund av en felkonfigurerad endpoint, ett gateway-avbrott eller ett abonnemang som avbryts utanför systemet – kan medlemskapet förbli `active` i oändlighet även efter att utgångsdatumet har passerat.

### Hur provperioder avslutas {#how-trials-end}

När en medlemskaps provperiod avslutas, gör systemet följande:

1. Skapar en utestående förnyelsebetalning med det fulla abonnemangsbeloppet
2. Övergår medlemskapets status från `trialing` till `on-hold`
3. Skickar ett e-postmeddelande om förnyelsebetalning till kunden

Denna process körs på samma timvisa schema som den vanliga utgångskontrollen, men **endast för medlemskap som inte förnyas automatiskt**. För provperioder som förnyas automatiskt hanterar betalningsgatewayen övergången från provperiod till betalt abonnemang.

## Blockera frontendåtkomst {#block-frontend-access}

Som standard, när ett medlemskap går ut eller sätts på paus, **begränsas endast wp-admin-dashboarden**. Webbplatsens publika frontenda förblir åtkomligt för besökare. För att också blockera allmän åtkomst måste du aktivera inställningen **Block Frontend Access**.

### Konfigurera inställningen {#configuring-the-setting}

Gå till **Ultimate Multisite > Settings > Memberships** och aktivera **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Här är en fullständig vy av medlemskapsinställningssidan:

![Membership settings full page](/img/config/settings-membership-full.png)

Tre relaterade inställningar styr detta beteende:

| Inställning | Beskrivning | Standard |
|---|---|---|
| **Block Frontend Access** | Huvudomslag. När den är aktiverad blockerar den den publika frontenden för nätverkswebbplatser när deras medlemskap inte längre är aktivt. | Av |
| **Frontend Block Grace Period** | Antal dagar att vänta efter att medlemskapet blivit inaktivt innan blockering. Ställ in till `0` för omedelbar blockering. | 0 |
| **Frontend Block Page** | En sida på huvudwebbplatsen som besökare omdirigeras till när en webbplats är blockerad. Om den inte är angiven ser besökare ett generiskt meddelande om att "Webbplatsen är inte tillgänglig". | Ingen |

### Vad besökare ser när en webbplats är blockerad {#what-visitors-see-when-a-site-is-blocked}

När frontendåtkomsten är blockerad kommer besökare till webbplatsen antingen:

1. **Omdirigeras** till sidan du valde i **Frontend Block Page** (om konfigurerat), eller
2. **Se ett standardmeddelande**: "Denna webbplats är för tillfället inte tillgänglig." med en länk till inloggningssidan för webbplatsadministratören.

Webbplatsadministratörer kan fortfarande logga in – inloggningssidan blockeras aldrig.

### Vad som blockeras och när {#what-gets-blocked-and-when}

Blockeringsbeteendet beror på medlemskapets status:

| Medlemskapets status | Blockeras frontenden? | Tillämpas nådperiod? |
|---|---|---|
| Active | Nej | -- |
| Trialing | **Nej** (se anteckning nedan) | -- |
| On Hold | Betraktas som aktivt – inte blockerat | -- |
| Expired | **Ja**, om Block Frontend Access är på | Ja |
| Cancelled | **Ja**, alltid (oavsett inställning) | **Nej** -- blockeras omedelbart |
| Pending | Inte blockerat via medlemskapskontrollen | -- |

:::warning Medlemskap i provperiod är inte blockerade
Även om en provperiod har löpt ut, kommer ett medlemskap med statusen `trialing` **inte** att blockeras på frontenden. Provperioden måste först övergå till en annan status (vanligtvis `on-hold` via cron-jobben, sedan `expired` om det inte betalas). Om du ser medlemskap i provperiod som inte har övergått, kontrollera felsökningssektionen nedan.
:::

:::note Avbrutna medlemskap kringgår nådperioden
Avbrutna medlemskap blockeras alltid när utgångsdatumet har passerat, oavsett om Block Frontend Access är aktiverat. Frontend Block Grace Period gäller **inte** för avbrutna medlemskap.
:::

## Felsökning: Webbplatser som förblir åtkomliga efter utgång {#troubleshooting-sites-remaining-accessible-after-expiration}

Om webbplatser förblir allmänt åtkomliga efter att ett medlemskap har gått ut, arbeta igenom dessa kontroller i ordning:

### 1. Verifiera att Block Frontend Access är aktiverat {#1-verify-the-block-frontend-access-setting-is-enabled}

Gå till **Ultimate Multisite > Settings > Memberships** och bekräfta att omkopplaren **Block Frontend Access** är på. Denna inställning är **avaktiverad som standard**, vilket innebär att endast wp-admin begränsas när ett medlemskap blir inaktivt.

### 2. Kontrollera Frontend Block Grace Period {#2-check-the-frontend-block-grace-period}

På samma inställningssida, kontrollera värdet för **Frontend Block Grace Period**. Om detta är inställt på 7 dagar, till exempel, kommer frontenden inte att blockeras förrän 7 dagar efter medlemskapets utgångsdatum – även om medlemskapets status redan är `expired`.

Ställ in detta till `0` om du vill ha omedelbar blockering efter att medlemskapet blir inaktivt.

### 3. Bekräfta att medlemskapets status faktiskt har ändrats {#3-confirm-the-membership-status-has-actually-changed}

Gå till **Ultimate Multisite > Memberships** och kontrollera statusen för det berörda medlemskapet. Om det fortfarande visar `active` trots att utgångsdatumet har passerat, har statusövergången inte skett. Vanliga orsaker:

- **Medlemskapet förnyas automatiskt**: Kontrollera fältet `auto_renew` på medlemskapsredigeringssidan. Om automatisk förnyelse är aktiverad, hoppar utgångs-cron-jobben över detta medlemskap – det förlitar sig på betalningsgatewayen för att rapportera misslyckandet. Kontrollera ditt gateway-dashboard (Stripe, PayPal) för att bekräfta att abonnemangets status matchar vad Ultimate Multisite visar.

- **Cron-jobbet har inte körts**: Se nästa steg.

### 4. Verifiera att Action Scheduler körs {#4-verify-action-scheduler-is-running}

Ultimate Multisite använder Action Scheduler för sina cron-jobb. Gå till **Tools > Scheduled Actions** i nätverksadministratören och leta efter:

- **`wu_membership_check`** -- Detta ska visas som en återkommande åtgärd som körs var timme. Om den saknas, schemaläggs inte medlemskapskontrollerna.
- **`wu_async_mark_membership_as_expired`** -- Dessa är individuella uppgifter för att markera specifika medlemskap som utgånget. Om du ser misslyckade åtgärder här kan de innehålla felmeddelanden som förklarar varför.

Om du ser fastlåsta eller misslyckade åtgärder, kan du ha ett problem med Action Scheduler. Vanliga orsaker:

- **`DISABLE_WP_CRON` är satt till `true`** i `wp-config.php` utan en systemnivå-cron-ersättning
- **Låg trafiksättning** -- WP-Cron körs bara när någon besöker webbplatsen

För att säkerställa pålitlig cron-körning, ställ in ett systemcron-jobb:

```bash
# Kör var 5:e minut via wget
*/5 * * * * wget -q -O /dev/null "https://din-nätverks-url.com/wp-cron.php?doing_wp_cron"

# Eller via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://din-nätverks-url.com
```

### 5. Kontrollera gateway-webhook-problem (Medlemskap som förnyas automatiskt) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Om medlemskapet förnyas automatiskt och gateway-abonnemanget har avbrutits eller misslyckats, men Ultimate Multisite fortfarande visar det som `active`:

- **Stripe**: Gå till Stripe Dashboard > Customers och kontrollera abonnemangets status. Verifiera sedan att webhook-endpointen är aktiv under Developers > Webhooks. Endpointen ska peka till din webbplats och visa framgångsrika leveranser.
- **PayPal**: Kontrollera abonnemangets status i ditt PayPal-företagskonto och verifiera IPN/webhook-leveransen.

Om gatewayen visar att abonnemanget är avbrutet, men Ultimate Multisite inte gör det, har webhook-meddelandet troligen gått förlorat. Du kan manuellt ändra medlemskapets status i **Ultimate Multisite > Memberships > [Redigera medlemskap]**.

### 6. Kontrollera utgångsnåden (Cron-nivå) {#6-check-the-expiration-grace-period-cron-level}

Cron-kontrollen har sin egen nådperiod (standard: 3 dagar) innan den markerar ett medlemskap som utgånget. Detta är separat från nåden vid blockering på frontenden. Den totala tiden innan en webbplats blockeras kan vara:

**Utgångsnåden (3 dagar)** + **Frontend block grace period (din inställning)** = Total fördröjning

Till exempel, med standardinställningar och en 7-dagars nådperiod på frontenden, kan det ta upp till 10 dagar efter `date_expiration` innan webbplatsen faktiskt blockeras.

### 7. Manuellt utgå ett medlemskap {#7-manually-expire-a-membership}

Om du behöver blockera en webbplats omedelbart utan att vänta på cron-cykeln, kan du manuellt ändra medlemskapets status:

1. Gå till **Ultimate Multisite > Memberships**
2. Klicka på det berörda medlemskapet
3. Ändra statusen till **Expired** eller **Cancelled**
4. Klicka på **Save**

Blockeringen på frontenden träder i kraft vid nästa sidladdning (beroende på Frontend Block Grace Period för utgångna medlemskap, eller omedelbart för avbrutna medlemskap).

## Sammanfattning {#summary}

Tidslinjen från utgångsdatum till webbplatsblockering:

```text
date_expiration passerar
       |
       v
  [3-dagars cron nådperiod]     <-- medlemskapet visas fortfarande som aktivt/på paus
       |
       v
  Cron markerar medlemskapet som "expired"
       |
       v
  [Frontend Block Grace Period]  <-- konfigurerat i Settings > Memberships
       |
       v
  Webbplatsens frontenda blockeras
```

För avbrutna medlemskap är vägen kortare:

```text
  Medlemskap avbrutet
       |
       v
  date_expiration passerar (ingen nådperiod)
       |
       v
  Webbplatsens frontenda blockeras omedelbart
```

## Utvecklarreferens {#developer-reference}

Följande hooks och filter låter dig anpassa beteendet vid utgång och blockering:

| Hook/Filter | Beskrivning |
|---|---|
| `wu_membership_grace_period_days` | Filtrerar antalet någperiodsdagar innan ett medlemskap markeras som utgånget (standard: 3) |
| `wu_schedule_membership_check_interval` | Filtrerar intervallet mellan medlemskapskontroller (standard: 1 timme) |
| `wu_membership_renewal_days_before_expiring` | Filtrerar hur många dagar före utgång man ska skapa en förnyelsebetalning (standard: 3) |
| `wu_blocked_site_reactivation_url` | Filtrerar för att tillhandahålla en anpassad återaktiverings-URL när en webbplats är blockerad |
| `wu_membership_is_active` | Filtrerar om ett medlemskap anses vara aktivt |
| `wu_membership_expired_check_query_params` | Filtrerar frågeparametrarna som används för att hitta utgångna medlemskap |
| `wu_membership_trial_check_query_params` | Filtrerar frågeparametrarna som används för att hitta utgångna provperioder |
