---
title: Geliştirici Dokümantasyonu
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Geliştirici Dokümantasyonu {#developer-documentation}

Bu rehber, geliştiricilere Ultimate Multisite ile entegre olmak, onu genişletmek veya eklentiler geliştirmek için gereken her şeyi sağlamaktadır. Ultimate Multisite, bir WordPress Multisite ağını bir Web Sitesi Olarak Hizmet (WaaS) platformuna dönüştürür.

## Neler Mevcut {#whats-available}

- **[REST API](./rest-api/overview)** — Tüm varlıklar (müşteriler, siteler, üyelikler, ödemeler, ürünler, alan adları) için API anahtarı kimlik doğrulaması ile tam CRUD işlemleri
- **[Hooks Reference](./hooks/guide)** — Yaşam döngüsü olayları ve özelleştirme için 200'den fazla aksiyon hook'u ve 280'den fazla filtre hook'u
- **[Integration Guide](./integration-guide/)** — CRM entegrasyonu, analiz, özel ödeme ağ geçitleri ve web kancaları (webhooks) için örnekler
- **[Code Examples](./code-examples/)** — Dinamik fiyatlandırma, site sağlama (site provisioning), özel sınırlamalar ve çoklu ağ geçidi işleme için gelişmiş kalıplar
- **[Addon Development](./addon-development/getting-started)** — Eklenti eklentileri oluşturmak için yapılandırılmış bir çerçeve

## Gereksinimler {#requirements}

- WordPress Multisite kurulumu
- PHP 7.4 veya üzeri
- Ultimate Multisite eklentisinin etkinleştirilmiş olması

## Composer / Bedrock Kurulumu {#composer--bedrock-installation}

Ultimate Multisite, [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) adresinde `ultimate-multisite/ultimate-multisite` olarak mevcuttur. Bu, [Bedrock](https://roots.io/bedrock/)-tabanlı WordPress kurulumları ve diğer Composer tarafından yönetilen ortamlar için önerilen kurulum yöntemidir.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Yenilenen paket (v2.6.1+)
Composer paketi, v2.6.1 sürümünde `devstone/ultimate-multisite` adından `ultimate-multisite/ultimate-multisite` olarak yeniden adlandırılmıştır. Eğer `composer.json` dosyanız eski vendor adını referans alıyorsa, require girişini güncelleyin ve `composer update` komutunu çalıştırın.
:::

Kurulumdan sonra, eklentiyi Ağ Yöneticisi'nden (Network Admin) ağ düzeyinde etkinleştirin:

```bash
wp plugin activate ultimate-multisite --network
```

Veya, eklentiyi Bedrock'ın autoloader'ı aracılığıyla zorunlu bir eklenti olarak yüklüyorsanız, etkinleştirme korumasını atlamak için `wp_ultimo_skip_network_active_check` filtresini kullanın:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Hızlı Başlangıç {#quick-start}

### REST API Kullanımı {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Olaylara Hook Olma {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // Yeni müşteri kaydına tepki verin
});
```

### Bir Eklenti Oluşturma {#build-an-addon}

```bash
# Şablondan eklenti iskeletini oluşturun
bash create-addon.sh
```

Detaylı dokümantasyon ve örnekler için her bölüme göz atın.
