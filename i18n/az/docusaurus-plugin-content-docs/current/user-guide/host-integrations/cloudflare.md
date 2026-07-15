---
title: Cloudflare İntegrasiyası
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare İntegrasiyası

## Ümumi Baxış {#overview}
Cloudflare ən böyük məzmun çatdırılma şəbəkəsi (CDN) və təhlükəsizlik təminatçısıdır; veb saytları qorumağa və sürətləndirməyə kömək edir. Bu inteqrasiya Ultimate Multisite və Cloudflare arasında avtomatik domen idarəetməsinə imkan verir, xüsusilə alt domenli multisite quruluşları üçün.

## Xüsusiyyətlər {#features}
- Cloudflare-də avtomatik alt domen yaratma
- Proxy ilə alt domen dəstəyi
- DNS qeydi idarəetməsi
- Ultimate Multisite admin panelində təkmilləşdirilmiş DNS qeydi göstəricisi

## Tələblər {#requirements}
Aşağıdakı sabitlər `wp-config.php` faylınızda təyin edilməlidir:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Qurma Təlimatları {#setup-instructions}

### 1. Cloudflare API Açarişinizi Alın {#1-get-your-cloudflare-api-key}

1. Cloudflare dashboard-una daxil olun
2. "My Profile" (sağ yuxarı küncdəki e-poçtinizi basın) hissəsinə keçin
3. Menüdən "API Tokens" seçin
4. Aşağıdakı icazələrlə yeni bir API token yaradın:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. API token-ınızı kopyalayın

### 2. Zona ID-nizi Alın {#2-get-your-zone-id}

1. Cloudflare dashboard-unuzda istifadə etmək istədiyiniz domenə seçim edin
2. Zona ID "Overview" (Ümumi Baxış) tabında, sağ yan çubuğunda "API" altında görünür
3. Zona ID-ni kopyalayın

### 3. Sabitlərini wp-config.php-yə Əlavə Edin {#3-add-constants-to-wp-configphp}

Aşağıdakı sabitləri `wp-config.php` faylınıza əlavə edin:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. İntegrasiyanı Aktivləşdirin {#4-enable-the-integration}

1. WordPress admin panelinizdə Ultimate Multisite > Settings (Parametrlər) yolunu izləyin
2. "Domain Mapping" (Domen Xəritələmə) tabına keçin
3. "Host Integrations" (Host İntegrasiyaları) hissəsinə endirin
4. Cloudflare inteqrasiyasını aktivləşdirin
5. "Save Changes" (Dəyişiklikləri Saxla) düyməsinə basın

## Necə İşləyir {#how-it-works}

### Alt Domen İdarəetməsi {#subdomain-management}

Alt domenli multisite quruluşunda yeni bir sayt yaradılarkən:

1. İntegrasiya alt domen üçün CNAME qeydi əlavə etmək üçün Cloudflare API-sinə bir sorğu göndərir.
2. Alt domen default olaraq Cloudflare vasitəsilə proxy edilməsi üçün konfiqurasiya edilir (bunu filterlər vasitəsilə dəyişmək mümkündür).
3. Sayt silindikdə, inteqrasiya alt domenə Cloudflare-dən siləcək.

### DNS Qeydi Göstəricisi {#dns-record-display}

İnteqrasiya, aşağıdakıları edərək Ultimate Multisite admin panelində DNS qeydi göstəricisini təkmilləşdirir:

1. DNS qeydlərini birbaşa Cloudflare-dən çəkir.
2. Qeydlərin proxy edilmədiyini və ya proxy edildiyini göstərir.
3. DNS qeydləri haqqında əlavə məlumat göstərir.

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (əvvəllər "Cloudflare for SaaS" adıyla çağırılırdı) Cloudflare xüsusiyyətidir və müştərilərinizin öz domenlərini SSL ilə multisite şəbəkənizdə istifadə etməsinə imkan verir. Bu, Cloudflare-dən istifadə edən domenə xəritələnmiş multisite quruluşları üçün tövsiyə olunan yanaşmadır, çünki Cloudflare hər bir fərdi domen üçün SSL sertifikatının verilməsini və yenilənməsini avtomatik idarə edir.

### Standart Cloudflare inteqrasiyasından necə fərqlənir {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standart inteqrasiya | Cloudflare Custom Hostnames |
|---|---|---|
| **Məqsəd** | Alt domenlər üçün avtomatik DNS qeydləri yaradır | Cloudflare-tərəfindən idarə olunan SSL ilə fərdi (xəritələnmiş) domenlər imkanı verir |
| **Ən Yaxşı** | Alt domenli multisite | Domenə xəritələnmiş multisite |
| **SSL** | Ayrılıqda idarə olunur | Cloudflare tərəfindən avtomatik idarə olunur |

### Cloudflare Custom Hostnames Qurulması {#setting-up-cloudflare-custom-hostnames}

1. Cloudflare dashboard-unuzda əsas domeninizin zonasına daxil olun.
2. **SSL/TLS > Custom Hostnames** yolunu izləyin.
3. Serverinizin IP-sinə və ya host adına işarə edən bir fallback origin əlavə edin.
4. Ultimate Multisite-də xəritələnmiş hər bir müştəri domeni üçün Cloudflare-də bir Custom Hostname girişi əlavə edin. Bu addımı Cloudflare API-dən istifadə edərək avtomatlaşdıra bilərsiniz.
5. Müştərinin DNS-i sizin şəbəkənizə işarə edildikdən sonra Cloudflare hər bir custom hostname üçün TLS sertifikatlarını avtomatik olaraq verir və yeniləyir.

Tam API referansı üçün [Cloudflare Custom Hostnames dokumentasiyasına](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) baxın.

:::note Terminologiya yenilənməsi
Ultimate Multisite v2.6.1-dən etibarən, bu xüsusiyyət bütün plugin parametrlərində və etiketlərdə **Cloudflare Custom Hostnames** kimi adlandırılır. Əvvəlki versiyalar "Cloudflare for SaaS" adını istifadə edirdi ki, bu da əsas Cloudflare məhsul adıdır.
:::

## Vacib Qeydlər {#important-notes}

Cloudflare-in son yeniləmələrinə görə, wildcard proxying indi bütün müştərilər üçün mövcuddur. Bu o deməkdir ki, standart Cloudflare DNS inteqrasiyası alt domenli multisite quruluşları üçün əvvəlki qədər vacib deyil, çünki Cloudflare-də sadəcə bir wildcard DNS qeydi qurmaq kifayətdir.

## Problemlərin Həlli {#troubleshooting}

### API Bağlantı Problemləri {#api-connection-issues}
- API token-ınızın düzgün olduğundan və lazım olan icazələrə malik olduğundan əmin olun.
- Zona ID-nizin düzgün olduğundan əmin olun.
- Cloudflare hesabınızın lazım olan icazələrə malik olduğundan əmin olun.

### Alt Domen Əlavə Olmayıb {#subdomain-not-added}
- Hər hansı bir xəta mesajı üçün Ultimate Multisite loglarına baxın.
- Alt domenə Cloudflare-də artıq əlavə edilmədiyindən əmin olun.
- Cloudflare planınızın yaratdığınız DNS qeydləri sayını dəstəklədiyindən əmin olun.

### Proxy Problemləri {#proxying-issues}
- Alt domenlərin proxy edilməməsini istəyirsinizsə, `wu_cloudflare_should_proxy` filterindən istifadə edə bilərsiniz.
- Bəzi xüsusiyyətlər proxy edildikdə düzgün işləməyə bilər (məsələn, müəyyən WordPress admin funksiyaları).
- Admin səhifələri üçün cache-i atlamaq məqsədilə Cloudflare-in Page Rules-dan istifadə etməyi düşünün.
