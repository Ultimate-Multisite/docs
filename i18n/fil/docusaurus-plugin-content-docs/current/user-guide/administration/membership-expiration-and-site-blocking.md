---
title: Pag-expire ng Membership at Pagharang ng Site
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Pag-expire ng Membership at Pagharang sa Site

Ipinaliliwanag ng gabay na ito kung paano hinahandle ng Ultimate Multisite ang pag-expire ng membership, pagtatapos ng trial, at pagharang sa site sa harap (frontend). Sakop nito ang buong siklo ng isang membership—mula sa aktibo hanggang sa expired—ang mga setting na kumokontrol kung haharangin ba ang mga site, at kung ano ang dapat tingnan kapag nananatiling accessible ang mga site kahit na expired na ang membership.

## Membership Status Lifecycle {#membership-status-lifecycle}

Ang bawat membership sa Ultimate Multisite ay may isa sa mga sumusunod na status:

:::note Free memberships are lifetime
Ang mga libreng membership ay hindi nag-e-expire nang awtomatiko. Itinuturing ito ng Ultimate Multisite bilang lifetime access, kaya hindi ito kasama sa mga pag-check ng expiration maliban kung babaguhin ng administrator ang status nito o ililipat ang customer sa ibang produkto.
:::

| Status | Kahulugan |
|---|---|
| **Pending** | Naghihintay ng unang bayad o pag-verify ng email |
| **Trialing** | Aktibong panahon ng pagsubok (trial), wala pang nakokolektang bayad |
| **Active** | Binayaran at kasalukuyan |
| **On Hold** | Naghihintay ng bayad para sa pag-renew (gumawa na ng invoice, naghihintay ng bayad) |
| **Expired** | Lumipas na ang petsa ng expiration at grace period nang walang pag-renew |
| **Cancelled** | Malinaw na kinansela ng customer o admin |

### Paano Nagiging Expired ang Membership {#how-memberships-transition-to-expired}

Ang Ultimate Multisite ay tumatakbo ng background check **bawat oras** na naghahanap ng mga membership na dapat markahan bilang expired. Gumagamit ang pag-check na ito ng [Action Scheduler](https://actionscheduler.org/) (hindi direkta sa WP-Cron) at tumatakbo bilang `wu_membership_check` scheduled action.

Ang expiration check ay may **built-in grace period na 3 araw** by default. Ang isang membership ay hindi markahan bilang `expired` hangga't hindi lumipas ang 3 araw pagkatapos ng `date_expiration` nito. Nagbibigay ito ng oras sa mga customer na makumpleto ang huling pagbabayad bago magbago ang status nila.

:::info
Ang 3-araw na expiration grace period ay hiwalay sa Frontend Block Grace Period setting na inilalarawan sa ibaba. Kinokontrol ng expiration grace period kung kailan **nagbabago ang status** mula active/on-hold patungong expired. Kinokontrol naman ng frontend block grace period kung kailan **haharang ang site** pagkatapos magbago ang status.
:::

#### Auto-Renewing vs. Non-Auto-Renewing Memberships {#auto-renewing-vs-non-auto-renewing-memberships}

Ang pagkakaiba na ito ay kritikal para maunawaan ang pag-uugali ng expiration:

- **Non-auto-renewing memberships** (`auto_renew = false`): Ang hourly cron job ang humahawak sa buong lifecycle—gumagawa ito ng renewal payments, nagpapalit ng membership sa on-hold, at sa huli ay minamarkahan itong expired kung walang natanggap na bayad.

- **Auto-renewing memberships** (`auto_renew = true`): **Hindi ito sinasalo** ng cron expiration check. Inaasahan na ang payment gateway (Stripe, PayPal, atbp.) na magpapaalam sa Ultimate Multisite sa pamamagitan ng webhooks kapag nag-fail o kinansela ang subscription. Kung hindi natanggap ang webhook—dahil sa maling endpoint, pagka-outage ng gateway, o pagka-cancel ng subscription sa labas ng sistema—ang membership ay maaaring manatiling `active` nang walang katapusan kahit lumipas na ang petsa ng expiration.

### Paano Nagtatapos ang Trials {#how-trials-end}

Kapag nagtatapos ang trial period ng isang trialing membership, ang sistema ay:

1. Gumagawa ng pending renewal payment na may buong halaga ng subscription
2. Nagpapalit ng status ng membership mula `trialing` patungong `on-hold`
3. Nagpapadala ng renewal payment notification email sa customer

Ang prosesong ito ay tumatakbo sa parehong hourly schedule ng regular expiration check, ngunit **para lamang sa non-auto-renewing memberships**. Para sa auto-renewing trials, ang payment gateway ang humahawak sa paglipat mula trial patungong paid subscription.

## Pagharang sa Frontend Access {#block-frontend-access}

By default, kapag nag-expire o nag-on hold ang isang membership, **ang wp-admin dashboard lang ang nililimitahan**. Ang public frontend ng site ay nananatiling accessible sa mga bisita. Upang harangin din ang public access, kailangan mong i-enable ang **Block Frontend Access** setting.

### Pag-configure ng Setting {#configuring-the-setting}

Pumunta sa **Ultimate Multisite > Settings > Memberships** at i-enable ang **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Narito ang buong view ng membership settings page:

![Membership settings full page](/img/config/settings-membership-full.png)

Tatlong magkakaugnay na settings ang kumokontrol sa pag-uugaling ito:

| Setting | Deskripsyon | Default |
|---|---|---|
| **Block Frontend Access** | Master toggle. Kapag naka-enable, hinaharangan nito ang public frontend ng mga network site kapag hindi na aktibo ang kanilang membership. | Off |
| **Frontend Block Grace Period** | Bilang ng araw na paghihintay pagkatapos maging inactive ang membership bago harangin. Itakda sa `0` para agad harangin. | 0 |
| **Frontend Block Page** | Isang page sa main site na ipapa-redirect sa mga bisita kapag naharang ang site. Kung hindi itinakda, makakakita ang mga bisita ng generic na mensahe na "Site not available." | None |

### Ano ang Nakikita ng mga Bisita Kapag Naharang ang Site {#what-visitors-see-when-a-site-is-blocked}

Kapag naharang ang frontend access, ang mga bisita sa site ay mag-reresulta sa isa sa mga sumusunod:

1. **Ire-redirect** sa page na pinili mo sa **Frontend Block Page** (kung naka-configure), o
2. **Makakakita ng default message**: "This site is not available at the moment." kasama ang link patungo sa login page para sa admin ng site.

Ang mga site admin ay maaari pa ring mag-log in—ang login page ay hindi kailanman hinaharangan.

### Ano ang Nahaharang at Kailan {#what-gets-blocked-and-when}

Ang pag-uugali ng pagharang ay nakasalalay sa status ng membership:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | Hindi | -- |
| Trialing | **Hindi** (tingnan ang note sa ibaba) | -- |
| On Hold | Itinuturing na active -- hindi nahaharangan | -- |
| Expired | **Oo**, kung naka-on ang Block Frontend Access | Oo |
| Cancelled | **Oo**, palagi (kahit anong setting) | **Hindi** -- agad na nahaharangan |
| Pending | Hindi nahaharangan via membership check | -- |

:::warning Trialing memberships are not blocked
Kahit na nagtapos na ang trial period, ang membership na may `trialing` status ay **hindi** haharangin sa frontend. Kailangan munang lumipat ang trial sa ibang status (karaniwan ay `on-hold` via cron job, pagkatapos ay `expired` kung walang bayad). Kung nakakakita ka ng mga trialing memberships na hindi pa lumilipat, tingnan ang troubleshooting section sa ibaba.
:::

:::note Cancelled memberships bypass the grace period
Ang mga kinanselang membership ay palaging nahaharangan kapag lumipas na ang petsa ng expiration, anuman ang naka-enable ang Block Frontend Access. Ang Frontend Block Grace Period ay **hindi** naaangkop sa mga kinanselang membership.
:::

## Troubleshooting: Mga Site na Nanatiling Accessible Pagkatapos ng Expiration {#troubleshooting-sites-remaining-accessible-after-expiration}

Kung ang mga site ay nananatiling publicly accessible pagkatapos mag-expire ang isang membership, sundin ang mga pag-check na ito sa pagkakasunod-sunod:

### 1. I-verify na Naka-enable ang Block Frontend Access Setting {#1-verify-the-block-frontend-access-setting-is-enabled}

Pumunta sa **Ultimate Multisite > Settings > Memberships** at kumpirmahin na naka-on ang **Block Frontend Access** toggle. Ang setting na ito ay **off by default**, ibig sabihin, ang wp-admin lang ang nililimitahan kapag nagiging inactive ang isang membership.

### 2. I-check ang Frontend Block Grace Period {#2-check-the-frontend-block-grace-period}

Sa parehong settings page, tingnan ang halaga ng **Frontend Block Grace Period**. Kung ito ay itinakda sa 7 araw, halimbawa, ang frontend ay hindi haharangin hanggang 7 araw pagkatapos ng petsa ng expiration ng membership—kahit na ang status ng membership ay `expired` na.

Itakda ito sa `0` kung gusto mo ng agarang pagharang pagkatapos maging inactive ang membership.

### 3. Kumpirmahin na Nagbago na Talaga ang Membership Status {#3-confirm-the-membership-status-has-actually-changed}

Pumunta sa **Ultimate Multisite > Memberships** at tingnan ang status ng apektadong membership. Kung nagpapakita pa rin itong `active` kahit lumipas na ang expiration date, hindi nangyari ang status transition. Mga karaniwang sanhi:

- **Ang membership ay auto-renewing**: Tingnan ang `auto_renew` field sa membership edit page. Kung naka-enable ang auto-renew, nilalaktawan ito ng expiration cron—umaasa ito sa payment gateway para i-report ang failure. Tingnan ang gateway dashboard mo (Stripe, PayPal) para kumpirmahin na tumutugma ang subscription status sa ipinapakita ng Ultimate Multisite.

- **Hindi tumakbo ang cron job**: Tingnan ang susunod na hakbang.

### 4. I-verify na Tumatakbo ang Action Scheduler {#4-verify-action-scheduler-is-running}

Gumagamit ang Ultimate Multisite ng Action Scheduler para sa mga cron job nito. Pumunta sa **Tools > Scheduled Actions** sa network admin at hanapin ang:

- **`wu_membership_check`** -- Dapat itong lumabas bilang isang recurring action na tumatakbo bawat oras. Kung wala ito, hindi naitatakda ang membership checks.
- **`wu_async_mark_membership_as_expired`** -- Ito ay mga indibidwal na gawain para markahan ang mga specific membership bilang expired. Kung makakakita ka ng failed actions dito, maaaring mayroong error messages na nagpapaliwanag kung bakit.

Kung nakakakita ka ng stuck o failed actions, maaaring may Action Scheduler issue ka. Mga karaniwang sanhi:

- **Ang `DISABLE_WP_CRON` ay itinakda sa `true`** sa `wp-config.php` nang walang system-level cron replacement
- **Mababa ang site traffic** -- Ang WP-Cron ay tumatakbo lamang kapag may bumisita sa site

Para masigurado ang maaasahang cron execution, mag-set up ng system cron job:

```bash
# Run every 5 minutes via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Or via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. I-check ang Gateway Webhook Issues (Auto-Renewing Memberships) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Kung ang membership ay auto-renewing at ang gateway subscription ay kinansela o nag-fail, ngunit ang Ultimate Multisite ay nagpapakita pa rin nito bilang `active`:

- **Stripe**: Pumunta sa Stripe Dashboard > Customers at tingnan ang subscription status. Pagkatapos ay i-verify ang webhook endpoint na active sa ilalim ng Developers > Webhooks. Ang endpoint ay dapat tumuro sa iyong site at magpakita ng successful deliveries.
- **PayPal**: Tingnan ang subscription status sa iyong PayPal business account at i-verify ang IPN/webhook delivery.

Kung ipinapakita ng gateway na kinansela ang subscription ngunit hindi ng Ultimate Multisite, malamang na nawala ang webhook notification. Maaari mong manu-manong baguhin ang membership status sa **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. I-check ang Expiration Grace Period (Cron Level) {#6-check-the-expiration-grace-period-cron-level}

Ang cron check ay may sariling grace period (default: 3 araw) bago markahan ang membership bilang expired. Ito ay hiwalay sa frontend block grace period. Ang kabuuang oras bago harangin ang site ay maaaring:

**Expiration grace period (3 araw)** + **Frontend block grace period (iyong setting)** = Kabuuang pagkaantala

Halimbawa, sa default settings at 7-araw na frontend grace period, maaaring tumagal ng hanggang 10 araw pagkatapos ng `date_expiration` bago talaga harangin ang site.

### 7. Manu-manong I-expire ang Membership {#7-manually-expire-a-membership}

Kung kailangan mong agad na harangin ang isang site nang hindi naghihintay sa cron cycle, maaari mong manu-manong baguhin ang membership status:

1. Pumunta sa **Ultimate Multisite > Memberships**
2. I-click ang apektadong membership
3. Baguhin ang status sa **Expired** o **Cancelled**
4. I-click ang **Save**

Ang frontend block ay magkakabisa sa susunod na page load (depende sa Frontend Block Grace Period para sa expired memberships, o agad para sa cancelled memberships).

## Buod {#summary}

Ang buong timeline mula sa petsa ng expiration hanggang sa pagharang ng site:

```text
date_expiration passes
       |
       v
  [3-day cron grace period]     <-- membership still shows as active/on-hold
       |
       v
  Cron marks membership as "expired"
       |
       v
  [Frontend Block Grace Period]  <-- configured in Settings > Memberships
       |
       v
  Site frontend is blocked
```

Para sa mga kinanselang membership, mas maikli ang daanan:

```text
  Membership cancelled
       |
       v
  date_expiration passes (no grace period)
       |
       v
  Site frontend is blocked immediately
```

## Developer Reference {#developer-reference}

Ang mga sumusunod na hook at filter ay nagpapahintulot sa iyo na i-customize ang pag-uugali ng expiration at pagharang:

| Hook/Filter | Deskripsyon |
|---|---|
| `wu_membership_grace_period_days` | Filter ang bilang ng araw ng grace period bago markahan ang membership bilang expired (default: 3) |
| `wu_schedule_membership_check_interval` | Filter ang interval sa pagitan ng mga membership check (default: 1 hour) |
| `wu_membership_renewal_days_before_expiring` | Filter kung ilang araw bago mag-expire para gumawa ng renewal payment (default: 3) |
| `wu_blocked_site_reactivation_url` | Filter para magbigay ng custom reactivation URL kapag naharang ang site |
| `wu_membership_is_active` | Filter kung ang membership ay itinuturing na active |
| `wu_membership_expired_check_query_params` | Filter ang query parameters na ginagamit para hanapin ang mga expired memberships |
| `wu_membership_trial_check_query_params` | Filter ang query parameters na ginagamit para hanapin ang mga expired trials |
