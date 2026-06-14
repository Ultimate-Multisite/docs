---
title: Kutendeka kwa Upozi wa Uwanja na Kuzuia Uwanja
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Kufufu kwa Ufupi wa Ufanisi na Kuzuia Tovuti

Ili kufahamu jinsi Ultimate Multisite inavyoshughulikia kuisha kwa uwezo (membership expiration), kukataliwa kwa majaribio (trial endings), na kuzuia tovuti mbele ya wateja (frontend site blocking). Hii itakueleza maisha ya membership kutoka kuwa hai hadi kuisha, mipangilio inayodhibiti kama tovuti zinazotolewa inapaswa kukataliwa, na unachopaswa kuangalia wakati tovuti bado zinaweza kufikiwa baada ya uwezo kuisha.

## Maisha ya Hali ya Membership (Membership Status Lifecycle)

Kila membership katika Ultimate Multisite ina hali moja kati ya hizi:

:::note Free memberships ni maisha marefu
Free memberships hazikosi kwa wakati. Ultimate Multisite inazitambua kama fursa ya maisha marefu, hivyo hazijumuishi katika ukaguzi wa kuisha isipokuwa msimamizi aweze kubadilisha hali yao au kuhamisha mteja kwenye bidhaa nyingine.
:::

| Hali (Status) | Maana |
|---|---|
| **Pending** | Inasubiri malipo ya kwanza au uthibitishaji wa barua pepe |
| **Trialing** | Kipindi cha majaribio kinachofanya kazi, hakuna malipo yaliyokusanywa bado |
| **Active** | Imelipwa na hali iliyo sasa (current) |
| **On Hold** | Malipo ya kuanza upya yamekuwa yakisubiri (fatura imechukuliwa, inasubiri malipo) |
| **Expired** | Imepita tarehe ya kuisha na kipindi cha huruma bila kufanya upya |
| **Cancelled** | Imeozwa wazi na mteja au msimamizi |

### Jinsi Membership Zinavyobadilika Kuisha (How Memberships Transition to Expired)

Ultimate Multisite inafanya ukaguzi wa nyuma **kila saa** unaotafuta membership ambayo inapaswa kuwekwa kama iliyoisha. Ukaguzi huu unatumia [Action Scheduler](https://actionscheduler.org/) (sio WP-Cron moja kwa moja) na hufanyika kama action ya `wu_membership_check` inayopangwa (scheduled).

Ukaguzi wa kuisha una **kipindi cha huruma cha awali cha siku 3** kimsingi. Membership haitakiwi kuwekwa kama `expired` mpaka siku 3 baada ya tarehe yake ya kuisha (`date_expiration`) ipite. Hii inampa wateja muda wa kukamilisha malipo ya baadaye kabla hali yao kubadilika.

:::info
Kutera ya muda wa kuisha (expiration grace period) ya siku 3 inapeperaka kutokana na mipangidwe ya Grace Period ya Frontend Block iliyoezwa hapa chini. Kutera ya muda wa kuisha inadhibiti wakati **status inabadilika** kutoka active/on-hold hadi expired. Mipangidwe ya Grace Period ya frontend inadhibiti wakati **site inalizwa (blocked)** baada ya status kubadilika tayari.
:::

#### Ubadile wa Huduma Zinazorejeshwa Kujyenyiti (Auto-Renewing) dhidi za Zilizopangwa (Non-Auto-Renewing)

Hii tofauti ni muhimu sana kuelewa jinsi muda wa kuisha unavyofanya kazi:

- **Huduma zisizirejeshwa kujyenyiti** (`auto_renew = false`): Cron job ya kila saa inashughulikia mzunguko mzima -- inaunda malipo ya urefu (renewal payments), inabadilisha huduma kuwa on-hold, na mwishowe inaiweka kama iliyokwisha muda ikiwa malipo hayajafika.

- **Huduma zinazorejeshwa kujyenyiti** (`auto_renew = true`): Ukaguzi wa kuisha kwa cron **unapita hizi zote**. Gateway ya malipo (Stripe, PayPal, n.k.) inatarajiwa itumie webhooks kuto Ultimate Multisite wakati usajili unashindwa au unapokatwa. Ikiwa webhook haitapokelewi -- kutokana na kiunganishi uliowekwa vibaya, kukatika kwa gateway, au usajili uliokatwa nje ya mfumo -- huduma inaweza kubaki `active` milele hata baada ya tarehe ya kuisha kupita.

### Jinsi Majaribio (Trials) Yanavyoisha

Wakati kipindi cha majaribio (trialing membership) kinapokwisha, mfumo hufanya yafuatayo:

1. Inaunda malipo ya urefu la usajili kwa kiasi kamili
2. Inabadilisha hali ya huduma kutoka `trialing` hadi `on-hold`
3. Inatuma barua pepe ya kutumia malipo ya urefu (renewal payment notification email) kwa mteja

Mchakato huu unafanyika kwenye ratiba sawa ya kila saa kama ukaguzi wa kuisha wa kawaida, lakini **kwa huduma zisizirejeshwa kujyenyiti tu**. Kwa majaribio yanayorejeshwa kujyenyiti, gateway ya malipo ndiyo inashughulikia mabadiliko kutoka trial hadi usajili uliolipa.

## Kuzuia Ufikiaji wa Frontend

Kwa kawaida, wakati uwezo wa ujumbe (membership) unakwisha au unapokuwa umeoshwa (on hold), **hata wp-admin dashboard tu inahusishwa**. Frontend ya tovuti inabaki inapatikana kwa wageni. Ili pia kuziba upatikanaji wa umma, lazima uweze kuwasha mipangilio ya **Block Frontend Access**.

### Kuweka Mipangilio

Nenda kwenye **Ultimate Multisite > Settings > Memberships** na uweke wazi (enable) **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Hapa kuna mwonekano kamili wa ukurasa wa mipangilio ya ujumbe:

![Membership settings full page](/img/config/settings-membership-full.png)

Mipangilio mitatu inayohusiana inasimamia tabia hii:

| Setting | Maelezo | Default |
|---|---|---|
| **Block Frontend Access** | Switch kuu (Master toggle). Wakati inapoandaliwa, inazuia frontend ya umma ya sites za mtandao wakati ujumbe wao haujakubali tena. | Off |
| **Frontend Block Grace Period** | Idadi ya siku unazojua baada ya ujumbe kuacha kufanya kazi kabla ya kuziba. Weka `0` ili kuziba mara moja. | 0 |
| **Frontend Block Page** | Ukurasa kwenye tovuti kuu unaoongoza wageni pale site inapoiziba. Ikiwa haujaweka, wageni watakuta ujumbe wa kawaida "Site not available" na link kwenda ukurasa wa kuingia kwa admin wa site. | None |

### Kile Kinachotokea Wakati Site Inapoziba

Wakati upatikanaji wa frontend unazoziba, wageni wanaweza:

1. **Kuongozwa (Be redirected)** kwenye ukurasa ulioweka katika **Frontend Block Page** (kama umeifanya), au
2. **Kutazama ujumbe wa kawaida**: "This site is not available at the moment" na link kwenda ukurasa wa kuingia kwa admin wa site.

Admin wa site bado anaweza kuingia -- ukurasa wa kuingia hauziba kamwe.

### Kile Kinachoziba na Wakati

Tabia ya kuziba inategemea hali ya ujumbe:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | No | -- |
| Trialing | **No** (see note below) | -- |
| On Hold | Considered active -- not blocked | -- |
| Expired | **Yes**, if Block Frontend Access is on | Yes |
| Cancelled | **Yes**, always (regardless of setting) | **No** -- blocked immediately |
| Pending | Not blocked via membership check | -- |

:::warning Membership ya Trialing siye sikwira
Kuti mpaka mukuya, membership yomwe imayera n'maka, membership yomwe imayera n'maka (trial) ha iyera ku frontend. Kuti mpaka mukuya, trial inapasira ku status iliyonse (kuti monga `on-hold` bwanji bwa cron job, monga `expired` monga mukuya). Mukwira kuti mukuya membership yomwe imayera n'maka ha iyera ku frontend. Kuti mpaka mukuya, trial inapasira ku status iliyonse (kuti monga `on-hold` bwanji bwa cron job, monga `expired` monga mukuya). Mukwira kuti mukuya membership yomwe imayera n'maka ha iyera ku frontend. Kuti mpaka mukuya, trial inapasira ku status iliyonse (kuti monga `on-hold` bwanji bwa cron job, monga `expired` monga mukuya). Mukwira kuti mukuya membership yomwe imayera n'maka ha iyera ku frontend.
:::

:::note Membership ya Cancelled inapasira grace period
Membership ya Cancelled inapasira grace period. Membership ya Cancelled inapasira grace period. Membership ya Cancelled inapasira grace period. Membership ya Cancelled inapasira grace period. Membership ya Cancelled inapasira grace period. Membership ya Cancelled inapasira grace period. Membership ya Cancelled inapasira grace period.
:::

## Kuti Mukuya: Sites Zikupitira pamene zikayera

Kuti sites zikupitira pamene membership ikayera, mukuya kupeza ndalamazi monga mukuya kupeza ndalamazi monga mukuya kupeza ndalamazi.

### 1. Kuti Mukuya Block Frontend Access Setting Iye Yera

Tiyera ku **Ultimate Multisite > Settings > Memberships** ndi kukhulupirira kuti **Block Frontend Access** ikuyera. Iyi setting imayera monga default, zomwe zimene kuti wp-admin ikuyera pamene membership ikayera.

### 2. Kuti Mukuya Frontend Block Grace Period

Pati ndipo m'maka ya kuweka settings, chani **Frontend Block Grace Period** value. Ngati pano imetendeka kuti iwe yomwezi 7, mwachitsanzo, frontend haipitilika mpaka siku 7 m'maka poyamba kupita kudzera kwa membership -- ngati status ya membership imetendeka `expired` upamwamba.

Seti ku `0` ngati mukufuna kukatula m'maka pamene membership imalimbikira.

### 3. Onesha kuti Status ya Membership Imelimbikira Kwambiri

Tiririra ku **Ultimate Multisite > Memberships** ndipo chani status ya membership yomwezi uliyoona. Ngati imeramba ikondwa `active` pamene siku ya kupita imetendeka, mukuya kuti upitiliza kuliye. Mwayi woperekera:

- **Membership imalimbikira kwa kujiteledwa**: Chani field ya `auto_renew` pa page ya ku edit membership. Ngati auto-renew imelimbikira, cron job ya kupita siku imapita pamene membership imalimbikira -- imalimbikira kudzera kwa payment gateway kuti iropote chifukwa cha kukwera. Chani dashboard ya gateway yako (Stripe, PayPal) kuti mupereke kuti status ya subscription imakumbutsa yomwe Ultimate Multisite imelimbikira.

- **Cron job haipita**: Chani step iliyonse.

### 4. Onesha kuti Action Scheduler Imalimbikira

Ultimate Multisite imalimbikira Action Scheduler kwa cron jobs yake. Tiririra ku **Tools > Scheduled Actions** m'network admin ndipo chani:

- **`wu_membership_check`** -- Iyi imalimbikira kupita poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poyamba poy

- **`DISABLE_WP_CRON` ilibe `true`** m'maka `wp-config.php` m'maka cron ya muli, m'maka kukhala kwa mfundo ya ntchito ya sistema

-- M'maka kuti cron ikwamba bwino, m'maka cron job ya sistema:

```bash
# Kufuna kuwamba m'maka 5 minu bwanji m'maka wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Kapena m'maka WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Kufuna kuona matule ya Gateway Webhook (Memberships ikwamba muli)

M'maka membership ikwamba muli, koma subscription ya gateway imakwambidwa kapena imafamba, koma Ultimate Multisite ikuwamba kuti ikwamba:

- **Stripe**: Tenda ku Stripe Dashboard > Customers ndi kuona status ya subscription. Kodi muli woyamba webhook endpoint ikuwamba kwa Developers > Webhooks. Endpoint iye imakwamba pa site yanu ndipo imalimbikitsa kukwamba bwino.
- **PayPal**: Onani status ya subscription mu account yanu ya PayPal business ndipo onani kuti IPN/webhook ikuwamba.

Ngati gateway imalimbidwa kuti subscription imakwambidwa koma Ultimate Multisite simalimbidwa, muli woyamba notification ya webhook imakwambidwa. Muli woyamba kugawira status ya membership m'maka mu **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Kufuna kuona Mfulu wa Kuwamba (Cron Level)

Kukonzi cron kumuli mfulu wake wamaka (default: siku 3) m'maka kuti membership ikuwamba. Iyi si m'maka ya frontend block. Nkhani yote yomwe ikuwamba m'maka yomwe sita ndi:

**Mfulu wa kuwamba (siku 3)** + **Mfulu wa frontend block (muli wanu)** = Mfulu wosavuta

Mifweso, ndi kuti m'moyo wosayera (site) ufunikizidwa kupitilira. Mwachitsanzo, ndi zinthu zomwe zimapereka kwa mfundo yomwe imapereka m'moyo wosayera wosiyanasiyana.

### 7. Kupitilira M'membership Maniwani (Manually Expire a Membership)

Ngati mukufuna kupitilira site mwachidule pamene muli kumayamba kukhala kwa cron cycle, muli ndi ulemu wosayera (membership status) m'moyo wosiyanasiyana:

1. Rendani ku **Ultimate Multisite > Memberships**
2. Rendani pa membership womwe umayenera
3. Gundikira ulemu wosayera kuti **Expired** kapena **Cancelled**
4. Gundikira **Save**

Ulemu wosayera (frontend block) mudzakhala m'moyo wosiyanasiyana m'moyo wosayera womwe umayenera (subject to the Frontend Block Grace Period for expired memberships, or immediately for cancelled memberships).

## Mwachidule (Summary)

Moyeso wosiyanasiyana wochokera ku tsiku la kupitilira kukhala kwa site:

```text
date_expiration imapita
       |
       v
  [3-day cron grace period]     <-- membership ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ikuti ik

| Hook/Filter | Maonero |
|---|---|
| `wu_membership_grace_period_days` | Kufilira idayi la grace period lalikulu monga kukhala membership kukhala kukhala (default: 3) |
| `wu_schedule_membership_check_interval` | Kufilira idayi la kupeza membership (default: 1 hour) |
| `wu_membership_renewal_days_before_expiring` | Kufilira idayi la tsiku la kukhala monga kukhala payment ya renewal monga kukhala kukhala (default: 3) |
| `wu_blocked_site_reactivation_url` | Kufilira kuti mupe URL ya kupeza site monga kukhala kukhala (custom reactivation URL) pa site ikhala ikhala |
| `wu_membership_is_active` | Kufilira kuti membership ikhalidwa ikhale ikhale active |
| `wu_membership_expired_check_query_params` | Kufilira query parameters zolimbikira kupeza memberships zomwe zikukhala expired |
| `wu_membership_trial_check_query_params` | Kufilira query parameters zolimbikira kupeza trials zomwe zikukhala expired |
