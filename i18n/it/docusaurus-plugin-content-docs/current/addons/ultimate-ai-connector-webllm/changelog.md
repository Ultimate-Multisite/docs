---
title: Ultimate AI Connector per WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Changelog di Ultimate AI Connector per WebLLM

## Versione 1.1.0 — Rilasciata il 2026-04-09 {#version-110--released-on-2026-04-09}

* Nuovo: Widget di chat flottante con indicatore di stato nella barra di amministrazione — qualsiasi utente loggato può inviare prompt all'LLM lato browser direttamente dal front-end.
* Nuovo: Runtime SharedWorker — il motore MLC ora viene eseguito in un SharedWorker, in modo che più schede condividano una sessione GPU invece di competere per essa.
* Nuovo: Intercettore middleware apiFetch — le richieste WordPress REST che corrispondono al pattern AI Client SDK vengono reindirizzate in modo trasparente al broker locale WebLLM, senza bisogno di un round-trip HTTP di loopback.
* Nuovo: Interfaccia utente (UI) delle impostazioni del widget nel pannello Connector per attivare/disattivare il widget di chat e configurare il comportamento di auto-prompt.
* Fix: Forza il backend cache IndexedDB in modo che i download dei pesi del modello sopravvivano ai reindirizzamenti CDN di HuggingFace xet che interrompono il percorso predefinito dell'API Cache.
* Fix: Salta l'override del KV-cache context_window per i modelli di embedding (non hanno un decoder e l'override ha causato un errore di runtime).
* Fix: Pubblicizza il modello candidato per l'avvio a freddo (cold-start) in /webllm/v1/models prima che la scheda worker sia caricata, in modo che i consumatori dell'SDK vedano un modello immediatamente.
* Fix: Aggancia WebLLM al filtro wpai_preferred_text_models in modo che la funzionalità Esperimenti AI reindirizzi al motore browser quando viene configurato un modello.
* Migliorato: Correzioni di cache-busting, normalizzazione dei contenuti e riferimenti hardware emerse durante i test end-to-end.

## Versione 1.0.0 — Rilascio iniziale {#version-100--initial-release}
