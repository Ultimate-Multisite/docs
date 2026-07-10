---
title: کاتیگۆیی کۆتایی و ڕێگریکردن لە سایتەکەدا
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# کۆتایی هاتنی ئەستۆ و ڕێگریکردن لە سایت {#membership-expiration-and-site-blocking}

ئەم ڕێنماییە دەڵێت چۆن Ultimate Multisite چارەسەر دەکات کاتی کۆتایی هۆی ئەندازیاری ئەندازیار، کۆتاییهێنانی تریال و ڕێگریکردن لە سایتەکانی فرۆشتنی پێشەوە (frontend site blocking). ئەمە گۆڕانکاریی ژیانێکی ئەندازیار لە چالاک بۆ کۆتایی هاتوو دەگوازێت، ئەو تنظیمانەی کە دیاری دەکەن ئایا سایتەکان ڕێگری دەکرێن، و چی چاکی بکەیت کاتێک سایتەکان دوای کۆتایی هاتنی ئەندازیار بەردەوامن.

## ژیانکردنی تێสถานەت (Membership Status Lifecycle) {#membership-status-lifecycle}

هەر یەک لە ئەندازیارەکانی Ultimate Multisite یەکێک لەم تێستە هەیە:

:::note ئەندازیارە ئازادەکان بۆ ماوەیەکی تەواوی دەبن
ئەندازیارە ئازادەکان بە شێوەیەکی خۆکار کۆتایی نییە. Ultimate Multisite ئەوان وەک دەستگەیشتنی بۆ ماوەیەکی تەواو دەبینێت، بۆیە لە تاقیکردنەوەی کۆتایی هاتندا (expiration checks) نیشانناوە، تەنها ئەگەر بەڕێوەبەری ئەو تێสถานەتە بگۆڕێت یان کڕیارەکە بۆ بەرھەمێکی دیکە زیاد بکات.
:::

| تێสถานەت | مانای کارکردن |
|---|---|
| **Pending** (چاوەڕوان) | چاوەڕێی پاشتی یەکەم پارەدانەوە یان ڕاگەیاندنی ئیمیل |
| **Trialing** (تێست دەکات) | ماوەیەکی تریال چالاک، هیچ پارەیەکی کۆکراوە نییە |
| **Active** (چالاک) | پارەداوە و ئێستا چالاکە |
| **On Hold** (لە ڕێگەی وەستان) | پارەی نوێکردنەوە چاوەڕوانە (فاکتۆرا دروستکراوە، چاوەڕێی پارەدانەوەیە) |
| **Expired** (کۆتایی هاتوو) | لەو ڕۆژەی کۆتایی هۆی کارپێکردنی و ماوەیەکی بەهێز (grace period) دوای ئەو کاتە بدون نوێکردنەوە |
| **Cancelled** (بڕدراوە) | بە شێوەیەکی ڕاستەوخۆ لەلایەن کڕیار یان بەڕێوەبەری گۆڕاوە |

### چۆن ئەندازیارەکان دەگوازرێن بۆ کۆتایی هاتنی {#how-memberships-transition-to-expired}

Ultimate Multisite **هەر کاتژمێرێک** تاقیکردنەوەیەکی پاشبنەمای (background check) دەکات کە لێکۆڵینێت بۆ ئەندازیارەکان کە پێویستە بە "expired" دیاری بکرێن. ئەم تاقیکردنەوەیە لەسەر [Action Scheduler](https://actionscheduler.org/) کاردەکات (نەبێت ڕاستەوخۆ WP-Cron بێت) و وەک ئەکشنێکی زماندار `wu_membership_check` دەچێتە جێبەجێکردن.

تاقیکردنەوەی کۆتایی هاتن **ماوەیەکی بەهێز (grace period) لە 3 ڕۆژ** بە شێوەیەکی پیش‌دۆزراو هەیە. ئەندازیارێک تا ئەو کاتەی `date_expiration` دەگوازێت، وەک 3 ڕۆژی دوای ئەو کاتە، نیشانناوە `expired`. ئەمەش کڕیارەکان دەدات کات بۆ تەواوکردنی پارەدانەوەیەکی دڵەڕاوێ پێش ئەوەی تێสถานەتەکە بگۆڕێت.

:::info
مەهلة کۆتایی ٣ ڕۆژ بۆ بەواتای کۆتایی لەو کاتێکە جیاوازە لە ڕێکخستنی مەهلة کۆتایی بلوک فۆنتئەندی (Frontend Block Grace Period) کە لە خوارەوە باسکراوە. مەهلة کۆتایی دەبێت دیاری بکات کە چۆن **دۆخی شتەکە دەگۆڕێت** لە چالاک/لە ڕێگەیەوە بۆ کۆتایی. مەهلة بلوک فۆنتئەندی دەبێت دیاری بکات کە چۆن **سایتی بە تەواوی ڕێگری دەکرێت** دوای گۆڕینی دۆخی شتەکە.
:::

#### ئەندامبوونی خۆڕاگەیشتنەوە (Auto-Renewing) بەرامبەر ئەو کەسانەی خۆیان بەپێی ئۆتۆماتیک نۆژوونیان دەکرێت (Non-Auto-Renewing) {#auto-renewing-vs-non-auto-renewing-memberships}

ئەم جیاوازییە بۆ تێگەیشتن لە ڕێڕەوی کۆتایی هەیە:

- **ئەندامبوونی خۆڕاگەیشتنەوەی نییە** (`auto_renew = false`): کارکردنی hourly cron job بە تەواوی ژیانێکی تەواو دەگرێتەوە -- ئەو پارەیانەی نوێکردنەوەی پاشەکەوت دەکات، ئەندامبوونەکە دەگۆڕێت بۆ "لە ڕێگەیەوە" (on-hold)، و لە کۆتاییدا ئەگەر پارە وەربگیرابێت، بە کۆتایی دەبێت.

- **ئەندامبوونی خۆڕاگەیشتنەوەی هەیە** (`auto_renew = true`): چەککردنی کۆتایی Cron **ئەم کارانە بە تەواوی دەکاتەوە**. لەوەی کە گۆڕینی پارەی (Stripe، PayPal، و هتد) دەبێت ڕابنرێت بۆ Ultimate Multisite لە ڕێگەی webhooks کاتێک ئەبۆنەکە شکست دەدات یان لغایە کراوەتەوە. ئەگەر webhookەکە نییە وەربگرێت -- بەهۆی جێبەجێکردنی نادەستووری endpoint، یان کێشەی کارکردن لە گۆڕی پارە، یان لغایە کراوەتەوە دەردا سیستەمەکە -- ئەندامبوونەکە دەتوانرێت بۆ ماوەیەکی نیگەران `active` بێت تەنانەت دوای ئەوەی بەهۆی ڕێکەوتنی کۆتایی بێت.

### چۆن تریالەکان کۆتایی دبن (How Trials End) {#how-trials-end}

کاتێک پۆلۆدێکی ئەندامبوونی تریالەکە کۆتایی دەبێت، سیستەم:

1. پارەی نوێکردنەوەی پاشەکەوت بە تەواوی ئەو ڕێژەیە دروست دەکات
2. دۆخی ئەندامبوونەکە لە `trialing` بۆ `on-hold` دەگۆڕێت
3. ئیمێلی ناساندنی پارەی نوێکردنەوە بۆ کڕیارەکە دەنێرێت

ئەم کارە بە هەمان چوارچێوە ساعەت وەک کۆتایی ڕێکخستنی باوەکان دەکات، بەڵام **فقط بۆ ئەندامبوونی خۆڕاگەیشتنەوەی نییە**. بۆ تریالەکانی خۆڕاگەیشتنەوەی هەیە، گۆڕی پارە کارکردن لە تریال بۆ ئەندامبوونی پاشەکەوت دەگرێت.

## ڕێگری لە دەستپێکردنی فۆنتئەندی (Block Frontend Access) {#block-frontend-access}

بشێوەیەکی دیکە، لە کاتی کۆتایی هاتنی ماوەی ئەندازیاری یان وەستاندانی ئەندازیاری، **تەنها داش보اردا (wp-admin dashboard) ڕێگری دەکرێت**. پێشکەوتنی سەرەوەی سایت بۆ بینەران بە وردی دەمێنێت. بۆ ئەوەی دەستپێکردن لە دەستپێکی جەلسةی ئامانجیش، دەبێت تنظیمەکەی **Block Frontend Access** چالاک بکەیت.

### ڕێکخستنی ئەو تنظیمە {#configuring-the-setting}

بڕۆ بۆ **Ultimate Multisite > Settings > Memberships** و **Block Frontend Access** چالاک بکە.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

لێرەدا بینینی تەواوی لاپەڕەی تنظیمەکانی ئەندازیاری دەبینیت:

![Membership settings full page](/img/config/settings-membership-full.png)

سێ تنظیمێکی پەیوەندیدار بەم ڕێکارەوە کۆنترۆڵ دەکەن:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | گۆڕینی سەرەکی (Master toggle). کاتێک چالاک دەکرێت، پێشکەوتنی سەرەوەی سایتەکانی تۆڕەکە ڕێگری دەکات کاتێک ئەندازیاریان زیاتر نییە. | Off |
| **Frontend Block Grace Period** | ژمارەی ڕۆژەکان بۆ چاوەڕوانی دوای ئەوەی ئەندازیارییەکە غیر چالاک بێت پێش ئەوەی ڕێگری بکرێت. بۆ `0` تنظیم بکە بۆ ڕێگریکردن بە خێرایی. | 0 |
| **Frontend Block Page** | لاپەڕەیەکی لەسەر سایتەکەی سەرەکی کە بینەران دەڕواندێت بەرەو ئەوەکە کاتێک سایتەکە ڕاگرتراوە. ئەگەر نەکراوە، بینەران پەیامی گشتی "سایتی لە ئێستادا بەردەست نییە" دەبینن. | None |

### چی بینەران دەبینن کاتێک سایتێک ڕاگرتراوە؟ {#what-visitors-see-when-a-site-is-blocked}

کاتێک پێشکەوتنی سەرەوەی سایتەکە ڕێگری دەکرێت، بینەرانی سایتەکە یەکێک لەم دوو شت ئەنجام دەدەن:

1. **ڕواندرێن** بەرەو لاپەڕەیەک کە تۆ دیاری کردووە لە **Frontend Block Page** (ئەگەر دیاریکراوە)، یان
2. **پەیامی پیش‌دۆستنییەکە دەبینن**: "سایتی لە ئێستادا بەردەست نییە" لەگەڵ لینکی سەر لاپەڕەی ئامادەکاری بۆ ئەدمینی سایتەکە.

ئادمینەکانی سایت 여هانیت دەتوانن دووبارەواوە یان لۆگ بکەن -- لاپەڕەی لۆگ هەرگیز ڕاگرتراو نییە.

### چی ڕێگری دەکرێت و کاتێک؟ {#what-gets-blocked-and-when}

ڕێکارکردنی ڕاگریکردن پەیوەستە بە دۆخی ئەندازیاری:

| Statusiya ya Uye | Frontend Blocked? | Periodi ya Faraja Imara? |
|---|---|---|
| Active (Farmak) | La | -- |
| Trialing (Wajiri) | **La** (angazeni maelezo hapa chini) | -- |
| On Hold (Kukaa) | Inachukuliwa kuwa active -- haijazungamizwa | -- |
| Expired (Imepita) | **Ndiyo**, ikiwa Block Frontend Access imewashwa | Ndiyo |
| Cancelled (Imefutwa) | **Ndiyo**, daima (bila kujali mipangilio) | **La** -- inazungamizwa mara moja |
| Pending (Inasubiri) | Haiziungamizwi kupitia ukaguzi wa uwekezaji | -- |

:::warning Uye wa Trialing hauzungamizwi
Hata kama kipindi cha majaribio kimeisha, uye wenye hali ya `trialing` **hauzungamizwi** kwenye frontend. Kwanza, majaribio lazima yabadilishe hali nyingine (kawaida `on-hold` kupitia cron job, kisha `expired` ikiwa hakuna malipo). Ikiwa unaona uye wa trialing ambao haujabadilika hali, angalia sehemu ya utatuzi hapa chini.
:::

:::note Uye wa Cancelled unachukua njia tofauti na grace period
Uye wa Cancelled huungamizwa daima mara tu tarehe ya kuisha imepita, bila kujali kama Block Frontend Access imewashwa au la. Periodi ya Faraja ya Kuzuia Frontend haitumiki kwa uye wa Cancelled.
:::

## Utatuzi: Tovuti Zinazobaki Zenye Upataji Baada ya Kuisha Muda {#troubleshooting-sites-remaining-accessible-after-expiration}

Ikiwa tovuti bado zinafanya kazi hadharani baada ya uye kuisha, fanya ukaguzi huu kwa mpangilio:

### 1. Thibitisha kwamba Mpangilio wa Block Frontend Access umeichweshwa (Enabled) {#1-verify-the-block-frontend-access-setting-is-enabled}

Nenda kwenye **Ultimate Multisite > Settings > Memberships** na thibitisha kuwa switch ya **Block Frontend Access** imewashwa. Mpangilio huu **unakuwa zamani umewashwa**, kumaanisha kwamba tu wp-admin ndio wanayezungamizwa wakati uye unakuwa haujafanya kazi tena.

### 2. Angalia Periodi ya Faraja ya Kuzuia Frontend {#2-check-the-frontend-block-grace-period}

لە هەمان لاپەڕەی تنظیمات، **Frontend Block Grace Period** بەستەری ئەو بەهایە بزانە. ئەگەر ئەمە بۆ ٧ ڕۆژ دیاریکراوە، بۆ نموونە، پێشتر لەو کاتەی ماوەی ئەندازیاری (membership) کۆتایی دێت، فرۆنت ئێڵپ (frontend) تا ٧ ڕۆژی دوای ئەو ڕێکەوتە بەبڕێیەکا ڕێگری ناکات - تەنانەت ئەگەر ئەو دۆخی یەکەمیش `expired` بێت.

ئەگەر دەتەوێت بلاککردن بە شێوەیەکی دەستبەجێ دوای ئەوەی ماوەی ئەندازیاریەکە غیر فعال بێت، ئەمە بۆ `0` دیاری بکە.

### ٣. دڵنیابە کە دۆخی یەکەم بە ڕاستی گۆڕاوە {#3-confirm-the-membership-status-has-actually-changed}

بڕۆ بۆ **Ultimate Multisite > Memberships** و دۆخی ئەو ماوەیە کاریگەرە بزانە. ئەگەر بەهۆی ڕێکەوت کۆتایی نایەتەوە، لەگەڵ ئەوەی ڕۆژی کۆتاییەکە بێت، 여وێ (status) هێشتا `active` دەبێت، وەک ئەوەی گۆڕانێکی دۆخەکە ڕوویداوە. هۆکارە باوەکان:

- **ماوەی ئەندازیاریەکە خۆی نوێ دەکرێتەوە**: فیلدی `auto_renew` لە لاپەڕەی چاککردنی ماوەی ئەندازیاریەکە بزانە. ئەگەر بەشداریکردنی نوێکردنەوە (auto-renew) چالاک بێت، کرۆنێکی کۆتایی دایە بۆ ئەم ماوەیە - ئەو پشت بە پلتفۆرمی بانکی پارە (payment gateway) دەبەستێت بۆ ڕاپۆرتکردنی شکست. لە داشبۆردی بانکی خۆت (Stripe, PayPal) چاک بکە بۆ ئەوەی دڵنیا بیت کە دۆخی ئەندازیاریەکە یەکگرتوووی ئەو شتەی Ultimate Multisite نیشان دەدات.

- **کرۆن جابەڕێی کار نراوە**: بەپێی هەنگاوەکانی دوای ئەمە بزانە.

### ٤. دڵنیابە کە Action Scheduler چالاکە {#4-verify-action-scheduler-is-running}

Ultimate Multisite لەسەر بنەمای Action Scheduler بۆ کرۆن جابەڕێی کاری خۆی بەکاردێت. بڕۆ بۆ **Tools > Scheduled Actions** لە ئیدارەی تۆڕەکە و لێکۆشە بکە بۆ:

- **`wu_membership_check`** -- ئەمە دەبێت وەک کارێکی دۆخدار (recurring action) هەموو کاتژمێرێک بێت. ئەگەر نەبوو، چاککردنی ماوەیە نیشان دراوە بۆ دانانی زمانی کرۆن.
- **`wu_async_mark_membership_as_expired`** -- ئەمە کارە تاکەکانی دابەشکردنی ماوەی ئەندازیارییەکان بە کۆتایی دەهێنێت. ئەگەر ئەو کارانەی شکستخواز (failed actions) لەم جا شو ببینیت، ڕەنگە ناوەڕۆکی هەڵەکان ئاماژەیە بۆ ئەوەی بۆچی شکستخواز بوون.

ئەگەر کارەکانی جێگیر یان شکستخواز بینی، دەتوانیت کێشەی Action Scheduler هەبێت. هۆکارە باوەکان:

- **`DISABLE_WP_CRON` لە `wp-config.php`-دا بە `true` دیاریکراوە** بدون ئەوەی جۆری سیستەمێکی تایبەت بۆ cron گۆڕاوە
- **کێشی کەم لە شوێنەکە** -- WP-Cron تەنها کاتێک کار دەکات کە کەسێک سەردانی سایت دەکات

تەواوکردنی ئەنجامی جۆری cron بە شێوەیەکی پێکەوتوو، جۆری سیستەمێکی cron دیاری بکە:

```bash
# هەموو ٥ خولەکێک لەسەر یەکدا دەچێت بە wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# یان بە WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### ٥. چاککردن بۆ کێشەکانی Gateway Webhook (Memberships کە خودی خۆیان دەگەڕێنەوە) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

ئەگەر ئەندامەکە بە شێوەیەکی خۆکار دابەش دەبێتەوە و ئەندرۆنی پیشکشەکە یان گۆڕینی ئەندرۆنی پڕۆژەی gateway کراوەتەوە یان شکست دراوە، بەڵام Ultimate Multisite 여전히 وەک `active` نیشاندات:

- **Stripe**: بگواشبە داشبۆردی Stripe > Customers و دابنێ بکە و مۆدالەکە بۆ دیاریی ئەندرۆنی بزانە. پاشان لەسەر Developers > Webhooks دەبینەوە کە کۆتاییەکە چالاکە. ئەو endpointە دەبێت ئاماژەی بە شوێنەکەت بدات و پێشکەوتنی سەرکەوتوو نیشان بدات.
- **PayPal**: دابنێ بکە مۆدالەکە لە هەژمار بازرگانیی PayPal یەکەت و چاک بکە کە IPN/webhook دەگات.

ئەگەر gateway ئەو دابەشەی کراوە بە کاتێک Ultimate Multisite ناکات، ئەوا ئاگاداری webhookەکە لەدەستداوە. دەتوانیت بە شێوەیەکی دەستی گۆڕینی دۆخی ئەندامەکە لە **Ultimate Multisite > Memberships > [Edit Membership]** بگۆڕیت.

### ٦. چاککردن بۆ ماوەی بەردەوامبوون (Cron Level) {#6-check-the-expiration-grace-period-cron-level}

چککردنی cron ماوەی خۆی هەیە (دۆخی پیش‌فرض: ٣ ڕۆژ) پێش ئەوەی یەکێک لە دابەشەکان وەک کۆتایی دەپێ>\<br\>ئەمە جیاوازە لە ماوەی بەردەوامبوونی بلوکەکە لە فرۆنت-endi. کاتێکی کۆی گشتی پێش ئەوەی شوێنەکە بڵاو بکرێتەوە دەتوانرێت بێت:

**ماوەی بەردەوامبوون (٣ ڕۆژ)** + **ماوەی بلوککردنی فرۆنت-endi (دیاریکراوی تۆ)** = کاتێکی کۆی تاخیر

<br>

بۆ نموونە، لەگەڵ تنظیمات باوونی و پۆلۆیەکی ٧ ڕۆژ بۆ پاشەکەوتی پێشەوە (frontend grace period)، دەتوانێت تا ١٠ ڕۆژ دوای `date_expiration` سایتەکە بە ڕاستی بڕدرێت.

### ٧. بە شێوەیەکی دەستکرد کۆتایی پێهێنانی ئەندازیاری ئەندازیاری کارپێری (Membership) {#7-manually-expire-a-membership}

ئەگەر پێویستە بلاککردنی خێرا و بەبێ چاوەڕوانی cikli cron بکەیت، دەتوانیت دۆخی ئەندازیاری کارپێرییەکە بە شێوەیەکی دەستکرد بگۆڕیت:

١. گەهشت بۆ **Ultimate Multisite > Memberships**
٢. لەسەر ئەندازیاری کارپێریی پەیوەندیدار کلیک بکە
٣. دۆخی (status) بۆ **Expired** یان **Cancelled** بگۆڕە
٤. کلیک بکە بە **Save**

بلاککردنی پێشەوە لەو کاتەدا دەست پێدەکات کە لە بارودۆخی پاشەکەوتی پێشەوەی ئەندازیاری کارپێرییەکان (Frontend Block Grace Period) بێت، یان بە شێوەیەکی فوري بۆ ئەندازیارییەکانی لێکراوە (cancelled memberships).

## پوختە {#summary}

کاتی تەواوی لە ڕێکەوتەکەت تا بلاککردنی سایت:

```text
date_expiration دەگاتە کۆتایی
       |
       v
  [پۆلۆکی پاشەکەوتی ٣ ڕۆژ]     <-- ئەندازیاری کارپێرییەکە 여전히 وەک چالاک/لە ڕێگەیەوە دەردەکەوێت
       |
       v
  Cron ئەندازیاری کارپێرییەکە بە "expired" دەبێت
       |
       v
  [پۆلۆکی پاشەکەوتی بلاککردنی پێشەوە]  <-- لە Settings > Memberships دا دیاریکراوە
       |
       v
  پێشەوەی سایتەکە بلاک دەکرێت
```

بۆ ئەندازیاری کارپێرییەکان کە لێکراون (cancelled)، ڕێگایەکە کورتترە:

```text
  Membership cancelled
       |
       v
  date_expiration دەگاتە کۆتایی (هیچ پۆلۆکی پاشەکەوتی نییە)
       |
       v
  پێشەوەی سایتەکە بە فوري بلاک دەکرێت
```

## ئاماژە بۆ پەرەپێدان (Developer Reference) {#developer-reference}

ئەم hook و filter-ە جیاوازانە ڕێگە بدەن کە شێوازی کۆتایی پێهێنانی و بلاککردنی کاریگەرییەکە بگۆڕیت:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | Filterti numèra ditên grace period (période de grâce) przed markiranje članstva kao istekle (podrazumevano: 3) |
| `wu_schedule_membership_check_interval` | Filter interval između provera članstva (podrazumevano: 1 sat) |
| `wu_membership_renewal_days_before_expiring` | Filter koliko dana prije isteka da se kreira plaćanje za obnavljanje (podrazumevano: 3) |
| `wu_blocked_site_reactivation_url` | Filter kako bi se pružio prilagođeni URL za ponovno aktiviranje kada je sajt blokiran |
| `wu_membership_is_active` | Filter da li je članstvo smatrano aktivno |
| `wu_membership_expired_check_query_params` | Filter parametre upita koji se koriste za pronalaženje isteklih članstava |
| `wu_membership_trial_check_query_params` | Filter parametre upita koji se koriste za pronalaženje isteklih probnih perioda (trials) |
