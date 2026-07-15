---
title: యాడ్-ఆన్ టెంప్లేట్
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# యాడ్‌ఆన్ టెంప్లేట్

యాడ్-ఆన్ టెంప్లేట్ — Ultimate Multisite.

## అవసరాలు {#requirements}

- WordPress 5.3 లేదా అంతకంటే ఎక్కువ
- PHP 7.4 లేదా అంతకంటే ఎక్కువ
- Multisite Ultimate plugin (యాక్టివ్‌గా ఉండాలి)

## ఇన్‌స్టాలేషన్ {#installation}

1. యాడ్‌ఆన్ ఫైళ్లను మీ `/wp-content/plugins/` డైరెక్టరీలోకి అప్‌లోడ్ చేయండి
2. వర్డ్‌ప్రెస్ లోని 'Plugins' మెనూ ద్వారా ప్లగిన్‌ను యాక్టివేట్ చేయండి
3. నెట్‌వర్క్ అడ్మిన్ లో యాడ్‌ఆన్ సెట్టింగ్‌లను కాన్ఫిగర్ చేయండి

## డెవలప్‌మెంట్ {#development}

### సెటప్ {#setup}

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

### ప్రాజెక్ట్ స్ట్రక్చర్ {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP క్లాసులు మరియు ఇన్‌క్లూడ్స్
│   ├── class-multisite-ultimate-updater.php  # అప్‌డేట్ హ్యాండ్లర్
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # ప్రధాన ఫంక్షనాలిటీ
├── tests/                        # యూనిట్ టెస్ట్‌లు
│   ├── bootstrap.php            # టెస్ట్ బూట్‌స్ట్రాప్
│   ├── class-*-base.php         # బేస్ టెస్ట్ క్లాస్
│   └── class-*-test.php         # టెస్ట్ కేసులు
├── views/                       # టెంప్లేట్ ఫైళ్లు
├── assets/                      # స్టాటిక్ యాస్సెట్‌లు
│   ├── css/                     # స్టైల్షీట్‌లు
│   ├── js/                      # JavaScript ఫైళ్లు
│   └── images/                  # చిత్రాలు
├── lang/                        # భాషా ఫైళ్లు
├── composer.json                # PHP డిపెండెన్సీలు
├── package.json                 # Node.js డిపెండెన్సీలు
├── phpunit.xml.dist             # PHPUnit కాన్ఫిగరేషన్
├── .phpcs.xml.dist              # కోడ్ స్టాండర్డ్స్ కాన్ఫిగరేషన్
└── rector.php                   # కోడ్ మోడర్నైజేషన్ నియమాలు
```

### టెస్టింగ్ {#testing}

ఈ యాడ్‌ఆన్ ఒక సమగ్రమైన టెస్టింగ్ ఫ్రేమ్‌వర్క్‌ను కలిగి ఉంది:

- **యూనిట్ టెస్ట్‌లు**: వర్డ్‌ప్రెస్ టెస్ట్ సూట్‌తో కూడిన PHPUnit ఆధారిత టెస్ట్‌లు
- **బేస్ టెస్ట్ క్లాస్**: సాధారణ టెస్ట్ దృశ్యాల కోసం సహాయక పద్ధతులను (helper methods) అందిస్తుంది
- **టెస్ట్ కవరేజ్**: కోడ్ కవరేజీని ట్రాక్ చేయడానికి కాన్ఫిగర్ చేయబడింది
- **మల్టీసైట్ టెస్టింగ్**: మల్టీసైట్ ఎన్విరాన్‌మెంట్‌లో టెస్ట్‌లు రన్ అవుతాయి

### కోడ్ స్టాండర్డ్స్ {#code-standards}

- **WordPress కోడింగ్ స్టాండర్డ్స్**: PHPCS ద్వారా అమలు చేయబడుతుంది
- **PHP 7.4+ కంపాటిబిలిటీ**: ఆధునిక PHP ఫీచర్లు మద్దతు ఇస్తాయి
- **స్టాటిక్ అనాలిసిస్**: టైప్ చెకింగ్ కోసం PHPStan ఇంటిగ్రేషన్
- **కోడ్ మోడర్నైజేషన్**: PHP అప్‌గ్రేడ్‌ల కోసం Rector నియమాలు

### బిల్డ్ సిస్టమ్ {#build-system}

- **యాస్సెట్ ప్రాసెసింగ్**: CSS/JS ఫైళ్ల కోసం మినిఫికేషన్
- **ట్రాన్స్‌లేషన్**: POT ఫైల్ జనరేషన్
- **ప్యాకేజింగ్**: డిస్ట్రిబ్యూషన్‌ కోసం ఆర్కైవ్ సృష్టి
- **డెవలప్‌మెంట్ మోడ్**: డీబగ్గింగ్ కోసం మినిఫై చేయని యాస్సెట్‌లు

## కాన్ఫిగరేషన్ {#configuration}

ఈ యాడ్‌ఆన్ నెట్‌వర్క్ అడ్మిన్ ఇంటర్‌ఫేస్ ద్వారా అందుబాటులో ఉండే వివిధ కాన్ఫిగరేషన్ ఆప్షన్‌లకు మద్దతు ఇస్తుంది.

## హుక్స్ మరియు ఫిల్టర్స్ {#hooks-and-filters}

### యాక్షన్స్ {#actions}

- `ultimate-multisite-addon-template_init` - యాడ్‌ఆన్ ఇనిషియలైజేషన్ అయిన తర్వాత ట్రిగ్గర్ అవుతుంది
- `ultimate-multisite-addon-template_loaded` - అన్ని యాడ్‌ఆన్ ఫైళ్లు లోడ్ అయిన తర్వాత ట్రిగ్గర్ అవుతుంది

### ఫిల్టర్స్ {#filters}

- `ultimate-multisite-addon-template_settings` - యాడ్‌ఆన్ సెట్టింగ్‌లను మార్చడానికి
- `ultimate-multisite-addon-template_enabled` - యాడ్‌ఆన్ ఎనేబుల్/డిసేబుల్ స్టేటస్‌ను ఓవర్‌రైడ్ చేయడానికి

## లైసెన్స్ {#license}

ఈ యాడ్‌ఆన్ GPL v3 లేదా అంతకంటే ఎక్కువ కింద లైసెన్స్ చేయబడింది.

## సపోర్ట్ {#support}

సపోర్ట్ మరియు డాక్యుమెంటేషన్ కోసం, [MultisiteUltimate.com](https://multisiteultimate.com) ని సందర్శించండి
## చేంజ్‌లాగ్ {#changelog}

- వెర్షన్ 1.0.1 (2025-09-28): ప్రిఫిక్స్‌ను ultimate-multisiteకి మార్చడం; టెక్స్ట్ డొమైన్‌ను అప్‌డేట్ చేయడం; వెర్షన్ బంప్.


- వెర్షన్ (2025-09-28): ప్రిఫిక్స్‌ను ultimate-multisiteకి మార్చడం; టెక్స్ట్ డొమైన్‌ను అప్‌డేట్ చేయడం; వెర్షన్ బంప్.
