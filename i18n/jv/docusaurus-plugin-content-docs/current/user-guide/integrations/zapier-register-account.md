---
title: Daftar Akun melalui Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Acara: Daftar akun lewat Zapier

Ing artikel [Mengintegrasikan Ultimate Multisite dengan Zapier](zapier.md), kita sudah bahas gimana cara pakai Zapier buat ngelakuin berbagai aksi di Ultimate Multisite berdasarkan pemicu (trigger) dan event. Di artikel ini, kita bakal tunjukkin gimana caranya integrasi aplikasi pihak ketiga. Kita akan pakai Google Sheets sebagai sumber datanya dan kirim informasinya ke Ultimate Multisite buat daftar akun.

Sebelum nyambung Zapier, mending buka **Ultimate Multisite > Settings > API & Webhooks** terus pastikan API-nya sudah diaktifkan (enabled). Salin aja API Key sama API Secret dari layar ini pas Zapier minta kredensial akun Ultimate Multisite.

![Pengaturan API dan Webhooks dengan API Key, API Secret, dan Opsi Aktif API](/img/admin/settings-api-webhooks.png)

Pertama, kamu perlu bikin **Google Sheet** di Google Drive kamu. Pastikan setiap kolomnya sudah didefinisikan dengan benar biar nanti gampang buat nyambung datanya.

Setelah Google sheet-nya jadi, kamu bisa *login* ke akun Zapier kamu dan mulai bikin zap baru.

Di kolom pencarian untuk **"App event"**, pilih **"Google Sheets"**.

Terus di kolom "**Event**", pilih **"New spreadsheet row"** (Baris spreadsheet baru) dan klik **"Continue"**.

Langkah selanjutnya bakal minta kamu pilih **Google Account** mana yang Google Sheet-nya disimpan. Jadi pastikan akun Google yang benar sudah dipilih ya.

Di bagian **"Set up trigger"**, kamu perlu memilih dan menentukan google spreadsheet serta worksheet mana yang akan dipakai sebagai sumber datanya. Langsung isi saja dan klik **"Continue"**.

Selanjutnya adalah untuk **"test your trigger"** biar memastikan google sheet-nya sudah terhubung dengan benar.

Kalau tesnya berhasil, kamu akan lihat hasilnya yang nunjukkin beberapa nilai dari spreadsheet kamu. Klik **"Continue"** untuk lanjut.

Langkah sabanjure ya nggawe utawa daftaran akun ing Ultimate Multisite. Ing kolom pencarian (search field), pilih "**Ultimate Multisite(2.0.2)** ".

Ing kolom "**Event** ", pilih "**Register an Account in Ultimate Multisite** " banjur klik tombol "**Continue** ".

Ing bagian "**Set up an action** ", sampeyan bakal nemokake beda-beda kolom kanggo data pelanggan, keanggotaan (memberships), produk, lsp. Sampeyan bisa nggandheng (map) nilai-nilai kuwi ing google sheet lan ngasilake menyang kolom sing bener yaiku panggonane kudu diisi kaya ing screenshot ing ngisor iki.

Sawise nggandheng nilaine, sampeyan isa nyoba (test) aksine kasebut.
