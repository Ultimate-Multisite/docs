---
title: Cloudways Entegrasi
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integration

## Genel Bakış
Cloudways, WordPress sitelerinizi DigitalOcean, AWS, Google Cloud ve diğer çeşitli bulut sağlayıcılarında barındırmanıza olanak tanıyan yönetilen bir bulut hosting platformudur. Bu entegrasyon, Ultimate Multisite ile Cloudways arasında otomatik alan adı senkronizasyonu ve SSL sertifikası yönetimini mümkün kılar.

## Özellikler
- Otomatik alan adı senkronizasyonu
- SSL sertifikası yönetimi
- Ek alan adları desteği
- SSL sertifikaları için DNS doğrulama

## Gereksinimler
Aşağıdaki sabitleri `wp-config.php` dosyanızda tanımlamanız gerekir:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

İsteğe bağlı olarak şunları da tanımlayabilirsiniz:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'virgül,ayrılmış,alan adlarının,listesi');
```

## Kurulum Talimatları

### 1. Cloudways API Kimlik Bilgilerinizi Alın

1. Cloudways panelinize giriş yapın
2. "Account" > "API Keys" (Hesap > API Anahtarları) bölümüne gidin
3. Zaten bir anahtarınız yoksa bir API anahtarı oluşturun
4. E-posta adresinizi ve API anahtarınızı kopyalayın

### 2. Sunucu ve Uygulama Kimliklerinizi Alın

1. Cloudways panelinizde, "Servers" (Sunucular) bölümüne gidin
2. WordPress multisite'ınızın barındırıldığı sunucuyu seçin
3. Sunucu ID'si URL'de görünür: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" (Uygulamalar) bölümüne gidin ve WordPress uygulamanızı seçin
5. Uygulama ID'si URL'de görünür: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php'ye Sabitleri Ekleyin

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Əgər sizin şəbəkənizdən kənarda olan əlavə **xarici** domenlər varsa (multisite şəbəkənizin xaricində), və onlar həmişə Cloudways alias siyahısında qalmalıdırsa:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Öz şəbəkənizin wildcard-ını daxil etməyin
`WU_CLOUDWAYS_EXTRA_DOMAINS`-ə `*.your-network.com` (və ya öz şəbəkənizin istənilən alt domen nümunəsi) əlavə etməyin. Niyə bu, hər bir müştəri üçün SSL sertifikatlarının verilməməsinə mane olursa, aşağıdakı [Vacib — wildcard SSL problematiği](#important--wildcard-ssl-pitfall) hissəsini görün.
:::

### 4. İnteqrasiyanı Aktiv Etmək

1. WordPress admin panelində Ultimate Multisite > Settings (Parametrlər) bölməsinə gedin.
2. "Domain Mapping" (Domendir Bağlama) tabına keçin.
3. "Host Integrations" (Host İnteqrasiyaları) hissəsinə aşağı doğru sürüşün.
4. Cloudways inteqrasiyasını aktiv edin.
5. "Save Changes" (Dəyişiklikləri Yadda Saxla) düyməsini basın.

## Necə İşləyir?

### Domain Syncing (Domendir Səhmlənməsi)

Ultimate Multisite-da bir domen bağlandığı zaman:

1. İnteqrasiya hazırda bağlı olan bütün domenləri alır.
2. Yeni domendən (mümkün olsa, www versiyası ilə birlikdə) siyahıya əlavə edir.
3. Tam siyahını API vasitəsilə Cloudways-a göndərir.
4. Cloudways tətbiqiniz üçün domen aliaslarını yeniləyir.

Qeyd: Cloudways API hər dəfə yalnız fərdi domenləri əlavə etmək və ya çıxartmaq deyil, bütün domen siyahısını göndərməyi tələb edir.

### SSL Certificate Management (SSL Sertifikatının İdarə Edilməsi)

Domendirlər sinxedildikdən sonra:

1. İnteqrasiya hansı domenlərin sizin serverinizə düzgün DNS qeydləri olduğunu yoxlayır.
2. O domenlər üçün Let's Encrypt SSL sertifikatları quraşdırmaq üçün Cloudways-a sorğu göndərir.
3. Cloudways SSL sertifikatının verilməsi və quraşdırılması ilə məsuliyyət daşıyır.

این یکپارچه‌سازی همیشه از Cloudways برای دریافت گواهی‌های **استاندارد** (غیر وایلدکارد) Let's Encrypt درخواست می‌کند. اگر در `WU_CLOUDWAYS_EXTRA_DOMAINS` یک الگوی وایلدکارد ارائه شود، قبل از درخواست SSL، علامت `*.` ابتدایی حذف می‌شود — این یکپارچه‌سازی هرگز خودِ وایلدکارد را نصب نمی‌کند. برای استفاده از گواهی وایلدکارد در Cloudways باید آن را به صورت دستی نصب کنید، اما این کار باعث مسدود شدن صدور Let's Encrypt برای دامنه‌های سفارشی نگاشت شده (به نکته زیر مراجعه کنید) می‌شود.

## دامنه‌های اضافی (Extra Domains)

ثابت `WU_CLOUDWAYS_EXTRA_DOMAINS` به شما اجازه می‌دهد دامنه‌های **خارجی** دیگری را مشخص کنید که همیشه باید در لیست آدرس‌های مستعار (aliases list) برنامه Cloudways باقی بمانند. از آن برای موارد زیر استفاده کنید:

- دامنه‌های خارجی که توسط Ultimate Multisite مدیریت نمی‌شوند (مثلاً یک سایت بازاری جداگانه که از همان برنامه Cloudways استفاده می‌کند).
- دامنه‌های پارک شده یا استیجینگ که می‌خواهید در لیست آدرس‌های مستعار برنامه باقی بمانند.

**از این ثابت برای وایلدکارد زیردامنه شبکه خود استفاده نکنید** (مثلاً `*.your-network.com`). به نکته مربوط به مشکل SSL وایلدکارد زیر مراجعه کنید.

## مهم — تله گواهی SSL وایلدکارد

یک اشتباه رایج هنگام دنبال کردن تنظیمات پیش‌فرض Cloudways این است که یک الگوی وایلدکارد مانند `*.your-network.com` را در `WU_CLOUDWAYS_EXTRA_DOMAINS` اضافه کنید، یا به صورت دستی یک گواهی SSL وایلدکارد Cloudways برای آن وایلدکارد نصب نمایید.

**اگر این کار را انجام دهید، Cloudways از صدور گواهی‌های Let's Encrypt برای دامنه‌های سفارشی هر مستأجر که Ultimate Multisite آن‌ها را نگاشت می‌کند، خودداری خواهد کرد.** Cloudways هر بار گواهی SSL فعال روی برنامه را جایگزین می‌کند، و یک گواهی وایلدکارد از قبل موجود روی برنامه مانع صدور Let's Encrypt برای دامنه‌های خاصی می‌شود که اینپارچمنت به آن وابسته است.

### تنظیمات پیشنهادی Cloudways SSL برای شبکه Ultimate Multisite

۱. در بخش **SSL Certificate** اپلیکیشن Cloudways، یک **گواهی SSL استاندارد Let's Encrypt** نصب کنید که فقط روی `your-network.com` و `www.your-network.com` پوشش داده شود — نه یک کلمه کلیدی (wildcard).
۲. از قرار دادن `*.your-network.com` (یا هر الگوی زیردامنه شبکه خود) در قسمت `WU_CLOUDWAYS_EXTRA_DOMAINS` خودداری کنید. این ثابت را فقط برای **دومه‌های خارجی** نگه دارید.
۳. کلمه کلیدی زیردامنه‌ای مخصوص هر مستأجر را فقط در سطح **DNS** ایجاد کنید (یک رکورد `A` برای `*.your-network.com` که به آدرس IP سرور Cloudways شما اشاره کند) تا زیرمجموعه‌ها حل شوند. سپس SSL برای دامنه‌های سفارشی نگاشت شده فردی توسط این ادغام از طریق Let's Encrypt به صورت خودکار صادر می‌شود.

اگر دامنه‌های سفارشی مستأجرانتان بدون SSL گیر کرده‌اند، بخش Cloudways SSL را بررسی کنید. اگر یک گواهی کلمه کلیدی در آن فعال است، آن را حذف کنید، یک گواهی استاندارد Let's Encrypt فقط برای دامنه اصلی شبکه صادر کنید و هر ورودی کلمه کلیدی از `WU_CLOUDWAYS_EXTRA_DOMAINS` را پاک کنید. سپس نگاشت دامنه را دوباره فعال کنید (یا منتظر مورد بعدی بمانید) و ادغام دوباره شروع به صدور گواهی‌های مخصوص هر دامنه می‌کند.

## عیب‌یابی

### مشکلات اتصال API
- بررسی کنید که ایمیل و کلید API شما درست باشند.
- چک کنید که شناسه سرور و برنامه شما صحیح باشد.
- مطمئن شوید که حساب Cloudways شما مجوزهای لازم را دارد.

### SSL Sertifikası Sorunları
- Cloudways, SSL sertifikaları vermeden önce alan adlarınızın sunucunuza doğru DNS kayıtlarına sahip olmasını şart koşar.
- Entegrasyon, SSL sertifikalarını istemeden önce DNS kayıtlarını kontrol eder.
- Eğer SSL sertifikaları verilmiyorsa, alan adlarınızın sunucunuzun IP adresine doğru işaret ettiğinden emin olun.
- **SSL'siz takılı kalan per-tenant özel alan adları mı var?** Cloudways uygulamasının SSL Certificate sekmesini kontrol edin. Eğer bir joker karakter sertifikası (manuel olarak yüklenmiş veya `*.your-network.com`'u kapsayan) aktifse, Cloudways tek tek eşlenmiş özel alan adları için Let's Encrypt sertifikaları vermeyecektir. Bunu sadece ana ağ alan adını (`your-network.com`, `www.your-network.com`) kapsayan standart bir Let's Encrypt sertifikasıyla değiştirin ve `WU_CLOUDWAYS_EXTRA_DOMAINS` içindeki joker karakter girişlerini kaldırın. Ardından bir alan adı eşleştirmesini yeniden tetikleyin (veya bir sonrakini bekleyin) ve entegrasyon alan bazında sertifika isteyecektir.

### Alan Adı Eklenmedi
- Herhangi bir hata mesajı olup olmadığını Ultimate Multisite loglarında kontrol edin.
- Alan adının Cloudways'e zaten eklenip eklenmediğini doğrulayın.
- Eklenecek alan adı sayısını Cloudways planınızın desteklediğinden emin olun.
