---
title: Ultimate AI Connector for WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector WebLLM Módosítási Naplója

## Verzió 1.1.0 — Kiadása 2026-04-09 {#version-110--released-on-2026-04-09}

* Új: Úszó chat widget, admin-sáv státusz indikátorral — bármely bejelentkezett felhasználó közvetlenül a böngésző oldali LLM-hez tud kérdezést küldeni a front endről.
* Új: SharedWorker futtatási környezet — az MLC motor most SharedWorker-ben fut, így több tab egy SharedWorker-t használ, és nem versenyez róla.
* Új: apiFetch middleware interceptor — A WordPress REST kérések, amelyek illeszkednek az AI Client SDK mintázatához, átláthatóan továbbítók a helyi WebLLM broker-hez; nem szükséges loopback HTTP visszaút.
* Új: Widget beállítások felhasználói felülete (UI) a Connector panelben a chat widget kapcsolására és az automata prompt viselkedés konfigurálására.
* Javítás: Kötelező IndexedDB cache backend használata, így a modell súly letöltései megmaradnak a HuggingFace xet CDN átirányításai ellen, amelyek megszakítják az alapértelmezett Cache API útvonalát.
* Javítás: Kikapcsolja a context_window KV-cache átírását az embedding modellek esetén (mivel ezeknek nincs dekóderek, és az átírási művelet futtatási hibát okozott).
* Javítás: Hirdeti a hidegindítási jelölt modellt a /webllm/v1/models úton a SharedWorker tab betöltése előtt, így az SDK felhasználói azonnal látnak egy modellt.
* Javítás: WebLLM beépítése a wpai_preferred_text_models szűrőbe, így az AI Experiments funkció a böngésző motorra irányítja a modellt, ha az felhasználó beállította.
* Javított: Cache-busting, tartalom normalizáció és hardver-referenciák javítása, amelyeket az end-to-end tesztelés során tapasztaltunk.

## Verzió 1.0.0 — Első kiadás {#version-100--initial-release}
