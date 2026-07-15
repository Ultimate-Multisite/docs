---
title: Ndebiri Mgbakwunye
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Ụkpụrụ Ndebiri Mgbakwunye

Ndebiri Mgbakwunye — Ultimate Multisite.

## Ihe achọrọ {#requirements}

- WordPress 5.3 ma ọ bụ nke ka elu
- PHP 7.4 ma ọ bụ nke ka elu
- plugin Multisite Ultimate (na-arụ ọrụ)

## Nwụnye {#installation}

1. Bulite faịlụ mgbakwunye ahụ na ndekọ `/wp-content/plugins/` gị
2. Mee ka plugin ahụ rụọ ọrụ site na menu 'Mgbakwunye' na WordPress
3. Hazie ntọala mgbakwunye ahụ na nchịkwa netwọkụ

## Mmepe {#development}

### Nhazi {#setup}

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

### Ọdịdị Projekti {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Klas PHP na faịlụ etinyere
│   ├── class-multisite-ultimate-updater.php  # Onye na-ahụ maka mmelite
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Ọrụ bụ isi
├── tests/                        # Nnwale unit
│   ├── bootstrap.php            # Bootstrap nnwale
│   ├── class-*-base.php         # Klas nnwale ntọala
│   └── class-*-test.php         # Okwu nnwale
├── views/                       # Faịlụ template
├── assets/                      # Akụrụngwa static
│   ├── css/                     # Stylesheets
│   ├── js/                      # Faịlụ JavaScript
│   └── images/                  # Foto
├── lang/                        # Faịlụ asụsụ
├── composer.json                # Ihe PHP dabere na ya
├── package.json                 # Ihe Node.js dabere na ya
├── phpunit.xml.dist             # Nhazi PHPUnit
├── .phpcs.xml.dist              # Nhazi ụkpụrụ code
└── rector.php                   # Iwu ime ka code bụrụ nke ọgbara ọhụrụ
```

### Nnwale {#testing}

Mgbakwunye ahụ gụnyere usoro nnwale zuru oke:

- **Nnwale Unit**: Nnwale dabere na PHPUnit nwere WordPress test suite
- **Klas Nnwale Ntọala**: Na-enye ụzọ enyemaka maka ọnọdụ nnwale ndị a na-ahụkarị
- **Mkpuchi Nnwale**: Ahaziri ka ọ soro mkpuchi code
- **Nnwale Multisite**: Nnwale na-agba n'ime gburugburu multisite

### Ụkpụrụ Code {#code-standards}

- **Ụkpụrụ Ide Code WordPress**: A na-amanye ya site na PHPCS
- **Ndakọrịta PHP 7.4+**: A na-akwado atụmatụ PHP ọgbara ọhụrụ
- **Nyocha Static**: Njikọ PHPStan maka ịlele ụdị
- **Ime ka Code bụrụ nke Ọgbara Ọhụrụ**: Iwu Rector maka nkwalite PHP

### Usoro Iwu {#build-system}

- **Nhazi Akụrụngwa**: Ibelata nha faịlụ CSS/JS
- **Nsụgharị**: Mmepụta faịlụ POT
- **Mbukọta**: Ịmepụta archive maka nkesa
- **Ọnọdụ Mmepe**: Akụrụngwa a na-ebelataghị maka debugging

## Nhazi {#configuration}

Mgbakwunye ahụ na-akwado nhọrọ nhazi dị iche iche a pụrụ ịnweta site na interface nchịkwa netwọkụ.

## Hooks na Filters {#hooks-and-filters}

### Omume {#actions}

- `ultimate-multisite-addon-template_init` - A na-akpalite ya mgbe mbido mgbakwunye gasịrị
- `ultimate-multisite-addon-template_loaded` - A na-akpalite ya mgbe ebubatara faịlụ mgbakwunye niile

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - Gbanwee ntọala mgbakwunye
- `ultimate-multisite-addon-template_enabled` - Dochie ọnọdụ ime ka mgbakwunye rụọ ọrụ/kwụsị ịrụ ọrụ

## Akwụkwọ Ikikere {#license}

E nyere mgbakwunye a ikikere n'okpuru GPL v3 ma ọ bụ nke mechara.

## Nkwado {#support}

Maka nkwado na akwụkwọ nduzi, gaa na [MultisiteUltimate.com](https://multisiteultimate.com)
## Ndekọ Mgbanwe {#changelog}

- Ụdị 1.0.1 (2025-09-28): gbanwee aha prefix ka ọ bụrụ ultimate-multisite; melite text domain; bulie ụdị.


- Ụdị  (2025-09-28): gbanwee aha prefix ka ọ bụrụ ultimate-multisite; melite text domain; bulie ụdị.
