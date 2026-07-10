---
title: Modelo de complemento
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Modelo de complemento {#addon-template}

{{ADDON_DESCRIPTION}}

## Requisitos {#requirements}

- WordPress 5.3 ou superior
- PHP 7.4 ou superior
- complemento Multisite Ultimate (activo)

## Instalación {#installation}

1. Sube os ficheiros do complemento ao teu directorio `/wp-content/plugins/`
2. Activa o complemento a través do menú 'Complementos' en WordPress
3. Configura os axustes do complemento na administración da rede

## Desenvolvemento {#development}

### Configuración {#setup}

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

### Estrutura do proxecto {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Clases PHP e inclusións
│   ├── class-multisite-ultimate-updater.php  # Xestor de actualizacións
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Funcionalidade principal
├── tests/                        # Probas unitarias
│   ├── bootstrap.php            # Arranque das probas
│   ├── class-*-base.php         # Clase base de probas
│   └── class-*-test.php         # Casos de proba
├── views/                       # Ficheiros de modelo
├── assets/                      # Recursos estáticos
│   ├── css/                     # Follas de estilo
│   ├── js/                      # Ficheiros JavaScript
│   └── images/                  # Imaxes
├── lang/                        # Ficheiros de idioma
├── composer.json                # Dependencias PHP
├── package.json                 # Dependencias Node.js
├── phpunit.xml.dist             # Configuración de PHPUnit
├── .phpcs.xml.dist              # Configuración de estándares de código
└── rector.php                   # Regras de modernización de código
```

### Probas {#testing}

O complemento inclúe un marco de probas completo:

- **Probas unitarias**: Probas baseadas en PHPUnit co conxunto de probas de WordPress
- **Clase base de probas**: Proporciona métodos auxiliares para escenarios de proba comúns
- **Cobertura de probas**: Configurada para facer seguimento da cobertura do código
- **Probas Multisite**: As probas execútanse nun contorno multisite

### Estándares de código {#code-standards}

- **Estándares de codificación de WordPress**: Aplicados mediante PHPCS
- **Compatibilidade con PHP 7.4+**: Compatibilidade con funcionalidades modernas de PHP
- **Análise estática**: Integración de PHPStan para a comprobación de tipos
- **Modernización de código**: Regras de Rector para actualizacións de PHP

### Sistema de compilación {#build-system}

- **Procesamento de recursos**: Minificación de ficheiros CSS/JS
- **Tradución**: Xeración de ficheiros POT
- **Empaquetado**: Creación de arquivos para distribución
- **Modo de desenvolvemento**: Recursos sen minificar para depuración

## Configuración {#configuration}

O complemento admite varias opcións de configuración accesibles a través da interface de administración da rede.

## Hooks e filtros {#hooks-and-filters}

### Accións {#actions}

- `ultimate-multisite-addon-template_init` - Dispárase despois da inicialización do complemento
- `ultimate-multisite-addon-template_loaded` - Dispárase despois de cargárense todos os ficheiros do complemento

### Filtros {#filters}

- `ultimate-multisite-addon-template_settings` - Modificar os axustes do complemento
- `ultimate-multisite-addon-template_enabled` - Sobrescribir o estado de activación/desactivación do complemento

## Licenza {#license}

Este complemento está licenciado baixo a GPL v3 ou posterior.

## Soporte {#support}

Para soporte e documentación, visita [MultisiteUltimate.com](https://multisiteultimate.com)
## Rexistro de cambios {#changelog}

- Versión 1.0.1 (2025-09-28): renomear o prefixo a ultimate-multisite; actualizar o dominio de texto; incremento de versión.


- Versión  (2025-09-28): renomear o prefixo a ultimate-multisite; actualizar o dominio de texto; incremento de versión.
