---
title: គំរូកម្មវិធីបន្ថែម
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# គំរូកម្មវិធីបន្ថែម {#addon-template}

{{ADDON_DESCRIPTION}}

## តម្រូវការ {#requirements}

- WordPress 5.3 ឬខ្ពស់ជាង
- PHP 7.4 ឬខ្ពស់ជាង
- កម្មវិធីបន្ថែម Multisite Ultimate (បានបើកដំណើរការ)

## ការដំឡើង {#installation}

1. ផ្ទុកឯកសារកម្មវិធីបន្ថែមឡើងទៅថត `/wp-content/plugins/` របស់អ្នក
2. បើកដំណើរការកម្មវិធីបន្ថែមតាមម៉ឺនុយ 'កម្មវិធីបន្ថែម' ក្នុង WordPress
3. កំណត់ការកំណត់របស់កម្មវិធីបន្ថែមក្នុងផ្នែកគ្រប់គ្រងបណ្តាញ

## ការអភិវឌ្ឍ {#development}

### ការរៀបចំ {#setup}

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

### រចនាសម្ព័ន្ធគម្រោង {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # ថ្នាក់ PHP និងឯកសារបញ្ចូល
│   ├── class-multisite-ultimate-updater.php  # ឧបករណ៍គ្រប់គ្រងការអាប់ដេត
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # មុខងារចម្បង
├── tests/                        # ការធ្វើតេស្តឯកតា
│   ├── bootstrap.php            # ការចាប់ផ្តើមតេស្ត
│   ├── class-*-base.php         # ថ្នាក់តេស្តមូលដ្ឋាន
│   └── class-*-test.php         # ករណីតេស្ត
├── views/                       # ឯកសារគំរូ
├── assets/                      # ទ្រព្យសកម្មឋិតិវន្ត
│   ├── css/                     # សន្លឹករចនាប័ទ្ម
│   ├── js/                      # ឯកសារ JavaScript
│   └── images/                  # រូបភាព
├── lang/                        # ឯកសារភាសា
├── composer.json                # ភាពអាស្រ័យ PHP
├── package.json                 # ភាពអាស្រ័យ Node.js
├── phpunit.xml.dist             # ការកំណត់ PHPUnit
├── .phpcs.xml.dist              # ការកំណត់ស្តង់ដារកូដ
└── rector.php                   # ច្បាប់ធ្វើទំនើបកម្មកូដ
```

### ការធ្វើតេស្ត {#testing}

កម្មវិធីបន្ថែមនេះរួមបញ្ចូលក្របខ័ណ្ឌធ្វើតេស្តពេញលេញ៖

- **ការធ្វើតេស្តឯកតា**៖ ការធ្វើតេស្តផ្អែកលើ PHPUnit ជាមួយชุดតេស្ត WordPress
- **ថ្នាក់តេស្តមូលដ្ឋាន**៖ ផ្តល់មេតូដជំនួយសម្រាប់សេណារីយ៉ូតេស្តទូទៅ
- **ការគ្របដណ្តប់តេស្ត**៖ បានកំណត់ឱ្យតាមដានការគ្របដណ្តប់កូដ
- **ការធ្វើតេស្ត Multisite**៖ ការធ្វើតេស្តដំណើរការក្នុងបរិស្ថាន multisite

### ស្តង់ដារកូដ {#code-standards}

- **ស្តង់ដារសរសេរកូដ WordPress**៖ អនុវត្តតាម PHPCS
- **ភាពត្រូវគ្នាជាមួយ PHP 7.4+**៖ គាំទ្រលក្ខណៈពិសេស PHP ទំនើប
- **ការវិភាគឋិតិវន្ត**៖ ការរួមបញ្ចូល PHPStan សម្រាប់ពិនិត្យប្រភេទ
- **ការធ្វើទំនើបកម្មកូដ**៖ ច្បាប់ Rector សម្រាប់ការអាប់ដេត PHP

### ប្រព័ន្ធសាងសង់ {#build-system}

- **ការដំណើរការទ្រព្យសកម្ម**៖ ការបង្រួមឯកសារ CSS/JS
- **ការបកប្រែ**៖ ការបង្កើតឯកសារ POT
- **ការវេចខ្ចប់**៖ ការបង្កើតប័ណ្ណសារសម្រាប់ចែកចាយ
- **របៀបអភិវឌ្ឍន៍**៖ ទ្រព្យសកម្មមិនបានបង្រួមសម្រាប់បំបាត់កំហុស

## ការកំណត់រចនាសម្ព័ន្ធ {#configuration}

កម្មវិធីបន្ថែមនេះគាំទ្រជម្រើសកំណត់រចនាសម្ព័ន្ធជាច្រើន ដែលអាចចូលប្រើបានតាមចំណុចប្រទាក់គ្រប់គ្រងបណ្តាញ។

## Hooks និង Filters {#hooks-and-filters}

### Actions {#actions}

- `ultimate-multisite-addon-template_init` - ត្រូវបានបញ្ឆេះបន្ទាប់ពីការចាប់ផ្តើមកម្មវិធីបន្ថែម
- `ultimate-multisite-addon-template_loaded` - ត្រូវបានបញ្ឆេះបន្ទាប់ពីឯកសារកម្មវិធីបន្ថែមទាំងអស់ត្រូវបានផ្ទុក

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - កែប្រែការកំណត់កម្មវិធីបន្ថែម
- `ultimate-multisite-addon-template_enabled` - បដិសេធស្ថានភាពបើក/បិទកម្មវិធីបន្ថែម

## អាជ្ញាប័ណ្ណ {#license}

កម្មវិធីបន្ថែមនេះមានអាជ្ញាប័ណ្ណក្រោម GPL v3 ឬជំនាន់ក្រោយ។

## ជំនួយ {#support}

សម្រាប់ជំនួយ និងឯកសារ សូមចូលមើល [MultisiteUltimate.com](https://multisiteultimate.com)
## កំណត់ហេតុផ្លាស់ប្តូរ {#changelog}

- កំណែ 1.0.1 (2025-09-28): ប្តូរឈ្មោះ prefix ទៅជា ultimate-multisite; អាប់ដេត text domain; ដំឡើងកំណែ។


- កំណែ  (2025-09-28): ប្តូរឈ្មោះ prefix ទៅជា ultimate-multisite; អាប់ដេត text domain; ដំឡើងកំណែ។
