---
title: Sayt Şablonlary
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Site Şablonları (v2) {#site-templates-v2}

_**QAYDERYAT: Bu makale Ultimate Multisite sürüm 2.x'i nəzərdə tutur. Əgər siz 1.x versiyasını istifadə edirsinizsə,**_ **bu artikla tanış olun.**_

Ultimate Multisite ilə premium şəbəkə yaratmaq zaman məqsədimiz mümkün qədər çox prosesləri avtomatlaşdırmaqdır, eyni zamanda müştərilərə veb saytlarını yaradarkən özlər üçün çeviklik və seçmə imkanları verməkdir. Bu balans əldə etmək üçün Ultimate Multisite Site Templates funksiyasından istifadə etmək çox asan bir yoldur.

## Site Şablonu nədir? {#what-is-a-site-template}

Adından göründüyü kimi, Site Template (Site Şablonu), şəbəkənizdə yeni saytlar yaradarkən əsas olaraq istifadə edilə bilən bir şablon saytdır.

Bu o deməkdir ki, siz əsas saytı yarada, müxtəlif pluginləri aktiv edə, aktiv tema seçə və onu istədiyiniz şəkildə özünüz uyğunlaşdıra bilərsiniz. Sonra müştəriniz yeni hesab yaratdıqda, daxilində heç bir mənalı məzmun olmayan standart WordPress saytı əvəzinə, bütün uyğunlaşdırmalar və məzmunlar artıq yerləşdirilmiş əsas saytınızın bir nüsxəsini alır.

Bu əla səslənir, amma yeni bir site şablonu necə yaradaram? Bu mümkün olan ən sadə yoldur.

## Yeni Site Şablonu yaratmaq və redaktə etmək {#creating-and-editing-a-new-site-template}

Site Template-lər şəbəkənizdə sadəcə adi saytlardır. Yeni bir şablon yaratmaq üçün sadəcə **Network Admin > Ultimate Multisite > Sites > Add Site** yoluna gedə bilərsiniz.

**![Sites siyahı səhifəsində site əlavə et butonu](/img/config/site-templates-list.png)**

Bu, sizdən **Site adı, Site Domeni/yolu** və **Site növü** soruşan bir modal pəncərəni açacaq. **Site Növü** açılır menyusunda isə **Site Template** seçdiyinizdinizdən əmin olun.*

_![Site növü açılır menyusu ilə site şablonu](/img/config/site-templates-list.png)_

Həmçinin, şablonda nə daxil olduğunu izah etmək üçün müştəri üzərində göstəriləcək təsvir əlavə edə bilərsiniz:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Formun, formanyň aşagynda **Copy Site** düğmesini görersiňiz. Bu size bar bolan bir site template esaslaryna esaslanýan täze site template döretmek üçin ýapyklylyk berer. Bu, başdan özüňizden site template döretmek yerine wagt sarmak üçin kömek edip, wagt sarmagy saklamaga mümkinçilik berýär.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Site Template Melliňini Özelleşdirmek {#customizing-the-contents-of-a-site-template}

Site template-i özelleşdirmek üçin, onuň dashboard panelindäki bölmämde ýerleşip zerur hasaplamalary edip bilersiňiz. Täze postlar, sayplar döredip, pluginleri işjeňleşdirip we aktif tema üýtgedip bilersiňiz. Hatta Customizer-e gidip ähli görnüşdäki özelleşdirmeleri üýtgetmek hem mümkin.

![Site template edit interface](/img/config/site-template-edit.png)

Bu maglumatlary, bir müşderi şol Site Template esaslanýan täze site döredende kopýa edip biler.

### Öňretmäge Dawlaýyşlar (Advanced Options) {#advanced-options}

Eger siz belli bir derejede custom kod bilen tanalmagyňyz bolsa, täze site döredilenden soň olarda maglumatlary awtomatiki ýerleşdirmek üçin Search and Replace API-ni ulanyp bilersiňiz. Bu, Mysyllaşyk (About) saygynda kompaniýa adyny üýtgetmek, Kontakt saygyna kontakt epelini üýtgetmek we şeýle zatlar üçin amatlydyr.

### Site Template-leri Ulanmak {#using-site-templates}

Gowy, siz dürli dizaynlar, temalar we sazlamalar bilen birnäçe dürli Site Template döredip bilersiňiz. Iň soňky sorag: olary şu wagt ulgamynda nähili amatly edip bilerisiz?

Esasy mesele şudur: şu wagt sizde iki görnüşde ulanmak mümkin (bir wagtda birleşdirip däl):

  * Bir Site Template-i her bir Plan bilen baglanyşdyrmak.

**ÝA**

  * Müşderileri ýa-da klientleri sign-up edýan wagty özler üçin site template-lerini saýlaýanlara bolmak.

#### Görnüş 1: Site Template Baglanyşdyrmak {#mode-1-assign-site-template}

Bu rejimde, klientler hesap açarken şablon seçemezler; bunun yerine siz her bir Plan için hangi şablonun kullanılacağını belirleyeceksiniz.

Bunu yapmak için **Ultimate Multisite > Products > Edit** menüsüne gitmeniz gerekir.

![Edit product to assign site template](/img/config/product-site-templates.png)

Bu sizi **Edit Product** sayfasına götürecektir. **Product Options** (Ürün Seçenekleri) bölümünün altında, **Site template** sekmesini bulun ve açılır menüden **Assign Site Template** (Site Şablonunu Atama) seçeneğini seçin. Bu, mevcut site şablonlarının listesini açacak ve ürüne özel yalnızca bir site şablonu seçmenize olanak tanıyacaktır.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Mod 2: Mevcut Site Şablonunu Seçme {#mode-2-choose-available-site-template}

Bu modda, kayıt süreci sırasında müşterilerin bir seçim yapmasını sağlarsınız. Onlar, ürün ayarlarında tanımladığınız farklı site şablonlarından seçebileceklerdir. Seçili ürüne bağlı olarak onlara sunulabilecek site şablon sayısını sınırlama seçeneğiniz de vardır. Bu, her ürün için farklı site şablon setleri oluşturmanıza olanak tanır ve bu da daha yüksek fiyatlı bir ürün için farklı işlevleri ve özellikleri öne çıkarmak adına idealdir.

**Ürün Düzenleme** səhifesinde. **Ürün Seçenekleri** bölməsində **Sayt şablonu** tabına keçin və açılan menyudan **Mövcud Sayt Şablonunu Seçin** seçiminə basın. Bu, mövcud sayt şablonlarının siyahısını göstərəcək və istədiyiniz sayt şablonunu seçməyinizə imkan verəcək. Bunu etmək üçün onun Davranışını seçə bilərsiniz: əgər sayt şablonunun siyahıda olmasını istəyirsinizsə **Mövcud** (Available) seçin. Əgər sayt şablonunun seçim kimi görünməsini istəmirsinizsə **Mövcud Olunmayan** (Not Available) seçin. Və əgər siyahıda olan sayt şablonlarından birinin default olmasını istəyirsinizsə **Əvvəlcədən Seçilmiş** (Pre-selected) seçin.

![Davranış variantları ilə mövcud sayt şablonlarını seçin](/img/config/product-site-templates.png)

### Default Rejim: Checkout formunda sayt şablonu seçimi {#default-mode-site-template-selection-on-the-checkout-form}

Əgər bütün sayt şablonlarınızın qeydiyyat zamanı mövcud olmasını istəyirsinizsə, və ya hər bir yaratdığınız məhsulun altında sayt şablonlarını təyin etmək və ya göstərmək üçün əlavə iş görmək istəmirsinizsə, sadəcə **Checkout Formu** altındakı sayt şablonu seçimini təyin edə bilərsiniz. Bunu etmək üçün **Ultimate Multisite > Checkout Forms**-a gedin və konfiqurasiya etmək istədiyiniz formun altında **Edit**-ə basın.

Bu sizə **Checkout Formunu Redaktə Et** səhifəsini göstərəcək. **Template Selection** (Şablon Seçimi) sahəsini tapın və onun altındakı **Edit**-ə basın.

Bir modal pəncərə açılacaq. **Template Sites** (Şablon Saytları) sahəsi altında, qeydiyyat zamanı mövcud olmasını istədiyiniz bütün sayt şablonlarını seçib siyahıya əlavə edə bilərsiniz. Buradan təyin etdiyiniz sayt şablonları, istifadəçinin hansı məhsulu seçsindən asılı olmayaraq mövcud olacaq.

![Checkout formunun redaktoru içində şablon seçimi sahəsi](/img/config/checkout-form-template-step.png)

Frontenddə müştərilər checkout zamanı şablon seçicini görür və yeni saytları üçün başlanğıc dizaynı seçə bilirlər.

![Registration sırasında ön yüz şablon seçicisi](/img/config/frontend-template-chooser.png)

### Site Şablon Seçenekleri {#site-template-options}

Ultimate Multisite ayarları altında açıp kapatabileceğiniz başka site şablon işlevleri de mevcuttur.

![Ultimate Multisite ayarlarında site şablon seçenekleri](/img/config/settings-sites-templates-section.png)

#### Şablon Değiştirilmesine İzin Verin (Allow Template Switching) {#allow-template-switching}

Bu seçeneği etkinleştirirseniz, müşteriler hesabın ve sitenin oluşturulmasından sonra kayıt işlemi sırasında seçtikleri şablonu değiştirebilirler. Bu, müşteri açısından faydalıdır çünkü daha sonra orijinal seçimlerinin kendi özel ihtiyaçları için en iyisi olmadığını fark ederlerse bir şablonu yeniden seçmelerine olanak tanır.

#### Kullanıcıların Kendi Siteni Şablon Olarak Kullanmasına İzin Verin (Allow Users to use their Site as templates) {#allow-users-to-use-their-site-as-templates}

Alt site kullanıcıları kendi sitelerini oluşturmak ve tasarlamak için zaman harcadıkları için, ağınızda başka bir alt site oluşturulduğunda mevcut olan site şablonlarından birini klonlayıp kullanmak isteyebilirler. Bu seçenek onlara bunu yapma imkanı verecektir.

#### Şablon Çoğaltılırken Medyayı Kopyalama (Copy Media on Template Duplication) {#copy-media-on-template-duplication}

Bu seçeneği işaretlerseniz, şablon sitesine yüklenen medyayı yeni oluşturulan siteye kopyalar. Bu durum her bir planda geçersiz kılınabilir.

#### **Arama Motorlarının Site Şablonlarını İndekslemesini Engelleme (Prevent Search Engines from indexing Site Templates)** {#prevent-search-engines-from-indexing-site-templates}

Bu makalede tartıştığımız gibi, site şablonları standart yapı taşlarıdır ancak yine de ağınızın bir parçasıdır ve bu da arama motorlarının onları bulabilmesi anlamına gelir. Bu seçenek, arama motorlarının bunları indekslemesine izin vermemek için site şablonlarını gizlemenize olanak tanır.

## Otomatik Arama-Değiştirme ile Site Şablonlarını Önceden Doldurma (Pre-populating Site Templates with auto search-and-replace) {#pre-populating-site-templates-with-auto-search-and-replace}

Ultimate Multisite-inň iňden güýçli heretlari biri – bu ýa-da size laýyklykda tekst, reňk we saýlanma ulgamlaryny (fields) goşmaga mümkinçiligi. Bu maglumatlary alyp barmakdan soň, biz olary saýlanan web saytyň şertli böleklerinde önümde doly etmek üçin ulanyp biläris. Soňra, täze sayt işlenip düşündirildiğinde, Ultimate Multisite bu ýerleşdirilen ýerlikleri (placeholders) reşitlenji maglumatlar bilen üýtgedendir.

Meselem, siz reşitlenişde ulanyjynyň kompaniýa adyny almak we ol kompaniýa adyny awtomatiki homepage-e goýmak isleseňiz. Şertli saytyň size degişli homepage-iňizde bu ýerleşdirilen ýerlikleri goşmaly, mysal aşakdaky suratda (ýerlikler ikidubly kowlar bilen — {{placeholder_name}} — dürlüldü).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Soňra, bu maglumatlary almak üçin size degişli reşitleniş ulgamynda (checkout form) bir ulgam goşmaga bilersiňiz. Şablon saýlamagy üçin ulanylýan esasy ulgam bilen bilelikde custom fieldleri şablonu saýlaýjy bilen ýanyn ýerleşdirip bilersiňiz:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Siziň müşderiniz soňra reşitleniş dowamynda bu ulgamy dolduryp biler.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite soňra ýerleşdirilen ýerlikleri müşderiden berlen maglumatlar bilen awtomatiki ýaly üýtgedendir.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### "Ýerlikler bilen doly şablon" problemini çözmek {#solving-the-template-full-of-placeholders-problem}

Bu ähli zat gowy, ýöne biz bir çuň suw problemi bilen ýüzleşdirýäris: indi müşderilerimizden görüp biljek saytyň şablonlarymız — ol maglumat bermeçlik duýulýan ýerlikler bilen doly.

Bu sorçulygy çözmek üç usul barada size teklif edýärin: placeholder-lar üçin saýly (fake) bahalary goýmak we bu bahalary şablon sitlerinde müşderileriniz gelip geçýän wagtda özüni tapyp, ýerine ýazmak üçin ulanyp bilmek.

Şablon placeholder-laryny redaktir etmek üçin **Ultimate Multisite > Settings > Sites** bilen gitmäge hemman bolarsyň we soňra, saýlany (sidebar) **Edit Placeholders** linkine basyp bilersiňiz.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Bu sizi placeholder-larynyň resminamasy redaktir ediji bölümi bilen ýol berer, bu ýerde siz placeholder-lar goýup olaryň özlerine degişli mahsullary hem goýa bilersiňiz.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
