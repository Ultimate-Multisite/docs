---
title: RunCloud İntegrasiyası
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud İntegrasiyası {#runcloud-integration}

## Ümumi Məlumat {#overview}
RunCloud, öz bulud serverlərinizdə veb tətbiqləri asanlıqla yerləşdirmə və idarə etməyə imkan verən bulud əsaslı bir server idarəetmə platformasıdır. Bu inteqrasiya Ultimate Multisite və RunCloud arasında avtomatik domen sinxronizasiyası və SSL sertifikatları idarəetməsinə imkan verir.

## Xüsusiyyətlər {#features}
- Avtomatik domen sinxronizasiyası
- SSL sertifikatları idarəetməsi
- Mapping silindikdə domenlərin silinməsi

## Tələblər {#requirements}
Aşağıdakı sabit dəyərlər `wp-config.php` faylınızda təyin edilməlidir:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Qurma Təlimatları {#setup-instructions}

### 1. RunCloud API Giriş Məlumatlarınızı Alın {#1-get-your-runcloud-api-credentials}

1. RunCloud dashboard-unuza daxil olun
2. "User Profile" (yuxarı sağ küncdəki profil şəklinizə klikləyin) hissəsinə keçin
3. Menyudan "API" seçin
4. Hələ yoxdursa, "Generate API Key" düyməsinə basın
5. API Key və API Secret-inizi kopyalayın

### 2. Server və App ID-lərinizi Alın {#2-get-your-server-and-app-ids}

1. RunCloud dashboard-unuzda "Servers" (Serverlər) hissəsinə keçin
2. WordPress multisite-ınızın yerləşdirdiyi serveri seçin
3. Server ID URL-də görünür: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" (Veb Tətbiqləri) hissəsinə keçin və WordPress tətbiqinizi seçin
5. App ID URL-də görünür: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php-yə Sabit Dəyərləri Əlavə Edin {#3-add-constants-to-wp-configphp}

Aşağıdakı sabit dəyərləri `wp-config.php` faylınıza əlavə edin:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. İntegrasiyanı Aktivləşdirin {#4-enable-the-integration}

1. WordPress admin panelinizdə Ultimate Multisite > Settings (Ayarlar) hissəsinə keçin
2. "Domain Mapping" (Domen Mapping) tabına keçin
3. Aşağı doğru "Host Integrations" (Host İntegrasiyaları) hissəsinə enin
4. RunCloud inteqrasiyasını aktivləşdirin
5. "Save Changes" (Dəyişiklikləri Saxla) düyməsinə basın

## Necə İşləyir {#how-it-works}

Ultimate Multisite-da bir domen mapping edildikdə:

1. İntegrasiya, domenə tətbiqinə əlavə etmək üçün RunCloud API-sinə bir sorğu göndərir.
2. Domen uğurla əlavə edildikdə, inteqrasiya eyni zamanda SSL sertifikatlarını yenidən yerləşdirir.
3. Domen mapping silindikdə, inteqrasiya domenə RunCloud-dan siləcək.

Subdomain quraşdırmaları üçün, yeni saytlar şəbəkənizə əlavə edildikdə, inteqrasiya avtomatik olaraq RunCloud-da subdomain yaratma funksionallığını yerinə yetirəcək.

## Problemlərin Həlli {#troubleshooting}

### API Bağlantı Problemləri {#api-connection-issues}
- API giriş məlumatlarınızın düzgün olduğundan əmin olun
- Server və app ID-lərinizin düzgün olduğundan əmin olun
- RunCloud hesabınızın lazım olan icazələrə malik olduğundan əmin olun

### SSL Sertifikat Problemləri {#ssl-certificate-issues}
- RunCloud-un SSL sertifikatları verməsi bir az vaxt ala bilər
- Domenlərinizin serverinizin IP ünvanına düzgün işarələndiyini yoxlayın
- Tətbiqiniz üçün RunCloud SSL ayarlarını yoxlayın

### Domen Əlavə Edilməyib {#domain-not-added}
- Hər hansı bir xəta mesajı üçün Ultimate Multisite loglarını yoxlayın
- Domenin artıq RunCloud-a əlavə edilmədiyinə əmin olun
- RunCloud planınızın bir neçə domen dəstəklədiyini təmin edin
