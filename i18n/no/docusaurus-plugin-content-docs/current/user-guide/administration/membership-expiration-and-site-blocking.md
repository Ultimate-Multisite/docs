---
title: Medlemskapsutløp og nettstedblokkering
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Utløp av medlemskap og blokkering av nettsted

Denne guiden forklarer hvordan Ultimate Multisite håndterer utløp av medlemskap, slutt på prøveperioder og blokkering av nettstedet fra frontenden. Den dekker livssyklusen til et medlemskap fra aktivt til utløpt, innstillingene som styrer om nettstedene blokkeres, og hva du skal sjekke når nettstedene fortsatt er tilgjengelige etter at et medlemskap har utløpt.

## Medlemskapsstatuslivssyklus

Ethvert medlemskap i Ultimate Multisite har en av følgende statusser:

:::note Gratis medlemskap er livslange
Gratis medlemskap utløper ikke automatisk. Ultimate Multisite behandler dem som livslang tilgang, så de er ikke inkludert i utløpskontroller med mindre en administrator endrer statusen eller flytter kunden til et annet produkt.
:::

| Status | Betydning |
|---|---|
| **Pending** | Venter på første betaling eller e-postverifisering |
| **Trialing** | Aktiv prøveperiode, ingen betaling mottatt ennå |
| **Active** | Betalt og gyldig |
| **On Hold** | Fornyelsesbetaling venter (faktura opprettet, venter på betaling) |
| **Expired** | Har passert utløpsdatoen og nådeperioden uten fornyelse |
| **Cancelled** | Eksplisitt kansellert av kunden eller admin |

### Hvordan medlemskap går fra aktivt til utløpt

Ultimate Multisite kjører en bakgrunnssjekk **hver time** som ser etter medlemskap som skal merkes som utløpt. Denne sjekken bruker [Action Scheduler](https://actionscheduler.org/) (ikke WP-Cron direkte) og kjører som den planlagte handlingen `wu_membership_check`.

Utløpskontrollen har en **innebygd nådeperiode på 3 dager** som standard. Et medlemskap vil ikke merkes som `expired` før 3 dager etter at `date_expiration` har passert. Dette gir kundene tid til å fullføre en forsinket betaling før statusen deres endres.

:::info
Den 3-dagers utløpsnådeperioden er separat fra innstillingen for nådeperiode for frontend-blokkering som beskrives nedenfor. Utløpsnådeperioden kontrollerer når **statusen endres** fra aktiv/på vent til utløpt. Nådeperioden for frontend-blokkering kontrollerer når **nettstedet blokkeres** etter at statusen allerede har endret seg.
:::

#### Auto-fornyende vs. Ikke auto-fornyende medlemskap

Denne forskjellen er kritisk for å forstå atferd ved utløp:

- **Ikke auto-fornyende medlemskap** (`auto_renew = false`): Den timebaserte cron-jobben håndterer hele livssyklusen – den oppretter fornyelsesbetalinger, overfører medlemskapet til `on-hold`, og merker det til slutt som utløpt hvis betaling ikke mottas.

- **Auto-fornyende medlemskap** (`auto_renew = true`): Cron-utløpskontrollen **hopper over disse helt**. Betalingsgatewayen (Stripe, PayPal, etc.) forventes å varsle Ultimate Multisite via webhooks når et abonnement feiler eller kanselleres. Hvis webhooken ikke mottas – på grunn av en feilkonfigurert endpoint, et gateway-nedbrudd eller et abonnement kansellert utenfor systemet – kan medlemskapet forbli `active` i det uendelige selv etter at utløpsdatoen har passert.

### Hvordan prøveperioder avsluttes

Når en medlemskaps prøveperiode utløper, gjør systemet følgende:

1. Oppretter en utestående fornyelsesbetaling med det fulle abonnementsbeløpet
2. Overfører medlemskapsstatusen fra `trialing` til `on-hold`
3. Sender en e-postvarsling om fornyelsesbetaling til kunden

Denne prosessen kjører på samme timeplan som den vanlige utløpskontrollen, men **kun for ikke-auto-fornyende medlemskap**. For auto-fornyende prøver håndterer betalingsgatewayen overgangen fra prøve til betalt abonnement.

## Blokker frontend-tilgang

Som standard, når et medlemskap utløper eller går på vent, **er det kun wp-admin-dashboardet som er begrenset**. Nettstedets offentlige frontend forblir tilgjengelig for besøkende. For å blokkere offentlig tilgang også, må du aktivere innstillingen **Block Frontend Access**.

### Konfigurere innstillingen

Gå til **Ultimate Multisite > Settings > Memberships** og aktiver **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Her er et fullt bilde av medlemskapsinnstillingene:

![Membership settings full page](/img/config/settings-membership-full.png)

Tre relaterte innstillinger kontrollerer denne atferden:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | Hovedbryter. Når den er aktivert, blokkerer den den offentlige frontenden til nettstedene når medlemskapet deres ikke lenger er aktivt. | Off |
| **Frontend Block Grace Period** | Antall dager man venter etter at medlemskapet blir inaktivt før blokkering. Sett til `0` for umiddelbar blokkering. | 0 |
| **Frontend Block Page** | En side på hovednettstedet som besøkende omdirigeres til når et nettsted er blokkert. Hvis den ikke er satt, ser besøkende en generell melding om at "Nettstedet ikke er tilgjengelig". | None |

### Hva besøkende ser når et nettsted er blokkert

Når frontend-tilgangen er blokkert, vil besøkende til nettstedet enten:

1. **Bli omdirigert** til siden du valgte i **Frontend Block Page** (hvis konfigurert), eller
2. **Se en standardmelding**: "Dette nettstedet er ikke tilgjengelig for øyeblikket." med en lenke til påloggingssiden for nettstedadministratoren.

Nettstedadministratorer kan fortsatt logge på – påloggingssiden blir aldri blokkert.

### Hva som blokkeres og når

Blokkeringsatferden avhenger av medlemskapsstatusen:

| Medlemskapsstatus | Frontend blokkert? | Nådeperiode anvendt? |
|---|---|---|
| Active | Nei | -- |
| Trialing | **Nei** (se merknad nedenfor) | -- |
| On Hold | Regnes som aktivt – ikke blokkert | -- |
| Expired | **Ja**, hvis Block Frontend Access er på | Ja |
| Cancelled | **Ja**, alltid (uavhengig av innstilling) | **Nei** -- blokkert umiddelbart |
| Pending | Ikke blokkert via medlemskapskontrollen | -- |

:::warning Prøvemedlemskap blir ikke blokkert
Selv om en prøveperiode har utløpt, vil et medlemskap med statusen `trialing` **ikke** bli blokkert på frontenden. Prøven må først overføres til en annen status (vanligvis `on-hold` via cron-jobben, deretter `expired` hvis det ikke betales). Hvis du ser prøvemedlemskap som ikke har overført status, sjekk feilsøkingsseksjonen nedenfor.
:::

:::note Kansellerte medlemskap omgår nådeperioden
Kansellerte medlemskap blokkeres alltid når utløpsdatoen har passert, uavhengig av om Block Frontend Access er aktivert. Frontend Block Grace Period gjelder **ikke** for kansellerte medlemskap.
:::

## Feilsøking: Nettsteder som forblir tilgjengelige etter utløp

Hvis nettstedene forblir offentlig tilgjengelige etter at et medlemskap har utløpt, gå gjennom disse sjekkene i rekkefølge:

### 1. Verifiser at Block Frontend Access-innstillingen er aktivert

Gå til **Ultimate Multisite > Settings > Memberships** og bekreft at bryteren **Block Frontend Access** er på. Denne innstillingen er **av standard**, noe som betyr at kun wp-admin er begrenset når et medlemskap blir inaktivt.

### 2. Sjekk Frontend Block Grace Period

På samme innstillingsside, sjekk verdien for **Frontend Block Grace Period**. Hvis dette er satt til 7 dager, for eksempel, vil frontenden ikke bli blokkert før 7 dager etter at medlemskapet utløp – selv om medlemskapsstatusen allerede er `expired`.

Sett dette til `0` hvis du ønsker umiddelbar blokkering etter at medlemskapet blir inaktivt.

### 3. Bekreft at medlemskapsstatusen faktisk har endret seg

Gå til **Ultimate Multisite > Memberships** og sjekk statusen til det berørte medlemskapet. Hvis det fortsatt viser `active` til tross for at utløpsdatoen har passert, har statusovergangen ikke skjedd. Vanlige årsaker:

- **Medlemskapet er auto-fornyende**: Sjekk feltet `auto_renew` på redigeringssiden for medlemskapet. Hvis auto-fornyelse er aktivert, hopper utløps-cron-jobben over dette medlemskapet – den er avhengig av betalingsgatewayen for å rapportere feilen. Sjekk gateway-dashboardet ditt (Stripe, PayPal) for å bekrefte at abonnementsstatusen samsvarer med det Ultimate Multisite viser.

- **Cron-jobben har ikke kjørt**: Se neste trinn.

### 4. Verifiser at Action Scheduler kjører

Ultimate Multisite bruker Action Scheduler for sine cron-jobber. Gå til **Tools > Scheduled Actions** i nettverksadmin og se etter:

- **`wu_membership_check`** -- Dette skal vises som en gjentakende handling som kjører hver time. Hvis den mangler, blir medlemskapskontrollene ikke planlagt.
- **`wu_async_mark_membership_as_expired`** -- Dette er individuelle oppgaver for å merke spesifikke medlemskap som utløpt. Hvis du ser feile handlinger her, kan de inneholde feilmeldinger som forklarer hvorfor.

Hvis du ser fastlåste eller feile handlinger, kan du ha et Action Scheduler-problem. Vanlige årsaker:

- **`DISABLE_WP_CRON` er satt til `true`** i `wp-config.php` uten en systemnivå cron-erstatning
- **Lav nettstedtrafikk** -- WP-Cron kjører bare når noen besøker nettstedet

For å sikre pålitelig cron-utførelse, sett opp en system-cron-jobb:

```bash
# Kjør hvert 5. minutt via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Eller via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Sjekk for gateway webhook-problemer (Auto-fornyende medlemskap)

Hvis medlemskapet er auto-fornyende og gateway-abonnementet er kansellert eller har feilet, men Ultimate Multisite fortsatt viser det som `active`:

- **Stripe**: Gå til Stripe Dashboard > Customers og sjekk abonnementsstatusen. Verifiser deretter at webhook-endpointet er aktivt under Developers > Webhooks. Endpointet skal peke til nettstedet ditt og vise vellykkede leveranser.
- **PayPal**: Sjekk abonnementsstatusen i PayPal forretningskontoen din og verifiser IPN/webhook-leveransen.

Hvis gatewayen viser at abonnementet er kansellert, men Ultimate Multisite ikke gjør det, ble webhook-varslingen sannsynligvis mistet. Du kan manuelt endre medlemskapsstatusen i **Ultimate Multisite > Memberships > [Rediger medlemskap]**.

### 6. Sjekk utløpsnådeperioden (Cron-nivå)

Cron-sjekken har sin egen nådeperiode (standard: 3 dager) før den merker et medlemskap som utløpt. Dette er separat fra nådeperioden for frontend-blokkering. Den totale tiden før nettstedet blokkeres kan være:

**Utløpsnådeperiode (3 dager)** + **Frontend block grace period (din innstilling)** = Totalt forsinkelse

For eksempel, med standardinnstillinger og en 7-dagers frontend-nådeperiode, kan det ta opptil 10 dager etter `date_expiration` før nettstedet faktisk blir blokkert.

### 7. Manuell utløsning av et medlemskap

Hvis du umiddelbart må blokkere et nettsted uten å vente på cron-syklusen, kan du manuelt endre medlemskapsstatusen:

1. Gå til **Ultimate Multisite > Memberships**
2. Klikk på det berørte medlemskapet
3. Endre statusen til **Expired** eller **Cancelled**
4. Klikk **Save**

Frontend-blokkeringen vil tre i kraft ved neste sideinnlasting (underlagt Frontend Block Grace Period for utløpte medlemskap, eller umiddelbart for kansellerte medlemskap).

## Oppsummering

Tidslinjen fra utløpsdato til nettstangsblokkering:

```text
date_expiration passerer
       |
       v
  [3-dagers cron nådeperiode]     <-- medlemskapet vises fortsatt som aktivt/på vent
       |
       v
  Cron merker medlemskapet som "expired"
       |
       v
  [Frontend Block Grace Period]  <-- konfigurert i Settings > Memberships
       |
       v
  Nettstedets frontend blir blokkert
```

For kansellerte medlemskap er stien kortere:

```text
  Medlemskap kansellert
       |
       v
  date_expiration passerer (ingen nådeperiode)
       |
       v
  Nettstedets frontend blir blokkert umiddelbart
```

## Utviklerreferanse

Følgende hooks og filtre lar deg tilpasse utløps- og blokkeringsatferden:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | Filtrerer antall nådeperiodedager før et medlemskap merkes som utløpt (standard: 3) |
| `wu_schedule_membership_check_interval` | Filtrerer intervallet mellom medlemskapskontroller (standard: 1 time) |
| `wu_membership_renewal_days_before_expiring` | Filtrerer hvor mange dager før utløp at en fornyelsesbetaling skal opprettes (standard: 3) |
| `wu_blocked_site_reactivation_url` | Filtrerer for å gi en tilpasset reaktiverings-URL når et nettsted er blokkert |
| `wu_membership_is_active` | Filtrerer om et medlemskap regnes som aktivt |
| `wu_membership_expired_check_query_params` | Filtrerer spørringsparametere som brukes for å finne utløpte medlemskap |
| `wu_membership_trial_check_query_params` | Filtrerer spørringsparametere som brukes for å finne utløpte prøver |
