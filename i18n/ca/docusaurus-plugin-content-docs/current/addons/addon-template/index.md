---
title: Plantilla d'Addon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Template

{{ADDON_DESCRIPTION}}

## Requisits

- WordPress 5.3 o més recent
- PHP 7.4 o més recent
- Plugin Ultimate Multisite (activat)

## Instal·lació

1. Carrega els fitxers de l'addon al directori `/wp-content/plugins/`
2. Activa el plugin des del menú 'Plugins' de WordPress
3. Configura les impostes de l'addon a l'administració de la xarxa

## Desenvolupament

### Configuració

```bash
# Instal·lar dependències
composer install
npm install

# Executar proves
npm run test

# Comprovar estàndards de codi
vendor/bin/phpcs
vendor/bin/phpstan

# Corregir problemes de estil de codi
vendor/bin/phpcbf

# Construir per a producció
npm run build
```

### Estructura del projecte

```
ultimate-multisite-addon-template/
├── inc/                          # Classes i incloques PHP
│   ├── class-multisite-ultimate-updater.php  # Gestor d'actualitzacions
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Funcionalitat principal
├── tests/                        # Proves unitàries
│   ├── bootstrap.php            # Bootstrap de les proves
│   ├── class-*-base.php         # Classe base de proves
│   └── class-*-test.php         # Casos de prova
├── views/                       # Fitxers de plantilla
├── assets/                      # Recursos estàtics
│   ├── css/                     # Fitxers de estil
│   ├── js/                      # Fitxers de JavaScript
│   └── images/                  # Imatges
├── lang/                        # Fitxers de llengua
├── composer.json                # Dependències PHP
├── package.json                 # Dependències Node.js
├── phpunit.xml.dist             # Configuració de PHPUnit
├── .phpcs.xml.dist              # Configuració d'estàndards de codi
└── rector.php                   # Regles de modernització de codi
```

### Proves

L'addon inclou un marc de proves complet:

- **Proves unitàries**: Proves basades en PHPUnit amb la suite de proves de WordPress
- **Classe base de proves**: Proporciona mètodes d'ajuda per a escenaris de prova comuns
- **Cobertura de proves**: Configurades per rastrejar la cobertura de codi
- **Proves Multisite**: Les proves s'executen en un entorn multisite

### Estàndards de codi

- **Estàndards de codi de WordPress**: Aplicats mitjançant PHPCS
- **Compatibilitat PHP 7.4+**: Suporta funcions modernes de PHP
- **Anàlisi estàtica**: Integració de PHPStan per a la verificació de tipus
- **Modernització de codi**: Regles de Rector per a les actualitzacions de PHP

### Sistema de construcció (Build System)

- **Processament d'recursos**: Minificació per a fitxers CSS/JS
- **Traducció**: Generació de fitxer POT
- **Embalatge (Packaging)**: Creació d'arxiu per a la distribució
- **Mode de desenvolupament**: Recursos no minificats per a la depuració

## Configuració

L'addon suporta diverses opcions de configuració accessibles a través de l'interfície d'administració de la xarxa.

## Hooks i Filtres

### Accions (Actions)

- `ultimate-multisite-addon-template_init` - S'executa després de l'inicialització de l'addon
- `ultimate-multisite-addon-template_loaded` - S'executa després de carregar tots els fitxers de l'addon

### Filtres (Filters)

- `ultimate-multisite-addon-template_settings` - Modifica les impostes de l'addon
- `ultimate-multisite-addon-template_enabled` - Sobrepassa l'estat d'habilitar/deshabilitar de l'addon

## Llicència

Aquest addon està llicenciós sota GPL v3 o més recent.

## Suport

Per a suport i documentació, visita [MultisiteUltimate.com](https://multisiteultimate.com)
## Historial de canvis (Changelog)

- Versió 1.0.1 (2025-09-28): canvi de prefix a ultimate-multisite; actualització del domini de text; increment de versió.


- Versió (2025-09-28): canvi de prefix a ultimate-multisite; actualització del domini de text; increment de versió.
