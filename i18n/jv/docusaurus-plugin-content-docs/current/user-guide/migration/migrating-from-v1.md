---
title: Migrasi saka V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrasi saka V1 {#migrating-from-v1}

## Ultimate Multisite wis owah saka keluarga rilis asline 1.x menyang keluarga rilis 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite versi 2.0 lan luwih iku ditulis ulang kabeh kode, tegese ora ana sing akeh sing padha antara versi lawas lan anyar. Amarga sebab kuwi, nalika ng-upgrade saka 1.x menyang 2.x, data sampeyan kudu di-migrasi menyang format sing bisa dimangerteni dening versi anyar.

Untunge, Ultimate Multisite 2.0+ **duwe migrator** sing wis digawe ing inti (core) sing duwe kemampuan kanggo ngadekani data saka versi lawas lan ngowahi dadi format anyar. Migrasi iki kedadeyan nalika **Setup Wizard** versi 2.0+.

Pelajaran iki bakal njlentrehake kepiye migrator kuwi makarya, apa sing kudu ditindakake yen ana kegagalan, lan kepiye cara ngatasi masalah sing bisa muncul nalika proses iki.

_**PENTING: Sadurunge sampeyan mulai ng-upgrade saka versi 1.x menyang versi 2.0, pastikan sampeyan wis nggawe backup database situs sampeyan**_

## Langkah-langkah awal {#first-steps}

Langkah pertama yaiku unduh file plugin .zip lan instalasi versi 2.0 ing dashboard admin jaringan sampeyan.

Sawise sampeyan [install lan aktifake versi 2.0](../getting-started/installing-ultimate-multisite.md), sistem bakal otomatis ngadekani yen Multisite sampeyan lagi nganggo versi lawas lan sampeyan bakal weruh pesen iki ing pucuk halaman plugin.

_**CATATAN:** Yen sampeyan wis instal Ultimate Multisite 1.x ing Multisite sampeyan, sampeyan bakal duwe pilihan kanggo ngganti plugin kasebut nganggo versi sing wis diunduh. Mangga, lanjut lan klik **Ganti yang ada dengan yang diunggah**._

<!-- Screenshot ora tersedia: Halaman plugin nuduh pilihan kanggo nganti v1 kanthi v2 sing diunggah -->

Halaman selanjutnya bakal nunjukake add-on lama apa wae sing wis kamu instal barengan karo versi 1.x. Di situ uga ana panduan kanggo ngerti apakah versi sing lagi dienggo kuwi cocok nganggo versi 2.0 utawa butuh install versi add-on sing luwih anyar sawise migrasi.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Nalika wis siap kanggo lanjut, kamu bisa klik tombol sing ketokane **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Terus, iki bakal nggolekake kamu menyang halaman wizard instalasi karo sawetara pesan sambutan. Cukup klik **Get Started** kanggo pindah menyang halaman sabanjure.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Sawise klik **Get Started**, kamu bakal diarahkan menyang Pre-install Checks_._ Iki bakal nggawé tampilan Informasi Sistem lan instalasi WordPress kamu lan ngandhani apakah wis cocog karo **Ultimate Multisite's requirements**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Langkah sabanjure ya kuwi nyatet kunci lisensi Ultimate Multisite lan aktifake plugin. Iki bakal njamin yen kabeh fitur, kalebu add-on, bakal bisa digunakake ing situs kamu.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Sawise memasukkan kuncimu, klik **Agree & Activate**.

Sawise lisensi aktif, kamu bisa mulai instalasi sing beneran kanthi klik **Install** ing halaman sabanjure. Iki bakal otomatis nggawe file lan database sing dibutuhake kanggo versi 2.0 supaya bisa makarya.

## Saiki Migrasi {#now-the-migration}

Migrator kuweke fitur keamanan sing wis digawe dhewe, yaiku migrator bakal ngecek kabeh multisite sampeyan kanggo mesthekake yen kabeh data Ultimate Multisite sampeyan bisa di-migrate tanpa masalah. Klik tombol **Run Check** kanggo miwiti proses iki.

Sawise njalankan pengecekan, ana rong kemungkinan: hasilnya bisa **karo** error utawa **tanpa** error.

### Kalo Ana Error {#with-error}

Yen sampeyan nemokake pesan error, sampeyan kudu ngontak tim dukungan kita supaya bisa mbantu ngresiki error kasebut. Pastine sampeyan **parani log error** nalika nggawe tiket. Sampeyan bisa unduh log utawa klik tautan sing nyebut "contact our support team". Iki bakal mbukak widget bantuan ing sisih tengene halaman sampeyan kanthi kolom-kolom sing wis diisi kanggo sampeyan, kalebu log error ing deskripsi.

_**Amarga sistem nemokake error, sampeyan ora bakal bisa lanjut migrasi menyang versi 2.0. Sampeyan bisa mundur (roll back) menyang versi 1.x kanggo nerusakane ngoperasikake jaringan sampeyan nganti error kasebut diresiki.**_

### Tanpa Error {#without-error}

Yen sistem ora nemokake error apa-apa, sampeyan bakal weruh pesan sukses lan tombol **Migrate** ing ngisor sing bakal menehi sampeyan kesempatan kanggo lanjut migrasi. Ing halaman iki, sampeyan bakal dielingi kanggo nggawe backup database samadhi sadurunge maju, sing banget direkomendasikake. Tekan **Migrate** yen sampeyan wis duwe backup.

Lan iku wae sing dibutuhake!

Sampe sampe nggawa Wizard setup kanggo ngupdate logo lan barang-barang liyane ing jaringanmu utawa mulai menjelajahi menu versi 2.0 saka Ultimate Multisite lan antarmuka anyare. Ayo, seneng-seneng wae!
