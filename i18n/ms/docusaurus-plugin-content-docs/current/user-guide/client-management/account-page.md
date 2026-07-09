---
title: Halaman Account Klien
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Halaman Account Pelanggan Anda (v2)

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Apabila pelanggan melanggan sesuatu plan pada rangkaian anda, mereka mendapat akses kepada sebuah laman web dan Dashboardnya dengan maklumat penting berkaitan pembayaran, keahlian, domain, had plan, dan sebagainya...

Dalam tutorial ini, kami akan membimbing anda melalui halaman Account pelanggan dan anda akan melihat apa yang pelanggan anda boleh lihat dan lakukan di dalamnya.

## Halaman Account

Halaman Account boleh diakses dengan mengklik **Account** di dalam Dashboard pelanggan anda.

![Menu Account dalam Dashboard pelanggan](/img/account-page/account-menu.png)

Pada rangkaian penyewa berdaulat, Ultimate Multisite v2.13.0 mengekalkan pengalaman pengurusan pelanggan ini pada tapak utama. Jika pelanggan membuka tindakan Account, checkout, pengebilan, invois, pengurusan tapak, penukaran templat, atau pemetaan domain daripada penyewa berdaulat, tindakan itu menghala kembali ke panel pelanggan tapak utama supaya rekod pengebilan rangkaian dan keahlian kekal berautoriti.

Apabila pelanggan tiba daripada penyewa berdaulat, panel pelanggan tapak utama boleh menyertakan pautan kembali ke tapak penyewa. Pautan kembali hanya dipaparkan apabila Ultimate Multisite dapat mengesahkan sasaran kembali sebagai salah satu tapak pelanggan, yang menghalang lencongan sewenang-wenangnya sambil mengekalkan aliran kerja penyewa.

![Gambaran keseluruhan halaman Account pelanggan](/img/account-page/overview.png)

Selepas pelanggan mengklik padanya, mereka akan melihat gambaran keseluruhan keahlian mereka, alamat pengebilan, invois, domain, had tapak, dan juga akan dapat menukar ****Templat Tapak** (jika ia dibenarkan dalam rangkaian anda)**.

Mereka juga boleh menukar keahlian kepada plan lain, atau membeli pakej atau perkhidmatan lain yang anda tawarkan. Mari kita lihat setiap bahagian secara berasingan.

### Gambaran Keseluruhan Keahlian Anda:

Blok pertama betul-betul di bawah nama laman web pelanggan anda menunjukkan gambaran keseluruhan plan semasa mereka dan perkhidmatan/pakej yang dibeli bersamanya. Blok ini juga menunjukkan nombor keahlian, jumlah awal yang dibayar untuknya, berapa kos plan dan sebarang perkhidmatan/pakej serta berapa kali mereka dibilkan untuk keahlian ini. Mereka juga boleh melihat sama ada keahlian itu **Aktif** , **Tamat Tempoh** atau **Dibatalkan**.

![Gambaran keseluruhan keahlian yang menunjukkan plan, jumlah, dan butiran pengebilan](/img/account-page/membership-card.png)

Betul-betul di bawah blok ini, pelanggan anda boleh melihat blok **Tentang Tapak Ini** dan **Had Tapak**. Blok-blok ini menunjukkan kepada mereka semua had yang disertakan dengan plan mereka: ruang cakera, siaran, halaman, lawatan, dan sebagainya... Had ini boleh dikonfigurasikan pada setiap halaman plan di **Ultimate Multisite > Produk**.

![Blok Tentang Tapak Ini dan Had Tapak yang menunjukkan had plan](/img/account-page/site-limits.png)

Di sebelah kanan **Keahlian Anda** , pelanggan boleh mengklik **Tukar**. Ini akan menunjukkan kepada mereka semua plan dan pakej/perkhidmatan yang tersedia. Jika mereka memilih plan lain, had untuk plan tersebut akan berkuat kuasa menggantikan had semasa keahlian - tidak kira sama ada mereka menurunkan taraf atau menaik tarafnya.

Kini, jika pelanggan anda memilih untuk membeli pakej atau perkhidmatan untuk keahlian semasa ini - seperti lebih banyak ruang cakera atau lawatan - keahlian semasa tidak akan diubah tetapi hanya pakej baharu akan ditambahkan kepadanya.

Ambil perhatian bahawa kod kupon tidak boleh ditambahkan pada halaman perubahan keahlian ini. Jika pelanggan menggunakan kod kupon pada pembelian keahlian pertama, kod itu juga akan digunakan pada keahlian baharu ini.

### Mengemas Kini Alamat Pengebilan:

Pada halaman Account, pelanggan anda juga boleh mengemas kini alamat pengebilan mereka. Mereka hanya perlu mengklik **Kemas Kini** di sebelah _Alamat Pengebilan_.

![Bahagian Alamat Pengebilan dengan butang Kemas Kini](/img/account-page/billing-address.png)

Tetingkap baharu akan muncul kepada pelanggan anda. Apa yang perlu mereka lakukan ialah mengisi alamat baharu dan mengklik _Simpan Perubahan_.

![Borang kemas kini alamat pengebilan](/img/account-page/billing-address-form.png)

### Menukar Templat Tapak:

Untuk membenarkan pelanggan anda menukar templat tapak mereka, anda perlu pergi ke **Ultimate Multisite > Tetapan > Tapak** dan menghidupkan pilihan **Benarkan Penukaran Templat**.

Selain itu, pada **Ultimate Multisite > Produk**, pilih plan anda dan pergi ke tab **Templat Tapak**. Pastikan pilihan **Benarkan Templat Tapak** dihidupkan dan pada **Mod Pemilihan Templat Tapak** , pilihan **Pilih Templat Tapak Tersedia** dipilih.

![Tab templat tapak produk dengan mod pemilihan templat](/img/config/product-site-templates.png)

Anda akan dapat melihat semua templat tapak yang tersedia pada laman web anda. Pilih mana yang anda mahu jadikan tersedia dan mana yang anda tidak mahu tersedia kepada pelanggan anda yang melanggan di bawah plan ini. Ambil perhatian bahawa pilihan ini juga mempengaruhi borang checkout, jadi sebarang templat yang dipilih sebagai **Tidak Tersedia** tidak akan muncul pada halaman pendaftaran untuk plan ini.

Kini pelanggan anda boleh mengklik **Tukar Templat Tapak** di dalam halaman Account mereka.

![Butang Tukar Templat Tapak pada halaman Account](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 menunjukkan panel penukaran templat yang direka semula. Panel bermula dengan **kad templat semasa** supaya pelanggan boleh melihat templat mana yang aktif sebelum mereka memilih pengganti.

Grid templat tapak tersedia yang berterusan kekal kelihatan semasa pelanggan menyemak pilihan mereka. Ini membantu mereka membandingkan templat yang dibenarkan untuk plan mereka tanpa kehilangan pandangan terhadap pilihan semasa.

![Senarai templat tapak tersedia untuk plan](/img/config/site-templates-list.png)

Selepas memilih templat yang ingin ditukar, mereka akan diminta untuk mengesahkan perubahan tersebut.

![Dialog pengesahan penukaran templat tapak](/img/account-page/template-switch-confirm.png)

Selepas menghidupkan pengesahan dan mengklik **Proses Penukaran** , templat tapak baharu akan digunakan pada laman web pelanggan anda.

Pelanggan juga boleh menggunakan **Reset current template** daripada panel ini apabila mereka perlu menetapkan semula tapak kembali kepada templat yang sedang ditetapkan. Seperti menukar kepada templat lain, menetapkan semula templat boleh menimpa kandungan tapak, jadi pelanggan hanya patut mengesahkannya apabila mereka memahami tindakan tetapan semula tersebut.

### Menambah Domain Tersuai:

Pelanggan anda juga akan mempunyai pilihan untuk menambah domain tersuai bagi pelan ini pada halaman account mereka. Untuk membenarkan pelanggan anda menggunakan domain tersuai, pergi ke **Ultimate Multisite > Settings >** **Domain Mapping**.

Hidupkan pilihan **Enable Domain Mapping**. Ini akan membenarkan pelanggan anda menggunakan domain tersuai pada peringkat rangkaian.

Jangan lupa juga untuk menyemak jika domain mapping didayakan berdasarkan produk - kerana anda boleh mengehadkan produk supaya tidak membenarkan pelanggan anda menggunakan domain tersuai.

Pergi ke **Ultimate Multisite > Products**. Pilih pelan pilihan anda dan pergi ke tab **Custom Domains**. Hidupkan pilihan **Allow Custom Domains**.

![Tab Custom Domains dengan togol Allow Custom Domains](/img/config/product-custom-domains.png)

Ini akan membenarkan semua pelanggan yang melanggan pelan khusus ini menggunakan domain tersuai. Sekarang, pada halaman Account, pelanggan anda boleh menambah domain tersuai dengan mengklik **Add Domain**.

![Butang Add Domain pada halaman account](/img/account-page/add-domain-button.png)

Tetingkap pertama yang dibuka akan menunjukkan mesej kepada pelanggan anda yang memberi arahan tentang cara mengemas kini rekod DNS mereka untuk memastikan domain tersuai ini berfungsi pada rangkaian anda.

![Arahan DNS yang dipaparkan semasa menambah domain tersuai](/img/account-page/add-domain-dns.png)

Mesej ini boleh diedit (oleh anda) pada **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Tetapan Add New Domain Instructions dalam Domain Mapping](/img/config/settings-domain-mapping.png)

Berikut ialah paparan penuh halaman tetapan domain mapping:

![Halaman penuh tetapan domain mapping](/img/config/settings-domain-mapping-full.png)

Selepas mengklik **Next Step** , pelanggan anda boleh menambah nama domain tersuai mereka dan memilih sama ada domain tersuai ini akan menjadi domain utama. Perlu diingat bahawa pelanggan anda boleh menggunakan lebih daripada satu domain tersuai untuk laman web mereka, jadi mereka boleh memilih yang mana satu akan menjadi domain utama.

![Entri nama domain tersuai dengan pilihan domain utama](/img/account-page/add-domain-primary.png)

Selepas mengklik **Add Domain** , domain tersebut akan ditambah ke account pelanggan anda. Apa yang perlu mereka lakukan sekarang ialah menukar rekod DNS domain tersuai ini pada pendaftar domain mereka.

### Menukar Kata Laluan:

Di dalam dashboard account, pelanggan anda juga boleh menukar kata laluan mereka dengan mengklik **Change Password**.

![Butang Change Password pada halaman account](/img/account-page/change-password-button.png)

Ini akan memaparkan tetingkap baharu di mana pelanggan anda perlu mengisi kata laluan semasa mereka dan kemudian mengisi kata laluan baharu yang ingin mereka gunakan.

![Borang tukar kata laluan dengan medan kata laluan semasa dan baharu](/img/account-page/change-password-form.png)

### Zon Bahaya:

Kami juga mempunyai dua pilihan yang dipaparkan pada bahagian **Danger Zone**: **Delete Site** dan **Delete Account**. Kedua-duanya berada pada bahagian Danger Zone kerana kedua-dua tindakan ini tidak boleh dibatalkan. Jika pelanggan anda memadamkan laman web atau account mereka, mereka tidak boleh memulihkannya semula.

![Danger Zone dengan pilihan Delete Site dan Delete Account](/img/account-page/danger-zone.png)

Jika pelanggan anda mengklik mana-mana daripada dua pilihan ini, mereka akan dipaparkan tetingkap di mana mereka perlu menghidupkan pilihan untuk membuang laman web atau account dan mereka akan diberi amaran bahawa tindakan ini tidak boleh dibuat asal.

![Dialog pengesahan Delete Site](/img/account-page/delete-site-confirm.png)

![Dialog pengesahan Delete Account](/img/account-page/delete-account-confirm.png)

Jika mereka memadamkan laman web mereka, account dan keahlian mereka masih tidak akan terjejas. Mereka hanya akan kehilangan semua kandungan pada laman web mereka. Jika mereka memadamkan account mereka, semua laman web, keahlian dan maklumat berkaitan account ini akan hilang.
