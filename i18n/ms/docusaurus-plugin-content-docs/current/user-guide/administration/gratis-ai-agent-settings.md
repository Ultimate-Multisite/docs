---
title: Tetapan Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Tetapan Gratis AI Agent

Skrin **Settings → Advanced** dalam Gratis AI Agent menyediakan konfigurasi peringkat pentadbir untuk integrasi backend. Halaman ini mendokumenkan pemajuan maklum balas, kekunci penyedia carian, persediaan perkhidmatan Superdav terurus, kawalan Google Calendar, tetapan SMS TextBee, dan bendera ciri seluruh rangkaian.

## Mengakses Tetapan

1. Dalam pentadbir WordPress, pergi ke **Gratis AI Agent → Settings**.
2. Klik tab **Advanced**.

## Konfigurasi Endpoint Maklum Balas

Endpoint maklum balas menerima permintaan POST daripada AI agent setiap kali pengguna menyerahkan maklum balas melalui butang ibu jari ke bawah, banner gesaan automatik, atau arahan `/report-issue`.

| Medan | Penerangan |
|---|---|
| **Feedback Endpoint URL** | URL yang menerima penyerahan maklum balas sebagai permintaan HTTP POST dengan badan JSON. |
| **Feedback API Key** | bearer token yang dihantar dalam `Authorization` header bagi setiap permintaan maklum balas. Biarkan kosong jika endpoint anda tidak memerlukan pengesahan. |

### Muatan JSON yang Dijangka

Endpoint maklum balas anda mesti menerima badan JSON dengan sekurang-kurangnya medan berikut:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Medan tambahan mungkin hadir dalam muatan bergantung pada konteks perbualan.

### Nilai `triage_category`

Lapisan triage AI menetapkan salah satu nilai berikut kepada `triage_category` sebelum memajukan muatan:

| Nilai | Maksud |
|---|---|
| `factual_error` | Pembantu memberikan maklumat fakta yang tidak betul. |
| `unhelpful_answer` | Respons adalah betul secara teknikal tetapi tidak berguna. |
| `inappropriate_content` | Respons mengandungi kandungan yang tidak sepatutnya ditunjukkan kepada pengguna. |
| `other` | Maklum balas tidak sepadan dengan kategori yang diketahui. |

### Pengesahan

Jika endpoint anda memerlukan pengesahan, tetapkan medan **Feedback API Key** kepada bearer token anda. Agent menghantar:

```
Authorization: Bearer <your-api-key>
```

Jika medan **Feedback API Key** kosong, tiada `Authorization` header dihantar.

### Menyahdayakan Pengumpulan Maklum Balas

Biarkan kedua-dua medan **Feedback Endpoint URL** dan **Feedback API Key** kosong. Butang ibu jari ke bawah dan UI maklum balas kekal kelihatan kepada pengguna, tetapi penyerahan tidak dimajukan kepada sebarang perkhidmatan luaran.

## Brave Search API Key

Juga pada tab **Advanced**, medan **Brave Search API Key** mendayakan keupayaan [Carian Internet](../configuration/internet-search).

| Medan | Penerangan |
|---|---|
| **Brave Search API Key** | API key anda daripada dashboard pembangun Brave Search. Diperlukan untuk mendayakan carian internet dalam pembantu AI. |

Label medan termasuk pautan boleh klik ke halaman pendaftaran Brave Search API. Biarkan kosong untuk menyahdayakan carian internet.

Lihat [Carian Internet](../configuration/internet-search) untuk dokumentasi pengguna akhir tentang ciri ini.

## Perkhidmatan Superdav Terurus

Superdav AI Agent v1.18.0 menambah endpoint perkhidmatan Superdav terurus dan penyediaan sambungan automatik untuk site yang disokong. Gunakan kawalan ini apabila site anda perlu bersambung kepada penyedia yang dihoskan dan bukannya endpoint perkhidmatan yang dikonfigurasikan secara manual.

| Medan | Penerangan |
|---|---|
| **Managed Superdav Service** | Mendayakan sambungan perkhidmatan Superdav yang dihoskan untuk site yang disokong. |
| **Provision Connection** | Memulakan penyediaan endpoint dan kelayakan secara automatik. Gunakan ini selepas mengesahkan site patut menggunakan penyedia terurus. |
| **Service Endpoint / Connection Status** | Menunjukkan endpoint semasa atau keadaan sambungan selepas penyediaan. |

Selepas penyediaan, simpan tetapan dan sahkan status sambungan sebelum bergantung pada aliran kerja perkhidmatan terurus. Jika penyediaan gagal, semak panduan cuba semula yang dipaparkan dan sahkan site mempunyai kebenaran untuk menggunakan penyedia yang dihoskan.

## Konfigurasi Google Calendar

Apabila ciri kalendar Superdav AI Agent v1.18.0 didayakan, agent boleh membaca kalendar yang dikonfigurasikan dan butiran acara. Alat kalendar berorientasikan bacaan dan berguna untuk peringatan sedar jadual, susulan peserta, dan pemadanan kenalan.

| Medan | Penerangan |
|---|---|
| **Google Calendar Credentials** | Menyimpan kelayakan atau sambungan token yang diperlukan untuk membaca data kalendar. |
| **Calendar Selection** | Mengehadkan kalendar yang dikonfigurasikan yang boleh diperiksa oleh agent. |
| **Calendar Connection Status** | Mengesahkan sama ada kelayakan semasa boleh membaca kalendar dan acara. |

Hadkan kelayakan kalendar kepada kalendar yang diperlukan oleh agent sahaja. Sambung semula atau putarkan kelayakan jika status menunjukkan token yang telah tamat tempoh.

## Pemberitahuan SMS TextBee

Superdav AI Agent v1.18.0 menambah TextBee sebagai penyedia SMS untuk aliran kerja pemberitahuan yang dikonfigurasikan. Pemberitahuan SMS patut digandingkan dengan pintu kelulusan manusia untuk mesej sensitif atau yang menghadap pengguna.

| Medan | Penerangan |
|---|---|
| **TextBee API Key** | Mengesahkan permintaan kepada penyedia SMS TextBee. |
| **TextBee Device / Sender** | Memilih penghantar atau peranti TextBee yang digunakan untuk mesej keluar, apabila diperlukan oleh penyedia. |
| **SMS Notifications Enabled** | Membenarkan aliran kerja yang diluluskan untuk menghantar pemberitahuan mesej teks. Biarkan dinyahdayakan untuk menghalang penghantaran SMS. |

Hantar mesej ujian hanya kepada nombor milik pentadbir, kemudian sahkan tingkah laku pintu kelulusan sebelum mendayakan peringatan berjadual atau yang menghadap peserta.

## Bendera Ciri

Juga diperkenalkan dalam v1.9.0, tab **Settings → Feature Flags** menyediakan suis togol untuk fungsi pilihan. Setiap bendera sama ada didayakan atau dinyahdayakan seluruh rangkaian; tiada penggantian per-site pada masa ini.

### Mengakses Bendera Ciri

1. Dalam pentadbir WordPress, pergi ke **Gratis AI Agent → Settings**.
2. Klik tab **Feature Flags**.

### Bendera Kawalan Akses

| Bendera | Lalai | Penerangan |
|---|---|---|
| **Hadkan kepada Pentadbir** | Off | Apabila diaktifkan, hanya pengguna dengan peranan `administrator` boleh membuka panel sembang AI Agent. Semua peranan lain akan melihat mesej "Hubungi pentadbir anda" sebaliknya. |
| **Hadkan kepada Network Admins** | Off | Apabila diaktifkan pada rangkaian multisite, hanya Super Admins boleh menggunakan agent. Pentadbir tapak individu disekat. Mengatasi "Hadkan kepada Pentadbir" jika kedua-duanya diaktifkan. |
| **Benarkan Akses Subscriber** | Off | Apabila diaktifkan, pengguna dengan peranan `subscriber` boleh menggunakan antara muka sembang tetapi terhad kepada keupayaan baca sahaja (tiada penciptaan siaran atau perubahan tetapan). |
| **Nyahaktifkan untuk Bukan Ahli** | Off | Bersepadu dengan status keahlian Ultimate Multisite. Apabila diaktifkan, sembang disembunyikan untuk tapak yang tidak mempunyai keahlian aktif. |

### Bendera Penjenamaan

| Bendera | Lalai | Penerangan |
|---|---|---|
| **Sembunyikan Pengaki "Powered by Gratis AI Agent"** | Off | Mengalih keluar baris atribusi penjenamaan yang ditunjukkan di bahagian bawah widget sembang. Disyorkan untuk pelaksanaan label putih. |
| **Nama Agent Tersuai** | *(kosong)* | Menggantikan label lalai "Gratis AI Agent" dalam pengepala sembang dan menu pentadbir dengan nama produk anda sendiri. Biarkan kosong untuk menggunakan lalai. |
| **Sembunyikan Pemilih Agent** | Off | Apabila diaktifkan, pengguna tidak boleh bertukar antara lima agent terbina dalam. Agent semasa ditetapkan kepada apa sahaja yang dikonfigurasikan sebagai lalai dalam Tetapan → Umum. |
| **Gunakan Ikon Tapak sebagai Avatar Sembang** | Off | Menggantikan ikon AI lalai dalam pengepala widget sembang dengan ikon tapak WordPress (ditetapkan di bawah Penampilan → Sesuaikan → Identiti Tapak). |

### Bendera Keselamatan Automasi

Superdav AI Agent v1.18.0 memperkenalkan pagar kelulusan manusia dan rekod peringatan untuk jalankan automasi yang lebih selamat. Kawalan ini mungkin muncul dalam bendera ciri atau tetapan automasi lanjutan, bergantung pada pakej yang dipasang.

| Bendera | Lalai | Penerangan |
|---|---|---|
| **Memerlukan Kelulusan Manusia** | Disyorkan hidup | Menjeda automasi sensitif sehingga pengguna yang diberi kuasa menyemak dan mengesahkan tindakan yang dicadangkan. |
| **Penyahduplikasian Peringatan** | On | Merekodkan peringatan yang dihantar supaya percubaan semula atau jalankan berjadual tidak menghantar pemberitahuan pendua. |
| **Aktifkan Alat Kalendar** | Off sehingga dikonfigurasikan | Membenarkan agent membaca kalendar dan acara Google yang dikonfigurasikan. |
| **Aktifkan Pemberitahuan SMS** | Off sehingga dikonfigurasikan | Membenarkan aliran kerja yang diluluskan menghantar pemberitahuan SMS TextBee selepas kelayakan disimpan. |

### Menerapkan Perubahan

Klik **Simpan Tetapan** selepas menogol mana-mana bendera. Perubahan berkuat kuasa serta-merta — tiada pengosongan cache atau pengaktifan semula plugin diperlukan.
