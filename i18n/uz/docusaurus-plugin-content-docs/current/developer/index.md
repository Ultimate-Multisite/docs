---
title: Dasturchi hujjatlari
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dasturchilar hujjatlari

Ushbu qo‘llanma dasturchilarga Ultimate Multisite bilan integratsiya qilish, uni kengaytirish yoki uning uchun addonlar ishlab chiqish uchun kerak bo‘lgan barcha narsani taqdim etadi. Ultimate Multisite WordPress Multisite tarmog‘ini Website-as-a-Service (WaaS) platformasiga aylantiradi.

## Nimalar mavjud

- **[REST API](./rest-api/overview)** — API kalit autentifikatsiyasi bilan barcha obyektlar (mijozlar, saytlar, a’zoliklar, to‘lovlar, mahsulotlar, domenlar) uchun to‘liq CRUD operatsiyalari
- **[Hooklar ma’lumotnomasi](./hooks/guide)** — Hayotiy sikl hodisalari va moslashtirish uchun 200+ action hook va 280+ filter hook
- **[Integratsiya qo‘llanmasi](./integration-guide/)** — CRM integratsiyasi, analitika, maxsus gatewaylar va webhooklar uchun misollar
- **[Kod misollari](./code-examples/)** — Dinamik narxlash, sayt yaratib berish, maxsus cheklovlar va ko‘p gatewayli qayta ishlash uchun ilg‘or andozalar
- **[Addon ishlab chiqish](./addon-development/getting-started)** — Addon pluginlar yaratish uchun tuzilmali framework

## Talablar

- WordPress Multisite o‘rnatilishi
- PHP 7.4 yoki undan yuqori
- Ultimate Multisite plugin faollashtirilgan

## Composer / Bedrock o‘rnatilishi

Ultimate Multisite `ultimate-multisite/ultimate-multisite` sifatida [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) da mavjud. Bu [Bedrock](https://roots.io/bedrock/) asosidagi WordPress sozlamalari va boshqa Composer orqali boshqariladigan muhitlar uchun tavsiya etilgan o‘rnatish usulidir.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Paket nomi o‘zgartirildi (v2.6.1+)
Composer paketi v2.6.1 da `devstone/ultimate-multisite` dan `ultimate-multisite/ultimate-multisite` ga o‘zgartirildi. Agar `composer.json` eski vendor nomiga havola qilsa, require yozuvini yangilang va `composer update` ni ishga tushiring.
:::

O‘rnatilgandan so‘ng, pluginni Network Admin orqali tarmoq bo‘yicha faollashtiring:

```bash
wp plugin activate ultimate-multisite --network
```

Yoki, agar siz pluginni Bedrock autoloaderi orqali majburiy ishlatiladigan plugin sifatida yuklayotgan bo‘lsangiz, faollashtirish himoyasini chetlab o‘tish uchun `wp_ultimo_skip_network_active_check` filteridan foydalaning:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Tez boshlash

### REST API dan foydalaning

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hodisalarga Hook qiling

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Addon yarating

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Batafsil hujjatlar va misollar uchun har bir bo‘limni ko‘ring.
