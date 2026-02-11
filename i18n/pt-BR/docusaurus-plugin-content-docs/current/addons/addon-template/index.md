---
title: Modelo de Addon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Modelo de Addon

{{ADDON_DESCRIPTION}}

## Requisitos

- WordPress 5.3 ou superior
- PHP 7.4 ou superior
- Plugin Multisite Ultimate (ativo)

## Instalação

1. Faça upload dos arquivos do addon para o seu diretório `/wp-content/plugins/`
2. Ative o plugin através do menu 'Plugins' no WordPress
3. Configure as configurações do addon no administrador da rede

## Desenvolvimento

### Configuração

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

### Estrutura do Projeto

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

### Testes

O addon inclui um framework de testes abrangente:

- **Testes Unitários**: testes baseados em PHPUnit com o conjunto de testes do WordPress
- **Classe Base de Teste**: fornece métodos auxiliares para cenários de teste comuns
- **Cobertura de Testes**: configurado para rastrear cobertura de código
- **Teste Multisite**: testes executados em ambiente multisite

### Padrões de Código

- **Padrões de Codificação do WordPress**: aplicados via PHPCS
- **Compatibilidade com PHP 7.4+**: recursos modernos do PHP suportados
- **Análise Estática**: integração PHPStan para verificação de tipos
- **Modernização de Código**: regras Rector para atualizações de PHP

### Sistema de Build

- **Processamento de Ativos**: minificação de arquivos CSS/JS
- **Tradução**: geração de arquivo POT
- **Empacotamento**: criação de arquivo de distribuição
- **Modo de Desenvolvimento**: ativos não minificados para depuração

## Configuração

O addon suporta várias opções de configuração acessíveis através da interface de administração da rede.

## Ganchos e Filtros

### Ações

- `ultimate-multisite-addon-template_init` - Disparado após a inicialização do addon
- `ultimate-multisite-addon-template_loaded` - Disparado após todos os arquivos do addon serem carregados

### Filtros

- `ultimate-multisite-addon-template_settings` - Modifica as configurações do addon
- `ultimate-multisite-addon-template_enabled` - Sobrescreve o status de habilitar/desabilitar do addon

## Licença

Este addon é licenciado sob a GPL v3 ou posterior.

## Suporte

Para suporte e documentação, visite [MultisiteUltimate.com](https://multisiteultimate.com)

## Registro de Alterações

- Versão 1.0.1 (2025-09-28): renomear prefixo para ultimate-multisite; atualizar domínio de texto; aumento de versão.

- Versão (2025-09-28): renomear prefixo para ultimate-multisite; atualizar domínio de texto; aumento de versão.
