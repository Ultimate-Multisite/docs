---
title: แม่แบบส่วนเสริม
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Template

{{ADDON_DESCRIPTION}}

## ข้อกำหนด (Requirements)

- WordPress เวอร์ชัน 5.3 ขึ้นไป
- PHP เวอร์ชัน 7.4 ขึ้นไป
- ปลั๊กอิน Ultimate Multisite (ต้องเปิดใช้งาน)

## การติดตั้ง (Installation)

1. อัปโหลดไฟล์ addon ไปยังไดเรกทอรี `/wp-content/plugins/`
2. เปิดใช้งานปลั๊กอินผ่านเมนู 'Plugins' ใน WordPress
3. ตั้งค่า addon ในส่วนของ Network Admin

## การพัฒนา (Development)

### การตั้งค่า (Setup)

```bash
# Install dependencies
composer install
npm install

# Run tests
npm run test

# Run code standards checks
vendor/bin/phpcs
vendor/bin/phpstan

# Fix code style issues
vendor/bin/phpcbf

# Build for production
npm run build
```

### โครงสร้างโปรเจกต์ (Project Structure)

```
ultimate-multisite-addon-template/
├── inc/                          # PHP classes and includes
│   ├── class-multisite-ultimate-updater.php  # Update handler
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Main functionality
├── tests/                        # Unit tests
│   ├── bootstrap.php            # Test bootstrap
│   ├── class-*-base.php         # Base test class
│   └── class-*-test.php         # Test cases
├── views/                       # Template files
├── assets/                      # Static assets
│   ├── css/                     # Stylesheets
│   ├── js/                      # JavaScript files
│   └── images/                  # Images
├── lang/                        # Language files
├── composer.json                # PHP dependencies
├── package.json                 # Node.js dependencies
├── phpunit.xml.dist             # PHPUnit configuration
├── .phpcs.xml.dist              # Code standards configuration
└── rector.php                   # Code modernization rules
```

### การทดสอบ (Testing)

addon นี้มีเฟรมเวิร์กการทดสอบที่ครอบคลุม:

- **Unit Tests**: การทดสอบที่อิงตาม PHPUnit พร้อมด้วย WordPress test suite
- **Base Test Class**: มีเมธอดช่วยเหลือ (helper methods) สำหรับสถานการณ์การทดสอบทั่วไป
- **Test Coverage**: ตั้งค่าให้ติดตามการครอบคลุมของโค้ด (code coverage)
- **Multisite Testing**: การทดสอบที่ทำงานในสภาพแวดล้อมแบบ multisite

### มาตรฐานโค้ด (Code Standards)

- **WordPress Coding Standards**: บังคับใช้ผ่าน PHPCS
- **PHP 7.4+ Compatibility**: รองรับฟีเจอร์ PHP สมัยใหม่
- **Static Analysis**: การรวม PHPStan เพื่อตรวจสอบประเภทข้อมูล (type checking)
- **Code Modernization**: กฎของ Rector สำหรับการอัปเกรด PHP

### ระบบ Build (Build System)

- **Asset Processing**: การย่อขนาด (Minification) สำหรับไฟล์ CSS/JS
- **Translation**: การสร้างไฟล์ POT
- **Packaging**: การสร้างไฟล์ Archive สำหรับการแจกจ่าย
- **Development Mode**: การใช้ assets ที่ยังไม่ย่อขนาดเพื่อการดีบัก

## การตั้งค่า (Configuration)

addon นี้รองรับตัวเลือกการตั้งค่าหลายอย่าง ซึ่งสามารถเข้าถึงได้ผ่านหน้า Network Admin

## Hooks และ Filters

### Actions

- `ultimate-multisite-addon-template_init` - ถูกเรียกใช้หลังจากเริ่มต้น addon
- `ultimate-multisite-addon-template_loaded` - ถูกเรียกใช้หลังจากโหลดไฟล์ addon ทั้งหมด

### Filters

- `ultimate-multisite-addon-template_settings` - ใช้สำหรับแก้ไขการตั้งค่าของ addon
- `ultimate-multisite-addon-template_enabled` - ใช้สำหรับกำหนดสถานะเปิด/ปิดของ addon

## ใบอนุญาต (License)

addon นี้อยู่ภายใต้ใบอนุญาต GPL v3 หรือเวอร์ชันที่ใหม่กว่า

## การสนับสนุน (Support)

หากต้องการการสนับสนุนและเอกสารเพิ่มเติม โปรดเยี่ยมชม [MultisiteUltimate.com](https://multisiteultimate.com)
## Changelog

- Version 1.0.1 (2025-09-28): เปลี่ยน prefix เป็น ultimate-multisite; อัปเดต text domain; เพิ่มเวอร์ชัน.


- Version (2025-09-28): เปลี่ยน prefix เป็น ultimate-multisite; อัปเดต text domain; เพิ่มเวอร์ชัน.
