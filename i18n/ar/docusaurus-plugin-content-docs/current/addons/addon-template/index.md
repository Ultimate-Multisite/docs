---
title: قالب الإضافة
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# قالب الإضافة

{{ADDON_DESCRIPTION}}

## المتطلبات

- WordPress 5.3 أو أعلى
- PHP 7.4 أو أعلى
- إضافة Multisite Ultimate (نشطة)

## التثبيت

1. قم بتحميل ملفات الإضافة إلى دليل `/wp-content/plugins/` الخاص بك
2. فعّل الإضافة من خلال قائمة 'الإضافات' في WordPress
3. قم بتكوين إعدادات الإضافة في إدارة الشبكة

## التطوير

### الإعداد

```bash
# تثبيت الاعتمادات
composer install
npm install

# تشغيل الاختبارات
npm run test

# تشغيل فحوصات معايير الكود
vendor/bin/phpcs
vendor/bin/phpstan

# إصلاح مشكلات نمط الكود
vendor/bin/phpcbf

# بناء للإنتاج
npm run build
```

### هيكل المشروع

```
ultimate-multisite-addon-template/
├── inc/                          # فئات PHP والملفات المضمنة
│   ├── class-multisite-ultimate-updater.php  # معالج التحديث
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # الوظيفة الرئيسية
├── tests/                        # اختبارات الوحدة
│   ├── bootstrap.php            # بدء الاختبار
│   ├── class-*-base.php         # فئة الاختبار الأساسية
│   └── class-*-test.php         # حالات الاختبار
├── views/                       # ملفات القالب
├── assets/                      # الأصول الثابتة
│   ├── css/                     # أوراق الأنماط
│   ├── js/                      # ملفات JavaScript
│   └── images/                  # الصور
├── lang/                        # ملفات اللغة
├── composer.json                # تبعيات PHP
├── package.json                 # تبعيات Node.js
├── phpunit.xml.dist             # تكوين PHPUnit
├── .phpcs.xml.dist              # تكوين معايير الكود
└── rector.php                   # قواعد تحديث الكود
```

### الاختبار

تشمل الإضافة إطار اختبار شامل:

- **اختبارات الوحدة**: اختبارات مبنية على PHPUnit مع مجموعة اختبارات WordPress
- **فئة الاختبار الأساسية**: توفر طرق مساعدة للسيناريوهات الاختبارية الشائعة
- **تغطية الاختبار**: مُكوَّنة لتتبع تغطية الكود
- **اختبار الشبكة المتعددة**: تُشغَّل الاختبارات في بيئة الشبكة المتعددة

### معايير الكود

- **معايير ترميز WordPress**: تُفرض عبر PHPCS
- **التوافق مع PHP 7.4+**: ميزات PHP الحديثة مدعومة
- **التحليل الثابت**: تكامل PHPStan لفحص الأنواع
- **تحديث الكود**: قواعد Rector لترقيات PHP

### نظام البناء

- **معالجة الأصول**: تصغير ملفات CSS/JS
- **الترجمة**: إنشاء ملفات POT
- **التغليف**: إنشاء أرشيف للتوزيع
- **وضع التطوير**: أصول غير مصغرة للخطأ

## التكوين

تدعم الإضافة خيارات تكوين مختلفة يمكن الوصول إليها عبر واجهة إدارة الشبكة.

## الخطافات والمرشحات

### الإجراءات

- `ultimate-multisite-addon-template_init` - يُطلق بعد تهيئة الإضافة
- `ultimate-multisite-addon-template_loaded` - يُطلق بعد تحميل جميع ملفات الإضافة

### المرشحات

- `ultimate-multisite-addon-template_settings` - تعديل إعدادات الإضافة
- `ultimate-multisite-addon-template_enabled` - تجاوز …

## الترخيص

تمت ترخيص هذه الإضافة بموجب GPL v3 أو أحدث.

## الدعم

للحصول على الدعم والوثائق .. [MultisiteUltimate.com](https://multisiteultimate.com)

## سجل التغييرات

- الإصدار 1.0.1 (2025-09-28): إعادة تسمية البادئة …
- الإصدار (2025-09-28): إعادة تسمية البادئة …
