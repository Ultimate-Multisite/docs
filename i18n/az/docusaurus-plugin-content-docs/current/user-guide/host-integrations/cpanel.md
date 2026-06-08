---
title: cPanel İntegrasiyası
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel İntegrasiyası

## Ümumi Baxış
cPanel, bir çox shared və dedicated hosting provayerdləri tərəfindən istifadə edilən ən populyar veb hosting idarəetmə panellərindən biridir. Bu inteqrasiya Ultimate Multisite ilə cPanel arasında avtomatik domen sinxronizasiyası təmin edir, bu da sizə domen aliaslarını və alt domenləri cPanel hesabınıza avtomatik əlavə etməyə imkan verir.

## Xüsusiyyətlər
- cPanel-də avtomatik addon domen yaratma
- cPanel-də avtomatik alt domen yaratma (alt domen multisite quraşdırmaları üçün)
- Mapping-lər silindikdə domenlərin silinməsi

## Tələblər
Aşağıdakı sabitlər (`wp-config.php`) faylınızda təyin edilməlidir:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

İxtiyari olaraq, aşağıdakıları da təyin edə bilərsiniz:

```php
define('WU_CPANEL_PORT', 2083); // Default 2083-dür
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default /public_html-dir
```

## Qurma Təlimatları

### 1. cPanel Giriş Məlumatlarınızı Alın

1. Hosting provayerdən cPanel istifadəçi adı və şifrənizi alın.
2. cPanel hostunuzu müəyyən edin (adətən `cpanel.yourdomain.com` və ya `yourdomain.com:2083` olur).

### 2. wp-config.php-yə Sabitlər Əlavə Edin

Aşağıdakı sabitləri `wp-config.php` faylınıza əlavə edin:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

İxtiyari olaraq, port və kök kataloqu (root directory) özünüzə uyğunlaşdıra bilərsiniz:

```php
define('WU_CPANEL_PORT', 2083); // cPanel fərqli portdan istifadə edirsə dəyişin
define('WU_CPANEL_ROOT_DIR', '/public_html'); // sənəd kökünüz fərqlidirsə dəyişin
```

### 3. İntegrasiyanı Aktivləşdirin

1. WordPress admin panelinizdə Ultimate Multisite > Settings-ə keçin.
2. "Domain Mapping" (Domen Mapping) tabına keçin.
3. "Host Integrations" (Host İntegrasiyaları) hissəsinə aşağı sürüşün.
4. cPanel inteqrasiyasını aktivləşdirin.
5. "Save Changes" (Dəyişiklikləri Saxla) düyməsinə basın.

## Necə İşləyir

### Addon Domenlər
Ultimate Multisite-də bir domen mapping edildikdə:

1. İntegrasiya domenə addon domen kimi əlavə etmək üçün cPanel API-sinə bir sorğu göndərir.
2. Domen, kök kataloqunuz göstərilməsi üçün konfiqurasiya edilir.
3. Domen mapping-i silindikdə, inteqrasiya addon domenini cPanel-dən siləcək.

### Alt Domenlər
Alt domen multisite quraşdırmaları üçün yeni bir sayt yaradıldıqda:

1. İntegrasiya tam domenindən alt domen hissəsini çıxarır.
2. Alt domen əlavə etmək üçün cPanel API-sinə bir sorğu göndərir.
3. Alt domen, kök kataloqunuz göstərilməsi üçün konfiqurasiya edilir.

## Vacib Qeydlər

- İntegrasiya cPanel hesabınızla əlaqə qurmaq üçün cPanel'in API2-sən istifadə edir.
- cPanel hesabınızın addon domen və alt domen əlavə etmək üçün icazələri olmalıdır.
- Bəzi hosting provayerdləri yarada biləcəyiniz addon domen və ya alt domen sayını məhdudlaşdıra bilər.
- İntegrasiya DNS konfiqurasiyasını idarə etmir; domenlərinizi hələ də serverinizin IP ünvanına yönləndirməlisiniz.

## Problemlərin Həlli

### API Bağlantı Problemləri
- cPanel istifadəçi adı və şifrənizin düzgün olduğundan əmin olun.
- cPanel hostunuzun düzgün və əlçatan olduğundan əmin olun.
- cPanel hesabınızın lazım olan icazələrə malik olduğundan əmin olun.
- Host üçün tam URL-dən istifadə etməyi sınayın (məsələn, `https://cpanel.yourdomain.com`).

### Domen Əlavə Edilməyib
- Hər hansı bir xəta mesajı üçün Ultimate Multisite loglarını yoxlayın.
- Domenin artıq cPanel-ə əlavə edilmədiyindən əmin olun.
- cPanel hesabınızın addon domen və ya alt domen üçün limitə çatmadığından əmin olun.

### SSL Sertifikat Problemləri
- İntegrasiya SSL sertifikatlarının verilməsini idarə etmir.
- Domenləriniz üçün SSL sertifikatları vermək üçün cPanel'in SSL/TLS alətlərindən və ya AutoSSL funksiyasından istifadə etməlisiniz.
- Alternativ olaraq, cPanel'in AutoSSL-i ilə Let's Encrypt kimi bir xidmətdən istifadə edə bilərsiniz.
