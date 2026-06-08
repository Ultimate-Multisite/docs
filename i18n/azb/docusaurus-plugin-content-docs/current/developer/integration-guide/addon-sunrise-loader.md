---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 ek bir sunrise extension loader ekliyor. Bu loader, add-onlar ve özel MU-plugin entegrasyonları için, WordPress'in sunrise bootstrap aşaması sırasında çalışması gereken ancak `wp-content/sunrise.php` dosyasını düzenlemeyi gerektirmeyen bir çözüm sunuyor.

## Ne zaman kullanılır

Bir sunrise extension kullanmanız gereken durumlar, entegrasyonunuzun normal plugin'ler yüklenmeden önce çalışmasını gerektiriyorsa olur. Örneğin, özel domain yönlendirmeleri, host'a özel istek işlemleri veya erken network bootstrap ayarlamaları gibi durumlar.

Normal entegrasyonlar için ise, standart WordPress plugin'lerini, MU-plugin'leri ve belgelenmiş Ultimate Multisite hook'larını kullanmanız daha iyidir. Sunrise kodu çok erken çalıştığı için, küçük, savunmacı ve bağımlılığı olmayan bir yapıda kalmalıdır.

## Dosya adlandırma kuralı

`ultimate-multisite-` ile başlayan bir add-on dizini içine `sunrise.php` adında bir PHP dosyası oluşturun:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Loader, bu desene sahip dosyaları pluginler dizininde tarar:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Eşleşen dosyalar, add-on yoluna göre alfabetik sırayla yüklenir.

## Dosyayı nereye koymalı

Dosyayı, sunrise davranışına sahip olan add-on'un kök dizinine koyun:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Tarama, mevcut `WP_PLUGIN_DIR` değerine göre değil, `WP_CONTENT_DIR`'e göre çözümlenir. Bu, çoklu kiracılık (multi-tenancy) veya diğer erken bootstrap kodlarının sunrise sırasında plugin dizini sabitlerini değiştirmesi durumunda keşfin stabil kalmasını sağlar.

Lütfen oluşturulan `wp-content/sunrise.php` dosyasını doğrudan düzenlemeyin. Loader, Ultimate Multisite'ın kurup güncellediği çekirdek sunrise dosyasını çatallamadan (forking) özel kodun sunrise davranışını genişletmesine izin verir.

## Kullanılabilir Hook'lar ve Filtreler

Addon sunrise dosyaları, Ultimate Multisite domain eşlemesi yüklendikten ve WordPress `ms_loaded` olayını tetiklemeden sonra çalışır. Bu noktada bir sunrise dosyası şunları yapabilir:

- `$current_site` ve `$current_blog` değişkenlerini okuyabilir veya geçersiz kılabilir;
- Veritabanı yapılandırması yüklendikten sonra `$wpdb`'ye erişebilir;
- Gerektiğinde `BLOG_ID_CURRENT_SITE` gibi sunrise zamanı sabitlerini tanımlayabilir;
- Çoklu kiracılık entegrasyonları tarafından kullanılan yönlendirme durumu dahil olmak üzere Ultimate Multisite sunrise helper durumunu okuyabilir.

Ultimate Multisite, sunrise loader'ı bitirdikten sonra `wu_sunrise_loaded` olayını tetikler. Bu eylemi, sunrise bootstrap tamamlandıktan sonra da ait olduğu sunrise yaşam döngüsüne girmesi gereken kodlar için kullanın.

Yalnızca sunrise aşamasında zaten yüklenmiş olan fonksiyonları çağırın. Veritabanı yoğun işler, şablon oluşturma, HTTP istekleri ve normal plugin yükleme sırasının tamamlandığını varsayan kodlardan kaçının.

## Minimal örnek

```php
<?php
/**
 * Özel bir host entegrasyonu için Sunrise extension.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // ms_loaded'dan önce erken yönlendirmeyi veya sabitleri ayarla.
}
```

Dosyayı dağıttıktan sonra, her iki yolun da doğru şekilde bootstrap edildiğini doğrulamak için eşlenmiş bir domain ve eşlenmemiş bir ana site URL'si yükleyin.
