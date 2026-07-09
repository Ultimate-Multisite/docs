---
title: کلاڊفليئر انٽيغريشن
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# ক্লাউডফ্লেয়ার ইন্টিগ্রেশন (Cloudflare Integration) {#cloudflare-integration}

## ওভারভিউ (Overview) {#overview}
ক্লাউডফ্লেয়ার হলো একটি শীর্ষস্থানীয় কন্টেন্ট ডেলিভারি নেটওয়ার্ক (CDN) এবং সিকিউরিটি প্রোভাইডার যা ওয়েবসাইটগুলিকে রক্ষা করতে এবং দ্রুত করতে সাহায্য করে। এই ইন্টিগ্রেশনটি Ultimate Multisite এবং Cloudflare-এর মধ্যে স্বয়ংক্রিয় ডোমেইন ম্যানেজমেন্ট সক্ষম করে, বিশেষ করে সাবডোমেইন মাল্টিসাইট ইনস্টলেশনের ক্ষেত্রে।

## বৈশিষ্ট্যসমূহ (Features) {#features}
- ক্লাউডফ্লেয়ারে স্বয়ংক্রিয় সাবডোমেইন তৈরি করা
- প্রক্সি করা সাবডোমেইন সাপোর্ট
- DNS রেকর্ড ম্যানেজমেন্ট
- Ultimate Multisite অ্যাডমিনে উন্নত DNS রেকর্ড প্রদর্শন

## প্রয়োজনীয়তা (Requirements) {#requirements}
আপনার `wp-config.php` ফাইলে নিম্নলিখিত কনস্ট্যান্টগুলি সংজ্ঞায়িত করতে হবে:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## সেটআপ নির্দেশাবলী (Setup Instructions) {#setup-instructions}

### ১. আপনার ক্লাউডফ্লেয়ার API কী সংগ্রহ করুন (Get Your Cloudflare API Key) {#1-get-your-cloudflare-api-key}

১. আপনার ক্লাউডফ্লেয়ার ড্যাশবোর্ডে লগইন করুন।
২. "My Profile"-এ যান (উপরে ডানদিকে আপনার ইমেলের উপর ক্লিক করুন)।
৩. মেনু থেকে "API Tokens" নির্বাচন করুন।
৪. নিম্নলিখিত পারমিশন সহ একটি নতুন API টোকেন তৈরি করুন:
   - Zone.Zone: Read
   - Zone.DNS: Edit
৫. আপনার API টোকেনটি কপি করুন।

### ২. আপনার জোন আইডি সংগ্রহ করুন (Get Your Zone ID) {#2-get-your-zone-id}

১. আপনার ক্লাউডফ্লেয়ার ড্যাশবোর্ডে, আপনি যে ডোমেইনটি ব্যবহার করতে চান সেটি নির্বাচন করুন।
২. "Overview" ট্যাবে, "API"-এর অধীনে ডানদিকের সাইডবারে জোন আইডি দেখতে পাবেন।
৩. জোন আইডি কপি করুন।

### ৩. wp-config.php এ কনস্ট্যান্ট যোগ করুন (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

আপনার `wp-config.php` ফাইলে নিম্নলিখিত কনস্ট্যান্টগুলি যোগ করুন:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### ৪. ইন্টিগ্রেশন সক্ষম করুন (Enable the Integration) {#4-enable-the-integration}

১. আপনার ওয়ার্ডপ্রেস অ্যাডমিন থেকে, Ultimate Multisite > Settings-এ যান।
২. "Domain Mapping" ট্যাবে যান।
৩. নিচে স্ক্রল করে "Host Integrations"-এ যান।
৪. ক্লাউডফ্লেয়ার ইন্টিগ্রেশন চালু করুন (Enable)।
৫. "Save Changes" ক্লিক করুন।

## এটি কিভাবে কাজ করে (How It Works) {#how-it-works}

### সাবডোমেইন ম্যানেজমেন্ট (Subdomain Management) {#subdomain-management}

যখন একটি সাবডোমেইন মাল্টিসাইট ইনস্টলেশনে নতুন সাইট তৈরি করা হয়:

1. اس انٹیگریشن ڪلاڊفلير جي API تائين هڪ سوبڊومين لاءِ CNAME رڪڊ شامل ڪرڻ لاءِ درخواست پيحل ٿو.
2. سوبڊومين کي डिफल्ट रूप ۾ ڪلاڊفلير ذريعي پراڪسي (proxy) ڪرڻ لاءِ ترتیب ڏني آهي (پذيرن سان ان کي بدلون سگهجي ٿي).
3. جڏهن ڪنه سائٽ کي مڪمل طور تي حذف ڪيو ويندو، ته اس انٹیگریشن سوبڊومين کي ڪلاڊفلير کان کڻي ڇڏي ويندو.

### DNS رڪڊ جو ڏيکاري (DNS Record Display) {#dns-record-display}

اس انٹیگريشن سنڀال ڪندڙ (admin) ۾ Ultimate Multisite جي DNS رڪڊ ڏيکاري کي بهتر بڻائي ٿو:

1. ڪلاڊفلير کان DNS رڪڊز کي سڌي ڳولڻ (Fetch ڪرڻ).
2. اهو ڏيکاري ته رڪڊز پراڪسي آهن يا نه آهن.
3. DNS رڪڊز بابت اضافي معلومات ڏيکاري.

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (پehle "Cloudflare for SaaS" جي نالي سان جاني ٿو) ڪلاڊفلير جو هڪ خاص ڪم آهي جيڪا توهان جي گهرجي کي SSL سان پنهنجي خودي دومين (domain) استعمال ڪرڻ جي اجازت ڏئي ٿي ان توهان جي ملٽي سائيٽ نڪري ۾. اهو ان لاءِ سفارش ڪيل طريقو آهي جتي دومين مپ ڪيل ملٽي سائيٽ نصب ٿيل هوندي جيڪا ڪلاڊفلير استعمال ڪري ٿي، ڇاڪن ڪلاڊفلير هر خودي دومين لاءِ SSL سرٽيفڪيٽ جي ڇڏڻ ۽ تجديد کي خود بخود سنڀالندو آهي.

### اسان standard Cloudflare integration کان فرق ڪي ٿو {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standard integration | Cloudflare Custom Hostnames |
|---|---|---|
| **مقصد** | سوبڊومين لاءِ DNS رڪڊز خود بخود ٺاهڻ | ڪلاڊفلير سنڀاليل SSL سان خودي (mapped) دومين کي قابل بڻائڻ |
| **سبل آهي** | سوبڊومين ملٽي سائيٽ | دومين مپ ڪيل ملٽي سائيٽ |
| **SSL** | الگ کان سنڀاليو ويندو | ڪلاڊفلير طرفان خود بخود سنڀاليو ويندو |

### Cloudflare Custom Hostnames کي ترتیب ڏيڻ (Setting up) {#setting-up-cloudflare-custom-hostnames}

1. توهان جي Cloudflare dashboard ۾، پنهنجي مين ڈومین لاءِ زون (zone) खोल्दो.
2. **SSL/TLS > Custom Hostnames** تي وڃو.
3. توهان جي سرور جي IP يا hostname طرف پوائنٽ ڪندي هڪ fallback origin شامل ڪريو.
4. Ultimate Multisite ۾ هر گهرجي (customer domain) لاءِ، Cloudflare ۾ هڪ Custom Hostname entry شامل ڪريو. توهان هيءَ قدم کي Cloudflare API استعمال ڪري خودکار بنا سگهو ٿا.
5. جڏهن به ڪنه گهرجي جي DNS توهان جي نڪر (network) تي پوائنٽ ڪئي ويندي آهي، ته Cloudflare خود بخود هر custom hostname لاءِ TLS certificates ڇڏي ۽ تجديد ڪري ڇڏيندو.

پوري API reference لاءِ، [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) ڏسو.

:::note اصطلاحات جو تبديلو
Ultimate Multisite v2.6.1 کان، هيءَ ڪارڪردگي (feature) پنهنجي سڀني plugin settings ۽ labels ۾ **Cloudflare Custom Hostnames** جي نال رکي ويندي آهي. پراني، اڳوڻن نسخهن ۾ "Cloudflare for SaaS" جو نالو استعمال ٿيندو هو، جيڪو Cloudflare جو اصل product نالو آهي.
:::

## اهم نوٽس (Important Notes) {#important-notes}

Cloudflare جي تازن اپڊيٽس کان، wildcard proxying هميشه تمام گهرجي لاءِ موجود آهي. ان جو مطلب اهو آهي ته subdomain multisite installation لاءِ standard Cloudflare DNS integration اڳي وانگر اهم نه رهيو آهي، ڇاڪاڻ ته توهان سڌو طرح Cloudflare ۾ هڪ wildcard DNS record set ڪري سگهو ٿا.

## گهريلو مسئلا حل ڪرڻ (Troubleshooting) {#troubleshooting}

### API ڪنيڪشن جو مسئلو {#api-connection-issues}
- تصديق ڪريو ته توهان جو API token صحيح آهي ۽ ان کي ضروري اجازت ناهن؟
- چیک ڪريو ته توهان جو Zone ID صحيح آهي.
- ٺيڪ ڪريو ته توهان جي Cloudflare account ۾ ضروري اجازتون موجود آهن.

### Subdomain شامل نه ٿيو {#subdomain-not-added}
- ڪنه به غلطي جو پیغام ڏسڻ لاءِ Ultimate Multisite logs کي چيڪ ڪريو.
- تصديق ڪريو ته subdomain پنهنجي خود بخود Cloudflare ۾ شامل نه آهي.
- ٺيڪ ڪريو ته توهان جي Cloudflare plan توهان جيڪا DNS records bana رهيا آهيون ان تعداد کي سپورٽ ڪندي آهي.

### پراڪسي جي مسئلا (Proxying Issues) {#proxying-issues}
- جيڪڏهن توهان چاهيو ته ڪنهن سابڊومين (subdomains) کي پراڪس نه ڪجي، ته توهان `wu_cloudflare_should_proxy` فلٽر استعمال ڪري سگهو ٿا.
- ڪجهه خصوصيتون پراڪسي ڪرڻ کان پوءِ صحيح طور تي کام نه ڪري سگهن ٿيون (جنهن ۾ ڪجهه وڌيڪ WordPress اڊمن فنکشن شامل آهن).
- اڊمن صفحات لاءِ ڪيڪش (cache) کي چالو ڪرڻ کان بچڻ لاءِ Cloudflare جا Page Rules استعمال ڪرڻ تي غور ڪريو.
