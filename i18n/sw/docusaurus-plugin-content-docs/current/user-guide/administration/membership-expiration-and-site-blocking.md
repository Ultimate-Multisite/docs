---
title: Mwisho wa Uanachama na Kuzima Tovuti
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Kuisha Muda kwa Uanachama na Kuzima Tovuti

Mwongozo huu unakufafanulia jinsi Ultimate Multisite inavyoshughulikia kuisha muda kwa uanachama, kumalizika kwa vipindi vya majaribio, na kuzima ufikiaji wa tovuti kutoka mbele (frontend). Unafunika mzunguko mzima wa uanachama kuanzia hali ya hai hadi kuisha muda, mipangilio inayodhibiti kama tovuti zinazozimwa, na nini cha kuangalia ikiwa tovuti bado zinaonekana kwa watu baada ya uanachama kuisha.

## Mzunguko wa Hali ya Uanachama

Kila uanachama katika Ultimate Multisite una mojawapo ya hali zifuatazo:

:::note Uanachama wa bure ni wa maisha yote
Uanachama wa bure haisha muda kiotomatiki. Ultimate Multisite inatitazama kama ufikiaji wa maisha yote, kwa hivyo hajiingii katika ukaguzi wa kuisha muda isipokuwa msimamizi anabadilisha hali yake au kumhamisha mteja kwa bidhaa nyingine.
:::

| Hali | Maana |
|---|---|
| **Pending** | Inasubiri malipo ya kwanza au uthibitisho wa barua pepe |
| **Trialing** | Kipindi cha majaribio hai, bado hakuna malipo yaliyokusanywa |
| **Active** | Limelipwa na bado linafanya kazi |
| **On Hold** | Malipo ya uwezesha (renewal) yanasubiri (invoice imetolewa, yanasubiri malipo) |
| **Expired** | Limepita tarehe ya kuisha muda na kipindi cha neema bila uwezesha |
| **Cancelled** | Kimefuta wazi na mteja au msimamizi |

### Jinsi Uanachama Linavyoenda Hali ya Kuisha Muda

Ultimate Multisite inafanya ukaguzi wa nyuma (background check) **kila saa** kutafuta uanachama ambazo zinapaswa kuwekwa kama zimeisha muda. Ukaguzi huu unatumia [Action Scheduler](https://actionscheduler.org/) (sio WP-Cron moja kwa moja) na unaendeshwa kama kitendo kilichopangwa cha `wu_membership_check`.

Ukaguzi wa kuisha muda una **kipindi cha neema cha ndani cha siku 3** kwa msingi. Uanachama hautawahi kuwekwa kama `expired` mpaka siku 3 baada ya `date_expiration` yake kupita. Hii inampa wateja muda wa kukamilisha malipo yaliyocheleweshwa kabla ya hali yao kubadilika.

:::info
Kipindi cha neema cha kuisha muda (expiration grace period) cha siku 3 ni tofauti na mipangilio ya Kipindi cha Neema cha Kuzima Frontend (Frontend Block Grace Period) iliyoonyeshwa hapa chini. Kipindi cha neema cha kuisha muda kinadhibiti wakati **hali inabadilika** kutoka hai/imesimamishwa hadi kuisha muda. Kipindi cha neema cha kuzima frontend kinadhibiti wakati **tovuti inazozimwa** baada ya hali kuwa imebadilika tayari.
:::

#### Uanachama Zinazojirejesha vs. Zinazozima Kujirejesha

Tofauti hii ni muhimu sana kuelewa jinsi kuisha muda kwa uanachama kunavyofanya kazi:

- **Uanachama zisazojirejesha** (`auto_renew = false`): Kazi ya saa (hourly cron job) inashughulikia mzunguko mzima wa maisha—inaunda malipo ya uwezesha, inabadilisha uanachama kuwa imesimamishwa, na mwishowe inauweka kama imesha muda ikiwa malipo hayajapokelewa.

- **Uanachama zinazojirejesha** (`auto_renew = true`): Ukaguzi wa kuisha muda wa cron **unazipuuza kabisa**. Lugha ya malipo (payment gateway) (Stripe, PayPal, n.k.) inatarajiwa kuwajulisha Ultimate Multisite kupitia webhooks wakati usajili unashindwa au kufutwa. Ikiwa webhook haipokelewi—kwa sababu ya endpoint iliyopangwa vibaya, kukatika kwa gateway, au usajili kufutwa nje ya mfumo—uanachama inaweza kubaki `active` milele hata baada ya tarehe ya kuisha muda kupita.

### Jinsi Majaribio Yanavyomalizika

Wakati kipindi cha majaribio cha uanachama kinamalizika, mfumo:

1. Unaunda malipo ya uwezesha yanayosubiri kwa kiasi kamili cha usajili.
2. Unabadilisha hali ya uanachama kutoka `trialing` hadi `on-hold`.
3. Unatuma barua pepe ya taarifa ya malipo ya uwezesha kwa mteja.

Mchakato huu unaendeshwa kwa ratiba ile ile ya saa kama ukaguzi wa kuisha muda wa kawaida, lakini **ni kwa uanachama zisazojirejesha tu**. Kwa majaribio yanayojirejesha, lugha ya malipo ndiyo inashughulikia mabadiliko kutoka jaribio hadi usajili ulio malipo.

## Kuzima Ufikiaji wa Frontend

Kwa msingi, wakati uanachama kuisha muda au kusimamishwa, **ni dashboard ya wp-admin tu ndiyo inazuiliwa**. Frontend ya umma ya tovuti inabaki iwezekana kwa wageni. Ili kuzizuia ufikiaji wa umma pia, lazima uwezeshe mipangilio ya **Block Frontend Access**.

### Kupanga Mipangilio

Nenda huku **Ultimate Multisite > Settings > Memberships** na uwezesha **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Hii hapa ni mwonekano kamili wa ukurasa wa mipangilio ya uanachama:

![Membership settings full page](/img/config/settings-membership-full.png)

Mipangilio mitatu inayohusiana inadhibiti tabia hii:

| Mipangilio | Maelezo | Kiwango cha Msingi |
|---|---|---|
| **Block Frontend Access** | Swichi kuu. Inapowekwa, inazuia frontend ya umma ya tovuti za mtandao wakati uanachama yao haipo hai. | Off |
| **Frontend Block Grace Period** | Idadi ya siku za kusubiri baada ya uanachama kuwa hai kabla ya kuzima. Weka `0` kuzima mara moja. | 0 |
| **Frontend Block Page** | Ukurasa kwenye tovuti kuu wa kumpeleka wageni anapozimwa. Ikiwa hawekwa, wageni wanaona ujumbe wa jumla wa "Site not available". | None |

### Nini Wageni Wanachoona Wakati Tovuti Inazozimwa

Wakati ufikiaji wa frontend unazozimwa, wageni wa tovuti watafanya mojawapo ya yafuatayo:

1. **Kupelekwa upya (redirected)** kwenye ukurasa uliouchagua katika **Frontend Block Page** (ikiwa kimepangwa), au
2. **Kuona ujumbe wa kiwango cha msingi**: "This site is not available at the moment." pamoja na kiungo cha kurasa ya kuingia kwa msimamizi wa tovuti.

Wasimamizi wa tovuti bado wanaweza kuingia—kurasa ya kuingia haizozimwi kamwe.

### Nini Kinazuiliwa na Lini

Tabia ya kuzima inategemea hali ya uanachama:

| Hali ya Uanachama | Kuzimwa Frontend? | Kipindi cha Neema Kinatumika? |
|---|---|---|
| Active | Hapana | -- |
| Trialing | **Hapana** (angalia kumbuka chini) | -- |
| On Hold | Inachukuliwa kuwa hai -- haizozimwi | -- |
| Expired | **Ndiyo**, ikiwa Block Frontend Access imewashwa | Ndiyo |
| Cancelled | **Ndiyo**, kila wakati (bila kujali mipangilio) | **Hapana** -- inazimwa mara moja |
| Pending | Haizozimwi kupitia ukaguzi wa uanachama | -- |

:::warning Uanachama ya majaribio haizozimwi
Hata kama kipindi cha majaribio kimeisha, uanachama yenye hali ya `trialing` **haitazimwa** kwenye frontend. Jaribio lazima laanze kwanza kupitia hali nyingine (kawaida `on-hold` kupitia cron job, kisha `expired` ikiwa hakulipwi). Ikiwa unaona uanachama ya majaribio ambazo hazijaenda kwenye hali nyingine, angalia sehemu ya kutatua matatizo hapa chini.
:::

:::note Uanachama ilifutwa inapita kipindi cha neema
Uanachama ilifutwa inazozimwa kila wakati mara tu tarehe ya kuisha muda imepita, bila kujali kama Block Frontend Access imewashwa. Kipindi cha Neema cha Kuzima Frontend hakitumiki kwa uanachama ilifutwa.
:::

## Kutatua Matatizo: Tovuti Zinazobaki Kuonekana Baada ya Kuisha Muda

Ikiwa tovuti bado zinaonekana kwa umma baada ya uanachama kuisha muda, fanya ukaguzi huu kwa mpangilio:

### 1. Thibitisha Mipangilio ya Block Frontend Access Imewashwa

Nenda huku **Ultimate Multisite > Settings > Memberships** na thibitisha kwamba swichi ya **Block Frontend Access** imewashwa. Mipangilio hii **haina mipangilio ya msingi**, kumaanisha kwamba wp-admin ndiyo inazuiliwa tu wakati uanachama inakuwa hai.

### 2. Angalia Kipindi cha Neema cha Kuzima Frontend

Kwenye ukurasa huo wa mipangilio, angalia thamani ya **Frontend Block Grace Period**. Ikiwa imewekwa kwa siku 7, kwa mfano, frontend haitazimwa mpaka siku 7 baada ya tarehe ya kuisha muda ya uanachama—hata ikiwa hali ya uanachama tayari ni `expired`.

Weka hili kuwa `0` ikiwa unataka kuzima mara moja baada ya uanachama kuwa hai.

### 3. Thibitisha Hali ya Uanachama Imebadilika Kweli

Nenda huku **Ultimate Multisite > Memberships** na angalia hali ya uanachama inayohusika. Ikiwa bado inaonyesha `active` licha ya tarehe ya kuisha muda kupita, mabadiliko ya hali hakutokea. Sababu za kawaida:

- **Uanachama inazojirejesha**: Angalia sehemu ya `auto_renew` kwenye ukurasa wa kuhariri uanachama. Ikiwa kujirejesha kwa kiotomatiki kimefunguliwa, cron ya kuisha muda inapuuza uanachama huu—inategemea lugha ya malipo kuripoti kushindwa. Angalia dashboard yako ya gateway (Stripe, PayPal) kuthibitisha kwamba hali ya usajili inalingana na kile Ultimate Multisite inaonyesha.

- **Kazi ya cron haijaendeshwa**: Angalia hatua inayofuata.

### 4. Thibitisha Action Scheduler Inafanya Kazi

Ultimate Multisite inatumia Action Scheduler kwa kazi zake za cron. Nenda huku **Tools > Scheduled Actions** kwenye admin ya mtandao na kutafuta:

- **`wu_membership_check`** -- Hii inapaswa kuonekana kama kitendo kinachojirudia kinachoendeshwa kila saa. Ikiwa haipo, ukaguzi wa uanachama haufanyi kazi ya kupangwa.
- **`wu_async_mark_membership_as_expired`** -- Hizi ni kazi za kibinafsi za kuweka uanachama maalum kama imesha muda. Ikiwa unaona matukio yaliyoshindwa hapa, yanaweza kuwa na ujumbe wa makosa unaoelezea kwa nini.

Ikiwa unaona matukio yaliyokaa au yaliyoshindwa, unaweza kuwa na tatizo la Action Scheduler. Sababu za kawaida:

- **`DISABLE_WP_CRON` imewekwa kuwa `true`** katika `wp-config.php` bila mbadala wa cron wa kiwango cha mfumo
- **Msafara mdogo wa tovuti** -- WP-Cron inaendeshwa tu wakati mtu anapozitembelea tovuti

Ili kuhakikisha utekelezaji wa cron unaaminika, weka kazi ya cron ya mfumo:

```bash
# Run every 5 minutes via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Or via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Angalia Matatizo ya Webhook ya Gateway (Uanachama Zinazojirejesha)

Ikiwa uanachama inazojirejesha na usajili wa gateway umefutwa au umeshindwa, lakini Ultimate Multisite bado inaonyesha kuwa ni `active`:

- **Stripe**: Nenda kwenye Stripe Dashboard > Customers na angalia hali ya usajili. Kisha thibitisha kwamba endpoint ya webhook ni hai chini ya Developers > Webhooks. Endpoint inapaswa kuonyesha tovuti yako na kuonyesha uwasilishaji wa mafanikio.
- **PayPal**: Angalia hali ya usajili katika akaunti yako ya biashara ya PayPal na thibitisha uwasilishaji wa IPN/webhook.

Ikiwa gateway inaonyesha usajili kama uliifutwa lakini Ultimate Multisite haionyeshi, uwasilishaji wa webhook ulikuwa umepotea. Unaweza kubadilisha hali ya uanachama kwa mikono huku **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Angalia Kipindi cha Neema cha Kuisha Muda (Kiwanja cha Cron)

Ukaguzi wa cron una kipindi chake cha neema (kiwango cha msingi: siku 3) kabla ya kuweka uanachama kama imesha muda. Hii ni tofauti na kipindi cha neema cha kuzima frontend. Muda jumla kabla ya tovuti kuzimwa unaweza kuwa:

**Kipindi cha neema cha kuisha muda (siku 3)** + **Kipindi cha neema cha kuzima frontend (mipangilio yako)** = Muda wa kuchelewa jumla

Kwa mfano, kwa mipangilio ya msingi na kipindi cha neema cha frontend cha siku 7, inaweza kuchukua hadi siku 10 baada ya `date_expiration` kabla ya tovuti kuzimwa kweli.

### 7. Kuweka Uanachama Kuisha Muda Kwa Mikono

Ikiwa unahitaji kuzima tovuti mara moja bila kusubiri mzunguko wa cron, unaweza kubadilisha hali ya uanachama kwa mikono:

1. Nenda huku **Ultimate Multisite > Memberships**
2. Bonyeza kwenye uanachama inayohusika
3. Badilisha hali kuwa **Expired** au **Cancelled**
4. Bonyeza **Save**

Kuzima frontend kutafanyika kwenye upakuaji wa ukurasa unaofuata (kulingana na Kipindi cha Neema cha Kuzima Frontend kwa uanachama iliyokuisha muda, au mara moja kwa uanachama ilifutwa).

## Muhtasari

Muda mzima kuanzia tarehe ya kuisha muda hadi kuzima tovuti:

```text
date_expiration kupita
       |
       v
  [kipindi cha neema cha cron cha siku 3]     <-- uanachama bado inaonyesha kuwa hai/imesimamishwa
       |
       v
  Cron inauweka uanachama kama "expired"
       |
       v
  [Kipindi cha Neema cha Kuzima Frontend]  <-- kimepangwa katika Settings > Memberships
       |
       v
  Frontend ya tovuti inazozimwa
```

Kwa uanachama ilifutwa, njia ni fupi zaidi:

```text
  Uanachama ilifutwa
       |
       v
  date_expiration kupita (hakuna kipindi cha neema)
       |
       v
  Frontend ya tovuti inazozimwa mara moja
```

## Rejeleo la Mjenzi (Developer Reference)

Hooks na filters zifuatazo zinakuwezesha kubadilisha tabia ya kuisha muda na kuzima:

| Hook/Filter | Maelezo |
|---|---|
| `wu_membership_grace_period_days` | Filter idadi ya siku za kipindi cha neema kabla ya kuweka uanachama kama imesha muda (kiwango cha msingi: 3) |
| `wu_schedule_membership_check_interval` | Filter kipindi kati ya ukaguzi wa uanachama (kiwango cha msingi: saa 1) |
| `wu_membership_renewal_days_before_expiring` | Filter ni siku ngapi kabla ya kuisha muda kuunda malipo ya uwezesha (kiwango cha msingi: 3) |
| `wu_blocked_site_reactivation_url` | Filter kutoa URL maalum ya kuamsha upya wakati tovuti inazozimwa |
| `wu_membership_is_active` | Filter kama uanachama inachukuliwa kuwa hai |
| `wu_membership_expired_check_query_params` | Filter vigezo vya utafutaji vinavyotumika kupata uanachama iliyesha muda |
| `wu_membership_trial_check_query_params` | Filter vigezo vya utafutaji vinavyotumika kupata majaribio yaliyosha muda |
