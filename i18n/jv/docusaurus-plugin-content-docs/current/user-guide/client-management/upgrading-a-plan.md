---
title: Ngganti Rencana
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Ng-upgrade Rencana (v2) {#upgrading-a-plan-v2}

_**CATATAN PENTING: Artikel iki merujuk marang Ultimate Multisite versi 2.x.**_

Pelanggan sampeyan bisa ng-upgrade rencana kapan wae. Dheweke isa ng-upgrade menyang rencana liyane utawa tuku layanan utawa paket tambahan sing sampeyan tawarkan ing jaringan sampeyan.

Ing tutorial iki, kita bakal jelasake kepiye carane pelanggan bisa ng-upgrade rencana lan apa sing kedadeyan sawise proses upgrade iku.

Kanggo ng-upgrade rencana, pelanggan kudu mlebu menyang dashboard (dashboard) lan tindak menyang halaman **Account**.

![Customer subsite dashboard with Account menu link visible](/img/account-page/account-menu.png)

Ing halaman Account, bakal ditunjuka keanggotaan saiki lan rencana sing ana gandheng cenenge karo kuwi. Kanggo ng-upgrade menyang rencana liyane, dheweke kudu klik **Change** ing pojok tengene (top-right corner) saka bagian **Your Membership**.

![Account page Your Membership card with Change button](/img/account-page/membership-change-button.png)

Dheweke bakal diarahkan menyang formulir checkout sing isine kabeh rencana sing wis ana.

Dheweke uga bisa ndelok **layanan lan paket sing ana kanggo rencana saiki**, yen dhewe mung arep tuku layanan utawa paket tartamtu (kaya kunjungan ora wates utawa disk space ing conto iki), lan ora ng-upgrade rencana.

![Upgrade picker showing available plans and packages on the customer side](/img/account-page/upgrade-picker.png)

Sawise milih produk sing arep dibeli, dheweke bakal ndelok piye akeh sing kudu dibayar saiki - ora kalebu kredit sing wis ana - lan piye akeh sing bakal ditagih ing tanggal penagihan sabanjure.

Biasane, yen produk iku rencana liyane lan pembayaran bakal ditindakake antarane biaya keanggotaan, dheweke bakal nampa kredit kanggo jumlah sing wis dibayar ing rencana kapisan.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Yen dipilih paket atau paket yang tidak akan mengubah apa pun dari langganan saat ini, mereka akan melihat pesan yang menjelaskan hal tersebut.

![Pemberitahuan ketika paket yang dipilih tidak mengubah langganan](/img/account-page/upgrade-no-change.png)

Setelah pembayaran selesai, produk baru akan ditambahkan ke akun pelanggan Anda dan semua batasan atau fitur dari produk baru tersebut akan langsung ditambahkan padanya: kunjungan, ruang disk, postingan, dll...

##

##

## Jalur Upgrade dan Downgrade {#upgrade-and-downgrade-paths}

Di setiap produk Anda, Anda akan memiliki tab **Up & Downgrades**. Opsi pertama di tab itu adalah kolom bernama **Plan Group**.

**Plan groups** adalah apa yang memungkinkan Anda memberi tahu Ultimate Multisite bahwa paket tertentu termasuk dalam "keluarga" yang sama, dan oleh karena itu harus digunakan untuk membuat pilihan jalur upgrade/downgrade.

![Tab edit produk Up and Downgrades dengan bidang Plan Group](/img/config/product-upgrades-plan-group.png)

Misalnya, Anda punya **Paket Gratis**, **Paket Dasar**, dan **Paket Premium** yang tersedia. Anda ingin pengguna yang berlangganan di bawah **Paket Gratis** hanya bisa upgrade ke **Paket Premium** dan Anda tidak ingin mereka melihat "Paket Dasar" sebagai opsi upgrade. Yang perlu Anda lakukan hanyalah memberikan nama plan group yang sama untuk Paket Gratis dan Paket Premium seperti yang ditunjukkan pada tangkapan layar di bawah ini.

![Halaman produk Paket Gratis dengan penugasan plan group High End](/img/config/product-upgrades-free.png)

![Halaman produk Paket Premium dengan penugasan plan group High End](/img/config/product-upgrades-premium.png)

Ini intinya adalah ngatur ke Ultimate Multisite supaya tahu kalau ada "keluarga" paket rencana di jaringan itu namanya **High End**. Pas lagi nawarin upgrade atau downgrade, cuma paket dari keluarga yang sama aja yang bakal ditampilkan sebagai pilihan buat pengguna.
