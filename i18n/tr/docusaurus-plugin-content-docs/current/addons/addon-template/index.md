---
title: Eklenti Şablonu
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Eklenti Şablonu {#addon-template}

{{ADDON_DESCRIPTION}}

## Gereksinimler {#requirements}

- WordPress 5.3 veya üzeri
- PHP 7.4 veya üzeri
- Multisite Ultimate eklentisi (aktif)

## Kurulum {#installation}

1. Eklenti dosyalarını `/wp-content/plugins/` dizininize yükleyin.
2. WordPress'te 'Eklentiler' menüsünden eklentiyi etkinleştirin.
3. Eklenti ayarlarını ağ yöneticisinden (network admin) yapılandırın.

## Geliştirme {#development}

### Kurulum {#setup}

```bash
# Bağımlılıkları kur
composer install
npm install

# Testleri çalıştır
npm run test

# Kod standartları kontrollerini çalıştır
vendor/bin/phpcs
vendor/bin/phpstan

# Kod stil sorunlarını düzelt
vendor/bin/phpcbf

# Üretim için derle
npm run build
```

### Proje Yapısı {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP sınıfları ve dahil edilen dosyalar
│   ├── class-multisite-ultimate-updater.php  # Güncelleme işleyicisi
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Ana işlevsellik
├── tests/                        # Birim testleri
│   ├── bootstrap.php            # Test başlatma (bootstrap)
│   ├── class-*-base.php         # Temel test sınıfı
│   └── class-*-test.php         # Test senaryoları
├── views/                       # Şablon dosyaları
├── assets/                      # Statik varlıklar
│   ├── css/                     # Stil sayfaları
│   ├── js/                      # JavaScript dosyaları
│   └── images/                  # Görseller
├── lang/                        # Dil dosyaları
├── composer.json                # PHP bağımlılıkları
├── package.json                 # Node.js bağımlılıkları
├── phpunit.xml.dist             # PHPUnit yapılandırması
├── .phpcs.xml.dist              # Kod standartları yapılandırması
└── rector.php                   # Kod modernizasyonu kuralları
```

### Test Etme {#testing}

Eklenti, kapsamlı bir test çatısı (framework) içerir:

- **Birim Testleri (Unit Tests)**: WordPress test paketi ile PHPUnit tabanlı testler
- **Temel Test Sınıfı (Base Test Class)**: Ortak test senaryoları için yardımcı metotlar sağlar
- **Test Kapsamı (Test Coverage)**: Kod kapsamını izlemek üzere yapılandırılmıştır
- **Multisite Test Etme**: Testler çok siteli (multisite) ortamda çalışır

### Kod Standartları {#code-standards}

- **WordPress Kod Standartları**: PHPCS aracılığıyla zorunlu kılınır
- **PHP 7.4+ Uyumluluğu**: Modern PHP özellikleri desteklenir
- **Statik Analiz**: Tip kontrolü için PHPStan entegrasyonu
- **Kod Modernizasyonu**: PHP yükseltmeleri için Rector kuralları

### Derleme Sistemi (Build System) {#build-system}

- **Varlık İşleme (Asset Processing)**: CSS/JS dosyaları için küçültme (Minification)
- **Çeviri**: POT dosyası oluşturma
- **Paketleme (Packaging)**: Dağıtım için arşiv oluşturma
- **Geliştirme Modu (Development Mode)**: Hata ayıklama için küçültülmemiş varlıklar

## Yapılandırma {#configuration}

Eklenti, ağ yöneticisi arayüzü üzerinden erişilebilen çeşitli yapılandırma seçeneklerini destekler.

## Hook'lar ve Filtreler {#hooks-and-filters}

### Aksiyonlar (Actions) {#actions}

- `ultimate-multisite-addon-template_init` - Eklenti başlatıldıktan sonra tetiklenir
- `ultimate-multisite-addon-template_loaded` - Tüm eklenti dosyaları yüklendikten sonra tetiklenir

### Filtreler (Filters) {#filters}

- `ultimate-multisite-addon-template_settings` - Eklenti ayarlarını değiştirir
- `ultimate-multisite-addon-template_enabled` - Eklentinin etkin/devre dışı durumunu geçersiz kılar

## Lisans {#license}

Bu eklenti, GPL v3 veya daha yeni bir sürüm altında lisanslanmıştır.

## Destek {#support}

Destek ve dokümantasyon için [MultisiteUltimate.com](https://multisiteultimate.com) adresini ziyaret edin.
## Değişiklik Geçmişi (Changelog) {#changelog}

- Sürüm 1.0.1 (2025-09-28): ön eki ultimate-multisite olarak yeniden adlandırıldı; metin alanı güncellendi; sürüm artışı yapıldı.


- Sürüm (2025-09-28): ön eki ultimate-multisite olarak yeniden adlandırıldı; metin alanı güncellendi; sürüm artışı yapıldı.
