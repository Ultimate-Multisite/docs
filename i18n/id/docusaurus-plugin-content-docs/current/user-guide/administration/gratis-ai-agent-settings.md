---
title: Pengaturan Agen AI Gratis
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Pengaturan Gratis AI Agent

Layar **Settings → Advanced** di Gratis AI Agent menyediakan konfigurasi tingkat administrator untuk integrasi *backend* yang diperkenalkan di v1.5.0. Halaman ini mendokumentasikan kolom **Feedback Endpoint** dan format yang diharapkan.

## Mengakses Pengaturan

1. Di admin WordPress, buka **Gratis AI Agent → Settings**.
2. Klik tab **Advanced**.

## Konfigurasi Feedback Endpoint

*Feedback endpoint* akan menerima permintaan POST dari agen AI setiap kali pengguna mengirimkan umpan balik melalui tombol jempol ke bawah, *auto-prompt banner*, atau perintah `/report-issue`.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | URL yang menerima kiriman umpan balik sebagai permintaan HTTP POST dengan *body* JSON. |
| **Feedback API Key** | *Bearer token* yang dikirim dalam *header* `Authorization` dari setiap permintaan umpan balik. Biarkan kosong jika *endpoint* Anda tidak memerlukan otentikasi. |

### JSON Payload yang Diharapkan

*Feedback endpoint* Anda harus menerima *body* JSON dengan setidaknya kolom-kolom berikut:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Jawabannya salah mengenai harga.",
  "triage_category": "factual_error"
}
```

Kolom tambahan mungkin ada dalam *payload* tergantung pada konteks percakapan.

### Nilai `triage_category`

Lapisan *triage* AI akan menetapkan salah satu nilai berikut ke `triage_category` sebelum meneruskan *payload*:

| Value | Meaning |
|---|---|
| `factual_error` | Asisten memberikan informasi faktual yang salah. |
| `unhelpful_answer` | Responsnya secara teknis benar tetapi tidak berguna. |
| `inappropriate_content` | Respons mengandung konten yang seharusnya tidak ditampilkan kepada pengguna. |
| `other` | Umpan balik tidak cocok dengan kategori yang diketahui. |

### Otentikasi

Jika *endpoint* Anda memerlukan otentikasi, atur kolom **Feedback API Key** ke *bearer token* Anda. Agen akan mengirimkan:

```
Authorization: Bearer <your-api-key>
```

Jika kolom **Feedback API Key** kosong, tidak ada *header* `Authorization` yang dikirim.

### Menonaktifkan Pengumpulan Umpan Balik

Biarkan kolom **Feedback Endpoint URL** dan **Feedback API Key** kosong. Tombol jempol ke bawah dan UI umpan balik tetap terlihat oleh pengguna, tetapi kiriman tidak diteruskan ke layanan eksternal mana pun.

## Brave Search API Key

Juga di tab **Advanced**, kolom **Brave Search API Key** mengaktifkan kemampuan [Internet Search](../configuration/internet-search).

| Field | Description |
|---|---|
| **Brave Search API Key** | Kunci API Anda dari *dashboard* pengembang Brave Search. Diperlukan untuk mengaktifkan pencarian internet di asisten AI. |

Label kolom menyertakan tautan yang dapat diklik ke halaman pendaftaran API Brave Search. Biarkan kosong untuk menonaktifkan pencarian internet.

Lihat [Internet Search](../configuration/internet-search) untuk dokumentasi pengguna akhir tentang fitur ini.

## Feature Flags

Juga diperkenalkan di v1.9.0, tab **Settings → Feature Flags** menyediakan sakelar *toggle* untuk fungsionalitas opsional. Setiap *flag* dapat diaktifkan atau dinonaktifkan di seluruh jaringan; saat ini belum ada penimpaan per situs.

### Mengakses Feature Flags

1. Di admin WordPress, buka **Gratis AI Agent → Settings**.
2. Klik tab **Feature Flags**.

### Access Control Flags

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | Saat diaktifkan, hanya pengguna dengan peran `administrator` yang dapat membuka panel obrolan AI Agent. Semua peran lain akan melihat pesan "Hubungi administrator Anda" sebagai gantinya. |
| **Restrict to Network Admins** | Off | Saat diaktifkan pada jaringan multisite, hanya Super Admin yang dapat menggunakan agen. Admin situs individual diblokir. Mengambil prioritas di atas "Restrict to Administrators" jika keduanya diaktifkan. |
| **Allow Subscriber Access** | Off | Saat diaktifkan, pengguna dengan peran `subscriber` dapat menggunakan antarmuka obrolan tetapi terbatas pada kemampuan baca saja (tidak dapat membuat postingan atau mengubah pengaturan). |
| **Disable for Non-Members** | Off | Terintegrasi dengan status keanggotaan Ultimate Multisite. Saat diaktifkan, obrolan disembunyikan untuk situs yang tidak memiliki keanggotaan aktif. |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Menghapus bar atribusi *branding* yang ditampilkan di bagian bawah *widget* obrolan. Direkomendasikan untuk *deployment* *white-label*. |
| **Custom Agent Name** | *(blank)* | Mengganti label default "Gratis AI Agent" di *header* obrolan dan menu admin dengan nama produk Anda sendiri. Biarkan kosong untuk menggunakan *default*. |
| **Hide Agent Picker** | Off | Saat diaktifkan, pengguna tidak dapat beralih di antara lima agen bawaan. Agen saat ini akan tetap pada apa pun yang dikonfigurasi sebagai *default* di Settings → General. |
| **Use Site Icon as Chat Avatar** | Off | Mengganti ikon AI *default* di *header widget* obrolan dengan ikon situs WordPress (diatur di Appearance → Customize → Site Identity). |

### Menerapkan Perubahan

Klik **Save Settings** setelah mengubah *flag* apa pun. Perubahan akan berlaku segera — tidak perlu *cache flush* atau aktivasi ulang *plugin*.
