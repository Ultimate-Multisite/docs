---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite adalah plugin WordPress Multisite yang memungkinkan Anda menawarkan WaaS atau Websites as a Service kepada pelanggan. Sebelum kita mendalami dan mempelajari bagaimana Ultimate Multisite dapat membantu bisnis dan pelanggan Anda, ada beberapa pengetahuan dasar yang perlu kita pahami terlebih dahulu.

## WordPress Multisite

Sebagian besar dari kita sudah familiar dengan instalasi WordPress standar. Anda bisa membuatnya melalui panel kontrol penyedia hosting atau, bagi yang lebih berani, menyiapkan server web dan database baru, mengunduh file inti, lalu memulai proses instalasi.

Cara ini berhasil untuk jutaan situs WordPress di seluruh dunia, tetapi dari sudut pandang agensi atau penyedia hosting, mari kita bahas soal volume sebentar.

Memang sangat mudah membuat satu situs WordPress atau bahkan seratus situs melalui panel kontrol otomatis, tetapi masalah segera muncul ketika harus mengelola situs-situs ini. Jika dibiarkan tanpa pengelolaan, Anda menjadi target empuk malware. Mengelolanya berarti memerlukan upaya dan sumber daya, dan meskipun ada alat eksternal dan plugin yang tersedia untuk membantu menyederhanakan pengelolaan dan administrasi situs WordPress, fakta bahwa pelanggan memiliki akses administratif berarti upaya-upaya ini bisa dengan mudah sia-sia.

Di dalam intinya, WordPress menyediakan fitur yang disebut 'Multisite' yang berawal dari tahun 2010 saat peluncuran WordPress 3.0. Sejak saat itu, fitur ini telah mengalami sejumlah revisi yang bertujuan memperkenalkan fitur baru dan memperketat keamanan.

Pada dasarnya, WordPress multisite bisa dipahami seperti ini: Sebuah universitas memiliki satu instalasi WordPress, tetapi setiap fakultas memiliki situs WordPress mereka sendiri.

Untuk menguraikan pernyataan ini, mari kita lihat beberapa terminologi dasar yang ada tidak hanya dalam dokumentasi Ultimate Multisite tetapi juga di seluruh komunitas WordPress.

### Jaringan

Dalam WordPress, jaringan multisite adalah tempat di mana sejumlah subsite dapat dikelola dari satu dashboard. Meskipun cara membuat jaringan multisite berbeda-beda antar penyedia hosting, hasil akhirnya biasanya berupa beberapa direktif tambahan di file wp-config.php untuk memberi tahu WordPress bahwa ia beroperasi dalam mode khusus ini.

Ada sejumlah perbedaan mendasar antara jaringan multisite dan instalasi WordPress mandiri yang akan kita bahas secara singkat.

#### Subdomain vs. Subdirektori

Salah satu keputusan paling awal yang perlu Anda buat adalah apakah instalasi multisite akan beroperasi dengan _subdirektori_ atau _subdomain_. Ultimate Multisite bekerja sama baiknya dengan kedua pilihan tersebut, tetapi ada beberapa perbedaan arsitektur antara kedua konfigurasi ini.

Dalam konfigurasi _subdirektori_, situs jaringan mewarisi path berdasarkan nama domain utama. Misalnya, situs jaringan berlabel 'site1' akan memiliki URL lengkap sebagai https://domain.com/site1. Dalam konfigurasi _subdomain_, situs jaringan akan memiliki _subdomain_ sendiri yang berasal dari nama domain utama. Jadi situs berlabel 'site1' akan memiliki URL lengkap sebagai https://site1.domain.com/.

Meskipun kedua opsi adalah pilihan yang valid, penggunaan _subdomain_ menawarkan sejumlah keuntungan tetapi juga memerlukan lebih banyak pertimbangan dan perencanaan dalam arsitekturnya.

Dalam hal DNS, penggunaan _subdirektori_ menghadirkan tantangan yang relatif sederhana. Karena situs jaringan hanyalah turunan dari path induk, hanya satu entri nama domain yang perlu ada untuk nama domain utama. Untuk _subdomain_, tantangannya sedikit lebih kompleks, memerlukan entri CNAME terpisah untuk setiap situs jaringan atau entri wildcard (*) dalam catatan DNS.

Area pertimbangan lainnya adalah SSL dan penerbitan serta penggunaan sertifikat SSL. Dalam konfigurasi _subdirektori_, satu sertifikat domain dapat digunakan karena situs jaringan hanyalah path dari nama domain utama. Jadi sertifikat untuk domain.com akan cukup menyediakan SSL untuk https://domain.com/site1, https://domain.com/site2 dan seterusnya.

Dalam konfigurasi _subdomain_, penggunaan sertifikat SSL wildcard adalah salah satu opsi paling umum. Jenis sertifikat SSL ini menyediakan enkripsi untuk domain dan _subdomain_-nya. Oleh karena itu, sertifikat SSL wildcard akan menyediakan enkripsi untuk https://site1.domain.com, https://site2.domain.com dan https://domain.com itu sendiri.

Meskipun opsi lain ada, opsi tersebut sering terbatas dalam cakupan dan aplikasi serta memerlukan konfigurasi dan pertimbangan tambahan terkait kesesuaian.

#### Plugin dan Tema

Apa yang WordPress berikan, ia juga ambil kembali, setidaknya dari perspektif pelanggan. Dalam instalasi WordPress mandiri, jika administrator situs memasang plugin yang buruk atau gagal memperbarui instalasi mereka, satu-satunya korban adalah diri mereka sendiri. Namun, administrator situs yang memasang plugin buruk pada instalasi multisite menciptakan korban dari setiap situs yang terpasang di jaringan.

Karena alasan ini, ketika dikonfigurasi sebagai multisite, WordPress menghapus kemampuan dari administrator situs untuk memasang plugin dan tema, dan sebagai gantinya memindahkan kemampuan ini ke administrator jaringan atau peran 'super admin' yang baru dibuat. Peran istimewa ini kemudian dapat memutuskan apakah akan mengizinkan administrator situs jaringan untuk melihat atau mengakses menu plugin di dashboard mereka dan, jika ya, apakah izin tersebut mencakup _mengaktifkan_ atau _menonaktifkan_ plugin.

Sejauh ini, administrator jaringan bertanggung jawab untuk memasang plugin dan tema ke dalam jaringan dan mendelegasikan izin untuk menggunakan plugin dan tema ini ke situs jaringan. Administrator situs tidak dapat memasang plugin dan tema atau mengakses plugin dan tema yang tidak ditetapkan ke situs mereka.

#### Pengguna dan Administrator

Dalam WordPress Multisite, semua situs jaringan berbagi database yang sama dan oleh karena itu berbagi pengguna, peran, dan kemampuan yang sama. Cara paling tepat untuk memahaminya adalah bahwa semua pengguna adalah anggota jaringan dan bukan situs tertentu.

Dengan pemahaman ini, mungkin tidak diinginkan untuk mengizinkan pengguna dibuat, dan karena alasan ini WordPress Multisite menghapus kemampuan ini dari administrator situs dan memindahkan kemampuan ini ke administrator jaringan. Sebagai gantinya, administrator jaringan dapat mendelegasikan hak istimewa yang diperlukan kepada administrator situs untuk memungkinkan mereka membuat akun pengguna untuk situs mereka sendiri.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Menegaskan kembali pernyataan di atas, meskipun akun pengguna tampak terkait dengan situs, mereka sebenarnya dialokasikan ke jaringan dan oleh karena itu harus unik di seluruh jaringan. Mungkin ada kasus di mana nama pengguna tidak tersedia untuk didaftarkan karena alasan ini.

Meskipun bukan konsep asing dalam sistem enterprise, sumber tunggal pendaftaran dan autentikasi pengguna ini sering menjadi konsep yang sulit dipahami bagi orang yang familiar dengan instalasi WordPress mandiri di mana administrasi pengguna agak lebih mudah.

#### Media

Di mana situs jaringan berbagi satu database dalam WordPress Multisite, mereka mempertahankan path terpisah pada sistem file untuk file media.

Lokasi WordPress standar (wp-content/uploads) tetap ada; namun, path-nya diubah untuk mencerminkan ID unik situs jaringan. Akibatnya, file media untuk situs jaringan muncul sebagai wp-contents/uploads/site/[id].

#### Permalink

Kami menyebutkan sebelumnya bahwa ada keuntungan khas dari konfigurasi _subdomain_ dibanding _subdirektori_ dan inilah alasannya: path.

Dalam konfigurasi _subdirektori_, situs utama (situs pertama yang dibuat ketika jaringan didirikan) dan subsite jaringan harus berbagi path yang sama dari nama domain. Ini berpotensi menimbulkan banyak konflik.

Untuk post, path /blog/ wajib ditambahkan ke situs utama untuk mencegah bentrokan dengan situs jaringan. Ini berarti permalink cantik seperti 'Post name' akan ditampilkan sebagai domain.name/blog/post-name/

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Dalam konfigurasi _subdomain_, tindakan ini tidak diperlukan karena setiap situs jaringan mendapat manfaat dari pemisahan domain yang lengkap dan tidak perlu bergantung pada satu path. Mereka malah mempertahankan path tersendiri berdasarkan _subdomain_ mereka.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Halaman Statis

Dalam konfigurasi _subdirektori_, potensi konflik penamaan meluas ke halaman statis karena situs utama dan situs jaringan berbagi path yang sama.

Untuk mencegah ini, WordPress menyediakan cara untuk memblokir nama situs tertentu agar tidak bertentangan dengan nama situs pertama. Biasanya administrator jaringan akan memasukkan path root dari halaman situs utama.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

Dalam konfigurasi _subdomain_, kemungkinan konflik penamaan dimitigasi oleh _subdomain_ karena unik untuk situs jaringan dan tidak terkait dengan cara apa pun ke situs utama.

### Pendaftaran

Dalam pengaturan jaringan WordPress Multisite, beberapa opsi pendaftaran pengguna baru tersedia, memungkinkan pengguna baru dan yang sudah ada untuk membuat situs.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Berbeda dengan instalasi WordPress mandiri, situs jaringan tidak memiliki opsi familiar untuk mengizinkan pendaftaran pengguna atau menetapkan pendaftaran tersebut ke peran.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Ketika akun pengguna dibuat, akun tersebut dihasilkan di tingkat jaringan. Jadi alih-alih milik satu situs tertentu, mereka malah milik jaringan. Ini memiliki beberapa keuntungan dan kerugian yang khas.

Misalnya, asumsikan WordPress Multisite Anda bergerak di bidang berita dan informasi. Anda akan mendirikan multisite dan kemudian membuat situs jaringan untuk keuangan, teknologi, hiburan, dan area minat lainnya sambil mempertahankan kontrol keseluruhan atas plugin dan tema. Setiap situs jaringan pada gilirannya akan memiliki tingkat kontrol yang jauh lebih besar atas tampilan, nuansa, dan pengalaman pengguna situs jaringan mereka daripada custom post type atau kategori post biasa.

Sejauh ini, ketika pengguna login, mereka login ke jaringan dan pada akhirnya juga login ke setiap situs jaringan untuk memberikan pengalaman yang mulus. Jika situs baru Anda berbasis langganan, ini akan menjadi solusi dan hasil yang ideal.

Namun, jika sifat dan tujuan multisite yang dimaksud adalah untuk menawarkan situs jaringan yang berbeda-beda yang tidak memiliki hubungan satu sama lain, hampir selalu diperlukan plugin eksternal atau tambahan untuk memanipulasi peran pengguna.

### Domain dan SSL

Mari kita bicara tentang instalasi WordPress Multisite yang hampir luput dari perhatian kita - WordPress.com. Ini sejauh ini adalah contoh paling ekstensif dari WordPress multisite dan menunjukkan kemampuannya yang luas untuk dikustomisasi dan dibentuk untuk memenuhi suatu tujuan.

Saat ini di internet modern, penggunaan SSL hampir wajib dan administrator jaringan WordPress multisite segera dihadapkan dengan tantangan-tantangan ini.

Dalam konfigurasi _subdomain_, situs dibuat berdasarkan nama domain root. Jadi situs berlabel 'site1' akan dibuat sebagai 'site1.domain.com'. Dengan menggunakan sertifikat SSL wildcard, administrator jaringan dapat berhasil mengatasi tantangan ini dan menyediakan kemampuan enkripsi SSL untuk jaringan.

WordPress Multisite berisi fungsi domain mapping yang memungkinkan situs jaringan dikaitkan dengan nama domain kustom atau nama domain yang berbeda dari domain root jaringan.

Bagi administrator jaringan, ini menghadirkan lapisan kompleksitas tambahan baik dalam konfigurasi nama domain maupun penerbitan dan pemeliharaan sertifikat SSL.

Sejauh ini, sementara WordPress Multisite menyediakan cara untuk mengizinkan [www.anotherdomain.com](http://www.anotherdomain.com) dipetakan ke 'site1', administrator jaringan dibiarkan dengan tantangan mengelola entri DNS secara eksternal dan implementasi sertifikat SSL.

## Ultimate Multisite

Dengan perbedaan antara instalasi WordPress mandiri dan instalasi Multisite yang dipahami, mari kita lihat bagaimana Ultimate Multisite menjadi senjata pamungkas untuk menyediakan Websites as a Service.

### Pengenalan

Ultimate Multisite adalah pisau Swiss Army Anda dalam hal membuat Website as a Service (WaaS). Bayangkan Wix.com, Squarespace, WordPress.com dan kemudian bayangkan memiliki layanan Anda sendiri.

Di balik layar, Ultimate Multisite memanfaatkan WordPress Multisite tetapi melakukannya dengan cara yang tidak hanya menyelesaikan berbagai tantangan yang dihadapi administrator jaringan dengan instalasi multisite tetapi juga meningkatkan kemampuannya sehingga berbagai kasus penggunaan dapat didukung.

Di bagian berikut, kita akan melihat beberapa kasus penggunaan umum dan pertimbangan yang diperlukan untuk mendukung kasus-kasus tersebut.

### Kasus Penggunaan

#### Kasus 1: Agensi

Biasanya keahlian inti agensi terletak pada desain situs web dengan aspek seperti hosting atau pemasaran mereka terdaftar sebagai layanan tambahan.

Bagi agensi, Ultimate Multisite menghadirkan proposisi nilai yang luar biasa dalam kemampuannya untuk menghosting dan mengelola beberapa situs web dalam satu platform. Lebih lagi bagi agensi yang menstandardisasi desain mereka pada tema tertentu seperti GeneratePress, Astra, OceanWP atau lainnya dapat memanfaatkan kemampuan Ultimate Multisite untuk secara otomatis mengaktifkan tema-tema ini untuk setiap situs baru.

Demikian pula dengan banyaknya penawaran harga agensi untuk plugin umum dan populer, penggunaan Ultimate Multisite memungkinkan agensi memanfaatkan investasi yang ada dengan menyediakan platform umum dari mana plugin dapat dipasang, dipelihara, dan digunakan.

Kemungkinan besar penggunaan konfigurasi tertentu akan diinginkan dan untungnya Ultimate Multisite membuatnya sangat mudah untuk memfasilitasi domain mapping dan sertifikat SSL dengan integrasinya untuk sejumlah penyedia hosting populer serta layanan seperti Cloudflare dan cPanel.

Jadi dengan memanfaatkan salah satu penyedia ini atau dengan menempatkan Ultimate Multisite di belakang Cloudflare, aspek seperti pengelolaan domain dan sertifikat SSL menjadi cukup sederhana.

Agensi yang lebih suka menjaga kontrol ketat atas pembuatan situs akan menghargai kemudahan di mana mereka dapat membuat situs dan mengasosiasikan situs dengan pelanggan dan paket melalui antarmuka Ultimate Multisite yang efisien.

![Antarmuka manajemen situs Ultimate Multisite](/img/admin/sites-list.png)

Kontrol ketat atas plugin dan tema dipertahankan berdasarkan per-produk melalui antarmuka intuitif Ultimate Multisite yang memungkinkan plugin dan tema tersedia atau disembunyikan serta status aktivasi mereka saat dibuatkan untuk situs baru.

![Antarmuka pembatasan plugin produk](/img/config/product-plugins.png)

Tema menyediakan fungsionalitas serupa, memungkinkan tema tertentu untuk diaktifkan atau disembunyikan saat pembuatan situs.

![Antarmuka pembatasan tema produk](/img/config/product-themes.png)

Agensi akan menemukan ketenangan pikiran dengan Ultimate Multisite yang memungkinkan mereka melakukan apa yang mereka kuasai - mendesain situs web yang luar biasa.

#### Kasus 2: Penyedia Niche

Ada pepatah lama yang mengatakan, "lakukan satu hal dan lakukan dengan baik". Bagi banyak spesialis, ini berarti membuat produk atau layanan di sekitar satu ide inti.

Mungkin Anda seorang pegolf yang mempromosikan situs web ke klub atau Anda mungkin seorang gamer esports yang menyediakan situs web untuk klan. Seorang individu yang mempromosikan layanan pemesanan ke restoran mungkin?

Karena berbagai alasan, Anda ingin menyediakan layanan berdasarkan framework dan platform yang umum. Bisa jadi Anda telah mendesain atau berinvestasi dalam plugin khusus untuk menyediakan fungsionalitas yang diperlukan atau mungkin praktik terbaik industri memerlukan semacam pendekatan terstandarisasi untuk desain.

Salah satu fitur inovatif Ultimate Multisite adalah penggunaan situs template. Situs template adalah situs di mana tema telah dipasang dan diaktifkan, plugin yang diperlukan dipasang dan diaktifkan, serta contoh post atau halaman dibuat. Ketika pelanggan membuat situs baru berdasarkan template, konten dan pengaturan template disalin ke situs yang baru dibuat.

Bagi penyedia situs dan layanan niche, ini memberikan keuntungan tak tertandingi dalam kemampuan untuk langsung membuat situs yang siap digunakan dengan plugin dan desain kustom. Pelanggan hanya perlu memberikan input paling minimal untuk menyelesaikan layanan.

Tergantung pada persyaratan, baik konfigurasi _subdirektori_ atau _subdomain_ mungkin cocok, dalam hal ini pilihan arsitektur akan antara sertifikat SSL sederhana untuk _subdirektori_ atau sertifikat SSL wildcard untuk _subdomain_.

#### Kasus 3: WordPress Web Hosting

Ada banyak cara untuk menghosting situs WordPress tetapi jarang semudah menyediakan ruang web kepada pelanggan dengan versi WordPress yang sudah terpasang. Ini karena sejumlah keputusan dan pertimbangan perlu disatukan untuk menyediakan layanan yang bermakna.

Ultimate Multisite unggul di area ini dengan menyediakan solusi turnkey yang komprehensif untuk hosting situs WordPress. Termasuk dalam solusi adalah mekanisme inti untuk menyediakan layanan langganan, pengumpulan pembayaran, formulir checkout, voucher diskon, dan komunikasi pelanggan.

Banyak dari pekerjaan integral yang diperlukan untuk memasang, mengkonfigurasi, dan memelihara WordPress Multisite dengan benar difasilitasi oleh Ultimate Multisite sejauh administrator jaringan hanya perlu mempertimbangkan aspek yang berkaitan dengan layanan atau niche mereka seperti tingkatan produk, harga, dan penawaran layanan.

Bagi pengembang yang ingin berintegrasi dengan Ultimate Multisite, solusi ini juga menawarkan RESTful API yang komprehensif dan Webhook untuk notifikasi event.

Tanpa ketergantungan pada banyak plugin dan lisensi eksternal, Ultimate Multisite menyediakan solusi yang kaya fitur dan sebanding dengan Wix, Squarespace, WordPress.com dan lainnya.

### Pertimbangan Arsitektur

Meskipun bukan panduan komprehensif, item-item berikut harus berfungsi sebagai panduan untuk pemilihan teknologi yang tepat untuk mendukung instalasi Ultimate Multisite.

#### Shared vs. Dedicated Hosting

Sayangnya tidak semua penyedia hosting setara dan beberapa mempraktikkan kepadatan server yang ekstrem. Penyedia berbiaya rendah biasanya menghasilkan pendapatan dengan memaksimalkan kepadatan server. Dengan demikian, instalasi Ultimate Multisite Anda mungkin hanya satu dari beberapa ratus situs di server yang sama.

Tanpa perlindungan yang tepat dari penyedia, situs di server bersama mengalami masalah 'tetangga berisik'. Artinya, situs di server yang sama mengonsumsi begitu banyak sumber daya sehingga situs lain harus bersaing untuk sumber daya yang tersisa. Sering kali ini muncul sebagai situs yang lambat atau gagal merespons tepat waktu.

Sebagai penyedia web hosting sendiri, efek lanjutannya berarti pelanggan Anda mengalami kecepatan yang buruk, peringkat halaman yang rendah, dan tingkat bounce yang tinggi yang sering mengakibatkan churn pelanggan saat mereka mencari layanan di tempat lain.

Singkatnya, murah tidak berarti bagus.

Ultimate Multisite diketahui bekerja dengan sejumlah penyedia hosting yang baik dan terintegrasi dengan baik dengan lingkungan mereka untuk menyediakan fungsi seperti domain mapping dan SSL otomatis. Penyedia-penyedia ini menghargai performa dan menyediakan layanan kelas lebih tinggi daripada shared hosting.

Untuk daftar penyedia yang kompatibel dan instruksi pengaturan lengkap untuk masing-masing, silakan periksa dokumentasi Compatible Providers.

#### Pertimbangan Performa

Ultimate Multisite bukan aplikasi yang lambat, melainkan sangat cepat. Namun, ia hanya berperforma sebaik aplikasi dan infrastruktur yang mendasarinya dan hanya dapat memanfaatkan apa yang tersedia untuknya.

Pertimbangkan ini: Anda adalah administrator jaringan dari instalasi Ultimate Multisite dengan 100 situs. Beberapa situs tersebut berjalan dengan baik dan menarik sejumlah pengunjung situs web setiap hari.

Skenario ini akan berbeda pada skala yang lebih kecil, katakanlah satu hingga lima situs, tetapi tidak lama lagi masalah skala akan terlihat.

Jika dibiarkan tanpa perhatian, satu situs Ultimate Multisite akan bertanggung jawab untuk memenuhi permintaan semua pengunjung ke situs-situs tersebut. Permintaan ini bisa untuk halaman PHP dinamis atau aset statis seperti stylesheet, javascript, atau file media. Baik satu atau seratus situs, tugas-tugas ini menjadi repetitif, monoton, dan boros. Tidak perlu menggunakan daya CPU dan memori untuk memproses file PHP ketika outputnya adalah informasi statis yang sama untuk setiap permintaan.

Demikian pula satu permintaan untuk halaman PHP atau HTML pada gilirannya menghasilkan beberapa permintaan berikutnya untuk skrip, stylesheet, dan file gambar. Permintaan tersebut ditargetkan langsung ke server Ultimate Multisite Anda.

Seseorang bisa dengan mudah menyelesaikan masalah ini dengan mengupgrade server tetapi itu tidak memperbaiki masalah sekunder - latensi geografis. Hanya beberapa server di beberapa lokasi yang dapat mengatasi masalah ini dengan benar.

Untuk alasan ini, sebagian besar administrator jaringan menggunakan solusi caching front-end dan content distribution network (CDN) untuk memenuhi permintaan halaman statis. Memenuhi permintaan ini dan menyajikan aset sebelum permintaan mencapai server menghemat sumber daya pemrosesan, menghilangkan penundaan, menghindari upgrade yang tidak perlu, dan memaksimalkan investasi teknologi.

Ultimate Multisite menyertakan add-on Cloudflare yang canggih yang memungkinkan administrator jaringan menempatkan instalasi mereka di belakang Cloudflare dan memanfaatkan tidak hanya kemampuan caching-nya tetapi juga hosting DNS, sertifikat SSL, dan mekanisme keamanan.

#### Backup

Seseorang bisa bertanya kepada 50 orang untuk saran tentang backup dan menerima 50 pendapat berbeda tentang strategi backup. Jawabannya adalah, tergantung.

Yang tidak diperdebatkan adalah bahwa backup diperlukan dan hampir tidak terbayangkan bahwa ini tidak dikelola oleh penyedia, khususnya yang menawarkan layanan terkelola. Akibatnya, pelanggan akan mencari administrator jaringan untuk menyediakan dan mengelola layanan ini. Siapa yang dicari administrator jaringan adalah masalah yang sama sekali berbeda.

Untuk keperluan bagian ini, mari kita sepakat bahwa backup adalah salinan point-in-time dari status sistem pada saat backup dimulai. Sederhananya, apa pun status sistem pada saat backup, status tersebut ditangkap dan disimpan dalam backup.

Dengan pemahaman ini, jawaban tentang cara mencapai backup dan apa yang terbaik untuk lingkungan Anda akan sangat bergantung pada persyaratan Anda dan kemampuan penyedia hosting untuk memenuhi persyaratan tersebut. Namun, dalam urutan dari yang paling berpendirian hingga yang paling tidak berpendirian, opsi-opsi di bawah ini harus memberikan beberapa panduan.

#### Snapshot

Snapshot adalah peluru perak untuk backup karena mudah, tidak rumit (sampai Anda ingin memulihkan) dan 'langsung berfungsi'. Namun memerlukan bantuan dari penyedia Anda dan sebagian besar hanya berlaku jika Anda memiliki VPS (Virtual Private Server) atau serupa. Beberapa penyedia yang terdaftar dalam dokumentasi 'Compatible Providers' kami menawarkan backup yang tidak memerlukan intervensi atau pertimbangan lebih lanjut dari administrator jaringan.

Di mana backup tradisional menargetkan file dan database, snapshot menargetkan seluruh disk. Ini berarti tidak hanya data situs yang ditangkap dalam snapshot tetapi juga sistem operasi dan konfigurasi. Bagi banyak orang, ini adalah keuntungan yang khas karena sistem baru dapat dibuat hampir seketika dari snapshot dan dioperasikan untuk menggantikan instance yang bermasalah. Demikian pula, proses pemulihan untuk mengambil file hanya memerlukan melampirkan image snapshot sebagai disk ke instance yang ada sehingga file dapat diakses dan disalin.

Snapshot mungkin menarik biaya tambahan dari penyedia hosting tetapi ini adalah polis asuransi terhadap kecelakaan.

#### Skrip Eksternal

Tampaknya tidak ada kekurangan skrip dan solusi eksternal untuk membackup sumber daya WordPress dan MySQL dan ini akan bekerja dengan baik untuk Ultimate Multisite karena ini adalah plugin WordPress yang menggunakan filesystem dan database WordPress. Jadi solusi yang membackup situs WordPress akan cukup memenuhi kebutuhan Ultimate Multisite.

Kami tidak dapat merekomendasikan satu skrip di atas yang lain tetapi saran umum kami adalah menjalankan beberapa tes backup dan restore untuk memastikan hasilnya sesuai yang diinginkan dan untuk 'yakin benar-benar yakin' dengan terus mengevaluasi skrip dan fungsionalitasnya khususnya di mana semacam strategi backup diferensial diterapkan.

Perlu dicatat bahwa skrip-skrip ini, saat berjalan, akan meningkatkan beban sistem yang harus diperhitungkan.

#### Plugin

Hampir tidak ada masalah di WordPress yang tidak dapat diselesaikan dengan plugin dan jika mengelola skrip eksternal bukan kesukaan Anda maka mungkin plugin adalah opsi terbaik berikutnya.

Meskipun plugin bervariasi dalam opsi dan fitur, mereka sebagian besar melakukan fungsi yang sama yaitu membuat salinan file WordPress dan konten database. Setelah itu, fungsionalitas berbeda karena beberapa plugin dapat mengirim backup ke layanan eksternal seperti Google Drive atau Dropbox atau ke semacam layanan penyimpanan objek yang kompatibel seperti S3, Wasabi, atau lainnya. Plugin yang lebih komprehensif menyediakan backup diferensial atau semacam strategi untuk membackup hanya data yang telah berubah untuk menghemat biaya penyimpanan eksternal.

Dalam memilih plugin Anda, pastikan untuk memverifikasi bahwa plugin tersebut multisite aware. Karena sifat operasinya, saat backup berjalan, Anda dapat mengharapkan beban sementara pada server sampai proses selesai.

#### Domain dan SSL

Banyak yang sudah dibahas mengenai nama domain dalam mode _subdomain_ multisite. Solusi yang hampir universal bagi administrator jaringan adalah menggunakan entri DNS wildcard.

![Contoh konfigurasi entri DNS wildcard](/img/config/settings-domain-mapping.png)

Jenis entri DNS ini akan berhasil menyelesaikan _subdomain_ seperti 'site1.domain.com' dan 'site2.domain.com' ke alamat IP 1.2.3.4 sehingga mendukung Ultimate Multisite dan secara lebih luas WordPress Multisite menggunakan mode _subdomain_.

Ini mungkin bekerja dengan sempurna untuk HTTP karena host target dibaca dari header HTTP tetapi jarang web sesederhana itu akhir-akhir ini di mana transaksi HTTPS yang aman hampir wajib.

Untungnya ada opsi mudah untuk sertifikat SSL. Dalam mode _subdirektori_, sertifikat domain biasa dapat digunakan. Ini tersedia dengan mudah dan gratis dari penyedia hosting yang mungkin menggunakan layanan LetsEncrypt gratis atau sumber lain. Jika tidak, ini tersedia secara komersial dari otoritas jika Anda dapat menghasilkan certificate signing request.

Untuk mode _subdomain_, penggunaan sertifikat SSL wildcard akan berpasangan sempurna dengan domain wildcard dan memungkinkan sertifikat menjadi otoritatif untuk domain root dan semua _subdomain_ tanpa konfigurasi yang berlebihan.

Namun, perlu dicatat bahwa sertifikat SSL wildcard mungkin tidak berfungsi dengan layanan seperti Cloudflare kecuali Anda berada di paket enterprise atau mengatur entri ke DNS only yang mana semua caching dan optimisasi dilewati.

Out-of-the-box, Ultimate Multisite menyediakan solusi untuk masalah ini yang menunjukkan pengalaman luas kami dengan kebutuhan WordPress multisite. Mengaktifkan add-on sederhana ini akan membuat Ultimate Multisite menggunakan kredensial Cloudflare Anda untuk secara otomatis menambahkan entri DNS untuk situs jaringan di Cloudflare dan mengatur mode mereka ke 'proxied'. Dengan cara ini, setiap subsite jaringan, ketika dibuat, akan memiliki perlindungan penuh dan manfaat Cloudflare termasuk SSL.

Tergantung pada sifat dan tujuan instalasi Ultimate Multisite Anda, mungkin ada kebutuhan bagi pelanggan untuk menggunakan domain mereka sendiri. Dalam kasus ini, administrator jaringan dibebani dengan menyelesaikan dua masalah. Satu, hosting nama domain dan dua, sertifikat SSL untuk domain.

Bagi banyak orang, penggunaan Cloudflare adalah opsi yang mudah. Pelanggan hanya perlu menempatkan domain mereka di Cloudflare, mengarahkan CNAME ke domain root Ultimate Multisite dan memetakan domain mereka di Ultimate Multisite untuk mulai memanfaatkan nama domain kustom mereka.

Di luar ini, solusi alternatif perlu dicari itulah mengapa Ultimate Multisite merekomendasikan daftar Compatible Providers. Ini karena proses pengaturan DNS dan SSL bisa menjadi proses yang tidak sepele. Namun, dengan integrasi Ultimate Multisite dengan penyedia-penyedia ini, kompleksitasnya banyak dihilangkan dan prosedurnya diotomatisasi.

#### Plugin

Sangat mungkin Anda memerlukan plugin tambahan untuk menyediakan fungsionalitas kepada pelanggan atau situs jaringan Anda. Apakah semua plugin bekerja dengan WordPress Multisite dan Ultimate Multisite? Yah, tergantung.

Meskipun sebagian besar plugin dapat dipasang di WordPress Multisite, aktivasi dan lisensinya bervariasi dari satu pengembang ke pengembang lain.

Tantangannya terletak pada bagaimana lisensi diterapkan dengan beberapa plugin yang memerlukan lisensi per-domain. Ini berarti untuk beberapa plugin, administrator jaringan perlu mengaktifkan lisensi secara manual untuk setiap plugin di setiap situs baru.

Oleh karena itu, mungkin lebih baik untuk memeriksa dengan pengembang plugin tentang bagaimana plugin mereka akan bekerja dengan WordPress Multisite dan persyaratan atau prosedur khusus yang diperlukan untuk melisensikannya.
