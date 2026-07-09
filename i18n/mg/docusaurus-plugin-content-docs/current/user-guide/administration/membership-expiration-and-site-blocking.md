---
title: Faranana ny fampandrenesana sy ny fanakana ny toerana
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Faranana sy Fanakana ny Tranokala {#membership-expiration-and-site-blocking}

Ity toromarika ity dia manazava ny fomba fiasan'ny Ultimate Multisite amin'ny fampandresena ny fahaiza-manao (membership expiration), ny fiafaran'ny fanandramana (trial endings), ary ny famerana ny tranokala any an-tanàna (frontend site blocking). Manazava izany ny fiainana manomboka amin'ny fahaiza-manao mandritra ny fampandresena ka hatramin'ny fampandresena, ny fepetra mifehy raha voafetra ny tranokala, ary izay tokony ho fantatra rehefa tsy afaka miditra ao anatin'ny tranokala ianao na efa tapitra ny fahaiza-manao.

## Fiainana ny Toetran'ny Fahaiza-manao (Membership Status Lifecycle) {#membership-status-lifecycle}

Ny fahaiza-manao rehetra ao amin'ny Ultimate Multisite dia manana toetra iray amin'ireto:

:::note Ny fahaiza-manao maimaim-poana dia mandrakizay
Tsy mandeha ho lany ho azy ny fahaiza-manao maimaim-poana. Ny Ultimate Multisite dia manaiky azy ireo ho fidirana mandrakizay, ka tsy voafetra amin'ny fanamarinana fampandresena izy ireo raha tsy ovain'ny administrator ny toetrany na miova ny mpanjifa any amin'ny vokatra hafa.
:::

| Toetran'ny Fahaiza-manao (Status) | Hevitra |
|---|---|
| **Pending** | Miandry ny fandoavam-bola voalohany na fanamarinana alikaola (email verification) |
| **Trialing** | Mandritra ny vanim-potoana fanandramana, tsy mbola nampanofana vola |
| **Active** | Efa nandoavam-bola ary mandeha ankehitriny |
| **On Hold** | Miandry ny fandoavam-bola famerenana (nifidy facture e vita, miandry ny fandoavam-bola) |
| **Expired** | Tapitra ny daty fampandresena sy ny fotoana fanomezana fahafahana (grace period) nefa tsy namboarina indray |
| **Cancelled** | Namboarina mazava avy amin'ny mpanjifa na ny administrator |

### Ahoana no Fiovan'ny Fahaiza-manao Ho Expired {#how-memberships-transition-to-expired}

Ny Ultimate Multisite dia manao fanamarinana ao anaty (background check) **isaky ny ora** izay mitady fahaiza-manao tokony ho voamarina fa tapitra. Ity fanamarinana ity dia mampiasa [Action Scheduler](https://actionscheduler.org/) (tsy WP-Cron mivantana) ary miasa amin'ny alalan'ny scheduled action hoe `wu_membership_check`.

Misy **fotoana fialana (grace period) voalohany 3 andro** ao anatin'izany fanamarinana. Tsy ho voamarina fa `expired` ny fahaiza-manao raha vao mandeha 3 andro aorian'ny tapakin'ny `date_expiration`. Izany dia manome fotoana ny mpanjifa mba hanatanteraka ny fandoavam-bola taitra alohan'ny fiovana eo amin'ny toetrany.

:::info
Ny fotoana fampandrenesana 3 andro dia hafa noho ny fepetra fanomezana fotoana (Grace Period) ho an'ny Frontend Block izay voalaza eto ambany. Ny fotoana fampandrenesana dia mifehy hoe rahoviana **miova ny sata** avy amin'ny active/on-hold ho expired izy. Ny fotoana fampandrenesana ho an'ny frontend block kosa dia mifehy hoe rahoviana **ho voafetra ny toerana (blocked)** aorian'ny fiovana satany.
:::

#### Fandraisana Anjara Atao Indray Ho Amin'ny Auto-Renewing vs. Tsy Atao Indray Ho Amin'ny Auto-Renewing {#auto-renewing-vs-non-auto-renewing-memberships}

Ity fahasamihafana ity dia tena zava-dehibe mba hahatakarana ny fitondran'ny fotoana fampandrenesana:

- **Fandraisana anjara tsy ataon'ny auto-renew** (`auto_renew = false`): Ny cron job isaky ny ora no mitantana ny fiainana manontolo -- dia mamorona ny famatsiana fanavaozana, manova ny sata ho on-hold, ary amin'ny farany dia manasongadina azy ho expired raha tsy azo ny fandoavam-bola.

- **Fandraisana anjara ataon'ny auto-renew** (`auto_renew = true`): Ny fanamarinana fampandrenesana avy amin'ny cron dia **manitsakitsaka izany tanteraka**. Ny payment gateway (Stripe, PayPal, sns.) dia tokony hanambarana an'i Ultimate Multisite amin'ny alalan'ny webhook rehefa tsy mandeha ny fandraisana anjara na raha voafetra ny fandraisana anjara. Raha tsy azo ny webhook -- noho ny endpoint diso napetraka, fahasimbana eo amin'ny gateway, na raha nisy fandraisana anjara nandrara ivel ny rafitra -- dia mety ho active izy mandrakizay na dia lasa expired aza ny daty.

### Ahoana no Faran'ny Trials (Fandinihana) {#how-trials-end}

Rehefa vita ny fotoana fandinihana (trial period) an'ny fandraisana anjara ianao, ny rafitra dia:

1. Mamorona famatsiana fanavaozana mbola miandry (pending renewal payment) amin'ny vola manontolo ho an'ilay subscription
2. Manova ny sata ho avy amin'ny `trialing` ho `on-hold`
3. Mandefa email fampahafantarana famatsiana fanavaozana ho an'ny mpanjifa

Ity dingana ity dia miaraka amin'ny fandaharam-potoana isaky ny ora misy ny fanamarinana fampandrenesana mahazatra, fa **ho an'ny fandraisana anjara tsy ataon'ny auto-renew ihany**. Ho an'ny trials ataon'ny auto-renew kosa no mitantana ny fiovana avy amin'ny trial ho subscription nifandray.

## Fanakatonana ny Fidirana Amin'ny Frontend {#block-frontend-access}

Amin'ny ankapobeny, rehefa mandeha fahataperan'ny fandraisana (membership) na manao fitazomana azy izany, **dia ny dashboard wp-admin ihany no voafetra**. Ny lafiny ivelan'ny tranokala (frontend) dia mbola azo jerena avy amin'ny mpitsidika. Raha te hampetraka fepetra koa ianao mba tsy ho azo jerena avy amin'ny ankamaro, dia mila asa ny fepetra **Block Frontend Access**.

### Fandrindrana ny Fepetra {#configuring-the-setting}

Mandehana any amin'i **Ultimate Multisite > Settings > Memberships** ary ataovy **enabled** ilay **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Ity ny fomba fijery manontolo ny pejy fepetra fandraisana:

![Membership settings full page](/img/config/settings-membership-full.png)

Misy fepetra telo mifandray amin'izany dia mifehy ity fitondran-javatra ity:

| Fepetra | Famaritana | Default |
|---|---|---|
| **Block Frontend Access** | Lehibe (master toggle). Rehefa voafetra, dia manakana ny lafiny ivelan'ny tranokala ho an'ny toerana rehetra ao amin'ny tambajotra rehefa tsy mbola mandeha ny fandraisana azy. | Off |
| **Frontend Block Grace Period** | Isan'ny andro tokony hiandry aorian'ny tsy fiasan'ny fandraisana alohan'ny hanaovana fanakana. Ataovy `0` raha te hanakana avy hatrany ianao. | 0 |
| **Frontend Block Page** | Pejy ao amin'ny tranokala lehibe izay hamerenana ny mpitsidika rehefa voafetra ny toerana iray. Raha tsy voatendry, dia hahita hafatra ankapobeny hoe "Tsy azo jerena ity toerana ity amin'izao fotoana izao" miaraka amin'ny rohy ho amin'ny pejy fidirana (login) ho an'ny administrator an'ilay toerana. | None |

### Inona no Hahita Avy Amin'ny Mpitsidika Rehefa Voafetra ny Toerana {#what-visitors-see-when-a-site-is-blocked}

Rehefa voafetra ny fidirana amin'ny lafiny ivelan'ny tranokala, dia hisy zavatra roa eo amin'ny mpitsidika ao amin'ny toerana:

1. **Hamerenana azy** any amin'ilay pejy izay no voatendry tao amin'ny **Frontend Block Page** (raha voatendry), na
2. **Ho mahita hafatra ankapobeny**: "Tsy azo jerena ity toerana ity amin'izao fotoana izao" miaraka amin'ny rohy ho amin'ny pejy fidirana ho an'ny administrator an'ilay toerana.

Mbola afaka miditra (log in) ny administrator an'ilay toerana — tsy voafetra mihitsy ilay pejy fidirana.

### Inona no Voafetra sy Rahoviana {#what-gets-blocked-and-when}

Ny fitondran-javatra fanakana dia miankina amin'ny sata (status) an'ilay fandraisana:

| Membaranaka Status | Frontend Voafitina? | Fotoana Fohy Atao? |
|---|---|---|
| Active | Tsia | -- |
| Trialing | **Tsia** (jereo ny fampahafantarana etsy ambany) | -- |
| On Hold | Aktif noho - tsy voafitina | -- |
| Expired | **Eny**, raha misy "Block Frontend Access" dia voafitina | Eny |
| Cancelled | **Eny**, foana (na inona na inona ny fandrindrana) | **Tsia** -- voafitina avy hatrany |
| Pending | Tsy voafitina amin'ny fanamarinana fidirana an-tserasera | -- |

:::warning Tsy voafitina ireo fomba fiasa Trialing
Na dia tapitra aza ny fotoana manandrana, ny fomba fiasa misy ny "trialing" dia **tsy** ho voafitina eo amin'ny frontend. Mila miova status aloha izy (matetika `on-hold` amin'ny alalan'ny cron job, ary avy eo `expired` raha tsy nandoavam-bola). Raha mbola mahita fomba fiasa trialing izay tsy miova dia jereo ny faritra fanamboarana olana etsy ambany.
:::

:::note Tsy manararaotra ny fotoana fohy ho an'ny fomba fiasa Cancelled
Ny fomba fiasa Cancelled dia voafitina foana rehefa tapitra ny daty fahaverezana, na inona na inona ny fanovana "Block Frontend Access". Tsy misy "Grace Period" ho an'ireo fomba fiasa Cancelled.
:::

## Fanamboarana Olana: Fomba Fiasa Mbola azo Atao Taorian'ny Fahaverezana {#troubleshooting-sites-remaining-accessible-after-expiration}

Raha mbola azo atao ny fidirana amin'ny toerana (sites) aorian'ny fahaverezan'ny fomba fiasa, dia andramo ireo fanamarinana ireo tsikelikely:

### 1. Fantaro fa Voafitina ny Famaritana "Block Frontend Access" {#1-verify-the-block-frontend-access-setting-is-enabled}

Mandehana any amin'i **Ultimate Multisite > Settings > Memberships** ary avereno raha voafitina (on) ilay "Block Frontend Access". Io fandrindrana io dia **tsy voafitina ho an'ny ankamaro**, izay midika fa ny `wp-admin` ihany no voafitana rehefa tsy mandeha intsony ny fomba fiasa.

### 2. Jereo ny Fotoana Fohy Ho An'ny Frontend Block Grace Period {#2-check-the-frontend-block-grace-period}

Amin'il sehatry ny pejy fandraisana (settings page) mitovy izany, jereo ny sandan'ny **Frontend Block Grace Period**. Raha voafidy ho 7 andro ity, ohatra, dia tsy ho voakatarina ny frontend mandra-pahatongan'ny 7 andro aorian'ny daty faran'ny fandraisana (membership expiration date) izany -- na dia efa `expired` aza ny sata fandraisana.

Apetaho amin'ny `0` raha te-handamina ny fanakatarana avy hatrany rehefa tsy mandeha intsony ny fandraisana.

### 3. Fantaro fa Novaly ny Sata Fandraisana {#3-confirm-the-membership-status-has-actually-changed}

Mandehin-doha any amin'ny **Ultimate Multisite > Memberships** ary jereo ny sata an'ilay fandraisana voakasika. Raha mbola mampiseho `active` izy na dia lasa tamin'ny daty faran'ny fandraisana aza, dia tsy nitranga ny fiovana ny sata. Ireto misy antony mahazatra:

- **Manao fanavaozana ho azy (auto-renew)**: Jereo ny toerana `auto_renew` amin'ny pejy fanovana ny fandraisana. Raha voafidy ny auto-renew, dia tsy hifandray amin'ity fandraisana ity ny cron job faranana -- miankina amin'ny gateway (Stripe, PayPal) no manambara ny tsy fahampian'izany. Jereo ny dashboard an'ilay gateway anareo mba hanamafisana fa mitovy amin'ny sata ny fandraisana izay aseho ao amin'ny Ultimate Multisite.

- **Tsy nandeha ny cron job**: Jereo ny dingana manaraka.

### 4. Fantaro raha Mandeha ny Action Scheduler {#4-verify-action-scheduler-is-running}

Mampiasa Action Scheduler ny Ultimate Multisite ho an'ireo cron jobs nataony. Mandehin-doha any amin'ny **Tools > Scheduled Actions** ao amin'ny network admin ary mitadiava ireto:

- **`wu_membership_check`** -- Tokony hita izy toy ny asa miverimberina mandeha isan'andro. Raha tsy misy izany, dia tsy voatonga ho an'ny fandraisana ireo ny cron job.
- **`wu_async_mark_membership_as_expired`** -- Ireo dia asa tsirairay mba hametrahana hoe `expired` ny fandraisana manokana. Raha misy asa tsy nahomby (failed actions) ianao eto, dia mety ahitana hafatra fahadisoana milaza ny antony nahoana no tsy nahomby izany.

Raha misy asa mihenjana na tsy nahomby, dia mety misy olana amin'ny Action Scheduler ianao. Ireto misy antony mahazatra:

- **`DISABLE_WP_CRON` dia vo `true`** ao amin'ny `wp-config.php` nefa tsy misy fampiasana cron anaty rafitra mihitsy
- **Tsy misy trafikitra ambany eo amin'ny tranokala** -- Ny WP-Cron dia miasa rehefa misy olona manatrika ny tranokala ihany

Mba hiantohana fa mandeha tsara ny cron, ataovy io asa cron anaty rafitra io:

```bash
# Andramo isaky ny 5 minitra amin'ny alalan'ny wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Na amin'ny alalan'ny WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Jereo ny olana eo amin'ny Gateway Webhook (Auto-Renewing Memberships) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Raha toa ka mbola mandeha ny fanavaozana ho azy ny fandraisana anjara ary nisy fanafoanana na tsy nahomby ny fandraisana anjara avy amin'ny gateway, saingy mbola mampiseho hoe `active` ny Ultimate Multisite:

- **Stripe**: Mandehana any amin'ny Stripe Dashboard > Customers dia jereo ny sata (status) ny fandraisana anjara. Avy eo, avereno fa mandeha tsara ny webhook endpoint ao amin'ny Developers > Webhooks. Ny endpoint dia tokony hitondra ny tranokala anareo ary mampiseho ny fanaterana nahomby.
- **PayPal**: Jereo ny sata ny fandraisana anjara ao amin'ny kaontina ara-barotra PayPal anareo ary avereno fa mandeha tsara ny IPN/webhook delivery.

Raha toa ka mampiseho ny gateway fa voafanana ny fandraisana anjara nefa tsy mampiseho izany ny Ultimate Multisite, dia azo inoana fa very ny fampahafantarana webhook. Afaka manova ny sata ho an'ny fandraisana anjara amin'ny alalan'ny **Ultimate Multisite > Memberships > [Edit Membership]** ianao.

### 6. Jereo ny fotoana fanalana (Grace Period) (Level Cron) {#6-check-the-expiration-grace-period-cron-level}

Misy fotoana fanalana manokana ho an'ny cron check (default: 3 andro) alohan'ny hanamarina fa vita ny fandraisana anjara ho ela. Tsy mifandray amin'ny fotoana fanalana eo amin'ny frontend block izany. Ny fotoana rehetra alohan'ny ho voafanana ny tranokala dia azo atao hoe:

**Fotoana fanalana (3 andro)** + **Fotoana fanalana frontend block (ny fepetra anareo)** = Fotoana miandry manontolo

Ohatra, amin'ny fampiasana ny fepetra fototra sy fotoana fametrahana mialoha 7 andro ho an'ny frontend, mety mandritra ny 10 andro ka hatramin'izany alohan'ny ho voafetra tanteraka ny tranokala aorian'ny `date_expiration`.

### 7. Fanaovana fepetra fampandrefana (Membership) manokana {#7-manually-expire-a-membership}

Raha mila manakana toerana ianao amin'izay fotoana dia tsy mila miandry ny cycle an'ny cron ianao, afaka manova ny sata fampandrefana (membership status) manokana ianao:

1. Mandehin'ny **Ultimate Multisite > Memberships**
2. Tsindrio ilay membership voakasika
3. Ovay ny sata ho **Expired** na **Cancelled**
4. Tsindrio **Save**

Ny fanakana frontend dia hisy vokany rehefa misy fametrahana pejy (page load) manaraka (miankina amin'ny fotoana fametrahana mialoha ho an'ny membership expired, na avy hatrany raha cancelled).

## Famintinana {#summary}

Ny lalana feno avy amin'ny daty fampandrefana ka hatramin'ny fanakana ny toerana:

```text
date_expiration mandalo
       |
       v
  [fotoana fametrahana mialoha 3 andro]     <-- mbola miseho ho active/on-hold ilay membership
       |
       v
  Ny Cron dia manamarina ny membership ho "expired"
       |
       v
  [Fotoana fametrahana mialoha frontend]  <-- voafetra ao amin'ny Settings > Memberships
       |
       v
  Voafetra ny frontend an'ny toerana
```

Ho an'ireo membership izay nampandrefana (cancelled), dia fohy kokoa ny lalana:

```text
  Membership cancelled
       |
       v
  date_expiration mandalo (tsy misy fotoana mialoha)
       |
       v
  Voafetra ny frontend an'ny toerana avy hatrany
```

## Fampahafantarana ho mpandrindra (Developer Reference) {#developer-reference}

Ireto no hooks sy filters izay ahafahanao manova ny fomba fametrahana sy fanakana:

| Hook/Filter | Famaritana |
|---|---|
| `wu_membership_grace_period_days` | Manara ny isan andro fialana alohan'ny fametrahana ho simba (default: 3) |
| `wu_schedule_membership_check_interval` | Manara ny fotoana eo anelanelan'ny fanamarinana ny fandraisana anjara (default: 1 ora) |
| `wu_membership_renewal_days_before_expiring` | Manara ny isan andro alohan'ny fametrahana ho simba mba hamoronana alika fanavaozana (default: 3) |
| `wu_blocked_site_reactivation_url` | Manara mba hanomezana URL fampaherezana manokana rehefa voafetra ny toerana |
| `wu_membership_is_active` | Manara raha heverina ho mavitrika ny fandraisana anjara iray |
| `wu_membership_expired_check_query_params` | Manara ireo query parameters ampiasaina mba hitadiavana fandraisana anjara simba |
| `wu_membership_trial_check_query_params` | Manara ireo query parameters ampiasaina mba hitadiavana fanandramana (trial) simba |
