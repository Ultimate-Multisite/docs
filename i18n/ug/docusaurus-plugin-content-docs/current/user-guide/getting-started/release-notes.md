---
title: Харакат нотлары
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# نِشْيَارِي يَاخْتَار (Release Notes)

## نسخه ۲.۱۳.۰ — منتشر شده در ۲۰۲۶-۰۶-۰۵ {#version-2130--released-on-2026-06-05}

- نوید: ملازم حساب، چكست آوت (checkout)، بیलिंग، سايت، اینفويس، ٹیمپليت سويتشنگ، و دومین میپنگ پروسیس‌ها برای اینکه شبکه های تِنانت بتوانند مشتریان را برای کارهای مدیریت شده دوباره به سایت اصلی هدایت کنند اضافه شد.
- نوید: تکرار شمولیت (renewal) بررسی‌های اعتبارنامه اضافه شد تا در صورت نبود توافق‌نامه بیलिंग ذخیره شده، اشتراک یا توکن گاولت، گیت‌وی‌ها قابلیت خودکار تجدید را غیرفعال کنند.
- نوید: انتشار سایت ایجاد نشده برای اطمینان از اینکه فرآیند فراهم کردن سایت روی هاست‌هایی که کارهای پس‌زمینه تأخیر دارند، قابل اعتمادتر شود، بررسی‌های حلقه باز (loopback) با HMAC اضافه شد.
- نوید: نقاط توسعه (developer extension points) برای URLهای SSO، دامنه‌های پایه فرم چكست، و ایجاد خودکار رکورد دامنه اضافه شدند.
- رفع اشکال: SSO در بین دامنه‌های نگاشت شده، بازدیدهای واسطه ناشناس، خروج از سیستم، و تداخل‌های وابستگی پلاگین‌ها قابل اعتمادتر شد.
- رفع اشکال: اکنون سایت ایجاد نشده با بازیابی پرچم‌های انتشار قدیمی برخورد می‌کند و مانع ماندن مشتریان روی صفحه ساخت سایت را از بین می‌برد.
- رفع اشکال: دیگر برای دامنه‌های پایه فرم چكست مشترک رکورد دامنه ایجاد نمی‌شود، و زمانی که هیچ ادغام فعال نباشد، کارهای پس‌زمینه ارائه‌دهنده هاست استفاده نشده نادیده گرفته می‌شوند.
- رفع اشکال: موارد حاشیه‌ای (edge cases) مربوط به چكست، آدرس بیलिंग، بازنشانی رمز عبور، تأیید ایمیل، سوئیچ کردن قالب، تورها و داشبورد مشتری دیگر جریان‌های عادی مشتری را مسدود نمی‌کنند.
- رفع اشکال: ایمیل‌های پخش شده اکنون گیرندگان را خصوصی نگه می‌دارند در حالی که خطاهای فاجعه‌بار SMTP/پلاگین‌ها هنگام شکست لیست گیرندگان یا انتقال ایمیل از وقوع جلوگیری می‌کنند.
- رفع اشکال: موارد حاشیه‌ای مربوط به تمدید شمولیت، نمایش انقضا و جمع‌آوری پرداخت اکنون از منقضی شدن فوری، کرش کردن (crash) یا از دست دادن پرداخت‌های مورد نیاز جلوگیری می‌کنند.
- بهبود یافته: سازگاری با وردپرس تا نسخه ۷.۰ آزمایش شده است، دارایی‌های Vue تولید محصول از منابع npm بازسازی می‌شوند، و پوشش end-to-end Cypress اکنون جریان‌های چكست، راه‌اندازی، SSO و گیت‌وی بیشتری را بررسی می‌کند.

## الإصدار ٢.١٢.٠ — ٢٠٢٦-٠٥-١٥ نُشر {#version-2120--released-on-2026-05-15}

- جديد: Hostinger (hPanel) را پشتیبانی‌شون به عنوان یک ارائه‌دهنده هاست جدید با قابلیت نگاشت دامنه اضافه شد.
- جدید: Site Exporter حالا بسته‌های ایمپورت شبکه (network import bundles) رو مدیریت می‌کنه تا بازیابی سایت در کل شبکه خیلی راحت‌تر بشه.
- رفع اشکال: ایمیل‌های BCC broadcast حالا از یک هدر ناشناس برای جلوگیری از لو دادن آدرس گیرنده استفاده می‌کنن.
- رفع اشکال: تاریخ انقضای عضویت دیگه وقتی با مقدار غیرتاریخ ذخیره می‌شه خراب نمی‌شه.
- رفع اشکال: به‌روزرسانی‌های عضویت Stripe حالا به درستی تخفیف‌ها رو پاک می‌کنن بدون اینکه از API حذف تخفیف قدیمی استفاده کنن.
- رفع اشکال: ریدایرکت‌های SSO روی سایت‌هایی که دامنه دارن، برای جلوگیری از حلقه‌های ریدایرکت بی‌پایان محدود شدن انجام شده.
- رفع اشکال: انتخاب تصویر در wizard تنظیمات حالا به درستی مدل داده زیرین رو به‌روز می‌کنه.
- رفع اشکال: Site Exporter CLI حالا انتخاب سایت شبکه پیش‌فرض درست رو حفظ می‌کنه.
- بهبود یافته: wp-cli بسته‌بندی شده از بسته پلاگین حذف شد و اندازه پلاگین کوچکتر شد.

## الإصدار ٢.١١.٠ — ٢٠٢٦-٠٥-١١ نُشر {#version-2110--released-on-2026-05-11}

- جدید: خروجی سایت‌ها حالا یک `index.php` خود را بوت‌کننده (self-booting) بسته‌بندی می‌کنه تا فایل ZIP بدون نیاز به نصب پلاگین جداگانه روی هاست جدید هم قابل نصب باشه.
- جدید: خروجی شبکه اجازه می‌ده مدیران از صفحه مدیریت Site Export، همه زیرسایت‌ها رو در یک آرشیو خارج کنن.
- جدید: قابلیت تغییر طرح سایت قالب (Site Templates plan toggle) حالا با یک زنجیره پشتیبان اعمال می‌شه تا دسترسی به قالب‌ها بر اساس محدودیت‌های طرح‌ها درست محدود بشه.
- جدید: ویرایشگر فرم چک‌اوت وقتی محصولی اضافه می‌شه که فیلد مورد نیاز تنظیم نشده، هشدار می‌ده.
- جدید: تب تنظیمات ایمپورت/اکسپورت حالا محدوده کارش رو به وضوح توضیح می‌ده و مستقیماً به ابزار Site Export لینک داده شده.

## الإصدار ٢.١٠.٠ — ٢٠٢٦-٠٥-٠٥ نُشر {#version-2100--released-on-2026-05-05}

- نوید: دستی اعتبار bilgileri girişi için PayPal rehberli kurulum sihirbazı, sorunsuz gateway yapılandırması için OAuth bayrak kapısı eklendi.
- Yeni: Şablon değiştirme müşteri paneli güncellendi; mevcut-şablon kartı, kalıcı ızgara ve **Mevcut şablonu sıfırla** butonu ile yeniden tasarlandı.
- Düzeltme: Şablon değiştirirken AJAX hatası durumunda arayüzün takılı kalması artık olmuyor.
- Düzeltme: Şablon değiştirme izin durumları yetkisiz erişime karşı güvence altına alındı.
- Düzeltme: Site geçersiz kılma girdileri kaydetmeden önce doğrulanıyor.
- Düzeltme: Adres boş olduğunda fatura adresi istemi artık gösteriliyor.
- Düzeltme: PHP 8.1 null'dan string'e geçiş uyarıları giderildi.
- Düzeltme: Zamanlama sorunlarını önlemek için mevcut lazy-loaded (tembel yüklenen) öğeler init hook'undan önce yapılıyor.
- Düzeltme: Filtrelenmiş SSO yolu tüm giriş akışlarında korunuyor.
- Düzeltme: Kaydedilirken boş site kimliği seçenekleri korundu.

## Sürüm 2.9.0 — 30 Nisan 2026'da Yayınlandı {#version-290--released-on-2026-04-30}

- Yeni: **Araçlar > Dışa/İçe Aktar** altında tek site dışa aktarma ve içe aktarma eklendi.
- Düzeltme: ZIP dosyaları artık kimlik doğrulamalı bir indirme uç noktası üzerinden sunuluyor.
- Düzeltme: Bekleyen dışa/içe aktarma sorgularındaki SQL injection riski ve sorgu sorunları düzeltildi.
- Düzeltme: Yönetici müşteri e-postasını manuel olarak doğruladığında bekleyen site yayınlanmıyor.
- Düzeltme: Üyelik eksik olduğunda yetim kalmış pending_site kayıtları temizlendi.
- Düzeltme: Ayarlar gezinme dolgusu ve arama çubuğu bağlantı navigasyonu düzeltildi.
- Düzeltme: Bekleyen siteler artık Tüm Siteler görünümünde ilk sırada gösteriliyor.
- Düzeltme: Ekran görüntüsü sağlayıcısı (mShots) 403 hatalarını önlemek için User-Agent başlığı eklendi.
- Düzeltme: İçe aktarma cron programı dairesel bağımlılığı çözüldü.
- Düzeltme: Kullanıcı ayarları anahtarlarında Tour ID'ler alt çizgiye dönüştürüldü.
- Geliştirildi: Daha iyi uyumluluk için ZipArchive artık Alchemy/Zippy yerine kullanılıyor.

## Sürüm 2.8.0 — 29 Nisan 2026'da Yayınlandı {#version-280--released-on-2026-04-29}

جدید: Other Options تنظیمات رابط کاربری (UI) içine Jumper دکمه‌اش اضافه edildi.
جدید: Checkout formlar list masasında Status sütunu eklendi.
جدید: Özel MU-plugin sunrise uzantıları için Addon sunrise dosya yükleyicisi eklendi.
İyileştirildi: Ayarlar sayfasından hata raporlama seçeneği kaldırıldı.
Düzeltme: Teşekkür sayfası site kartı — resim artık kısıtlanmış ve bağlantılar doğru stilize edildi.
Düzeltme: Ekran görüntüsü sağlayıcısı thum.io'dan WordPress.com mShots'a değiştirildi.
Düzeltme: Kayıt (Registration) ve Varsayılan Rol (Default Role) etkinleştirildi, artık yeni kurulumlarda doğru varsayılan değerleri alıyor.
Düzeltme: `get_site_url()` artık alan adında port olsa bile boş dönmüyor.
Düzeltme: `copy_media` ayarı boşken medya dosyalarının kopyalanması şimdi doğru yapılıyor.
Düzeltme: Network-activate sitemeta yazıldıktan sonra Object cache doğru şekilde geçersiz kılınıyor.
Düzeltme: 3 parçalı alan adları için DNS doğrulamasında özel alan adı otomatik olarak birinciliğe yükseltiliyor (auto-promoted).
Düzeltme: Süresi dolmuş ödeme temizlendiğinde bekleyen üyelik iptal ediliyor.
Düzeltme: Satır içi giriş istemi kapatıldıktan sonra şifre gücü kontrolü geri döndürüldü.
Düzeltme: Site zaten oluşturulmuşsa teşekkür sayfasında sonsuz sayfa yenilemesi durduruldu.
Düzeltme: Plugin etkinleştirme ve ayarlar kaydedilmesi sırasında WP core kayıt seçeneği senkronize edildi.
Düzeltme: PHP 8.4 uyumluluğu için `calculate_expiration` içinde Null expiration koruması eklendi.
Düzeltme: Müşterinin zaten aktif bir üyeliği varsa, çift kayıtlar engellendi.
Düzeltme: Checkout'ta `date_expiration` için Null kontrolü eklendi.
Düzeltme: Site sağlama (Site provisioning) güçlendirildi — sınırlamalar, üyelik çıkarımı ve alan adı yükseltilmesi.
Düzeltme: Kontrol başarısız olduğunda Pre-install kontrol durumu etiketi NOT Activated olarak düzeltildi.
Düzeltme: E-posta doğrulama URL'leri için checkout alanı kullanılıyor.
Düzeltme: Şifre alanı yoksa checkout sonrası otomatik giriş (Auto-login) yapılıyor.
Düzeltme: Ücretsiz üyelikler artık süresi dolmuyor — ömür boyu olarak kabul ediliyor.

- Түзету: Электрон почтани тасдиқлау (email verification) барьеры müşteri электрон почтасын тасдиқланайүнча сайтты жой бермез.
- Түзету: SES v2 API endpoint базалык жолу жана идентификация маршруту туураланды.
- Түзету: `wu_inline_login_error` hook'у submit алдында кабырча блоктун ичинде чыгарылды (emitted).
