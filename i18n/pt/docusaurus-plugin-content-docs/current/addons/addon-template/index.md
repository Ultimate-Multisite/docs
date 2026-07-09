---
title: Modelo de Addon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Modelo de complemento

{{ADDON_DESCRIPTION}}

## Requisitos

- WordPress 5.3 ou superior
- PHP 7.4 ou superior
- plugin Multisite Ultimate (ativo)

## Instalação

1. Carregue os ficheiros do complemento para o seu diretório `/wp-content/plugins/`
2. Ative o plugin através do menu 'Plugins' no WordPress
3. Configure as definições do complemento na administração da rede

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
├── inc/                          # Classes PHP e includes
│   ├── class-multisite-ultimate-updater.php  # Gestor de atualizações
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Funcionalidade principal
├── tests/                        # Testes unitários
│   ├── bootstrap.php            # Bootstrap de testes
│   ├── class-*-base.php         # Classe base de teste
│   └── class-*-test.php         # Casos de teste
├── views/                       # Ficheiros de modelo
├── assets/                      # Recursos estáticos
│   ├── css/                     # Folhas de estilo
│   ├── js/                      # Ficheiros JavaScript
│   └── images/                  # Imagens
├── lang/                        # Ficheiros de idioma
├── composer.json                # Dependências PHP
├── package.json                 # Dependências Node.js
├── phpunit.xml.dist             # Configuração do PHPUnit
├── .phpcs.xml.dist              # Configuração de padrões de código
└── rector.php                   # Regras de modernização de código
```

### Testes

O complemento inclui uma framework de testes abrangente:

- **Testes Unitários**: Testes baseados em PHPUnit com o conjunto de testes do WordPress
- **Classe Base de Teste**: Fornece métodos auxiliares para cenários de teste comuns
- **Cobertura de Testes**: Configurada para monitorizar a cobertura de código
- **Testes Multisite**: Os testes são executados em ambiente multisite

### Padrões de Código

- **Padrões de Código do WordPress**: Aplicados via PHPCS
- **Compatibilidade com PHP 7.4+**: Suporte a funcionalidades modernas do PHP
- **Análise Estática**: Integração do PHPStan para verificação de tipos
- **Modernização de Código**: Regras do Rector para atualizações de PHP

### Sistema de Build

- **Processamento de Recursos**: Minificação de ficheiros CSS/JS
- **Tradução**: Geração de ficheiro POT
- **Empacotamento**: Criação de arquivo para distribuição
- **Modo de Desenvolvimento**: Recursos não minificados para depuração

## Configuração

O complemento suporta várias opções de configuração acessíveis através da interface de administração da rede.

## Hooks e Filtros

### Ações

- `ultimate-multisite-addon-template_init` - Acionado após a inicialização do complemento
- `ultimate-multisite-addon-template_loaded` - Acionado após todos os ficheiros do complemento serem carregados

### Filtros

- `ultimate-multisite-addon-template_settings` - Modificar as definições do complemento
- `ultimate-multisite-addon-template_enabled` - Substituir o estado de ativação/desativação do complemento

## Licença

Este complemento está licenciado sob a GPL v3 ou posterior.

## Suporte

Para suporte e documentação, visite [MultisiteUltimate.com](https://multisiteultimate.com)
## Registo de Alterações

- Versão 1.0.1 (2025-09-28): renomear o prefixo para ultimate-multisite; atualizar o domínio de texto; incremento de versão.


- Versão  (2025-09-28): renomear o prefixo para ultimate-multisite; atualizar o domínio de texto; incremento de versão.
