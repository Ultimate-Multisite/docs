---
title: Rujukan Pengaturan
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Referensi Pengaturan

Halaman ini melacak pengaturan yang memengaruhi administrasi sehari-hari dan perubahan perilaku terbaru di Ultimate Multisite.

## Opsi Lainnya

Area **Other Options** muncul di bawah **Ultimate Multisite > Settings > Login & Registration**.

| Pengaturan | Deskripsi |
|---|---|
| **Enable Jumper** | Menampilkan alat navigasi cepat Jumper di area admin. Gunakan ini untuk langsung melompat ke layar Ultimate Multisite, objek jaringan, dan tujuan admin yang didukung. Matikan jika Anda tidak ingin pintasan ini terlihat. |

## Pelaporan Kesalahan dan Telemetri

Pengaturan opt-in pelaporan kesalahan sebelumnya telah dihapus dari halaman pengaturan. Telemetri anonim dinonaktifkan dan tidak ada tombol UI untuk mengaktifkannya.

Jika Anda menyimpan *runbook* internal atau tangkapan layar untuk halaman pengaturan, hapus referensi ke kolom opt-in pelaporan kesalahan lama agar administrator tidak mencari pengaturan yang sudah tidak ada lagi.

## Pengaturan Impor/Ekspor

Tab **Import/Export** menjelaskan pengaturan apa saja yang dikontrol oleh tab ini dan langsung terhubung ke **Ultimate Multisite > Site Export** untuk arsip situs dan jaringan. Gunakan tab pengaturan untuk konfigurasi impor/ekspor, gunakan **Tools > Export & Import** untuk alur kerja ekspor/impor satu situs, dan gunakan alat Site Export ketika Anda membutuhkan arsip Ekspor Jaringan (Network Export) lengkap.

## Pengaturan Konektor Penyedia AI

Pengaturan konektor penyedia AI sekarang hanya menampilkan *OAuth account pools* yang didukung:

| Penyedia | Alur Pengaturan |
|---|---|
| **Anthropic Max** | Hubungkan satu atau lebih akun Anthropic Max dengan tombol OAuth. Gunakan *manual OAuth fallback* kalau browser yang di-*sandbox* tidak bisa menyelesaikan pengalihan secara otomatis. |
| **OpenAI ChatGPT/Codex** | Hubungkan akun ChatGPT melalui alur kerja *OAuth pool* yang sama. Operasi yang didukung oleh *connector* bisa menggunakan alat panggilan ChatGPT Codex setelah akun terhubung. |
| **Google AI Pro** | Hubungkan akun Google AI Pro melalui OAuth, lalu segarkan (*refresh*) *connector* kalau daftar akun tidak langsung diperbarui. |

Cursor Pro sudah tidak lagi menjadi penyedia yang didukung. Hapus tangkapan layar internal lama, *runbook*, atau langkah-langkah orientasi yang menyebutkan pengaturan Cursor Pro atau jalur *connector*.

Saat menambahkan atau menghapus akun penyedia (*provider*), masukkan alamat email yang valid untuk akun yang sedang disegarkan atau dihapus dan simpan pengaturan penyedia sebelum menguji operasi yang didukung oleh *connector*.
