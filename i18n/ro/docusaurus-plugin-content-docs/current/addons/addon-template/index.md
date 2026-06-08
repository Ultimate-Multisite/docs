---
title: Șablon de Addon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Șablon de Addon

{{ADDON_DESCRIPTION}}

## Cerințe

- WordPress 5.3 sau versiune mai nouă
- PHP 7.4 sau versiune mai nouă
- Plugin-ul Ultimate Multisite (activ)

## Instalare

1. Urcați fișierele addon-ului în directorul dvs. `/wp-content/plugins/`
2. Activați plugin-ul prin meniul „Plugins” din WordPress
3. Configurați setările addon-ului în zona de administrare a rețelei (network admin)

## Dezvoltare

### Configurare (Setup)

```bash
# Instalează dependențele
composer install
npm install

# Rulează testele
npm run test

# Rulează verificările standardelor de cod
vendor/bin/phpcs
vendor/bin/phpstan

# Corectează problemele de stil al codului
vendor/bin/phpcbf

# Construiește pentru producție
npm run build
```

### Structura proiectului

```
ultimate-multisite-addon-template/
├── inc/                          # Clase și include-uri PHP
│   ├── class-multisite-ultimate-updater.php  # Handler de actualizare
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Funcționalitatea principală
├── tests/                        # Teste unitare
│   ├── bootstrap.php            # Bootstrap pentru teste
│   ├── class-*-base.php         # Clasa de bază pentru teste
│   └── class-*-test.php         # Cazuri de test
├── views/                       # Fișiere de șablon (template)
├── assets/                      # Resurse statice
│   ├── css/                     # Fișiere CSS
│   ├── js/                      # Fișiere JavaScript
│   └── images/                  # Imagini
├── lang/                        # Fișiere de limbă
├── composer.json                # Dependențe PHP
├── package.json                 # Dependențe Node.js
├── phpunit.xml.dist             # Configurația PHPUnit
├── .phpcs.xml.dist              # Configurația standardelor de cod
└── rector.php                   # Regulile de modernizare a codului
```

### Testare

Addon-ul include un cadru de testare cuprinzător:

- **Teste Unitare (Unit Tests)**: Teste bazate pe PHPUnit, cu suite de test WordPress
- **Clasa de Bază pentru Teste (Base Test Class)**: Oferă metode utilitare pentru scenarii comune de testare
- **Acoperirea Testelor (Test Coverage)**: Configurată pentru a urmări acoperirea codului
- **Testarea Multisite**: Testele rulează într-un mediu multisite

### Standarde de Cod

- **Standardele de Cod WordPress**: Aplicate prin PHPCS
- **Compatibilitate PHP 7.4+**: Suport pentru funcționalitățile moderne PHP
- **Analiză Statică**: Integrarea PHPStan pentru verificare de tipuri (type checking)
- **Modernizarea Codului**: Regulile Rector pentru actualizări PHP

### Sistemul de Build

- **Procesarea Resurselor (Asset Processing)**: Minificare pentru fișierele CSS/JS
- **Traducere (Translation)**: Generarea fișierelor POT
- **Ambalarea (Packaging)**: Crearea unui arhiv pentru distribuție
- **Modul de Dezvoltare (Development Mode)**: Resurse ne-minificate pentru depanare

## Configurare

Addon-ul suportă diverse opțiuni de configurare, accesibile prin interfața de administrare a rețelei (network admin).

## Hooks și Filtre

### Acțiuni (Actions)

- `ultimate-multisite-addon-template_init` - Se declanșează după inițializarea addon-ului
- `ultimate-multisite-addon-template_loaded` - Se declanșează după încărcarea tuturor fișierelor addon-ului

### Filtre (Filters)

- `ultimate-multisite-addon-template_settings` - Modifică setările addon-ului
- `ultimate-multisite-addon-template_enabled` - Anulează statutul de activare/dezactivare al addon-ului

## Licență

Acest addon este licențiat sub GPL v3 sau o versiune mai nouă.

## Suport

Pentru suport și documentație, vizitați [MultisiteUltimate.com](https://multisiteultimate.com)
## Changelog

- Versiunea 1.0.1 (2025-09-28): schimbarea prefixului în ultimate-multisite; actualizarea domeniului de text; creșterea versiunii.


- Versiunea (2025-09-28): schimbarea prefixului în ultimate-multisite; actualizarea domeniului de text; creșterea versiunii.
