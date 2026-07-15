---
title: Wax-soo-gaalka Xubnaha iyo Ka-duubista Goobta
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Dhammaan Bixinta Xogta iyo Ka-dhacista Website-ka

Tani hagaha wuxuu sharxayaa sida Ultimate Multisite u maamulo dhimaadda bixintii (membership expiration), dhammaadka trial-yada, iyo ka-dhacista website-ka hore (frontend site blocking). Waa in la fahmo nolosha bixinta oo ka bilaabta hawl-qabashada ilaa dhamaadkiisa, dejimaha xakameeya in ma aha website-yada la ka hor istaagayo, iyo waxa la eego marka website-yadu weli la heli karo ka dib markii bixinta ay dhammaatay.

## Nolosha Xaaladda Bixinta (Membership Status Lifecycle) {#membership-status-lifecycle}

Bixinta kasta oo ku jirta Ultimate Multisite waxay leedahay hal xaalad oo ka mid ah kuwa soo socda:

:::note Bixinta bilaashka (Free memberships) waa nolol-jir ah
Bixinta bilaashka ma dhamaato si toos ah. Ultimate Multisite waxay u aragtaa inay yihiin helitaan nolol-jir ah, sidaas darteed ma la rabo in la hubiyo dhimaadkooda haddii administrator uu isbeddel ka sameeyo xaaladdooda ama uu macaamiisha u wareejiyo badeeco kale.
:::

| Status | Macnaha |
|---|---|
| **Pending** | Waxay sugaysaa lacagta ugu horreysa ama xaqiijinta emailka |
| **Trialing** | Muddada trial-ka ayaa socota, ma la helin wax lacag ah weli |
| **Active** | Waxaa lacag la bixiyay oo hadda shaqaynaysaa |
| **On Hold** | Lacagta cusboonaysiinta ayaa sugaysaa (inkastoo la sameeyay invoice, wuxuu sugayaa lacagta) |
| **Expired** | Waa ka gudbay taariikhda dhimaadka iyo mudada fudud ee aan la cusboonaysiin |
| **Cancelled** | Macaamiilka ama admin-ka si cad ay u xiray

### Sida Xubnaha U Beddelo "Expired" (Ka Gudbaya) {#how-memberships-transition-to-expired}

Ultimate Multisite wuxuu mar kasta oo saacado ah ka sameeyaa baaritaan dhab ah (background check) kaas oo raadinaya xubnaha ee ay u arki karaan inay yihiin kuwa la qabto in la calaamadeeyay "Expired". Baaritaankan wuxuu isticmaalaa [Action Scheduler](https://actionscheduler.org/) (islaa ah WP-Cron si toos ah) oo shaqaynaya sidii action-ka loo qorsheeyay `wu_membership_check`.

Fiiro-gaar ah, hubinta muddo kasta waxay leedahay **muddo fudud oo ah 3 maalmood** oo kaliya. Xubsi aysan la calaamadeyn `expired` (waa dhacday) ilaa 3 maalmood ka dib markii taariikhda `date_expiration` ay gudubto. Tani waxay siisaa macaamiisha fursad inay dhammaystiraan lacagta ka soo bixitaanka dhowr ah inta aysan isbeddelka mustaqbalka la samayn.

:::info
Muddo fudud ee 3 maalmood oo laga saaray mudada dhacda (expiration grace period) waxay kala duwan tahay qorshaha Muddo Fudud ee Block-ga Frontend (Frontend Block Grace Period) oo la sharaxay hoose. Muddo fududka mudada ayaa xakameeya markii **mustaqbalka (status) uu isbeddelayo** lagaa "active/on-hold" (hawl badan/la haysto) ilaa "expired". Qorshaha mudada Frontend Block-ga wuxuu xakameeyaa markii **website-ka la xannayn karo** (blocked) ka dib markii mustaqbalka hore uu isbeddelay.
:::

#### Xubnaha Isdhaafsan oo Isdhaafsiinaya vs. Aan Isdhaafsiinayn {#auto-renewing-vs-non-auto-renewing-memberships}

Farqanihiinaas waa mid muhiim ah si loo fahmo sida mudada dhacda (expiration) u shaqeyso:

- **Xaqiijinta aabuurista aan isdhaafayn** (`auto_renew = false`): Jobka saacadda ah (hourly cron job) wuxuu maamulaa dhammaan nolosha xogta -- wuxuu abuuraa lacagta dib u bilaabidda, wuxuu qaabaysaa aabuurista inay noqoto "on-hold" (la haysta), ugu dambeyn waxay si joogto ah u calaamadeynaysaa inay dhammaatay haddii aan la helin lacagta.

- **Xaqiijinta dib u bilaabidda** (`auto_renew = true`): Baaritaanka dhamaadka wakhtiga dib u bilaabidda (cron expiration check) **wuxuu si buuxda uga iska dhaafaa**. Waxaa la filayaa in habka lacagta (Stripe, PayPal, iwm.) uu ogeysii Ultimate Multisite iyada oo loo marayo webhooks marka qiimaha guudka ama dib u bilaabidda lagaa burburiyo. Haddii webhook-gaas aan la helin -- sababta ay tahay meel si xun loo habeeyay (misconfigured endpoint), walaac ka dhasha habka lacagta, ama dib u bilaabidda oo laga burburiyay system-ka -- aabuurista waxay sii awoodi kartaa inay noqoto `active` (hawl badan) ilaa wakhtiga dhamaadka uu gudbo.

### Sida loo dhammaado Trial-yada {#how-trials-end}

Marka muddo trial-ka aabuurista la dhammaado, nidaamku:

1. Waxay abuureysaa lacagta cusub ee dib u soo celinta (pending renewal payment) oo leh dhammaan lacagta qiimaha guud ee subscription-ka.
2. Waxay qaaddada xaaladda aasiashada (membership status) ka beddeshaa `trialing` (dhismaha/tijaabada) ilaa `on-hold` (la hayso).
3. Waxay u dirtaa email ogeysiis lacagta dib u soo celinta ee macmiilka.

Habkani wuxuu socdaa jadwalka saaciga isku midka ah sida hubinta dhamaadka caadiga ah, laakiin **haddii ay yihiin aasiasho aan dib u bilaabanayn (non-auto-renewing memberships)**. Haddii ay yihiin tijaabooyin oo dib u bilaabaya (auto-renewing trials), habka lacagta ayaa maamulaya isbeddelka ka guurka tijaabada subscription-ka lacagta leh.

## Furaanka Faa'iidada Frontend-ka (Block Frontend Access) {#block-frontend-access}

Si caadi ah, marka aasiashadu ay dhamaato ama ay ku lahayd xaalad joogto ah (on hold), **oo kaliya dashboard-ka wp-admin ayaa la xiraya**. Frontend-ka dadweynaha ee website-ka wuu sii socdaa in la heli karo dadka booqanaya. Si aad sidoo kale ka hor istaagto helitaanka dadweynaha, waa inaad iirigaysaa dejinta **Block Frontend Access**.

### Habka Dejinta Dejinta (Configuring the Setting) {#configuring-the-setting}

Ujeeddooyinka **Ultimate Multisite > Settings > Memberships** u socda oo ku faafin **Block Frontend Access**.

![Settings Block Frontend Access toggle enabled showing a grace period of 7 days](/img/config/settings-membership-block-frontend.png)

Halkan waa muuqaal dhammaystiran oo aad arki karto bogga settings-ka membership:

![Membership settings full page](/img/config/settings-membership-full.png)

Waxaa saddexeen settings la xiriira waxay maamulaan dhaqankaas:

| Dejinta | Sharaxaad | Default |
|---|---|---|
| **Block Frontend Access** | Toggle-ka ugu muhiimsan. Marka la iifiyo (enabled), wuxuu xirayaa qaybta hore ee website-ka (frontend) marka abadka ama kooxda (network sites) aysan weli hayn boqolkiisa (membership). | Off |
| **Frontend Block Grace Period** | Tirada maalmodyada la sugayo ka dib markii xubsiinta (membership) ay is-dhaafay inta ay diidna inay si buuxda u xirayaan. Waxaa la saaraya `0` haddii la rabay in si degdeg ah loo xiro. | 0 |
| **Frontend Block Page** | Bog ku yaalla website-ka ugu weyn oo lagu soo rabo dadka marka uu website-ku la isxirro (blocked). Haddii aan la saarin, dadka waxay arkaan fariin guud oo ah "Website-ka ma heli karo". | None |

### Waxa Dadka Arka Marka Website-ku La Isxiro {#what-visitors-see-when-a-site-is-blocked}

Marka la xiro helitaanka qaybta hore ee website-ka (frontend access), dadka booqanaya website-ka waxay ama:

1. **Dib u dir** bogga aad dooratay ee **Frontend Block Page** (haddii la dejiyay), ama
2. **Arag fariin caadi ah**: "Website-kan ma diyaar yahay hadda." oo leh xiriirka bogga galista admin-ka website-ka.

Admin-ka website-ku weli wuxuu galayaa -- bogga galista ma lahayn wax ka hor istaagaya.

### Waa Maxay Waxa Lagu Horojinayo iyo Goorma? {#what-gets-blocked-and-when}

Waxyaabaha lagu horjoogsado waxay ku xiran tahay mustaqbalka (membership status):

| Mustaqbalka (Membership Status) | Frontend-ka La Horojiyay? | Muddada Ugu Dambaysay La Tagay? |
|---|---|---|
| Active (Wax Badan Ah) | Maya | -- |
| Trialing (Tijaabada) | **Maya** (arkee fiisaha hoose) | -- |
| On Hold (La Haysto) | Waxaa loo arkaa mid firfircoon -- ma la horjoojinayo | -- |
| Expired (Waqti ka Bixiyay) | **Haa**, haddii Block Frontend Access ay furan tahay | Haa |
| Cancelled (La Dariyihi) | **Haa**, mar kasta (inaad dejis lahayn) | **Maya** -- si degdeg ah loo horjoojiyo |
| Pending (Wixii La Soo Bandhigayo) | Ma la horjoojinayo hubinta mustaqbalka | -- |

:::warning Xogista aabbiyaasha (memberships) ee trial-ka ah ma lahayn xaddid
Xitaa haddii muddo trial-ka uu dhammaaday, xogista aabbiyaasha oo leh status `trialing` ma laha wax ka hor istaagaya (blocked) dhinaca muuqaalka hore (frontend). Muddo trial-ka waa inuu marka hore u wareego status kale (inta badan `on-hold` iyada oo loo marayo cron job, ka dibna `expired` haddii aan la bixin lacag). Haddii aad aragto xogista aabbiyaasha ah oo aan isbeddelayn, sii hubi qaybta hagaajinta (troubleshooting) hoose.
:::

:::note Xogista aabbiyaasha la dib u caymisay waxay ka gudbaan mudada naxariista (grace period)
Xogista aabbiyaasha la dib u caymisay waxay mar kasta waa la xaddiddo marka taariikhda dhamaarka ay ka gudubaan, iyadoo aan loo eegin in Block Frontend Access uu furan yahay mise ah. Mudada naxariista ee Frontend Block ma shaqeyso xogista aabbiyaasha la dib u caymisay.
:::

## Hagaajinta: Goobaha oo weli la heli karo ka dib dhamaarka mudada {#troubleshooting-sites-remaining-accessible-after-expiration}

Haddii goobaha (sites) ay weli dadka la heli karo ka dib markii xubsi uu dhamaado, si tartiib ah u fuli hagaajintaas:

### 1. Hubi in Qorshaha Helitaanka Frontend Access-ka uu Midhay Inuu Shaqeeyo {#1-verify-the-block-frontend-access-setting-is-enabled}

Tag **Ultimate Multisite > Settings > Memberships** oo hubi in badhanka (toggle) ee **Block Frontend Access** uu mid yahay "on". Tani waxay ku taal **"off by default"**, taasoo macnaheedu yahay in kaliya wp-admin la xidho marka xubsi uu siinayo mustaqbalka u dhammaanayo.

### 2. Hubi Muddada Iska caawinta (Grace Period) ee Frontend Block-ga {#2-check-the-frontend-block-grace-period}

Isi tartiibkaas, hubi qiimaha **Frontend Block Grace Period** ee bogga settings-kaas. Haddii tani ay lahayd 7 maalmood, tusaale ahaan, bogga frontend uma xirna inuu ka hor istaago ilaa 7 maalmood ka dib taariikhda dhammaadka xubshii -- xitaa haddii mustaqbalka xubshii horeba uu yahay `expired`.

Haddii aad rabto in si degdeg ah loo xiro bogga marka xubshii iska caawiyo, u qabso qiimahaas `0`.

### 3. Hubinta Xaaladda Xubnaha Si Dhab ah U Beddesho {#3-confirm-the-membership-status-has-actually-changed}

Tag **Ultimate Multisite > Memberships** oo hubi xaaladda xubnaha la saameeyay. Haddii weli uu muujiyo `active` (hawl-gal ah) inkasta oo taariikhda dhacdo ay dhaaftay, transition-ka xaaladdu ma dhicin. Sababaha caawinaya:

- **Xubnaha ayaa isdhaafsan (auto-renewing)**: Hubi qaybta `auto_renew` ee bogga wax ka beddelka xubinta. Haddii auto-renew uu furan yahay, cron-ka dhacdo (cron job) wuxuu u dhaafaa xubnahan -- wuxuu ku tiirsan yahay habka lacagta la qaado (payment gateway) inuu soo sheego guuldarrayga. Hubi dashboard-ka habkaaga lacagta la qaado (Stripe, PayPal) si aad u ogaato in xaaladda subscription-ka ay la mid yihiin waxa Ultimate Multisite uu muujinayo.

- **Cron job-ku ma socdo**: Arka tallaabada soo socota.

### 4. Hubinta Socodka Action Scheduler {#4-verify-action-scheduler-is-running}

Ultimate Multisite waxay isticmaashaa Action Scheduler si ay u maamulaan jobs-ka cron-ka (cron jobs). Ku socda **Tools > Scheduled Actions** ee network admin, isku hubi waxyaabahan:

- **`wu_membership_check`** -- Tani waa inay muuqataa sidii hawl la soo noqonaya oo mar kasta saacado. Haddii ay maqan tahay, micneheedu waa in shaxaad (membership) la hubiyo ma la soconayo.
- **`wu_async_mark_membership_as_expired`** -- Kuwaas waa hawlo gaar ah oo lagu calaamadeynayo shaxaad gaarka ah inay dhammaatay. Haddii aad aragto hawlo ku guuldareysay (failed actions) halkan, waxay ka kooban yihiin fariimo qalad ah oo sharxaya sababta ay ku guuldareysteen.

Haddii aad aragto hawlo diyaar u ah inay istaagaan ama ku guuldareysteen, waxaa laga yaabaa inaad lahayd dhibaato Action Scheduler. Sababaha caawin kara:

- **`DISABLE_WP_CRON` waa la tagay `true`** ee faylka `wp-config.php` hadda ma jirto badbaado (replacement) ah oo isticmaalaya cron-ka heerka nidaamka.
- **Traffic-ga yar ee website-ka** -- WP-Cron waxay shaqaysaa kaliya marka qof uu booqdo website-ka.

Si aad u hubiso in cron-kaaga si ammaan ah u shaqeeyo, samee habkan:

```bash
# Marka la socdo 5 daqiiqo oo loo isticmaalo wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Ama iyadoo la isticmaalayo WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Hubi dhibaatooyinka Gateway Webhook (Auto-Renewing Memberships) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Haddii booska (membership) uu is-dhaafayo (auto-renewing) laakiin ciyaarta gateway-ga (gateway subscription) la xiray ama ay ku guuldareysatay, laakiin Ultimate Multisite weli si `active` u muujinayo:

- **Stripe**: Tagasho Dashboard-ka Stripe-ga > Customers-ka oo hubi xaaladda subscription-ka. Kadibna hubi in webhook endpoint-ku uu socdo iyadoo la eegayo Developers > Webhooks. Endpoint-ku waa inuu igula socdaa website-kaaga oo muujinaya ina si guuleed loo soo dirtay waxyaabaha.
- **PayPal**: Hubi xaaladda subscription-kaaga kaalinta PayPal business account-kaaga, kadibna hubi in IPN/webhook-ga la gaarsiiyay.

Haddii gateway-guu muujiyo in subscription-ku uu dib loo go'aamiyay (cancelled) laakiin Ultimate Multisite aysan muujin, waxaa laga yaabaa in ogeysiiska webhook-ka la lumin yahay. Waxaad si gacanta u beddeli kartaa xaaladda membership-ka adiga oo tagaya **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Hubi Muddada La'aanta Dhammaan (Cron Level) {#6-check-the-expiration-grace-period-cron-level}

Fiiro-gaarrada cron-ka wuxuu leeyahay muddo gaar ah (default: 3 maalmood) ka hor inta aan la calaamadeyn xubsi ahaan inay dhammaatay. Tani waa mid kala duwan oo ka hor imtixaanka mudadda qabowga qaybta hore (frontend block grace period). Muddada guud ee ka hor inta website-ka laga xirmo waxay noqon kartaa:

**Mudadda qabowga dhamaadka (3 maalmood)** + **Mudadda qabowga qaybta hore (setting-kaaga)** = Muddo guud oo ka dib markii la samaynayo `date_expiration`

Tusaale ahaan, haddii aad isticmaalayso dejimaha caadiga ah iyo muddo 7 maalmood oo qabowga qaybta hore, waxay qaadan kartaa ilaa 10 maalmood ka dib markii la samaynayo `date_expiration` in website-ka si dhab ah looga xiro.

### 7. Si gacanta loo dhigo Xubsi Dhamaad ah (Manually Expire a Membership) {#7-manually-expire-a-membership}

Haddii aad u baahan tahay inaad si degdeg ah u xirto website-ka adiga oo aan la sugayn wareegga cron-ka, waxaad si gacanta uga beddeli kartaa mustaqbalka xubshada:

1. Tag **Ultimate Multisite > Memberships**
2. Riix xubshada la saameynayo (affected membership)
3. Beddel mustaqbalka (status) oo noqo **Expired** ama **Cancelled**
4. Riix **Save**

Blokadka frontend-ka wuxuu bilaabayaa markii bogga la soo geliyo (wixii ay ku xiran tahay muddo fudud ee Frontend Block-ga haddii xaqa uu dhacay, ama isla markiiba haddii xaqa la diray).

## Soo koobid {#summary}

Mudada oo dhan laga bilaabo taariikhda dhammaadka ilaa bogga la xirmo:

```text
date_expiration wuxuu gudbayaa
       |
       v
  [mudada 3-maanood ee cron grace period] <-- xaqa weli wuxuu muuqdaa sidii mid firfircoon/la haysta
       |
       v
  Cron wuxuu qeexaa xaqa "dhacay" (expired)
       |
       v
  [mudada fudud ee Frontend Block-ga] <-- la dejiyay Settings > Memberships
       |
       v
  Frontend-ka bogga waxaa la xiray
```

Haddii xaqa la diray, wicitaanka waa kooban:

```text
  Xaqa la diray (Membership cancelled)
       |
       v
  date_expiration gudbayaa (ma jirto muddo fudud)
       |
       v
  Frontend-ka bogga waxaa si degdeg ah loo xiray
```

## Macluumaadka Muurka (Developer Reference) {#developer-reference}

Hooks iyo filters ee soo socda waxay kuu oggolaanayaan inaad qaabka dhacdo (expiration) iyo sida loo xannibayo (blocking) u beddesho:

| Hook/Filter | Sharaxaad |
|---|---|
| `wu_membership_grace_period_days` | In kordhinta ama yareynta maalmaha u horra ah ee xogta ahaan loo arko in xaqa (membership) uu dhamaaday (default: 3). |
| `wu_schedule_membership_check_interval` | In la beddelo inta u dhexeeya mar walba oo la hubiyo xaqa (membership check interval) (default: saac 1). |
| `wu_membership_renewal_days_before_expiring` | In la beddelo inta badan maalmaha ka hor dhamaarka si loo abuuro lacagta dib-u-dhiska (renewal payment) (default: 3). |
| `wu_blocked_site_reactivation_url` | Si loo bixiyo URL cusub oo dib u shaqeyn kara marka website-ka la xiray (blocked site), adigoo isticmaalaya mid gaar ah. |
| `wu_membership_is_active` | In la beddelo haddii xaqa (membership) uu yahay mid socda (active) mise ma ahan. |
| `wu_membership_expired_check_query_params` | Si loo beddelo query parameters-ka loo isticmaalo marka la raadinayo xaqa dhamaaday (expired memberships). |

| `wu_membership_trial_check_query_params` | Waxay si gaar ah u filcihihiisa (filter) query parameters-ka loo isticmaalo in lagu helo trial-yada oo dhacay. |
