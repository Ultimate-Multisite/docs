---
title: ServerPilot Integrasi
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Entegrasyonu {#serverpilot-integration}

## Genel Bakış {#overview}
ServerPilot, WordPress ve diğer PHP sitelerini DigitalOcean, Amazon, Google veya başka herhangi bir sunucularda barındırmak için bulut hizmetidir. Bu entegrasyon, Ultimate Multisite ile ServerPilot arasında otomatik alan adı senkronizasyonu ve SSL sertifikası yönetimi sağlar.

## Özellikler {#features}
- Otomatik alan adı senkronizasyonu
- Let's Encrypt ile SSL sertifikası yönetimi
- Otomatik SSL yenileme

## Gereksinimler {#requirements}
Aşağıdaki sabitleri `wp-config.php` dosyanıza tanımlamanız gerekir:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Kurulum Talimatları {#setup-instructions}

### 1. ServerPilot API Kimliklerinizi Alın {#1-get-your-serverpilot-api-credentials}

1. ServerPilot panonuza giriş yapın
2. "Hesap" > "API" bölümüne gidin
3. Zaten bir anahtarınız yoksa yeni bir API anahtarı oluşturun
4. Client ID'nizi ve API Anahtarınızı kopyalayın

### 2. Uygulama Kimliğinizi (App ID) Alın {#2-get-your-app-id}

1. ServerPilot panonuzda, "Uygulamalar"a gidin
2. WordPress çoklu sitenizin barındırıldığı uygulamayı seçin
3. App ID'ye URL'de görünür: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. wp-config.php'ye Sabitleri Ekleyin {#3-add-constants-to-wp-configphp}

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Entegrasyonu Etkinleştirin {#4-enable-the-integration}

1. WordPress yönetim panelinizde, Ultimate Multisite > Ayarlar'a gidin
2. "Domain Mapping" (Alan Adı Eşleştirmesi) sekmesine gidin
3. Aşağı kaydırarak "Host Integrations" (Sunucu Entegrasyonları) kısmına gelin
4. ServerPilot entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır {#how-it-works}

### Alan Adı Senkronizasyonu {#domain-syncing}

Ultimate Multisite'da bir alan adı eşleştirildiğinde:

1. Integrasi, ServerPilotdan mevcut alan adları listini alýar
2. Olýar yeni alan adyny listä (eğer laýyk bolsa www görnüşli versian bilen bile) goşdirýar
3. Güncellenipdirilen listi API arkaly ServerPilotga göndär
4. ServerPilot sizdenki programma üçin alan adlaryny güncelleýar

### SSL Sertifikatyny Dolandyrmak (SSL Certificate Management) {#ssl-certificate-management}

Alan adlary senkronlandyrylgandan soň:

1. Integrasi, siziň programma üçin AutoSSL-i awtomatiki wep salýar
2. ServerPilot Let's Encrypt arkaly SSL sertifikatyny berip goýap we kurmagy bilen baglanýar
3. ServerPilot hem SSL sertifikatlaryny awtomatiki täzelendirmekden sorag berýär

## SSL Sertifikatyny Barlamak (SSL Certificate Verification) {#ssl-certificate-verification}

Integrasi, ServerPilot üçin SSL sertifikatyny barlamak baramatyny artdyrmak üçin sozlaw bolýar, sebäbi ServerPilot SSL sertifikatyny berip goýap we kurmagy birnäçe wagt almagy mümkin. Default bilen, ol 5 gacha synanyp barlayar, ýöne bu filtrlər arkaly üýtgedilip bilner.

## Sorunlaryň Üpjünçiligi (Troubleshooting) {#troubleshooting}

### API Baglanma Masalalary {#api-connection-issues}
- Client ID we API Key-iňizi dogrydygyny barlap görüň
- App ID-iňiz dogrydygyny barlap görüň
- ServerPilot hasapda zerur resurslaryň bar bolmagyny üpjün ediň

### SSL Sertifikatynyň Masalalary {#ssl-certificate-issues}
- ServerPilot SSL sertifikatyny berýän uzynçyndan önce alan adlaryň siziň serveriňize aýnan dogry DNS goşawlaryna eýe bolmaly diýip talap edýär
- Eger SSL sertifikatlary berilmese, alan adlaryňyz siziň serveriňizden düzülen IP adresine dogry aýanlaryny barlap görüň
- ServerPilot SSL sertifikatyny berip goýap we kurmagy birnäçe wagt almagy mümkin (adaty 5-15 minut)

### Alan Ady Goşulmady {#domain-not-added}
- Ultimate Multisite loglarynda ähli ýalňyş mesajlary barlap görüň
- Alan adyny ServerPilotda önümde bar bolup baýlanmajy barlap görüň
- Siziň ServerPilot planlaryňyz goşdurýan alan adlaryň sany bilen baglanýandygyny üpjün ediň

### Domaini Çykarmak {#domain-removal}

- Şu waka, ServerPilot API'si bükülen domainleri (domainleri) silmek üçin bir usul bermez.
- Ultimate Multisite-da domaina eşleşme (mapping) silinse, bu entegrasyon ServerPilot-un domaina listini güncelleşdirip silinen domaini hariç tutar.
