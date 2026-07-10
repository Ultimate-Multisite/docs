---
title: Membership Expirazioa eta Saila Bloqueoak
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Membershiparen eta Saila Blokatu {#membership-expiration-and-site-blocking}

Hau gure gidaioa esaltzen du zer batekin Ultimate Multisite-ek membershiparen amaierdia, trialaren amaierdia eta frontend site blokatzea onartzen jakin. Membershiparen bizitza duten erantzunak (aktibo batzuk gabe amaituta) gurean dagozkatu, siteak blokeatuta edo ez dagoela kontrolatzen dituen aukerak eta membershiparen amaierriren ondoren siteak erabilera jarraitzen duenean zer eskatzen duzu jakin.

## Membershiparen Status Bizitza-aldia {#membership-status-lifecycle}

Ultimate Multisite-eko membership guztietan bat status da:

:::note Free memberships hauek bizitza duten dira
Free memberships ez amaitzen dira automatikoki. Ultimate Multisite hauek bizitza duten aksesak (lifetime access) gisa tratatzen du, zehatz erantzunak edo produktu berriren kasu nahi duenean statusa aldatzen edo kliantsoa beste produktua batean jarraitzea dela ez daude amaierdia kontrolatzeko aukereetan sartzen.
:::

| Status | Zaharra |
|---|---|
| **Pending** | Lehen txaldirako mugikorra edo email bideratzea eskatzen da |
| **Trialing** | Trialaren aktiboa, ez dago txaldirak batzuk hartuta |
| **Active** | Pagatu eta aktualtua dago |
| **On Hold** | Berri txaldirako mugikorra dago (txaldirak emateko faktura dago, mugikorra eskatzen da) |
| **Expired** | Amaierriaren datua eta erneu ez dagoenean amaituta dago |
| **Cancelled** | Kliantolak edo adminak eropen doan |

### Membershiparen Amaierdia Zer Modu egiten du? {#how-memberships-transition-to-expired}

Ultimate Multisite-ek **errekari batez** (every hour) kontrolatzen du membershipak amaituta emateko aukera duten. Hau kontrola erabiltzen du [Action Scheduler](https://actionscheduler.org/) (WP-Cron-a ez, direkta) eta `wu_membership_check` scheduled action gisa jarraitzen du.

Amaierriaren kontrolak default batez **3 eguneko erneu periodo bat** ditu. Membership bat amaituta emateko aukera ez dago `date_expiration`-ek ondoren 3 egunetik gaur. Hau kliantzak ez dute statusa aldatuailako aurretik txaldirak gehiago egiteko aukera ematen du.

:::info
3 egunaren eskaintzen duen eta 3 eguneko eskaintzen duen ezarritze itxaropena (expiration grace period) hori aipatutako Frontend Block Grace Period hedatuaren konponbidea da. Ezarritze itxaropenak status-ek **aktibo/on-hold** den **ezarrituta** jakinarazten duen testuinguruan kontrolatzen du. Frontend block grace period-ek status aldatu gtainaren ondoren **porta blokeatuta dagoen** kontua kontrolatzen du.
:::

#### Auto-renplatu eta Ez-auto-renplatu Membriatzaingoak (Memberships) {#auto-renewing-vs-non-auto-renewing-memberships}

Hauzketa hori ezarritze ereduak zein moduan jakretzen duen argi intxaur dugu:

- **Ez-auto-renplatu membriatzaingoak** (`auto_renew = false`): Orduko cron job-ek burokaren guztia manehatzen du -- berrek renewal (renplatu) labasketak jartzen du, membriatzaingoa on-hold (ezarrituta jakinarazten) status-era iritu du, eta galdera ez dut erabilizik, aurrera egiten denean ezarrituta markatzen du.

- **Auto-renplatu membriatzaingoak** (`auto_renew = true`): Cron-ekaren ezarritze kontrolua hauek guztietan **ez egin**. Pagamentu gaitasun (Stripe, PayPal, etc.) esperatzen da Ultimate Multisite-i webhooks bidez notifikatu jakinarazten du subscription-a ezarrituta edo canceldatuta jakin denean. Webhook ez jartzen dutenean -- endpoint-ek eragiketa ez dagoela, gaitasunaren beste parte bat ez dagoela, edo sistema berdeiroan ez dagoen cancelationa dela -- membriatzaingoak ezarritze daturen ondoren ere `active` jakinarazten jarraitu dezake.

### Oinarriak Nondatzen Dugu (How Trials End) {#how-trials-end}

Eskaintzen duen membriatzaingoaren triala (trial period) amaitzen dena, sistema:

1. Subscription-aren guztizko zehaztasunezkoa duen renewal payment pending (ezarrituta dagoen) jartzen du
2. Membriatzaingoaren statusa `trialing` (triala) den `on-hold` (ezarrituta jakinarazten) status-era iritu du
3. Kontratuagailari email bat bidali renewal payment notifikazioa

Hauprozesua pareko orduko planifikazioan dago cron ezarritze kontrolaren, baina **ez-auto-renplatu membriatzaingoak**-erik. Auto-renplatu trialaingoak dira, gaitasunaren beste parte bat da triala eta paididura (paid subscription) irituaren manehoa.

## Frontend-eko Zuzendaritza Blokeatzea (Block Frontend Access) {#block-frontend-access}

Defaultan, horrek membership-ekusi edo itxarri duenean edo itxarri dutenean, **soli wp-admin dashboard-a ez daudien**. Sailaren publiko frontend-a irakaspenak (visitors) irakurri dezatile. Publikoa erabilera ere blokeatzea nahi duz, **Block Frontend Access** aukera eskatzen behar da.

### Aukeraren Konfigurazioa {#configuring-the-setting}

**Ultimate Multisite > Settings > Memberships** luera jarraitu eta **Block Frontend Access**-a aktibatu egin.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Hau da membership-ekusi aukeraren lapurtu guztia:

![Membership settings full page](/img/config/settings-membership-full.png)

Hau erabilera kontrolatzen duen tresna bat dago:

| Aukera | Deskribapena | Defaulta |
|---|---|---|
| **Block Frontend Access** | Master toggle-a. Aktibatu duenean, network sailaren publikoa frontend-a blokeatzen da horren membership-ekusia ez aktibo dela. | Off |
| **Frontend Block Grace Period** | Membership-ekusia ez aktibatu ondoren blokeatzeko espedialdia egunak. Blokeatzea hemen egin nahi duz, `0` eskatzen da. | 0 |
| **Frontend Block Page** | Saila blokeatuta dagoenean irakaspenak irekitzeko lapurtu bat main sailikanan. Ez eskatzen duz, irakaspenak "Site not available" (Saila ez dago erabilera) informazioa ematen du. | None |

### Irakaspenak Blokeatuta Dagoenean Zerren Erakunde {#what-visitors-see-when-a-site-is-blocked}

Frontend-a blokeatuta dagoenean, sailaren irakaspenak hauek egin dezatile:

1. **Blokeatutako lapurtu zehatzean irekitzea** (hako era aukera eskatzen duz), edo
2. **Defaulta informazioa ikustea**: "This site is not available at the moment" (Hau sailaren erabilera ez dago orain) eta sail admin-aren login lapurtu zehatzean linka hartzea.

Sail adminak hala ere irakaspenak irekitu dezatile -- login lapurtua ez blokeatzen da.

### Zerren Blokeatuta Dagoena eta Eguneko Prozesua {#what-gets-blocked-and-when}

Blokeatutako erabilera erabilera depende da membership-ekusi estatusan:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | Ez | -- |
| Trialing | **Ez** (batz nota xehetu) | -- |
| On Hold | Aktiboa da - ez blokioa | -- |
| Expired | **Bai**, bai Block Frontend Access on dagoenean | Bai |
| Cancelled | **Bai**, aldatzeko aukera ez duzu (setauriko da) | **Ez** -- hemen blokioa da |
| Pending | Membership kontrolaren bidez ez blokioa da | -- |

:::warning Trialing membership-ek ez blokio dira
Triali ondorioztatu ere, trial barkua izan denean, `trialing` status bat izango duzu, frontend-ean **ez** blokioa egin da. Trial-ak lehenik beste status batean (normalmenti cron job bidez `on-hold`-era, gainera ez ordaindutakoan `expired`-era) bertan irizten dute. Ez dagoen trial membership-ek ikusten dutenean, aipatutako problema-soluzpen zeisten ikustu behar duzu.
:::

:::note Cancelled membership-ek grace period-a ez dut
Cancelatu membership-ek, expiration dataren ondoren, Block Frontend Access on dugu edo ez dugu, **alden da**. Frontend Block Grace Period-ak cancelatu membership-ek berri ez da aplikatzen.
:::

## Problema-soluzpen: Membership-ek irizten jakin nahi duenean {#troubleshooting-sites-remaining-accessible-after-expiration}

Membership-ek irizten jakin nahi duenean, hauek lehenik ikustu behar duzu:

### 1. Block Frontend Access konponbidea onditu da {#1-verify-the-block-frontend-access-setting-is-enabled}
**Ultimate Multisite > Settings > Memberships** funtziokoan jarraitu eta **Block Frontend Access** toggia on dagoela ziurtatu duzu. Haua **default-ean ez dago**, zehatz, membership bat inaktibo daudenenean `wp-admin`-era lehenik restatzen da.

### 2. Frontend Block Grace Period-a ikustu {#2-check-the-frontend-block-grace-period}
(Kostearen testua aipatzen da...)

Bestea beste konfiguratazio eskoldearen ondorioz, **Frontend Block Grace Period** (Frontend Bloqueo Periodo) arloaren erabiliznu. Hau 7 egunakan (egunak) ematen da, adibidez, membership-ek abitzen den datuaren gaurren kopurua ez da blokeatuta frontend-ek -- membership-ek status `expired` (abitzen den) dela ere.

Membership-ek inaktibo dela hemen egin nahi duzu, horrek **0**-ean ematen duzu.

### 3. Ezinbesteko Statusa Mendiaren Ezkutik Kontrollatu {#3-confirm-the-membership-status-has-actually-changed}

**Ultimate Multisite > Memberships** funtziara jarraitu eta aipatutako membership-aren statusa kontrolatu. Abitzen datua ez da, baina statusa `active` (aktibo) dela erakusten dugu, statusaren irudialdia ez da sortu. Oinarriko erantzunak hauek dira:

- **Membership-ek auto-renew egiten du**: Membership edit funtziadoko `auto_renew` (auto-renu) erabiliznu. Auto-renua aktiboa dela, cron job-ek membership hau ez sortzen du -- galdera hori labengatua payment gateway-ak (Stripe, PayPal) informatzen dute. Ultimate Multisite-aren erakusteko statusa eta subscription-aren statusa ondo bat dagoela konfrimatu egin behar duzu gateway-ren dashboardan.

- **Cron job-ek ez dago irrun**. Lehen urtera jarraitu.

### 4. Action Scheduler-ek Irrun Duela Kontrollatu {#4-verify-action-scheduler-is-running}

Ultimate Multisite cron job-ek (irrunak) Action Scheduler erabiltzen du. Network admin funtziadoko **Tools > Scheduled Actions** (Eskurtak > Aplikazioak irrun dituztenak) funtziara jarraitu eta hauek erabiliznu:

- **`wu_membership_check`** -- Hau ordu batean irrun egiten duen irruna irudialdia duela. Ez dago, membership-ek sortzeko planifikatu ez da.
- **`wu_async_mark_membership_as_expired`** -- Hau membership-ek abitzen dela markatzea erabilgar task-ezpenak dira. Hau lehenagatik errora sortutako irrunak ikusten duzu, horrek zerbait errazi eta errazi ez da.

Irrunak estantza edo galduak ikusten dugu, Action Scheduler-ren problema izan dezakezu. Oinarriko erantzunak hauek dira:

- **`DISABLE_WP_CRON` da `true` da `wp-config.php`-an** sistema cron-aren er substituizio sistemiko
- **Txakur txikia sitiatrafikoa** -- WP-Cron-ek hori egiten duenean, bat webste bidea egiten du

Cron-en fiarrezko egindera asegatzera, sistema cron job bat artxitu:

```bash
# Erregitu 5 minian bat wget arregatik
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Hau edo WP-CLI bidez
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Gateway Webhook Problema Nagusiak Erakunde (Auto-Renewing Memberships) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Honek auto-renewduna da eta gateway-n subscriptiona canceldu da edo maila du, baina Ultimate Multisite-ek hori `active` dela erakusten du:

- **Stripe**: Stripe Dashboard-ra aurkitu > Customers-era joandu eta subscription status-ek ikustu. Horrek Webhooks-ean Developers > Webhooks-aren ondoriozko endpointa aktibo daiko jakinarazte. Endpoint-ek sitiatara apuntatu behar du eta maila ondo egindakoak erakusten debe.
- **PayPal**: PayPal-eko negustaritza status-ek ikustu eta IPN/webhook eragiketa bideagoa jartu.

Honek gateway-ek subscriptiona canceldu dela erakusten du baina Ultimate Multisite ez du, webhook notificationa galda da. Membership status-ek manualean Ultimate Multisite > Memberships > [Edit Membership]-an aldatu dezakezu.

### 6. Expiration Grace Period Nagusiak Erakunde (Cron Level) {#6-check-the-expiration-grace-period-cron-level}

Cron-ek bere grace period-ek ditu (default: 3 egun) membershipa iraupizatu baino lehen. Hau frontend block grace period-ekari ez da. Sitia blokeatzea lehen guztia jakinaren testua izan daiteke:

**Expiration grace period (3 egun)** + **Frontend block grace period (sortuatu duzu)** = Total delay

Honekizuna, default konfiguratura eta 7-egunko frontend eragiketa periodo batekin, `date_expiration` gertatzen duenaren ondoren webgune hori ez blokatagarri daiteke 10 egunera.

### 7. Membership bat manuaz eragitu (Manually Expire a Membership) {#7-manually-expire-a-membership}

Cron cycle-a ez jartuz, webgune bat hemen blokeatzeko behar duzu dela, membership statusa manuelki begiratu dezakezu:

1. **Ultimate Multisite > Memberships** funtziara jarraitu
2. Afectatutako membership-era klik egin
3. Statusa **Expired** (Eragitu) edo **Cancelled** (Kailtu) aldatu
4. **Save** (Saldu) klik egin

Frontend blokea hasiera daiteke iraupenean (eragiketa periodo batekin eragiketa membership-ek bitartean, edo cancelled membership-ek hemenan).

## Ezgune (Summary) {#summary}

Eragiketa datuaren kontua webgune blokatagarria dela:

```text
date_expiration gertatzen da
       |
       v
  [3-egunko cron eragiketa periodo]     <-- membership-ek "active/on-hold" statusan jarraitzen du
       |
       v
  Cron-ek membership-era "expired" (eragitu) ematen du
       |
       v
  [Frontend Block Grace Period]  <-- Settings > Memberships-an konfiguratuta dagoen
       |
       v
  Webgune frontend blokatagarria daiteke
```

Cancelled membership-ek bitartean, bidea txikiagoa da:

```text
  Membership cancelled (Kailtu)
       |
       v
  date_expiration gertatzen da (eragiketa periodo ez dago)
       |
       v
  Webgune frontend blokatagarria daiteke hemenan
```

## Ezgune-lerako referentzia (Developer Reference) {#developer-reference}

Honekizuna eta filters hauek eragiketa eta blokea-dune beteendua modu eskaintzeko aukera ematen dute:

| Hook/Filter | Deskribapzioa |
|---|---|
| `wu_membership_grace_period_days` | Filtra egunaren (grace period) egunakko egunteak membership-ak iratu behar baino lehen, default: 3 |
| `wu_schedule_membership_check_interval` | Filtra membership-ek kontrolatzen diren agintuen arteko itxarpen間a (default: 1 ordu) |
| `wu_membership_renewal_days_before_expiring` | Filtra zer egunak iratu behar da membership-aren amaierrak lehen, default: 3 |
| `wu_blocked_site_reactivation_url` | Filtra site bat blokeatuta dagoenean, custom reactivation URL emateko |
| `wu_membership_is_active` | Filtra membership bat aktibo (active) jakin nahi duela |
| `wu_membership_expired_check_query_params` | Membership-ak amaituta dagoena aurkitzeko erabiltzen diren query parameters-ek filtra |
| `wu_membership_trial_check_query_params` | Trial-ak amaituta dagoena aurkitzeko erabiltzen diren query parameters-ek filtra |
