---
title: Halaman Akaun Pelanggan
sidebar_position: 14
_i18n_hash: 60261800e2a155b4b190a325bdb50bb2
---
# Halaman Akaun Pelanggan Anda (v2)

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Apabila pelanggan melanggan sesuatu pelan di rangkaian anda, mereka akan mendapat akses kepada laman web dan dashboard dengan maklumat penting mengenai pembayaran, keahlian, domain, had pelan, dan sebagainya...

Dalam tutorial ini, kami akan membimbing anda melalui halaman akaun pelanggan dan anda akan melihat apa yang pelanggan anda boleh lihat dan lakukan di dalamnya.

## Halaman Akaun

Halaman akaun boleh diakses dengan mengklik **Account** di dalam dashboard pelanggan anda.

![Menu Account di dalam dashboard pelanggan](/img/admin/dashboard.png)

![Gambaran keseluruhan halaman akaun pelanggan](/img/admin/dashboard.png)

Selepas pelanggan mengklik padanya, mereka akan melihat gambaran keseluruhan keahlian, alamat pengebilan, invois, domain, had laman, dan juga boleh menukar **Site Template** (jika dibenarkan dalam rangkaian anda).

Mereka juga boleh menukar keahlian kepada pelan lain, atau membeli pakej atau perkhidmatan lain yang anda tawarkan. Mari kita lihat setiap bahagian secara berasingan.

### Gambaran Keseluruhan Keahlian Anda:

Blok pertama tepat di bawah nama laman web pelanggan anda menunjukkan gambaran keseluruhan pelan semasa mereka dan perkhidmatan/pakej yang dibeli bersamanya. Blok ini juga menunjukkan nombor keahlian, jumlah awal yang dibayar, kos pelan dan sebarang perkhidmatan/pakej serta berapa kali mereka telah dibilkan untuk keahlian ini. Mereka juga boleh melihat sama ada keahlian adalah **Active**, **Expired** atau **Canceled**.

![Gambaran keseluruhan keahlian menunjukkan pelan, jumlah, dan butiran pengebilan](/img/admin/memberships-list.png)

Tepat di bawah blok ini, pelanggan anda boleh melihat blok **About This Site** dan **Site Limits**. Blok-blok ini menunjukkan semua had yang datang dengan pelan mereka: ruang cakera, pos, halaman, lawatan, dan sebagainya... Had ini boleh dikonfigurasi pada setiap halaman pelan di **Ultimate Multisite > Products**.

![Blok About This Site dan Site Limits menunjukkan had pelan](/img/admin/dashboard.png)

Di sebelah kanan **Your Membership**, pelanggan boleh mengklik **Change**. Ini akan menunjukkan semua pelan dan pakej/perkhidmatan yang tersedia. Jika mereka memilih pelan lain, had untuk pelan tersebut akan menggantikan had semasa keahlian - tidak kira sama ada mereka menurunkan atau menaikkan taraf.

Sekarang, jika pelanggan anda memilih untuk membeli pakej atau perkhidmatan untuk keahlian semasa ini - seperti lebih banyak ruang cakera atau lawatan - keahlian semasa tidak akan diubah tetapi hanya pakej baharu akan ditambah kepadanya.

Perlu diingat bahawa kod kupon tidak boleh ditambah di halaman perubahan keahlian ini. Jika pelanggan menggunakan kod kupon pada pembelian keahlian pertama, kod tersebut juga akan digunakan untuk keahlian baharu ini.

### Mengemaskini Alamat Pengebilan:

Di halaman akaun, pelanggan anda juga boleh mengemaskini alamat pengebilan mereka. Mereka hanya perlu mengklik **Update** di sebelah _Billing Address_.

![Bahagian Billing Address dengan butang Update](/img/admin/customers-list.png)

Tetingkap baharu akan muncul kepada pelanggan anda. Apa yang perlu dilakukan adalah mengisi alamat baharu dan mengklik _Save Changes_.

![Borang kemaskini alamat pengebilan](/img/admin/customers-list.png)

### Menukar Site Template:

Untuk membenarkan pelanggan anda menukar site template mereka, anda perlu pergi ke **Ultimate Multisite > Settings > Sites** dan aktifkan pilihan **Allow Template Switching**.

Juga, di **Ultimate Multisite > Products**, pilih pelan anda dan pergi ke tab **Site Templates**. Pastikan pilihan **Allow Site Templates** diaktifkan dan pada **Site Template Selection Mode**, pilihan **Choose Available Site Templates** dipilih.

![Tab site templates produk dengan mod pemilihan template](/img/config/product-site-templates.png)

Anda akan dapat melihat semua site template yang tersedia di laman web anda. Pilih yang mana anda mahu jadikan tersedia dan yang mana anda tidak mahu tersedia kepada pelanggan yang melanggan pelan ini. Perlu diingat bahawa pilihan ini juga mempengaruhi borang checkout, jadi mana-mana template yang dipilih sebagai **Not Available** tidak akan muncul di halaman pendaftaran untuk pelan ini.

Sekarang pelanggan anda boleh mengklik **Change Site Template** di dalam halaman akaun mereka.

![Butang Change Site Template di halaman akaun](/img/admin/dashboard.png)  
Senarai semua Site Template yang tersedia untuk pelan ini akan muncul kepada pelanggan anda.

![Senarai site template yang tersedia untuk pelan](/img/config/site-templates-list.png)

Selepas memilih yang mereka mahu tukar, mereka akan diminta untuk mengesahkan perubahan tersebut.

![Dialog pengesahan pertukaran site template](/img/admin/dashboard.png)

Selepas mengaktifkan pengesahan dan mengklik **Process Switch**, site template baharu akan digunakan di laman web pelanggan anda.

### Menambah Domain Tersuai:

Pelanggan anda juga mempunyai pilihan untuk menambah domain tersuai untuk pelan ini di halaman akaun mereka. Untuk membenarkan pelanggan anda menggunakan domain tersuai, pergi ke **Ultimate Multisite > Settings > Domain Mapping**.

Aktifkan pilihan **Enable Domain Mapping**. Ini akan membenarkan pelanggan anda menggunakan domain tersuai di peringkat rangkaian.

Jangan lupa juga untuk menyemak sama ada domain mapping diaktifkan berdasarkan produk - kerana anda boleh menghadkan sesuatu produk untuk tidak membenarkan pelanggan anda menggunakan domain tersuai.

Pergi ke **Ultimate Multisite > Products**. Pilih pelan pilihan anda dan pergi ke tab **Custom Domains**. Aktifkan pilihan **Allow Custom Domains**.

![Tab Custom Domains dengan togol Allow Custom Domains](/img/config/product-custom-domains.png)

Ini akan membenarkan semua pelanggan yang melanggan pelan khusus ini untuk menggunakan domain tersuai. Sekarang, di halaman Account, pelanggan anda boleh menambah domain tersuai dengan mengklik **Add Domain**.

![Butang Add Domain di halaman akaun](/img/admin/domains-list.png)

Tetingkap pertama yang dibuka akan menunjukkan mesej kepada pelanggan anda yang memberi arahan tentang cara mengemaskini rekod DNS mereka untuk menjadikan domain tersuai ini berfungsi di rangkaian anda.

![Arahan DNS ditunjukkan semasa menambah domain tersuai](/img/admin/domains-list.png)

Mesej ini boleh diedit (oleh anda) di **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Tetapan Add New Domain Instructions dalam Domain Mapping](/img/config/settings-domain-mapping.png)

Selepas mengklik **Next Step**, pelanggan anda boleh menambah nama domain tersuai mereka dan memilih sama ada domain tersuai ini akan menjadi yang utama. Perlu diingat bahawa pelanggan anda boleh menggunakan lebih daripada satu domain tersuai untuk laman web mereka, jadi mereka boleh memilih yang mana akan menjadi yang utama.

![Kemasukan nama domain tersuai dengan pilihan domain utama](/img/admin/domains-list.png)

Selepas mengklik **Add Domain**, domain akan ditambah ke akaun pelanggan anda. Apa yang perlu mereka lakukan sekarang adalah menukar rekod DNS domain tersuai ini di pendaftar domain mereka.

### Menukar Kata Laluan:

Di dalam dashboard akaun, pelanggan anda juga boleh menukar kata laluan mereka dengan mengklik **Change Password**.

![Butang Change Password di halaman akaun](/img/admin/dashboard.png)

Ini akan menunjukkan tetingkap baharu di mana pelanggan anda perlu mengisi kata laluan semasa mereka dan kemudian mengisi kata laluan baharu yang mereka mahu gunakan.

![Borang tukar kata laluan dengan medan kata laluan semasa dan baharu](/img/admin/dashboard.png)

### Zon Bahaya:

Kami juga mempunyai dua pilihan yang ditunjukkan di bahagian **Danger Zone**: **Delete Site** dan **Delete Account**. Kedua-duanya berada di bahagian Danger Zone kerana kedua-dua tindakan ini tidak boleh diundur. Jika pelanggan anda memadamkan laman web atau akaun mereka, mereka tidak boleh memulihkannya semula.

![Danger Zone dengan pilihan Delete Site dan Delete Account](/img/admin/dashboard.png)

Jika pelanggan anda mengklik mana-mana dua pilihan ini, mereka akan ditunjukkan tetingkap di mana mereka perlu mengaktifkan pilihan untuk membuang laman web atau akaun dan mereka akan diberi amaran bahawa tindakan ini tidak boleh diundur.

![Dialog pengesahan Delete Site](/img/admin/dashboard.png)

![Dialog pengesahan Delete Account](/img/admin/dashboard.png)

Jika mereka memadamkan laman web mereka, akaun dan keahlian mereka masih tidak akan terjejas. Mereka hanya akan kehilangan semua kandungan di laman web mereka. Jika mereka memadamkan akaun mereka, semua laman web, keahlian dan maklumat berkaitan akaun ini akan hilang.
