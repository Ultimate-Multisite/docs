---
title: 'Pelajaran 12: Mengelola Bisnis'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Pelajaran 12: Menjalankan Bisnis

Platform itu bukan proyek yang selesai, melainkan bisnis yang harus kamu kelola. Pelajaran ini membahas operasional sehari-hari dalam mengelola FitSite: mulai dari dukungan, penagihan, pemeliharaan, hingga menjaga pelanggan tetap senang.

## Di Mana Kita Berhenti {#where-we-left-off}

FitSite sudah tayang dan pelanggan mulai mendaftar. Sekarang, kamu perlu menjalankan operasional ini secara berkelanjutan.

## Operasi Harian {#daily-operations}

### Pemantauan (Monitoring) {#monitoring}

Periksa hal-hal ini setiap hari (atau atur peringatan/alert):

- **Uptime**: Apakah platformnya dapat diakses? Gunakan layanan pemantauan *uptime*.
- **Pendaftaran Baru**: Berapa banyak pelanggan baru yang mendaftar hari ini?
- **Pembayaran Gagal**: Apakah ada kegagalan pembayaran yang perlu diperhatikan?
- **Permintaan Dukungan**: Apakah ada pertanyaan pelanggan yang belum terjawab?

### Dukungan Pelanggan (Customer Support) {#customer-support}

Fokus ceruk pasar (niche) kamu adalah keuntungan di sini. Karena semua pelanggan kamu adalah studio kebugaran, kamu akan melihat pertanyaan yang sama berulang kali:

**Pertanyaan umum yang akan kamu terima:**

- "Bagaimana cara saya memperbarui jadwal kelas saya?"
- "Bisakah saya mengubah warna situs saya?"
- "Bagaimana cara saya menambahkan pelatih baru ke situs saya?"
- "Domain saya tidak berfungsi"
- "Bagaimana cara saya membatalkan/meng-upgrade paket saya?"

Bangun basis pengetahuan (yang dimulai di Pelajaran 8) berdasarkan pertanyaan-pertanyaan yang berulang ini. Setiap tiket dukungan yang seharusnya bisa menjadi artikel basis pengetahuan adalah sinyal untuk menulis artikel tersebut.

### Tingkat Dukungan (Support Tiers) {#support-tiers}

Seiring pertumbuhan, strukturkan dukungan berdasarkan paket:

| Paket | Tingkat Dukungan | Waktu Respons |
|------|--------------|---------------|
| Starter | Basis pengetahuan + email | 48 jam |
| Growth | Dukungan email | 24 jam |
| Pro | Email prioritas + panggilan *onboarding* | 4 jam |

Addon [Support Tickets](/addons/support-tickets) dapat membantu mengelola permintaan dukungan di dalam platform.

## Operasi Penagihan (Billing Operations) {#billing-operations}

### Pembayaran Berulang (Recurring Payments) {#recurring-payments}

Ultimate Multisite menangani penagihan berulang secara otomatis melalui *payment gateway* kamu. Tugas kamu adalah memantau:

- **Pembayaran Gagal**: Tindak lanjuti dengan cepat. Sebagian besar kegagalan adalah karena kartu kedaluwarsa, bukan pembatalan yang disengaja.
- **Dunning**: Atur logika coba bayar otomatis melalui *payment gateway* kamu (Stripe sangat baik dalam hal ini).
- **Permintaan Pembatalan**: Pahami mengapa pelanggan pergi. Setiap pembatalan adalah umpan balik.

### Mengelola Keanggotaan (Managing Memberships) {#managing-memberships}

Akses **Ultimate Multisite > Memberships** untuk:

- Melihat semua langganan aktif
- Menangani permintaan *upgrade* dan *downgrade*
- Memproses pengembalian dana jika diperlukan
- Mengelola kedaluwarsa masa uji coba

Lihat [Managing Memberships](/user-guide/administration/managing-memberships) untuk referensi lengkap.

### Penagihan (Invoicing) {#invoicing}

Pastikan faktur (invoice) dibuat dengan benar untuk setiap pembayaran. Pelanggan mungkin memerlukan faktur untuk pelaporan biaya bisnis. Lihat [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices).

## Pemeliharaan Platform (Platform Maintenance) {#platform-maintenance}

### Pembaruan WordPress dan Plugin {#wordpress-and-plugin-updates}

Sebagai administrator jaringan, kamu bertanggung jawab untuk:

- **Pembaruan inti WordPress**: Uji coba di situs *staging* sebelum diterapkan ke produksi
- **Pembaruan Plugin**: Sama -- uji coba dulu, baru terapkan ke seluruh jaringan
- **Pembaruan Tema**: Verifikasi apakah *template* masih terlihat benar setelah pembaruan tema
- **Pembaruan Ultimate Multisite**: Ikuti *changelog* dan uji coba sebelum memperbarui

:::warning Jangan Pernah Update di Produksi Tanpa Pengujian
Pembaruan yang rusak akan memengaruhi setiap situs pelanggan di jaringan kamu. Selalu uji pembaruan di salinan *staging* jaringan kamu terlebih dahulu.
:::

### Keamanan (Security) {#security}

- Selalu perbarui semua perangkat lunak
- Gunakan kata sandi yang kuat dan otentikasi dua faktor untuk akun admin
- Pantau aktivitas mencurigakan
- Siapkan rencana untuk insiden keamanan

### Performa (Performance) {#performance}

Seiring pertumbuhan jaringan kamu, pantau:

- **Waktu muat halaman**: Apakah situs pelanggan cepat?
- **Penggunaan sumber daya server**: CPU, memori, ruang disk
- **Performa database**: Jaringan besar memerlukan optimasi database dari waktu ke waktu

Pertimbangkan untuk menerapkan *caching* (page cache, object cache) dan CDN jika kamu belum melakukannya. [Cloudflare integration](/user-guide/host-integrations/cloudflare) menangani sebagian besar hal ini.

## Manajemen Siklus Hidup Pelanggan (Customer Lifecycle Management) {#customer-lifecycle-management}

### Mengurangi Tingkat Pelanggan Berhenti (Reducing Churn) {#reducing-churn}

*Churn* adalah persentase pelanggan yang membatalkan setiap bulan. Bagi bisnis langganan, mengurangi *churn* sama pentingnya dengan mendapatkan pelanggan baru.

**Alasan umum pelanggan studio kebugaran berhenti berlangganan:**

- Mereka tidak tahu cara menggunakan platform → tingkatkan *onboarding*
- Situsnya tidak terlihat cukup bagus → tingkatkan *template*
- Mereka tidak melihat nilai → tingkatkan fitur atau komunikasi
- Mereka menemukan alternatif yang lebih murah → perkuat nilai ceruk pasar kamu
- Bisnis mereka tutup → tidak terhindarkan, tetapi lacak ini secara terpisah

### Mendorong Upgrade {#encouraging-upgrades}

Pelanggan di paket Starter yang berhasil harus didorong untuk *upgrade*:

- Ketika mereka mencapai batas paket (situs, penyimpanan), tampilkan *prompt* *upgrade*
- Kirim email bertarget yang menyoroti fitur paket Growth yang akan mereka manfaatkan
- Tunjukkan apa yang telah dibangun oleh pelanggan Growth/Pro

### Kampanye Pemulihan (Win-Back Campaigns) {#win-back-campaigns}

Ketika pelanggan membatalkan:

1. Tanyakan alasannya (survei keluar atau email)
2. Tangani kekhawatiran mereka jika memungkinkan
3. Tawarkan diskon untuk kembali (30-60 hari setelah pembatalan)

## Rutinitas Mingguan dan Bulanan {#weekly-and-monthly-routines}

### Mingguan {#weekly}

- Tinjau pendaftaran baru dan pembatalan
- Tanggapi semua tiket dukungan yang terbuka
- Periksa performa platform dan *uptime*
- Tinjau pembayaran yang gagal

### Bulanan {#monthly}

- Analisis metrik utama (MRR, *churn*, pelanggan baru, *upgrade*)
- Terapkan pembaruan WordPress dan plugin (setelah uji coba *staging*)
- Tinjau dan perbarui basis pengetahuan berdasarkan pola dukungan
- Kirim buletin atau pembaruan kepada pelanggan (fitur baru, tips, berita industri kebugaran)

### Triwulanan {#quarterly}

- Tinjau harga dibandingkan dengan pesaing dan umpan balik pelanggan
- Evaluasi desain *template* -- apakah perlu penyegaran?
- Nilai kapasitas *hosting* -- apakah perlu ditingkatkan skalanya?
- Tinjau dan tingkatkan *onboarding* berdasarkan data aktivasi

## Apa yang Kita Bangun di Pelajaran Ini {#what-we-built-this-lesson}

- **Rutinitas pemantauan harian** untuk *uptime*, pendaftaran, pembayaran, dan dukungan
- **Struktur dukungan bertingkat** yang disesuaikan dengan level paket
- **Operasi penagihan** termasuk *dunning* dan penanganan pembatalan
- **Prosedur pemeliharaan** untuk pembaruan, keamanan, dan performa
- **Strategi pengurangan *churn*** khusus untuk ceruk pasar kebugaran
- **Rutinitas operasional mingguan, bulanan, dan triwulanan**

---

**Selanjutnya:** [Pelajaran 13: Meningkatkan Skala](lesson-13-growth) -- menumbuhkan FitSite dari operasional kecil menjadi bisnis nyata.
