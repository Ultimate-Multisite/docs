---
title: Pengaturan Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Pengaturan Gratis AI Agent {#gratis-ai-agent-settings}

Layar **Pengaturan → Lanjutan** di Gratis AI Agent menyediakan konfigurasi tingkat administrator untuk integrasi backend. Halaman ini mendokumentasikan penerusan feedback, kunci penyedia pencarian, penyiapan layanan Superdav terkelola, kontrol Google Calendar, pengaturan SMS TextBee, dan penanda fitur di seluruh jaringan.

## Mengakses Pengaturan {#accessing-settings}

1. Di admin WordPress, buka **Gratis AI Agent → Pengaturan**.
2. Klik tab **Lanjutan**.

## Konfigurasi Endpoint Feedback {#feedback-endpoint-configuration}

Endpoint feedback menerima permintaan POST dari AI agent setiap kali pengguna mengirim feedback melalui tombol jempol turun, banner prompt otomatis, atau perintah `/report-issue`.

| Bidang | Deskripsi |
|---|---|
| **URL Endpoint Feedback** | URL yang menerima pengiriman feedback sebagai permintaan HTTP POST dengan body JSON. |
| **Feedback API Key** | bearer token yang dikirim dalam `Authorization` header dari setiap permintaan feedback. Biarkan kosong jika endpoint Anda tidak memerlukan autentikasi. |

### Payload JSON yang Diharapkan {#expected-json-payload}

Endpoint feedback Anda harus menerima body JSON dengan setidaknya bidang berikut:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Bidang tambahan dapat ada dalam payload tergantung pada konteks percakapan.

### Nilai `triage_category` {#triagecategory-values}

Lapisan triase AI menetapkan salah satu nilai berikut ke `triage_category` sebelum meneruskan payload:

| Nilai | Arti |
|---|---|
| `factual_error` | Asisten memberikan informasi faktual yang salah. |
| `unhelpful_answer` | Respons secara teknis benar tetapi tidak berguna. |
| `inappropriate_content` | Respons berisi konten yang tidak boleh ditampilkan kepada pengguna. |
| `other` | Feedback tidak cocok dengan kategori yang diketahui. |

### Autentikasi {#authentication}

Jika endpoint Anda memerlukan autentikasi, atur bidang **Feedback API Key** ke bearer token Anda. Agent mengirim:

```
Authorization: Bearer <your-api-key>
```

Jika bidang **Feedback API Key** kosong, tidak ada `Authorization` header yang dikirim.

### Menonaktifkan Pengumpulan Feedback {#disabling-feedback-collection}

Biarkan bidang **URL Endpoint Feedback** dan **Feedback API Key** kosong. Tombol jempol turun dan UI feedback tetap terlihat oleh pengguna, tetapi pengiriman tidak diteruskan ke layanan eksternal mana pun.

## Brave Search API Key {#brave-search-api-key}

Juga pada tab **Lanjutan**, bidang **Brave Search API Key** mengaktifkan kemampuan [Pencarian Internet](../configuration/internet-search).

| Bidang | Deskripsi |
|---|---|
| **Brave Search API Key** | API key Anda dari dashboard developer Brave Search. Diperlukan untuk mengaktifkan pencarian internet di AI assistant. |

Label bidang menyertakan tautan yang dapat diklik ke halaman pendaftaran Brave Search API. Biarkan kosong untuk menonaktifkan pencarian internet.

Lihat [Pencarian Internet](../configuration/internet-search) untuk dokumentasi pengguna akhir tentang fitur ini.

## Layanan Superdav Terkelola {#managed-superdav-service}

Superdav AI Agent v1.18.0 menambahkan endpoint layanan Superdav terkelola dan penyediaan koneksi otomatis untuk site yang didukung. Gunakan kontrol ini saat site Anda harus terhubung ke penyedia yang di-host, bukan ke endpoint layanan yang dikonfigurasi secara manual.

| Bidang | Deskripsi |
|---|---|
| **Layanan Superdav Terkelola** | Mengaktifkan koneksi layanan Superdav yang di-host untuk site yang didukung. |
| **Sediakan Koneksi** | Memulai penyediaan endpoint dan kredensial otomatis. Gunakan ini setelah mengonfirmasi bahwa site harus menggunakan penyedia terkelola. |
| **Endpoint Layanan / Status Koneksi** | Menampilkan endpoint saat ini atau status koneksi setelah penyediaan. |

Setelah penyediaan, simpan pengaturan dan verifikasi status koneksi sebelum mengandalkan alur kerja layanan terkelola. Jika penyediaan gagal, tinjau panduan coba ulang yang ditampilkan dan konfirmasi bahwa site memiliki izin untuk menggunakan penyedia yang di-host.

## Konfigurasi Google Calendar {#google-calendar-configuration}

Saat fitur kalender Superdav AI Agent v1.18.0 diaktifkan, agent dapat membaca kalender yang dikonfigurasi dan detail acara. Alat kalender berorientasi baca dan berguna untuk pengingat yang sadar jadwal, tindak lanjut peserta, dan pencocokan kontak.

| Bidang | Deskripsi |
|---|---|
| **Kredensial Google Calendar** | Menyimpan kredensial atau koneksi token yang diperlukan untuk membaca data kalender. |
| **Pemilihan Kalender** | Membatasi kalender terkonfigurasi mana yang boleh diperiksa oleh agent. |
| **Status Koneksi Kalender** | Mengonfirmasi apakah kredensial saat ini dapat membaca kalender dan acara. |

Batasi kredensial kalender hanya ke kalender yang dibutuhkan agent. Hubungkan ulang atau rotasi kredensial jika status menunjukkan token kedaluwarsa.

## Notifikasi SMS TextBee {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 menambahkan TextBee sebagai penyedia SMS untuk alur kerja notifikasi yang dikonfigurasi. Notifikasi SMS harus dipasangkan dengan gerbang persetujuan manusia untuk pesan yang sensitif atau menghadap pengguna.

| Bidang | Deskripsi |
|---|---|
| **TextBee API Key** | Mengautentikasi permintaan ke penyedia SMS TextBee. |
| **Perangkat / Pengirim TextBee** | Memilih pengirim atau perangkat TextBee yang digunakan untuk pesan keluar, saat diwajibkan oleh penyedia. |
| **Notifikasi SMS Diaktifkan** | Mengizinkan alur kerja yang disetujui untuk mengirim notifikasi pesan teks. Biarkan nonaktif untuk mencegah pengiriman SMS. |

Kirim pesan uji hanya ke nomor milik administrator, lalu konfirmasi perilaku gerbang persetujuan sebelum mengaktifkan pengingat terjadwal atau yang menghadap peserta.

## Penanda Fitur {#feature-flags}

Juga diperkenalkan di v1.9.0, tab **Pengaturan → Penanda Fitur** menyediakan sakelar toggle untuk fungsionalitas opsional. Setiap penanda diaktifkan atau dinonaktifkan di seluruh jaringan; saat ini tidak ada penggantian per site.

### Mengakses Penanda Fitur {#accessing-feature-flags}

1. Di admin WordPress, buka **Gratis AI Agent → Pengaturan**.
2. Klik tab **Penanda Fitur**.

### Penanda Kontrol Akses {#access-control-flags}

| Flag | Default | Deskripsi |
|---|---|---|
| **Batasi untuk Administrator** | Off | Saat diaktifkan, hanya pengguna dengan role `administrator` yang dapat membuka panel chat AI Agent. Semua role lain akan melihat pesan "Hubungi administrator Anda" sebagai gantinya. |
| **Batasi untuk Network Admins** | Off | Saat diaktifkan pada jaringan multisite, hanya Super Admins yang dapat menggunakan agent. Admin site individual diblokir. Mengutamakan "Batasi untuk Administrator" jika keduanya diaktifkan. |
| **Izinkan Akses Subscriber** | Off | Saat diaktifkan, pengguna dengan role `subscriber` dapat menggunakan antarmuka chat tetapi dibatasi pada kemampuan hanya-baca (tanpa pembuatan pos atau perubahan pengaturan). |
| **Nonaktifkan untuk Non-Anggota** | Off | Terintegrasi dengan status keanggotaan Ultimate Multisite. Saat diaktifkan, chat disembunyikan untuk site yang tidak memiliki keanggotaan aktif. |

### Flag Branding {#branding-flags}

| Flag | Default | Deskripsi |
|---|---|---|
| **Sembunyikan Footer "Powered by Gratis AI Agent"** | Off | Menghapus baris atribusi branding yang ditampilkan di bagian bawah widget chat. Direkomendasikan untuk deployment white-label. |
| **Nama Agent Kustom** | *(kosong)* | Mengganti label default "Gratis AI Agent" di header chat dan menu admin dengan nama produk Anda sendiri. Biarkan kosong untuk menggunakan default. |
| **Sembunyikan Pemilih Agent** | Off | Saat diaktifkan, pengguna tidak dapat beralih di antara lima agent bawaan. Agent saat ini ditetapkan ke apa pun yang dikonfigurasi sebagai default di Settings → General. |
| **Gunakan Ikon Site sebagai Avatar Chat** | Off | Mengganti ikon AI default di header widget chat dengan ikon site WordPress (diatur di Appearance → Customize → Site Identity). |

### Flag Keamanan Otomatisasi {#automation-safety-flags}

Superdav AI Agent v1.18.0 memperkenalkan gerbang persetujuan manusia dan catatan pengingat untuk menjalankan otomatisasi yang lebih aman. Kontrol ini dapat muncul di feature flags atau pengaturan otomatisasi lanjutan, bergantung pada paket yang diinstal.

| Flag | Default | Deskripsi |
|---|---|---|
| **Wajibkan Persetujuan Manusia** | Direkomendasikan on | Menjeda otomatisasi sensitif hingga pengguna berwenang meninjau dan mengonfirmasi tindakan yang diusulkan. |
| **Deduplikasi Pengingat** | On | Mencatat pengingat yang dikirim sehingga percobaan ulang atau proses terjadwal tidak mengirim notifikasi duplikat. |
| **Aktifkan Calendar Tools** | Off hingga dikonfigurasi | Memungkinkan agent membaca Google calendars dan acara yang dikonfigurasi. |
| **Aktifkan Notifikasi SMS** | Off hingga dikonfigurasi | Memungkinkan workflow yang disetujui mengirim notifikasi SMS TextBee setelah kredensial disimpan. |

### Menerapkan Perubahan {#applying-changes}

Klik **Save Settings** setelah mengalihkan flag apa pun. Perubahan langsung berlaku — tidak diperlukan pembersihan cache atau reaktivasi plugin.
