---
title: অ্যাডঅন সূৰ্যোদয় ফাইল লোডাৰ
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 ले add-ons আৰু custom MU-plugin integrations-ৰ বাবে এটা sunrise extension loader যোগ কৰিছে। যিবোৰ add-on-বোৰক WordPress sunrise bootstrapping সময়ত চলিব লাগিব, কিন্তু তাৰ বাবে `wp-content/sunrise.php` ফাইলটো সম্পাদনা কৰিব নোৱাৰি।

## ক'ত ব্যৱহাৰ কৰিব

যদি আপোনাৰ integration-ক নিয়মিত plugin লোড হোৱাৰ আগতে চলিব লাগিব, তেন্তে sunrise extension ব্যৱহাৰ কৰক। উদাহৰণস্বৰূপে, custom domain routing, host-specific request handling, বা early network bootstrap adjustment।

সাধাৰণ integration-ৰ বাবে, নিয়মিত WordPress plugins, MU-plugins, আৰু document কৰা Ultimate Multisite hooks ব্যৱহাৰ কৰিব। Sunrise code অতি সোনকালে (very early) চলে আৰু ই সৰু, আত্মৰক্ষা কৰা (defensive), আৰু কোনো dependency-ৰ ওপৰত নিৰ্ভৰ নকৰা হ'ব লাগে।

## ফাইলৰ নামৰ নিয়ম (File naming convention)

এটা PHP ফাইল সৃষ্টি কৰক যাৰ নাম হ'ব `sunrise.php`। এই ফাইলটো এটা addon directory-ৰ ভিতৰত থব লাগিব, আৰু সেই addon-ৰ নামটোৱে `ultimate-multisite-` ৰে আৰম্ভ হ'ব লাগিব:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

এই loader-এ plugins directory-ত এই pattern-টো বিচাৰে:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

যি ফাইলবোৰ মিলে, সেইবোৰক addon path অনুসৰি alphabetical order-ত লোড কৰা হয়।

## ফাইলটো ক'ত থব

ফাইলটো সেই addon-ৰ root directory-ত থব, যিটো sunrise behavior-ৰ মালিক:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

এই scan-টো `WP_CONTENT_DIR` ৰ সাপেক্ষে কৰা হয়, current `WP_PLUGIN_DIR` ৰ সাপেক্ষে নহয়। ই multi-tenancy বা আন কোনো early bootstrap code-এ sunrise সময়ত plugin directory constant-বোৰ সলনি কৰাৰ সময়তো discovery-ক স্থিতিশীল (stable) কৰি ৰাখে।

কোপি কৰা `wp-content/sunrise.php` ফাইলটো পোনপটীয়াকৈ সম্পাদনা নকৰিব। এই loader-এ custom code-ক sunrise behavior-ক extend কৰিবলৈ দিয়ে, আনকি Ultimate Multisite-এ install আৰু update কৰা core sunrise ফাইলটো ফৰ্ক (fork) নকৰাকৈ।

## উপলব্ধ Hooks আৰু filters

Addon sunrise file-বোৰ Ultimate Multisite domain mapping লোড হোৱাৰ পাছত আৰু WordPress `ms_loaded` ফাটি থকাৰ আগতে চলে। এই সময়ত এটা sunrise file-এ:

- `$current_site` আৰু `$current_blog` পঢ়িব বা কাৰণ কৰিব (override);
- database configuration লোড হোৱাৰ পাছত `$wpdb` অ্যাক্সেস কৰিব;
- প্ৰয়োজন অনুসৰি sunrise-time constant যেনে `BLOG_ID_CURRENT_SITE` define কৰিব;
- Ultimate Multisite sunrise helper state পঢ়িব, যাৰ ভিতৰত multi-tenancy integration-এ ব্যৱহাৰ কৰা routing state-ো অন্তৰ্ভুক্ত।

Ultimate Multisite, তাৰ sunrise loader শেষ হোৱাৰ পাছত `wu_sunrise_loaded` ফাটি দিয়ে। যি code-ক sunrise bootstrap সম্পূৰ্ণ হোৱাৰ পাছতো চলিব লাগিব, কিন্তু সেয়া এতিয়াও sunrise lifecycle-ৰ অংশ, তাৰ বাবে এই action-টো ব্যৱহাৰ কৰক।

যি ফাংশনবোৰ sunrise phase-ত ইতিমধ্যে লোড হৈ আছে, সেইবোৰহে কল কৰক। database-heavy কাম, template rendering, HTTP request, আৰু যি code-এ ধৰি লয় যে normal plugin load order সম্পূৰ্ণ হৈছে, তাৰ পৰা বিৰত থাকক।

## ন্যূনতম উদাহৰণ (Minimal example)

```php
<?php
/**
 * A custom host integration-ৰ বাবে Sunrise extension।
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

ফাইলটো deploy কৰাৰ পাছত, দুটা পথ (paths) সঠিকভাৱে bootstrap কৰে নে নাই, সেয়া নিশ্চিত কৰিবলৈ এটা mapped domain আৰু এটা unmapped main-site URL লোড কৰক।
