---
title: Thempleite ea Tlatsetso
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Thempleite ya Tlatsetso

Thempleite ea Tlatsetso — Ultimate Multisite.

## Ditlhoko {#requirements}

- WordPress 5.3 kapa ho feta
- PHP 7.4 kapa ho feta
- Tlatsetso ya Multisite Ultimate (e sebetsang)

## Ho kenya {#installation}

1. Kenya difaele tsa tlatsetso bukeng ya hao ya `/wp-content/plugins/`
2. Kenya tlatsetso tshebetsong ka menyu ya 'Ditlatsetso' ho WordPress
3. Hlophisa disetting tsa tlatsetso ho motsamaisi wa netweke

## Ntshetsopele {#development}

### Tlhophiso {#setup}

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

### Sebopeho sa projeke {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Dikhlase tsa PHP le tse kenyelleditsweng
│   ├── class-multisite-ultimate-updater.php  # Motsamaisi wa dintlafatso
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Tshebetso e kgolo
├── tests/                        # Diteko tsa unit
│   ├── bootstrap.php            # Bootstrap ya teko
│   ├── class-*-base.php         # Khlase ya motheo ya teko
│   └── class-*-test.php         # Dintlha tsa diteko
├── views/                       # Difaele tsa thempleite
├── assets/                      # Dithoto tse sa fetoheng
│   ├── css/                     # Difaele tsa setaele
│   ├── js/                      # Difaele tsa JavaScript
│   └── images/                  # Ditshwantsho
├── lang/                        # Difaele tsa puo
├── composer.json                # Ditshetleho tsa PHP
├── package.json                 # Ditshetleho tsa Node.js
├── phpunit.xml.dist             # Tlhophiso ya PHPUnit
├── .phpcs.xml.dist              # Tlhophiso ya maemo a khoutu
└── rector.php                   # Melao ya ho ntjhafatsa khoutu
```

### Ho etsa diteko {#testing}

Tlatsetso ena e kenyelletsa moralo o pharalletseng wa diteko:

- **Diteko tsa Unit**: Diteko tse thehilweng ho PHPUnit ka sehlopha sa diteko sa WordPress
- **Khlase ya Motheo ya Teko**: E fana ka mekgwa ya thuso bakeng sa maemo a tlwaelehileng a teko
- **Kakaretso ya Diteko**: E hlophiseditswe ho sala morao kakaretso ya khoutu e lekilweng
- **Diteko tsa Multisite**: Diteko di matha tikolohong ya multisite

### Maemo a Khoutu {#code-standards}

- **Maemo a ho Ngola Khoutu a WordPress**: A qobellwa ka PHPCS
- **Ho Tshehetsa PHP 7.4+**: Dikarolo tsa sejwalejwale tsa PHP di a tshehetswa
- **Tlhahlobo e sa Fetoheng**: Kopanyo ya PHPStan bakeng sa ho hlahloba mefuta
- **Ho Ntjhafatsa Khoutu**: Melao ya Rector bakeng sa dintlafatso tsa PHP

### Sistimi ya ho Haha {#build-system}

- **Tshebetso ya Dithoto**: Ho fokotsa boholo ba difaele tsa CSS/JS
- **Phetolelo**: Tlhahiso ya faele ya POT
- **Ho paka**: Ho bopa archive bakeng sa kabo
- **Mokgwa wa Ntshetsopele**: Dithoto tse sa fokotswang bakeng sa ho lokisa diphoso

## Tlhophiso {#configuration}

Tlatsetso e tshehetsa dikgetho tse fapaneng tsa tlhophiso tse fumanehang ka sehokelo sa motsamaisi wa netweke.

## Dihoko le Disefe {#hooks-and-filters}

### Diketso {#actions}

- `ultimate-multisite-addon-template_init` - E qalwa ka mora ho qalisa tlatsetso
- `ultimate-multisite-addon-template_loaded` - E qalwa ka mora hore difaele tsohle tsa tlatsetso di kenngwe

### Disefe {#filters}

- `ultimate-multisite-addon-template_settings` - Fetola disetting tsa tlatsetso
- `ultimate-multisite-addon-template_enabled` - Hatella boemo ba ho bulela/tima tlatsetso

## Laesense {#license}

Tlatsetso ena e laesensitswe tlasa GPL v3 kapa ya morao ho moo.

## Tshehetso {#support}

Bakeng sa tshehetso le ditokomane, etela [MultisiteUltimate.com](https://multisiteultimate.com)
## Changelog {#changelog}

- Mofuta 1.0.1 (2025-09-28): reha prefix lebitso hape hore e be ultimate-multisite; ntjhafatsa text domain; nyolla mofuta.


- Mofuta  (2025-09-28): reha prefix lebitso hape hore e be ultimate-multisite; ntjhafatsa text domain; nyolla mofuta.
