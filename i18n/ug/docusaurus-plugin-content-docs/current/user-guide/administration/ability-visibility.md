---
title: Qabiliyyət Görünürlüyü
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# قابلیت دیدن توانایی‌ها (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0، کنترل‌های **قابلیت دیدن توانایی‌ها (Ability Visibility)** را معرفی می‌کند که تعیین می‌کنند کدام سطوح (surfaces) هر توانایی را نمایش دهند. این کار به مدیران اجازه می‌دهد تنظیم کنند که قابلیت‌های کدام ایجنت از طریق REST APIها، سرورهای MCP، ادغام‌های WooCommerce و سایر رابط‌ها در دسترس باشند.

## قابلیت دیدن توانایی چیست؟ {#what-is-ability-visibility}

قابلیت دیدن توانایی (Ability Visibility) یک سیستم مجوزدهی است که موارد زیر را کنترل می‌کند:

- **کدام توانایی‌ها** برای ایجنت‌ها در دسترس هستند
- **آنها کجا نمایش داده می‌شوند** (REST API، MCP، WooCommerce و غیره)
- **چه کسانی می‌توانند به آن‌ها دسترسی داشته باشند** (از طریق لیست‌های مجاز شرکا - allow-lists)
- **چگونه طبقه‌بندی می‌شوند** (شناسایی شده در مقابل غیرقابل شناسایی)

هر توانایی یک سطح دیدن دارد که تعیین می‌کند در سطوح مختلف چه زمانی قابل دسترس است.

## سطوح دیدن {#visibility-levels}

### عمومی (Public) {#public}

**توانایی‌های عمومی** همه جا در دسترس هستند:

- نقاط پایانی REST API
- سرورهای MCP
- ادغام‌های WooCommerce
- رابط‌های چت
- تمام نقش‌های کاربر (با مجوزهای مناسب)

مثال: `scaffold-block-theme`، `activate-theme`، `send-email`

### داخلی (Internal) {#internal}

**توانایی‌های داخلی** فقط در نصب وردپرس شما قابل دسترس هستند:

- رابط‌های چت
- پنل‌های مدیریت (Admin panels)
- فقط کاربران وارد شده (Logged-in users only)
- از طریق REST API یا ادغام‌های خارجی نمایش داده نمی‌شوند

مثال: `manage-settings`، `view-analytics`، `export-data`

### شریک (Partner) {#partner}

**توانایی‌های شریک** فقط برای شرکای لیست سفید (whitelisted partners) در دسترس هستند:

- نیاز به ورود صریح به لیست مجاز شرکا وجود دارد
- از طریق REST API با اعتبارنامه‌های شریک قابل دسترسی است
- از طریق MCP با احراز هویت شریک قابل دسترسی است
- برای کاربران عادی در دسترس نیست

مثال: `bulk-import-users`، `modify-billing`، `access-analytics`

### غیرفعال (Disabled) {#disabled}

**توانایی‌های غیرفعال** هیچ کجا در دسترس نیستند:

- از طریق هیچ سطحی نمایش داده نمی‌شوند
- در چت قابل دسترسی نیستند
- در پنل‌های مدیریت قابل دسترسی نیستند
- برای قابلیت‌های منسوخ شده یا آزمایشی مفید است

## Ability Görünürlüğünü Yönetme {#managing-ability-visibility}

### Yetenek Görünürlük Ayarlarına Erişim {#accessing-ability-visibility-settings}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** yolunu izleyin.
2. **Abilities** (Yetenekler) sekmesine tıklayın.
3. Burada kurulu tüm yeteneklerin görünürlük seviyeleriyle birlikte bir listesini göreceksiniz.

### Yetenek Detaylarını Görüntüleme {#viewing-ability-details}

Bir yeteneğe tıklayarak şunları görebilirsiniz:

- **Name** (Ad): Yeteneğin tanımlayıcısı
- **Description** (Açıklama): Yeteneğin ne işe yaradığı
- **Current visibility** (Mevcut görünürlük): Public (Herkese Açık), Internal (Dahili), Partner (Ortak) veya Disabled (Devre Dışı).
- **Partner allow-list** (Ortak izin listesi): Hangi ortakların erişebileceği (Eğer Ortak görünürlüğü seçiliyse).
- **Last updated** (Son güncelleme): Görünürlüğün en son ne zaman değiştirildiği.
- **Status** (Durum): Recognized (Tanınmış) veya Unclassified (Sınıflandırılmamış).

### Görünürlük Seviyelerini Değiştirme {#changing-visibility-levels}

Bir yeteneğin görünürlüğünü değiştirmek için:

1. Listede ilgili yeteneğe tıklayın.
2. Açılır menüden yeni bir görünürlük seviyesi seçin.
3. "Partner"i seçerseniz, izin listesine (allow-list) ortak tanımlayıcılarını ekleyin.
4. **Save** (Kaydet) butonuna tıklayın.

Örnek:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Toplu İşlemler {#bulk-operations}

Birden fazla yeteneğin görünürlüğünü değiştirmek için:

1. Yeteneklerin yanındaki kutucukları işaretleyin.
2. Toplu işlem açılır menüsünden yeni bir görünürlük seviyesi seçin.
3. **Apply** (Uygula) butonuna tıklayın.

## Ortak İzin Listesi (Partner Allow-List) {#partner-allow-list}

**Partner allow-list**, harici ortakların Partner düzeyindeki yeteneklere erişip erişemeyeceğini kontrol eder.

### Ortak Ekleme {#adding-partners}

1. **Superdav AI Agent** → **Settings** → **Partners** yolunu izleyin.
2. **Add Partner** (Ortak Ekle) butonuna tıklayın.
3. Ortak tanımlayıcısını girin (genellikle bir API anahtarı veya kuruluş kimliği).
4. İsteğe bağlı olarak bir ortak adı ve açıklamasını ekleyebilirsiniz.
5. **Save** (Kaydet) butonuna tıklayın.

### Yetenekleri Ortaklara Atama {#assigning-abilities-to-partners}

Bir ortak ekledikten sonra:

۱. **Abilities** (قابلیت‌ها) تبına gidin
۲. Partner visibility (شریک دید) bilan bir yeteneği bulun
۳. Düzenlemek için tıklayın
۴. "Partner allow-list" (شریک izin listesi) bölümünde, erişimi olması gereken partnerler için kutucukları işaretleyin
۵. **Save** (Kaydet) butonuna tıklayın

### Partner Erişimini Kaldırma {#revoking-partner-access}

Bir partnerin erişimini kaldırmak için:

۱. Yeteneği düzenleyin
۲. İzin listesindeki partnerin kutucuğunu işaretini kaldırın
۳. **Save** (Kaydet) butonuna tıklayın

Partner, o yeteneğe anında erişimi kaybedecektir.

## Sınıflandırılmamış Yetenekler {#unclassified-abilities}

Superdav AI Agent'in tanımadığı üçüncü taraf bir yetenek kurduğunuzda, bu yetenek **Unclassified** (Sınıflandırılmamış) olarak işaretlenir.

### Sınıflandırılmamış Yetenekler İçin Yönetici Bildirimi {#admin-notice-for-unclassified-abilities}

Bir yönetici bildirimi göreceksiniz:

```
⚠️ Unclassified Abilities Detected

Aşağıdaki yetenekler kurulmuş ancak tanınmıyor:
- custom-import-tool
- external-api-wrapper

Bu yetenekler güvenlik veya uyumluluk riskleri oluşturabilir.
Lütfen inceleyin ve sınıflandırın.

[Review Abilities] [Dismiss]
```

### Sınıflandırılmamış Yetenekleri İnceleme {#reviewing-unclassified-abilities}

۱. Bildirimdeki **Review Abilities** (Yetenekleri İncele) seçeneğine tıklayın
۲. Her sınıflandırılmamış yetenek için şunları göreceksiniz:
   - Yetenek adı ve açıklaması
   - Kaynak (hangi plugin/addon'un kurduğu)
   - Önerilen görünürlük seviyesi
   - Güvenlik değerlendirmesi

۳. Bir görünürlük seviyesi seçin:
   - **Public** (Herkese Açık): Yeteneğe güvenin; her yerde açın
   - **Internal** (Dahili): Sadece dahili kullanım için kısıtlayın
   - **Partner** (Partner): Belirli partnerlere kısıtlayın
   - **Disabled** (Devre Dışı): Bu yeteneği kullanmayın

۴. Kararınızı kaydetmek için **Classify** (Sınıflandır) butonuna tıklayın

### Sınıflandırılmamış Yetenekleri Neden Sınıflandırıyoruz? {#why-classify-unclassified-abilities}

Yetenekleri sınıflandırmak:

- **Güvenliği artırır**: Ne açıldığını siz açıkça onaylarsınız
- **Kazaları önler**: Sınıflandırılmamış yetenekler varsayılan olarak devre dışı bırakılır
- **Özellikleri etkinleştirir**: Sınıflandırıldıktan sonra yetenek kullanılabilir hale gelir
- **Kararları belgelemek**: Seçimleriniz denetim amaçlı kaydedilir

## مختلف سطوح (Surfaces) üzerinde görünürlük {#visibility-in-different-surfaces}

### REST API {#rest-api}

**عمومي قابلیت‌ها** از طریق REST endpoints در دسترس هستند:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**درون‌ساز و شرکتی قابلیت‌ها** از طریق REST API در دسترس نیستند.

### سرورهای MCP {#mcp-servers}

**عمومی قابلیت‌ها** از طریق MCP در دسترس هستند:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**قابلیت‌های داخلی** از طریق MCP نمایش داده نمی‌شوند.

**قابلیت‌های شرکتی** فقط با اعتبارنامه‌های شرکتی در دسترس هستند.

### یکپارچه‌سازی ووکامرس (WooCommerce Integration) {#woocommerce-integration}

**قابلیت‌های عمومی** مربوط به ووکامرس در دسترس هستند:

- مدیریت محصول
- پردازش سفارش
- ارتباط با مشتری

**قابلیت‌های داخلی** به ووکامرس نمایش داده نمی‌شوند.

### رابط چت (Chat Interface) {#chat-interface}

**تمام قابلیت‌ها** (عمومی، داخلی، شرکتی) بسته به مجوزهای کاربر در چت در دسترس هستند:

- مدیران همه قابلیت‌ها را می‌بینند
- کاربران عادی فقط قابلیت‌های عمومی را می‌بینند
- شرکا قابلیت‌های عمومی + شرکتی (اگر لیست سفید شده باشند) را می‌بینند

## بهترین شیوه‌های امنیتی (Security Best Practices) {#security-best-practices}

### اصل حداقل امتیاز (Principle of Least Privilege) {#principle-of-least-privilege}

- قابلیت‌ها را روی محدودترین سطح دید تنظیم کنید که همچنان اجازه استفاده از آن‌ها را بدهد.
- برای عملیات حساس از دید شرکتی استفاده کنید.
- قابلیت‌هایی را غیرفعال کنید که از آن‌ها استفاده نمی‌کنید.

### ممیزی‌های منظم (Regular Audits) {#regular-audits}

- هر ماه دید قابلیت‌ها را بررسی کنید.
- به دنبال قابلیت‌های بدون دسته‌بندی باشید.
- دسترسی برای شرکای غیرفعال شده را حذف کنید.

### لاگ‌برداری و نظارت (Logging and Monitoring) {#logging-and-monitoring}

- پایش کنید کدام قابلیت‌ها بیشتر استفاده می‌شوند.
- الگوهای دسترسی شرکا را ردیابی کنید.
- در مورد استفاده غیرمعمول از قابلیت‌ها هشدار دهید.

### قابلیت‌های شخص ثالث (Third-Party Abilities) {#third-party-abilities}

- قبل از فعال کردن، قابلیت‌های شخص ثالث را بررسی کنید.
- آن‌ها را به صراحت طبقه‌بندی کنید.
- با دید داخلی یا شرکتی شروع کنید.
- فقط پس از تأیید و بررسی، به عمومی ارتقا دهید.

## Sorun Giderme {#troubleshooting}

**Bir yetenek listede görünmüyor**
- Yeteneğin kurulu ve aktif olup olmadığını kontrol edin.
- Eklentinin/addon'un etkinleştirilip etkinleştirilmediğini kontrol edin.
- Sayfayı yenileyin.

**Bir yeteneğin görünürlüğünü değiştiremiyorum**
- Yönetici (administrator) izinlerinizin olduğundan emin olun.
- Yeteneğin bir eklenti tarafından kilitlenmediğinden emin olun.
- Çakışan eklentileri devre dışı bırakmayı deneyin.

**Bir ortak yeteneğe erişemiyor**
- Ortak listenizde (allow-list) olup olmadığını kontrol edin.
- Yeteneğin görünürlüğünün "Partner" olarak ayarlandığından emin olun.
- Ortak bilgilerinin doğru olduğundan emin olun.
- Kimlik doğrulama hataları için API loglarını kontrol edin.

**Sınıflandırılmamış yetenekler sürekli çıkıyor**
- Yönetici bildirimlerinde bunları gözden geçirin ve sınıflandırın.
- Sınıflandırmanızın kaydedildiğinden emin olun.
- Yeteneği sağlayan eklentinin güncel olduğundan emin olun.

## Eski Moddan Taşıma (Migration from Legacy Mode) {#migration-from-legacy-mode}

Eğer Superdav AI Agent'in eski bir sürümünden yükseltme yapıyorsanız:

- Mevcut tüm yetenekler otomatik olarak "Public" (Herkese Açık) olarak sınıflandırılır.
- Gerekirse görünürlüğü gözden geçirin ve ayarlayın.
- Erişimi kısıtlamak istemiyorsanız herhangi bir işlem yapmanıza gerek yoktur.

Yerel Yetenek API entegrasyonuna geçişle ilgili daha fazla ayrıntı için **Üçüncü Taraf Modu Taşımasına (Third-Party Mode Migration)** bakın.

## Sonraki Adımlar {#next-steps}

Yetenek görünürlüğünü yapılandırdıktan sonra:

1. **Yeteneklerinizi gözden geçirin**: Kurulu tüm yetenekleri denetleyin.
2. **Sınıflandırılmamış yetenekleri sınıflandırın**: Yönetici bildirimlerine yanıt verin.
3. **Ortakları ayarlayın**: Ortak görünürlüğü kullanıyorsanız ortakları ekleyin.
4. **Kullanımı izleyin**: Hangi yeteneklerin en çok kullanıldığını takip edin.
5. **Kararları belgeleyin**: Her bir görünürlük seviyesini neden seçtiğinize dair notlar tutun.
