---
title: Addon შაბლონი
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon შაბლონი

Addon შაბლონი — Ultimate Multisite.

## მოთხოვნები {#requirements}

- WordPress 5.3 ან უფრო ახალი
- PHP 7.4 ან უფრო ახალი
- Multisite Ultimate პლაგინი (აქტიური)

## ინსტალაცია {#installation}

1. ატვირთეთ addon-ის ფაილები თქვენს `/wp-content/plugins/` დირექტორიაში
2. გაააქტიურეთ პლაგინი WordPress-ის 'Plugins' მენიუდან
3. დააკონფიგურირეთ addon-ის პარამეტრები ქსელის ადმინისტრაციაში

## განვითარება {#development}

### დაყენება {#setup}

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

### პროექტის სტრუქტურა {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP კლასები და ჩასართავი ფაილები
│   ├── class-multisite-ultimate-updater.php  # განახლების დამმუშავებელი
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # ძირითადი ფუნქციონალი
├── tests/                        # ერთეულის ტესტები
│   ├── bootstrap.php            # ტესტის საწყისი ჩატვირთვა
│   ├── class-*-base.php         # საბაზო ტესტის კლასი
│   └── class-*-test.php         # ტესტის შემთხვევები
├── views/                       # შაბლონის ფაილები
├── assets/                      # სტატიკური რესურსები
│   ├── css/                     # სტილების ცხრილები
│   ├── js/                      # JavaScript ფაილები
│   └── images/                  # სურათები
├── lang/                        # ენის ფაილები
├── composer.json                # PHP დამოკიდებულებები
├── package.json                 # Node.js დამოკიდებულებები
├── phpunit.xml.dist             # PHPUnit კონფიგურაცია
├── .phpcs.xml.dist              # კოდის სტანდარტების კონფიგურაცია
└── rector.php                   # კოდის მოდერნიზაციის წესები
```

### ტესტირება {#testing}

addon მოიცავს ყოვლისმომცველ ტესტირების ჩარჩოს:

- **ერთეულის ტესტები**: PHPUnit-ზე დაფუძნებული ტესტები WordPress-ის სატესტო ნაკრებით
- **საბაზო ტესტის კლასი**: უზრუნველყოფს დამხმარე მეთოდებს გავრცელებული სატესტო სცენარებისთვის
- **ტესტის დაფარვა**: დაკონფიგურირებულია კოდის დაფარვის თვალყურის სადევნებლად
- **Multisite ტესტირება**: ტესტები სრულდება multisite გარემოში

### კოდის სტანდარტები {#code-standards}

- **WordPress კოდირების სტანდარტები**: აღსრულებულია PHPCS-ის მეშვეობით
- **PHP 7.4+ თავსებადობა**: მხარდაჭერილია თანამედროვე PHP ფუნქციები
- **სტატიკური ანალიზი**: PHPStan ინტეგრაცია ტიპების შესამოწმებლად
- **კოდის მოდერნიზაცია**: Rector-ის წესები PHP განახლებებისთვის

### აწყობის სისტემა {#build-system}

- **რესურსების დამუშავება**: CSS/JS ფაილების მინიფიკაცია
- **თარგმნა**: POT ფაილის გენერაცია
- **შეფუთვა**: არქივის შექმნა გავრცელებისთვის
- **განვითარების რეჟიმი**: არამინიფიცირებული რესურსები გამართვისთვის

## კონფიგურაცია {#configuration}

addon მხარს უჭერს სხვადასხვა კონფიგურაციის პარამეტრს, რომლებიც ხელმისაწვდომია ქსელის ადმინისტრაციის ინტერფეისიდან.

## ჰუკები და ფილტრები {#hooks-and-filters}

### მოქმედებები {#actions}

- `ultimate-multisite-addon-template_init` - გაეშვება addon-ის ინიციალიზაციის შემდეგ
- `ultimate-multisite-addon-template_loaded` - გაეშვება addon-ის ყველა ფაილის ჩატვირთვის შემდეგ

### ფილტრები {#filters}

- `ultimate-multisite-addon-template_settings` - addon-ის პარამეტრების შეცვლა
- `ultimate-multisite-addon-template_enabled` - addon-ის ჩართვა/გამორთვის სტატუსის გადაფარვა

## ლიცენზია {#license}

ეს addon ლიცენზირებულია GPL v3-ის ან უფრო გვიანდელი ვერსიის პირობებით.

## მხარდაჭერა {#support}

მხარდაჭერისა და დოკუმენტაციისთვის ეწვიეთ [MultisiteUltimate.com](https://multisiteultimate.com)
## ცვლილებების ჟურნალი {#changelog}

- ვერსია 1.0.1 (2025-09-28): პრეფიქსის სახელის შეცვლა ultimate-multisite-ად; ტექსტური დომენის განახლება; ვერსიის გაზრდა.


- ვერსია  (2025-09-28): პრეფიქსის სახელის შეცვლა ultimate-multisite-ად; ტექსტური დომენის განახლება; ვერსიის გაზრდა.
