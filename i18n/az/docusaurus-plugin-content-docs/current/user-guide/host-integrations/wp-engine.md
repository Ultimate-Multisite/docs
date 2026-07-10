---
title: WP Engine İntegrasiyası
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine İntegrasiyası {#wp-engine-integration}

## Ümumi Baxış {#overview}
WP Engine, WordPress saytları üçün optimallaşdırılmış performans, təhlükəsizlik və miqyaslanma təmin edən premium idarə olunan WordPress hosting platformasıdır. Bu inteqrasiya Ultimate Multisite və WP Engine arasında avtomatik domain sinxronizasiyası təmin edir.

## Xüsusiyyətlər {#features}
- Avtomatik domain sinxronizasiyası
- Multisite quraşdırmaları üçün alt-domain dəstəyi
- WP Engine-in mövcud sistemləri ilə problemizənsiz inteqrasiya

## Tələblər {#requirements}
İnteqrasiya avtomatik olaraq WP Engine-də hostinq edib-etmədiyinizi yoxlayır və daxili WP Engine API-dən istifadə edir. Əgər WP Engine plugin-i aktiv və düzgün konfiqurasiya edilibsə, əlavə konfiqurasiya tələb olunmur.

Bununla belə, əgər inteqrasiyanı əl ilə konfiqurasiya etməyiniz lazım gəlirsə, bu sabitlərdən birini `wp-config.php` faylınızda təyin edə bilərsiniz:

```php
define('WPE_APIKEY', 'your_api_key'); // Təcih olunan üsul
// VƏ YA
define('WPE_API', 'your_api_key'); // Alternativ üsul
```

## Qurma Təlimatları {#setup-instructions}

### 1. WP Engine Plugin-ini Yoxlayın {#1-verify-wp-engine-plugin}

Əgər WP Engine-də hostinq edirsinizsə, WP Engine plugin-i artıq quraşdırılmış və aktiv olmalıdır. Aşağıdakıları yoxlayın:

1. WP Engine plugin-i aktivdir
2. `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` faylı mövcuddur

### 2. İntegrasiyanı Aktivləşdirin {#2-enable-the-integration}

1. WordPress admin panelinizdə Ultimate Multisite > Settings yolunu izləyin
2. "Domain Mapping" (Domain Xəritələmə) tabına keçin
3. "Host Integrations" (Host İntegrasiyaları) hissəsinə aşağı sürüşün
4. WP Engine inteqrasiyasını aktivləşdirin
5. "Save Changes" (Dəyişiklikləri Saxla) düyməsinə basın

## Necə İşləyir {#how-it-works}

### Domain Sinxronizasiyası {#domain-syncing}

Bir domain Ultimate Multisite-də xəritələnəndə:

1. İntegrasiya domaini WP Engine API-dən istifadə edərək WP Engine quraşdırmanıza əlavə edir.
2. WP Engine domain konfiqurasiyasını və SSL sertifikatının verilməsini öz üzərinə götürür.
3. Domain xəritəsi silindikdə, inteqrasiya domaini WP Engine-dən siləcək.

### Alt-Domain Dəstəyi {#subdomain-support}

Alt-domain multisite quraşdırmaları üçün:

1. Yeni sayt yaradıldıqda, inteqrasiya hər alt-domaini WP Engine-ə əlavə edir.
2. WP Engine alt-domain konfiqurasiyasını öz üzərinə götürür.
3. Sayt silindikdə, inteqrasiya alt-domaini WP Engine-dən siləcək.

## Vacib Qeydlər {#important-notes}

### Wildcard Domainlər {#wildcard-domains}
Alt-domain multisite quraşdırmaları üçün, wildcard domain konfiqurasiyası tələb etmək məqsədilə WP Engine dəstəyinə müraciət etmək tövsiyə olunur. Bu, hər alt-domaini ayrı-ayrılıqda əlavə etməyinizə ehtiyac olmadan hamısının avtomatik işləməsinə imkan verir.

### SSL Sertifikatları {#ssl-certificates}
WP Engine bu inteqrasiya vasitəsilə əlavə edilən bütün domainlər üçün SSL sertifikatının verilməsini və yenilənməsini avtomatik olaraq idarə edir. Əlavə konfiqurasiya tələb olunmur.

## Problemlərin Həlli {#troubleshooting}

### API Bağlantı Problemləri {#api-connection-issues}
- WP Engine plugin-inin aktiv və düzgün konfiqurasiya edildiyinə əmin olun
- Əgər API açarını əl ilə təyin etmisinizsə, onun düzgün olduğundan əmin olun
- API ilə bağlı çətinlik çəkirsinizsə, WP Engine dəstəyinə müraciət edin

### Domain Əlavə Edilməyib {#domain-not-added}
- Hər hansı bir xəta mesajı üçün Ultimate Multisite loglarını yoxlayın
- Domainin artıq WP Engine-ə əlavə edilmədiyinə əmin olun
- WP Engine planınızın əlavə etdiyiniz domain sayı dəstəklədiyinə əmin olun

### Alt-Domain Problemləri {#subdomain-issues}
- Alt-domainlər işləmirsə, wildcard domain konfiqurasiyası tələb etmək üçün WP Engine dəstəyinə müraciət edin
- DNS parametrlərinizin əsas domain və alt-domainlər üçün düzgün konfiqurasiya edildiyini yoxlayın
