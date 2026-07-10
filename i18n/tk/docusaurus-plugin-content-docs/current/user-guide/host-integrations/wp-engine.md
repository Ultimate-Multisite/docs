---
title: WP Engine Integrasi
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Integrasi {#wp-engine-integration}

## Genel Bakış {#overview}
WP Engine, WordPress siteleri için optimize edilmiş performans, güvenlik ve ölçeklenebilirlik sağlayan premium yönetilen WordPress hosting platformudur. Bu entegrasyon, Ultimate Multisite ile WP Engine arasında otomatik alan adı senkronizasyonu sağlar.

## Özellikler {#features}
- Otomatik alan adı senkronizasyonu
- Multisite kurulumları için alt alan adı desteği
- WP Engine'in mevcut sistemleriyle sorunsuz entegrasyon

## Gereksinimler {#requirements}
Entegrasyon, hostinginizin WP Engine üzerinde olup olmadığını otomatik olarak algılar ve yerleşik WP Engine API'sini kullanır. WP Engine eklentisi aktif ve doğru yapılandırılmışsa ek bir ayarlamaya gerek yoktur.

Ancak, entegrasyonu manuel olarak yapılandırmanız gerekiyorsa, `wp-config.php` dosyanızda bu sabitlerden birini tanımlayabilirsiniz:

```php
define('WPE_APIKEY', 'your_api_key'); // Tercih edilen yöntem
// VEYA
define('WPE_API', 'your_api_key'); // Alternatif yöntem
```

## Kurulum Talimatları {#setup-instructions}

### 1. WP Engine Eklentisini Doğrulayın {#1-verify-wp-engine-plugin}

WP Engine üzerinde barındırıyorsanız, WP Engine eklentisinin zaten kurulu ve etkin olması gerekir. Şunları kontrol edin:

1. WP Engine eklentisinin aktif olduğundan emin olun
2. `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` dosyasının varlığını doğrulayın

### 2. Entegrasyonu Etkinleştirin {#2-enable-the-integration}

1. WordPress admin panelinizde, Ultimate Multisite > Ayarlar'a gidin
2. "Domain Mapping" (Alan Adı Eşlemesi) sekmesine gidin
3. Aşağı kaydırarak "Host Integrations" (Barındırma Entegrasyonları) bölümüne gelin
4. WP Engine entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır {#how-it-works}

### Alan Adı Senkronizasyonu {#domain-syncing}

Ultimate Multisite'ta bir alan adı eşleştirildiğinde:

1. Entegrasyon, alanı WP Engine kurulumunuza eklemek için WP Engine API'sini kullanır
2. WP Engine alan adı yapılandırmasını ve SSL sertifikası verme işlemini yönetir
3. Bir alan adı eşleştirmesi kaldırıldığında, entegrasyon o alanı WP Engine'den kaldıracaktır

### Alt Alan Adı Desteği {#subdomain-support}

Alt domenler multisite kurulumları için:

1. Entegrasyon yeni bir site oluşturulduğunda her alt domaini WP Engine'e əlavə edir.
2. WP Engine alt domen konfigurasını idarə edir.
3. Bir site silindikdə, inteqrasiya o alt domenini WP Engine-dən çıxaracaq.

## Vacib Qeydlər {#important-notes}

### Wildcard Domenlər {#wildcard-domains}

Alt domenler multisite kurulumları üçün, bütün alt domenlərin hər birini ayrıca əlavə etmək lazım olmadan avtomatik işləməsi üçün wildcard domain konfiqurasiyası tələb edirsinizsə, WP Engine dəstəyindən müraciət etməyinizi tövsiyə edirik.

### SSL Sertifikatları {#ssl-certificates}

Bu inteqrasiya vasitəsilə əlavə olunan bütün domenlər üçün SSL sertifikatının verilməsi və yenilənməsi WP Engine tərəfindən avtomatik idarə olunur. Əlavə konfiqurasiya tələb edilmir.

## Problemləri Həll Etmə (Troubleshooting) {#troubleshooting}

### API Bağlantısı Problemləri {#api-connection-issues}
- WP Engine plugininin aktiv olduğunu və düzgün konfiqurasiya edildiyini yoxlayın.
- Əgər siz API açarını əl ilə təyin etmisinizsə, onun düzgün olduğundan əmin olun.
- API ilə bağlı çətinlikləriniz varsa, WP Engine dəstəyi ilə əlaqə saxlayın.

### Domen Əlavə Edilmir {#domain-not-added}
- Hər hansı bir xəta mesajları üçün Ultimate Multisite loglarını yoxlayın.
- Domenin artıq WP Engine-də əlavə olunmadığını yoxlayın.
- WP Engine planınızın əlavə etdiyiniz domen sayı ilə uyğun olduğundan əmin olun.

### Alt Domen Problemləri {#subdomain-issues}
- Əgər alt domenlər işləmirsə, wildcard domain konfiqurasiyası üçün WP Engine dəstəyi ilə müraciət edin.
- Ana domen və alt domenlər üçün DNS ayarlarınızın düzgün konfiqurasiya edildiyini yoxlayın
