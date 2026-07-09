---
title: Ultimate AI Connector for WebLLM Ännerungsprotokoll
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector fir WebLLM Ännerungsprotokoll

## Versioun 1.1.0 — Verëffentlecht den 2026-04-09

* Nei: Schwiewende Chat-Widget mat Admin-Bar-Statusindikator — all ageloggt Benotzer kann de browser-säitegen LLM direkt vum Frontend aus prompten.
* Nei: SharedWorker-Runtime — d’MLC-Engine leeft elo an engem SharedWorker, sou datt méi Tabs eng GPU-Sessioun deelen, amplaz dorëms ze kämpfen.
* Nei: apiFetch-Middleware-Interceptor — WordPress REST-Ufroen, déi dem AI Client SDK-Muster entspriechen, ginn transparent un de lokale WebLLM-Broker weidergeleet; kee Loopback-HTTP-Retourtrajet néideg.
* Nei: Widget-Astellungs-UI am Connector-Panel fir de Chat-Widget un- an auszeschalten an d’Auto-Prompt-Verhalen ze konfiguréieren.
* Fix: IndexedDB-Cache-Backend forcéieren, sou datt Downloads vu Modellgewiichter HuggingFace xet CDN-Redirects iwwerliewen, déi de standardméissege Cache API-Wee futti maachen.
* Fix: D’context_window KV-Cache-Override fir Embedding-Modeller iwwersprangen (si hu keen Decoder, an d’Override huet e Runtime-Feeler verursaacht).
* Fix: De Cold-Start-Kandidatemodell an /webllm/v1/models annoncéieren, ier de Worker-Tab gelueden ass, sou datt SDK-Konsumenten direkt e Modell gesinn.
* Fix: WebLLM an de wpai_preferred_text_models Filter integréieren, sou datt d’AI Experiments-Feature op d’Browser-Engine routéiert, wann e Modell konfiguréiert ass.
* Verbessert: Cache-Busting, Inhaltsnormaliséierung an Hardware-Referenz-Fixen, déi beim End-to-End-Testing opgedaucht sinn.

## Versioun 1.0.0 — Éischt Verëffentlechung
