---
title: Documentação do Desenvolvedor
sidebar_position: 1
_i18n_hash: 6443e353aea8cf7592387aa5d9658951
---
# Documentação do Desenvolvedor

Este guia fornece aos desenvolvedores tudo o que é necessário para integrar, estender ou desenvolver addons para Ultimate Multisite. Ultimate Multisite transforma uma rede WordPress Multisite em uma plataforma Website-as-a-Service (WaaS).

## O que está disponível

- **[REST API](./rest-api/overview)** — Operações CRUD completas para todas as entidades (clientes, sites, associações, pagamentos, produtos, domínios) com autenticação por chave de API
- **[Hooks Reference](./hooks/guide)** — 200+ ganchos de ação e 280+ ganchos de filtro para eventos de ciclo de vida e personalização
- **[Integration Guide](./integration-guide/)** — Exemplos de integração com CRM, análises, gateways personalizados e webhooks
- **[Code Examples](./code-examples/)** — Padrões avançados para precificação dinâmica, provisionamento de sites, limitações personalizadas e processamento multi-gateway
- **[Addon Development](./addon-development/getting-started)** — Estrutura estruturada para construir plugins de addon

## Requisitos

- Instalação do WordPress Multisite
- PHP 7.4 ou superior
- Plugin Ultimate Multisite ativado

## Início Rápido

### Use a REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Acione eventos

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Construa um Addon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Veja cada seção para documentação detalhada e exemplos.
