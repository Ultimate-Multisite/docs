---
title: Closte Integrasi
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Entegrasi

## Genel Bakış
Closte, Google Cloud altyapısı üzerinde oluşturulmuş yönetilen WordPress barındırma platformudur. Bu entegrasyon, Ultimate Multisite ile Closte arasında otomatik alan adı senkronizasyonu ve SSL sertifikası yönetimini sağlar.

## Özellikler
- Otomatik alan adı senkronizasyonu
- SSL sertifikası yönetimi
- Wildcard alan adı desteği
- Closte üzerinde çalışıyorsanız herhangi bir yapılandırma gerekmez

## Gereksinimler
Closte kullanıyorsanız, `wp-config.php` dosyanızda aşağıdaki sabitin tanımlanması gerekir:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Bu sabit genellikle Closte üzerinde barındırıyorsanız zaten tanımlıdır.

## Kurulum Talimatları

### 1. Closte API Anahtarınızı Doğrulayın

Closte üzerinde barındırıyorsanız, `CLOSTE_CLIENT_API_KEY` sabitin `wp-config.php` dosyanızda zaten tanımlanmış olması gerekir. Bunu `wp-config.php` dosyanızı kontrol ederek doğrulayabilirsiniz.

### 2. Entegrasyonu Etkinleştirin

1. WordPress yönetim panelinde, Ultimate Multisite > Ayarlar'a gidin
2. "Domain Mapping" (Alan Adı Eşleştirmesi) sekmesine gidin
3. Aşağı kaydırarak "Host Integrations" (Barındırma Entegrasyonları) kısmına gelin
4. Closte entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır

Ultimate Multisite'ta bir alan adı eşleştirildiğinde:

1. Entegrasyon, alanı uygulamanıza eklemek için Closte API'sine bir istek gönderir
2. Closte otomatik olarak SSL sertifikası sağlama işlemini yönetir
3. Bir alan adı eşleştirmesi kaldırıldığında, entegrasyon alanı Closte'dan kaldırır

Entegrasyon ayrıca Ultimate Multisite'taki DNS kontrol aralığı ayarıyla da çalışır; bu sayede sistemin DNS yayılımını ve SSL sertifikası düzenlenmesini ne sıklıkta kontrol edeceğinizi yapılandırabilirsiniz.

## Alan Adı Kaydı Oluşturma

Bu integrasi site döredilende ýa-da ukulanda, domen kaydyny awtomatiki döretmegi üpjün edýär. Bu Closte integrasi üçin has girdeji möhümdir, sebäbi domen kaydyny döretmek Closte API-sini domen we SSL sertifikatyny döretmek üçin işe goýber.

## Sorunlaryny Gözläp Bilmek (Troubleshooting)

### API Bağlanma Masalalary
- Closte API açaryşyzyňyz dogrydyr diýip barlap görüň
- Closte hasabyňyzda zerur resminamalar barada eýe bolmagyny üpjün ediň

### SSL Sertifikatasy Masalalary
- Closte SSL sertifikatlaryny berip bermek bir wagt alsa (adaty 5-10 minut), bu mümkin.
- Domenlerinizin Closte serveri IP adresine dogry ýol berýändigini barlap görüň
- Domeniňiz üçin DNS resminamalaryny barlap görüň, olary dogry görkezilendigini üpjün ediň

### Domen Goşulmady
- Ultimate Multisite loglarynda ähli ýazgylary barlap görüň
- Domen Closte-de hali goşulmadyk diýip barlap görüň
- Domeniňiz DNS resminamalaryny dogry görkezilendigini üpjün ediň

### DNS Barlamak Aralygy (DNS Check Interval)
- SSL sertifikatlaryny berip bermek köp wagt alsa, Domen Mapping settinglerinde DNS barlamak aralygyny düzetmäge mümkinçilik bar.
- Default aralyk 300 sekund (5 minut), ýöne testler dowamynda has çalt barlamak üçin ony 10 sekuntag hem goýdyp bilersiňiz
