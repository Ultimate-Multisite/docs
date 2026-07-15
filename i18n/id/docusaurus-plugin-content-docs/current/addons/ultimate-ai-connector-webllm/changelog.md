---
title: Catatan Perubahan Ultimate AI Connector untuk WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Catatan Perubahan Ultimate AI Connector untuk WebLLM

## Versi 1.1.0 — Dirilis pada 2026-04-09 {#version-110--released-on-2026-04-09}

* Baru: Widget obrolan mengambang dengan indikator status bilah admin — Pengguna yang sudah login dapat memberikan perintah (prompt) langsung ke LLM sisi browser dari tampilan depan (front end).
* Baru: Runtime SharedWorker — Mesin MLC kini berjalan di SharedWorker sehingga banyak tab dapat berbagi satu sesi GPU alih-alih berebut sesi tersebut.
* Baru: Interceptor middleware apiFetch — Permintaan WordPress REST yang sesuai dengan pola AI Client SDK akan dirutekan secara transparan ke broker WebLLM lokal, tanpa perlu perjalanan bolak-balik HTTP loopback.
* Baru: UI pengaturan widget di panel Connector untuk mengaktifkan/menonaktifkan widget obrolan dan mengonfigurasi perilaku auto-prompt.
* Perbaikan: Memaksa backend cache IndexedDB agar unduhan bobot model tetap bertahan dari pengalihan CDN HuggingFace xet yang merusak path Cache API default.
* Perbaikan: Melewati penimpaan KV-cache context_window untuk model embedding (karena model ini tidak memiliki decoder dan penimpaan tersebut menyebabkan error runtime).
* Perbaikan: Menyediakan informasi model kandidat cold-start di /webllm/v1/models sebelum tab worker dimuat, sehingga konsumen SDK dapat melihat model segera.
* Perbaikan: Menghubungkan WebLLM ke filter wpai_preferred_text_models agar fitur AI Experiments diarahkan ke mesin browser ketika model dikonfigurasi.
* Peningkatan: Perbaikan cache-busting, normalisasi konten, dan referensi perangkat keras yang muncul selama pengujian ujung ke ujung (end-to-end testing).

## Versi 1.0.0 — Rilis Awal {#version-100--initial-release}
