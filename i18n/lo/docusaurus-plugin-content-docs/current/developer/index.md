---
title: ເອກະສານສຳລັບນັກພັດທະນາ
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# ເອກະສານສຳລັບ Developer

ຄູ່ມືນີ້ໃຫ້ທຸກຢ່າງທີ່ Developer ຕ້ອງການເພື່ອເຊື່ອມຕໍ່, ຂະຫຍາຍ, ຫຼືພັດທະນາ addons ສຳລັບ Ultimate Multisite. Ultimate Multisite ປ່ຽນເຄືອຂ່າຍ WordPress Multisite ໃຫ້ເປັນແພລດຟອມ Website-as-a-Service (WaaS).

## ມີຫຍັງໃຫ້ໃຊ້ {#whats-available}

- **[REST API](./rest-api/overview)** — ການດຳເນີນການ CRUD ຄົບຖ້ວນສຳລັບທຸກເອນທິຕີ (ລູກຄ້າ, ເວັບໄຊ, ສະມາຊິກພາບ, ການຊຳລະເງິນ, ຜະລິດຕະພັນ, ໂດເມນ) ພ້ອມການຢືນຢັນຕົວຕົນດ້ວຍ API key
- **[ອ້າງອີງ Hooks](./hooks/guide)** — action hooks ຫຼາຍກວ່າ 200 ລາຍການ ແລະ filter hooks ຫຼາຍກວ່າ 280 ລາຍການ ສຳລັບເຫດການວົງຈອນຊີວິດ ແລະການປັບແຕ່ງ
- **[ຄູ່ມືການເຊື່ອມຕໍ່](./integration-guide/)** — ຕົວຢ່າງສຳລັບການເຊື່ອມຕໍ່ CRM, analytics, gateways ກຳນົດເອງ, ແລະ webhooks
- **[ຕົວຢ່າງ Code](./code-examples/)** — ຮູບແບບຂັ້ນສູງສຳລັບການຕັ້ງລາຄາແບບໄດນາມິກ, ການຈັດຕັ້ງເວັບໄຊ, ຂໍ້ຈຳກັດກຳນົດເອງ, ແລະການປະມວນຜົນຫຼາຍ gateway
- **[ການພັດທະນາ Addon](./addon-development/getting-started)** — ກອບໂຄງສ້າງສຳລັບສ້າງ addon plugins

## ຂໍ້ກຳນົດ {#requirements}

- ການຕິດຕັ້ງ WordPress Multisite
- PHP 7.4 ຫຼືສູງກວ່າ
- ເປີດໃຊ້ Ultimate Multisite plugin ແລ້ວ

## ການຕິດຕັ້ງ Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite ມີໃຫ້ໃຊ້ໃນ [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) ໃນນາມ `ultimate-multisite/ultimate-multisite`. ນີ້ແມ່ນວິທີການຕິດຕັ້ງທີ່ແນະນຳສຳລັບການຕັ້ງຄ່າ WordPress ທີ່ອີງໃສ່ [Bedrock](https://roots.io/bedrock/) ແລະສະພາບແວດລ້ອມອື່ນໆທີ່ຈັດການດ້ວຍ Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note ປ່ຽນຊື່ package (v2.6.1+)
Composer package ຖືກປ່ຽນຊື່ຈາກ `devstone/ultimate-multisite` ເປັນ `ultimate-multisite/ultimate-multisite` ໃນ v2.6.1. ຖ້າ `composer.json` ຂອງທ່ານອ້າງອີງຊື່ vendor ເກົ່າ, ອັບເດດລາຍການ require ແລະຮັນ `composer update`.
:::

ຫຼັງຈາກຕິດຕັ້ງແລ້ວ, ໃຫ້ network-activate plugin ຈາກ Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

ຫຼື, ຖ້າທ່ານກຳລັງໂຫຼດ plugin ເປັນ must-use plugin ຜ່ານ autoloader ຂອງ Bedrock, ໃຊ້ filter `wp_ultimo_skip_network_active_check` ເພື່ອຂ້າມ activation guard:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## ເລີ່ມຕົ້ນດ່ວນ {#quick-start}

### ໃຊ້ REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### ເຊື່ອມ Hook ເຂົ້າກັບເຫດການ {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### ສ້າງ Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

ເບິ່ງແຕ່ລະພາກສ່ວນສຳລັບເອກະສານລະອຽດ ແລະຕົວຢ່າງ.
