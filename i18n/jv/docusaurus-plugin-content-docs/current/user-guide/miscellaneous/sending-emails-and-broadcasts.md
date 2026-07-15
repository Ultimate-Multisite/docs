---
title: Ngirim Email lan Siaran
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Ngirim Email lan Broadcast (v2)

_**CATETAN PENTING: Artikel iki ngrujuk marang Ultimate Multisite versi 2.x.**_

Ultimate Multisite dilengkapi fitur sing ngidini sampeyan komunikasi karo pelanggan kanthi ngirim email marang pangguna sing dituju utawa klompok pangguna, uga ngirim kabar ing admin dashboard kanggo nyiarake woro-woro

## Tambah admin notices menyang dashboard pelanggan nganggo Broadcasts {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Nggunakake fitur broadcast Ultimate Multisite, sampeyan bisa nambah **admin notices** menyang admin dashboard subsite pangguna.

Iki migunani banget yen sampeyan perlu nggawe woro-woro kaya pangopènan sistem utawa nawakake produk utawa layanan anyar marang pangguna sing wis ana. Kaya mangkene tampilan admin notice ing dashboard pangguna sampeyan.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Kanggo miwiti admin notice, bukak network admin dashboard lan ing sangisore menu **Ultimate Multisite**, sampeyan bakal nemokake opsi **Broadcasts**.

![Kaca dhaptar Broadcasts ing admin Ultimate Multisite](/img/admin/broadcasts-list.png)

Sampeyan uga bisa nyunting broadcasts sing wis ana:

![Antarmuka sunting broadcast](/img/admin/broadcast-edit.png)

Saka kaca iki, klik tombol **Add Broadcast** ing sisih ndhuwur.

Iki bakal nampilake jendhela modal Add broadcast, ing ngendi sampeyan bisa milih jinis broadcast sing arep dikirim.

Terus pilih **Message** banjur klik tombol **Next Step**.

![Modal tambah broadcast kanthi opsi Message kapilih](/img/admin/broadcast-add-message.png)

Jendhela sabanjure bakal njaluk sampeyan milih **Target customer** utawa **Target product**. Elinga yen sampeyan bisa milih luwih saka siji pangguna utawa luwih saka siji produk.

Kanggo nggoleki akun pangguna utawa produk, sampeyan kudu miwiti ngetik tembung kunci ing njero field.

Ing sangisore field **Message type**, sampeyan bisa milih warna kabar. Iki bakal negesake wigatine pesen sampeyan.

Banjur sampeyan bisa klik **Next Step**.

![Field target pelanggan, target produk lan jinis pesen kanggo broadcast Message](/img/admin/broadcast-message-targets.png)

Jendhela sabanjure yaiku papan kanggo miwiti nyusun pesen kanthi ngetik subjek lan isi/pesen sing arep sampeyan broadcast marang pangguna.

![Subjek pesen broadcast lan editor isi ing langkah nyusun](/img/admin/broadcast-edit.png)

Sawise nggawe pesen, sampeyan banjur bisa mencet tombol **Send**.

Lan wis rampung. Admin notice kudu langsung katon ing dashboard pangguna sampeyan.

## Kirim email marang pelanggan sampeyan {#send-emails-to-your-customers}

Nggunakake fitur broadcast Ultimate Multisite, sampeyan bisa ngirim email marang pangguna. Sampeyan duwe opsi kanggo ngirim email mung marang pangguna tartamtu utawa nargetake klompok pangguna tartamtu adhedhasar produk utawa plan sing dilanggani.

Kanggo miwiti email broadcast, bukak network admin dashboard lan ing sangisore menu Ultimate Multisite, sampeyan bakal nemokake opsi Broadcast.

![Kaca dhaptar Broadcasts sing digunakake minangka titik wiwitan kanggo email broadcast](/img/admin/broadcasts-list.png)

Saka kaca iki, klik tombol **Add broadcast** ing sisih ndhuwur.

Iki bakal nampilake jendhela modal Add broadcast, ing ngendi sampeyan bisa milih jinis broadcast sing arep dikirim. Terus pilih **Email** banjur klik tombol **Next Step**.

![Modal tambah broadcast kanthi opsi Email kapilih](/img/admin/broadcast-add-email.png)

Jendhela sabanjure bakal njaluk sampeyan milih **Target customer** utawa **Target produc** t. Elinga yen sampeyan bisa milih luwih saka siji pangguna utawa luwih saka siji produk.

Kanggo nggoleki akun pangguna utawa produk, sampeyan kudu miwiti ngetik tembung kunci ing njero field.

Sawise pamirsa target wis dipilih, sampeyan bisa klik **Next Step**.

![Pilihan target pelanggan lan target produk kanggo broadcast Email](/img/admin/broadcast-email-targets.png)

Jendhela sabanjure yaiku papan kanggo miwiti nyusun email kanthi ngetik subjek lan isi/pesen sing arep sampeyan kirim marang pangguna.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Sawise nggawe pesen, sampeyan bisa mencet tombol **Send**.

Lan semono gampangé ngirim email marang pangguna pungkasan sampeyan nggunakake fitur broadcast.

## Email sistem {#system-emails}

Email sistem ing Ultimate Multisite yaiku **notifikasi otomatis** sing dikirim dening sistem sawisé tumindak tartamtu kaya registrasi, pambayaran, pemetaan domain, lsp. Email-email iki bisa disunting utawa diowahi saka setelan Ultimate Multisite. Iki uga dilengkapi fitur sing ngidini sampeyan ngreset lan ngimpor setelan sing wis ana saka instalasi Ultimate Multisite liyane.

### Ngreset & Ngimpor {#resetting--importing}

Versi Ultimate Multisite anyar, uga add-ons, bisa lan bakal ndhaptar email anyar saka wektu ke wektu.

Kanggo nyegah konflik lan masalah liyane, **kita ora bakal nambah template email anyar minangka System Emails ing instalasi sampeyan kanthi otomatis** , kajaba yen penting kanggo fungsi sing bener saka fitur tartamtu.

Nanging, super admin lan agents bisa ngimpor email sing mentas didhaptar iki liwat alat importer. Proses kuwi bakal nggawe email sistem anyar kanthi isi lan konfigurasi saka template email anyar, ngidini super admin nggawe owah-owahan apa wae sing dikarepake utawa njaga apa anane.

#### Cara ngimpor email sistem {#how-to-import-system-emails}

Bukak kaca Settings Ultimate Multisite lan pindhah menyang tab **Emails**.

![Tab Emails ing setelan Ultimate Multisite sing nuduhake bagean System Emails](/img/config/settings-emails-tab.png)

Banjur, ing sidebar, klik tombol **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Ing kaca System Emails, sampeyan bakal weruh tombol tumindak **Reset & Import** ing sisih ndhuwur. Ngeklik tombol kuwi kudu mbukak jendhela modal impor lan reset.

![Tombol tumindak Reset utawa Import ing kaca admin System Emails](/img/admin/system-emails-reset-import.png)

Banjur, sampeyan bisa ngaktifake utawa mateni opsi Import Emails kanggo ndeleng email sistem endi wae sing kasedhiya kanggo diimpor.

<!-- Gambar layar ora kasedhiya: modal Reset lan Import kanthi opsi Import Email dibukak -->

#### Ngreset Email Sistem {#reseting-system-emails}

Kadhang kala, sampeyan bakal ngerti yen owah-owahan sing wis sampeyan gawe ing cithakan email tartamtu wis ora cocog maneh kanggo sampeyan lan sampeyan pengin ngreset menyang **kahanan gawan**.

Ing kahanan kaya ngono, sampeyan duwe rong pilihan: sampeyan bisa mung mbusak email sistem lan ngimpor maneh (nganggo pandhuan ing ndhuwur) - sing bakal mbusak metrik pangiriman lan bab-bab liyane, mula cara iki paling ora dianjurake.

Utawa sampeyan bisa nggunakake **piranti Reset & Import** kanggo ngreset cithakan email kasebut.

Kanggo ngreset cithakan email, sampeyan bisa ngetutake langkah-langkah ing ndhuwur nganti tekan piranti Reset & Import, banjur uripake opsi **Reset** lan pilih email sing pengin sampeyan reset bali menyang isi gawane.

<!-- Gambar layar ora kasedhiya: modal Reset lan Import kanthi opsi Reset Email dibukak -->
