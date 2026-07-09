---
title: Registo de alterações Multi-Rede
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Registo de alterações Multi-Network

### 1.3.0
* Novo: Pré-visualizador de modelos de rede — navegue e pré-visualize modelos de rede com um painel ao vivo antes de comprar.
* Novo: Seletor de modelo de rede no checkout — os clientes podem selecionar um modelo de rede durante o fluxo de checkout de inscrição.
* Novo: SSO com magic link entre redes — os clientes podem aceder a sub-redes de forma integrada através de autenticação por magic-link.
* Novo: Clonagem de media da rede — os media do site são duplicados corretamente ao clonar redes a partir de um modelo.
* Correção: A clonagem de rede agora funciona sem o addon de multi-tenancy; os privilégios de super admin são novamente concedidos após a clonagem.
* Correção: A criação de rede agora é compatível com WooCommerce e todos os gateways de pagamento.
* Correção: O número da porta agora é incluído na geração de domínio de fallback.
* Correção: O CSS do seletor de modelos foi movido para uma folha de estilos enfileirada para renderização correta em todos os temas.
* Correção: Proteção contra a chave `network_id` indefinida no âmbito da consulta do site.
* Correção: A verificação de permissões da rede antes da mudança de contexto evita erros de propriedades de tabela `wpdb`.

### 1.0.4
* Correção: Criação de nova rede.
* Correção: Renderização de menus.

### 1.0.3
* Atualizado para Plugin Update Checker v5
* Adicionados cabeçalhos modernos de plugin WordPress
* Compatibilidade melhorada com as versões mais recentes do WordPress

### 1.0.2
* Correções de erros e melhorias de desempenho
* Isolamento de rede melhorado

### 1.0.0
* Lançamento inicial
* Funcionalidade multinetwork principal
* Integração com Multisite Ultimate
