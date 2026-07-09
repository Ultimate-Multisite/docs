---
title: Chitsanzo cha Chowonjezera
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Template ya Chowonjezera

{{ADDON_DESCRIPTION}}

## Zofunikira

- WordPress 5.3 kapena kupitirira
- PHP 7.4 kapena kupitirira
- pulogalamu yowonjezera ya Multisite Ultimate (yogwira ntchito)

## Kuyika

1. Kwezani mafayilo a chowonjezera ku chikwatu chanu cha `/wp-content/plugins/`
2. Yambitsani pulogalamu yowonjezera kudzera pa menyu ya 'Plugins' mu WordPress
3. Konzani zokonda za chowonjezera mu woyang'anira netiweki

## Chitukuko

### Kukhazikitsa

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

### Kapangidwe ka Projekiti

```
ultimate-multisite-addon-template/
├── inc/                          # Makalasi a PHP ndi zophatikizidwa
│   ├── class-multisite-ultimate-updater.php  # Woyang'anira zosintha
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Ntchito yayikulu
├── tests/                        # Mayeso a unit
│   ├── bootstrap.php            # Kuyambitsa mayeso
│   ├── class-*-base.php         # Kalasi yoyambira ya mayeso
│   └── class-*-test.php         # Milandu ya mayeso
├── views/                       # Mafayilo a template
├── assets/                      # Katundu wosasunthika
│   ├── css/                     # Stylesheets
│   ├── js/                      # Mafayilo a JavaScript
│   └── images/                  # Zithunzi
├── lang/                        # Mafayilo a chilankhulo
├── composer.json                # Zodalira za PHP
├── package.json                 # Zodalira za Node.js
├── phpunit.xml.dist             # Kasinthidwe ka PHPUnit
├── .phpcs.xml.dist              # Kasinthidwe ka miyezo ya code
└── rector.php                   # Malamulo okonzanso code kukhala yamakono
```

### Kuyesa

Chowonjezerachi chimaphatikiza chimango chokwanira choyesera:

- **Mayeso a Unit**: Mayeso ozikidwa pa PHPUnit okhala ndi WordPress test suite
- **Kalasi Yoyambira ya Mayeso**: Imapereka njira zothandizira pa zochitika zofala za mayeso
- **Kuphimba kwa Mayeso**: Yakonzedwa kuti izitsata kuchuluka kwa code yoyesedwa
- **Kuyesa kwa Multisite**: Mayeso amayendetsedwa mu chilengedwe cha multisite

### Miyezo ya Code

- **Miyezo ya Kulemba Code ya WordPress**: Imakakamizidwa kudzera pa PHPCS
- **Kugwirizana ndi PHP 7.4+**: Zinthu zamakono za PHP zimathandizidwa
- **Kusanthula Kosasunthika**: Kuphatikiza kwa PHPStan pofufuza mitundu
- **Kukonzanso Code Kukhala Yamakono**: Malamulo a Rector pa zosintha za PHP

### Dongosolo la Kumanga

- **Kukonza Katundu**: Kuchepetsa mafayilo a CSS/JS
- **Kumasulira**: Kupanga fayilo ya POT
- **Kulongedza**: Kupanga archive yogawira
- **Njira ya Chitukuko**: Katundu wosachepetsedwa wothandiza pa debugging

## Kasinthidwe

Chowonjezerachi chimathandiza zosankha zosiyanasiyana za kasinthidwe zomwe zimapezeka kudzera mu mawonekedwe a woyang'anira netiweki.

## Hooks ndi Filters

### Zochita

- `ultimate-multisite-addon-template_init` - Imayambitsidwa pambuyo poyambitsa chowonjezera
- `ultimate-multisite-addon-template_loaded` - Imayambitsidwa mafayilo onse a chowonjezera atatsitsidwa

### Filters

- `ultimate-multisite-addon-template_settings` - Sinthani zokonda za chowonjezera
- `ultimate-multisite-addon-template_enabled` - Dulani chikhalidwe choyatsa/kuzimitsa chowonjezera

## License

Chowonjezerachi chili ndi license ya GPL v3 kapena yapambuyo pake.

## Thandizo

Kuti mupeze thandizo ndi zolemba, pitani ku [MultisiteUltimate.com](https://multisiteultimate.com)
## Mbiri ya Zosintha

- Mtundu 1.0.1 (2025-09-28): sinthani prefix kukhala ultimate-multisite; sinthani text domain; kukweza mtundu.


- Mtundu  (2025-09-28): sinthani prefix kukhala ultimate-multisite; sinthani text domain; kukweza mtundu.
