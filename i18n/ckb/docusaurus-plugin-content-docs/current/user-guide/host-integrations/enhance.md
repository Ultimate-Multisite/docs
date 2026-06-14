---
title: بۆ بەهێزکردنی یەکگرتوویی پۆلێکی کۆنترۆڵ
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# باشترکردنی ئەگرۆپ کنترۆڵ پینلەکە

## گشتیارییەکە
Enhance یەکێکە لە پینلەکانی کۆنترۆڵ کە تواناکانی بەهێزی ئۆتۆماتیک و بەڕێوەبردنی هاستکردنی پێشکەش دەکات. ئەم یەکگرتووکارییە دەبێتە هۆی هەڵسُواریی خودی (domain syncing) و بەڕێوەبردنی گوازارەکانی SSL لە نێوان Ultimate Multisite و Enhance Control Panelدا بێت.

**دیسکۆرسێکی پەیوەندیدار:** بۆ چاوەڕوانی شێوازی کۆمەڵگایەکە و زانیاری زیاتر، سەردانی [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) بکە.

## تایبەتمەندییەکان
- هەڵسُواریی خودی ئۆتۆماتیک کاتێک دۆمنەکان لە Ultimate Multisite دا مێپ (map) دەکرێنەوە
- پێشکەشکردنی گوازار SSL بە شێوەیەکی ئۆتۆماتیک لە ڕێگەی LetsEncrypt کاتێک DNSی چارەسەر دەبێت
- پشتگیریکردنی subdomain بۆ تۆڕەکان کە بە شێوازی subdomain کار دەکەن
- هەڵماردنی دۆمن کاتێک مێپەکان دیار دەکرێنەوە

## پێداویستییەکان

### پێداویستییەکانی سیستەم
- Enhance Control Panel دامەزرێنراوە و دەگۆڕدرێت (accessible) بێت
- دامەزراندنی WordPress Multisite کە لەسەر یەکێری Enhance یان بەو سەرچاوەیە بوونی هەبێت

### دەستگەیشتنی API
دەبێت دەستگەیشتنی Administrator بۆ Enhance Control Panel هەبێت بۆ دروستکردنی API tokens.

## گرتۆڕی API خۆت وەربگرە

### ١. دروستکردنی API Token

١. وەرگرتوو لە Enhance Control Panelەکەت بە دۆخی Administrator
٢. لە مێناوه‌ی منو的一 (navigation menu) سەر **Settings** بڵێژە
٣. بگواشبە **Access Tokens**
٤. سەری **Create Token** بڵێژە
٥. ناوی وەسفێکی دیار بۆ tokenەکە بدە (بۆ نموونە: "Ultimate Multisite Integration")
٦. ڕۆڵی **System Administrator** پێ بدە
٧. بۆ بەردەوام بوونی کارکردن (expiry date):
   - ئەگەر پەت بێدەنگ بکە، بۆ ئەوەی tokenەکە هەرگیز کۆتایی نەبێت
   - یان مەرجێکی دیار بۆ کۆتایی هاتنی خerdin لەبارەی ئاسایشی تایبەت بەو مەبەست

٨. سەری **Create** بڵێژە

پاش در آمدن، **Access Token** و **Organization ID** شما نمایش داده خواهد شد. **این‌ها را فوراً ذخیره کنید** زیرا توکن فقط یک بار نمایش داده می‌شود.

### ۲. دریافت Organization ID (شناسه سازمان)

Organization ID صفحه Access Tokens در یک جعبه اطلاعاتی آبی با برچسب "Org ID: {your_id}" نمایش داده می‌شود.

Organization ID یک UUID است که به این شکل قالب‌بندی شده است: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

شما همچنین می‌توانید Organization ID مشتری را با انجام مراحل زیر پیدا کنید:
۱. به صفحه **Customers** بروید
۲. روی **Manage customer** برای مشتری مربوطه کلیک کنید
۳. به URL نگاه کنید - Organization ID حروف الفبایی بعد از `/customers/` است.

### ۳. دریافت Server ID (شناسه سرور)

برای پیدا کردن Server ID خود (که برای عملیات دامنه مورد نیاز است):

۱. در Enhance Control Panel، به **Servers** بروید
۲. روی سروری که نصب وردپرس شما روی آن اجرا می‌شود کلیک کنید
۳. Server ID (قالب UUID) در URL یا جزئیات سرور قابل مشاهده خواهد بود
۴. به عنوان جایگزین، می‌توانید از API برای لیست کردن سرورها استفاده کنید:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID از قالب UUID زیر پیروی می‌کند: `00000000-0000-0000-0000-000000000000`

### ۴. دریافت API URL (آدرس API)

API URL شما آدرس Enhance Control Panel با اضافه کردن `/api/` است:

```
https://your-enhance-panel.com/api/
```

**نکته مهم:** مسیر `/api/` الزامی است. اشتباهات رایج شامل موارد زیر است:
- استفاده فقط از دامنه بدون `/api/`
- استفاده از HTTP به جای HTTPS (برای امنیت نیاز به HTTPS دارید)

## پیکربندی

### ثابت‌های مورد نیاز

ثابت‌های زیر را در فایل `wp-config.php` خود اضافه کنید:

// باشترکردن ئەندۆڵەی کۆنترۆڵ پینلەکە (Control Panel)

define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### ڕێکخستن لە ڕێگەی ئامێرە یەکگرتوو (Integration Wizard)

1. لە بەڕێوەبردنی WordPress، بگواشبە **Ultimate Multisite** > **Settings**.
2. بۆ داشکەری **Integrations** (یەکگرتووان)، دەربکەوتە.
3. **Enhance Control Panel Integration**-ی بدۆزەوە و **Configuration** بکە.
4. ئامێرەکە بەپێی هەنگاوەکان ڕێنمایی دەکاتت:
   - **هەنگاوی یەکەم:** پێشەنگ و بینینی تایبەتمەندییەکان.
   - **هەنگاوی دووەم:** بڕوانامەکانی API خۆت بنووسە (Token، API URL، Server ID).
   - **هەنگاوی سێیەم:** پەیوەندییەکە تاقیکردنەوە بکە.
   - **هەنگاوی چوارەم:** پشکنین و چالاککردن.

دەتوانی هەڵبژێریت:
- ڕێگە بدات ئامێرەکە بە شێوەیەکی خۆکار دەستکاریی ئەم constants-انە لە فایل `wp-config.php` بکات.
- پێکهاتەکانی constant (constants) کۆپی بکات و بە دەستی زیاد بکات.

## ڕێکخستنی زیاتر بۆ WordPress

بۆ ئەوەی بتوانیت ئەم ڕێکخستنە زیاد بکەیت، لەسەر بنەمای فیدبەکردنی کۆمەڵگاکان ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265))، پێویستە ئەم ڕێکخستنە زیاد بکەیت:

### ڕێکخستنی .htaccess

ئەگەر کێشەیەک لەگەڵ مۆدێلکردنی ناوچەکانی (domain mapping) هەبوو:
1. فایلەکە `.htaccess`ی سەرەکی Enhance دەبڕیت.
2. بە فایل `.htaccess`ی ستاندارد ی WordPress بۆی جابە دەکەیت.

### constants-ی Cookie

ئەم constant-انە زیاد بکە لە `wp-config.php` بۆ ئەوەی maneووی Cookie بە شێوەیەکی دروست لەسەر ناوچەکانی مۆدێلکراوەکان بێت:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## چۆن کار دەکات؟

### کاتێک ناوچێک مۆدێل دەکرێت (When a Domain is Mapped)

١. वापरकर्ता Ultimate Multisite (किंवा सबडोमेन मोडमध्ये नवीन साइट तयार केली जाते) मध्ये कस्टम डोमेन मॅप करतो
٢. इंटिग्रेशन Enhance च्या API कडे POST विनंती पाठवते: `/servers/{server_id}/domains`
٣. Enhance तुमच्या सर्व्हर कॉन्फिगरेशनमध्ये डोमेन जोडतो
٤. जेव्हा DNS तुमच्या सर्व्हरला रिझॉल्व्ह होतो, तेव्हा Enhance आपोआप Let'sEncrypt द्वारे SSL प्रमाणपत्र पुरवतो
٥. डोमेन HTTPS सह सक्रिय होतो

### जेव्हा डोमेन काढला जातो

١. Ultimate Multisite मध्ये डोमेन मॅपिंग डिलीट केले जाते
٢. इंटिग्रेशन डोमेनची ID शोधण्यासाठी Enhance ला क्वेरी करतो
٣. खालील पत्त्यावर DELETE विनंती पाठवली जाते: `/servers/{server_id}/domains/{domain_id}`
٤. Enhance तुमच्या सर्व्हर कॉन्फिगरेशनमधून डोमेन काढून टाकतो

### DNS आणि SSL तपासणी

Ultimate Multisite मध्ये अंगभूत DNS आणि SSL तपासणी आहे:
- तुम्ही **Domain Mapping Settings** मध्ये तपासणीची वेळ (डिफॉल्ट: ३०० सेकंद/५ मिनिटे) सेट करू शकता
- डोमेन सक्रिय करण्यापूर्वी सिस्टम DNS प्रसार (propagation) सत्यापित करेल
- SSL प्रमाणपत्र वैधता आपोआप तपासली जाते
- Enhance आपोआप SSL पुरवतो, त्यामुळे मॅन्युअल SSL कॉन्फिगरेशन करण्याची गरज नसते

## सेटअपची पडताळणी करणे

### कनेक्शनची चाचणी घेणे

१. इंटिग्रेशन विझार्डमध्ये, **Test Connection** टप्पा वापरा
२. प्लगइन तुमच्या सर्व्हरवरील डोमेन सूचीबद्ध करण्याचा प्रयत्न करेल
३. एक यशस्वी संदेश खालील गोष्टींची पुष्टी करतो:
   - API क्रेडेन्शियल्स बरोबर आहेत
   - API URL ॲक्सेस करण्यायोग्य आहे
   - सर्व्हर ID वैध आहे
   - परवानग्या योग्यरित्या सेट केल्या आहेत

### डोमेन मॅप केल्यानंतर

१. Ultimate Multisite मध्ये एक चाचणी डोमेन मॅप करा
२. Ultimate Multisite लॉग तपासा (**Ultimate Multisite** > **Logs** > **integration-enhance**)
३. Enhance कंट्रोल पॅनलमध्ये सत्यापित करा की डोमेन जोडला गेला आहे:
   - **Servers** > **Your Server** > **Domains** वर जा
   - नवीन डोमेन या यादीत दिसला पाहिजे
४. एकदा DNS प्रसार झाल्यावर, SSL आपोआप पुरवले गेले आहे याची खात्री करा

## Çözümleme (Troubleshooting)

### API Bağlantı Sorunları

**Hata: "Enhance API'ye bağlanılamadı"**
- `WU_ENHANCE_API_URL` değişkeninin sonunda `/api/` olduğundan emin olun.
- HTTP yerine HTTPS kullandığınızdan emin olun.
- Enhance panelinin WordPress sunucunuzdan erişilebilir olup olmadığını kontrol edin.
- Bağlantıyı engelleyen herhangi bir güvenlik duvarı kuralı olup olmadığını kontrol edin.

**Hata: "Enhance API Token bulunamadı"**
- `WU_ENHANCE_API_TOKEN` değişkeninin `wp-config.php` dosyasında tanımlı olduğundan emin olun.
- Token'ın Enhance'te silinmediğinden veya süresinin dolmadığından emin olun.
- Token değerinde yazım hatası olup olmadığını kontrol edin.

**Hata: "Sunucu Kimliği yapılandırılmamış"**
- `WU_ENHANCE_SERVER_ID` değişkeninin `wp-config.php` dosyasında tanımlı olduğundan emin olun.
- Sunucu Kimliğinin geçerli bir UUID formatında olduğundan emin olun.
- Sunucunun Enhance panelinizde mevcut olup olmadığını doğrulayın.

### Alan Adı Eklenmemiş Olması

**Logları kontrol edin:**
1. **Ultimate Multisite** > **Logs** bölümüne gidin.
2. Filtreyi **integration-enhance** olarak ayarlayın.
3. Sorunu gösteren hata mesajlarını arayın.

**Yaygın nedenler:**
- Geçersiz alan adı formatı.
- Alan adının Enhance'te zaten mevcut olması.
- Yetersiz API izinleri (token'ın Sistem Yöneticisi rolüne sahip olduğundan emin olun).
- Sunucu Kimliğinin Enhance'teki gerçek sunucu ile eşleşmemesi.

### SSL Sertifikası Sorunları

**SSL sağlanmıyor:**
- DNS'in sunucunuzun IP adresine işaret ettiğini doğrulayın.
- Alan adının doğru çözümlendiğinden emin olun: `nslookup yourdomain.com`
- Enhance, SSL sağlayabilmeden önce DNS'in çözülmesini gerektirir.
- SSL sağlanması genellikle DNS yayılımından sonra 5-10 dakika sürer.
- SSL ile ilgili hatalar için Enhance Kontrol Paneli loglarını kontrol edin.

**Enhance'te Manuel SSL Sorun Giderme:**
1. **Servers** > **Your Server** > **Domains** bölümüne gidin.
2. Alan adınızı bulun ve SSL durumunu kontrol edin.
3. Gerekirse SSL sağlanmasını manuel olarak tetikleyebilirsiniz.

### DNS Kontrol Aralığı

ئەگەر دامێنی یان سێلسڵ گوازارن بۆ کەمتر لە دوایکردنی دەبێت:
1. بگە بە **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. **DNS Check Interval** تنظیمەکە بدۆزەوە
3. لە 300 چرکەی پیش‌تەکی (default) بگۆڕە بۆ بەهای کەمتر (کەمترین: 10 چرکە)
4. **تێبینی:** دوایکردنی کەمتر واتە تاقیکردنەوەی زیاتر، بەڵام بارکردنی خەریکی سروری زۆر دەبێت

### هەڵەکانی پەسەندکردن (Authentication Errors)

**HTTP 401/403 errors:**
- توکن API یەکێتیت لە Enhance دابەزێنە (Regenerate your API token in Enhance)
- بڕیار بدات کە توکنەکە ڕۆڵی **System Administrator** هەیە
- چاک بکە ئایا توکنەکە بەسەرچووە
- دڵنیابە کە بەکارهێنانی ID ڕێکخراوەکە (لەبەر ئەوەی زۆربەی کات لە URL پێویست نییە)

### شیکردنەوەی تۆمارەکان (Log Analysis)

تۆمارکردنی ورد یەکگرتوو بکە:
```php
// بۆ زیادکردندا لە wp-config.php بۆ دیاریکردنی زیاتر
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

پاشان تۆمارەکان چاک بکە لە شوێنەکانی:
- تۆمارەکان یەکێتی Ultimate Multisite: **Ultimate Multisite** > **Logs**
- تۆمارەی دیباگی WordPress: `wp-content/debug.log`
- تۆمارەکان پۆل Enhance: لە ناوچەی بەڕێوەبردنی Enhance دەتوانیت ببینیت

## ئاماژە بۆ API (API Reference)

### پەسەندکردن (Authentication)
هەموو داواکارییەکانی API بە ڕێگەی Bearer token یان پەسەندکردنەوەی توکن بەکاردێن:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### پۆلە باوەکان کە بەکاردێن (Common Endpoints Used)

**لیستکردنی Serverەکان:**
```
GET /servers
```

**لیستکردنی دامێنییەکان لەسەر یەک Server:**
```
GET /servers/{server_id}/domains
```

** زیادکردنی Domainێک:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**ڕێباندنی Domainێک:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### dokumantacijaی تەواوی API (Full API Documentation)
دۆکومنتacijaی تەواوی API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## پراکتیکە باشەکان (Best Practices)

### భద్రత (Security)
- **API tokens ను ఎప్పుడూ version control లో commit చేయవద్దు**
- టోకెన్లను `wp-config.php` లో సేవ్ చేయండి, దానిని Git నుండి మినహాయించాలి
- తగిన అనుమతులు ఉన్న టోకెన్లను ఉపయోగించండి (పూర్తి ఇంటిగ్రేషన్ కోసం System Administrator)
- ప్రొడక్షన్ ఎన్విరాన్‌మెంట్‌ల కోసం టోకెన్ గడువు తేదీలను సెట్ చేయండి
- టోకెన్లను క్రమం తప్పకుండా మార్చండి

### పనితీరు (Performance)
- API కాల్స్ ఎక్కువగా రాకుండా ఉండటానికి డిఫాల్ట్ DNS చెక్ ఇంటర్వెల్ (300 సెకన్లు) ను ఉపయోగించండి
- పెద్ద ఎత్తున డొమైన్ ఆపరేషన్లు చేస్తున్నప్పుడు Enhance సర్వర్ వనరులను పర్యవేక్షించండి
- ఒకేసారి చాలా డొమైన్‌లను మ్యాప్ చేయాల్సి వస్తే, డొమైన్ జోడించడాన్ని క్రమబద్ధీకరించడం (staggering) గురించి ఆలోచించండి

### పర్యవేక్షణ (Monitoring)
- ఇంటిగ్రేషన్ లోని లోపాలను కనుగొనడానికి Ultimate Multisite లాగ్‌లను క్రమం తప్పకుండా తనిఖీ చేయండి
- విఫలమైన డొమైన్ జోడించబడిన వాటి కోసం పర్యవేక్షణ సెటప్ చేయండి
- SSL సర్టిఫికెట్లు సరిగ్గా ఏర్పాటు అవుతున్నాయో లేదో ధృవీకరించండి
- Enhance సర్వర్ సామర్థ్యం మరియు డొమైన్ పరిమితులను గమనించండి

## అదనపు వనరులు (Additional Resources)

- **Enhance అధికారిక డాక్యుమెంటేషన్:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API డాక్యుమెంటేషన్:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance కమ్యూనిటీ ఫోరమ్:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub చర్చ:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite డొమైన్ మ్యాపింగ్ గైడ్:** "How to Configure Domain Mapping v2" అనే వికీ పేజీని చూడండి

## సహాయం (Support)

మీకు సమస్యలు ఎదురైనట్లయితే:
1. పైన ఉన్న ట్రబుల్షూటింగ్ సెక్షన్‌ను తనిఖీ చేయండి
2. Ultimate Multisite లాగ్‌లను సమీక్షించండి
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) ను సంప్రదించండి
4. ప్యానెల్-నిర్దిష్ట సమస్యల కోసం Enhance సపోర్ట్‌ను సంప్రదించండి
5. కమ్యూనిటీ సహాయం కోసం వివరణాత్మక లోపం లాగ్‌లతో కొత్త చర్చను సృష్టించండి

## గమనికలు (Notes)

- ئەم یەکێک لەسەر بەشی ئالیزای ناو داتابەیس (domain aliases) کار دەکات؛ Enhance خودی SSL بە شێوەیەکی خۆکار دەدات.
- ئەم integration پشتیوانیی هەردوو مۆبایی و پڕۆژەی تایبەت بۆ دامێنی (custom domain mappings) و ئەو سایتانەی سەر بە subdomain هەیە، دەدات.
- دروستکردنی subdomain ی www بە شێوەیەکی خۆکار دەکرێت لە ڕێگەی تنظیمەکانی Domain Mappingەوە.
- Enhance ئێستا پشتگیریکردنی پڕۆفایلەکانی Apache دەکات (LiteSpeed Enterprise دەتوانرێت بەکارهێنرێت).
- کاتێک دامێنی لە Ultimate Multisite دەدەکەیت، دامێنی لە Enhance دەڕواتەوە بەڵام ڕەنگە گواستنەوەی SSL یان گۆڕینی تێیدەبێت بە شێوەیەکی فوري نەبێت.
