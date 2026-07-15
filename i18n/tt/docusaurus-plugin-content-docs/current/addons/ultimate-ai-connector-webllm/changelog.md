---
title: WebLLM өчен Ultimate AI Connector үзгәрешләр журналы
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector өчен WebLLM үзгәрешләр журналы

## Версия 1.1.0 — 2026-04-09 чыгарылды {#version-110--released-on-2026-04-09}

* Яңа: admin-bar статус күрсәткече булган йөзмә чат виджеты — системага кергән теләсә кайсы кулланучы браузер ягындагы LLMга турыдан-туры алгы өлештән prompt җибәрә ала.
* Яңа: SharedWorker башкару мохите — MLC engine хәзер SharedWorker эчендә эшли, шуңа берничә кыстыргыч бер GPU сессиясен үзара бүлешә, аның өчен көрәшми.
* Яңа: apiFetch middleware тотып алгыч — AI Client SDK үрнәгенә туры килгән WordPress REST сораулары җирле WebLLM brokerга ачык рәвештә юнәлтелә, loopback HTTP әйләнеп кайтуы кирәкми.
* Яңа: чат виджетын кабызу-сүндерү һәм auto-prompt тәртибен көйләү өчен Connector панелендә виджет көйләүләре UI.
* Төзәтү: модель авырлыкларын йөкләүләр default Cache API юлын вата торган HuggingFace xet CDN юнәлтүләреннән соң да саклансын өчен, IndexedDB cache backend мәҗбүри кулланыла.
* Төзәтү: embedding модельләр өчен context_window KV-cache override үткәреп җибәрелә (аларның decoder юк, һәм override башкару вакытында хата китереп чыгара иде).
* Төзәтү: worker кыстыргычы йөкләнгәнче үк /webllm/v1/models эчендә cold-start кандидат моделе күрсәтелә, шуңа SDK кулланучылары модельне шунда ук күрә.
* Төзәтү: модель көйләнгәндә AI Experiments функциясе браузер engineына юнәлсен өчен, WebLLM wpai_preferred_text_models фильтрына тоташтырылды.
* Яхшыртылды: end-to-end сынау вакытында ачыкланган cache-busting, эчтәлек нормальләштерү һәм hardware-reference төзәтмәләре.

## Версия 1.0.0 — Беренче чыгарылыш {#version-100--initial-release}
