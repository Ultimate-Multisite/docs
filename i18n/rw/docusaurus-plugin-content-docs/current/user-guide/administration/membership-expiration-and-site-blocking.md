---
title: >-
  Ubwumvikane bwo kwishyura no gukoresha uburyo bw'ubwoko bw'ibyo bikoreshwa ku
  rubuga
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Ubutumwe mu gukoresha no Guhagarira ry'Ubutumwe

Iyi inyandiko irafasha kumenya uko Ultimate Multisite yikora ibisubizo ku guhagarira ry'ubutumwe, ukugera kw'ibitiramo (trials), no guhagarira ry'ibinyabwivu mu gice cyo gukoresha (frontend site blocking). Iyi inyandiko ifasha kumenya uburyo ubutumwe bwa umuntu bishobora gukora, kuva ku gukoresha kugeza ku guhagarira. Iyo ifasha kumenya ibyerekezo byo gutera ko ibiteguye (sites) bigaragara mu gihe cy'ubutumwe bwa umuntu bishobora guhagarirwa, no ibyo gukoresha kuvuga iyo ibiteguye bigaragara ariko ubutumwe bwa umuntu bishobora guhagarira.

## Uburyo Ubutumwe Bwa Umuntu Bishobora Gukera ku Guhagarira {#membership-status-lifecycle}

Ubutumwe bwose mu Ultimate Multisite bishobora kuba mu gihe cy'ubutumwe runaka:

:::note Ibyubutumwe by'umuntu by'umwihariko (Free memberships) ni byihagarirwa
Ibyubutumwe by'umwihariko bitagira guhagarira. Ultimate Multisite bishobora ibyitwa ko ari ubutumwe runaka, kandi bitagira guhagarira mu gihe cyo gukoresha kugeza ku guhagarira, nta cyerekezo cy'ubutumwe bwa umuntu bishobora gukera iyo umukozi yashobora gukora ubutumwe runaka cyangwa yashobora gukora ibindi byo.
:::

| Ubwoko (Status) | Uburyo (Meaning) |
|---|---|
| **Pending** | Icyemezo cy'ubutumwe cy'ibanze cy'ibitiramo cyangwa uburyo bwa email |
| **Trialing** | Igihe cy'ubutumwe cy'ubwoko, nta gukoresha igice cy'ubumvikane cyangwa ubundo |
| **Active** | Ubutumwe bufunguye kandi buri gihe |
| **On Hold** | Ubutumwe bwa guhagarira bishobora kuba bishobora gukera (invoice yashyirwaho, bitagira igice cy'ubundo) |
| **Expired** | Icyo cyo gukera ku gihe cy'ubutumwe cyangwa igihe cy'ubumvikane cyangwa guhagarira nta gufungura |
| **Cancelled** | Guhagarirwa mu buryo bwo kwifashishamo n'umuntu cyangwa umukozi |

### Uburyo Ubutumwe Bishobora Gukera ku Guhagarira {#how-memberships-transition-to-expired}

Ultimate Multisite yikora gukoresha uburyo runaka (background check) **gukera ku gihe cy'umwuka** kugira ngo itire ibyubutumwe byashobora guhagarirwa. Iyo gukoresha igice cy'ubundo (WP-Cron) nta gukoresha Action Scheduler, kandi yikora nk'igice cyo gutera ko `wu_membership_check`.

Guhagarira ry'ubutumwe rishobora gufashishwa mu gihe cy'umwuka **cyo 3** mu gihe cy'ubutumvikane (grace period) byihagarirwa. Ubutumwe bwa umuntu bitagera ko ari `expired` gusa iyo igihe cyo guhagarira cyangwa igihe cy'ubutumwe cyangwa guhagarira cyashobye ku gihe cyo 3 iyo `date_expiration` yashobye. Ibi byitwa bishobora umukozi kugira igihe cyo gukora ubundo bw'ibinyabwivu mbere y'ubutumwe bwa umuntu bishobora guhagarirwa.

:::info
Impamukuru y'umwuka w'ubwumvikane (3-day expiration grace period) ni ikigo cyiza cy'ibindi byo gukoresha uburyo bwo gukoresha Icyemezo cy'Umuco (Frontend Block Grace Period setting). Impamukuru y'ubwumvikane igaragaza igihe cyo guhindura **status** kuva ari "active/on-hold" kugeza kuri "expired". Icyemezo cyo gukoresha uburyo bwo gukoresha Frontend Block Grace Period igaragaza igihe cyo guhindura **site yari itangiriraho (blocked)** nyuma y'uko status yagize.
:::

#### Umuco w'ubwumvikane bw'ibindi byo gukoresha Auto-Renewing vs. Non-Auto-Renewing Memberships {#auto-renewing-vs-non-auto-renewing-memberships}

Icyemezo cyo guhindura iki ni ikigo cyiza kumenya uburyo ubwumvikane bishobora gukora:

- **Memberships y'ubwumvikane bw'ibindi (Non-auto-renewing memberships)** (`auto_renew = false`): Cron job yaho mu gihe (hourly cron job) igaragaza uburyo bwo guhindura cyose -- igira ibyemezo byo gukoresha imyenda y'ubwumvikane, igire umwanya ku status "on-hold", kandi cyangwa ikigize uko cyagize mu gihe cyo guhindura kuri "expired" niba nta nyumbura ya imyenda yashobora gutangwa.

- **Memberships y'ubwumvikane bw'ibindi (Auto-renewing memberships)** (`auto_renew = true`): Icyemezo cyo gukoresha uburyo bwo guhindura kuri cron job igaragaza iki mu gihe cyose. Icyemezo cyo gukoresha imyenda ya imyenda (Stripe, PayPal, n'ibindi) ni ikigo cyiza kumenya Ultimate Multisite ku buryo bwo kubwira uburyo bwo guhindura status cyangwa gukoreshwa mu gihe cyose. Niba webhook ntari yagize -- ku buryo bwo gukoresha endpoint yashoboye gutangwa, cyangwa niba imyenda ya imyenda itangiriraho mu gihe cyose -- ubwumvikane bushobora kwibuka kuri `active` mu gihe cyose, ntabwo ari mu gihe cyo guhindura.

### Uburyo Ubwumvikane Bishobora Gukemura (How Trials End) {#how-trials-end}

Iyo imyenda y'ubwumvikane y'ubwumvikane bishobora gukoresha (trialing membership) igihe cyo gufira, ishusho ya system igira ibi:

1. Icyemezo cyo gukoresha imyenda y'ubwumvikane ku mibare yose y'ubwumvikane
2. Guhindura status y'ubwumvikane kuva kuri `trialing` kugeza kuri `on-hold`
3. Gutangira email ya guhindura imyenda y'ubwumvikane ku umukoresha

Icyo cyose cyikora mu gihe cyo cron job cyangwa igihe cyo gukemura uburyo bwo gukoresha (regular expiration check), ariko **gusa ku memberships y'ubwumvikane bw'ibindi**. Ku imyenda y'ubwumvikane bishobora gukoresha, imyenda ya imyenda ni ikigo cyiza kumenya uburyo bwo guhindura ku muco w'imyenda (trial to paid subscription).

## Guhindura Umuco W'Ubwumvikane (Block Frontend Access) {#block-frontend-access}

Mbya, mu gihe, igihe umukono w'umukono (membership) ugarira cyangwa ugashyirwa mu gihe cy'ubwoba, **gusa wp-admin dashboard irereye**. Uruburyo rwa site ry'umunsi rishobora kugera ku bantu bose babona. Kugira ngo ushake gukora ubwoba bwa bintu byose, ugomba gukoresha igikorwa cy'ubwoba cy'ibyo (setting) cyo **Block Frontend Access**.

### Gukoresha Igihe Cy'Icyemezo (Configuring the Setting) {#configuring-the-setting}

Gukoresha **Ultimate Multisite > Settings > Memberships** kandi ugomba gukora **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Iyi ni umbwire bwo gukoresha igice cyose cyo gihe cy'umukono:

![Membership settings full page](/img/config/settings-membership-full.png)

Icyemezo cy'ibindi byiza bitewe n'iki gikorwa kiba:

| Icyemezo (Setting) | Uburyo bwo gukoresha | Icyemezo Cy'Ubwoba (Default) |
|---|---|---|
| **Block Frontend Access** | Icyemezo cy'ibyo byose. Iyo kirereye, kigarura uburyo bwa frontend bw'umunsi w'ubwoko bwose mu gihugu cyangwa umunsi ukoresheye. | Off (Aya) |
| **Frontend Block Grace Period** | Icyo cyo gihe cyo gukora mbere y'uko umukono ugarira mbere y'uko kirereye mbere y'uko kirereye. Gukoresha `0` kugira ngo ugore mu gihe cyose. | 0 |
| **Frontend Block Page** | Icyo ni igice cy'umunsi w'ubwoko bwose kigomba gukora umuntu wese yashobora kubona iyo umunsi ugarirwa. Niba ntabwo ugiye, abantu babona uburyo bwa "Iri site si ryari mu gihe cyacu." kandi hari link ku login page ya admin ya site. | None (Ntabwo) |

### Icyo Abantu Babona Iyo Umunsi Ugarirwa {#what-visitors-see-when-a-site-is-blocked}

Iyo umukono w'umunsi ugarirwa, abantu babona ibi:

1. **Bagarirwa** ku igice cyo **Frontend Block Page** (niba yashyiramo), cyangwa
2. **Babona uburyo bwo mbere**: "Iri site si ryari mu gihe cyacu." kandi hari link ku login page ya admin ya site.

Abantu babera umunsi (site admins) bashobora kumenya -- login page ntibyo igarirwa.

### Icyo Gigarirwa Kandi Iyo? {#what-gets-blocked-and-when}

Uburyo bwo gukora ubwoba bishobora kwerekana ku gihe cy'umukono:

| Icyemezo ya Ujumbe | Inyubakira y'Ubutumwa (Frontend) Yariye Yisanzwe? | Umuti W'Urugero (Grace Period) Yariye Yariye? |
|---|---|---|
| Active | Nta | -- |
| Trialing | **Nta** (shobora kubona umugambi ku mwezi wa mbere) | -- |
| On Hold | Urumva uyuhoze kuba wariye wariye -- nta kwihebya | -- |
| Expired | **Yego**, niba Block Frontend Access yariye yariye | Yego |
| Cancelled | **Yego**, mu gihe cyose (n'ubwo yariye yariye) | **Nta** -- ugiye gukorwa ngiduka |
| Pending | Nta kubyara ku ntego ya ubutumwa | -- |

:::warning Ubutumwa bwa Trialing bishobora kwibuka
Icyo ni ukuri ko ntabwo ubushobozi bw'Ubutumwa (frontend) bishobora kwibuka, ntabwo ubutumwa bwa trial wariye. Icyo gishobora kwibuka gishobora gukorwa gusa iyo ubutumwa bwa trial yariye mu gihe cyiza (kugira ngo ubone status igihariye). Ubutumwa bwa trial bifite uburyo bwo guhindura status (gusa, `on-hold` bishobora gukorwa n'cron job, mbere yego `expired` iyo nta kumenya). Iyo ufite butumwa bwa trial bishobora kuba bishobora kwibuka, shobora gukoresha igice cyo guhura (troubleshooting) kera.
:::

:::note Ubutumwa bwa Cancelled bifite uburyo bwo gutera ku mwezi wa mbere
Ubutumwa bwa Cancelled bifite uburyo bwo kwibuka mu gihe cyose iyo umwuka w'ubwujumbura (expiration date) yariye, ntabwo ubushobozi bw'Ubutumwa (frontend) bishobora kwibuka, ntabwo umuti w'Urugero (Grace Period) uburyo bwo gukorwa ku butumwa bwa Cancelled.
:::

## Uguherye: Icyo Gishobora Kwibuka Iyo Butumwa Bwiriye Mu gihe cyiza {#troubleshooting-sites-remaining-accessible-after-expiration}

Iyo butumwa bifite ubwujumbura (membership) bishobora kwibuka iyo umwuka w'ubwujumbura yariye, gukoresha uburyo bwo guhura ivi mu buryo uyuhe:

### 1. Gushyira Ubutumwa Bwa Block Frontend Access Iyo Yariye Yariye {#1-verify-the-block-frontend-access-setting-is-enabled}

Gukora ku **Ultimate Multisite > Settings > Memberships** kandi ugushyira umuvugizi (toggle) wa **Block Frontend Access** yariye yariye. Icyo cyiza ni **off by default**, bigera ko gusa wp-admin irashobora kwibuka iyo ubutumwa bwa butumwa bwa mbere bishobora kuba bishobora kwibuka.

### 2. Gushyira Urugero (Grace Period) Y'Ubutumwa Bwiriye Mu gihe cyiza {#2-check-the-frontend-block-grace-period}

Muze kugera ku gihe cy'ibyo bikoreshwa mu gihe cy'ibyo bishobora kuba byari mu gihe cyo gukoresha. Dore uburyo bwo gukora ibi:

Gukera ku gihe cyo gukoresha, gukera **Frontend Block Grace Period** (Uruko rw'ubwoba bw'ibyo mu gihe cyo gukoresha). Niba uyu ikoranwa ni 7 iforanyi, umuntu azakora ibi mu gihe cyo gukoresha ntabwo yagabanyijwe mugihe cy'umwihariko w'ubwoba bw'umwujiza (membership) ukurikije iforanyi ya mu gihe cyo gukoresha -- ntabwo niho umwujiza ugiye mu gihe cyo gufite ubwoba.

Gukora ibi ku 0 (zero) niba wifuza ko ubwoba bugaragaza mu gihe cy'umwujiza ukaba yagabanyijwe mu gihe cyo gukoresha.

### 3. Gukora Umuco W'Umwujiza Yagize Ubwoba {#3-confirm-the-membership-status-has-actually-changed}

Gera ku **Ultimate Multisite > Memberships** kandi ugereye kumenya ubwoba bw'umwujiza wifuza gukora ibi. Niba bishobora kuba byari `active` mu gihe cyo gufite ubwoba ntabwo iforanyi yagize, ibyo bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba byari bishobora kuba by

- **`DISABLE_WP_CRON` yitwa `true`** mu `wp-config.php` nta cyangwa nta cron ya system itangwa
- **Umuco w'ubwoko (Low site traffic)** -- WP-Cron igira gukora gusa iyo umuntu yagizeye kuwezi

Kugira ngo uburyo bwo gukora cron bwiza, twitanye impinduka z'ibyo mu cron ya system:

```bash
# Gukora buri 5 ni cyangwa wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Cyangwa binyuze mu WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Gukoresha Icyemezo cy'Gateway Webhook (Auto-Renewing Memberships) {#4-verify-action-scheduler-is-running}

Iyo umwanya w'ubwoko (membership) ukarereye mu gihe cyo gukora buri gihe kandi igikorwa cy'gateway subscription yashyirwe mu gihe cyangwa yashoboye, ariko Ultimate Multisite yitera ko iri `active`:

- **Stripe**: Gukoresha Stripe Dashboard > Customers kenshiye ubwoko bw'ubwoko (subscription status). Nyuma y'ibyo, gushyira umwanya w'webhook mu Developers > Webhooks kugira ngo ukenyeze. Icyemezo cyo webhook cyaba cyishyira kuwezi rwawe kandi kigisha gukora neza.
- **PayPal**: Kenshiye ubwoko bw'ubwoko mu PayPal business account yawe kandi gushyira umwanya w'IPN/webhook kugira ngo ukenyeze.

Iyo gateway yitera ko ubwoko bw'ubwoko washobye ariko Ultimate Multisite si yitera, ibyo webhook cyari cyishyurwa cyangwa cyagize mu gihe cyo gukora buri gihe. Uzi gukora umwanya w'ubwoko bw'ubwoko mu **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Gukoresha Icyemezo cy'Expiration Grace Period (Cron Level) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Icyemezo cyo cron kigira igihe cyo gukora (grace period) cyitwa (default: ifoto za 3) mbere y'ubwoko bwo ubwoko bwo kubaho mu gihe cyo gufata ko ryari yashobye. Icyo ni cyiza cyane ku gihe cyo gukora cyangwa uburyo bwo gukoresha (frontend block grace period). Igice cyose cy'umwihariko bwo kubaho mu gihe cyo gufata ko ryari yashobye cyaba:

**Icyemezo cyo gukora (3 days)** + **Icyemezo cyo frontend block (ubwoko bwawe)** = Igihe cyose cy'umutwe

Urugero, nkoze uburyo bwo kuva mu gihe cy'umwihariko. Nko mu gihe cy'ubwujisoro kandi ugiye ku gihe cy'umwihariko (grace period) cy'amajyayo y'umwezi 7, hari uburyo bwo gukora umunsi 10 cyangwa uburyo bwo gukoresha igihe kire cyane mbere uko uburyo bwo guhagarara bwihagarara.

### 7. Guhagarara Umwezi Mu gihe Cy'umwihariko (Manually Expire a Membership) {#6-check-the-expiration-grace-period-cron-level}

Iyo ushaka guhagarara umwezi mu gihe cy'ubwujisoro nta gukora cron cycle, uza kuba ufite uburyo bwo guhindura uburenganzira bw'umwezi mu gihe cy'umwihariko (membership status) mu buryo bw'ibyo:

1. So mu **Ultimate Multisite > Memberships**
2. Gukoresha umwezi w'umwezi ugiye gukora ibyo ushaka guhindura
3. Ghindura uburenganzira (status) ku **Expired** cyangwa **Cancelled**
4. Gukoresha **Save**

Uburyo bwo guhagarara mu frontend (frontend block) bishobora kwitwarira ku gihe cy'umwihariko cy'amajyayo y'umwezi 7 (subject to the Frontend Block Grace Period for expired memberships), cyangwa gukora imbaraga mu gihe cy'umwihariko cy'amajyayo y'umwezi 7 (immediately for cancelled memberships).

## Umuco (Summary) {#7-manually-expire-a-membership}

Uburyo bwo guhagarara ku gihe cyose kuva ku gihe cy'umwezi kugeza guhagarara umwezi:

```text
date_expiration itera
       |
       v
  [Igihe cy'umwihariko cy'cron (3-day cron grace period)] <-- umwezi w'umwezi ugiye kuba wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari

| Hook/Filter | Urugero |
|---|---|
| `wu_membership_grace_period_days` | Gukoresha nyuta y'umwihariko (grace period) mu gihe cyo gukora umwihariko kugira ngo umwihariko wari uzwi ko ugiye kwitera (default: 3) |
| `wu_schedule_membership_check_interval` | Gukoresha igihe cy'umwihariko mu gihe cyo gukoresha umwihariko (default: 1 ora) |
| `wu_membership_renewal_days_before_expiring` | Gukoresha igihe cy'imyaka itandukanye mbere yitera ngo umwihariko wari uzwi ko ugiye kwita ku gihe cyo gukora umwihariko (default: 3) |
| `wu_blocked_site_reactivation_url` | Gukoresha URL ishyirwaho mu gihe cyo site yashyirwe mu gihe cyo gukoresha ngo uburyo bwo kwibuka umwihariko (custom reactivation URL) iyo site yashyirwe mu gihe cyo gukora umwihariko |
| `wu_membership_is_active` | Gukoresha uko umwihariko ugiye kubaho (active) |
| `wu_membership_expired_check_query_params` | Gukoresha amafoto y'umwihariko yashyirwe mu gihe cyo gukora umwihariko kugira ngo utere umwihariko wari uzwi ko ugiye kwitera (expired) |
| `wu_membership_trial_check_query_params` | Gukoresha amafoto y'umwihariko yashyirwe mu gihe cyo gukora umwihariko kugira ngo utere umwihariko wari uzwi ko ugiye kwitera (expired trial) |
