---
title: Pagkaputol sa Miyembro ug Pag-block sa Sitio
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Pagkaputol sa Membership ug Site Blocking

Kini nga guide naghatag og katin-awan kung unsaon pag-handle sa Ultimate Multisite sa pag-expire sa membership, katapusan sa trial, ug frontend site blocking. Gipatin-aw ni kini ang tibuok siklo sa usa ka membership gikan sa aktibo ngadto sa expired, ang mga setting nga nagkontrol kung ang mga site ma-block ba, ug unsaon pag-check kung ang mga site magpabilin nga accessible bisan pa sa pag-expire sa membership.

## Siklo sa Status sa Membership {#membership-status-lifecycle}

Ang matag membership sa Ultimate Multisite adunay usa sa mosunod nga status:

:::note Ang Free memberships kay lifetime
Ang mga Free memberships dili awtomatikong ma-expire. Ang Ultimate Multisite nagtan-aw kanila isip lifetime access, mao nga wala sila apil sa mga pag-check sa expiration gawas kung usahay mag-usab ang administrator sa ilang status o magbalhin sa customer ngadto sa lain nga product.
:::

| Status | Kahulogan |
|---|---|
| **Pending** | Naghulat pa sa unang bayad o email verification |
| **Trialing** | Aktibo nga trial period, wala pa makolekta og bayad |
| **Active** | Bayad na ug kasamtangang aktibo |
| **On Hold** | Ang renewal payment naghulat (naghimo na og invoice, naghulat sa bayad) |
| **Expired** | Na-pass na ang grace period nga 3 ka adlaw nga walay renewal |
| **Cancelled** | Gisaysay gihapon sa customer o admin |

### Unsaon Paglihok sa Membership ngadto sa Expired {#how-memberships-transition-to-expired}

Ang Ultimate Multisite nagpadagan og background check **matag oras** nga nangita og mga membership nga kinahanglan i-marka isip expired. Kini nga check naggamit sa [Action Scheduler](https://actionscheduler.org/) (dili direkta ang WP-Cron) ug nagpadagan isip `wu_membership_check` scheduled action.

Ang expiration check adunay **built-in grace period nga 3 ka adlaw** sa default. Ang usa ka membership dili ma-marka nga `expired` hangtod 3 ka adlaw human na mo-pass ang iyang `date_expiration`. Naghatag kini og oras sa mga customer aron makompleto ang late payment sa dili pa magbag-o ang ilang status.

:::info
Ang 3-araw nga grace period sa pag-expire kay lahi gikan sa setting sa Frontend Block Grace Period nga gihulagway sa ubos. Ang expiration grace period nagkontrol kung kanus-a **mag-usab ang status** gikan sa active/on-hold ngadto sa expired. Ang frontend block grace period nagkontrol kung kanus-a **ma-block ang site** human na mag-usab ang status.
:::

#### Auto-Renewing vs. Non-Auto-Renewing Memberships {#auto-renewing-vs-non-auto-renewing-memberships}

Importante kaayo ni para masabtan kung unsa ang pamaagi sa pag-expire:

- **Non-auto-renewing memberships** (`auto_renew = false`): Ang hourly cron job maoy magmaneho sa tibuok siklo -- naghimo kini og renewal payments, nagtandi sa membership ngadto sa on-hold, ug sa katapusan magmarka ni kini nga expired kung wala makadawat og bayad.

- **Auto-renewing memberships** (`auto_renew = true`): Ang cron expiration check **maglikay niini bisan asa**. Gilauman nga ang payment gateway (Stripe, PayPal, etc.) maoy magpahibalo sa Ultimate Multisite pinaagi sa webhooks kung mapakyas o kanselado ang subscription. Kung wala madawat ang webhook -- tungod sa sayop nga endpoint, outage sa gateway, o kanselado ang subscription gawas sa sistema -- ang membership mahimong magpabilin nga `active` hangtod sa walay katapusan bisan na molapas na ang petsa sa pag-expire.

### Unsaon Pagtapos sa Trials {#how-trials-end}

Kung matapos ang trial period sa usa ka trialing membership, ang sistema:

1. Naghimo og pending renewal payment uban sa bug-os nga kantidad sa subscription
2. Nagtandi sa status sa membership gikan sa `trialing` ngadto sa `on-hold`
3. Nagpadala og email notification para sa renewal payment ngadto sa customer

Kini nga proseso molihok sa parehas nga hourly schedule sama sa regular expiration check, apan **para lang sa non-auto-renewing memberships**. Para sa auto-renewing trials, ang payment gateway maoy magmaneho sa pagtandi gikan sa trial ngadto sa paid subscription.

## Block Frontend Access {#block-frontend-access}

Sa default, kung mag-expire o mag-hold ang membership, **ang wp-admin dashboard lang ang ma-restrict**. Ang public frontend sa site nagpabilin nga accessible sa mga bisita. Aron usab i-block ang access sa publiko, kinahanglan nimo i-enable ang setting nga **Block Frontend Access**.

### Pag-configure sa Setting {#configuring-the-setting}

Punta sa **Ultimate Multisite > Settings > Memberships** ug i-enable ang **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Ania ang tibuok tan-aw sa membership settings page:

![Membership settings full page](/img/config/settings-membership-full.png)

Tulo ka related setting ang nagkontrol niining pamaagi sa paglihok:

| Setting | Deskripsyon | Default |
|---|---|---|
| **Block Frontend Access** | Master toggle. Kung enabled, ma-block ang public frontend sa mga network sites kung wala na aktibo ang ilang membership. | Off |
| **Frontend Block Grace Period** | Kinahanglanon nga adlaw nga paghulat human mawala ang membership before blocking. I-set kini sa `0` para i-block dayon. | 0 |
| **Frontend Block Page** | Usa ka page sa main site kung asa mag-redirect sa mga bisita kung ma-block ang usa ka site. Kung wala set, makakita ang mga bisita og generic nga mensahe nga "Site not available" uban ang link padulong sa login page para sa site admin. | None |

### Unsa ang Makita sa mga Bisita Kung Ma-block ang Usa ka Site {#what-visitors-see-when-a-site-is-blocked}

Kung ma-block ang frontend access, ang mga bisita sa site mahimong:

1. **Ma-redirect** sa page nga imong gipili sa **Frontend Block Page** (kung na-configure), o
2. **Makakita og default nga mensahe**: "This site is not available at the moment." uban ang link padulong sa login page para sa site admin.

Ang mga site admin mahimong mag-login gihapon -- ang login page dili gayud ma-block.

### Unsa ang Ma-block ug Kanus-a {#what-gets-blocked-and-when}

Ang pamaagi sa pag-block nagdepende sa status sa membership:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | Wala | -- |
| Trialing | **Wala** (tan-awa sa nota sa ubos) | -- |
| On Hold | Giisip nga active -- dili na blockado | -- |
| Expired | **Oo**, kung ang Block Frontend Access kay on | Oo |
| Cancelled | **Oo**, kanunay (bisan unsa pa ang setting) | **Dili** -- dali ra ma-block dayon |
| Pending | Dili blockado pinaagi sa membership check | -- |

:::warning Ang mga trialing membership dili ma-blocka
Bisan pa nga tapos na ang trial period, ang usa ka membership nga naa sa status nga `trialing` **dili** ma-blocka sa frontend. Kinahanglan una kining mag-transition sa lain nga status (kasagaran `on-hold` pinaagi sa cron job, unya `expired` kung dili mabayran). Kung makakita ka og mga trialing membership nga wala pa nag-transition, palihog tan-awa ang troubleshooting section sa ubos.
:::

:::note Ang mga cancelled memberships mosulod sa grace period
Ang mga cancelled memberships kay kanunay ma-blocka paghuman moabot na ang expiration date, bisan unsa pa kung gi-enable ba ang Block Frontend Access. Ang Grace Period sa Frontend Block dili magamit para sa mga cancelled membership.
:::

## Troubleshooting: Mga Site nga Magpabilin nga Accessible Human Moabot sa Expiration {#troubleshooting-sites-remaining-accessible-after-expiration}

Kung ang mga site nagpabilin nga public access human moabot sa expiration sa membership, sundon kini nga mga pagsusi sa sunod nga pagkahanap:

### 1. Siguraduhon nga Ang Setting sa Block Frontend Access Kay On {#1-verify-the-block-frontend-access-setting-is-enabled}

Punta sa **Ultimate Multisite > Settings > Memberships** ug kumpirmaha nga ang toggle para sa **Block Frontend Access** kay on. Kini nga setting kay **off by default**, nga nagpasabot nga ang `wp-admin` ra ang gipugngan kung maglikli na ang membership.

### 2. Siguroha ang Grace Period sa Frontend Block {#2-check-the-frontend-block-grace-period}

Sa parehong settings page, i-check ang value sa **Frontend Block Grace Period**. Kung ito ay naka-set sa 7 kaadlawan, pananglitan, dili ma-block ang frontend hangtod 7 ka adlaw human sa petsa nga expired ang membership -- bisan pa kung ang status sa membership kay `expired` na.

I-set kini sa `0` kung gusto nimo dayon i-block paghuman nga mawala ang aktibo ang membership.

### 3. Siguraduhon nga Nagbag-o gyud ang Membership Status {#3-confirm-the-membership-status-has-actually-changed}

Punta sa **Ultimate Multisite > Memberships** ug i-check ang status sa apektadong membership. Kung nagpakita pa kini og `active` bisan pa nga na-pass na ang petsa sa pag-expire, wala pa motungod ang pagbag-o sa status. Mga kasagaran nga hinungdan:

- **Ang membership kay auto-renew**: I-check ang field nga `auto_renew` sa membership edit page. Kung ang auto-renew kay enabled, ang expiration cron dili mo-skip ni membership -- nagatuo kini sa payment gateway para magreport og failure. I-check ang imong gateway dashboard (Stripe, PayPal) aron masiguro nga ang status sa subscription tugma sa gipakita sa Ultimate Multisite.

- **Ang cron job wala pa mo-run**: Tan-awa ang sunod nga lakang.

### 4. Siguraduhon nga Nag-run ang Action Scheduler {#4-verify-action-scheduler-is-running}

Ang Ultimate Multisite naggamit og Action Scheduler para sa iyang mga cron jobs. Punta sa **Tools > Scheduled Actions** sa network admin ug pangitaa kini:

- **`wu_membership_check`** -- Kini kinahanglan magpakita isip recurring action nga nag-run matag oras. Kung wala kini, ang membership checks dili naka-schedule.
- **`wu_async_mark_membership_as_expired`** -- Kini mga individual task para i-mark ang mga piho nga memberships isip expired. Kung makakita ka og mga failed actions diri, mahimong adunay mga error messages nga nagpatin-aw nganong nahitabo kini.

Kung makakita ka og stuck o failed actions, posible nga naa kay problema sa Action Scheduler. Mga kasagaran nga hinungdan:

- **`DISABLE_WP_CRON` kay set sa `true`** sa `wp-config.php` nga walay system-level cron replacement
- **Mababa ang traffic sa site** -- Ang WP-Cron nag-run lang kung adunay bisitang moagi sa site

Aron masiguro nga ma-execute ang cron sa tarong, mag-set up og system cron job:

```bash
# Run kada 5 minutos pinaagi sa wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# O pinaagi sa WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Siguroha kung naa ba problema sa Gateway Webhook (Auto-Renewing Memberships) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Kung ang membership kay auto-renew ug ang gateway subscription na gikapoy o napakyas, pero ang Ultimate Multisite nagpakita pa nga `active`:

- **Stripe**: Adto sa Stripe Dashboard > Customers ug tan-awa ang status sa subscription. Unya i-verify kung active ang webhook endpoint ubos sa Developers > Webhooks. Ang endpoint kinahanglan magtudlo sa imong site ug ipakita ang malampuson nga mga delivery.
- **PayPal**: Tan-awa ang status sa subscription sa imong PayPal business account ug i-verify ang IPN/webhook delivery.

Kung ang gateway nagpakita nga gikapoy ang subscription pero wala kini ipakita sa Ultimate Multisite, nasayod nga nawala ang webhook notification. Mahimo nimo manual nga usbon ang membership status sa **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Siguroha ang Expiration Grace Period (Cron Level) {#6-check-the-expiration-grace-period-cron-level}

Ang cron check adunay kaugaling nga grace period (default: 3 ka adlaw) sa dili pa kini i-marka nga expired ang usa ka membership. Kini lahi sa frontend block grace period. Ang kinatibuk-ang oras sa dili pa ma-block ang site mahimong:

**Expiration grace period (3 ka adlaw)** + **Frontend block grace period (imong setting)** = Total delay

Pananglitan, kung ang default settings ug usa ka 7-ka-adlaw nga grace period sa frontend, mahimong mag-abot og hangtod 10 ka adlaw human sa `date_expiration` pa dili gyud ma-block ang site.

### 7. Manwal nga I-expire ang Membership {#7-manually-expire-a-membership}

Kung kinahanglan nimo dayon i-block ang usa ka site nga wala naghulat sa cron cycle, pwede nimo manwal nga usbon ang status sa membership:

1. Adto sa **Ultimate Multisite > Memberships**
2. I-click ang apektadong membership
3. Usbon ang status ngadto sa **Expired** o **Cancelled**
4. I-click ang **Save**

Ang frontend block molihok sa sunod nga pag-load sa pahina (depende sa Frontend Block Grace Period para sa mga expired membership, o dayon kung cancelled).

## Summary {#summary}

Ang tibuok timeline gikan sa petsa sa pag-expire ngadto sa pag-block sa site:

```text
date_expiration moagi
       |
       v
  [3-ka-adlaw nga cron grace period]     <-- ang membership nagpakita pa nga active/on-hold
       |
       v
  Ang Cron magmarka sa membership isip "expired"
       |
       v
  [Frontend Block Grace Period]  <-- gikatakda sa Settings > Memberships
       |
       v
  Ang frontend sa site ma-block
```

Para sa mga cancelled memberships, mas mubo ang dalan:

```text
  Membership cancelled
       |
       v
  date_expiration moagi (walay grace period)
       |
       v
  Ang frontend sa site ma-block dayon
```

## Developer Reference {#developer-reference}

Kining mga hook ug filter nagtugot kanimo sa pag-customize sa pamaagi sa expiration ug blocking:

| Hook/Filter | Deskripsyon |
|---|---|
| `wu_membership_grace_period_days` | Mag-filter sa gidaghanon sa mga adlaw nga grace period sa dili pa i-marka ang membership isip expired (default: 3) |
| `wu_schedule_membership_check_interval` | Mag-filter sa interval tali sa pag-check sa membership (default: 1 oras) |
| `wu_membership_renewal_days_before_expiring` | Mag-filter kung pila ka adlaw ang una sa expiration para makamugna og renewal payment (default: 3) |
| `wu_blocked_site_reactivation_url` | Mag-filter aron maghatag og custom reactivation URL kung na-block ang usa ka site |
| `wu_membership_is_active` | Mag-filter kung ang usa ka membership giisip active ba |
| `wu_membership_expired_check_query_params` | Mag-filter sa mga query parameters nga gigamit para makit-an ang expired memberships |
| `wu_membership_trial_check_query_params` | Mag-filter sa mga query parameters nga gigamit para makit-an ang expired trials |
