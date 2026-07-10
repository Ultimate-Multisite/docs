---
title: Umpan Balik Pelanggan & Pelaporan Masalah
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Umpan Balik & Pelaporan Masalah Pelanggan {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 nggawa sistem umpan balik dan pelaporan masalah sing wis digawe langsung ing njero, sing ngidini pengguna akhir nglapor respons sing ora ngenani lan lapor masalah langsung saka antarmuka obrolan. Sistem iki kalebu manajemen persetujuan (consent management), perintah pelaporan otomatis, lan penanganan awal (triage) dibantu AI ing ngarep.

## Tombol Jempol Turun (Thumbs-Down Button) {#thumbs-down-button}

Sabanjure saben pesen sing dikirim dening asisten AI bakal nuduh tombol **jempol turun** (👎). Nalika pengguna nggunakake, dhewe bisa tandha respons kuwi ora ngenani utawa salah.

- Tombol iki muncul nalika di-*hover* ing sisih saben pesen asisten.
- Nek diklik, tombol kuwi mbukak **Feedback Consent Modal**.
- Umpan balik iku dikaitake karo alur obrolan lan pesen tartamtu.

## Feedback Consent Modal {#feedback-consent-modal}

Nalika pengguna ngklik tombol jempol turun, modal persetujuan bakal muncul sadurunge data diwenehake. Modal iki:

- Nerangake informasi apa wae sing bakal dikumpulake (cuplikan obrolan, konteks browser).
- Nyuwun konfirmasi marang pengguna yen dhewe setuju kanggo berbagi data iki.
- Nyedhiyakake kolom teks bebas kanggo pengguna kanggo njlentrehake masalah apa sing kedadeyan.
- Nyuwun pilihan **Cancel** kanggo nutup tanpa ngirim.

Ora ana umpan balik sing direkam nganti pengguna konfirmasi kanthi gamblang.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Ing akhir obrolan, asisten bisa nuduh **auto-prompt feedback banner** — pesen sing ora nyusup (non-intrusive) sing nanya apa sesi kuwi wis ngenani utawa durung.

Banner iki muncul otomatis adhedhasar dawa obrolan lan pola hasil. Banner iki nyambung menyang alur umpan balik sing padha karo tombol jempol turun. Pengguna bisa nutup banner tanpa menehi umpan balik.

## Perintah Slash /report-issue {#report-issue-slash-command}

Pengguna bisa ngaktifake alur umpan balik langsung kanthi ngetik `/report-issue` ing kolom input obrolan. Perintah iki:

- Langsung mbukak Modal Persetujuan Umpan Balik (Feedback Consent) saiki.
- Otomatis ngisi kolom deskripsi karo konteks obrolan saiki.
- Ngenani pengguna nambah detail tambahan sadurunge ngirim.

Perintah `/report-issue` bisa digunakake ing kabeh mode obrolan (inline, floating widget, full-screen).

## AI-Assisted Triage {#ai-assisted-triage}

Umpan balik sing dikirim bakal diarahkan menyang lapisan triage AI sing:

- Ngelompokake laporan (kesalahan fakta, jawaban ora ngenani, konten ora sopan, lsp.).
- Nggandheng metadata obrolan sing relevan.
- Ngirim ringkesan triage marang **Feedback Endpoint** sing wis dikonfigurasi (deleng [Settings > Advanced](#settings-advanced)).

Iki ngurangi wektu tinjau manual amarga masalah paling penting bakal muncul dhisik.

## Settings > Advanced {#settings-advanced}

Kanggo ngaktifake backend umpan balik, atur bidang-bidan iki ing bawah **Gratis AI Agent → Settings → Advanced**:

| Field | Deskripsi |
|---|---|
| **Feedback Endpoint URL** | URL sing nampa POST requests karo payload umpan balik (JSON). |
| **Feedback API Key** | Bearer token sing dikirim ing header `Authorization` kanggo otentikasi pengiriman umpan balik. |

Wenehana kedua bidang iki kosong kanggo mateni pangumpulan umpan balik. Tombol umpan balik individual tetep katon kanggo pengguna, nanging pengiriman ora bakal diterusake.

:::tip
Endpoint umpan balik kudu nampa body JSON kanthi minimal field `message_id`, `conversation_id`, `feedback_text`, lan `triage_category`. Deleng dokumentasi penyedia endpointmu kanggo skema sing dikarepake.
