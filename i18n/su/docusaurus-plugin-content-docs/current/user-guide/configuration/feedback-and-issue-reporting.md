---
title: Umpan Balik Pelanggan & Pelaporan Masalah
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Umpan Balik & Pelaporan Masalah Pelanggan {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 ngajang sistem umpan balik dan pelaporan masalah anu aya di dalamnya, nu ngidinan pengguna akhir bisa nunjukkeun jawaban nu teu mantep jeung lapor masalah langsung ti antarmuka obrolan. Sistem ieu ngawengku manajemen persetujuan (consent management), perintah pelaporan otomatis, sarta triage dibantu AI di *backend*.

## Tombol Jempol Turun (*Thumbs-Down Button*) {#thumbs-down-button}

Setiap pesan anu dikirim ku asisten AI bakal aya tombol **jempol turun** (👎). Lamun pengguna ngacanna, maranéhna bisa menandai jawaban éta salaku teu mantep atawa salah.

- Tombol ieu muncul nalika *hover* di sisi unggal pesan asisten.
- Nalika diklik, tombol éta bakal ngabuka **Feedback Consent Modal**.
- Umpan balik éta bakal nyambung jeung alur obrolan jeung pesan anu spesifik.

## Feedback Consent Modal {#feedback-consent-modal}

Lamun pengguna ngacanna tombol jempol turun, modal persetujuan bakal muncul saméméh data dikirim. Modal ieu:

- Ngajelaskeun informasi naon waé anu bakal dikumpulkakeun (cuplikan obrolan, konteks *browser*).
- Nanya ka pengguna pikeun ngabales yén maranéhna setuju nyebar data éta.
- Nyayogikeun kolom téks bebas kanggo pengguna ngajelaskeun naon waé anu salah.
- Ngulang pilihan **Cancel** pikeun ngalungkeun modal tanpa ngirim.

Teu aya umpan balik anu dicatet nepi ka pengguna ngabales sacara eksplisit.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Di ahir obrolan, asisten bisa nunjukkeun **auto-prompt feedback banner** — hiji pesan nu teu ganggu nu nanya yén sesi éta mantep atawa teu mantep.

Banner ieu bakal muncul otomatis dumasar kana panjang obrolan jeung patokan (heuristics) hasil obrolan. Banner ieu nyambung ka alur umpan balik anu sarua jeung tombol jempol turun. Pengguna bisa ngalungkeun banner éta tanpa kudu ngajelaskeun umpan balik.

## Perintah `/report-issue` Slash Command {#report-issue-slash-command}

Pengguna bisa ngajak alur umpan balik langsung ku cara ngetik `/report-issue` dina kolom input obrolan. Perintah ieu:

- Langsung buka Modal Persetujuan Umpan Balik (Feedback Consent Modal).
- Isi otomatis kolom deskripsi dengan konteks percakapan saat ini.
- Biarkan pengguna menambahkan detail tambahan sebelum mengirimkannya.

Perintah `/report-issue` bisa digunakan di semua mode obrolan (inline, widget mengambang, layar penuh).

## Triage Dibantu AI (AI-Assisted Triage) {#ai-assisted-triage}

Umpan balik yang dikirim akan dialirkan ke lapisan triage AI yang akan:

- Mengelompokkan laporan (kesalahan fakta, jawaban tidak membantu, konten tidak pantas, dll.).
- Menambahkan metadata percakapan yang relevan.
- Meneruskan ringkasan triage ke **Feedback Endpoint** yang sudah dikonfigurasi (lihat [Settings > Advanced](#settings-advanced)).

Ini mengurangi waktu tinjauan manual dengan menampilkan masalah paling penting terlebih dahulu.

## Settings > Advanced {#settings-advanced}

Untuk mengaktifkan backend umpan balik, atur bidang berikut di bawah **Gratis AI Agent → Settings → Advanced**:

| Field | Deskripsi |
|---|---|
| **Feedback Endpoint URL** | URL yang menerima permintaan POST dengan *payload* umpan balik (JSON). |
| **Feedback API Key** | Token Bearer yang dikirim di header `Authorization` untuk mengautentikasi pengiriman umpan balik. |

Biarkan kedua bidang ini kosong untuk menonaktifkan pengumpulan umpan balik. Tombol umpan balik individual tetap terlihat oleh pengguna, tetapi pengiriman tidak akan diteruskan.

:::tip
Endpoint umpan balik harus menerima *body* JSON dengan setidaknya bidang `message_id`, `conversation_id`, `feedback_text`, dan `triage_category`. Lihat dokumentasi penyedia endpoint Anda untuk skema yang diharapkan.
