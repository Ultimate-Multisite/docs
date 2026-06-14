---
title: Referensi Pengaturan
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Referensi Pengaturan

Halaman ini melacak pengaturan yang memengaruhi administrasi sehari-hari dan perubahan perilaku terbaru di Ultimate Multisite.

## Opsi Lainnya

Area **Opsi Lainnya** muncul di bawah **Ultimate Multisite > Settings > Login & Registration**.

| Pengaturan | Deskripsi |
|---|---|
| **Enable Jumper** | Menampilkan alat navigasi cepat Jumper di area admin. Gunakan ini untuk langsung melompat ke layar Ultimate Multisite, objek jaringan, dan tujuan admin yang didukung. Matikan jika Anda tidak ingin pintasan ini terlihat. |

## Pelaporan kesalahan dan telemetri

Pengaturan opt-in pelaporan kesalahan sebelumnya telah dihapus dari halaman pengaturan. Telemetri anonim dinonaktifkan dan tidak ada tombol UI untuk mengaktifkannya.

Jika Anda menyimpan *runbook* internal atau tangkapan layar untuk halaman pengaturan, hapus referensi ke bidang opt-in pelaporan kesalahan lama agar administrator tidak mencari pengaturan yang sudah tidak ada lagi.

## Pengaturan Impor/Ekspor

Tab **Import/Export** menjelaskan pengaturan apa saja yang dikontrolnya dan langsung terhubung ke **Ultimate Multisite > Site Export** untuk arsip situs dan jaringan. Gunakan tab pengaturan untuk konfigurasi impor/ekspor, gunakan **Tools > Export & Import** untuk alur kerja ekspor/impor satu situs, dan gunakan alat Site Export ketika Anda memerlukan arsip Ekspor Jaringan (Network Export) lengkap.

## Pengaturan konektor penyedia AI

Pengaturan konektor penyedia AI sekarang hanya menampilkan *OAuth account pools* yang didukung:

| Provider | Alur Setup |
|---|---|
| **Anthropic Max** | Sambungkan satu atau lebih akun Anthropic Max pakai tombol OAuth. Gunakan opsi OAuth manual kalau browser yang di-*sandbox* nggak bisa menyelesaikan *redirect*-nya secara otomatis. |
| **OpenAI ChatGPT/Codex** | Sambungkan akun ChatGPT lewat alur *workflow* OAuth yang sama. Operasi yang didukung oleh Connector bisa pakai alat (tool calls) ChatGPT Codex setelah akun tersambung. |
| **Google AI Pro** | Sambungkan akun Google AI Pro lewat OAuth, lalu *refresh* konektornya kalau daftar akun nggak langsung diperbarui. |

Cursor Pro wis ora didukung maneh. Hapus *screenshot* internal lawas, *runbook*, utawa langkah-langkah *onboarding* sing nyebut pengaturan atau jalur konektor Cursor Pro.

Nalika nambah utawa ngilangake akun provider, kudu ana alamat email sing bener kanggo akun sing di-*refresh* utawa dihapus lan simpen pengaturan provider sadurunge nyoba operasi sing didukung connector.
