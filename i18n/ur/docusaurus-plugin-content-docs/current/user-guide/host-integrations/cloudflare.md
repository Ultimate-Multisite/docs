---
title: Cloudflare انضمام
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare انضمام {#cloudflare-integration}

## جائزہ {#overview}
Cloudflare ایک معروف مواد ترسیل نیٹ ورک (CDN) اور سیکیورٹی فراہم کنندہ ہے جو ویب سائٹس کو محفوظ بنانے اور تیز کرنے میں مدد کرتا ہے۔ یہ انضمام Ultimate Multisite اور Cloudflare کے درمیان خودکار ڈومین انتظام کو فعال کرتا ہے، خاص طور پر ذیلی ڈومین ملٹی سائٹ تنصیبات کے لیے۔

## خصوصیات {#features}
- Cloudflare میں خودکار ذیلی ڈومین تخلیق
- پراکسی شدہ ذیلی ڈومین سپورٹ
- DNS ریکارڈ انتظام
- Ultimate Multisite ایڈمن میں بہتر DNS ریکارڈ ڈسپلے

## تقاضے {#requirements}
درج ذیل constants آپ کی `wp-config.php` فائل میں define ہونے چاہئیں:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## سیٹ اپ ہدایات {#setup-instructions}

### 1. اپنی Cloudflare API Key حاصل کریں {#1-get-your-cloudflare-api-key}

1. اپنے Cloudflare dashboard میں لاگ اِن کریں
2. "میرا پروفائل" پر جائیں (اوپر دائیں کونے میں اپنی ای میل پر کلک کریں)
3. مینو سے "API Tokens" منتخب کریں
4. درج ذیل اجازتوں کے ساتھ نیا API token بنائیں:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. اپنا API token کاپی کریں

### 2. اپنی Zone ID حاصل کریں {#2-get-your-zone-id}

1. اپنے Cloudflare dashboard میں، وہ ڈومین منتخب کریں جسے آپ استعمال کرنا چاہتے ہیں
2. Zone ID "جائزہ" ٹیب میں، دائیں sidebar میں "API" کے تحت نظر آتی ہے
3. Zone ID کاپی کریں

### 3. wp-config.php میں Constants شامل کریں {#3-add-constants-to-wp-configphp}

درج ذیل constants اپنی `wp-config.php` فائل میں شامل کریں:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. انضمام فعال کریں {#4-enable-the-integration}

1. اپنے WordPress ایڈمن میں، Ultimate Multisite > Settings پر جائیں
2. "ڈومین میپنگ" ٹیب پر جائیں
3. "ہوسٹ انضمامات" تک نیچے سکرول کریں
4. Cloudflare انضمام فعال کریں
5. "تبدیلیاں محفوظ کریں" پر کلک کریں

## یہ کیسے کام کرتا ہے {#how-it-works}

### ذیلی ڈومین انتظام {#subdomain-management}

جب ذیلی ڈومین ملٹی سائٹ تنصیب میں نئی سائٹ بنائی جاتی ہے:

1. انضمام Cloudflare کی API کو ذیلی ڈومین کے لیے CNAME ریکارڈ شامل کرنے کی درخواست بھیجتا ہے
2. ذیلی ڈومین کو بطور ڈیفالٹ Cloudflare کے ذریعے پراکسی ہونے کے لیے configure کیا جاتا ہے (اسے filters کے ذریعے تبدیل کیا جا سکتا ہے)
3. جب کوئی سائٹ حذف کی جاتی ہے، انضمام ذیلی ڈومین کو Cloudflare سے ہٹا دے گا

### DNS ریکارڈ ڈسپلے {#dns-record-display}

انضمام Ultimate Multisite ایڈمن میں DNS ریکارڈ ڈسپلے کو اس طرح بہتر بناتا ہے:

1. Cloudflare سے براہِ راست DNS records حاصل کرنا
2. دکھانا کہ records پراکسی شدہ ہیں یا نہیں
3. DNS records کے بارے میں اضافی معلومات دکھانا

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (پہلے "Cloudflare for SaaS" کہلاتا تھا) Cloudflare کی ایک خصوصیت ہے جو آپ کے customers کو آپ کے ملٹی سائٹ نیٹ ورک پر SSL کے ساتھ اپنے ڈومینز استعمال کرنے دیتی ہے۔ یہ Cloudflare استعمال کرنے والی ڈومین میپ شدہ ملٹی سائٹ تنصیبات کے لیے تجویز کردہ طریقہ ہے، کیونکہ Cloudflare ہر custom domain کے لیے SSL سرٹیفکیٹ کے اجرا اور تجدید کو خودکار طور پر منظم کرتا ہے۔

### یہ معیاری Cloudflare انضمام سے کیسے مختلف ہے {#how-it-differs-from-the-standard-cloudflare-integration}

| | معیاری انضمام | Cloudflare Custom Hostnames |
|---|---|---|
| **مقصد** | ذیلی ڈومینز کے لیے DNS records خودکار طور پر بناتا ہے | Cloudflare-managed SSL کے ساتھ custom (mapped) domains فعال کرتا ہے |
| **بہترین برائے** | ذیلی ڈومین ملٹی سائٹ | ڈومین میپ شدہ ملٹی سائٹ |
| **SSL** | الگ سے سنبھالا جاتا ہے | Cloudflare خودکار طور پر منظم کرتا ہے |

### Cloudflare Custom Hostnames سیٹ اپ کرنا {#setting-up-cloudflare-custom-hostnames}

1. اپنے Cloudflare dashboard میں، اپنے مرکزی ڈومین کے لیے zone کھولیں۔
2. **SSL/TLS > Custom Hostnames** پر جائیں۔
3. اپنے سرور کے IP یا hostname کی طرف اشارہ کرنے والا fallback origin شامل کریں۔
4. Ultimate Multisite میں map کیے گئے ہر customer domain کے لیے، Cloudflare میں Custom Hostname entry شامل کریں۔ آپ Cloudflare API استعمال کر کے اس مرحلے کو خودکار بنا سکتے ہیں۔
5. جب customer کا DNS آپ کے نیٹ ورک کی طرف point ہو جاتا ہے تو Cloudflare ہر custom hostname کے لیے TLS سرٹیفکیٹس خودکار طور پر جاری اور renew کرتا ہے۔

مکمل API reference کے لیے، [Cloudflare Custom Hostnames دستاویزات](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) دیکھیں۔

:::note اصطلاحات کی تازہ کاری
Ultimate Multisite v2.6.1 کے مطابق، یہ خصوصیت تمام پلگ اِن settings اور labels میں **Cloudflare Custom Hostnames** کہلاتی ہے۔ پہلے versions میں "Cloudflare for SaaS" نام استعمال ہوتا تھا، جو بنیادی Cloudflare product name ہے۔
:::

## اہم نوٹس {#important-notes}

Cloudflare کی حالیہ updates کے مطابق، wildcard proxying اب تمام customers کے لیے دستیاب ہے۔ اس کا مطلب ہے کہ ذیلی ڈومین ملٹی سائٹ تنصیبات کے لیے معیاری Cloudflare DNS انضمام پہلے کے مقابلے میں کم اہم ہے، کیونکہ آپ Cloudflare میں آسانی سے wildcard DNS record سیٹ اپ کر سکتے ہیں۔

## مسئلہ حل کرنا {#troubleshooting}

### API کنکشن مسائل {#api-connection-issues}
- تصدیق کریں کہ آپ کا API token درست ہے اور اس کے پاس ضروری اجازتیں ہیں
- چیک کریں کہ آپ کی Zone ID درست ہے
- یقینی بنائیں کہ آپ کے Cloudflare account کے پاس ضروری اجازتیں ہیں

### ذیلی ڈومین شامل نہیں ہوا {#subdomain-not-added}
- کسی بھی error messages کے لیے Ultimate Multisite logs چیک کریں
- تصدیق کریں کہ ذیلی ڈومین پہلے ہی Cloudflare میں شامل نہیں ہے
- یقینی بنائیں کہ آپ کا Cloudflare plan آپ کے بنائے جانے والے DNS records کی تعداد کو سپورٹ کرتا ہے

### پراکسی کرنے کے مسائل {#proxying-issues}
- اگر آپ نہیں چاہتے کہ ذیلی ڈومینز پراکسی ہوں، تو آپ `wu_cloudflare_should_proxy` filter استعمال کر سکتے ہیں
- پراکسی ہونے پر کچھ خصوصیات درست طور پر کام نہیں کر سکتیں (مثلاً، کچھ WordPress ایڈمن functions)
- ایڈمن صفحات کے لیے cache کو bypass کرنے کے لیے Cloudflare کے Page Rules استعمال کرنے پر غور کریں
