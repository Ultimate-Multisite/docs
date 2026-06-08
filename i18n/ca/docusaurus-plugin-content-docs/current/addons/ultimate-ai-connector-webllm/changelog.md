---
title: Registre de canvis del Connector d'IA Ultimate per WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Diari de canvis d'Ultimate AI Connector per a WebLLM

## Versió 1.1.0 — Publicada el 2026-04-09

* **Nou:** Widget de xat flotant amb indicador d'estat a la barra d'administració: qualsevol usuari connectat pot emprar directament el LLM del navegador des del *front end*.
* **Nou:** Entorn de treball compartit (*SharedWorker*): el motor MLC ara s'executa en un *SharedWorker*, de manera que múltiples *tabs* comparteixen una sessió de GPU en lloc de competir per ella.
* **Nou:** Interceptor de *middleware* `apiFetch`: Les sol·licituds de WordPress REST que compleixen amb el patró del *AI Client SDK* es redirigeixen transparentment al *broker* local de WebLLM, sense necessitat de una tornada HTTP de bucle (*loopback*).
* **Nou:** Interfície d'usuari de configuració del widget al panell del Connector per activar el widget de xat i configurar el comportament de *auto-prompt*.
* **Correcció:** Forçar el *backend* de cache IndexedDB perquè les descarregades de pesos de model sobreviuen a les redireccionacions de CDN HuggingFace xet que estan afectant el camí predeterminat de l'API de Cache.
* **Correcció:** Saltar l'anulació del KV-cache de context_window per als models d'embedding (no tenen *decoder* i l'anulació va causar un error d'execució).
* **Correcció:** Anunciar el model candidat de inici fred (*cold-start*) a `/webllm/v1/models` abans que el *worker tab* estigui carregat, perquè els consumidors de l'SDK vegin un model immediatament.
* **Correcció:** Connectar WebLLM al filtre `wpai_preferred_text_models` perquè la funcionalitat AI Experiments es redirigeixi al motor del navegador quan es configura un model.
* **Millorat:** Correccions de *cache-busting*, normalització de contingut i referència de *hardware* detectades durant les proves de punta a punta.

## Versió 1.0.0 — Lliurament inicial
