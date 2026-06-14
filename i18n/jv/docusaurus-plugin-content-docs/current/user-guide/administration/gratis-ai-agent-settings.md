---
title: Pengaturan Agen AI Gratis
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Settings

Ing layar **Settings → Advanced** ing Gratis AI Agent, sampeyan bisa ngatur konfigurasi tingkat admin kanggo integrasi backend sing diwenehake ing v1.5.0. Halaman iki medharake medan **Feedback Endpoint** lan format sing dikarepake.

## Akses Pengaturan

1. Ing WordPress admin, tindakake menyang **Gratis AI Agent → Settings**.
2. Klik tab **Advanced**.

## Konfigurasi Feedback Endpoint

Feedback endpoint bakal nampa permintaan POST saka AI agent saben ana pengguna ngirim masukan liwat tombol *thumbs-down*, banner auto-prompt, utawa perintah `/report-issue`.

| Field | Deskripsi |
|---|---|
| **Feedback Endpoint URL** | URL sing nampa pengiriman feedback minangka permintaan HTTP POST kanthi isi JSON. |
| **Feedback API Key** | bearer token sing dikirim ing header `Authorization` saben permintaan feedback. Wangun kosong yen endpoint sampeyan ora mbutuh otentikasi. |

### Payload JSON Sing Dikarepake

Endpoint feedback sampeyan kudu nampa isi JSON kanthi minimal medan-medan iki:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Jawaban iku salah babagan harga.",
  "triage_category": "factual_error"
}
```

Medan tambahan bisa ana ing payload gumantung konteks obrolan.

### Nilai `triage_category`

Lapisan triage AI milih salah siji nilai iki kanggo `triage_category` sadurunge ngirim payload:

| Value | Arti |
|---|---|
| `factual_error` | Asisten menehi informasi faktual sing ora bener. |
| `unhelpful_answer` | Responé bener saka teknis nanging ora migunani. |
| `inappropriate_content` | Responé ngemot konten sing ora becik ditonjoki marang pengguna. |
| `other` | Feedback iku ora cocok karo kategori sing wis dikenal. |

### Otentikasi

Yen endpointmu butuh otentikasi, isi kolom **Feedback API Key** nganggo token bearer-mu. Agen bakal ngirim:

```
Authorization: Bearer <your-api-key>
```

Yen kolom **Feedback API Key** kosong, ora ana header `Authorization` sing dikirim.

### Menonaktifkan Pengumpulan Feedback

Biarkan kedua kolom **Feedback Endpoint URL** lan **Feedback API Key** kosong. Tombol jempol turun (thumbs-down) lan UI feedback tetep katon kanggo pengguna, nanging pengiriman ora bakal diterusake menyang layanan eksternal apa wae.

## Brave Search API Key

Ing tab **Advanced** uga, kolom **Brave Search API Key** ngaktifake kemampuan [Internet Search](../configuration/internet-search).

| Field | Deskripsi |
|---|---|
| **Brave Search API Key** | Kunci API sampeyan saka dashboard pengembang Brave Search. Diperlukan kanggo ngaktifake pencarian internet ing asisten AI. |

Label kolom iki kalebu link sing bisa diklik menyang halaman pendaftaran Brave Search API. Biarkan kosong kanggo nonaktifake pencarian internet.

Lihat [Internet Search](../configuration/internet-search) kanggo dokumentasi pengguna akhir babagan fitur iki.

## Feature Flags

Uga diperkenalkan ing v1.9.0, tab **Settings → Feature Flags** nyedhiyakake sak tombol (toggle switches) kanggo fungsionalitas opsional. Saben flag ya aktif utawa nonaktif ing jaringan; saiki ora ana pengaturan khusus per-situs.

### Akses Feature Flags

1. Ing admin WordPress, tindakake menyang **Gratis AI Agent → Settings**.
2. Klik tab **Feature Flags**.

### Access Control Flags

| Bendera | Default | Deskripsi |
|---|---|---|
| **Batasi Hanya untuk Administrator** | Mati (Off) | Kalau diaktifkan, cuma pengguna yang punya peran `administrator` yang bisa buka panel obrolan AI Agent. Pengguna lain akan melihat pesan "Hubungi administrator Anda" saja. |
| **Batasi Hanya untuk Admin Jaringan** | Mati (Off) | Kalau aktif di jaringan multisite, hanya Super Admin yang bisa pakai agent. Admin situs perorangan diblokir. Ini lebih utama daripada "Batasi Hanya untuk Administrator" kalau keduanya aktif. |
| **Izinkan Akses Subscriber** | Mati (Off) | Kalau diaktifkan, pengguna dengan peran `subscriber` bisa pakai antarmuka obrolan tapi terbatas hanya bisa baca saja (tidak bisa bikin postingan atau ubah pengaturan). |
| **Nonaktifkan untuk Non-Anggota** | Mati (Off) | Terintegrasi dengan status keanggotaan Ultimate Multisite. Kalau diaktifkan, obrolan akan disembunyikan untuk situs yang tidak punya keanggotaan aktif. |

### Bendera Branding

| Bendera | Default | Deskripsi |
|---|---|---|
| **Sembunyikan Footer "Powered by Gratis AI Agent"** | Mati (Off) | Menghilangkan bar atribusi branding yang muncul di bagian bawah widget obrolan. Direkomendasikan untuk deployment white-label. |
| **Nama Agen Kustom** | *(kosong)* | Mengganti label default "Gratis AI Agent" di header obrolan dan menu admin dengan nama produk Anda sendiri. Biarkan kosong untuk menggunakan yang default. |
| **Sembunyikan Pemilih Agen (Agent Picker)** | Mati (Off) | Kalau aktif, pengguna tidak bisa berganti antar lima agen bawaan. Agen yang sedang dipakai akan tetap sama sesuai pengaturan default di Settings → General. |
| **Gunakan Ikon Situs sebagai Avatar Obrolan** | Mati (Off) | Mengganti ikon AI default di header widget obrolan dengan ikon situs WordPress Anda (atur di Appearance → Customize → Site Identity). |

### Menerapkan Perubahan

Klik **Save Settings** setelah mengubah pengaturan apa pun. Perubahan akan langsung berlaku — tidak perlu membersihkan cache atau mengaktifkan ulang plugin.
