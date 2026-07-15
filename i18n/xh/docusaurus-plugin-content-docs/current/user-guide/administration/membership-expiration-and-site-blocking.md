---
title: Ukuphelelwa kobulungu kunye nokuvalwa kwesayithi
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Ukuphelelwa koBulungu nokuValwa kweSayithi

Esi sikhokelo sichaza indlela Ultimate Multisite ephatha ngayo ukuphelelwa kobulungu, ukuphela kwezilingo, kunye nokuvalwa kwesayithi kwicala langaphambili. Sigubungela umjikelo wobomi bobulungu ukusuka ekubeni busebenzayo ukuya ekubeni buphelelwe, izicwangciso ezilawula ukuba iisayithi zivaliwe na, kunye noko makujongwe xa iisayithi zisafikeleleka emva kokuba ubulungu buphelelwe.

## Umjikelo woBomi beMeko yoBulungu {#membership-status-lifecycle}

Bonke ubulungu kwi-Ultimate Multisite bunenye yezi meko zilandelayo:

:::note Ubulungu basimahla bobomi bonke
Ubulungu basimahla abuphelelwa ngokuzenzekelayo. Ultimate Multisite ibuphatha njengofikelelo lobomi bonke, ngoko abubandakanywa kuvavanyo lokuphelelwa ngaphandle kokuba umlawuli utshintshe imeko yabo okanye ashukumisele umthengi kwenye imveliso.
:::

| Imeko | Intsingiselo |
|---|---|
| **Ilindile** | Ilinde intlawulo yokuqala okanye ukuqinisekiswa kwe-imeyile |
| **Kwisilingo** | Ixesha lesilingo elisebenzayo, akukho ntlawulo iqokelelweyo okwangoku |
| **Iyasebenza** | Ihlawulwe kwaye isekhoyo |
| **Imisiwe** | Intlawulo yokuhlaziya ilindile (i-invoyisi yenziwe, ilinde intlawulo) |
| **Iphelelwe** | Idlulile kumhla wokuphelelwa kunye nexesha loxolelo ngaphandle kokuhlaziywa |
| **Irhoxisiwe** | Irhoxiswe ngokucacileyo ngumthengi okanye ngumlawuli |

### Indlela Ubulungu Obutshintshela Ngayo Ekuphelelweni {#how-memberships-transition-to-expired}

Ultimate Multisite iqhuba uvavanyo lwasemva **rhoqo ngeyure** olujonga ubulungu obufanele ukuphawulwa njengobuphelelwe. Olu vavanyo lusebenzisa [Action Scheduler](https://actionscheduler.org/) (hayi i-WP-Cron ngqo) kwaye luqhutywa njengesenzo esicwangcisiweyo `wu_membership_check`.

Uvavanyo lokuphelelwa lunexesha loxolelo **elakhelwe ngaphakathi leentsuku ezi-3** ngokungagqibekanga. Ubulungu abuyi kuphawulwa njenge-`expired` de kudlule iintsuku ezi-3 emva kokuba `date_expiration` yabo idlulile. Oku kunika abathengi ixesha lokugqiba intlawulo efike kade phambi kokuba imeko yabo itshintshe.

:::info
Ixesha loxolelo lokuphelelwa leentsuku ezi-3 lahlukile kwisicwangciso seXesha loXolelo lokuVala iCala Langaphambili esichazwe ngezantsi. Ixesha loxolelo lokuphelelwa lilawula ukuba **imeko itshintsha nini** ukusuka ekusebenzeni/ekumisweni ukuya ekuphelelweni. Ixesha loxolelo lokuvala icala langaphambili lilawula ukuba **isayithi ivalwa nini** emva kokuba imeko sele itshintshile.
:::

#### Ubulungu obuziHlaziyayo ngokuZenzekelayo vs. obungaZiHlaziyiyo ngokuZenzekelayo {#auto-renewing-vs-non-auto-renewing-memberships}

Lo mahluko ubalulekile ekuqondeni indlela yokuphelelwa:

- **Ubulungu obungazihlaziyiyo ngokuzenzekelayo** (`auto_renew = false`): Umsebenzi we-cron weyure nganye uphatha umjikelo wobomi opheleleyo -- wenza iintlawulo zokuhlaziya, utshintshela ubulungu ekumisweni, kwaye ekugqibeleni ubuphawule njengobuphelelwe ukuba intlawulo ayifunyenwanga.

- **Ubulungu obuzihlaziyayo ngokuzenzekelayo** (`auto_renew = true`): Uvavanyo lokuphelelwa lwe-cron **luyabutsiba ngokupheleleyo obu bulungu**. Isango lentlawulo (Stripe, PayPal, njl.) lilindeleke ukuba lazise Ultimate Multisite ngee-webhook xa subscription isilela okanye irhoxisiwe. Ukuba i-webhook ayifunyenwanga -- ngenxa yendawo yesiphelo emiswe gwenxa, ukuphazamiseka kwesango, okanye subscription erhoxiswe ngaphandle kwenkqubo -- ubulungu bunokuhlala `active` ngonaphakade nangemva kokuba umhla wokuphelelwa udlulile.

### Indlela Izilingo Eziphela Ngayo {#how-trials-end}

Xa ixesha lesilingo lobulungu obukwisilingo liphela, inkqubo:

1. Yenza intlawulo yokuhlaziya elindileyo enesixa esipheleleyo se-subscription
2. Itshintsha imeko yobulungu ukusuka ku-`trialing` ukuya ku-`on-hold`
3. Ithumela i-imeyile yesaziso sentlawulo yokuhlaziya kumthengi

Le nkqubo iqhutywa kwishedyuli efanayo yeyure nganye njengovavanyo oluqhelekileyo lokuphelelwa, kodwa **kuphela kubulungu obungazihlaziyiyo ngokuzenzekelayo**. Kwizilingo ezizihlaziyayo ngokuzenzekelayo, isango lentlawulo liphatha utshintsho ukusuka kwisilingo ukuya kwi-subscription ehlawulwayo.

## Vala uFikelelo lweCala Langaphambili {#block-frontend-access}

Ngokungagqibekanga, xa ubulungu buphelelwa okanye bumiswa, **kuphela yi-wp-admin Dashboard ethintelwa**. Icala langaphambili likawonke-wonke lesayithi lihlala lifikeleleka kubatyeleli. Ukuze uvale nofikelelo lukawonke-wonke, kufuneka uvule isicwangciso se-**Vala uFikelelo lweCala Langaphambili**.

### Ukumisela Isicwangciso {#configuring-the-setting}

Yiya ku-**Ultimate Multisite > Settings > Memberships** uze uvule **Vala uFikelelo lweCala Langaphambili**.

![Izicwangciso zokuVala uFikelelo lweCala Langaphambili ezibonisa itoggle ivuliwe, ixesha loxolelo leentsuku ezi-7, kunye nokhetho lwePhepha lokuVala iCala Langaphambili](/img/config/settings-membership-block-frontend.png)

Nanku umbono opheleleyo wephepha lezicwangciso zobulungu:

![Iphepha elipheleleyo lezicwangciso zobulungu](/img/config/settings-membership-full.png)

Izicwangciso ezintathu ezinxulumene noko zilawula le ndlela yokuziphatha:

| Isicwangciso | Inkcazelo | Okungagqibekanga |
|---|---|---|
| **Vala uFikelelo lweCala Langaphambili** | Itoggle ephambili. Xa ivuliwe, ivala icala langaphambili likawonke-wonke leendawo zenethiwekhi xa ubulungu bazo bungasasebenzi. | Icinyiwe |
| **Ixesha loXolelo lokuVala iCala Langaphambili** | Inani leentsuku zokulinda emva kokuba ubulungu bungasasebenzi phambi kokuvala. Seta ku-`0` ukuze uvale ngoko nangoko. | 0 |
| **Iphepha lokuVala iCala Langaphambili** | Iphepha kwisithethi esiphambili lokuthumela abatyeleli kulo xa isayithi ivaliwe. Ukuba alisetwanga, abatyeleli babona umyalezo oqhelekileyo othi "Isayithi ayifumaneki". | Akukho |

### Oko Abatyeleli Bakubonayo Xa iSayithi Ivaliwe {#what-visitors-see-when-a-site-is-blocked}

Xa ufikelelo lwecala langaphambili luvaliwe, abatyeleli besayithi baya kuthi mhlawumbi:

1. **Bathunyelwe kwakhona** kwiphepha olikhethileyo ku-**Iphepha lokuVala iCala Langaphambili** (ukuba limiselwe), okanye
2. **Babone umyalezo ongagqibekanga**: "Le sayithi ayifumaneki okwangoku." onekhonkco kwiphepha lokungena lomlawuli wesayithi.

Abalawuli besayithi basenako ukungena -- iphepha lokungena alize livaliwe.

### Oko Kuvalwayo Nexesha Lokuvalwa {#what-gets-blocked-and-when}

Indlela yokuvala ixhomekeke kwimeko yobulungu:

| Imeko yoBulungu | ICala Langaphambili Livaliwe? | Ixesha loXolelo Liyasetyenziswa? |
|---|---|---|
| Iyasebenza | Hayi | -- |
| Kwisilingo | **Hayi** (jonga inqaku elingezantsi) | -- |
| Imisiwe | Ithathwa njengesebenzayo -- ayivalwanga | -- |
| Iphelelwe | **Ewe**, ukuba Vala uFikelelo lweCala Langaphambili ivuliwe | Ewe |
| Irhoxisiwe | **Ewe**, rhoqo (kungakhathaliseki isicwangciso) | **Hayi** -- ivalwa ngoko nangoko |
| Ilindile | Ayivalwa ngovavanyo lobulungu | -- |

:::warning Ubulungu obukwisilingo abuvalwa
Nokuba ixesha lesilingo liphelile, ubulungu obunemo ethi `trialing` **abuyi** kuvalwa kwicala langaphambili. Isilingo kufuneka kuqala sitshintshele kwenye imeko (ngokuqhelekileyo `on-hold` ngomsebenzi we-cron, emva koko `expired` ukuba asihlawulwanga). Ukuba ubona ubulungu obukwisilingo obungatshintshanga, jonga icandelo lokulungisa iingxaki elingezantsi.
:::

:::note Ubulungu oburhoxisiweyo budlula ixesha lobabalo
Ubulungu oburhoxisiweyo buhlala buvaliwe xa umhla wokuphelelwa lixesha sele udlulile, nokuba ukuVala ukufikelela kwi-Frontend kuvuliwe okanye akunjalo. Ixesha lobabalo lokuVala i-Frontend **alisebenzi** kubulungu oburhoxisiweyo.
:::

## Ukusombulula iingxaki: Iisayithi ezihlala zifikeleleka emva kokuphelelwa lixesha {#troubleshooting-sites-remaining-accessible-after-expiration}

Ukuba iisayithi zihlala zifikeleleka kuluntu emva kokuba ubulungu buphelelwe lixesha, sebenzisa ezi ngqwalaselo ngokulandelelana:

### 1. Qinisekisa ukuba isetingi yokuVala ukufikelela kwi-Frontend ivuliwe {#1-verify-the-block-frontend-access-setting-is-enabled}

Yiya ku-**Ultimate Multisite > Iisetingi > Ubulungu** uze uqinisekise ukuba iswitshi ethi **Vala ukufikelela kwi-Frontend** ivuliwe. Le setingi **icinyiwe ngokungagqibekanga**, nto leyo ethetha ukuba yi-wp-admin kuphela ethintelwayo xa ubulungu bungasebenzi.

### 2. Jonga iXesha lobabalo lokuVala i-Frontend {#2-check-the-frontend-block-grace-period}

Kwiphepha elifanayo leesetingi, jonga ixabiso le-**Xesha lobabalo lokuVala i-Frontend**. Ukuba limiselwe kwiintsuku eziyi-7, umzekelo, i-frontend ayiyi kuvalwa de kudlule iintsuku eziyi-7 emva komhla wokuphelelwa lixesha kobulungu -- nokuba imeko yobulungu sele iyi-`expired`.

Misela oku ku-`0` ukuba ufuna ukuvalwa kwangoko emva kokuba ubulungu bungasebenzi.

### 3. Qinisekisa ukuba imeko yobulungu itshintshile ngokwenene {#3-confirm-the-membership-status-has-actually-changed}

Yiya ku-**Ultimate Multisite > Ubulungu** uze ujonge imeko yobulungu obuchaphazelekayo. Ukuba isabonisa `active` nangona umhla wokuphelelwa lixesha sele udlulile, utshintsho lwemeko alukenzeki. Izizathu eziqhelekileyo:

- **Ubulungu buzihlaziya ngokuzenzekelayo**: Jonga intsimi ye-`auto_renew` kwiphepha lokuhlela ubulungu. Ukuba ukuzihlaziya ngokuzenzekelayo kuvuliwe, i-cron yokuphelelwa lixesha iyabutsiba obu bulungu -- ixhomekeke kwisango lentlawulo ukuba linike ingxelo yokusilela. Jonga i-dashboard yesango lakho (Stripe, PayPal) ukuqinisekisa ukuba imeko yorhumo iyahambelana noko kuboniswa yi-Ultimate Multisite.

- **Umsebenzi we-cron awukasebenzi**: Jonga inyathelo elilandelayo.

### 4. Qinisekisa ukuba i-Action Scheduler iyasebenza {#4-verify-action-scheduler-is-running}

Ultimate Multisite isebenzisa i-Action Scheduler kwimisebenzi yayo ye-cron. Yiya ku-**Izixhobo > Izenzo ezicwangcisiweyo** kulawulo lwenethiwekhi uze ukhangele:

- **`wu_membership_check`** -- Oku kufanele kuvele njengesenzo esiphindaphindwayo esisebenza qho ngeyure. Ukuba asikho, iingqwalaselo zobulungu azicwangciswanga.
- **`wu_async_mark_membership_as_expired`** -- Le yimisebenzi eyodwa yokumakisha ubulungu obuthile njengobuphelelwe lixesha. Ukuba ubona izenzo ezisileleyo apha, zisenokuba nemiyalezo yempazamo echaza isizathu.

Ukuba ubona izenzo ezixhonyiweyo okanye ezisileleyo, usenokuba nengxaki ye-Action Scheduler. Izizathu eziqhelekileyo:

- **`DISABLE_WP_CRON` imiselwe ku-`true`** kwi-`wp-config.php` ngaphandle kokufakwa endaweni kwayo yi-cron ekwinqanaba lenkqubo
- **Itrafikhi ephantsi yesayithi** -- i-WP-Cron isebenza kuphela xa umntu etyelela isayithi

Ukuqinisekisa ukusebenza okuthembekileyo kwe-cron, misela umsebenzi we-cron wenkqubo:

```bash
# Run every 5 minutes via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Or via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Jonga iingxaki ze-webhook yesango (ubulungu obuzihlaziyayo) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Ukuba ubulungu buzihlaziya ngokuzenzekelayo kwaye urhumo lwesango lurhoxisiwe okanye lusilele, kodwa Ultimate Multisite isalubonisa njenge-`active`:

- **Stripe**: Yiya kwi-Stripe Dashboard > Abathengi uze ujonge imeko yorhumo. Emva koko qinisekisa ukuba isiphelo se-webhook siyasebenza phantsi kuka-Abaphuhlisi > Webhooks. Isiphelo kufuneka sikhombe kwisayithi yakho kwaye sibonise ukuhanjiswa okuphumeleleyo.
- **PayPal**: Jonga imeko yorhumo kwi-akhawunti yakho yeshishini ye-PayPal uze uqinisekise ukuhanjiswa kwe-IPN/webhook.

Ukuba isango libonisa urhumo njengolurhoxisiweyo kodwa Ultimate Multisite ayibonisi njalo, isaziso se-webhook kusenokwenzeka ukuba silahlekile. Ungatshintsha ngesandla imeko yobulungu ku-**Ultimate Multisite > Ubulungu > [Hlela ubulungu]**.

### 6. Jonga iXesha lobabalo lokuphelelwa lixesha (inqanaba le-cron) {#6-check-the-expiration-grace-period-cron-level}

Ingqwalaselo ye-cron inexesha layo lobabalo (ukungagqibeki: iintsuku eziyi-3) ngaphambi kokumakisha ubulungu njengobuphelelwe lixesha. Oku kwahlukile kwixesha lobabalo lokuvala i-frontend. Ixesha lilonke ngaphambi kokuba isayithi ivalwe linokuba:

**Ixesha lobabalo lokuphelelwa lixesha (iintsuku eziyi-3)** + **Ixesha lobabalo lokuvala i-frontend (isetingi yakho)** = Ulibaziseko lulonke

Umzekelo, ngeesetingi ezingagqibekanga kunye nexesha lobabalo le-frontend leentsuku eziyi-7, kungathatha ukuya kuthi ga kwiintsuku eziyi-10 emva kwe-`date_expiration` ngaphambi kokuba isayithi ivalwe ngokwenene.

### 7. Phelisa ubulungu ngesandla {#7-manually-expire-a-membership}

Ukuba kufuneka uvale isayithi kwangoko ngaphandle kokulinda umjikelo we-cron, ungatshintsha ngesandla imeko yobulungu:

1. Yiya ku-**Ultimate Multisite > Ubulungu**
2. Cofa kubulungu obuchaphazelekayo
3. Tshintsha imeko ibe ngu-**Iphelelwe lixesha** okanye **Irhoxisiwe**
4. Cofa **Gcina**

Ukuvalwa kwe-frontend kuya kusebenza xa iphepha lilayishwa ngokulandelayo (kuxhomekeke kwiXesha lobabalo lokuVala i-Frontend kubulungu obuphelelwe lixesha, okanye kwangoko kubulungu oburhoxisiweyo).

## Isishwankathelo {#summary}

Umgca wexesha opheleleyo ukusuka kumhla wokuphelelwa lixesha ukuya ekuvalweni kwesayithi:

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

Kubulungu oburhoxisiweyo, indlela imfutshane:

```text
  Membership cancelled
       |
       v
  date_expiration passes (no grace period)
       |
       v
  Site frontend is blocked immediately
```

## Isalathiso sabaphuhlisi {#developer-reference}

Ezi hooks kunye neefilter zilandelayo zikuvumela ukuba wenze ngokwezifiso indlela yokuphelelwa lixesha kunye nokuvimba:

| Hook/Filter | Inkcazelo |
|---|---|
| `wu_membership_grace_period_days` | Hluza inani leentsuku zexesha lenceba ngaphambi kokumakisha ubulungu njengobuphelelwe lixesha (okusisiseko: 3) |
| `wu_schedule_membership_check_interval` | Hluza isithuba sexesha phakathi kokuhlolwa kobulungu (okusisiseko: iyure e-1) |
| `wu_membership_renewal_days_before_expiring` | Hluza ukuba zingaphi iintsuku ngaphambi kokuphelelwa lixesha ekufuneka kwenziwe intlawulo yokuhlaziya (okusisiseko: 3) |
| `wu_blocked_site_reactivation_url` | Hluza ukuze unikeze i-URL yesiko yokuvuselela kwakhona xa isayithi ivaliwe |
| `wu_membership_is_active` | Hluza ukuba ubulungu buthathelwa ingqalelo njengobusebenzayo na |
| `wu_membership_expired_check_query_params` | Hluza iiparamitha zombuzo ezisetyenziselwa ukufumana ubulungu obuphelelwe lixesha |
| `wu_membership_trial_check_query_params` | Hluza iiparamitha zombuzo ezisetyenziselwa ukufumana izilingo eziphelelwe lixesha |
