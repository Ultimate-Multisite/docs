---
title: Closte İntegrasiyası
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte İntegrasiyası {#closte-integration}

## Ümumi Baxış {#overview}
Closte, Google Cloud infrastrukturunda qurulmuş idarə olunan bir WordPress hosting platformasıdır. Bu inteqrasiya Ultimate Multisite və Closte arasında avtomatik domen sinxləşdirmə və SSL sertifikatları idarəetmə imkanı verir.

## Xüsusiyyətlər {#features}
- Avtomatik domen sinxləşdirmə
- SSL sertifikatları idarəetmə
- Wildcard domen dəstəyi
- Closte üzərində işlədirsə, konfiqurasiya tələb edilmir

## Tələblər {#requirements}
Closte-dan istifadə edirsinizsə, aşağıdakı sabit dəyər `wp-config.php` faylınızda təyin edilməlidir:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Bu sabit dəyər, adətən Closte-da hosting etdiyiniz zaman artıq təyin edilmiş olur.

## Qurulum Təlimatları {#setup-instructions}

### 1. Closte API Açarı (Key) Ni Yoxlayın {#1-verify-your-closte-api-key}

Əgər Closte-da hosting edirsinizsə, `CLOSTE_CLIENT_API_KEY` sabiti artıq `wp-config.php` faylınızda təyin edilmiş olmalıdır. Bunu `wp-config.php` faylınızı yoxlayaraq təsdiqləyə bilərsiniz.

### 2. İntegrasiyanı Aktivləşdirin {#2-enable-the-integration}

1. WordPress admin panelinizdə Ultimate Multisite > Settings (Ayarlar) yolunu izləyin.
2. "Domain Mapping" (Domen Xəritələmə) tabına keçin.
3. Aşağıya doğru "Host Integrations" (Host İntegrasiyaları) hissəsinə enin.
4. Closte inteqrasiyasını aktivləşdirin.
5. "Save Changes" (Dəyişiklikləri Saxla) düyməsinə basın.

## Necə İşləyir {#how-it-works}

Ultimate Multisite-da bir domen xəritələndikdə:

1. İntegrasiya, domeni tətbiqinə əlavə etmək üçün Closte-un API-sinə bir sorğu göndərir.
2. Closte avtomatik olaraq SSL sertifikatlarının təmin edilməsini həyata keçirir.
3. Domen xəritəsi silindikdə, inteqrasiya domeni Closte-dan siləcək.

Bu inteqrasiya həmçinin Ultimate Multisite-dakı DNS yoxlama aralığı (DNS check interval) ayarları ilə işləyir, bu da sistemin DNS yayılmasını və SSL sertifikatlarının verilməsini nə qədər tez-tez yoxladığınızı konfiqurasiya etməyinizə imkan verir.

## Domen Qeydi Yaradılması {#domain-record-creation}

Bu inteqrasiya sayt yaradıldıqda və ya duplikaşnə edildikdə domen qeydinin avtomatik yaradılmasını təmin edir. Bu, xüsusilə Closte inteqrasiyası üçün vacibdir, çünki domen qeydinin yaradılması Closte API-sinə domen və SSL sertifikatını yaratmaq üçün siqnal verir.

## Problemlərin Həlli {#troubleshooting}

### API Bağlantı Problemləri {#api-connection-issues}
- Closte API açarınızın düzgün olduğundan əmin olun.
- Closte hesabınızın lazım olan icazələrə malik olduğundan əmin olun.

### SSL Sertifikatı Problemləri {#ssl-certificate-issues}
- Closte-un SSL sertifikatları verməsi bir az vaxt ala bilər (adətən 5-10 dəqiqə).
- Domenlərinizin düzgün şəkildə Closte serverinizin IP ünvanına işarələndiyini yoxlayın.
- Domeniniz üçün DNS qeydlərinə baxaraq onların düzgün konfiqurasiya edildiyinə əmin olun.

### Domen Əlavə Olmayıb {#domain-not-added}
- Hər hansı bir xəta mesajı üçün Ultimate Multisite loglarına baxın.
- Domenin artıq Closte-da əlavə edilmədiyinə əmin olun.
- Domeninizin DNS qeydlərinin düzgün konfiqurasiya edildiyinə əmin olun.

### DNS Yoxlama Aralığı {#dns-check-interval}
- SSL sertifikatları verilməsi çox vaxt çətin olursa, Domen Xəritələmə (Domain Mapping) ayarlarında DNS yoxlama aralığını tənzimləyə bilərsiniz.
- Varsayılan aralıq 300 saniyə (5 dəqiqə) olsa da, test zamanı daha sürətli yoxlama üçün bunu 10 saniyəyə qədər təyin edə bilərsiniz.
