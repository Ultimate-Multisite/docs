---
title: Cara Mengkonfigurasi Pemetaan Domain
sidebar_position: 6
_i18n_hash: 1bb022a0d812fd87791d9ea476f7be84
---
# Cara Mengkonfigurasi Pemetaan Domain (v2)

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Salah satu ciri paling berkuasa dalam rangkaian premium adalah keupayaan untuk menawarkan pelanggan kita peluang menghubungkan domain peringkat atas ke laman mereka. Lagipun, mana yang kelihatan lebih profesional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) atau [_**joesbikeshop.com**_](http://joesbikeshop.com)? Itulah sebabnya Ultimate Multisite menawarkan ciri ini terbina dalam, tanpa perlu menggunakan plugin pihak ketiga.

## Apa itu pemetaan domain?

Seperti namanya, pemetaan domain adalah keupayaan yang ditawarkan oleh Ultimate Multisite untuk menerima permintaan bagi domain tersuai dan memetakan permintaan tersebut kepada laman yang sepadan dalam rangkaian dengan domain tertentu itu dilampirkan.

### Cara menyediakan pemetaan domain pada Rangkaian Ultimate Multisite anda

Pemetaan domain memerlukan beberapa persediaan di pihak anda untuk berfungsi. Nasib baik, Ultimate Multisite mengautomasikan kerja sukar untuk anda supaya anda dapat memenuhi keperluan dengan mudah.

Semasa pemasangan Ultimate Multisite, wizard akan menyalin dan memasang **sunrise.php** secara automatik ke folder yang ditetapkan. **Wizard tidak akan membenarkan anda meneruskan sehingga langkah ini selesai**.

![Wizard pemasangan Ultimate Multisite dengan langkah sunrise.php](/img/config/settings-domain-mapping.png)

Ini bermakna sebaik sahaja wizard pemasangan Ultimate Multisite selesai menyediakan rangkaian anda, anda boleh mula memetakan domain tersuai dengan segera.

Ambil perhatian bahawa pemetaan domain dalam Ultimate Multisite tidak wajib. Anda mempunyai pilihan untuk menggunakan fungsi pemetaan domain asli WordPress Multisite atau mana-mana penyelesaian pemetaan domain lain.

Sekiranya anda perlu menyahaktifkan pemetaan domain Ultimate Multisite untuk memberi laluan kepada penyelesaian pemetaan domain lain, anda boleh menyahaktifkan ciri ini di bawah **Ultimate Multisite > Settings > Domain Mapping**.

![Tetapan Domain Mapping dengan togol aktif](/img/config/settings-domain-mapping.png)

Tepat di bawah pilihan ini, anda juga boleh melihat pilihan **Force Admin Redirect**. Pilihan ini membolehkan anda mengawal sama ada pelanggan anda boleh mengakses dashboard admin mereka di kedua-dua domain tersuai dan subdomain atau hanya pada salah satu daripadanya.

Jika anda memilih **Force redirect to mapped domain**, pelanggan anda hanya akan dapat mengakses dashboard admin mereka di domain tersuai mereka.

Pilihan **Force redirect to network domain** akan melakukan sebaliknya - pelanggan anda hanya dibenarkan mengakses dashboard mereka di subdomain, walaupun cuba log masuk di domain tersuai mereka.

Dan pilihan **Allow access to the admin by both mapped domain domain and network domain** membenarkan mereka mengakses dashboard admin di kedua-dua subdomain dan domain tersuai.

![Pilihan Force Admin Redirect untuk pemetaan domain](/img/config/settings-domain-mapping.png)

Terdapat dua cara untuk memetakan domain tersuai. Yang pertama adalah dengan memetakan nama domain dari dashboard admin rangkaian anda sebagai super admin dan yang kedua adalah melalui dashboard admin subsite di bawah halaman akaun.

Tetapi sebelum anda mula memetakan domain tersuai ke salah satu subsite dalam rangkaian anda, anda perlu memastikan bahawa **tetapan DNS** nama domain dikonfigurasi dengan betul.

### 

### Memastikan tetapan DNS domain dikonfigurasi dengan betul

Untuk pemetaan berfungsi, anda perlu memastikan domain yang anda rancang untuk petakan menghala ke alamat IP Rangkaian anda. Ambil perhatian bahawa anda memerlukan alamat IP Rangkaian - alamat IP domain di mana Ultimate Multisite dipasang - bukan alamat IP domain tersuai yang anda ingin petakan. Untuk mencari alamat IP domain tertentu, kami cadangkan pergi ke [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), sebagai contoh.

Untuk memetakan domain dengan betul, anda perlu menambah **A RECORD** pada konfigurasi **DNS** anda yang menghala ke **alamat IP** tersebut. Pengurusan DNS sangat berbeza antara pendaftar domain yang berbeza, tetapi terdapat banyak tutorial dalam talian yang merangkumi perkara ini jika anda mencari "_Creating A Record on XXXX_" di mana XXXX adalah pendaftar domain anda (contoh: "_Creating A Record on GoDaddy_").

Jika anda menghadapi masalah untuk membuatnya berfungsi, **hubungi sokongan pendaftar domain anda** dan mereka akan dapat membantu anda dengan bahagian ini.

Jika anda bercadang untuk membenarkan pelanggan anda memetakan domain mereka sendiri, mereka perlu melakukan kerja ini sendiri. Tunjukkan mereka ke sistem sokongan pendaftar mereka jika mereka tidak dapat mencipta A Record.

### Memetakan nama domain tersuai sebagai Super Admin

Apabila anda log masuk sebagai super admin pada rangkaian anda, anda boleh menambah dan mengurus nama domain tersuai dengan mudah dengan pergi ke **Ultimate Multisite > Domains**.

![Halaman senarai Domains dalam Ultimate Multisite](/img/admin/domains-list.png)

Di bawah halaman ini, anda boleh klik butang **Add Domain** di atas dan ini akan memaparkan tetingkap modal di mana anda boleh menetapkan dan mengisi **nama domain tersuai**, **subsite** yang anda ingin gunakan nama domain tersuai, dan memutuskan sama ada anda mahu menetapkannya sebagai nama **domain utama** atau tidak (ambil perhatian bahawa anda boleh memetakan **berbilang nama domain ke satu subsite**).

![Modal Add Domain dengan medan nama domain dan site](/img/admin/domains-list.png)

Selepas memasukkan semua maklumat, anda kemudian boleh klik butang **Add Existing Domain** di bahagian bawah.

Ini akan memulakan proses mengesahkan dan mengambil maklumat DNS domain tersuai. Anda juga akan melihat log di bahagian bawah halaman untuk anda mengikuti proses yang sedang berlaku. Proses ini mungkin mengambil masa beberapa minit untuk selesai.

**Stage** atau status sepatutnya berubah dari **Checking DNS** kepada **Ready** jika semuanya disediakan dengan betul.

![Stage domain berubah dari Checking DNS kepada Ready](/img/admin/domains-list.png)

![Domain dengan status Ready dalam senarai domains](/img/admin/domains-list.png)

Jika anda klik pada nama domain, anda akan dapat melihat beberapa pilihan di dalamnya. Mari kita lihat sekilas:

![Halaman butiran domain dengan pilihan stage, site, active, dan SSL](/img/admin/domains-list.png)

**Stage:** Ini adalah peringkat domain berada. Apabila anda pertama kali menambah domain, ia mungkin berada pada peringkat **Checking DNS**. Proses akan menyemak entri DNS dan mengesahkan ia betul. Kemudian, domain akan diletakkan pada peringkat **Checking SSL**. Ultimate Multisite akan menyemak sama ada domain mempunyai SSL atau tidak dan akan mengkategorikan domain anda sebagai **Ready** atau **Ready (without SSL)**.

**Site:** Subdomain yang dikaitkan dengan domain ini. Domain yang dipetakan akan memaparkan kandungan laman tertentu ini.

**Active:** Anda boleh togol pilihan ini hidup atau mati untuk mengaktifkan atau menyahaktifkan domain.

**Is Primary Domain?:** Pelanggan anda boleh mempunyai lebih daripada satu domain yang dipetakan untuk setiap laman. Gunakan pilihan ini untuk memilih sama ada ini adalah domain utama untuk laman tertentu.

**Is Secure?:** Walaupun Ultimate Multisite menyemak sama ada domain mempunyai sijil SSL atau tidak sebelum mengaktifkannya, anda boleh memilih secara manual untuk memuatkan domain dengan atau tanpa sijil SSL. Ambil perhatian bahawa jika laman web tidak mempunyai sijil SSL dan anda cuba memaksa memuatkannya dengan SSL, ia mungkin memberi anda ralat.

### Memetakan nama domain tersuai sebagai pengguna Subsite

Pentadbir subsite juga boleh memetakan nama domain tersuai dari dashboard admin subsite mereka.

Pertama, anda perlu memastikan bahawa anda mengaktifkan pilihan ini di bawah tetapan **Domain mapping**. Lihat tangkapan skrin di bawah.

![Tetapan Domain mapping membenarkan pengguna subsite memetakan domain](/img/config/settings-domain-mapping.png)

Anda juga boleh menetapkan atau mengkonfigurasi pilihan ini di bawah peringkat **Plan** atau pilihan produk pada **Ultimate Multisite > Products**.

![Pilihan custom domains produk dalam tetapan produk](/img/config/settings-domain-mapping.png)

Apabila mana-mana pilihan tersebut diaktifkan dan pengguna subsite dibenarkan memetakan nama domain tersuai, pengguna subsite sepatutnya melihat metabox di bawah halaman **Account** yang dipanggil **Domains**.

![Metabox Domains pada halaman akaun subsite](/img/admin/domains-list.png)

Pengguna boleh klik butang **Add Domain** dan ia akan memaparkan tetingkap modal dengan beberapa arahan.

![Modal Add Domain dengan arahan DNS untuk pengguna subsite](/img/admin/domains-list.png)

Pengguna kemudian boleh klik **Next Step** dan teruskan untuk menambah nama domain tersuai. Mereka juga boleh memilih sama ada ini akan menjadi domain utama atau tidak.

![Medan tambah nama domain tersuai dengan pilihan domain utama](/img/admin/domains-list.png)

![Klik Add Domain untuk memulakan pengesahan DNS](/img/admin/domains-list.png)Klik **Add Domain** akan memulakan proses mengesahkan dan mengambil maklumat DNS domain tersuai.

### Mengenai Penyegerakan Domain

Penyegerakan Domain adalah proses di mana Ultimate Multisite menambah nama domain tersuai ke akaun hosting anda sebagai domain tambahan **untuk pemetaan domain berfungsi**.

Penyegerakan domain berlaku secara automatik jika penyedia hosting anda mempunyai integrasi dengan ciri pemetaan domain Ultimate Multisite. Pada masa ini, penyedia hosting ini adalah _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ dan _Cpanel._

Anda perlu mengaktifkan integrasi ini pada tetapan Ultimate Multisite di bawah tab **Integration**.

![Tab Integration dalam tetapan Ultimate Multisite](/img/config/settings-domain-mapping.png)

![Tetapan integrasi penyedia hosting untuk penyegerakan domain](/img/config/settings-domain-mapping.png)

_Ambil perhatian bahawa jika penyedia hosting anda bukan salah satu daripada penyedia yang disebutkan di atas, **anda perlu menyegerak atau menambah nama domain secara manual** ke akaun hosting anda._
