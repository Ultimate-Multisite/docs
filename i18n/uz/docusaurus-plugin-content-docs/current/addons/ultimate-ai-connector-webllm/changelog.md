---
title: WebLLM uchun Ultimate AI Connector o‘zgarishlar jurnali
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# WebLLM uchun Ultimate AI Connector o‘zgarishlar jurnali

## Versiya 1.1.0 — 2026-04-09 da chiqarilgan

* Yangi: Admin-bar holat ko‘rsatkichi bilan suzuvchi chat vidjeti — tizimga kirgan har qanday foydalanuvchi front end orqali brauzer tomonidagi LLMga bevosita so‘rov yuborishi mumkin.
* Yangi: SharedWorker runtime — MLC dvigateli endi SharedWorker ichida ishlaydi, shuning uchun bir nechta tablar bitta GPU sessiyasini o‘zaro ulashadi va bir-biri bilan raqobatlashmaydi.
* Yangi: apiFetch middleware interceptor — AI Client SDK andozasiga mos WordPress REST so‘rovlari mahalliy WebLLM brokeriga shaffof yo‘naltiriladi, loopback HTTP orqali qaytish safariga ehtiyoj yo‘q.
* Yangi: Chat vidjetini yoqib-o‘chirish va auto-prompt xatti-harakatini sozlash uchun Connector panelidagi vidjet sozlamalari UI.
* Tuzatish: Model vaznlari yuklab olinishi standart Cache API yo‘lini buzadigan HuggingFace xet CDN qayta yo‘naltirishlaridan keyin ham saqlanib qolishi uchun IndexedDB kesh backendini majburan ishlatish.
* Tuzatish: Embedding modellari uchun context_window KV-cache overrideini o‘tkazib yuborish (ularda decoder yo‘q va override runtime xatosiga sabab bo‘lgan).
* Tuzatish: Worker tabi yuklanishidan oldin /webllm/v1/models ichida cold-start nomzod modelini e’lon qilish, shunda SDK iste’molchilari modelni darhol ko‘radi.
* Tuzatish: Model sozlanganida AI Experiments funksiyasi brauzer dvigateliga yo‘naltirilishi uchun WebLLMni wpai_preferred_text_models filtriga ulash.
* Yaxshilandi: End-to-end test paytida aniqlangan cache-busting, kontentni normallashtirish va apparat ma’lumotlariga oid tuzatishlar.

## Versiya 1.0.0 — Dastlabki reliz
