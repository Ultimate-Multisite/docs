---
title: Հավելման ձևանմուշ
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Հավելման ձևանմուշ {#addon-template}

{{ADDON_DESCRIPTION}}

## Պահանջներ {#requirements}

- WordPress 5.3 կամ ավելի բարձր
- PHP 7.4 կամ ավելի բարձր
- Multisite Ultimate plugin (ակտիվ)

## Տեղադրում {#installation}

1. Վերբեռնեք հավելման ֆայլերը ձեր `/wp-content/plugins/` պանակ
2. Ակտիվացրեք plugin-ը WordPress-ի «Plugins» ընտրացանկի միջոցով
3. Կարգավորեք հավելման կարգավորումները ցանցի ադմինիստրատորի բաժնում

## Մշակում {#development}

### Կարգավորում {#setup}

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

### Նախագծի կառուցվածք {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP դասեր և ներառումներ
│   ├── class-multisite-ultimate-updater.php  # Թարմացման մշակիչ
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Հիմնական գործառույթներ
├── tests/                        # Միավորային թեստեր
│   ├── bootstrap.php            # Թեստի բեռնարկում
│   ├── class-*-base.php         # Հիմնական թեստային դաս
│   └── class-*-test.php         # Թեստային դեպքեր
├── views/                       # Ձևանմուշների ֆայլեր
├── assets/                      # Ստատիկ ռեսուրսներ
│   ├── css/                     # Ոճաթերթեր
│   ├── js/                      # JavaScript ֆայլեր
│   └── images/                  # Պատկերներ
├── lang/                        # Լեզվային ֆայլեր
├── composer.json                # PHP կախվածություններ
├── package.json                 # Node.js կախվածություններ
├── phpunit.xml.dist             # PHPUnit կարգավորում
├── .phpcs.xml.dist              # Կոդի ստանդարտների կարգավորում
└── rector.php                   # Կոդի արդիականացման կանոններ
```

### Թեստավորում {#testing}

Հավելումը ներառում է համապարփակ թեստավորման շրջանակ՝

- **Միավորային թեստեր**: PHPUnit-ի վրա հիմնված թեստեր՝ WordPress-ի թեստային փաթեթով
- **Հիմնական թեստային դաս**: Տրամադրում է օգնական մեթոդներ ընդհանուր թեստային սցենարների համար
- **Թեստային ծածկույթ**: Կարգավորված է կոդի ծածկույթը հետևելու համար
- **Multisite թեստավորում**: Թեստերն աշխատում են multisite միջավայրում

### Կոդի ստանդարտներ {#code-standards}

- **WordPress կոդավորման ստանդարտներ**: Պարտադրվում են PHPCS-ի միջոցով
- **PHP 7.4+ համատեղելիություն**: Աջակցվում են PHP-ի ժամանակակից հնարավորությունները
- **Ստատիկ վերլուծություն**: PHPStan ինտեգրում՝ տիպերի ստուգման համար
- **Կոդի արդիականացում**: Rector կանոններ PHP-ի թարմացումների համար

### Կառուցման համակարգ {#build-system}

- **Ռեսուրսների մշակում**: CSS/JS ֆայլերի փոքրացում
- **Թարգմանություն**: POT ֆայլի ստեղծում
- **Փաթեթավորում**: Արխիվի ստեղծում բաշխման համար
- **Մշակման ռեժիմ**: Չփոքրացված ռեսուրսներ՝ վրիպազերծման համար

## Կարգավորում {#configuration}

Հավելումն աջակցում է տարբեր կարգավորման տարբերակների, որոնք հասանելի են ցանցի ադմինիստրատորի միջերեսի միջոցով։

## Hooks և Filters {#hooks-and-filters}

### Գործողություններ {#actions}

- `ultimate-multisite-addon-template_init` - Գործարկվում է հավելման սկզբնավորումից հետո
- `ultimate-multisite-addon-template_loaded` - Գործարկվում է բոլոր հավելման ֆայլերի բեռնումից հետո

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - Փոփոխել հավելման կարգավորումները
- `ultimate-multisite-addon-template_enabled` - Վերագրել հավելման միացման/անջատման կարգավիճակը

## Լիցենզիա {#license}

Այս հավելումը լիցենզավորված է GPL v3 կամ ավելի ուշ տարբերակի ներքո։

## Աջակցություն {#support}

Աջակցության և փաստաթղթերի համար այցելեք [MultisiteUltimate.com](https://multisiteultimate.com)
## Փոփոխությունների մատյան {#changelog}

- Տարբերակ 1.0.1 (2025-09-28): վերանվանել նախածանցը ultimate-multisite-ի; թարմացնել տեքստային տիրույթը; տարբերակի բարձրացում։


- Տարբերակ  (2025-09-28): վերանվանել նախածանցը ultimate-multisite-ի; թարմացնել տեքստային տիրույթը; տարբերակի բարձրացում։
