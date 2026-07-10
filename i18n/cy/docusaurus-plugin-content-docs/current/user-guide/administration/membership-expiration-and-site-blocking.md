---
title: Mae Cyflwyniadau Gynlltref a Blocio Ar Gwefan
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Mae Cynllunion a Chynllunio'r Safon {#membership-expiration-and-site-blocking}

Mae hysbysiad hwn yn esbonio sut mae Ultimate Multisite yn gael ei ddefnyddio cynllunion (membership) sydd wedi cael eu cyflawni, diwedd y cyflymiau (trial endings), a blockio safon y cefndol. Mae'n gweld bydd y bywyd cynllunion o weithredol i ddefnyddio, y setegau sy'n reoli pwy fydd yn cael eu blocco, a beth ddylai chi gweld pan fod y safon yn parhau i'r cyffredinol ar ôl y cynllunion.

## Bywyd Cynllunion Status {#membership-status-lifecycle}

Mae un o'r statwsau canlynol yn cael ei gael mewn unrhyw cynllunion mewn Ultimate Multisite:

:::note Mae cynllunion rhanbarth (Free memberships) yn llawn bywyd
Mae cynllunion rhanbarth nid yn cael eu cyflawni yn awtomatig. Mae Ultimate Multisite'n golygu eu bod yn cyffredinol, felly nid yw'n cael eu cynnwys mewn pigesiadau ddefnyddio heb fod y admin wedi newid eu statws neu ei gadw i produs arall.
:::

| Statws | Cyfieithiad |
|---|---|
| **Pending** | Mae'n aros y cyflawni gyntaf neu gywirfemail cyflawni |
| **Trialing** | Cyfnod trial weithredol, nid oes cyflawni wedi cael ei derbyn eto |
| **Active** | Daeth wedi'i cyflawni ac yn cyfyngedig |
| **On Hold** | Mae cyflawni y cyflawni newid yn cael ei aros (farchiad cyflawni wedi'i creu, mae'n aros y cyflawni) |
| **Expired** | Daeth y dyddiad cynllunio a'r cyfnod gael yn ddefnyddio heb farchiad newid |
| **Cancelled** | Mae'n cael ei ddelio'n ddefnyddiol gan y cytuned neu'r admin |

### Sut Cynllunion yn Tros i Daeth wedi'i Cyflawni {#how-memberships-transition-to-expired}

Mae Ultimate Multisite yn gwneud petwsau canlyniad (background check) **gwrthodol** gyda'i gwaith **mae gyntaf mewn awr** i chwilio am cynllunion sydd ei fod y byddai'n cael eu cyfeiriadu fel daeth wedi'i cyflawni. Mae'r petwsau hwn yn defnyddio [Action Scheduler](https://actionscheduler.org/) (nid WP-Cron yn uniongyrchol) ac mae'n gwneud yn gweithredol fel y cynlluniau aros `wu_membership_check`.

Mae'r petwsau ddefnyddio cyflawni **cyfnod gael yn ddefnyddio o 3 dydd** yn ddefnyddiol. Nid fydd cynllunion yn cael eu cyfeiriadu fel `expired` heb fod 3 dydd ar ôl y dyddiad cynllunio (`date_expiration`) wedi mynd heddiw. Mae hyn yn rhoi amser i'r cytunedau gwblhau farchiad o ddiweddar قبل y mae statws yn newid.

:::info
Mae'r cyfnod gwrthau o ddyddiau 3 yw'r cyfnod gwrthau o ddyddiau yn cael ei ddefnyddio ar gyfer y cyfathrebu (Frontend Block Grace Period) a mae'n rhydd o'r cyfnod gwrthau o ddyddiau. Mae'r cyfnod gwrthau o ddyddiau yn gwario beth yw'r **cyfnewid status** o weithredol/on-hold i ddigwyddiad. Mae'r cyfnod gwrthau o ddyddiau ar y ffordd a mae'n gwario pwyll wrth y **site iddo wedi cael ei blockio** ar ôl bod y status wedi cael ei newid.
:::

#### Cyfnewidiadau sy'n cyflwyno yn awt vs. Cyfnewidiadau nad yw'n cyflwyno yn awt (Auto-Renewing vs. Non-Auto-Renewing Memberships) {#auto-renewing-vs-non-auto-renewing-memberships}

Mae'r gwahaniaeth hwn yn hanfodol i ddefnyddio'r ffordd gwrthau:

- **Cyfnewidiadau nad yw'n cyflwyno yn awt** (`auto_renew = false`): Mae'r cron job o amser (hourly cron job) yn gwario y bywyd gyfan -- mae'n creu pamygu atal newidiol, yn tynnu'r cyfnewid i on-hold, ac yn ddiweddarach yn marw'n cael ei ddigwyddiad os nad oes gan y pamyg.

- **Cyfnewidiadau sy'n cyflwyno yn awt** (`auto_renew = true`): Mae'r gwchwrthau o cron gwrthau hynny yn cael eu **gwneud i ffwrdd**. Mae'r gwylio pamygu (Stripe, PayPal, etc.) yn cael ei gofyn i ddefnyddio Ultimate Multisite drwy wehbchwylau (webhooks) pan fydd y cyfnewid yn fail neu wedi cael ei ddelio. Os nad oes gan y wehbchwyl yn cael ei derbyn -- oherwydd peth aros-gwrthau, rhyngweithio gwylio, neu cyfnewid wedi'i delio allan y system -- gall y cyfnewid dal i'r status fod yn `active` yn ddiweddarach ar ôl bod y dyddiau gwrthau wedi cael eu teithio.

### Sut mae Triallau yn sefyllu {#how-trials-end}

Pan fydd y cyfnod triallau o'r cyfnewid yn sefyllu, mae'r system yn gwneud ysgol:

1. Creu pamygu atal newidiol gyda chyflwyniad pen-derbyn â'r amgylchedd gyfan
2. Tynnu'r status y fynon o `trialing` i on-hold
3. Cyflwyno e-bost o gwybod am pamygu atal newidiol i'r cyd-defnyddwyr

Mae'r proses hwn yn gwario ar gyfer y cyfnod gwrthau amserol fel yr adran gwrthau cyffredinol, ond **dimar i fynon o cyfnewid sy'n cyflwyno yn awt**. Ar gyfer triallau sy'n cyflwyno yn awt, mae'r gwylio pamygu yn cael ei ddefnyddio i newid o triall i pamygu wedi'i delio.

## Blockio Cyffredinol y Ffrochedd (Block Frontend Access) {#block-frontend-access}

Yn ddefnyddi'r cyfathrebu, pan mae membryd yn cael ei ddefnyddio neu mae'n cael ei ddeall, **mae dim ond y dashboard wp-admin yn cael ei redegol**. Mae'r ffrwdyn cyhoeddus y safle yn dal i'r gyfarfodau i'r ymyrion i fod yn cael eu cyffredinol. I hefyd blocio y mynediad cyhoeddus, rhaid i chi gael y setiad **Block Frontend Access** yn gael.

### Cyfluniad y Setiad {#configuring-the-setting}

Mynolwch i **Ultimate Multisite > Settings > Memberships** ac rhannwch **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Dyma'r gweld cyfan o'r dudalen setiadau membryd:

![Membership settings full page](/img/config/settings-membership-full.png)

Mae tri setiad cyflwyniad sy'n redegol y ffurf hwnnw:

| Setiad | Disgrif | Deifydol |
|---|---|---|
| **Block Frontend Access** | Ychwaneg master. Pan mae'n cael ei gael, mae'n blocio'r ffrwdyn cyhoeddus o safleoedd y rheiniant pan nid yw eu membryd yn gweithredol. | Off |
| **Frontend Block Grace Period** | Nifer diwrnodau i aros ar ôl y cael ei ddeall gan y membryd cyn blocio. Rheoli i `0` i blocio yn gyflym. | 0 |
| **Frontend Block Page** | Pfau ar y safle cyntaf i'r safle i ddarganfod ymyrion i'r mynediad pan fod safle wedi'i blocio. Os nid yw'n cael ei setlo, mae'r myrion yn gweld mesg aml "Mae'r safle nid yn cael ei gweithredu ar hyn o bryd" gyda linc i'r pethau cyflwyniad ar gyfer y admin ymyr. | None |

### Beth sydd yn cael ei blocio a pan? {#what-visitors-see-when-a-site-is-blocked}

Mae'r ffurf blocio yn cyffredinol ar gyfer y statws membryd:

| Statws Cyflen | Bloced ymlaenffordd? | Cyfnodau Gwrth? |
|---|---|---|
| Actif | Nid | -- |
| Trialing | **Nid** (gweld nod iselaf) | -- |
| On Hold | Cynir ei actif -- nid wedi'i blocu | -- |
| Expired | **Ie**, os oes Block Frontend Access ar | Ie |
| Cancelled | **Ie**, bob amser (nir rheoliad) | **Nid** -- wedi cael ei blocu yn gyflym |
| Pending | Nid wedi'i blocu drwy cyscanol y miwriadu | -- |

:::warning Mae miwriadau Trialing nid wedi'u blocu
Er i fod y cyfnod trial wedi dod i ben, bydd ei fod **nid** wedi cael ei blocu ar y frontend. Rhaid iddo drososiad i'r statws arall (tywyll wrth `on-hold` drwy'r cron job, yna `expired` os nad yw'n cael ei gyfalu). Os ydych chi'n gweld miwriadau trialing sydd wedi dod i ben heb drososiad, gweld y rheolau cyflwyno iselaf isod.
:::

:::note Mae miwriadau Cancelled yn gael eu cyfnodau gwrth
Mae miwriadau Cancelled wedi'u blocu bob amser os oes y dyddiad o ddefnyddio wedi dod i ben, nid yw'r Cyfnod Gwrth Bloc Frontend ar ei gael. Mae'r Cyfnod Gwrth Bloc Frontend **nid** yn cyflwyno i miwriadau Cancelled.
:::

## Rheolau Iselaf: Sites sydd wedi'u cadw yn cyffredinol ar ôl y ddefnyddio {#what-gets-blocked-and-when}

Os oes y sites yn dal yn cael eu cyffredinol ar ôl bod y miwriad wedi dod i ben, gwneud ychwanegau hyn yn ôl y cyflwyno:

### 1. Cynnal y Statws Block Frontend Access yn cael ei gael {#troubleshooting-sites-remaining-accessible-after-expiration}

Ymddangos i **Ultimate Multisite > Settings > Memberships** a sicr y mae'r toggl **Block Frontend Access** arall. Mae'r rheolau hwnnw wedi'i tynnu **nid**, gan fod dim ond wp-admin yn cael ei reoli pan fydd miwriad yn dod i ben.

### 2. Gweld y Cyfnod Gwrth Bloc Frontend {#1-verify-the-block-frontend-access-setting-is-enabled}

Ar gyfrif ystafellau ar gyferbyniad. Gwylio'r gael ychwaneg **Frontend Block Grace Period**. Os yw hyn wedi'i setio ar 7 ddiwrnod, felly, bydd y frontend yn cael ei gwahanu nid yn cael ei blacio heb fod 7 diwrnod ar ôl dyddau'r cyflwyniad o'r aelod -- er i fod y statws aelod wedi'i gael yn `expired` eisoes.

Setwch hyn ar `0` os ydych chi eisiau blacio yn gyflym ar ôl bod y aelod yn cael ei ddefnyddio.

### 3. Cynfodwch bod y statws aelod wedi newid yn wir {#2-check-the-frontend-block-grace-period}

Gwyrch chi i **Ultimate Multisite > Memberships** a gwylio'r statws y aelod a'i gael. Os yw'n dangos `active` er gwaith felly er ôl fod dyddau'r cyflwyniad wedi mynd heddiw, nid oes y newid statws wedi cael ei wneud. Mae ganliau cyffredinol:

- **Mae'r aelod yn ail-gynllunio (auto-renewing)**: Gwylio'r field `auto_renew` ar gwefan redig y aelod. Os oes auto-renew wedi'i chynllunio, mae'r cronau cyflwyniad yn gwahanu'r aelod hwn -- mae'n nodi ar y cyflwyniadau ychwanegol i ddefnyddio'r gwaith peiriant (payment gateway) i roi cyflwyniad y feth. Gwylio'r dashboard ychwanegol eich gwaith (Stripe, PayPal) i sicr y statws ychwanegol yn cyflwyno gyda'r statws a Ultimate Multisite yn dangos.

- **Nid oedd y cronau cyflwyniad wedi cael ei chwarae**: Gwylio'r cynllun nesaf.

### 4. Cynfodwch bod Action Scheduler yn gwylio {#3-confirm-the-membership-status-has-actually-changed}

Mae Ultimate Multisite yn defnyddio Action Scheduler ar gyfer ei cronau cyflwyniad. Gwylio i **Tools > Scheduled Actions** mewn admin y rheol (network admin) a chwilio am:

- **`wu_membership_check`** -- Dylai'n dangos fel gweithrediad cyffredinol yn cael ei chwarae bob awr. Os yw'n ddefnyddio, nid oes ychwanegau aelod wedi'i cynllunio.
- **`wu_async_mark_membership_as_expired`** -- Mae hyn yn gweithrediad unig i ddangos aelodau penodol fel `expired`. Os gweldwch fethau neu gwaith wedi'u cael eu ddefnyddio, gallai'n cynnwys mesgau erosi yn esbonio pam ydynt yn cael ei wahanu.

Os gweldwch gwaith sydd yn cael eu hanesydd neu wedi'u cael eu ddefnyddio, gallwch chi ddarganfod problem gyda Action Scheduler. Ganliau cyffredinol:

- **`DISABLE_WP_CRON` yw wedi'i set i `true`** yn `wp-config.php` heb y cyfnewidiol cron o'r system
- **Trafiad sirof yn isel** -- Mae WP-Cron yn defnyddio pan fydd rhywun yn ymweld â'r safle

I sicr ydynt yn ddefnyddiol cron, rheoli gweithredol cron o'r system:

```bash
# Rheoli bob 5 min drwy wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Neu trwy WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Gwarchu am broblemau Webhook Gateway (Mablenni sy'n cyfnewidiol) {#4-verify-action-scheduler-is-running}

Os yw'r mabllen yn cyfnewidiol ac os wedi cael ei drosglwyddo'r cyfrifau y gateway neu wedi'i drosglwyddo, ond mae Ultimate Multisite yn dangos ei fod yn `active`:

- **Stripe**: Gaws i Dashboard Stripe > Customers a gweld y statws y mabllen. Yna gwaredwch bod y endpoint webhook yn weithredol o dan Developers > Webhooks. Rhaid iddo darnio i'r safle eich ac dangos cyflawniadau da.
- **PayPal**: Gwarchu y statws y mabllen yn eich cyfrifau business PayPal a gwaredwch drosglwyddo IPN/webhook.

Os yw'r gateway yn dangos y mabllen fel wedi cael ei drosglwyddo ond nid oes gan Ultimate Multisite, mae'r meddefiad webhook wedi cael ei lalroesi. Gallwch newid y statws y mabllen yn manwl mewn **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Gwarchu am broblemau cyfnod drosglwyddo (Cron Level) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Mae'r gwarch cron gyda'i meddefiad ei hun (deffrywiol: 3 ddiwrnod) cyn marwio mabllen fel wedi cael ei drosglwyddo. Mae hyn yn rhydd o'r cyfnod broblem ymlaen o'r frontend. Ystod ystod ar gyfer y safle i fod yn cael ei blacio gallai fod:

**Cyfnod drosglwyddo (3 ddiwrnod)** + **Cyfnod blacio frontend (ei setiad)** = Cyfeiriad llwyr

Mae'n cyfieithiadau ar gyfer y ddogfen WordPress.

Mae'n cael ei fod yn un o'r ddyddiau ar gyfer y cyflwyniad (frontend grace period) a 7 diwrnod, gallai'n mynd i'r 10 diwrnod ar ôl `date_expiration` قبل asgynnu'r safle.

### 7. Mae'n cael ei ddefnyddio'r cyflwyniad o'r chwarae (Manually Expire a Membership) {#6-check-the-expiration-grace-period-cron-level}

Os oes angen i chi blio safle yn gyflym heb ei gofyn y cron cycle, gallwch newid status y membryd yn hanfodol:

1. Ymddangos i **Ultimate Multisite > Memberships**
2. Clic ar y membryd a'i gael yn cael ei effaith
3. Newid y status i **Expired** neu **Cancelled**
4. Clic ar **Save**

Bydd y blio cyflwyniad yn effaith ar y cyflym newid (subject to the Frontend Block Grace Period for expired memberships, or immediately for cancelled memberships).

## Cynrychioliad (Summary) {#7-manually-expire-a-membership}

Y cyfnod gyllt o ddyddiadau cyflawniant i blio safle:

```text
date_expiration yn mynd
       |
       v
  [3-day cron grace period]     <-- y membryd yn dal i'w ddynol yn weithredol/ar hanfod
       |
       v
  Cron mae'r membryd yn ei ddefnyddio fel "expired"
       |
       v
  [Frontend Block Grace Period]  <-- cael ei setio mewn Settings > Memberships
       |
       v
  Mae cyflwyniad safle wedi'i blio
```

Ar gyfer membryd a ddefnyddio, mae'r llwybr yn ffurfiol:

```text
  Membership cancelled
       |
       v
  date_expiration yn mynd (nad oes cyflwyniad)
       |
       v
  Mae cyflwyniad safle wedi'i blio yn gyflym
```

## Cynrychioliad Dewberwyr (Developer Reference) {#summary}

Mae'r hookau a'r filterau canlynol yn sylw i chi'n gallwch newid y gweithredoedd o ddefnyddio a blio:

| Hook/Filter | Disgrifiad |
|---|---|
| `wu_membership_grace_period_days` | Filtro'r y nifer o ddygu gwrthau قبل asgynio'r cyflwyniad fel ddefnyddiol (deffryd: 3) |
| `wu_schedule_membership_check_interval` | Filtro'r cyfnod rhwng gyfeiriadau y cyflwyniad (deffryd: 1 awr) |
| `wu_membership_renewal_days_before_expiring` | Filtro how many ddygu قبل ei ddefnyddio i creu pwylliant atal (deffryd: 3) |
| `wu_blocked_site_reactivation_url` | Filtro i rhoi URL atal newyddol pan fod y safle wedi'i blio |
| `wu_membership_is_active` | Filtro a yw cyflwyniad yn cael ei gwellio fel weithredol |
| `wu_membership_expired_check_query_params` | Filtro'r paramau cwestiwn a ddefnyddir i ddod o hyd i cyflwyniadau wedi'u ddefnyddio |
| `wu_membership_trial_check_query_params` | Filtro'r paramau cwestiwn a ddefnyddir i ddod o hyd i gyflwyniadau trial wedi'u ddefnyddio |
