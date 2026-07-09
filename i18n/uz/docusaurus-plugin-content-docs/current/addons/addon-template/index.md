---
title: Qo‘shimcha shabloni
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Qo‘shimcha shabloni

{{ADDON_DESCRIPTION}}

## Talablar

- WordPress 5.3 yoki undan yuqori
- PHP 7.4 yoki undan yuqori
- Multisite Ultimate plagini (faol)

## O‘rnatish

1. Qo‘shimcha fayllarini `/wp-content/plugins/` katalogingizga yuklang
2. WordPress ichidagi 'Pluginlar' menyusi orqali pluginni faollashtiring
3. Qo‘shimcha sozlamalarini tarmoq adminida sozlang

## Ishlab chiqish

### Sozlash

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

### Loyiha tuzilmasi

```
ultimate-multisite-addon-template/
├── inc/                          # PHP klasslari va include fayllar
│   ├── class-multisite-ultimate-updater.php  # Yangilash ishlovchisi
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Asosiy funksionallik
├── tests/                        # Unit testlar
│   ├── bootstrap.php            # Test bootstrap
│   ├── class-*-base.php         # Asosiy test klassi
│   └── class-*-test.php         # Test holatlari
├── views/                       # Shablon fayllari
├── assets/                      # Statik assetlar
│   ├── css/                     # Uslublar jadvallari
│   ├── js/                      # JavaScript fayllari
│   └── images/                  # Rasmlar
├── lang/                        # Til fayllari
├── composer.json                # PHP bog‘liqliklari
├── package.json                 # Node.js bog‘liqliklari
├── phpunit.xml.dist             # PHPUnit konfiguratsiyasi
├── .phpcs.xml.dist              # Kod standartlari konfiguratsiyasi
└── rector.php                   # Kodni modernizatsiya qilish qoidalari
```

### Testlash

Qo‘shimcha keng qamrovli testlash freymvorkini o‘z ichiga oladi:

- **Unit testlar**: WordPress test to‘plami bilan PHPUnit asosidagi testlar
- **Asosiy test klassi**: Umumiy test ssenariylari uchun yordamchi metodlarni taqdim etadi
- **Test qamrovi**: Kod qamrovini kuzatish uchun sozlangan
- **Multisite testlash**: Testlar multisite muhitida ishlaydi

### Kod standartlari

- **WordPress kodlash standartlari**: PHPCS orqali majburiy qo‘llanadi
- **PHP 7.4+ mosligi**: Zamonaviy PHP funksiyalari qo‘llab-quvvatlanadi
- **Statik tahlil**: Tur tekshiruvi uchun PHPStan integratsiyasi
- **Kodni modernizatsiya qilish**: PHP yangilanishlari uchun Rector qoidalari

### Yig‘ish tizimi

- **Assetlarni qayta ishlash**: CSS/JS fayllari uchun minifikatsiya
- **Tarjima**: POT faylini yaratish
- **Qadoqlash**: Tarqatish uchun arxiv yaratish
- **Ishlab chiqish rejimi**: Nosozliklarni tuzatish uchun minifikatsiya qilinmagan assetlar

## Konfiguratsiya

Qo‘shimcha tarmoq admin interfeysi orqali kirish mumkin bo‘lgan turli konfiguratsiya variantlarini qo‘llab-quvvatlaydi.

## Hooklar va filtrlar

### Amallar

- `ultimate-multisite-addon-template_init` - Qo‘shimcha ishga tushirilgandan keyin ishga tushiriladi
- `ultimate-multisite-addon-template_loaded` - Barcha qo‘shimcha fayllari yuklangandan keyin ishga tushiriladi

### Filtrlar

- `ultimate-multisite-addon-template_settings` - Qo‘shimcha sozlamalarini o‘zgartirish
- `ultimate-multisite-addon-template_enabled` - Qo‘shimchaning yoqish/o‘chirish holatini bekor qilib belgilash

## Litsenziya

Ushbu qo‘shimcha GPL v3 yoki undan keyingi versiya ostida litsenziyalangan.

## Qo‘llab-quvvatlash

Qo‘llab-quvvatlash va hujjatlar uchun [MultisiteUltimate.com](https://multisiteultimate.com) saytiga tashrif buyuring
## O‘zgarishlar jurnali

- Versiya 1.0.1 (2025-09-28): prefiksni ultimate-multisite ga o‘zgartirish; matn domenini yangilash; versiyani oshirish.


- Versiya  (2025-09-28): prefiksni ultimate-multisite ga o‘zgartirish; matn domenini yangilash; versiyani oshirish.
