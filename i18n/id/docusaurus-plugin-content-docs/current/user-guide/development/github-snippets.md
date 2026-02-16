---
title: Cuplikan GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Cara menggunakan snippet Ultimate Multisite dari repositori GitHub kami

Ada berbagai snippet kode yang tersedia di repositori GitHub yang sering diminta oleh pengguna Ultimate Multisite. Snippet ini berguna untuk menambahkan fungsi-fungsi kecil, seperti memasang script Google Analytics di halaman pendaftaran atau menyembunyikan meta box dari dashboard admin.

Artikel ini akan menunjukkan cara menggunakan snippet tersebut, atau lebih tepatnya, di mana Anda harus menempatkan kode-kode ini.

Anda bisa menemukan snippet-nya di tautan berikut.

https://github.com/next-press/wp-ultimo-snippets/

Ada 2 cara untuk menambahkan kode tersebut:

  1. Di file functions.php tema Anda.

  2. Must-Use Plugins (mu-plugins)

# Cara menambahkan snippet di file functions.php tema Anda

  1. Masuk ke dashboard admin WordPress Network Anda, lalu buka Themes > Theme Editor (Lihat screenshot di bawah).

  2. Di halaman "Edit Themes", pastikan Anda sudah memilih tema yang sedang aktif pada dropdown yang terletak di sisi kanan atas layar (#3 pada screenshot di bawah).

  3. Klik file functions.php di bagian "Theme Files" untuk memuat file tersebut. Gulir ke bagian paling bawah, lalu tempelkan snippet Ultimate Multisite yang Anda dapatkan dari repositori GitHub.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Cara membuat Must-Use Plugins (mu-plugins)

WordPress memiliki fitur yang memungkinkan Anda memuat fungsi kustom yang disebut "Must-Use Plugins", atau disingkat "mu-plugins".

Mu-plugins yang istimewa ini dimuat sebelum semua plugin reguler lainnya, dan tidak bisa dinonaktifkan. Di jaringan multisite, kode dalam mu-plugins ini akan dimuat di semua situs dalam instalasi Anda.

1\. Gunakan FTP atau SSH untuk mengakses filesystem instalasi WordPress Anda.

2\. Di dalam direktori wp-content pada instalasi WordPress Anda, buat direktori baru dengan nama: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Buat file PHP baru di komputer Anda dengan nama wu-snippet.php menggunakan Notepad atau editor kode lainnya.

4\. Masukkan snippet kode Ultimate Multisite yang Anda dapatkan dari repositori GitHub ke dalam file tersebut, lalu simpan. Anda juga bisa menambahkan kode berikut di bagian atas snippet untuk memberi label pada mu plugin Anda.
