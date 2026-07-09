---
title: Pag-expire ng Miyembro at Pag-block ng Site
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Pag-expire ng Membership at Pag-block ng Site {#membership-expiration-and-site-blocking}

Ipaliwanag ng gabay na ito kung paano hinahawakan ng Ultimate Multisite ang pag-expire ng membership, pagtatapos ng trial, at pag-block sa frontend ng site. Saklaw nito ang buong siklo ng isang membership mula aktibo hanggang expired, ang mga setting na nagkokontrol kung magbo-block ba ang mga site, at kung ano ang dapat tingnan kapag nananatiling accessible ang mga site kahit nag-expire na ang membership.

## Siklo ng Status ng Membership {#membership-status-lifecycle}

Ang bawat membership sa Ultimate Multisite ay may isa sa mga sumusunod na status:

:::note Ang mga libreng membership ay panghabambuhay (lifetime)
Hindi awtomatikong nag-e-expire ang mga libreng membership. Itinuturing ng Ultimate Multisite ang mga ito bilang lifetime access, kaya hindi sila kasama sa mga pag-check ng expiration maliban kung binago ng administrator ang kanilang status o inilipat ang customer sa ibang produkto.

| Status | Kahulugan |
|---|---|
| **Pending** | Naghihintay pa ng unang bayad o email verification |
| **Trialing** | Aktibong trial period, wala pang nakolektang bayad |
| **Active** | Nabayaran at kasalukuyan |
| **On Hold** | Nakabinbin ang bayad para sa renewal (nakagawa na ng invoice, naghihintay pa ng bayad) |
| **Expired** | Lumampas na sa petsa ng pag-expire at grace period nang walang renewal |
| **Cancelled** | Malinaw na kinansela ng customer o admin |

### Paano Nagiging Expired ang mga Membership {#how-memberships-transition-to-expired}

Ang Ultimate Multisite ay nagsasagawa ng background check **bawat oras** para hanapin ang mga membership na dapat itala bilang expired. Ang pag-check na ito ay gumagamit ng [Action Scheduler](https://actionscheduler.org/) (hindi direktang WP-Cron) at tumatakbo bilang `wu_membership_check` scheduled action.

Mayroon itong **built-in grace period na 3 araw** sa default setting para sa pagche-check ng expiration. Hindi magiging `expired` ang isang membership hangga't hindi lumalampas ang 3 araw matapos ma-pass ang `date_expiration`. Nagbibigay ito ng oras sa mga customer para makumpleto ang huling bayad bago magbago ang kanilang status.

:::info
Ang 3-araw na grace period para sa expiration ay hiwalay sa setting ng Frontend Block Grace Period na inilarawan sa ibaba. Ang expiration grace period ang nagkokontrol kung kailan **magbabago ang status** mula active/on-hold patungong expired. Ang frontend block grace period naman ang nagkokontrol kung kailan **ma-block ang site** pagkatapos magbago ng status.
:::

#### Auto-Renewing vs. Non-Auto-Renewing Memberships {#auto-renewing-vs-non-auto-renewing-memberships}

Mahalaga ito para maintindihan ang asal ng expiration:

- **Mga miyembro na hindi awtomatikong nagre-renew** (`auto_renew = false`): Ang hourly cron job ang humahawak sa buong siklo -- gumagawa ito ng mga bayad para sa renewal, inililipat ang membership sa on-hold, at kalaunan ay minarkahan bilang expired kung walang natanggap na bayad.

- **Mga miyembro na awtomatikong nagre-renew** (`auto_renew = true`): Ang pagche-check ng expiration ng cron job **ay hindi ito kasama**. Inaasahang magpapadala ang payment gateway (Stripe, PayPal, atbp.) ng notification sa Ultimate Multisite gamit ang webhooks kapag nabigo o kinansela ang subscription. Kung walang natanggap na webhook -- dahil sa maling configuration ng endpoint, pagkawala ng serbisyo ng gateway, o kung ang subscription ay kinansela sa labas ng sistema -- maaaring manatiling `active` ang membership kahit lumampas na ang petsa ng expiration.

### Paano Nagtatapos ang mga Trial {#how-trials-end}

Kapag natapos ang trial period ng isang trialing membership, ang system:

1. Lumilikha ng pending renewal payment na may buong halaga ng subscription
2. Nagpapalit ng status ng membership mula `trialing` patungong `on-hold`
3. Nagpapadala ng email notification para sa renewal payment sa customer

Ang prosesong ito ay tumatakbo sa parehong oras ng regular na pagche-check ng expiration, ngunit **para lamang sa mga membership na hindi awtomatikong nagre-renew**. Para naman sa mga auto-renewing trial, ang payment gateway ang bahala sa paglipat mula sa trial patungo sa bayad na subscription.

## Pag-block ng Access sa Frontend {#block-frontend-access}

Sa default setting, kapag nag-expire o naka-hold ang isang membership, **ang `wp-admin dashboard` lang ang limitado**. Ang public frontend ng site ay nananatiling accessible sa mga bisita. Para ma-block din ang access ng publiko, kailangan mong i-enable ang setting na **Block Frontend Access**.

### Pag-configure ng Setting {#configuring-the-setting}

Pumunta sa **Ultimate Multisite > Settings > Memberships** at i-enable ang **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Narito ang buong tingin sa membership settings page:

![Membership settings full page](/img/config/settings-membership-full.png)

Tatlong kaugnay na setting ang kumokontrol sa pag-uugali na ito:

| Setting | Deskripsyon | Default |
|---|---|---|
| **Block Frontend Access** | Pangunahing toggle. Kapag naka-enable ito, ibiniblo-block nito ang public na bahagi ng network sites kapag hindi na aktibo ang kanilang membership. | Off |
| **Frontend Block Grace Period** | Bilang ng araw na maghihintay pagkatapos mawala ang aktibong membership bago i-block. Itakda sa `0` para agad na ma-block. | 0 |
| **Frontend Block Page** | Isang pahina sa pangunahing site kung saan ire-redirect ang mga bisita kapag na-block ang isang site. Kung hindi itinakda, makikita ng mga bisita ang generic na mensaheng "Site not available". | None |

### Ano ang Makikita ng mga Bisita Kapag Na-block ang Isang Site {#what-visitors-see-when-a-site-is-blocked}

Kapag na-block ang frontend access, ang mga bisitang pumunta sa site ay magkakaroon ng isa sa mga sumusunod:

1. **Muling idirekta** sa page na pinili mo sa **Frontend Block Page** (kung naka-configure), o
2. **Makakita ng default na mensahe**: "Hindi magagamit ang site sa ngayon." na may link patungo sa login page para sa site admin.

Maaayos pa ring mag-login ang mga site admin -- hindi kailanman bawal ang login page.

### Ano ang Binablock at Kailan Ito Nangyayari {#what-gets-blocked-and-when}

Ang pagbabawal ay nakadepende sa status ng membership:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | Hindi | -- |
| Trialing | **Hindi** (tingnan ang note sa ibaba) | -- |
| On Hold | Itinuturing na active -- hindi nabablock | -- |
| Expired | **Oo**, kung naka-on ang Block Frontend Access | Oo |
| Cancelled | **Oo**, palagi (kahit anong setting pa) | **Hindi** -- agad na nabablock |
| Pending | Hindi nabablock sa membership check | -- |

:::warning Hindi binabantayan ang mga trial membership
Kahit matapos ang trial period, ang isang membership na may status na `trialing` ay **hindi** ma-block sa frontend. Kailangan munang lumipat ng status ang trial (karaniwan ay sa `on-hold` gamit ang cron job, tapos `expired` kung hindi nabayaran). Kung nakakakita ka ng mga trialing membership na hindi pa nagbabago ang status, tingnan ang troubleshooting section sa ibaba.
:::

:::note Ang mga kinanselang membership ay hindi naaapektuhan ng grace period
Ang mga kinanselang membership ay laging ma-block kapag lumipas na ang expiration date, anuman kung naka-enable ba ang Block Frontend Access. Ang Frontend Block Grace Period ay **hindi** aplikable sa mga kinanselang membership.
:::

## Troubleshooting: Mga Site na Nanatiling Accessible Pagkatapos ng Expiration {#troubleshooting-sites-remaining-accessible-after-expiration}

Kung nananatiling pampubliko ang mga site pagkatapos mag-expire ang isang membership, sundin ang mga check na ito ayon sa pagkakasunod:

### 1. Siguraduhin na naka-enable ang Block Frontend Access Setting {#1-verify-the-block-frontend-access-setting-is-enabled}

Pumunta sa **Ultimate Multisite > Settings > Memberships** at i-check kung naka-on ang toggle na **Block Frontend Access**. Ang setting na ito ay **off by default**, ibig sabihin, ang `wp-admin` lang ang maghihigpit kapag hindi na aktibo ang isang membership.

### 2. Tingnan ang Frontend Block Grace Period {#2-check-the-frontend-block-grace-period}

Sa parehong settings page, tingnan ang value ng **Frontend Block Grace Period**. Kung ito ay naka-set sa 7 araw, halimbawa, hindi ma-block ang frontend hanggang 7 araw pagkatapos ng petsa ng pag-expire ng membership -- kahit na `expired` na ang status ng membership.

Itakda ito sa `0` kung gusto mo ng agarang pag-block pagkatapos maging inactive ang membership.

### 3. Siguraduhin na Nagbago Talaga ang Status ng Membership {#3-confirm-the-membership-status-has-actually-changed}

Pumunta sa **Ultimate Multisite > Memberships** at tingnan ang status ng apektadong membership. Kung nakikita pa rin itong `active` kahit lumipas na ang expiration date, hindi naganap ang pagbabago ng status. Mga karaniwang dahilan:

- **Ang membership ay awtomatikong nagre-renew**: Tingnan ang field na `auto_renew` sa edit page ng membership. Kung naka-enable ang auto-renew, hindi sakop ito ng expiration cron -- umaasa ito sa payment gateway para mag-report ng pagkabigo. Tingnan ang dashboard ng iyong gateway (Stripe, PayPal) para makumpirma kung tugma ba ang status ng subscription sa ipinapakita ng Ultimate Multisite.

- **Hindi tumakbo ang cron job**: Tingnan ang susunod na hakbang.

### 4. I-verify na Tumatakbo ang Action Scheduler {#4-verify-action-scheduler-is-running}

Ginagamit ng Ultimate Multisite ang Action Scheduler para sa mga cron job nito. Pumunta sa **Tools > Scheduled Actions** sa network admin at hanapin ang mga sumusunod:

- **`wu_membership_check`** -- Ito ay dapat lumabas bilang isang paulit-ulit na aksyon na tumatakbo tuwing isang oras. Kung wala ito, hindi naka-schedule ang membership checks.
- **`wu_async_mark_membership_as_expired`** -- Ang mga ito ay mga indibidwal na task para i-mark bilang expired ang mga partikular na membership. Kung makakita ka ng mga failed actions dito, maaaring mayroon itong error messages na nagpapaliwanag kung bakit hindi ito gumana.

Kung nakakakita ka ng mga aksyon na stuck o nabigo, baka may problema sa Action Scheduler mo. Mga karaniwang sanhi nito:

- **`DISABLE_WP_CRON` ay naka-set sa `true`** sa `wp-config.php` nang walang system-level cron replacement
- **Mababang trapiko ng site (Low site traffic)** -- Ang WP-Cron ay tumatakbo lang kapag may bumibisita sa site

Para masigurado ang maaasahang pagtakbo ng cron job, mag-set up ka ng system cron job:

```bash
# Tumakbo tuwing 5 minuto gamit ang wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# O sa pamamagitan ng WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Tingnan ang mga Problema sa Gateway Webhook (Auto-Renewing Memberships) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Kung ang membership ay auto-renew at ang subscription ng gateway ay na-cancel o nabigo, pero ipinapakita pa rin ng Ultimate Multisite bilang `active`:

- **Stripe**: Pumunta sa Stripe Dashboard > Customers at tingnan ang status ng subscription. Pagkatapos, i-verify kung aktibo ang webhook endpoint sa Developers > Webhooks. Dapat ituro ng endpoint ang iyong site at magpakita ng matagumpay na mga paghahatid (deliveries).
- **PayPal**: Tingnan ang status ng subscription sa iyong PayPal business account at i-verify ang IPN/webhook delivery.

Kung ipinapakita ng gateway na nakansela ang subscription pero hindi ito nakikita ng Ultimate Multisite, malamang nawala ang notipikasyon mula sa webhook. Maaari mong manu-manong baguhin ang membership status sa **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Tingnan ang Grace Period ng Expiration (Cron Level) {#6-check-the-expiration-grace-period-cron-level}

May sarili ring grace period ang cron check (default: 3 araw) bago itala bilang expired ang isang membership. Ito ay hiwalay sa grace period ng frontend block. Ang kabuuang oras bago ma-block ang site ay maaaring maging:

**Expiration grace period (3 araw)** + **Frontend block grace period (iyong setting)** = Total delay

Halimbawa, gamit ang default settings at isang 7-araw na frontend grace period, maaari itong tumagal hanggang 10 araw pagkatapos ng `date_expiration` bago talaga ma-block ang site.

### 7. Manu-manong I-expire ang Isang Membership {#7-manually-expire-a-membership}

Kung kailangan mong agad i-block ang isang site nang hindi naghihintay sa cron cycle, maaari mong manu-manong baguhin ang status ng membership:

1. Pumunta sa **Ultimate Multisite > Memberships**
2. I-click ang apektadong membership
3. Baguhin ang status sa **Expired** o **Cancelled**
4. I-click ang **Save**

Ang frontend block ay magsisimulang mag-effect sa susunod na pag-load ng page (depende ito sa Frontend Block Grace Period para sa mga expired membership, o agad kung ang membership ay kinansela).

## Buod {#summary}

Ang buong timeline mula petsa ng pag-expire hanggang sa pagbablock ng site:

```text
date_expiration passes
       |
       v
  [3-day cron grace period]     <-- ang membership ay magpapakita pa ring active/on-hold
       |
       v
  Cron marks membership as "expired"
       |
       v
  [Frontend Block Grace Period]  <-- naka-configure sa Settings > Memberships
       |
       v
  Site frontend is blocked
```

Para sa mga kinanselang membership, mas maikli ang daan:

```text
  Membership cancelled
       |
       v
  date_expiration passes (walang grace period)
       |
       v
  Site frontend is blocked immediately
```

Ang mga hook at filter na ito ay nagbibigay sa iyo ng kakayahang i-customize ang expiration (pag-expire) at pagbabawal (blocking) ng isang bagay:

| Hook/Filter | Deskripsyon |
|---|---|
| `wu_membership_grace_period_days` | Mag-filter sa bilang ng mga araw na grace period bago markahan ang isang membership bilang expired (default: 3) |
| `wu_schedule_membership_check_interval` | Mag-filter sa pagitan ng interval ng pagche-check ng membership (default: 1 oras) |
| `wu_membership_renewal_days_before_expiring` | Mag-filter kung ilang araw bago mag-expire para gumawa ng renewal payment (default: 3) |
| `wu_blocked_site_reactivation_url` | Mag-filter para magbigay ng custom reactivation URL kapag na-block ang isang site |
| `wu_membership_is_active` | Mag-filter kung ang isang membership ay itinuturing na active |
| `wu_membership_expired_check_query_params` | Mag-filter sa mga query parameters na ginagamit para mahanap ang mga expired na membership |

| `wu_membership_trial_check_query_params` | Mag-filter ng mga query parameter na ginagamit para hanapin ang mga expired trial |
