---
title: Cuplikan GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Cara nggunakake snippet Ultimate Multisite ing repositori GitHub kita {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Ana kode potongan (code snippets) sing ana ing repositori GitHub sing kerep ditakoni dening pengguna Ultimate Multisite sing arep nambah fungsi cilik kaya nambah script Google Analytics ing halaman pendaftaran utawa nyembunyikake meta box saka admin dashboard.

Artikel iki bakal nunjukake carane nggunakake utawa luwih spesifik panggonan kanggo nempatake kode-kode kuwi.

Sampeyan bisa nemokake snippet-snippet kuwi ing link ing ngisor iki.

https://github.com/next-press/wp-ultimo-snippets/

Ana 2 cara kanggo nambahake kode kuwi:

  1. Ing file functions.php tema sampeyan.

  2. Must-Use Plugins (mu-plugins)

# Cara nambah snippet ing file functions.php tema sampeyan. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Masuk menyang admin dashboard WordPress Network lan tindakake Themes > Theme Editor (Lihat screenshot ing ngisor iki).

  2. Ing halaman "Edit Themes", pasthekake sampeyan wis milih tema aktif ing field dropdown sing ana ing pojok tengene layar sampeyan (#3 ing screenshot ing ngisor iki).

  3. Klik file functions.php ing bawah bagian "Theme Files" kanggo nggolekake file kasebut. Gulir nedho ing paling ngisor lan tempelake snippet Ultimate Multisite sing sampeyan duweni saka repositori GitHub.

<!-- Screenshot ora tersedia: WordPress Theme Editor nuduhake editing file functions.php -->

# Cara nggawe Must-Use Plugins (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

WordPress duwe fitur sing bisa menehi sampeyan kanggo muatake fungsi khusus diarani "Must-Use Plugins", utawa "mu-plugins" cekak.

Mu-plugins khusus iki di-load sadurunge kabeh plugin lumrah liyane, lan ora bisa dinonaktifake. Ing jaringan multisite, kode ing mu-plugins iki bakal di-load ing kabeh situs ing instalasi sampeyan.

1. Gunakake FTP utawa SSH kanggo ngakses filesystem instalasi WordPress sampeyan.

2. Ing folder wp-content di instalasi WordPress sampeyan, buat folder anyar sing jenenge: mu-plugins.

<!-- Screenshot ora tersedia: File manager nuduh folder wp-content karo folder mu-plugins -->

3. Buat file PHP anyar ing komputer sampeyan jenenge wu-snippet.php nganggo Notepad utawa editor kode liyane.

4. Masukkan potongan kode Ultimate Multisite sing wis kok entuk saka GitHub repository menyang file ku lan simpen. Sampeyan uga bisa nambahake kode iki ing dhuwur potongan kode kanggo ngberi label marang mu plugin sampeyan.
