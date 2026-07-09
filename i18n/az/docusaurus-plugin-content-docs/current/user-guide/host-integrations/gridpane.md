---
title: GridPane Inteqrasiyası
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane İntegrasiyası {#gridpane-integration}

## Ümumi Baxış {#overview}
GridPane, ciddi WordPress peşəkarları üçün hazırlanmış xüsusi bir WordPress hosting idarəetmə panelidir. Bu inteqrasiya Ultimate Multisite ilə GridPane arasında avtomatik domen sinxronizasiyası və SSL sertifikatları idarəetməsinə imkan verir.

## Xüsusiyyətlər {#features}
- Avtomatik domen sinxronizasiyası
- SSL sertifikatları idarəetməsi
- SUNRISE sabitinin avtomatik konfiqurasiyası

## Tələblər {#requirements}
Aşağıdakı sabitlər (constants) `wp-config.php` faylınızda təyin edilməlidir:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Qurma Təlimatları {#setup-instructions}

### 1. GridPane API Giriş Məlumatlarınızı Alın {#1-get-your-gridpane-api-credentials}

1. GridPane dashboard-unuza daxil olun
2. "Settings" > "API" yolunu izləyin
3. Hələ API açarınız yoxdursa, bir API açarı yaradın
4. API açarınızı kopyalayın

### 2. Server və Site ID-lərinizi Alın {#2-get-your-server-and-site-ids}

1. GridPane dashboard-unuzda "Servers" bölməsinə keçin
2. WordPress multisite-ınızın yerləşdiyi serveri seçin
3. Server ID-ni qeyd edin (URL-də və ya server detalları səhifəsində görünür)
4. "Sites" bölməsinə keçin və WordPress saytınızı seçin
5. Site ID-ni qeyd edin (URL-də və ya sayt detalları səhifəsində görünür)

### 3. Sabitlər (Constants) `wp-config.php`-yə Əlavə Edin {#3-add-constants-to-wp-configphp}

Aşağıdakı sabitləri `wp-config.php` faylınıza əlavə edin:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. İntegrasiyanı Aktivləşdirin {#4-enable-the-integration}

1. WordPress admin panelinizdə Ultimate Multisite > Settings yolunu izləyin
2. "Domain Mapping" tabına keçin
3. Aşağı doğru sürüşdürərək "Host Integrations" hissəsinə çatın
4. GridPane inteqrasiyasını aktivləşdirin
5. "Save Changes" düymasına basın

## Necə İşləyir {#how-it-works}

Ultimate Multisite-da bir domen xəritələnərkən:

1. İnteqrasiya, domenə saytınıza əlavə etmək üçün GridPane API-sinə bir sorğu göndərir.
2. GridPane SSL sertifikatlarının təmin edilməsini avtomatik olaraq idarə edir.
3. Domen xəritəsi silindikdə, inteqrasiya domenə GridPane-dən silinəcəyini təmin edir.

İnteqrasiya həmçinin `wp-config.php` faylınızdakı SUNRISE sabitini avtomatik olaraq idarə edir, bu da domen xəritəsinin düzgün işləməsi üçün tələb olunan bir addımdır.

## SUNRISE Sabitinin İdarə Edilməsi {#sunrise-constant-management}

GridPane inteqrasiyasının unikal xüsusiyyətlərindən biri, GridPane-in öz domen xəritəsi sisteminə qarşıdurmalarını önləmək üçün `wp-config.php` içindəki SUNRISE sabitini avtomatik olaraq geri qaytarmasıdır. Bu, hər iki sistemin problem olmadan birlikdə işləməsini təmin edir.

## Problemlərin Həlli {#troubleshooting}

### API Bağlantı Problemləri {#api-connection-issues}
- API açarınızın düzgün olduğundan əmin olun
- Server və site ID-lərinizin düzgün olduğundan əmin olun
- GridPane hesabınızın lazım olan icazələrə malik olduğundan əmin olun

### SSL Sertifikat Problemləri {#ssl-certificate-issues}
- GridPane-in SSL sertifikatları verməsi bir az vaxt ala bilər
- Domenlərinizin serverinizin IP ünvanına düzgün işarələndiyini yoxlayın
- Saytınız üçün GridPane SSL ayarlarını yoxlayın

### Domen Əlavə Olmayıb {#domain-not-added}
- Hər hansı bir xəta mesajı üçün Ultimate Multisite loglarını yoxlayın
- Domenin artıq GridPane-ə əlavə edilmədiyinə əmin olun
- Domeninizin DNS qeydlərinin düzgün konfiqurasiya edildiyinə əmin olun
