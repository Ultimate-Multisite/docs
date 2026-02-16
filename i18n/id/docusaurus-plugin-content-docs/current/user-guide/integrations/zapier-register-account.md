---
title: Daftarkan Akun melalui Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Event: Mendaftarkan akun melalui Zapier

Di artikel [Mengintegrasikan Ultimate Multisite dengan Zapier](zapier.md), kita sudah membahas cara menggunakan Zapier untuk melakukan berbagai tindakan di Ultimate Multisite berdasarkan trigger dan event. Di artikel ini, kita akan menunjukkan cara mengintegrasikan aplikasi pihak ketiga. Kita akan menggunakan Google Sheets sebagai sumber data dan mengirim informasinya ke Ultimate Multisite untuk mendaftarkan akun.

Pertama, Anda perlu membuat **Google Sheet** di Google Drive Anda. Pastikan setiap kolom diberi nama dengan jelas agar nantinya Anda bisa memetakan data dengan mudah.

![Google Sheet dengan kolom untuk data pelanggan](/img/admin/webhooks-list.png)Setelah membuat Google Sheet, Anda bisa masuk ke akun Zapier dan mulai membuat zap.

![Dashboard Zapier untuk mulai membuat zap](/img/admin/webhooks-list.png)Di kolom pencarian untuk **"App event"**, pilih **"Google Sheets"**

![Memilih Google Sheets sebagai app event](/img/admin/webhooks-list.png)

Kemudian di kolom "**Event**", pilih "**New spreadsheet row**" dan klik "**Continue**"

![Memilih event New spreadsheet row di Zapier](/img/admin/webhooks-list.png)Langkah selanjutnya akan meminta Anda memilih **Google Account** tempat **Google Sheet** disimpan. Pastikan akun Google yang dipilih sudah benar.

![Memilih Google Account untuk Google Sheet](/img/admin/webhooks-list.png)

Di bagian **"Set up trigger"**, Anda perlu memilih dan menentukan spreadsheet serta worksheet Google yang akan digunakan sebagai sumber data. Silakan isi kolom-kolom tersebut dan klik "**Continue**"

![Set up trigger dengan pilihan spreadsheet dan worksheet](/img/admin/webhooks-list.png)Selanjutnya adalah "**test your trigger**" untuk memastikan Google Sheet Anda terhubung dengan benar.

![Langkah test your trigger di Zapier](/img/admin/webhooks-list.png)Jika pengujian berhasil, Anda akan melihat hasil yang menampilkan beberapa nilai dari spreadsheet Anda. Klik "**Continue**" untuk melanjutkan.

![Pengujian trigger berhasil menampilkan nilai spreadsheet](/img/admin/webhooks-list.png)Langkah berikutnya adalah menyiapkan action kedua yang akan membuat atau mendaftarkan akun di Ultimate Multisite. Di kolom pencarian, pilih "**Ultimate Multisite(2.0.2)**"

![Memilih Ultimate Multisite sebagai action app](/img/admin/webhooks-list.png)

Di kolom "**Event**", pilih "**Register an Account in Ultimate Multisite**" lalu klik tombol "**Continue**".

![Action event Register an Account in Ultimate Multisite](/img/admin/webhooks-list.png)Di bagian "**Set up an action**", Anda akan melihat berbagai kolom yang tersedia untuk data pelanggan, membership, produk, dan lainnya. Anda bisa memetakan nilai dari Google Sheet dan menempatkannya di kolom yang sesuai seperti yang ditunjukkan pada screenshot di bawah ini.

![Memetakan nilai Google Sheet ke kolom Ultimate Multisite](/img/admin/webhooks-list.png)

Setelah memetakan nilai-nilainya, Anda bisa menguji action tersebut.

![Menguji action register account di Zapier](/img/admin/webhooks-list.png)
