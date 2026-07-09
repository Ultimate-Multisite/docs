---
title: Umpan Balik Pelanggan & Pelaporan Masalah
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Umpan Balik Pelanggan & Pelaporan Masalah {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 memperkenalkan sistem umpan balik dan pelaporan masalah bawaan yang memungkinkan pengguna akhir menandai respons yang kurang membantu dan melaporkan masalah langsung dari antarmuka obrolan. Sistem ini mencakup manajemen persetujuan (consent management), perintah pelaporan otomatis, dan triase berbantuan AI di sisi *backend*.

## Tombol Jempol ke Bawah {#thumbs-down-button}

Setiap pesan yang dikirim oleh asisten AI menampilkan tombol **jempol ke bawah** (👎). Ketika pengguna mengkliknya, mereka dapat menandai respons tersebut sebagai kurang membantu atau salah.

- Tombol ini muncul saat kursor diarahkan ke pesan asisten.
- Mengklik tombol ini akan membuka **Modal Persetujuan Umpan Balik** (*Feedback Consent Modal*).
- Umpan balik yang diberikan akan dikaitkan dengan utas percakapan dan pesan spesifik tersebut.

## Modal Persetujuan Umpan Balik {#feedback-consent-modal}

Ketika pengguna mengklik tombol jempol ke bawah, modal persetujuan akan muncul sebelum data apa pun dikirim. Modal ini:

- Menjelaskan informasi apa yang akan dikumpulkan (cuplikan percakapan, konteks *browser*).
- Meminta pengguna untuk mengonfirmasi bahwa mereka setuju untuk membagikan data ini.
- Menyediakan kolom teks bebas bagi pengguna untuk menjelaskan apa yang salah.
- Menawarkan opsi **Batal** untuk menutup modal tanpa mengirimkan umpan balik.

Tidak ada umpan balik yang tercatat sampai pengguna secara eksplisit mengonfirmasi.

## Banner Umpan Balik Auto-Prompt {#auto-prompt-feedback-banner}

Di akhir percakapan, asisten mungkin menampilkan **banner umpan balik auto-prompt** — pesan tidak mengganggu yang menanyakan apakah sesi tersebut membantu.

Banner ini muncul secara otomatis berdasarkan panjang dan hasil percakapan (heuristik). Banner ini terhubung ke alur umpan balik yang sama dengan tombol jempol ke bawah. Pengguna dapat menutup banner tanpa memberikan umpan balik.

## Perintah Slash /report-issue {#report-issue-slash-command}

Pengguna dapat memicu alur umpan balik secara langsung dengan mengetik `/report-issue` di kolom input obrolan. Perintah ini:

- Segera membuka Modal Persetujuan Umpan Balik.
- Mengisi otomatis kolom deskripsi dengan konteks tentang percakapan saat ini.
- Memungkinkan pengguna menambahkan detail tambahan sebelum mengirimkan.

Perintah `/report-issue` tersedia di semua mode obrolan (inline, *floating widget*, layar penuh).

## Triase Berbantuan AI {#ai-assisted-triage}

Umpan balik yang dikirimkan akan diarahkan ke lapisan triase AI yang:

- Mengkategorikan laporan (kesalahan faktual, jawaban yang kurang membantu, konten yang tidak pantas, dll.).
- Melampirkan metadata percakapan yang relevan.
- Meneruskan ringkasan triase ke **Feedback Endpoint** yang dikonfigurasi (lihat [Settings > Advanced](#settings-advanced)).

Ini mengurangi waktu peninjauan manual dengan menyoroti masalah yang paling kritis terlebih dahulu.

## Settings > Advanced {#settings-advanced}

Untuk mengaktifkan *backend* umpan balik, konfigurasikan kolom-kolom berikut di bawah **Gratis AI Agent → Settings → Advanced**:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | URL yang menerima permintaan POST dengan *payload* umpan balik (JSON). |
| **Feedback API Key** | *Bearer token* yang dikirim di *header* `Authorization` untuk otentikasi pengiriman umpan balik. |

Biarkan kedua kolom kosong untuk menonaktifkan pengumpulan umpan balik. Tombol umpan balik individual tetap terlihat oleh pengguna, tetapi pengiriman tidak akan diteruskan.

:::tip
Endpoint umpan balik harus menerima *body* JSON dengan setidaknya kolom `message_id`, `conversation_id`, `feedback_text`, dan `triage_category`. Lihat dokumentasi penyedia *endpoint* Anda untuk skema yang diharapkan.
:::
