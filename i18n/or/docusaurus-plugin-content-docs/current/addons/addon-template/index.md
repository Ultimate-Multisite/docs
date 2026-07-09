---
title: ଅତିରିକ୍ତ ଯୋଗାଂଶ ଢାଞ୍ଚା
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# ଆଡଅନ୍ ଛାଞ୍ଚ

{{ADDON_DESCRIPTION}}

## ଆବଶ୍ୟକତା

- WordPress 5.3 କିମ୍ବା ତାଠାରୁ ଉଚ୍ଚ
- PHP 7.4 କିମ୍ବା ତାଠାରୁ ଉଚ୍ଚ
- Multisite Ultimate ପ୍ଲଗଇନ୍ (ସକ୍ରିୟ)

## ସ୍ଥାପନ

1. ଆଡଅନ୍ ଫାଇଲଗୁଡ଼ିକୁ ଆପଣଙ୍କ `/wp-content/plugins/` ଡାଇରେକ୍ଟରୀକୁ ଅପଲୋଡ୍ କରନ୍ତୁ
2. WordPress ରେ 'ପ୍ଲଗଇନ୍‌ଗୁଡ଼ିକ' ମେନୁ ମାଧ୍ୟମରେ ପ୍ଲଗଇନ୍ ସକ୍ରିୟ କରନ୍ତୁ
3. ନେଟୱର୍କ ପ୍ରଶାସନରେ ଆଡଅନ୍ ସେଟିଂସ୍ ବିନ୍ୟାସ କରନ୍ତୁ

## ବିକାଶ

### ସେଟଅପ୍

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

### ପ୍ରକଳ୍ପ ଗଠନ

```
ultimate-multisite-addon-template/
├── inc/                          # PHP କ୍ଲାସ୍ ଏବଂ ଅନ୍ତର୍ଭୁକ୍ତି
│   ├── class-multisite-ultimate-updater.php  # ଅପଡେଟ୍ ହ୍ୟାଣ୍ଡଲର୍
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # ମୁଖ୍ୟ କାର୍ଯ୍ୟକ୍ଷମତା
├── tests/                        # ଏକକ ପରୀକ୍ଷା
│   ├── bootstrap.php            # ପରୀକ୍ଷା ବୁଟଷ୍ଟ୍ରାପ୍
│   ├── class-*-base.php         # ମୂଳ ପରୀକ୍ଷା କ୍ଲାସ୍
│   └── class-*-test.php         # ପରୀକ୍ଷା ଘଟଣା
├── views/                       # ଛାଞ୍ଚ ଫାଇଲଗୁଡ଼ିକ
├── assets/                      # ସ୍ଥିର ସମ୍ପଦ
│   ├── css/                     # ଷ୍ଟାଇଲଶିଟ୍‌ଗୁଡ଼ିକ
│   ├── js/                      # JavaScript ଫାଇଲଗୁଡ଼ିକ
│   └── images/                  # ଛବିଗୁଡ଼ିକ
├── lang/                        # ଭାଷା ଫାଇଲଗୁଡ଼ିକ
├── composer.json                # PHP ନିର୍ଭରତା
├── package.json                 # Node.js ନିର୍ଭରତା
├── phpunit.xml.dist             # PHPUnit ବିନ୍ୟାସ
├── .phpcs.xml.dist              # କୋଡ୍ ମାନକ ବିନ୍ୟାସ
└── rector.php                   # କୋଡ୍ ଆଧୁନିକୀକରଣ ନିୟମ
```

### ପରୀକ୍ଷା

ଏହି ଆଡଅନ୍‌ରେ ଏକ ବ୍ୟାପକ ପରୀକ୍ଷା ଫ୍ରେମୱର୍କ ରହିଛି:

- **ଏକକ ପରୀକ୍ଷା**: WordPress ପରୀକ୍ଷା ସୁଇଟ୍ ସହିତ PHPUnit-ଆଧାରିତ ପରୀକ୍ଷା
- **ମୂଳ ପରୀକ୍ଷା କ୍ଲାସ୍**: ସାଧାରଣ ପରୀକ୍ଷା ପରିସ୍ଥିତି ପାଇଁ ସହାୟକ ପଦ୍ଧତି ଯୋଗାଏ
- **ପରୀକ୍ଷା ଆବରଣ**: କୋଡ୍ ଆବରଣ ଟ୍ରାକ୍ କରିବାକୁ ବିନ୍ୟାସିତ
- **ମଲ୍ଟିସାଇଟ୍ ପରୀକ୍ଷା**: ପରୀକ୍ଷାଗୁଡ଼ିକ ମଲ୍ଟିସାଇଟ୍ ପରିବେଶରେ ଚାଲେ

### କୋଡ୍ ମାନକ

- **WordPress କୋଡିଂ ମାନକ**: PHPCS ମାଧ୍ୟମରେ ପ୍ରବଳିତ
- **PHP 7.4+ ସୁସଙ୍ଗତତା**: ଆଧୁନିକ PHP ବୈଶିଷ୍ଟ୍ୟ ସମର୍ଥିତ
- **ସ୍ଥିର ବିଶ୍ଳେଷଣ**: ପ୍ରକାର ଯାଞ୍ଚ ପାଇଁ PHPStan ସମାକଳନ
- **କୋଡ୍ ଆଧୁନିକୀକରଣ**: PHP ଅପଗ୍ରେଡ୍ ପାଇଁ Rector ନିୟମ

### ବିଲ୍ଡ ସିଷ୍ଟମ୍

- **ସମ୍ପଦ ପ୍ରକ୍ରିୟାକରଣ**: CSS/JS ଫାଇଲଗୁଡ଼ିକ ପାଇଁ ସଂକୁଚନ
- **ଅନୁବାଦ**: POT ଫାଇଲ ସୃଷ୍ଟି
- **ପ୍ୟାକେଜିଂ**: ବିତରଣ ପାଇଁ ଆର୍କାଇଭ୍ ସୃଷ୍ଟି
- **ବିକାଶ ମୋଡ୍**: ଡିବଗିଂ ପାଇଁ ଅସଂକୁଚିତ ସମ୍ପଦ

## ବିନ୍ୟାସ

ଏହି ଆଡଅନ୍ ନେଟୱର୍କ ପ୍ରଶାସନ ଇଣ୍ଟରଫେସ୍ ମାଧ୍ୟମରେ ପ୍ରବେଶଯୋଗ୍ୟ ବିଭିନ୍ନ ବିନ୍ୟାସ ବିକଳ୍ପକୁ ସମର୍ଥନ କରେ।

## ହୁକ୍ ଏବଂ ଫିଲ୍ଟର

### କାର୍ଯ୍ୟ

- `ultimate-multisite-addon-template_init` - ଆଡଅନ୍ ଆରମ୍ଭିକରଣ ପରେ ଚାଲୁ ହୁଏ
- `ultimate-multisite-addon-template_loaded` - ସମସ୍ତ ଆଡଅନ୍ ଫାଇଲ ଲୋଡ୍ ହେବା ପରେ ଚାଲୁ ହୁଏ

### ଫିଲ୍ଟର

- `ultimate-multisite-addon-template_settings` - ଆଡଅନ୍ ସେଟିଂସ୍ ସଂଶୋଧନ କରନ୍ତୁ
- `ultimate-multisite-addon-template_enabled` - ଆଡଅନ୍ ସକ୍ରିୟ/ନିଷ୍କ୍ରିୟ ସ୍ଥିତିକୁ ଓଭରରାଇଡ୍ କରନ୍ତୁ

## ଲାଇସେନ୍ସ

ଏହି ଆଡଅନ୍ GPL v3 କିମ୍ବା ପରବର୍ତ୍ତୀ ଲାଇସେନ୍ସ ଅଧୀନରେ ଲାଇସେନ୍ସପ୍ରାପ୍ତ।

## ସହାୟତା

ସହାୟତା ଏବଂ ଡକ୍ୟୁମେଣ୍ଟେସନ୍ ପାଇଁ, [MultisiteUltimate.com](https://multisiteultimate.com) ଦେଖନ୍ତୁ
## ପରିବର୍ତ୍ତନ ତାଲିକା

- Version 1.0.1 (2025-09-28): prefix କୁ ultimate-multisite ଭାବେ ପୁନର୍ନାମ କରନ୍ତୁ; text domain ଅପଡେଟ୍ କରନ୍ତୁ; version ବଢ଼ାନ୍ତୁ।


- Version  (2025-09-28): prefix କୁ ultimate-multisite ଭାବେ ପୁନର୍ନାମ କରନ୍ତୁ; text domain ଅପଡେଟ୍ କରନ୍ତୁ; version ବଢ଼ାନ୍ତୁ।
