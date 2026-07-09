---
title: Ultimate AI Connector dla WebLLM Dziennik zmian
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector dla WebLLM — Dziennik zmian {#ultimate-ai-connector-for-webllm-changelog}

## Wersja 1.1.0 — Wydano 2026-04-09 {#version-110--released-on-2026-04-09}

* Nowość: Pływający widget czatu ze wskaźnikiem statusu na pasku administracyjnym — każdy zalogowany użytkownik może bezpośrednio generować polecenia (prompt) dla LLM działającego w przeglądarce, prosto z front endu.
* Nowość: Środowisko uruchomieniowe SharedWorker — silnik MLC działa teraz w SharedWorker, dzięki czemu wiele zakładek dzieli jedną sesję GPU, zamiast konkurować o nią.
* Nowość: Interceptor middleware apiFetch — Żądania REST WordPress, które pasują do wzorca AI Client SDK, są transparentnie przekierowywane do lokalnego brokera WebLLM, eliminując potrzebę pełnego cyklu komunikacji HTTP (loopback).
* Nowość: Interfejs użytkownika (UI) ustawień widgetu w panelu Connector — umożliwia przełączanie widgetu czatu i konfigurację zachowania automatycznego generowania promptów.
* Poprawka: Wymuszenie backendu pamięci podręcznej IndexedDB, dzięki czemu pobieranie wag modelu przetrwa przekierowania CDN HuggingFace xet, które psuły domyślny ścieżkę Cache API.
* Poprawka: Pomijanie nadpisania KV-cache dla context_window dla modeli embeddingowych (nie mają one dekodera, a nadpisanie powodowało błąd wykonania).
* Poprawka: Ogłaszanie modelu kandydata do zimnego startu w /webllm/v1/models zanim karta worker załaduje się, dzięki czemu konsumenci SDK widzą model od razu.
* Poprawka: Podłączenie WebLLM do filtra wpai_preferred_text_models, aby funkcja Eksperymenty AI kierowała do silnika przeglądarki, gdy model jest skonfigurowany.
* Ulepszenie: Poprawki związane z cache-bustingiem, normalizacją treści i referencjami sprzętowymi, które ujawniły się podczas testów end-to-end.

## Wersja 1.0.0 — Wydanie początkowe {#version-100--initial-release}
