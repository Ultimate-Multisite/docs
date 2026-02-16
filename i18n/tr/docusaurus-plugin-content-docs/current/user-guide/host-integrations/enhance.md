---
title: Kontrol Paneli Entegrasyonunu Geliştir
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Kontrol Paneli Entegrasyonu

## Genel Bakış
Enhance, güçlü hosting otomasyonu ve yönetim özellikleri sunan modern bir kontrol panelidir. Bu entegrasyon, Ultimate Multisite ile Enhance Kontrol Paneli arasında otomatik domain senkronizasyonu ve SSL sertifika yönetimi sağlar.

**İlgili Tartışma:** Topluluk ipuçları ve ek bilgiler için [GitHub Tartışması #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)'e göz atabilirsiniz.

## Özellikler
- Ultimate Multisite'ta domain eşleştirildiğinde otomatik domain senkronizasyonu
- DNS çözümlendiğinde LetsEncrypt aracılığıyla otomatik SSL sertifika sağlama
- Alt alan adı modunda çalışan ağlar için alt alan adı desteği
- Eşleştirmeler silindiğinde domain kaldırma
- API kimlik bilgilerini doğrulamak için bağlantı testi

## Gereksinimler

### Sistem Gereksinimleri
- Enhance Kontrol Paneli kurulu ve erişilebilir olmalı
- Enhance sunucusunda barındırılan veya bağlı WordPress Multisite kurulumu
- Apache web sunucusu (Enhance şu anda Apache yapılandırmalarını destekliyor; LiteSpeed Enterprise indirimli fiyatla sunulmaktadır)

### API Erişimi
API token'ları oluşturabilmek için Enhance Kontrol Paneli'ne yönetici erişiminiz olmalıdır.

## API Kimlik Bilgilerinizi Alma

### 1. API Token'ı Oluşturma

1. Enhance Kontrol Paneli'ne yönetici olarak giriş yapın
2. Gezinme menüsünde **Settings**'e tıklayın
3. **Access Tokens** bölümüne gidin
4. **Create Token**'a tıklayın
5. Token'a açıklayıcı bir isim verin (örn. "Ultimate Multisite Integration")
6. **System Administrator** rolünü atayın
7. Son kullanma tarihi için:
   - Token'ın süresiz geçerli olmasını istiyorsanız boş bırakın
   - Veya güvenlik amacıyla belirli bir son kullanma tarihi belirleyin
8. **Create**'e tıklayın

Oluşturma işleminden sonra **Access Token** ve **Organization ID** görüntülenecektir. **Bunları hemen kaydedin** çünkü token yalnızca bir kez gösterilecektir.

### 2. Organization ID'nizi Alma

Organization ID, Access Tokens sayfasında "Org ID: {your_id}" etiketli mavi bilgi kutusunda görüntülenir.

Organization ID şu formatta bir UUID'dir: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Ayrıca bir müşterinin Organization ID'sini şu şekilde de bulabilirsiniz:
1. **Customers** sayfasına gidin
2. İlgili müşteri için **Manage customer**'a tıklayın
3. URL'ye bakın - Organization ID, `/customers/` ifadesinden sonraki alfanümerik karakterlerdir

### 3. Server ID'nizi Alma

Server ID'nizi bulmak için (domain işlemleri için gereklidir):

1. Enhance Kontrol Paneli'nde **Servers** bölümüne gidin
2. WordPress kurulumunuzun çalıştığı sunucuya tıklayın
3. Server ID (UUID formatında) URL'de veya sunucu detaylarında görünecektir
4. Alternatif olarak, sunucuları listelemek için API kullanabilirsiniz:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID, UUID formatını takip eder: `00000000-0000-0000-0000-000000000000`

### 4. API URL'nizi Alma

API URL'niz, Enhance Kontrol Paneli URL'nizin sonuna `/api/` eklenerek oluşturulur:

```
https://your-enhance-panel.com/api/
```

**Önemli:** `/api/` yolu zorunludur. Sık yapılan hatalar şunlardır:
- `/api/` olmadan sadece domain kullanmak
- HTTPS yerine HTTP kullanmak (güvenlik için HTTPS gereklidir)

## Yapılandırma

### Gerekli Sabitler

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
// Enhance Kontrol Paneli Entegrasyonu
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Entegrasyon Sihirbazı ile Kurulum

1. WordPress yönetici panelinizde **Ultimate Multisite** > **Settings**'e gidin
2. **Integrations** sekmesine gidin
3. **Enhance Control Panel Integration**'ı bulun ve **Configuration**'a tıklayın
4. Sihirbaz kurulum sürecinde size rehberlik edecektir:
   - **Adım 1:** Giriş ve özellik genel bakışı
   - **Adım 2:** API kimlik bilgilerinizi girin (Token, API URL, Server ID)
   - **Adım 3:** Bağlantıyı test edin
   - **Adım 4:** İnceleme ve etkinleştirme

Şunları seçebilirsiniz:
- Sihirbazın sabitleri otomatik olarak `wp-config.php` dosyanıza eklemesine izin vermek
- Sabit tanımlarını kopyalayıp manuel olarak eklemek

## Ek WordPress Yapılandırması

Topluluk geri bildirimlerine dayanarak ([Tartışma #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), bu ek ayarları yapılandırmanız gerekebilir:

### .htaccess Yapılandırması

Domain eşleme ile ilgili sorunlar yaşıyorsanız:
1. Orijinal Enhance `.htaccess` dosyasını silin
2. Standart WordPress Multisite `.htaccess` dosyası ile değiştirin

### Cookie Sabitleri

Eşleştirilmiş domainler arasında düzgün çerez işleme sağlamak için bu sabitleri `wp-config.php`'ye ekleyin:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Nasıl Çalışır

### Bir Domain Eşleştirildiğinde

1. Bir kullanıcı Ultimate Multisite'ta özel bir domain eşleştirir (veya alt alan adı modunda yeni bir site oluşturulur)
2. Entegrasyon, Enhance'in API'sine bir POST isteği gönderir: `/servers/{server_id}/domains`
3. Enhance, domain'i sunucu yapılandırmanıza ekler
4. DNS sunucunuza çözümlendiğinde, Enhance otomatik olarak LetsEncrypt aracılığıyla bir SSL sertifikası sağlar
5. Domain, HTTPS ile aktif hale gelir

### Bir Domain Kaldırıldığında

1. Ultimate Multisite'ta bir domain eşleştirmesi silinir
2. Entegrasyon, domain'in ID'sini bulmak için Enhance'i sorgular
3. Şu adrese bir DELETE isteği gönderilir: `/servers/{server_id}/domains/{domain_id}`
4. Enhance, domain'i sunucu yapılandırmanızdan kaldırır

### DNS ve SSL Kontrolü

Ultimate Multisite yerleşik DNS ve SSL kontrolü içerir:
- Kontrol aralığını **Domain Mapping Settings**'te yapılandırabilirsiniz (varsayılan: 300 saniye/5 dakika)
- Sistem, bir domain'i aktif olarak işaretlemeden önce DNS yayılımını doğrular
- SSL sertifika geçerliliği otomatik olarak kontrol edilir
- Enhance SSL sağlamayı otomatik olarak yönetir, bu nedenle manuel SSL yapılandırması gerekmez

## Kurulumu Doğrulama

### Bağlantıyı Test Etme

1. Entegrasyon Sihirbazı'nda **Test Connection** adımını kullanın
2. Eklenti, sunucunuzdaki domainleri listelemeye çalışacaktır
3. Başarı mesajı şunları onaylar:
   - API kimlik bilgileri doğru
   - API URL'si erişilebilir
   - Server ID geçerli
   - İzinler düzgün ayarlanmış

### Domain Eşleştirdikten Sonra

1. Ultimate Multisite'ta bir test domain'i eşleştirin
2. Ultimate Multisite günlüklerini kontrol edin (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance Kontrol Paneli'nde domain'in eklendiğini doğrulayın:
   - **Servers** > **Your Server** > **Domains** bölümüne gidin
   - Yeni domain listede görünmelidir
4. DNS yayılımı tamamlandığında, SSL'in otomatik olarak sağlandığını doğrulayın

## Sorun Giderme

### API Bağlantı Sorunları

**Hata: "Failed to connect to Enhance API"**
- `WU_ENHANCE_API_URL` sonunda `/api/` içerdiğini doğrulayın
- HTTP değil HTTPS kullandığınızdan emin olun
- Enhance panelinin WordPress sunucunuzdan erişilebilir olduğunu kontrol edin
- Bağlantıyı engelleyen güvenlik duvarı kuralları olmadığını doğrulayın

**Hata: "Enhance API Token not found"**
- `WU_ENHANCE_API_TOKEN`'ın `wp-config.php`'de tanımlandığından emin olun
- Token'ın Enhance'te silinmediğini veya süresinin dolmadığını doğrulayın
- Token değerinde yazım hatası olup olmadığını kontrol edin

**Hata: "Server ID is not configured"**
- `WU_ENHANCE_SERVER_ID`'nin `wp-config.php`'de tanımlandığını doğrulayın
- Server ID'nin geçerli bir UUID formatında olduğundan emin olun
- Sunucunun Enhance panelinizde var olduğunu onaylayın

### Domain Eklenmiyor

**Günlükleri kontrol edin:**
1. **Ultimate Multisite** > **Logs** bölümüne gidin
2. **integration-enhance** ile filtreleyin
3. Sorunu belirten hata mesajlarını arayın

**Yaygın nedenler:**
- Geçersiz domain adı formatı
- Domain zaten Enhance'te mevcut
- Yetersiz API izinleri (token'ın System Administrator rolüne sahip olduğundan emin olun)
- Server ID, Enhance'teki gerçek sunucu ile eşleşmiyor

### SSL Sertifika Sorunları

**SSL sağlanmıyor:**
- DNS'in sunucunuzun IP adresine yönlendiğini doğrulayın
- Domain'in doğru çözümlendiğini kontrol edin: `nslookup yourdomain.com`
- Enhance, SSL sağlamadan önce DNS'in çözümlenmesini gerektirir
- SSL sağlama genellikle DNS yayılımından sonra 5-10 dakika sürer
- SSL'e özgü hatalar için Enhance Kontrol Paneli günlüklerini kontrol edin

**Enhance'te manuel SSL sorun giderme:**
1. **Servers** > **Your Server** > **Domains** bölümüne gidin
2. Domain'inizi bulun ve SSL durumunu kontrol edin
3. Gerekirse SSL sağlamayı manuel olarak tetikleyebilirsiniz

### DNS Kontrol Aralığı

Domainler veya SSL sertifikaları aktif olmak için çok uzun sürüyorsa:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** bölümüne gidin
2. **DNS Check Interval** ayarını bulun
3. Varsayılan 300 saniyeden daha düşük bir değere ayarlayın (minimum: 10 saniye)
4. **Not:** Daha düşük aralıklar daha sık kontrol anlamına gelir ancak sunucu yükünü artırır

### Kimlik Doğrulama Hataları

**HTTP 401/403 hataları:**
- Enhance'te API token'ınızı yeniden oluşturun
- Token'ın **System Administrator** rolüne sahip olduğunu doğrulayın
- Token'ın süresinin dolmadığını kontrol edin
- Doğru Organization ID'yi kullandığınızdan emin olun (genellikle URL'de gerekli değildir)

### Günlük Analizi

Ayrıntılı günlük kaydını etkinleştirin:
```php
// Gelişmiş hata ayıklama için wp-config.php'ye ekleyin
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Ardından günlükleri şuralarda kontrol edin:
- Ultimate Multisite günlükleri: **Ultimate Multisite** > **Logs**
- WordPress hata ayıklama günlüğü: `wp-content/debug.log`
- Enhance panel günlükleri: Enhance'in yönetici arayüzünde mevcuttur

## API Referansı

### Kimlik Doğrulama
Tüm API istekleri Bearer token kimlik doğrulaması kullanır:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Kullanılan Yaygın Uç Noktalar

**Sunucuları Listeleme:**
```
GET /servers
```

**Bir Sunucudaki Domainleri Listeleme:**
```
GET /servers/{server_id}/domains
```

**Domain Ekleme:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Domain Silme:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Tam API Dokümantasyonu
Tam API dokümantasyonu: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## En İyi Uygulamalar

### Güvenlik
- **API token'larını asla versiyon kontrolüne kaydetmeyin**
- Token'ları Git'ten hariç tutulması gereken `wp-config.php`'de saklayın
- Uygun izinlere sahip token'lar kullanın (tam entegrasyon için System Administrator)
- Üretim ortamları için token son kullanma tarihleri belirleyin
- Token'ları düzenli olarak yenileyin

### Performans
- Aşırı API çağrılarından kaçınmak için varsayılan DNS kontrol aralığını (300 saniye) kullanın
- Büyük ölçekli domain işlemleri yürütürken Enhance sunucu kaynaklarını izleyin
- Aynı anda birçok domain eşleştiriyorsanız domain eklemelerini kademeli yapmayı düşünün

### İzleme
- Entegrasyon hataları için Ultimate Multisite günlüklerini düzenli olarak kontrol edin
- Başarısız domain eklemeleri için izleme kurun
- SSL sertifikalarının doğru şekilde sağlandığını doğrulayın
- Enhance sunucu kapasitesini ve domain limitlerini takip edin

## Ek Kaynaklar

- **Enhance Resmi Dokümantasyonu:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Dokümantasyonu:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Topluluk Forumu:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Tartışması:** [Konu #265 - Enhance Entegrasyon İpuçları](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Eşleme Kılavuzu:** Wiki sayfasına bakın "How to Configure Domain Mapping v2"

## Destek

Sorunlarla karşılaşırsanız:
1. Yukarıdaki Sorun Giderme bölümünü kontrol edin
2. Ultimate Multisite günlüklerini inceleyin
3. [GitHub Tartışmalarına](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) danışın
4. Panele özgü sorunlar için Enhance desteğiyle iletişime geçin
5. Topluluk yardımı için ayrıntılı hata günlükleriyle yeni bir tartışma oluşturun

## Notlar

- Bu entegrasyon yalnızca domain takma adlarını yönetir; SSL, Enhance tarafından otomatik olarak yönetilir
- Entegrasyon hem özel domain eşleştirmelerini hem de alt alan adı tabanlı siteleri destekler
- Otomatik www alt alan adı oluşturma, Domain Mapping ayarlarında yapılandırılabilir
- Enhance şu anda Apache yapılandırmalarını desteklemektedir (LiteSpeed Enterprise mevcuttur)
- Ultimate Multisite'tan domain kaldırma, domain'i Enhance'ten kaldırır ancak ilişkili SSL sertifikalarını hemen silmeyebilir
