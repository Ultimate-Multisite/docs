---
title: Yetenek Görünürlüğü
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Yetenek Görünürlüğü

Superdav AI Agent v1.12.0, hangi yüzeylerin hangi yeteneği göstereceğini yöneten **Yetenek Görünürlüğü** kontrollerini getiriyor. Bu, yöneticilerin hangi agent yeteneklerinin REST API'ler, MCP sunucuları, WooCommerce entegrasyonları ve diğer arayüzler aracılığıyla kullanılabilirliğini detaylıca ayarlamasına olanak tanır.

## Yetenek Görünürlüğü Nedir? {#what-is-ability-visibility}

Yetenek Görünürlüğü, şunları kontrol eden bir izin sistemidir:

- **Hangi yeteneklerin** agent'lara açık olduğu
- **Nerede gösterildikleri** (REST API, MCP, WooCommerce vb.)
- **Kimlerin erişebileceği** (partner izin listeleri aracılığıyla)
- **Nasıl sınıflandırıldıkları** (tanınmış vs. tanınmamış)

Her yetenek, farklı yüzeylerdeki kullanılabilirliğini belirleyen bir görünürlük seviyesine sahiptir.

## Görünürlük Seviyeleri {#visibility-levels}

### Public (Herkese Açık) {#public}

**Public yetenekler** her yerde mevcuttur:

- REST API uç noktaları
- MCP sunucuları
- WooCommerce entegrasyonları
- Sohbet arayüzleri
- Tüm kullanıcı rolleri (uygun izinlerle)

Örnek: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (Dahili) {#internal}

**Internal yetenekler** yalnızca WordPress kurulumunuz içinde mevcuttur:

- Sohbet arayüzleri
- Yönetici panelleri
- Yalnızca oturum açmış kullanıcılar
- REST API veya harici entegrasyonlar aracılığıyla gösterilmez

Örnek: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partner) {#partner}

**Partner yetenekler** yalnızca beyaz listelenmiş partnerlere açıktır:

- Açıkça partner izin listesinde yer almayı gerektirir
- Partner kimlik bilgileriyle REST API üzerinden kullanılabilir
- Partner kimlik doğrulamasıyla MCP üzerinden kullanılabilir
- Normal kullanıcılara açık değildir

Örnek: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (Devre Dışı) {#disabled}

**Disabled yetenekler** hiçbir yerde mevcut değildir:

- Hiçbir yüzey aracılığıyla gösterilmez
- Sohbette kullanılamaz
- Yönetici panellerinde kullanılamaz
- Kullanımdan kaldırılmış veya deneysel yetenekler için kullanışlıdır

## Yetenek Görünürlüğünü Yönetme {#managing-ability-visibility}

### Yetenek Görünürlüğü Ayarlarına Erişim {#accessing-ability-visibility-settings}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** yolunu izleyin
2. **Abilities** sekmesine tıklayın
3. Yüklü tüm yeteneklerin bir listesini ve bunların görünürlük seviyelerini göreceksiniz

### Yetenek Detaylarını Görüntüleme {#viewing-ability-details}

Herhangi bir yeteneğe tıklayarak şunları görebilirsiniz:

- **Name**: Yeteneğin tanımlayıcısı
- **Description**: Yeteneğin ne yaptığı
- **Current visibility**: Public, Internal, Partner veya Disabled
- **Partner allow-list**: Hangi partnerlerin erişebileceği (Partner görünürlüğü ise)
- **Last updated**: Görünürlüğün en son ne zaman değiştirildiği
- **Status**: Recognized (Tanınmış) veya Unclassified (Tanınmamış)

### Görünürlük Seviyelerini Değiştirme {#changing-visibility-levels}

Bir yeteneğin görünürlüğünü değiştirmek için:

1. Listede yeteneğe tıklayın
2. Açılır menüden yeni bir görünürlük seviyesi seçin
3. "Partner" seçerseniz, partner kimliklerini izin listesine ekleyin
4. **Save** (Kaydet) butonuna tıklayın

Örnek:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Toplu İşlemler {#bulk-operations}

Birden fazla yeteneğin görünürlüğünü değiştirmek için:

1. Yeteneklerin yanındaki kutucukları işaretleyin
2. Toplu işlem açılır menüsünden yeni bir görünürlük seviyesi seçin
3. **Apply** (Uygula) butonuna tıklayın

## Partner İzin Listesi {#partner-allow-list}

**Partner izin listesi**, hangi harici partnerlerin Partner düzeyindeki yeteneklere erişebileceğini kontrol eder.

### Partner Ekleme {#adding-partners}

1. **Superdav AI Agent** → **Settings** → **Partners** yolunu izleyin
2. **Add Partner** (Partner Ekle) butonuna tıklayın
3. Partner tanımlayıcısını (genellikle bir API anahtarı veya kuruluş kimliği) girin
4. İsteğe bağlı olarak bir partner adı ve açıklama ekleyin
5. **Save** (Kaydet) butonuna tıklayın

### Yetenekleri Partnerlere Atama {#assigning-abilities-to-partners}

Bir partner ekledikten sonra:

1. **Abilities** (Yetenekler) sekmesine gidin
2. Partner görünürlüğüne sahip bir yetenek bulun
3. Düzenlemek için tıklayın
4. "Partner allow-list" bölümünde, erişimi olması gereken partnerlerin kutucuklarını işaretleyin
5. **Save** (Kaydet) butonuna tıklayın

### Partner Erişimi Kaldırma {#revoking-partner-access}

Bir partnerin erişimini kaldırmak için:

1. Yeteneği düzenleyin
2. İzin listesindeki partnerin kutucuğunun işaretini kaldırın
3. **Save** (Kaydet) butonuna tıklayın

Partner, o yeteneğe erişimini anında kaybedecektir.

## Tanınmamış Yetenekler {#unclassified-abilities}

Superdav AI Agent'ın tanımadığı üçüncü taraf bir yetenek yüklediğinizde, bu **Unclassified** (Tanınmamış) olarak işaretlenir.

### Tanınmamış Yetenekler İçin Yönetici Bildirimi {#admin-notice-for-unclassified-abilities}

Aşağıdaki yönetici bildirimini göreceksiniz:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Tanınmamış Yetenekleri Gözden Geçirme {#reviewing-unclassified-abilities}

1. Bildirimdeki **Review Abilities** (Yetenekleri Gözden Geçir) butonuna tıklayın
2. Her tanınmamış yetenek için şunları göreceksiniz:
   - Yetenek adı ve açıklaması
   - Kaynağı (hangi eklenti/addon yüklediği)
   - Önerilen görünürlük seviyesi
   - Güvenlik değerlendirmesi

3. Bir görünürlük seviyesi seçin:
   - **Public**: Yeteneğe güveniyorsunuz; her yerde gösterin
   - **Internal**: Yalnızca dahili kullanımla sınırlayın
   - **Partner**: Belirli partnerlerle sınırlayın
   - **Disabled**: Bu yeteneği kullanmayın

4. Kararınızı kaydetmek için **Classify** (Sınıflandır) butonuna tıklayın

### Tanınmamış Yetenekleri Neden Sınıflandırmalıyız? {#why-classify-unclassified-abilities}

Yetenekleri sınıflandırmak:

- **Güvenliği artırır**: Nelerin gösterildiğini açıkça onaylamış olursunuz
- **Kazaları önler**: Tanınmamış yetenekler varsayılan olarak devre dışı bırakılır
- **Özellikleri etkinleştirir**: Sınıflandırıldıktan sonra yetenek kullanılabilir hale gelir
- **Kararları belgelendirir**: Seçimleriniz denetim amaçlı kaydedilir

## Farklı Yüzeylerde Görünürlük {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Public yetenekler** REST uç noktaları üzerinden kullanılabilir:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internal ve Partner yetenekler** REST API üzerinden kullanılamaz.

### MCP Sunucuları {#mcp-servers}

**Public yetenekler** MCP üzerinden kullanılabilir:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internal yetenekler** MCP üzerinden gösterilmez.

**Partner yetenekler** yalnızca partner kimlik bilgileriyle kullanılabilir.

### WooCommerce Entegrasyonu {#woocommerce-integration}

WooCommerce ile ilgili **Public yetenekler** kullanılabilir:

- Ürün yönetimi
- Sipariş işleme
- Müşteri iletişimi

**Internal yetenekler** WooCommerce'a açık değildir.

### Sohbet Arayüzü {#chat-interface}

**Tüm yetenekler** (Public, Internal, Partner), kullanıcı izinlerine bağlı olarak sohbette kullanılabilir:

- Yöneticiler tüm yetenekleri görür
- Normal kullanıcılar yalnızca Public yetenekleri görür
- Partnerler Public + Partner yeteneklerini görür (beyaz listelenmişse)

## Güvenlik En İyi Uygulamaları {#security-best-practices}

### En Az Ayrıcalık Prensibi {#principle-of-least-privilege}

- Kullanımına devam etmesi gereken en kısıtlayıcı görünürlük seviyesini ayarlayın
- Hassas işlemler için Partner görünürlüğünü kullanın
- Kullanmadığınız yetenekleri devre dışı bırakın

### Düzenli Denetimler {#regular-audits}

- Yetenek görünürlüğünü aylık olarak gözden geçirin
- Tanınmamış yetenekler olup olmadığını kontrol edin
- Kullanılmayan partnerler için erişimi kaldırın

### Günlük Tutma ve İzleme {#logging-and-monitoring}

- Hangi yeteneklerin en çok kullanıldığını izleyin
- Partner erişim kalıplarını takip edin
- Olağandışı yetenek kullanımında uyarı alın

### Üçüncü Taraf Yetenekler {#third-party-abilities}

- Etkinleştirmeden önce üçüncü taraf yetenekleri gözden geçirin
- Onları açıkça sınıflandırın
- Internal veya Partner görünürlüğü ile başlayın
- Yalnızca kontrol edildikten sonra Public'e yükseltin

## Sorun Giderme {#troubleshooting}

**Bir yetenek listede görünmüyor**
- Yeteneğin yüklü ve aktif olduğundan emin olun
- Eklentinin/addon'un etkinleştirildiğini kontrol edin
- Sayfayı yenileyin

**Bir yeteneğin görünürlüğünü değiştiremiyorum**
- Yönetici izinlerine sahip olduğunuzdan emin olun
- Yeteneğin bir eklenti tarafından kilitlenmediğini kontrol edin
- Çakışan eklentileri devre dışı bırakmayı deneyin

**Bir partner bir yeteneğe erişemiyor**
- Partnerin izin listesinde olduğundan emin olun
- Yeteneğin görünürlüğünün Partner olarak ayarlandığını kontrol edin
- Partnerin kimlik bilgilerinin doğru olduğundan emin olun
- Kimlik doğrulama hataları için API günlüklerini kontrol edin

**Tanınmamış yetenekler çıkmaya devam ediyor**
- Yönetici bildiriminde bunları gözden geçirin ve sınıflandırın
- Sınıflandırmanızın kaydedildiğinden emin olun
- Yeteneği sağlayan eklentinin güncel olduğundan emin olun

## Eski Moddan Geçiş {#migration-from-legacy-mode}

Superdav AI Agent'ın eski bir sürümünden yükseltme yapıyorsanız:

- Mevcut tüm yetenekler otomatik olarak Public olarak sınıflandırılır
- Gerekirse görünürlüğü gözden geçirip ayarlayın
- Erişim kısıtlamak istemediğiniz sürece herhangi bir işlem yapmanıza gerek yoktur

Geçişle ilgili daha fazla ayrıntı için **Third-Party Mode Migration** (Üçüncü Taraf Mod Geçişi) bölümüne bakın.

## Sonraki Adımlar {#next-steps}

Yetenek görünürlüğünü yapılandırdıktan sonra:

1. **Yeteneklerinizi gözden geçirin**: Yüklü tüm yetenekleri denetleyin
2. **Tanınmamış yetenekleri sınıflandırın**: Yönetici bildirimlerine yanıt verin
3. **Partnerleri kurun**: Partner görünürlüğü kullanıyorsanız partner ekleyin
4. **Kullanımı izleyin**: Hangi yeteneklerin en çok kullanıldığını takip edin
5. **Kararları belgeleyin**: Her görünürlük seviyesi için neden seçtiğinize dair notlar tutun
