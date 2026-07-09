---
title: Нэмэлтийн загвар
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Нэмэлтийн загвар

{{ADDON_DESCRIPTION}}

## Шаардлагууд

- WordPress 5.3 эсвэл түүнээс дээш
- PHP 7.4 эсвэл түүнээс дээш
- Multisite Ultimate plugin (идэвхтэй)

## Суулгалт

1. Нэмэлтийн файлуудыг таны `/wp-content/plugins/` лавлах руу байршуулна
2. WordPress доторх 'Нэмэлтүүд' цэсээр plugin-ийг идэвхжүүлнэ
3. Сүлжээний админаас нэмэлтийн тохиргоог тохируулна

## Хөгжүүлэлт

### Тохируулга

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

### Төслийн бүтэц

```
ultimate-multisite-addon-template/
├── inc/                          # PHP классууд болон include файлууд
│   ├── class-multisite-ultimate-updater.php  # Шинэчлэлтийн зохицуулагч
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Үндсэн ажиллагаа
├── tests/                        # Unit тестүүд
│   ├── bootstrap.php            # Тестийн bootstrap
│   ├── class-*-base.php         # Үндсэн тестийн класс
│   └── class-*-test.php         # Тестийн тохиолдлууд
├── views/                       # Загвар файлууд
├── assets/                      # Статик хөрөнгүүд
│   ├── css/                     # Stylesheets
│   ├── js/                      # JavaScript файлууд
│   └── images/                  # Зургууд
├── lang/                        # Хэлний файлууд
├── composer.json                # PHP хамаарлууд
├── package.json                 # Node.js хамаарлууд
├── phpunit.xml.dist             # PHPUnit тохиргоо
├── .phpcs.xml.dist              # Кодын стандартын тохиргоо
└── rector.php                   # Код орчин үеийн болгох дүрмүүд
```

### Туршилт

Нэмэлт нь иж бүрэн туршилтын framework агуулна:

- **Unit тестүүд**: WordPress тестийн багцтай PHPUnit-д суурилсан тестүүд
- **Үндсэн тестийн класс**: Нийтлэг тестийн хувилбаруудад зориулсан туслах аргуудыг өгнө
- **Тестийн хамрах хүрээ**: Кодын хамрах хүрээг хянахаар тохируулсан
- **Multisite туршилт**: Тестүүд multisite орчинд ажиллана

### Кодын стандартууд

- **WordPress код бичих стандартууд**: PHPCS-ээр хэрэгжүүлнэ
- **PHP 7.4+ нийцтэй байдал**: Орчин үеийн PHP боломжуудыг дэмжинэ
- **Статик шинжилгээ**: Төрлийн шалгалтад зориулсан PHPStan интеграц
- **Код орчин үеийн болгох**: PHP шинэчлэлтэд зориулсан Rector дүрмүүд

### Build систем

- **Хөрөнгө боловсруулах**: CSS/JS файлуудад зориулсан жижигрүүлэлт
- **Орчуулга**: POT файл үүсгэх
- **Багцлалт**: Түгээлтэд зориулсан архив үүсгэх
- **Хөгжүүлэлтийн горим**: Алдаа засахад зориулсан жижигрүүлээгүй хөрөнгүүд

## Тохиргоо

Нэмэлт нь сүлжээний админ интерфейсээр хандах боломжтой төрөл бүрийн тохиргооны сонголтуудыг дэмжинэ.

## Hooks болон Filters

### Actions

- `ultimate-multisite-addon-template_init` - Нэмэлт эхлүүлсний дараа ажиллана
- `ultimate-multisite-addon-template_loaded` - Нэмэлтийн бүх файлууд ачаалагдсаны дараа ажиллана

### Filters

- `ultimate-multisite-addon-template_settings` - Нэмэлтийн тохиргоог өөрчлөх
- `ultimate-multisite-addon-template_enabled` - Нэмэлтийг идэвхжүүлэх/идэвхгүй болгох төлөвийг override хийх

## Лиценз

Энэ нэмэлт нь GPL v3 эсвэл түүнээс хойших хувилбарын лицензтэй.

## Дэмжлэг

Дэмжлэг болон баримт бичгийн хувьд [MultisiteUltimate.com](https://multisiteultimate.com)-д зочилно уу
## Өөрчлөлтийн бүртгэл

- Хувилбар 1.0.1 (2025-09-28): prefix-ийг ultimate-multisite болгон өөрчлөв; text domain шинэчилсэн; хувилбар нэмэгдүүлсэн.


- Хувилбар  (2025-09-28): prefix-ийг ultimate-multisite болгон өөрчлөв; text domain шинэчилсэн; хувилбар нэмэгдүүлсэн.
