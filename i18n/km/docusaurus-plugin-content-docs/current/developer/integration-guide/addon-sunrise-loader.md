---
title: កម្មវិធីផ្ទុកឯកសារ Sunrise សម្រាប់កម្មវិធីបន្ថែម
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 បន្ថែមកម្មវិធីផ្ទុកផ្នែកបន្ថែម sunrise សម្រាប់ add-on និងការរួមបញ្ចូល MU-plugin ផ្ទាល់ខ្លួន ដែលត្រូវដំណើរការក្នុងពេល WordPress កំពុងចាប់ផ្តើម sunrise ដោយមិនកែសម្រួលឯកសារ `wp-content/sunrise.php` ដែលបានបង្កើត។

## ពេលណាត្រូវប្រើវា

ប្រើផ្នែកបន្ថែម sunrise នៅពេលការរួមបញ្ចូលរបស់អ្នកត្រូវដំណើរការមុនពេល plugin ធម្មតាត្រូវបានផ្ទុក ដូចជា ការបញ្ជូនដែនផ្ទាល់ខ្លួន ការដោះស្រាយសំណើតាមម៉ាស៊ីនបង្ហោះ ឬការកែតម្រូវការចាប់ផ្តើមបណ្តាញដំបូង។

សម្រាប់ការរួមបញ្ចូលធម្មតា គួរប្រើ WordPress plugin ធម្មតា MU-plugin និង hook Ultimate Multisite ដែលមានឯកសារណែនាំ។ កូដ sunrise ដំណើរការលឿនណាស់ ហើយគួរតែតូច មានការការពារ និងមិនពឹងផ្អែកលើអ្វីផ្សេង។

## ច្បាប់ដាក់ឈ្មោះឯកសារ

បង្កើតឯកសារ PHP ដែលមានឈ្មោះ `sunrise.php` នៅក្នុងថត addon ដែលឈ្មោះចាប់ផ្តើមដោយ `ultimate-multisite-`៖

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

កម្មវិធីផ្ទុកស្កេនថត plugins សម្រាប់លំនាំនេះ៖

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

ឯកសារដែលត្រូវគ្នានឹងត្រូវបានផ្ទុកតាមលំដាប់អក្សរតាមផ្លូវ addon។

## ទីតាំងដាក់ឯកសារ

ដាក់ឯកសារនៅក្នុងថត root របស់ addon ដែលគ្រប់គ្រងឥរិយាបថ sunrise៖

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

ការស្កេនត្រូវបានដោះស្រាយដោយយោងទៅ `WP_CONTENT_DIR` មិនមែនតម្លៃបច្ចុប្បន្ននៃ `WP_PLUGIN_DIR` ទេ។ វាធ្វើឱ្យការរកឃើញមានស្ថេរភាព នៅពេល multi-tenancy ឬកូដចាប់ផ្តើមដំបូងផ្សេងទៀតផ្លាស់ប្តូរថេរថត plugin ក្នុងពេល sunrise។

កុំកែសម្រួលឯកសារ `wp-content/sunrise.php` ដែលបានបង្កើតដោយផ្ទាល់។ កម្មវិធីផ្ទុកអនុញ្ញាតឱ្យកូដផ្ទាល់ខ្លួនពង្រីកឥរិយាបថ sunrise ដោយមិនបំបែកចេញពីឯកសារ sunrise ស្នូលដែល Ultimate Multisite ដំឡើង និងធ្វើបច្ចុប្បន្នភាព។

## Hook និង filter ដែលអាចប្រើបាន

ឯកសារ sunrise របស់ addon ដំណើរការបន្ទាប់ពីការផ្គូផ្គងដែនរបស់ Ultimate Multisite បានផ្ទុក និងមុនពេល WordPress បង្កើត `ms_loaded`។ នៅចំណុចនេះ ឯកសារ sunrise អាច៖

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- កំណត់ថេរពេល sunrise ដូចជា `BLOG_ID_CURRENT_SITE` នៅពេលត្រូវការ;
- អានស្ថានភាពជំនួយ sunrise របស់ Ultimate Multisite រួមទាំងស្ថានភាពបញ្ជូនផ្លូវដែលប្រើដោយការរួមបញ្ចូល multi-tenancy។

Ultimate Multisite បង្កើត `wu_sunrise_loaded` បន្ទាប់ពីកម្មវិធីផ្ទុក sunrise របស់វាបញ្ចប់។ ប្រើ action នោះសម្រាប់កូដដែលគួរដំណើរការបន្ទាប់ពីការចាប់ផ្តើម sunrise បញ្ចប់ ប៉ុន្តែនៅតែស្ថិតក្នុងវដ្តជីវិត sunrise។

ហៅតែ function ដែលបានផ្ទុករួចនៅដំណាក់កាល sunrise ប៉ុណ្ណោះ។ ជៀសវាងការងារដែលប្រើមូលដ្ឋានទិន្នន័យច្រើន ការបង្ហាញ template សំណើ HTTP និងកូដដែលសន្មតថាលំដាប់ផ្ទុក plugin ធម្មតាបានបញ្ចប់។

## ឧទាហរណ៍តិចតួច

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

បន្ទាប់ពីដាក់ឯកសារឡើង ប្រើដែនដែលបានផ្គូផ្គង និង URL គេហទំព័រមេដែលមិនបានផ្គូផ្គង ដើម្បីបញ្ជាក់ថាផ្លូវទាំងពីរនៅតែចាប់ផ្តើមបានត្រឹមត្រូវ។
