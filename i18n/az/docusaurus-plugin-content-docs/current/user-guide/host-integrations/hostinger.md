---
title: Hostinger (hPanel) İntegrasiyası
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) İntegrasiyası

## Ümumi Baxış

Hostinger populyar bir veb hosting provayerdidir və hPanel adlı müasir bir nəzarət paneli ilə təchiz edilmişdir. Ultimate Multisite Hostinger inteqrasiyası, Ultimate Multisite ilə Hostinger-in hPanel-i arasında domenlərin avtomatik sinxronlaşmasını təmin edir. Bu sayə, domen xəritələnmələrini və alt domenləri birbaşa WordPress admin panelinizdən avtomatik idarə edə bilərsiniz.

## Xüsusiyyətlər

- hPanel-də avtomatik əlavə domen yaratma
- hPanel-də avtomatik alt domen yaratma (alt domen multisayt quraşdırmaları üçün)
- Xəritələnmələr silindikdə domenlərin silinməsi
- hPanel-in domen idarəetmə API-si ilə problemiz bir inteqrasiya

## Tələblər

Hostinger inteqrasiyasından istifadə etmək üçün aşağıdakılara ehtiyacınız var:

1. hPanel girişli bir Hostinger hesabınız
2. Hostinger-dən alınan bir API token-i
3. `wp-config.php` faylınızda təyin edilmiş aşağıdakı sabitlər:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

İxtiyari olaraq, aşağıdakıları da təyin edə bilərsiniz:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Qurma Təlimatları

### 1. Hostinger API Token-inizi Yaradın

1. Hostinger hesabınıza daxil olun və hPanel-ə daxil olun.
2. **Account Settings** → **API Tokens** yolunu izləyin.
3. **Create New Token** düymasına basın.
4. Token-inizə təsviri bir ad verin (məsələn, "Ultimate Multisite").
5. Lazımi icazələri seçin:
   - Domain management (Domen idarəetməsi)
   - Subdomain management (Alt domen idarəetməsi)
6. Yaradılan token-i kopyalayın və təhlükəsiz yerdə saxlayın.

### 2. Hesab ID-nizi Tapın

1. hPanel-də **Account Settings** → **Account Information** səhifəsinə keçin.
2. Hesab ID-niz bu səhifədə göstərilir.
3. Bu ID-ni kopyalayın və növbəti addım üçün saxlayın.

### 3. wp-config.php-yə Sabitlər Əlavə Edin

Aşağıdakı sabitləri `wp-config.php` faylınıza əlavə edin:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Hostinger hesabınız fərqli bir API endpoint-dən istifadə edirsə, onu özünüz dəyişə bilərsiniz:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. İntegrasiyanı Aktivləşdirin

1. WordPress admin panelinizdə **Ultimate Multisite > Settings** yolunu izləyin.
2. **Domain Mapping** tabına keçin.
3. **Host Integrations** hissəsinə aşağı sürüşün.
4. **Hostinger (hPanel)** inteqrasiyasını aktivləşdirin.
5. **Save Changes** düymasına basın.

## Necə İşləyir

### Əlavə Domenlər (Addon Domains)

Ultimate Multisite-də bir domen xəritələndirərkən:

1. İntegrasiya, domenə əlavə domen kimi əlavə etmək üçün Hostinger-in API-sinə bir sorğu göndərir.
2. Domen, kök kataloqunuz göstərilməsi üçün konfiqurasiya edilir.
3. Domen xəritələnməsi silindikdə, inteqrasiya avtomatik olaraq əlavə domenləri hPanel-dən silir.

### Alt Domenlər (Subdomains)

Alt domen multisayt quraşdırmaları üçün, yeni bir sayt yaradıldıqda:

1. İntegrasiya, tam domenindən alt domen hissəsini çıxarır.
2. Alt domen əlavə etmək üçün Hostinger-in API-sinə bir sorğu göndərir.
3. Alt domen, kök kataloqunuz göstərilməsi üçün konfiqurasiya edilir.

## Vacib Qeydlər

- İntegrasiya, hesabınızla əlaqə qurmaq üçün Hostinger-in REST API-sindən istifadə edir.
- API token-iniz domen və alt domen idarəetməsi üçün lazım olan icazələrə malik olmalıdır.
- İntegrasiya DNS konfiqurasiyasını idarə etmir; domenlər artıq Hostinger hesabınıza yönləndirilmiş olmalıdır.
- API sorğuları HTTPS üzərindən təhlükəsiz şəkildə edilir.
- API token-inizi təhlükəsiz saxlayın və onu heç vaxt açıq şəkildə paylaşmayın.

## Problemlərin Həlli

### API Bağlantı Problemləri

- API token-inizin düzgün olduğundan və bitmədiyindən əmin olun.
- Hesab ID-nizin düzgün olduğundan əmin olun.
- API token-inizin domen idarəetməsi üçün lazım olan icazələrə malik olduğundan əmin olun.
- Hostinger hesabınızın aktiv və yaxşı vəziyyətdə olduğundan əmin olun.

### Domen Əlavə Olmayıb

- Hər hansı bir xəta mesajı üçün Ultimate Multisite loglarını yoxlayın.
- Domenin artıq Hostinger hesabınıza əlavə edilmədiyindən əmin olun.
- Hostinger hesabınızın əlavə domenlər üçün limitinə çatmadığından əmin olun.
- Domenin Hostinger nameserverlərinizə düzgün yönləndirildiyini təsdiqləyin.

### SSL Sertifikat Problemləri

- İntegrasiya SSL sertifikatlarının verilməsini idarə etmir.
- Hostinger adətən AutoSSL vasitəsilə pulsuz SSL sertifikatları təmin edir.
- SSL sertifikatlarını birbaşa hPanel-də **SSL/TLS** altında idarə edə bilərsiniz.
- Alternativ olaraq, Let's Encrypt-dən Hostinger-in AutoSSL xüsusiyyəti ilə istifadə edin.

## Dəstək

Hostinger inteqrasiyası ilə bağlı əlavə köməklik üçün, zəhmət olmasa aşağıdakılara baxın:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
