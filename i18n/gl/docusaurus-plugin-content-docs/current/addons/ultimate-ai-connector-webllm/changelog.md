---
title: Rexistro de cambios de Ultimate AI Connector para WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Changelog {#ultimate-ai-connector-for-webllm-changelog}

## Versión 1.1.0 — Publicada o 2026-04-09 {#version-110--released-on-2026-04-09}

* Novo: Widget de chat flotante con indicador de estado na barra de administración — calquera usuario con sesión iniciada pode enviar prompts ao LLM do lado do navegador directamente desde o front end.
* Novo: Runtime SharedWorker — o motor MLC agora execútase nun SharedWorker para que varias lapelas compartan unha sesión de GPU en vez de loitar por ela.
* Novo: Interceptor de middleware apiFetch — as solicitudes REST de WordPress que coinciden co patrón do AI Client SDK encamíñanse de forma transparente ao broker local de WebLLM, sen precisar unha ida e volta HTTP de loopback.
* Novo: UI de axustes do widget no panel Connector para activar ou desactivar o widget de chat e configurar o comportamento de auto-prompt.
* Corrección: Forzar o backend de caché IndexedDB para que as descargas de pesos do modelo sobrevivan ás redireccións da CDN xet de HuggingFace que rompen a ruta predeterminada da Cache API.
* Corrección: Omitir a sobrescrita da caché KV de context_window para modelos de embedding (non teñen decodificador e a sobrescrita causaba un erro de runtime).
* Corrección: Anunciar o modelo candidato de arranque en frío en /webllm/v1/models antes de que a lapela do worker cargase, para que os consumidores do SDK vexan un modelo inmediatamente.
* Corrección: Enganchar WebLLM ao filtro wpai_preferred_text_models para que a funcionalidade AI Experiments encamiñe ao motor do navegador cando hai un modelo configurado.
* Mellorado: Invalidación da caché, normalización de contido e correccións de referencia de hardware aparecidas durante as probas de extremo a extremo.

## Versión 1.0.0 — Lanzamento inicial {#version-100--initial-release}
