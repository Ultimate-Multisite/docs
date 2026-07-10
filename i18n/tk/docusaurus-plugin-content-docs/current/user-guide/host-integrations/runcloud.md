---
title: RunCloud Integrasiýa
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integrasi {#runcloud-integration}

## Genel Bakış {#overview}
RunCloud, size kendi bulut sunucularınızda web uygulamalarını kolayca dağıtmanıza ve yönetmenize imkan tanıyan bulut tabanlı bir sunucu yönetim platformudur. Bu entegrasyon, Ultimate Multisite ile RunCloud arasında otomatik alan adı senkronizasyonu ve SSL sertifikası yönetimini sağlar.

## Özellikler {#features}
- Otomatik alan adı senkronizasyonu
- SSL sertifikası yönetimi
- Eşleşmeler silindiğinde alan adının kaldırılması

## Gereksinimler {#requirements}
Aşağıdaki sabitleri `wp-config.php` dosyanıza tanımlamanız gerekir:

```php
define('WU_RUNCLOUD_API_KEY', 'sizin_api_anahtarınız');
define('WU_RUNCLOUD_API_SECRET', 'sizin_api_gizli_bilginiz');
define('WU_RUNCLOUD_SERVER_ID', 'sizin_sunucu_idiniz');
define('WU_RUNCLOUD_APP_ID', 'sizin_uygulama_idiniz');
```

## Kurulum Talimatları {#setup-instructions}

### 1. RunCloud API Kimlik Bilgilerinizi Alın {#1-get-your-runcloud-api-credentials}

1. RunCloud paneline giriş yapın
2. "Kullanıcı Profili"ne gidin (sağ üst köşedeki profil resminize tıklayın)
3. Menüden "API"yi seçin
4. Zaten bir anahtarınız yoksa "API Anahtarı Oluştur"a tıklayın
5. API Anahtarınızı ve API Gizli Bilginizi kopyalayın

### 2. Sunucu ve Uygulama Kimliklerinizi Alın {#2-get-your-server-and-app-ids}

1. RunCloud panelinizde, "Sunucular"a gidin
2. WordPress multisitenizin barındırıldığı sunucuyu seçin
3. Sunucu ID'si URL'de görünür: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Uygulamaları"na gidin ve WordPress uygulamanızı seçin
5. Uygulama ID'si URL'de görünür: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php'ye Sabitleri Ekleyin {#3-add-constants-to-wp-configphp}

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_RUNCLOUD_API_KEY', 'sizin_api_anahtarınız');
define('WU_RUNCLOUD_API_SECRET', 'sizin_api_gizli_bilginiz');
define('WU_RUNCLOUD_SERVER_ID', 'sizin_sunucu_idiniz');
define('WU_RUNCLOUD_APP_ID', 'sizin_uygulama_idiniz');
```

### 4. Entegrasyonu Etkinleştirin {#4-enable-the-integration}

1. WordPress adminiňizde Ultimate Multisite > Settings (Täýýarlyklar) bölümine gidiň.
2. "Domain Mapping" (Alan Taplawçylygy) sekmesindäki bölüme geçiň.
3. "Host Integrations" (Host Entegrasiýalary) boýunça aşak kaydyryp "RunCloud" entegrasiýasyny işleýärlikde (Enable) işjeňleşdirin.
4. "Save Changes" (Değişiklikleri Sakla) düwümini basyň.

## Neler Näme Eme? (How It Works) {#how-it-works}

Ultimate Multisite-da alan taplawçylarydyklanda:

1. Entegrasiýa RunCloud API-siga bir soňaw göndereýär we alanyňyzyň bu ilkinji programmasyna alanı goşdirýar.
2. Alan üstünlikli goşdirilse, entegrasiýa SSL sertifikatlaryny da ýa-da (redeploy) işjeňleşdirýär.
3. Alan taplawçylarydyklandyrylsa, bu entegrasiýa alany RunCloud-dan düşürýär.

Subdomainleri goşmak üçin, size täze sahypalar ulanylanda entegrasiýa RunCloud-da awtomatiki wiqarlary döredip biler.

## Sorunları Çözmek (Troubleshooting) {#troubleshooting}

### API Bağlanma Masalalary {#api-connection-issues}
- API agzalaryňyz dogrydyr diýip barlap görüň.
- Server we app ID-leriniz dogrydyr diýip barlap görüň.
- RunCloud hasabyňyz zerur resselleri barada hyzmat edýändigini üpjün ediň.

### SSL Sertifikatmasy Masalalary {#ssl-certificate-issues}
- RunCloud SSL sertifikatlaryny berip biljek bir wagt alsa mümkinçilik bolar.
- Alanlaryňyz serveriň IP adresine dogry işjeňleşdirilendigini barlap görüň.
- Size degişli RunCloud SSL tapawutlaryny kontrol ediň.

### Alan Goşulmadyk {#domain-not-added}
- Ultimate Multisite loglarynda ýokarda görkezilen ähli ýalňyş mesajlary barada barlap görüň.
- Alan RunCloud-a önümçeli goşulmadyk diýip barlap görüň.
- RunCloud planlaryňyz köp alanlary goldaýandygyny üpjün ediň.
