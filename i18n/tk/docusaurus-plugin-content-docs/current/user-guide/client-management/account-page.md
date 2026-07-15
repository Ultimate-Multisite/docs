---
title: Müşteri Hasaby Sahypasy
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Müşteriniň Hasaby Sahypasy (v2)

_**ÖNEMLİ ÝAZGYCHY: Bu makale Ultimate Multisite 2.x versiyasyna aýdylýar.**_

Müşderiler siziň ulgamanyzda bir plan bilen baglydygy kabul edende, olara web saytuna we onuň hasabat sahypasyna (dashboard) girdirilip bilerler. Bu sahypa olaryň tölämleri, üjeleşmeler, domenler, plan çäkleri barada möhüüm maglumatlary görkezýär...

Bu tutorialda biz siziň müşteri hasaby sahabyndan geçip, olaryň bu sahypada näme görip edip biljekdigini görkezendirelik üçin size ýol berer.

## Hasaby Sahypa {#the-account-page}

Hasaby sahpa siziň müşteri hasabasyndaky **Account** (Hasaba) düwmesini basmagy bilen girilip bilerisiz.

![Müşteri hasaby menýüsü](/img/account-page/account-menu.png)

Sovereign tenant ulgamlarynda, Ultimate Multisite v2.13.0 bu müşteri dolandyrmagy ulgamynyň esasy saytunda saklaýar. Eger bir müşteri sovereign tenantdan hasaba girse we ol oradan checkout (töleg), billing (hasaplama), invoice (faktura), site-management (sayt dolandyrmagy), template-switching (template üýtgetmek) ýa-da domain-mapping (domen eşleşdirme) işlemleri amala aşyrsa, bu hereketler ulgamyň esasy saytyndaky müşteri paneline geri aýdylýar. Bu bolsa ulgamly hasaplama we üjeleşmeler yzygiderli bolmaga mümkinçilik berýär.

Müşteri sovereign tenantdan gelende, esasy sayt müşteri panelinde tenant saytuna geri dönmek üçin bir link saklanyp biler. Bu geri dönme linki diňe Ultimate Multisite olaryň hasabynyň bir sayty bolup-bolmadygyny barlap bilse, bu bolsa ýa-da tenant işini saklap galýar, ýöne laýyk däl yönlendirmeleriň öňüni alýar.

![Müşteri hasaby sahaby üsti](/img/account-page/overview.png)

Müşteri onu basandan soň, ol öz üjeleşmelerini, hasaplama adyny, fakturalaryny, domenlerini, sayt çäklerini görse we eger ulgamynda mümkin bolsa ****Site Template** (Sayt Template)ni üýtgedip biljekdigini hem görse.

Ol şol ýerden başga bir plan bilen üjeleşmäge ýa-da size teklip edýän başga paket ýa-da hyzmat satyn alyp biler. Her bir bölümi aýry-aýry gözläp görüp bileris.

### Siziň Üylygy Barada Umumy Barlag: {#your-membership-overview}

Siziň iňlisde web saytyňizden hemen aşakdaky ilkin blokda siziň şu waka planlaryň we ol bilen satyn alynan hyzmatlar/paketler baradaky umumy barlag görkezilýär. Bu blok şol belgili üye nömresini, onuň üçün ödenen ilkin miqdaryny, plan we her bir hyzmat/paket bahalaryny we bu üye üçin näçe gezek toplanýandygyny görkezýär. Ol hem üyenin **Aktiw** (Active), **Sürişip gitmiş** (Expired) ýa-da **Aýyrlanmady** (Canceled) bolup biljekdigini görüp bilerler.

![Plan, miqdar we toplanma baradaky üye umumy görkeziji](/img/account-page/membership-card.png)

Bu blokdan hemen aşakda siziň müşterileriniz **Bu Sayt Barada** (About This Site) we **Sayt Sünjileri** (Site Limits) bloklaryny görüp bilerler. Bu bloklar olaryň planlaryna degişli ähli çäkleri görkezýär: disk ulanylyşy, postlar, səhpa, zynjyrlama we ş. Mümkinçilikler her bir plan sahabynda **Ultimate Multisite > Products**-da özüni sazlap bilersiňiz.

![Plan çäklerini görkeziji Bu Sayt Barada we Sayt Sünjileri bloklary](/img/account-page/site-limits.png)

**Siziň Üylygy** (Your Membership) tarapyndan sağ tanyşykda, müşteriler **Üýtgetmek** (Change) düwümini basyp bilärler. Bu ol onlara bar bolan ähli planlary we paketleri/hyzmatlary görkezýär. Eger o başga bir plany saýlasa, üye üçin çäkler bu üyenin mövcud çäklerinden hasaplaýar – onu aşaklanýan ýa-da ýokary derejede geçirmekden bağımsız.

Şeýle hem, eger müşteriler bu mövcud üye üçin paketleri ýa-da hyzmatlary (meselem, hasaplap disk ulanyşy ýa-da zynjyrlama) satyn almak islese, mövcud üye üýtgetilmez, diňe täze paketler ona goşulýar.

Bu hususy hatlarda bu üye üýtgetmek sahabynda kupon kodlary goşmak mümkin däl. Eger müşderi ilkin üye satyn alyşynda kupon kody ulanyp bolsa, ol kod bu täze üye üçin hem işjeýär.

Hesap sayfasında, müşterileriniz fatura adreslerini de güncelleme imkanı bulurlar. Onlar sadece _Billing Address_ (Fatura Adresi) yanındaki **Update** (Güncelle) butonuna tıklamaları yeterlidir.

![Update billing address form](/img/account-page/billing-address-form.png)

Müşteriniz için yeni bir pencere açılacaktır. Yapması gereken tek şey, yeni adresi doldurmak ve _Save Changes_ (Değişiklikleri Kaydet) butonuna tıklamaktır.

### Site Şablonunu Değiştirme: {#updating-the-billing-address}

Müşterilerinizin site şablonlarını değiştirmesine izin vermek için **Ultimate Multisite > Settings > Sites** (Ayarlar > Siteler) bölümüne gitmeli ve **Allow Template Switching** (Şablon Değiştirmeye İzin Ver) seçeneğini açmalısınız.

Ayrıca, **Ultimate Multisite > Products** (Ürünler) bölümüne gidin, planlarınızı seçin ve **Site Templates** (Site Şablonları) sekmesine geçin. **Allow Site Templates** (Site Şablonlarına İzin Ver) seçeneğinin açık olduğundan emin olun ve **Site Template Selection Mode** (Site Şablon Seçim Modu) altında **Choose Available Site Templates** (Mevcut Site Şablonlarını Seç) seçeneğinin işaretli olduğundan emin olun.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Web sitenizdeki tüm mevcut site şablonlarını görebileceksiniz. Hangi şablonları kullanıma sunmak istediğinizi ve hangi şablonların bu plan altında abone olan müşterileriniz için müsait olmamasını istediğinizi seçebilirsiniz. Bu seçeneklerin ödeme formunu da etkilediğini unutmayın; **Not Available** (Kullanılamaz) olarak seçilen herhangi bir şablon, bu plan için kayıt sayfasında görünmeyecektir.

Artık müşterileriniz hesap sayfalarındaki **Change Site Template** (Site Şablonunu Değiştir) butonuna tıklayabilirler.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0, yeniden tasarlanmış bir şablon değiştirme paneli gösterir. Bu panel, müşterilerin yeni bir şablon seçmeden önce hangi şablonun aktif olduğunu görmeleri için **current-template card** (mevcut şablon kartı) ile başlar.

Müşteriler özlerini görýärler täriplerini gözden geçirmekde, bar bolan sayt şablonlarynyň dowamly gridi görünýär. Bu ol olar üçin özleri kabul edýän plan üçin şablonlary deňeşdirmegi kömek eder we häzirki saýlanşygy ýitirmäge ýardam berýär.

![Plan üçin bar bolan sayt şablonlarynyň listi](/img/config/site-templates-list.png)

Gowşak bilen özlerini üýtgetmek isleýänini saýladylanandan soň, olar üýtgeşmäni tassyklamak üçin soraýar.

![Sayt şablonyny üýtgetmek tassyklama diyalogaty](/img/account-page/template-switch-confirm.png)

Tassyklama boýunça açyp we **Process Switch** (Üýtgetmegi işlemek) düwmenine basyp, täze sayt şablonu müşderiniň web-saytynda ulanylýar.

Müşderiler özlerini häzirki laýyklykda ýüklenipdirilen şablon üçin saýlmagy zerurdyginde bu panelden **Reset current template** (Häzirki şablonu hasaplamak) funksionalyndan hem ulanyp bilmäler. Başga bir şablona geçmek ýaly, şablonu hasaplamak sayt maglumatlaryny üýtgedip biler, şonuň üçin müşderiler diňe hasaplamagy düşündiklerinde tassyklamakdan soň basmaly.

### Goşmaça domynlar (Custom Domains) goşmak: {#changing-the-site-template}

Müşderileriniz hem bu plan üçin özleri üçin domany goşmagy mümkin bolan ýaly özleri üçin hasap lapkasasynda opsiyona eýe bolarlar. Müşderilerinizin domany ulanyp bilmegi üçin, **Ultimate Multisite > Settings >** **Domain Mapping** (Domyn haritalamasy) bölümini geçiň.

**Enable Domain Mapping** (Domyn haritalamasyny işleýärlik) opsiyasyny açyň. Bu, müşderilerinizin ulanyp bilmegi üçin domany ulanyp bilmek üçin ulgamynda (network level) mümkinçilik berer.

Domyn haritalamasyny maglumat üçin hem bir wezipä (product basis) işleýärlikde işlenip-işlenmediğini kontrol etmäge unutmaň – sebäbi siz bir maglumat üçin müşderilerinizin domany ulanyp bilmegine ýok tataryk berip bilersiňiz.

**Ultimate Multisite > Products** (Üstüni Çuplary) bölümini geçiň. Öz saýlanmagy planyny saýlaň we **Custom Domains** (Goşmaça Domynlar) tabına gidiň. **Allow Custom Domains** (Goşmaça Domynlary ýetirmek) opsiyasyny açyň.

![Allow Custom Domains düwmeni bilen goşmaça domynlar tabyny](/img/config/product-custom-domains.png)

Bu, bu özel plana abonesen bütün müşterileriniz custom domain'leri (özel domenleri) kullanmalarına imkan verir. Indi, Account sayfasında müşterileriniz **Add Domain** (Domain Ekle) düğmeniyə klikləyərək custom domain əlavə edə bilərlər.

![Account səhifəsində Add Domain düyməsi](/img/account-page/add-domain-button.png)

Açılan ilk pəncərə müşterilərinizə bu custom domaini sizin şəbəkənizdə işlətmək üçün DNS qeydlərini necə yeniləməli olduqlarını bildirmək üçün bir mesaj göstərəcək.

![Custom domain əlavə edildikdə DNS təlimatları](/img/account-page/add-domain-dns.png)

Bu mesajı **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** (Yeni Domain Təlimatlarını Əlavə Et) vasitəsilə siz tərəfindən redaktə etmək olar.

![Domain Mapping-də Yeni Domain Təlimatları ayarı](/img/config/settings-domain-mapping.png)

Domain mapping ayarlar səhifəsinin tam görünüşü budur:

![Domain mapping ayarları tam səhifəsi](/img/config/settings-domain-mapping-full.png)

**Next Step** (Növbəti Addım) düyməsinə kliklədikdən sonra, müşterileriniz custom domain adını əlavə edə və bu custom domainin əsas domain olub olmayacağını seçə bilərlər. Qeyd etmək lazımdır ki, müşteriləriniz veb saytları üçün bir-dən çox custom domain istifadə edə bilirlər, ona görə hansının əsas domain olacağını seçə bilərlər.

![Əsas domain seçimi ilə custom domain adı daxil etmə](/img/account-page/add-domain-primary.png)

**Add Domain** (Domain Ekle) düyməsinə kliklədikdən sonra, domain müşterinizin hesabına əlavə olunur. Onların indi etməli olduğu yeganə şey, bu custom domainin DNS qeydlərini domen registratorlarında dəyişməkdir.

### Şifrəni Dəyişmək: {#adding-custom-domains}

Account dashboard daxilində müşterileriniz **Change Password** (Şifrəni Dəyiş) düyməsinə klikləyərək şifrələrini də dəyişə bilərlər.

![Account səhifəsində Şifrəni Dəyiş düyməsi](/img/account-page/change-password-button.png)

Bu yeni bir pencere açar, burada müşteriler mevcut şifrelerini girmeli ve ardından kullanmak istedikleri yeni şifreyi girmelidirler.

![Mevcut ve yeni şifre alanları olan şifre değiştirme formu](/img/account-page/change-password-form.png)

### Tehlike Bölgesi: {#changing-password}

**Danger Zone** kısmında ayrıca **Siteyi Sil** ve **Hesabı Sil** olmak üzere iki seçenek de gösterilir. Bu iki işlem geri alınamaz olduğu için her ikisi de Tehlike Bölgesi'nde yer alır. Müşteriler web sitelerini veya hesaplarını silseler bile onları geri getiremezler.

![Siteyi Sil ve Hesabı Sil seçenekleri olan Tehlike Bölgesi](/img/account-page/danger-zone.png)

Bu iki seçeneğin herhangi birine tıkladıklarında, web sitesini veya hesabı kaldırma seçeneğini açmaları gerekecek ve bu işlemin geri alınamayacağı konusunda uyarı alacaklardır.

![Siteyi Sil onay penceresi](/img/account-page/delete-site-confirm.png)

![Hesabı Sil onay penceresi](/img/account-page/delete-account-confirm.png)

Eğer web sitelerini silerlerse, hesapları ve üyelikleri etkilenmeyecektir. Sadece web sitelerindeki tüm içerikleri kaybedeceklerdir. Eğer hesaplarını silerlerse, tüm web siteleri, üyelikler ve bu hesapla ilgili tüm bilgiler kaybolacaktır.
