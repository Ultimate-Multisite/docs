---
title: یەکگرتووکردنی Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integration Closte

## Pêşîtiye (Overview) {#overview}
Closte platforma Google Cloud altyapısı üzerinde derine yazılmış bir WordPress barındırma çözümüdür. Bu entegrasyon, Ultimate Multisite ile Closte arasında otomatik alan adı senkronizasyonu ve SSL sertifikası yönetimi sağlar.

## Özellikler (Features) {#features}
- Otomatik alan adı senkronizasyonu
- SSL sertifikası yönetimi
- Wildcard alan adı desteği
- Closte üzerinde çalışıyorsanız herhangi bir yapılandırma gerekmez

## Gereksinimler (Requirements) {#requirements}
Closte kullanıyorsanız, `wp-config.php` dosyanızda aşağıdaki sabitin tanımlanması gerekir:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Bu sabit genellikle Closte üzerinde barındırıyorsanız zaten tanımlıdır.

## Kurulum Talimatları (Setup Instructions) {#setup-instructions}

### 1. Closte API Anahtarınızı Doğrulayın {#1-verify-your-closte-api-key}

Closte üzerinde barındırma yapıyorsanız, `CLOSTE_CLIENT_API_KEY` sabitin `wp-config.php` dosyanızda zaten tanımlı olması gerekir. Bunu `wp-config.php` dosyanızı kontrol ederek doğrulayabilirsiniz.

### 2. Entegrasyonu Etkinleştirin (Enable the Integration) {#2-enable-the-integration}

1. WordPress yönetim panelinizde, Ultimate Multisite > Ayarlar'a gidin
2. "Domain Mapping" sekmesine geçin
3. Aşağı kaydırarak "Host Integrations" kısmına gelin
4. Closte entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır (How It Works) {#how-it-works}

Ultimate Multisite'ta bir alan adı eşleştirildiğinde:

1. Entegrasyon, alanı uygulamanıza eklemek için Closte API'sine bir istek gönderir
2. Closte otomatik olarak SSL sertifikası sağlama işlemini yönetir
3. Bir alan adı eşleştirmesi kaldırıldığında, entegrasyon o alanı Closte'dan kaldırır

Entegrasyon ayrıca Ultimate Multisite'taki DNS kontrol aralığı ayarıyla da çalışır; bu sayede sistemin DNS yayılımını ve SSL sertifikası düzenlenmesini ne sıklıkta kontrol edeceğinizi yapılandırabilirsiniz.

## Alan Adı Kaydı Oluşturma (Domain Record Creation) {#domain-record-creation}

ئەم یەکگرتووەکە دڵنیابوون دەکات کە کاتێک سایتێک دروست دەکرێت یان دووبارە دەکرێت، تۆمارێکی ناو domain (domain record) بە شێوەیەکی ئۆتۆماتیک دروست دەبێت. ئەمە بە تایبەتی گرنگە بۆ یەکگرتووی Closte، چونکە دروستکردنی تۆمارەکە پشکنینی APIی Closte دەستپێدەکات بۆ ئەوەی domain و گوازمەی SSL (SSL certificate) دروست بکات.

## چارەسەرکردنی کێشەکان (Troubleshooting) {#troubleshooting}

### کێشەکانی پەیوەندی بە API {#api-connection-issues}
- دڵنیا بیت کە کلیدی APIی Closte لەسەر ڕاستی دەبێت
- دڵنیا بیت کە هەژمارەکەت لە Closte ئەو ڕێگەپێدانی پێویستەی هەیە

### کێشەکانی گوازمەی SSL (SSL Certificate) {#ssl-certificate-issues}
- Closte شوێن و کاتێک بۆ دروستکردنی گوازمەی SSL دەبێت (بە گشتی ٥ تا ١٠ خولەک).
- دڵنیا بیت کە domainەکان بە شێوەیەکی دروست بۆ پیت ئای پی (IP address)ی خوادەی Closte دەڕوات.
- تۆمارەکانی DNS بۆ domainەکەت چاک بکە بۆ ئەوەی ڕاستەوخۆ ڕێک بخاتون

### domainەکە زیاد نەکراوەتەوە {#domain-not-added}
- لە لاگەکانی Ultimate Multisite بگەڕێ بۆ هەر پەیامێکی هەڵە (error message)
- دڵنیا بیت کە domainەکە پێشتر لە Closte زیاد نییە
- دڵنیا بیت کە تۆمارەکانی DNSی domainەکە بە شێوەیەکی دروست ڕێک بخاتون

### ماوەی پشکنینی DNS (DNS Check Interval) {#dns-check-interval}
- ئەگەر گوازمەی SSL زۆر کات دەبێت بۆ دروستکردن، دەتوانیت ماوەی پشکنینی DNS لە ڕێکخستنی Domain Mapping بگۆڕیت.
- ماوەی پیش‌دۆزراوی (default interval) ٣٠٠ چرکە (٥ خولەک)ە، بەڵام دەتوانیت بە کەمترین ١٠ چرکە بۆ پشکنینی وردتر لە کاتی تاقیکردنەوەکان تنظیم بکەیت.
