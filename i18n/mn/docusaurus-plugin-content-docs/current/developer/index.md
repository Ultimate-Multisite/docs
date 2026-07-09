---
title: Хөгжүүлэгчийн баримт бичиг
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Хөгжүүлэгчийн баримтжуулалт

Энэхүү гарын авлага нь Ultimate Multisite-тэй нэгтгэх, өргөтгөх, эсвэл түүнд зориулсан addon хөгжүүлэхэд шаардлагатай бүхнийг хөгжүүлэгчдэд өгнө. Ultimate Multisite нь WordPress Multisite сүлжээг Website-as-a-Service (WaaS) платформ болгон хувиргадаг.

## Юу боломжтой вэ

- **[REST API](./rest-api/overview)** — API key баталгаажуулалттайгаар бүх entity-д (үйлчлүүлэгчид, сайтууд, гишүүнчлэлүүд, төлбөрүүд, бүтээгдэхүүнүүд, домэйнүүд) зориулсан бүрэн CRUD үйлдлүүд
- **[Hooks лавлах](./hooks/guide)** — Амьдралын мөчлөгийн үйл явдлууд болон өөрчлөн тохируулахад зориулсан 200+ action hooks ба 280+ filter hooks
- **[Нэгтгэлийн гарын авлага](./integration-guide/)** — CRM нэгтгэл, аналитик, custom gateways, webhooks-д зориулсан жишээнүүд
- **[Кодын жишээнүүд](./code-examples/)** — Динамик үнэ тогтоолт, сайт үүсгэн бэлтгэх, custom хязгаарлалтууд, олон-gateway боловсруулалтад зориулсан ахисан хэв загварууд
- **[Addon хөгжүүлэлт](./addon-development/getting-started)** — Addon plugin-ууд бүтээхэд зориулсан бүтэцлэгдсэн framework

## Шаардлагууд

- WordPress Multisite суулгац
- PHP 7.4 эсвэл түүнээс дээш
- Ultimate Multisite plugin идэвхжүүлсэн байх

## Composer / Bedrock суулгалт

Ultimate Multisite нь [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) дээр `ultimate-multisite/ultimate-multisite` нэрээр боломжтой. Энэ нь [Bedrock](https://roots.io/bedrock/)-д суурилсан WordPress тохиргоонууд болон Composer-оор удирдагддаг бусад орчинд санал болгож буй суулгах арга юм.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Багцын нэр өөрчлөгдсөн (v2.6.1+)
Composer багцын нэр v2.6.1-д `devstone/ultimate-multisite`-ээс `ultimate-multisite/ultimate-multisite` болгон өөрчлөгдсөн. Хэрэв таны `composer.json` хуучин vendor нэрийг зааж байгаа бол require бичилтийг шинэчлээд `composer update` ажиллуулна уу.
:::

Суулгасны дараа Network Admin-аас plugin-ыг сүлжээнд идэвхжүүлнэ үү:

```bash
wp plugin activate ultimate-multisite --network
```

Эсвэл, хэрэв та Bedrock-ийн autoloader-оор plugin-ыг must-use plugin байдлаар ачаалж байгаа бол идэвхжүүлэлтийн хамгаалалтыг алгасахын тулд `wp_ultimo_skip_network_active_check` filter-ийг ашиглана уу:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Шуурхай эхлэл

### REST API ашиглах

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Үйл явдлуудад hook хийх

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Addon бүтээх

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Дэлгэрэнгүй баримтжуулалт болон жишээнүүдийг хэсэг бүрээс үзнэ үү.
