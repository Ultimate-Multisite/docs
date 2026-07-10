---
title: Documentação para Programadores
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Documentação para desenvolvedores {#developer-documentation}

Este guia fornece aos desenvolvedores tudo o que é necessário para integrar, estender ou desenvolver addons para Ultimate Multisite. Ultimate Multisite transforma uma rede WordPress Multisite numa plataforma Website-as-a-Service (WaaS).

## O que está disponível {#whats-available}

- **[REST API](./rest-api/overview)** — Operações CRUD completas para todas as entidades (clientes, sites, adesões, pagamentos, produtos, domínios) com autenticação por chave de API
- **[Referência de Hooks](./hooks/guide)** — Mais de 200 action hooks e mais de 280 filter hooks para eventos de ciclo de vida e personalização
- **[Guia de integração](./integration-guide/)** — Exemplos de integração com CRM, analytics, gateways personalizados e webhooks
- **[Exemplos de código](./code-examples/)** — Padrões avançados para preços dinâmicos, provisionamento de sites, limitações personalizadas e processamento multi-gateway
- **[Desenvolvimento de addons](./addon-development/getting-started)** — Estrutura organizada para criar plugins de addon

## Requisitos {#requirements}

- Instalação WordPress Multisite
- PHP 7.4 ou superior
- plugin Ultimate Multisite ativado

## Instalação com Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite está disponível no [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) como `ultimate-multisite/ultimate-multisite`. Este é o método de instalação recomendado para configurações WordPress baseadas em [Bedrock](https://roots.io/bedrock/) e outros ambientes geridos por Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Pacote renomeado (v2.6.1+)
O pacote Composer foi renomeado de `devstone/ultimate-multisite` para `ultimate-multisite/ultimate-multisite` na v2.6.1. Se o seu `composer.json` referencia o nome antigo do fornecedor, atualize a entrada require e execute `composer update`.
:::

Após a instalação, ative o plugin na rede a partir do Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Ou, se estiver a carregar o plugin como plugin must-use através do autoloader do Bedrock, use o filtro `wp_ultimo_skip_network_active_check` para ignorar a proteção de ativação:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Início rápido {#quick-start}

### Usar a REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Ligar-se a eventos {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Criar um addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Consulte cada secção para documentação detalhada e exemplos.
