---
title: Çoklu sayt Kurulum Sihirbazı
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite راه‌اندازی راهنما

Ultimate Multisite شامل یک راهنمای داخلی است که نصب استاندارد وردپرس شما را به طور خودکار به یک شبکه وردپرس Multisite تبدیل می‌کند. این کار نیاز به ویرایش دستی فایل `wp-config.php` یا اجرای دستورات دیتابیس را از بین می‌برد.

:::tip
اگر نصب وردپرس شما از قبل به عنوان یک شبکه Multisite در حال اجراست، می‌توانید این مرحله را کاملاً رد کنید. راهنما فقط زمانی ظاهر می‌شود که هنوز Multisite فعال نشده باشد.
:::

## راهنما چه زمانی ظاهر می‌شود؟ {#when-does-the-wizard-appear}

وقتی Ultimate Multisite را روی یک نصب استاندارد (غیر Multisite) وردپرس فعال می‌کنید، افزونه متوجه می‌شود که Multisite فعال نیست و به جای راهنمای تنظیمات معمولی، شما را مستقیماً به راهنمای راه‌اندازی Multisite هدایت می‌کند.

همچنین می‌توانید مستقیماً از طریق **WP Admin > Ultimate Multisite > Multisite Setup** به آن دسترسی پیدا کنید.

## پیش‌نیازها {#prerequisites}

قبل از اجرای راهنما، مطمئن شوید:

- شما **دسترسی مدیر (administrator access)** به نصب وردپرس خود را دارید
- فایل `wp-config.php` سرور شما توسط وب سرور **قابل نوشتن (writable)** است
- یک **پشتیبان اخیر** از فایل‌ها و دیتابیس خود دارید

:::warning
این راهنما فایل `wp-config.php` شما را تغییر می‌دهد و جداول پایگاه داده جدید ایجاد می‌کند. همیشه قبل از ادامه کار، یک نسخه پشتیبان تهیه کنید.
:::

## مرحله ۱: خوش‌آمدگویی (Welcome) {#step-1-welcome}

صفحه اول توضیح می‌دهد که وردپرس Multisite چیست و راهنما چه کارهایی انجام خواهد داد:

- قابلیت Multisite را در تنظیمات وردپرس خود فعال کنید
- جداول پایگاه داده شبکه مورد نیاز را ایجاد کنید
- ثابت‌های ضروری Multisite را در `wp-config.php` اضافه کنید
- Ultimate Multisite را در کل شبکه فعال کنید

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

برای ادامه، روی **Continue** کلیک کنید.

## مرحله ۲: پیکربندی شبکه (Network Configuration) {#step-2-network-configuration}

این مرحله از شما می‌خواهد تنظیمات شبکه خود را پیکربندی کنید.

### ساختار سایت (Site Structure) {#site-structure}

شما شبکه سایتleriniz nasıl organize etmek istediğinizi seçin:

- **Alt alan adları (Sub-domains)** (Tavsiye edilen) — Her site kendi alt alan adına sahip olacak, örneğin `site1.yourdomain.com` gibi.
- **Alt dizinler (Sub-directories)** — Siteler yollar olarak oluşturulur, örneğin `yourdomain.com/site1`.

:::note
Eğer alt alan adları seçerseniz, alan adınız için **wildcard DNS** ve bir **wildcard SSL sertifikası** yapılandırmanız gerekecek. Çoğu yönetilen WordPress barındırma hizmeti bunu otomatik olarak halleder. Detaylı karşılaştırma için [Ultimate Multisite 101](https://ultimate-multisite-101) adresine bakın.
:::

### Ağ Başlığı (Network Title) {#network-title}

Ağınız için bir isim girin. Bu, varsayılan olarak mevcut site başlığınızın sonuna "Network" eklenir. Bunu daha sonra ağ ayarlarından değiştirebilirsiniz.

### Ağ Yönetici E-postası (Network Admin Email) {#network-admin-email}

Ağ yönetimi bildirimleri için kullanılan e-posta adresi. Bu, varsayılan olarak mevcut kullanıcının e-posta adresidir.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Alanları doldurduktan sonra ilerlemek için **Devam et (Continue)** butonuna tıklayın.

## Adım 3: Kurulum (Installation) {#step-3-installation}

Başlamak için **Kur (Install)** butonuna tıklayın. Sihirbaz, her bir adımın ilerlemesini gerçek zamanlı olarak göstererek beş otomatik adımı sırayla gerçekleştirir:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Шаг | توضیحات |
|------|-------------|
| **Multisite-niqdar Etkinlashtirish** | `wp-config.php` faylida `WP_ALLOW_MULTISITE` konstantasini qo'shish |
| **Tarmoqni Yaratish** | Multisite ma'lumotlar bazasi jadvallarini (`wp_site`, `wp_sitemeta`, `wp_blogs` va h.k.) yaratish va ularni tarmoq konfiguratsiyangiz bilan to'ldirish |
| **Konfiguratsiyani Yangilash** | Yakuniy multisite konstantalarini `wp-config.php` fayliga qo'shish (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` va h.k.) |
| **Cookie'larni Tuzatish** | Faollashtirishdan keyin autentifikatsiya muammolarini oldini olish uchun tarmoq metadata ichidagi sayt URL-si to'g'ri ekanligini ta'minlash |
| **Tarmoqni Faollashtirish Plugini** | Ultimate Multisite ni tarmoqda butun tarmoq bo'ylab ishlaydi deyish uchun faollashtirish |

Har bir qadam quyidagi holatlardan birini ko'rsatadi:

- **Pending (Kutilmoqda)** — qayta ishlash uchun kutmoqda
- **Installing... (O'rnatilmoqda...)** — Hozir ishlayotgan
- **Success! (Muvaqqin!)** — Muammosiz muvaffaqiyatli yakunlandi
- **Error message (Xato xabari)** — Xato yuz berdi (xabar muammoni tasvirlaydi)

Barcha qadamlar muvaffaqiyatli tugagandan so'ng, har bir element uchun yashil "Success!" holatini ko'rasiz:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Keyin wizard avtomatik ravishda yakunlash ekraniga o'tadi.

## 4-Шаг: Yakunlash {#step-4-complete}

O'rnatish tugagach, WordPress Multisite faollashtirilganini tasdiqlaydigan muvaffaqiyat xabari ko'rasiz.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Endi siz Ultimate Multisite sozlash wizardidan foydalanib WaaS platformangizni (kompaniya ma'lumotlari, standart kontent, to'lov eshig'i va h.k.) konfiguratsiya qilishda davom etishingiz mumkin.

:::note
Multisite kurulumu bittikten sonra tarayıcınız yeni etkinleştirilen ağ yöneticisi üzerinden yönlendirilecektir. Multisite ortamı için kimlik doğrulama çerezleri güncellendiği için tekrar giriş yapmanız gerekebilir.
:::

## Manuel Kurulum Yedek Planı (Manual Setup Fallback) {#manual-setup-fallback}

Eğer sihirbaz (`wizard`) `wp-config.php` dosyanıza yazı yazamıyorsa (dosya izinleri veya sunucu kısıtlamaları nedeniyle), size manuel olarak eklemeniz gereken tam kodu gösterecektir:

1. `/* That's all, stop editing! */` satırının üstüne eklemeniz gereken **wp-config.php sabitleri**
2. Seçtiğiniz site yapısına (alt alan adı veya alt dizin) uygun **.htaccess yeniden yazma kuralları**

Manuel değişiklikleri yaptıktan sonra sayfayı yenileyin ve sihirbazın multisite'ın artık aktif olduğunu algılamasını sağlayın.

## Sorun Giderme (Troubleshooting) {#troubleshooting}

### Sihirbaz `wp-config.php` yazılamaz diyor {#the-wizard-says-wp-configphp-is-not-writable}

Web sunucusu işleminin `wp-config.php` dosyasına yazma iznine ihtiyacı var. Bunu şu yollardan biriyle çözebilirsiniz:

- Dosya izinlerini geçici olarak `644` veya `666` olarak değiştirin
- Sihirbaz tarafından sağlanan manuel kurulum yedek planı talimatlarını kullanın
- Barındırma sağlayıcınızdan yardım isteyin

### Kurulumdan sonra sitelere erişilemiyor (alt alan adları) {#sites-are-not-accessible-after-setup-subdomains}

Eğer alt alan adı yapısını seçtiyseniz, alan adınız için **wildcard DNS** yapılandırmanız gerekiyor. Bir DNS kaydı ekleyin:

```
Type: A (veya CNAME)
Host: *
Value: [sunucu IP adresiniz]
```

Bu nasıl yapılandırılacağını bilmiyorsanız lütfen barındırma sağlayıcınızla kontrol edin.

### Kurulumdan sonra kimlik doğrulama sorunları {#authentication-issues-after-setup}

Multisite kurulumundan sonra çıkış yaparsanız veya çerez hataları alırsanız:

1. Tarayıcınızdaki site için çerezleri temizleyin
2. `yourdomain.com/wp-login.php` adresinden tekrar giriş yapın
3. Sorun devam ederse, `wp-config.php` dosyanızda `COOKIE_DOMAIN` ayarının `false` olarak ayarlanmadığından emin olun — bu alt alan adı multisite kurulumlarında bilinen bir sorundur.

### Kurulum sırasında bir adım başarısız oldu {#a-step-failed-during-installation}

اگر نصب مراحل از یکی خطا داد:

۱. اون خطای پیامش رو یادداشت کن.
۲. برگرد به مرحله تنظیمات و دوباره امتحان کن.
۳. اگه خطا همچنان ادامه داشت، لاگ خطاهای PHP سرور خودت رو برای جزئیات بیشتر چک کن.
۴. مراحلی که قبلاً انجام شدن در اجراهای بعدی نادیده گرفته می‌شن (نصب‌کننده خودش تکرارپذیر است).
