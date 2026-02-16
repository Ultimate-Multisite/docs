---
title: WPMU DEV Entegrasyonu
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV Entegrasyonu

## Genel Bakış
WPMU DEV, WordPress siteleri için hosting, eklentiler ve hizmetler sunan kapsamlı bir WordPress platformudur. Bu entegrasyon, Ultimate Multisite ile WPMU DEV hosting arasında otomatik alan adı senkronizasyonu ve SSL sertifika yönetimini sağlar.

## Özellikler
- Otomatik alan adı senkronizasyonu
- SSL sertifika yönetimi
- Genişletilmiş SSL sertifika doğrulama denemeleri

## Gereksinimler
Entegrasyon, WPMU DEV üzerinde hosting kullanıp kullanmadığınızı otomatik olarak algılar ve yerleşik API'yi kullanır. WPMU DEV üzerinde hosting kullanıyorsanız ek bir yapılandırma gerekmez.

Entegrasyon, WPMU DEV üzerinde hosting kullanıldığında otomatik olarak tanımlanan `WPMUDEV_HOSTING_SITE_ID` sabitinin varlığını kontrol eder.

## Kurulum Talimatları

### 1. WPMU DEV Hosting'i Doğrulayın

WPMU DEV üzerinde hosting kullanıyorsanız, gerekli sabitler zaten tanımlanmış olmalıdır. Aşağıdakileri doğrulayın:

1. `WPMUDEV_HOSTING_SITE_ID` sabitinin ortamınızda tanımlı olduğunu
2. API erişimli aktif bir WPMU DEV üyeliğiniz olduğunu

### 2. Entegrasyonu Etkinleştirin

1. WordPress yönetici panelinizde Ultimate Multisite > Settings (Ayarlar) bölümüne gidin
2. "Domain Mapping" sekmesine gidin
3. "Host Integrations" bölümüne inin
4. WPMU DEV entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır

### Alan Adı Senkronizasyonu

Ultimate Multisite'ta bir alan adı eşlendiğinde:

1. Entegrasyon, alan adını hosting hesabınıza eklemek için WPMU DEV API'sini kullanır
2. Alan adının www versiyonunu da otomatik olarak ekler
3. WPMU DEV, alan adı yapılandırmasını ve SSL sertifika düzenlemesini üstlenir

### SSL Sertifika Yönetimi

Entegrasyon, WPMU DEV hosting için SSL sertifika doğrulama denemelerini artıracak şekilde yapılandırılmıştır; çünkü SSL sertifikalarının düzenlenmesi ve kurulması biraz zaman alabilir. Varsayılan olarak, standart 5 denemeye kıyasla SSL sertifika doğrulaması için 10 defaya kadar deneme yapılır.

## Önemli Notlar

### Alan Adı Kaldırma

Şu anda WPMU DEV API'si alan adlarını kaldırma imkanı sunmamaktadır. Ultimate Multisite'ta bir alan adı eşlemesi kaldırıldığında, alan adı WPMU DEV hosting hesabınızda kalmaya devam edecektir. Gerekirse WPMU DEV hosting panelinden manuel olarak kaldırmanız gerekir.

### API Kimlik Doğrulaması

Entegrasyon, WordPress veritabanınızda `wpmudev_apikey` seçeneği olarak saklanan WPMU DEV API anahtarını kullanır. Bu, sitenizi WPMU DEV'e bağladığınızda otomatik olarak ayarlanır.

## Sorun Giderme

### API Bağlantı Sorunları
- Sitenizin WPMU DEV'e düzgün şekilde bağlı olduğunu doğrulayın
- `wpmudev_apikey` seçeneğinin WordPress veritabanınızda ayarlandığını kontrol edin
- WPMU DEV üyeliğinizin aktif olduğundan emin olun

### SSL Sertifika Sorunları
- WPMU DEV'in SSL sertifikalarını düzenlemesi biraz zaman alabilir (genellikle 5-15 dakika)
- Entegrasyon, SSL sertifikaları için 10 defaya kadar kontrol yapacak şekilde yapılandırılmıştır
- Birden fazla denemeden sonra SSL sertifikaları hâlâ düzenlenmiyorsa, WPMU DEV desteğiyle iletişime geçin

### Alan Adı Eklenmiyor
- Hata mesajları için Ultimate Multisite günlüklerini kontrol edin
- Alan adının zaten WPMU DEV'e eklenmemiş olduğunu doğrulayın
- WPMU DEV hosting planınızın eklemeye çalıştığınız alan adı sayısını desteklediğinden emin olun
