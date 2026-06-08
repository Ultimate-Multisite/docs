---
title: Log Perubahan Penyambung AI Ultimate untuk WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Senarai Perubahan Ultimate AI Connector untuk WebLLM

## Versi 1.1.0 — Dilancar pada 2026-04-09

* Baru: Widget sembang terapung dengan penunjuk status admin-bar — mana-mana pengguna yang log masuk boleh memberikan prompt kepada LLM sisi pelayar terus dari front end.
* Baru: Runtime SharedWorker — enjin MLC kini berjalan dalam SharedWorker supaya pelbagai tab berkongsi satu sesi GPU dan tidak bersaing untuk menggunakannya.
* Baru: Interceptor middleware apiFetch — permintaan WordPress REST yang sepadan dengan corak AI Client SDK akan dirutekan secara telus ke broker WebLLM tempatan, tanpa memerlukan pusingan HTTP loopback.
* Baru: UI tetapan widget dalam panel Connector untuk menghidupkan/mematikan widget sembang dan mengkonfigurasi tingkah laku auto-prompt.
* Pembaikan: Menguatkuasakan backend cache IndexedDB supaya muat turun berat model kekal walaupun terdapat pengalihan CDN HuggingFace xet yang merosakkan laluan Cache API lalai.
* Pembaikan: Melangkau kelebihan konteks_window KV-cache untuk model embedding (kerana ia tiada decoder dan kelebihan tersebut menyebabkan ralat masa nyata).
* Pembaikan: Mengiklankan model calon *cold-start* di /webllm/v1/models sebelum tab worker dimuatkan, supaya pengguna SDK dapat melihat model dengan serta-merta.
* Pembaikan: Menghubungkan WebLLM ke penapis wpai_preferred_text_models supaya ciri AI Experiments akan dirutekan ke enjin pelayar apabila model dikonfigurasi.
* Penambahbaikan: Pembaikan *cache-busting*, normalisasi kandungan, dan rujukan perkakasan yang ditemui semasa pengujian end-to-end.

## Versi 1.0.0 — Pelancaran Awal
