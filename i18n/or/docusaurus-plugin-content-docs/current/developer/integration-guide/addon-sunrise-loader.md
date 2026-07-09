---
title: ଆଡଅନ୍ Sunrise ଫାଇଲ୍ ଲୋଡର୍
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# ଆଡ଼ଅନ୍ sunrise ଫାଇଲ୍ ଲୋଡର୍

Ultimate Multisite 2.8.0 ଆଡ଼ଅନ୍ ଏବଂ କଷ୍ଟମ MU-plugin ସମନ୍ୱୟ ପାଇଁ ଏକ sunrise ବିସ୍ତାର ଲୋଡର୍ ଯୋଡ଼େ। ଏହାମାନଙ୍କୁ ତିଆରି ହୋଇଥିବା `wp-content/sunrise.php` ଫାଇଲ୍ ସମ୍ପାଦନା ନକରି WordPress sunrise ବୁଟସ୍ଟ୍ରାପିଂ ସମୟରେ ଚାଲିବାକୁ ପଡ଼େ।

## କେବେ ବ୍ୟବହାର କରିବେ

ଆପଣଙ୍କ ସମନ୍ୱୟକୁ ସାଧାରଣ ପ୍ଲଗଇନ୍ ଲୋଡ୍ ହେବା ପୂର୍ବରୁ ଚାଲିବା ଆବଶ୍ୟକ ହେଲେ sunrise ବିସ୍ତାର ବ୍ୟବହାର କରନ୍ତୁ। ଯଥା କଷ୍ଟମ ଡୋମେନ୍ ରାଉଟିଂ, ହୋଷ୍ଟ-ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁରୋଧ ପରିଚାଳନା, କିମ୍ବା ପ୍ରାରମ୍ଭିକ ନେଟୱର୍କ ବୁଟସ୍ଟ୍ରାପ୍ ସମନ୍ୱୟ।

ସାଧାରଣ ସମନ୍ୱୟ ପାଇଁ, ନିୟମିତ WordPress ପ୍ଲଗଇନ୍, MU-plugins, ଏବଂ ଡକ୍ୟୁମେଣ୍ଟ ହୋଇଥିବା Ultimate Multisite hooks ବ୍ୟବହାର କରନ୍ତୁ। Sunrise କୋଡ୍ ବହୁତ ଆଗରୁ ଚାଲେ ଏବଂ ଏହା ଛୋଟ, ସତର୍କ, ଓ ନିର୍ଭରତା-ମୁକ୍ତ ରହିବା ଉଚିତ।

## ଫାଇଲ୍ ନାମକରଣ ପ୍ରଥା

`ultimate-multisite-` ରୁ ଆରମ୍ଭ ହେଉଥିବା ନାମର ଏକ ଆଡ଼ଅନ୍ ଡିରେକ୍ଟରିରେ `sunrise.php` ନାମର PHP ଫାଇଲ୍ ତିଆରି କରନ୍ତୁ:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

ଲୋଡର୍ ଏହି ପ୍ୟାଟର୍ନ ପାଇଁ ପ୍ଲଗଇନ୍ ଡିରେକ୍ଟରି ସ୍କାନ୍ କରେ:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

ମେଳ ହେଉଥିବା ଫାଇଲ୍‌ଗୁଡ଼ିକ ଆଡ଼ଅନ୍ ପଥ ଅନୁସାରେ ବର୍ଣ୍ଣାନୁକ୍ରମରେ ଲୋଡ୍ ହୁଏ।

## ଫାଇଲ୍ କେଉଁଠି ରଖିବେ

sunrise ବ୍ୟବହାରର ମାଲିକ ଥିବା ଆଡ଼ଅନ୍‌ର ମୂଳ ଡିରେକ୍ଟରିରେ ଫାଇଲ୍‌ଟି ରଖନ୍ତୁ:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

ସ୍କାନ୍‌ଟି `WP_CONTENT_DIR` ସହ ସମ୍ପର୍କିତ ଭାବେ ସମାଧାନ ହୁଏ, `WP_PLUGIN_DIR` ର ବର୍ତ୍ତମାନ ମୂଲ୍ୟ ସହ ନୁହେଁ। ମଲ୍ଟି-ଟେନାନ୍ସି କିମ୍ବା ଅନ୍ୟ ପ୍ରାରମ୍ଭିକ ବୁଟସ୍ଟ୍ରାପ୍ କୋଡ୍ sunrise ସମୟରେ ପ୍ଲଗଇନ୍ ଡିରେକ୍ଟରି କନ୍ଷ୍ଟାଣ୍ଟ ବଦଳାଇଲେ ମଧ୍ୟ ଏହା ଖୋଜାକୁ ସ୍ଥିର ରଖେ।

ତିଆରି ହୋଇଥିବା `wp-content/sunrise.php` ଫାଇଲ୍‌କୁ ସିଧାସଳଖ ସମ୍ପାଦନା କରନ୍ତୁ ନାହିଁ। Ultimate Multisite ଯେଉଁ କୋର୍ sunrise ଫାଇଲ୍ ଇନ୍‌ଷ୍ଟଲ୍ ଏବଂ ଅପଡେଟ୍ କରେ, ତାହାକୁ ଫୋର୍କ୍ ନକରି କଷ୍ଟମ କୋଡ୍‌କୁ sunrise ବ୍ୟବହାର ବିସ୍ତାର କରିବାକୁ ଲୋଡର୍ ସୁବିଧା ଦେଏ।

## ଉପଲବ୍ଧ hooks ଏବଂ filters

Ultimate Multisite ଡୋମେନ୍ ମ୍ୟାପିଂ ଲୋଡ୍ ହେବା ପରେ ଏବଂ WordPress `ms_loaded` ଫାୟାର୍ କରିବା ପୂର୍ବରୁ ଆଡ଼ଅନ୍ sunrise ଫାଇଲ୍‌ଗୁଡ଼ିକ ଚାଲେ। ଏହି ସମୟରେ ଏକ sunrise ଫାଇଲ୍ ଏହା କରିପାରେ:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- ଆବଶ୍ୟକ ହେଲେ `BLOG_ID_CURRENT_SITE` ପରି sunrise-ସମୟ କନ୍ଷ୍ଟାଣ୍ଟ ପରିଭାଷିତ କରିପାରେ;
- ମଲ୍ଟି-ଟେନାନ୍ସି ସମନ୍ୱୟରେ ବ୍ୟବହୃତ ରାଉଟିଂ ଅବସ୍ଥା ସହିତ Ultimate Multisite sunrise ସହାୟକ ଅବସ୍ଥା ପଢ଼ିପାରେ।

Ultimate Multisite ନିଜ sunrise ଲୋଡର୍ ସମାପ୍ତ ହେବା ପରେ `wu_sunrise_loaded` ଫାୟାର୍ କରେ। sunrise ବୁଟସ୍ଟ୍ରାପ୍ ସମ୍ପୂର୍ଣ୍ଣ ହେବା ପରେ ଚାଲିବା ଉଚିତ, କିନ୍ତୁ ତଥାପି sunrise ଜୀବନଚକ୍ରର ଅଂଶ ଥିବା କୋଡ୍ ପାଇଁ ଏହି action ବ୍ୟବହାର କରନ୍ତୁ।

କେବଳ ସେହି ଫଙ୍କସନ୍‌ଗୁଡ଼ିକୁ କଲ୍ କରନ୍ତୁ ଯେଉଁଗୁଡ଼ିକ sunrise ପର୍ଯ୍ୟାୟରେ ପୂର୍ବରୁ ଲୋଡ୍ ହୋଇଛି। ଡାଟାବେସ୍-ଭାରୀ କାମ, ଟେମ୍ପଲେଟ୍ ରେଣ୍ଡରିଂ, HTTP ଅନୁରୋଧ, ଏବଂ ସାଧାରଣ ପ୍ଲଗଇନ୍ ଲୋଡ୍ କ୍ରମ ସମ୍ପୂର୍ଣ୍ଣ ହୋଇଛି ବୋଲି ଧାରଣ କରୁଥିବା କୋଡ୍ ଏଡ଼ାନ୍ତୁ।

## ନ୍ୟୁନତମ ଉଦାହରଣ

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

ଫାଇଲ୍ ଡିପ୍ଲୋୟ୍ କରିବା ପରେ, ଦୁଇଟି ପଥ ଏବେ ମଧ୍ୟ ଠିକ୍ ଭାବେ ବୁଟସ୍ଟ୍ରାପ୍ ହେଉଛି କି ନିଶ୍ଚିତ କରିବାକୁ ଏକ ମ୍ୟାପ୍ ହୋଇଥିବା ଡୋମେନ୍ ଏବଂ ଏକ ମ୍ୟାପ୍ ନହୋଇଥିବା ମୁଖ୍ୟ-ସାଇଟ୍ URL ଲୋଡ୍ କରନ୍ତୁ।
