---
title: ส่วนเสริม Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 ได้เพิ่มตัวโหลดไฟล์ sunrise สำหรับส่วนเสริม (add-ons) และการผสานรวมแบบกำหนดเอง (custom MU-plugin integrations) ที่จำเป็นต้องทำงานในช่วงเริ่มต้นระบบ (bootstrapping) ของ WordPress โดยไม่จำเป็นต้องแก้ไขไฟล์ `wp-content/sunrise.php` ที่ถูกสร้างขึ้นมา

## เมื่อไหร่ที่ควรใช้ {#when-to-use-it}

ให้ใช้ sunrise extension เมื่อการผสานรวมของคุณจำเป็นต้องทำงานก่อนที่ปลั๊กอินทั่วไปจะถูกโหลด เช่น การกำหนดเส้นทางโดเมนแบบกำหนดเอง (custom domain routing), การจัดการคำขอเฉพาะโฮสต์ (host-specific request handling), หรือการปรับปรุงการเริ่มต้นเครือข่ายในช่วงต้น (early network bootstrap adjustments)

สำหรับการผสานรวมทั่วไป ควรใช้ปลั๊กอิน WordPress ปกติ, MU-plugins, และ hooks ของ Ultimate Multisite ที่มีการบันทึกไว้ โค้ด Sunrise จะทำงานตั้งแต่ช่วงแรกมาก ดังนั้นจึงควรจะสั้น กระชับ ปลอดภัย และไม่พึ่งพา dependency อื่นๆ

## รูปแบบการตั้งชื่อไฟล์ {#file-naming-convention}

สร้างไฟล์ PHP ชื่อ `sunrise.php` ในไดเรกทอรีของส่วนเสริม (addon directory) ที่ชื่อขึ้นต้นด้วย `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

ตัวโหลดจะสแกนไดเรกทอรี plugins เพื่อหาแพทเทิร์นนี้:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

ไฟล์ที่ตรงกันจะถูกโหลดตามลำดับตัวอักษรของพาธส่วนเสริม

## ตำแหน่งที่ควรวางไฟล์ {#where-to-place-the-file}

ให้วางไฟล์ในไดเรกทอรีราก (root directory) ของส่วนเสริมที่เป็นเจ้าของพฤติกรรม sunrise นั้นๆ:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

การสแกนจะอ้างอิงจาก `WP_CONTENT_DIR` ไม่ใช่ค่าปัจจุบันของ `WP_PLUGIN_DIR` วิธีนี้ช่วยให้การค้นหาคงที่ แม้ว่าการทำงานแบบ multi-tenancy หรือโค้ด bootstrap ช่วงต้นอื่นๆ จะมีการเปลี่ยนแปลงค่าคงที่ของไดเรกทอรีปลั๊กอินในช่วง sunrise

ห้ามแก้ไขไฟล์ `wp-content/sunrise.php` ที่ถูกสร้างขึ้นมาโดยตรง ตัวโหลดนี้ช่วยให้โค้ดที่กำหนดเองสามารถขยายพฤติกรรม sunrise ได้โดยไม่ต้องแตกโค้ด (forking) ไฟล์ sunrise หลักที่ Ultimate Multisite ติดตั้งและอัปเดต

## Hooks และ filters ที่ใช้งานได้ {#hooks-and-filters-available}

ไฟล์ sunrise ของส่วนเสริมจะทำงานหลังจากที่ Ultimate Multisite ทำการแมปโดเมนเสร็จสิ้น และก่อนที่ WordPress จะเรียกใช้ `ms_loaded` ณ จุดนี้ ไฟล์ sunrise สามารถ:

- อ่านหรือเขียนทับค่า `$current_site` และ `$current_blog`;
- เข้าถึง `$wpdb` หลังจากที่การกำหนดค่าฐานข้อมูลถูกโหลดแล้ว;
- กำหนดค่าคงที่สำหรับช่วง sunrise เช่น `BLOG_ID_CURRENT_SITE` เมื่อจำเป็น;
- อ่านสถานะ helper ของ sunrise ของ Ultimate Multisite รวมถึงสถานะการกำหนดเส้นทางที่ใช้โดยการผสานรวม multi-tenancy

Ultimate Multisite จะเรียกใช้ `wu_sunrise_loaded` หลังจากที่ตัวโหลด sunrise ของมันทำงานเสร็จสิ้น ให้ใช้ action นี้สำหรับโค้ดที่ควรทำงานหลังจากที่การ bootstrap sunrise เสร็จสมบูรณ์ แต่ยังคงอยู่ในวงจรชีวิตของ sunrise

ให้เรียกใช้เฉพาะฟังก์ชันที่ถูกโหลดแล้วในช่วง sunrise เท่านั้น หลีกเลี่ยงงานที่เกี่ยวข้องกับฐานข้อมูลหนักๆ, การเรนเดอร์เทมเพลต, การร้องขอ HTTP, และโค้ดที่สันนิษฐานว่าลำดับการโหลดปลั๊กอินปกติได้เสร็จสมบูรณ์แล้ว

## ตัวอย่างแบบง่ายที่สุด {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

หลังจากติดตั้งไฟล์แล้ว ให้ลองโหลดโดเมนที่ถูกแมป (mapped domain) และ URL ของ main-site ที่ไม่ได้ถูกแมป เพื่อยืนยันว่าทั้งสองเส้นทางยังคง bootstrap ได้อย่างถูกต้อง
