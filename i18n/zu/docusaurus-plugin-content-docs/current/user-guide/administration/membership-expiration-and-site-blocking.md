---
title: Ukuphelelwa Yisikhathi Kobulungu Nokuvinjwa Kwesayithi
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Ukuphelelwa Isikhathi Kobulungu Nokuvinjwa Kwe-site {#membership-expiration-and-site-blocking}

Lo mhlahlandlela uchaza ukuthi Ultimate Multisite ikusingatha kanjani ukuphelelwa isikhathi kobulungu, ukuphela kwezikhathi zokuzama, nokuvinjwa kwe-site ye-frontend. Uhlanganisa umjikelezo wempilo wobulungu kusukela kokusebenzayo kuya kokuphelelwe isikhathi, izilungiselelo ezilawula ukuthi ama-site ayavinjwa yini, nokuthi yini okufanele uyihlole lapho ama-site esalokhu efinyeleleka ngemva kokuphelelwa isikhathi kobulungu.

## Umjikelezo Wempilo Wesimo Sobulungu {#membership-status-lifecycle}

Bonke ubulungu ku-Ultimate Multisite bunesinye sezimo ezilandelayo:

:::note Ubulungu bamahhala bungobempilo yonke
Ubulungu bamahhala abuphelelwa isikhathi ngokuzenzakalelayo. Ultimate Multisite ibubheka njengokufinyelela kwempilo yonke, ngakho abufakwa ekuhlolweni kokuphelelwa isikhathi ngaphandle kokuthi umlawuli ashintshe isimo sabo noma adlulisele ikhasimende komunye umkhiqizo.
:::

| Isimo | Incazelo |
|---|---|
| **Kusalindile** | Kulindwe inkokhelo yokuqala noma ukuqinisekiswa kwe-imeyili |
| **Kusesikhathini sokuzama** | Isikhathi sokuzama esisebenzayo, akukho nkokhelo eqoqiwe okwamanje |
| **Kuyasebenza** | Kukhokhiwe futhi kusesikhathini |
| **Kumisiwe okwesikhashana** | Inkokhelo yokuvuselela isalindile (i-invoice idaliwe, kulindwe inkokhelo) |
| **Kuphelelwe isikhathi** | Kudlule usuku lokuphelelwa isikhathi nesikhathi somusa ngaphandle kokuvuselelwa |
| **Kukhanseliwe** | Kukhanselwe ngokusobala yikhasimende noma umlawuli |

### Indlela Ubulungu Obushintshela Ngayo Ekuphelelweni Isikhathi {#how-memberships-transition-to-expired}

Ultimate Multisite isebenzisa ukuhlola kwangemuva **njalo ngehora** okubheka ubulungu okufanele bumakwe njengobuphelelwe isikhathi. Lokhu kuhlola kusebenzisa [Action Scheduler](https://actionscheduler.org/) (hhayi i-WP-Cron ngokuqondile) futhi kusebenza njengesenzo esihleliwe se-`wu_membership_check`.

Ukuhlola kokuphelelwa isikhathi kunesikhathi somusa **esakhelwe ngaphakathi sezinsuku ezi-3** ngokuzenzakalelayo. Ubulungu ngeke bumakwe njenge-`expired` kuze kudlule izinsuku ezi-3 ngemva kokudlula kwe-`date_expiration` yabo. Lokhu kunikeza amakhasimende isikhathi sokuqedela inkokhelo ephuzile ngaphambi kokuthi isimo sawo sishintshe.

:::info
Isikhathi somusa sokuphelelwa isikhathi sezinsuku ezi-3 sihlukile kusilungiselelo se-Frontend Block Grace Period esichazwe ngezansi. Isikhathi somusa sokuphelelwa isikhathi silawula ukuthi **isimo sishintsha nini** sisuke kokusebenzayo/okumiswe okwesikhashana siye kokuphelelwe isikhathi. Isikhathi somusa sokuvimba i-frontend silawula ukuthi **i-site ivinjwa nini** ngemva kokuthi isimo sesishintshile.
:::

#### Ubulungu Obuzivuselelayo vs. Ubulungu Obungazivuseleli {#auto-renewing-vs-non-auto-renewing-memberships}

Lo mehluko ubalulekile ekuqondeni ukuziphatha kokuphelelwa isikhathi:

- **Ubulungu obungazivuseleli** (`auto_renew = false`): Umsebenzi we-cron wehora uphatha umjikelezo wempilo ogcwele -- udala izinkokhelo zokuvuselela, ushintsha ubulungu bube sesimweni sokumiswe okwesikhashana, futhi ekugcineni ububeka njengobuphelelwe isikhathi uma inkokhelo ingatholakalanga.

- **Ubulungu obuzivuselelayo** (`auto_renew = true`): Ukuhlola kokuphelelwa isikhathi kwe-cron **kubweqa ngokuphelele**. I-payment gateway (Stripe, PayPal, njll.) kulindeleke ukuthi yazise Ultimate Multisite ngama-webhook lapho subscription yehluleka noma ikhanselwa. Uma i-webhook ingatholakalanga -- ngenxa ye-endpoint elungiselelwe kabi, ukuphazamiseka kwe-gateway, noma subscription ekhanselwe ngaphandle kohlelo -- ubulungu bungase buhlale `active` unomphela ngisho nangemva kokudlula kosuku lokuphelelwa isikhathi.

### Indlela Izikhathi Zokuzama Eziphela Ngayo {#how-trials-end}

Lapho isikhathi sokuzama sobulungu obusesikhathini sokuzama siphela, uhlelo:

1. Ludala inkokhelo yokuvuselela elindile ngenani eligcwele le-subscription
2. Lushintsha isimo sobulungu sisuke ku-`trialing` siye ku-`on-hold`
3. Luthumela ikhasimende i-imeyili yesaziso senkokhelo yokuvuselela

Le nqubo isebenza kuhlelo olufanayo lwehora njengokuhlola okuvamile kokuphelelwa isikhathi, kodwa **kuphela kubulungu obungazivuseleli**. Ezikhathini zokuzama ezizivuselelayo, i-payment gateway iphatha ukushintsha kusukela esikhathini sokuzama kuya ku-subscription ekhokhelwayo.

## Vimba Ukufinyelela kwe-Frontend {#block-frontend-access}

Ngokuzenzakalelayo, lapho ubulungu buphelelwa isikhathi noma bumiswa okwesikhashana, **kukhawulelwa kuphela i-dashboard ye-wp-admin**. I-frontend yomphakathi ye-site ihlala ifinyeleleka ezivakashini. Ukuze futhi uvimbe ukufinyelela komphakathi, kufanele unike amandla isilungiselelo se-**Block Frontend Access**.

### Ukulungiselela Isilungiselelo {#configuring-the-setting}

Yiya ku-**Ultimate Multisite > Settings > Memberships** bese unika amandla i-**Block Frontend Access**.

![Izilungiselelo ze-Block Frontend Access ezibonisa i-toggle inikwe amandla, isikhathi somusa sezinsuku ezi-7, nokukhethwa kwe-Frontend Block Page](/img/config/settings-membership-block-frontend.png)

Nanku umbono ogcwele wekhasi lezilungiselelo zobulungu:

![Ikhasi eligcwele lezilungiselelo zobulungu](/img/config/settings-membership-full.png)

Izilungiselelo ezintathu ezihlobene zilawula lokhu kuziphatha:

| Isilungiselelo | Incazelo | Okuzenzakalelayo |
|---|---|---|
| **Block Frontend Access** | I-toggle enkulu. Lapho inikwe amandla, ivimba i-frontend yomphakathi yama-site enethiwekhi lapho ubulungu bawo bungasasebenzi. | Kuvaliwe |
| **Frontend Block Grace Period** | Inani lezinsuku zokulinda ngemva kokuthi ubulungu bungasasebenzi ngaphambi kokuvimba. Setha ku-`0` ukuze uvimbe ngokushesha. | 0 |
| **Frontend Block Page** | Ikhasi ku-site enkulu okuzodluliselwa kulo izivakashi lapho i-site ivinjiwe. Uma lingasethiwe, izivakashi zibona umlayezo ojwayelekile othi "Site not available". | Akukho |

### Lokho Izivakashi Ezikubonayo Lapho I-site Ivinjiwe {#what-visitors-see-when-a-site-is-blocked}

Lapho ukufinyelela kwe-frontend kuvinjiwe, izivakashi ze-site zizokwenza okukodwa kwalokhu:

1. **Zidluliselwe** ekhasini olikhethile ku-**Frontend Block Page** (uma kulungiselelwe), noma
2. **Zibone umlayezo ozenzakalelayo**: "This site is not available at the moment." onesixhumanisi sekhasi lokungena lomlawuli we-site.

Abalawuli be-site basengangena -- ikhasi lokungena alikaze livinjwe.

### Yini Evinjwayo Futhi Nini {#what-gets-blocked-and-when}

Ukuziphatha kokuvimba kuncike esimweni sobulungu:

| Isimo Sobulungu | I-Frontend Ivinjiwe? | Isikhathi Somusa Siyasetshenziswa? |
|---|---|---|
| Kuyasebenza | Cha | -- |
| Kusesikhathini sokuzama | **Cha** (bheka inothi ngezansi) | -- |
| Kumisiwe okwesikhashana | Kubhekwa njengokusebenzayo -- akuvinjwa | -- |
| Kuphelelwe isikhathi | **Yebo**, uma i-Block Frontend Access ivuliwe | Yebo |
| Kukhanseliwe | **Yebo**, njalo (kungakhathaliseki isilungiselelo) | **Cha** -- kuvinjwa ngokushesha |
| Kusalindile | Akuvinjwa ngokuhlolwa kobulungu | -- |

:::warning Ubulungu obusesikhathini sokuzama abuvinjwa
Ngisho noma isikhathi sokuzama sesiphelile, ubulungu obunesimo se-`trialing` **abuzukuvinjwa** ku-frontend. Isikhathi sokuzama kufanele siqale sishintshele kwesinye isimo (ngokuvamile `on-hold` ngomsebenzi we-cron, bese kuba `expired` uma kungakhokhiwe). Uma ubona ubulungu obusesikhathini sokuzama obungakashintshi, hlola isigaba sokuxazulula izinkinga ngezansi.
:::

:::note Ubulungu obukhanseliwe budlula isikhathi somusa
Ubulungu obukhanseliwe buhlale buvinjwa uma usuku lokuphelelwa isikhathi seludlulile, kungakhathaliseki ukuthi i-Block Frontend Access inikwe amandla yini. I-Frontend Block Grace Period **ayisebenzi** kubulungu obukhanseliwe.
:::

## Ukuxazulula Izinkinga: Ama-site Asalokhu Efinyeleleka Ngemva Kokuphelelwa Isikhathi {#troubleshooting-sites-remaining-accessible-after-expiration}

Uma ama-site esalokhu efinyeleleka emphakathini ngemva kokuphelelwa isikhathi kobulungu, dlula kulezi zivivinyo ngokulandelana:

### 1. Qinisekisa Ukuthi Isilungiselelo se-Block Frontend Access Sinikwe Amandla {#1-verify-the-block-frontend-access-setting-is-enabled}

Yiya ku-**Ultimate Multisite > Settings > Memberships** bese uqinisekisa ukuthi i-toggle ye-**Block Frontend Access** ivuliwe. Lesi silungiselelo **sivaliwe ngokuzenzakalelayo**, okusho ukuthi kuphela i-wp-admin ekhawulelwayo lapho ubulungu bungasasebenzi.

### 2. Hlola I-Frontend Block Grace Period {#2-check-the-frontend-block-grace-period}

Ekhasini elifanayo lezilungiselelo, hlola inani le-**Frontend Block Grace Period**. Uma lokhu kusethwe ezinsukwini ezi-7, isibonelo, i-frontend ngeke ivinjwe kuze kudlule izinsuku ezi-7 ngemva kosuku lokuphelelwa isikhathi kobulungu -- ngisho noma isimo sobulungu sesivele siyi-`expired`.

Setha lokhu ku-`0` uma ufuna ukuvinjwa ngokushesha ngemva kokuthi ubulungu bungasasebenzi.

### 3. Qinisekisa Ukuthi Isimo Sobulungu Sishintshile Ngempela {#3-confirm-the-membership-status-has-actually-changed}

Yiya ku-**Ultimate Multisite > Memberships** bese uhlola isimo sobulungu obuthintekile. Uma sisabonisa `active` nakuba usuku lokuphelelwa isikhathi seludlulile, ukushintsha kwesimo akwenzekanga. Izimbangela ezivamile:

- **Ubulungu buyazivuselela**: Hlola inkambu ye-`auto_renew` ekhasini lokuhlela ubulungu. Uma ukuzivuselela kunikwe amandla, i-cron yokuphelelwa isikhathi iyabeqa lobu bulungu -- incike ku-payment gateway ukubika ukwehluleka. Hlola i-dashboard ye-gateway yakho (Stripe, PayPal) ukuze uqinisekise ukuthi isimo se-subscription sifana nalokho okuboniswa yi-Ultimate Multisite.

- **Umsebenzi we-cron awukasebenzi**: Bheka isinyathelo esilandelayo.

### 4. Qinisekisa Ukuthi I-Action Scheduler Iyasebenza {#4-verify-action-scheduler-is-running}

Ultimate Multisite isebenzisa i-Action Scheduler emisebenzini yayo ye-cron. Yiya ku-**Tools > Scheduled Actions** kumlawuli wenethiwekhi bese ubheka:

- **`wu_membership_check`** -- Lokhu kufanele kuvele njengesenzo esiphindaphindayo esisebenza njalo ngehora. Uma singekho, ukuhlolwa kobulungu akuhleliwe.
- **`wu_async_mark_membership_as_expired`** -- Lena imisebenzi ngayinye yokumaka ubulungu obuthile njengobuphelelwe isikhathi. Uma ubona izenzo ezihlulekile lapha, zingase ziqukathe imilayezo yamaphutha echaza ukuthi kungani.

Uma ubona izenzo ezibambekile noma ezihlulekile, ungase ube nenkinga ye-Action Scheduler. Izimbangela ezivamile:

- **`DISABLE_WP_CRON` isethwe ku-`true`** ku-`wp-config.php` ngaphandle kokufakwa esikhundleni yi-cron yezinga lohlelo
- **Ukuvakashelwa okuphansi kwe-site** -- i-WP-Cron isebenza kuphela lapho umuntu evakashela i-site

Ukuze uqinisekise ukusebenza okuthembekile kwe-cron, setha umsebenzi we-cron wohlelo:

```bash
# Run every 5 minutes via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Or via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Hlola Izinkinga ze-Gateway Webhook (Ubulungu Obuzivuselelayo) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Uma ubulungu buzivuselela futhi i-gateway subscription ikhanseliwe noma yehlulekile, kodwa Ultimate Multisite isabonisa ukuthi buyi-`active`:

- **Stripe**: Yiya ku-Stripe Dashboard > Customers bese uhlola isimo se-subscription. Bese uqinisekisa ukuthi i-webhook endpoint iyasebenza ngaphansi kwe-Developers > Webhooks. I-endpoint kufanele ikhomba ku-site yakho futhi ibonise ukulethwa okuphumelele.
- **PayPal**: Hlola isimo se-subscription ku-akhawunti yakho yebhizinisi ye-PayPal bese uqinisekisa ukulethwa kwe-IPN/webhook.

Uma i-gateway ibonisa ukuthi i-subscription ikhanseliwe kodwa Ultimate Multisite ingakubonisi, isaziso se-webhook cishe silahlekile. Ungashintsha ngesandla isimo sobulungu ku-**Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Hlola Isikhathi Somusa Sokuphelelwa Isikhathi (Izinga le-Cron) {#6-check-the-expiration-grace-period-cron-level}

Ukuhlola kwe-cron kunesikhathi sako somusa (okuzenzakalelayo: izinsuku ezi-3) ngaphambi kokumaka ubulungu njengobuphelelwe isikhathi. Lokhu kwehlukile esikhathini somusa sokuvimba i-frontend. Isikhathi esiphelele ngaphambi kokuthi i-site ivinjwe singaba:

**Isikhathi somusa sokuphelelwa isikhathi (izinsuku ezi-3)** + **Isikhathi somusa sokuvimba i-frontend (isilungiselelo sakho)** = Ukubambezeleka okuphelele

Isibonelo, ngezilungiselelo ezizenzakalelayo nesikhathi somusa se-frontend sezinsuku ezi-7, kungathatha kuze kufike ezinsukwini ezi-10 ngemva kwe-`date_expiration` ngaphambi kokuthi i-site ivinjwe ngempela.

### 7. Phelelisa Isikhathi Sobulungu Ngesandla {#7-manually-expire-a-membership}

Uma udinga ukuvimba i-site ngokushesha ngaphandle kokulinda umjikelezo we-cron, ungashintsha ngesandla isimo sobulungu:

1. Yiya ku-**Ultimate Multisite > Memberships**
2. Chofoza ubulungu obuthintekile
3. Shintsha isimo sibe **Kuphelelwe isikhathi** noma **Kukhanseliwe**
4. Chofoza **Save**

Ukuvinjwa kwe-frontend kuzoqala ukusebenza ekulayishweni kwekhasi okulandelayo (kuncike ku-Frontend Block Grace Period kubulungu obuphelelwe isikhathi, noma ngokushesha kubulungu obukhanseliwe).

## Isifinyezo {#summary}

Umugqa wesikhathi ogcwele kusukela ngosuku lokuphelelwa isikhathi kuya ekuvinjweni kwe-site:

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

Kubulungu obukhanseliwe, indlela imfishane:

```text
  Membership cancelled
       |
       v
  date_expiration passes (no grace period)
       |
       v
  Site frontend is blocked immediately
```

## Ireferensi Yonjiniyela {#developer-reference}

Ama-hook nama-filter alandelayo akuvumela ukuthi wenze ngendlela oyifisayo ukuziphatha kokuphelelwa isikhathi nokuvimba:

| Hook/Filter | Incazelo |
|---|---|
| `wu_membership_grace_period_days` | Hlunga inani lezinsuku zesikhathi somusa ngaphambi kokumaka ubulungu njengobuphelelwe yisikhathi (okuzenzakalelayo: 3) |
| `wu_schedule_membership_check_interval` | Hlunga isikhawu phakathi kokuhlolwa kobulungu (okuzenzakalelayo: ihora eli-1) |
| `wu_membership_renewal_days_before_expiring` | Hlunga ukuthi zingaki izinsuku ngaphambi kokuphelelwa yisikhathi zokudala inkokhelo yokuvuselela (okuzenzakalelayo: 3) |
| `wu_blocked_site_reactivation_url` | Hlunga ukuze unikeze i-URL yokuvuselela yangokwezifiso lapho isayithi livinjiwe |
| `wu_membership_is_active` | Hlunga ukuthi ubulungu bubhekwa njengobusebenzayo yini |
| `wu_membership_expired_check_query_params` | Hlunga amapharamitha ombuzo asetshenziselwa ukuthola ubulungu obuphelelwe yisikhathi |
| `wu_membership_trial_check_query_params` | Hlunga amapharamitha ombuzo asetshenziselwa ukuthola izivivinyo eziphelelwe yisikhathi |
