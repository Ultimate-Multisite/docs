---
title: Referensi Pengaturan
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Referensi Settings

Halaman ini melacak settings yang memengaruhi administrasi sehari-hari dan perubahan perilaku terbaru di Ultimate Multisite.

## Opsi Lainnya {#other-options}

Area **Opsi Lainnya** muncul di bawah **Ultimate Multisite > Settings > Login & Registration**.

| Setting | Deskripsi |
|---|---|
| **Aktifkan Jumper** | Menampilkan alat navigasi cepat Jumper di area admin. Gunakan untuk langsung melompat ke layar Ultimate Multisite, objek jaringan, dan tujuan admin yang didukung. Nonaktifkan jika Anda tidak ingin pintasan ini terlihat. |

## Pelaporan galat dan telemetri {#error-reporting-and-telemetry}

Settings opt-in pelaporan galat sebelumnya telah dihapus dari halaman settings. Telemetri anonim dinonaktifkan dan tidak ada toggle UI untuk mengaktifkannya.

Jika Anda mengelola runbook internal atau tangkapan layar untuk halaman settings, hapus referensi ke field opt-in pelaporan galat lama agar administrator tidak mencari settings yang sudah tidak ada.

## Settings Import/Export {#importexport-settings}

Tab settings **Import/Export** menjelaskan settings mana yang dikontrolnya dan menautkan langsung ke **Ultimate Multisite > Site Export** untuk arsip situs dan jaringan. Gunakan tab settings untuk konfigurasi import/export, gunakan **Tools > Export & Import** untuk alur kerja export/import situs tunggal, dan gunakan alat Site Export saat Anda membutuhkan arsip Network Export lengkap.

## Peringatan saldo Domain Seller HostAfrica {#domain-seller-hostafrica-balance-warning}

Saat addon Domain Seller terhubung ke HostAfrica, administrator jaringan kini melihat peringatan saldo rendah yang dapat ditutup ketika saldo akun reseller terlalu rendah untuk pemrosesan pendaftaran atau perpanjangan domain yang andal.

Perlakukan pemberitahuan ini sebagai peringatan operasional: isi ulang saldo reseller HostAfrica sebelum menerima lebih banyak pendaftaran domain berbayar, lalu kembali ke settings Domain Seller atau layar pemantauan domain untuk memastikan pendaftaran dan perpanjangan dapat berlanjut secara normal.

## Settings konektor penyedia AI {#ai-provider-connector-settings}

Settings konektor penyedia AI kini hanya mengekspos kumpulan akun OAuth yang didukung:

| Penyedia | Alur setup |
|---|---|
| **Anthropic Max** | Hubungkan satu atau beberapa akun Anthropic Max dengan tombol OAuth. Gunakan fallback OAuth manual saat browser sandbox tidak dapat menyelesaikan redirect secara otomatis. |
| **OpenAI ChatGPT/Codex** | Hubungkan akun ChatGPT melalui alur kerja kumpulan OAuth yang sama. Operasi yang didukung konektor dapat menggunakan panggilan alat ChatGPT Codex setelah akun terhubung. |
| **Google AI Pro** | Hubungkan akun Google AI Pro melalui OAuth, lalu refresh konektor jika daftar akun tidak langsung diperbarui. |

Cursor Pro bukan lagi penyedia yang didukung. Hapus tangkapan layar internal lama, runbook, atau langkah onboarding yang menyebutkan field setup Cursor Pro atau jalur konektor.

Saat menambahkan atau menghapus akun penyedia, masukkan alamat email yang valid untuk akun yang sedang di-refresh atau dihapus dan simpan settings penyedia sebelum menguji operasi yang didukung konektor.
