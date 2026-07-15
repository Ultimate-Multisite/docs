---
title: Developer Documentation
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Geliştirici Dokümantasyonu

Bu rehber, geliştiricilerin Ultimate Multisite ile entegrasyon kurması, eklentiler geliştirmesi veya addon'lar oluşturması için gereken her şeyi sunar. Ultimate Multisite, bir WordPress Multisite ağını bir Web Sitesi Olarak Hizmet (WaaS) platformuna dönüştürür.

## Neler Mevcut {#whats-available}

- **[REST API](./rest-api/overview)** — Tüm varlıklar (müşteriler, siteler, üyelikler, ödemeler, ürünler, alan adları) için API anahtarı kimlik doğrulaması ile tam CRUD işlemleri
- **[Hooks Referansı](./hooks/guide)** — Yaşam döngüsü olayları ve özelleştirme için 200'den fazla action hook ve 280'den fazla filter hook
- **[Entegrasyon Rehberi](./integration-guide/)** — CRM entegrasyonu, analiz, özel ödeme ağ geçitleri ve webhooks için örnekler
- **[Kod Örnekleri](./code-examples/)** — Dinamik fiyatlandırma, site sağlama (provisioning), özel kısıtlamalar ve çoklu ağ geçidi işleme için gelişmiş kalıplar
- **[Addon Geliştirme](./addon-development/getting-started)** — Addon eklentileri oluşturmak için yapılandırılmış bir çerçeve

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
Composer paketi, v2.6.1'de `devstone/ultimate-multisite` adından `ultimate-multisite/ultimate-multisite` olarak yeniden adlandırılmıştır. Eğer `composer.json` dosyanız eski vendor adını referans alıyorsa, require girdisini güncelleyin ve `composer update` komutunu çalıştırın.
:::

Kurulumdan sonra, eklentiyi Ağ Yöneticisi'nden (Network Admin) etkinleştirin:

```bash
wp plugin activate ultimate-multisite --network
```

Veya, eklentiyi Bedrock'ın autoloader'ı aracılığıyla bir must-use eklenti olarak yüklüyorsanız, aktivasyon korumasını atlamak için `wp_ultimo_skip_network_active_check` filtresini kullanın:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Hızlı Başlangıç {#quick-start}

### REST API Kullanımı {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Olaylara Hook Yapma {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // Yeni müşteri kaydına tepki ver
});
```

### Bir Addon Oluşturma {#build-an-addon}

```bash
# Şablondan addon iskeletini oluştur
bash create-addon.sh
```

Detaylı dokümantasyon ve örnekler için her bölüme bakınız.
