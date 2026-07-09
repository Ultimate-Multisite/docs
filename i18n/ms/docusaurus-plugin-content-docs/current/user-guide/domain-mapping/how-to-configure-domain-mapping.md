---
title: Cara Mengkonfigurasi Pemetaan Domain
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Cara Mengkonfigurasi Pemetaan Domain (v2)

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Salah satu ciri paling berkuasa bagi rangkaian premium ialah keupayaan untuk menawarkan pelanggan kita peluang melampirkan domain peringkat atas pada tapak mereka. Lagipun, yang mana kelihatan lebih profesional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) atau [_**joesbikeshop.com**_](http://joesbikeshop.com)? Itulah sebabnya Ultimate Multisite menawarkan ciri itu secara terbina dalam, tanpa perlu menggunakan plugin pihak ketiga.

## Apakah pemetaan domain?

Seperti namanya, pemetaan domain ialah keupayaan yang ditawarkan oleh Ultimate Multisite untuk menerima permintaan bagi domain tersuai dan memetakan permintaan itu kepada tapak yang sepadan dalam rangkaian dengan domain khusus itu dilampirkan.

### Cara menyediakan pemetaan domain pada Rangkaian Ultimate Multisite anda

Pemetaan domain memerlukan sedikit persediaan daripada pihak anda untuk berfungsi. Syukurlah, Ultimate Multisite mengautomatikkan kerja sukar untuk anda supaya anda boleh memenuhi keperluan dengan mudah.

Semasa pemasangan Ultimate Multisite, wizard akan menyalin dan memasang **sunrise.php** secara automatik ke folder yang ditetapkan. **Wizard tidak akan membenarkan anda meneruskan sehingga langkah ini selesai**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Ini bermakna setelah wizard pemasangan Ultimate Multisite selesai menyediakan rangkaian anda, anda boleh mula memetakan domain tersuai dengan serta-merta.

Perhatikan bahawa pemetaan domain dalam Ultimate Multisite tidak wajib. Anda mempunyai pilihan untuk menggunakan fungsi pemetaan domain natif WordPress Multisite atau mana-mana penyelesaian pemetaan domain lain.

Jika anda perlu melumpuhkan pemetaan domain Ultimate Multisite untuk memberi laluan kepada penyelesaian pemetaan domain lain, anda boleh melumpuhkan ciri ini di bawah **Ultimate Multisite > Tetapan > Pemetaan Domain**.

![Halaman tetapan Pemetaan Domain yang menunjukkan pengalihan admin, mesej pemetaan dan pilihan DNS](/img/config/domain-mapping-settings.png)

Tepat di bawah pilihan ini, anda juga boleh melihat pilihan **Paksa Pengalihan Admin**. Pilihan ini membolehkan anda mengawal sama ada pelanggan anda boleh mengakses Dashboard admin mereka pada kedua-dua domain tersuai dan subdomain mereka atau hanya pada salah satu daripadanya.

Jika anda memilih **Paksa alih ke domain yang dipetakan** , pelanggan anda hanya akan dapat mengakses Dashboard admin mereka pada domain tersuai mereka.

Pilihan **Paksa alih ke** **domain rangkaian** akan melakukan perkara yang betul-betul bertentangan - pelanggan anda hanya akan dibenarkan mengakses Dashboard mereka pada subdomain mereka, walaupun cuba log masuk pada domain tersuai mereka.

Dan pilihan **Benarkan akses kepada admin melalui kedua-dua domain yang dipetakan dan domain rangkaian** membolehkan mereka mengakses Dashboard admin mereka pada kedua-dua subdomain dan domain tersuai.

![Dropdown Pengalihan Admin dikembangkan yang menunjukkan tiga pilihan pengalihan](/img/config/domain-mapping-redirect-options.png)

Terdapat dua cara untuk memetakan domain tersuai. Yang pertama ialah dengan memetakan nama domain daripada Dashboard admin rangkaian anda sebagai super admin dan yang kedua adalah melalui Dashboard admin subtapak di bawah halaman Account.

Tetapi sebelum anda mula memetakan domain tersuai kepada salah satu subtapak dalam rangkaian anda, anda perlu memastikan bahawa **tetapan DNS** nama domain dikonfigurasikan dengan betul.

###

### Memastikan tetapan DNS domain dikonfigurasikan dengan betul

Untuk pemetaan berfungsi, anda perlu memastikan domain yang anda rancang untuk petakan menghala ke alamat IP Rangkaian anda. Perhatikan bahawa anda memerlukan alamat IP Rangkaian - alamat IP domain tempat Ultimate Multisite dipasang - bukan alamat IP domain tersuai yang anda mahu petakan. Untuk mencari alamat IP bagi domain tertentu, kami mencadangkan pergi ke [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), sebagai contoh.

Untuk memetakan domain dengan betul, anda perlu menambah **A RECORD** pada konfigurasi **DNS** anda yang menghala ke **alamat IP** tersebut. Pengurusan DNS sangat berbeza antara pendaftar domain yang berlainan, tetapi terdapat banyak tutorial dalam talian yang merangkumi perkara itu jika anda mencari " _Mencipta A Record pada XXXX_ " di mana XXXX ialah pendaftar domain anda (cth.: " _Mencipta A Record pada_ _GoDaddy_ ").

Jika anda menghadapi kesukaran untuk membuat ini berfungsi, **hubungi sokongan pendaftar domain anda** dan mereka akan dapat membantu anda dengan bahagian ini.

Jika anda merancang untuk membenarkan pelanggan anda memetakan domain mereka sendiri, mereka perlu melakukan kerja pada bahagian ini sendiri. Arahkan mereka kepada sistem sokongan pendaftar mereka jika mereka tidak dapat mencipta A Record.

### Memetakan nama domain tersuai sebagai Super Admin

Apabila anda log masuk sebagai super admin pada rangkaian anda, anda boleh menambah dan mengurus nama domain tersuai dengan mudah dengan pergi ke bawah **Ultimate Multisite > Domain**.

![Halaman senarai Domain dalam Ultimate Multisite](/img/admin/domains-list.png)

Di bawah halaman ini, anda boleh mengklik butang **Tambah Domain** di bahagian atas dan ini akan memaparkan tetingkap modal di mana anda boleh menetapkan dan mengisi **nama domain tersuai** , **subtapak** yang anda ingin gunakan nama domain tersuai itu padanya, dan memutuskan sama ada anda mahu menetapkannya sebagai nama **domain utama** atau tidak (perhatikan bahawa anda boleh memetakan **berbilang nama domain kepada satu subtapak**).

![Modal Tambah Domain dengan nama domain, pemilih tapak dan togol domain utama](/img/admin/domain-add-modal.png)

Selepas memasukkan semua maklumat, anda kemudian boleh mengklik butang **Tambah Domain Sedia Ada** di bahagian bawah.

Ini akan memulakan proses mengesahkan dan mendapatkan maklumat DNS domain tersuai. Anda juga akan melihat log di bahagian bawah halaman untuk anda mengikuti proses yang sedang dilaluinya. Proses ini mungkin mengambil masa beberapa minit untuk selesai.

Ultimate Multisite v2.13.0 juga mencipta rekod domain dalaman secara automatik apabila tapak baharu dicipta pada hos yang patut dianggap sebagai domain per tapak. Jika hos ialah domain utama rangkaian, atau salah satu domain asas borang checkout dikongsi yang dikonfigurasikan pada medan **Site URL**, rekod mapped-domain automatik akan dilangkau supaya domain asas dikongsi itu kekal tersedia kepada setiap tapak yang menggunakannya.

Apabila pelanggan mendaftarkan domain baharu melalui Domain Seller v1.3.0 atau lebih baharu, Ultimate Multisite secara automatik memetakan domain yang didaftarkan kepada tapak rangkaian pelanggan secara lalai. Pentadbir tidak lagi perlu menambah rekod mapped-domain berasingan selepas pendaftaran berjaya melainkan mereka mahu melaraskan pilihan seperti bendera domain utama, keadaan pengaktifan, atau pengendalian SSL.

**Stage** atau status sepatutnya berubah daripada **Checking DNS** kepada **Ready** jika semuanya disediakan dengan betul.

<!-- Screenshot unavailable: Baris domain yang menunjukkan peringkat Checking DNS dalam senarai domain -->

<!-- Screenshot unavailable: Baris domain yang menunjukkan peringkat Ready dengan penunjuk status hijau -->

Jika anda mengklik pada nama domain, anda akan dapat melihat beberapa pilihan di dalamnya. Mari kita lihat secara ringkas:

![Halaman butiran domain dengan togol peringkat, tapak, aktif, utama dan SSL](/img/admin/domain-edit.png)

**Stage:** Ini ialah peringkat domain tersebut berada. Apabila anda mula-mula menambah domain, ia mungkin berada pada peringkat **Checking DNS**. Proses ini akan menyemak entri DNS dan mengesahkan bahawa ia betul. Kemudian, domain akan diletakkan pada peringkat **Checking SSL**. Ultimate Multisite akan menyemak sama ada domain mempunyai SSL atau tidak dan akan mengkategorikan domain anda sebagai **Ready** atau **Ready (without SSL)**.

**Site:** Subdomain yang dikaitkan dengan domain ini. Domain yang dipetakan akan memaparkan kandungan tapak khusus ini.

**Active:** Anda boleh menghidupkan atau mematikan pilihan ini untuk mengaktifkan atau menyahaktifkan domain.

**Is Primary Domain?:** Pelanggan anda boleh mempunyai lebih daripada satu domain yang dipetakan untuk setiap tapak. Gunakan pilihan ini untuk memilih sama ada ini domain utama untuk tapak khusus tersebut.

**Is Secure?:** Walaupun Ultimate Multisite menyemak sama ada domain mempunyai sijil SSL atau tidak sebelum mengaktifkannya, anda boleh memilih secara manual untuk memuatkan domain dengan atau tanpa sijil SSL. Harap maklum bahawa jika laman web tidak mempunyai sijil SSL dan anda cuba memaksanya dimuatkan dengan SSL, ia mungkin memberikan ralat kepada anda.

### Memetakan nama domain tersuai sebagai pengguna Subsite

Pentadbir subsite juga boleh memetakan nama domain tersuai daripada dashboard pentadbir subsite mereka.

Mula-mula, anda perlu memastikan bahawa anda mengaktifkan pilihan ini di bawah tetapan **Domain mapping**. Lihat tangkapan skrin di bawah.

<!-- Screenshot unavailable: Tetapan Domain mapping yang membenarkan pengguna subsite memetakan domain melalui togol Customer DNS Management -->

Anda juga boleh menetapkan atau mengkonfigurasikan pilihan ini di bawah tahap **Plan** atau pilihan produk pada **Ultimate Multisite > Products**.

![Bahagian Custom Domains pada halaman edit produk](/img/config/product-custom-domains.png)

Apabila mana-mana pilihan tersebut diaktifkan dan pengguna subsite dibenarkan memetakan nama domain tersuai, pengguna subsite sepatutnya melihat metabox di bawah halaman **Account** yang dipanggil **Domains**.

<!-- Screenshot unavailable: Metabox Domains pada halaman Account subsite dengan butang Add Domain -->

Pengguna boleh mengklik butang **Add Domain** dan ia akan memaparkan tetingkap modal dengan beberapa arahan.

<!-- Screenshot unavailable: Modal Add Domain yang menunjukkan arahan A-record DNS untuk pengguna subsite -->

Pengguna kemudian boleh mengklik **Next Step** dan meneruskan untuk menambah nama domain tersuai. Mereka juga boleh memilih sama ada ini akan menjadi domain utama atau tidak.

<!-- Screenshot unavailable: Borang Add Domain dengan medan nama domain tersuai dan togol domain utama -->

<!-- Screenshot unavailable: Langkah pengesahan Add Domain yang mencetuskan pengesahan DNS -->

Klik **Add Domain** akan memulakan proses mengesahkan dan mendapatkan maklumat DNS bagi domain tersuai.

### Tentang Penyegerakan Domain

Penyegerakan Domain ialah proses di mana Ultimate Multisite menambah nama domain tersuai kepada akaun hosting anda sebagai domain add-on **supaya domain mapping berfungsi**.

Penyegerakan domain berlaku secara automatik jika penyedia hosting anda mempunyai integrasi dengan ciri domain mapping Ultimate Multisite. Pada masa ini, penyedia hosting ini ialah _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ dan _Cpanel._

Apabila integrasi penyedia hos aktif, Ultimate Multisite juga boleh memasukkan tugas penciptaan DNS atau subdomain di pihak penyedia ke dalam baris gilir untuk tapak yang baru dicipta. Jika tiada integrasi yang mendengar tugas tersebut, kerja latar belakang akan dilangkau untuk mengelakkan entri baris gilir tanpa operasi. Semakan DNS dan SSL untuk domain yang dipetakan terus berjalan melalui proses peringkat domain biasa.

Anda perlu mengaktifkan integrasi ini dalam tetapan Ultimate Multisite di bawah tab **Integration**.

![Tab Integrations dalam tetapan Ultimate Multisite yang menunjukkan penyedia hosting](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Pautan Configuration penyedia hosting pada tab tetapan Integrations -->

_Harap maklum bahawa jika penyedia hosting anda bukan salah satu penyedia yang disebut di atas,**anda perlu menyegerakkan atau menambah nama domain secara manual** ke akaun hosting anda._
