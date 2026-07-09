---
title: Registro de Alterações de Múltiplas Redes
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Changelog de Multi-Network {#multi-network-changelog}

### 1.3.0 {#130}
* Novo: Visualizador de modelos de rede — navegue e visualize modelos de rede com um painel ao vivo antes de comprar.
* Novo: Seletor de modelo de rede no checkout — clientes podem selecionar um modelo de rede durante o fluxo de checkout de inscrição.
* Novo: SSO por magic link entre redes — clientes podem acessar sub-redes de forma integrada via autenticação por magic-link.
* Novo: Clonagem de mídia de rede — a mídia do site é duplicada corretamente ao clonar redes a partir de um modelo.
* Correção: A clonagem de rede agora funciona sem o addon de multilocação; privilégios de super admin são concedidos novamente após a clonagem.
* Correção: A criação de rede agora é compatível com WooCommerce e todos os gateways de pagamento.
* Correção: O número da porta agora é incluído na geração de domínio de fallback.
* Correção: O CSS do seletor de modelos foi movido para uma folha de estilo enfileirada para renderização correta em todos os temas.
* Correção: Proteção contra chave `network_id` indefinida no escopo de consulta do site.
* Correção: A verificação de permissão de rede antes da troca de contexto evita erros de propriedade de tabela `wpdb`.

### 1.0.4 {#104}
* Correção: Criação de nova rede.
* Correção: Renderização de menus.

### 1.0.3 {#103}
* Atualizado para Plugin Update Checker v5
* Adicionados cabeçalhos modernos de plugin WordPress
* Compatibilidade aprimorada com as versões mais recentes do WordPress

### 1.0.2 {#102}
* Correções de bugs e melhorias de desempenho
* Isolamento de rede aprimorado

### 1.0.0 {#100}
* Lançamento inicial
* Funcionalidade principal de multirrede
* Integração com Multisite Ultimate
