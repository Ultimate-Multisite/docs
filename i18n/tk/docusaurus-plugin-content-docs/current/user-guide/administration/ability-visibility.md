---
title: Görünürlük yeteneği
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Yetenek Görünürlüğü (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0, her bir yeteneğin hangi arayüzlerde gösterileceğini belirleyen **Yeteneğin Görünürlüğü** kontrollerini getiriyor. Bu sayede yöneticiler, agent yeteneklerinin REST API'ler, MCP sunucuları, WooCommerce entegrasyonları ve diğer arayüzler aracılığıyla hangilerinin mevcut olduğunu ince ayar yapabilirler.

## Yetenek Görünürlüğü Nedir? {#what-is-ability-visibility}

Yeteneğin Görünürlüğü, şunları kontrol eden bir izin sistemidir:

- **Hangi yeteneklerin** agent'lere açık olduğu
- **Nerede gösterildiği** (REST API, MCP, WooCommerce vb.)
- **Kimlerin erişebileceği** (ortak izin listeleri aracılığıyla)
- **Nasıl sınıflandırıldığı** (tanınmış mı yoksa tanınmamış mı)

Her yetenek, farklı arayüzlerdeki kullanılabilirliğini belirleyen bir görünürlük seviyesi taşır.

## Görünürlük Seviyeleri {#visibility-levels}

### Public (Herkese Açık) {#public}

**Herkese açık yetenekler** her yerde mevcuttur:

- REST API uç noktaları
- MCP sunucuları
- WooCommerce entegrasyonları
- Sohbet arayüzleri
- Tüm kullanıcı rolleri (uygun izinlerle birlikte)

Örnek: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (İçsel) {#internal}

**İçsel yetenekler** yalnızca WordPress kurulumunuz içinde mevcuttur:

- Sohbet arayüzleri
- Yönetici panelleri
- Sadece oturum açmış kullanıcılar
- REST API veya harici entegrasyonlar aracılığıyla gösterilmez

Örnek: `manage-settings`, `view-analytics`, `export-data`

### Partner (Ortak) {#partner}

**Ortak yetenekler** yalnızca beyaz listeye alınmış ortaklara açıktır:

- Açık bir ortak izin listesine eklenmeyi gerektirir
- Ortak kimlik bilgileriyle REST API aracılığıyla kullanılabilir
- Ortak kimlik doğrulaması ile MCP üzerinden kullanılabilir
- Normal kullanıcılara açık değildir

Örnek: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (Devre Dışı) {#disabled}

**Devre dışı bırakılmış yetenekler** hiçbir yerde mevcut değildir:

- Herhangi bir arayüz aracılığıyla gösterilmez
- Sohbetlerde mevcut değildir
- Yönetici panellerinde mevcut değildir
- Eskimiş veya deneysel yetenekler için kullanışlıdır

## Ability Görünürlüğünü Yönetme {#managing-ability-visibility}

### Yetenek Görünürlüğü Ayarlarına Erişim {#accessing-ability-visibility-settings}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** menüsüne gidin.
2. **Abilities** sekmesine tıklayın.
3. Burada yüklü tüm yeteneklerin görünürlük seviyeleriyle birlikte bir listesini göreceksiniz.

### Yetenek Detaylarını Görüntüleme {#viewing-ability-details}

Bir yeteneğe tıklayarak şunları görebilirsiniz:

- **Name (Adı)**: Yeteneğin tanımlayıcısı
- **Description (Açıklama)**: Yeteneğin ne işe yaradığı
- **Current visibility (Mevcut görünürlük)**: Public (Herkese Açık), Internal (İç), Partner (Ortak) veya Disabled (Devre Dışı)
- **Partner allow-list (Ortak izin listesi)**: Hangi ortakların erişebileceği (Eğer Ortak görünürlüğü seçiliyse)
- **Last updated (Son güncelleme)**: Görünürlüğün en son ne zaman değiştirildiği
- **Status (Durum)**: Recognized (Tanınmış) veya Unclassified (Sınıflandırılmamış)

### Görünürlük Seviyelerini Değiştirme {#changing-visibility-levels}

Bir yeteneğin görünürlüğünü değiştirmek için:

1. Listeden ilgili yeteneğe tıklayın.
2. Açılır menüden yeni bir görünürlük seviyesi seçin.
3. "Partner"i seçerseniz, izin listesine (allow-list) ortak tanımlayıcılarını ekleyin.
4. **Save (Kaydet)** butonuna tıklayın.

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
3. **Apply (Uygula)** butonuna tıklayın.

## Partner İzin Listesi (Partner Allow-List) {#partner-allow-list}

**Partner allow-list**, harici ortakların Ortak düzeyindeki yeteneklere erişebilmesini kontrol eder.

### Ortakları Ekleme {#adding-partners}

1. **Superdav AI Agent** → **Settings** → **Partners** menüsüne gidin.
2. **Add Partner (Ortak Ekle)** butonuna tıklayın.
3. Ortak tanımlayıcısını girin (genellikle bir API anahtarı veya kuruluş kimliği).
4. İsteğe bağlı olarak ortak adı ve açıklamasını ekleyin.
5. **Save (Kaydet)** butonuna tıklayın.

### Yetenekleri Ortaklara Atama {#assigning-abilities-to-partners}

Bir ortak ekledikten sonra:

1. **Abilities** sekmesinde geçiň
2. Partner görýän bir abilitini tapyň
3. Düzeldetmek üçin basyň
4. "Partner allow-list" bölmesinde, girýeterlik bermeli bolan partnerler üçin kutlyklary işaretleyin
5. **Save** (Saaklanyşdyrmak) butonuna basyň

### Partner Girýeterligini Almagy (Revoking Partner Access) {#revoking-partner-access}

Partnerden girýeterligi almak üçin:

1. Abilitini düzeldetdiň
2. Allow-listden partner kutlyklaryny aýyrmagyň
3. **Save** (Saaklanyşdyrmak) butonuna basyň

Partner bu abilitiden hemen hemen derrew girýeterlikini ýitirip biler.

## Klassifikasiýa edilmeýän Abilitetler (Unclassified Abilities) {#unclassified-abilities}

Superdav AI Agent onu tanamadyk üçin, üçünji tora (third-party) habiliti kurmagynda **Unclassified** (Klassifikasiýa edilmeýän) diýlip görkezilýär.

### Unclassified Abilitetler Üçin Administrasiýa Bildirişi {#admin-notice-for-unclassified-abilities}

Siz administrasiýadan bildiriş görüp bilersiňiz:

```
⚠️ Unclassified Abilities Detected

Aşakdaky abiliteler kuryldy, ýöne tanalmagyň ýok:
- custom-import-tool
- external-api-wrapper

Bu habiliteler howpsuzlyk ýa-da laçynlylyk hasaplanyp biler.
Olary gözden geçiriň we klassifikasiýa ediň.

[Review Abilities] [Dismiss]
```

### Unclassified Abilitetleri Gözden Geçirmek (Reviewing Unclassified Abilities) {#reviewing-unclassified-abilities}

1. Bildirişde **Review Abilities** (Abilitetleri Gözden Geçirmek) düwügindäki basyň
2. Her bir unclassified abilitet üçin size şu görnüşde görkeziljekdir:
   - Abilitetiň ady we beýany
   - Manba (onu kurgan plugin/addon)
   - Öngörilýän görýänlik derejesi
   - Howpsuzlyk bahasy

3. Görýänlik derejesini saýlaň:
   - **Public** (Jahılı): Abilitetine ynan; olary ähli ýerde açyň
   - **Internal** (Içki): Diňe içki ulanyş üçin çykaryň
   - **Partner**: Belirli partnerlere çykaryň
   - **Disabled** (Deýilmek): Bu abilitini ulanyp bilmän.

4. Kararyňyzy saklamak üçin **Classify** (Klassifikasiýa ediň) düwügindäki basyň

### Unclassified Abilitetleri Neden Klassifikasiýa Etmeli? {#why-classify-unclassified-abilities}

Abilitetleri klassifikasiýa etmek:

- **Howpsuzlygy gowulandyryp bilýär**: Näme açyljakdygyny siz özüňiz açıkça tasdiq edýärsiňiz
- **Ýatdan çykarmagyň öňüni alýar**: Klassifikasiýa edilmeýän abiliteler default bilen deaktivdedir
- **Funksionallary açýar**: Klassifikasiýa edilen soňdan, abilitet ulanylyp bilner
- **Kararlary resmileşdirýär**: Sizden alnan saýlawlar audit maksatlary üçin ýazylmaga geçirilýär

## Çeşitli Yüzeylerde Görünürlük {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Halkça görünen yetenekler** REST endpointleri aracılığıyla əldə edilə bilər:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Daxili və tərəfdaş yeteneklər** REST API vasitəsilə əldə edilmir.

### MCP Serverləri {#mcp-servers}

**Halkça görünen yeteneklər** MCP vasitəsilə əldə edilə bilər:

```
MCP Server: Superdav AI Agent
Mövcud yetənəklər:
- scaffold-block-theme
- activate-theme
- send-email
```

**Daxili yetənəklər** MCP vasitəsilə göstərilmir.

**Tərəfdaş yetənəkləri** yalnız tərəfdaş nömrələri ilə əldə edilə bilər.

### WooCommerce İnteqrasiyası {#woocommerce-integration}

WooCommerce ilə bağlı **halkça görünen yetənəklər** mövcuddur:

- Məhsul idarəetməsi
- Sifariş emalı
- Müştəri ilə əlaqə

**Daxili yetənəklər** WooCommerce-ə göstərilmir.

### Chat İnterfeysi {#chat-interface}

**Bütün yetənəklər** (Halkça, Daxili, Tərəfdaş) istifadəçi icazələrinə görə chatdə əldə edilə bilər:

- Administratorlar bütün yetənəkləri görürlər
- Adi istifadəçilər yalnız Halkça görünen yetənəkləri görürlər
- Tərəfdaşlar (sifariş edilmişdirsə) Halkça + Tərəfdaş yetənəklərini görürlər

## Təhlükəsizlik Ən İyi Praktikaları {#security-best-practices}

### Ən Az İmtiyaz Prinsipi {#principle-of-least-privilege}

- Yetənəkləri istifadə etməyə icazə verən ən məhdud görünürlük səviyyəsində təyin edin
- Həssas əməliyyatlar üçün Tərəfdaş görünürlüyünü istifadə edin
- İstifadə etmədiyiniz yetənəkləri deaktiv edin

### Düzenli Auditlər {#regular-audits}

- Yetənəklərin görünürlüyünü hər ay yoxlayın
- Sınıflandırılmamış yetənəklər üçün yoxlayın
- İstifadə edilməyən tərəfdaşlar üçün girişi aradan qaldırın

### Qeydlər və Monitorinq {#logging-and-monitoring}

- Hansı yetənəklərin ən çox istifadə edildiyini izləyin
- Tərəfdaşların giriş nümunələrini izləyin
- Qeyri-adi yetənək istifadəsində xəbərdarlıq verin

### Üçüncü Tərəf Yetənəkləri {#third-party-abilities}

- Aktiv etməzdən əvvəl üçüncü tərəf yetənəklərini nəzərdən keçirin
- Onları açıq şəkildə sinifləyin
- Daxili və ya Tərəfdaş görünürlüklə başlayın
- Yoxlamadan sonra yalnız Halkça olaraq təqdim edin

## Sorunları Giderme {#troubleshooting}

**Bir yetenek listede görünmüyor**
- Yeteneğin yüklü olup olmadığını ve aktif olup olmadığını kontrol edin
- Eklentinin/addon'un etkinleştirilip etkinleştirilmediğini kontrol edin
- Sayfayı yenileyin

**Bir yeteneğin görünürlüğünü değiştiremiyorum**
- Yönetici izinleriniz olduğundan emin olun
- Yeteneğin bir eklenti tarafından kilitlenmediğinden emin olun
- Çatışan eklentileri devre dışı bırakmayı deneyin

**Bir ortak yeteneğe erişemiyor**
- Ortak listenizde (allow-list) olup olmadığını doğrulayın
- Yeteneğin görünürlüğünün "Partner" olarak ayarlandığından emin olun
- Ortak kimlik bilgilerinizin doğru olduğunu teyit edin
- Kimlik doğrulama hataları için API kayıtlarını kontrol edin

**Sınıflandırılmamış yetenekler sürekli çıkıyor**
- Yönetici bildirimlerinde bunları gözden geçirin ve sınıflandırın
- Sınıflandırmanızın kaydedilip kaydedilmediğini kontrol edin
- Yeteneği sağlayan eklentinin güncel olup olmadığını doğrulayın

## Eski Moddan Taşıma (Migration from Legacy Mode) {#migration-from-legacy-mode}

Superdav AI Agent'in daha eski bir sürümünden yükseltme yapıyorsanız:

- Mevcut tüm yetenekler otomatik olarak "Public" (Herkese Açık) olarak sınıflandırılır
- Gerekirse görünürlüğü gözden geçirin ve ayarlayın
- Erişimi kısıtlamak istemiyorsanız herhangi bir işlem yapmanıza gerek yoktur

Yerel Yetenek API entegrasyonuna geçişle ilgili daha fazla ayrıntı için **Üçüncü Taraf Moddan Taşıma** bölümüne bakın.

## Sonraki Adımlar {#next-steps}

Yetenek görünürlüğünü yapılandırdıktan sonra:

1. **Yeteneklerinizi gözden geçirin**: Yüklü tüm yetenekleri denetleyin
2. **Sınıflandırılmamış yetenekleri sınıflandırın**: Yönetici bildirimlerine yanıt verin
3. **Ortakları ayarlayın**: Ortak görünürlüğü kullanıyorsanız ortakları ekleyin
4. **Kullanımı izleyin**: Hangi yeteneklerin en çok kullanıldığını takip edin
5. **Kararları belgeleyin**: Her bir görünürlük seviyesini neden seçtiğinize dair notlar tutun
