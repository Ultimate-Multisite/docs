---
title: Cloudways Entegrasyonu
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Entegrasyonu

## Genel Bakış
Cloudways, WordPress sitelerini DigitalOcean, AWS, Google Cloud ve daha fazlası gibi çeşitli bulut sağlayıcılarında dağıtmanıza olanak tanıyan yönetilen bir bulut hosting platformudur. Bu entegrasyon, Ultimate Multisite ile Cloudways arasında otomatik alan adı senkronizasyonu ve SSL sertifika yönetimi sağlar.

## Özellikler
- Otomatik alan adı senkronizasyonu
- SSL sertifika yönetimi
- Ek alan adları desteği
- SSL sertifikaları için DNS doğrulaması

## Gereksinimler
Aşağıdaki sabitler `wp-config.php` dosyanızda tanımlanmış olmalıdır:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

İsteğe bağlı olarak şunu da tanımlayabilirsiniz:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Kurulum Talimatları

### 1. Cloudways API Kimlik Bilgilerinizi Alın

1. Cloudways panonuza giriş yapın
2. "Account" > "API Anahtarları" bölümüne gidin
3. Henüz yoksa bir API anahtarı oluşturun
4. E-posta adresinizi ve API anahtarınızı kopyalayın

### 2. Server ve Application ID'lerinizi Alın

1. Cloudways panonuzda "Sunucular" bölümüne gidin
2. WordPress multisite'ınızın barındırıldığı sunucuyu seçin
3. Server ID URL'de görünür: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Uygulamalar" bölümüne gidin ve WordPress uygulamanızı seçin
5. App ID URL'de görünür: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Sabitleri wp-config.php'ye Ekleyin

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Cloudways takma adlar listesinde her zaman tutulması gereken ek **harici** alan adlarınız (multisite ağınızın dışında) varsa:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Kendi ağınızın wildcard'ını eklemeyin
`WU_CLOUDWAYS_EXTRA_DOMAINS` içine `*.your-network.com` (veya kendi ağınızın herhangi bir alt alan adı kalıbını)
**eklemeyin**. Bunun kiracı başına SSL sertifikalarının verilmesini neden engellediğini görmek için aşağıdaki
[Önemli — wildcard SSL tuzağı](#important--wildcard-ssl-pitfall) bölümüne bakın.
:::

### 4. Entegrasyonu Etkinleştirin

1. WordPress admin alanınızda Ultimate Multisite > Ayarlar bölümüne gidin
2. "Alan Adı Eşleme" sekmesine gidin
3. "Host Entegrasyonları" bölümüne kadar aşağı kaydırın
4. Cloudways entegrasyonunu etkinleştirin
5. "Değişiklikleri Kaydet"e tıklayın

## Nasıl Çalışır

### Alan Adı Senkronizasyonu

Ultimate Multisite içinde bir alan adı eşlendiğinde:

1. Entegrasyon, şu anda eşlenmiş tüm alan adlarını alır
2. Yeni alan adını listeye ekler (uygunsa bir www sürümüyle birlikte)
3. Tam listeyi API aracılığıyla Cloudways'e gönderir
4. Cloudways, uygulamanız için alan adı takma adlarını günceller

Not: Cloudways API, yalnızca tek tek alan adları eklemek veya kaldırmak yerine her seferinde alan adlarının tam listesinin gönderilmesini gerektirir.

### SSL Sertifika Yönetimi

Alan adları senkronize edildikten sonra:

1. Entegrasyon, hangi alan adlarının sunucunuzu işaret eden geçerli DNS kayıtlarına sahip olduğunu kontrol eder
2. Bu alan adları için Let's Encrypt SSL sertifikaları yüklemek üzere Cloudways'e bir istek gönderir
3. Cloudways, SSL sertifikasının verilmesini ve kurulumunu gerçekleştirir

Entegrasyon, Cloudways'ten her zaman **standart** (wildcard olmayan) Let's Encrypt sertifikaları ister. `WU_CLOUDWAYS_EXTRA_DOMAINS` içinde bir wildcard kalıbı sağlanırsa, SSL isteğinden önce baştaki
`*.` kaldırılır — wildcard'ın kendisi bu entegrasyon tarafından asla kurulmaz. Cloudways üzerinde wildcard sertifika kullanmak için bunu
manuel olarak kurmanız gerekir, ancak bunu yapmak eşlenen özel alan adları için alan adı başına Let's Encrypt verilmesini engeller
(aşağıdaki tuzağa bakın).

## Ek Alan Adları

`WU_CLOUDWAYS_EXTRA_DOMAINS` sabiti, Cloudways uygulamasının takma adlar listesinde her zaman tutulması gereken ek **harici**
alan adlarını belirtmenize olanak tanır. Şunlar için kullanın:

- Ultimate Multisite tarafından yönetilmeyen harici alan adları (ör. aynı Cloudways uygulamasını paylaşan ayrı bir pazarlama sitesi)
- Uygulama takma adlar listesinde tutulmasını istediğiniz park edilmiş veya staging alan adları

Bu sabiti kendi ağınızın alt alan adı wildcard'ı için **kullanmayın**
(ör. `*.your-network.com`). Aşağıdaki wildcard SSL tuzağına bakın.

## Önemli — Wildcard SSL Tuzağı

Cloudways'in varsayılan kurulumunu izlerken sık yapılan bir hata,
`WU_CLOUDWAYS_EXTRA_DOMAINS` içine `*.your-network.com` gibi bir wildcard eklemek veya bu wildcard için manuel olarak bir Cloudways
wildcard SSL sertifikası kurmaktır.

**Bunu yaparsanız Cloudways, Ultimate Multisite'ın eşlediği kiracı başına özel alan adları için Let's Encrypt sertifikaları vermeyi reddeder.** Cloudways, uygulamadaki etkin
SSL sertifikasını her seferinde değiştirir ve uygulamada önceden var olan bir wildcard sertifikası, entegrasyonun dayandığı alan adı başına Let's Encrypt verilmesini engeller.

### Ultimate Multisite ağı için önerilen Cloudways SSL kurulumu

1. Cloudways uygulamasının **SSL Sertifikası** sekmesinde, yalnızca `your-network.com` ve `www.your-network.com`
   alan adlarını kapsayan **standart bir Let's Encrypt sertifikası** kurun
   — wildcard **değil**.
2. `WU_CLOUDWAYS_EXTRA_DOMAINS` içine `*.your-network.com` (veya kendi ağınızın herhangi bir alt alan adı kalıbını)
   **koymayın**. Bu sabiti yalnızca **harici** alan adları için ayırın.
3. Kiracı başına alt alan adı wildcard'ını yalnızca **DNS** düzeyinde oluşturun (`*.your-network.com` için
   Cloudways sunucu IP'nizi işaret eden bir `A` kaydı) böylece alt siteler çözümlenir. Tek tek eşlenen özel alan adları için SSL
   daha sonra entegrasyon tarafından Let's Encrypt aracılığıyla otomatik olarak verilir.

Kiracılarınızın özel domainleri SSL olmadan takılı kaldıysa Cloudways SSL sekmesini kontrol edin. Orada bir
wildcard sertifika etkinse, onu kaldırın, yalnızca ana network domaini için standart bir Let's Encrypt
sertifikasını yeniden düzenleyin ve `WU_CLOUDWAYS_EXTRA_DOMAINS` içinden tüm wildcard girişlerini kaldırın. Ardından bir domain eşlemesini yeniden tetikleyin (veya bir sonrakini bekleyin)
ve entegrasyon tekrar domain başına sertifikalar düzenlemeye başlayacaktır.

## Sorun Giderme

### API Bağlantı Sorunları
- E-posta adresinizin ve API keyinizin doğru olduğunu doğrulayın
- Server ve application ID'lerinizin doğru olduğunu kontrol edin
- Cloudways Account'unuzun gerekli izinlere sahip olduğundan emin olun

### SSL Sertifikası Sorunları
- Cloudways, SSL sertifikaları düzenlemeden önce domainlerin serverınıza işaret eden geçerli DNS kayıtlarına sahip olmasını gerektirir
- Entegrasyon, SSL sertifikaları istemeden önce DNS kayıtlarını doğrular
- SSL sertifikaları düzenlenmiyorsa, domainlerinizin serverınızın IP adresine düzgün şekilde işaret ettiğini kontrol edin
- **Kiracı başına özel domainler SSL olmadan takılı mı kaldı?** Cloudways application'ının SSL Certificate sekmesini kontrol edin. Bir wildcard sertifika (elle yüklenmiş veya `*.your-network.com` kapsamını içeren) etkinse, Cloudways tek tek eşlenen özel domainler için Let's Encrypt sertifikaları düzenlemez. Bunu yalnızca ana network domainini (`your-network.com`, `www.your-network.com`) kapsayan standart bir Let's Encrypt sertifikasıyla değiştirin ve `WU_CLOUDWAYS_EXTRA_DOMAINS` içinden tüm wildcard girişlerini kaldırın. Ardından bir domain eşlemesini yeniden tetikleyin (veya bir sonrakini bekleyin) ve entegrasyon domain başına sertifikalar isteyecektir.

### Domain Eklenmedi
- Herhangi bir hata mesajı için Ultimate Multisite kayıtlarını kontrol edin
- Domainin Cloudways'e zaten eklenmemiş olduğunu doğrulayın
- Cloudways planınızın eklediğiniz domain sayısını desteklediğinden emin olun
