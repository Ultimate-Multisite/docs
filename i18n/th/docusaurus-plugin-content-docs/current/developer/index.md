---
title: เอกสารสำหรับนักพัฒนา
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# เอกสารสำหรับนักพัฒนา {#developer-documentation}

คู่มือนี้รวบรวมทุกสิ่งที่นักพัฒนาต้องรู้สำหรับการเชื่อมต่อ (integrate), การขยาย (extend), หรือการพัฒนา addon สำหรับ Ultimate Multisite Ultimate Multisite จะเปลี่ยนเครือข่าย WordPress Multisite ให้กลายเป็นแพลตฟอร์มแบบ Website-as-a-Service (WaaS)

## สิ่งที่มีให้ใช้งาน {#whats-available}

- **[REST API](./rest-api/overview)** — รองรับการดำเนินการ CRUD (Create, Read, Update, Delete) อย่างสมบูรณ์สำหรับทุกเอนทิตี้ (เช่น ลูกค้า, ไซต์, สมาชิก, การชำระเงิน, สินค้า, โดเมน) พร้อมการยืนยันตัวตนด้วย API key
- **[Hooks Reference](./hooks/guide)** — action hooks มากกว่า 200 ตัว และ filter hooks มากกว่า 280 ตัว สำหรับเหตุการณ์วงจรชีวิต (lifecycle events) และการปรับแต่ง
- **[Integration Guide](./integration-guide/)** — ตัวอย่างการเชื่อมต่อกับ CRM, ระบบวิเคราะห์ (analytics), payment gateway แบบกำหนดเอง, และ webhooks
- **[Code Examples](./code-examples/)** — รูปแบบขั้นสูงสำหรับการกำหนดราคาแบบไดนามิก, การจัดเตรียมไซต์ (site provisioning), ข้อจำกัดแบบกำหนดเอง, และการประมวลผลหลาย gateway
- **[Addon Development](./addon-development/getting-started)** — โครงสร้างเฟรมเวิร์กสำหรับการสร้างปลั๊กอิน addon

## ข้อกำหนดเบื้องต้น {#requirements}

- การติดตั้ง WordPress Multisite
- PHP 7.4 หรือสูงกว่า
- ต้องเปิดใช้งานปลั๊กอิน Ultimate Multisite

## การติดตั้งด้วย Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite สามารถติดตั้งได้ที่ [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) ในชื่อ `ultimate-multisite/ultimate-multisite` นี่คือวิธีการติดตั้งที่แนะนำสำหรับระบบ WordPress ที่ใช้ [Bedrock](https://roots.io/bedrock/)-based และสภาพแวดล้อมอื่น ๆ ที่จัดการด้วย Composer

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
แพ็กเกจ Composer ได้เปลี่ยนชื่อจาก `devstone/ultimate-multisite` เป็น `ultimate-multisite/ultimate-multisite` ในเวอร์ชัน v2.6.1 หาก `composer.json` ของคุณอ้างถึง vendor name เก่า ให้ทำการอัปเดตรายการ require และรัน `composer update`
:::

หลังจากติดตั้งแล้ว ให้เปิดใช้งานปลั๊กอินในระดับ Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

หรือหากคุณกำลังโหลดปลั๊กอินเป็น must-use plugin ผ่าน autoloader ของ Bedrock ให้ใช้ filter `wp_ultimo_skip_network_active_check` เพื่อข้ามการตรวจสอบการเปิดใช้งาน:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## เริ่มต้นใช้งานอย่างรวดเร็ว {#quick-start}

### การใช้ REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### การ Hook เข้ากับ Event {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // ตอบสนองต่อการสมัครสมาชิกของลูกค้าใหม่
});
```

### การสร้าง Addon {#build-an-addon}

```bash
# สร้างโครงร่าง addon จากเทมเพลต
bash create-addon.sh
```

ดูในแต่ละส่วนเพื่อดูเอกสารและตัวอย่างโดยละเอียด
