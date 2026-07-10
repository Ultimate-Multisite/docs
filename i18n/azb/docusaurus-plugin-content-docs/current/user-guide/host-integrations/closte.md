---
title: Closte Banda-k
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Entegrasyonu {#closte-integration}

## Genel Bakış {#overview}
Closte, Google Cloud altyapısı üzerinde çalışan, yönetilen bir WordPress hosting platformudur. Bu entegrasyon, Ultimate Multisite ile Closte arasında otomatik alan adı senkronizasyonu ve SSL sertifikası yönetimi sağlar.

## Özellikler {#features}
- Otomatik alan adı senkronizasyonu
- SSL sertifikası yönetimi
- Wildcard alan adı desteği
- Closte üzerinde çalışıyorsa yapılandırmaya gerek yok

## Gereksinimler {#requirements}
Closte kullanıyorsanız, aşağıdaki sabit değerin `wp-config.php` dosyanızda tanımlanması gerekir:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Bu sabit değer, genellikle Closte üzerinde barındırma yapıyorsanız zaten tanımlanmış olur.

## Kurulum Talimatları {#setup-instructions}

### 1. Closte API Anahtarınızı Doğrulayın {#1-verify-your-closte-api-key}

Closte üzerinde barındırma yapıyorsanız, `CLOSTE_CLIENT_API_KEY` sabiti zaten `wp-config.php` dosyanızda tanımlanmış olmalıdır. Bunu, `wp-config.php` dosyanızı kontrol ederek doğrulayabilirsiniz.

### 2. Entegrasyonu Etkinleştirin {#2-enable-the-integration}

1. WordPress yöneticinizde, Ultimate Multisite > Ayarlar'a gidin
2. "Alan Adı Eşleme" sekmesine gidin
3. "Host Entegrasyonları" bölümüne kadar aşağı kaydırın
4. Closte entegrasyonunu etkinleştirin
5. "Değişiklikleri Kaydet" butonuna tıklayın

## Nasıl Çalışır {#how-it-works}

Bir alan adı Ultimate Multisite'ta eşlendiğinde:

1. Entegrasyon, alan adı eklemek için Closte'un API'sine bir istek gönderir.
2. Closte, SSL sertifikası sağlama işlemini otomatik olarak halleder.
3. Bir alan adı eşlemesi kaldırıldığında, entegrasyon bu alan adı kaydını Closte'dan kaldırır.

Bu entegrasyon ayrıca, sistemin DNS yayılımını ve SSL sertifikası düzenlenmesini ne sıklıkta kontrol edeceğinizi yapılandırmanıza olanak tanıyan Ultimate Multisite'taki DNS kontrol aralığı ayarıyla da çalışır.

## Alan Adı Kaydı Oluşturma {#domain-record-creation}

Bu entegrasyon, bir site oluşturulduğunda veya çoğaltıldığında bir alan adı kaydının otomatik olarak oluşturulmasını sağlar. Bu, özellikle Closte entegrasyonu için önemlidir, çünkü alan adı kaydı oluşturulması, Closte API'sini alan adı ve SSL sertifikası oluşturması için tetikler.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}
- Closte API anahtarınızın doğru olduğundan emin olun
- Closte hesabınızın gerekli izinlere sahip olduğundan emin olun

### SSL Sertifikası Sorunları {#ssl-certificate-issues}
- Closte'un SSL sertifikaları oluşturması biraz zaman alabilir (genellikle 5-10 dakika)
- Alan adlarınızın doğru bir şekilde Closte sunucunuzun IP adresine işaret ettiğini doğrulayın
- Alan adınızın DNS kayıtlarını kontrol ederek doğru yapılandırıldığından emin olun

### Alan Adı Eklenmedi {#domain-not-added}
- Herhangi bir hata mesajı için Ultimate Multisite günlüklerini kontrol edin
- Alan adının zaten Closte'a eklenmediğinden emin olun
- Alan adınızın DNS kayıtlarının düzgün yapılandırıldığından emin olun

### DNS Kontrol Aralığı {#dns-check-interval}
- SSL sertifikaları oluşturmak çok uzun sürüyorsa, Alan Adı Eşleme ayarlarındaki DNS kontrol aralığını ayarlayabilirsiniz
- Varsayılan aralık 300 saniyedir (5 dakika), ancak test sırasında daha hızlı kontrol için bunu 10 saniyeye kadar ayarlayabilirsiniz
