---
title: ተጨማሪ ፀሐይ መውጣት ፋይል መጫኛ
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# የአድ-ኦን የሰንጋው (Sunrise) ፋይል መጫኛ {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 ለአድ-ኦኖች እና ለተራቀቁ MU-plugin ውህደቶች (integrations) የሰንጋው (sunrise) ማስፋፊያ መጫኛን ይጨምራል። ይህ መጫኛ የሰንጋው ማስጀመር ሂደት በWordPress ውስጥ የሚከናወን ሲሆን፣ በዚህም ምክንያት የተፈጠረውን `wp-content/sunrise.php` ፋይል ሳያርትዑ ኮድ እንዲሰሩ ያስችላል።

## መቼ መጠቀም ይቻላል {#when-to-use-it}

የሰንጋው ማስፋፊያ (sunrise extension) መጠቀም ያለብዎት ጊዜ፣ ውህደታቸው ከመደበኛ ፕልጊኖች ከመጫናቸው በፊት መሥራት ያለበት ከሆነ ነው። ለምሳሌ፡ የባለቤትነት ድረ-ገጽ አቅጣጫ ማስያዝ (custom domain routing)፣ በ호ስ (host) ላይ የተመሠረተ የጥያቄ አያያዝ (request handling)፣ ወይም ቀደምት የኔትወርክ ማስጀመር ማስተካከያዎችን ማድረግ።

ለተለመዱ ውህደቶች ግን፣ መደበኛ የWordPress ፕልጊኖችን፣ MU-pluginsን፣ እና በሰነዱ ውስጥ የተገለጹትን የUltimate Multisite hooks መጠቀም ይመከራል። የሰንጋው ኮድ በጣም ቀደም ብሎ ስለሚሰራ፣ ትንሽ፣ ጥበቃ ያለው (defensive) እና ምንም εξተናጋሪ (dependency-free) መሆን አለበት።

## የፋይል ስያሜ አወጣጥ (File naming convention) {#file-naming-convention}

የሚከተሉትን ስያሜ ያላቸውን የPHP ፋይል ይፍጠሩ፡ `sunrise.php`። ይህ ፋይልም በስሙ የሚጀምረው በ`ultimate-multisite-` በሚል ስም ባለው የአድ-ኦን ዳይሬክቶሪ ውስጥ መሆን አለበት።

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

ይህ መጫኛ (loader) በፕልጊኖች ዳይሬክቶሪ ውስጥ የሚከተለውን ቅጦች (pattern) ይቃኛል፡

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

የሚገኙ ፋይሎች በየአድ-ኦን የዳይሬክቶሪ መንገድ (addon path) መሠረት በፊደል ቅደም ተከተል ይጫናሉ።

## ፋይሉ የት ማስቀመጥ አለብኝ {#where-to-place-the-file}

ፋይሉን በሰንጋው ባህሪው ባለቤት በሆነው የአድ-ኦን ዋና ዳይሬክቶሪ ውስጥ ያስቀምጡት።

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

ይህ ፍተሻ (scan) በ`WP_CONTENT_DIR` ላይ ተመሥርቶ ነው፣ በ`WP_PLUGIN_DIR` ላይ ባለው አሁን ባለው ዋጋ ላይ አይደለም። ይህ በብዙ ተጠቃሚነት (multi-tenancy) ወይም በሌላ ቀደምት የማስጀመር ኮድ የፕልጊን ዳይሬክቶሪ ቋሚ ተለዋዋጮችን (constants) በሚቀይርበት ጊዜ ፍለጋው እንዲረጋጋ ያደርጋል።

የተፈጠረውን `wp-content/sunrise.php` ፋይል በቀጥታ አያርትዑ። ይህ መጫኛ (loader) Ultimate Multisite የሚያስቀምጠውን እና የሚያዘምነውን ዋና የሰንጋው ፋይል ሳይቀይሩ፣ ለተጠቃሚው ኮድ የሰንጋው ባህሪ እንዲሰፋ ያስችላል።

## የሚገኙ Hooks እና Filters {#hooks-and-filters-available}

የአድ-ኦን የሰንጋው ፋይሎች ከUltimate Multisite የባለቤትነት ድረ-ገጽ ካርታ (domain mapping) ከተጫነ በኋላ እና WordPress `ms_loaded` ከመተላለፉ በፊት ይሰራሉ። በዚህ ጊዜ የሰንጋው ፋይል የሚከተሉትን ማድረግ ይችላል፦

- `$current_site` እና `$current_blog` ማንበብ ወይም መተካት፤
- የዳታቤዝ ውቅረጫ (database configuration) ከተጫነ በኋላ `$wpdb` መዳረስ፤
- አስፈላጊ ሲሆን የሰንጋው ጊዜ (sunrise-time) ቋሚዎችን (constants) መግለጽ፣ ለምሳሌ `BLOG_ID_CURRENT_SITE`፤
- የUltimate Multisite የሰንጋው ረዳት ሁኔታን (sunrise helper state) ማንበብ፣ ይህም በብዙ ተጠቃሚነት ውህደቶች ጥቅም ላይ የዋለው የቅጥያ (routing) ሁኔታን ያካትታል።

Ultimate Multisite የሰንጋው መጫኛው ሲጠናቀቅ `wu_sunrise_loaded` የሚል action ይተጃጃል። ይህንን action መጠቀም ያለብዎት፣ የሰንጋው ማስጀመር ሂደት ከተጠናቀቀ በኋላም ቢሆን የሰንጋው የሕይወት ዑደት (lifecycle) አካል የሆነ ኮድ ነው።

በሰንጋው ደረጃ ቀድሞ ከተጫኑባቸው ተግባራት (functions) ብቻ ይጠራሉ። በመረጃ ቋት ላይ ብዙ የሚጠይቅ ስራ፣ የቴምፕሌት ማሳያ (template rendering)፣ የHTTP ጥያቄዎች (HTTP requests) እና መደበኛ የፕልጊን የጭነት ቅደም ተከተል እንደተጠናቀቀ የሚያስበውን ኮድ ያስወግዱ።

## አነስተኛ ምሳሌ (Minimal example) {#minimal-example}

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

ፋይሉን ከሰቀሉ በኋላ፣ ሁለቱም መንገዶች (paths) በትክክል እንዲሰሩ ለማረጋገጥ፣ የተመሠረተ (mapped) የባለቤትነት ድረ-ገጽ እና ያልተመሠረተ ዋና-ጣቢያ (unmapped main-site) URL ይጫኑ።
