---
title: Kammalawa da Karshewar Bijarwa da Baka Iduk Wurin
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Faiye da Awashewa da Baka Wurin Gida {#membership-expiration-and-site-blocking}

Wannan hoto yana bayanin yadda Ultimate Multisite ke kula da ƙarewar samun kuɗi (membership expiration), ƙarshen gwaji (trial endings), da kuma hana wajen gidan sarai (frontend site blocking). Yana nuna duk rayuwancin samun kuɗi daga matsayi na aiki zuwa na ƙarewa, tsarin da ke sarrafa ko za a hana wuraren gida, da abubuwan da ya kamata a bincika idan wuraren gida suna nan ba bayan ƙarewar samun kuɗi.

## Rayuwancin Matsayin Samun Kuɗi (Membership Status Lifecycle) {#membership-status-lifecycle}

Kowane samun kuɗi a Ultimate Multisite yana ɗaya daga cikin waɗannan matsayin:

:::note Samun kuɗi na dandano (Free memberships) suna da dorewa mai tsawon lokaci
Samun kuɗi na dandano ba zai ƙare ko ya yi ƙarewa ne ba ta zahiri. Ultimate Multisite yana kallonsu kamar samun kuɗi na tsawon lokaci, don haka ba su shafi binciken ƙarewar samun kuɗi ba ga wani gobe idan wani administrator ya canza matsayinsu ko ya ɗauka abokin ciniki zuwa wani kayan aiki.
:::

| Matsayi (Status) | Ma'ana |
|---|---|
| **Pending** | Jiran karɓar biyan kuɗi na farko ko tabbatar da imel |
| **Trialing** | Wannan shi ne lokacin gwaji mai aiki, ba a samu wani biya ba har yanzu |
| **Active** | An biya kuma yana aiki |
| **On Hold** | Biyan kuɗin sake samun kuɗi yana jiran (an samar da kwestion, ana jira biya) |
| **Expired** | Ya wuce ran ƙarewar samun kuɗi da lokacin gafara ba tare da sake samun kuɗi ba |
| **Cancelled** | An ragarwa shi kai tsaye daga abokin ciniki ko administrator |

### Yadda Samun Kuɗi ke Canza zuwa Expired (Ƙarewa) {#how-memberships-transition-to-expired}

Ultimate Multisite yana yin bincike na baya **kowa sa'a** don nemo samunan kuɗi da ya kamata a yi masa ƙarewar. Wannan bincike yana amfani da [Action Scheduler](https://actionscheduler.org/) (ba ne WP-Cron kai tsaye) kuma yana tafiya a matsayin `wu_membership_check` scheduled action.

Binciken ƙarewar samun kuɗi yana da **lokacin gafara na 3 sa'o'i** ba tare da wani abu ba a farko. Samun kuɗi ba zai bayyana a matsayin `expired` har sai bayan wuce ran ƙarewar samun kuɗi da lokacin gafara (grace period) na 3 sa'o'i. Wannan yana ba abokan ciniki lokaci don kammala biyan kuɗi da ya wuce kafin matsayinsu ya canza.

:::info
ماکساɗin 3-sanyi na la'ada (grace period) yana da wuri daban daga sanyin la'ada na Blokinta Gaba (Frontend Block Grace Period) da aka bayyana a ƙasa. Sanyin la'ada na la'ada yana sarrafa lokacin da **bayani ya canza** daga active/on-hold zuwa expired. Sanyin la'ada na blokinta gaba yana sarrafa lokacin da **an hana wajen shiga** bayan bayanin ya canza.
:::

#### Samun Girmamawa Mai Tana Gyara Sau In Ji (Auto-Renewing vs. Non-Auto-Renewing Memberships) {#auto-renewing-vs-non-auto-renewing-memberships}

Wannan bambanci yana da mahimmanci don fahimtar yadda la'adaru ke tafiya:

- **Samun girmamawa ba mai gyara sau in ji** (`auto_renew = false`): Aikin cron na sa'a (hourly cron job) yana gudanar da dakarwar duka—yana ƙirƙirar biyan kuɗin sake samun girmamawa, yana canza yanayin samun girmamawa zuwa on-hold, kuma a ƙarshe yana alamar la'ada idan ba a samu biya ba.

- **Samun girmamawa mai gyara sau in ji** (`auto_renew = true`): Binciken la'adaren cron na la'ada **yana tsayawa shi nan duka**. An karatun hanyar samun kuɗi (Stripe, PayPal, da sauransu) an tsammanin ya san Ultimate Multisite ta hanyar webhooks idan wani sabon samun girmamawa ya yi nasara ko a saba. Idan ba a samu wannan webhook ba—saboda wajen ƙirƙirar endpoint mai rashin daidai, matsalar wajen samun kuɗi, ko kuma an ci gaba da shiga bayan an ragarawa daga tsarin—samun girmamawa na iya zama `active` har abada bayan wajen la'ada ya wuce.

### Yadda Ake Kasa Shiga (How Trials End) {#how-trials-end}

Idan lokacin gwaji na samun girmamawa ya ƙare, tsarin yana yin hakan:

1. Ya ƙirƙira biyan kuɗin sake samun girmamawa da dukkan adadin kuɗin samun girmamawa
2. Ya canza yanayin samun girmamawa daga `trialing` zuwa `on-hold`
3. Ya aiko imel na bayanin sake samun girmamawa ga abokin ciniki

Wannan tsari yana tafiya da shaidin sa'a guda ɗaya kamar binciken la'ada na yau da kullum, amma **yalayin samun girmamawa ba mai gyara sau in ji**. Don gwajin samun girmamawa mai gyara sau in ji, hanyar samun kuɗi (payment gateway) ita ce tana gudanar da canjin daga gwaji zuwa samun girmamawa mai biya.

## Hanjewa ga Shiga na Gaba (Block Frontend Access) {#block-frontend-access}

به طور پیش‌فرض، وقتی عضویت منقضی می‌شود یا به حالت تعلیق می‌رود، **فقط داشبورد wp-admin محدود می‌شود**. بخش عمومی سایت برای بازدیدکنندگان همچنان قابل دسترسی است. برای مسدود کردن دسترسی عمومی، باید تنظیم **Block Frontend Access** را فعال کنید.

### پیکربندی تنظیمات {#configuring-the-setting}

به مسیر **Ultimate Multisite > Settings > Memberships** بروید و گزینه **Block Frontend Access** را فعال کنید.

![تنظیمات Block Frontend Access که نشان می‌دهد سوئیچ فعال است، یک دوره مهلت ۷ روزه، و انتخاب صفحه مسدودسازی فرانت‌اند](/img/config/settings-membership-block-frontend.png)

در اینجا نمای کامل صفحه تنظیمات عضویت آمده است:

![صفحه کامل تنظیمات عضویت](/img/config/settings-membership-full.png)

سه تنظیم مرتبط این رفتار را کنترل می‌کنند:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | سوئیچ اصلی. وقتی فعال باشد، فرانت‌اند عمومی سایت‌های شبکه زمانی که عضویت آنها دیگر فعال نباشد را مسدود می‌کند. | Off |
| **Frontend Block Grace Period** | تعداد روزهایی که باید منتظر بمانید بعد از غیرفعال شدن عضویت قبل از مسدود کردن. برای مسدود کردن فوری روی `0` تنظیم کنید. | 0 |
| **Frontend Block Page** | صفحه‌ای در سایت اصلی که بازدیدکنندگان به آن هدایت می‌شوند وقتی یک سایت مسدود می‌شود. اگر تنظیم نشود، بازدیدکنندگان پیام عمومی "این سایت در حال حاضر در دسترس نیست" را می‌بینند. | None |

### بازدیدکنندگان هنگام مسدود شدن سایت چه چیزی می‌بینند {#what-visitors-see-when-a-site-is-blocked}

وقتی دسترسی فرانت‌اند مسدود می‌شود، بازدیدکنندگان از سایت یا:

۱. **به صفحه‌ای که در Frontend Block Page انتخاب کرده‌اید هدایت می‌شوند** (اگر تنظیم شده باشد)، یا
۲. **پیام پیش‌فرض را مشاهده می‌کنند**: "این سایت در حال حاضر در دسترس نیست" همراه با لینکی به صفحه ورود برای مدیر سایت.

مدیران سایت همچنان می‌توانند وارد شوند -- صفحه ورود هرگز مسدود نمی‌شود.

### چه چیزی مسدود می‌شود و چه زمانی {#what-gets-blocked-and-when}

رفتار مسدودسازی به وضعیت عضویت بستگی دارد:

| Babban Jariyar Hayata | Frontend An aka Ruwa? | Adadin Zaman da aka Ba? |
|---|---|---|
| Active (Aiki) | A'a | -- |
| Trialing (Taya) | **A'a** (galle ka ga bayanin a ƙasa) | -- |
| On Hold (Wurin Taimako) | An yi la'akari da shi a matsayin aiki -- ba an ruwa ba | -- |
| Expired (Ƙarshe) | **Eh**, idan Block Frontend Access tana aiki | Eh |
| Cancelled (An Rufe) | **Eh**, koyaushe (bayan duk wani tsari) | **A'a** -- an rufe nan take |
| Pending (Jiran Bayan) | Ba a ruwa ta hanyar binciken samun hayata | -- |

:::warning Hayoyin Trialing ba su ruwa
Kamar yadda aka bayyana, ko da wani lokacin gwaji ya ƙare, hayata mai matsayin `trialing` **ba za a ruwawa** a frontend. Dole ne shi ya canza matsayi na wani abu (yawanci `on-hold` ta hanyar cron job, sannan `expired` idan ba a biya). Idan kuna ganin hayoyin trialing da ba su canja matsayi ba, ga sashi na magance matsalolin a ƙasa.
:::

:::note Hayoyin Cancelled suna wucewa daga adadin zaman
Hayoyin cancelled an rufe koyaushe bayan wajen ƙarewar lokacin samun hayata, ko Block Frontend Access tana aiki ko ba. Adadin zaman na Block Grace Period ba ya shafi hayoyin cancelled.
:::

## Magance Matsala: Wurin da Sites ke Aiki Ba BayanƘarewa {#troubleshooting-sites-remaining-accessible-after-expiration}

Idan sites suna nan don jama'a bayan hayata suka ƙare, ku yi bincike waɗannan abubuwan da aka bayyana a wannan tsari:

### 1. Bincika Cewa Tsarin Block Frontend Access Tana Aiki {#1-verify-the-block-frontend-access-setting-is-enabled}

Tuntuɓi **Ultimate Multisite > Settings > Memberships** kuma tabbatar cewa wajen aiki (toggle) na **Block Frontend Access** tana aiki. Wannan tsarin **ba ya kasance aiki a farko**, wanda ke nufin kawai wp-admin zai iya ruwa lokacin da hayata ta yi rashin aiki.

### 2. Bincika Adadin Zaman na Block Grace Period {#2-check-the-frontend-block-grace-period}

همین صفحه تنظیمات رو چک کنید و مقدار **Frontend Block Grace Period** رو ببینید. اگه این رو روی ۷ روز گذاشته باشید، مثلاً، فرانت‌اند تا ۷ روز بعد از تاریخ انقضای عضویت مسدود نخواهد شد -- حتی اگر وضعیت عضویت قبلاً `expired` (منقضی شده) باشه.

اگه می‌خواید بلافاصله بعد از غیرفعال شدن عضویت مسدود بشه، این مقدار رو روی `0` تنظیم کنید.

### ۳. مطمئن شوید که وضعیت عضویت واقعاً تغییر کرده است {#3-confirm-the-membership-status-has-actually-changed}

به **Ultimate Multisite > Memberships** بروید و وضعیت عضویت مربوطه رو چک کنید. اگه با وجود اینکه تاریخ انقضا گذشته، هنوز وضعیتش `active` (فعال) نشون می‌ده، یعنی تغییر وضعیت اتفاق نیفتاده. دلایل رایج این‌ها:

- **عضویت خودکار تمدید می‌شود**: فیلد `auto_renew` رو در صفحه ویرایش عضویت چک کنید. اگه تمدید خودکار فعال باشه، کرون (cron) انقضا برای این عضویت رو رد می‌کنه -- اون به درگاه پرداخت متکیه که عدم موفقیت رو گزارش بده. داشبورد درگاه خودتون (Stripe، PayPal) رو چک کنید تا مطمئن بشید وضعیت اشتراک با چیزی که Ultimate Multisite نشون می‌ده مطابقت داره.

- **وظیفه کرون اجرا نشده**: به مرحله بعد بروید.

### ۴. بررسی کنید Action Scheduler در حال اجرا است {#4-verify-action-scheduler-is-running}

Ultimate Multisite از Action Scheduler برای کارهای زمان‌بندی شده (cron jobs) استفاده می‌کنه. به بخش **Tools > Scheduled Actions** در مدیریت شبکه (network admin) بروید و دنبال این موارد بگردید:

- **`wu_membership_check`** -- این باید به عنوان یک کار تکراری که هر ساعت اجرا می‌شه، ظاهر بشه. اگه این مورد وجود نداشته باشه، بررسی‌های عضویت برنامه‌ریزی نشده‌اند.
- **`wu_async_mark_membership_as_expired`** -- این‌ها کارهای جداگانه‌ای هستن که برای علامت‌گذاری عضویت‌های خاص به عنوان منقضی شده استفاده می‌شن. اگه اینجا عملیات با خطا (failed actions) دیدید، ممکنه پیام‌های خطایی داشته باشن که توضیح می‌دن چرا اون کارها شکست خورده.

اگه عملیاتی گیر کرده یا با خطا مواجه شدید، ممکن است مشکل از Action Scheduler باشه. دلایل رایج این‌ها:

- **`DISABLE_WP_CRON` anan `true`** a cikin `wp-config.php` ba tare da wani tsarin cron na tsarin ba
- **Ƙananan zuwa wurin shafin** -- WP-Cron yana tafiya kawai lokacin da wani ya ziyarci shafin

Don tabbatar da aiki mai inganci na cron, ka shirya aikin cron na tsarin:

```bash
# Gana shi duk 5 minti ta hanyar wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Ko ta hanyar WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Bincika Matala Gateway Webhook (Auto-Renewing Memberships) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Idan samun kuɗin auto-renew yana tafiya kuma an ci gaba da tsarin gateway ko ya yi nasara, amma Ultimate Multisite yau da kullum yana nuna shi a matsayin `active`:

- **Stripe**: Zuwa Stripe Dashboard > Customers ka bincika yanayin tsarin. Sannan ka tabbatar cewa webhook endpoint yana aiki a ƙarƙashin Developers > Webhooks. Endpoint ya kamata ya nuna shafin ku kuma ya nuna samun nasara.
- **PayPal**: Ka bincika yanayin tsarin a asusun kasuwancinka na PayPal kuma ka tabbatar da samun IPN/webhook.

Idan gateway yana nuna cewa an ci gaba da tsari amma Ultimate Multisite ba shi, wannan saƙon webhook ya lalace. Za ka iya canza yanayin samun kuɗi kai tsaye a **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Bincika Wannan Lokacin Kasala (Cron Level) {#6-check-the-expiration-grace-period-cron-level}

Binciken cron yana da wani lokacin kasala (default: rana 3) kafin ya nuna samun kuɗi ya ƙare. Wannan yana da alaƙa da lokacin kasala na blokar gaba (frontend block grace period). Lokacin da za a iya hana shafin zai zama:

**Lokacin kasala na ƙare (rana 3)** + **Lokacin kasala na blokar gaba (tsarin ka)** = Jinkirin da ya wuce

### 7. rękamanin status awhaɗa {#7-manually-expire-a-membership}

Idan kana so ka hana wuri nan nan ba tare da jira cikakken tsarin cron ba, za ka iya canza yanayin aiki na samun kuɗi (membership) kai tsaye:

1. Zuwa **Ultimate Multisite > Memberships**
2. Danna kan samun kuɗin da kake so ka hana shi
3. Canza yanayinsa zuwa **Expired** ko **Cancelled**
4. Danna **Save**

Hana hana aiki na gaba (frontend block) zai fara aiki nan lokacin da aka buɗe shafi na gaba na gaba (next page load) (wannan ya dogara kan wani tsari na jiran hana aiki na gaba ga samun kuɗi mai ƙarewa, ko nan nan idan an cancel shi).

## Bayani {#summary}

Tsarin gaba daga ranar ƙarewar samun kuɗi zuwa hana aikin wuri:

```text
date_expiration ya wuce
       |
       v
  [tsarin jiran hana aiki na cron na 3-sana]     <-- samun kuɗin yana nuna a matsayin "active/on-hold"
       |
       v
  Cron ya bayyana samun kuɗi a matsayin "expired"
       |
       v
  [tsarin jiran hana aiki na gaba]  <-- wanda aka tsara a Settings > Memberships
       |
       v
  Hana aikin gaba na wuri ya yi
```

Don samun kuɗi da an cancel shi, hanyar ta ƙarshe:

```text
  Samun kuɗin an cancel
       |
       v
  date_expiration ya wuce (ba akwai tsarin jiran hana aiki)
       |
       v
  Hana aikin gaba na wuri ya yi nan nan
```

## Bayanin Masanin Kimiyya (Developer Reference) {#developer-reference}

Wannan hooks da filters suna ba ka damar canza yadda ƙarewar samun kuɗi da hana aiki ke tafiya:

| Hook/Filter | Bayanai |
|---|---|
| `wu_membership_grace_period_days` | Addu adadin kwanin lokacin gafara kafin a yi bayanin cewa kungiya ta ƙarewa ce (default: 3) |
| `wu_schedule_membership_check_interval` | Bayanai tsakanin lokacin binciken kungiyar (default: 1 sa'a) |
| `wu_membership_renewal_days_before_expiring` | Bayanai yadda za a ƙirƙiri biyanar sake dawo kuɗi kafin ƙarewa (default: 3) |
| `wu_blocked_site_reactivation_url` | Bayanai don samar da wuri na sake shiga (reactivation URL) idan wani gida ya yi bayani |
| `wu_membership_is_active` | Bayanai ko kungiya ce tana aiki (active) |
| `wu_membership_expired_check_query_params` | Bayanai na sako (query parameters) da ake amfani da su don nemo kungiyoyin da suka ƙarewa |
| `wu_membership_trial_check_query_params` | Bayanai na sako (query parameters) da ake amfani da su don nemo sakotan da suka ƙarewa |
