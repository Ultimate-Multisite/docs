---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite iku plugin WordPress Multisite sing bisa mbantu sampeyan nawakake WaaS utawa Websites as a Service marang pelanggan. Sadurunge kita mlebu lan sinau kepiye Ultimate Multisite bisa mbantu bisnis lan pelanggan sampeyan, ana ilmu dasar sing kudu kita duweni dhisik.

## WordPress Multisite {#the-wordpress-multisite}

Kebanyakan saka kita wis kenal instalasi WordPress standar. Sampeyan iso nggawe nganggo control panel penyedia hosting utawa, kanggo sing wani, ngatur web server lan database anyar, unduh file inti lan wiwiti proses instalasi.

Iki lumaku kanggo jutaan situs WordPress ing sak jagad, nanging saka sudut pandang agen utawa penyedia hosting, ayo kita bahas babagan volume.

Sanajan gampang kanggo nggawe siji situs WordPress utawa nganti seratus nganggo control panel otomatis, masalah bakal wiwit muncul nalika sampeyan kudu ngatur situs-situs kasebut. Yen ora diatur, sampeyan dadi target utama malware. Ngatur tegese usaha lan sumber daya, lan sanajan ana alat lan plugin eksternal sing bisa mbantu nglancarake pengelolaan lan administrasi situs WordPress, faktuile pelanggan tetep duwe akses administratif, mula usaha kasebut gampang banget kalah.

Ing inti WordPress, ana fitur sing mung jenenge ‘Multisite’ sing asale saka taun 2010 nalika peluncuran WordPress 3.0. Wiwit wektu iku, wis ana sawetara revisi kanggo nambah fitur anyar lan nguatake keamanan.

Intine, WordPress multisite bisa dipikir kaya ngene: Universitas duwe instalasi WordPress siji, nanging saben fakultas duwe situs WordPress dhewe.

### Jaringan (The Network) {#the-network}

Ing istilah WordPress, jaringan multisite itu adalah tempat di mana banyak subsites bisa dikelola dari satu dashboard tunggal. Meskipun cara membuat jaringan multisite beda antara penyedia hosting, hasil akhirnya biasanya cuma butuh beberapa arahan tambahan di file `wp-config.php` biar WordPress tahu kalau dia lagi jalan dalam mode spesifik ini.

Ada beberapa perbedaan yang jelas antara jaringan multisite dan instalasi WordPress biasa yang akan kita bahas sebentar.

#### Subdomain vs. Subdirectory {#subdomain-vs-subdirectory}

Salah satu keputusan paling penting yang harus kamu ambil adalah apakah instalasi multisite itu bakal jalan pakai _subdirectories_ atau _subdomains_. Ultimate Multisite bisa kerja sama baik dengan keduanya, tapi ada perbedaan arsitektur antara kedua konfigurasi ini.

Di konfigurasi _subdirectory_, situs jaringan akan mewarisi jalur (path) berdasarkan nama domain utama. Contohnya, situs jaringan yang diberi label ‘site1’ akan punya URL lengkap `https://domain.com/site1`. Di konfigurasi _subdomain_, situs jaringan akan punya _subdomain_ sendiri yang diambil dari nama domain utama. Jadi, situs yang diberi label ‘site1’ akan punya URL lengkap `https://site1.domain.com/`.

Meskipun kedua pilihan ini sama-sama valid, penggunaan _subdomains_ memang menawarkan beberapa keuntungan tapi juga butuh lebih banyak pemikiran dan perencanaan dalam arsitekturnya.

Soal DNS ku ngurus _subdirectories_ itu lumayan gampang kok. Soale situs jaringan iku pancen kaya anak saka path utama, dadi mung perlu siji entri nama domain kanggo domain utama. Nanging kanggo _subdomains_, tantangane rada luwih rumit, kudu ana entri CNAME terpisah kanggo saben situs jaringan utawa nganggo wildcard (*) ing record DNS.

Area liyane sing kudu dipertimbangkan ya iku bab SSL lan penerbitan serta panggunaan sertifikat SSL. Ing konfigurasi _subdirectory_, siji sertifikat domain bisa digunakake amarga situs jaringan pancen mung path saka nama domain utama. Dadi, sertifikat kanggo domain.com bakal cukup menehi SSL kanggo https://domain.com/site1, https://domain.com/site2 lan lspw.

Ing konfigurasi _subdomain_, nganggo wildcard SSL certificate iku salah siji pilihan sing paling umum. Jenis sertifikat SSL iki menehi enkripsi kanggo domain lan _subdomains_-e. Dadi, wildcard SSL certificate bakal menehi enkripsi kanggo https://site1.domain.com, https://site2.domain.com lan https://domain.com dhewe.

Sanajan ana pilihan liyane, sing iki asring terbatas lingkup lan panggunaane lan mbutuh konfigurasi lan pertimbangan tambahan babagan kecocokan.

#### Plugins lan Themes {#plugins-and-themes}

Apa sing WordPress menehi iku uga nggoleki, setidaknya saka sudut pandang pelanggan. Ing instalasi WordPress mandiri yen administrator situs nginstall plugin sing ala utawa ora njaga instalasi supaya update, korban lan kerugian tunggal saka tumindak iki ya awake dhewe. Nanging, yen administrator situs nginstall plugin sing ala ing instalasi multisite, bakal nggawe korban kanggo saben situs sing ana ing jaringan.

Alasan kenapa begitu, pas diatur sebagai multisite WordPress, kemampuan buat admin situs untuk instal plugin dan tema dihapus dari mereka. Kemampuan itu dipindah ke peran administrator jaringan baru atau 'super admin'. Peran istimewa ini nanti bisa memutuskan apakah admin situs jaringan boleh lihat atau akses menu plugin di dashboard mereka, dan kalau boleh, apakah izin itu sampai ke _mengaktifkan_ atau _menonaktifkan_ plugin juga.

Sampai titik ini, administrator jaringan yang bertanggung jawab buat instal plugin dan tema di seluruh jaringan, dan mendelegasikan izin biar admin situs jaringan bisa pakai plugin dan tema itu di situs-situs jaringan mereka. Admin situs biasa nggak boleh instal plugin atau tema yang bukan untuk situs mereka sendiri.

#### Pengguna dan Administrator {#users-and-administrators}

Di WordPress Multisite, semua situs jaringan berbagi database yang sama, makanya mereka juga berbagi pengguna, peran (roles), dan kemampuan (capabilities) yang sama. Cara paling pas buat mikirin ini adalah semua pengguna itu anggota jaringan, bukan cuma milik satu situs tertentu.

Dengan pemahaman ini, mungkin kurang bagus kalau kita mengizinkan pembuatan pengguna, makanya WordPress Multisite menghilangkan kemampuan itu dari admin situs biasa dan memindahkannya ke peran administrator jaringan. Sebagai gantinya, administrator jaringan bisa mendelegasikan hak istimewa yang diperlukan ke admin situs agar mereka bisa membuat akun pengguna untuk situs mereka sendiri.

<!-- Screenshot tidak tersedia: antarmuka manajemen pengguna jaringan WordPress Multisite -->

Mengulang pernyataan di atas, meskipun akun pengguna itu terlihat terkait dengan situs tempat mereka berada, sebenarnya akun tersebut dialokasikan ke jaringan dan jadi harus unik di seluruh jaringan. Mungkin ada kasus di mana nama pengguna (username) nggak bisa didaftarkan karena alasan ini.

Sanajan iki sistem perusahaan wis kenal, nanging sumber pendaftaran lan otentikasi pengguna sing siji kuwi kerep angel dingerteni kanggo wong-wong sing wis biasa nganggo instalasi WordPress mandiri, yaiku administrasi penggunane luwih gampang.

#### Media {#media}

Ing situs jaringan (Multisite) WordPress sing berbagi database siji, dheweke njaga jalur (path) sing beda ing filesystem kanggo file media.

Lokasi standar WordPress (wp-content/uploads) tetep ana; nanging jalurnya diubah supaya nglambang ID unik saka situs jaringan kasebut. Akibaté, file media kanggo situs jaringan bakal katon kaya wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

Kita wis tau sebutake sadurunge yen ana keuntungan sing beda antara konfigurasi _subdomain_ lan _subdirectory_, lan iki wujud jalurne (paths).

Ing konfigurasi _subdirectory_, situs utama (situs kapisan sing digawe nalika jaringan dibentuk) lan subsitus jaringan kudu duwe jalur sing padha saka nama domain. Iki nduweni potensi konflik sing akeh banget.

Kanggo postingan, jalur wajib /blog/ ditambahkan ing situs utama kanggo mencegah bentrokan karo situs jaringan liyane. Iki tegese yen permalink sing apik kaya ‘Nama Post’ bakal ditampilkan minangka domain.name/blog/post-name/.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Ing konfigurasi _subdomain_, tindakan iki ora perlu amarga saben situs jaringan nggoleki pemisahan domain sing lengkap lan mula ora perlu ngandelake jalur siji. Malah, dheweke njaga jalur sing beda adhedhasar _subdomain_ dhewe.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Halaman Statis {#static-pages}

Ing konfigurasi _subdirectory_ potensi bentrokan nama bisa muncul di halaman statis karena situs utama dan situs jaringan berbagi path yang sama.

Supaya ini nggak terjadi, WordPress punya cara buat memblokir beberapa nama situs tertentu supaya tidak bentrok dengan nama situs pertama. Biasanya, administrator jaringan akan memasukkan root path dari halaman-halaman situs utama.

<!-- Screenshot unavailable: Pengaturan jaringan WordPress menunjukkan nama situs yang diblokir untuk mencegah konflik -->

Di konfigurasi _subdomain_, kemungkinan bentrokan nama bisa dihindari karena _subdomain_ itu unik buat situs jaringan dan nggak ada hubungannya sama situs utama.

### Registrasi {#registration}

Di pengaturan jaringan WordPress Multisite, ada beberapa pilihan registrasi pengguna baru yang tersedia, memungkinkan pengguna baru maupun lama untuk membuat situs.

<!-- Screenshot unavailable: Pengaturan jaringan WordPress Multisite menunjukkan opsi registrasi -->

Berbeda dengan instalasi WordPress mandiri (stand-alone), situs jaringan nggak punya pilihan yang biasa buat mengizinkan pendaftaran pengguna atau menugaskan pendaftaran tersebut ke peran tertentu.

<!-- Screenshot unavailable: Pengaturan pendaftaran pengguna situs WordPress mandiri menunjukkan opsi yang terbatas -->

Ketika akun pengguna dibuat, akun-akun itu dibuat di level jaringan. Jadi, alih-alih milik satu situs tertentu, mereka malah jadi milik seluruh jaringan. Ini punya beberapa keuntungan dan kerugian tersendiri.

Contohnya, bayangkan WordPress Multisite kamu itu bisnis berita dan informasi. Kamu akan membuat multisite tersebut, lalu membuat situs jaringan untuk keuangan, teknologi, hiburan, dan bidang minat lainnya sambil tetap mengontrol plugin dan tema secara keseluruhan. Setiap situs jaringan kemudian akan memiliki tingkat kontrol yang jauh lebih besar atas tampilan dan pengalaman pengguna dari situs jaringannya dibandingkan dengan custom post type atau kategori posting biasa.

Sejauh ini, ketika seorang pengguna *login*, mereka masuk ke jaringan dan pada akhirnya juga masuk ke setiap situs jaringan untuk memberikan pengalaman yang mulus. Jika situs barumu berbasis langganan (*subscription*), ini akan menjadi solusi dan hasil yang ideal.

Namun, jika sifat dan tujuan multisite yang dimaksud adalah untuk menawarkan situs jaringan yang berbeda yang tidak memiliki hubungan satu sama lain, hampir selalu diperlukan plugin eksternal atau tambahan untuk memanipulasi peran pengguna (*user roles*).

### Domain dan SSL {#domain-and-ssl}

Mari kita bahas instalasi WordPress Multisite yang hampir luput dari perhatian kita - yaitu Wordpress.com. Ini adalah contoh paling luas dari WordPress multisite dan menunjukkan kemampuan luasnya untuk dikustomisasi serta dibentuk sesuai tujuan.

Saat ini di internet modern, penggunaan SSL itu hampir wajib, dan administrator jaringan WordPress multisite segera dihadapkan pada tantangan ini.

Dalam konfigurasi _subdomain_, situs dibuat berdasarkan nama domain utama (*root domain name*). Jadi, situs yang diberi label ‘site1’ akan dibuat sebagai ‘site1.domain.com’. Dengan menggunakan sertifikat SSL *wildcard*, administrator jaringan dapat berhasil mengatasi tantangan ini dan memberikan kemampuan enkripsi SSL untuk seluruh jaringan.

WordPress Multisite duwe fungsi pemetaan domain sing bisa nggabungake situs-situs jaringan karo nama domain khusus utawa nama domain sing beda karo domain utama jaringan kasebut.

Kanggo administrator jaringan, iki nambah lapisan kerumitan ya kanggo konfigurasi nama domain uga kanggo penerbitan lan pemeliharaan sertifikat SSL.

Nganti ngoko kaya ngene, sanajan WordPress Multisite menehi cara supaya [www.anotherdomain.com](http://www.anotherdomain.com) bisa dipetake menyang ‘site1’, administrator jaringan tetep kudu ngadhepi tantangan kanggo ngelola entri DNS saka njaba lan nggunakake sertifikat SSL.

## Ultimate Multisite {#ultimate-multisite}

Yen wis ngerti bedane instalasi WordPress sing mandiri karo instalasi Multisite, ayo kita deleng kepiye carane Ultimate Multisite dadi gudhang utama kanggo menehi Website as a Service (WaaS).

### Pendahuluan {#introduction}

Ultimate Multisite iku kaya pisau Swissmu nalika nggawe Website as a Service (WaaS). Anggep wae Wix.com, Squarespace, WordPress.com lan banjur mikir duwe layananmu dhewe.

Ing njero Ultimate Multisite nganggo WordPress Multisite, nanging kanthi cara sing ora mung nyelesai akeh tantangan sing dihadapi administrator jaringan karo instalasi multisite, nanging uga nguatake kemampuan supaya bisa ndukung owah-owahan kasus penggunaan sing akeh banget.

Ing bagian-bagian sabanjure kita bakal deleng sawetara kasus penggunaan umum lan bab-bab sing kudu dipertimbangkan kanggo ndukung kasus-kasus kasebut.

### Kasus Penggunaan {#use-cases}

#### Kasus 1: Agen {#case-1-an-agency}

Biasane keahlian inti agen yaiku nggawe desain website kanthi aspek kaya hosting utawa marketing diarani layanan tambahan.

Kanggo agensi, Ultimate Multisite nawakake nilai sing luar biasa banget amarga duwe kemampuan kanggo ng-host lan ngelola akeh website ing siji platform. Luwih saka kuwi maneh kanggo agensi sing standar desainé nganggo tema tartamtu kaya GeneratePress, Astra, OceanWP utawa liyane bisa nggunakake kemampuan Ultimate Multisite kanggo otomatis ngaktifake tema-tema iki kanggo saben site anyar.

Sama kaya kahanan akeh penawaran harga plugin umum lan populer kanggo agensi, anggone nggunakake Ultimate Multisite menehi kesempatan marang agensi kanggo nggunakake investasi sing wis ana kanthi nyedhiyakake platform umum saka sing bisa dipasang, dipertahankan, lan digunakake plugin.

Kemungkinan gedhe ya dibutuhake konfigurasi, lan untunge Ultimate Multisite ndadekake bab iki gampang banget kanggo nglumpukake pemetaan domain lan sertifikat SSL kanthi integrasine kanggo sawetara penyedia hosting populer uga layanan kaya Cloudflare lan cPanel.

Dadi kanthi nggunakake salah siji penyedia iki utawa nempatake Ultimate Multisite ing mburi Cloudflare, aspek kaya ngelola domain lan sertifikat SSL dadi rada gampang.

Agensi sing seneng njaga kontrol ketat marang pembuatan site bakal seneng banget karo kemudahan kanggo nggawe site lan nyambungake site kanthi pelanggan lan rencana liwat antarmuka Ultimate Multisite sing wis dipermudah.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Kontrol ketat marang plugin lan tema tetep dijaga per produk liwat antarmuka intuitif Ultimate Multisite sing ngidini plugin lan tema kanggo digawe ketersediaan utawa disembunyikake uga status aktivasi nalika diinstansiasi kanggo site anyar.

![Product plugin limitations interface](/img/config/product-plugins.png)

Tema-tema (Themes) duwe fungsi sing padha, ngidulungake tema-tema tartamtu kanggo diaktifake utawa disembunyikake ing pembuatan situs web.

![Product theme limitations interface](/img/config/product-themes.png)

Agensi bakal tentrem karo Ultimate Multisite amarga bisa nindakake apa sing paling apik ditindakake - nggawe situs web sing luar biasa.

#### Kasus 2: Penyedia Niche (Niche Provider) {#case-2-niche-provider}

Ana paribasan lawas sing ngandhani, “laku siji bab lan lakoni kanthi becik”. Kanggo akeh spesialis, iki tegese nggawe produk utawa layanan muterake ide inti tunggal.

Mungkin sampeyan iku penggemar golf sing promosi situs web kanggo klub utawa mungkin sampeyan dadi gamer esports sing antusias menehi situs web kanggo clan. Utamané wong sing promosi layanan pemesanan menyang restoran, mboten?

Kanggo akeh alesan, sampeyan pengin menehi layanan adhedhasar kerangka lan platform sing umum. Mungkin sampeyan wis nggawe utawa nginvestasi ing plugin khusus (bespoke plugins) kanggo menehi fungsi sing dibutuhake utawa mungkin kasusipun praktik terbaik industri mbutuhake sawijining pendekatan standar kanggo desain.

Salah siji fitur inovatif saka Ultimate Multisite yaiku pangguna template sites. Template site iku yaiku tempat tema wis dipasang lan diaktifake, plugin sing dibutuhake wis dipasang lan diaktifake, lan postingan utawa halaman conto wis digawe. Nalika pelanggan nggawe situs anyar adhedhasar template kasebut, isi lan pengaturan template bakal dicopet menyang situs sing lagi digawe.

Kanggo penyedia situs lan layanan niche, iki menehi keuntungan tanpa tandingan ing kemampuan kanggo langsung nggawe situs sing siap dioperasikake kanthi plugin lan desain khusus. Pelanggan mung perlu menehi masukan paling minimal kanggo ngrampungake layanan kasebut.

Nalika kebutuhanmu, bisa cocok pakai konfigurasi _subdirectory_ atau _subdomain_, nah pilihan arsitektur bakal tergantung itu. Jadi, pilih antara sertifikat SSL sederhana buat _subdirectory_ atau wildcard SSL buat _subdomain_.

#### Kasus 3: Web Hosting WordPress {#case-3-wordpress-web-hosting}

Ada banyak cara buat nge-host situs WordPress, tapi jarang sekali sesederhana kasih ruang web ke pelanggan yang sudah siap pakai versi WordPress. Ini karena butuh banyak keputusan dan pertimbangan biar layanannya jadi bermakna.

Ultimate Multisite jago banget di bidang ini karena nawarin solusi lengkap yang siap pakai (turnkey solution) buat nge-host situs WordPress. Solusi ini udah termasuk mekanisme inti buat kasih layanan langganan, pengumpulan pembayaran, formulir checkout, voucher diskon, dan komunikasi sama pelanggan.

Banyak pekerjaan penting yang harus dilakukan biar instalasi, konfigurasi, dan pemeliharaan WordPress Multisite berjalan benar itu dibantu oleh Ultimate Multisite. Jadi, admin jaringan cuma perlu mikirin hal-hal yang berhubungan sama layanan atau ceruk pasar mereka, misalnya tingkatan produk, harga, dan penawaran layanan.

Buat developer yang mau integrasi sama Ultimate Multisite, solusi ini juga nawarin RESTful API lengkap dan Webhooks buat notifikasi kejadian.

Tanpa harus bergantung pada banyak plugin dan lisensi eksternal, Ultimate Multisite kasih solusi yang kaya fitur dan setara dengan Wix, Squarespace, WordPress.com, dan lainnya.

### Pertimbangan Arsitektur {#architecture-considerations}

Meskipun ini bukan panduan lengkap, poin-poin di bawah ini bisa jadi panduan buat memilih teknologi yang tepat buat mendukung instalasi Ultimate Multisite.

#### Shared vs. Dedicated Hosting {#shared-vs-dedicated-hosting}

Sayang, ora kabeh penyedia hosting iku padha kok lan ana sing nindakake praktik server density sing ekstrem. Penyedia layanan sing regane murah biasane ngasilake pendapatan kanthi maksimalkan kepadatan server. Amarga ngono, instalasi Ultimate Multisite sampeyan mungkin mung salah siji saka ratusan situs liyane ing server sing padha.

Tanpa perlindungan sing pas saka penyedia, situs-situs ing server sing padha bakal ngalami masalah 'tetangga rame' (*noisy neighbour*). Artine, situs ing server sing padha nggunakake sumber daya akeh banget nganti situs liyane kudu saingan kanggo sumber daya sing sisa. Seringkali iki katon minangka situs-situs sing alon utawa ora bisa mangsuli wektu sing pas.

Minangka penyedia hosting web, efek saka kahanan iki tegese pelanggan sampeyan bakal ngalami kecepatan sing kurang apik, peringkat halaman sing rendah, lan tingkat *bounce rate* sing dhuwur, asring ngasilake pelanggan pindhah layanan liyane.

Intine, murah ora ateges apik.

Ultimate Multisite wis dikenal bisa kerja bareng karo sawetara penyedia hosting sing apik lan nyambung kanthi apik karo lingkungan mereka kanggo menehi fungsi kaya *domain mapping* lan SSL otomatis. Penyedia-penyedia iki ngajeni performa lan menehi layanan tingkat luwih dhuwur tinimbang *shared hosting*.

Kanggo daftar penyedia sing cocok lan instruksi pengaturan lengkap kanggo saben penyedia, silakan cek dokumentasi Compatible Providers.

#### Pertimbangan Performa {#performance-considerations}

Ultimate Multisite ora aplikasi sing alon, malah cepet banget. Nanging, kinerja iku mung sakaputane karo aplikasi lan infrastruktur ing ngisor lan mung bisa nggunakake apa sing wis diakses.

Coba pikirake iki: Sampeyan minangka administrator jaringan instalasi Ultimate Multisite kanthi 100 situs. Sawetara situs kuwi lagi apik lan narik pengunjung web saben dina.

Skenario iki bakal beda yen skala cilik, katamu siji nganti lima situs. Nanging sadurunge masalah gedhe muncul gara-gara skala, masalah kuwi wis bisa krasa.

Yen ora dikawasi, siji situs Ultimate Multisite bakal dadi sing njawab kabeh permintaan pengunjung kanggo situs-situs kuwi. Permintaan kuwi isa kanggo halaman PHP sing dinamis utawa aset statis kaya stylesheet, javascript, utawa file media. Apa siji situs utawa sèwu situs, tugas-tugas iki dadi repetitif, monoton, lan mubazir. Ora perlu nganggo daya CPU lan memori kanggo ngolah file PHP yen isine informasi statis sing padha kanggo saben permintaan.

Sama kaya kuwi, siji permintaan kanggo halaman PHP utawa HTML bakal nggawe akeh permintaan susulan kanggo skrip, stylesheet, lan file gambar. Permintaan-permintaan iki langsung dituju menyang server Ultimate Multisite sampeyan.

Masalah iki gampang dipecahake kanthi ng-upgrade server, nanging kuwi ora ngrampungake masalah sekunder - latensi geografis. Aja cukup nganggo pirang-pirang server ing lokasi sing beda kanggo ngatasi masalah iki kanthi bener.

Amarga sebab iki, mayoritas administrator jaringan nggunakake solusi caching front-end lan content distribution networks (CDN) kanggo njawab permintaan kanggo halaman statis. Nglakoni permintaan-permintaan iki lan nyedhiyakake aset sadurunge permintaan tekan server bakal ngirit sumber daya pemrosesan, ngilangake kendala wektu, ngindari upgrade sing ora perlu, lan maksimalkake investasi teknologi.

Ultimate Multisite kalebu add-on Cloudflare sing canggih sing bisa nggawe administrator jaringan nempatake instalasi kasebut ing mburi Cloudflare lan nggunakake ora mung kemampuan caching-e, nanging uga hosting DNS, sertifikat SSL, lan mekanisme keamanan.

#### Backup {#backups}

Sampeyan isa takon 50 wong kanggo saran babagan backup lan bakal nampa 50 opini beda babagan strategi backup. Jawabane yaiku, gumantung.

Sing jelas ya, *backup* iku kudu ana lan hampir ora bisa dibayangke yen layanan kaya ngono ora dikelola dening penyedia layanan, utamane sing nawakake layanan terkelola (*managed service*). Akibaté, pelanggan bakal nyari admin jaringan kanggo menehi lan ngelola layanan iki. Sapa sing diandelake admin jaringan iku masalah sing luwih beda maneh.

Kanggo bagian iki, ayo kita sepakati yen *backup* iku salinan keadaan sistem (state) ing wektu *backup* diwiwiti. Sing gampang diomongake, apa wae kondisi sistem nalika *backup* iku bakal ditangkap lan dikunci ing *backup*.

Kanthi pemahaman iki, cara nggayuh *backup* lan sing paling apik kanggo lingkunganmu bakal gumantung banget karo kebutuhanmu lan kemampuan penyedia hosting kanggo nglayani kebutuhan kuwi. Nanging, saka pilihan sing paling opinionated (paling duwe pendapat) nganti sing paling ora opinionated, opsi ing ngisor iki bisa menehi panduan.

#### Snapshots {#snapshots}

*Snapshot* iku solusi cepet kanggo *backup* amarga gampang, ora rumit (nganti nek arep dipulihake), lan "langsung kerja". Nanging, iki butuh bantuan saka penyedia layananmu lan luwih akeh sing lumrah mung berlaku yen sampeyan duwe VPS (*Virtual Private Server*) utawa sing padha. Sawetara penyedia sing ana ing dokumentasi 'Compatible Providers' kita nawakake *backup* sing ora mbutuh intervensi utawa pertimbangan maneh saka admin jaringan.

Backup tradisional nyasar nang file lan database, sementara snapshot nyasar nang seluruh disk. Iki artine ora mung data situs kasebut sing ditangkap ing snapshot, nanging uga sistem operasi lan konfigurasi. Kanggo akeh wong, iki duwe keuntungan sing beda amarga sistem anyar bisa digawe hampir langsung saka snapshot lan dioperasikake kanggo ngganti instansi sing lagi bermasalah. Cara pemulihan kanggo njupuk file mung mbutuh nempelake gambar snapshot minangka disk menyang instansi sing wis ana supaya file-file kasebut bisa diakses lan dicopy.

Snapshot bisa nggawa biaya tambahan saka penyedia hosting, nanging iki kaya asuransi nglawan kecelakaan.

#### External Scripts {#external-scripts}

Kelihatane ora kurang solusi utawa skrip eksternal kanggo backup sumber daya WordPress lan MySQL lan iki bakal cocok banget kanggo Ultimate Multisite amarga iku plugin WordPress sing nggunakake filesystem lan database WordPress. Dadi, solusi sing nge-backup situs WordPress bakal cukup ngurusi kebutuhan Ultimate Multisite.

Kita ora bisa rekomendasi siji skrip tinimbang liyane, nanging saran umum kita yaiku jalankan sawetara tes backup lan restore kanggo mesthekake yèn hasilnya wis pas lan 'pastine pastine' kanthi terus-terusan ngevaluasi skrip lan fungsinine, utamane ing papan sing nggunakake strategi backup diferensial.

Perlu dicatat yen skrip-skrip iki, nalika lagi jalan, bakal nambah beban sistem sing kudu dipertimbangkan.

#### Plugins {#plugins}

Ora ana masalah gedhe ing WordPress sing ora bisa dipecahkan nganggo plugin lan yen ngelola skrip eksternal dudu duwe bakatmu, mungkin plugin iku pilihan sing paling apik sabanjure.

Sanajan plugin-plugin ku duwe pilihan lan fitur sing beda, nanging intine padha yaiku kanggo nyalin file WordPress lan database. Sawise iku, fungsinya bakal beda, amarga sawetara plugin bisa ngirim backup menyang layanan eksternal kaya Google Drive utawa Dropbox, utawa layanan penyimpanan objek sing cocok kaya S3, Wasabi, utawa liyane. Plugin sing luwih lengkap menehi backup diferensial utawa strategi kanggo nyimpen data sing wis owah wae supaya biaya penyimpanan eksternal bisa irit.

Nalika milih pluginmu, ati-ati ya kanggo mastiake yen iku duwe fitur multisite aware. Amarga sifat kerjane nalika proses backup lagi jalan, sampeyan bakal ngalami beban sementara ing server nganti proses kasebut rampung.

#### Domain lan SSL {#domain-and-ssl-1}

Banyak wis dibahas babagan domain ing mode _subdomain_ multisite. Solusi sing hampir umum kanggo administrator jaringan yaiku nggunakake wildcard DNS entry.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Jenis DNS entry iki bakal bisa ngresmikan _subdomain_ kaya ‘site1.domain.com’ lan ‘site2.domain.com’ menyang alamat IP 1.2.3.4, dadi duwe dukungan kanggo Ultimate Multisite lan luwih akeh WordPress Multisite nganggo mode _subdomain_.

Iki bisa lumayan apik kanggo HTTP amarga host tujuan diwaca saka header HTTP, nanging jarang saiki web wis gampang kaya ngene ya nganti transaksi HTTPS sing aman hampir wajib.

Untungé ana ana pilihan gampang kanggo sertifikat SSL. Ing mode _subdirectory_ saiki, sertifikat domain biasa bisa dienggo. Iki gampang lan gratis saka penyedia hosting sing mungkin nggunakake layanan gratis LetsEncrypt utawa sumber liyane. Yen ora, iki bisa dibeli komersial saka otoritas yen sampeyan bisa ngasilake *certificate signing request*.

Kanggo mode _subdomain_, anggone sertifikat SSL wildcard bakal cocok banget karo domain wildcard lan ngidini sertifikat kuwi dadi otoritatif kanggo domain utama lan kabeh _subdomain_ tanpa perlu konfigurasi tambahan.

Nanging, kudu digatekake yen sertifikat SSL wildcard mungkin ora bisa kerja karo layanan kaya Cloudflare, kajaba yen sampeyan nggunakake paket enterprise utawa ngatur mode dadi DNS wae ing sing kasus kuwi kabeh *caching* lan optimasi bakal dihindari.

Ultimate Multisite sing wis siap langsung (out-of-the-box) menehi solusi kanggo masalah iki kanthi nuduhake pengalaman akeh kita karo kebutuhan WordPress multisite. Aktifake add-on sederhana iki bakal nggawe Ultimate Multisite nggunakake kredensial Cloudflare sampeyan kanggo otomatis nambah entri DNS kanggo situs jaringan ing Cloudflare lan ngatur mode dadi ‘proxied’. Kanthi cara iki, saben subsite jaringan, nalika digawe, bakal duwe perlindungan lan manfaat lengkap saka Cloudflare kalebu SSL.

Kanthi gumantung marang sifat lan tujuan instalasi Ultimate Multisite sampeyan, mungkin ana kebutuhan kanggo pelanggan nggunakake domain dhewe. Ing kasus kuwi, administrator jaringan ditugasi ngrampungake rong masalah. Salah siji, ng-hosting nama domain lan loro, sertifikat SSL kanggo domain kasebut.

Kanggo akeh wong gampang nggunakake Cloudflare. Pelanggan mung perlu ngletakake domainé ing Cloudflare, nunjukake CNAME menyang root domain Ultimate Multisite lan mapake domainé ing Ultimate Multisite kanggo miwiti manfaati nama domain kustomé.

Luar saka iku, solusi alternatif kudu dicari yaiku kenapa Ultimate Multisite rekomendasi daftar Penyedia Kompatibel (Compatible Providers). Iki mergo proses ngatur DNS lan SSL bisa dadi proses sing ora gampang. Nanging, kanthi integrasi Ultimate Multisite karo penyedia-penyedi iki, kerumitané ilang banget lan proseduré otomatis.

#### Plugins {#plugins-1}

Cukup wae kemungkinan sampeyan bakal butuh plugin tambahan kanggo menehi fungsi marang pelanggan utawa situs jaringan. Apa kabeh plugin bisa kerja karo WordPress Multisite lan Ultimate Multisite? Nah, kuwi gumantung.

Sanajan sebagian besar plugin bisa dipasang ing WordPress Multisite, aktivasi lan lisensine beda-beda saka penulis menyang penulis.

Tantangane yaiku carane lisensi diterapkan kanggo sawetara plugin sing mbutuh lisensi per domain. Iki tegese yen kanggo sawetara plugin, administrator jaringan kudu ngaktifake lisensi manual kanggo saben plugin ing saben situs anyar.

Dadi, luwih becik kanggo nggendheng karo penulis plugin babagan kepiye cara pluginé bakal kerja karo WordPress Multisite lan syarat utawa prosedur khusus sing dibutuhake kanggo lisensine.
