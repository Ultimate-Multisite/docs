---
id: wu_should_create_domain_record_for_site
title: ফিল্টাৰ - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# ফিল্টাৰ: wu_should_create_domain_record_for_site

নতুনকৈ সৃষ্টি কৰা site-ৰ বাবে Ultimate Multisite-এ domain record সৃষ্টি কৰিব নে নাই সেয়া ফিল্টাৰ কৰে।

shared checkout-form base domain, internal host, অথবা আন কোনো integration-এ পৃথকে পৰিচালনা কৰিব লগা domain ব্যৱহাৰ কৰা site-সমূহৰ বাবে automatic domain-record creation বন্ধ বা পিছুৱাই ৰাখিবলৈ এই filter ব্যৱহাৰ কৰক।

## পেৰামিটাৰসমূহ {#parameters}

| নাম | প্ৰকাৰ | বিৱৰণ |
|------|------|-------------|
| $create | `bool` | domain record সৃষ্টি কৰা উচিত নে নহয়। |
| $site | `WP_Site` | নতুনকৈ সৃষ্টি কৰা site object। |

### পৰা {#since}

- 2.13.0

### উৎস {#source}

`inc/functions/domain.php`-ত সংজ্ঞায়িত।


## ঘূৰাই দিয়ে {#returns}

domain record সৃষ্টি কৰিব নে নাই সেয়া সূচোৱা Boolean।
