---
title: Apa itu WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Apa itu WordPress Multisite?

Di dalam intinya, WordPress menyediakan fitur bernama 'Multisite' yang berakar sejak tahun 2010 saat peluncuran WordPress 3.0. Sejak saat itu, fitur ini telah mengalami berbagai pembaruan untuk menambah fitur baru dan meningkatkan keamanan.

Sederhananya, WordPress multisite bisa dipahami seperti ini: Sebuah universitas memiliki satu instalasi WordPress, tetapi setiap fakultas mengelola situs WordPress mereka sendiri.

## 

## Apa Sebenarnya WordPress Multisite?

Multisite adalah fitur WordPress yang memungkinkan beberapa situs berbagi satu instalasi WordPress. Ketika multisite diaktifkan, situs WordPress asli diubah untuk mendukung apa yang biasa disebut sebagai **jaringan situs**.

Jaringan ini berbagi sistem file (artinya **plugin dan tema juga ikut dibagikan**), database, file inti WordPress, wp-config.php, dan sebagainya.

Ini berarti pembaruan WordPress, tema, dan plugin hanya perlu dilakukan sekali untuk semua situs dalam jaringan karena semuanya menggunakan file yang sama di sistem file.

Fakta ini adalah salah satu keunggulan utama multisite, karena memungkinkan Anda menambah jumlah situs yang dikelola tanpa menambah jumlah tugas pemeliharaan yang perlu dilakukan untuk situs-situs pelanggan Anda.

## 

## Subdomain atau Subdirektori?

Ada dua mode menjalankan WordPress multisite – dan Anda harus memilih salah satu saat mengubah instalasi WordPress biasa menjadi instalasi multisite:

**Subdomain:** contoh: [site.domain.com](http://site.domain.com)

…atau

**Subdirektori:** contoh: [yourdomain.com/site](http://yourdomain.com/site)

Setiap mode memiliki kelebihan dan kekurangan yang perlu Anda pertimbangkan saat membuat keputusan ini.

Satu hal penting untuk dicatat: setelah Anda membuat keputusan, mengubah jaringan dari subdirektori ke subdomain atau sebaliknya sangat sulit – terutama jika Anda sudah memiliki beberapa situs yang dibuat.

Sebelum membuat keputusan tersebut, berikut beberapa hal yang perlu diingat:

**Mode Subdirektori** adalah mode paling mudah dari segi pengaturan dan pemeliharaan. Ini karena semua situs hanyalah path yang ditambahkan ke domain utama (misalnya [yourdomain.com/subsite](http://yourdomain.com/subsite)). Hasilnya, Anda hanya memerlukan **satu sertifikat SSL** untuk domain utama dan itu akan mencakup seluruh jaringan.

Di sisi lain, karena struktur URL-nya, Google dan sebagian besar mesin pencari akan menganggap semua subsite di jaringan berbasis subdirektori Anda sebagai satu situs besar. Akibatnya, konten yang ditambahkan ke subsite oleh pelanggan akhir Anda mungkin memengaruhi performa SEO situs landing Anda, misalnya. Tingkat dampaknya masih bisa diperdebatkan dan ada argumen bahwa pengaturan seperti ini bahkan bisa menguntungkan untuk performa SEO.

**Mode Subdomain** sedikit lebih rumit untuk diatur, tetapi struktur URL-nya (misalnya [subsite.yournetwork.com](http://subsite.yournetwork.com)) umumnya dianggap terlihat "lebih profesional".

Salah satu tantangan utama dalam mengatur mode subdomain adalah cakupan SSL (HTTPS) untuk seluruh jaringan. Intinya, browser menganggap subdomain sebagai entitas terpisah. Akibatnya, Anda memerlukan sertifikat SSL berbeda untuk setiap subdomain di jaringan Anda, atau jenis sertifikat khusus yang disebut **Wildcard SSL certificate**. Dalam beberapa tahun terakhir, penyedia hosting dan panel semakin meningkatkan layanan mereka dalam hal penyediaan SSL dan beberapa menawarkan sertifikat wildcard hanya dengan sekali klik, memperkecil kesenjangan antara kedua mode dalam hal kerumitan pengaturannya.

Berbeda dengan mode subdirektori, subsite di jaringan berbasis subdomain dianggap oleh mesin pencari sebagai situs web terpisah, yang berarti konten di satu subsite tidak memengaruhi performa SEO subsite lain sama sekali.

## Super Admin

Instalasi WordPress situs tunggal memungkinkan Anda menambahkan pengguna dalam jumlah tak terbatas dan memberikan pengguna tersebut peran berbeda dengan izin yang berbeda pula.

Di WordPress Multisite, jenis pengguna baru terbuka: **super admin** – dan panel admin baru juga terbuka: **panel admin jaringan**.

Seperti namanya, super admin memiliki kekuatan super atas jaringan, mampu mengelola semua subsite, plugin, tema, semuanya!

Setelah Anda mengubah instalasi WordPress situs tunggal menjadi multisite, admin asli situs tunggal akan otomatis ditingkatkan menjadi super admin.

Plugin dan tema hanya bisa diinstal atau dihapus dari panel admin jaringan oleh super admin. Admin subsite kemudian dapat memilih untuk mengaktifkan atau menonaktifkan plugin atau tema tersebut kecuali super admin mengaktifkannya di tingkat jaringan, yang memaksanya aktif untuk semua subsite setiap saat.

_Catatan: seperti yang Anda lihat, mengundang seseorang ke jaringan Anda dan memberikan mereka status super admin memberikan pengguna ini kendali penuh atas jaringan Anda. Sebagai contoh, super admin lain bahkan bisa menghapus status super admin Anda, yang secara efektif mengunci Anda dari panel admin jaringan Anda sendiri. Untuk memungkinkan pelanggan Ultimate Multisite memiliki kontrol terperinci atas apa yang bisa dilakukan super admin tambahan, kami memiliki add-on bernama Support Agents. Add-on ini memungkinkan Anda membuat jenis pengguna lain – agen – dengan hanya izin yang mereka butuhkan untuk melakukan tugas di jaringan._

## Apa yang Dibagikan Antar Subsite dan Apa yang Tidak

Seperti yang kami sebutkan sebelumnya, salah satu keunggulan utama WordPress multisite adalah semua subsite berbagi konfigurasi, file inti, tema, plugin, file inti WordPress, dan sebagainya yang sama.

Namun, ada elemen-elemen yang dengan rapi dipisahkan per subsite.

\- Sebagai contoh, setiap subsite mendapatkan folder uploads sendiri. Hasilnya, unggahan yang dibuat oleh pengguna satu subsite tertentu tidak bisa diakses di subsite lain.

\- Setiap subsite memiliki panel admin khusus sendiri dan dapat mengaktifkan atau menonaktifkan plugin atau tema kecuali jika diaktifkan di tingkat jaringan oleh super admin.

\- Sebagian besar tabel database dibuat untuk setiap subsite, artinya post, komentar, halaman, pengaturan, dan lainnya dipisahkan untuk setiap subsite.

## Manajemen Pengguna di WordPress Multisite

Satu topik sensitif di WordPress multisite adalah manajemen pengguna. Tabel pengguna WordPress adalah salah satu dari sedikit yang dibagikan di antara semua subsite.

Pengaturan ini bisa menimbulkan beberapa masalah tergantung pada apa yang Anda rencanakan untuk dibangun dengan jaringan Anda. Contoh di bawah membantu mengilustrasikan masalah yang paling mendesak.

Bayangkan skenario berikut:

Anda membuat jaringan WordPress multisite dan mulai menawarkan subsite dengan biaya bulanan kepada orang-orang yang ingin memiliki toko e-commerce.

Anda mendapatkan pelanggan berbayar pertama – John. Anda membuat situs untuk John di jaringan Anda, menginstal semua plugin yang diperlukan, lalu membuat pengguna untuk John agar dia bisa mengelola tokonya.

Kemudian datang pelanggan kedua – Alice. Anda melakukan hal yang sama untuknya dan sekarang dia juga memiliki toko di jaringan Anda.

John dan Alice sama-sama pelanggan Anda, tetapi mereka tidak saling kenal. Yang lebih penting, jika salah satu dari mereka mengunjungi situs toko yang lain, tidak ada cara untuk mengetahui bahwa toko ini di-hosting di jaringan situs yang sama.

Suatu hari, John perlu membeli sepatu baru dan dia menemukan yang sempurna di toko Alice. Ketika dia mencoba menyelesaikan pembelian, dia mendapat pesan error "email sudah digunakan", yang aneh karena John 100% yakin ini adalah pertama kalinya dia mengunjungi situs web Alice.

Yang terjadi di sini adalah pengguna John dibagikan di seluruh jaringan jadi ketika dia mencoba membuat akun untuk checkout di situs Alice, WordPress akan mendeteksi bahwa pengguna dengan alamat email yang sama sudah ada dan menampilkan error.

_Catatan: Kami menyadari betapa buruknya ini tergantung pada kasus penggunaan Anda, jadi Ultimate Multisite memiliki opsi yang melewati pemeriksaan reguler untuk pengguna yang sudah ada, memungkinkan beberapa akun dibuat menggunakan alamat email yang sama. Setiap akun terikat ke subsite, jadi risiko bentrokan dijaga seminimal mungkin. Dalam contoh di atas, John tidak akan mendapat pesan error dan bisa membeli sepatu tersebut tanpa masalah. Opsi ini disebut Enable Multiple Accounts, dan dapat diaktifkan di Ultimate Multisite → Settings → Login & Registration._

Meskipun tabel pengguna dibagikan, pengguna dapat ditambahkan dan dihapus dari subsite oleh admin subsite atau super admin, dan mereka bahkan bisa memiliki peran pengguna berbeda di subsite yang berbeda.

## Pertimbangan Performa

WordPress multisite sangat powerful dalam hal jumlah situs yang dapat didukungnya. Ini dapat dibuktikan dengan fakta bahwa [WordPress.com](https://WordPress.com), Edublogs, dan Campuspress semuanya adalah layanan berbasis multisite dan masing-masing meng-hosting ribuan situs.

Meskipun secara teori tidak ada jumlah maksimum situs yang dapat Anda hosting di satu instalasi WordPress multisite, dalam praktiknya jumlah situs yang dapat Anda jalankan dengan memuaskan bisa sangat bervariasi tergantung pada sejumlah faktor berbeda: seberapa dinamis situs-situsnya, plugin apa yang tersedia untuk subsite, dan sebagainya.

Sebagai patokan umum, semakin sederhana jaringan Anda, semakin baik. Mengutamakan situs yang kontennya tidak terlalu dinamis (yang membuatnya kandidat bagus untuk strategi caching agresif) dan menjaga tumpukan plugin seringan mungkin (semakin sedikit jumlah plugin aktif semakin baik) dapat secara drastis meningkatkan jumlah subsite yang dapat Anda hosting.

Bagian terbaiknya adalah karena ini semua WordPress, tools yang sama yang sudah Anda kenal dan sukai untuk peningkatan performa juga akan bekerja untuk jaringan multisite.

Bottleneck utama untuk multisite adalah database tetapi jika semuanya diatur dengan benar, bisa mencapai beberapa ribu situs sebelum Anda perlu mengkhawatirkannya. Bahkan kemudian, ada solusi yang dapat ditambahkan secara progresif pada titik itu (seperti solusi database sharding, misalnya).
