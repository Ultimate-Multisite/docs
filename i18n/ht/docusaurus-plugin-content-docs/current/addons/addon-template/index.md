---
title: Modèl ekstansyon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Modèl Modil Siplemantè

Modèl ekstansyon — Ultimate Multisite.

## Kondisyon {#requirements}

- WordPress 5.3 oswa pi wo
- PHP 7.4 oswa pi wo
- plugin Multisite Ultimate (aktif)

## Enstalasyon {#installation}

1. Telechaje fichye modil siplemantè yo nan repètwa `/wp-content/plugins/` ou a
2. Aktive plugin nan atravè meni 'Plugins' nan WordPress
3. Konfigire paramèt modil siplemantè yo nan administrasyon rezo a

## Devlopman {#development}

### Konfigirasyon {#setup}

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

### Estrikti Pwojè {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Klas PHP ak fichye enkli
│   ├── class-multisite-ultimate-updater.php  # Jesyonè mizajou
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Fonksyonalite prensipal
├── tests/                        # Tès inite
│   ├── bootstrap.php            # Demaraj tès
│   ├── class-*-base.php         # Klas tès baz
│   └── class-*-test.php         # Ka tès
├── views/                       # Fichye modèl
├── assets/                      # Resous estatik
│   ├── css/                     # Fèy estil
│   ├── js/                      # Fichye JavaScript
│   └── images/                  # Imaj
├── lang/                        # Fichye lang
├── composer.json                # Depandans PHP
├── package.json                 # Depandans Node.js
├── phpunit.xml.dist             # Konfigirasyon PHPUnit
├── .phpcs.xml.dist              # Konfigirasyon estanda kòd
└── rector.php                   # Règ modènizasyon kòd
```

### Tès {#testing}

Modil siplemantè a gen ladan yon kad tès konplè:

- **Tès Inite**: Tès ki baze sou PHPUnit avèk suite tès WordPress
- **Klas Tès Baz**: Bay metòd èd pou senaryo tès komen
- **Kouvèti Tès**: Konfigire pou swiv kouvèti kòd
- **Tès Multisite**: Tès yo kouri nan anviwònman multisite

### Estanda Kòd {#code-standards}

- **Estanda Kodaj WordPress**: Aplike atravè PHPCS
- **Konpatibilite PHP 7.4+**: Karakteristik PHP modèn sipòte
- **Analiz Estatik**: Entegrasyon PHPStan pou verifikasyon tip
- **Modènizasyon Kòd**: Règ Rector pou amelyorasyon PHP

### Sistèm Konstriksyon {#build-system}

- **Pwosesis Resous**: Minifikasyon pou fichye CSS/JS
- **Tradiksyon**: Jenerasyon fichye POT
- **Anbalaj**: Kreyasyon achiv pou distribisyon
- **Mòd Devlopman**: Resous ki pa minifye pou debogaj

## Konfigirasyon {#configuration}

Modil siplemantè a sipòte divès opsyon konfigirasyon ki aksesib atravè koòdone administrasyon rezo a.

## Kwòk ak Filtè {#hooks-and-filters}

### Aksyon {#actions}

- `ultimate-multisite-addon-template_init` - Deklanche apre inisyalizasyon modil siplemantè a
- `ultimate-multisite-addon-template_loaded` - Deklanche apre tout fichye modil siplemantè yo chaje

### Filtè {#filters}

- `ultimate-multisite-addon-template_settings` - Modifye paramèt modil siplemantè yo
- `ultimate-multisite-addon-template_enabled` - Ranplase estati aktive/dezaktive modil siplemantè a

## Lisans {#license}

Modil siplemantè sa a gen lisans anba GPL v3 oswa pita.

## Sipò {#support}

Pou sipò ak dokimantasyon, vizite [MultisiteUltimate.com](https://multisiteultimate.com)
## Jounal Chanjman {#changelog}

- Vèsyon 1.0.1 (2025-09-28): chanje non prefiks la an ultimate-multisite; mete domèn tèks la ajou; ogmantasyon vèsyon.


- Vèsyon  (2025-09-28): chanje non prefiks la an ultimate-multisite; mete domèn tèks la ajou; ogmantasyon vèsyon.
