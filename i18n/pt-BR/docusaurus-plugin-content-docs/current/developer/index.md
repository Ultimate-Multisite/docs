---
title: Documentação do desenvolvedor
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Documentação para desenvolvedores

Este guia fornece aos desenvolvedores tudo o que é necessário para integrar, estender ou desenvolver addons para Ultimate Multisite. Ultimate Multisite transforma uma rede WordPress Multisite em uma plataforma Website-as-a-Service (WaaS).

## O que está disponível {#whats-available}

- **[REST API](./rest-api/overview)** — Operações CRUD completas para todas as entidades (clientes, sites, assinaturas, pagamentos, produtos, domínios) com autenticação por chave de API
- **[Referência de Hooks](./hooks/guide)** — Mais de 200 hooks de ação e mais de 280 hooks de filtro para eventos de ciclo de vida e personalização
- **[Guia de integração](./integration-guide/)** — Exemplos para integração com CRM, analytics, gateways personalizados e webhooks
- **[Exemplos de código](./code-examples/)** — Padrões avançados para precificação dinâmica, provisionamento de sites, limitações personalizadas e processamento com múltiplos gateways
- **[Desenvolvimento de Addon](./addon-development/getting-started)** — Framework estruturado para criar plugins addon

## Requisitos {#requirements}

- Instalação WordPress Multisite
- PHP 7.4 ou superior
- Plugin Ultimate Multisite ativado

## Instalação com Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite está disponível no [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) como `ultimate-multisite/ultimate-multisite`. Este é o método de instalação recomendado para configurações WordPress baseadas em [Bedrock](https://roots.io/bedrock/) e outros ambientes gerenciados pelo Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Pacote renomeado (v2.6.1+)
O pacote Composer foi renomeado de `devstone/ultimate-multisite` para `ultimate-multisite/ultimate-multisite` na v2.6.1. Se o seu `composer.json` referencia o nome antigo do vendor, atualize a entrada require e execute `composer update`.
:::

Após a instalação, ative o plugin na rede pelo Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Ou, se você estiver carregando o plugin como um plugin must-use via autoloader do Bedrock, use o filtro `wp_ultimo_skip_network_active_check` para ignorar a proteção de ativação:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Início rápido {#quick-start}

### Use a REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Conecte-se a eventos com Hooks {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Crie um Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Veja cada seção para documentação detalhada e exemplos.
