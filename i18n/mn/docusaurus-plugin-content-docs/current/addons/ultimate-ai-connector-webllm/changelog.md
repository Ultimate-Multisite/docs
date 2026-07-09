---
title: Ultimate AI Connector for WebLLM өөрчлөлтийн бүртгэл
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM өөрчлөлтийн бүртгэл {#ultimate-ai-connector-for-webllm-changelog}

## Хувилбар 1.1.0 — 2026-04-09-нд гарсан {#version-110--released-on-2026-04-09}

* Шинэ: Админ мөрийн төлөвийн заагчтай хөвөгч чат виджет — нэвтэрсэн дурын хэрэглэгч front end-ээс шууд хөтөч талын LLM-д prompt илгээх боломжтой.
* Шинэ: SharedWorker ажиллах орчин — MLC хөдөлгүүр одоо SharedWorker дотор ажилладаг тул олон таб хоорондоо өрсөлдөхийн оронд нэг GPU session-г хуваалцана.
* Шинэ: apiFetch middleware interceptor — AI Client SDK хэв маягтай таарах WordPress REST хүсэлтүүд local WebLLM broker руу ил тод чиглүүлэгдэнэ, loopback HTTP round-trip шаардлагагүй.
* Шинэ: Чат виджетийг асааж/унтраах болон auto-prompt зан төлөвийг тохируулах Connector самбар дахь виджетийн тохиргооны UI.
* Засвар: Загварын жингийн таталтууд default Cache API замыг эвддэг HuggingFace xet CDN redirects-ийн дараа ч хадгалагдахын тулд IndexedDB cache backend-г албадан ашиглуулна.
* Засвар: Embedding загваруудад context_window KV-cache override-г алгасна (тэд decoder-гүй бөгөөд override нь runtime алдаа үүсгэж байсан).
* Засвар: Worker таб ачаалагдахаас өмнө cold-start candidate загварыг /webllm/v1/models дотор зарлана, ингэснээр SDK хэрэглэгчид загварыг шууд харна.
* Засвар: WebLLM-г wpai_preferred_text_models filter-т холбосноор загвар тохируулагдсан үед AI Experiments боломж хөтөчийн хөдөлгүүр рүү чиглэнэ.
* Сайжруулсан: End-to-end туршилтын явцад илэрсэн cache-busting, агуулгын хэвийнжүүлэлт болон hardware-reference засварууд.

## Хувилбар 1.0.0 — Анхны хувилбар {#version-100--initial-release}
