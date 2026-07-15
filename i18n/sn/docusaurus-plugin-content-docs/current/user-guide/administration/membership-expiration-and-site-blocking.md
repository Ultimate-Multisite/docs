---
title: Kugara kweMufudzi neKupanga Mufudzi
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Kufungurwa kweMubvunzo neKupara Kuita Site

Ikhasi le chitsanidi chinokubatsira kuona sei Ultimate Multisite inozvifungurwa kwekubvunza (membership expiration), kupara kwetrial, uye kupara kwemweya (frontend site blocking). Inooneka nzira yakaita kubva kune mubvunzo wakachivimbika kunze kuvhi chine kufungurwa, zvinhu zvinoregeredza kuti sites dziri kupera sei, uye zvinhu dzinogona kuona kana sites dziri kuita zvinhu panguva mubvunzo wacho uchivimbika.

## Kufamba kweMubvunzo (Membership Status Lifecycle) {#membership-status-lifecycle}

Mubvunzo wese muUltimate Multisite unenge uri mumwe wese wese:

:::note Mubvunzo inosanganisira mweya wose
Mubvunzo inosanganisira mweya wose. Mubvunzo inozvifungurwa zvakanaka (automatically) haina kufungurwa. Ultimate Multisite inozviona kuti zvinosanganisira mweya wose, zvichizara kuti hazvifungurwa panguva dzinogona kuita expiration checks kana administrator achagadzirisa status yake kana achipa munhu wese kune produki inotra.
:::

| Status | Chii chiri chiri |
|---|---|
| **Pending** |Inotarisirwa kupfuma kwakare kana kutsvaga email verification |
| **Trialing** |Mweya wetrial unotsvaga, hauna kupfuma kune zvakanaka |
| **Active** |Chine kupfuma uye chine kufamba zvakare |
| **On Hold** |Kupfuma kwekupedzisira kunotarisirwa (invoice yakagadzirwa, inotsvaga kupfuma) |
| **Expired** |Chine kupfuma kwemweya uye grace period isina kupfuma kune kufamba zvakare |
| **Cancelled** |Kupara kwakare nekuita nekubatsira (customer kana admin) |

### Sei Mubvunzo Inogona Kupera sei {#how-memberships-transition-to-expired}

Ultimate Multisite inozviona zvinosanganisira mweya wose **kunge chiri chiri** kuti dzive mubvunzo dzinogone kupera. Izvi zvinhu dzinotsvaga Action Scheduler (haina WP-Cron yakazara) uye inotarisirwa kune action inosanganisira `wu_membership_check`.

Kupfuma kwekubvunza kunooneka **grace period ya 3 dino** nekufamba kwakare. Mubvunzo haizviona kuti `expired` zvichienderera panguva grace period ya 3 dino dzinotsvaga `date_expiration` inopasa. Izvi zvinopa vanhu nguva yakawanda yekupfuma kupfuma kunge kuita kupfuma kwakare pane status yake.

:::info
Periodo wa kuchepa (grace period) wechishoma kwezuva 3 kunooneka sechikoro chekuchinjika kwepfrentend. Periodo ya kuchepa inogona kuti zvinhu zvinotevera kana **status inobva kuactive/on-hold kune expired**. Periodo ya frontend block inogona kuti zvinhu zvinotevera kana **site inobva kubva** panguva status yakabva kuchange.
:::

#### Memberships Anozivimbisa Nekuonana (Auto-Renewing vs. Non-Auto-Renewing) {#auto-renewing-vs-non-auto-renewing-memberships}

Kuti uone sei kuratidzo kwekuchepa, zvakakosha kuti uve munhu anoziva:

- **Memberships dzakavimbiswa nekudzivimbisa (Non-auto-renewing memberships)** (`auto_renew = false`): Cron job ya kila inogona kuita nzira yese -- inokera zvinobva dzinobva, inogadzirisa kuonana kwemabhore, uye zvichikumbira kuti zvibva zvakaita kana haunopai panguva dzose.

- **Memberships dzakavimbiswa nekudzivimbisa (Auto-renewing memberships)** (`auto_renew = true`): Chinyorwa chekuchepa checron inogona kuita izvi zvinobva zvose -- inokera kuti gateway ya pashure (Stripe, PayPal, kana zvinhu zvakasiyana) inonotevera Ultimate Multisite kuburikidza ne-webhooks kana chine kudzivimbisa kana kuva. Kana webhook haunopai -- nekuti endpoint yakagadzirwa sei, kana kuna gateway ya pashure inobva, kana kuna dzinobva dzakavimbiswa zvinobva pane system -- membership inogona kubva kuva `active` pane kunzwisisa kana kunge kune kunzwisisa kupfuura kunzwisisa.

### Sei Trials Dzine Kufamba (How Trials End) {#how-trials-end}

Kana periodi ya trial ya membership yakaita kufamba, system inotevera:

1. Inokera kuonana kwemabhore ekudzivimbisa nekuita subscription yese.
2. Inogadzirisa status ye membership kubva ku `trialing` kune `on-hold`.
3. Inoita email ya kunyora dzinobva dzakavimbiswa kune mutenda.

Iyi nzira inotevera panguva yese yekutevera kwecron job, asi **kune memberships dzakavimbiswa nekudzivimbisa (non-auto-renewing)**. Kune trials dzakavimbiswa nekudzivimbisa (auto-renewing), gateway ya pashure inogona kuita kunge kubva kune subscription yakaita kufamba.

## Kubva Kuonana Frontend Access {#block-frontend-access}

Nekuti, ngachikumbira kuti ndikubatsire kuita iye.

Zvinotevera, kana membership inenge inenge yakaraira kana inenge inenge yakapera (on hold), **chote chinobva kuno chiri kuitwa chete wp-admin dashboard**. Frontend ya site inenge yenyu inenge yakabva kuona nevanhu vose. Kuti unenge ukabva kuona nevanhu vose, unofanira kuwisa (enable) setting **Block Frontend Access**.

### Kuita Setting Iyi {#configuring-the-setting}

Enda kuenda kune **Ultimate Multisite > Settings > Memberships** uye wisa (enable) **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Iyi ndiyo nzira yakare (full view) ye page ya membership:

![Membership settings full page](/img/config/settings-membership-full.png)

Ndinenge zvinhu zviri kuita iye zvinotevera:

| Setting | Chii chiri? | Default |
|---|---|---|
| **Block Frontend Access** | Iyi toggle inokosha (Master toggle). Kana inenge yakawisa, inobva kuno kubva kuteerera frontend ya network sites kana membership yayo isingazivikanzi. | Off |
| **Frontend Block Grace Period** | Ndivo nshwari dzinenge dziri kuita panguva membership inenge inenge yakapera pane kuti iwe utore (wait) panguva inenge inenge yakabva kubva kuteerera. Iyi inenge yakaitwa `0` kuti ibva kuno kubva zvakaita se mberi. | 0 |
| **Frontend Block Page** | Iyi page yakanaka (page) pane site yacho inenge inobva kuita redirection yemvanhu kana site inenge inenge yakabva kubva kuteerera. Kana isingazivikanzi, vanhu vanenge vachiona chishoma chete "Site isingazivikanzi mberi." ne link kune login page ya admin yenyu. | None |

### Chii Chichiona Vanhu Pane Site Inenge Yakabva Kubva {#what-visitors-see-when-a-site-is-blocked}

Kana frontend inenge yakabva kubva, vanhu vachiona iye:

1. **Vachibva (Be redirected)** ku page inenge yakaitwa mu **Frontend Block Page** (kana kana yakaitwa), kana
2. **Vachiona chishoma chete**: "This site is not available at the moment." ne link kune login page ya admin yenyu.

Site admins vanenge vachivaka (log in) -- login page haingazivikanzi.

### Chii Chinobva Kubva uye Nenzani {#what-gets-blocked-and-when}

Kuti iye inenge yakabva kubva, nzira inenge inenge yakaita kunge inenge yakaitwa nemembership status:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | No | -- |
| Trialing | **No** (see note below) | -- |
| On Hold | Considered active -- not blocked | -- |
| Expired | **Yes**, if Block Frontend Access is on | Yes |
| Cancelled | **Yes**, always (regardless of setting) | **No** -- blocked immediately |
| Pending | Not blocked via membership check | -- |

:::warning Trialing memberships are not blocked
Hotiwa members wese haviye kuva
Kuti chii chiri chiri, kungava kunenge kune trial period yakakubva, membership inotiriwe **sachiri** (not blocked) munyoringo. Iri trial chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge chinenge

Pasiye ku settings page yese, ndichinyira **Frontend Block Grace Period** value. Kana iwe ine 7 days, kune chero, frontend haizvinobva kubva panguva 7 dzuva panguva ya membership inenge yakabva kubva (expired) -- kunenge kana status ya membership inenge yakabva kubva.

Chingira ku `0` kana uchida kufamba neblocking ngayerei kana membership ine kuitwa inactive.

### 3. Chivisa Kana Status Ya Membership Inenge Yakazvikanwa {#troubleshooting-sites-remaining-accessible-after-expiration}

Pasiye ku **Ultimate Multisite > Memberships** uye chivisa status ya membership inenge yakagadzirwa. Kana inenge inoratidza `active` kana iweya kubva panguva ya expiration, zvinhu zvakaita kuti transition ya status isingazvinobva. Zvinhu zvakakosha:

- **Membership inenge inorename (auto-renewing)**: Tinga kuona field ye `auto_renew` pa membership edit page. Kana auto-renew inenge yakabva, cron job ya expiration inotarisirwa iye -- inoshandisa payment gateway kuti inoreke kukanganisa. Tinga kuona dashboard yako ye gateway (Stripe, PayPal) kuti uone kana status ya subscription inobata zvinhu zvakaita se zvinooratidzorwa neUltimate Multisite.

- **Cron job haingazovaka**: Tinga kuona step inotevera.

### 4. Chivisa Kana Action Scheduler Inenge Inotenderera {#1-verify-the-block-frontend-access-setting-is-enabled}

Ultimate Multisite inoshandisa Action Scheduler kuti cron jobs dzake dzine. Pasiye ku **Tools > Scheduled Actions** mu network admin uye tinga kuona:

- **`wu_membership_check`** -- Iyi inofanira kuone iinguva yakatika (recurring action) inotenderera mazuva 1. Kana inenge isingazovaka, membership checks haizvinobva.
- **`wu_async_mark_membership_as_expired`** -- Izvi ndiri tasks dzine zvinhu zvisina kuita kuti membership dzine kubva kubva. Kana uone actions dzinotanga (failed actions) pano, dzinogona kunge dzinoratidza messages dzakaita kuti zvinenge zvinobva sei.

Kana uone actions dzine matambudziko kana dzinotanga, unogona kuona Action Scheduler issue. Zvinhu zvakaita:

- **`DISABLE_WP_CRON` inechine `wp-config.php` kubva `true`** uye usina chine cron ya system
- **Kukwanisa kuona site kunenge** -- WP-Cron inozivaka nekuti munhu anenge anenge akaburiye sititi

Kuti usimbire kuti cron iwe ine ufanana, shandisa job ya cron ya system:

```bash
# Run every 5 minutes via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Or via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Kuona Matambudziko ek Gateway Webhook (Memberships inotore nekuvakawo) {#2-check-the-frontend-block-grace-period}

Kana membership inotore nekubatsira kwakawanda uye subscription ya gateway yakavara (cancelled) kana yakabatsirwa, asi Ultimate Multisite inoratidza kuti inenge `active`:

- **Stripe**: Enda ku Stripe Dashboard > Customers uye chine zvirevo status yakanzo. Ndipo shandisa kuti webhook endpoint ine ufanana under Developers > Webhooks. Endpoint inofanira kuva ine sititi rako uye inoratidza kuti zvinotore nekuvfuma zvakanaka.
- **PayPal**: Shanda status ya subscription mune akaunti yako ye PayPal business uye shandisa kuti IPN/webhook delivery ine ufanana.

Kana gateway inoratidza kuti subscription yakavara asi Ultimate Multisite haino, notification ya webhook inogona kuva yakadzikwa. Unogona kubatana status ya membership manually mu **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Kuona Grace Period yekupfuura (Cron Level) {#3-confirm-the-membership-status-has-actually-changed}

Check ya cron inenge inei grace period yayo (default: 3 days) panguva inoreva membership yakapfuura. Izvi zvinotanga zvakasiyana negrace period ya frontend block. Nhoro yakanaka nedzimba dzese kuti site iwe ine kuva kuitwa blocked inogona kuva:

**Expiration grace period (3 days)** + **Frontend block grace period (setting yako)** = Total delay

Kune, nechinine kuti unenge wazvifunga. Nezvinhu zvakakosha nezveWordPress.

### 7. Kuva Kuti Membership Ione (Manually Expire a Membership) {#4-verify-action-scheduler-is-running}

Kana uchida kuva nesitei (site) mufaro nemashure anogona kuitwa, usina kukosha kuti uonde kana cron cycle inotarisirwa, unogona kuunda status yemembership wese:

1. Enda ku **Ultimate Multisite > Memberships**
2. Chibvumira (Click) membership inosimbisa
3. Gara status iye kune **Expired** kana **Cancelled**
4. Chibvumira **Save**

Frontend block uchaonekwa panguva unorega page (subject to Frontend Block Grace Period kuti memberships dzakavara, kana mufaro dzakavara).

## Zvinovhu (Summary) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Moyo wese wekuti date yeexpiration kuita site blocking:

```text
date_expiration inotarisirwa
       |
       v
  [3-day cron grace period]     <-- membership inenge inogona kuone seactive/on-hold
       |
       v
  Cron inobata membership kuti "expired"
       |
       v
  [Frontend Block Grace Period]  <-- inotarisirwa mu Settings > Memberships
       |
       v
  Site frontend inenge inogona kuone (blocked)
```

Kana membership inosimbisa, mhando inenge yakapfuura date yeexpiration (hakuna grace period) inobva:

```text
  Membership inosimbisa
       |
       v
  date_expiration inotarisirwa (hakuna grace period)
       |
       v
  Site frontend inenge inogona kuone mufaro anokosha
```

## Reference Kune Developers {#6-check-the-expiration-grace-period-cron-level}

Hooks uye filters izvi dzichizovalira kuti uonde wazvifunga expiration uye kuratidza blocking:

| Hook/Filter | Chinyoriso |
|---|---|
| `wu_membership_grace_period_days` | Kuti uteteure (filter) kunyange dzinofara dzemazuva pfungwa (grace period days) chinobva kuti membership inotarisirwa (expired) (default: 3) |
| `wu_schedule_membership_check_interval` | Kuti uteteure kurombo ruchengetedzo (interval) pakati pezvinotarisirwa membership (default: 1 hour) |
| `wu_membership_renewal_days_before_expiring` | Kuti uteteure kuti dzinofara dzemazuva pfungwa dzakare (renewal payment) chinobva kuti inozuva dzakaipa (expiration) (default: 3) |
| `wu_blocked_site_reactivation_url` | Kuti uteteure kuti uone URL yakare (custom reactivation URL) kana site inotarisirwa |
| `wu_membership_is_active` | Kuti uteteure kuti membership inosimbisa (considered active) kana chinekuva |
| `wu_membership_expired_check_query_params` | Kuti uteteure query parameters zvinotोरwa kuti vhukumbire memberships dzakare (expired memberships) |
| `wu_membership_trial_check_query_params` | Kuti uteteure query parameters zvinotोरwa kuti vhukumbire trials dzakare (expired trials) |
