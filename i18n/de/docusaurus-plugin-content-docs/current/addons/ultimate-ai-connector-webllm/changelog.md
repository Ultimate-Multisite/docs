---
title: Ultimate AI Connector für WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Versionshinweis

## Version 1.1.0 — Veröffentlicht am 2026-04-09

* Neu: Schwebendes Chat-Widget mit Statusanzeige in der Admin-Leiste — Jeder eingeloggte Benutzer kann den LLM im Browser direkt vom Frontend aus nutzen.
* Neu: SharedWorker-Laufzeitumgebung — Die MLC-Engine läuft nun in einem SharedWorker, sodass mehrere Tabs dieselbe GPU-Sitzung teilen, anstatt um sie zu kämpfen.
* Neu: apiFetch Middleware-Interceptor — WordPress REST-Anfragen, die dem AI Client SDK Muster entsprechen, werden transparent an den lokalen WebLLM-Broker weitergeleitet, ohne dass ein Loopback-HTTP-Roundtrip nötig ist.
* Neu: Widget-Einstellungen-UI im Connector-Panel, um das Chat-Widget ein- und auszuschalten und das Verhalten des automatischen Prompts zu konfigurieren.
* Fix: Erzwingt den IndexedDB-Cache-Backend, damit Modellgewichts-Downloads auch bei HuggingFace xet CDN-Weiterleitungen überleben, die den Standard-Cache-API-Pfad unterbrechen.
* Fix: Überspringt die context_window KV-Cache-Überschreibung für Embedding-Modelle (diese haben keinen Decoder, und die Überschreibung verursachte einen Laufzeitfehler).
* Fix: Veröffentlicht das Cold-Start-Kandidatenmodell in /webllm/v1/models, bevor der Worker-Tab geladen ist, damit SDK-Nutzer sofort ein Modell sehen.
* Fix: WebLLM wird in den wpai_preferred_text_models Filter eingebunden, sodass die AI Experiments Funktion auf die Browser-Engine zugreift, wenn ein Modell konfiguriert ist.
* Verbesserungen: Cache-Busting, Content-Normalisierungs- und Hardware-Referenz-Fehlerbehebungen, die während des End-to-End-Testings aufgetaucht sind.

## Version 1.0.0 — Erstveröffentlichung
