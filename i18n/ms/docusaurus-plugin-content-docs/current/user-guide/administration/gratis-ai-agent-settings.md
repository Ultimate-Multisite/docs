---
title: Tetapan Agen AI Percuma
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Tetapan Agen AI Percuma

Skrin **Settings → Advanced** dalam Gratis AI Agent menyediakan konfigurasi peringkat pentadbir untuk integrasi bahagian belakang (backend) yang diperkenalkan dalam v1.5.0. Halaman ini mendokumentasikan medan **Feedback Endpoint** dan format yang dijangkakan.

## Mengakses Tetapan

1. Dalam pentadbir WordPress, pergi ke **Gratis AI Agent → Settings**.
2. Klik tab **Advanced**.

## Konfigurasi Feedback Endpoint

Feedback endpoint menerima permintaan POST daripada agen AI setiap kali pengguna menghantar maklum balas melalui butang ibu jari ke bawah, banner auto-prompt, atau arahan `/report-issue`.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | URL yang menerima penghantaran maklum balas sebagai permintaan HTTP POST dengan badan JSON. |
| **Feedback API Key** | Token bearer yang dihantar dalam header `Authorization` setiap permintaan maklum balas. Biarkan kosong jika endpoint anda tidak memerlukan pengesahan. |

### Payload JSON Yang Dijangka

Endpoint maklum balas anda mesti menerima badan JSON dengan sekurang-kurangnya medan berikut:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Jawapan itu salah mengenai harga.",
  "triage_category": "factual_error"
}
```

Medan tambahan mungkin ada dalam payload bergantung pada konteks perbualan.

### Nilai `triage_category`

Lapisan saringan (triage layer) AI menetapkan salah satu nilai berikut kepada `triage_category` sebelum meneruskan payload:

| Value | Meaning |
|---|---|
| `factual_error` | Pembantu memberikan maklumat fakta yang salah. |
| `unhelpful_answer` | Respons itu betul dari segi teknikal tetapi tidak berguna. |
| `inappropriate_content` | Respons itu mengandungi kandungan yang tidak sepatutnya ditunjukkan kepada pengguna. |
| `other` | Maklum balas itu tidak sepadan dengan kategori yang diketahui. |

### Pengesahan (Authentication)

Jika endpoint anda memerlukan pengesahan, tetapkan medan **Feedback API Key** kepada token bearer anda. Agen akan menghantar:

```
Authorization: Bearer <your-api-key>
```

Jika medan **Feedback API Key** kosong, tiada header `Authorization` akan dihantar.

### Melumpuhkan Pengumpulan Maklum Balas

Biarkan kedua-dua medan **Feedback Endpoint URL** dan **Feedback API Key** kosong. Butang ibu jari ke bawah dan UI maklum balas kekal kelihatan kepada pengguna, tetapi penghantaran tidak diteruskan ke sebarang perkhidmatan luaran.

## Brave Search API Key

Juga di tab **Advanced**, medan **Brave Search API Key** membolehkan keupayaan [Carian Internet](../configuration/internet-search).

| Field | Description |
|---|---|
| **Brave Search API Key** | Kunci API anda dari papan pemuka pembangun Brave Search. Diperlukan untuk mengaktifkan carian internet dalam pembantu AI. |

Label medan ini termasuk pautan boleh klik ke halaman pendaftaran API Brave Search. Biarkan kosong untuk melumpuhkan carian internet.

Sila lihat [Internet Search](../configuration/internet-search) untuk dokumentasi pengguna akhir mengenai ciri ini.

## Bendera Ciri (Feature Flags)

Juga diperkenalkan dalam v1.9.0, tab **Settings → Feature Flags** menyediakan suis hidup/mati untuk fungsi pilihan. Setiap bendera sama ada diaktifkan atau dilumpuhkan di seluruh rangkaian; buat masa ini tiada penindasan setiap tapak.

### Mengakses Feature Flags

1. Dalam pentadbir WordPress, pergi ke **Gratis AI Agent → Settings**.
2. Klik tab **Feature Flags**.

### Bendera Kawalan Akses

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | Apabila diaktifkan, hanya pengguna dengan peranan `administrator` boleh membuka panel sembang AI Agent. Semua peranan lain akan melihat mesej "Hubungi pentadbir anda" pula. |
| **Restrict to Network Admins** | Off | Apabila diaktifkan pada rangkaian multisite, hanya Pentadbir Super (Super Admins) boleh menggunakan agen ini. Pentadbir tapak individu akan disekat. Ia mengatasi "Restrict to Administrators" jika kedua-duanya diaktifkan. |
| **Allow Subscriber Access** | Off | Apabila diaktifkan, pengguna dengan peranan `subscriber` boleh menggunakan antara muka sembang tetapi dihadkan kepada keupayaan baca sahaja (tiada penciptaan pos atau perubahan tetapan). |
| **Disable for Non-Members** | Off | Berintegrasi dengan status keahlian Ultimate Multisite. Apabila diaktifkan, sembang disembunyikan untuk tapak yang tidak mempunyai keahlian aktif. |

### Bendera Penjenamaan (Branding Flags)

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Menghapuskan bar atribusi jenama yang dipaparkan di bahagian bawah widget sembang. Disyorkan untuk pelaksanaan white-label. |
| **Custom Agent Name** | *(blank)* | Menggantikan label lalai "Gratis AI Agent" dalam tajuk sembang dan menu pentadbir dengan nama produk anda sendiri. Biarkan kosong untuk menggunakan lalai. |
| **Hide Agent Picker** | Off | Apabila diaktifkan, pengguna tidak boleh menukar antara lima agen terbina dalam. Agen semasa ditetapkan kepada apa sahaja yang dikonfigurasikan sebagai lalai dalam Settings → General. |
| **Use Site Icon as Chat Avatar** | Off | Menggantikan ikon AI lalai dalam tajuk widget sembang dengan ikon tapak WordPress (ditetapkan di Appearance → Customize → Site Identity). |

### Mengaplikasikan Perubahan

Klik **Save Settings** selepas menukar sebarang bendera. Perubahan berkuat kuasa serta-merta — tiada pembersihan cache atau pengaktifan semula plugin diperlukan.
