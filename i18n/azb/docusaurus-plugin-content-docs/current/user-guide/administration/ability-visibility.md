---
title: K'tara Vylos
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Yetenek Görünürlüğü (Ability Visibility)

Superdav AI Agent v1.12.0, hangi arayüzlerin hangi yetenekleri göstereceğini kontrol eden **Yetenek Görünürlüğü** kontrollerini getiriyor. Bu özellik, yöneticilerin hangi agent yeteneklerinin REST API'ler, MCP sunucuları, WooCommerce entegrasyonları ve diğer arayüzler üzerinden kullanılabileceğini detaylıca ayarlamasına olanak tanır.

## Yetenek Görünürlüğü Nedir?

Yetenek Görünürlüğü, aşağıdaki konuları kontrol eden bir izin sistemidir:

- **Hangi yetenekler** agent'lara açık
- **Nerede gösterildikleri** (REST API, MCP, WooCommerce vb.)
- **Kimlerin erişebileceği** (partner izin listeleri aracılığıyla)
- **Nasıl sınıflandırıldıkları** (tanınmış mı yoksa sınıflandırılmamış mı)

Her yetenek, farklı arayüzlerdeki kullanılabilirliğini belirleyen bir görünürlük seviyesine sahiptir.

## Görünürlük Seviyeleri

### Public (Herkese Açık)

**Public yetenekler** her yerde kullanılabilir:

- REST API uç noktaları
- MCP sunucuları
- WooCommerce entegrasyonları
- Sohbet arayüzleri
- Tüm kullanıcı rolleri (uygun izinlerle)

Örnek: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (Dahili)

**Internal yetenekler** yalnızca WordPress kurulumunuz içinde kullanılabilir:

- Sohbet arayüzleri
- Yönetici panelleri
- Yalnızca oturum açmış kullanıcılar
- REST API veya harici entegrasyonlar üzerinden gösterilmez

Örnek: `manage-settings`, `view-analytics`, `export-data`

### Partner (Ortak)

**Partner yetenekler** yalnızca beyaz listeye alınmış (whitelisted) ortaklara açıktır:

- Açıkça partner izin listesinde yer almayı gerektirir
- Partner kimlik bilgileriyle REST API üzerinden kullanılabilir
- Partner kimlik doğrulamasıyla MCP üzerinden kullanılabilir
- Normal kullanıcılara açık değildir

Örnek: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (Devre Dışı)

**Disabled yetenekler** hiçbir yerde kullanılamaz:

- Hiçbir arayüz üzerinden gösterilmez
- Sohbette kullanılamaz
- Yönetici panellerinde kullanılamaz
- Kullanımdan kaldırılmış veya deneysel yetenekler için kullanışlıdır

## Yetenek Görünürlüğünü Yönetme

### Yetenek Görünürlüğü Ayarlarına Erişim

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** yolunu izleyin
2. **Abilities** sekmesine tıklayın
3. Yüklü tüm yeteneklerin bir listesini ve bunların görünürlük seviyelerini göreceksiniz.

### Yetenek Detaylarını Görüntüleme

Herhangi bir yeteneğe tıklayarak şunları görebilirsiniz:

- **Name**: Yeteneğin tanımlayıcısı
- **Description**: Yeteneğin ne yaptığı
- **Current visibility**: Public, Internal, Partner veya Disabled
- **Partner allow-list**: Hangi ortakların erişebileceği (Partner görünürlüğü ise)
- **Last updated**: Görünürlüğün en son ne zaman değiştirildiği
- **Status**: Recognized (Tanınmış) veya Unclassified (Sınıflandırılmamış)

### Görünürlük Seviyelerini Değiştirme

Bir yeteneğin görünürlüğünü değiştirmek için:

1. Listeden yeteneğe tıklayın
2. Açılır menüden yeni bir görünürlük seviyesi seçin
3. "Partner" seçerseniz, ortak tanımlayıcıları izin listesine ekleyin
4. **Save** (Kaydet) butonuna tıklayın

Örnek:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Toplu İşlemler

Birden fazla yeteneğin görünürlüğünü değiştirmek için:

1. Yeteneklerin yanındaki kutucukları işaretleyin
2. Toplu işlem açılır menüsünden yeni bir görünürlük seviyesi seçin
3. **Apply** (Uygula) butonuna tıklayın

## Partner İzin Listesi (Partner Allow-List)

**Partner izin listesi**, hangi harici ortakların Partner seviyesindeki yeteneklere erişebileceğini kontrol eder.

### Ortak Ekleme

1. **Superdav AI Agent** → **Settings** → **Partners** yolunu izleyin
2. **Add Partner** (Ortak Ekle) butonuna tıklayın
3. Ortak tanımlayıcısını (genellikle bir API anahtarı veya kuruluş ID'si) girin
4. İsteğe bağlı olarak bir ortak adı ve açıklama ekleyin
5. **Save** (Kaydet) butonuna tıklayın

### Ortaklara Yetenek Atama

Bir ortak ekledikten sonra:

1. **Abilities** (Yetenekler) sekmesine gidin
2. Partner görünürlüğüne sahip bir yetenek bulun
3. Düzenlemek için tıklayın
4. "Partner allow-list" bölümünde, erişmesi gereken ortakların kutucuklarını işaretleyin
5. **Save** (Kaydet) butonuna tıklayın

### Ortak Erişimi Kaldırma

Bir ortağın erişimini kaldırmak için:

1. Yeteneği düzenleyin
2. İzin listesindeki ortağın kutucuğunun işaretini kaldırın
3. **Save** (Kaydet) butonuna tıklayın

Ortak, o yeteneğe erişimini anında kaybedecektir.

## Sınıflandırılmamış Yetenekler (Unclassified Abilities)

Superdav AI Agent'ın tanımadığı üçüncü taraf bir yetenek yüklediğinizde, bu yetenek **Unclassified** (Sınıflandırılmamış) olarak işaretlenir.

### Sınıflandırılmamış Yetenekler İçin Yönetici Bildirimi

Şu bildirimi göreceksiniz:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Sınıflandırılmamış Yetenekleri Gözden Geçirme

1. Bildirimdeki **Review Abilities** (Yetenekleri Gözden Geçir) butonuna tıklayın
2. Her sınıflandırılmamış yetenek için şunları göreceksiniz:
   - Yetenek adı ve açıklaması
   - Kaynağı (hangi eklenti/addon yüklediği)
   - Önerilen görünürlük seviyesi
   - Güvenlik değerlendirmesi

3. Bir görünürlük seviyesi seçin:
   - **Public**: Yeteneğe güveniyorsunuz; her yerde gösterin
   - **Internal**: Yalnızca dahili kullanımla sınırlayın
   - **Partner**: Belirli ortaklarla sınırlayın
   - **Disabled**: Bu yeteneği kullanmayın

4. Kararınızı kaydetmek için **Classify** (Sınıflandır) butonuna tıklayın

### Sınıflandırılmamış Yetenekleri Neden Sınıflandırmalıyız?

Yetenekleri sınıflandırmak:

- **Güvenliği artırır**: Nelerin gösterileceğini açıkça onaylamış olursunuz
- **Kazaları önler**: Sınıflandırılmamış yetenekler varsayılan olarak devre dışı kalır
- **Özellikleri etkinleştirir**: Sınıflandırıldıktan sonra yetenek kullanılabilir hale gelir
- **Kararları belgelendirir**: Seçimleriniz denetim amacıyla kaydedilir

## Farklı Arayüzlerde Görünürlük

### REST API

**Public yetenekler** REST uç noktaları üzerinden kullanılabilir:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internal ve Partner yetenekler** REST API üzerinden kullanılamaz.

### MCP Sunucuları

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

### WooCommerce Entegrasyonu

WooCommerce ile ilgili **Public yetenekler** kullanılabilir:

- Ürün yönetimi
- Sipariş işleme
- Müşteri iletişimi

**Internal yetenekler** WooCommerce'a açık değildir.

### Sohbet Arayüzü

**Tüm yetenekler** (Public, Internal, Partner), kullanıcı izinlerine bağlı olarak sohbette kullanılabilir:

- Yöneticiler tüm yetenekleri görür
- Normal kullanıcılar yalnızca Public yetenekleri görür
- Ortaklar Public + Partner yeteneklerini görür (beyaz listelenmişse)

## Güvenlik En İyi Uygulamaları

### En Az Ayrıcalık İlkesi (Principle of Least Privilege)

- Kullanımına devam etmesi gereken en kısıtlayıcı görünürlük seviyesini ayarlayın
- Hassas işlemler için Partner görünürlüğünü kullanın
- Kullanmadığınız yetenekleri devre dışı bırakın

### Düzenli Denetimler

- Yetenek görünürlüğünü aylık olarak gözden geçirin
- Sınıflandırılmamış yetenekler olup olmadığını kontrol edin
- Kullanılmayan ortaklar için erişimi kaldırın

### Günlük Tutma ve İzleme

- Hangi yeteneklerin en çok kullanıldığını izleyin
- Ortak erişim kalıplarını takip edin
- Olağandışı yetenek kullanımında uyarı alın

### Üçüncü Taraf Yetenekler

- Etkinleştirmeden önce üçüncü taraf yetenekleri gözden geçirin
- Onları açıkça sınıflandırın
- Internal veya Partner görünürlüğü ile başlayın
- Yalnızca kontrol edildikten sonra Public'e yükseltin

## Sorun Giderme

**Bir yetenek listede görünmüyor**
- Yeteneğin yüklü ve aktif olduğundan emin olun
- Eklentinin/addon'un etkinleştirildiğini kontrol edin
- Sayfayı yenileyin

**Bir yeteneğin görünürlüğünü değiştiremiyorum**
- Yönetici izinlerine sahip olduğunuzdan emin olun
- Yeteneğin bir eklenti tarafından kilitlenmediğini kontrol edin
- Çakışan eklentileri devre dışı bırakmayı deneyin

**Bir ortak bir yeteneğe erişemiyor**
- Ortağın izin listesinde olduğundan emin olun
- Yeteneğin görünürlüğünün Partner olarak ayarlandığını kontrol edin
- Ortağın kimlik bilgilerinin doğru olduğundan emin olun
- Kimlik doğrulama hataları için API günlüklerini kontrol edin

**Sınıflandırılmamış yetenekler çıkmaya devam ediyor**
- Yönetici bildiriminde bunları gözden geçirin ve sınıflandırın
- Sınıflandırmanızın kaydedildiğinden emin olun
- Yeteneği sağlayan eklentinin güncel olduğundan emin olun

## Eski Moddan Geçiş (Migration from Legacy Mode)

Eğer Superdav AI Agent'ın eski bir sürümünden yükseltiyorsanız:

- Mevcut tüm yetenekler otomatik olarak Public olarak sınıflandırılır
- Gerekirse görünürlüğü gözden geçirip ayarlayın
- Erişim kısıtlaması yapmak istemediğiniz sürece herhangi bir işlem yapmanıza gerek yoktur

Daha fazla ayrıntı için **Third-Party Mode Migration** (Üçüncü Taraf Mod Geçişi) bölümüne bakın.

## Sonraki Adımlar

Yetenek görünürlüğünü yapılandırdıktan sonra:

1. **Yeteneklerinizi gözden geçirin**: Yüklü tüm yetenekleri denetleyin
2. **Sınıflandırılmamış yetenekleri sınıflandırın**: Yönetici bildirimlerine yanıt verin
3. **Ortakları kurun**: Partner görünürlüğü kullanıyorsanız ortak ekleyin
4. **Kullanımı izleyin**: Hangi yeteneklerin en çok kullanıldığını takip edin
5. **Kararları belgeleyin**: Her görünürlük seviyesi için neden seçtiğinize dair notlar tutun
