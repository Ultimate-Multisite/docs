---
title: Ultimate AI Connector WebLLM-rako aldaketen erregistroa
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM aldaketa-erregistroa {#ultimate-ai-connector-for-webllm-changelog}

## 1.1.0 bertsioa — 2026-04-09an argitaratua {#version-110--released-on-2026-04-09}

* Berria: Txat widget mugikorra admin-bar egoera-adierazlearekin — saioa hasita duen edozein erabiltzailek browser-side LLMri zuzenean bidal diezaioke prompt bat frontend-etik.
* Berria: SharedWorker exekuzio-ingurunea — MLC motorra orain SharedWorker batean exekutatzen da; horrela, hainbat fitxak GPU saio bakarra partekatzen dute, haren gainean lehiatu beharrean.
* Berria: apiFetch middleware interceptor — AI Client SDK ereduarekin bat datozen WordPress REST eskaerak gardentasunez bideratzen dira tokiko WebLLM broker-era, loopback HTTP joan-etorririk behar izan gabe.
* Berria: Widget settings UI Connector panelean, txat widget-a aktibatu/desaktibatzeko eta auto-prompt portaera konfiguratzeko.
* Konponketa: IndexedDB cache backend-a behartu, modeloaren pisuen deskargek HuggingFace xet CDN birbideratzeak gaindi ditzaten, birbideratze horiek Cache API bide lehenetsia hondatzen dutelako.
* Konponketa: embedding modeloetarako context_window KV-cache gainidaztea saltatu (ez dute decoder-ik, eta gainidazteak exekuzio-errore bat eragiten zuen).
* Konponketa: cold-start model hautagaia /webllm/v1/models-en iragarri worker fitxa kargatu baino lehen, SDK kontsumitzaileek berehala modelo bat ikus dezaten.
* Konponketa: WebLLM wpai_preferred_text_models filter-ean konektatu, AI Experiments eginbideak browser motorrera bidera dezan modelo bat konfiguratuta dagoenean.
* Hobetua: Cache-busting, eduki-normalizazioa eta hardware-erreferentzien konponketak azaleratu ziren muturretik muturrerako probetan.

## 1.0.0 bertsioa — Hasierako argitalpena {#version-100--initial-release}
