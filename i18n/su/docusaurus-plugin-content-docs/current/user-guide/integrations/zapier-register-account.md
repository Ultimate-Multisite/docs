---
title: Daftar Akun ngaliwatan Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Acara: Register akun lewat Zapier {#event-register-an-account-via-zapier}

Di artikel [Mengintegrasikan Ultimate Multisite dengan Zapier](zapier.md), kita sudah bahas gimana cara pakai Zapier buat ngelakuin berbagai aksi di Ultimate Multisite berdasarkan pemicu (trigger) dan kejadian (event). Di artikel ini, kita bakal tunjukkin caranya bisa nyambung sama aplikasi pihak ketiga. Kita akan pakai Google Sheets sebagai sumber datanya terus kirim informasinya ke Ultimate Multisite buat daftar akun.

Sebelum nyambungin Zapier, buka **Ultimate Multisite > Settings > API & Webhooks** dan pastikan API-nya sudah aktif (enabled). Salin API Key dan API Secret dari layar ini kalau Zapier minta kredensial akun Ultimate Multisite.

![Pengaturan API dan Webhooks dengan API Key, API Secret, dan Opsi Aktifkan API](/img/admin/settings-api-webhooks.png)

Pertama, kamu perlu bikin **Google Sheet** di Google Drive kamu. Pastikan setiap kolomnya sudah didefinisikan dengan benar biar nanti gampang buat nyambungin datanya.

Setelah Google Sheet-nya jadi, kamu bisa *login* ke akun Zapier kamu dan mulai bikin zap baru.

Di kolom pencarian untuk **"App event"**, pilih **"Google Sheets"**.

Terus di kolom "**Event**", pilih **"New spreadsheet row"** (Baris Spreadsheet Baru) lalu klik "**Continue**".

Langkah berikutnya akan minta kamu memilih **Google Account** tempat Google Sheet itu disimpan. Jadi, pastikan akun Google yang benar sudah dipilih ya.

Di bagian **"Set up trigger"**, kamu perlu memilih dan menentukan Google Spreadsheet serta worksheet mana yang akan dipakai sebagai sumber datanya. Langsung isi saja dan klik "**Continue**".

Selanjutnya adalah untuk "**test your trigger**" (uji pemicumu) biar memastikan Google Sheet-mu sudah terhubung dengan benar.

Kalau tesnya berhasil, kamu akan lihat hasilnya menampilkan beberapa nilai dari spreadsheet kamu. Klik "**Continue**" untuk lanjut.

Langkah salajengna nya nya ngatur aksi kadua anu bakal nyiptake atawa mendaftar akun di Ultimate Multisite. Di kolom pencarian (search field), pilih "**Ultimate Multisite(2.0.2)** ".

Di bagian "**Event** ", pilih "**Register an Account in Ultimate Multisite** " terus klik tombol "**Continue** ".

Di bawah "**Set up an action** ", anjeun bakal nempo sababaraha kolom anu aya pikeun data pelanggan, keanggotaan (memberships), produk, jsb. Anjeun bisa mapkeun nilai-nilai éta di Google Sheet anjeun jeung ngabagéake kana kolom anu bener tempatna dipasihan data siga nu aya dina screenshot di handap ieu.

Sanggeus mapake niléna, anjeun bisa nguji aksi éta.
