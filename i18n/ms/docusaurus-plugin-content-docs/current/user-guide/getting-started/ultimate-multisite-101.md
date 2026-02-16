---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Asas Ultimate Multisite 101

Ultimate Multisite ialah plugin WordPress Multisite yang membolehkan anda menawarkan WaaS atau Laman Web sebagai Perkhidmatan kepada pelanggan. Sebelum kita mendalami dan mempelajari bagaimana Ultimate Multisite boleh membantu perniagaan dan pelanggan anda, terdapat beberapa pengetahuan asas yang perlu kita fahami terlebih dahulu.

## WordPress Multisite

Kebanyakan daripada kita sudah biasa dengan pemasangan WordPress standard. Anda boleh menciptanya melalui panel kawalan penyedia hosting anda atau, bagi yang lebih berani, menyediakan pelayan web dan pangkalan data baharu, memuat turun fail teras dan memulakan proses pemasangan.

Kaedah ini berfungsi untuk berjuta-juta laman WordPress di seluruh dunia tetapi dari perspektif agensi atau penyedia hosting, mari kita bincangkan tentang skala besar seketika.

Walaupun mudah untuk mencipta satu laman WordPress atau bahkan seratus melalui panel kawalan automatik, masalah mula timbul apabila melibatkan pengurusan laman-laman ini. Jika tidak diurus dengan baik, anda menjadi sasaran utama perisian hasad. Mengurus bermakna usaha dan sumber yang diperlukan dan walaupun terdapat alat luaran dan plugin untuk membantu memperkemaskan pengurusan dan pentadbiran laman WordPress, hakikat bahawa pelanggan mengekalkan akses pentadbiran bermakna usaha ini mudah digagalkan.

Dalam terasnya, WordPress menyediakan ciri yang dipanggil 'Multisite' yang bermula sejak 2010 semasa pelancaran WordPress 3.0. Sejak itu ia telah menerima beberapa penambahbaikan yang bertujuan memperkenalkan ciri baharu dan memperketatkan keselamatan.

Secara ringkas, WordPress multisite boleh difikirkan seperti ini: Sebuah Universiti mengekalkan satu pemasangan WordPress tetapi setiap fakulti mengekalkan laman WordPress mereka sendiri.

Untuk memahami kenyataan ini dengan lebih jelas, mari kita lihat beberapa istilah asas yang terdapat bukan sahaja dalam dokumentasi Ultimate Multisite tetapi juga di seluruh komuniti WordPress.

### Rangkaian

Dari segi WordPress, rangkaian multisite ialah di mana beberapa sublaman boleh diurus dari satu dashboard. Walaupun cara mencipta rangkaian multisite berbeza antara penyedia hosting, hasil akhirnya biasanya beberapa arahan tambahan dalam fail wp-config.php untuk memberitahu WordPress bahawa ia beroperasi dalam mod khusus ini.

Terdapat beberapa perbezaan yang ketara antara rangkaian multisite dan pemasangan WordPress bersendirian yang akan kita bincangkan secara ringkas.

#### Subdomain vs. Subdirektori

Salah satu keputusan paling segera yang perlu anda buat ialah sama ada pemasangan multisite akan beroperasi dengan _subdirektori_ atau _subdomain_. Ultimate Multisite berfungsi sama baik dengan kedua-dua pilihan tetapi terdapat beberapa perbezaan seni bina antara kedua-dua konfigurasi.

Dalam konfigurasi _subdirektori_, laman rangkaian mewarisi laluan berdasarkan nama domain utama. Contohnya laman rangkaian berlabel 'site1' akan mempunyai URL penuh sebagai https://domain.com/site1. Dalam konfigurasi _subdomain_, laman rangkaian akan mempunyai _subdomain_ sendiri yang diperoleh daripada nama domain utama. Oleh itu laman berlabel 'site1' akan mempunyai URL penuh sebagai https://site1.domain.com/.

Walaupun kedua-dua pilihan adalah sah, penggunaan _subdomain_ menawarkan beberapa kelebihan tetapi juga memerlukan lebih banyak pertimbangan dan perancangan dalam seni binanya.

Dari segi DNS, penggunaan _subdirektori_ memberikan cabaran yang agak mudah. Oleh kerana laman rangkaian hanyalah anak kepada laluan induk, hanya satu entri nama domain perlu wujud untuk nama domain utama. Untuk _subdomain_, cabarannya lebih kompleks yang memerlukan sama ada entri CNAME berasingan untuk setiap laman rangkaian atau entri wildcard (*) dalam rekod DNS.

Satu lagi aspek yang perlu dipertimbangkan ialah SSL dan pengeluaran serta penggunaan sijil SSL. Dalam konfigurasi _subdirektori_, satu sijil domain boleh digunakan kerana laman rangkaian hanyalah laluan nama domain utama. Oleh itu sijil untuk domain.com akan menyediakan SSL dengan secukupnya untuk https://domain.com/site1, https://domain.com/site2 dan seterusnya.

Dalam konfigurasi _subdomain_, penggunaan sijil SSL wildcard adalah salah satu pilihan paling biasa. Jenis sijil SSL ini menyediakan penyulitan untuk domain dan _subdomain_-nya. Oleh itu sijil SSL wildcard akan menyediakan penyulitan untuk https://site1.domain.com, https://site2.domain.com dan https://domain.com itu sendiri.

Walaupun pilihan lain wujud, ia sering terhad dalam skop dan aplikasi serta memerlukan konfigurasi dan pertimbangan tambahan berkenaan kesesuaian.

#### Plugin dan Tema

Apa yang WordPress berikan, ia juga mengambil balik, sekurang-kurangnya dari perspektif pelanggan. Dalam pemasangan WordPress bersendirian, jika pentadbir laman memasang plugin yang buruk atau gagal mengekalkan pemasangan mereka dikemas kini, satu-satunya mangsa adalah diri mereka sendiri. Walau bagaimanapun, pentadbir laman yang memasang plugin buruk pada pemasangan multisite menjadikan setiap laman dalam rangkaian sebagai mangsa.

Atas sebab ini apabila dikonfigurasikan sebagai multisite, WordPress membuang keupayaan pentadbir laman untuk memasang plugin dan tema dan sebaliknya memindahkan keupayaan ini kepada pentadbir rangkaian atau peranan 'super admin' yang baru dicipta. Peranan istimewa ini kemudian boleh memutuskan sama ada membenarkan pentadbir laman rangkaian melihat atau mengakses menu plugin dalam dashboard mereka dan, jika ya, sama ada kebenaran tersebut meliputi _mengaktifkan_ atau _menyahaktifkan_ plugin.

Setakat ini pentadbir rangkaian bertanggungjawab memasang plugin dan tema ke dalam rangkaian dan mewakilkan kebenaran untuk menggunakan plugin dan tema ini kepada laman rangkaian. Pentadbir laman tidak boleh memasang plugin dan tema atau mengakses plugin dan tema yang tidak ditugaskan kepada laman mereka.

#### Pengguna dan Pentadbir

Dalam WordPress Multisite, semua laman rangkaian berkongsi pangkalan data yang sama dan oleh itu berkongsi pengguna, peranan dan keupayaan yang sama. Cara paling tepat untuk memikirkannya ialah semua pengguna adalah ahli rangkaian dan bukan laman tertentu.

Dengan pemahaman ini, mungkin tidak wajar membenarkan pengguna dicipta dan atas sebab ini WordPress Multisite membuang keupayaan ini daripada pentadbir laman dan memindahkan keupayaan ini kepada pentadbir rangkaian. Seterusnya pentadbir rangkaian boleh mewakilkan keistimewaan yang diperlukan kepada pentadbir laman untuk membolehkan mereka mencipta akaun pengguna untuk laman mereka sendiri.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Mengulangi kenyataan di atas, walaupun akaun pengguna kelihatan berkaitan dengan laman tersebut, ia sebenarnya diperuntukkan kepada rangkaian dan oleh itu mesti unik di seluruh rangkaian. Mungkin terdapat keadaan di mana nama pengguna tidak dapat didaftarkan atas sebab ini.

Walaupun bukan konsep asing dalam sistem perusahaan, sumber tunggal pendaftaran dan pengesahan pengguna ini sering menjadi konsep yang sukar difahami bagi mereka yang biasa dengan pemasangan WordPress bersendirian di mana pentadbiran pengguna agak lebih mudah.

#### Media

Di mana laman rangkaian berkongsi pangkalan data tunggal dalam WordPress Multisite, mereka mengekalkan laluan berasingan pada sistem fail untuk fail media.

Lokasi WordPress standard (wp-content/uploads) kekal; walau bagaimanapun, laluannya diubah untuk mencerminkan ID unik laman rangkaian. Oleh itu fail media untuk laman rangkaian muncul sebagai wp-contents/uploads/site/[id].

#### Permalink

Kami menyebut sebelum ini bahawa terdapat kelebihan ketara _subdomain_ berbanding konfigurasi _subdirektori_ dan ini dia: laluan.

Dalam konfigurasi _subdirektori_, laman utama (laman pertama yang dicipta apabila rangkaian ditubuhkan) dan sublaman rangkaian mesti berkongsi laluan yang sama bermula dari nama domain. Ini berpotensi menyebabkan banyak konflik.

Untuk catatan, laluan /blog/ wajib ditambah pada laman utama untuk mengelakkan pertembungan dengan laman rangkaian. Ini bermakna permalink cantik seperti 'Nama Catatan' akan dipersembahkan sebagai domain.name/blog/post-name/

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Dalam konfigurasi _subdomain_, tindakan ini tidak diperlukan kerana setiap laman rangkaian mendapat manfaat daripada pemisahan domain sepenuhnya dan oleh itu tidak perlu bergantung pada laluan tunggal. Mereka sebaliknya mengekalkan laluan tersendiri berdasarkan _subdomain_ mereka.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Halaman Statik

Dalam konfigurasi _subdirektori_, potensi konflik penamaan meluas kepada halaman statik kerana laman utama dan laman rangkaian berkongsi laluan yang sama.

Untuk mengelakkan ini, WordPress menyediakan cara untuk menyenaraihitamkan nama laman tertentu supaya ia tidak bercanggah dengan nama laman pertama. Biasanya pentadbir rangkaian akan memasukkan laluan akar halaman laman utama.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

Dalam konfigurasi _subdomain_, kemungkinan konflik penamaan dikurangkan oleh _subdomain_ kerana ia unik kepada laman rangkaian dan tidak berkaitan dalam apa jua cara dengan laman utama.

### Pendaftaran

Dalam tetapan rangkaian WordPress Multisite, beberapa pilihan pendaftaran pengguna baharu tersedia, membolehkan pengguna baharu dan sedia ada mencipta laman.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Berbanding pemasangan WordPress bersendirian, laman rangkaian tidak mengekalkan pilihan biasa untuk membenarkan pendaftaran pengguna atau menugaskan pendaftaran tersebut kepada peranan.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Apabila akaun pengguna dicipta, akaun tersebut dijana di peringkat rangkaian. Oleh itu, bukannya milik mana-mana satu laman tertentu, ia sebaliknya milik rangkaian. Ini mempunyai beberapa kelebihan dan kelemahan yang ketara.

Sebagai contoh, andaikan WordPress Multisite anda adalah dalam perniagaan berita dan maklumat. Anda akan menubuhkan multisite dan kemudian mencipta laman rangkaian untuk kewangan, teknologi, hiburan dan bidang minat lain sambil mengekalkan kawalan keseluruhan plugin dan tema. Setiap laman rangkaian seterusnya akan mempunyai tahap kawalan yang jauh lebih besar ke atas rupa dan rasa serta pengalaman pengguna laman rangkaian mereka berbanding jenis catatan tersuai atau kategori catatan biasa.

Setakat ini apabila pengguna log masuk, mereka log masuk ke rangkaian dan akhirnya log masuk ke setiap laman rangkaian juga untuk menyediakan pengalaman yang lancar. Jika laman baharu anda berasaskan langganan, ini akan menjadi penyelesaian dan hasil yang ideal.

Walau bagaimanapun, jika sifat dan tujuan multisite yang dimaksudkan adalah untuk menawarkan laman rangkaian yang berbeza-beza yang tidak mempunyai hubungan antara satu sama lain, hampir selalu plugin luaran atau tambahan diperlukan untuk memanipulasi peranan pengguna.

### Domain dan SSL

Mari bercakap tentang pemasangan WordPress Multisite yang hampir terlepas pandang kita - Wordpress.com. Ini adalah contoh paling meluas WordPress multisite dan menunjukkan keupayaannya yang luas untuk disesuaikan dan dibentuk untuk memenuhi tujuan.

Pada hari ini di internet moden, penggunaan SSL hampir wajib dan pentadbir rangkaian WordPress multisite tidak lama kemudian akan berhadapan dengan cabaran ini.

Dalam konfigurasi _subdomain_, laman dicipta berdasarkan nama domain akar. Oleh itu laman berlabel 'site1' akan dicipta sebagai 'site1.domain.com'. Dengan menggunakan sijil SSL wildcard, pentadbir rangkaian boleh berjaya menangani cabaran ini dan menyediakan keupayaan penyulitan SSL untuk rangkaian.

WordPress Multisite mengandungi fungsi pemetaan domain yang membolehkan laman rangkaian dikaitkan dengan nama domain tersuai atau nama domain yang berbeza daripada domain akar rangkaian.

Bagi pentadbir rangkaian, ini memberikan lapisan kerumitan tambahan dalam konfigurasi nama domain serta pengeluaran dan penyelenggaraan sijil SSL.

Setakat ini walaupun WordPress Multisite menyediakan cara untuk membolehkan [www.anotherdomain.com](http://www.anotherdomain.com) dipetakan kepada 'site1', pentadbir rangkaian dibiarkan dengan cabaran mengurus entri DNS secara luaran dan pelaksanaan sijil SSL.

## Ultimate Multisite

Dengan pemahaman perbezaan antara pemasangan WordPress bersendirian dan pemasangan Multisite, mari kita lihat bagaimana Ultimate Multisite adalah senjata utama untuk menyediakan Laman Web sebagai Perkhidmatan.

### Pengenalan

Ultimate Multisite adalah pisau Swiss Army anda apabila melibatkan penciptaan Laman Web sebagai Perkhidmatan (WaaS). Fikirkan Wix.com, Squarespace, WordPress.com dan kemudian fikirkan memiliki perkhidmatan anda sendiri.

Di sebalik tabir, Ultimate Multisite menggunakan WordPress Multisite tetapi ia berbuat demikian dengan cara yang bukan sahaja menyelesaikan pelbagai cabaran yang dihadapi pentadbir rangkaian dengan pemasangan multisite tetapi meningkatkan keupayaan membolehkan pelbagai kes penggunaan disokong.

Dalam bahagian berikut kita akan melihat beberapa kes penggunaan biasa dan pertimbangan yang diperlukan untuk menyokong kes-kes tersebut.

### Kes Penggunaan

#### Kes 1: Sebuah Agensi

Biasanya kemahiran teras sebuah agensi terletak pada reka bentuk laman web dengan aspek seperti hosting atau pemasaran disenaraikan sebagai perkhidmatan tambahan.

Untuk agensi, Ultimate Multisite memberikan cadangan nilai yang luar biasa dalam keupayaannya untuk mengehoskan dan mengurus pelbagai laman web pada satu platform. Lebih-lebih lagi untuk agensi yang menyeragamkan reka bentuk mereka pada tema tertentu seperti GeneratePress, Astra, OceanWP atau lain-lain boleh memanfaatkan keupayaan Ultimate Multisite untuk mengaktifkan tema ini secara automatik untuk setiap laman baharu.

Begitu juga dengan banyaknya tawaran harga agensi untuk plugin biasa dan popular, penggunaan Ultimate Multisite membolehkan agensi memanfaatkan pelaburan sedia ada dengan menyediakan platform bersama dari mana plugin boleh dipasang, diselenggara dan digunakan.

Kemungkinan besar penggunaan konfigurasi domain tersuai akan dikehendaki dan bernasib baik Ultimate Multisite menjadikannya sangat mudah untuk memudahkan pemetaan domain dan sijil SSL dengan integrasinya untuk beberapa penyedia hosting popular serta perkhidmatan seperti Cloudflare dan cPanel.

Oleh itu dengan memanfaatkan salah satu penyedia ini atau dengan meletakkan Ultimate Multisite di belakang Cloudflare, aspek seperti pengurusan domain dan sijil SSL menjadi agak mudah.

Agensi yang lebih suka mengekalkan kawalan ketat ke atas penciptaan laman akan menghargai kemudahan di mana mereka boleh mencipta laman dan mengaitkan laman dengan pelanggan dan pelan melalui antara muka Ultimate Multisite yang diperkemas.

![Antara muka pengurusan laman Ultimate Multisite](/img/admin/sites-list.png)

Kawalan ketat ke atas plugin dan tema dikekalkan secara per-produk melalui antara muka intuitif Ultimate Multisite yang membolehkan plugin dan tema disediakan atau disembunyikan serta keadaan pengaktifan mereka apabila dimulakan untuk laman baharu.

![Antara muka pengehadan plugin produk](/img/config/product-plugins.png)

Tema menyediakan fungsi yang serupa, membolehkan tema tertentu diaktifkan atau disembunyikan semasa penciptaan laman.

![Antara muka pengehadan tema produk](/img/config/product-themes.png)

Agensi akan mendapat ketenangan fikiran dengan Ultimate Multisite yang membolehkan mereka melakukan apa yang mereka lakukan dengan terbaik - mereka bentuk laman web yang luar biasa.

#### Kes 2: Penyedia Niche

Ada pepatah lama yang mengatakan, "lakukan satu perkara dan lakukan dengan baik". Bagi ramai pakar ini bermakna mencipta produk atau perkhidmatan berdasarkan satu idea teras tunggal.

Mungkin anda seorang peminat golf yang mempromosikan laman web kepada kelab atau anda mungkin seorang pemain esports yang menyediakan laman web kepada klan. Seorang individu yang mempromosikan perkhidmatan tempahan kepada restoran mungkin?

Atas banyak sebab anda ingin menyediakan perkhidmatan berdasarkan rangka kerja dan platform yang sama. Mungkin anda telah mereka bentuk atau melabur dalam plugin khas untuk menyediakan fungsi yang diperlukan atau mungkin amalan terbaik industri memerlukan beberapa bentuk pendekatan yang diseragamkan untuk reka bentuk.

Salah satu ciri inovatif Ultimate Multisite ialah penggunaan laman templat. Laman templat ialah di mana tema telah dipasang dan diaktifkan, plugin yang diperlukan dipasang dan diaktifkan serta catatan atau halaman sampel dicipta. Apabila pelanggan mencipta laman baharu berdasarkan templat, kandungan dan tetapan templat disalin ke laman yang baru dicipta.

Untuk penyedia laman dan perkhidmatan niche, ini memberikan kelebihan tiada tandingan dalam keupayaan untuk mencipta laman serta-merta yang sedia digunakan dengan plugin dan reka bentuk tersuai. Pelanggan hanya perlu memberikan input yang paling minimum untuk melengkapkan perkhidmatan.

Bergantung pada keperluan, kedua-dua konfigurasi _subdirektori_ atau _subdomain_ mungkin sesuai, dalam kes ini pilihan seni bina adalah antara sijil SSL mudah untuk _subdirektori_ atau sijil SSL wildcard untuk _subdomain_.

#### Kes 3: Hosting Web WordPress

Terdapat pelbagai cara untuk mengehoskan laman WordPress tetapi jarang ia semudah menyediakan ruang web kepada pelanggan dengan versi WordPress yang diprapasang. Ini kerana beberapa keputusan dan pertimbangan perlu digabungkan untuk menyediakan perkhidmatan yang bermakna.

Ultimate Multisite cemerlang dalam bidang ini dengan menyediakan penyelesaian turnkey yang komprehensif untuk mengehoskan laman WordPress. Termasuk dalam penyelesaian adalah mekanisme teras untuk menyediakan perkhidmatan langganan, kutipan pembayaran, borang checkout, baucar diskaun dan komunikasi pelanggan.

Kebanyakan kerja penting yang diperlukan untuk memasang, mengkonfigurasi dan menyelenggara WordPress Multisite dengan betul dipermudahkan oleh Ultimate Multisite setakat pentadbir rangkaian hanya perlu mempertimbangkan aspek yang berkaitan dengan perkhidmatan atau niche mereka seperti peringkat produk, harga dan tawaran perkhidmatan.

Untuk pembangun yang ingin mengintegrasikan dengan Ultimate Multisite, penyelesaian ini juga menawarkan API RESTful yang komprehensif dan Webhook untuk pemberitahuan peristiwa.

Tanpa bergantung pada pelbagai plugin dan lesen luaran, Ultimate Multisite menyediakan penyelesaian yang kaya dengan ciri dan setanding dengan Wix, Squarespace, WordPress.com dan lain-lain.

### Pertimbangan Seni Bina

Walaupun bukan panduan yang komprehensif, item berikut harus berfungsi sebagai panduan untuk pemilihan teknologi yang betul bagi menyokong pemasangan Ultimate Multisite.

#### Hosting Dikongsi vs. Hosting Khusus

Malangnya tidak semua penyedia hosting adalah sama dan sesetengahnya mengamalkan kepadatan pelayan yang melampau. Penyedia kos rendah biasanya menjana pendapatan dengan memaksimumkan kepadatan pelayan. Oleh itu pemasangan Ultimate Multisite anda mungkin hanya satu daripada beberapa ratus laman pada pelayan yang sama.

Tanpa perlindungan yang sewajarnya daripada penyedia, laman pada pelayan dikongsi mengalami masalah 'jiran yang bising'. Iaitu, laman pada pelayan yang sama menggunakan sumber yang terlalu banyak sehingga laman lain terpaksa bersaing untuk sumber yang tinggal. Sering kali ini muncul sebagai laman yang lambat atau gagal memberi respons tepat pada masanya.

Sebagai penyedia hosting web sendiri, kesan lanjutan bermakna pelanggan anda mengalami kelajuan yang lemah, kedudukan halaman yang rendah dan kadar lantunan yang tinggi yang sering mengakibatkan pelanggan berhenti kerana mereka mencari perkhidmatan di tempat lain.

Ringkasnya, murah tidak bermakna bagus.

Ultimate Multisite diketahui berfungsi dengan beberapa penyedia hosting yang baik dan berintegrasi dengan baik dengan persekitaran mereka untuk menyediakan fungsi seperti pemetaan domain dan SSL automatik. Penyedia ini menghargai prestasi dan menyediakan perkhidmatan yang lebih berkualiti berbanding hosting dikongsi.

Untuk senarai penyedia yang serasi dan arahan persediaan lengkap untuk setiap satu, sila semak dokumentasi Penyedia Serasi.

#### Pertimbangan Prestasi

Ultimate Multisite bukan aplikasi yang lambat, malah, ia sangat pantas. Walau bagaimanapun, ia hanya berprestasi sebaik aplikasi dan infrastruktur asas dan hanya boleh memanfaatkan apa yang ia mempunyai akses.

Pertimbangkan ini: Anda adalah pentadbir rangkaian pemasangan Ultimate Multisite dengan 100 laman. Sesetengah laman itu berjaya dan menarik beberapa pelawat laman web setiap hari.

Senario ini akan berbeza pada skala yang lebih kecil katakan satu hingga lima laman tetapi tidak lama kemudian masalah skala akan menjadi jelas.

Jika tidak diuruskan, laman Ultimate Multisite tunggal akan bertanggungjawab untuk memenuhi permintaan semua pelawat ke laman-laman tersebut. Permintaan ini boleh untuk halaman PHP dinamik atau aset statik seperti stylesheet, javascript atau fail media. Sama ada satu atau seratus laman, tugas-tugas ini menjadi berulang, membosankan dan membazir. Adalah tidak perlu menggunakan kuasa CPU dan memori untuk memproses fail PHP apabila outputnya adalah maklumat statik yang sama untuk setiap permintaan.

Begitu juga satu permintaan untuk halaman PHP atau HTML seterusnya menjana berbilang permintaan susulan untuk skrip, stylesheet dan fail imej. Permintaan tersebut disasarkan terus ke pelayan Ultimate Multisite anda.

Seseorang boleh dengan mudah menyelesaikan masalah ini dengan menaik taraf pelayan tetapi ia tidak menyelesaikan masalah kedua - latensi geografi. Hanya berbilang pelayan di berbilang lokasi boleh menangani masalah ini dengan betul.

Atas sebab ini kebanyakan pentadbir rangkaian menggunakan penyelesaian caching bahagian hadapan dan rangkaian pengedaran kandungan (CDN) untuk memenuhi permintaan halaman statik. Memenuhi permintaan ini dan menyajikan aset sebelum permintaan sampai ke pelayan menjimatkan sumber pemprosesan, menghapuskan kelewatan, mengelakkan naik taraf yang tidak perlu dan memaksimumkan pelaburan teknologi.

Ultimate Multisite termasuk add-on Cloudflare yang canggih yang membolehkan pentadbir rangkaian meletakkan pemasangan mereka di belakang Cloudflare dan menggunakan bukan sahaja keupayaan cachingnya tetapi juga hosting DNS, sijil SSL dan mekanisme keselamatan.

#### Sandaran

Seseorang boleh bertanya kepada 50 orang untuk nasihat tentang sandaran dan menerima 50 pendapat berbeza mengenai strategi sandaran. Jawapannya ialah, ia bergantung.

Apa yang tidak dipertikaikan ialah sandaran diperlukan dan hampir tidak dapat dibayangkan ia tidak diurus oleh penyedia, khususnya yang menawarkan perkhidmatan terurus. Oleh itu pelanggan akan mencari pentadbir rangkaian untuk menyediakan dan mengurus perkhidmatan ini. Siapa yang pentadbir rangkaian cari adalah masalah yang sama sekali berbeza.

Untuk tujuan bahagian ini mari kita bersetuju bahawa sandaran adalah salinan titik-masa keadaan sistem pada masa sandaran dimulakan. Secara ringkas, apa jua keadaan sistem pada masa sandaran, keadaan itu ditangkap dan disimpan dalam sandaran.

Dengan pemahaman ini, jawapan tentang bagaimana untuk mencapai sandaran dan apa yang terbaik untuk persekitaran anda sebahagian besarnya bergantung pada keperluan anda dan keupayaan penyedia hosting untuk memenuhi keperluan tersebut. Walau bagaimanapun, dalam susunan dari paling berpendapat hingga paling kurang berpendapat, pilihan di bawah harus memberikan beberapa panduan.

#### Snapshot

Snapshot adalah peluru perak untuk sandaran kerana ia mudah, tidak rumit (sehingga anda mahu memulihkan) dan 'berfungsi sahaja'. Ia memerlukan sedikit bantuan daripada penyedia anda dan kebanyakannya hanya terpakai jika anda mempunyai VPS (Pelayan Peribadi Maya) atau yang serupa. Beberapa penyedia yang disenaraikan dalam dokumentasi 'Penyedia Serasi' kami menawarkan sandaran yang tidak memerlukan campur tangan atau pertimbangan lanjut oleh pentadbir rangkaian.

Di mana sandaran tradisional menyasarkan fail dan pangkalan data, snapshot menyasarkan keseluruhan cakera. Ini bermakna bukan sahaja data laman ditangkap dalam snapshot tetapi sistem operasi dan konfigurasi juga. Bagi ramai orang ini adalah kelebihan yang ketara kerana sistem baharu boleh dimulakan hampir serta-merta daripada snapshot dan dibawa beroperasi untuk menggantikan instance yang bermasalah. Begitu juga, proses pemulihan untuk mengambil fail hanya memerlukan melampirkan imej snapshot sebagai cakera ke instance sedia ada supaya fail boleh diakses dan disalin.

Snapshot mungkin menarik kos tambahan dengan penyedia hosting tetapi ia adalah polisi insurans terhadap kemalangan.

#### Skrip Luaran

Nampaknya tiada kekurangan skrip dan penyelesaian luaran untuk membuat sandaran sumber WordPress dan MySQL dan ini akan berfungsi dengan baik untuk Ultimate Multisite kerana ia adalah plugin WordPress yang menggunakan sistem fail dan pangkalan data WordPress. Oleh itu penyelesaian yang membuat sandaran laman WordPress akan memenuhi keperluan Ultimate Multisite dengan secukupnya.

Kami tidak boleh mengesyorkan mana-mana satu skrip berbanding yang lain tetapi nasihat umum kami adalah untuk menjalankan beberapa ujian sandaran dan pemulihan untuk memastikan keputusan adalah seperti yang dikehendaki dan untuk 'pastikan dengan pasti' dengan terus menilai skrip dan fungsinya khususnya di mana beberapa bentuk strategi sandaran pembezaan digunakan.

Perlu diingat skrip ini, semasa berjalan, akan meningkatkan beban sistem yang harus diambil kira.

#### Plugin

Hampir tiada masalah dalam WordPress yang tidak boleh diselesaikan dengan plugin dan jika mengurus skrip luaran bukan secawan kopi anda maka mungkin plugin adalah pilihan terbaik seterusnya.

Walaupun plugin berbeza dalam pilihan dan ciri, mereka kebanyakannya melakukan fungsi yang sama iaitu membuat salinan fail WordPress dan kandungan pangkalan data. Selepas itu fungsi berbeza kerana sesetengah plugin boleh menghantar sandaran ke perkhidmatan luaran seperti Google Drive atau Dropbox atau ke beberapa jenis perkhidmatan storan objek yang serasi seperti S3, Wasabi atau lain-lain. Plugin yang lebih komprehensif menyediakan sandaran pembezaan atau beberapa jenis strategi untuk membuat sandaran hanya data yang telah berubah untuk menjimatkan kos storan luaran.

Dalam memilih plugin anda, pastikan untuk mengesahkan bahawa ia sedar multisite. Disebabkan sifat operasinya semasa sandaran berjalan, anda boleh menjangkakan beban sementara pada pelayan sehingga proses selesai.

#### Domain dan SSL

Banyak yang telah dibincangkan mengenai nama domain dalam mod _subdomain_ multisite. Penyelesaian yang hampir universal untuk pentadbir rangkaian adalah menggunakan entri DNS wildcard.

![Contoh konfigurasi entri DNS wildcard](/img/config/settings-domain-mapping.png)

Jenis entri DNS ini akan berjaya menyelesaikan _subdomain_ seperti 'site1.domain.com' dan 'site2.domain.com' ke alamat IP 1.2.3.4 dan dengan itu menyokong Ultimate Multisite dan setakat yang lebih besar WordPress Multisite menggunakan mod _subdomain_.

Ini mungkin berfungsi dengan sempurna untuk HTTP kerana hos sasaran dibaca daripada header HTTP tetapi jarang web begitu mudah pada hari ini di mana transaksi HTTPS selamat hampir wajib.

Nasib baik terdapat pilihan mudah untuk sijil SSL. Dalam mod _subdirektori_, sijil domain biasa boleh digunakan. Ini tersedia dengan mudah dan percuma daripada penyedia hosting yang mungkin menggunakan perkhidmatan LetsEncrypt percuma atau sumber lain. Jika tidak, ini tersedia secara komersial daripada pihak berkuasa jika anda mampu menjana permintaan penandatanganan sijil.

Untuk mod _subdomain_, penggunaan sijil SSL wildcard akan berpasangan dengan sempurna dengan domain wildcard dan membolehkan sijil menjadi autoritatif untuk domain akar dan semua _subdomain_ tanpa konfigurasi berlebihan.

Walau bagaimanapun, perlu diingat bahawa sijil SSL wildcard mungkin tidak berfungsi dengan perkhidmatan seperti Cloudflare melainkan anda berada pada pelan perusahaan atau menetapkan entri kepada DNS sahaja di mana semua caching dan pengoptimuman dipintas.

Secara lalai, Ultimate Multisite menyediakan penyelesaian kepada masalah ini yang menunjukkan pengalaman meluas kami dengan keperluan WordPress multisite. Mengaktifkan add-on mudah ini akan menjadikan Ultimate Multisite menggunakan kelayakan Cloudflare anda untuk menambah entri DNS secara automatik untuk laman rangkaian dalam Cloudflare dan menetapkan mod mereka kepada 'proxied'. Dengan cara ini setiap sublaman rangkaian, apabila dicipta, akan mempunyai perlindungan dan manfaat penuh Cloudflare termasuk SSL.

Bergantung pada sifat dan tujuan pemasangan Ultimate Multisite anda, mungkin ada keperluan untuk pelanggan menggunakan domain mereka sendiri. Dalam kes ini pentadbir rangkaian ditugaskan untuk menyelesaikan dua masalah. Satu, hosting nama domain dan dua, sijil SSL untuk domain.

Bagi ramai orang, penggunaan Cloudflare adalah pilihan mudah. Pelanggan hanya perlu meletakkan domain mereka pada Cloudflare, menghala CNAME ke domain akar Ultimate Multisite dan memetakan domain mereka dalam Ultimate Multisite untuk mula mengambil kesempatan daripada nama domain tersuai mereka.

Di luar ini, penyelesaian alternatif perlu dicari itulah sebabnya Ultimate Multisite mengesyorkan senarai Penyedia Serasi. Ini kerana proses menyediakan DNS dan SSL boleh menjadi proses yang tidak remeh. Walau bagaimanapun, dengan integrasi Ultimate Multisite dengan penyedia-penyedia ini, kerumitan banyak dibuang dan prosedur diautomasikan.

#### Plugin

Kemungkinan besar anda memerlukan plugin tambahan untuk menyediakan fungsi kepada pelanggan atau laman rangkaian anda. Adakah semua plugin berfungsi dengan WordPress Multisite dan Ultimate Multisite? Nah, ia bergantung.

Walaupun kebanyakan plugin boleh dipasang dalam WordPress Multisite, pengaktifan dan pelesenan mereka berbeza dari pengarang ke pengarang.

Cabarannya terletak pada bagaimana pelesenan digunakan dengan sesetengah plugin memerlukan pelesenan secara per-domain. Ini bermakna untuk sesetengah plugin pentadbir rangkaian perlu mengaktifkan lesen secara manual untuk setiap plugin pada setiap laman baharu.

Oleh itu mungkin terbaik untuk menyemak dengan pengarang plugin tentang bagaimana plugin mereka akan berfungsi dengan WordPress Multisite dan sebarang keperluan atau prosedur khas yang diperlukan untuk melesenkannya.
