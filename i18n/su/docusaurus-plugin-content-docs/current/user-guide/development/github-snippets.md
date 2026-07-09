---
title: Cuplikan GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Kumaha cara ngagunake Ultimate Multisite snippets di repositori GitHub urang {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Di repositori GitHub aya kode snippet anu sok dipénta ku panyokoh Ultimate Multisite nu hayang nambahan fungsi leutik saperti nambahan script Google Analytics dina halaman sign-up atawa nyumput meta box tina admin dashboard.

Artikel ieu bakal nunjukkeun kumaha cara ngagunake atawa leuwih spesifikna di mana tempatna kode éta dipasang.

Anjeun bisa manggihan snippetna dina tautan di handap ieu.

https://github.com/next-press/wp-ultimo-snippets/

Ada 2 cara pikeun anjeun nambahan kode éta:

  1. Dina file functions.php tema anjeun.

  2. Must-Use Plugins (mu-plugins)

# Kumaha cara nambahan snippet dina file functions.php tema anjeun. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Login ka dashboard admin WordPress Network anjeun teras ka Themes > Theme Editor (Lihat screenshot di handap).

  2. Dina halaman "Edit Themes", pastike anjeun geus milih tema aktif anjeun dina dropdown anu aya di sisi kanan luhur layar anjeun (#3 dina screenshot di handap).

  3. Klik file functions.php di bawah bagian "Theme Files" pikeun ngabukak file éta. Scroll ka handap jeung tempelkeun snippet Ultimate Multisite anu anjeun dapat tina repositori GitHub.

<!-- Screenshot teu aya: WordPress Theme Editor nunjukkeun ngedit file functions.php -->

# Kumaha cara nyieun Must-Use Plugins (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

WordPress boga fitur anu ngidinake anjeun pikeun ngabukak fungsi kustom disebut "Must-Use Plugins", atawa singgetna "mu-plugins".

Mu-plugins istimewa ieu dibukak saméméh plugin biasa séjén, jeung éta teu bisa dipatikan. Dina jaringan multisite, kode dina mu-plugins ieu bakal dibukak di sakabé situs dina instalasi anjeun.

1. Gunake FTP atawa SSH pikeun ngakses filesystem instalasi WordPress anjeun.

2. Di dalam direktori wp-content instalasi WordPress kamu, buat folder baru dengan nama: mu-plugins.

<!-- Screenshot tidak tersedia: File manager menunjukkan direktori wp-content dengan folder mu-plugins -->

3. Buat file PHP baru di komputer kamu dengan nama wu-snippet.php menggunakan Notepad atau editor kode lainnya.

4. Masukkan potongan kode Ultimate Multisite yang kamu dapatkan dari repositori GitHub ke dalam file tersebut dan simpan. Kamu juga bisa menambahkan kode ini di atas potongan kode untuk memberi label pada mu plugin kamu.
