---
title: 'Pelajaran 12: Menguruskan Perniagaan'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Pelajaran 12: Mengurus Perniagaan {#lesson-12-running-the-business}

Platform bukan sekadar projek yang boleh disiapkan—ia adalah perniagaan yang perlu anda uruskan. Pelajaran ini merangkumi operasi harian menguruskan FitSite: sokongan, pengbilan, penyelenggaraan, dan memastikan pelanggan gembira.

## Di Mana Kita Berhenti {#where-we-left-off}

FitSite sudah aktif dan pelanggan mula mendaftar. Kini, anda perlu menjalankan operasi ini secara mampan.

## Operasi Harian {#daily-operations}

### Pemantauan {#monitoring}

Semak perkara ini setiap hari (atau tetapkan amaran):

- **Uptime**: Adakah platform boleh diakses? Gunakan perkhidmatan pemantauan ketersediaan (uptime monitoring).
- **Pendaftaran baharu**: Berapa ramai pelanggan baharu yang mendaftar hari ini?
- **Pembayaran gagal**: Adakah terdapat kegagalan pembayaran yang memerlukan perhatian?
- **Permintaan sokongan**: Adakah terdapat soalan pelanggan yang belum dijawab?

### Sokongan Pelanggan {#customer-support}

Fokus khusus anda adalah kelebihan di sini. Oleh kerana semua pelanggan anda adalah studio kecergasan, anda akan melihat soalan yang sama berulang kali:

**Soalan biasa yang akan anda terima:**

- "Bagaimana saya kemas kini jadual kelas saya?"
- "Bolehkah saya menukar warna laman saya?"
- "Bagaimana saya menambah jurulatih baharu ke laman saya?"
- "Domain saya tidak berfungsi"
- "Bagaimana saya membatalkan/meningkatkan pelan saya?"

Bina pangkalan pengetahuan anda (dimulakan dalam Pelajaran 8) berdasarkan soalan-soalan berulang ini. Setiap tiket sokongan yang boleh menjadi artikel pangkalan pengetahuan adalah isyarat untuk menulis artikel tersebut.

### Tahap Sokongan {#support-tiers}

Semasa anda berkembang, strukturkan sokongan mengikut pelan:

| Pelan | Tahap Sokongan | Masa Respons |
|------|--------------|---------------|
| Starter | Pangkalan pengetahuan + e-mel | 48 jam |
| Growth | Sokongan e-mel | 24 jam |
| Pro | E-mel keutamaan + panggilan orientasi | 4 jam |

[Addon Support Tickets](/addons/support-tickets) boleh membantu menguruskan permintaan sokongan dalam platform.

## Operasi Pengbilan {#billing-operations}

### Pembayaran Berulang {#recurring-payments}

Ultimate Multisite mengendalikan pengbilan berulang secara automatik melalui payment gateway anda. Tugas anda adalah memantau perkara berikut:

- **Pembayaran gagal**: Susuli dengan segera. Kebanyakan kegagalan adalah kad luput, bukan pembatalan sengaja.
- **Dunning**: Tetapkan logik percubaan semula automatik melalui payment gateway anda (Stripe mengendalikan ini dengan baik)
- **Permintaan pembatalan**: Faham mengapa pelanggan pergi. Setiap pembatalan adalah maklum balas.

### Mengurus Keahlian {#managing-memberships}

Navigasi ke **Ultimate Multisite > Memberships** untuk:

- Melihat semua langganan aktif
- Mengendalikan permintaan peningkatan dan penurunan pelan
- Memproses bayaran balik apabila perlu
- Menguruskan tamat tempoh percubaan

Lihat [Managing Memberships](/user-guide/administration/managing-memberships) untuk rujukan penuh.

### Invois {#invoicing}

Pastikan invois dijana dengan betul untuk setiap pembayaran. Pelanggan mungkin memerlukan invois untuk pelaporan perbelanjaan perniagaan. Lihat [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices).

## Penyelenggaraan Platform {#platform-maintenance}

### Kemas Kini WordPress dan Plugin {#wordpress-and-plugin-updates}

Sebagai pentadbir rangkaian, anda bertanggungjawab untuk:

- **Kemas kini teras WordPress**: Uji pada tapak ujian (staging site) sebelum diaplikasikan ke produksi
- **Kemas kini plugin**: Sama—uji dahulu, kemudian aplikasikan ke seluruh rangkaian
- **Kemas kini tema**: Sahkan templat masih kelihatan betul selepas kemas kini tema
- **Kemas kini Ultimate Multisite**: Ikuti changelog dan uji sebelum mengemas kini

:::warning Jangan Pernah Mengemas Kini di Produksi Tanpa Ujian
Kemas kini yang rosak akan menjejaskan setiap laman pelanggan dalam rangkaian anda. Sentiasa uji kemas kini pada salinan staging rangkaian anda dahulu.
:::

### Keselamatan {#security}

- Kekalkan semua perisian terkini
- Gunakan kata laluan yang kuat dan pengesahan dua faktor untuk akaun admin
- Pantau aktiviti yang mencurigakan
- Sediakan pelan untuk insiden keselamatan

### Prestasi {#performance}

Semasa rangkaian anda berkembang, pantau:

- **Masa muat laman**: Adakah laman pelanggan pantas?
- **Penggunaan sumber pelayan**: CPU, memori, ruang cakera
- **Prestasi pangkalan data**: Rangkaian besar memerlukan pengoptimuman pangkalan data dari semasa ke semasa

Pertimbangkan untuk melaksanakan caching (page cache, object cache) dan CDN jika anda belum melakukannya. [Cloudflare integration](/user-guide/host-integrations/cloudflare) menguruskan sebahagian besar ini.

## Pengurusan Kitaran Hidup Pelanggan {#customer-lifecycle-management}

### Mengurangkan Kadar Berhenti (Churn) {#reducing-churn}

Churn ialah peratusan pelanggan yang membatalkan setiap bulan. Bagi perniagaan langganan, mengurangkan kadar berhenti sama pentingnya dengan mendapatkan pelanggan baharu.

**Sebab biasa pelanggan studio kecergasan berhenti:**

- Mereka tidak dapat mencari cara menggunakan platform → tingkatkan orientasi (onboarding)
- Laman itu tidak kelihatan cukup bagus → tingkatkan templat
- Mereka tidak melihat nilai → tingkatkan ciri atau komunikasi
- Mereka menemui alternatif yang lebih murah → perkuatkan nilai niche anda
- Perniagaan mereka ditutup → tidak dapat dielakkan, tetapi jejak ini secara berasingan

### Menggalakkan Peningkatan Pelan {#encouraging-upgrades}

Pelanggan di Starter yang berjaya harus digalakkan untuk meningkatkan pelan:

- Apabila mereka mencapai had pelan (laman, storan), tunjukkan permintaan peningkatan pelan
- Hantar e-mel yang disasarkan yang menonjolkan ciri pelan Growth yang akan memberi manfaat kepada mereka
- Tunjukkan apa yang telah dibina oleh pelanggan Growth/Pro

### Kempen Menarik Balik (Win-Back Campaigns) {#win-back-campaigns}

Apabila pelanggan membatalkan:

1. Tanya sebabnya (survei keluar atau e-mel)
2. Atasi kebimbangan mereka jika mungkin
3. Tawarkan diskaun untuk kembali (30-60 hari selepas pembatalan)

## Rutin Mingguan dan Bulanan {#weekly-and-monthly-routines}

### Mingguan {#weekly}

- Semak pendaftaran baharu dan pembatalan
- Balas semua tiket sokongan yang terbuka
- Semak prestasi platform dan ketersediaan (uptime)
- Semak sebarang pembayaran gagal

### Bulanan {#monthly}

- Analisis metrik utama (MRR, kadar berhenti, pelanggan baharu, peningkatan pelan)
- Laksanakan kemas kini WordPress dan plugin (selepas ujian staging)
- Semak dan kemas kini pangkalan pengetahuan berdasarkan corak sokongan
- Hantar buletin atau kemas kini kepada pelanggan (ciri baharu, tip, berita industri kecergasan)

### Suku Tahunan {#quarterly}

- Semak harga berbanding pesaing dan maklum balas pelanggan
- Nilai reka bentuk templat -- adakah ia perlu diperbaharui?
- Nilai kapasiti hosting -- adakah anda perlu meningkatkan skala?
- Semak dan tingkatkan orientasi (onboarding) berdasarkan data pengaktifan

## Apa Yang Kami Bina Dalam Pelajaran Ini {#what-we-built-this-lesson}

- **Rutin pemantauan harian** untuk ketersediaan, pendaftaran, pembayaran, dan sokongan
- **Struktur sokongan berperingkat** yang sepadan dengan tahap pelan
- **Operasi pengbilan** termasuk dunning dan pengendalian pembatalan
- **Prosedur penyelenggaraan** untuk kemas kini, keselamatan, dan prestasi
- **Strategi pengurangan kadar berhenti** khusus untuk niche kecergasan
- **Rutin operasi mingguan, bulanan, dan suku tahunan**

---

**Seterusnya:** [Pelajaran 13: Meningkatkan Skala](lesson-13-growth) -- mengembangkan FitSite dari operasi kecil kepada perniagaan sebenar.
