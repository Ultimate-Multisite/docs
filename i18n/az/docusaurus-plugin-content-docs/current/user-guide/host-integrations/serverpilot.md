---
title: ServerPilot İntegrasiyası
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot İntegrasiyası

## Ümumi Baxış {#overview}
ServerPilot, WordPress və digər PHP saytlarını DigitalOcean, Amazon, Google və ya istənilən digər server provayderində serverlərdə host etmək üçün bulud xidmətidir. Bu inteqrasiya Ultimate Multisite və ServerPilot arasında avtomatik domen sinxronizasiyası və SSL sertifikatları idarəetməsinə imkan verir.

## Xüsusiyyətlər {#features}
- Avtomatik domen sinxronizasiyası
- Let's Encrypt ilə SSL sertifikatları idarəetməsi
- Avtomatik SSL yenilənməsi

## Tələblər {#requirements}
Aşağı sabitlər (constants) `wp-config.php` faylınızda təyin edilməlidir:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Qurma Təlimatları {#setup-instructions}

### 1. ServerPilot API Giriş Məlumatlarınızı Alın {#1-get-your-serverpilot-api-credentials}

1. ServerPilot dashboard-unuza daxil olun
2. "Account" > "API" yolunu izləyin
3. Əgər yoxdursa, yeni bir API açarı yaradın
4. Client ID və API Key-inizi kopyalayın

### 2. App ID-nizi Alın {#2-get-your-app-id}

1. ServerPilot dashboard-unuzda "Apps" bölməsinə keçin
2. WordPress multisite-ınızın host edildiyi tətbiqi (app) seçin
3. App ID URL-də görünür: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Sabitlər (Constants) wp-config.php-yə Əlavə Edin {#3-add-constants-to-wp-configphp}

Aşağı sabitləri `wp-config.php` faylınıza əlavə edin:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. İntegrasiyanı Aktivləşdirin {#4-enable-the-integration}

1. WordPress admin panelinizdə Ultimate Multisite > Settings yolunu izləyin
2. "Domain Mapping" (Domen Xəritələmə) tabına keçin
3. "Host Integrations" (Host İntegrasiyaları) hissəsinə aşağı sürüşün
4. ServerPilot inteqrasiyasını aktivləşdirin
5. "Save Changes" (Dəyişiklikləri Saxla) düyməsinə basın

## Necə İşləyir {#how-it-works}

### Domen Sinxronizasiyası {#domain-syncing}

Ultimate Multisite-da bir domen xəritələndikdə:

1. İntegrasiya ServerPilot-dan mövcud domenlər siyahısını alır
2. Yeni domeni siyahıya əlavə edir (əgər tətbiq olarsa, www versiyası ilə birlikdə)
3. Yenilənmiş siyahını API vasitəsilə ServerPilot-a göndərir
4. ServerPilot tətbiqiniz üçün domen siyahısını yeniləyir

### SSL Sertifikatları İdarəetməsi {#ssl-certificate-management}

Domenlər sinxronizasiya edildikdən sonra:

1. İntegrasiya tətbiqiniz üçün avtomatik olaraq AutoSSL-i aktivləşdirir
2. ServerPilot Let's Encrypt istifadə edərək SSL sertifikatının verilməsini və quraşdırılmasını həyata keçirir
3. ServerPilot həmçinin SSL sertifikatlarının avtomatik yenilənməsini də idarə edir

## SSL Sertifikatı Yoxlaması {#ssl-certificate-verification}

ServerPilot-un SSL sertifikatlarını verməsi və quraşdırması müəyyən vaxt ala biləcəyi üçün inteqrasiya ServerPilot üçün SSL sertifikatını yoxlama cəhdinin sayını artırmaq üçün konfiqurasiya edilmişdir. Varsayılan olaraq, 5 dəfəyə qədər cəhd edəcək, lakin bu, filterlər vasitəsilə tənzimlənə bilər.

## Problemlərin Həlli {#troubleshooting}

### API Bağlantı Problemləri {#api-connection-issues}
- Client ID və API Key-inizin düzgün olduğundan əmin olun
- App ID-nizin düzgün olduğundan əmin olun
- ServerPilot hesabınızın lazım olan icazələrə malik olduğundan əmin olun

### SSL Sertifikatı Problemləri {#ssl-certificate-issues}
- ServerPilot, SSL sertifikatları verməzdən əvvəl domenlərin serverinizə işarə edən etibarlı DNS qeydlərinə malik olmasını tələb edir
- Əgər SSL sertifikatları verilmirsə, domenlərinizin serverinizin IP ünvanına düzgün işarə etdiyini yoxlayın
- ServerPilot-un SSL sertifikatlarını verməsi və quraşdırması müəyyən vaxt ala bilər (adətən 5-15 dəqiqə)

### Domen Əlavə Edilməyib {#domain-not-added}
- Hər hansı bir xəta mesajı üçün Ultimate Multisite loglarını yoxlayın
- Domenin artıq ServerPilot-a əlavə edilmədiyinə əmin olun
- ServerPilot planınızın əlavə etdiyiniz domen sayını dəstəklədiyinə əmin olun

### Domen Silinməsi {#domain-removal}
- Hazırda, ServerPilot API-si fərdi domenləri silmək üçün bir yol təmin etmir
- Ultimate Multisite-da bir domen xəritəsi silindikdə, inteqrasiya ServerPilot-dakı domen siyahısını silinən domen çıxarılmış şəkildə yeniləyəcək
