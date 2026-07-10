---
title: Daftar Account melalui Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Acara: Daftar Account melalui Zapier {#event-register-an-account-via-zapier}

Dalam artikel [Mengintegrasikan Ultimate Multisite dengan Zapier](zapier.md), kami membincangkan cara menggunakan Zapier untuk melakukan tindakan berbeza dalam Ultimate Multisite berdasarkan pencetus dan acara. Dalam artikel ini, kami akan menunjukkan cara anda boleh mengintegrasikan aplikasi pihak ketiga. Kami akan menggunakan Google Sheets sebagai sumber data dan menghantar maklumat kepada Ultimate Multisite untuk mendaftarkan Account.

Sebelum menyambungkan Zapier, pergi ke **Ultimate Multisite > Settings > API & Webhooks** dan sahkan API didayakan. Salin API Key dan API Secret daripada skrin ini apabila Zapier meminta kelayakan Account Ultimate Multisite.

![Tetapan API dan Webhooks dengan pilihan API Key, API Secret, dan Enable API](/img/admin/settings-api-webhooks.png)

Pertama, anda perlu mencipta **Google Sheet** di bawah Google Drive anda. Pastikan anda mentakrifkan setiap lajur dengan betul supaya anda boleh memetakan data dengan mudah kemudian.

Selepas mencipta Google sheet, anda boleh log masuk ke Account Zapier anda dan mula mencipta zap.

Di bawah medan carian untuk **"App event"** pilih **"Google Sheets"**


Kemudian untuk medan "**Event** " pilih "**New spreadsheet row** " dan tekan "**Continue** "

Langkah seterusnya akan meminta anda memilih **Google Account** tempat **Google Sheet** disimpan. Jadi pastikan sahaja Account google yang betul ditentukan.


Di bawah **"Set up trigger** ", anda perlu memilih dan menentukan hamparan google dan lembaran kerja yang akan anda gunakan tempat data akan datang. Teruskan sahaja dan isikan perkara tersebut lalu tekan "**Continue** "

Seterusnya ialah untuk "**test your trigger** " bagi memastikan google sheet anda disambungkan dengan betul.

Jika ujian anda berjaya, anda sepatutnya melihat hasil yang menunjukkan beberapa nilai daripada hamparan anda. Klik "**Continue** " untuk meneruskan.

Langkah seterusnya ialah menyediakan tindakan kedua yang akan mencipta atau mendaftarkan Account dalam Ultimate Multisite. Pada medan carian pilih "**Ultimate Multisite(2.0.2)** "


Di bawah medan "**Event** ", pilih "**Register an Account in Ultimate Multisite** " kemudian klik butang "**Continue** ".

Di bawah "**Set up an action** ", anda akan melihat medan berbeza yang tersedia untuk data pelanggan, keahlian, produk, dll. Anda boleh memetakan nilai di bawah google sheet anda dan menetapkannya kepada medan yang sesuai tempat ia harus diisi seperti yang ditunjukkan dalam tangkapan skrin di bawah.


Selepas memetakan nilai, anda boleh menguji tindakan.
