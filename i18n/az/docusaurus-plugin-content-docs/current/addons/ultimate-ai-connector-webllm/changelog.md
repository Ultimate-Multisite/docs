---
title: Ultimate AI Connector for WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Dəyişikliklər Siyahısı

## Version 1.1.0 — 2026-04-09 tarixində buraxılıb {#version-110--released-on-2026-04-09}

* Yeni: Admin paneli status göstəricisi olan uçan chat widget'ı — hər hansı daxil olub istifadəçi birbaşa front-end-dən brauzer tərəfindəki LLM-ə sorğu göndərə bilər.
* Yeni: SharedWorker runtime — MLC mühərriki indi SharedWorker-də işləyir, beləliklə bir neçə tab GPU sessiyasını paylaşır, ona mübarizə etmir.
* Yeni: apiFetch middleware interceptor — AI Client SDK nümunəsinə uyğun WordPress REST sorğuları şəffaf şəkildə yerli WebLLM brokerinə yönləndirilir, loopback HTTP dövrəsinə ehtiyac yoxdur.
* Yeni: Widget ayarları UI, Connector panelində chat widget'ını yandırmaq və avtomatik sorğu davranışını konfiqurasiya etmək üçün.
* Düzəliş: IndexedDB cache backend-i məcburi şəkildə tətbiq etmək, beləliklə model çəki yükləmələri, default Cache API yolunu pozan HuggingFace xet CDN yönləndirmələrindən qorunur.
* Düzəliş: Embedding modelləri üçün context_window KV-cache override-ını atlamaq (onların decoder-ı yoxdur və bu override bir runtime xətasına səbəb olmuşdu).
* Düzəliş: Worker tab yüklənməzdən əvvəl, /webllm/v1/models-də soyuq-başlanğıc namizəd modelini elan etmək, beləliklə SDK istifadəçiləri modeli dərhal görür.
* Düzəliş: WebLLM-i wpai_preferred_text_models filtrləsinə qoşmaq, beləliklə AI Experiments funksionallığı bir model konfiqurasiya edildikdə brauzer mühərrikinə yönləndirilir.
* Təkmilləşdirildi: Son-üst-son testlərdə aşkar edilmiş Cache-busting, məzmun normalizasiyası və donanım-referans düzəlişləri.

## Version 1.0.0 — İlkin Buraxılış {#version-100--initial-release}
