---
title: کلاڊفليئر انٽيغريشن
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integration

## جائزہ (Overview) {#overview}
Cloudflare هڪ وڏي ڪنٽينٽ ڊليوري نيو ورڪڪ (CDN) ۽ سيڪيورٽي فراهم ڪرڻ وارو هيٺ ڏنل آهي جيڪو ويب سائيٽ کي بچائڻ ۽ گهرجي رفتار ڏيڻ ۾ مدد ڪري ٿو. هي ان انٽيغريشن جو مطلب آهي ته Ultimate Multisite ۽ Cloudflare جي وچ ۾ خودکار ڊومين مانيجمنٽ (domain management) ڪئي ويندي، خاص طور تي سوبڊومين ملٽي سائيٽن جي تنصيب لاءِ.

## خصوصيتون (Features) {#features}
- Cloudflare ۾ خودکار سوبڊومين جو نئين ٿيڻ
- پراڪسي ٿيل سوبڊومين کي سپورٽ ڪرڻ
- DNS رڪارڊ مانيجمنٽ
- Ultimate Multisite اڊمن ۾ DNS رڪارڊن جي بهتر ڏيکاري

## گهرجن (Requirements) {#requirements}
توهان پنهنجي `wp-config.php` فائل ۾ هيٺ ڏنل ڪنستان (constants) تعريف ڪرڻ گهرجي:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## ترتیب ڏيڻ جا تعليمات (Setup Instructions) {#setup-instructions}

### 1. پنهنجو Cloudflare API Key حاصل ڪريو {#1-get-your-cloudflare-api-key}

1. پنهنجي Cloudflareแดش بورڊ ۾ لاگ ان ڪريو
2. "My Profile" تي وڃو (اوپري هيٺ ڪنار ۾ پنهنجي ايميل تي ڪلڪ ڪريو)
3. منيو کان "API Tokens" چونڊيو
4. هيٺ ڏنل اجازت ناهن سان هڪ نون API token banaيو:
   - Zone.Zone: Read (پڙهڻ لاءِ)
   - Zone.DNS: Edit (تبديلي ڪرڻ لاءِ)
5. پنهنجو API token ڪاپي ڪريو

### 2. پنهنجو Zone ID حاصل ڪريو {#2-get-your-zone-id}

1. پنهنجي Cloudflareแดش بورڊ ۾، ان ڊومين کي چونڊيو جنهن جو توهان استعمال ڪرڻ چاهيو
2. Zone ID "Overview" ٽاب ۾، "API" جي هيٺ ڏنل سائیڊبين ۾ نظر اچي ٿو
3. Zone ID ڪاپي ڪريو

### 3. wp-config.php ۾ ڪنستان شامل ڪريو {#3-add-constants-to-wp-configphp}

هيٺ ڏنل ڪنستان پنهنجي `wp-config.php` فائل ۾ شامل ڪريو:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. انٽيغريشن کي فعال ڪريو (Enable the Integration) {#4-enable-the-integration}

1. پنهنجي WordPress اڊمن ۾، Ultimate Multisite > Settings تي وڃو
2. "Domain Mapping" ٽاب ڏانهن وڃو
3. "Host Integrations" تي لغلڪ ڪريو
4. Cloudflare انٽيغريشن کي فعال ڪريو (Enable)
5. "Save Changes" تي ڪلڪ ڪريو

## اهو ڪيئن کام ڪري ٿو (How It Works) {#how-it-works}

### سوبڊومين مانيجمنٽ (Subdomain Management) {#subdomain-management}

جيڪڏهن هڪ نئين سائيٽ کي سوبڊومين ملٽي سائيٽ تنصيب ۾ banaيو وڃي:

1. اس انٹیگریشن ڪلاؤڈفليئر جي API تائين هڪ سوبڊومين لاءِ CNAME رڪڊ شامل ڪرڻ لاءِ درخواست پيحل ٿو.
2. سوبڊومين کي بالعمومي طور تي ڪلاؤڈفليئر ذريعي پراڪسي (proxy) ڪرڻ لاءِ ترتیب ڏني آهي (اهڙي شيءِ فلٽرن سان بدلون ڪري سگهجي ٿي).
3. جڏهن هڪ سائٽ مڪمل طور تي حذف ڪئي ويندي، ته ان انٹیگريشن طرفان سوبڊومين کي ڪلاؤڈفليئر کان کڻي ختم ڪيو ويندو.

### DNS رڪڊ جو ڏيکاري (DNS Record Display) {#dns-record-display}

اهو انٹیگريشن Ultimate Multisite جي اديث ۾ DNS رڪڊ جي ڏيکاري کي بهتر بڻائي ٿو جنهن طريقن سان:

1. ڪلاؤڈفليئر کان DNS رڪڊز کي سڌو ڳولي (Fetch) ٿو
2. اهو ڏيکاري ٿو ته رڪڊز پراڪسي آهن يا نه آهن
3. DNS رڪڊز بابت اضافي معلومات ڏيکاري ٿو

## ڪلاؤڈفليئر ڪسٹم هوسناما (Cloudflare Custom Hostnames) {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (پہلے "Cloudflare for SaaS" چيو ويندو هو) هڪ Cloudflare جي خاصيت آهي جيڪا توهان جي گهرجي کي SSL سان پنهنجي خود دامنن جو استعمال ڪرڻ جي اجازت ڏئي ٿي ان توهان جي ملٽي سائيٽ نڪري ۾. اهو domain-mapped ملٽي سائيٽ نصب علائقن لاءِ سفارش ڪيل طريقو آهي جيڪي Cloudflare استعمال ڪن، ڇاڪاڻ ته Cloudflare هر ڪسٹم دومين لاءِ SSL سرٽيفڪيٽ جو ڏيکاري ۽ تجديد خود بخود سنڀالندو آهي.

### اها standard Cloudflare انٹیگريشن کان ڪيئن مختلف آهي {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standard integration | Cloudflare Custom Hostnames |
|---|---|---|
| **مقصد** | سوبڊومين لاءِ DNS رڪڊز خود بخود ٺاهڻ | Cloudflare سنڀاليل SSL سان ڪسٹم (مئپ ٿيل) دومين کي قابل بڻائڻ |
| **سبل آهي** | سوبڊومين ملٽي سائيٽ | دومين-مئپ ٿيل ملٽي سائيٽ |
| **SSL** | الگ کان سنڀاليو ويندو آهي | Cloudflare طرفان خود بخود سنڀاليو ويندو آهي |

### Cloudflare Custom Hostnames کي ترتیب ڏيڻ (Setting up Cloudflare Custom Hostnames) {#setting-up-cloudflare-custom-hostnames}

1. توهان جي Cloudflare dashboard ۾، پنهنجي مين ڈومین لاءِ زون کي اوپن ڪريو.
2. **SSL/TLS > Custom Hostnames** تي وڃو.
3. توهان جي سرور جي IP يا نام (hostname) تي پوائنٽ ڪندي هڪ fallback origin شامل ڪريو.
4. Ultimate Multisite ۾ هر گهرجي (customer domain) لاءِ، Cloudflare ۾ هڪ Custom Hostname entry شامل ڪريو. توهان هيءَ قدم کي Cloudflare API استعمال ڪري خودکار بنا سگهو ٿا.
5. جڏهن به ڪنه گهرجي جي DNS توهان جي نڪر (network) تي پوائنٽ ڪئي ويندي آهي، ته Cloudflare خود بخود هر custom hostname لاءِ TLS certificates ڇڏي ۽ تجديد ڪري ڇڏيندو.

پوري API reference لاءِ، [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) ڏسو.

:::note اصطلاح ۾ تبديلين
Ultimate Multisite v2.6.1 کان، هيءَ خاصيت کي پنهنجي سڀني plugin settings ۽ labels ۾ **Cloudflare Custom Hostnames** چيو ويندو آهي. پراني، اڳوڻن نسخهن ۾ "Cloudflare for SaaS" جو نالو استعمال ڪيو هو، جيڪو Cloudflare جي بنيادي product جو نالو آهي.
:::

## اهم نوٽس {#important-notes}

Cloudflare جي تازي اپڊيٽ کان، wildcard proxying هميشه تمام گهرجي لاءِ موجود آهي. ان جو مطلب اهو آهي ته subdomain multisite installation لاءِ standard Cloudflare DNS integration اڳي وانگر اهم نه رهيو آهي، ڇاڪاڻ ته توهان سڌو طرح Cloudflare ۾ هڪ wildcard DNS record set ڪري سگهو ٿا.

## گلاپ حل (Troubleshooting) {#troubleshooting}

### API ڪنيڪشن جي مسئلن {#api-connection-issues}
- تصديق ڪريو ته توهان جو API token صحيح آهي ۽ ان کي لازمي اجازتون آهن.
- چیک ڪريو ته توهان جو Zone ID صحيح آهي.
- ٺهيل شيءِ هيٺ ڏسو ته توهان جي Cloudflare account ۾ لازمي اجازتون موجود آهن.

### Subdomain شامل نه ٿيو {#subdomain-not-added}
- ڪنه به غلطي جو پیغام لکڻ لاءِ Ultimate Multisite جي logs کي چيڪ ڪريو.
- تصديق ڪريو ته subdomain پنهنجي خود Cloudflare ۾ شامل نه آهي.
- ٺهيل شيءِ هيٺ ڏسو ته توهان جي Cloudflare plan توهان جيڪا DNS records bana رهيا آهيون ان تعداد کي سپورٽ ڪندي آهي.

### پراکسی جي مسئلاڪات (Proxying Issues) {#proxying-issues}
- جيڪڏهن توهان چاهيو ته ڪنهن سابڊومين (subdomains) کي پراکسی نه ڪجي، ته توهان `wu_cloudflare_should_proxy` فلٽر استعمال ڪري سگهو ٿا.
- ڪجهه خاص خصوصيتون پراکسی ڪرڻ کان پوءِ صحيح طور تي کام نه ڪري سگهن ٿيون (جنهن ۾ ڪجهه وڏي WordPress اڊمن فنڪشون شامل آهن).
- اڊمن صفحات لاءِ ڪيڪش (cache) کي چٽڻ لاءِ Cloudflare جا Page Rules استعمال ڪرڻ بابت سوچيو.
