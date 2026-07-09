---
title: Nyaluyukeun Formulir Pendaptaran Anjeun
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Nyaluyukeun Formulir Pendaptaran anjeun {#customizing-your-registration-form}

Pikeun ngajadikeun jaringan anjeun katingali unik dibandingkeun jeung SaaS séjén anu diwangun dina platform WordPress, Ultimate Multisite ngamungkinkeun anjeun nyaluyukeun kaca pendaptaran jeung login ku fitur **Checkout Forms** kami.

Sanajan éta cara anu gampang jeung fléksibel pikeun nyobaan rupa-rupa pendekatan nalika rék ngarobah pangunjung anyar jadi palanggan, éta lolobana dipaké pikeun nyieun formulir pendaptaran anu dipersonalisasi. Artikel ieu tujuanana pikeun némbongkeun kumaha anjeun tiasa ngalakukeunana.

## Kaca login jeung pendaptaran: {#login-and-registration-pages}

Nalika masang Ultimate Multisite, éta sacara otomatis nyieun kaca login jeung pendaptaran kustom dina situs utama anjeun. Anjeun tiasa ngarobah kaca standar ieu iraha waé ku muka kaca **Ultimate Multisite > Settings > Login & Registration** anjeun.

![Kaca setélan Login jeung Pendaptaran](/img/config/settings-general.png)

Ieu tampilan lengkep tina kaca setélan login jeung pendaptaran:

![Kaca lengkep setélan Login jeung Pendaptaran](/img/config/settings-login-registration-full.png)

Hayu urang tingali unggal pilihan anu tiasa anjeun saluyukeun dina kaca **Login & Registration**:

  * **Aktipkeun pendaptaran:** Pilihan ieu bakal ngaktipkeun atawa mareuman pendaptaran dina jaringan anjeun. Lamun dipareuman, palanggan anjeun moal tiasa ngadaptar jeung ngalanggan produk anjeun.

  * **Aktipkeun verifikasi email:** Lamun pilihan ieu diaktipkeun, palanggan anu ngalanggan plan gratis atawa plan mayar kalayan période uji coba bakal nampa email verifikasi jeung kudu ngaklik tautan verifikasi supaya website maranéhna dijieun.

  * **Kaca pendaptaran standar:** Ieu kaca standar pikeun pendaptaran. Kaca ieu kudu diterbitkeun dina website anjeun jeung boga formulir pendaptaran (ogé katelah formulir checkout) - tempat klien anjeun bakal ngalanggan produk anjeun. Anjeun tiasa nyieun sabaraha waé kaca pendaptaran jeung formulir checkout sakumaha dipikahoyong, ngan émut pikeun nempatkeun shortcode formulir checkout dina kaca pendaptaran, lamun henteu éta moal némbongan.

  * **Paké kaca login kustom:** Pilihan ieu ngamungkinkeun anjeun ngagunakeun kaca login anu disaluyukeun, salian ti kaca standar wp-login.php. Lamun pilihan ieu diaktipkeun, anjeun tiasa milih kaca mana anu bakal dipaké pikeun login dina pilihan **Kaca login standar** (pas di handapna).

  * **Nyamarkeun url login aslina (wp-login.php)** : Lamun anjeun hoyong nyumputkeun URL login aslina, anjeun tiasa ngaktipkeun pilihan ieu. Ieu mangpaat pikeun nyegah serangan brute-force. Lamun pilihan ieu diaktipkeun, Ultimate Multisite bakal nembongkeun kasalahan 404 nalika pamaké nyobaan ngaksés tautan wp-login.php aslina

  * **Maksa publikasi situs sinkron:** Sanggeus palanggan ngalanggan produk dina hiji jaringan, situs anyar anu masih pending kudu dirobah jadi situs jaringan nyata. Prosés publikasi lumangsung ngaliwatan Job Queue, sacara asinkron. Aktipkeun pilihan ieu pikeun maksa publikasi lumangsung dina paménta anu sarua jeung signup.

Ayeuna, hayu urang tingali pilihan séjén anu masih patali jeung prosés login jeung pendaptaran. Éta aya pas di handapeun **Pilihan séjén** dina kaca Login & registration anu sarua:

  * **Peran standar:** Ieu peran anu bakal dipiboga ku palanggan anjeun dina website maranéhna sanggeus prosés signup.

  * **Aktipkeun Jumper:** Ngaktipkeun potong kompas Jumper di wewengkon admin. Jumper ngamungkinkeun administrator gancang ngaluncat ka layar Ultimate Multisite, obyék jaringan, jeung tujuan séjén anu dirojong tanpa kudu ngotéktak unggal ménu. Pareuman lamun anjeun leuwih resep nyumputkeun alat navigasi gancang éta tina antarmuka admin.

  * **Tambahkeun pamaké ka situs utama ogé:** Ngaktipkeun pilihan ieu ogé bakal nambahkeun pamaké ka situs utama jaringan anjeun sanggeus prosés signup. Lamun anjeun ngaktipkeun pilihan ieu, pilihan pikeun netepkeun **peran standar** pikeun pamaké ieu dina website anjeun ogé bakal némbongan pas di handapeunna.

  * **Aktipkeun sababaraha Account:** Ngidinan pamaké boga Account dina situs anu béda dina jaringan anjeun nganggo alamat email anu sarua. Lamun pilihan ieu pareum, palanggan anjeun moal tiasa nyieun Account dina website séjén anu dijalankeun dina jaringan anjeun nganggo alamat email anu sarua.

Sareng éta sadaya pilihan anu patali jeung login jeung pendaptaran anu tiasa anjeun saluyukeun! Tong hilap nyimpen setélan anjeun sanggeus réngsé ngéditna.

## Ngagunakeun sababaraha formulir pendaptaran: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 nawarkeun éditor formulir checkout anu ngamungkinkeun anjeun nyieun sabaraha waé formulir sakumaha dipikahoyong, kalayan widang anu béda, produk anu ditawarkeun, jsb.

Boh kaca login boh kaca pendaptaran dipasangkeun ku shortcode: **[wu_login_form]** dina kaca login jeung**[wu_checkout]** pikeun kaca pendaptaran. Anjeun tiasa leuwih jauh nyaluyukeun kaca pendaptaran ku ngawangun atawa nyieun formulir checkout.

Pikeun ngaksés fitur ieu, buka ménu **Checkout Forms**, dina side-bar kénca.

![Ménu Checkout Forms dina sidebar](/img/config/checkout-forms-list.png)

Dina kaca ieu, anjeun tiasa ningali sadaya formulir checkout anu anjeun boga.

Lamun anjeun hoyong nyieun anu anyar, cukup klik **Tambah Checkout Form** di bagian luhur kaca.

Anjeun tiasa milih salah sahiji tina tilu pilihan ieu minangka titik mimiti: hiji léngkah, sababaraha léngkah, atawa kosong. Tuluy, klik **Buka Editor**.

![Tambah Checkout Form kalayan pilihan hiji léngkah, sababaraha léngkah, atawa kosong](/img/config/checkout-forms-list.png)

Salaku alternatif, anjeun tiasa ngédit atawa ngadobelkeun formulir anu geus anjeun boga ku ngaklik pilihan di handapeun ngaranna. Di dinya, anjeun ogé bakal manggihan pilihan pikeun nyalin shortcode formulir atawa mupus formulir.

![Aksi hover formulir checkout kalayan édit, dobelkeun, jeung pupus](/img/config/checkout-form-hover-actions.png)

Lamun anjeun milih hiji léngkah atawa sababaraha léngkah, formulir checkout bakal geus dieusian heula ku léngkah dasar supaya éta tiasa jalan. Tuluy, lamun anjeun hoyong, anjeun tiasa nambahkeun léngkah tambahan kana éta.

### Ngédit Checkout Form: {#editing-a-checkout-form}

Sakumaha anu geus kami sebutkeun saméméhna, anjeun tiasa nyieun formulir checkout pikeun rupa-rupa tujuan. Dina conto ieu urang bakal ngerjakeun formulir pendaptaran.

Sanggeus napigasi ka éditor formulir checkout, pasihan formulir anjeun hiji ngaran (anu ngan bakal dipaké pikeun rujukan internal) jeung hiji slug (dipaké pikeun nyieun shortcode, contona).

![Pangédit formulir checkout kalayan widang ngaran jeung slug](/img/config/checkout-form-name-slug.png)

Formulir diwangun ku léngkah jeung widang. Anjeun tiasa nambahkeun léngkah anyar ku ngaklik **Tambahkeun Léngkah Checkout Anyar**.

![Tombol Tambahkeun Léngkah Checkout Anyar](/img/config/checkout-form-add-step.png)

Dina tab munggaran dina jandéla modal, eusian eusi léngkah formulir anjeun. Pasihan éta ID, ngaran, jeung déskripsi. Ieu kalolobaanana dipaké sacara internal.

![Tab eusi léngkah checkout kalayan ID, ngaran, jeung déskripsi](/img/config/checkout-form-step-content.png)

Salajengna, atur katempoan léngkah. Anjeun tiasa milih antara **Salawasna témbongkeun** , **Ngan témbongkeun pikeun pamaké anu geus asup** atawa **Ngan témbongkeun pikeun sémah**.

![Pilihan katempoan léngkah checkout](/img/config/checkout-form-step-visibility.png)

Pamungkas, konfigurasi gaya léngkah. Ieu widang pilihan.

![Konfigurasi gaya léngkah checkout](/img/config/checkout-form-step-style.png)

Ayeuna, waktuna nambahkeun widang kana léngkah munggaran urang. Cukup klik **Tambahkeun Widang Anyar** jeung pilih jinis bagian anu anjeun pikahoyong.

![Tombol Tambahkeun Widang Anyar](/img/config/checkout-form-add-field-button.png)![Dropdown pilihan jinis widang](/img/config/checkout-form-field-type-dropdown.png)

Unggal widang boga parameter anu béda pikeun dieusian. Pikeun éntri munggaran ieu, urang bakal milih widang **Ngaran Pamaké**.

![Konfigurasi widang Ngaran Pamaké](/img/config/checkout-form-username-content.png)![Parameter widang Ngaran Pamaké](/img/config/checkout-form-username-visibility.png)![Setélan tambahan widang Ngaran Pamaké](/img/config/checkout-form-username-style.png)

Anjeun tiasa nambahkeun léngkah jeung widang saloba anu anjeun peryogikeun. Pikeun nampilkeun produk anjeun supaya palanggan anjeun milih salah sahiji, paké widang Tabel Harga. Upami anjeun hoyong ngantep klien anjeun milih témplat, tambahkeun widang Pilihan Témplat. Jeung saterusna.

![Pangédit formulir checkout kalayan widang pilihan témplat](/img/config/checkout-form-with-template-field.png)

_**Catetan:** Upami anjeun nyieun produk saatos nyieun formulir checkout anjeun, anjeun kedah nambahkeun produk éta dina bagian Tabel Harga. Upami anjeun henteu nambahkeunana, produk éta moal muncul pikeun palanggan anjeun dina kaca pendaptaran._

_**Catetan 2:** ngaran pamaké, email, kecap akses, judul situs, URL situs, ringkesan pesenan, pamayaran, jeung tombol kirim téh widang wajib pikeun nyieun formulir checkout._

Nalika anjeun keur ngerjakeun formulir checkout anjeun, anjeun tiasa salawasna ngagunakeun tombol Pratinjau pikeun ningali kumaha klien anjeun bakal ningali formulir éta. Anjeun ogé tiasa silih ganti antara tampilan salaku pamaké anu geus aya atawa salaku sémah.

![Tombol Pratinjau dina pangédit formulir checkout](/img/config/checkout-form-preview-button.png)![Pratinjau formulir checkout salaku sémah atawa pamaké anu geus aya](/img/config/checkout-form-preview-modal.png)

Pamungkas, dina **Pilihan Lanjutan** anjeun tiasa ngonfigurasi pesen pikeun kaca **Hatur Nuhun**, nambahkeun snippet pikeun ngalacak konvérsi, nambahkeun CSS kustom kana formulir checkout anjeun atawa ngawatesanana ka nagara tangtu.

![Pilihan Lanjutan kalayan kaca Hatur Nuhun, pelacakan konvérsi, jeung CSS kustom](/img/config/checkout-form-advanced.png)

Anjeun ogé tiasa sacara manual ngaktipkeun atawa mareuman formulir checkout anjeun ku ngagésér pilihan ieu dina kolom katuhu, atawa mupus formulir sacara permanén.

![Toggle aktip jeung pilihan hapus pikeun formulir checkout](/img/config/checkout-form-active.png)

Tong hilap nyimpen formulir checkout anjeun!

![Tombol Simpen Formulir Checkout](/img/config/checkout-form-save.png)

Pikeun meunangkeun shortcode formulir anjeun, klik **Jieun Shortcode** jeung salin hasil anu ditingalikeun dina jandéla modal.

![Modal Jieun Shortcode kalayan shortcode pikeun disalin](/img/config/checkout-form-editor.png)

_**Catetan:** Anjeun kedah nambahkeun shortcode ieu kana kaca pendaptaran anjeun supaya formulir checkout ieu ditambahkeun kana éta kaca._

## Pra-milih produk jeung témplat ngaliwatan parameter URL: {#pre-selecting-products-and-templates-via-url-parameters}

Upami anjeun hoyong nyieun tabel harga anu dikustomisasi pikeun produk anjeun jeung pra-milih dina formulir checkout produk atawa témplat anu dipilih ku palanggan anjeun tina tabel harga atawa kaca témplat anjeun, anjeun tiasa ngagunakeun parameter URL pikeun ieu.

### **Pikeun rencana:** {#for-plans}

Buka **Ultimate Multisite > Produk > Pilih rencana**. Anjeun kedah ningali tombol **Klik pikeun nyalin Tautan anu Bisa Dibagikeun** di bagian luhur kaca. Ieu tautan anu tiasa anjeun paké pikeun pra-milih rencana spésifik ieu dina formulir checkout anjeun.

![Kaca produk kalayan tombol tautan anu bisa dibagikeun](/img/config/products-list.png)

Catet yén tautan anu bisa dibagikeun ieu ngan valid pikeun **Rencana**. Anjeun teu tiasa ngagunakeun tautan anu bisa dibagikeun pikeun pakét atawa jasa.

### Pikeun témplat: {#for-templates}

Upami anjeun hoyong pra-milih témplat situs dina formulir checkout anjeun, anjeun tiasa ngagunakeun parameter: **?template_id=X** dina URL kaca pendaptaran anjeun. "X" kedah diganti ku **nomer ID témplat situs**. Pikeun meunangkeun nomer ieu, buka **Ultimate Multisite > Situs**.

Klik **Atur** pas di handapeun témplat situs anu anjeun hoyong paké. Anjeun bakal ningali nomer SITE ID. Cukup paké nomer ieu pikeun témplat situs spésifik ieu supaya dipra-pilih dina formulir checkout anjeun. Dina conto urang di dieu, parameter URL-na bakal jadi **?template_id=2**.

![Daptar situs anu némbongkeun ID témplat situs](/img/config/site-templates-list.png)

Anggap situs wéb jaringan urang nyaéta [**www.mynetwork.com**](http://www.mynetwork.com) jeung kaca pendaptaran urang kalayan formulir checkout urang ayana dina kaca **/register**. Sakabéh URL kalayan témplat situs ieu dipra-pilih bakal katingali kawas [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Jeung upami anjeun hoyong, anjeun tiasa pra-milih boh produk boh témplat kana formulir checkout anjeun. Anu kedah anjeun lakukeun nyaéta nyalin tautan anu bisa dibagikeun tina rencana jeung nempelkeun parameter témplat di tungtungna. Éta bakal katingali kawas [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
