---
title: Daftarkan Account melalui Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Peristiwa: Mendaftarkan Account melalui Zapier {#event-register-an-account-via-zapier}

Dalam artikel [Mengintegrasikan Ultimate Multisite dengan Zapier](zapier.md), kita membahas cara menggunakan Zapier untuk melakukan berbagai tindakan di dalam Ultimate Multisite berdasarkan pemicu dan peristiwa. Dalam artikel ini, kami akan menunjukkan bagaimana Anda dapat mengintegrasikan aplikasi pihak ketiga. Kami akan menggunakan Google Sheets sebagai sumber data dan mengirimkan informasi ke Ultimate Multisite untuk mendaftarkan Account.

Sebelum menghubungkan Zapier, buka **Ultimate Multisite > Pengaturan > API & Webhooks** dan pastikan API diaktifkan. Salin API Key dan API Secret dari layar ini saat Zapier meminta kredensial Account Ultimate Multisite.

![Pengaturan API dan Webhooks dengan opsi API Key, API Secret, dan Enable API](/img/admin/settings-api-webhooks.png)

Pertama, Anda perlu membuat **Google Sheet** di Google Drive Anda. Pastikan Anda mendefinisikan setiap kolom dengan benar sehingga Anda dapat dengan mudah memetakan data nanti.

Setelah membuat Google sheet, Anda dapat masuk ke Account Zapier Anda dan mulai membuat zap.

Di bawah bidang pencarian untuk **"Peristiwa aplikasi"** pilih **"Google Sheets"**


Kemudian untuk bidang "**Peristiwa** " pilih "**Baris spreadsheet baru** " dan tekan "**Lanjutkan** "

Langkah berikutnya akan meminta Anda memilih **Google Account** tempat **Google Sheet** disimpan. Jadi pastikan Account google yang benar telah ditentukan.


Di bawah **"Siapkan pemicu** ", Anda perlu memilih dan menentukan google spreadsheet dan worksheet yang akan Anda gunakan sebagai sumber data. Silakan isi semuanya dan tekan "**Lanjutkan** "

Berikutnya adalah "**uji pemicu Anda** " untuk memastikan google sheet Anda terhubung dengan benar.

Jika pengujian Anda berhasil, Anda akan melihat hasil yang menampilkan beberapa nilai dari spreadsheet Anda. Klik "**Lanjutkan** " untuk melanjutkan.

Langkah berikutnya adalah menyiapkan tindakan kedua yang akan membuat atau mendaftarkan Account di Ultimate Multisite. Pada bidang pencarian pilih "**Ultimate Multisite(2.0.2)** "


Di bawah bidang "**Peristiwa** ", pilih "**Daftarkan Account di Ultimate Multisite** " lalu klik tombol "**Lanjutkan** ".

Di bawah "**Siapkan tindakan** ", Anda akan melihat berbagai bidang yang tersedia untuk data pelanggan, keanggotaan, produk, dll. Anda dapat memetakan nilai di bawah google sheet Anda dan menetapkannya ke bidang yang tepat tempat nilai tersebut harus diisi seperti yang ditunjukkan pada tangkapan layar di bawah ini.


Setelah memetakan nilai, Anda dapat menguji tindakan.
