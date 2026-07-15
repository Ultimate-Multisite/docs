---
title: Registro de alterações dos Planos medidos
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Changelog dos Planos Medidos

Versão 1.1.0 - Lançada em 2026-05-05
- Novo: cobrança de tokens de AI para subsites multisite — acompanhe e cobre o uso de tokens de AI em sites de clientes com tarifas configuráveis por token
- Novo: aplicação de conectores reconstruída com descoberta dinâmica de limites e gravação direta, garantindo precisão em tempo real em todos os conectores
- Correção: atualizações de tabelas do banco de dados agora estão corretamente alinhadas com as definições de esquema BerlinDB, evitando falhas de atualização em novas instalações
- Correção: callbacks de atualização do banco de dados convertidos para o formato correto, resolvendo falhas de atualização silenciosas
- Correção: valores fracionários agora são aceitos no campo de entrada AI Usage Overage Markup
- Correção: erros fatais e problemas de dupla inicialização resolvidos no carregamento do plugin
- Aprimorado: adicionado script npm check-env para que ambientes de desenvolvedor se autoconfigurem na primeira execução

### 1.0.3 {#103}
* Atualizado para Plugin Update Checker v5
* Adicionados cabeçalhos modernos de plugin WordPress
* Compatibilidade aprimorada com as versões mais recentes do WordPress
* Desempenho aprimorado do rastreamento de uso

### 1.0.2 {#102}
* Correções de bugs e melhorias de desempenho
* Relatórios de uso aprimorados

### 1.0.0 {#100}
* Lançamento inicial
* Funcionalidade principal de cobrança medida
* Rastreamento de uso e cálculo de excedentes
* Geração automática de faturas
