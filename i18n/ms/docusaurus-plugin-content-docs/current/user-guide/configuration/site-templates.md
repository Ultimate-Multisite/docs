---
title: Templat Laman
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Templat Laman (v2)

_**NOTA: Artikel ini merujuk kepada Ultimate Multisite versi 2.x. Jika anda menggunakan versi 1.x,**_ **lihat artikel ini** _**.**_

Matlamat kami apabila mencipta rangkaian premium dengan Ultimate Multisite ialah mengautomasikan sebanyak mungkin proses sambil memberikan klien kami fleksibiliti dan pelbagai pilihan untuk dipilih apabila mencipta laman web mereka. Satu cara mudah untuk mencapai keseimbangan ini adalah dengan menggunakan ciri Templat Laman Ultimate Multisite.

## Apakah itu Templat Laman? {#what-is-a-site-template}

Seperti namanya, Templat Laman ialah laman asas yang boleh digunakan sebagai asas apabila mencipta laman baharu dalam rangkaian anda.

Ini bermakna anda boleh mencipta laman asas, mengaktifkan plugin yang berbeza, menetapkan theme aktif, dan menyesuaikannya dengan apa-apa cara yang anda suka. Kemudian, apabila pelanggan anda mencipta account baharu, daripada mendapat laman WordPress lalai tanpa kandungan bermakna di dalamnya, mereka akan mendapat salinan laman asas anda dengan semua penyesuaian dan kandungan sudah tersedia.

Itu kedengaran hebat, tetapi bagaimana saya mencipta templat laman baharu? Ia semudah yang mungkin.

## Mencipta dan Mengedit Templat Laman baharu {#creating-and-editing-a-new-site-template}

Templat Laman hanyalah laman biasa pada rangkaian anda. Untuk mencipta templat baharu, anda hanya boleh pergi ke **Pentadbir Rangkaian > Ultimate Multisite > Laman > Tambah Laman.**

**![Butang tambah laman pada halaman senarai Laman](/img/config/site-templates-list.png)**

Ini akan membuka tetingkap modal yang akan meminta **Tajuk laman, Domain/laluan Laman,** dan **Jenis laman**. Di bawah medan juntai bawah **Jenis Laman**, pastikan anda memilih **Templat Laman** *.*

_![Modal tambah templat laman dengan juntai bawah jenis laman](/img/config/site-templates-list.png)_

Anda juga boleh menambah penerangan yang menghadap pelanggan untuk menjelaskan apa yang disertakan dalam templat:

![Medan penerangan templat laman pada skrin edit templat laman](/img/config/site-template-edit-description.png)

Di bahagian bawah borang, anda akan melihat suis togol **Salin Laman**. Ini akan membolehkan anda mencipta templat laman baharu berdasarkan templat laman sedia ada sebagai titik permulaan anda untuk membantu anda menjimatkan masa dan bukannya mencipta templat laman dari awal.

![Modal tambah templat laman dengan togol salin laman](/img/config/site-templates-list.png)

### Menyesuaikan kandungan Templat Laman {#customizing-the-contents-of-a-site-template}

Untuk menyesuaikan templat laman anda, hanya navigasi ke panel dashboardnya dan buat perubahan yang anda perlukan. Anda boleh mencipta pos baharu, halaman, mengaktifkan plugin dan menukar theme aktif. Anda juga boleh pergi ke Penyesuai dan menukar pelbagai jenis pilihan penyesuaian.

![Antara muka edit templat laman](/img/config/site-template-edit.png)

Semua data itu akan disalin apabila pelanggan mencipta laman baharu berdasarkan Templat Laman tersebut.

### Pilihan Lanjutan {#advanced-options}

Jika anda mahir dengan sedikit pengekodan tersuai, anda boleh menggunakan API Cari dan Ganti kami untuk menggantikan maklumat secara automatik pada laman baharu selepas penciptaannya. Ini berguna untuk perkara seperti menggantikan nama syarikat pada halaman Perihal, menggantikan e-mel hubungan pada halaman Hubungan, dan sebagainya.

### Menggunakan Templat Laman {#using-site-templates}

Baiklah, jadi anda telah mencipta sekumpulan Templat Laman yang berbeza dengan reka bentuk, theme dan tetapan yang berbeza. Bagaimana anda menjadikannya berguna pada rangkaian anda sekarang?

Pada asasnya, terdapat dua pendekatan yang boleh anda gunakan sekarang (bukan serentak):

  * Melampirkan satu Templat Laman kepada setiap Plan anda

**ATAU**

  * Membenarkan klien anda memilih templat laman sendiri semasa pendaftaran.

#### Mod 1: Tetapkan Templat Laman {#mode-1-assign-site-template}

Dalam mod ini, klien anda tidak akan dapat memilih templat apabila mereka mencipta account, sebaliknya anda akan menentukan templat mana yang harus digunakan pada setiap Plan anda.

Untuk melakukannya, anda perlu pergi ke **Ultimate Multisite > Produk > Edit**.

![Edit produk untuk menetapkan templat laman](/img/config/product-site-templates.png)

Ini akan membawa anda ke halaman **Edit Produk**. Di bawah seksyen **Pilihan Produk**, cari tab **Templat laman** dan pilih pilihan **Tetapkan Templat Laman** daripada medan juntai bawah. Ini akan memaparkan senarai templat laman yang tersedia dan ia akan membolehkan anda memilih hanya satu templat laman yang dikhaskan untuk produk tersebut.

![Tab templat laman produk dengan pilihan tetapkan templat laman](/img/config/product-site-templates.png)

#### Mod 2: Pilih Templat Laman Tersedia {#mode-2-choose-available-site-template}

Dalam mod ini, anda akan memberi klien anda pilihan semasa proses pendaftaran. Mereka akan dapat memilih daripada templat laman berbeza yang anda tentukan di bawah tetapan produk. Anda mempunyai pilihan untuk mengehadkan templat laman yang boleh mereka pilih di bawah produk yang dipilih. Ini akan membolehkan anda mempunyai set templat laman yang berbeza di bawah setiap produk, yang sesuai untuk menyerlahkan fungsi dan ciri yang berbeza bagi produk dengan harga lebih tinggi.

Pada halaman **Edit Produk**. Di bawah seksyen **Pilihan Produk**, cari tab **Templat laman** dan pilih pilihan **Pilih Templat Laman Tersedia** daripada medan juntai bawah. Ini akan memaparkan senarai templat laman yang tersedia dan ia akan membolehkan anda memilih templat laman yang anda mahu tersedia. Anda boleh melakukan ini dengan memilih Tingkah Lakunya: **Tersedia** jika anda mahu templat laman disertakan dalam senarai. _**Tidak Tersedia**_ jika anda mahu templat laman tidak dipaparkan sebagai pilihan. Dan **Diprapilih** jika anda mahu salah satu templat laman yang disenaraikan menjadi pilihan lalai yang dipilih.

![Pilih templat laman tersedia dengan pilihan tingkah laku](/img/config/product-site-templates.png)

### Mod Lalai: Pemilihan templat laman pada borang Checkout {#default-mode-site-template-selection-on-the-checkout-form}

Jika anda mahu semua templat laman anda tersedia semasa pendaftaran, atau mungkin tidak mahu melakukan kerja tambahan untuk menetapkan atau menentukan templat laman di bawah setiap produk yang anda cipta. Maka anda boleh menetapkan pemilihan templat laman di bawah **Borang Checkout** anda sahaja. Untuk melakukan ini, pergi ke **Ultimate Multisite > Borang Checkout** dan klik **Edit** di bawah borang yang anda mahu konfigurasikan.

Ini akan memaparkan halaman **Edit Borang Checkout**. Cari medan **Pemilihan Templat** dan klik **Edit** di bawahnya.

Tetingkap modal akan muncul. Di bawah medan **Template Sites** anda boleh memilih dan menyenaraikan semua templat tapak yang anda mahu tersedia semasa pendaftaran. Templat tapak yang anda tentukan dari sini akan tersedia tanpa mengira apa jua produk yang dipilih oleh pengguna.

![Medan pemilihan templat dalam editor borang checkout](/img/config/checkout-form-template-step.png)

Di frontend, pelanggan melihat pemilih templat semasa checkout dan boleh memilih reka bentuk permulaan untuk tapak baharu mereka.

![Pemilih templat frontend semasa pendaftaran](/img/config/frontend-template-chooser.png)

### Pilihan Templat Tapak {#site-template-options}

Terdapat fungsi templat tapak lain yang tersedia yang boleh anda hidupkan atau matikan di bawah tetapan Ultimate Multisite.

![Pilihan templat tapak dalam tetapan Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Benarkan Penukaran Templat {#allow-template-switching}

Mengaktifkan pilihan ini akan membenarkan klien anda menukar templat yang mereka pilih semasa proses pendaftaran selepas Account dan tapak dicipta. Ini berguna dari sudut pandangan klien kerana ia membolehkan mereka memilih semula templat jika kemudian mereka mendapati pilihan asal mereka bukan yang terbaik untuk keperluan khusus mereka.

#### Benarkan Pengguna menggunakan Tapak mereka sebagai templat {#allow-users-to-use-their-site-as-templates}

Memandangkan pengguna sub-tapak telah meluangkan masa membina dan mereka bentuk tapak mereka sendiri, mereka mungkin mahu mengklon dan menggunakannya sebagai salah satu templat tapak yang tersedia apabila mencipta sub-tapak lain pada rangkaian anda. Pilihan ini akan membolehkan mereka mencapainya.

#### Salin Media pada Penduaan Templat {#copy-media-on-template-duplication}

Menanda pilihan ini akan menyalin media yang dimuat naik pada tapak templat ke tapak yang baru dicipta. Ini boleh diganti pada setiap pelan.

#### **Halang Enjin Carian daripada mengindeks Templat Tapak** {#prevent-search-engines-from-indexing-site-templates}

Templat tapak seperti yang dibincangkan dalam artikel ini ialah boilerplate tetapi masih sebahagian daripada rangkaian anda, yang bermaksud ia masih tersedia untuk dicari oleh enjin carian. Pilihan ini akan membolehkan anda menyembunyikan templat tapak supaya enjin carian boleh mengindeksnya.

## Praisi Templat Tapak dengan carian-dan-ganti automatik {#pre-populating-site-templates-with-auto-search-and-replace}

Salah satu ciri paling berkuasa Ultimate Multisite ialah keupayaan untuk menambah medan teks, warna dan pilihan sewenang-wenangnya pada borang pendaftaran. Setelah data itu ditangkap, kita boleh menggunakannya untuk praisi kandungan dalam bahagian tertentu templat tapak yang dipilih. Kemudian, apabila tapak baharu sedang diterbitkan, Ultimate Multisite akan menggantikan placeholder dengan maklumat sebenar yang dimasukkan semasa pendaftaran.

Sebagai contoh, jika anda mahu mendapatkan nama syarikat pengguna akhir anda semasa pendaftaran dan meletakkan nama syarikat secara automatik pada halaman utama. Pada halaman utama tapak templat anda, anda perlu menambah placeholder, seperti dalam imej di bawah (placeholder hendaklah ditambah dengan dikelilingi oleh kurungan kurawal berganda - {{placeholder_name}}).

![Halaman utama dengan teks placeholder dalam kurungan kurawal](/img/config/site-templates-list.png)

Kemudian, anda boleh menambah medan pendaftaran yang sepadan pada borang checkout anda untuk menangkap data tersebut. Editor borang checkout yang sama digunakan untuk pemilihan templat membolehkan anda meletakkan medan tersuai bersama pemilih templat:

![Pemilihan templat dan medan pendaftaran dalam editor borang checkout](/img/config/checkout-form-template-step.png)

Pelanggan anda kemudian akan dapat mengisi medan tersebut semasa pendaftaran.

![Borang checkout frontend dengan pemilih templat](/img/config/frontend-template-chooser.png)

Ultimate Multisite kemudian akan menggantikan placeholder dengan data yang diberikan oleh pelanggan secara automatik.

![Placeholder digantikan dengan data pelanggan pada tapak](/img/config/site-templates-list.png)

### Menyelesaikan masalah "templat penuh dengan placeholder" {#solving-the-template-full-of-placeholders-problem}

Semua itu bagus, tetapi kita memang menghadapi masalah yang tidak menarik: kini templat tapak kita - yang boleh dilawati oleh pelanggan kita - penuh dengan placeholder yang tidak menarik dan tidak banyak menerangkan apa-apa.

Untuk menyelesaikannya, kami menawarkan pilihan untuk menetapkan nilai palsu bagi placeholder, dan kami menggunakan nilai tersebut untuk mencari dan menggantikan kandungannya pada tapak templat semasa pelanggan anda melawat.

Anda boleh mendapat akses kepada editor placeholder templat dengan pergi ke **Ultimate Multisite > Settings > Sites**, dan kemudian, pada bar sisi, mengklik pautan **Edit Placeholders**.

![Tetapan templat tapak di bawah halaman tetapan Sites](/img/config/settings-sites-templates-section.png)

Itu akan membawa anda ke editor kandungan placeholder, tempat anda boleh menambah placeholder dan kandungan masing-masing.

![Titik masuk editor kandungan placeholder templat](/img/config/settings-sites-templates-section.png)
