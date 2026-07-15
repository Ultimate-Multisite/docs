---
title: اضافي Sunrise فائيل لوڊر
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# ايڊآن Sunrise فائيل لوڊر

Ultimate Multisite 2.8.0 ايڊآنز ۽ ڪسٽم MU-plugin انٽيگريشنز لاءِ sunrise واڌارو لوڊر شامل ڪري ٿو، جن کي ٺاهيل `wp-content/sunrise.php` فائيل ۾ ترميم ڪرڻ کان سواءِ WordPress sunrise بوٽ اسٽريپنگ دوران هلڻ جي ضرورت آهي.

## ان کي ڪڏهن استعمال ڪجي {#when-to-use-it}

sunrise واڌارو تڏهن استعمال ڪريو جڏهن توهان جي انٽيگريشن کي باقاعده پلگ انز لوڊ ٿيڻ کان اڳ هلڻ لازمي هجي، جهڙوڪ ڪسٽم ڊومين روٽنگ، ميزبان-مخصوص درخواست سنڀالڻ، يا شروعاتي نيٽ ورڪ بوٽ اسٽريپ ترتيبون.

عام انٽيگريشنز لاءِ، باقاعده WordPress پلگ انز، MU-plugins، ۽ دستاويز ڪيل Ultimate Multisite هاڪس کي ترجيح ڏيو. Sunrise ڪوڊ تمام شروعات ۾ هلندو آهي ۽ ننڍو، محتاط، ۽ انحصارن کان آزاد رهڻ گهرجي.

## فائيل نالي جو رواج {#file-naming-convention}

هڪ ايڊآن ڊائريڪٽري ۾ `sunrise.php` نالي PHP فائيل ٺاهيو، جنهن جو نالو `ultimate-multisite-` سان شروع ٿئي:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

لوڊر هن نموني لاءِ پلگ انز ڊائريڪٽري اسڪين ڪري ٿو:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

ملندڙ فائيلز ايڊآن رستي موجب الفابيٽڪ ترتيب ۾ لوڊ ٿين ٿا.

## فائيل ڪٿي رکجي {#where-to-place-the-file}

فائيل کي ان ايڊآن جي روٽ ڊائريڪٽري ۾ رکو جيڪو sunrise رويو جو مالڪ آهي:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

اسڪين `WP_CONTENT_DIR` جي نسبت سان حل ڪيو ويندو آهي، `WP_PLUGIN_DIR` جي موجوده قدر سان نه. هي دريافت کي مستحڪم رکي ٿو جڏهن ملٽي-ٽيننسي يا ٻيو شروعاتي بوٽ اسٽريپ ڪوڊ sunrise دوران پلگ ان ڊائريڪٽري ڪانسٽنٽس تبديل ڪري ٿو.

ٺاهيل `wp-content/sunrise.php` فائيل کي سڌو سنئون ايڊٽ نه ڪريو. لوڊر ڪسٽم ڪوڊ کي sunrise رويو وڌائڻ ڏئي ٿو، بغير ان بنيادي sunrise فائيل کي فورڪ ڪرڻ جي جيڪو Ultimate Multisite انسٽال ۽ اپڊيٽ ڪري ٿو.

## موجود هاڪس ۽ فلٽرز {#hooks-and-filters-available}

ايڊآن sunrise فائيلز Ultimate Multisite ڊومين ميپنگ لوڊ ٿيڻ کان پوءِ ۽ WordPress پاران `ms_loaded` فائر ڪرڻ کان اڳ هلن ٿا. هن مرحلي تي هڪ sunrise فائيل هي ڪري سگهي ٿو:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- ضرورت هجي ته sunrise-وقت ڪانسٽنٽس جهڙوڪ `BLOG_ID_CURRENT_SITE` بيان ڪري؛
- Ultimate Multisite sunrise مددگار حالت پڙهي، جنهن ۾ ملٽي-ٽيننسي انٽيگريشنز پاران استعمال ٿيندڙ روٽنگ حالت شامل آهي.

Ultimate Multisite پنهنجي sunrise لوڊر ختم ٿيڻ کان پوءِ `wu_sunrise_loaded` فائر ڪري ٿو. اهو عمل اهڙي ڪوڊ لاءِ استعمال ڪريو جيڪو sunrise بوٽ اسٽريپ مڪمل ٿيڻ کان پوءِ هلڻ گهرجي پر اڃا به sunrise لائف سائيڪل سان واسطو رکي ٿو.

صرف اهي فنڪشنز ڪال ڪريو جيڪي sunrise مرحلي ۾ اڳ ئي لوڊ ٿيل آهن. ڊيٽابيس-ڳري ڪم، ٽيمپليٽ رينڊرنگ، HTTP درخواستن، ۽ اهڙي ڪوڊ کان پاسو ڪريو جيڪو سمجهي ٿو ته عام پلگ ان لوڊ ترتيب مڪمل ٿي چڪي آهي.

## گهٽ ۾ گهٽ مثال {#minimal-example}

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

فائيل ڊپلاءِ ڪرڻ کان پوءِ، هڪ ميپ ٿيل ڊومين ۽ هڪ اڻ ميپ ٿيل مکيه-سائيٽ URL لوڊ ڪريو ته جيئن تصديق ٿئي ته ٻئي رستا اڃا به صحيح نموني بوٽ اسٽريپ ٿين ٿا.
