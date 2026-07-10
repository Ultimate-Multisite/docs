---
title: Kontrol paneli integrasiini gowulandyrmak
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Kontrol Paneli Entegrasyonunu Geliştirme {#enhance-control-panel-integration}

## Genel Bakış {#overview}
Enhance, güçlü barındırma otomasyonu ve yönetim yetenekleri sağlayan modern bir kontrol panelidir. Bu entegrasyon, Ultimate Multisite ile Enhance Kontrol Paneli arasında otomatik alan adı senkronizasyonu ve SSL sertifikası yönetimi sağlar.

**İlgili Tartışma:** Topluluk ipuçları ve ek bilgiler için [GitHub Tartışması #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)'e bakın.

## Özellikler {#features}
- Ultimate Multisite'ta alan adları eşleştirildiğinde otomatik alan adı senkronizasyonu
- DNS çözüldüğünde LetsEncrypt aracılığıyla otomatik SSL sertifikası sağlama
- Alt alan adı desteği, alt alan adı modunda çalışan ağlar için
- Eşleştirmeler silindiğinde alan adının kaldırılması
- API kimlik bilgilerini doğrulamak için bağlantı testi

## Gereksinimler {#requirements}

### Sistem Gereksinimleri {#system-requirements}
- Enhance Kontrol Paneli kurulu ve erişilebilir olmalı
- WordPress Multisite kurulumu bir Enhance sunucusunda barındırılmalı veya ona bağlanmalı
- Apache web sunucusu (Enhance şu anda Apache yapılandırmalarını destekler; LiteSpeed Enterprise daha düşük maliyetle mevcuttur)

### API Erişimi {#api-access}
API token'ları oluşturmak için Enhance Kontrol Paneli üzerinde yönetici erişiminiz olmalıdır.

## API Kimlik Bilgilerinizi Alma {#getting-your-api-credentials}

### 1. Bir API Token Oluşturma {#1-create-an-api-token}

1. Yönetici olarak Enhance Kontrol Paneline giriş yapın
2. Gezinme menüsünde **Ayarlar**'a tıklayın
3. **Erişim Tokenları**'na gidin
4. **Token Oluştur**'a tıklayın
5. Token'a açıklayıcı bir isim verin (örneğin, "Ultimate Multisite Entegrasyonu")
6. **Sistem Yöneticisi** rolünü atayın
7. Süre bitiş tarihi için:
   - Token'ın asla süresinin dolmasını istemiyorsanız boş bırakın
   - Veya güvenlik amaçları için belirli bir son kullanma tarihi belirleyin
8. **Oluştur**'a tıklayın

Oň siz döredip geçip biljek **Access Token** we **Organization ID** görkeziljekdir. Bu haklary **derhal saklaň**, çünki token diňe bir gezek görkezilýär.

### 2. Organizasiýa ID-nizi Almagyňyz {#2-get-your-organization-id}

Organizasiýa ID, "Org ID: {siz_id}" diýlip belgi edilen mavi maglumat kutubikasyna Access Tokens sahhasynda görkezilýär.

Organizasiýa ID şu formatda UUID ýaly görkezilir: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Kundikasyň Organizasiýa ID-sini aşakdaky usullar bilen hem tapyp bilersiňiz:
1. **Customers** sahhasyna gidiň
2. Elýeterli kundikasy üçin **Manage customer** (kundikasyndan dolandyrmak) düwmenine basyň
3. URL-i barlap görüň - Organizasiýa ID, `/customers/` bilen bilelikdäki alfanumerik harplardan soňki bölekdir.

### 3. Server ID-nizi Almagyňyz {#3-get-your-server-id}

Server ID-ni tapmak üçin (domain işlemleri üçin zerurdyr):

1. Enhance Control Panelde **Servers** (Serverler) bölümini gysgaçlaň
2. WordPress instalasiýasyny işledik servere basyň
3. Server ID (UUID formaty) URL-de ýa-da server detallerinde görkeziljekdir
4. Alternatiwki, serverleri sanamak üçin API-ni hem ulanyp bilersiňiz:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID UUID formatyny şu görkezýär: `00000000-0000-0000-0000-000000000000`

### 4. API URL-i Almagyňyz {#4-get-your-api-url}

Siziň API URL-i, Enhance Control Panel URL-i `/api/` bilen ýa-da goşuldyrylan görnüşidir:

```
https://your-enhance-panel.com/api/
```

**Aýratyn:** `/api/` ulanylyp bilmelidir. Ünsiz ýalňyşlar şular bolup biler:
- Diňe domaini `/api/` bilen ulanyp bilmek
- Güýänlik üçin HTTPS-den has gowy olan HTTP ulanyp bilmek (HTTPS zerurdyr)

## Konfigurasiýa {#configuration}

### Zərurly Konstanta {#required-constants}

Aşakdaky konstantany `wp-config.php` faylınıza goşdirip bilersiňiz:

// Control Panel Entegrasiini Geliştirme
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Entegrasi Wizardi Aralyşygy {#setup-via-integration-wizard}

1. WordPress admininizde, **Ultimate Multisite** > **Settings** (Täsirler) bölümüne gidin.
2. **Integrations** (Entegrasiýalar) sekmesine geçiň.
3. **Enhance Control Panel Integration** (Geliştirme Paneli Entegrasiýasy) bilen tapyň we **Configuration** (Sazlama) düwmenine basyň.
4. Wizard size sazlamalary geçirip biler:
   - **1-nji ädim:** Giriş we funksiýalar umumy görkezmesi
   - **2-nji ädim:** API agzamaçlaryny giriziň (Token, API URL, Server ID)
   - **3-nji ädim:** Bağlanany barlap geçiriň
   - **4-nji ädim:** Gözden geçiriň we işe başlaň

Siz şu opsiyadan birini saýlap bilersiňiz:
- Wizardy `wp-config.php` fayluna awtomatik sazlamalary goýmak üçin ulanmagy
- Konstanta tanamalaryny köçürüp olar bilen käbir zatlary özünüz goýmak

## Goşmaça WordPress Sazlamalary {#additional-wordpress-configuration}

Kommunita tanyşyklaryna esaslanýan ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), bu goşmaça sazlamalary özüňiz sazlamagyň gerek bolmagy mümkin:

### .htaccess Sazlamasy {#htaccess-configuration}

Domain eşleşdirilmegi bilen baglanyşykly meseleler üçin:
1. Orijinal Enhance `.htaccess` faylyny siliň
2. Olary standart WordPress Multisite `.htaccess` fayly bilen üýtgediň

### Cookie Konstanta {#cookie-constants}

Eşleşdirilen domainlar boýunça düzgün cookie işlenmesini üpjün etmek üçin bu konstantalara `wp-config.php`-e goşuň:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Näme Eme? {#how-it-works}

### Domain Eşleşdirilende {#when-a-domain-is-mapped}

1. Ultimate Multisite'da bir kullanıcı özel alan adını eşleştirir (veya alt alan adı modunda yeni bir site oluşturulur).
2. Entegrasyon Enhance API-sine POST isteği gönderir: `/servers/{server_id}/domains`
3. Enhance, alanı sunucu yapılandırmanıza ekler.
4. DNS sizin sunucunuza çözüldüğünde, Enhance otomatik olarak LetsEncrypt aracılığıyla bir SSL sertifikası sağlar.
5. Alan adı HTTPS ile aktif hale gelir.

### Bir Alan Adı Kaldırıldığında {#when-a-domain-is-removed}

1. Ultimate Multisite'da bir alan adı eşleştirmesi silinir.
2. Entegrasyon, alan adının kimliğini bulmak için Enhance'i sorgular.
3. Aşağıdaki adrese DELETE isteği gönderilir: `/servers/{server_id}/domains/{domain_id}`
4. Enhance, alanı sunucu yapılandırmanızdan kaldırır.

### DNS ve SSL Kontrolü {#dns-and-ssl-checking}

Ultimate Multisite dahili DNS ve SSL kontrolünü içerir:
- Kontrol aralığını **Domain Mapping Settings**'de ayarlayabilirsiniz (default: 300 saniye/5 dakika).
- Sistem, bir alanı aktif olarak işaretlemeden önce DNS yayılımını doğrular.
- SSL sertifikası geçerliliği otomatik olarak kontrol edilir.
- Enhance SSL sağlama işlemini otomatik olarak halleder, bu yüzden manuel SSL yapılandırmasına gerek yoktur.

## Kurulumu Doğrulama {#verifying-setup}

### Bağlantıyı Test Etme {#test-the-connection}

1. Entegrasyon Sihirbazında **Test Connection** adımını kullanın.
2. Eklenti, sunucunuzdaki alan adlarını listelemeye çalışacaktır.
3. Başarı mesajı şunları onaylar:
   - API kimlik bilgileri doğrudur
   - API URL'si erişilebilir durumdadır
   - Sunucu ID geçerlidir
   - İzinler doğru ayarlanmıştır

### Bir Alan Adını Eşleştirdikten Sonra {#after-mapping-a-domain}

1. Ultimate Multisite'da bir test alanı eşleştirin.
2. Ultimate Multisite kayıtlarını kontrol edin (**Ultimate Multisite** > **Logs** > **integration-enhance**).
3. Enhance Kontrol Paneli'nde alan adının eklendiğini doğrulayın:
   - **Servers** > **Your Server** > **Domains** yolunu izleyin.
   - Yeni alan adı listede görünmelidir.
4. DNS yayıldıktan sonra SSL'in otomatik olarak sağlandığını doğrulayın

## Sorunları Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}

**Hata: "Enhance API'sine bağlanılamadı"**
- `WU_ENHANCE_API_URL` sonuna `/api/` eklenmiş olduğundan emin olun.
- HTTPS kullandığınızdan, HTTP değil, kontrol edin.
- Enhance paneli WordPress sunucunuzdan erişilebilir mi diye bakın.
- Bağlantıyı engelleyen herhangi bir güvenlik duvarı kuralı olup olmadığını kontrol edin.

**Hata: "Enhance API Token bulunamadı"**
- `WU_ENHANCE_API_TOKEN` değerinin `wp-config.php` dosyasında tanımlı olduğundan emin olun.
- Token'ın Enhance içinde silinmediğinden veya süresinin dolmadığından emin olun.
- Token değerinde yazım hatası olup olmadığını kontrol edin.

**Hata: "Sunucu Kimliği yapılandırılmadı"**
- `WU_ENHANCE_SERVER_ID` değerinin `wp-config.php` dosyasında tanımlı olduğundan emin olun.
- Sunucu Kimliğinin geçerli bir UUID formatında olup olmadığını kontrol edin.
- Sunucunun Enhance panelinizde mevcut olup olmadığını teyit edin.

### Alan Adı Eklenmedi {#domain-not-added}

**Logları kontrol edin:**
1. **Ultimate Multisite** > **Logs** bölümüne gidin.
2. Filtreyi **integration-enhance** olarak ayarlayın.
3. Sorunu gösteren hata mesajlarını arayın.

**Yaygın nedenler:**
- Geçersiz alan adı formatı.
- Alan adının Enhance'te zaten mevcut olması.
- Yetersiz API izinleri (token'ın Sistem Yöneticisi rolüne sahip olduğundan emin olun).
- Sunucu Kimliğinin Enhance'teki gerçek sunucu ile eşleşmemesi.

### SSL Sertifikası Sorunları {#ssl-certificate-issues}

**SSL sağlanmıyor:**
- DNS'in sunucunuzun IP adresine işaret ettiğini doğrulayın.
- Alan adının doğru çözümlendiğinden emin olun: `nslookup yourdomain.com`
- Enhance, SSL sağlayabilmeden önce DNS'in çözümlenmesini gerektirir.
- SSL sağlanması genellikle DNS yayılımından sonra 5-10 dakika sürer.
- SSL ile ilgili hatalar için Enhance Kontrol Paneli loglarını kontrol edin.

**Enhance'te Manuel SSL Sorun Giderme:**
1. **Servers** > **Your Server** > **Domains** bölümüne gidin.
2. Alan adınızı bulun ve SSL durumunu kontrol edin.
3. Gerekirse SSL sağlanmasını manuel olarak tetikleyebilirsiniz.

### DNS Kontrol Aralığı {#dns-check-interval}

Eğer domenler ýa SSL sertifikatlar aktivir edilmekde köp-köp çäklenýärse:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** bilen giripki
2. **DNS Check Interval** tassyklaryny tapyň
3. Default 300 saniweden aşak bir derejä (minýat: 10 saniye) degişdirip görüň
4. **Not:** Käbir derejeler ýokary server yüküne sebäp bolup, has köp wezipeli barlaglary aňladýar

### Kimlik Doğrulama Ýalňyşlary (Authentication Errors) {#authentication-errors}

**HTTP 401/403 ýalňyşlary:**
- Enhance-de API tokeniňizi täzelenip aluň
- Tokeniň **System Administrator** wezipesi barada barlap görüň
- Tokeniň süýşip süýşmediğini kontrol ediň
- Dogry Organizasiýa ID-sini ulanyp durýar (gysgaça aýtdyrmak üçin URL-de köplenç gerek däl)

### Loglary Barlamak {#log-analysis}

Detallary loglamak üçin işiň:
```php
// Haslaply bugilama üçin wp-config.php-e goşmaly
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Soňra loglary şu ýerde barlap görüň:
- Ultimate Multisite loglary: **Ultimate Multisite** > **Logs**
- WordPress debug logy: `wp-content/debug.log`
- Enhance panel loglary: Enhance-iň admin arxalypynç tapawarda bolup durýar

## API Referensesi (API Reference) {#api-reference}

### Kimlik Doğrulama (Authentication) {#authentication}
Bütün API sozlary Bearer token bilen kimlik görkezmek üçin ulanylýar:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Ulanylyp Giljilýän Umumy Endpointler (Common Endpoints Used) {#common-endpoints-used}

**Serverleri Listlemek:**
```
GET /servers
```

**Serverde Domenleri Listlemek:**
```
GET /servers/{server_id}/domains
```

**Domen Goşmak:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Domeni Aýyrmak (Delete):**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Dolandyrylan API Dokumentasiýasy (Full API Documentation) {#full-api-documentation}
Tam API dokumentasiýasy: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Iň Gowy Üsleri (Best Practices) {#best-practices}

### Güvenlik {#security}
- **API tokenlerini asla versiyon kontrolüne (version control) göndermeyin**
- Tokenleri `wp-config.php` dosyasında saklayın, bu dosyayı Git'ten hariç tutmalısınız
- Uygun izinlere sahip tokenleri kullanın (tam entegrasyon için Sistem Yöneticisi yetkileri)
- Üretim ortamları için token son kullanma tarihlerini ayarlayın
- Tokenleri periyodik olarak değiştirin

### Performans {#performance}
- Aşırı API çağrılarını önlemek için varsayılan DNS kontrol aralığını (300 saniye) kullanın
- Büyük ölçekli alan işlemleri yaparken Enhance sunucu kaynaklarını izleyin
- Bir anda çok sayıda alanı eşleştirmeniz gerekiyorsa, alan eklemelerini zamanlayarak yapmayı düşünün

### İzleme {#monitoring}
- Entegrasyon hatalarını kontrol etmek için Ultimate Multisite loglarını düzenli olarak kontrol edin
- Başarısız alan eklemeleri için izleme kurun
- SSL sertifikalarının doğru şekilde sağlanıp sağlanmadığını doğrulayın
- Enhance sunucu kapasitesini ve alan limitlerini yakından takip edin

## Ek Kaynaklar {#additional-resources}

- **Enhance Resmi Dokümantasyonu:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Dokümantasyonu:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Topluluk Forumu:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Tartışması:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Alan Eşleştirme Rehberi:** "Domain Mapping v2'yi Nasıl Yapılandırılır" wiki sayfasını görün

## Destek {#support}

Sorunlarla karşılaşırsanız:
1. Yukarıdaki Sorun Giderme bölümünü kontrol edin
2. Ultimate Multisite loglarını gözden geçirin
3. [GitHub Tartışmalarına](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) başvurun
4. Panel özel sorunlar için Enhance desteğiyle iletişime geçin
5. Topluluk yardımından faydalanmak için ayrıntılı hata günlükleriyle yeni bir tartışma oluşturun

## Notlar {#notes}

Bu integrasi diyaloglar (domain aliases) için işlev görür; Enhance otomatik olarak SSL'i yönetir.
Bu entegrasyon hem özel alan adı eşleştirmelerini hem de alt alan adına dayalı siteleri destekler.
Otomatik www alt alan adı oluşturma ayarları Domain Mapping ayarlarına girilerek yapılandırılabilir.
Enhance şu anda Apache yapılandırmalarını (LiteSpeed Enterprise mevcuttur) desteklemektedir.
Ultimate Multisite'tan bir alan adını kaldırmak, o alanı Enhance'dan kaldırır ancak ilişkili SSL sertifikalarını hemen silmeyebilir.
