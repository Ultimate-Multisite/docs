---
title: سميشن ختم ٿيڻ ۽ سائٽ بڪنگ
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# सदस्यता ختم ہونا اور سائٹ بلاکنگ

هي گائیڈ بتاتا ہے کہ Ultimate Multisite کس طرح ممبرشپ کی ختم ہونے، ٹرائل کے ختم ہونے، اور فرنٹ اینڈ سائٹ کو بلاک کرنے کا انتظام کرتا ہے۔ یہ ایک ممبرشپ کے مکمل دورانیے سے گزرنے (فعال سے ختم ہونے تک)، ان سیٹنگز سے جو کنٹرول کرتی ہیں کہ سائٹس کو بلاک کیا جائے یا نہیں، اور اس وقت کیا چیک کرنا ہے جب کوئی ممبرشپ ختم ہو جانے کے باوجود سائٹس قابل رسائی رہتی ہیں۔

## ممبرشپ کی حیثیت کا دورانیہ (Membership Status Lifecycle) {#membership-status-lifecycle}

Ultimate Multisite میں ہر ممبرشپ کی ایک درج ذیل میں سے کوئی ایک حیثیت ہوتی ہے:

:::note مفت ممبرشپ ہمیشہ کے لیے ہوتے ہیں
مفت ممبرشپ خود بخود ختم نہیں ہوتے۔ Ultimate Multisite انہیں ہمیشہ کے رسائی کے طور پر دیکھتا ہے، اس لیے جب تک ایڈمن ان کی حیثیت تبدیل نہ کرے یا صارف کو کسی دوسرے پروڈکٹ پر منتقل نہ کرے، تب تک وہ ختم ہونے کی جانچ میں شامل نہیں ہوتے۔
:::

| Status | مطلب |
|---|---|
| **Pending** | پہلی ادائیگی یا ای میل تصدیق کا انتظار کر رہا ہے |
| **Trialing** | فعال ٹرائل مدت، ابھی تک کوئی ادائیگی وصول نہیں ہوئی |
| **Active** | ادا شدہ اور موجود (Current) |
| **On Hold** | تجدید کی ادائیگی کا انتظار ہے (انفائس erstellt ہو گیا ہے، ادائیگی کا انتظار ہے) |
| **Expired** | ختم ہونے کی تاریخ اور رعایت کی مدت سے گزر جانے کے بعد بغیر تجدید کیے |
| **Cancelled** | صارف یا ایڈمن کی طرف سے واضح طور پر منسوخ کیا گیا ہے |

### ممبرشپ کیسے ختم شدہ (Expired) ہوتا ہے {#how-memberships-transition-to-expired}

Ultimate Multisite ہر گھنٹے میں ایک بیک گراؤنڈ چیک کرتا ہے جو ان ممبرشپز کو تلاش کرتا ہے جنہیں ختم شدہ کے طور پر نشان زد ہونا چاہیے۔ یہ چیک [Action Scheduler](https://actionscheduler.org/) کا استعمال کرتا ہے (WP-Cron سے براہ راست نہیں) اور `wu_membership_check` اسکرEDULEڈ ایکشن کے طور پر چلتا ہے۔

ختم ہونے کی جانچ میں ڈیفالٹ طور پر **3 دن کی رعایت کی مدت (grace period)** شامل ہوتی ہے۔ ممبرشپ کی حیثیت تب تک `expired` نہیں ہوگی جب اس کی `date_expiration` گزرنے کے 3 دن بعد نہ ہو اور تجدید نہ کی گئی ہو۔ یہ صارفین کو اپنی حیثیت تبدیل ہونے سے پہلے دیر سے ادائیگی مکمل کرنے کا وقت دیتا ہے۔

:::info
3 دن وارexpiry grace period نیچے دی گئی Frontend Block Grace Period سیٹنگ سے الگ آهي. expiry grace period اهو کن وقت **status بدلندو** آهي، یعنی active/on-hold کان expired تائين. frontend block grace period اهو کن وقت **site block ٿي ويندي** آهي جڏهن status بدل چڪو هجي.
:::

#### Auto-Renewing vs. Non-Auto-Renewing Memberships (خود رينيو ٿيندڙ ۽ غير خود رينيو ٿيندڙ ممبرشپس) {#auto-renewing-vs-non-auto-renewing-memberships}

expiry جو عمل سمجهڻ لاءِ هي فرق بہت اهم آهي:

- **غير خود رينيو ٿيندڙ ممبرشپس** (`auto_renew = false`): هو ڪورن جي hourly cron job سنڀالندي پوري لائف سائڪل سنڀالندي -- اهو renewal payments کڻي، membership کي on-hold تي منتقل ڪري ٿو، ۽ جڏهن دفعو payment نٿو ملي ته ان کي بالآخر expired طور نشانيده ڪندو.

- **خود رينيو ٿيندڙ ممبرشپس** (`auto_renew = true`): cron جو expiry check **ان کي پوري ختم ڪري ڇڏي ٿو**. payment gateway (Stripe, PayPal، etc.) کي انتظار آهي ته جڏهن subscription فیل ٿئي يا کانسل ٿئي ته هو webhooks جي ذريعي Ultimate Multisite کي خبردار ڪري. جيڪڏهن webhook ملي نه -- غلط endpoint کان، gateway جو بند ٿيڻ کان، يا system ٻاهر ڪنه ممبرشپ جو کانسل ٿيڻ کان -- ته expiry date پار ڪرڻ کان پوءِ به membership `active` رهي سگهي ٿي.

### Trials ڪيئن ختم ٿين ٿا (How Trials End) {#how-trials-end}

جڏهن ڪنه trialing membership جو trial period ختم ٿئي ٿو، ته system هي ڪم ڪري ٿو:

1. پوري subscription amount سان pending renewal payment ٺاهي ٿو
2. membership جي status `trialing` کان `on-hold` تي منتقل ڪري ٿو
3. ڪسٽمر کي renewal payment جو notification email پيهر ڪري ٿو

هي عمل regular expiry check جي نفسن جي schedule تي چلندو آهي، پر **غير خود رينيو ٿيندڙ ممبرشپس لاءِ**. خود رينيو ٿيندڙ trials لاءِ، payment gateway trial کان paid subscription تائين جو transition سنڀالندو آهي.

## Block Frontend Access (Frontend Access Block ڪرڻ) {#block-frontend-access}

ڈیفالٹ طور تے، جب کوئی ممبرشپ ختم ہو جائے یا روک دی جائے، **صرف wp-admin ڈیش بورڈ ہی محدود ہوتا ہے۔** سائٹ کا پبلک فرنٹ اینڈ وزٹرز کے لیے کھلا رہتا ہے۔ اگر آپ عوامی رسائی کو بھی بلاک کرنا چاہتے ہیں تو آپ کو **Block Frontend Access** سیٹنگ آن کرنی ہوگی۔

### سیٹنگز کو کنفیگر کرنا {#configuring-the-setting}

**Ultimate Multisite > Settings > Memberships** پر جائیں اور **Block Frontend Access** کو آن کریں۔

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

یہ ممبرشپ سیٹنگز کا مکمل نظارہ یہ ہے:

![Membership settings full page](/img/config/settings-membership-full.png)

اس رویے کو کنٹرول کرنے والی تین متعلقہ سیٹنگز ہیں:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | مین ٹوگل۔ جب یہ آن ہوتا ہے، تو نیٹ ورک سائٹس کے پبلک فرنٹ اینڈ کو ان کی ممبرشپ غیر فعال ہونے پر بلاک کر دیتا ہے۔ | Off |
| **Frontend Block Grace Period** | وہ دن جن کا انتظار کرنا ہے اس وقت جب ممبرشپ غیر فعال ہو جائے اس سے پہلے بلاک کیا جائے گا۔ فوری بلاک کرنے کے لیے اسے `0` پر سیٹ کریں۔ | 0 |
| **Frontend Block Page** | ایک ایسا پیج جو مین سائٹ پر ہوتا ہے جہاں کسی سائٹ کو بلاک کرنے پر وزٹرز کو ری ڈائریکٹ کیا جاتا ہے۔ اگر یہ سیٹ نہیں کیا گیا تو وزٹرز کو ایک عام "یہ سائٹ فی الحال دستیاب نہیں ہے" کا پیغام نظر آتا ہے۔ | None |

### جب کوئی سائٹ بلاک کی جاتی ہے تو وزٹرز کیا دیکھتے ہیں {#what-visitors-see-when-a-site-is-blocked}

جب فرنٹ اینڈ رسائی بلاک ہو جاتی ہے، تو سائٹ کے وزٹرز یا تو:

1. **آپ کے منتخب کردہ پیج پر ری ڈائریکٹ ہو جائیں** (اگر سیٹ کیا گیا ہو)، یا
2. **ایک ڈیفالٹ میسج دیکھیں**: "یہ سائٹ فی الحال دستیاب نہیں ہے" جس میں سائٹ ایڈمن کے لیے لاگ ان پیج کا لنک ہوگا۔

سائٹ ایڈمن اب بھی لاگ ان کر سکتے ہیں -- لاگ ان پیج کبھی بلاک نہیں ہوتا۔

### کیا بلاک ہوتا ہے اور کب؟ {#what-gets-blocked-and-when}

بلاک کرنے کا رویہ ممبرشپ کی حیثیت پر منحصر ہوتا ہے:

| सदस्यता کی حیثیت | فرنٹ اینڈ بلاک کیا گیا ہے؟ | مہلت لاگو ہوئی ہے؟ |
|---|---|---|
| Active (فعال) | No (نہیں) | -- |
| Trialing (ٹائلنگ) | **No** (نیچے نوٹ دیکھیں) | -- |
| On Hold (روک دیا گیا) | Considered active -- not blocked (فعال سمجھا جاتا ہے -- بلاک نہیں کیا جاتا) | -- |
| Expired (مختصر مدت ختم) | **Yes**, if Block Frontend Access is on (اگر Block Frontend Access آن ہو تو ہاں) | Yes (ہاں) |
| Cancelled (منسوخ) | **Yes**, always (ہر صورت ہمیشہ) | **No** -- blocked immediately (نہیں -- فوری بلاک کیا جاتا ہے) |
| Pending (معلق) | Not blocked via membership check (سมาชิกภาพ کی جانچ کے ذریعے بلاک نہیں ہوتا) | -- |

:::warning Trialing memberships are not blocked
Even if a trial period has ended, a membership with `trialing` status will **not** be blocked on the frontend. The trial must first transition to another status (typically `on-hold` via the cron job, then `expired` if unpaid). If you are seeing trialing memberships that have not transitioned, check the troubleshooting section below.
:::

:::note Cancelled memberships bypass the grace period
Cancelled memberships are always blocked once the expiration date has passed, regardless of whether Block Frontend Access is enabled. The Frontend Block Grace Period does **not** apply to cancelled memberships.
:::

## Troubleshooting: Sites Remaining Accessible After Expiration (مسائل حل کرنا: ختم ہونے کے بعد بھی سائٹس قابل رسائی کیوں ہیں) {#troubleshooting-sites-remaining-accessible-after-expiration}

اگر کوئی رکنیت ختم ہونے کے بعد بھی سائٹس عوامی طور پر دستیاب رہتی ہیں، تو ان چیکس کو ترتیب وار درج ذیل طریقے سے چیک کریں:

### 1. Verify the Block Frontend Access Setting Is Enabled (Block Frontend Access سیٹنگ آن ہے یا نہیں اس کی تصدیق کریں) {#1-verify-the-block-frontend-access-setting-is-enabled}

**Ultimate Multisite > Settings > Memberships** میں جائیں اور یقینی بنائیں کہ **Block Frontend Access** ٹوگل آن ہے۔ یہ سیٹنگ **ڈیفالٹ طور پر بند (off)** ہوتی ہے، جس کا مطلب ہے کہ جب کوئی رکنیت غیر فعال ہو جاتی ہے تو صرف wp-admin تک رسائی محدود ہوتی ہے۔

### 2. Check the Frontend Block Grace Period (فرنٹ اینڈ بلاک مہلت کی مدت چیک کریں) {#2-check-the-frontend-block-grace-period}

ا اسی سیٹنگز پیج تي چیک ڪريو **Frontend Block Grace Period** جو ویلیو۔ جيڪڏهن هي 7 ڏينهن تي set ڪيو آهي، ته مثال طور، فرءنٽ اينڊ 7 ڏينهن کان پوءِ ممبرشپ جي ختم ٿيڻ جي تاريخ کان روڪيل نٿي هجي -- جنهن ڪري ممبرشپ جي اسٽس (status) `expired` باوجود به.

هي `0` تي set ڪريو جيڪڏهن توهان چاهيو ته ممبرشپ غير فعال ٿيڻ کان پوءِ فوري طور تي روڪجي وڃي.

### 3. تصديق ڪريو ته ممبرشپ جي اسٽس واقعي ٿي آهي {#3-confirm-the-membership-status-has-actually-changed}

**Ultimate Multisite > Memberships** تي وڃو ۽ متاثر ٿيل ممبرشپ جي اسٽس کي چیک ڪريو. جيڪڏهن ختم ٿيڻ جي تاريخ گذري وڃي باوجود هي `active` ڏيکاري ٿو، ته اسٽس جو تبديل ٿيڻ نه ٿيو آهي. عام سبب:

- **ممبرشپ خود بخود نئين ٿي رهيو آهي (auto-renewing)**: ممبرشپ ايديت پيچ کي `auto_renew` فیلڊ ڏسو. جيڪڏهن auto-renew فعال آهي، ته ختم ٿيڻ جو cron job هيءَ ممبرشپ کي چوکي ڪري ڇڏيندو آهي -- اهو جي سڌي وابستگي پياملٽ گيتواي (payment gateway) تي فيل ہونے جي رپورٽ ڪرڻ تي آهي. توهان جي گيتوايแดش بورڊ (Stripe, PayPal) تي چیک ڪريو ته سبسڪريپشن جو اسٽس ان 맞춰 Ultimate Multisite ڏيکاري وڃي ٿو يا نه.

- **cron job چالو نه آهي**: هيءَ سٺي قدم جو نتيجا آهي.

### 4. تصديق ڪريو ته Action Scheduler چالو آهي {#4-verify-action-scheduler-is-running}

Ultimate Multisite پنهنجي cron jobs لاءِ Action Scheduler استعمال ڪري ٿو. نيٽ ورڪ اڊمن (network admin) ۾ **Tools > Scheduled Actions** تي وڃو ۽ هيٺ ڏنل کي ڏسو:

- **`wu_membership_check`** -- اهو هر ڪلاڪ هڪ عمل جي صورت ۾ ظاهر ٿيڻ گهرجي جيڪو هر ڪلاڪ چالو رهندو. جيڪڏهن هي مڪمل نه آهي، ته ممبرشپ جي تصديق ڪرڻ جو شيڊول نه ڪيو ويو آهي.
- **`wu_async_mark_membership_as_expired`** -- اهي خاص ممبرشپ کي ختم ٿيڻ جو نشان زن ڪرڻ لاءِ انفرادي ڪم آهن. جيڪڏهن توهان هيٺ فيل ٿيل عمل ڏسو، ته انهن ۾ غلطين جي ڳالهيون وضاحت ڪندڙ ميسيجز هجڻ گهرجي.

 جيڪڏهن توهان کي ڪو رڪاوٽ وارو يا فيل ٿيل عمل ڏسندو آهي، ته توهان واري Action Scheduler جو مسئلو ٿي سگهي ٿو. عام سبب:

- `wp-config.php` ۾ **`DISABLE_WP_CRON` کي `true` تي set ڪيو آهي** جڏهن ته اسان نظام-سطح cron replacement نه ڪريون ٿا
- **گھٽ سائيٽٽرڪ (Low site traffic)** -- WP-Cron صرف تڏهن چلندو آهي جڏهن ڪو شخص سائيٽ تي اچي.

اعيلي cron جو پائيدار عمل ڪرڻ کي يقيني بڻائڻ لاءِ، هڪ نظام cron job set ڪريو:

```bash
# هر 5 منٽن بعد wget جي مدد سان چلائي
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# يا WP-CLI جي ذريعي
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Gateway Webhook جو مسئلو چیک ڪريو (Auto-Renewing Memberships) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

جيڪڏهن ممبر شپ خود بخاري ٿي (auto-renewing) ۽ gateway جي سبسڪريپشن ختم ڪئي وڃي آهي يا ناڪام ٿي وڃي آهي، پر Ultimate Multisite ان کي `active` ڏيکاري ٿو:

- **Stripe**: Stripe Dashboard > Customers تي وڃو ۽ سبسڪريپشن جي حالت (subscription status) چیک ڪريو. پوءِ Developers > Webhooks ۾ webhook endpoint فعال آهي يا نه اهو تصديق ڪريو. Endpoint توهان جي سائيٽ کي پوائنٽ ڪرڻ گهرجي ۽ ڪامياب ترسی ڏيکاري ٿي.
- **PayPal**: پنهنجي PayPal business account ۾ سبسڪريپشن جي حالت چیک ڪريو ۽ IPN/webhook ترسي (delivery) تصديق ڪريو.

جيڪڏهن gateway سبسڪريپشن کي ختم ڪيو ڏيکاري ٿو پر Ultimate Multisite نه ڏيکاري، ته webhook جو نوٽيفڪي غاليب طور تي گم ٿي ويو آهي. توهان **Ultimate Multisite > Memberships > [Edit Membership]** ۾ ممبر شپ جي حالت کي مانيو (manually change) ڪري سگهو ٿا.

### 6. Expiration Grace Period (Cron Level) جو هيٺ ڏيکاريو {#6-check-the-expiration-grace-period-cron-level}

cron جو هيٺ هڪ خاص مهلت (grace period) رکي ٿو (ڊيفرٽ: 3 ڏينهن) کان اڳ ممبر شپ کي ختم ڪرڻ لاءِ mark ڪندو آهي. اهو فرونت اينڊ بلاڪ جي مهلت کان مختلف آهي. سائيٽ کي بلاک ڪرڻ کان اڳ جو جتي وقت رهي سگهي ٿو هو:

**Expiration grace period (3 ڏينهن)** + **Frontend block grace period (توهان جو set ڪيل)** = Total delay

مثال طور، ڈیفالٹ سیٹنگز اور 7 دن کے فرنٹ اینڈ گریس پیریڈ کے ساتھ، `date_expiration` کے بعد سائٹ بلاک ہونے میں 10 دن تک لگ سکتے ہیں۔

### 7. کسی ممبرشپ کو دستی طور پر ختم کرنا (Manually Expire a Membership) {#7-manually-expire-a-membership}

اگر آپ کرون سائیکل کا انتظار کیے بغیر فوری طور پر کسی سائٹ کو بلاک کرنا چاہتے ہیں، تو آپ ممبرشپ کی اسٹیٹس کو خود تبدیل کر سکتے ہیں:

1. **Ultimate Multisite > Memberships** پر جائیں
2. متاثر ہونے والی ممبرشپ پر کلک کریں
3. اس کی اسٹیٹس کو **Expired** یا **Cancelled** میں تبدیل کریں
4. **Save** پر کلک کریں

فرنٹ اینڈ بلاک اگلی پیج لوڈ پر اثر کرے گا (ختم شدہ ممبرشپ کے لیے فرنٹ اینڈ بلاک گریس پیریڈ کے تحت، یا منسوخ شدہ ممبرشپ کے لیے فوری طور پر)۔

## خلاصہ (Summary) {#summary}

اختتام کی تاریخ سے سائٹ بلاک ہونے تک مکمل وقت کا خاکہ:

```text
date_expiration گزر جاتا ہے
       |
       v
  [3-day cron grace period]     <-- ممبرشپ اب بھی فعال/منظر میں دکھتا ہے
       |
       v
  کرون ممبرشپ کو "expired" کے طور پر نشان زد کرتا ہے
       |
       v
  [Frontend Block Grace Period]  <-- Settings > Memberships میں ترتیب دیا گیا ہے
       |
       v
  سائٹ کا فرنٹ اینڈ بلاک ہو جاتا ہے
```

منسوخ شدہ ممبرشپ کے لیے، راستہ مختصر ہوتا ہے:

```text
  Membership cancelled
       |
       v
  date_expiration گزر جاتا ہے (کوئی گریس پیریڈ نہیں)
       |
       v
  سائٹ کا فرنٹ اینڈ فوری طور پر بلاک ہو جاتا ہے
```

## ڈویلپر حوالہ (Developer Reference) {#developer-reference}

یہ ہکس اور فلٹرز آپ کو ختم ہونے اور بلاک ہونے کے رویے کو اپنی مرضی کے مطابق بنانے کی اجازت دیتے ہیں:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | सदस्यता ختم ٿيڻ کان اڳ گراسي دور (grace period) ڏينهن کي فلٽر ڪريو (ڊالٽ: 3) |
| `wu_schedule_membership_check_interval` | ميمبرشپ جي جانچ ڪرڻ بجيان جو فاصلو فلٽر ڪريو (ڊالٽ: 1 ڪلاڪ) |
| `wu_membership_renewal_days_before_expiring` | ختم ٿيڻ کان ڪيترا ڏينهن اڳ تجديد جي دفعات (renewal payment) لاءِ فلٽر ڪريو (ڊالٽ: 3) |
| `wu_blocked_site_reactivation_url` | جڏهن ڪنه سائيٽ کي بلاڪ ڪيو وڃي ته ڪسائي خاص reactivation URL ڏيڻ لاءِ فلٽر ڪريو |
| `wu_membership_is_active` | فلٽر ڪريو ته ميمبرشپ کي فعال سمجھيو ويندو يا نه |
| `wu_membership_expired_check_query_params` | ختم ٿيل ميمبرشپون مليڻ لاءِ استعمال ڪيا وڃن وعقي (query parameters) کي فلٽر ڪريو |
| `wu_membership_trial_check_query_params` | ختم ٿيل trials مليڻ لاءِ استعمال ڪيا وڃن وعقي (query parameters) کي فلٽر ڪريو |
