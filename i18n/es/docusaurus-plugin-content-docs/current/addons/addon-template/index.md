---
title: Plantilla de complemento
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Plantilla de Complemento

{{ADDON_DESCRIPTION}}

## Requisitos

- WordPress 5.3 o superior
- PHP 7.4 o superior
- Multisite Ultimate plugin (activo)

## Instalación

1. Sube los archivos del complemento a tu directorio `/wp-content/plugins/`
2. Activa el complemento a través del menú 'Plugins' en WordPress
3. Configura la configuración del complemento en el administrador de la red

## Desarrollo

### Configuración

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

### Estructura del Proyecto

```
ultimate-multisite-addon-template/
├── inc/                          # PHP classes and includes
│   ├── class-multisite-ultimate-updater.php  # Update handler
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Main functionality
├── tests/                        # Unit tests
│   ├── bootstrap.php            # Test bootstrap
│   ├── class-*-base.php         # Base test class
│   └── class-*-test.php         # Test cases
├── views/                       # Template files
├── assets/                      # Static assets
│   ├── css/                     # Stylesheets
│   ├── js/                      # JavaScript files
│   └── images/                  # Images
├── lang/                        # Language files
├── composer.json                # PHP dependencies
├── package.json                 # Node.js dependencies
├── phpunit.xml.dist             # PHPUnit configuration
├── .phpcs.xml.dist              # Code standards configuration
└── rector.php                   # Code modernization rules
```

### Pruebas

El complemento incluye un marco de pruebas integral:

- **Pruebas Unitarias**: pruebas basadas en PHPUnit con el conjunto de pruebas de WordPress
- **Clase Base de Pruebas**: proporciona métodos auxiliares para escenarios de prueba comunes
- **Cobertura de Pruebas**: configurado para rastrear la cobertura de código
- **Pruebas Multisitio**: pruebas ejecutadas en un entorno multisite

### Estándares de Código

- **Estándares de Codificación de WordPress**: aplicados mediante PHPCS
- **Compatibilidad con PHP 7.4+**: se soportan características modernas de PHP
- **Análisis Estático**: integración de PHPStan para verificación de tipos
- **Modernización de Código**: reglas de Rector para actualizaciones de PHP

### Sistema de Construcción

- **Procesamiento de Activos**: minificación de archivos CSS/JS
- **Traducción**: generación de archivos POT
- **Empaquetado**: creación de archivos de distribución
- **Modo de Desarrollo**: activos sin minificar para depuración

## Configuración

El complemento admite varias opciones de configuración accesibles a través de la interfaz de administrador de la red.

## Ganchos y Filtros

### Acciones

- `ultimate-multisite-addon-template_init` - Se dispara después de la inicialización del complemento
- `ultimate-multisite-addon-template_loaded` - Se dispara después de que se cargan todos los archivos del complemento

### Filtros

- `ultimate-multisite-addon-template_settings` - Modifica la configuración del complemento
- `ultimate-multisite-addon-template_enabled` - Sobrescribe el estado de habilitación/deshabilitación del complemento

## Licencia

Este complemento está licenciado bajo la GPL v3 o posterior.

## Soporte

Para soporte y documentación, visita [MultisiteUltimate.com](https://multisiteultimate.com)

## Registro de Cambios

- Versión 1.0.1 (2025-09-28): renombrar prefijo a ultimate-multisite; actualizar dominio de texto; aumento de versión.
- Versión (2025-09-28): renombrar prefijo a ultimate-multisite; actualizar dominio de texto; aumento de versión.
