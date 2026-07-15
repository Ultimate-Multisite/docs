---
title: Registo de alterações da Sincronização de conteúdo
sidebar_position: 99
_i18n_hash: 3b44da06636d21415abe77d8cef605f3
---
# Registo de alterações do Content Sync

### Versão 1.1.0 - Lançada em 2025-12-31 {#version-110---released-on-2025-12-31}
* Novo: Suporte para sincronizar todos os tipos de publicações (publicações, páginas, tipos de publicação personalizados)
* Novo: Filtragem por tipo de publicação no passo de seleção de conteúdo
* Novo: Passo de seleção do site de origem - sincronize a partir de qualquer site, não apenas do site principal
* Novo: Pré-seleção de site filho para sites de modelo
* Novo: Extração de multimédia de post_content para todos os tipos de publicações
* Novo: Sincronização de taxonomia (categorias, tags, taxonomias personalizadas)
* Alterado: Renomeado de "Elementor Template Sync" para "Content Sync"
* Alterado: Passo "Selecionar modelos" renomeado para "Selecionar dados"
* Melhorado: O código específico do Elementor agora só é executado para o tipo de publicação elementor_library

### Versão 1.0.0 - Lançada em 2025-12-19 {#version-100---released-on-2025-12-19}
* Lançamento inicial
* Assistente em vários passos para seleção de modelo e site
* Processamento em lote com feedback de progresso em tempo real
* Sincronização completa de multimédia com remapeamento automático de ID
* Integração de definições com Ultimate Multisite
* Suporte para exclusão de sites através das definições de rede
* Limpeza da cache do Elementor após a sincronização
* Preservação da taxonomia dos modelos
