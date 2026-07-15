---
title: Template Situs
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Site Templates (v2)

_**CATATAN: Artikel iki merujuk marang Ultimate Multisite versi 2.x. Yen sampeyan nggunakake versi 1.x,**_ **deleng artikel iki.**_

Tujuan kita nalika nggawe jaringan premium nganggo Ultimate Multisite ya kanggo ngotomatisasi sak akeh proses sing wis ana, karo menehi fleksibilitas lan pilihan beda marang pelanggan nalika nggawe website-e. Salah siji cara gampang kanggo nggayuh keseimbangan iki ya kanthi nggunakake fitur Site Templates ing Ultimate Multisite.

## Apa kuwi Site Template? {#what-is-a-site-template}

Miturut jenenge, Site Template iku kaya template dasar (boilerplate site) sing bisa dienggo minangka dhasar nalika nggawe website anyar ing jaringan sampeyan.

Iki tegese, sampeyan bisa nggawe website dhasar, ngaktifake plugin-plugin beda, nentokake tema aktif, lan ngowahi (customize) nganggo cara apa wae sing dikarepake. Banjur, nalika pelanggan sampeyan nggawe akun anyar, tinimbang entuk WordPress site standar tanpa isi sing berarti, dheweke bakal entuk salinan website dhasar sampeyan kanthi kabeh penyesuaian lan konten wis ana ing kono.

Iki kedengerane mantep banget, nanging kepiye caraku nggawe template site anyar? Iki gampang banget.

## Nggawe lan Ngedit Site Template Anyar {#creating-and-editing-a-new-site-template}

Site Templates iku mung website biasa ing jaringan sampeyan. Kanggo nggawe template anyar, sampeyan cukup tindakake **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Tombol Tambah site ing halaman daftar Sites](/img/config/site-templates-list.png)**

Iki bakal mbukak jendela modal sing bakal njaluk **Site title, Site Domain/path,** lan **Site type**. Ing kolom *Site Type* drop-down, pasthekake sampeyan milih **Site Template** *.

_![Modal tambah site template kanthi dropdown site type](/img/config/site-templates-list.png)_

Sampeyan uga bisa nambah deskripsi sing kanggo pelanggan kanggo njelasake apa wae sing ana ing template kasebut:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Ing ngisor formulir, sampeyan bakal nemokake sak tombol toggle **Copy Site**. Iki bakal menehi kesempatan marang panjenengan kanggo nggawe template situs anyar adhedhasar template situs sing wis ana minangka titik awal supaya luwih cepet lan hemat wektu tinimbang nggawe template saka nol.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Ngowahi isi Template Situs {#customizing-the-contents-of-a-site-template}

Kanggo ngowahi template situs panjenengan, cukup tindakake dashboard panelé lan laksanakake owahan sing dibutuhake. Panjenengan bisa nggawe postingan anyar, halaman, ngaktifake plugin, lan ngowahi tema aktif. Panjenengan uga bisa menyang Customizer lan ngowahi macem-macem pilihan kustomisasi.

![Site template edit interface](/img/config/site-template-edit.png)

Kabeh data kuwi bakal di-copy nalika pelanggan nggawe situs anyar adhedhasar Template Situs kasebut.

### Pilihan Lanjutan (Advanced Options) {#advanced-options}

Yen panjenengan wis ngerti cara nulis kode kustom, panjenengan bisa nganggo Search and Replace API kita kanggo ngowahi informasi secara otomatis ing situs anyar sawise digawe. Iki migunani kanggo bab-bab kaya ngowahi jeneng perusahaan ing halaman Tentang (About page), ngowahi email kontak ing halaman Kontak, lsp.

### Nggunakake Template Situs {#using-site-templates}

Oke, panjenengan wis nggawe akeh Template Situs sing beda-beda desain, tema, lan pengaturan. Kepiye carane supaya dadi migunani ing jaringan panjenengan saiki?

Intine, ana rong cara sing bisa panjenengan gunakake saiki (ora barengan):

  * Nggandhengake siji Site Template marang saben Rencana (Plan) panjenengan.

**ATAU**

  * Menehi pilihan marang pelanggan kanggo milih template situs dhewe nalika daftar.

#### Mode 1: Menugaskan Site Template {#mode-1-assign-site-template}

Ing mode iki, pelanggan sampeyan ora bakal bisa milih template nalika nggawe akun, nanging malah sampeyan sing bakal nentokake template endi sing kudu digunakake kanggo saben Plan sampeyan.

Kanggo nindakake kuwi, sampeyan perlu menyang **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Iki bakal nggawa sampeyan menyang halaman **Edit Product**. Ing bagian **Product Options**, goleki tab **Site template** lan pilih opsi **Assign Site Template** saka kotak pilihan (drop-down field). Iki bakal mbukak daftar template situs sing ana lan bakal ngidini sampeyan milih mung siji template situs sing khusus kanggo produk kasebut.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Mode 2: Pilih Template Situs Sing Tersedia {#mode-2-choose-available-site-template}

Ing mode iki, sampeyan bakal menehi pilihan marang pelanggan nalika proses daftar (sign-up). Dheweke bakal bisa milih saka template situs sing beda sing sampeyan definisik ing pengaturan produk. Sampeyan duwe pilihan kanggo nggawa wates template situs sing bisa dipilih dhewe kanthi ngisor produk sing wis dipilih. Iki bakal ngidini sampeyan duwe kelompok template situs sing beda saben produk, sing pas banget kanggo nandhakake fungsi lan fitur sing beda kanggo produk sing regane luwih dhuwur.

Ing halaman **Edit Product**. Ing bagian **Product Options**, goleki tab **Site template** lan pilih opsi **Choose Available Site Template** saka kolom *drop-down*. Iki bakal nggawa daftar template situs sing ana lan sampeyan bisa milih template situs sing arep dadi pilihan. Sampeyan bisa nindakake iki kanthi milih perilakunya: **Available** yen sampeyan kepengin template situs kasebut dimasukkan ing daftar, _**Not Available**_ yen sampeyan ora kepengin template situs kuwi muncul minangka pilihan, lan **Pre-selected** yen sampeyan arep salah siji template situs sing ana ing daftar dadi pilihan baku.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Mode Default: Pemilihan template situs ing formulir Checkout {#default-mode-site-template-selection-on-the-checkout-form}

Yen sampeyan kepengin kabeh template situs sampeyan bisa diakses nalika registrasi, utawa mungkin ora seneng repot nggawe tugas tambahan kanggo milih utawa ngewangi template situs ing saben produk sing sampeyan gawe. Banjur, sampeyan cukup setel pemilihan template situs ing **Checkout Form** sampeyan. Kanggo nindakake iki, tindakake menyang **Ultimate Multisite > Checkout Forms** lan klik **Edit** ing formulir sing arep sampeyan konfigurasike.

Iki bakal nggawa halaman **Edit Checkout Form**. Goleki kolom **Template Selection** lan klik **Edit** ing ngisoré.

Siji jendela modal bakal muncul. Ing bawah kolom **Template Sites**, sampeyan bisa milih lan ndaftarake kabeh template situs sing arep dadi pilihan nalika registrasi. Template situs sing sampeyan tentokake saka kene bakal tersedia sanajan produk apa wae sing dipilih dening pengguna.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

Ing *frontend*, pelanggan bakal weruh pemilih template nalika *checkout* lan bisa milih desain awal kanggo situs anyar mereka.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Pilihan Template Situs {#site-template-options}

Ana ana fungsi template situs liyane bisa diaktifake utawa dinonaktifake ing pengaturan Ultimate Multisite.

![Site template options in Ultimate Multisite settings](/img/config/settings-sites-templates-section.png)

#### Izinkan Pergantian Template {#allow-template-switching}

Ngasah pilihan iki bakal ngidini klien sampeyan ganti template sing dipilih nalika proses daftar sawise akun lan situs wis digawe. Iki migunani saka sudut pandang klien amarga dheweke bisa milih template maneh yen banjur dheweke nemokake yen pilihan asline ora paling pas kanggo kebutuhan spesifiké.

#### Izinkan Pengguna Nggunakake Situs Dheweke Minangka Template {#allow-users-to-use-their-site-as-templates}

Amarga pengguna subsite wis ngenteni wektu kanggo nggawe lan ngrancang situs dhewe, mungkin dheweke arep nyalin lan nggunakake iku minangka salah siji template situs sing bisa dipilih nalika nggawe subsite liyane ing jaringan sampeyan. Pilihan iki bakal ngidini dheweke nindakake kuwi.

#### Salin Media Nalika Duplikasi Template {#copy-media-on-template-duplication}

Ngasah pilihan iki bakal nyalin media sing diunggah ing situs template menyang situs anyar sing wis digawe. Iki bisa ditimpa (override) ing saben rencana.

#### **Pencegah Mesin Pencari Nggoleki Site Templates** {#prevent-search-engines-from-indexing-site-templates}

Site templates kaya sing dibahas ing artikel iki iku mung kerangka (boilerplate) nanging tetep dadi bagian saka jaringan sampeyan, tegese isih ana kanggo mesin pencari nemokake. Pilihan iki bakal ngidini sampeyan nyembunyikake site templates supaya mesin pencari bisa nggoleki lan mengindeksé.

## Mengisi Site Templates Kanthi auto search-and-replace {#pre-populating-site-templates-with-auto-search-and-replace}

Salah siji fitur paling ampuh dari Ultimate Multisite ya, yaitu bisa nambahin teks, warna, dan pilihan field apa aja di form registrasi. Setelah data itu kita tangkap, kita bisa pakai buat ngisi konten awal di bagian tertentu dari template situs yang udah dipilih. Terus, pas situs baru itu dipublikasikan, Ultimate Multisite bakal ganti tempat penampung (placeholder) itu dengan informasi asli yang sudah dimasukkan saat registrasi.

Contohnya, kalau kamu mau dapetin nama perusahaan pengguna akhir pas registrasi terus otomatis nama perusahaannya muncul di halaman utama. Di halaman utama template situsmu, kamu perlu nambahin tempat penampung (placeholder), seperti contoh di gambar di bawah (tempat penampung harus dikelilingi kurung ganda - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Terus, kamu tinggal nambahin field registrasi yang cocok di form checkout kamu buat ngambil data itu. Editor form checkout yang sama yang dipakai buat pilih template memungkinkan kamu menaruh field kustom di samping pemilih template:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Pelangganmu nanti bisa mengisi field itu pas registrasi.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite akan otomatis mengganti tempat penampung (placeholder) dengan data yang diberikan oleh pelanggan.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Mengatasi masalah "template penuh dengan placeholder" {#solving-the-template-full-of-placeholders-problem}

Semua itu bagus, tapi kita ketemu masalah yang kurang enak: sekarang template situs kita - yang bisa dikunjungi sama pelanggan kita - isinya banyak tempat penampung (placeholder) yang jelek dan nggak kasih banyak informasi.

Kanggo ngatasi masalah kuwi, kita nawakake pilihan kanggo ngatur nilai palsu (fake values) kanggo placeholder, lan kita nganggo nilai-nilai kuwi kanggo nggoleki lan ngontenake isine ing template situs nalika pelanggan sampeyan lagi mampir.

Sampeyan bisa akses editor placeholder template kanthi tindakake **Ultimate Multisite > Settings > Sites**, banjur, ing sidebar, klik tautan **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Iki bakal nggolek sampeyan menyang editor konten placeholder, ing ngendi sampeyan bisa nambah placeholder lan isine sing proporsional karo placeholder kasebut.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
