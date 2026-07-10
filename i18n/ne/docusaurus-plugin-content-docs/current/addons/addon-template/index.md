---
title: एडअन टेम्प्लेट
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# एडअन टेम्प्लेट {#addon-template}

{{ADDON_DESCRIPTION}}

## आवश्यकताहरू {#requirements}

- WordPress 5.3 वा उच्च
- PHP 7.4 वा उच्च
- Multisite Ultimate प्लगिन (सक्रिय)

## स्थापना {#installation}

1. एडअन फाइलहरू तपाईंको `/wp-content/plugins/` डाइरेक्टरीमा अपलोड गर्नुहोस्
2. WordPress मा 'Plugins' मेनु मार्फत प्लगिन सक्रिय गर्नुहोस्
3. नेटवर्क प्रशासकमा एडअन सेटिङहरू कन्फिगर गर्नुहोस्

## विकास {#development}

### सेटअप {#setup}

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

### परियोजना संरचना {#project-structure}

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

### परीक्षण {#testing}

एडअनमा व्यापक परीक्षण फ्रेमवर्क समावेश छ:

- **एकाइ परीक्षणहरू**: WordPress परीक्षण सुइटसहित PHPUnit-आधारित परीक्षणहरू
- **आधारभूत परीक्षण क्लास**: सामान्य परीक्षण परिदृश्यहरूका लागि सहायक विधिहरू प्रदान गर्छ
- **परीक्षण कभरेज**: कोड कभरेज ट्र्याक गर्न कन्फिगर गरिएको
- **Multisite परीक्षण**: परीक्षणहरू multisite वातावरणमा चल्छन्

### कोड मापदण्डहरू {#code-standards}

- **WordPress कोडिङ मापदण्डहरू**: PHPCS मार्फत लागू गरिएको
- **PHP 7.4+ अनुकूलता**: आधुनिक PHP सुविधाहरू समर्थित
- **स्थिर विश्लेषण**: प्रकार जाँचका लागि PHPStan एकीकरण
- **कोड आधुनिकीकरण**: PHP अपग्रेडहरूका लागि Rector नियमहरू

### निर्माण प्रणाली {#build-system}

- **एसेट प्रशोधन**: CSS/JS फाइलहरूका लागि मिनिफिकेसन
- **अनुवाद**: POT फाइल उत्पादन
- **प्याकेजिङ**: वितरणका लागि अभिलेख सिर्जना
- **विकास मोड**: डिबगिङका लागि अनमिनिफाइड एसेटहरू

## कन्फिगरेसन {#configuration}

एडअनले नेटवर्क प्रशासक इन्टरफेसमार्फत पहुँचयोग्य विभिन्न कन्फिगरेसन विकल्पहरू समर्थन गर्छ।

## हुकहरू र फिल्टरहरू {#hooks-and-filters}

### कार्यहरू {#actions}

- `ultimate-multisite-addon-template_init` - एडअन आरम्भ भएपछि ट्रिगर हुन्छ
- `ultimate-multisite-addon-template_loaded` - सबै एडअन फाइलहरू लोड भएपछि ट्रिगर हुन्छ

### फिल्टरहरू {#filters}

- `ultimate-multisite-addon-template_settings` - एडअन सेटिङहरू परिमार्जन गर्नुहोस्
- `ultimate-multisite-addon-template_enabled` - एडअन सक्षम/असक्षम स्थिति ओभरराइड गर्नुहोस्

## इजाजतपत्र {#license}

यो एडअन GPL v3 वा त्यसपछिको संस्करणअन्तर्गत इजाजतप्राप्त छ।

## समर्थन {#support}

समर्थन र दस्तावेजीकरणका लागि, [MultisiteUltimate.com](https://multisiteultimate.com) मा जानुहोस्
## परिवर्तन लग {#changelog}

- संस्करण 1.0.1 (2025-09-28): prefix लाई ultimate-multisite मा पुनःनामकरण; text domain अपडेट; संस्करण बढाइयो।


- संस्करण  (2025-09-28): prefix लाई ultimate-multisite मा पुनःनामकरण; text domain अपडेट; संस्करण बढाइयो।
