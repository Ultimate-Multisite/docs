---
title: CyberPanel Birlashmasi
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

این راهنما توضیح می‌دهد که Ultimate Multisite CyberPanel integration را چگونه تنظیم کنید تا دامنه‌های نگاشت شده در شبکه شما به صورت خودکار (و با حذف) به عنوان هاست‌های مجازی در CyberPanel اضافه و حذف شوند، همچنین امکان دریافت گواهی SSL خودکار از طریق Let's Encrypt وجود دارد.

## این کار چه کاری انجام می‌دهد؟

- وقتی یک دامنه در Ultimate Multisite نگاشت می‌شود، این integration از APIِ CyberPanel برای ایجاد یک هاست مجازی برای آن دامنه استفاده می‌کند.
- وقتی نگاشت یک دامنه حذف می‌شود، این integration از API برای حذف همان هاست مجازی مربوطه استفاده می‌کند.
- اگر SSL خودکار فعال باشد، این integration بلافاصله پس از ایجاد هاست مجازی، صدور گواهی Let's Encrypt را آغاز می‌کند.
- بسته به تنظیمات شما در تنظیمات نگاشت دامنه ("Auto-create www subdomain")، آدرس `www.` را اختیاری اضافه یا حذف می‌کند.

## پیش‌نیازها

- یک نمونه فعال CyberPanel (توصیه می‌شود نسخه v2.3 یا بالاتر) که از طریق سرور وردپرس شما قابل دسترسی باشد.
- یک وب‌سایت موجود در CyberPanel که قبلاً ریشه شبکه وردپرس شما را میزبانی می‌کند. این integration هاست‌های مجازی جدیدی را به این سرور متصل می‌کند.
- دسترسی به APIِ CyberPanel فعال باشد. احراز هویت با نام کاربری و رمز عبور مدیر CyberPanel شما انجام می‌شود.
- قبل از اینکه SSL خودکار بتواند یک گواهی معتبر صادر کند، رکورد‌های DNS دامنه‌های نگاشت شده شما باید قبلاً به آدرس IP سرور شما اشاره کنند.

## الزامات

کانسست‌های زیر باید در فایل `wp-config.php` شما تعریف شوند:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

به صورت اختیاری، می‌توانید موارد زیر را نیز تعریف کنید:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — domain yaratıldıktan sonra Let's Encrypt SSL'i etkinleştirir
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2 — Varsayılan olarak PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL sertifikası iletişimi için kullanılır
```

## Kurulum Talimatları

### 1. CyberPanel API'yi Etkinleştirin

1. Yönetici olarak CyberPanel paneline giriş yapın.
2. **Security** > **SSL** bölümüne gidin ve SSL'in CyberPanel arayüzünde aktif olduğundan emin olun (güvenli API çağrıları için gereklidir).
3. CyberPanel API varsayılan olarak `https://your-server-ip:8090/api/` adresinde mevcuttur. Bunu etkinleştirmek için ek bir adıma gerek yoktur — yönetici kullanıcılar için varsayılan olarak açıktır.

### 2. wp-config.php'ye Sabitleri Ekleyin

Aşağıdaki sabitleri, `/* That's all, stop editing! */` satırından önce `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Otomatik SSL'i etkinleştirmek için (tavsiye edilir):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Entegrasyonu Etkinleştirin

1. WordPress ağ yöneticinizde, **Ultimate Multisite** > **Settings** bölümüne gidin.
2. **Domain Mapping** sekmesine geçin.
3. Aşağı kaydırarak **Host Integrations** kısmına gelin.
4. **CyberPanel** entegrasyonunu etkinleştirin.
5. **Save Changes** (Değişiklikleri Kaydet) butonuna tıklayın.

### 4. Bağlantıyı Doğrulayın

Ayarlar sihirbazındaki yerleşik bağlantı testini kullanın:

۱. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** گエリشين.
۲. **Test Connection** دابه‌شید.
۳. موفقیت پیام confirms (تایید می‌کند) چې plugin می‌تواند به CyberPanel API رسېد وای و صحیح authenticate (تایید) کړي.

## کار څنګه کار کوي؟

### Domain Mapping (دامنی نقشہ سازی)

کله چې Ultimate Multisite کې یو domain را نقش کړی شي:

۱. Integration یو `POST` request د `/api/createWebsite` ته په CyberPanel host باندې پېژندلوي.
۲. CyberPanel د تنظیم شوي package تحت domain لپاره یو نوی virtual host جوړوي.
۳. document root (د مستند کیدو اصلي مسیر) راټیږي چې ستاسو WordPress network root directory ته اشاره وکړي.
۴. کله چې domain mapping منوول شي، integration `/api/deleteWebsite` رافراشوي تر هغه چې virtual host پاک وي.

### Auto-SSL (خودکار SSL)

کله چې `WU_CYBERPANEL_AUTO_SSL` true وي:

۱. کله چې virtual host جوړی شي، integration د domain لپاره `/api/issueSSL` رافراشوي.
۲. CyberPanel له Let's Encrypt certificate غوښتنه کوي او ACME HTTP-01 challenge کاروي.
۳. Certificate (سیرت) له expiry (منقضی کیدو) څخه مخکې د CyberPanel لخوا خودکار Renew (دوبار تولید) کیږي.

> **مهم:** DNS باید تر هغه وخته چې Let's Encrypt domain ته تایید نه کړي، ستاسو server IP address ته پوره propagate (پراکړه) وي. که SSL issuance mapping څخه وروسته فوری ناکامه وي، نو DNS propagation لپاره انتظار وکړئ او د **SSL** > **Manage SSL** تحت CyberPanel dashboard څخه SSL بیا trigger (دوبار شروع) کړئ.

### www Subdomain (www زیرمجموعه)

که ستاسو Domain Mapping تنظیماتو کې **Auto-create www subdomain** فعال وي، نو integration `www.<domain>` لپاره یو virtual host alias هم جوړوي او کله چې auto-SSL فعال وي، نو certificate د apex (اصلي) او www variants دواړو ته کوربه ورکوي.

### Email Forwarders (ای میل پرېښودونکي)

هنگامی چې [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) افزونه فعال بولسا، CyberPanel هم موره میله‌ләр (customer email forwarders) ни сату ала. Миلهләр белән бүгенге хатлары бирәлемый булган домен адресынан башка яки табигатьне авылмырга уратып göndрергә мөмкин, ул торык почта хатлары (full mailbox) ясамай. Бу `info@customer-domain.test` же `support@customer-domain.test` сыякки алиаслар өчен кулланыла тора.

Мورهләрне милеләр өчен актив кылуудан кадәр:

1. Өздәге CyberPanel константалар дөреләме һәм соединение тесте уртарасы дип чыгып киткәнлекне табигетле булсын.
2. Emails افزанең настройкаларында CyberPanel милеләрни (email provider) активла.
3. Милеләрне ясалардан кадәр, кулланылаган домен CyberPanel-де алдыннан ясалгандыгын табигетле булсын.
4. Тест мوره җитегез һәм аның аркылы хат göndерегез, ул функцияны продюсекция (production) планларында сугларыдан кадәр сугламалардан өчми инде.

Хәзерге мوره ясау итеме уаракча булганнар өчен, алдыннан Ultimate Multisite активность логларын (activity logs) текшерегез, анда сораучы домен бар дип табигетле булсын һәм API юзесе почтаны башкару правалары бар дип табигетле булсын.

## Конфигурацияге карау өчен

| Константа | Милелә? | Дефолт | Тасвирлау |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Иә | — | Порт белән китерүче CyberPanel низимең толуар URL-ы, мисалы: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Иә | — | CyberPanel администратор юзесе |
| `WU_CYBERPANEL_PASSWORD` | Иә | — | CyberPanel администратор паролы |
| `WU_CYBERPANEL_PACKAGE` | Иә | `Default` | Зәтен хостинг пакет, янәшлек сайтарлар өчен мөһерле булган |
| `WU_CYBERPANEL_AUTO_SSL` | Хәзерге | `true` | Домен ясалганыдан соң Let's Encrypt SSL сертификатын чыгару |
| `WU_CYBERPANEL_PHP_VERSION` | Хәзерге | `PHP 8.2` | Янәшлек сайтарлар өчен PHP версиясы (CyberPanel-де куллап кайткан версия белән яки якиле булсын) |
| `WU_CYBERPANEL_EMAIL` | Хәзерге | — | SSL сертификатын регистр etmek өчен контакт миле |

## Зур маанилИ мәгълүматлар

CyberPanel API سشن (session) əsaslı token autentifikasi sistemindən istifadə edir. Bu inteqrasiya hər bir API çağırışında token alma prosesini avtomatik hal edir.
Sizin CyberPanel administrator hesabınızın veb siteleri oluşturma ve silme izinleri olmalıdır.
CyberPanel varsayılan olaraq `8090` portunda çalışır. Sunucunuzda güvenlik duvarı (firewall) varsa, bu portun WordPress uygulama sunucusundan erişilebilir olduğundan emin olun.
Bu entegrasyon DNS kayıtlarını yönetmez. Ultimate Multisite'ta alanı eşleştirmeden önce alan adının DNS'ini sunucunuzun IP adresine yönlendirmeniz gerekir.
Eğer OpenLiteSpeed (OLS) kullanıyorsanız, sanal hostlar (virtual host) değiştirildikdən sonra avtomatik olaraq nazik bir yeniden başlatma (graceful restart) tetikləyir. Heç bir əl müdaxiləsinə ehtiyac yoxdur.

## Problemləri Həlli

### API Bağlantısı Rədd Edilir (API Connection Refused)

- Sunucunuzun güvenlik duvarında `8090` portunun açıq olduğundan əmin olun.
- `WU_CYBERPANEL_HOST` dəyərinin düzgün protokolü (`https://`) və portu əhatə etdiyindən əmin olun.
- CyberPanel SSL sertifikatınızın kevnar olduğundan yoxlayın; özünü imzalanmış (self-signed) sertifikatlar TLS yoxlamalarında səhvlərə səbəb ola bilər. Yalnız etibarlı xüsusi şəbəkələr mühitləri üçün `WU_CYBERPANEL_VERIFY_SSL`-i `false` olaraq təyin edin.

### Autentifikasi Səhvləri (Authentication Errors)

- CyberPanel-ə birbaşa daxil olaraq `WU_CYBERPANEL_USERNAME` və `WU_CYBERPANEL_PASSWORD` dəyərlərinin düzgün olduğundan əmin olun.
- Tekrarlanan uğursuz daxil olma cəhdlərindən sonra CyberPanel hesabları kilidləyir. Kilidlənmələr baş verərsə, CyberPanel-də **Security** > **Brute Force Monitor** bölməsini yoxlayın.

### Domen Yaradılmayıb (Domain Not Created)

- API səhvləri üçün Ultimate Multisite aktivlik jurnalını (**Ultimate Multisite** > **Activity Logs**) yoxlayın.
- `WU_CYBERPANEL_PACKAGE` daxilində təyin edilmiş paket CyberPanel-də mövcud olduğundan əmin olun (**Packages** > **List Packages**).
- Domenin CyberPanel-də artıq veb sitesi kimi qeydiyyatdan keçmədiyindən əmin olun — duplikat veb sitesi yaratmaq səhvə səbəb olur.

### SSL Sertifikatı Verilməyib (SSL Certificate Not Issued)

DNS-ي كامل انتشار یافته بولید؟ `dig +short your-domain.com` شما سيرفر IP-ن رو باید برگردونه.
Let's Encrypt سرعت محدودیت (rate limits) اعمال می‌کنه. اگه اخیراً برای یک دامنه چند تا گواهی صادر کردید، قبل از تکرار تلاش صبر کنید.
برای جزئیات شکست در صدور گواهی، لاگ‌های CyberPanel رو زیر **Logs** > **Error Logs** چک کنید.
به عنوان یک راه حل جایگزین، می‌تونید SSL رو دستی از طریق CyberPanel صادر کنید: **SSL** > **Manage SSL** > دامنه مورد نظر رو انتخاب کنید > **Issue SSL**.

## مراجع

- مستند API CyberPanel: https://docs.cyberpanel.net/docs/category/api
- مدیریت SSL در CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- محدودیت‌های نرخ Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
