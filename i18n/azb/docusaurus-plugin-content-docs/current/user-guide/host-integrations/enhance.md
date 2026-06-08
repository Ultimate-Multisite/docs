---
title: Optimize Control Panel Integration
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Kontrol Paneli Entegrasyonunu Geliştirme

## Genel Bakış
Enhance, güçlü barındırma otomasyonu ve yönetim yetenekleri sunan modern bir kontrol panelidir. Bu entegrasyon, Ultimate Multisite ile Enhance Control Panel arasında otomatik alan adı senkronizasyonu ve SSL sertifikası yönetimi sağlar.

**İlgili Tartışma:** Topluluk ipuçları ve ek bilgiler için [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)'e bakın.

## Özellikler
- Ultimate Multisite'ta alan adları eşleştirildiğinde otomatik alan adı senkronizasyonu
- DNS çözümlendiğinde LetsEncrypt aracılığıyla otomatik SSL sertifikası sağlanması
- Alt alan adı modunda çalışan ağlar için alt alan adı desteği
- Eşleştirmeler silindiğinde alan adı kaldırma
- API kimlik bilgilerini doğrulamak için bağlantı testi

## Gereksinimler

### Sistem Gereksinimleri
- Kurulmuş ve erişilebilir Enhance Control Panel
- Ultimate Multisite kurulumu, bir Enhance sunucusunda barındırılan veya ona bağlı
- Apache web sunucusu (Enhance şu anda Apache yapılandırmalarını desteklemektedir; LiteSpeed Enterprise daha düşük maliyetle mevcuttur)

### API Erişimi
API token'ları oluşturmak için Enhance Control Panel'e yönetici erişiminiz olmalıdır.

## API Kimlik Bilgilerinizi Alma

### 1. Bir API Token Oluşturma

1. Yönetici olarak Enhance Control Panel'e giriş yapın
2. Navigasyon menüsünde **Settings**'e tıklayın
3. **Access Tokens**'a gidin
4. **Create Token**'a tıklayın
5. Token'a açıklayıcı bir isim verin (örneğin, "Ultimate Multisite Integration")
6. **System Administrator** rolünü atayın
7. Süre bitiş tarihi için:
   - Token'ın asla sürmesini istiyorsanız boş bırakın
   - Veya güvenlik amacıyla belirli bir bitiş tarihi belirleyin
8. **Create**'ye tıklayın

Oluşturulduktan sonra, **Access Token** ve **Organization ID**'niz görüntülenecektir. Token yalnızca bir kez gösterileceği için **bunları hemen kaydedin**.

### 2. Organization ID'nizi Alma

Organization ID, "Org ID: {your_id}" etiketli mavi bir bilgi kutusunda Access Tokens sayfasında görüntülenir.

Organization ID, şu formatta bir UUID'dir: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Ayrıca bir müşterinin Organization ID'sini şu şekilde bulabilirsiniz:
1. **Customers** sayfasına gidin
2. İlgili müşteri için **Manage customer**'a tıklayın
3. URL'ye bakın - Organization ID, `/customers/` sonrasındaki alfanümerik karakterlerdir.

### 3. Server ID'nizi Alma

Server ID'nizi (alan adı işlemleri için gerekli) bulmak için:

1. Enhance Control Panel'de **Servers**'a gidin
2. WordPress kurulumunuzun çalıştığı sunucuya tıklayın
3. Server ID (UUID formatı) URL'de veya sunucu ayrıntılarında görünür olacaktır
4. Alternatif olarak, sunucuları listelemek için API'yi kullanabilirsiniz:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID, UUID formatını takip eder: `00000000-0000-0000-0000-000000000000`

### 4. API URL'nizi Alma

API URL'niz, `/api/` eklenmiş Enhance Control Panel URL'nizdir:

```
https://your-enhance-panel.com/api/
```

**Önemli:** `/api/` yolu gereklidir. Sık yapılan hatalar şunlardır:
- Sadece `/api/` olmadan alan adını kullanmak
- Güvenlik için HTTPS yerine HTTP kullanmak (HTTPS gereklidir)

## Yapılandırma

### Gerekli Sabitler

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Entegrasyon Sihirbazı ile Kurulum

1. WordPress yöneticinizde **Ultimate Multisite** > **Settings**'e gidin
2. **Integrations** sekmesine gidin
3. **Enhance Control Panel Integration**'ı bulun ve **Configuration**'a tıklayın
4. Sihirbaz kurulum boyunca size rehberlik edecektir:
   - **Adım 1:** Giriş ve özellik genel bakışı
   - **Adım 2:** API kimlik bilgilerinizi girin (Token, API URL, Server ID)
   - **Adım 3:** Bağlantıyı test edin
   - **Adım 4:** Gözden geçirin ve etkinleştirin

Aşağıdakilerden birini seçebilirsiniz:
- Sihirbazın sabitleri otomatik olarak `wp-config.php` dosyanıza enjekte etmesine izin vermek
- Sabit tanımlarını kopyalayıp manuel olarak eklemek

## Ek WordPress Yapılandırması

Topluluk geri bildirimlerine ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) dayanarak, aşağıdaki ek ayarları yapılandırmanız gerekebilir:

### .htaccess Yapılandırması

Alan adı eşleştirme sorunları yaşarsanız:
1. Orijinal Enhance `.htaccess` dosyasını silin
2. Yerine standart WordPress Multisite `.htaccess` dosyasını koyun

### Cookie Sabitleri

Eşleştirilen alan adları genelinde doğru çerez işleme sağlamak için bu sabitleri `wp-config.php` dosyasına ekleyin:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Nasıl Çalışır

### Bir Alan Adı Eşleştirildiğinde

1. Bir kullanıcı Ultimate Multisite'ta özel bir alan adı eşleştirir (veya yeni bir site alt alan adı modunda oluşturulur)
2. Entegrasyon, Enhance'in API'sine bir POST isteği gönderir: `/servers/{server_id}/domains`
3. Enhance, alan adı'nızı sunucu yapılandırmasına ekler
4. DNS sunucunuza çözümlendiğinde, Enhance otomatik olarak LetsEncrypt aracılığıyla bir SSL sertifikası sağlar
5. Alan adı HTTPS ile aktif hale gelir

### Bir Alan Adı Kaldırıldığında

1. Ultimate Multisite'ta bir alan adı eşleştirmesi silinir
2. Entegrasyon, alan adının ID'sini bulmak için Enhance'i sorgular
3. Şu adrese bir DELETE isteği gönderilir: `/servers/{server_id}/domains/{domain_id}`
4. Enhance, alan adı'nızı sunucu yapılandırmasından kaldırır

### DNS ve SSL Kontrolü

Ultimate Multisite, yerleşik DNS ve SSL kontrolü içerir:
- Kontrol aralığını **Domain Mapping Settings**'te yapılandırabilirsiniz (varsayılan: 300 saniye/5 dakika)
- Sistem, bir alan adını aktif olarak işaretlemeden önce DNS yayılımını doğrular
- SSL sertifikası geçerliliği otomatik olarak kontrol edilir
- Enhance, SSL sağlamayı otomatik olarak hallettiği için manuel SSL yapılandırmasına gerek yoktur

## Kurulumu Doğrulama

### Bağlantıyı Test Etme

1. Entegrasyon Sihirbazı'nda **Test Connection** adımını kullanın
2. Eklenti, sunucunuzdaki alan adlarını listelemeyi deneyecektir
3. Başarı mesajı şunları onaylar:
   - API kimlik bilgileri doğru
   - API URL'si erişilebilir
   - Server ID geçerli
   - İzinler düzgün ayarlanmış

### Bir Alan Adı Eşleştirildikten Sonra

1. Ultimate Multisite'ta test bir alan adı eşleştirin
2. Ultimate Multisite günlüklerini (**Ultimate Multisite** > **Logs** > **integration-enhance**) kontrol edin
3. Enhance Control Panel'de alan adının eklenip eklenmediğini doğrulayın:
   - **Servers** > **Your Server** > **Domains**'a gidin
   - Yeni alan adı listede görünmelidir
4. DNS yayıldıktan sonra, SSL'in otomatik olarak sağlanıp sağlanmadığını doğrulayın

## Sorun Giderme

### API Bağlantı Sorunları

**Hata: "Enhance API'sine bağlanılamadı"**
- `WU_ENHANCE_API_URL`'nin sonunda `/api/` içerdiğini doğrulayın
- HTTPS kullandığınızdan, HTTP kullanmadığınızdan emin olun
- Enhance panelinin WordPress sunucunuzdan erişilebilir olduğunu kontrol edin
- Bağlantıyı engelleyen güvenlik duvarı kuralları olup olmadığını doğrulayın

**Hata: "Enhance API Token bulunamadı"**
- `WU_ENHANCE_API_TOKEN`'ın `wp-config.php` içinde tanımlı olduğundan emin olun
- Token'ın Enhance'te silinmediğini veya süresinin dolmadığını doğrulayın
- Token değerinde yazım hatası olup olmadığını kontrol edin

**Hata: "Server ID yapılandırılmamış"**
- `WU_ENHANCE_SERVER_ID`'nin `wp-config.php` içinde tanımlı olduğundan emin olun
- Server ID'nin geçerli bir UUID formatı olduğundan emin olun
- Sunucunun Enhance panelinizde mevcut olduğunu onaylayın

### Alan Adı Eklenmedi

**Günlükleri kontrol edin:**
1. **Ultimate Multisite** > **Logs**'a gidin
2. **integration-enhance**'a göre filtreleyin
3. Sorunu belirten hata mesajları arayın

**Yaygın nedenler:**
- Geçersiz alan adı formatı
- Alan adı zaten Enhance'te mevcut
- Yetersiz API izinleri (token'ın System Administrator rolüne sahip olduğundan emin olun)
- Server ID, Enhance'teki gerçek sunucuyla eşleşmiyor

### SSL Sertifikası Sorunları

**SSL sağlanmıyor:**
- DNS'in sunucunuzun IP adresine işaret ettiğini doğrulayın
- Alan adının doğru çözümlendiğini kontrol edin: `nslookup yourdomain.com`
- Enhance, SSL sağlayabilmek için DNS'in çözülmesini gerektirir
- SSL sağlaması genellikle DNS yayılımından sonra 5-10 dakika sürer
- SSL ile ilgili hatalar için Enhance Control Panel günlüklerini kontrol edin

**Enhance'te Manuel SSL sorun giderme:**
1. **Servers** > **Your Server** > **Domains**'a gidin
2. Alan adınızı bulun ve SSL durumunu kontrol edin
3. Gerekirse SSL sağlamayı manuel olarak tetikleyebilirsiniz

### DNS Kontrol Aralığı

Alan adları veya SSL sertifikaları etkinleşmekte çok uzun sürüyorsa:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping**'e gidin
2. **DNS Check Interval** ayarını bulun
3. Varsayılan 300 saniyeden daha düşük bir değere ayarlayın (minimum: 10 saniye)
4. **Not:** Daha düşük aralıklar daha sık kontrol anlamına gelir ancak daha yüksek sunucu yükü demektir

### Kimlik Doğrulama Hataları

**HTTP 401/403 hataları:**
- Enhance'te API token'ınızı yeniden oluşturun
- Token'ın **System Administrator** rolüne sahip olduğundan emin olun
- Token'ın süresinin dolmadığını kontrol edin
- Doğru Organization ID'yi kullandığınızdan emin olun (ancak genellikle URL'de gerekli değildir)

### Günlük Analizi

Detaylı günlük kaydı etkinleştirin:
```php
// Gelişmiş hata ayıklama için wp-config.php'ye ekleyin
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Ardından günlükleri şu yerlerde kontrol edin:
- Ultimate Multisite günlükleri: **Ultimate Multisite** > **Logs**
- WordPress hata ayıklama günlükleri: `wp-content/debug.log`
- Enhance panel günlükleri: Enhance'in yönetici arayüzünde mevcuttur

## API Referansı

### Kimlik Doğrulama
Tüm API istekleri Bearer token kimlik doğrulaması kullanır:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Kullanılan Yaygın Endpoint'ler

**Sunucuları Listeleme:**
```
GET /servers
```

**Bir Sunucudaki Alan Adlarını Listeleme:**
```
GET /servers/{server_id}/domains
```

**Bir Alan Adı Ekleme:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Bir Alan Adı Silme:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Tam API Dokümantasyonu
Tam API dokümantasyonu: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## En İyi Uygulamalar

### Güvenlik
- **Asla API token'larını sürüm kontrolüne eklemeyin**
- Token'ları Git'ten hariç tutulması gereken `wp-config.php` içinde saklayın
- Uygun izinlere sahip token'lar kullanın (tam entegrasyon için System Administrator)
- Üretim ortamları için token bitiş tarihleri belirleyin
- Token'ları periyodik olarak değiştirin

### Performans
- Aşırı API çağrılarından kaçınmak için varsayılan DNS kontrol aralığını (300 saniye) kullanın
- Büyük ölçekli alan adı işlemleri çalıştırırken Enhance sunucu kaynaklarını izleyin
- Bir anda çok fazla alan adı eşleştiriyorsanız, eklemeleri aşamalı yapmayı düşünün

### İzleme
- Entegrasyon hataları için Ultimate Multisite günlüklerini düzenli olarak kontrol edin
- Alan adı eklenmemesi durumları için izleme kurun
- SSL sertifikalarının doğru şekilde sağlanıp sağlanmadığını doğrulayın
- Enhance sunucu kapasitesi ve alan adı limitleri üzerinde gözünüzü dört açın

## Ek Kaynaklar

- **Enhance Resmi Dokümantasyonu:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Dokümantasyonu:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Topluluk Forumu:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Tartışması:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Alan Adı Eşleştirme Rehberi:** Wiki sayfasında "How to Configure Domain Mapping v2" bölümüne bakın

## Destek

Sorunlarla karşılaşırsanız:
1. Yukarıdaki Sorun Giderme bölümünü kontrol edin
2. Ultimate Multisite günlüklerini gözden geçirin
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)'a danışın
4. Panel'e özel sorunlar için Enhance desteğiyle iletişime geçin
5. Topluluk yardımı için ayrıntılı hata günlükleriyle yeni bir tartışma oluşturun

## Notlar

- Bu entegrasyon yalnızca alan adı takma adlarını (alias) yönetir; SSL'i Enhance otomatik yönetir
- Entegrasyon hem özel alan adı eşleştirmelerini hem de alt alan adına dayalı siteleri destekler
- Otomatik www alt alan adı oluşturma, Alan Adı Eşleştirme ayarlarında yapılandırılabilir
- Enhance şu anda Apache yapılandırmalarını desteklemektedir (LiteSpeed Enterprise mevcuttur)
- Ultimate Multisite'tan alan adı kaldırılması, alan adı'nızı Enhance'ten kaldırır ancak ilişkili SSL sertifikalarını hemen silmeyebilir
