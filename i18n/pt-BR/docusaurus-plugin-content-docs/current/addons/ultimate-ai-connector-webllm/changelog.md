---
title: Ultimate AI Connector para WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Registro de Alterações do Ultimate AI Connector para WebLLM

## Versão 1.1.0 — Lançada em 2026-04-09

* Novo: Widget de chat flutuante com indicador de status na barra de administração — qualquer usuário logado pode interagir com o LLM no navegador diretamente do frontend.
* Novo: Tempo de execução SharedWorker — o motor MLC agora roda em um SharedWorker, permitindo que várias abas compartilhem uma sessão de GPU em vez de competirem por ela.
* Novo: Interceptor middleware apiFetch — Requisições REST do WordPress que seguem o padrão do AI Client SDK são roteadas de forma transparente para o broker local do WebLLM, eliminando a necessidade de um ciclo de ida e volta HTTP de loopback.
* Novo: Interface de usuário (UI) de configurações do Widget no painel do Connector para alternar o widget de chat e configurar o comportamento de auto-prompt.
* Correção: Força o backend de cache IndexedDB para que os downloads de pesos do modelo sobrevivam aos redirecionamentos CDN do HuggingFace xet, que quebram o caminho padrão da Cache API.
* Correção: Ignora o override do KV-cache da context_window para modelos de embedding (eles não têm decoder e o override causava um erro em tempo de execução).
* Correção: Anuncia o modelo candidato de cold-start em /webllm/v1/models antes que a aba do worker tenha carregado, para que os consumidores do SDK vejam um modelo imediatamente.
* Correção: Conecta o WebLLM ao filtro wpai_preferred_text_models para que o recurso AI Experiments seja roteado para o motor do navegador quando um modelo for configurado.
* Melhorado: Correções de cache-busting, normalização de conteúdo e referência de hardware identificadas durante os testes de ponta a ponta (end-to-end).

## Versão 1.0.0 — Lançamento Inicial
