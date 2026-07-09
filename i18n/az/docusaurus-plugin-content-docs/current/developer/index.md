---
title: Developer Documentation
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Developer Dokumentasiyası {#developer-documentation}

Bu bələdçi developerlərə Ultimate Multisite ilə inteqrasiya etmək, genişləndirmək və ya üçün addonlar inkişaf etdirmək üçün lazım olan hər şeyi təqdim edir. Ultimate Multisite bir WordPress Multisite şəbəkəsini Website-as-a-Service (WaaS) platformasına çevirir.

## Nə mövcuddur {#whats-available}

- **[REST API](./rest-api/overview)** — Bütün varlıqlar (müştərilər, saytlar, üzvlüyü, ödənişlər, məhsullar, domenlər) üçün API açarı autentifikasiyası ilə tam CRUD əməliyyatları
- **[Hooks Reference](./hooks/guide)** — Yaşam dövrü hadisələri və fərdiləşdirmə üçün 200+ action hook və 280+ filter hook
- **[Integration Guide](./integration-guide/)** — CRM inteqrasiyası, analitika, fərdiləşdirilmiş gatewaylər və webhooks üçün nümunələr
- **[Code Examples](./code-examples/)** — Dinamik qiymətləndirmə, sayt təminatı, fərdiləşdirilmiş məhdudiyyətlər və çoxsaylı gateway emalı üçün qabaqcıl nümunələr
- **[Addon Development](./addon-development/getting-started)** — Addon pluginlər qurmaq üçün strukturlaşdırılmış çərçivə

## Tələblər {#requirements}

- WordPress Multisite quraşdırılması
- PHP 7.4 və ya yuxarı
- Ultimate Multisite plugin-inin aktivləşdirilməsi

## Composer / Bedrock Quraşdırması {#composer--bedrock-installation}

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) saytında `ultimate-multisite/ultimate-multisite` kimi mövcuddur. Bu, [Bedrock](https://roots.io/bedrock/)-ə əsaslanan WordPress quruluşları və digər Composer-idarə olunan mühitlər üçün tövsiyə olunan quraşdırma metodudur.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Adı dəyişdirilmiş paket (v2.6.1+)
Composer paketi v2.6.1-də `devstone/ultimate-multisite` adından `ultimate-multisite/ultimate-multisite` adına dəyişdirilmişdir. Əgər `composer.json` faylınız köhnə vendor adını göstərirsə, `require` girişini yeniləyin və `composer update` əmrini işlədin.
:::

Quraşdırmadan sonra, plugin-i Network Admin-dən aktivləşdirin:

```bash
wp plugin activate ultimate-multisite --network
```

Və ya, əgər plugin-i Bedrock-un autoloader-i vasitəsilə must-use plugin kimi yükləyirsinizsə, aktivləşdirmə qoruyucu mexanizmini atlamaq üçün `wp_ultimo_skip_network_active_check` filter-indən istifadə edin:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Tez Başlanğıc {#quick-start}

### REST API-dən istifadə edin {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hadisələrə Hook edin {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // Yeni müştəri qeydiyyatlarına reaksiya verin
});
```

### Addon qurmaq {#build-an-addon}

```bash
# Şablonundan addon çərçivəsini yaradır
bash create-addon.sh
```

Daha ətraflı dokumentasiya və nümunələr üçün hər bir bölməyə baxın.
