---
title: Cloudways Integration
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Entegrasyonu {#cloudways-integration}

## Genel Bakış {#overview}
Cloudways, DigitalOcean, AWS, Google Cloud gibi çeşitli bulut sağlayıcılarında WordPress siteleri yayınlamanıza olanak tanıyan yönetilen bir bulut hosting platformudur. Bu entegrasyon, Ultimate Multisite ile Cloudways arasında otomatik alan adı senkronizasyonu ve SSL sertifikası yönetimi sağlar.

## Özellikler {#features}
- Otomatik alan adı senkronizasyonu
- SSL sertifikası yönetimi
- Ek alan adı desteği
- SSL sertifikaları için DNS doğrulama

## Gereksinimler {#requirements}
Aşağıdaki sabitlerin `wp-config.php` dosyanızda tanımlanması gerekir:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

İsteğe bağlı olarak, şunları da tanımlayabilirsiniz:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Kurulum Talimatları {#setup-instructions}

### 1. Cloudways API Kimlik Bilgilerinizi Alın {#1-get-your-cloudways-api-credentials}

1. Cloudways dashboard'unuza giriş yapın
2. "Account" > "API Keys" yolunu izleyin
3. Eğer yoksa bir API anahtarı oluşturun
4. E-posta adresinizi ve API anahtarınızı kopyalayın

### 2. Sunucu ve Uygulama Kimliklerinizi Alın {#2-get-your-server-and-application-ids}

1. Cloudways dashboard'unuzda "Servers" bölümüne gidin
2. WordPress multisitenizin barındırıldığı sunucuyu seçin
3. Sunucu Kimliği (Server ID), URL'de görünür: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" bölümüne gidin ve WordPress uygulamanızı seçin
5. Uygulama Kimliği (App ID), URL'de görünür: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php'ye Sabitleri Ekleyin {#3-add-constants-to-wp-configphp}

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Ek **harici** alan adlarınız (multisite ağınızın dışındaki) varsa ve bunların Cloudways takma adlar listesinde her zaman kalmasını istiyorsanız:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Kendi ağınızın joker karakterini (wildcard) eklemeyin
`WU_CLOUDWAYS_EXTRA_DOMAINS` içine `*.your-network.com` (veya kendi ağınızın herhangi bir alt alan adı deseni)
eklemeyin. Bunun neden per-tenant SSL sertifikalarının düzenlenmesini engellediğini anlamak için
aşağıdaki [Önemli — joker karakter SSL tuzağı](#important--wildcard-ssl-pitfall) bölümüne bakın.
:::

### 4. Entegrasyonu Etkinleştirin {#4-enable-the-integration}

1. WordPress admin panelinizde Ultimate Multisite > Settings yolunu izleyin
2. "Domain Mapping" sekmesine gidin
3. "Host Integrations" bölümüne kadar aşağı kaydırın
4. Cloudways entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır {#how-it-works}

### Alan Adı Senkronizasyonu {#domain-syncing}

Bir alan adı Ultimate Multisite'de eşleştirildiğinde:

1. Entegrasyon, şu anda eşleştirilmiş tüm alan adlarını alır
2. Yeni alan adını listeye ekler (uygunsa bir www versiyonuyla birlikte)
3. Tam listeyi API üzerinden Cloudways'e gönderir
4. Cloudways, uygulamanızın alan adı takma adlarını günceller

Not: Cloudways API'si, her seferinde sadece tek tek alan adları eklemek veya çıkarmak yerine, tüm alan adları listesinin gönderilmesini gerektirir.

### SSL Sertifikası Yönetimi {#ssl-certificate-management}

Alan adları senkronize edildikten sonra:

1. Entegrasyon, hangi alan adlarının sunucunuza işaret eden geçerli DNS kayıtlarına sahip olduğunu kontrol eder
2. Bu alan adları için Let's Encrypt SSL sertifikaları kurması amacıyla Cloudways'e bir istek gönderir
3. Cloudways, SSL sertifikası düzenleme ve kurulum işlemlerini yapar

Entegrasyon her zaman Cloudways'den **standart** (joker karakter içermeyen) Let's Encrypt sertifikaları ister. Eğer `WU_CLOUDWAYS_EXTRA_DOMAINS` içinde bir joker karakter deseni sağlanırsa, baştaki `*.` kaldırılır, SSL isteği yapılırken joker karakterin kendisi bu entegrasyon tarafından asla kurulmaz. Cloudways'de bir joker karakter sertifikası kullanmak isterseniz, bunu manuel olarak kurmanız gerekir, ancak bu işlem, eşleştirilmiş özel alan adları için per-domain Let's Encrypt düzenlenmesini engeller (tuzağa aşağı bakınız).

## Ek Alan Adları {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` sabiti, Cloudways uygulamasının takma adlar listesinde her zaman tutulması gereken ek **harici** alan adlarını belirtmenize olanak tanır. Bunu şunlar için kullanın:

- Ultimate Multisite tarafından yönetilmeyen harici alan adları (örneğin, aynı Cloudways uygulamasını paylaşan ayrı bir pazarlama sitesi)
- Uygulama takma adları listesinde tutulmasını istediğiniz park edilmiş veya staging alan adları

Bu sabiti kendi ağınızın alt alan adı joker karakteri için kullanmayın (örneğin, `*.your-network.com`). Joker karakter SSL tuzağına aşağı bakın.

## Önemli — Joker Karakter SSL Tuzağı {#important--wildcard-ssl-pitfall}

Cloudways'in varsayılan kurulumunu takip ederken yapılan yaygın bir hata, `*.your-network.com` gibi bir joker karakteri `WU_CLOUDWAYS_EXTRA_DOMAINS`'e eklemek veya bu joker karakter için Cloudways'de manuel olarak bir joker karakter SSL sertifikası kurmaktır.

**Bunu yaparsanız, Cloudways, Ultimate Multisite'nin eşleştirdiği per-tenant özel alan adları için Let's Encrypt sertifikaları düzenlemeyi reddedecektir.** Cloudways, uygulamadaki aktif SSL sertifikasını her seferinde değiştirir ve uygulamadaki önceden var olan bir joker karakter sertifikası, entegrasyonun güvendiği per-domain Let's Encrypt düzenlemesini engeller.

### Ultimate Multisite ağı için önerilen Cloudways SSL kurulumu {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways uygulamasının **SSL Certificate** sekmesinde, yalnızca `your-network.com` ve `www.your-network.com`'ı kapsayan **standart bir Let's Encrypt sertifikası** kurun — **joker karakter değil**.
2. `WU_CLOUDWAYS_EXTRA_DOMAINS` içine `*.your-network.com` (veya kendi ağınızın herhangi bir alt alan adı deseni) koymayın. Bu sabiti yalnızca **harici** alan adları için saklayın.
3. Alt sitelerin çözümlenmesi için per-tenant alt alan adı joker karakterini yalnızca **DNS** düzeyinde oluşturun (bir `A` kaydı ile `*.your-network.com`'u Cloudways sunucu IP'sine yönlendirin). Bu durumda, bireysel eşleştirilmiş özel alan adları için SSL, entegrasyon tarafından Let's Encrypt aracılığıyla otomatik olarak düzenlenir.

Kiracılarınızın özel alan adları SSL olmadan takılı kaldıysa, Cloudways SSL sekmesini kontrol edin. Eğer orada bir joker karakter sertifikası aktifse (manuel kurulmuş veya `*.your-network.com`'u kapsıyorsa), bunu kaldırın, yalnızca ana ağ alan adını (`your-network.com`, `www.your-network.com`) kapsayan standart bir Let's Encrypt sertifikası yeniden düzenleyin ve `WU_CLOUDWAYS_EXTRA_DOMAINS` içindeki tüm joker karakter girdilerini kaldırın. Ardından bir alan adı eşleştirmesini yeniden tetikleyin (veya bir sonraki senkronizasyonu bekleyin) ve entegrasyon tekrar per-domain sertifikaları istemeye başlayacaktır.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}
- E-posta adresinizin ve API anahtarınızın doğru olduğundan emin olun
- Sunucu ve uygulama kimliklerinizin doğru olduğundan emin olun
- Cloudways hesabınızın gerekli izinlere sahip olduğundan emin olun

### SSL Sertifikası Sorunları {#ssl-certificate-issues}
- Cloudways, SSL sertifikaları düzenlemeden önce alan adlarının sunucunuza işaret eden geçerli DNS kayıtlarına sahip olmasını gerektirir
- Entegrasyon, SSL sertifikaları talep etmeden önce DNS kayıtlarını doğrular
- SSL sertifikaları düzenlenmiyorsa, alan adlarınızın sunucunuzun IP adresine doğru işaret ettiğini kontrol edin
- **Per-tenant özel alan adları SSL olmadan mı kaldı?** Cloudways uygulamasının SSL Certificate sekmesini kontrol edin. Eğer bir joker karakter sertifikası (manuel kurulmuş veya `*.your-network.com`'u kapsayan) aktifse, Cloudways bireysel olarak eşleştirilmiş özel alan adları için Let's Encrypt sertifikaları düzenlemeyecektir. Bunu yalnızca ana ağ alan adını (`your-network.com`, `www.your-network.com`) kapsayan standart bir Let's Encrypt sertifikası ile değiştirin ve `WU_CLOUDWAYS_EXTRA_DOMAINS` içindeki tüm joker karakter girdilerini kaldırın. Ardından bir alan adı eşleştirmesini yeniden tetikleyin (veya bir sonraki senkronizasyonu bekleyin) ve entegrasyon per-domain sertifikaları istemeye başlayacaktır.

### Alan Adı Eklenmedi {#domain-not-added}
- Herhangi bir hata mesajı için Ultimate Multisite günlüklerini kontrol edin
- Alan adının zaten Cloudways'e eklenmediğinden emin olun
- Cloudways planınızın eklediğiniz alan adı sayısını desteklediğinden emin olun
