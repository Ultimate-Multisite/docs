---
title: Tema Builder Qobiliyatları
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# قالب ساز قابلیت‌ها: ساخت و فعال کردن قالب بلوک {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 دو تا قدرتمند قابلیت اضافه eder, bu sayede sohbet arayüzünden doğrudan özel blok temalar oluşturabilir ve yayınlayabilirsiniz.

## Genel Bakış {#overview}

**scaffold-block-theme** ve **activate-theme** yetenekleri ajanların şunları yapmasını sağlar:
- Belirttiğiniz özelliklere dayanarak eksiksiz, üretim için hazır blok temaları oluşturmak
- Manuel müdahale olmadan sitenizde temaları otomatik olarak etkinleştirmek
- Rehberli tasarım kararları yoluyla uyumlu görsel kimlikler yaratmak

## Blok Teması Oluşturma (Scaffold Block Theme) {#scaffold-block-theme}

**scaffold-block-theme** yeteneği, eksiksiz bir tema yapısı içeren yeni bir WordPress blok teması oluşturur. Bu yapı şunları içerir:

- Tasarım jetonlarıyla birlikte `theme.json` yapılandırması
- Yaygın düzenler için Blok şablon dosyaları
- Özel blok stilleri ve varyasyonları
- Tema meta verileri ve destek bildirimleri

### Nasıl Çağrılır (How to Invoke) {#how-to-invoke}

Superdav AI Agent ile sohbetinizde tema oluşturma isteğinde bulunabilirsiniz:

```
"Mavi ve beyaz renk şemasına sahip, sans-serif tipografi kullanan ve profesyonel bir düzenle 'Modern Ajans' adında bir blok teması oluştur."
```

Ajan şunları yapacaktır:
1. Sohbet yoluyla tasarım tercihlerini toplar
2. Eksiksiz tema yapısını oluşturur
3. Gerekli tüm tema dosyalarını hazırlar
4. Temayı etkinleştirmeye hazır hale getirir

### Beklenen Çıktı (Expected Output) {#expected-output}

Yetenek başarıyla çalıştığında şunları görürsünüz:

- Temanın oluşturulduğuna dair onay
- Tema adı ve konumu
- Uygulanan tasarım jetonlarının özeti (renkler, tipografi, boşluklar)
- Etkinleştirmeye hazır durumu

Örnek çıktı:
```
✓ Tema "Modern Ajans" başarıyla oluşturuldu
  Konum: /wp-content/themes/modern-agency/
  Renkler: Birincil #0066CC, İkincil #FFFFFF
  Tipografi: Inter (sans-serif)
  Durum: Etkinleştirmeye hazır
```

## Temayı Etkinleştirme (Activate Theme) {#activate-theme}

**activate-theme** qabiliyyeti sitenizi yeni oluşturulmuş veya mevcut bir blok temaya keçirmek üçündür.

### Nasıl Çalıştırılır {#how-to-invoke-1}

Bir tema oluşturduktan sonra onu hemen etkinleştirebilirsiniz:

```
"Modern Agency temasına geç"
```

Veya herhangi bir mevcut temayı etkinleştirmek için:

```
"Twentytwentyfour temasına geç"
```

### Beklenen Çıktı {#expected-output-1}

Etkinleştirme başarılı olduğunda:

- Aktif tema hakkında onay mesajı
- Önceki tema adı (referans için)
- Tema artık canlı olan site URL'si
- Herhangi bir tema özel kurulum notları

Örnek çıktı:
```
✓ Tema başarıyla etkinleştirildi
  Aktif tema: Modern Agency
  Önceki tema: Twentytwentyfour
  Canlı olduğu yer: https://yoursite.com
  Not: Düzeni doğrulamak için ana sayfanızı kontrol edin
```

## İş Akışı: Oluşturma ve Etkinleştirme (Scaffold and Activate) {#workflow-scaffold-and-activate}

Tipik bir iş akışı her iki yeteneği de birleştirir:

1. **Tema oluşturma isteği**: "SaaS açılış sayfası için bir blok teması oluştur"
2. **Agent tema oluşturur**: Dosyaları ve tasarım jetonlarını (design tokens) üretir
3. **İnceleme ve düzenleme**: Gerekirse tasarım değişiklikleri hakkında konuşun
4. **Etkinleştirme**: "Temayı şimdi etkinleştir"
5. **Doğrulama**: Yeni tasarımın canlı olup olmadığını kontrol etmek için sitenizi ziyaret edin

## Tasarım Jetonları (Design Tokens) ve Özelleştirme {#design-tokens-and-customization}

Oluşturulan temalar, WordPress tasarım jetonlarını (`theme.json` aracılığıyla) şunlar için kullanır:

- **Renkler**: Birincil, ikincil, vurgu (accent), nötr palet
- **Tipografi**: Font aileleri, boyutlar, ağırlıklar, satır yükseklikleri
- **Boşluklar**: İç dolgu (padding), dış boşluk (margin), boşluk ölçekleri (gap scales)
- **Kenarlıklar**: Yarıçap ve genişlik jetonları
- **Gölgeler**: Yükseltme seviyeleri

Bu jetonlar `theme.json` içinde merkezi olarak tutulur, bu da tüm tasarım sisteminizi tek bir dosyadan ayarlamayı kolaylaştırır.

## Sınırlamalar ve Notlar {#limitations-and-notes}

- Themes `/wp-content/themes/` دایرکتوريشدا و باید وردپرس نام‌گذاری قوانین را رعایت کند
- فعال‌سازی برای سایت وردپرسی شما مناسب دسترسی (permissions) نیاز دارد

در قالب‌ها (themes) کد PHP سفارشی خیلی کم استفاده کنید؛ پیچیده کارها برای پلاگین‌ها بهتر است.
قالب‌های بلوکی (Block themes) بهترین عملکرد را با وردپرس نسخه ۵.۹ و بالاتر دارند.

## عیب‌یابی (Troubleshooting) {#troubleshooting}

**بعد از اسکالف کردن قالب نمایش داده نمی‌شود**
- مطمئن شوید که پوشه قالب وجود دارد و دسترسی‌های مناسب آن تنظیم شده است.
- بررسی کنید که `theme.json` یک JSON معتبر باشد.
- مطمئن شوید نام قالب با قالب‌های موجود تداخل ندارد.

**فعال‌سازی شکست می‌خورد**
- تأیید کنید که دسترسی ادمین (administrator permissions) دارید.
- چک کنید که پوشه قالب توسط وردپرس قابل خواندن است.
- برای جزئیات، لاگ‌های خطا (error logs) وردپرس را بررسی کنید.

**توکن‌های طراحی اعمال نمی‌شوند**
- صحت ساختار `theme.json` را چک کنید.
- هر افزونه کش (caching plugins) را پاک کنید.
- مطمئن شوید نسخه وردپرس شما از توکن‌هایی که استفاده می‌کنید پشتیبانی می‌کند.

## گام‌های بعدی (Next Steps) {#next-steps}

بعد از فعال کردن قالب خود، می‌توانید کارهای زیر را انجام دهید:
- از مهارت **Design System Aesthetics** برای تنظیم دقیق تایپوگرافی (typography)، رنگ‌ها و فاصله (spacing) استفاده کنید.
- با ویرایشگر بلوک وردپرس (WordPress block editor)، استایل‌های هر بلوک را سفارشی کنید.
- می‌توانید CSS سفارشی خود را در فایل `style.css` قالب اضافه کنید.
- برای انواع صفحات خاص، قالب‌های بلوک سفارشی ایجاد نمایید.
