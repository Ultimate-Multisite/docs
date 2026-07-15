---
title: Үч-үчтү режимде миграция
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# üçüncü taraf modu geçişi

Superdav AI Agent v1.12.0, üçüncü taraf yeteneklerin nasıl ele alınacağını değiştiriyor. **Üçüncü taraf modu artık otomatik olarak varsayılan**; bu sayede WordPress 7.0 ve üzeri sürümlerde manuel yapılandırma yapmadan yerel WordPress Abilities API entegrasyonunu kullanabilirsiniz.

## Ne Değişti? {#what-changed}

### v1.12.0 Öncesi {#before-v1120}

Üçüncü taraf yetenekler için manuel yapılandırma gerekiyordu:

- "üçüncü taraf modu"nu açıkça etkinleştirmeniz gerekiyordu
- Yetenekler özel bir kayıt defterinden yükleniyordu
- WordPress Abilities API ile entegrasyon isteğe bağlıydı
- Eski mod varsayılan olarak ayarlıydı

### v1.12.0 Sonrası {#after-v1120}

Üçüncü taraf yetenekler otomatik çalışır:

- Üçüncü taraf modu "auto" (otomatik) olarak varsayılır
- Yetenekler WordPress Abilities API ile yerel olarak entegre olur
- WordPress 7.0 ve üzeri sürümlerde manuel yapılandırmaya gerek yoktur
- Daha eski WordPress sürümleri için eski mod hala mevcuttur

## Kimler Etkileniyor? {#who-is-affected}

### Yeni Kurulumlar (WordPress 7.0+) {#new-installations-wordpress-70}

**Hiçbir işlem yapmanıza gerek yok.** Üçüncü taraf modu otomatik olarak "auto" olarak ayarlanmıştır ve yetenekler kutudan çıktığı gibi çalışır.

### Mevcut Kurulumlar {#existing-installations}

**Ayarlarınız korunur.** Eğer şunları kullanıyorsanız:

- **Eski mod (Legacy mode)**: Eski modda kalırsınız (değişiklik yok)
- **Manuel üçüncü taraf modu**: Manuel modda kalırsınız (değişiklik yok)
- **Auto modu**: Auto modda devam edersiniz (değişiklik yok)

### 7.0 Öncesi WordPress Sürümleri {#wordpress-versions-before-70}

**Eski mod hala mevcuttur.** Eğer WordPress 6.x veya daha eski bir sürüm kullanıyorsanız:

- Üçüncü taraf modu "legacy" olarak varsayılır
- İsterseniz üçüncü taraf modu manuel olarak etkinleştirebilirsiniz
- Yerel Abilities API'yi kullanmak için WordPress 7.0+ sürümüne yükseltin

## Modları Anlamak {#understanding-the-modes}

### Auto Modu (Yeni Varsayılan) {#auto-mode-new-default}

**Auto modu**, yerel WordPress Abilities API entegrasyonunu kullanır:

- Yetenekler WordPress hook'ları aracılığıyla kaydedilir
- WordPress 7.0 ve üzeri Abilities API ile tam uyumluluk
- Üçüncü taraf yeteneklerinin otomatik keşfi
- Manuel yapılandırmaya gerek yoktur

**چه زمانی استفاده کنیم**: وردپرس ۷.۰+ و üçüncü taraf قابلیت‌ها (third-party abilities) با هم کار کردن

### دستی حالت (Manual Mode) {#manual-mode}

**دستی حالت** برای تنظیمات مشخص نیاز داره:

- شما چه üçüncü taraf قابلیت‌هایی yüklemek istediğinizi belirtirsiniz
- تست করার জন্য یا seçici olarak yetenekleri yüklemek için kullanışlıdır
- yapılandırma dosyalarını düzenlemeniz gerekir
- Daha fazla kontrol sağlar, ama daha çok kurulum gerektirir

**Ne zaman kullanmalı**: Test etmek, seçici yetenek yüklemek veya özel ayarlar yapmak istediğinizde.

### Eski (Legacy) Mod {#legacy-mode}

**Eski mod**, eski üçüncü taraf yetenek sistemini kullanır:

- Özel yetenek kaydı (WordPress Abilities API değil)
- Daha eski WordPress sürümleriyle uyumludur
- Yerel WordPress entegrasyonu yoktur
- Eskimiş olsa da hala desteklenmektedir

**Ne zaman kullanmalı**: WordPress 6.x veya daha eski sürümlerdeysanız, ya da eski uyumluluğa ihtiyacınız varsa.

## Mevcut Modunuzu Kontrol Etme {#checking-your-current-mode}

### Yönetim Paneli Üzerinden (Via Admin Panel) {#via-admin-panel}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** yolunu izleyin
2. **Third-Party Mode** ayarını arayın
3. Mevcut modunuzu ve bunu değiştirmek için seçenekleri göreceksiniz.

### Kod Üzerinden (Via Code) {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', or 'legacy'
```

## Modunuzu Değiştirme {#changing-your-mode}

### Otomatik Mode'a Geçiş Yapma (Switch to Auto Mode) {#switch-to-auto-mode}

Eğer WordPress 7.0+ kullanıyorsanız ve otomatik modu kullanmak istiyorsanız:

1. **Superdav AI Agent** → **Settings** yolunu izleyin
2. **Third-Party Mode** ayarını bulun
3. **Auto (WordPress Abilities API)** seçeneğini seçin
4. **Save**'a tıklayın

Superdav AI Agent, üçüncü taraf yetenekleri otomatik olarak keşfedip kaydeder.

### Manuel Mode'a Geçiş Yapma (Switch to Manual Mode) {#switch-to-manual-mode}

Eğer hangi yeteneklerin yükleneceğini manuel olarak kontrol etmek istiyorsanız:

1. **Superdav AI Agent** → **Settings** yolunu izleyin
2. **Third-Party Mode** ayarını bulun
3. **Manual** seçeneğini seçin
4. **Save**'a tıklayın
5. Hangi yeteneklerin yükleneceğini belirtmek için yapılandırma dosyanızı düzenleyin.

### Eski Moda Geçiş Yapma (Switch to Legacy Mode) {#switch-to-legacy-mode}

Eğer eski uyumluluğa ihtiyacınız varsa:

۱. **Superdav AI Agent**-e kidin → **Settings** (تنظیمatlar)
۲. **Third-Party Mode** (Üçüncü Taraf Modu)ni taping
۳. **Legacy** (Eski Mod)ni tanlab
۴. **Save** (Kaydet) butonuna bas

## Auto Mode'ning Faydaları {#benefits-of-auto-mode}

### Avtomatik Keşif (Automatic Discovery) {#automatic-discovery}

Qabillatlar avtomatik olaraq şundan keşfedilir:

- Quraşdırilgan pluginlar (plugins)
- Faal tema (theme)
- Zəruri pluginlar (Must-use plugins)
- Drop-in pluginlar

Manuel qeydiyyatga ehtiyac yo'q.

### Mahalliy Integratsiya (Native Integration) {#native-integration}

Qabillatlar WordPress Abilities API bilan integratsiya qilinadi:

- WordPress asosiy tizimi bilan mos keladi
- WordPress admin panelida ishlaydi
- Abilities API dan foydalanadigan boshqa pluginlar bilan ham mos keladi
- WordPress rivojlanishi bilan kelajakga tayyor (Future-proof) bo'ladi

### Oddiy Boshqaruv (Simplified Management) {#simplified-management}

- Tahrirlash uchun konfiguratsiya fayllari yo'q
- Manuel qabillat ro'yxatdan o'tkazish kerak emas
- Ability Visibility nazoratlari avtomatik ishlaydi
- Admin xabarlari sizga tasniflanmagan qabillatlarni eslatadi

### Yaxshil Ishlash (Better Performance) {#better-performance}

- Qabillatlar cache (tezkor saqlash) qilinadi
- Talab etilganda sekin yuklanadi (Lazy-loaded)
- WordPress 7.0+ uchun optimallashtirilgan

## Migratsiya Yo'li (Migration Path) {#migration-path}

### Agar Siz WordPress 6.x da bo'lsangiz {#if-youre-on-wordpress-6x}

۱. **WordPress 7.0+ ga yangilang** (tayyor bo'lgach)
۲. **Superdav AI Agentni v1.12.0+ ga yangilang**
۳. **Third-party mode ni Auto ga o'zgartiring** (ixtiyoriy; legacy mode hali ham ishlaydi)
۴. To'g'ri kirish nazoratlari uchun qabillat ko'rinishini tekshiring

### Agar Siz WordPress 7.0+ da bo'lsangiz {#if-youre-on-wordpress-70}

۱. **Superdav AI Agentni v1.12.0+ ga yangilang**
۲. **Third-party mode ning Auto ga sozlangani tasdiqlang** (bu ko'pincha default holatda bo'lishi kerak)
۳. To'g'ri kirish nazoratlari uchun qabillat ko'rinishini tekshiring
۴. Ular ishlayotganligini tasdiqlash uchun third-party qabillatlarni sinab ko'ring

## Muammolarni Qayta Ko'rib Chiqish (Troubleshooting) {#troubleshooting}

### Auto mode da qabillatlar yuklanmayapti {#abilities-arent-loading-in-auto-mode}

- Siz WordPress 7.0+ da ekanligingizni tekshiring
- Third-party mode ning "Auto" ga sozlangani tekshiring
- Qabillatni taqdim etuvchi plugin faol ekanligini tekshiring
- Ro'yxatdan o'tkazish xatolarini WordPress xato yozuvlaridan (error logs) tekshiring

### Men legacy mode ni saqlab qolmoqchiman {#i-want-to-keep-legacy-mode}

- **Settings** → **Third-Party Mode** ga kiring
- **Legacy**ni tanlang
- **Save**ga bosing
- Legacy mode hali ham ishlayveradi

### من خودم سفارشی قابلیت‌هام نمایش داده نمی‌شه {#my-custom-abilities-arent-showing}

- مطمئن شوید که از طریق هوک‌های وردپرس ثبت شده‌اند
- بررسی کنید که آن‌ها API قابلیت‌ها را به درستی پیاده‌سازی می‌کنند
- لاگ‌های خطا (error logs) وردپرس را مرور کنید
- برای دیدن تمام قابلیت‌های ثبت شده، از صفحه مدیریت **Ability Visibility** استفاده کنید

### من پیام‌های "قابلیت طبقه‌بندی نشده" دریافت می‌کنم {#im-getting-unclassified-ability-notices}

- این برای قابلیت‌های جدید شخص ثالث طبیعی است
- آن‌ها را در اعلان‌های مدیریت بررسی و طبقه‌بندی کنید
- جزئیات طبقه‌بندی در **Ability Visibility** را ببینید

## سازگاری با نسخه‌های قدیمی (Backward Compatibility) {#backward-compatibility}

### تنظیمات موجود {#existing-configurations}

اگر تنظیمات قابلیت‌های شخص ثالث قبلی دارید:

- **حالت قدیمی (Legacy mode)**: تنظیمات شما همچنان کار می‌کند
- **حالت دستی (Manual mode)**: تنظیمات شما همچنان کار می‌کند
- **حالت خودکار (Auto mode)**: تنظیمات شما نادیده گرفته می‌شود (حالت خودکار کنترل را به دست می‌گیرد)

برای حفظ تنظیمات سفارشی خود، در حالت دستی یا قدیمی باقی بمانید.

### جدول زمان منسوخ شدن (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: حالت‌های Legacy و Manual همچنان کاملاً پشتیبانی می‌شوند
- **v1.13.0+**: ممکن است حالت Legacy پیام‌های منسوخ‌شدگی نشان دهد
- **v2.0.0**: ممکن است حالت Legacy حذف شود (در حال تعیین)

## بهترین روش‌ها (Best Practices) {#best-practices}

### برای نصب‌های جدید {#for-new-installations}

- از حالت Auto استفاده کنید (این حالت پیش‌فرض است)
- اجازه دهید Superdav AI Agent قابلیت‌ها را به صورت خودکار کشف کند
- برای کنترل دسترسی از Ability Visibility استفاده کنید

### برای نصب‌های موجود {#for-existing-installations}

- در صورت امکان، به وردپرس 7.0+ ارتقا دهید
- برای مدیریت ساده‌تر به حالت Auto تغییر وضعیت دهید
- با استفاده از Ability Visibility قابلیت‌ها را بررسی و طبقه‌بندی کنید

### برای قابلیت‌های سفارشی شما {#for-custom-abilities}

- قابلیت‌ها را از طریق هوک‌های وردپرس ثبت کنید (Abilities API)
- از رجیستری‌های قابلیت سفارشی دوری کنید
- روی وردپرس 7.0+ با حالت Auto تست کنید

## گام‌های بعدی (Next Steps) {#next-steps}

1. **WordPress versiyangizni tekshiring**: Otomatik mod (Auto mode) için 7.0+ sürümde olduğunuzdan emin olun.
2. **Üçüncü taraf modunuzu gözden geçirin**: Ayarlar'a gidin ve mevcut modunuzu kontrol edin.
3. **Gerekirse güncelleyin**: WordPress 7.0+ kullanıyorsanız Otomatik moda geçin.
4. **Yetenekleri sınıflandırın**: Sınıflandırılmamış herhangi bir yeteneği gözden geçirin ve sınıflandırın.
5. **Test edin**: Üçüncü taraf yeteneklerinizin doğru çalıştığını doğrulayın.

## İlgili Konular {#related-topics}

- **Yetenek Görünürlüğü (Ability Visibility)**: Hangi yeteneklerin nerede gösterileceğini kontrol edin.
- **WordPress Abilities API**: Yerel WordPress yetenek kaydı hakkında bilgi edinin.
- **Üçüncü Taraf Yetenek Geliştirme (Third-Party Ability Development)**: Otomatik mod ile çalışan yetenekler oluşturun.
