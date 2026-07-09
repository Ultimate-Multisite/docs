---
title: Carane Ngonfigurasi Pemetaan Domain
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Cara Ngatur Pemetaan Domain (v2) {#how-to-configure-domain-mapping-v2}

_**CATETAN PENTING: Artikel iki ngrujuk marang Ultimate Multisite versi 2.x.**_

Salah siji fitur paling kuat saka jaringan premium yaiku kemampuan kanggo menehi klien kesempatan masang domain tingkat paling dhuwur menyang situsé. Pungkasane, endi sing katon luwih profesional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) utawa [_**joesbikeshop.com**_](http://joesbikeshop.com)? Mula Ultimate Multisite nawakake fitur kuwi sing wis kalebu, tanpa perlu nggunakake plugin pihak katelu.

## Apa iku pemetaan domain? {#whats-domain-mapping}

Kaya sing diandharake jenenge, pemetaan domain yaiku kemampuan sing ditawakake Ultimate Multisite kanggo nampa panjaluk kanggo domain kustom lan memetakake panjaluk kasebut menyang situs sing cocog ing jaringan sing dipasangi domain tartamtu kuwi.

### Cara nyiyapake pemetaan domain ing Jaringan Ultimate Multisite sampeyan {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Pemetaan domain mbutuhake sawetara panyiyapan saka pihak sampeyan supaya bisa mlaku. Untunge, Ultimate Multisite ngotomatisasi pakaryan sing abot kanggo sampeyan supaya sampeyan bisa gampang nyukupi syarat-syarate.

Nalika instalasi Ultimate Multisite, wizard bakal kanthi otomatis nyalin lan nginstal **sunrise.php** menyang folder sing wis ditemtokake. **Wizard ora bakal ngidini sampeyan nerusake nganti langkah iki rampung**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Iki tegese sawise wizard instalasi Ultimate Multisite rampung nyiyapake jaringan sampeyan, sampeyan bisa langsung miwiti memetakake domain kustom.

Elinga yen pemetaan domain ing Ultimate Multisite ora wajib. Sampeyan duwe pilihan kanggo nggunakake fungsi pemetaan domain bawaan WordPress Multisite utawa solusi pemetaan domain liyane.

Yen sampeyan kudu mateni pemetaan domain Ultimate Multisite kanggo menehi dalan marang solusi pemetaan domain liyane, sampeyan bisa mateni fitur iki ing **Ultimate Multisite > Setelan > Pemetaan Domain**.

![Kaca setelan Pemetaan Domain sing nuduhake pangalihan admin, pesen pemetaan lan pilihan DNS](/img/config/domain-mapping-settings.png)

Pas ing ngisor pilihan iki, sampeyan uga bisa ndeleng pilihan **Peksa Pangalihan Admin**. Pilihan iki ngidini sampeyan ngontrol apa pelanggan sampeyan bisa ngakses dashboard adminé saka domain kustom lan subdomainé, utawa mung saka salah sijiné.

Yen sampeyan milih **Peksa ngalih menyang domain sing dipetakake** , pelanggan sampeyan mung bakal bisa ngakses dashboard adminé saka domain kustomé.

Pilihan **Peksa ngalih menyang** **domain jaringan** bakal nindakake kebalikane kanthi persis - pelanggan sampeyan mung bakal diidini ngakses dashboardé saka subdomainé, sanajan nyoba mlebu saka domain kustomé.

Lan pilihan **Idini akses menyang admin liwat domain sing dipetakake lan domain jaringan** ngidini wong-wong mau ngakses dashboard adminé saka subdomain lan domain kustom.

![Dropdown Pangalihan Admin dibukak nuduhake telung pilihan pangalihan](/img/config/domain-mapping-redirect-options.png)

Ana rong cara kanggo memetakake domain kustom. Sing pisanan yaiku kanthi memetakake jeneng domain saka dashboard admin jaringan sampeyan minangka super admin lan sing kapindho liwat dashboard admin subsitus ing ngisor kaca Account.

Nanging sadurunge sampeyan miwiti memetakake domain kustom menyang salah siji subsitus ing jaringan sampeyan, sampeyan kudu mesthekake yen **setelan DNS** saka jeneng domain wis dikonfigurasi kanthi bener.

###

### Mesthekake setelan DNS domain wis dikonfigurasi kanthi bener {#making-sure-the-domain-dns-settings-are-properly-configured}

Supaya pemetaan bisa mlaku, sampeyan kudu mesthekake domain sing arep dipetakake nuding menyang alamat IP Jaringan sampeyan. Elinga yen sampeyan butuh alamat IP Jaringan - alamat IP saka domain panggonan Ultimate Multisite diinstal - dudu alamat IP saka domain kustom sing pengin dipetakake. Kanggo nggoleki alamat IP saka domain tartamtu, disaranake menyang [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), contone.

Kanggo memetakake domain kanthi bener, sampeyan kudu nambah **A RECORD** ing konfigurasi **DNS** sampeyan sing nuding menyang **alamat IP** kasebut. Pangelolaan DNS beda-beda banget antarane registrar domain sing beda, nanging ana akeh tutorial online sing nerangake iki yen sampeyan nggoleki " _Creating A Record on XXXX_ " ing ngendi XXXX iku registrar domain sampeyan (cont.: " _Creating A Record on_ _GoDaddy_ ").

Yen sampeyan nemoni kangelan supaya iki bisa mlaku, **hubungi dhukungan registrar domain sampeyan** lan dheweke bakal bisa mbantu sampeyan ing bagean iki.

Yen sampeyan ngrancang ngidini klien sampeyan memetakake domainé dhewe, dheweke kudu nindakake pakaryan ing bagean iki dhewe. Arahake dheweke menyang sistem dhukungan registrare yen dheweke ora bisa nggawe A Record.

### Memetakake jeneng domain kustom minangka Super Admin {#mapping-custom-domain-name-as-super-admin}

Nalika sampeyan wis mlebu minangka super admin ing jaringan sampeyan, sampeyan bisa kanthi gampang nambah lan ngatur jeneng domain kustom kanthi pindhah menyang **Ultimate Multisite > Domain**.

![Kaca dhaptar Domain ing Ultimate Multisite](/img/admin/domains-list.png)

Ing ngisor kaca iki, sampeyan bisa ngeklik tombol **Tambah Domain** ing sisih ndhuwur lan iki bakal nampilake jendhela modal ing ngendi sampeyan bisa nyetel lan ngisi **jeneng domain kustom** , **subsitus** sing pengin sampeyan terapake jeneng domain kustom kasebut, lan mutusake apa sampeyan pengin nyetel minangka jeneng **domain utama** utawa ora (elinga yen sampeyan bisa memetakake **pirang-pirang jeneng domain menyang siji subsitus**).

![Modal Tambah Domain kanthi jeneng domain, pamillih situs lan toggle domain utama](/img/admin/domain-add-modal.png)

Sawise nglebokake kabeh informasi, sampeyan banjur bisa ngeklik tombol **Tambah Domain Sing Wis Ana** ing sisih ngisor.

Iki bakal miwiti proses verifikasi lan njupuk informasi DNS saka domain kustom. Sampeyan uga bakal ndeleng log ing sisih ngisor kaca supaya sampeyan bisa ngetutake proses sing lagi dilakoni. Proses iki bisa mbutuhake sawetara menit kanggo rampung.

Ultimate Multisite v2.13.0 uga nggawe rekaman domain internal kanthi otomatis nalika situs anyar digawe ing host sing kudu dianggep minangka domain saben-situs. Yen host kuwi domain utama jaringan, utawa salah siji saka domain dhasar formulir checkout bareng sing dikonfigurasi ing field **Site URL**, rekaman mapped-domain otomatis bakal dilewati supaya domain dhasar bareng tetep kasedhiya kanggo saben situs sing nggunakake.

Nalika pelanggan ndhaptar domain anyar liwat Domain Seller v1.3.0 utawa sing luwih anyar, Ultimate Multisite kanthi otomatis map domain sing didhaptar menyang situs jaringan pelanggan minangka standar. Administrator ora perlu maneh nambah rekaman mapped-domain kapisah sawisé registrasi kasil, kajaba yen pengin nyetel opsi kayata tandha primary-domain, status aktivasi, utawa pangaturan SSL.

**Stage** utawa status kudu owah saka **Checking DNS** dadi **Ready** yen kabeh wis disetel kanthi bener.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Yen sampeyan ngeklik jeneng domain, sampeyan bakal bisa ndeleng sawetara opsi ing njero. Ayo dideleng sedhela:

![Kaca rincian domain nganggo stage, situs, aktif, primary, lan toggle SSL](/img/admin/domain-edit.png)

**Stage:** Iki minangka tahap sing saiki dienggoni domain. Nalika sampeyan sepisanan nambah domain, kemungkinan domain bakal ana ing tahap **Checking DNS**. Proses iki bakal mriksa entri DNS lan mesthekake yen entri kasebut bener. Banjur, domain bakal dilebokake ing tahap **Checking SSL**. Ultimate Multisite bakal mriksa apa domain nduwé SSL utawa ora lan bakal nggolongaké domain sampeyan minangka **Ready** utawa **Ready (without SSL)**.

**Site:** Subdomain sing digandhengaké karo domain iki. Domain sing wis dipetakake bakal nampilaké konten saka situs tartamtu iki.

**Active:** Sampeyan bisa ngaktifake utawa mateni opsi iki kanggo ngaktifake utawa nonaktifake domain.

**Is Primary Domain?:** Pelanggan sampeyan bisa nduwé luwih saka siji mapped domain kanggo saben situs. Gunakake opsi iki kanggo milih apa iki domain utama kanggo situs tartamtu kasebut.

**Is Secure?:** Sanajan Ultimate Multisite mriksa apa domain nduwé sertifikat SSL utawa ora sadurunge ngaktifake, sampeyan bisa milih kanthi manual kanggo ngemot domain nganggo utawa tanpa sertifikat SSL. Elinga yen website ora nduwé sertifikat SSL lan sampeyan nyoba maksa ngemot nganggo SSL, iki bisa nyebabaké galat.

### Mapping jeneng domain kustom minangka pangguna Subsite {#mapping-custom-domain-name-as-subsite-user}

Administrator subsite uga bisa map jeneng domain kustom saka dashboard admin subsite.

Pisanan, sampeyan kudu mesthekake yen sampeyan ngaktifake opsi iki ing setelan **Domain mapping**. Delengen screenshot ing ngisor iki.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Sampeyan uga bisa nyetel utawa ngonfigurasi opsi iki ing level **Plan** utawa opsi produk ing **Ultimate Multisite > Products**.

![Bagean Custom Domains ing kaca edit produk](/img/config/product-custom-domains.png)

Nalika salah siji saka opsi kasebut diaktifake lan pangguna subsite diijini map jeneng domain kustom, pangguna subsite kudu ndeleng metabox ing kaca **Account** sing diarani **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Pangguna bisa ngeklik tombol **Add Domain** lan iki bakal nampilake jendhela modal kanthi sawetara pandhuan.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Banjur pangguna bisa ngeklik **Next Step** lan nerusake nambah jeneng domain kustom. Dheweke uga bisa milih apa iki bakal dadi domain utama utawa ora.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Klik **Add Domain** bakal miwiti proses verifikasi lan njupuk informasi DNS saka domain kustom.

### Babagan Domain Syncing {#about-domain-syncing}

Domain Syncing yaiku proses nalika Ultimate Multisite nambah jeneng domain kustom menyang akun hosting sampeyan minangka domain add-on **supaya domain mapping bisa mlaku**.

Domain syncing kedadeyan kanthi otomatis yen panyedhiya hosting sampeyan nduwé integrasi karo fitur domain mapping Ultimate Multisite. Saiki, panyedhiya hosting iki yaiku _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ lan _Cpanel._

Nalika integrasi panyedhiya-host aktif, Ultimate Multisite uga bisa nglebokake tugas nggawe DNS utawa subdomain ing sisih panyedhiya menyang antrean kanggo situs sing mentas digawe. Yen ora ana integrasi sing ngrungokake tugas kasebut, background job bakal dilewati kanggo ngindhari entri antrean no-op. Pengecekan DNS lan SSL kanggo domain sing dipetakake tetep mlaku liwat proses domain-stage normal.

Sampeyan kudu ngaktifake integrasi iki ing setelan Ultimate Multisite ing tab **Integration**.

![Tab Integrations ing setelan Ultimate Multisite sing nampilake panyedhiya hosting](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Elinga yen panyedhiya hosting sampeyan dudu salah siji saka panyedhiya sing kasebut ing ndhuwur, **sampeyan kudu nyinkronake kanthi manual utawa nambah jeneng domain** menyang akun hosting sampeyan._
