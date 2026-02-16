---
title: Templat Laman
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# Templat Tapak (v2)

_**NOTA: Artikel ini merujuk kepada Ultimate Multisite versi 2.x. Jika anda menggunakan versi 1.x,**_ **lihat artikel ini** _**.**_

Matlamat kami semasa mencipta rangkaian premium dengan Ultimate Multisite adalah untuk mengautomasikan sebanyak mungkin proses sambil memberi pelanggan kita fleksibiliti dan pelbagai pilihan ketika membina laman web mereka. Salah satu cara mudah untuk mencapai keseimbangan ini adalah dengan menggunakan ciri Templat Tapak Ultimate Multisite.

## Apakah itu Templat Tapak?

Seperti namanya, Templat Tapak adalah tapak asas yang boleh digunakan sebagai rangka ketika mencipta tapak baharu dalam rangkaian anda.

Ini bermakna anda boleh mencipta tapak asas, mengaktifkan plugin yang berbeza, menetapkan tema aktif, dan menyesuaikannya mengikut kehendak anda. Kemudian, apabila pelanggan anda mencipta akaun baharu, mereka tidak akan mendapat tapak WordPress lalai tanpa kandungan bermakna, sebaliknya mereka akan mendapat salinan tapak asas anda dengan semua penyesuaian dan kandungan yang sudah tersedia.

Kedengarannya hebat, tetapi bagaimana saya mencipta templat tapak baharu? Ia semudah yang mungkin.

## Mencipta dan Mengedit Templat Tapak Baharu

Templat Tapak hanyalah tapak biasa dalam rangkaian anda. Untuk mencipta templat baharu, anda hanya perlu pergi ke **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Butang Add site dalam halaman senarai Sites](/img/config/site-templates-list.png)**

Ini akan membuka tetingkap modal yang meminta **Site title, Site Domain/path,** dan **Site type**. Di bawah medan drop-down **Site Type**, pastikan anda memilih **Site Template** *.*

_![Modal add site template dengan dropdown site type](/img/config/site-templates-list.png)_

Di bahagian bawah borang, anda akan melihat suis togol **Copy Site**. Ini membolehkan anda mencipta templat tapak baharu berdasarkan templat tapak sedia ada sebagai titik permulaan untuk menjimatkan masa berbanding mencipta templat tapak dari awal.

![Modal add site template dengan togol copy site](/img/config/site-templates-list.png)

### Menyesuaikan Kandungan Templat Tapak

Untuk menyesuaikan templat tapak anda, hanya navigasi ke panel dashboard-nya dan buat perubahan yang diperlukan. Anda boleh mencipta catatan, halaman baharu, mengaktifkan plugin dan menukar tema aktif. Anda juga boleh pergi ke Customizer dan mengubah pelbagai pilihan penyesuaian.

Semua data tersebut akan disalin apabila pelanggan mencipta tapak baharu berdasarkan Templat Tapak itu.

### Pilihan Lanjutan

Jika anda mahir dengan pengekodan tersuai, anda boleh menggunakan API Search and Replace kami untuk menggantikan maklumat secara automatik pada tapak baharu selepas ia dicipta. Ini berguna untuk perkara seperti menggantikan nama syarikat pada halaman About, menggantikan e-mel hubungan pada halaman Contact, dan sebagainya.

### Menggunakan Templat Tapak

Baiklah, anda sudah mencipta beberapa Templat Tapak berbeza dengan reka bentuk, tema dan tetapan yang berbeza. Bagaimana anda menjadikannya berguna dalam rangkaian anda sekarang?

Pada asasnya, terdapat dua pendekatan yang boleh anda gunakan (tidak serentak):

  * Melampirkan satu Templat Tapak pada setiap Plan anda

**ATAU**

  * Membenarkan pelanggan anda memilih sendiri templat tapak semasa pendaftaran.

#### Mod 1: Tetapkan Templat Tapak

Dalam mod ini, pelanggan anda tidak boleh memilih templat semasa mencipta akaun, sebaliknya anda akan menentukan templat mana yang perlu digunakan pada setiap Plan anda.

Untuk melakukan ini, anda perlu pergi ke **Ultimate Multisite > Products > Edit**.

![Edit product untuk menetapkan templat tapak](/img/config/product-site-templates.png)

Ini akan membawa anda ke halaman **Edit Product**. Di bawah bahagian **Product Options**, cari tab **Site template** dan pilih pilihan **Assign Site Template** dari medan drop-down. Ini akan memaparkan senarai templat tapak yang tersedia dan membolehkan anda memilih hanya satu templat tapak khusus untuk produk tersebut.

![Tab site template produk dengan pilihan assign site template](/img/config/product-site-templates.png)

#### Mod 2: Pilih Templat Tapak yang Tersedia

Dalam mod ini, anda memberi pelanggan pilihan semasa proses pendaftaran. Mereka boleh memilih dari templat tapak berbeza yang anda tentukan dalam tetapan produk. Anda mempunyai pilihan untuk mengehadkan templat tapak yang boleh mereka pilih di bawah produk yang dipilih. Ini membolehkan anda mempunyai set templat tapak yang berbeza untuk setiap produk, yang ideal untuk menonjolkan fungsi dan ciri berbeza bagi produk berharga lebih tinggi.

Pada halaman **Edit Product**. Di bawah bahagian **Product Options**, cari tab **Site template** dan pilih pilihan **Choose Available Site Template** dari medan drop-down. Ini akan memaparkan senarai templat tapak yang tersedia dan membolehkan anda memilih templat tapak yang ingin disediakan. Anda boleh melakukan ini dengan memilih Behavior-nya: **Available** jika anda mahu templat tapak dimasukkan dalam senarai. _**Not Available**_ jika anda mahu templat tapak tidak dipaparkan sebagai pilihan. Dan **Pre-selected** jika anda mahu salah satu templat tapak yang disenaraikan menjadi pilihan lalai.

![Pilih templat tapak tersedia dengan pilihan behavior](/img/config/product-site-templates.png)

### Mod Lalai: Pemilihan Templat Tapak pada Borang Checkout

Jika anda mahu semua templat tapak tersedia semasa pendaftaran, atau mungkin tidak mahu membuat kerja tambahan menetapkan atau menentukan templat tapak untuk setiap produk yang anda cipta. Maka anda boleh menetapkan pemilihan templat tapak di bawah **Checkout Form** anda. Untuk melakukan ini, anda hanya perlu pergi ke **Ultimate Multisite > Checkout Forms**. Kemudian klik **Edit** di bawah borang yang ingin anda konfigurasikan.

![Halaman senarai Checkout forms](/img/config/checkout-forms-list.png)

Ini akan membuka halaman **Edit Checkout Form**. Cari medan **Template Selection** dan klik **Edit** di bawahnya.

![Editor checkout form dengan medan template selection](/img/config/checkout-form-editor.png)

Tetingkap modal akan muncul. Di bawah medan **Template Sites** anda boleh memilih dan menyenaraikan semua templat tapak yang ingin disediakan semasa pendaftaran. Templat tapak yang anda tentukan dari sini akan tersedia tidak kira produk apa yang dipilih pengguna.

![Medan template sites dalam editor checkout form](/img/config/checkout-form-step.png)

### Pilihan Templat Tapak

Terdapat fungsi templat tapak lain yang boleh anda hidupkan atau matikan di bawah tetapan Ultimate Multisite.

![Pilihan templat tapak dalam tetapan Ultimate Multisite](/img/config/settings-sites.png)

#### Benarkan Pertukaran Templat

Mengaktifkan pilihan ini membolehkan pelanggan anda menukar templat yang mereka pilih semasa proses pendaftaran selepas akaun dan tapak dicipta. Ini berguna dari sudut pandangan pelanggan kerana ia membolehkan mereka memilih semula templat jika kemudian mereka mendapati pilihan asal tidak sesuai untuk keperluan mereka.

#### Benarkan Pengguna Menggunakan Tapak Mereka sebagai Templat

Memandangkan pengguna subsite telah meluangkan masa membina dan mereka bentuk tapak mereka sendiri, mereka mungkin mahu mengklon dan menggunakannya sebagai salah satu templat tapak yang tersedia semasa mencipta subsite lain dalam rangkaian anda. Pilihan ini membolehkan mereka mencapai itu.

#### Salin Media semasa Penduplikasian Templat

Menanda pilihan ini akan menyalin media yang dimuat naik pada tapak templat ke tapak yang baru dicipta. Ini boleh diatasi pada setiap plan.

#### **Halang Enjin Carian daripada Mengindeks Templat Tapak**

Templat tapak seperti yang dibincangkan dalam artikel ini adalah rangka asas tetapi masih sebahagian daripada rangkaian anda, bermakna ia masih boleh ditemui oleh enjin carian. Pilihan ini membolehkan anda menyembunyikan templat tapak supaya enjin carian boleh mengindeksnya.

## Pra-pengisian Templat Tapak dengan Cari-dan-Ganti Automatik

Salah satu ciri paling berkuasa Ultimate Multisite adalah keupayaan untuk menambah medan teks, warna dan pilihan sewenang-wenangnya pada borang pendaftaran. Setelah data itu ditangkap, kita boleh menggunakannya untuk pra-pengisian kandungan di bahagian tertentu templat tapak yang dipilih. Kemudian, apabila tapak baharu diterbitkan, Ultimate Multisite akan menggantikan placeholder dengan maklumat sebenar yang dimasukkan semasa pendaftaran.

Contohnya, jika anda ingin mendapatkan nama syarikat pengguna akhir semasa pendaftaran dan meletakkan nama syarikat itu secara automatik pada halaman utama. Pada halaman utama tapak templat anda, anda perlu menambah placeholder, seperti dalam imej di bawah (placeholder perlu ditambah dengan kurungan kerinting berganda - {{placeholder_name}}).

![Halaman utama dengan teks placeholder dalam kurungan kerinting](/img/config/site-templates-list.png)

Kemudian, anda boleh menambah medan pendaftaran yang sepadan pada borang checkout anda untuk menangkap data tersebut:

![Borang checkout dengan medan pendaftaran yang sepadan](/img/config/checkout-form-editor.png)

Pelanggan anda kemudian boleh mengisi medan tersebut semasa pendaftaran.

![Medan pendaftaran diisi oleh pelanggan](/img/config/checkout-form-step.png)

![Pratonton borang pendaftaran](/img/config/checkout-form-editor.png)

Ultimate Multisite kemudian akan menggantikan placeholder dengan data yang diberikan oleh pelanggan secara automatik.

![Placeholder digantikan dengan data pelanggan pada tapak](/img/config/site-templates-list.png)

### Menyelesaikan Masalah "Templat Penuh dengan Placeholder"

Semua itu bagus, tetapi kita menghadapi masalah yang tidak menarik: sekarang templat tapak kita - yang boleh dilawati oleh pelanggan - penuh dengan placeholder hodoh yang tidak memberitahu banyak.

Untuk menyelesaikan ini, kami menawarkan pilihan untuk menetapkan nilai palsu untuk placeholder, dan kami menggunakan nilai tersebut untuk mencari dan menggantikan kandungannya pada tapak templat semasa pelanggan anda melawat.

Anda boleh mengakses editor placeholder templat dengan pergi ke **Ultimate Multisite > Settings > Sites**, dan kemudian, pada bar sisi, klik pautan **Edit Placeholders**.

![Tetapan placeholder di bawah halaman tetapan Sites](/img/config/settings-sites.png)

Itu akan membawa anda ke editor kandungan placeholder, di mana anda boleh menambah placeholder dan kandungan masing-masing.

![Editor kandungan placeholder templat](/img/config/settings-sites.png)
