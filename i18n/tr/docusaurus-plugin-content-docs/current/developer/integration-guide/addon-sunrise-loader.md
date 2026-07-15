---
title: Eklenti Sunrise Dosya Yükleyici
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise Dosya Yükleyici

Ultimate Multisite 2.8.0, add-onlar ve özel MU-plugin entegrasyonları için bir sunrise uzantı yükleyicisi ekler. Bu yükleyici, `wp-content/sunrise.php` dosyasını düzenlemeden, WordPress'in sunrise başlangıç (bootstrapping) aşamasında çalışması gereken entegrasyonlar için kullanılır.

## Ne zaman kullanılır {#when-to-use-it}

Entegrasyonunuzun, özel alan adı yönlendirmesi, ana bilgisayara özgü istek işleme veya erken ağ başlangıç ayarlamaları gibi işlemleri yapması gerektiği durumlarda bir sunrise uzantısı kullanın.

Normal entegrasyonlar için ise, standart WordPress eklentilerini, MU-plugin'leri ve belgelenmiş Ultimate Multisite hook'larını tercih edin. Sunrise kodu çok erken çalıştığı için, küçük, savunmacı ve bağımlılıktan arındırılmış kalmalıdır.

## Dosya adlandırma kuralı {#file-naming-convention}

`ultimate-multisite-` ile başlayan bir add-on dizininde `sunrise.php` adında bir PHP dosyası oluşturun:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Yükleyici, bu desene sahip dosyaları eklentiler dizininde tarar:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Eşleşen dosyalar, add-on yoluna göre alfabetik sırada yüklenir.

## Dosyayı nereye koymalı {#where-to-place-the-file}

Dosyayı, sunrise davranışına sahip olan add-on'ın kök dizinine yerleştirin:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Tarama, mevcut `WP_PLUGIN_DIR` değerine göre değil, `WP_CONTENT_DIR`'e göre çözümlenir. Bu, çok kiracılılık (multi-tenancy) veya diğer erken başlangıç kodlarının sunrise sırasında eklenti dizini sabitlerini değiştirmesi durumunda keşfin stabil kalmasını sağlar.

Lütfen oluşturulan `wp-content/sunrise.php` dosyasını doğrudan düzenlemeyin. Yükleyici, Ultimate Multisite'ın kurup güncellediği çekirdek sunrise dosyasını çatallamadan (forking) özel kodun sunrise davranışını genişletmesine olanak tanır.

## Kullanılabilir Hook'lar ve Filtreler {#hooks-and-filters-available}

Addon sunrise dosyaları, Ultimate Multisite alan adı eşlemesi yüklendikten ve WordPress `ms_loaded` olayını tetiklemeden sonra çalışır. Bu noktada bir sunrise dosyası şunları yapabilir:

- `$current_site` ve `$current_blog` değişkenlerini okuyabilir veya geçersiz kılabilir;
- Veritabanı yapılandırması yüklendikten sonra `$wpdb`'ye erişebilir;
- İhtiyaç duyulduğunda `BLOG_ID_CURRENT_SITE` gibi sunrise zamanı sabitlerini tanımlayabilir;
- Çok kiracılı entegrasyonları tarafından kullanılan yönlendirme durumu dahil olmak üzere Ultimate Multisite sunrise yardımcı durumunu okuyabilir.

Ultimate Multisite, sunrise yükleyicisi bittikten sonra `wu_sunrise_loaded` olayını tetikler. Bu eylemi, sunrise başlangıcı tamamlandıktan sonra çalışması gereken ancak yine de sunrise yaşam döngüsüne ait olan kodlar için kullanın.

Yalnızca sunrise aşamasında zaten yüklenmiş olan fonksiyonları çağırın. Veritabanı yoğun işler, şablon oluşturma, HTTP istekleri ve normal eklenti yükleme sırasının tamamlandığını varsayan kodlardan kaçının.

## Minimal örnek {#minimal-example}

```php
<?php
/**
 * Özel bir ana bilgisayar entegrasyonu için Sunrise uzantısı.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // ms_loaded'dan önce erken yönlendirmeyi veya sabitleri ayarlayın.
}
```

Dosyayı dağıttıktan sonra, her iki yolun da doğru şekilde başlangıç yapıp yapmadığını doğrulamak için eşlenmiş bir alan adı ve eşlenmemiş bir ana site URL'si yükleyin.
