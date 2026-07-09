---
title: WP Engine Integration
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Entegrasyonu {#wp-engine-integration}

## Genel Bakış {#overview}
WP Engine, WordPress siteleri için optimize edilmiş performans, güvenlik ve ölçeklenebilirlik sağlayan premium bir yönetilen WordPress barındırma platformudur. Bu entegrasyon, Ultimate Multisite ile WP Engine arasında otomatik alan adı senkronizasyonu sağlar.

## Özellikler {#features}
- Otomatik alan adı senkronizasyonu
- Multisite kurulumları için alt alan adı (subdomain) desteği
- WP Engine'ın mevcut sistemleriyle sorunsuz entegrasyon

## Gereksinimler {#requirements}
Bu entegrasyon, barındırma yaptığınız yer WP Engine olup olmadığını otomatik olarak algılar ve yerleşik WP Engine API'sini kullanır. WP Engine eklentisi etkin ve düzgün yapılandırılmışsa ek bir yapılandırmaya gerek yoktur.

Ancak, entegrasyonu manuel olarak yapılandırmanız gerekirse, bu sabitlerden birini `wp-config.php` dosyanızda tanımlayabilirsiniz:

```php
define('WPE_APIKEY', 'your_api_key'); // Tercih edilen yöntem
// VEYA
define('WPE_API', 'your_api_key'); // Alternatif yöntem
```

## Kurulum Talimatları {#setup-instructions}

### 1. WP Engine Eklentisini Kontrol Edin {#1-verify-wp-engine-plugin}

WP Engine üzerinde barındırma yapıyorsanız, WP Engine eklentisi zaten yüklü ve etkin olmalıdır. Aşağıdakileri kontrol edin:

1. WP Engine eklentisi etkin olmalı
2. `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` dosyası mevcut olmalı

### 2. Entegrasyonu Etkinleştirin {#2-enable-the-integration}

1. WordPress yöneticinizde, Ultimate Multisite > Ayarlar'a gidin
2. "Alan Adı Eşleme" sekmesine gidin
3. "Host Entegrasyonları" bölümüne kadar aşağı kaydırın
4. WP Engine entegrasyonunu etkinleştirin
5. "Değişiklikleri Kaydet" butonuna tıklayın

## Nasıl Çalışır {#how-it-works}

### Alan Adı Senkronizasyonu {#domain-syncing}

Bir alan adı Ultimate Multisite'ta eşlendiğinde:

1. Entegrasyon, alan adını WP Engine'a eklemek için WP Engine API'sini kullanır
2. WP Engine, alan adı yapılandırmasını ve SSL sertifikası düzenlemesini yapar
3. Bir alan adı eşlemesi kaldırıldığında, entegrasyon bu alan adını WP Engine'dan kaldıracaktır

### Alt Alan Adı Desteği {#subdomain-support}

Alt alan adı (subdomain) multisite kurulumları için:

1. Yeni bir site oluşturulduğunda, entegrasyon her alt alan adını WP Engine'a ekler
2. WP Engine, alt alan adı yapılandırmasını yönetir
3. Bir site silindiğinde, entegrasyon alt alan adını WP Engine'dan kaldıracaktır

## Önemli Notlar {#important-notes}

### Wildcard Alan Adları {#wildcard-domains}
Alt alan adı multisite kurulumları için, bir wildcard alan adı yapılandırması talep etmek üzere WP Engine desteği ile iletişime geçmeniz önerilir. Bu, her bir alt alan adı ayrı ayrı eklenmesine gerek kalmadan tüm alt alan adlarının otomatik olarak çalışmasını sağlar.

### SSL Sertifikaları {#ssl-certificates}
WP Engine, bu entegrasyon yoluyla eklenen tüm alan adları için SSL sertifikası düzenleme ve yenileme işlemlerini otomatik olarak yapar. Ek bir yapılandırmaya gerek yoktur.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}
- WP Engine eklentisinin etkin ve düzgün yapılandırıldığından emin olun
- API anahtarını manuel olarak tanımladıysanız, doğru olduğundan emin olun
- API ile ilgili sorun yaşıyorsanız WP Engine desteği ile iletişime geçin

### Alan Adı Eklenmedi {#domain-not-added}
- Herhangi bir hata mesajı için Ultimate Multisite günlüklerini kontrol edin
- Alan adının zaten WP Engine'a eklenmediğinden emin olun
- WP Engine planınızın eklediğiniz alan adı sayısını desteklediğinden emin olun

### Alt Alan Adı Sorunları {#subdomain-issues}
- Alt alan adları çalışmıyorsa, bir wildcard alan adı yapılandırması talep etmek için WP Engine desteği ile iletişime geçin
- Ana alan adı ve alt alan adları için DNS ayarlarınızın doğru yapılandırıldığından emin olun
