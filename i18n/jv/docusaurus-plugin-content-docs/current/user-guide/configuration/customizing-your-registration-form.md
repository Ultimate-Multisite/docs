---
title: Ngatur Formulir Registrasi Panjenengan
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Ngatur Formulir Registrasi sampeyan

Kanggo nggawe jaringan sampeyan katon unik saka kabeh SaaS liyane sing dibangun ing platform WordPress, Ultimate Multisite ngidini sampeyan ngatur kaca registrasi lan mlebu nganggo fitur **Formulir Pambayaran** saka kita.

Sanajan iki minangka cara sing gampang lan fleksibel kanggo nyoba macem-macem pendekatan nalika arep ngowahi pelanggan anyar, biasane fitur iki digunakake kanggo nggawe formulir registrasi sing dipersonalisasi. Artikel iki tujuane nuduhake carane sampeyan bisa nindakake iku.

## Kaca mlebu lan registrasi: {#login-and-registration-pages}

Nalika Ultimate Multisite dipasang, sistem iki kanthi otomatis nggawe kaca mlebu lan registrasi khusus ing situs utama sampeyan. Sampeyan bisa ngganti kaca standar iki kapan wae kanthi mlebu menyang kaca **Ultimate Multisite > Setelan > Mlebu & Registrasi**.

![Kaca setelan Mlebu lan Registrasi](/img/config/settings-general.png)

Iki tampilan lengkap kaca setelan mlebu lan registrasi:

![Kaca lengkap setelan Mlebu lan Registrasi](/img/config/settings-login-registration-full.png)

Ayo dideleng siji-siji pilihan sing bisa sampeyan atur ing kaca **Mlebu & Registrasi**:

  * **Aktifake registrasi:** Pilihan iki bakal ngaktifake utawa mateni registrasi ing jaringan sampeyan. Yen dipateni, pelanggan sampeyan ora bakal bisa registrasi lan langganan produk sampeyan.

  * **Aktifake verifikasi email:** Yen pilihan iki diaktifake, pelanggan sing langganan plan gratis utawa plan mbayar nganggo periode uji coba bakal nampa email verifikasi lan kudu ngeklik tautan verifikasi supaya situs web bisa digawe.

  * **Kaca registrasi standar:** Iki kaca standar kanggo registrasi. Kaca iki kudu wis diterbitake ing situs web sampeyan lan duwe formulir registrasi (uga dikenal minangka formulir pambayaran) - ing ngendi klien sampeyan bakal langganan produk sampeyan. Sampeyan bisa nggawe kaca registrasi lan formulir pambayaran sakakehe sing dikarepake, mung elinga lebokake shortcode formulir pambayaran ing kaca registrasi, yen ora formulir kasebut ora bakal katon.

  * **Gunakake kaca mlebu khusus:** Pilihan iki ngidini sampeyan nggunakake kaca mlebu sing dikustomisasi, saliyane kaca standar wp-login.php. Yen pilihan iki diaktifake, sampeyan bisa milih kaca endi sing bakal digunakake kanggo mlebu ing pilihan **Kaca mlebu standar** (pas ing ngisor iki).

  * **Samarke url mlebu asli (wp-login.php)** : Yen sampeyan pengin ndhelikake URL mlebu asli, sampeyan bisa ngaktifake pilihan iki. Iki migunani kanggo nyegah serangan brute-force. Yen pilihan iki diaktifake, Ultimate Multisite bakal nampilake error 404 nalika pangguna nyoba ngakses tautan wp-login.php asli

  * **Paksa publikasi situs sinkron:** Sawise pelanggan langganan produk ing jaringan, situs anyar sing isih ngenteni kudu diowahi dadi situs jaringan nyata. Proses penerbitan kelakon liwat antrean tugas, kanthi asinkron. Aktifake pilihan iki kanggo meksa penerbitan kelakon ing request sing padha karo signup.

Saiki, ayo ndeleng pilihan liyane sing isih ana gandhengane karo proses mlebu lan registrasi. Pilihan-pilihan iki ana pas ing ngisor **Pilihan liyane** ing kaca Mlebu & registrasi sing padha:

  * **Peran standar:** Iki peran sing bakal diduweni pelanggan sampeyan ing situs web sawise proses signup.

  * **Aktifake Jumper:** Ngaktifake trabasan Jumper ing area admin. Jumper ngidini administrator cepet mlumpat menyang layar Ultimate Multisite, objek jaringan, lan tujuan liyane sing didhukung tanpa kudu nelusuri saben menu. Pateni yen sampeyan luwih seneng ndhelikake piranti navigasi cepet kasebut saka antarmuka admin.

  * **Tambahake pangguna menyang situs utama uga:** Ngaktifake pilihan iki uga bakal nambah pangguna menyang situs utama jaringan sampeyan sawise proses signup. Yen sampeyan ngaktifake pilihan iki, pilihan kanggo nyetel **peran standar** pangguna kasebut ing situs web sampeyan uga bakal katon pas ing ngisor iki.

  * **Aktifake pirang-pirang akun:** Ngidini pangguna duwe akun ing situs beda ing jaringan sampeyan nganggo alamat email sing padha. Yen pilihan iki dipateni, pelanggan sampeyan ora bakal bisa nggawe akun ing situs web liyane sing mlaku ing jaringan sampeyan nganggo alamat email sing padha.

Lan iku kabeh pilihan sing ana gandhengane karo mlebu lan registrasi sing bisa sampeyan atur! Aja lali nyimpen setelan sawise rampung nyunting.

## Nggunakake pirang-pirang formulir registrasi: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 nawakake editor formulir pambayaran sing ngidini sampeyan nggawe formulir sakakehe sing dikarepake, nganggo field beda, produk sing ditawakake, lsp.

Kaca mlebu lan registrasi loro-lorone disisipake nganggo shortcode: **[wu_login_form]** ing kaca mlebu lan**[wu_checkout]** kanggo kaca registrasi. Sampeyan bisa luwih ngatur kaca registrasi kanthi mbangun utawa nggawe formulir pambayaran.

Kanggo ngakses fitur iki, bukak menu **Formulir Pambayaran**, ing bilah sisih kiwa.

![Menu Formulir Pambayaran ing sidebar](/img/config/checkout-forms-list.png)

Ing kaca iki, sampeyan bisa ndeleng kabeh formulir pambayaran sing sampeyan duwe.

Yen sampeyan pengin nggawe sing anyar, cukup klik **Tambah Formulir Pambayaran** ing sisih ndhuwur kaca.

Sampeyan bisa milih salah siji saka telung pilihan iki minangka titik wiwitan: siji langkah, multi-langkah utawa kosong. Banjur, klik **Menyang Editor**.

![Tambah Formulir Pambayaran nganggo pilihan siji langkah, multi-langkah, utawa kosong](/img/config/checkout-forms-list.png)

Minangka alternatif, sampeyan bisa nyunting utawa nggandakake formulir sing wis sampeyan duwe kanthi ngeklik pilihan ing ngisor jenenge. Ing kono, sampeyan uga bakal nemokake pilihan kanggo nyalin shortcode formulir utawa mbusak formulir.

![Aksi hover formulir pambayaran nganggo sunting, gandakake, lan busak](/img/config/checkout-form-hover-actions.png)

Yen sampeyan milih siji langkah utawa multi-langkah, formulir pambayaran wis bakal diisi sadurunge nganggo langkah-langkah dhasar supaya bisa mlaku. Banjur, yen sampeyan pengin, sampeyan bisa nambah langkah ekstra menyang formulir kasebut.

### Nyunting Formulir Pambayaran: {#editing-a-checkout-form}

Kaya sing wis kasebut sadurunge, sampeyan bisa nggawe formulir pambayaran kanggo macem-macem tujuan. Ing conto iki kita bakal nggarap formulir registrasi.

Sawise pindhah menyang editor formulir pambayaran, wenehi jeneng kanggo formulir sampeyan (sing mung bakal digunakake kanggo referensi internal) lan slug (digunakake kanggo nggawe shortcode, contone).

![Editor formulir pembayaran kanthi kolom jeneng lan slug](/img/config/checkout-form-name-slug.png)

Formulir digawe saka langkah lan kolom. Sampeyan bisa nambah langkah anyar kanthi ngeklik **Tambah Langkah Pembayaran Anyar**.

![Tombol Tambah Langkah Pembayaran Anyar](/img/config/checkout-form-add-step.png)

Ing tab pisanan saka jendhela modal, isi konten langkah formulir sampeyan. Wenehana ID, jeneng, lan katrangan. Bab-bab iki biasane digunakake sacara internal.

![Tab konten langkah pembayaran kanthi ID, jeneng, lan katrangan](/img/config/checkout-form-step-content.png)

Sabanjure, setel visibilitas langkah kasebut. Sampeyan bisa milih antarane **Tansah tampilake** , **Mung tampilake kanggo pangguna sing wis mlebu** utawa **Mung tampilake kanggo tamu**.

![Pilihan visibilitas langkah pembayaran](/img/config/checkout-form-step-visibility.png)

Pungkasan, atur gaya langkah kasebut. Iki kolom opsional.

![Konfigurasi gaya langkah pembayaran](/img/config/checkout-form-step-style.png)

Saiki, wektune nambah kolom menyang langkah pisanan kita. Cukup klik **Tambah Kolom Anyar** lan pilih jinis bagean sing dikarepake.

![Tombol Tambah Kolom Anyar](/img/config/checkout-form-add-field-button.png)![Dropdown pilihan jinis kolom](/img/config/checkout-form-field-type-dropdown.png)

Saben kolom nduweni parameter sing beda-beda kanggo diisi. Kanggo entri pisanan iki, kita bakal milih kolom **Jeneng pangguna**.

![Konfigurasi kolom jeneng pangguna](/img/config/checkout-form-username-content.png)![Parameter kolom jeneng pangguna](/img/config/checkout-form-username-visibility.png)![Setelan tambahan kolom jeneng pangguna](/img/config/checkout-form-username-style.png)

Sampeyan bisa nambah langkah lan kolom sapira perlune. Kanggo nampilake produk supaya pelanggan sampeyan bisa milih siji, gunakake kolom Tabel Rega. Yen sampeyan pengin ngidini klien sampeyan milih cithakan, tambahake kolom Pilihan Cithakan. Lan sateruse.

![Editor formulir pembayaran kanthi kolom pilihan cithakan](/img/config/checkout-form-with-template-field.png)

_**Cathetan:** Yen sampeyan nggawe produk sawise nggawe formulir pembayaran, sampeyan kudu nambahake produk kasebut ing bagean Tabel Rega. Yen sampeyan ora nambahake, produk kasebut ora bakal katon kanggo pelanggan ing kaca registrasi._

_**Cathetan 2:** jeneng pangguna, email, sandhi, judhul situs, URL situs, ringkesan pesenan, pambayaran, lan tombol kirim iku kolom wajib kanggo nggawe formulir pembayaran._

Nalika sampeyan nggarap formulir pembayaran, sampeyan mesthi bisa nggunakake tombol Pratinjau kanggo ndeleng kepiye klien sampeyan bakal ndeleng formulir kasebut. Sampeyan uga bisa ganti tampilan minangka pangguna sing wis ana utawa pengunjung.

![Tombol Pratinjau ing editor formulir pembayaran](/img/config/checkout-form-preview-button.png)![Pratinjau formulir pembayaran minangka pengunjung utawa pangguna sing wis ana](/img/config/checkout-form-preview-modal.png)

Pungkasan, ing **Pilihan Lanjut** sampeyan bisa ngatur pesen kanggo kaca **Matur Nuwun**, nambah potongan kode kanggo nglacak konversi, nambah CSS khusus menyang formulir pembayaran sampeyan utawa mbatesi mung kanggo negara tartamtu.

![Pilihan Lanjut kanthi kaca Matur Nuwun, pelacakan konversi, lan CSS khusus](/img/config/checkout-form-advanced.png)

Sampeyan uga bisa ngaktifake utawa mateni formulir pembayaran kanthi manual kanthi ngalih pilihan iki ing kolom tengen, utawa mbusak formulir kasebut kanthi permanen.

![Toggle aktif lan pilihan hapus kanggo formulir pembayaran](/img/config/checkout-form-active.png)

Aja lali nyimpen formulir pembayaran sampeyan!

![Tombol Simpen Formulir Pembayaran](/img/config/checkout-form-save.png)

Kanggo njupuk shortcode formulir sampeyan, klik **Gawe Shortcode** lan salin asil sing ditampilake ing jendhela modal.

![Modal Gawe Shortcode kanthi shortcode kanggo disalin](/img/config/checkout-form-editor.png)

_**Cathetan:** Sampeyan kudu nambahake shortcode iki menyang kaca registrasi supaya formulir pembayaran iki ditambahake menyang kana._

## Milih produk lan cithakan luwih dhisik liwat parameter URL: {#pre-selecting-products-and-templates-via-url-parameters}

Yen sampeyan pengin nggawe tabel rega sing dikustomisasi kanggo produk sampeyan lan milih luwih dhisik ing formulir pembayaran produk utawa cithakan sing dipilih pelanggan saka tabel rega utawa kaca cithakan sampeyan, sampeyan bisa nggunakake parameter URL kanggo iki.

### **Kanggo paket:** {#for-plans}

Menyanga **Ultimate Multisite > Products > Select a plan**. Sampeyan kudune ndeleng tombol **Klik kanggo nyalin Tautan sing Bisa Dibagi** ing sisih ndhuwur kaca. Iki tautan sing bisa sampeyan gunakake kanggo milih paket tartamtu iki luwih dhisik ing formulir pembayaran sampeyan.

![Kaca produk kanthi tombol tautan sing bisa dibagi](/img/config/products-list.png)

Elinga yen tautan sing bisa dibagi iki mung valid kanggo **Paket**. Sampeyan ora bisa nggunakake tautan sing bisa dibagi kanggo paket bundel utawa layanan.

### Kanggo cithakan: {#for-templates}

Yen sampeyan pengin milih luwih dhisik cithakan situs ing formulir pembayaran, sampeyan bisa nggunakake parameter: **?template_id=X** ing URL kaca registrasi sampeyan. "X" kudu diganti nganggo **nomer ID cithakan situs**. Kanggo njupuk nomer iki, menyanga **Ultimate Multisite > Sites**.

Klik **Atur** persis ing ngisor cithakan situs sing pengin sampeyan gunakake. Sampeyan bakal ndeleng nomer SITE ID. Cukup gunakake nomer iki kanggo cithakan situs tartamtu iki supaya dipilih luwih dhisik ing formulir pembayaran sampeyan. Ing kasus kita ing kene, parameter URL bakal dadi **?template_id=2**.

![Dhaptar situs sing nuduhake ID cithakan situs](/img/config/site-templates-list.png)

Upamane situs web jaringan kita yaiku [**www.mynetwork.com**](http://www.mynetwork.com) lan kaca registrasi kanthi formulir pembayaran kita ana ing kaca **/register**. URL lengkap kanthi cithakan situs iki wis dipilih luwih dhisik bakal katon kaya [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Lan yen sampeyan pengin, sampeyan bisa milih produk lan cithakan bebarengan luwih dhisik kanggo formulir pembayaran sampeyan. Sing perlu sampeyan lakoni mung nyalin tautan sing bisa dibagi saka paket kasebut lan nempelake parameter cithakan ing pungkasan. Bakal katon kaya [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
