---
title: Closte Entegrasyonu
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Entegrasyonu

## Genel Bakış
Closte, Google Cloud altyapısı üzerine kurulu yönetilen bir WordPress barındırma platformudur. Bu entegrasyon, Ultimate Multisite ve Closte arasında otomatik alan adı senkronizasyonu ve SSL sertifika yönetimini sağlar.

## Özellikler
- Otomatik alan adı senkronizasyonu
- SSL sertifika yönetimi
- Wildcard alan adı desteği
- Closte üzerinde çalışıyorsanız yapılandırma gerekmez

## Gereksinimler
Closte kullanıyorsanız, `wp-config.php` dosyanızda aşağıdaki sabitin tanımlanmış olması gerekir:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Closte üzerinde barındırma yapıyorsanız, bu sabit genellikle zaten tanımlıdır.

## Kurulum Talimatları

### 1. Closte API Anahtarınızı Doğrulayın

Closte üzerinde barındırma yapıyorsanız, `CLOSTE_CLIENT_API_KEY` sabiti `wp-config.php` dosyanızda zaten tanımlı olmalıdır. Bunu `wp-config.php` dosyanızı kontrol ederek doğrulayabilirsiniz.

### 2. Entegrasyonu Etkinleştirin

1. WordPress yönetici panelinizde Ultimate Multisite > Settings bölümüne gidin
2. "Domain Mapping" sekmesine geçin
3. "Host Integrations" bölümüne kaydırın
4. Closte entegrasyonunu etkinleştirin
5. "Save Changes" butonuna tıklayın

## Nasıl Çalışır

Ultimate Multisite'da bir alan adı eşlendiğinde:

1. Entegrasyon, alan adını uygulamanıza eklemek için Closte API'sine bir istek gönderir
2. Closte, SSL sertifika sağlamayı otomatik olarak gerçekleştirir
3. Bir alan adı eşlemesi kaldırıldığında, entegrasyon alan adını Closte'dan kaldırır

Entegrasyon ayrıca Ultimate Multisite'daki DNS kontrol aralığı ayarıyla da çalışır; bu sayede sistemin DNS yayılımını ve SSL sertifika durumunu ne sıklıkla kontrol edeceğini yapılandırabilirsiniz.

## Alan Adı Kaydı Oluşturma

Bu entegrasyon, bir site oluşturulduğunda veya çoğaltıldığında alan adı kaydının otomatik olarak oluşturulmasını sağlar. Bu, Closte entegrasyonu için özellikle önemlidir; çünkü alan adı kaydı oluşturulması, Closte API'sinin alan adını ve SSL sertifikasını oluşturmasını tetikler.

## Sorun Giderme

### API Bağlantı Sorunları
- Closte API anahtarınızın doğru olduğunu kontrol edin
- Closte hesabınızın gerekli izinlere sahip olduğundan emin olun

### SSL Sertifika Sorunları
- Closte'un SSL sertifikalarını düzenlemesi biraz zaman alabilir (genellikle 5-10 dakika)
- Alan adlarınızın Closte sunucunuzun IP adresine doğru şekilde yönlendirildiğini doğrulayın
- Alan adınız için DNS kayıtlarını kontrol ederek doğru yapılandırıldığından emin olun

### Alan Adı Eklenmiyor
- Hata mesajları için Ultimate Multisite günlüklerini kontrol edin
- Alan adının Closte'a zaten eklenmediğini doğrulayın
- Alan adınızın DNS kayıtlarının düzgün yapılandırıldığından emin olun

### DNS Kontrol Aralığı
- SSL sertifikalarının düzenlenmesi çok uzun sürüyorsa, Domain Mapping ayarlarından DNS kontrol aralığını değiştirebilirsiniz
- Varsayılan aralık 300 saniyedir (5 dakika), ancak test sırasında daha hızlı kontrol için 10 saniyeye kadar düşürebilirsiniz
