---
title: Установка ва провайдер конфигурация
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Satıcı: Kurulum ve Sağlayıcı Yapılandırması {#domain-seller-setup-and-provider-configuration}

Domain Seller eklentisi, sizi her bir gerekli adımda yönlendiren rehberli bir kurulum sihirbazıyla birlikte gelir. Bu sayfa sihirbaz akışını ve sonrasında sağlayıcıları nasıl yapılandıracağınızı veya yeniden yapılandıracağınızı anlatıyor.

## Шартlar (Requirements) {#requirements}

- **Multisite Ultimate** versiyasi 2.4.12 və ya daha yüksək, şəbəkə aktiv edilmiş olmalı
- **PHP** 7.4+
- Ən azı bir dəstəklənən qeydiyyatçının API kredensialarına ehtiyac var

## İlk qurulum wizard'ı (First-run setup wizard) {#first-run-setup-wizard}

الاول مرة плагиныни танып-тактик (network-activate) етсе, kurulum wizard awtomatiki ishga tushadi. Shuningdek, siz har qanday vaqt **Network Admin › Ultimate Multisite › Domain Seller Setup** oridan foydalanishingiz mumkin.

### 1-qadam — Provayderni tanlang {#step-1--choose-a-provider}

Сиз кабул etmek isteyen kayıtчини танлаңыз. Қолдаサポート этилган вариантлар:

| Sağlayıcı | DNS yönetimi | WHOIS gizliliği |
|---|---|---|
| OpenSRS | Evet | Evet |
| Namecheap | Hayır | Evet (WhoisGuard, ücretsiz) |
| HostAfrica | Evet | Evet (ID koruması) |
| Openprovider | Evet | Evet |

| Hostinger | Хостинг домен маппинг учун хостинг доменидан ўтадиган йўл | Ҳа |
| GoDaddy | Йўқ | Йўқ |
| ResellerClub | Ҳа | Йўқ |
| NameSilo | Йўқ | Йўқ |
| Enom | Ҳа | Йўқ |

### 2-Қадам — Махсулот (credentials) киритинг {#step-2--enter-credentials}

Ҳар бир провайдернинг маълумот киритиш майдонлари турли хил бўлади:

**OpenSRS** — İstifadəçi adı ва махфий ключ (OpenSRS Reseller Control Panelдан олинган)

**Namecheap** — İstifadəçi adı ва API ключи (Account › Tools › API Accessдан олинган)

**HostAfrica** — HostAfrica reseller modulidan domainler uchun API sonlanishi va kerametlar. Hozircha alohida sandbox sonlanishi dokumentatsiya qilinmagan; hayotiy ro'yxatdan o'tkazishdan oldin xavfsiz, faqat o'qish (read-only) tekshiruvlar bilan sinab ko'ring.

**Openprovider** — Kullanıcı adı va şifre ile API erişimi etkinleştirilmiş durumdadır. İsteğe bağlı sandbox modu Openprovider sandbox API'sini kullanır ve kayıtlar için isteğe bağlı varsayılan müşteri kimliği tekrar kullanılabilir.

**Hostinger** — Ana Hostinger integrasiyasidan kelgan ulangan (shared) hPanel API tokeni. Bu token asosiy domen xaritasi va Domen Satuvchisi ro'yxatdan o'tish operatsiyalarini ishga tushiradi.

**GoDaddy** — API kaliti va maxfiy kalit (developer.godaddy.com dan).

**ResellerClub** — Reseller ID va API key (ResellerClub boshqaruv paneliдан олинган)

**NameSilo** — API key (namesilo.com › Hisob › API Menejeri)

**Enom** — Hisob ID va API token

موجود болarsa، canlıga geçmadan önce sağlayıcının тест muhiti ilə sinovdan geçmek üçün **Sandbox modu**nu tek tasekkür edin.

### 3-чу қадам — Байланышни синавдан өткізу {#step-3--test-the-connection}

**Test Connection** (Bağlantıyı Test Et) düğmesine tıklayın. Sihirbaz, kimlik bilgilerini ve bağlantıyı kontrol etmek için hafif bir API çağrısı gönderir. Devam etmeden önce herhangi bir kimlik bilgisi sorununu düzeltin.

### 4-Шаг — TLD'leri İçe Aktarma (Importing TLDs) {#step-4--import-tlds}

Tüm mevcut TLD'leri ve toptan fiyatlandırmayı bağlı sağlayıcıdan çekmek için **Import TLDs** butonuna tıklayın. Bu, alan adı ürünlerinde kullanılan TLD listesini doldurur. Büyük TLD kataloglarına sahip sağlayıcılar için bu içe aktarma 30-60 saniye sürebilir.

Domain TLD'leri de her gün bir kez zamanlanmış bir cron işi aracılığıyla otomatik olarak yeniden senkronize edilir.

### 5-nji Qadam — Domen mahsulunu yaratmak {#step-5--create-a-domain-product}

Wizard (سوا) ئۆزگەندە، 10% qeyratla (markup) bilen standart bir umumiy domen mahsulotu yaratadi. Siz bu mahsulotni derhal tahrir qila bilersiňiz ýa-da **Ultimate Multisite › Products** bo'lymidan o'tkazib, mahsulotlarni qo'lda yarata bilersiňiz.

[Domain Products and Pricing](./domain-products) سۆڭەكلەرگە گүлләре жана баалар боюнча толук продукт конфигурация колдонumasын көрүңүз.

---

## провайдери кайра конфигурациялоо {#reconfiguring-a-provider}

Провайдерди кантип кайра настройлаш керектигине көнгөчүмүн төмөнкү маалыматтарда таба аласыз.

**Network Admin › Ultimate Multisite › Settings › Domain Seller** (yoki plugin ro'yxatida **Settings** ni bosing).

So'zlashlar sahifasida quyidagilar mavjud:

* **Domain satishini etkinleştirme** — bu xususiyatni tamamen açık və ya kapalı etmək üçün bağlayın.
* **Varsayılan sağlayıcı** — domen axtarmalar va yangi mahsulatlar üçün istifadə ediləcək sağlayıcıdır.

* **Қуряқлардаги максимал TLDлар саны** — мисол учун, клиент қидиру қилганда nechта TLDни текшириш керак? Кўпроқ рақамлар кўрсатилса, танловлар кўпроқ бўлади лекин секириш суръати пасайиб кетяди.

* **Availability cache duration** — ململان (availability) ۋە нарх (pricing) натиҷاларын چەند вақت گۆڕە링 (cache) учун چەند вақت да่อامى (duration); кичик қийматлар аниқроқ бўлса-да, API чақишлари кўпайиб кетади.
* **Manage domain products** — Мавжудли маҳсулотлар (Products) розиятига тез бориш учун дастур (quick link).

* **Providers'ı yapılandırma** — Bu, sağlayıcıları eklemek veya yeniden yapılandırmak için Entegrasyon Sihirbazını açar.

### İkinci bir sağlayıcı ekleme {#adding-a-second-provider}

**Providers'ı yapılandırın** butonuna tıklayın ve yeni kayıt kuruluşu (registrar) için sihirbazı tekrar çalıştırın. Aynı anda birden fazla sağlayıcıyı yapılandırabilirsiniz. Her alan adı ürününü belirli bir sağlayıcıya atayabilir veya varsayılan olarak bırakabilirsiniz.

### TLD'leri manuel senkronize etme {#syncing-tlds-manually}

تنظیمات səhifesinde, son narxalar (pricing) almak üçün konfiqurasiya edilmiş hər hansı bir sağlayıcı yanında **Sync TLDs** düyməsini barmog'lashing. Bu, bir sağlayıcı tolmoshalar narxalarni yangilasa yoki yangi TLDlar qo'shganda juda foydali bo'ladi.

---

## Logs {#logs}

Ҳар бир провайдер ўз лог каналига ёзади. Логларни **Network Admin › Ultimate Multisite › Logs** бўйича кўриш мумкин:

| Log kanalı | İçerik |
|---|---|
| `domain-seller-registration` | Tüm kayıt denemeleri (başarılı ve başarısız) |
| `domain-seller-renewal` | Yenileme işi sonuçları |
| `domain-seller-opensrs` | Ham OpenSRS API aktivitesi |

| `domain-seller-namecheap` | Namecheap API'dan ham raw (asıl) faaliyeti |
| `domain-seller-hostafrica` | HostAfrica API'dan ham (asıl) faaliyeti |
| `domain-seller-openprovider` | Openprovider API'dan ham (asıl) faaliyeti |
| `domain-seller-hostinger` | Hostinger API'dan ham (asıl) faaliyeti |

| `domain-seller-godaddy` | GoDaddy API'dan ham raw faaliyotlar |
| `domain-seller-resellerclub` | ResellerClub API'dan ham raw faaliyotlar |
| `domain-seller-namesilo` | NameSilo API'dan ham raw faaliyotlar |
| `domain-seller-enom` | Enom API'dan ham raw faaliyotlar |

## Sağlayıcı yetenekleri hakkındaki notlar {#provider-capability-notes}

Ҳар бир регистратор API'си бир хил операцияларни нишон дода олмайди. Аддон (addon) дастлабки қабул қилинмаган операцияларни тинч тинч ва нодеда чекиб юбориш ўрнига, администратор учун равшан хатолар билан кўрсатади.

**HostAfrica** canlı yeniden satıcı (live reseller) iş akışlarının en genişini destekler; bu süreçte arama yapma, TLD/fiyat senkronizasyonu, kayıt, yenileme, transfer, isim sunucusu güncellemeleri, DNS kayıtları, EPP kodları, kayıt sağlayıcısı kilidi ve kimlik koruması gibi birçok şeyi kapsar.

**Openprovider** yeniden satıcı narx (reseller-priced) TLD senkronizasyonunu, kayıt işlemini, yenilemeyi, transferleri, isim sunucu güncellemelerini, DNS bölgelerini, EPP kodlarını, kayıtçı kilidini ve WHOIS gizliliğini destekler. Bu eklenti, otomatik olarak yenilenen kısa ömürlü bir bearer token ile kimlik doğrulaması yapar.

**Hostinger** شاريد (shared) hPanel API тоكنى арқылы доступlilik қидиру (availability search), рўйвиёт (registration), портфолио кўришни (portfolio lookup), ном серверларини янгилаш (nameserver updates), регистратор блокларини қисқартиш (registrar lock) ва WHOIS махфийлигини (WHOIS privacy) қўллаб-қувватлайди. Hostingerнинг оммавий Domains API да қайтачи/боқиш нархлари, кириш трансферлари, аниқ қайтачилар (explicit renewal) ёки EPP-кодни олиш имконияти йўқ; қайтачилар автоматӣ қайтачилади.
