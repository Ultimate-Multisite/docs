---
title: بەرەتوپ تێپشۆق نەتەوەی ئامادەکردن
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# کنترل پنل یکپارچه‌سازی را بهبود ببخشید

## مروری کلی {#overview}
Enhance یک کنترل پنل مدرن است که قابلیت‌های اتوماسیون و مدیریت میزبانی قدرتمندی ارائه می‌دهد. این یکپارچه‌سازی امکان همگام‌سازی خودکار دامنه و مدیریت گواهی SSL بین Ultimate Multisite و Enhance Control Panel را فراهم می‌کند.

**بحث مرتبط:** برای نکات جامعه و اطلاعات بیشتر به [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) مراجعه کنید.

## ویژگی‌ها {#features}
- وقتی دامنه‌ها در Ultimate Multisite نگاشت (map) می‌شوند، همگام‌سازی خودکار دامنه انجام می‌شود.
- زمانی که DNS حل (resolve) می‌شود، از طریق LetsEncrypt گواهی SSL به صورت خودکار فراهم می‌شود.
- برای شبکه‌هایی که در حالت زیردامنه (subdomain mode) اجرا می‌شوند، پشتیبانی از زیردامنه‌ها وجود دارد.
- وقتی نگاشت‌ها حذف می‌شوند، دامنه نیز حذف می‌شود.
- تست اتصال برای تأیید اعتبار API انجام می‌شود.

## الزامات {#requirements}

### الزامات سیستمی {#system-requirements}
- Enhance Control Panel نصب و قابل دسترسی باشد.
- نصب WordPress Multisite روی یک سرور Enhance میزبانی شود یا به آن متصل باشد.
- وب سرور Apache (Enhance در حال حاضر از پیکربندی‌های Apache پشتیبانی می‌کند؛ LiteSpeed Enterprise با هزینه کمتر در دسترس است).

### دسترسی به API {#api-access}
شما باید برای ایجاد توکن‌های API، دسترسی ادمین به Enhance Control Panel داشته باشید.

## دریافت اعتبارنامه‌های API خود {#getting-your-api-credentials}

### ۱. ایجاد توکن API {#1-create-an-api-token}

۱. وارد کنترل پنل Enhance خود به عنوان مدیر شوید.
۲. روی **Settings** در منوی ناوبری کلیک کنید.
۳. به بخش **Access Tokens** بروید.
۴. روی **Create Token** کلیک کنید.
۵. یک نام توصیفی برای توکن انتخاب کنید (مثلاً: "Ultimate Multisite Integration").
۶. نقش **System Administrator** را اختصاص دهید.
۷. برای تاریخ انقضا:
   - اگر می‌خواهید توکن هرگز منقضی نشود، آن را خالی بگذارید.
   - یا برای اهداف امنیتی یک تاریخ انقضای مشخص تعیین کنید.
۸. روی **Create** کلیک کنید.

ایجاد করার بعد، آپ کا **Access Token** اور **Organization ID** دکھایا جائے گا۔ انہیں فوراً محفوظ کر لیں کیونکہ ٹوکن صرف ایک بار ہی دکھایا جاتا ہے۔

### ۲. اپنا Organization ID حاصل کریں {#2-get-your-organization-id}

Organization ID کو Access Tokens والے صفحے پر ایک بلو انفارمیشن باکس میں "Org ID: {your_id}" کے نام سے دکھایا جاتا ہے۔

Organization ID کا فارمیٹ UUID جیسا ہوتا ہے: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

آپ کسی کسٹمر کا Organization ID یہ بھی درج ذیل طریقے سے تلاش کر سکتے ہیں:
۱. **Customers** پیج پر جائیں
۲. متعلقہ کسٹمر کے لیے **Manage customer** پر کلک کریں
۳. URL کو دیکھیں - Organization ID `/customers/` کے بعد آنے والے حروفِ تہجی ہیں۔

### ۳. اپنا Server ID حاصل کریں {#3-get-your-server-id}

اپنا Server ID (جو ڈومین آپریشنز کے لیے ضروری ہے) تلاش کرنے کے لیے:

۱. Enhance Control Panel میں، **Servers** پر جائیں
۲. اس سرور پر کلک کریں جہاں آپ کا WordPress انسٹالیشن چل رہا ہے
۳. Server ID (UUID فارمیٹ) URL یا سرور کی تفصیلات میں نظر آئے گی
۴. متبادل طور پر، آپ سرورز کی فہرست حاصل کرنے کے لیے API استعمال کر سکتے ہیں:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID کا فارمیٹ UUID جیسا ہوتا ہے: `00000000-0000-0000-0000-000000000000`

### ۴. اپنا API URL حاصل کریں {#4-get-your-api-url}

آپ کا API URL آپ کے Enhance Control Panel URL میں `/api/` شامل کرنے سے مل جائے گا:

```
https://your-enhance-panel.com/api/
```

**اہم بات:** `/api/` پاتھ ضروری ہے۔ عام غلطیاں یہ ہیں:
- صرف ڈومین استعمال کرنا بغیر `/api/` کے
- سیکیورٹی کے لیے HTTP کی بجائے HTTPS استعمال کرنا (سیکیورٹی کے لیے HTTPS لازمی ہے)

## Configuration {#configuration}

### Required Constants {#required-constants}

ذیل میں دیے گئے constants کو اپنی `wp-config.php` فائل میں شامل کریں:

// Control Panel Entegrasyny Koshiligi (Enhance)

define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Entegrasyny Wizard Orqulama (Setup via Integration Wizard) {#setup-via-integration-wizard}

1. WordPress admin panelinde, **Ultimate Multisite** > **Settings** (Ayarlar) bölümüne gidin.
2. **Integrations** (Entegrasyonlar) sekmesine geçin.
3. **Enhance Control Panel Integration**'ı bulun ve **Configuration** (Yapılandırma) butonuna tıklayın.
4. Wizard sizden kurulum sırasında rehberlik edecektir:
   - **Step 1:** Tanıtım vaqf etishlari we xususiyatlar haqida umumiy ma'lumot beriladi.
   - **Step 2:** API kredensialaringizni (Token, API URL, Server ID) kiriting.
   - **Step 3:** Bog'lanishni sinab ko'ring.
   - **Step 4:** Ko'rib chiqish va faollashtirish.

Siz quyidagilardan birini tanlashingiz mumkin:
- Wizardning siz uchun `wp-config.php` faylining ichiga konstantlarni avtomatik kiritishiga ruxsat berish.
- Konstanta ta'riflarini nusxalab, ularni qo'lda qo'shish.

## Qo'shimcha WordPress Sozlamalari (Additional WordPress Configuration) {#additional-wordpress-configuration}

Jamoatchilik fikrlariga asoslanib ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), siz quyidagi qo'shimcha sozlamalarni konfiguratsiya qilishingiz kerak bo'lishi mumkin:

### .htaccess Sozlamasi (Configuration) {#htaccess-configuration}

Agar domen xaritasi bilan muammolar yuz bersa:
1. Asl Enhance `.htaccess` faylini o'chiring.
2. Uni standart WordPress Multisite `.htaccess` fayli bilan almashtiring.

### Cookie Konstanta (Cookie Constants) {#cookie-constants}

Xarita qilingan domenlar bo'ylab to'g'ri cookie boshqarishni ta'minlash uchun bu konstantlarni `wp-config.php` ga qo'shing:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Qanday Ishlaydi (How It Works) {#how-it-works}

### Domen Xaritasi Qilinganda (When a Domain is Mapped) {#when-a-domain-is-mapped}

۱. کاربر Ultimate Multisite'da bir özel alan adını eşleştirir (veya alt alan adı modunda yeni bir site oluşturulur).
۲. Entegrasyon Enhance API'sine POST isteği gönderir: `/servers/{server_id}/domains`
۳. Enhance, alanı sunucu yapılandırmanıza ekler.
۴. DNS sizin sunucunuza çözüldüğünde, Enhance otomatik olarak LetsEncrypt aracılığıyla bir SSL sertifikası sağlar.
۵. Alan adı HTTPS ile aktif hale gelir.

### Bir Alan Adı Kaldırıldığında {#when-a-domain-is-removed}

۱. Ultimate Multisite'da bir alan adı eşleştirmesi silinir.
۲. Entegrasyon, alan adının ID'sini bulmak için Enhance'e sorgu gönderir.
۳. Aşağıdaki isteği gönderilir: `/servers/{server_id}/domains/{domain_id}` (DELETE isteği)
۴. Enhance, alanı sunucu yapılandırmanızdan kaldırır.

### DNS ve SSL Kontrolü {#dns-and-ssl-checking}

Ultimate Multisite içinde yerleşik DNS ve SSL kontrolü bulunur:
- Kontrol aralığını **Domain Mapping Settings**'de ayarlayabilirsiniz (varsayılan: 300 saniye/5 dakika).
- Sistem, bir alanı aktif olarak işaretlemeden önce DNS yayılımını doğrular.
- SSL sertifikası geçerliliği otomatik olarak kontrol edilir.
- Enhance SSL sağlama işlemini otomatik olarak halleder, bu yüzden manuel SSL yapılandırmasına gerek yoktur.

## Kurulumu Doğrulama {#verifying-setup}

### Bağlantıyı Test Etme {#test-the-connection}

۱. Entegrasyon Sihirbazında **Test Connection** adımını kullanın.
۲. Eklenti, sunucunuzdaki alan adlarını listelemeye çalışacaktır.
۳. Başarılı bir mesaj şunları teyit eder:
   - API kimlik bilgileri doğru
   - API URL'si erişilebilir durumda
   - Sunucu ID geçerli
   - İzinler düzgün ayarlanmış

### Bir Alan Adı Eşleştirdikten Sonra {#after-mapping-a-domain}

۱. Ultimate Multisite'da bir test alanı eşleştirin.
۲. Ultimate Multisite kayıtlarını kontrol edin (**Ultimate Multisite** > **Logs** > **integration-enhance**).
۳. Enhance Kontrol Paneli'nde alan adının eklendiğini doğrulayın:
   - **Servers** > **Your Server** > **Domains** yoluna gidin.
   - Yeni alan adı listede görünmelidir.
۴. DNS yayıldıktan sonra SSL'in otomatik olarak sağlandığını doğrulayın

## Sorun Giderme (Troubleshooting) {#troubleshooting}

### API Bağlantı Sorunları (API Connection Issues) {#api-connection-issues}

**Hata: "Enhance API'ye bağlanılamadı" (Failed to connect to Enhance API)**
- `WU_ENHANCE_API_URL` değişkeninde sonuna `/api/` eklenip eklenmediğini kontrol edin.
- HTTP yerine HTTPS kullandığınızdan emin olun.
- Enhance panelinin WordPress sunucunuzdan erişilebilir olup olmadığını kontrol edin.
- Bağlantıyı engelleyen herhangi bir güvenlik duvarı kuralı olup olmadığını kontrol edin.

**Hata: "Enhance API Token bulunamadı" (Enhance API Token not found)**
- `wp-config.php` dosyasında `WU_ENHANCE_API_TOKEN` tanımlı olduğundan emin olun.
- Token'ın Enhance panelinde silinip silinmediğini veya süresinin dolup dolmadığını kontrol edin.
- Token değerinde yazım hatası olup olmadığını kontrol edin.

**Hata: "Sunucu Kimliği yapılandırılmamış" (Server ID is not configured)**
- `wp-config.php` dosyasında `WU_ENHANCE_SERVER_ID` tanımlı olduğundan emin olun.
- Sunucu Kimliğinin geçerli bir UUID formatında olup olmadığını kontrol edin.
- Sunucunun Enhance panelinizde mevcut olup olmadığını doğrulayın.

### Alan Adı Eklenmedi (Domain Not Added) {#domain-not-added}

**Logları Kontrol Edin:**
1. **Ultimate Multisite** > **Logs** kısmına gidin.
2. Filtreyi **integration-enhance** olarak ayarlayın.
3. Sorunu gösteren hata mesajlarını arayın.

**Yaygın nedenler:**
- Geçersiz alan adı formatı.
- Alan adının Enhance'te zaten mevcut olması.
- Yetersiz API izinleri (token'ın Sistem Yöneticisi rolüne sahip olduğundan emin olun).
- Sunucu Kimliğinin Enhance'teki gerçek sunucu ile eşleşmemesi.

### SSL Sertifikası Sorunları (SSL Certificate Issues) {#ssl-certificate-issues}

**SSL oluşturulamıyor (SSL not provisioning):**
- DNS'in sunucunuzun IP adresine işaret ettiğini doğrulayın.
- Alan adının doğru çözümlendiğinden emin olun: `nslookup yourdomain.com` komutunu kullanın.
- Enhance, SSL oluşturmadan önce DNS'in çözümlenmesini gerektirir.
- SSL oluşturma işlemi genellikle DNS yayılımından sonra 5-10 dakika sürer.
- SSL ile ilgili özel hatalar için Enhance Kontrol Paneli loglarını kontrol edin.

**Enhance'te Manuel SSL Sorun Giderme:**
1. **Servers** > **Your Server** > **Domains** kısmına gidin.
2. Alan adınızı bulun ve SSL durumunu kontrol edin.
3. Gerekirse SSL oluşturmayı manuel olarak tetikleyebilirsiniz.

### DNS Kontrol Aralığı (DNS Check Interval) {#dns-check-interval}

دومین‌ها یا SSL گواهی‌ها خیلی طول می‌کشدن فعال بشن؟
۱. به **Ultimate Multisite** > **Settings** > **Domain Mapping** بروید.
۲. تنظیمات **DNS Check Interval** رو پیدا کنید.
۳. مقدار پیش‌فرض ۳۰۰ ثانیه رو به یک مقدار پایین‌تر تغییر بدید (حداقل: ۱۰ ثانیه).
۴. **توجه:** بازه‌های زمانی کوتاه‌تر یعنی چک کردن‌های مکرر بیشتر، اما بار سرور هم زیاد میشه.

### خطاهای احراز هویت (Authentication Errors) {#authentication-errors}

**خطاهای HTTP 401/403:**
- تو Enhance از API token خودتون رو دوباره تولید کنید (Regenerate).
- مطمئن بشید که اون توکن نقش **System Administrator** رو داره.
- چک کنید که توکن منقضی نشده باشه.
- مطمئن بشید که از Organization ID صحیح استفاده می‌کنید (هرچند معمولاً توی URL لازم نیست).

### تحلیل لاگ‌ها (Log Analysis) {#log-analysis}

لاگ‌های دقیق رو فعال کنید:
```php
// برای اشکال‌زدایی بهتر به wp-config.php اضافه کنید
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

سپس لاگ‌ها رو در این قسمت‌ها چک کنید:
- لاگ‌های Ultimate Multisite: **Ultimate Multisite** > **Logs**
- لاگ اشکال‌زدایی وردپرس: `wp-content/debug.log`
- لاگ پنل Enhance: توی رابط کاربری адمن Enhance قابل مشاهده است.

## مرجع API (API Reference) {#api-reference}

### احراز هویت (Authentication) {#authentication}
تمام درخواست‌های API از احراز هویت Bearer token استفاده می‌کنند:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### نقاط پایانی متداول مورد استفاده (Common Endpoints Used) {#common-endpoints-used}

**لیست سرورها:**
```
GET /servers
```

**لیست دامنه‌ها روی یک سرور:**
```
GET /servers/{server_id}/domains
```

**افزودن یک دامنه:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**حذف یک دامنه:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### مستند کامل API (Full API Documentation) {#full-api-documentation}
مستندات کامل API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## بهترین شیوه‌ها (Best Practices) {#best-practices}

### امنیتی (Security) {#security}
- **هرگز توکن‌های API را در کنترل نسخه (version control) قرار ندهید**
- توکن‌ها را در `wp-config.php` ذخیره کنید که باید از Git خارج شود (exclude شود).
- از توکن‌هایی با مجوزهای مناسب استفاده کنید (برای یکپارچه‌سازی کامل، System Administrator را انتخاب کنید).
- برای محیط‌های تولید (production environments)، تاریخ انقضای توکن‌ها را تنظیم کنید.
- توکن‌ها را به صورت دوره‌ای تغییر دهید (Rotate کنید).

### عملکرد (Performance) {#performance}
- برای جلوگیری از فراخوانی‌های بیش از حد API، از فاصله زمانی پیش‌فرض بررسی DNS (۳۰۰ ثانیه) استفاده کنید.
- هنگام اجرای عملیات دامنه در مقیاس بزرگ، منابع سرور Enhance را زیر نظر داشته باشید.
- اگر همزمان دامنه‌های زیادی را نگاشت می‌کنید، اضافه کردن دامنه‌ها را به صورت مرحله‌ای انجام دهید (staggering).

### نظارت (Monitoring) {#monitoring}
- برای خطاهای یکپارچه‌سازی در Ultimate Multisite logs مرتب بررسی کنید.
- برای افزودن دامنه‌های ناموفق تنظیمات نظارتی ایجاد کنید.
- تأیید کنید که گواهی‌های SSL به درستی ارائه می‌شوند (provisioning).
- ظرفیت سرور Enhance و محدودیت‌های دامنه را زیر نظر داشته باشید.

## منابع اضافی (Additional Resources) {#additional-resources}

- **مستندات رسمی Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **مستندات API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **انجمن جامعه Enhance (Enhance Community Forum):** [https://community.enhance.com](https://community.enhance.com)
- **بحث در گیت‌هاب (GitHub Discussion):** [Issue #265 - نکات یکپارچه‌سازی Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **راهنمای نگاشت دامنه Ultimate Multisite:** به صفحه ویکی "نحوه پیکربندی نگاشت دامنه v2" مراجعه کنید.

## پشتیبانی (Support) {#support}

اگر با مشکلی مواجه شدید:
۱. بخش عیب‌یابی (Troubleshooting) بالا را بررسی کنید.
۲. Ultimate Multisite logs را مرور کنید.
۳. به [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) مراجعه کنید.
۴. برای مسائل مربوط به پنل خاص با پشتیبانی Enhance تماس بگیرید.
۵. برای کمک جامعه، یک بحث جدید با لاگ‌های خطای دقیق ایجاد کنید.

## یادداشت‌ها (Notes) {#notes}

- Bu integratsiya faqat domen alias'larini boshqaradi; SSLni Enhance avtomatik boshqaradi.
- Integratsiya ham moslashtirilgan domenlar (custom domain mappings) va subdomain asosidagi saytlarni qo'llab-quvvatlaydi.
- Avtomatik www subdomainini yaratish Domain Mapping sozlamalaridan konfiguratsiya qilish mumkin.
- Enhance hozirda Apache konfiguratsiyalarini (LiteSpeed Enterprise mavjud) qo'llab-quvvatlaydi.
- Ultimate Multisite dan domen olinishi, domainni Enhance dan oladi, lekin bog'liq SSL sertifikatlarini darhol o'chirmaydi.
