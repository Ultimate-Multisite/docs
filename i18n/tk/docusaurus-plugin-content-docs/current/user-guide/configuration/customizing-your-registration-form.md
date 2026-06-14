---
title: Ýeňilmegiňizi özelleşdirmek
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Sizden Soňlanýan Formany Özelleşdirmek

WordPress platformasynda döredilen başga SaaS ulgamlaryndan has özboluşly görünmek üçin, Ultimate Multisite size **Checkout Forms** funksiýasyny ulanman bilen soňlanma we giriş (login) sagatlaryny özelleşdirmäni mümkinçilik berýär.

Ol, täze müşderileri geçirmek üçin dürli usullary synaplamak üçin aňsat we yłan ýa-da esnek usul bolup bilsa-da, ol esasanam şahsy soňlanma formalary döretmek üçin ulanylýar. Bu makale size nädip etmegi bilersiňizini görkezmek maksady.

## Giriş we soňlanma sagatları:

Ultimate Multisite goýulandygyndan soň, ol siziň esasy sahatlaryňyzda awtomatiki jogaply giriş we soňlanma sagatlarını döredýär. Bu standart sagatları her wagt **Ultimate Multisite > Settings > Login & Registration** sagaty altyna geçip üýtgedip bilersiňiz.

![Login and Registration settings page](/img/config/settings-general.png)

Giriş we soňlanma sagatlaryny özelleşdirmek üçin size berilýän ähli görnüşi aşakda görkezýärin:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

**Login & Registration** sagatynda soňlanma bolan her bir opsiyany gözden geçireliň:

  * **Enable registration (Soňlanmagy işleýärlik):** Bu opsiyonda siziň ulgamanyzda soňlanmagy işjeňleşdirip ýa-da söndürip bilersiňiz. Eger bu opsiyaga söndürilse, müşderileriniz size degişli önüm agzalap we soňlanma edip bilmesinler.

  * **Enable email verification (E-poçta barlagçylygy işleýärlik):** Bu opsiyaga işjeňleşdirilse, bejisy plan üçin ýa-da synag döwrü bilen toplanan pully planlar üçin müşderiler e-poçta barlagçylyk edip biljekdir we olaryň web sahatlaryny döretmek üçin barlag linkine basmagy zerurdyr.

* **Default registration page:** Bu, kayıt üçin standart saytdır. Bu saytyzyň web sahypasynda ýaýlaşdyrylyp durmaly we onda bir ýazgy (şolça "checkout form" diýlip hem bilinýär) bolmaly - bu ýerde müşderiler sizdenki önümizi baglanyşdyrmak üçin goşantyr. Siz isleginizde köpçe kayıt sayatlary we checkout formalary döredip bilersiňiz, diňe ýatlaň ki, checkout formasy kayıt saytynda shortcode-y goýmagy zerurdyr, yoksa o görkezilmez.

* **Custom login page ulanmak:** Bu opsioni arkaly standart wp-login.php saytyndan başga bir özelleşdirilen giriş saytyny ulanyp bilersiňiz. Eger bu opsioni ýanaşdyrsanız, "Default login page" opsiyasynda (aýagynda) kimin giriş üçin ulanyljak sayty saýlap bilersiňiz.

* **Asly giriş URL-sini gizlemek (wp-login.php):** Eger asly giriş URL-sini ýatlamak isleseňiz, bu opsiony ýanaşdyrarsyňyz. Bu, kämil güýçli saldıratlaryň öňüni almak üçin peýdalydyr. Bu opsioni işjeňleşdirseňiz, bir ulanyjylar asly wp-login.php linkine girmezden önce 404 hatasyny görkezjekdir.

* **Synkron site ýaýlaşdyrmagy zorlamak:** Bir müşderi ulgamynda önüme baglanyşdyranyndan soň, täze bekleýän sayty hakyky ulgam saytına öwrülmeli. Ýaýlaşdyrma prosesi Job Queue arkaly, asynkron (asynkron) ýerine ýetdirilýär. Bu opsiony işjeňleşdirmek bilen, ýaýlaşdyrmany goşantyr bilen bilelikde geçirilipdirjekdigini zorla bilersiňiz.

Indi, giriş we ýazgyryş prosesi bilen baglanyşykly başga opsiyalara gözleşeliň. Olar aynı "Login & registration page" saytynda **Other options** boýunça:

* **Default role:** Bu, müşderiler ulgamynda kayıtdan soň olaryň boljak roludur.

* **Jumper'yň işini başlatmak:** Bu opsioni açsak, admin bölmesinde Jumper qısay yolunu (shortcut) aktivleşdirýär. Jumper bilen administratorlar menüleri her birini gözden geçmekden çekilip, Ultimate Multisite ekranlaryna, ulgamlara we beýleki goldaw berilen ýerlere çalt bolup bilýarlar. Eger siz bu çalt navigasiýa gurşawyny admin arxalysyndan gizlemek isleseňiz, ony oçartyr.

* **Esasy site bilen hem ulgamlary goşmak:** Bu opsiony açsak, ulyg-üst (signup) prosesinden soň bu ulgamny esasy ulgamynda hem ulgam ýoluna goşýar. Eger siz bu opsiony açsaňyz, aşakdaky ýerde bu ulgamlaryň **başlangyç rolyn** belirip biljek bir opsional hem görünýär.

* **Çoklagy wepaly (multiple accounts) hasaba almak:** Bu opsiyony aktivleşdirseňiz, ulgamnyň dürli site-lerinde birme üç hat bilen hasap açyp biljekdigi mümkinçiligi bilerisiz. Eger bu opsiya ýapylsa, sizde ulgamnyň esasy site-leri bar bolan beýleki wepaytarlarda aynı hat bilen hasap açyp bilmezler.

We bu, giriş we goşmak bilen baglanyşykly ähli opsionaldir! Onu redaktirmäni bitirip soň öz tapgyrlaryňyzy saklamagy unutmaň.

## Çoklagy goşmak formalarından peýdalanmak:

Ultimate Multisite 2.0-da siz islangyňyz ýaly köp formalary, dürli ulgamlary we teklip edilen önümleri döretmek üçin checkout formasy redaktory bar.

Giriş we goşmak sagatlarynda bu formalar şorta kodlar bilen (shortcodes) göterilendir: giriş sagatyna **[wu_login_form]**, goşmak sagatyna bolsa **[wu_checkout]**. Goşmak sagatyny döretmek üçin size checkout formalaryny döretmek ýa-da olary yaratmak arkaly has howa goşmak mümkin.

Bu funksiyadan peýdalanmak üçin, sol menyu boýundaki **Checkout Forms** menüsine gitmeli.

![Sidebar'da Checkout Forms menüsi](/img/config/checkout-forms-list.png)

Bu sagatda size bar bolan ähli checkout formalaryny göräýärsiňiz.

Eger siz täze birini döretmek isleseňiz, sagatlaryň üstündäki **Add Checkout Form** düwmesine basyň.

Bu üç opsiyadan birini başlanğıň ýerine ýetmek üçin saýlaýarsyň: single step (birnji ädimli), multi-step (köp ädimli) ýa-da blank (boş). Soňra, **Editore Gitmek** düwmenine basyň.

![Single step, multi-step, or blank options with checkout form configuration](/img/config/checkout-forms-list.png)

Alternatiwy, size bar bolan formalary özüni redaktirip ýa-da nusga lap (duplicate) etmek üçin olaryň adynyň aşagyki opsional düwmenlere basyp bilersiňiz. Orada şol formanyň shortcode-unu nusgalamak ýa-da formany silmek üçin hem opsional bar.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Eger siz single step ýa-da multi-step saýlaýan bolsaňyz, checkout formasy işlemek üçin esasy ädimleri bilen önceden doldurulyp biler. Soňra, isleseňiz, olaryna goşmaça ädimler hem ýazyp bilersiňiz.

### Checkout Formasyny Redaktirmek:

Öňde aýtdygy gibi, size dürli maksatlar üçin checkout formalary döredip bilersiňiz. Bu mysalda biz reýistratsiýa formasy bilen işleşdiriliz.

Checkout form editoruna geçip, formany bir adaty (içki goldaw üçin ulanyljak) we slug (mysal üçin shortcode-lar döretmek üçin ulanylýan) at berip bilersiňiz.

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Formalar ädimler we ulgamlardan ybaratdyr. **Add New Checkout Step** düwmenine basyp, täze ädim goşa bilersiňiz.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Modal oynasynyň ilkinji tabida formanyň ädimini dolduryň. Ona bir ID, ad we düşündiriş berip bilersiňiz. Bu zatlary köpelikde içki goldaw üçin ulanylýar.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Soňra, ädimiň görkezilmegini (visibility) sozlaň. Siz **Always show** (Her wagt görkez), **Only show for logged in users** (Diňe girişli ulanyjylar üçin görkez) ýa-da **Only show for guests** (Diňe meýil olary üçin görkez) arasyndan saýlaýarsyň.

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Soň, step stili (style) goşandyryň. Bu opsional ulanylyp biljek ulgamlardyr.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Indi, ilkinji stepimize ulgama (field) goşmak wagtydyr. Diňe **Add New Field** düwämesine basyp we islediňizden bölüm (section) tipini saýlaň.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Her bir ulgamda doldurman gerek bolan dürli parametrler bar. Bu ilkinji giriziş üçin, biz **Username** (Kullanıcı Ady) ulgamyny saýlaň.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Gerekliligiňiz bar bolan ýaly köp step we ulgamlary goşyp bilersiňiz. Işagatnamalar üçin iňlisleri saýlaýan üçin, **Pricing Table** (Baha Tablasy) ulgamyny ulanmagyňyz zerurdyr. Eger müşderilere şablon saýlamaga ýardam bermek isleseňiz, **Template Selection** (Şablon Saýlama) ulgamyny goşyp bilersiňiz. We ş.m.

_**Not:** Siz checkout formany döredipden soň produkt dörederseniz, onuňi Pricing Table bölüminde goşmagyňyz zerurdyr. Eger siz ony goşmazsan, produkt müşderileriniz üçin ýaýratma sahadas görkezilmez._

_**Not 2:** checkout formany döretmek üçin username (kullanıcı ady), email, parol, site sany, site URL-i, sipariş özüniň skizi, tölemek we göndermek düwmesi zatlaryny goşmak wajibdir (mütlək bolmaly)._

Checkout formany işledýän wagtda, müşderileriniz formany nädip görjekdigini görmegi üçin her wagt **Preview** (Öňüni Görmek) düwmenini ulanyp bilersiňiz. Şeýle hem mövcud ulanyjylar ýa-da synanyjy hasaplanmagy bilen üýtgeşip bilersiňiz.

![Checkout form preview button on the checkout form editor](/img/config/checkout-form-preview-button.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-preview-modal.png)

Son olarak, **Advanced Options** (İleri Seçenekler) kısmından **Thank You** (Teşekkür Ederiz) sayfasındaki mesajı ayarlayabilir, dönüşümleri takip etmek için kod parçacıkları ekleyebilir, ödeme formunuza özel CSS ekleyebilir veya onu belirli ülkelere kısıtlayabilirsiniz.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Ayrıca sağdaki sütundaki bu seçeneği açıp kapatarak ödeme formunuzu manuel olarak etkinleştirebilir veya devre dışı bırakabilir, ya da formu kalıcı olarak silebilirsiniz.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Ödeme formunuzu kaydetmeyi unutmayın!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Formunuzun shortcode'unu almak için **Generate Shortcode** (Shortcode Oluştur) butonuna tıklayın ve modal pencerede gösterilen sonucu kopyalayın.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Not:** Bu ödeme formunu kayıt sayfanıza eklemek için bu shortcode'u oraya eklemeniz gerekecektir._

## URL parametreleri aracılığıyla ürünleri ve şablonları önceden seçme:

Ürünleriniz için özel fiyat tabloları oluşturmak ve müşterinin ödeme formunda fiyat tablonuzdan veya şablonlarınız sayfasından seçeceği ürünü veya şablonu önceden seçmek istiyorsanız, bunun için URL parametrelerini kullanabilirsiniz.

### **Planlar için:**

**Ultimate Multisite > Products > Select a plan** (Ultimate Multisite > Ürünler > Bir plan seçin) sayfasına gidin. Sayfanın en üstünde **Click to copy Shareable Link** (Paylaşılabilir Bağlantıyı kopyalamak için tıklayın) butonunu görmelisiniz. Bu, bu belirli planı ödeme formunuzda önceden seçebileceğiniz bağlantıdır.

![Product page with shareable link button](/img/config/products-list.png)

Bu paylaý bolan link diňe **Planlar** üçin däl, barlanyp bilner. Paylany paketler ýa-da hyzmatlar üçin ulanyp bilmezsiniz.

### Şablonlar üçin:

Eger siz sahypa şablolarını size satyn alýan formada önceden saýlamak isleseňiz, siz **?template_id=X** parametriden peýda bolan URL-de ulanyp bilersiňiz. "X" bilen **saýlaýan sahypa şablonu ID-si** ýerine geçirilmelidir. Bu nömrýi almak üçin, **Ultimate Multisite > Sites** bölümini hasaplaň.

Ulanmak isleýän saýlaýan sahypa şablonunyň aşagynda **Manage** (Düzmek) düwmesini basyň. Siz SITE ID nömrüsini görersiňiz. Bu nömrüyü bu belli bir saýlaýan sahypa şablonu üçin size satyn alýan formada önceden saýlan bolsa, ulanyp bilersiňiz. Bizim ýagdaýymyzyň üçin URL parametri **?template_id=2** bolardy.

![Saýlaýan sahypa şablonlaryny görkezýän sahypa listi](http://www.mynetwork.com/img/config/site-templates-list.png)

Diwarymyň wep-sayty [**www.mynetwork.com**](http://www.mynetwork.com) bolsa we size satyn alýan formanyň **`/register`** sahypasynda bolmagy üçin, bu saýlaýan sahypa şablonu bilen birlikdäki doly URL [**www.mynetwork.com/register/?template_id=2**] ýaly görkeziljekdir.

We regleşiňiz bolsa hem size satyn alýan formada hem şablonlary önceden saýlap bilersiňiz. Siz etmelidigini diňe plan üçin paylaýan linki köçürip, soňuna şablon parametridir ýazyp basmagyňyz zerurdyr. Bu [**www.mynetwork.com/register/premium-plan/?template_id=2**] ýaly görkeziljekdir.
