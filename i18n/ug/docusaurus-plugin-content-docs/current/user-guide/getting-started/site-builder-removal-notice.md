---
title: Sayt Quril Modusini Kaldırma Bildirimi
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# سايت بيلدر مود ازالدوغ نوتيس {#site-builder-mode-removal-notice}

**سايت بيلدر مود Superdav AI Agent v1.12.0-dağaldı.** Əgər siz Site Builder modunu istifadə edirdinizsə, tema yaratmaq və sayt qurmaq üçün **Setup Assistant agentine** keçməlisiniz.

## Nə Oldu? {#what-happened}

### Site Builder Modu (Köhnəlmiş) {#site-builder-mode-legacy}

Site Builder modu aşağıdakılar üçün wizard əsaslı bir interfeys idi:

- Şablonlardan saytlar yaratmaq
- Əsas parametrləri konfiqurasiya etmək
- Tema seçmək
- İlkin məzmunu qurmaq

### Onu Nə Əvəzlədi? {#what-replaced-it}

**Setup Assistant agenti** indi bütün Site Builder funksiyalarını aşağıdakılarla idarə edir:

- Daha çevik, agent tərəfindən yönləndirilmiş qurulma
- Tema özü tənzimləmək üçün daha yaxşı imkanlar
- Theme Builder-in giriş (onboarding) prosesi ilə inteqrasiya
- Gələcək sessiyalar üçün `site_brief` yaddaşının saxlanılması

## Əgər Site Builder Modunu İstifadə Edirdinizsə {#if-you-were-using-site-builder-mode}

### Saytlarınız Təhlükədə Deyil {#your-sites-are-safe}

- Site Builder modu ilə yaradılmış mövcud saytlar işləməyə davam edir
- Datar itkisi və ya saytın pozulması yoxdur
- Saytlarınızı normal şəkildə idarə etməyə davam edə bilərsiniz

### Setup Assistant Agentinə Keçirin {#migrate-to-setup-assistant-agent}

Yeni sayt qurmaq və ya tema dəyişiklikləri üçün Setup Assistant agentindən istifadə edin:

```
"Help me set up a new site"
```

və ya

```
"Start the Theme Builder onboarding"
```

Setup Assistant agenti daha çox çevikliklə eyni funksionallığı təqdim edir.

## Müqayisə: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Xüsusiyyət | Site Builder (Azaldı) | Setup Assistant (Yeni) |
|---------|----------------------|----------------------|
| Qurulma Metodu | Wizard forması | Agent söhbəti |
| Tema Seçimi | Önəmli şablonlar | Öz tənzimləmə |
| Tənzimləmə | Məhdud seçimlər | Tam dizayn sistemi |
| Sayt Qıssası (Site brief) | Saxlanılmır | Davamlı yaddaş |
| Gələcək Sessiyalar | Təkrar qurulma | Saxlanmış site_brief istifadə etmə |
| Çeviklik | Sabit iş axını | Adaptiv söhbət |

## Setup Assistant Agentinə Keçmək {#migrating-to-setup-assistant-agent}

### Yeni Saytlar Üçün {#for-new-sites}

سایت ساز حالت yerine:

۱. درخواست: "Yeni bir site kurmama yardım et"
۲. Kurulum Asistan ajanı size şun konuda rehberlik edecek:
   - Sitenin amacı ve hedefleri
   - Hedef kitle
   - Marka kimliği
   - Tema oluşturma
   - İlk yapılandırma

### Mevcut Siteler İçin {#for-existing-sites}

Eğer Site Builder modundan bir siteniz varsa:

۱. Onu olduğu gibi kullanmaya devam edebilirsiniz.
۲. Temayı güncellemek için şunu isteyin: "Sitemi yeniden tasarla"
۳. Kurulum Asistan ajanı size yeni bir tema oluşturmanızda yardımcı olacak.
۴. Sitenizdeki verileriniz değişmeyecek.

### Tema Değişiklikleri İçin {#for-theme-changes}

Site Builder modunun tema seçiminin yerine:

۱. İstek: "Temamı değiştir"
۲. Kurulum Asistan ajanı şunları yapacak:
   - Tasarım tercihlerinizi soracak
   - Özel bir tema oluşturacak
   - Onu sitenizde etkinleştirecek

## Temel Farklar {#key-differences}

### Site Builder Modu {#site-builder-mode}

```
۱. Bir şablon seçin
۲. Bir tema seçin
۳. Temel ayarları yapılandırın
۴. Bitti
```

### Kurulum Asistan Ajanı {#setup-assistant-agent}

```
۱. Sitenizin amacını anlatın
۲. Hedef kitlenizi tanımlayın
۳. Tasarım tercihlerinizi seçin
۴. Ajan özel tema oluşturur
۵. Ajan temayı etkinleştirir
۶. Gelecekteki oturumlar için site özeti saklanır
```

## Kurulum Asistan Ajanının Avantajları {#benefits-of-setup-assistant-agent}

### Daha Esnek {#more-flexible}

- Sitenizi doğal dilde tarif edin
- Özel öneriler alın
- Belirli ihtiyaçlarınıza uyum sağlayın

### Daha İyi Özelleştirme {#better-customization}

- Özel tema oluşturma
- Tasarım sistemi kararları
- Kalıcı tasarım belirteçleri (design tokens)

### Kalıcı Hafıza {#persistent-memory}

- Sitenizin özeti (`site_brief`) saklanır
- Gelecekteki ajanlar sitenizi anlar
- Kurulum bilgilerini tekrar tekrar sormaya gerek kalmaz

### Entegre İş Akışı {#integrated-workflow}

- Tema Oluşturma (Theme Builder) başlangıç süreci
- Tasarım Sistemi Estetiği becerisi
- Görünürlük kontrolleri yeteneği
- Tüm işler sorunsuz bir şekilde birlikte çalışır

## Sorun Giderme {#troubleshooting}

### Site Builder modunu bulamıyorum {#i-cant-find-site-builder-mode}

Site Builder modu kaldırıldı. Bunun yerine Kurulum Asistan ajanını kullanın:

"من یک سایت جدید را تنظیم کنم راهنمایی کنید"

### من می‌خواهم یک سایت را از Site Builder دوباره بسازم {#i-want-to-recreate-a-site-from-site-builder}

شما می‌توانید با دستیار Setup Assistant آن را بازسازی کنید:

۱. درخواست دهید: "من می‌خواهم یک سایت جدید را تنظیم کنم راهنمایی کنید"
۲. هدف و طراحی سایت اصلی خود را توصیف کنید
۳. عامل (agent) یک قالب مشابه تولید خواهد کرد
۴. `site_brief` شما برای ارجاع در آینده ذخیره می‌شود

### سایت Site Builder قدیمی من کار نمی‌کند {#my-existing-site-builder-site-isnt-working}

سایت‌های ساخته شده با حالت Site Builder همچنان کار می‌کنند. اگر مشکلی دارید:

۱. بررسی کنید که آیا قالب (theme) شما هنوز فعال است یا خیر
۲. تأیید کنید که افزونه‌ها (plugins) شما فعال هستند
۳. لاگ‌های خطا (error logs) وردپرس را چک کنید
۴. اگر مشکل ادامه داشت با پشتیبانی تماس بگیرید

### آیا می‌توانم از قالب‌های قدیمی Site Builder خود استفاده کنم؟ {#can-i-still-use-my-old-site-builder-templates}

قالب‌های Site Builder دیگر در دسترس نیستند. اما:

- سایت‌های موجود شما همچنان کار می‌کنند
- می‌توانید سایت‌های مشابه را با عامل Setup Assistant دوباره بسازید
- عامل Setup Assistant گزینه‌های سفارشی‌سازی بیشتری ارائه می‌دهد

## مراحل بعدی {#next-steps}

۱. **برای سایت‌های جدید**: از عامل Setup Assistant استفاده کنید
۲. **برای سایت‌های موجود**: همانطور که هستند به کارتان ادامه دهید
۳. **برای تغییر قالب**: درخواست کمک از عامل Setup Assistant کنید
۴. **برای اصلاح طراحی**: از مهارت Design System Aesthetics استفاده کنید

## موضوعات مرتبط {#related-topics}

- **Theme Builder Onboarding**: راهنمای تنظیم برای قالب‌های سفارشی
- **Setup Assistant Agent**: راه‌اندازی سایت با راهنمایی عامل (agent)
- **Site Specification Skill**: اهداف و مخاطبان سایت خود را تعریف کنید
- **Design System Aesthetics Skill**: هویت بصری سایت خود را اصلاح کنید
