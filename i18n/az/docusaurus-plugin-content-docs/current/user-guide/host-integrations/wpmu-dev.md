---
title: WPMU DEV İntegrasiyası
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV Integration

## Ümumi Baxış
WPMU DEV, WordPress saytları üçün hosting, plugin və xidmətlər təklif edən geniş funksionallıq bir WordPress platformasıdır. Bu inteqrasiya Ultimate Multisite ilə WPMU DEV hosting arasında avtomatik domen sinxronizasiyası və SSL sertifikatları idarəetməsinə imkan verir.

## Xüsusiyyətlər
- Avtomatik domen sinxronizasiyası
- SSL sertifikatları idarəetməsi
- Genişləndirilmiş SSL sertifikatı yoxlama cəhdləri

## Tələblər
İnteqrasiya avtomatik olaraq sizin WPMU DEV-də hosting edib-etmədiyinizi yoxlayır və daxili API-dən istifadə edir. Əgər WPMU DEV-də hosting edirsinizsə, əlavə konfiqurasiya tələb olunmur.

İnteqrasiya, WPMU DEV-də hosting edərkən avtomatik təyin edilən `WPMUDEV_HOSTING_SITE_ID` konstantının mövcudluğunu yoxlayır.

## Qurma Təlimatları

### 1. WPMU DEV Hostingini Yoxlayın

Əgər WPMU DEV-də hosting edirsinizsə, lazım olan konstantlar artıq təyin edilmiş olmalıdır. Aşağıdakıları yoxlayın:

1. `WPMUDEV_HOSTING_SITE_ID` konstantı mühitinizdə təyin olunubmu
2. API girişli aktiv bir WPMU DEV üzvlüyünüz var

### 2. İnteqrasiyanı Aktivləşdirin

1. WordPress admin panelinizdə Ultimate Multisite > Settings yolunu izləyin
2. "Domain Mapping" (Domen Xəritələmə) tabına keçin
3. "Host Integrations" (Host İntegrasiyaları) hissəsinə aşağı sürüşün
4. WPMU DEV inteqrasiyasını aktivləşdirin
5. "Save Changes" (Dəyişiklikləri Saxla) düyməsinə basın

## Necə İşləyir

### Domen Sinxronizasiyası

Ultimate Multisite-də bir domen xəritələndikdə:

1. İnteqrasiya, domeni hosting hesabınıza əlavə etmək üçün WPMU DEV API-dən istifadə edir.
2. Domenin www versiyasını da avtomatik olaraq əlavə edir.
3. WPMU DEV domen konfiqurasiyası və SSL sertifikatının verilməsini öz üzərinə götürür.

### SSL Sertifikatları İdarəetməsi

İnteqrasiya, SSL sertifikatlarının verilməsi və quraşdırılması müəyyən vaxt ala biləcəyi üçün WPMU DEV hosting üçün SSL sertifikatı yoxlama cəhdlərinin sayını artırmaq üçün konfiqurasiya edilmişdir. Default olaraq, standart 5 cəhdə nisbətən, SSL sertifikatı yoxlaması üçün 10 dəfəyə qədər cəhd edəcək.

## Vacib Qeydlər

### Domen Silinməsi

Hazırda WPMU DEV API-si domenləri silmək üçün bir yol təmin etmir. Ultimate Multisite-də domen xəritəsi silindikdə, domen WPMU DEV hosting hesabınızda qalacaq. Zərurət yaranarsa, onu WPMU DEV hosting dashboard-undan əl ilə silməli olacaqsınız.

### API Autentifikasiyası

İnteqrasiya, WordPress verilənlər bazanızda `wpmudev_apikey` option-u kimi saxlanılan WPMU DEV API açarından istifadə edir. Bu, saytınızı WPMU DEV-ə qoşduğunuzda avtomatik olaraq qurulur.

## Problemlərin Həlli

### API Bağlantı Problemləri
- Saytınızın WPMU DEV-ə düzgün qoşulduğunu yoxlayın
- WordPress verilənlər bazanızda `wpmudev_apikey` option-unun təyin edildiyini yoxlayın
- WPMU DEV üzvlüyünüzün aktiv olduğundan əmin olun

### SSL Sertifikatları Problemləri
- WPMU DEV SSL sertifikatları verməkdə müəyyən vaxt (adətən 5-15 dəqiqə) çəkə bilər.
- İnteqrasiya SSL sertifikatları üçün 10 dəfəyə qədər yoxlama etmək üçün konfiqurasiya edilmişdir.
- Bir neçə cəhddən sonra belə SSL sertifikatları verilmirsə, WPMU DEV dəstəyinə müraciət edin.

### Domen Əlavə Olmayıb
- Hər hansı bir xəta mesajı üçün Ultimate Multisite loglarını yoxlayın
- Domenin artıq WPMU DEV-ə əlavə edilmədiyinə əmin olun
- WPMU DEV hosting planınızın əlavə etdiyiniz domen sayını dəstəklədiyinə əmin olun
