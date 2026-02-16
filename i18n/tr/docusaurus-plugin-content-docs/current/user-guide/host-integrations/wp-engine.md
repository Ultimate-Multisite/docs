---
title: WP Engine Entegrasyonu
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Entegrasyonu

## Genel Bakış
WP Engine, WordPress siteleri için optimize edilmiş performans, güvenlik ve ölçeklenebilirlik sunan premium yönetimli bir WordPress barındırma platformudur. Bu entegrasyon, Ultimate Multisite ile WP Engine arasında otomatik alan adı senkronizasyonunu sağlar.

## Özellikler
- Otomatik alan adı senkronizasyonu
- Multisite kurulumları için subdomain desteği
- WP Engine'in mevcut sistemleriyle sorunsuz entegrasyon

## Gereksinimler
Entegrasyon, WP Engine üzerinde barındırma yapıp yapmadığınızı otomatik olarak algılar ve yerleşik WP Engine API'sini kullanır. WP Engine eklentisi etkin ve düzgün yapılandırılmışsa ek bir yapılandırma gerekmez.

Ancak entegrasyonu manuel olarak yapılandırmanız gerekiyorsa, `wp-config.php` dosyanızda şu sabitlerden birini tanımlayabilirsiniz:

```php
define('WPE_APIKEY', 'your_api_key'); // Tercih edilen yöntem
// VEYA
define('WPE_API', 'your_api_key'); // Alternatif yöntem
```

## Kurulum Talimatları

### 1. WP Engine Eklentisini Doğrulayın

WP Engine üzerinde barındırma yapıyorsanız, WP Engine eklentisi zaten yüklü ve etkinleştirilmiş olmalıdır. Şunları doğrulayın:

1. WP Engine eklentisinin etkin olduğunu
2. `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` dosyasının mevcut olduğunu

### 2. Entegrasyonu Etkinleştirin

1. WordPress yönetim panelinde Ultimate Multisite > Settings bölümüne gidin
2. "Domain Mapping" sekmesine gidin
3. "Host Integrations" bölümüne kaydırın
4. WP Engine entegrasyonunu etkinleştirin
5. "Save Changes" butonuna tıklayın

## Nasıl Çalışır

### Alan Adı Senkronizasyonu

Ultimate Multisite'ta bir alan adı eşlendiğinde:

1. Entegrasyon, alan adını WP Engine kurulumunuza eklemek için WP Engine API'sini kullanır
2. WP Engine, alan adı yapılandırmasını ve SSL sertifikası düzenlemesini yönetir
3. Bir alan adı eşlemesi kaldırıldığında, entegrasyon alan adını WP Engine'den kaldırır

### Subdomain Desteği

Subdomain multisite kurulumları için:

1. Yeni bir site oluşturulduğunda entegrasyon her subdomain'i WP Engine'e ekler
2. WP Engine, subdomain yapılandırmasını yönetir
3. Bir site silindiğinde, entegrasyon subdomain'i WP Engine'den kaldırır

## Önemli Notlar

### Wildcard Alan Adları

Subdomain multisite kurulumları için, wildcard alan adı yapılandırması talep etmek üzere WP Engine desteğiyle iletişime geçmeniz önerilir. Bu sayede tüm subdomain'ler, her birini ayrı ayrı eklemeye gerek kalmadan otomatik olarak çalışır.

### SSL Sertifikaları

WP Engine, bu entegrasyon aracılığıyla eklenen tüm alan adları için SSL sertifikası düzenleme ve yenileme işlemlerini otomatik olarak yönetir. Ek bir yapılandırma gerekmez.

## Sorun Giderme

### API Bağlantı Sorunları
- WP Engine eklentisinin etkin ve düzgün yapılandırılmış olduğunu doğrulayın
- API anahtarını manuel olarak tanımladıysanız, doğru olduğundan emin olun
- API ile ilgili sorun yaşıyorsanız WP Engine desteğiyle iletişime geçin

### Alan Adı Eklenmiyor
- Hata mesajları için Ultimate Multisite günlüklerini kontrol edin
- Alan adının WP Engine'e zaten eklenmediğinden emin olun
- WP Engine planınızın eklediğiniz alan adı sayısını desteklediğinden emin olun

### Subdomain Sorunları
- Subdomain'ler çalışmıyorsa, wildcard alan adı yapılandırması talep etmek için WP Engine desteğiyle iletişime geçin
- Ana alan adı ve subdomain'ler için DNS ayarlarınızın doğru yapılandırıldığını doğrulayın
