---
title: Qaabka Addon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Qaab-dhismeedka Addon

Qaabka Addon — Ultimate Multisite.

## Shuruudaha {#requirements}

- WordPress 5.3 ama ka sarreeya
- PHP 7.4 ama ka sarreeya
- Multisite Ultimate plugin (firfircoon)

## Rakibid {#installation}

1. Geli faylasha addon-ka galkaaga `/wp-content/plugins/`
2. Ka hawlgeli plugin-ka adigoo adeegsanaya menu-ga 'Plugins' ee WordPress
3. Habee dejimaha addon-ka gudaha maamulka shabakadda

## Horumarin {#development}

### Diyaarin {#setup}

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

### Qaab-dhismeedka Mashruuca {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Fasallada PHP iyo ku-darista
│   ├── class-multisite-ultimate-updater.php  # Maamulaha cusboonaysiinta
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Shaqaynta ugu weyn
├── tests/                        # Tijaabooyinka unit
│   ├── bootstrap.php            # Bilowga tijaabada
│   ├── class-*-base.php         # Fasalka tijaabada aasaasiga ah
│   └── class-*-test.php         # Kiisaska tijaabada
├── views/                       # Faylasha qaab-dhismeedka
├── assets/                      # Hantida joogtada ah
│   ├── css/                     # Stylesheets
│   ├── js/                      # Faylasha JavaScript
│   └── images/                  # Sawirro
├── lang/                        # Faylasha luqadda
├── composer.json                # Ku-tiirsanaanta PHP
├── package.json                 # Ku-tiirsanaanta Node.js
├── phpunit.xml.dist             # Qaabeynta PHPUnit
├── .phpcs.xml.dist              # Qaabeynta heerarka koodhka
└── rector.php                   # Xeerarka casriyeynta koodhka
```

### Tijaabin {#testing}

Addon-ku wuxuu ka kooban yahay qaab-dhismeed tijaabin oo dhammaystiran:

- **Tijaabooyinka Unit**: Tijaabooyin ku salaysan PHPUnit oo leh xirmada tijaabada WordPress
- **Fasalka Tijaabada Aasaasiga ah**: Wuxuu bixiyaa habab caawiye ah oo loogu talagalay xaaladaha tijaabada caadiga ah
- **Daboolista Tijaabada**: Waxaa loo habeeyay in lagu raadraaco daboolista koodhka
- **Tijaabinta Multisite**: Tijaabooyinku waxay ku socdaan deegaanka multisite

### Heerarka Koodhka {#code-standards}

- **Heerarka Koodhka WordPress**: Waxaa lagu dhaqan-geliyaa PHPCS
- **La jaanqaadka PHP 7.4+**: Astaamaha PHP casriga ah waa la taageeraa
- **Falanqayn Joogto ah**: Isdhexgalka PHPStan ee hubinta nooca
- **Casriyeynta Koodhka**: Xeerarka Rector ee kor-u-qaadista PHP

### Nidaamka Dhisidda {#build-system}

- **Habaynta Hantida**: Yaraynta faylasha CSS/JS
- **Tarjumaad**: Abuurista faylka POT
- **Baakadeyn**: Abuurista kayd loogu talagalay qaybinta
- **Habka Horumarinta**: Hanti aan la yarayn oo loogu talagalay khalad-bixinta

## Qaabeyn {#configuration}

Addon-ku wuxuu taageeraa xulashooyin qaabeyn oo kala duwan oo laga heli karo isku-xirka maamulka shabakadda.

## Hooks iyo Filters {#hooks-and-filters}

### Actions {#actions}

- `ultimate-multisite-addon-template_init` - Waxaa la kiciyaa ka dib marka addon-ka la bilaabo
- `ultimate-multisite-addon-template_loaded` - Waxaa la kiciyaa ka dib marka dhammaan faylasha addon-ka la raro

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - Wax ka beddel dejimaha addon-ka
- `ultimate-multisite-addon-template_enabled` - Ka gudub xaaladda hawlgelinta/deminta addon-ka

## Ruqsad {#license}

Addon-kan waxaa lagu ruqsadeeyay GPL v3 ama ka dambeeya.

## Taageero {#support}

Taageero iyo dukumentiyo, booqo [MultisiteUltimate.com](https://multisiteultimate.com)
## Diiwaanka Isbeddellada {#changelog}

- Nooca 1.0.1 (2025-09-28): u beddel horgalaha ultimate-multisite; cusboonaysii text domain; kor u qaad nooca.


- Nooca  (2025-09-28): u beddel horgalaha ultimate-multisite; cusboonaysii text domain; kor u qaad nooca.
