---
title: Registro de Alterações do Content Sync
sidebar_position: 99
_i18n_hash: 3b44da06636d21415abe77d8cef605f3
---
# Registro de Alterações do Content Sync

### Versão 1.1.0 - Lançado em 2025-12-31
* Novo: Suporte para sincronizar todos os tipos de post (posts, páginas, tipos de post personalizados)
* Novo: Filtragem de tipos de post na etapa de seleção de conteúdo
* Novo: Etapa de seleção de site de origem - sincronizar de qualquer site, não apenas do site principal
* Novo: Pré-seleção de sites filhos para sites de modelo
* Novo: Extração de mídia de post_content para todos os tipos de post
* Novo: Sincronização de taxonomia (categorias, tags, taxonomias personalizadas)
* Alterado: Renomeado de "Elementor Template Sync" para "Content Sync"
* Alterado: Etapa "Select Templates" renomeada para "Select Data"
* Melhorado: Código específico do Elementor agora só roda para o tipo de post elementor_library

### Versão 1.0.0 - Lançado em 2025-12-19
* Lançamento inicial
* Assistente multi-etapas para seleção de modelo e site
* Processamento em lote com feedback de progresso em tempo real
* Sincronização completa de mídia com remapeamento automático de ID
* Integração de configurações com Ultimate Multisite
* Suporte a exclusão de sites via configurações de rede
* Limpeza de cache do Elementor após sincronização
* Preservação da taxonomia de modelo
