---
title: Apakah WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Apakah WordPress Multisite?

Dalam teras WordPress, terdapat satu ciri yang dipanggil 'Multisite' yang bermula sejak tahun 2010 ketika pelancaran WordPress 3.0. Sejak itu, ia telah melalui beberapa pengemaskinian yang bertujuan untuk memperkenalkan ciri-ciri baharu dan memperketatkan keselamatan.

Secara ringkasnya, WordPress multisite boleh difahami seperti ini: Sebuah universiti mengekalkan satu pemasangan WordPress sahaja, tetapi setiap fakulti menguruskan laman WordPress mereka sendiri.

## 

## Apakah Sebenarnya WordPress Multisite?

Multisite adalah ciri WordPress yang membolehkan beberapa laman berkongsi satu pemasangan WordPress yang sama. Apabila multisite diaktifkan, laman WordPress asal akan ditukar untuk menyokong apa yang biasanya dirujuk sebagai **rangkaian laman**.

Rangkaian ini berkongsi sistem fail (bermakna **plugin dan tema juga dikongsi bersama**), pangkalan data, fail teras WordPress, wp-config.php, dan sebagainya.

Ini bermakna pengemaskinian WordPress, tema, dan plugin hanya perlu dilakukan sekali sahaja untuk semua laman dalam rangkaian anda kerana semuanya berkongsi fail yang sama dalam sistem fail.

Hakikat ini merupakan salah satu kelebihan utama multisite, kerana ia membolehkan anda menambah bilangan laman yang anda uruskan sambil mengekalkan jumlah tugas yang perlu dilakukan untuk menyelenggara laman pelanggan anda.

## 

## Subdomain atau Subdirektori?

Terdapat dua mod untuk menjalankan WordPress multisite – dan anda perlu memilih satu ketika menukarkan pemasangan WordPress biasa anda kepada pemasangan multisite:

**Subdomain:** cth.: [site.domain.com](http://site.domain.com)

…atau

**Subdirektori:** cth.: [yourdomain.com/site](http://yourdomain.com/site)

Setiap mod mempunyai kelebihan dan kekurangan yang perlu anda pertimbangkan ketika membuat keputusan ini.

Satu perkara penting yang perlu diketahui: setelah anda membuat keputusan, menukar rangkaian anda daripada subdirektori kepada subdomain atau sebaliknya adalah sangat sukar – terutamanya jika anda sudah mempunyai beberapa laman yang telah dicipta.

Sebelum membuat keputusan tersebut, berikut adalah beberapa perkara yang perlu diingat:

**Mod Subdirektori** adalah mod yang paling mudah dari segi persediaan dan penyelenggaraan. Ini kerana semua laman hanyalah laluan yang dilampirkan pada domain utama (cth. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Hasilnya, anda hanya memerlukan **satu sijil SSL** untuk domain utama dan ia akan meliputi seluruh rangkaian.

Pada masa yang sama, disebabkan struktur URL-nya, Google dan kebanyakan enjin carian lain akan menganggap semua sublaman dalam rangkaian berasaskan subdirektori anda sebagai satu laman yang besar. Akibatnya, kandungan yang ditambah ke sublaman oleh pelanggan akhir anda mungkin mempengaruhi prestasi SEO laman utama anda, contohnya. Tahap impaknya boleh diperdebatkan dan ada hujah yang menyatakan bahawa susunan sedemikian malah boleh memberi manfaat kepada prestasi SEO.

**Mod Subdomain** agak lebih kompleks untuk disediakan, tetapi struktur URL-nya (cth. [subsite.yournetwork.com](http://subsite.yournetwork.com)) secara umumnya dianggap kelihatan "lebih profesional".

Salah satu cabaran utama dalam menyediakan mod subdomain adalah liputan SSL (HTTPS) untuk seluruh rangkaian. Ini kerana pelayar web menganggap subdomain sebagai entiti yang berasingan. Hasilnya, anda memerlukan sijil SSL yang berbeza untuk setiap subdomain dalam rangkaian anda, atau sejenis sijil khas yang dipanggil **sijil SSL Wildcard**. Dalam beberapa tahun kebelakangan ini, penyedia hosting dan panel meningkatkan keupayaan mereka dari segi penyediaan SSL dan ada yang menawarkan sijil wildcard dengan hanya satu klik, mengurangkan jurang antara kedua-dua mod dari segi kerumitan persediaan.

Berbeza dengan mod subdirektori, sublaman dalam rangkaian berasaskan subdomain dianggap oleh enjin carian sebagai laman web yang berasingan, yang bermakna kandungan yang ada pada satu sublaman tidak akan mengganggu prestasi SEO sublaman lain sama sekali.

## Super Admin

Pemasangan WordPress satu laman membolehkan anda menambah bilangan pengguna yang tidak terhad dan memberikan pengguna tersebut peranan pengguna yang berbeza dengan kebenaran yang berbeza.

Dalam WordPress Multisite, satu jenis pengguna baharu dibuka: **super admin** – dan satu panel admin baharu turut dibuka: **panel admin rangkaian**.

Seperti namanya, super admin mempunyai kuasa besar ke atas rangkaian, mampu menguruskan semua sublamannya, plugin, tema, semuanya!

Setelah anda menukarkan pemasangan WordPress satu laman anda kepada multisite, admin asal laman tersebut akan dinaik taraf secara automatik kepada super admin.

Plugin dan tema hanya boleh dipasang atau dinyahpasang dari panel admin rangkaian oleh super admin. Admin sublaman kemudian boleh memilih untuk mengaktifkan atau menyahaktifkan plugin atau tema tersebut melainkan super admin mengaktifkan plugin secara rangkaian, yang memaksa ia aktif untuk semua sublaman sepanjang masa.

_Nota: seperti yang anda lihat, menjemput seseorang ke rangkaian anda dan memberikan mereka status super admin memberikan pengguna ini kawalan penuh ke atas rangkaian anda. Sebagai contoh, super admin lain malah boleh mengeluarkan status super admin anda, yang secara berkesan mengunci anda daripada panel admin rangkaian anda sendiri. Untuk membolehkan pelanggan Ultimate Multisite mempunyai kawalan terperinci ke atas apa yang super admin tambahan boleh lakukan, kami mempunyai add-on yang dipanggil Support Agents. Add-on ini membolehkan anda mencipta satu lagi jenis pengguna – agent – dengan hanya kebenaran yang mereka perlukan untuk melaksanakan tugas mereka dalam rangkaian._

## Apa yang dikongsi antara sublaman dan apa yang tidak

Seperti yang kami nyatakan sebelum ini, salah satu kelebihan utama WordPress multisite adalah semua sublaman berkongsi konfigurasi, fail teras, tema, plugin, fail teras WordPress, dan sebagainya yang sama.

Walau bagaimanapun, terdapat elemen yang dihadkan dengan baik pada asas setiap sublaman.

\- Contohnya, setiap sublaman mempunyai folder muat naik sendiri. Hasilnya, muat naik yang dibuat oleh pengguna satu sublaman tertentu tidak boleh diakses pada sublaman lain.

\- Setiap sublaman mempunyai panel admin tersendiri dan boleh mengaktifkan atau menyahaktifkan plugin atau tema melainkan ia diaktifkan secara rangkaian oleh super admin.

\- Kebanyakan jadual pangkalan data dicipta untuk setiap sublaman, bermakna catatan, komen, halaman, tetapan, dan lain-lain adalah terhad untuk setiap sublaman.

## Pengurusan pengguna dalam WordPress Multisite

Satu subjek yang sensitif dalam WordPress multisite adalah pengurusan pengguna. Jadual pengguna WordPress adalah antara sedikit yang dikongsi bersama oleh semua sublaman.

Susunan ini boleh menimbulkan beberapa isu bergantung pada apa yang anda rancang untuk bina dengan rangkaian anda. Contoh di bawah membantu menggambarkan isu yang paling mendesak.

Bayangkan senario berikut:

Anda mencipta rangkaian WordPress multisite dan mula menawarkan sublaman dengan bayaran bulanan kepada orang yang ingin mempunyai kedai e-dagang.

Anda mendapat pelanggan berbayar pertama anda – John. Anda mencipta sebuah laman untuk John dalam rangkaian anda, memasang semua plugin yang diperlukan, kemudian mencipta pengguna untuk John supaya dia boleh menguruskan kedainya.

Kemudian datang pelanggan kedua – Alice. Anda melakukan perkara yang sama untuknya dan dia kini mempunyai kedai dalam rangkaian anda juga.

John dan Alice kedua-duanya adalah pelanggan anda, tetapi mereka tidak mengenali antara satu sama lain. Lebih penting lagi, jika salah seorang daripada mereka melawat laman web kedai yang lain, tiada cara untuk mengetahui bahawa kedai ini dihoskan dalam rangkaian laman yang sama.

Suatu hari, John perlu membeli sepasang kasut baharu dan dia menjumpai yang sempurna di kedai Alice. Apabila dia cuba menyelesaikan pembelian, dia mendapat mesej ralat "emel sudah digunakan", yang pelik kerana John 100% pasti ini adalah kali pertama dia melawat laman web Alice.

Apa yang berlaku di sini adalah pengguna John dikongsi di seluruh rangkaian jadi apabila dia cuba mencipta akaun untuk checkout di laman Alice, WordPress akan mengesan bahawa pengguna dengan alamat emel yang sama sudah wujud dan menunjukkan ralat.

_Nota: Kami sedar betapa buruknya ini bergantung pada kes penggunaan anda, jadi Ultimate Multisite mempunyai pilihan yang memintas semakan biasa untuk pengguna sedia ada, membolehkan beberapa akaun dicipta menggunakan alamat emel yang sama. Setiap akaun terikat kepada sublaman, jadi risiko pertembungan dapat dikurangkan ke tahap minimum. Dalam contoh di atas, John tidak akan mendapat mesej ralat dan akan dapat membeli kasut tersebut tanpa masalah. Pilihan ini dipanggil Enable Multiple Accounts, dan boleh diaktifkan di Ultimate Multisite → Settings → Login & Registration._

Walaupun jadual pengguna dikongsi, pengguna boleh ditambah kepada dan dikeluarkan daripada sublaman oleh admin sublaman atau super admin, dan mereka juga boleh mempunyai peranan pengguna yang berbeza pada sublaman yang berbeza.

## Pertimbangan prestasi

WordPress multisite sangat berkuasa dari segi bilangan laman yang boleh disokongnya. Ini boleh dibuktikan dengan fakta bahawa [WordPress.com](https://WordPress.com), Edublogs, dan Campuspress semuanya adalah perkhidmatan berasaskan multisite dan masing-masing mengehoskan beribu-ribu laman.

Walaupun secara teori tiada bilangan maksimum laman yang boleh anda hoskan dalam satu pemasangan WordPress multisite, dalam praktiknya bilangan laman yang boleh anda jalankan dengan memuaskan boleh berbeza-beza bergantung pada beberapa faktor berbeza: betapa dinamiknya laman-laman tersebut, plugin mana yang tersedia untuk sublaman, dan sebagainya.

Sebagai panduan umum, lebih ringkas rangkaian anda, lebih baik. Mengutamakan laman yang kandungannya tidak begitu dinamik (yang menjadikannya calon yang baik untuk strategi caching yang agresif) dan mengekalkan tumpukan plugin seminimum mungkin (semakin rendah bilangan plugin aktif semakin baik) boleh meningkatkan secara drastik bilangan sublaman yang boleh anda hoskan.

Bahagian terbaiknya adalah kerana semuanya adalah WordPress di sini, alat yang sama yang anda sudah kenali dan gemari untuk peningkatan prestasi juga akan berfungsi untuk rangkaian multisite.

Kesesakan utama untuk multisite adalah pangkalan data tetapi jika semua yang lain disediakan dengan betul, ia boleh menampung beberapa ribu laman sebelum anda perlu risau tentangnya. Walaupun pada ketika itu, terdapat penyelesaian yang boleh ditambah secara berperingkat (seperti penyelesaian database sharding, contohnya).
