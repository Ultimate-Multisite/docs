---
title: WPMU DEV Integrasiýa
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV Entegrasi

## Genel Bakış
WPMU DEV, WordPress siteleri için barındırma (hosting), eklentiler ve hizmetler sunan kapsamlı bir WordPress platformudur. Bu entegrasyon, Ultimate Multisite ile WPMU DEV barındırması arasında otomatik alan adı senkronizasyonu ve SSL sertifikası yönetimini sağlar.

## Özellikler
- Otomatik alan adı senkronizasyonu
- SSL sertifikası yönetimi
- Genişletilmiş SSL sertifikası doğrulama denemeleri

## Gereksinimler
Bu entegrasyon, WPMU DEV üzerinde barındırıp barındırmadığınızı otomatik olarak algılar ve yerleşik API'yi kullanır. WPMU DEV üzerinde barındırıyorsanız ek bir yapılandırmaya gerek yoktur.

Entegrasyon, WPMU DEV üzerinde barındırma yapıldığında otomatik olarak tanımlanan `WPMUDEV_HOSTING_SITE_ID` sabitinin varlığını kontrol eder.

## Kurulum Talimatları

### 1. WPMU DEV Barındırmasını Doğrulayın

Eğer WPMU DEV üzerinde barındırıyorsanız, gerekli sabitlerin zaten tanımlanmış olması gerekir. Şunları doğrulayın:

1. `WPMUDEV_HOSTING_SITE_ID` sabitinin ortamınızda tanımlı olup olmadığını
2. API erişimi olan aktif bir WPMU DEV üyeliğinizin olup olmadığını

### 2. Entegrasyonu Etkinleştirin

1. WordPress yönetim panelinizde, Ultimate Multisite > Ayarlar'a gidin
2. "Domain Mapping" sekmesine gidin
3. Aşağı kaydırarak "Host Integrations" kısmına gelin
4. WPMU DEV entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır

### Alan Adı Senkronizasyonu

Ultimate Multisite'ta bir alan adı eşleştirildiğinde:

1. Entegrasyon, alanı barındırma hesabınıza eklemek için WPMU DEV API'sini kullanır
2. Ayrıca alan adının www versiyonunu otomatik olarak ekler
3. Alan adı yapılandırmasını ve SSL sertifikası düzenlenmesini WPMU DEV yönetir

### SSL Sertifikası Yönetimi

Bu integrasi, SSL sertifikatlarını vermesi ve kurması biraz zaman alabileceği için WPMU DEV hostingi üçin SSL sertifikası doğrulama cəhdlərini artırmaq üçün konfiqurasiya edilmişdir. Default olaraq, standart 5 cəhdə nisbətən 10 cəhmə qədər SSL sertifikatını yoxlayacaqdır.

## Vacib Qeydlər

### Domeni Silmək

Hazırda WPMU DEV API-si domenləri silməyin bir yolunu təmin etmir. Ultimate Multisite-də domen xəritəsi (domain mapping) silindikdə, domen sizin WPMU DEV hosting hesabınızda qalacaq. Zərurət olduqda onu WPMU DEV hosting paneli daxilində əl ilə silməlisiniz.

### API Autentifikasiyası

Bu integrasiya WordPress verilənlər bazanızda `wpmudev_apikey` seçimi olaraq saxlanılan WPMU DEV API açarını istifadə edir. Saytınızı WPMU DEV-ə bağladığınız zaman bu avtomatik qurulur.

## Problemləri Aradan Qaldırma (Troubleshooting)

### API Bağlantı Problemləri
- Saytınızın WPMU DEV-ə düzgün bağlı olduğundan əmin olun.
- `wpmudev_apikey` seçimin WordPress verilənlər bazanızda qoyulub-qoyulmadığını yoxlayın.
- WPMU DEV üzvlüyünüzün aktiv olduğunu təsdiqləyin.

### SSL Sertifikası Problemləri
- WPMU DEV SSL sertifikatlarını verməsi bir az zaman ala bilər (adətən 5-15 dəqiqə).
- Bu integrasiya SSL sertifikatları üçün 10 dəfə qədər yoxlama etmək üçün konfiqurasiya edilmişdir.
- Bir neçə cəhdə sonra belə SSL sertifikası verilmirsə, WPMU DEV dəstəyidən əlaqə saxlayın.

### Domen Əlavə Edilmir
- Hər hansı bir xəta mesajı üçün Ultimate Multisite loglarını yoxlayın.
- Domenin artıq WPMU DEV-ə əlavə olunmadığını yoxlayın.
- WPMU DEV hosting planınızın əlavə etdiyiniz domen sayını dəstəkləyib-də verməsini təmin edin.
