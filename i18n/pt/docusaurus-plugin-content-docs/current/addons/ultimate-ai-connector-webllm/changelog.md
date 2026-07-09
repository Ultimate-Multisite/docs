---
title: Conector Definitivo de IA para WebLLM - Registo de alterações
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Changelog do Ultimate AI Connector for WebLLM

## Versão 1.1.0 — Lançada em 2026-04-09

* Novo: Widget de chat flutuante com indicador de estado na barra de administrador — qualquer utilizador com sessão iniciada pode enviar prompts ao LLM do lado do navegador diretamente a partir do front end.
* Novo: Runtime SharedWorker — o motor MLC agora é executado num SharedWorker para que vários separadores partilhem uma sessão de GPU em vez de competirem por ela.
* Novo: Intercetador middleware apiFetch — pedidos REST do WordPress que correspondem ao padrão AI Client SDK são encaminhados de forma transparente para o broker WebLLM local, sem necessidade de ida e volta HTTP por loopback.
* Novo: UI de definições do widget no painel Connector para ativar/desativar o widget de chat e configurar o comportamento de auto-prompt.
* Correção: Forçar o backend de cache IndexedDB para que os downloads de pesos do modelo sobrevivam a redirecionamentos da CDN xet do HuggingFace que quebram o caminho predefinido da Cache API.
* Correção: Ignorar a substituição de KV-cache context_window para modelos de embedding (não têm descodificador e a substituição causava um erro de runtime).
* Correção: Anunciar o modelo candidato de arranque a frio em /webllm/v1/models antes de o separador worker ter carregado, para que os consumidores do SDK vejam um modelo imediatamente.
* Correção: Integrar WebLLM no filtro wpai_preferred_text_models para que a funcionalidade AI Experiments encaminhe para o motor do navegador quando um modelo está configurado.
* Melhorado: Correções de cache-busting, normalização de conteúdo e referência de hardware identificadas durante testes end-to-end.

## Versão 1.0.0 — Lançamento inicial
