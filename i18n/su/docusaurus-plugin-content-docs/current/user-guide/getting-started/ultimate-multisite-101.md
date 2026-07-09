---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

Ultimate Multisite téh teh plugin WordPress Multisite anu ngajanin anjeun pikeun nawarke WaaS atawa Website as a Service ka pelanggan. Saméméh urang dugi ka diajar kumaha Ultimate Multisite bisa ngabantosan bisnis je pelanggan di dinya, aya sababaraha pangaweruh dasar anu kudu urang piboga.

## WordPress Multisite {#the-wordpress-multisite}

Paling loba ti urang mah kenal instalasi WordPress standar. Anjeun bisa nyiptake éta téh lewat control panel penyedia hosting anjeun atawa, pikeun nu wani, ngatur server web je database anyar, ngunduh file inti je mimiti proses instalasi.

Ieu bisa dipaké ku jutaan situs WordPress di sakuliah dunya tapi tina sudut pandang agensi atawa penyedia hosting mah urang ngobrolkeun volume sababaraha menit.

Sanajan éta gampang pikeun nyiptake hiji situs WordPress atawa nepi ka saatusna ratus lewat control panel otomatis, masalah bakal mimiti muncul lamun jadi tanggung jawab ngatur situs-situs éta. Lamun teu diatur, anjeun jadi sasaran utama malware. Ngatur téh hartina usaha je sumber daya, sarta sanajan aya alat je plugin luar anu bisa ngabantosan ngahampuraan je administrasi situs WordPress, fakta yén pelanggan tetep boga akses administratif hartina usaha éta gampang pisan dikalahkeun.

Di jero intiana, WordPress nyadiake fitur anu ngan ukur disebut ‘Multisite’ anu asalna ti tahun 2010 nalika peluncuran WordPress 3.0. Ti dinya nepi ka ayeuna geus aya sababaraha revisi anu tujuanna ngajangkeun fitur anyar je nguatkeun keamanan.

Intina, WordPress multisite bisa dipikir saperti kieu: Universitas ngajaga hiji instalasi WordPress tapi unggal fakultas ngajaga situs WordPressna sorangan.

Hayu urangkeun katerangan ieu ku cara ngulik sababaraha istilah dasar anu aya di Ultimate Multisite ogé dina dokumentasi WordPress.

### Jaringan (The Network) {#the-network}

Dina konteks WordPress, jaringan multisite téh nyaéta tempat di mana sababaraha subsite bisa dikelola tina hiji dashboard tunggal. Sanajan cara nyiptake jaringan multisite béda antara penyedia hosting, hasil akhirunana biasana ngan ukur aya sababaraha arahan tambahan dina file `wp-config.php` pikeun ngabéjaan WordPress yén éta keur ngoperasike mode anu spesifik ieu.

Ada sababaraha béda nu jelas antara jaringan multisite jeung instalasi WordPress tunggal (stand-alone) anu bakal urang bahas sacara singget.

#### Subdomain vs. Subdirectory {#subdomain-vs-subdirectory}

Salah sahiji keputusan pangpentingna anu kudu anjeun jieun nyaéta naha instalasi multisite téh bakal ngagunake _subdirectories_ atawa _subdomains_. Ultimate Multisite bisa maké duana, tapi aya sababaraha béda arsitektur antara dua konfigurasi éta.

Dina konfigurasi _subdirectory_, situs jaringan bakal ngarwariskeun path dumasar kana nama domain utama. Contona, situs jaringan anu disebut ‘site1’ bakal miboga URL lengkapna nyaéta `https://domain.com/site1`. Dina konfigurasi _subdomain_, situs jaringan bakal miboga _subdomain_ sorangan tina nama domain utama. Jadi, situs anu disebut ‘site1’ bakal miboga URL lengkapna nyaéta `https://site1.domain.com/`.

Sanajan duana pilihan anu sah pisan, pamaké _subdomains_ beneran ngabogaan sababaraha kauntungan tapi ogé butuh mikir je perencanaan arsitektur anu leuwih jero.

Soal DNS mah, soal pake _subdirectories_ mah tantangannya lumayan gampang. Soalnya situs jaringan itu intinya cuma anak dari path utama, jadi cukup satu nama domain aja yang perlu ada buat domain utamanya. Nah, buat _subdomains_, tantangannya rada ribet dikit, butuh entri CNAME terpisah buat setiap situs jaringan atau pake wildcard (*) di record DNS.

Area lain yang kudu dipikirin nya itu soal SSL sama penerbitan dan pemakaian sertifikat SSL. Di konfigurasi _subdirectory_, satu sertifikat domain bisa dipakai karena situs jaringan itu intinya cuma path dari nama domain utama. Jadi, sertifikat buat domain.com bakal cukup ngasih SSL buat https://domain.com/site1, https://domain.com/site2, dan seterusnya.

Nah, di konfigurasi _subdomain_, pake wildcard SSL certificate itu salah satu pilihan paling umum. Jenis sertifikat SSL ini ngasih enkripsi buat domainnya dan semua _subdomains_-nya. Jadi, wildcard SSL certificate bakal ngasih enkripsi buat https://site1.domain.com, https://site2.domain.com, dan juga buat domain.com sendiri.

Meskipun ada pilihan lain, biasanya itu lingkup dan aplikasinya terbatas, terus butuh konfigurasi tambahan sama pertimbangan soal kecocokannya.

#### Plugin dan Tema {#plugins-and-themes}

Apa yang WordPress kasih, dia juga ambil, setidaknya dari sudut pandang pelanggan. Kalau instalasi WordPress mandiri (stand-alone) dan admin situs malah pasang plugin jelek atau lupa update instalasinya, satu-satunya korban dan kerugiannya cuma dirinya sendiri. Tapi kalau admin situs pasang plugin jelek di instalasi multisite, itu bikin setiap situs yang ada di jaringan jadi korban.

Alai sababna, lamun diatur salaku multisite WordPress, fitur pikeun admin situs teu bisa nginstal plugin je tema bakal dikaluar tina admin situs éta sarta dipindahkeun ka peran admin jaringan anyar atawa 'super admin'. Peran istimewa ieu ti mimiti bisa mutuskeun naha admin situs jaringan diizinkeun ningali atawa ngagunake menu plugin dina dashboard maranéhna, jeung upami kitu, naha izin éta kalebet kana _ngaktifkeun_ atawa _ngalaksanakeun nonaktifan_ plugin.

Dina titik ieu, admin jaringan bertanggung jawab pikeun nginstal plugin je tema ka jaringan sarta mendelekeun izin sangkan bisa maké plugin je tema éta pikeun situs-situs jaringan. Admin situs teu bisa nginstal plugin je tema atawa ngagunake plugin je tema nu teu ditugaskeun ka situs maranéhna.

#### Pengguna je Administrator {#users-and-administrators}

Dina WordPress Multisite, sadaya situs jaringan miboga database anu sarua sarta ku kituna miboga pengguna, peran, je kapabilitas anu sarua. Cara panghadéna pikeun ngaregepkeun éta nyaéta sadaya pengguna mangrupa anggota jaringan lain, lain ngan ukur milik hiji situs.

Dumasar pemahaman ieu, bisa jadi teu dipikahoyong lamun diidinakeun pembuatan pengguna sarta ku sabab éta WordPress Multisite ngaluarkeun kapabilitas éta tina admin situs je mendelekeunana ka peran admin jaringan. Balik deui, admin jaringan bisa mendelekeun hak istimewa anu peryogi ka admin situs sangkan bisa nyiptake akun pengguna pikeun situs maranéhna sorangan.

<!-- Screenshot teu aya: antarmuka manajemen pengguna jaringan WordPress Multisite -->

Ngulang deui pernyataan di luhur, sanajan akun pengguna katingali patali je situsna, padahal éta téh ditugaskeun ka jaringan sarta ku kituna kudu unik di sakuliah jaringan. Bisa jadi aya kasus di mana nama pengguna teu bisa didaftarkeun alatan sabab hal ieu.

Sanajan sanésna konsep asing dina sistem perusahaan, sumber pendaftaran je otentikasi pengguna tunggal ieu sok hésé dipahami ku jalma anu biasa ngagunake instalasi WordPress mandiri di mana administrasi pengguna rada gampang.

#### Media {#media}

Di mana situs jaringan berbagi database tunggal dina WordPress Multisite, maranéhna ngajaga jalur (path) anu béda dina filesystem pikeun file media.

Lokasi standar WordPress (wp-content/uploads) tetep aya; ngan jalanna diubah sangkan ngagambarkeun ID unik situs jaringan éta. Akibatna file media pikeun situs jaringan bakal muncul salaku wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

Kami geus disebutkeun saméméh yén aya kauntungan anu béda antara konfigurasi _subdomain_ je _subdirectory_, sareng ieu dia: jalanna (paths).

Dina konfigurasi _subdirectory_, situs utama (situs kahiji anu dibentuk nalika jaringan didirikan) je subsitus jaringan kudu berbagi jalur anu sarua ti ngaran domain. Ieu boga potensi konflik anu kacida loba.

Kanggo postingan, jalur wajib /blog/ ditambihan dina situs utama pikeun ngajauhkeun bentrok je situs jaringan. Ieu hartina permalink anu éndah saperti ‘Nama Post’ bakal dipresentasikeun salaku domain.name/blog/post-name/.

<!-- Screenshot teu aya: pengaturan permalink WordPress nunjukkeun jalur /blog/ dina konfigurasi subdirectory -->

Dina konfigurasi _subdomain_, tindakan ieu teu perlu sabab unggal situs jaringan nguntung tina pemisahan domain anu lengkap je ku kituna teu kudu ngandelkeun hiji jalur. Maranéhna malah ngajaga jalanna sorangan dumasar kana _subdomain_ maranéhna.

<!-- Screenshot teu aya: pengaturan permalink WordPress pikeun konfigurasi subdomain -->

#### Halaman Statis {#static-pages}

Di konfigurasi _subdirectory_ potensi bentrokan nama bisa nyebar sampai ke halaman statis sebagai situs utama dan situs jaringan berbagi path yang sama.

Supaya ini nggak terjadi, WordPress sediakan cara buat memblokir beberapa nama situs tertentu biar nggak bentrok sama nama situs pertama. Biasanya, admin jaringan akan memasukkan root path dari halaman-halaman situs utama.

<!-- Screenshot tidak tersedia: Pengaturan jaringan WordPress menunjukkan nama situs yang diblokir untuk mencegah konflik -->

Di konfigurasi _subdomain_ kemungkinan bentrokan nama bisa diatasi karena _subdomain_ itu unik buat situs jaringan dan nggak ada hubungannya sama situs utama.

### Registrasi {#registration}

Di pengaturan jaringan WordPress Multisite, ada beberapa pilihan registrasi pengguna baru yang tersedia, memungkinkan pengguna baru dan lama untuk membuat situs.

<!-- Screenshot tidak tersedia: Pengaturan jaringan WordPress Multisite menunjukkan opsi registrasi -->

Berbeda dengan instalasi WordPress mandiri (stand-alone), situs jaringan nggak punya pilihan yang biasa buat mengizinkan pendaftaran pengguna atau menugaskan pendaftaran tersebut ke peran tertentu.

<!-- Screenshot tidak tersedia: Pengaturan pendaftaran pengguna situs WordPress mandiri menunjukkan opsi terbatas -->

Ketika akun pengguna dibuat, akun-akun itu dibuat di level jaringan. Jadi, alih-alih milik satu situs tertentu, mereka malah jadi milik jaringan. Ini punya beberapa keuntungan dan kerugian yang khas.

Contohna, bayangkan WordPress Multisite anjeun itu urusan berita je. Mun urang bakal bikin multisite éta terus nyieun situs jaringan pikeun keuangan, teknologi, hiburan, jeung bidang séjén anu dipikaresep, bari tetep ngajaga kontrol umum kana plugin jeun tema. Saban situs jaringan téh bakal boga tingkat kontrol anu jauh leuwih atas tampilan je suasana (look and feel) jeung pengalaman panggunana tina situs jaringan éta dibandingkeun custom post type atawa kategori posting biasa.

Ka titik éta, nalika hiji user login, manéhna login ka jaringan jeung intina ogé login ka unggal situs jaringan pikeun ngahasilkeun pengalaman anu mulus. Lamun situs anyar anjeun téh berbasis langganan (subscription), ieu bakal jadi solusi jeung hasil anu paling pas.

Nanging, lamun tujuan jeur multisite éta nyaéta nawarkeun situs-situs jaringan anu teu aya hubunganana, biasana butuh plugin luar atawa tambahan pikeun ngatur peran user.

### Domain je SSL {#domain-and-ssl}

Hayu urang ngobrolkeun instalasi WordPress Multisite anu hampir teu diperhatikeun - Wordpress.com. Ieu mangrupa conto multisite WordPress anu paling gedé jeung nunjukkeun kemampuan gedéna pikeun disesuaikan jeung dibentuk pikeun tujuan tertentu.

Dina internet modérn ayeuna, pamakéan SSL téh hampir wajib, sarta administrator jaringan multisite WordPress bakal gancang némbangkeun tantangan ieu.

Dina konfigurasi _subdomain_, situs-situs diciptakeun dumasar kana nama domain utama (root domain name). Jadi hiji situs anu disebut ‘site1’ bakal diciptakeun salaku ‘site1.domain.com’. Ngagunake sertifikat SSL wildcard, administrator jaringan bisa ngatasi tantangan ieu jeung nyadiake kemampuan enkripsi SSL pikeun jaringan éta.

WordPress Multisite ngandung fungsi pemetaan domain anu ngidinan situs-situs jaringan pikeun dihubungkeun jeung nama domain kustom atawa nama domain nu béda ti domain utama jaringan.

Kanggo administrator jaringan, ieu mangrupa lapisan kerumitan tambahan boh dina konfigurasi nama domain boh dina penerbitan jeung pemeliharaan sertifikat SSL.

Sampurasna, sanajan WordPress Multisite ngajadikeun [www.anotherdomain.com](http://www.anotherdomain.com) bisa dipetkeun ka ‘site1’, administrator jaringan tetep kudu ngurus DNS di luar sarta ngalaksanakeun implementasi sertifikat SSL.

## Ultimate Multisite {#ultimate-multisite}

Lamun perbedaan antara instalasi WordPress tunggal jeung Multisite dipahami, hayu urang tingali kumaha Ultimate Multisite jadi senjata pamungkas pikeun nyadiakeun Website as a Service (WaaS).

### Pendahuluan {#introduction}

Ultimate Multisite téh mangrupa pisau Swiss-mu nalika ngadamel Website as a Service (WaaS). Anggap waé Wix.com, Squarespace, WordPress.com jeung teras mikiran ngabogaan layanan sorangan.

Di balik layar, Ultimate Multisite ngagunake WordPress Multisite tapi dilakukeun sacara cara anu teu ngan ukur ngahajikeun sagala tantangan nu dihadapi administrator jaringan dina instalasi multisite, tapi ogé ngaronjatkeun kapabilitas pikeun ngadukung sababaraha kasus panganggo.

Dina bagian-bagian salajengna urang bakal tingali sababaraha kasus panganggo umum jeung pertimbangan anu dipiharep keur ngadukung kasus-kasus éta.

### Kasus Panganggo {#use-cases}

#### Kasus 1: Agensi {#case-1-an-agency}

Biasana, kaparigelan inti hiji agensi nyaéta desain website kalawan aspek saperti hosting atawa marketingna jadi layanan tambahan.

Kanggo agensi, Ultimate Multisite nawiskeun nilai anu luar biasa dina kamampuhna ngastur je ngatur sababaraha website dina hiji platform. Leuwih deukeut deui kanggo agensi anu standardize desainna dina tema-tema tartamtu saperti GeneratePress, Astra, OceanWP atawa nu séjén bisa manfaatkan kamampuhan Ultimate Multisite pikeun otomatis ngaktifkeun tema éta pikeun unggal site anyar.

Sama saperti kapercayaan dagangan kanggo harga agensi kana plugin umum je populer, pamakéan Ultimate Multisite ngidinan agensi manfaatkan investasi anu geus aya ku nyayogikeun platform umum di mana plugin bisa dipasang, diurus, je dimaké.

Paling colokna, pamakéan konfigurasi bakal dipikawanoh sarta untungna Ultimate Multisite ngajadikeun pemetaan domain je sertifikat SSL jadi gampang pisan kalayan integrasina pikeun sababaraha penyedia hosting populer saperti Cloudflare je cPanel.

Ku kituna ku cara manfaatkan salah sahiji penyedia éta atawa nyusun Ultimate Multisite di tukangeun Cloudflare, aspek-aspek saperti ngatur domain je sertifikat SSL jadi rada gampang pisan.

Agensi anu milih pikeun ngajaga kontrol nu ketat kana pembuatan site bakal ngahargaan kaseimpianna dina ngadamel site sarta ngaitkeun site je pelanggan je rencana ngaliwatan antarmuka Ultimate Multisite anu leuwih gampil.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Kontrol nu ketat kana plugin je tema dipertahankeun dumasar basis produk ku cara antarmuka Ultimate Multisite anu intuitif ngajadikeun plugin je tema bisa dipasihkeun atawa disumputkeun saperti naon status aktipna nalika diinstansiasi pikeun site anyar.

![Product plugin limitations interface](/img/config/product-plugins.png)

Tema-tema (themes) ngajukeun fungsi anu sarua, ngidinan sababaraha tema dipilih atawa disumputkeun dina waktu nyiptake situs web.

![Product theme limitations interface](/img/config/product-themes.png)

Agensi bakal tenang makanya ngagunake Ultimate Multisite, ngidinan maranéhna bisa ngalakukeun hal anu paling dipikaresepna - mendesain situs web anu luar biasa.

#### Kasus 2: Penyedia Niche (Niche Provider) {#case-2-niche-provider}

Ada paribasa baheula anu bilang, “laku hiji hal jeung laksanakeun kalawan saé”. Pikeun seueur spesialis, éta hartina nyiptake produk atawa jasa diwarungkeun kana hiji ide utama.

Mungkin anjeun téh penggemar golf nu ngajual situs web ka klub atawa anjeun bisa jadi gamer esports nu ngajual situs web ka clan. Atanapi individu anu ngajual jasa booking ka restoran?

Pikeun seueur alesan, anjeun bakal hayang nyayogikeun jasa dumasar kerangka je platform anu umum. Bisa jadi anjeun geus mendesain atawa nginvestasi dina plugin khusus (bespoke plugins) pikeun nyayogikeun fungsi anu dipikawanoh atawa bisa jadi praktik terbaik industri mbutuhkeun cara desain anu standar.

Salah sahiji fitur inovatif Ultimate Multisite nyaéta pamaké template sites. Template site téh nyaéta tempat di mana tema geus dipasang je diaktifkeun, plugin anu dibutuhkeun geus dipasang je diaktifkeun, sarta post atawa halaman conto geus aya. Nalika pelanggan nyiptake situs anyar dumasar template éta, eusina je pengaturan template bakal dicokot ka situs anu anyar ditangtukeun.

Pikeun penyedia situs je jasa niche, ieu ngahasilkeun keuntungan anu teu aya tandingna dina kemampuan pikeun langsung nyiptake situs anu siap dipaké kalawan plugin je desain khusus. Pelanggan ngan ukur perlu nyayogikeun input anu paling minimal pikeun ngalengkepan jasa éta.

Ngarengan na paménta, konfigurasi _subdirectory_ atawa _subdomain_ bisa cocog, dina kasus éta pilihan arsitektur téh bakal jadi antara sertifikat SSL sederhana pikeun _subdirectory_ atawa sertifikat SSL wildcard pikeun _subdomain_.

#### Kasus 3: Web Hosting WordPress {#case-3-wordpress-web-hosting}

Ada loba cara pikeun ngahosting situs WordPress, tapi jarang pisan gampang saperti nyediakeun ruang web ka pelanggan je versi WordPress anu geus dipasang. Ieu sabab aya sababaraha keputusan je pertimbangan anu kudu digabung pikeun nyayogikeun layanan anu bermakna.

Ultimate Multisite janten panghadéna dina hal ieu ku cara ngajadian solusi *turnkey* (siap pakai) anu komprehensif pikeun ngahosting situs WordPress. Dina solusi éta aya mekanisme inti pikeun nyayogikeun layanan langganan, pangumpulan pembayaran, formulir checkout, voucher diskon, je komunikasi ka pelanggan.

Loba gawé penting anu kudu dilakukeun pikeun nginstal, ngatur, je ngajaga WordPress Multisite téh dibantu ku Ultimate Multisite nepi ka administrator jaringan ngan ukur perlu mikiran aspek-aspek nu patali je layanan atawa niche maranéhna, saperti tingkatan produk, harga, je tawaran layanan.

Kanggo *developer* anu hayang integrasi je Ultimate Multisite, solusi ieu ogé nawiskeun RESTful API je Webhooks pikeun notifikasi acara.

Tanpa gumantung kana loba plugin je lisensi eksternal, Ultimate Multisite nyayogikeun solusi anu kaya fitur je sebanding je Wix, Squarespace, WordPress.com, je nu séjénna.

### Pertimbangan Arsitektur {#architecture-considerations}

Sanajan lain panduan anu komprehensif, hal-hal di handap kudu jadi panuntun pikeun milih téknologi anu bener pikeun ngadukung instalasi Ultimate Multisite.

#### Hosting Bersama vs. Khusus (Shared vs. Dedicated Hosting) {#shared-vs-dedicated-hosting}

Sayang, teu sadayana penyedia hosting téh sarua, jeunjeun aya nu ngalakukeun praktik server anu kacida padetna. Penyedia jasa nu murah biasana ngahasilkeun duit ku cara maksimalkeun kepadatan server. Jadi, instalasi Ultimate Multisite anjeun mungkin ngan ukur salah sahiji tina ratusan situs di server anu sarua.

Tanpa pangdaya jaminan anu pas ti penyedia, situs-situs dina server pamaréntahan ngalaman masalah 'tetangga nu rame' (*noisy neighbour*). Hartina, hiji situs dina server anu sarua ngagunakeun sumber daya saperti kitu nepi ka situs séjén kudu saingkeun pikeun sisa sumber daya. Sering kali ieu nampikeun diri jadi situs anu lambat atawa teu merespon waktuna.

Salaku penyedia hosting web sorangan, alur dampaknya bakal hartina pelanggan anjeun ngalaman kecepatan nu goréng, peringkat halaman nu rendah, jeung tingkat *bounce rate* nu luhur, sok meunca pelanggan ninggalke layanan ku cara néangan tempat séjén. Singgetna mah, murah teu hartina hadé.

Ultimate Multisite kasohor bisa gawé bareng jeung sababaraha penyedia hosting anu hadé sarta ngawangun kalayan lingkungan maranéhna pikeun nyadiakeun fungsi saperti *domain mapping* jeung SSL otomatis. Penyedia-penyedia ieu ngahargaan kinerja (*performance*) jeung méré layanan nu leuwih hade tibatan *shared hosting*.

Kanggo daftar penyedia anu kompatibel sarta panduan panglenggoh kanggo unggal salah sahiji, mangga cek dokumentasi Compatible Providers.

#### Pertimbangan Kinerja (*Performance Considerations*) {#performance-considerations}

Ultimate Multisite téh aplikasi nu teu lambat, tapi leuwih ti éta, anjeunna kacida gancangna. Nanging, anjeunna ngan ukur sahadéan jeung kualitas aplikasi jeung infrastruktur di handapna sarta ngan bisa manfaatan naon waé anu dipikawanoh ku anjeunna.

Coba pikirkeun ieu: Anjeun téh administrator jaringan tina instalasi Ultimate Multisite kalayan 100 situs. Sababaraha situs éta keur hadé jeung narik sabaraha pengunjung situs unggal poé.

Skenario kieu mah bakal béda lamun skala leutik, saperti hiji nepi ka lima situs. Tapi mun geus lila, masalah skala bakal jadi nyata.

Mun teu dipantau, hiji situs Ultimate Multisite ngan ukur anu tanggung jawab ngalaksanakeun paménta tina sakabé pengunjung di situs-situs éta. Paménta éta bisa pikeun halaman PHP anu dinamis atawa aset statis saperti stylesheet, javascript, atawa file media. Mun ngan hiji situs atawa satus situs, tugas-tugas ieu jadi loba, monoton, jeung teu eureun. Teu perlu ngagunake daya CPU jeung memori pikeun ngolah file PHP mun hasilna téh informasi statis anu sarua pikeun unggal paménta.

Sama saperti éta, hiji paménta pikeun halaman PHP atawa HTML bakal ngahasilkeun loba paménta salajengna pikeun skrip, stylesheet, jeung file gambar. Paménta-paménta éta langsung dituju ka server Ultimate Multisite anjeun.

Salah sahiji cara gampang pikeun ngabéréskeun masalah ieu nyaéta ngangkat (upgrade) server, tapi éta teu ngalaksanakeun masalah séjén, nyaéta latensi geografis. ngan loba server di lokasi anu béda bisa ngatasi masalah ieu sacara bener.

Ku sabab kitu, loba admin jaringan ngagunake solusi front-end caching jeung content distribution networks (CDN) pikeun ngalaksanakeun paménta pikeun halaman statis. Ngalaksanakeun paménta éta jeung nyayogikeun aset saméméh paménta nepi ka server bakal ngahasilkeun iraha sumber daya olah, ngabéréskeun kahés, nyingkahan *upgrade* anu teu perlu, sarta maksimalkeun investasi téknologi.

Ultimate Multisite ngandung add-on Cloudflare anu canggih anu ngidinake admin jaringan pikeun ngajadikeun instalasi maranéhna di balik Cloudflare jeung ngagunakeun moal ukur kapabilitas cachingna tapi ogé DNS hosting, sertifikat SSL, sarta mekanisme keamanan.

#### Backup {#backups}

Anjeun bisa nanya ka 50 jalma ngeunaan *backup* jeung meunang 50 pamikiran béda ngeunaan strategi *backup*. Jawabanana mah, éta gumantung kana kaayaan.

Naon anu teu diperselisihan nyaéta *backup* téh kudu dilakukeun je, je éta hampir teu mungkin yén éta teu dikelola ku penyedia layanan, utamina nu nawarkeun layanan terkelola (*managed service*). Salaku akibatna, pelanggan bakal ngaliwatan administrator jaringan pikeun nyayogikeun je ngokolakeun layanan ieu. Saha anu dipersihkeun ku administrator jaringan téh mangrupa masalah anu béda pisan.

Kanggo bagian ieu urang sepakat yén *backup* téh nyaéta salinan keadaan sistem dina waktu awal *backup* dilakukeun. Sederhana waé, naon waé éta keadaan sistemna nalika *backup* dilakukeun bakal dicatet je dikunci dina *backup*.

Ku pangaweruh ieu, jawaban ngeunaan kumaha cara ngahontal *backup* je naon anu panghadéna pikeun lingkungan anjeun bakal gumantung kana paménta anjeun je kamampuhan penyedia *hosting* pikeun ngalaksanakeun paménta éta. Nanging, tina urutan paling opinionated nepi ka leuwih teu opinionated, pilihan di handap biasana bakal méré panduan.

#### Snapshots {#snapshots}

*Snapshot* téh mangrupa solusi anu paling gampang keur *backup* sabab gampang, teu rumit (sampeuh anjeun hayang ngabalikeun), je 'langsung jalan'. Nanging, éta butuh bantuan ti penyedia anjeun je utamana ngan berlaku lamun anjeun boga VPS (*Virtual Private Server*) atawa anu sarupa. Sababaraha penyedia nu aya dina dokumentasi ‘Compatible Providers’ urang nawiskeun *backup* anu teu merlukeun intervensi atawa pamikiran tambahan ti administrator jaringan.

Di mana backup tradisional menargetkan file dan database, snapshot menargetkan seluruh disk. Artinya, tidak hanya data situs ditangkap dalam snapshot tetapi juga sistem operasi dan konfigurasinya. Bagi banyak orang, ini adalah keuntungan yang jelas karena sistem baru hampir bisa dibuat secara instan dari snapshot dan dapat segera dioperasikan untuk menggantikan instance yang bermasalah. Demikian pula, proses pemulihan untuk mengambil file hanya memerlukan penempelan gambar snapshot sebagai disk ke instance yang sudah ada sehingga file dapat diakses dan disalin.

Snapshot mungkin menarik biaya tambahan dari penyedia hosting tetapi ini adalah asuransi terhadap kecelakaan.

#### Skrip Eksternal {#external-scripts}

Sepertinya tidak ada kekurangan skrip eksternal dan solusi untuk mencadangkan sumber daya WordPress dan MySQL, dan ini akan berfungsi dengan baik untuk Ultimate Multisite karena itu adalah plugin WordPress yang menggunakan sistem file dan database WordPress. Jadi, solusi yang mencadangkan situs WordPress akan memenuhi kebutuhan Ultimate Multisite.

Kami tidak bisa merekomendasikan satu skrip di atas yang lain tetapi saran umum kami adalah menjalankan beberapa tes backup dan restore untuk memastikan hasilnya sesuai keinginan dan untuk 'memastikan dengan pasti' dengan terus mengevaluasi skrip dan fungsinya secara berkelanjutan, terutama di tempat strategi backup diferensial diterapkan.

Perlu diperhatikan bahwa skrip-skrip ini, saat berjalan, akan meningkatkan beban sistem yang harus diperhitungkan.

#### Plugin {#plugins}

Hampir tidak ada masalah di WordPress yang tidak bisa diselesaikan dengan plugin dan jika mengelola skrip eksternal bukan keahlian Anda, mungkin plugin adalah pilihan terbaik berikutnya.

Sanajan plugin-plugin téh bédana dina pilihan je fitur, tapi intina mah sarua fungsi, nyaéta nyieun salinan file WordPress je database. Sanggeus éta, fungsinya béda sabab sababar plugin bisa ngirim backup ka layanan luar saperti Google Drive atawa Dropbox atawa layanan penyimpanan objek kompatibel saperti S3, Wasabi, atawa nu séjénna. Plugin anu leuwih komprehensif miboga fitur differential backups atawa strategi pikeun ngan ukur backup data anu geus robah sangkan biaya penyimpanan luar bisa dipidulikeun.

Lamana milih plugin, ulah poho-poho ngabales yén éta bisa ngarti multisite. Kusabab sifat kerjanya nalika backup keur jalan, anjeun bakal némbongkeun beban sementara dina server nepi ka prosesna réngsé.

#### Domain je SSL {#domain-and-ssl-1}

Loba pisan anu geus dibahas ngeunaan domain dina mode _subdomain_ multisite. Solusi hampir umum pikeun administrator jaringan nyaéta ngagunake wildcard DNS entry.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Jenis DNS entry ieu bakal bisa ngaréspon _subdomain_ saperti ‘site1.domain.com’ je ‘site2.domain.com’ ka alamat IP 1.2.3.4, mémang ngabantosan Ultimate Multisite je WordPress Multisite anu leuwih gedé ku mode _subdomain_.

Ieu bisa jalan pisan pikeun HTTP sabab host tujuan dibaca tina HTTP headers, tapi jarang ayeuna webna sa-seder éta di mana transaksi HTTPS aman hampir wajib.

Untungna aya pilihan gampang pikeun sertifikat SSL. Dina mode _subdirectory_ (subdirektori) mah, sertifikat domain biasa bisa dipaké. Ieu gampang je gratis ti penyedia hosting nu mungkin maké layanan gratis LetsEncrypt atawa sumber séjén. Lamun teu kitu, éta bisa dibeli komersial ti otoritas lamun anjeun bisa ngajadikeun *certificate signing request* (CSR).

Kanggo mode _subdomain_ (subdomain), pamaké sertifikat SSL wildcard bakal pas pisan je domain wildcard sarta ngidinan sertifikat jadi otoritatif pikeun domain utama je sakabé _subdomain_ tanpa perlu konfigurasi tambahan.

Nanging, kudu diperhatikeun yén sertifikat SSL wildcard mungkin teu bisa dipaké je layanan saperti Cloudflare, kecuali anjeun keur mode *enterprise* atawa ngatur mode masuk jadi DNS-nya waé, dina kasus éta sakabé *caching* je optimasi bakal dihindarkeun.

Ultimate Multisite nu aya ti awal geus nyediakeun solusi pikeun masalah ieu kalawan nunjukkeun pangalaman urang anu jero ngeunaan kaperluan WordPress multisite. Ngaktifkeun add-on sederhana ieu bakal ngajadikeun Ultimate Multisite maké kredensial Cloudflare anjeun pikeun otomatis nambahan entri DNS keur situs jaringan di Cloudflare sarta ngatur modeana jadi ‘proxied’. Ku cara ieu, unggal subsite jaringan, nalika ditangtukeun, bakal boga perlindungan je manfaatan sakabé Cloudflare kaasup SSL.

Gumantung kana sifat je tujuan instalasi Ultimate Multisite anjeun, mungkin aya kabutuhan keur pelanggan maké domain sorangan. Dina kasus éta, administrator jaringan kudu nyelesaiké dua masalah: hiji, ngahosting nama domain sarta dua, sertifikat SSL pikeun domain éta.

Bagi banyak orang, pakai Cloudflare itu gampang. Pelanggan cuma perlu taruh domain mereka di Cloudflare, arahkan CNAME ke domain utama Ultimate Multisite, dan petakan domain mereka di Ultimate Multisite untuk mulai memanfaatkan nama domain kustom mereka.

Di luar itu, solusi alternatif perlu dicari, makanya Ultimate Multisite merekomendasikan daftar Penyedia yang Kompatibel (Compatible Providers). Ini karena proses mengatur DNS dan SSL bisa jadi proses yang lumayan susah. Tapi, dengan integrasi Ultimate Multisite ke penyedia-penyedia ini, kerumitan jadi jauh berkurang dan prosedurnya otomatis.

#### Plugin {#plugins-1}

Kemungkinan besar Anda akan butuh plugin tambahan untuk memberikan fungsi ke pelanggan atau situs jaringan Anda. Apakah semua plugin bekerja dengan WordPress Multisite dan Ultimate Multisite? Nah, itu tergantung.

Meskipun sebagian besar plugin bisa diinstal di WordPress Multisite, cara mengaktifkan dan lisensinya berbeda-beda tergantung pembuatnya (author).

Tantangannya ada pada bagaimana lisensi diterapkan dengan beberapa plugin yang memerlukan lisensi per domain. Ini berarti untuk beberapa plugin, administrator jaringan perlu mengaktifkan lisensi secara manual untuk setiap plugin di setiap situs baru.

Oleh karena itu, mungkin lebih baik untuk bertanya langsung ke pembuat plugin tentang bagaimana plugin mereka akan bekerja dengan WordPress Multisite dan persyaratan atau prosedur khusus apa pun yang diperlukan untuk melisensikannya.
