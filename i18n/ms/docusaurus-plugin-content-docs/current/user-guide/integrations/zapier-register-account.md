---
title: Daftar Akaun melalui Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Acara: Daftar akaun melalui Zapier

Dalam artikel [Mengintegrasikan Ultimate Multisite dengan Zapier](zapier.md), kita telah membincangkan cara menggunakan Zapier untuk melakukan pelbagai tindakan dalam Ultimate Multisite berdasarkan pencetus dan acara. Dalam artikel ini, kami akan tunjukkan cara anda boleh mengintegrasikan aplikasi pihak ketiga. Kami akan menggunakan Google Sheets sebagai sumber data dan menghantar maklumat tersebut ke Ultimate Multisite untuk mendaftarkan akaun.

Pertama, anda perlu mencipta **Google Sheet** di bawah Google Drive anda. Pastikan anda menentukan setiap lajur dengan betul supaya anda boleh memetakan data dengan mudah kemudian.

![Google Sheet dengan lajur untuk data pelanggan](/img/admin/webhooks-list.png)Selepas mencipta Google Sheet, anda boleh log masuk ke akaun Zapier anda dan mula mencipta zap.

![Papan pemuka Zapier untuk mula mencipta zap](/img/admin/webhooks-list.png)Di bawah medan carian untuk **"App event"** pilih **"Google Sheets"**

![Memilih Google Sheets sebagai app event](/img/admin/webhooks-list.png)

Kemudian untuk medan "**Event**" pilih "**New spreadsheet row**" dan klik "**Continue**"

![Memilih acara New spreadsheet row dalam Zapier](/img/admin/webhooks-list.png)Langkah seterusnya akan meminta anda memilih **Google Account** di mana **Google Sheet** disimpan. Jadi pastikan akaun Google yang betul dinyatakan.

![Memilih Google Account untuk Google Sheet](/img/admin/webhooks-list.png)

Di bawah "**Set up trigger**", anda perlu memilih dan menentukan hamparan Google dan lembaran kerja yang akan anda gunakan sebagai sumber data. Teruskan dan isikan maklumat tersebut kemudian klik "**Continue**"

![Tetapan pencetus dengan pilihan hamparan dan lembaran kerja](/img/admin/webhooks-list.png)Seterusnya adalah "**test your trigger**" untuk memastikan Google Sheet anda disambungkan dengan betul.

![Langkah test your trigger dalam Zapier](/img/admin/webhooks-list.png)Jika ujian anda berjaya, anda sepatutnya melihat hasil yang menunjukkan beberapa nilai daripada hamparan anda. Klik "**Continue**" untuk meneruskan.

![Ujian pencetus berjaya menunjukkan nilai hamparan](/img/admin/webhooks-list.png)Langkah seterusnya adalah menetapkan tindakan kedua yang akan mencipta atau mendaftarkan akaun dalam Ultimate Multisite. Pada medan carian pilih "**Ultimate Multisite(2.0.2)**"

![Memilih Ultimate Multisite sebagai aplikasi tindakan](/img/admin/webhooks-list.png)

Di bawah medan "**Event**", pilih "**Register an Account in Ultimate Multisite**" kemudian klik butang "**Continue**".

![Acara tindakan Register an Account in Ultimate Multisite](/img/admin/webhooks-list.png)Di bawah "**Set up an action**", anda akan melihat pelbagai medan yang tersedia untuk data pelanggan, keahlian, produk, dan sebagainya. Anda boleh memetakan nilai daripada Google Sheet anda dan menetapkannya ke medan yang sesuai seperti yang ditunjukkan dalam tangkapan skrin di bawah.

![Memetakan nilai Google Sheet ke medan Ultimate Multisite](/img/admin/webhooks-list.png)

Selepas memetakan nilai, anda boleh menguji tindakan tersebut.

![Menguji tindakan Zapier untuk mendaftar akaun](/img/admin/webhooks-list.png)
