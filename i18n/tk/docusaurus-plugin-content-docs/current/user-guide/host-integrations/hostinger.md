---
title: Hostinger (hPanel) Integrasi
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Integrasi

## Genel Bakış {#overview}

Hostinger, hPanel adında modern bir kontrol paneline sahip popüler bir web barındırma sağlayıcısıdır. Ultimate Multisite Hostinger entegrasyonu, Ultimate Multisite ile Hostinger'ın hPanel'i arasında otomatik alan adı senkronizasyonu sağlar. Bu sayede WordPress admin panelinizden doğrudan alan adı eşleştirmelerini ve alt alan adlarını otomatik olarak yönetebilirsiniz.

## Özellikler {#features}

- hPanel'de otomatik eklenti alan adı oluşturma
- hPanel'de otomatik alt alan adı oluşturma (alt alan adı multisite kurulumları için)
- Eşleştirmeler silindiğinde alan adının kaldırılması
- hPanel'in alan adı yönetim API'si ile sorunsuz entegrasyon

## Gereksinimler {#requirements}

Hostinger entegrasyonunu kullanmak için şunlara ihtiyacınız var:

1. hPanel erişimi olan bir Hostinger hesabı
2. Hostinger'dan bir API token'ı
3. `wp-config.php` dosyanızda tanımlanması gereken aşağıdaki sabitler:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

İsteğe bağlı olarak şunları da tanımlayabilirsiniz:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Varsayılan API uç noktası
```

## Kurulum Talimatları {#setup-instructions}

### 1. Hostinger API Token'ınızı Oluşturun {#1-generate-your-hostinger-api-token}

1. Hostinger hesabınıza giriş yapın ve hPanel'e erişin
2. **Hesap Ayarları** → **API Token'lar** bölümüne gidin
3. **Yeni Token Oluştur** butonuna tıklayın
4. Token'ınıza açıklayıcı bir isim verin (örneğin, "Ultimate Multisite")
5. Gerekli izinleri seçin:
   - Alan adı yönetimi
   - Alt alan adı yönetimi
6. Oluşturulan token'ı kopyalayın ve güvenli bir yerde saklayın

### 2. Hesap Kimliğinizi Bulun {#2-find-your-account-id}

1. hPanel'de, **Hesap Ayarları** → **Hesap Bilgileri** bölümüne gidin
2. Hesap Kimliğiniz bu sayfada gösterilir
3. Bir sonraki adım için bu kimliği kopyalayın ve kaydedin

### 3. wp-config.php'ye Sabitleri Ekleyin {#3-add-constants-to-wp-configphp}

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_HOSTINGER_API_TOKEN', 'siziň hostinger_api_tokeni');
define('WU_HOSTINGER_ACCOUNT_ID', 'siziň hostinger_account_idiniz');
```

Eger siziň Hostinger hasaby başga API ulanýan ulgamy ulanyp bolsa, ony özüňize görä üýtgedip bilersiňiz:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Integratiýi işleýärlikde saklamak {#4-enable-the-integration}

1. WordPress administrasiýasyna girip **Ultimate Multisite > Settings** (Tümenli Multisite > Röwazykler) bölümini açyň.
2. **Domain Mapping** (Domaina eşleşdirmek) tabuna geçiň.
3. **Host Integrations** (Host Integratiýalary) boýunça aşakla çykyp, onuň ýerine çakyň.
4. **Hostinger (hPanel)** integratiýasyny işleýärlikde saklaň.
5. **Save Changes** (Üýtgeşmeleri saklamak) düwmenine basyň.

## Näme wezipä edýär? {#how-it-works}

### Addon Domainler {#addon-domains}

Ultimate Multisite-da domaina eşleşdirende:

1. Integratiý Hostinger API-syna domany addon domain hökmünde goşmak üçin sora (request) göndýär.
2. Domany siziň esas kataloglaryňyza (root directory) ýol berjek ýagdaýa goýar.
3. Domaina eşleşdirmek aýyrylsa, integratiý addon domaini hPanelden awtomatiki ýaly aýyrýar.

### Subdomainler {#subdomains}

Subdomain multisite guramak üçin, täze site döredilende:

1. Integratiý doly domanyňdan subdomain bölegini alýar.
2. Hostinger API-syna subdomaini goşmak üçin sora göndýär.
3. Subdomain siziň esas kataloglaryňyza ýol berjek ýagdaýa goýar.

## Aýratyn Notlar {#important-notes}

- Integratiý siziň hasabyňyz bilen habarlaşmak üçin Hostinger REST API-sini ulanyp bilýär.
- Siziň API tokeni doman we subdomainleri dolandyrmak üçin zerur resminamalary (permissions) bermeli.
- Integratiý DNS görkezmekle gapmaýar; domanyň siziň Hostinger hasabyňa ýol berilip bolmagy şertdir.
- API sora HTTPS arkaly howpsuzlykda ýerine ýetdirilýär.
- Siziň API tokeniňizi howpsuz saklaň we ony hiç haçak halka bilen paýlaşmadyk.

## Soraglar we jogaplar (Troubleshooting) {#troubleshooting}

### API Bağlanma Masalalary {#api-connection-issues}

API tokeni dogrydyr we süýşilip biljekdigini barlap görkeziň
Hasap ID-nizi dogrydyr diýip barlap görkeziň
Domainleri dolandyrmak üçin API tokeniň zerurym ukyplary bar bolup baýlandyryldygyny üpjün ediň
Hostinger hasabyňyz işjeň we dogry ýagdaýda bolup baýlandyryldygyny barlap görkeziň

### Domain Goşulmady {#domain-not-added}

- Ultimate Multisite loglarynda ähli ýazgylar barada hileler tapyp görüň
- Domaini Hostinger hasabyňyzda önümçeli goşulmadyr diýip barlap görkeziň
- Hostinger hasabyňyz addon domainleri üçin çäkini aşmagynyň olmadığına üpjün ediň
- Domaini Hostinger adynerleri bilen dogry ýerleşdirilendigini anyklaň

### SSL Sertifikatasy Masalalary {#ssl-certificate-issues}

- Bu integrasiýa SSL sertifikatlaryny berip bilmezdi
- Hostinger adatça AutoSSL arkaly bedava SSL sertifikatalaryny bermeýär
- SSL sertifikatalaryny hPanelde **SSL/TLS** başlygynda jogapkärlik bilen dolandyryp bilersiňiz
- Alternatiwki, Hostinger'in AutoSSL funksiýasyny Let's Encrypt bilen ulanyp bilersiňiz

## Durnukda Yardım {#support}

Hostinger integrasiýasy bilen has köp kömek üçin şu ýerlere sereteli:

- [Hostinger API Dokumentasiýasy](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Dokumentasiýasy](/)
- [Ultimate Multisite Durnukda Yardım](https://ultimatemultisite.com/support)
