---
title: Pengaturan AI Agent Gratis
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Pengaturan Gratis AI Agent Gratis

Layar **Settings → Advanced** di Gratis AI Agent ngasih pengaturan tingkat admin kanggo integrasi backend sing wis diperkenalkan ing v1.5.0. Halaman iki mendokumentasikan kolom **Feedback Endpoint** lan format sing ditunggu.

## Akses Pengaturan

1. Ing admin WordPress, tindakake **Gratis AI Agent → Settings**.
2. Klik tab **Advanced**.

## Konfigurasi Feedback Endpoint

Feedback endpoint bakal nampa POST request saka AI agent saben user ngirim feedback liwat tombol jempol turun (thumbs-down button), banner auto-prompt, utawa perintah `/report-issue`.

| Field | Deskripsi |
|---|---|
| **Feedback Endpoint URL** | URL sing nampa pengiriman feedback minangka HTTP POST request kanthi isi JSON. |
| **Feedback API Key** | bearer token sing dikirim ing header `Authorization` saben permintaan feedback. Wangun kosong yen endpoint sampeyan ora mbutuh otentikasi. |

### Payload JSON Sing Ditunggu

Feedback endpoint sampeyan kudu nampa isi JSON kanthi minimal kolom-kolom iki:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Jawabané salah babagan harga.",
  "triage_category": "factual_error"
}
```

Kolom tambahan bisa ana ing payload gumantung konteks obrolan.

### Nilai `triage_category`

Lapisan triage AI ngasih salah siji nilai iki marang `triage_category` sadurunge ngirim payload:

| Value | Arti |
|---|---|
| `factual_error` | Asisten wis menehi informasi faktual sing salah. |
| `unhelpful_answer` | Responé bener saka teknis nanging ora migunani. |
| `inappropriate_content` | Responé ngandhut konten sing ora becik ditunjuka marang user. |
| `other` | Feedback ora cocok karo kategori sing wis dikenal. |

### Otentikasi

Upami endpoint anjeuh butuh otentikasi, tetepkeun kolom **Feedback API Key** jadi bearer token anjeun. Agen bakal ngirim:

```
Authorization: Bearer <your-api-key>
```

Lamun kolom **Feedback API Key** kosong, teu aya header `Authorization` anu dikirim.

### Nonaktifkeun Pengumpulan Feedback

Tinggali waé kolom **Feedback Endpoint URL** jeung **Feedback API Key**. Tombol jempol turun (thumbs-down) jeung UI feedback tetep katingali ku pengguna, tapi kirimanana teu dikirim ka layanan luar naon-na.

## Brave Search API Key

Di tab **Advanced** ogé, kolom **Brave Search API Key** ngaktifkeun kemampuan [Internet Search](../configuration/internet-search).

| Field | Deskripsi |
|---|---|
| **Brave Search API Key** | Kunci API anjeun ti dashboard pengembang Brave Search. Diperlukan pikeun ngaktifkeun pencarian internet dina asisten AI. |

Label kolom ieu aya tautan klik ka halaman pendaftaran Brave Search API. Tinggali waé (leave blank) pikeun nonaktifkeun pencarian internet.

Tingali [Internet Search](../configuration/internet-search) pikeun dokumentasi panglengkepan pikeun pengguna ngeunaan fitur ieu.

## Feature Flags

Ogé diperkenalkan dina v1.9.0, tab **Settings → Feature Flags** nyediake saklar (toggle switches) pikeun fungsionalitas pilihan. Unggal flag téh aktif atawa nonaktif di sakuliah jaringan; ayeuna teu aya opsi override per-situs.

### Ngakses Feature Flags

1. Di admin WordPress, pergi ka **Gratis AI Agent → Settings**.
2. Klik tab **Feature Flags**.

### Access Control Flags

| Flag | Default | Deskripsi |
|---|---|---|
| **Batasi Hanya Administrator** | Mati (Off) | Lamun diaktifkeun, ngan ukur pengguna kalawan peran `administrator` anu bisa muka panel obrolan AI Agent. Peran lianna bakal ningali pesan "Hubungi administrator anjeun" saeutik. |
| **Batasi Ka Admin Jaringan** | Mati (Off) | Lamun diaktifkeun dina jaringan multisite, ngan Super Admin anu bisa ngagunake agent. Admin situs individu diblokir. Ieu leuwih diprioritaskeun tibatan "Batasi Hanya Administrator" lamun duana aktif. |
| **Izin Akses Subscriber** | Mati (Off) | Lamun diaktifkeun, pengguna kalawan peran `subscriber` bisa ngagunake antarmuka obrolan tapi dibatasi kana kemampuan maca waé (henteun kagiatan nyiptake posting atawa ngarobah pengaturan). |
| **Nonaktifkeun pikeun Non-Anggota** | Mati (Off) | Ngajalin koneksi jeung status keanggotaan Ultimate Multisite. Lamun diaktifkeun, obrolan bakal disumputkeun pikeun situs anu teu boga keanggotaan aktif. |

### Bendera Branding (Branding Flags)

| Flag | Default | Deskripsi |
|---|---|---|
| **Sembunyikan Footer "Powered by Gratis AI Agent"** | Mati (Off) | Ngahapus baris atribusi branding anu ditunjuke di handap widget obrolan. Dipikawanoh pikeun deployment white-label. |
| **Nama Agent Kustom** | *(kosong)* | Ngaganti label default "Gratis AI Agent" dina header obrolan jeung menu admin ku ngagunake nama produk anjeun sorangan. Tinggal kosong lamun hoyong nganggo anu default. |
| **Sembunyikan Pemilih Agent** | Mati (Off) | Lamun diaktifkeun, pengguna teu bisa ganti-ganti antara lima agent bawaan. Agent ayeuna bakal tetep dina naon waé anu dikonfigurasi salaku default dina Settings → General. |
| **Gunakan Ikon Situs Salaku Avatar Obrolan** | Mati (Off) | Ngaganti ikon AI default dina header widget obrolan ku ikon situs WordPress (diatur di bawah Appearance → Customize → Site Identity). |

### Ngagunake Perubahan

Klik **Save Settings** sanggeus ngalawan (toggling) sababaraha bendera. Perubahan bakal langsung éfékt — teu perlu nge-flush cache atawa ngaktifkeun deui plugin.
