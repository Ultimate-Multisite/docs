---
title: Halaman Akun Klien
sidebar_position: 14
_i18n_hash: 60261800e2a155b4b190a325bdb50bb2
---
# Halaman Akun Pelanggan Anda (v2)

_**CATATAN PENTING: Artikel ini mengacu pada Ultimate Multisite versi 2.x.**_

Ketika pelanggan berlangganan paket di jaringan Anda, mereka mendapatkan akses ke website dan dashboard-nya yang berisi informasi penting terkait pembayaran, keanggotaan, domain, batasan paket, dan lain-lain.

Dalam tutorial ini, kami akan memandu Anda menjelajahi halaman akun pelanggan dan Anda akan melihat apa saja yang bisa dilihat dan dilakukan oleh pelanggan di dalamnya.

## Halaman Akun

Halaman akun dapat diakses dengan mengklik **Account** di dalam dashboard pelanggan Anda.

![Menu Account di dashboard pelanggan](/img/admin/dashboard.png)

![Tampilan halaman akun pelanggan](/img/admin/dashboard.png)

Setelah pelanggan mengkliknya, mereka akan melihat ringkasan keanggotaan, alamat penagihan, invoice, domain, batasan situs, dan juga dapat mengubah **Site Template** (jika diizinkan di jaringan Anda).

Mereka juga dapat mengubah keanggotaan ke paket lain, atau membeli paket atau layanan tambahan yang Anda tawarkan. Mari kita lihat setiap bagian secara terpisah.

### Ringkasan Keanggotaan Anda:

Blok pertama tepat di bawah nama website pelanggan Anda menampilkan ringkasan paket mereka saat ini beserta layanan/paket yang dibeli bersamanya. Blok ini juga menunjukkan nomor keanggotaan, jumlah awal yang dibayarkan, berapa biaya paket dan layanan/paket tambahan, serta berapa kali mereka ditagih untuk keanggotaan ini. Mereka juga dapat melihat apakah keanggotaan tersebut **Active**, **Expired**, atau **Canceled**.

![Ringkasan keanggotaan menampilkan paket, jumlah, dan detail penagihan](/img/admin/memberships-list.png)

Tepat di bawah blok ini, pelanggan Anda dapat melihat blok **About This Site** dan **Site Limits**. Blok-blok ini menampilkan semua batasan yang berlaku untuk paket mereka: ruang disk, posting, halaman, kunjungan, dan lain-lain. Batasan-batasan ini dapat dikonfigurasi di setiap halaman paket di **Ultimate Multisite > Products**.

![Blok About This Site dan Site Limits menampilkan batasan paket](/img/admin/dashboard.png)

Di sisi kanan **Your Membership**, pelanggan dapat mengklik **Change**. Ini akan menampilkan semua paket dan layanan/paket yang tersedia. Jika mereka memilih paket lain, batasan untuk paket tersebut akan berlaku menggantikan batasan keanggotaan saat ini - tidak peduli apakah mereka melakukan downgrade atau upgrade.

Sekarang, jika pelanggan Anda memilih untuk membeli paket atau layanan tambahan untuk keanggotaan saat ini - seperti lebih banyak ruang disk atau kunjungan - keanggotaan saat ini tidak akan berubah, hanya paket baru yang akan ditambahkan ke dalamnya.

Perlu diketahui bahwa kode kupon tidak dapat ditambahkan di halaman perubahan keanggotaan ini. Jika pelanggan menggunakan kode kupon pada pembelian keanggotaan pertama, kode tersebut juga akan berlaku untuk keanggotaan baru ini.

### Memperbarui Alamat Penagihan:

Di halaman akun, pelanggan Anda juga dapat memperbarui alamat penagihan mereka. Mereka hanya perlu mengklik **Update** di samping _Billing Address_.

![Bagian Billing Address dengan tombol Update](/img/admin/customers-list.png)

Jendela baru akan muncul untuk pelanggan Anda. Yang perlu mereka lakukan adalah mengisi alamat baru dan mengklik _Save Changes_.

![Formulir pembaruan alamat penagihan](/img/admin/customers-list.png)

### Mengubah Site Template:

Untuk mengizinkan pelanggan Anda mengubah site template mereka, Anda perlu pergi ke **Ultimate Multisite > Settings > Sites** dan mengaktifkan opsi **Allow Template Switching**.

Selain itu, di **Ultimate Multisite > Products**, pilih paket Anda dan buka tab **Site Templates**. Pastikan opsi **Allow Site Templates** diaktifkan dan pada **Site Template Selection Mode**, opsi **Choose Available Site Templates** dipilih.

![Tab site templates produk dengan mode pemilihan template](/img/config/product-site-templates.png)

Anda akan dapat melihat semua site template yang tersedia di website Anda. Pilih mana yang ingin Anda sediakan dan mana yang tidak ingin Anda sediakan untuk pelanggan yang berlangganan paket ini. Perlu diketahui bahwa opsi ini juga memengaruhi formulir checkout, jadi template apa pun yang dipilih sebagai **Not Available** tidak akan muncul di halaman pendaftaran untuk paket ini.

Sekarang pelanggan Anda dapat mengklik **Change Site Template** di dalam halaman akun mereka.

![Tombol Change Site Template di halaman akun](/img/admin/dashboard.png)  
Daftar semua Site Template yang tersedia untuk paket ini akan muncul untuk pelanggan Anda.

![Daftar site template yang tersedia untuk paket](/img/config/site-templates-list.png)

Setelah memilih template yang ingin mereka gunakan, mereka akan diminta untuk mengonfirmasi perubahan tersebut.

![Dialog konfirmasi pergantian site template](/img/admin/dashboard.png)

Setelah mengaktifkan konfirmasi dan mengklik **Process Switch**, site template baru akan digunakan di website pelanggan Anda.

### Menambahkan Custom Domain:

Pelanggan Anda juga memiliki opsi untuk menambahkan custom domain untuk paket ini di halaman akun mereka. Untuk mengizinkan pelanggan Anda menggunakan custom domain, buka **Ultimate Multisite > Settings > Domain Mapping**.

Aktifkan opsi **Enable Domain Mapping**. Ini akan mengizinkan pelanggan Anda menggunakan custom domain di tingkat jaringan.

Jangan lupa untuk juga memeriksa apakah domain mapping diaktifkan pada basis produk - karena Anda dapat membatasi suatu produk agar tidak mengizinkan pelanggan Anda menggunakan custom domain.

Buka **Ultimate Multisite > Products**. Pilih paket yang Anda inginkan dan buka tab **Custom Domains**. Aktifkan opsi **Allow Custom Domains**.

![Tab Custom Domains dengan toggle Allow Custom Domains](/img/config/product-custom-domains.png)

Ini akan mengizinkan semua pelanggan yang berlangganan paket khusus ini untuk menggunakan custom domain. Sekarang, di halaman Account, pelanggan Anda dapat menambahkan custom domain dengan mengklik **Add Domain**.

![Tombol Add Domain di halaman akun](/img/admin/domains-list.png)

Jendela pertama yang terbuka akan menampilkan pesan kepada pelanggan Anda yang menginstruksikan cara memperbarui DNS record mereka agar custom domain ini dapat berfungsi di jaringan Anda.

![Instruksi DNS yang ditampilkan saat menambahkan custom domain](/img/admin/domains-list.png)

Pesan ini dapat diedit (oleh Anda) di **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Pengaturan Add New Domain Instructions di Domain Mapping](/img/config/settings-domain-mapping.png)

Setelah mengklik **Next Step**, pelanggan Anda dapat menambahkan nama custom domain mereka dan memilih apakah custom domain ini akan menjadi yang utama. Perlu diketahui bahwa pelanggan Anda dapat menggunakan lebih dari satu custom domain untuk website mereka, sehingga mereka dapat memilih mana yang akan menjadi domain utama.

![Entri nama custom domain dengan opsi domain utama](/img/admin/domains-list.png)

Setelah mengklik **Add Domain**, domain akan ditambahkan ke akun pelanggan Anda. Yang perlu mereka lakukan sekarang adalah mengubah DNS record dari custom domain ini di registrar domain mereka.

### Mengubah Password:

Di dalam dashboard akun, pelanggan Anda juga dapat mengubah password mereka dengan mengklik **Change Password**.

![Tombol Change Password di halaman akun](/img/admin/dashboard.png)

Ini akan menampilkan jendela baru di mana pelanggan Anda perlu mengisi password saat ini dan kemudian mengisi password baru yang ingin mereka gunakan.

![Formulir ubah password dengan field password saat ini dan baru](/img/admin/dashboard.png)

### Danger Zone:

Kami juga memiliki dua opsi yang ditampilkan di bagian **Danger Zone**: **Delete Site** dan **Delete Account**. Keduanya berada di bagian Danger Zone karena kedua tindakan ini tidak dapat dibatalkan. Jika pelanggan Anda menghapus website atau akun mereka, mereka tidak dapat memulihkannya kembali.

![Danger Zone dengan opsi Delete Site dan Delete Account](/img/admin/dashboard.png)

Jika pelanggan Anda mengklik salah satu dari dua opsi ini, mereka akan ditampilkan jendela di mana mereka perlu mengaktifkan opsi untuk menghapus website atau akun dan mereka akan diperingatkan bahwa tindakan ini tidak dapat dibatalkan.

![Dialog konfirmasi Delete Site](/img/admin/dashboard.png)

![Dialog konfirmasi Delete Account](/img/admin/dashboard.png)

Jika mereka menghapus website mereka, akun dan keanggotaan mereka tetap tidak tersentuh. Mereka hanya akan kehilangan semua konten di website mereka. Jika mereka menghapus akun mereka, semua website, keanggotaan, dan informasi terkait akun ini akan hilang.
