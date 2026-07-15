---
title: Maklum Balas Pelanggan & Pelaporan Isu
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Maklum Balas Pelanggan & Pelaporan Isu

Gratis AI Agent v1.5.0 memperkenalkan sistem maklum balas dan pelaporan isu terbina dalam yang membolehkan pengguna akhir menandakan respons yang kurang membantu dan melaporkan masalah terus dari antara muka sembang (chat interface). Sistem ini merangkumi pengurusan persetujuan (consent management), arahan pelaporan automatik, dan triaj (triage) berasaskan AI di bahagian belakang (backend).

## Butang Jari Telunjuk Ke Bawah {#thumbs-down-button}

Setiap mesej yang dihantar oleh pembantu AI memaparkan butang **jari telunjuk ke bawah** (👎). Apabila pengguna mengklik butang ini, mereka boleh menandakan respons itu sebagai kurang membantu atau tidak betul.

- Butang ini akan muncul apabila kursor dihalakan ke atas (on hover) di sebelah setiap mesej pembantu.
- Mengkliknya akan membuka **Modal Persetujuan Maklum Balas** (Feedback Consent Modal).
- Maklum balas tersebut dikaitkan dengan utas perbualan dan mesej spesifik.

## Modal Persetujuan Maklum Balas {#feedback-consent-modal}

Apabila pengguna mengklik butang jari telunjuk ke bawah, modal persetujuan akan muncul sebelum sebarang data dihantar. Modal ini:

- Menerangkan maklumat apa yang akan dikumpul (petikan perbualan, konteks pelayar/browser).
- Meminta pengguna mengesahkan bahawa mereka bersetuju untuk berkongsi data ini.
- Menyediakan medan teks bebas (free-text field) untuk pengguna menerangkan apa yang salah.
- Menawarkan pilihan **Batal** (Cancel) untuk menutup tanpa menghantar.

Tiada maklum balas yang direkodkan sehingga pengguna mengesahkan secara eksplisit.

## Banner Maklum Balas Auto-Prompt {#auto-prompt-feedback-banner}

Di akhir perbualan, pembantu mungkin memaparkan **banner maklum balas auto-prompt** — mesej tidak mengganggu yang bertanya sama ada sesi itu membantu.

Banner ini muncul secara automatik berdasarkan panjang perbualan dan heuristik hasil. Ia menghubungkan ke aliran maklum balas yang sama seperti butang jari telunjuk ke bawah. Pengguna boleh menutup banner ini tanpa memberikan maklum balas.

## Perintah Slash /report-issue {#report-issue-slash-command}

Pengguna boleh mencetuskan aliran maklum balas secara langsung dengan menaip `/report-issue` dalam input sembang. Perintah ini:

- Membuka Modal Persetujuan Maklum Balas dengan serta-merta.
- Memasukkan pra-isi (pre-populates) medan penerangan dengan konteks mengenai perbualan semasa.
- Membenarkan pengguna menambah butiran tambahan sebelum menghantar.

Perintah `/report-issue` tersedia dalam semua mod sembang (inline, floating widget, full-screen).

## Triage Berbantuan AI {#ai-assisted-triage}

Maklum balas yang dihantar akan dihantar ke lapisan triaj AI yang:

- Mengkategorikan laporan (kesilapan fakta, jawapan kurang membantu, kandungan tidak sesuai, dsb.).
- Melampirkan metadata perbualan yang berkaitan.
- Meneruskan ringkasan triaj ke **Feedback Endpoint** yang dikonfigurasi (lihat [Settings > Advanced](#settings-advanced)).

Ini mengurangkan masa semakan manual dengan menonjolkan isu yang paling kritikal terlebih dahulu.

## Settings > Advanced {#settings-advanced}

Untuk mengaktifkan backend maklum balas, konfigurasikan medan berikut di bawah **Gratis AI Agent → Settings → Advanced**:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | URL yang menerima permintaan POST dengan muatan (payload) maklum balas (JSON). |
| **Feedback API Key** | Token Bearer yang dihantar dalam header `Authorization` untuk pengesahan penghantaran maklum balas. |

Biarkan kedua-dua medan kosong untuk melumpuhkan pengumpulan maklum balas. Butang maklum balas individu kekal kelihatan kepada pengguna, tetapi penghantaran tidak akan diteruskan.

:::tip
Endpoint maklum balas mesti menerima badan JSON dengan sekurang-kurangnya medan `message_id`, `conversation_id`, `feedback_text`, dan `triage_category`. Rujuk dokumentasi penyedia endpoint anda untuk skema yang dijangkakan.
:::
