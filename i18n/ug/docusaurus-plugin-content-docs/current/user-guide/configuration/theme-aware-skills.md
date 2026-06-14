---
title: Tema-Boshqchilikli Ko'nikmalar
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Theme-Aware Skills

Superdav AI Agent v1.10.0 چهار تا قابلیت جدید، موضوعه-هوا (theme-aware) داخلی را عرضه می‌کند که به طور خودکار ووردپرس قالبünüzün aktif olan temasına uyum sağlar. Bu yetenekler, temanızın mimarisine ve özelliklerine özel uzman rehberlik ve yetenekler sunar.

## Theme-Aware Skills Nedir?

Theme-aware skills, sitenizde şu anda aktif olan WordPress temasına dayanarak yapay zeka asistanının otomatik olarak seçeceği önceden yapılandırılmış bilgi tabanları ve araç setleridir. Temaları değiştirdiğinizde, asistanın mevcut yetenekleri otomatik olarak güncellenir — manuel yapılandırma gerekmez.

Her skill şunları içerir:

- **Tema özel dokümantasyonu** — temayı kullanma ve özelleştirme konusunda rehberlik
- **Blok ve pattern referansları** — mevcut bloklar, pattern'ler ve tasarım seçenekleri
- **Özelleştirme örnekleri** — yaygın görevler için kod parçacıkları ve yapılandırma kalıpları
- **En iyi uygulamalar (Best practices)** — temanın mimarisi ve iş akışı için öneriler

## Mevcut Theme-Aware Skills

### Blok Temaları (Block Themes)

**Uygulanır:** WordPress blok tabanlı (Full Site Editing) mimarisini kullanan temalara.

Blok Temaları skill'i şunlar konusunda rehberlik sağlar:

- Blok düzenleyiciyi kullanarak şablon oluşturma ve düzenleme
- Blok pattern'leri ve yeniden kullanılabilir bloklarla çalışma
- Genel stilleri ve theme.json ayarlarını özelleştirme
- Tema bloklarını ve varyasyonlarını kullanma
- Siteniz için özel blok pattern'leri oluşturma

**Ne zaman otomatik etkinleşir:** Aktif temanız bir blok teması olduğunda ( `block-templates` özelliğini destekler).

### Klasik Temalar (Classic Themes)

**Uygulanır:** PHP şablonları ve klasik editörü kullanan geleneksel WordPress temalarına.

Klasik Temalar skill'i şunlar konusunda rehberlik sağlar:

PHP قالب فایل‌ها و هوک‌ها با آن‌ها کار کردن
ظاهر قالب را از طریق Customizer شخصی‌سازی کردن
استفاده از حوزه‌های ویجت (widget areas) و نوار کناری (sidebars)
اصلاح CSS و توسعه تم فرزند (child theme development)
درک سلسله مراتب تم (theme hierarchy) و تگ‌های قالب (template tags)

**هنگامی که به صورت خودکار فعال می‌شود:** اگر تم فعلی شما یک تم کلاسیک (غیر بلوکی) باشد.

### Kadence Blocks

**مناسب برای:** سایت‌هایی که برای طراحی پیشرفته مبتنی بر بلوک از افزونه Kadence Blocks استفاده می‌کنند.

مهارت Kadence Blocks راهنمایی می‌کند در مورد موارد زیر:

- استفاده از کتابخانه پیشرفته بلاک‌های Kadence (مانند Hero، Testimonials، Pricing و غیره)
- تنظیمات بلاک‌های Kadence و گزینه‌های واکنش‌گرا (responsive options)
- ساخت طرح‌بندی‌های سفارشی با استفاده از بلوک‌های Grid و Container در Kadence
- ادغام بلاک‌های Kadence با تم شما
- بهره‌برداری از سیستم طراحی و پیش‌تنظیمات Kadence

**هنگامی که به صورت خودکار فعال می‌شود:** اگر افزونه Kadence Blocks روی سایت شما فعال باشد.

### Kadence Theme

**مناسب برای:** سایت‌هایی که برای طراحی مبتنی بر بلوک و شخصی‌سازی از تم Kadence استفاده می‌کنند.

مهارت Kadence Theme راهنمایی می‌کند در مورد موارد زیر:

- شخصی‌سازی تم Kadence از طریق استایل‌های سراسری (global styles) و theme.json
- استفاده از الگوها و قالب‌های داخلی بلاک‌های Kadence
- تنظیمات و گزینه‌های تم Kadence
- ساخت طرح‌های سفارشی با سیستم طراحی Kadence
- ادغام Kadence با افزونه‌ها و ابزارهای محبوب

**هنگامی که به صورت خودکار فعال می‌شود:** اگر تم Kadence تم فعلی شما باشد.

## چگونه مهارت‌ها انتخاب می‌شوند

دستیار (assistant) به طور خودکار تم فعال و افزونه‌های نصب شده روی هر پیام را تشخیص می‌دهد. اگر یک مهارت مرتبط با تم موجود باشد، به طور خودکار در زمینه دستیار بارگذاری می‌شود. نیازی نیست که شما به صورت دستی مهارت‌ها را فعال یا تغییر دهید.

### چندین مهارت (Multiple Skills)

Əgər saytınızda bir neçə bacarıq tətbiq olunursa (məsələn, həm Kadence Blocks, həm də Kadence Theme aktivdirsə), asistan bütün müvafiq bacarıqlara çıxış edir və hər birindən göstərişlərdən istifadə edə bilər.

### Tema Dəyişdirmək (Switching Themes)

Aktiv temanı dəyişəndə, asistanın mövcud bacarıqları növbəti mesajda avtomatik olaraq yenilənir. Məsələn:

1. Siz **Block Themes** bacarığı aktiv olan bir blok temadan istifadə edirsiniz.
2. Siz klassik temaya keçirsiniz.
3. Növbəti mesajınızda, **Classic Themes** bacarığı avtomatik yüklənir və **Block Themes** bacarığı artıq mövcud olmur.

## Tema-Müvafiq Bacarıqlardan İstifadə Etmək (Using Theme-Aware Skills)

Tema-müvafiq bir bacarıqdan istifadə etmək üçün sadəcə söhbət interfeysində nə etmək istədiyinizi təsvir edin. Asistan avtomatik olaraq müvafiq bacarığın göstərişlərindən istifadə edəcək.

### Nümunə Sual-Cavablar (Example Prompts)

**Block Themes üçün:**
> "Blok nümunələrindən istifadə edərək fon şəkli və mərkəzləşdirilmiş mətnlə bir hero bölmə yaradın."

**Classic Themes üçün:**
> "Uşaq teması (child theme) vasitəsilə menyu çanı sahəsinə özəl widget sahəsi əlavə edin."

**Kadence Blocks üçün:**
> "Kadence Testimonials blokundan istifadə edərək bir təcrübələr bölməsi yaradın."

**Kadence Theme üçün:**
> "Başlıq (header) yerləşdirməsini və navigasiya menyusunun stilini özünüzə uyğunlaşdırın."

Asistan, aktiv temanı və pluginlərinizi nəzərə alaraq tema-xüsusi göstərişlər və kod nümunələri təmin edəcək.

:::note
Tema-müvafiq bacarıqlar Superdav AI Agent v1.10.0 və daha yeni versiyalarda avtomatik olaraq mövcuddur. Əlavə qurulma və konfiqurasiya tələb olunmur.
:::
