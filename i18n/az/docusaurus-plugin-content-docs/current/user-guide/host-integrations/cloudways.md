---
title: Cloudways İntegrasiyası
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways İntegrasiyası

## Ümumi Baxış {#overview}
Cloudways, DigitalOcean, AWS, Google Cloud və daha çox kimi müxtəlif bulud provayerdə WordPress saytları yerləşdirməyə imkan verən idarə olunan (managed) bir bulud hosting platformasıdır. Bu inteqrasiya Ultimate Multisite ilə Cloudways arasında domenlərin avtomatik sinxronlaşdırılmasını və SSL sertifikatlarının idarə edilməsini təmin edir.

## Xüsusiyyətlər {#features}
- Avtomatik domen sinxronlaşdırması
- SSL sertifikatlarının idarə edilməsi
- Əlavə domenlərə dəstək
- SSL sertifikatları üçün DNS təsdiqi

## Tələblər {#requirements}
Aşağıdakı sabitlər (constants) `wp-config.php` faylınızda təyin edilməlidir:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

İxtiyari olaraq, aşağıdakıları da təyin edə bilərsiniz:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Qurma Təlimatları {#setup-instructions}

### 1. Cloudways API Giriş Məlumatlarınızı Alın {#1-get-your-cloudways-api-credentials}

1. Cloudways dashboard-unuza daxil olun
2. "Account" > "API Keys" yolunu izləyin
3. Hələ API açarı yoxdursa, bir API açarı yaradın
4. E-poçt ünvanınızı və API açarınızı kopyalayın

### 2. Server və Tətbiq ID-lərinizi Alın {#2-get-your-server-and-application-ids}

1. Cloudways dashboard-unuzda "Servers" bölməsinə keçin
2. WordPress multisite-ınızın yerləşdirdiyi serveri seçin
3. Server ID URL-də görünür: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" bölməsinə keçin və WordPress tətbiqinizi seçin
5. App ID URL-də görünür: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php-yə Sabitlər Əlavə Edin {#3-add-constants-to-wp-configphp}

Aşağıdakı sabitləri `wp-config.php` faylınıza əlavə edin:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Əgər multisite şəbəkənizin kənarında (outside) olmasını istədiyiniz əlavə **xarici** domenləriniz varsa və bunlar həmişə Cloudways aliaslar siyahısında qalmalıdırsa:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Öz şəbəkənizin wildcard-ını daxil etməyin
`WU_CLOUDWAYS_EXTRA_DOMAINS`-ə `*.your-network.com` (və ya öz şəbəkənizin istənilən alt domen naxışını) **daxil etməyin**. Niyə ki, bu, hər kirayəçi üçün SSL sertifikatlarının verilməsinin qarşısını alır. Bunun üçün aşağıdakı [Vacib — wildcard SSL tələsi](#important--wildcard-ssl-pitfall) hissəsinə baxın.
:::

### 4. İntegrasiyanı Aktivləşdirin {#4-enable-the-integration}

1. WordPress admin panelinizdə Ultimate Multisite > Settings yolunu izləyin
2. "Domain Mapping" (Domen Mərhələləndirməsi) tabına keçin
3. "Host Integrations" (Host İntegrasiyaları) hissəsinə aşağı sürüşün
4. Cloudways inteqrasiyasını aktivləşdirin
5. "Save Changes" (Dəyişiklikləri Saxla) düyməsinə basın

## Necə İşləyir {#how-it-works}

### Domen Sinxronlaşdırması {#domain-syncing}

Bir domen Ultimate Multisite-da mərhələləndirildikdə:

1. İntegrasiya hazırda mərhələlənmiş bütün domenləri alır
2. Yeni domeni siyahıya əlavə edir (əgər tətbiq olarsa, www versiyası ilə birlikdə)
3. Tam siyahını API vasitəsilə Cloudways-ə göndərir
4. Cloudways tətbiqiniz üçün domen aliaslarını yeniləyir

Qeyd: Cloudways API-si hər dəfə tam domen siyahısının göndərilməsini tələb edir, sadəcə ayrı-ayrı domen əlavə etmək və ya silmək deyil.

### SSL Sertifikatlarının İdarə Edilməsi {#ssl-certificate-management}

Domenlər sinxronlaşdırıldıqdan sonra:

1. İntegrasiya hansı domenlərin serverinizə doğru etibarlı DNS qeydlərinə malik olduğunu yoxlayır
2. Bu domenlər üçün Let's Encrypt SSL sertifikatları quraşdırmaq üçün Cloudways-ə sorğu göndərir
3. Cloudways SSL sertifikatlarının verilməsini və quraşdırılmasını həyata keçirir

İnteqrasiya həmişə Cloudways-dən **standart** (wildcard olmayan) Let's Encrypt sertifikatları tələb edir. Əgər `WU_CLOUDWAYS_EXTRA_DOMAINS`-də bir wildcard naxışı verilsə, əsas `*.` işarəsi SSL sorğusundan əvvəl təmizlənir — wildcard özü bu inteqrasiya tərəfindən heç vaxt quraşdırılmır. Cloudways-də wildcard sertifikatdan istifadə etmək üçün onu əl ilə quraşdırmalısınız, lakin belə etmək, mərhələlənmiş özelleşdirilmiş domenlər üçün domenə görə Let's Encrypt verilməsinin qarşısını alır (tələsi aşağıda görün).

## Əlavə Domenlər {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` sabiti, Cloudways tətbiqinin aliaslar siyahısında həmişə qalması lazım olan əlavə **xarici** domenləri göstərməyinizə imkan verir. Bunu aşağıdakılar üçün istifadə edin:

- Ultimate Multisite tərəfindən idarə edilməyən xarici domenlər (məsələn, eyni Cloudways tətbiqini paylaşan ayrı bir marketinq saytı)
- Tətbiq aliaslar siyahısında qalmasını istədiyiniz park edilmiş və ya staging domenlər

Bu sabiti öz şəbəkənizin alt domen wildcard-ı üçün (məsələn, `*.your-network.com`) **istifadə etməyin**. Wildcard SSL tələsinə aşağı baxın.

## Vacib — Wildcard SSL Tələsi {#important--wildcard-ssl-pitfall}

Cloudways-in standart quruluşunu izləyərkən edilən yayğın səhv, `*.your-network.com` kimi bir wildcard-ı `WU_CLOUDWAYS_EXTRA_DOMAINS`-ə əlavə etmək və ya həmin wildcard üçün Cloudways wildcard SSL sertifikatını əl ilə quraşdırmaqdır.

**Bunu etsəniz, Cloudways Ultimate Multisite-ın mərhələləndirdiyi kirayəçi domenləri üçün Let's Encrypt sertifikatları verməkdən imtina edəcək.** Cloudways hər dəfə tətbiq üzərində aktiv SSL sertifikatını dəyişir və tətbiq üzərində mövcud olan wildcard sertifikatı, inteqrasiyanın güvəndiyi domenə görə Let's Encrypt verilməsinin qarşısını alır.

### Ultimate Multisite şəbəkəsi üçün tövsiyə olunan Cloudways SSL quruluşu {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways tətbiqinin **SSL Certificate** (SSL Sertifikatı) tabında, yalnız `your-network.com` və `www.your-network.com`-u əhatə edən **standart Let's Encrypt sertifikatı** quraşdırın — **wildcard deyil**.
2. `WU_CLOUDWAYS_EXTRA_DOMAINS`-ə `*.your-network.com` (və ya öz şəbəkənizin alt domen naxışı) **qoymayın**. Bu sabiti yalnız **xarici** domenlər üçün saxlayın.
3. Alt saytların düzgün işləməsi üçün kirayəçi domen alt-domen wildcard-ını yalnız **DNS** səviyyəsində yaradın (yəni `*.your-network.com` üçün Cloudways server IP-sinə işarə edən bir `A` qeydi). Beləliklə, fərdi mərhələlənmiş özelleşdirilmiş domenlər üçün SSL sertifikatı inteqrasiya tərəfindən Let's Encrypt vasitəsilə avtomatik verilir.

Əgər kirayəçilərin özelleşdirilmiş domenləri SSL olmadan qalarsa, Cloudways SSL tabına baxın. Əgər orada bir wildcard sertifikat aktivdirsə, onu silin, yalnız əsas şəbəkə domenini (`your-network.com`, `www.your-network.com`) əhatə edən standart bir Let's Encrypt sertifikatı yenidən verin və `WU_CLOUDWAYS_EXTRA_DOMAINS`-dən bütün wildcard girişlərini silin. Sonra domen mərhələləndirməsini yenidən işə salın (və ya növbəti sinxronlaşmanı gözləyin) və inteqrasiya yenidən domenə görə sertifikat verməyə başlayacaq.

## Problemlərin Həlli {#troubleshooting}

### API Bağlantı Problemləri {#api-connection-issues}
- E-poçt ünvanınız və API açarınızın düzgün olduğundan əmin olun
- Server və tətbiq ID-lərinizin düzgün olduğundan əmin olun
- Cloudways hesabınızın lazım olan icazələrə malik olduğundan əmin olun

### SSL Sertifikatı Problemləri {#ssl-certificate-issues}
- Cloudways, SSL sertifikatları verməzdən əvvəl domenlərin serverinizə doğru etibarlı DNS qeydlərinə malik olmasını tələb edir
- İntegrasiya SSL sertifikatları tələb etməzdən əvvəl DNS qeydlərini yoxlayır
- Əgər SSL sertifikatları verilmirsə, domenlərinizin serverinizin IP ünvanına düzgün işarə etdiyinə baxın
- **Kirayəçi domenləri SSL olmadan mı qalır?** Cloudways tətbiqinin SSL Certificate tabına baxın. Əgər bir wildcard sertifikat (əl ilə quraşdırılmış və ya `*.your-network.com`-u əhatə edən) aktivdirsə, Cloudways fərdi mərhələlənmiş özelleşdirilmiş domenlər üçün Let's Encrypt sertifikatları verməyəcək. Onu yalnız əsas şəbəkə domenini (`your-network.com`, `www.your-network.com`) əhatə edən standart bir Let's Encrypt sertifikatı ilə əvəz edin və `WU_CLOUDWAYS_EXTRA_DOMAINS`-dən bütün wildcard girişlərini silin. Sonra domen mərhələləndirməsini yenidən işə salın (və ya növbəti sinxronlaşmanı gözləyin) və inteqrasiya domenə görə sertifikat tələb edəcək.

### Domen Əlavə Olmayıb {#domain-not-added}
- Hər hansı bir xəta mesajı üçün Ultimate Multisite loglarına baxın
- Domenin artıq Cloudways-ə əlavə edilmədiyinə əmin olun
- Cloudways planınızın əlavə etdiyiniz domen sayını dəstəklədiyinə əmin olun
