---
title: Ngirim Email lan Broadcast
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Ngirim Email lan Broadcast (v2)

_**CATATAN PENTING: Artikel iki merujuk marang Ultimate Multisite versi 2.x.**_

Ultimate Multisite duwe fitur sing bakal mbantu sampeyan komunikasi karo pelanggan kanthi ngirim email menyang user tartamtu utawa kelompok user, uga ngirim kabar ing dashboard admin de'e kanggo menehi pengumuman.

## Tambah notifikasi admin ing dashboard pelangganmu nganggo Broadcasts

Nggunakake fitur broadcast Ultimate Multisite, sampeyan bisa nambah **notifikasi admin** ing dashboard admin subsite user panjenengan.

Iki pancen mbantu banget yen sampeyan perlu menehi pengumuman kaya pemeliharaan sistem utawa nawakake produk utawa layanan anyar marang user sing wis ana. Iki carane notifikasi admin bakal katon ing dashboard user panjenengan.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Kanggo miwiti notifikasi admin, tindakake menyang dashboard admin jaringan sampeyan lan ing menu **Ultimate Multisite**, sampeyan bakal nemokake pilihan **Broadcasts**.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Sampeyan uga bisa ngedit broadcast sing wis ana:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

Saka halaman iki, klik tombol **Add Broadcast** ing dhuwur.

Iki bakal mbukak jendela modal Add broadcast sing isine sampeyan bisa milih jenis broadcast apa sing arep dikirim.

Lajeng pilih **Message** banjur klik tombol **Next Step**.

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

Jendela sabanjure bakal takon sampeyan kanggo milih **Target customer** utawa **Target product**. Cathet yen sampeyan bisa milih luwih saka siji user utawa luwih saka siji produk.

Kanggo nggolek akun pengguna utawa produk, sampeyan kudu mulai mengetik kata kunci ing njero field kasebut.

Ing bawah field **Message type**, sampeyan bisa milih warna notifikasi. Iki bakal nguatake pentingé pesenmu.

Saiki, sampeyan bisa klik **Next Step**.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

Jendela sabanjure iku papan kanggo miwiti nulis pesenmu kanthi ngetik subjek lan isi/pesen sing arep sampeyan sebarkan marang para pengguna.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Sawise nggawe pesenmu, sampeyan bisa pencet tombol **Send**.

Lan wis rampung. Notifikasi admin bakal langsung muncul ing dashboard pengguna sampeyan.

## Kirim email marang pelangganmu

Nggunakake fitur broadcast Ultimate Multisite, sampeyan bisa ngirim email marang para pengguna. Sampeyan duwe pilihan kanggo ngirim email mung marang pengguna tartamtu utawa nargetake kelompok pengguna tartamtu adhedhasar produk utawa rencana sing lagi diresapi (subscribe) dening mereka.

Kanggo miwiti broadcast email, tindakake menyang dashboard admin jaringan sampeyan lan ing menu Ultimate Multisite, sampeyan bakal nemokake opsi Broadcast.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Saka halaman iki, klik tombol **Add broadcast** ing atas.

Iki bakal mbukak jendela modal Add broadcast sing bisa sampeyan pilih jenis broadcast apa sing arep dikirim. Terus pilih **Email** banjur klik tombol **Next Step**.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Jendela sabanjure bakal takon sampeyan kanggo milih **Target customer** utawa **Target product**. Cathet, sampeyan bisa milih luwih saka siji pengguna utawa luwih saka siji produk.

Kanggo kanggo nggoleki akun pengguna utawa produk, sampeyan kudu mulai mengetik kata kunci ing kolom kasebut.

Sawise audiens target wis dipilih, sampeyan bisa klik **Next Step**.

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

Jendela sabanjure iku papan kanggo miwiti nggawe emailmu kanthi ngetik subjek lan isi/pesan sing arep dikirim marang pengguna.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Sawise nggawe pesenmu, sampeyan bisa pencet tombol **Send**.

Lan ngene gampang banget cara ngirim email marang end-user sampeyan nganggo fitur broadcast.

## System emails

System emails ing Ultimate Multisite iku **pemberitahuan otomatis** sing dikirim dening sistem sawise tindakan tartamtu kaya registrasi, pembayaran, pemetaan domain, lsp. Email-email iki bisa diedit utawa diowahi saka pengaturan Ultimate Multisite. Iki uga duwe fitur sing bakal ngidini sampeyan ngreset lan impor pengaturan sing wis ana saka instalasi Ultimate Multisite liyane.

### Resetting & Importing

Versi Ultimate Multisite anyar, uga add-on, bisa lan bakal ngrregister email anyar sesekali.

Kanggo mencegah konflik lan masalah liyane, **kita ora bakal nambah template email anyar minangka System Emails ing instalasi sampeyan otomatis**, kajaba yen templat kasebut wigati kanggo fungsi sing bener saka fitur tartamtu.

Nanging, super admin lan agen bisa impor email sing wis ngrregister iki liwat alat importer. Proses iki bakal nggawe system email anyar kanthi isi lan konfigurasi template email anyar, ngidini super admin nggawe modifikasi apa wae utawa njaga kaya wene.

#### Cara impor system emails

Tuju menyetel Ultimate Multisite Settings sampe nang tab **Emails**.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Terus, nang sidebar, klik tombol **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Nang halaman System Emails kuwi, sampeyan bakal nemokake tombol aksi **Reset & Import** nang atas. Klik tombol kuwi mesti mbukak jendela modal import lan reset.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Terus, sampeyan bisa ngubah opsi Import Emails kanggo ndelok email sistem endi sing iso diimpor.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Reset System Emails

Kadang-kadang, sampeyan bakal ngerasa yen perubahan sing wis ditindakake nang template email tertentu ora maneh cocok kanggo sampeyan lan arep ngreset maneh menyang **state default**-e.

Ing kahanan kaya ngono, sampeyan duwe rong pilihan: sampeyan bisa langsung ngapus email sistem lan impor maneh ( nganggo instruksi ing dhuwur) - iki bakal ngapus metrik pengiriman lan barang liyane, mula cara iki paling ora disaranake.

Utawa sampeyan bisa nggunakake **Reset & Import tool** kanggo ngreset template email kuwi.

Kanggo ngreset template email, sampeyan bisa tindakake langkah-langkah ing dhuwur nganti tekan Reset & Import tool, banjur, aktifake opsi **Reset** lan pilih email sing arep direset maneh menyang konten default-e.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
