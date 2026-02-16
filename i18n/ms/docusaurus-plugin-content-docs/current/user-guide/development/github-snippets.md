---
title: Coretan GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Cara menggunakan coretan kod Ultimate Multisite dari repositori GitHub kami

Terdapat coretan kod yang tersedia di repositori GitHub yang sering diminta oleh pengguna Ultimate Multisite yang ingin menambah fungsi kecil seperti memasukkan skrip Google Analytics pada halaman pendaftaran atau menyembunyikan meta box dari dashboard admin.

Artikel ini akan menunjukkan cara menggunakan atau lebih khusus lagi, di mana anda perlu meletakkan kod-kod ini.

Anda boleh mendapatkan coretan kod tersebut di pautan di bawah.

https://github.com/next-press/wp-ultimo-snippets/

Terdapat 2 cara untuk anda menambah kod tersebut

  1. Pada fail functions.php tema anda.

  2. Must-Use Plugins (mu-plugins)

# Cara menambah coretan kod pada fail functions.php tema anda.

  1. Log masuk ke dashboard admin WordPress Network anda dan pergi ke Themes > Theme Editor (Lihat tangkapan skrin di bawah).

  2. Pada halaman "Edit Themes", pastikan anda telah memilih tema aktif anda pada medan dropdown yang terletak di bahagian atas sebelah kanan skrin anda (#3 pada tangkapan skrin di bawah).

  3. Klik fail functions.php di bawah bahagian "Theme Files" untuk memuatkan fail tersebut. Tatal ke bawah dan tampal coretan kod Ultimate Multisite yang anda dapat dari repositori GitHub.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Cara mencipta Must-Use Plugins (mu-plugins)

WordPress mempunyai ciri yang membolehkan anda memuatkan fungsi tersuai yang dipanggil "Must-Use Plugins", atau singkatannya "mu-plugins".

Mu-plugins khas ini dimuatkan sebelum semua plugin biasa yang lain, dan ia tidak boleh dinyahaktifkan. Dalam rangkaian multisite, kod dalam mu-plugins ini akan dimuatkan pada semua laman dalam pemasangan anda.

1\. Gunakan FTP atau SSH untuk mengakses sistem fail pemasangan WordPress anda.

2\. Di dalam direktori wp-content pemasangan WordPress anda, cipta direktori baharu bernama: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Cipta fail PHP baharu pada komputer anda bernama wu-snippet.php menggunakan Notepad atau mana-mana editor kod.

4\. Letakkan coretan kod Ultimate Multisite yang anda dapat dari repositori GitHub ke dalam fail tersebut dan simpan. Anda juga boleh menambah kod ini di bahagian atas coretan kod untuk melabel mu plugin anda.
