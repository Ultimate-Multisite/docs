---
title: Ultimate AI Connector pentru WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector pentru WebLLM Jurnal de Modificări

## Versiunea 1.1.0 — Lansată pe 2026-04-09

* **Noutate:** Widget de chat plutitor cu indicator de stare în bara de administrare — orice utilizator autentificat poate trimite un prompt către LLM-ul de pe browser direct de pe partea de față (front end).
* **Noutate:** Runtime SharedWorker — motorul MLC rulează acum într-un SharedWorker, astfel încât mai multe tab-uri să folosească aceeași sesiune GPU, în loc să se luptă pentru ea.
* **Noutate:** Interceptorul middleware apiFetch — Cererile WordPress REST care se potrivesc cu modelul AI Client SDK sunt ruteate transparent către brokerul local WebLLM, fără a fi necesară o rundă HTTP de tip *loopback*.
* **Noutate:** Interfața de utilizare (UI) pentru setările widget-ului în panoul Connector, permițând activarea/dezactivarea widget-ului de chat și configurarea comportamentului de auto-prompt.
* **Corecție:** Forțarea backend-ului cache IndexedDB, astfel încât descărcările greutăților modelului să supraviețuiască redirecțiilor CDN HuggingFace xet care sparg calea implicită a API-ului Cache.
* **Corecție:** Să sară peste suprascrierea KV-cache-ului context_window pentru modelele de *embedding* (ele nu au decoder și suprascrierea a cauzat o eroare la rulare).
* **Corecție:** Anunțarea modelului candidat pentru pornire rece în `/webllm/v1/models` înainte ca tab-ul worker să fie încărcat, astfel încât consumatorii SDK să vadă un model imediat.
* **Corecție:** Acoplingerea WebLLM la filtrul `wpai_preferred_text_models` pentru ca funcția AI Experiments să ruteze către motorul browserului atunci când un model este configurat.
* **Îmbunătățit:** Corecții de *cache-busting*, normalizare conținut și referințe hardware, descoperite în timpul testării de la capăt la capăt.

## Versiunea 1.0.0 — Lansare inițială
