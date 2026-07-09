---
title: ایڈ آن سَن راائز فائل لوڈر
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 ایک sunrise extension loader شامل کرتا ہے جو add-ons اور custom MU-plugin integrations کے لیے ہے جنہیں WordPress sunrise bootstrapping کے دوران چلنا ہوتا ہے، اور اس کے لیے `wp-content/sunrise.php` فائل کو ایڈٹ کرنے کی ضرورت نہیں ہوتی۔

## یہ کب استعمال کرنا ہے {#when-to-use-it}

sunrise extension کا استعمال اس وقت کریں جب آپ کی integration کو عام plugins لوڈ ہونے سے پہلے چلنا ضروری ہو۔ مثال کے طور پر، custom domain routing، host-specific request handling، یا early network bootstrap adjustments۔

عام integrations کے لیے، regular WordPress plugins، MU-plugins، اور documented Ultimate Multisite hooks کو ترجیح دیں۔ Sunrise code بہت جلد چلتا ہے اور اسے چھوٹا، دفاعی (defensive)، اور کسی بھی dependency سے آزاد رہنا چاہیے۔

## فائل کا نام رکھنے کا طریقہ (File naming convention) {#file-naming-convention}

ایک PHP فائل بنائیں جس کا نام `sunrise.php` ہو اور اسے ایک addon directory میں رکھیں۔ اس addon کا نام `ultimate-multisite-` سے شروع ہونا چاہیے۔:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

یہ loader اس pattern کے لیے plugins directory کو اسکین کرتا ہے:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

جو فائلیں میچ کرتی ہیں، انہیں addon path کے لحاظ سے حروف تہجی کے ترتیب (alphabetical order) میں لوڈ کیا جاتا ہے۔

## فائل کہاں رکھنی ہے (Where to place the file) {#where-to-place-the-file}

اس فائل کو اس addon کی root directory میں رکھیں جو sunrise behaviour کا مالک ہے:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

یہ اسکین `WP_CONTENT_DIR` کے حوالے سے کیا جاتا ہے، نہ کہ `WP_PLUGIN_DIR` کی موجودہ ویلیو کے حوالے سے۔ یہ اس وقت بھی discovery کو مستحکم رکھتا ہے جب multi-tenancy یا دیگر early bootstrap code sunrise کے دوران plugin directory constants کو تبدیل کرتے ہیں۔

براہ کرم براہ راست generated `wp-content/sunrise.php` فائل کو ایڈٹ نہ کریں۔ یہ loader custom code کو sunrise behaviour کو extend کرنے دیتا ہے بغیر اس core sunrise فائل کو fork کیے جو Ultimate Multisite انسٹال اور اپ ڈیٹ کرتا ہے۔

## دستیاب Hooks اور Filters {#hooks-and-filters-available}

Addon sunrise files Ultimate Multisite domain mapping کے لوڈ ہونے کے بعد اور WordPress کے `ms_loaded` firing ہونے سے پہلے چلتی ہیں۔ اس وقت ایک sunrise file یہ کر سکتی ہے:

- `$current_site` اور `$current_blog` کو پڑھنا یا ان کو override کرنا؛
- ڈیٹا بیس کی configuration لوڈ ہونے کے بعد `$wpdb` تک رسائی حاصل کرنا؛
- ضرورت پڑنے پر sunrise-time constants جیسے `BLOG_ID_CURRENT_SITE` کو define کرنا؛
- Ultimate Multisite sunrise helper state کو پڑھنا، جس میں multi-tenancy integrations کے لیے استعمال ہونے والی routing state شامل ہے۔

Ultimate Multisite اپنے sunrise loader کے مکمل ہونے کے بعد `wu_sunrise_loaded` fire کرتا ہے۔ اس action کا استعمال اس code کے لیے کریں جو sunrise bootstrap مکمل ہونے کے بعد چلنا چاہیے لیکن پھر بھی sunrise lifecycle سے تعلق رکھتا ہو۔

صرف ان functions کو call کریں جو پہلے ہی sunrise phase میں لوڈ ہو چکے ہیں۔ database-heavy work، template rendering، HTTP requests، اور اس code سے گریز کریں جو یہ فرض کرتا ہو کہ normal plugin load order مکمل ہو چکا ہے۔

## کم سے کم مثال (Minimal example) {#minimal-example}

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

فائل کو deploy کرنے کے بعد، دونوں paths کو confirm کرنے کے لیے ایک mapped domain اور ایک unmapped main-site URL لوڈ کریں۔
