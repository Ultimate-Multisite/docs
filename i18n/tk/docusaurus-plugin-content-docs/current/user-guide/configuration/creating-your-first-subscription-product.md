---
title: Birinji Abonamentli Mahsuluny Döretmek
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Ilkinji Abonament Mahsulatyňy Döretmek (v2)

_**ÄHMIY HABAR: Bu makale diňe Ultimate Multisite 2.x sanyny ulanyjylar üçin. Eger siz 1.x sanyny ulanyp başlasaňyz,**_ **bu makalany okap geçiň.**_

Şirketini işlemek we potentsial ulanyjylara hyzmatlaryňyzy satmaga başlamagy üçin size dürli abonament opsionalary gerek. Bu mahsulatlary nädip döredip bilersiňiz? Näme türleri teklip edip bilerisiz? Bu makalede mahsuplar barada bilmeniz gereken ähli zatlary görkezeli.

## Mahsulatyň Türü

Ultimate Multisite bilen siz müşderilere iki görnüşde mahsulatlary teklip edip bilersiňiz: **planlar** we **add-ons (Order Bump)**. Add-ons iki görnüşe bölünip bilner: **paketler** we **hizmatlar**. Olaryň arasyndaky tapawudy we aýratynlyklary indiki bölümde görkezeli.

  * **Planlar**: Ultimate Multisite-yň esas mahsulatydyr. Müşderiniz diňe plan bilen baglanyp bolsa üje (membership) bolup biler. Plan size bir ýa-da birnäçe sahypa berýär (planlaryň özü görnüşlerine bagly), we siz öz mahsulatyň redaktorda goýan çäkleri kesgitleýärsiňiz.

  * **Paketler**: Ultimate Multisite planlarynyň işlemekde jogapkär bolan add-ons-lar. Olar müşderi satyn alyp biljek esas planlaryň çäklerini üýtgedip, olga täze resurslar, pluginler ýa-da temalar goşýar. Mysal üçin, esasy plan aýlyk 1000 wiziti kabul edip biler we siz bu sany 10 000-e çenli uzatýan paket teklip edip bilersiňiz.

  * **Hizmatlar**: Ultimate Multisite-yň işlemekde üýtgeşmeýän add-ons-lar. Olar müşderi satyn alyp biljek planlaryna goşmaça, siz ol üçin ýerine ýetirip biljek tapgyrlar bolup biler. Mysal üçin, müşderiniz bir sahypa üçin icazä berýän plan satyn alsa we bu sahypany tasawur etmek üçin ek hizmeti hem tölemegi teklip etse.

## Mahsulatlary Dolandyrmak

Birçok adam üçin Ultimate Multisite-da **Products** sekmasyny (**Ultimate Multisite > Products**) geleneksel hosting ortamadaky planlar bilen deňeşdirip düşünebilirler.

Ultimate Multisite içinde Products sekmasyň bir görnüşi ýa-da hümayesi bolan belli bir produkt ýa-da hyzmat üçin gelýän çäkleri kesgitleýär. Bu görnüşler produkt ýa-da hyzmatyň taslamasy, bahasy, gümrükleri weymeleri we girýeterlikleri bilen baglanyşyklydyr.

Bu bölek size Ultimate Multisite-yň bu möhüim esasyny düşündirmegi üpjün eder.

![Products list page](/img/config/products-list.png)

## Products goşmak

Plan, paket ýa-da hyzmat bolsa hem, täze bir zatı kesgitlemek üçin girýeterlik **Ultimate Multisite > Products > Add Product** arkaly bolup biler.

![Add Product button](/img/config/product-add-button.png)

Arayüzde iki esasy bölümi bar. Sol tarapda produkty kesgitlemekde kömek edýän birnäçe tablar, sag tarapda bolsa produktyň esas bahasy, onuň işjeňligi we produkt resmini kesgitlemek üçin birnäçe bölek ýerleşdirilendir.

![Product edit page overview](/img/config/product-edit-full.png)

### Tasyrma (Description)

Esasy produkt maglumatlary produkt adyny we taslamasyny bermegi arkaly kesgitlemek mümkin. Bu belli belgiler plan we bahalaýyş seçimi, hasapnamalar, ýokarlandyrmalar we şeýle zatlar gerek bolan her ýerde görkezilýär.

![Product description section](/img/config/product-description.png)

### Bahalaýyş Türlemi (Pricing Type)

Arayüzüň sag tarapda esas bahasy kesgitlemek mümkin.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite üç dürli bahalaýyş türlerini goldaýar. **paid** (tölen) opsiyasy ulgam administratoryna produktyň bahasy we hasaplama oralary barada maglumat bermegi soraýar.

### Bahalaýyş (Pricing)

Bahsa komponent esasy produkt bahasy we hasaplama aralygyny kesgitleýär.

![Pricing and save section](/img/config/product-pricing-save.png)

bu belgeye görä çyzyk $29.99 narxı, 1 aýyl döwürde saklamak bilen her aý bu mebläge $29.99 toplanmaga başlanar. Şonuňla, $89.97 narxyny we 3 aý döwürde saklamak bilen her çeyrek bu mebläge toplanýar.

### Billing Cycles (Toplanma Döwürleri)

Billing Cycles bölümi ýuxurdy görkezilen toplanma aralygyň gaparyşyklaryny kesgitleýär we bu umumy şertnametalarda ýa-da belli wagtlarynda düşündirilýär.

![Pricing and save section](/img/config/product-pricing-save.png)

Mesele, 1 aý aralygy we 12 toplanma döwürü bilen $29.99 narxyny bolan bir meblägiň her aý bu mebläge $29.99 toplanmaga başlanar we bu 12 aý boyunca bu mebläge ýol bermek üçin bu görkezme kesgitlenir. Başgaça aýdylanda, bu görkezme 12 aý üçin her aý $29.99 narxyny belli narx bilen kesgitleýär we soňra toplanma durdurylýar.

### Trial Period (Sazlama Döwürü)

Offer trial toggle-y işjeňleşdirilse, ulanyjy ağnamak üçin mebläge sazlama döwürini kesgitlemek mümkin bolan bolýar.

![Pricing and save section](/img/config/product-pricing-save.png)

Sazlama döwrü boýunça, iňlisler meblägi iselemegi üçin we sazlama döwrü bitdirilýänçä toplanma edilmez.

### Setup Fee (Gurluşylyk Maslahaty)

Size planlaryňize gurluşylyk maslahaty hem goýap bilersiňiz.

![Pricing and save section](/img/config/product-pricing-save.png)

Bu, iňlisler narxyny bilen bagly bir hasar bermegi aňladýar; bu, size kesgitlenipdir we ilkinji toplanma üçin (narx planyna goşmaça) hökmançylyk maslahaty bolan ek summa.

### Active (Işjeňlikde)

Active toggle-i işjeňleşdirmek, meblägi iňlisler üçin täze ýazgylary üçin bar bolup bolmadykdyr diýip kesgitleýär.

![Active toggle](/img/config/product-active.png)

Eger bu plan üçin bar bolsa, toggle-i disabled (deaktif) duruma goýdýan zat, onu plan bilen bilelikden çykaryp gelejekde täze ýazgylara ýa-da planlaryna ýüklemekdan soň ony goldap bilmez. **Plan üçin bar bolan adamlar täze plan bilen geçirilýän ýa-da plan bilen çykarylyp gitdiginden soň hem tolak hasaplaýjy bolup biljekdir.**

### Mahsul Resmi

**Upload Image** düwätini ulanyp, ulanyjy (network administrator) media kitaphanasyny ulanyp mahsul resmi saýlap ýa-da ýükleýär.

![Product image section](/img/config/product-image.png)

### Aýyrmak

**Delete Product** düwätini ulanyp, mahsul systemdan aýyrýarsyň. Mahsul işlenip çykarylyp (published) soň görkezilýär.

![Delete product section](/img/config/product-delete.png)

Beýleki aýyrmaklardan başga, mahsul hiç hili "trash" (çöplük) döwrebapda ýerleşdirilmez. Şonuň üçin, aýyrylan soň bu hereket geri gelip biljek däl.

### Mahsul Opsionalary

Esasy mahsul maglumatlary kesgitlenip biler bolsa, mahsul opsionalary ulanyjyny (network administrator) mahsulun özüni has girdeji nähili görkezmek üçin kömek edýär.

#### Umumy

**General** tab-y başga bir hili mahsul spesifik tablaryna laýyk gelmese hem, mahsulun umumy häsiýetlerini kesgitleýär.

![General tab](/img/config/product-general-tab.png)

Özi düşünen **product slug** (mahsul slug) bu mahsuluny URL-lerde we Ultimate Multisite-yň beýleki böleklerinde tanamak üçin ulanylýan slugdir.

Ultimate Multisite Plan, Package we Service ýaly birnäçe mahsul görnüşini goldaýar. **Product Options** tablary kesgitlenen mahsul görnüşine görä dinamiki üýtgedilip bilner.

**Customer Role** (Müşteri Roly) bu sayt döredilende müşdere üçin hasaplanan roly kesgitleýär. Genli ýagdaýda, köp ulanyjylar üçin bu Ultimate Multisite default ýa-da Administrator bolup biler. Ultimate Multisite default roly **Ultimate Multisite > Settings > Login & Registration** boýunça kesgitlenip bilner.

![Müşteri rol ayarları](/img/config/product-customer-role-settings.png)

#### Yükseliş ve Aşağı İndirme (Up & Downgrades)

Bu sekme, bir müşterinin özgül katmanında (tier) mövbetdeki yükseliş və aşağı inme yollarını göstərir.

Bu anlayışı başa düşmək üçün, nisbətən kiçik bir Ultimate Multisite quraşdırılması nümunəsini düşünün ki, o, müştərilərinə öyrənmə idarəetmə həlləri təqdim edir. Bu üç planın (Basic, Plus və Premium) müəyyən edilməsi və hər bir plan üçün xüsusi pluginlərin aktivləşdirilməsi (pluginləri necə aktivləşdirmək barədə ətraflı məlumat bu hissədə daha sonra veriləcəkdir).

Əgər Ultimate Multisite quraşdırılması biznes saytlarına və ya e-ticarət saytlarına da xidmət edirsə, bu planlar fərqli pluginlərin quraşdırılmasını və aktivləşdirilməsini tələb edə bilər.

Bu məhdudiyyət səviyyəsində, eLearning müştərilərinin e-ticarət planlarına keçməsinin icazə edilməsi arzuolunmaz və problemli olardı, çünki bu planların qiymətləndirilməsi və məhdudiyyətləri uyğun gəlməyə bilər.

Beləliklə, müştərinin yolunu məhdudlaşdırmaq və hadisələrin baş verməməsini əngəlləmək üçün şəbəkə administratoru bir plan qrupu təyin edə və bu qrup daxilində müştərinin keçid ola biləcəyi planları göstərə bilər.

![Yükseliş və Aşağı İndirme sekmesi](/img/config/product-upgrades.png)

Bir plan qrupu təyin etmək üçün **plan qrupu** siyahısındakı uyğun planları seçin. **Məhsul sifarişi (product order)** isə planların en aşağıdan ən yüksəkə doğru necə sıralanacağını və göstəriləcəyini müəyyən edir.

Ultimate Multisite həmçinin bir **order bump** funksiyası da əhatə edir, burada uyğun olduqda planlara əlavə məhsullar və xidmətlər əlavə edilə bilər. Bunlar müştəriyə əlavə əşyalar kimi təklif edilir ki, onlar sifariş zamanı və ya yüksəliş zamanı planlara əlavə edilə bilər.

#### Qiymət Fərqləri (Price Variations)

Fiyat çeşitləri şəbəkə administratoruna müddətə görə fərqli qiymət səviyyələrini təyin etməyə imkan verir. Bu ayar eyni məhsul üçün aylıq, üç aylıq, illik və ya başqa hər hansı bir ödəniş dövrünün təklif edilməsini mümkün edir. Məsələn, siz bir məhsulu ayda 29.99 dollar qiymətində, illik versiyada isə 249.99 dollar endirimli qiymətində təyin edə bilərsiniz.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Qiymət çeşitləri yaratmaq üçün **Enable Price Variations** (Qiymət Çeşitlərini Aktiv Et) düyməsini aktiv edin və **Add new Price Variation** (Yeni Qiymət Çeşidi Əlavə Et) düyməsinə basın.

![Product price variations](/img/config/product-price-variations.png)

Bir çeşid daxil etmək üçün müddəti, dövrü və çeşidin qiymətini təyin edin. Əlavə çeşitlər əlavə düyməyə basaraq daxil edilə bilər.

Məsələn, əgər bazada məhsulunuzun aylıq qiyməti 29.99 dollar olarsa, siz aşağıdakıları əlavə edə bilərsiniz:

  * **3 Ay** üçün 79.99 dollar (aylıqdan kiçik endirim)
  * **1 İl** üçün 249.99 dollar (illik bağlılıq üçün əhəmiyyətli endirim)

:::tip Frontend-də Ödəniş Dövrü Çeşidini Göstərmək

Qiymət çeşitləri tək, frontend ödənişində bir çeşid və ya keçid əlavə etmir. Müştərilərin ödəniş dövrləri arasında (məsələn, Aylıq / Illik) keçid etməsinə imkan vermək üçün ödəniş formanıza **Period Selection** (Dövr Seçimi) sahəsi əlavə etməlisiniz. Addım-addım təlimatlar üçün [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) linkinə baxın.
:::

#### Vergilər

**Taxes** (Vergilər) tabı **Ultimate Multisite > Settings > Taxes** (Ultimate Multisite > Ayarlar > Vergilər) içində göstərilən vergi ayarları və daha xüsusilə müəyyən edilmiş vergi dərəcələri ilə uyğun gəlir. Vergiləri aktivləşdirmək və tətbiq olunan vergi dərəcələrini müəyyən etmək üçün zəhmət olmasa **Ultimate Multisite: Settings** sənədlərinə baxın.

![Taxes tab](/img/config/product-taxes.png)

Öňki mysalda biz Kaliforniya (Birleşik Devletleri) klientleri üçin laýyklyk ýa-da guralylyk nähili 7.25% ýaly lokal bedel ýa-da guralylyk kesgitini belirip barlapdyk.

Guralylyk kesgiti **Ultimate Multisite > Settings > Manage Tax Rates** bölüminde belenip bilende, ol maglumat kesgitini (product level) hem saýlap bilersiňiz.

![Taxes tab](/img/config/product-taxes.png)

Bir maglumat kesgitini guralylyk bilen hasaplanýan zat diýmek üçin, **Is Taxable** düğünü aktifleşdirip we Guralylyk Kategoriasyny (Tax Category) açar sanawdan laýyk kesgiti saýlaň.

#### Site Templates

Esasy düşünje boýunça, site template-ler bu maglumatlar bilen doly WordPress web sayatlarydyr we olar klientiň saytyna subskripsiýa başlapda klonlanýar.

![Site Templates tab](/img/config/product-site-templates.png)

Ulutmy administratory template saytyny normal WordPress sayty hökmünde, aktif we kesgitlenipdir we kesgitlenipdir we maglumatlar bilen düzülipdir we sozlamalarla (themes), pluginler bilen döredip guraldyr. Template sayty klientiň özüne tam klonlanýar.

Bu tab size ulutmy administratoryna täze subskripsiýa başlapda site template-leri nähili işleyejklerini görkezmek mümkinçiligi berýär. Bu plan üçin site template-lerinden peýdalanmak üçin, **Allow Site Templates** düğümini aktifleşdirip saýlaň.

**Allow Site Templates** deaktiv edilende, maglumat kesgitleri bu plan bilen klienti hem saýlap bilmezler, eger ol başga bir ýerde (checkout formasy, paylaýan linki ýa-da URL parametresi) template-leri hasaplaýan zat bolmasa hem. Ultimate Multisite indi bu çäkni bar bolsa weşaryjy ýollary arkaly goramak üçin başga bir ýere geçmekde ulanyp biljekdir: ilki plan sozlamalary barlanylýar, soňra checkout-formasy template sozlamalary, soňra önümçilikden hasaplaýan ýa-da URL arkaly berilipdir. Bu plan çäklerini birme-bir saklap we maglumatlar olary teklip etmemeli bolan önümler üçin template-ler görünmeginiň öňüni alýar.

**site template selection mode** subskripsiýa prosesi dowamynda site template-lerinin nähili işleyejklerini kesgitleýär.

**D** **Default** sozlamasy checkout formundaki kademeleri takip eder. Eğer ağ yöneticisi checkout sürecinde bir şablon seçme adımı tanımladıysa ve bu adım şablonlarla tanımlandıysa, bu ayar o checkout adımında belirlenen talimatları dikkate alır.

**A** **Site Şablonu Atama** belirtmek, belirtilen şablonun seçilmesini zorlar. Sonuç olarak, checkout sürecindeki herhangi bir şablon seçme adımı kaldırılır.

Son olarak, **C** **Mevcut Site Şablonlarını Seçin**, checkout adımında belirtilen şablonları bu ayarda seçilen şablonlarla değiştirir. Müşterinin seçim yapmasına yardımcı olmak için önceden seçilmiş bir şablon da tanımlanabilir.

Nihayetinde, eğer ağ yöneticisi şablon seçiminin checkout adımlarında gerçekleşmesini istiyorsa, ' _default_ ' ayarı yeterli olacaktır. Alternatif olarak, şablon seçimini kaldırmak ve seçimi plan ayarlarına devretmek için ' _assign new template_ ' veya ' _choose available site templates_ ' seçenekleri istenebilir.

#### Siteler

**Sites** sekmesi Ultimate Multisite'ın sınırlama işlevselliğinin bir parçasıdır.

![Sites tab](/img/config/product-sites.png)

Bu ayar, bir müşterinin üyelikleri altında oluşturabileceği maksimum site sayısını belirtir.

Sınırlamayı etkinleştirmek için **limit sites** düğmesini aktif duruma getirin ve **site allowance** alanında maksimum site sayısını belirtin.

#### Ziyaretler

**Visits** sekmesi Ultimate Multisite'ın sınırlama sisteminin bir diğer parçasıdır. Bu ayar, bir müşterinin sitesine gelen benzersiz ziyaretçileri kaydetmeyi ve ardından kısıtlamayı sağlar.

![Visits tab](/img/config/product-visits.png)

Marketing perspektiwinden, adminler bu ayarı, limitler doldugan wagtda iňlisleri planlaryny ýokarlandyrmaga teşwirlemek üçin ulanyp biljek bir usul hasaplanýar. Bu wezipäniň hem sistem resurslaryny saklamak üçin site-lere aşakdaky ýaly köp trafikden saklamak we öňümi çykarmaga admini kömek edip biler.

Bu funksionaly ulanyp bilmek üçin, **limit unique visits** düğümini aktivleşdirilen duruma goýuň we **unique visits quota** ulgamynda iň ýokary sany unik adamlar üçin maksimum sanany görkezini kesiň.

Bu limit dolanda Ultimate Multisite hakykatdan müşteri site-sini hyzmat etmek yerine, limitler aşyrylmaganligi aýtdyrmak üçin mesage görkezmek yerine durduryladyr.

#### Userlar

Ultimate Multisite'däki 'Users' cheklendirmeleri admini hasap ediliprolar we rollara laýyklykda berilip biljek user sanyna chekdeşlik goýmagyňa mümkinçilik berýär.

![Users tab](/img/config/product-users.png)

Cheklendirme funksionalyny işlemek üçin, **limit user** düğümini sağa sürüklenip aktivleşdirilen duruma goýuň.

Soňra her bir cheklendiriljek rol üçin, ýagny onuň ýanyndaky düğümini aktivleşdirilen duruma goýuň we laýyk ulgamynda iň ýokary limiti kesiň.

#### Post Türleri

**Post Types** tabyny aýratynlykda WordPressdäki giňişleýin post türleri üçin cheklendirmeleri goýmagyňa mümkinçilik berýär.

![Post Types tab](/img/config/product-post-types.png)

WordPressi döredilmegi sebäpli, posts we post türleri onuň esasy funksionalynda möhümdir we şonuň üçin Ultimate Multisite'däki cheklendirme ulgamy admini limitleri goýmak we saklamakda kömek etmäge taýynlandyryldyr.

Bu cheklendirme sub-sistemini işlemek üçin, **limit post types** düğümini sağa sürüklenip aktivleşdirilen duruma goýuň.

Her bir post tipi üçin cheklendirilmesini islemek üçin, onu sağa sürükleyip uygun alanda maksimum üst limiti belirtmek bilen aktivleşdirin.

#### Disk Boşluğu (Disk Space)

**Disk Boşluğu** sekmesi ağ administratorlaryna müşderiler tarapyndan iýigelen boýulmagan meýdany çäklemek üçin mümkinçilik berýär.

![Disk Space tab](/img/config/product-disk-space.png)

Adatça WordPress multisite-da esas fayllar ähli sitler arasynda paylaýlýar we media fayllary we ýüklemeler üçin döredilen her bir katalog (directory) bu tassyklary we cheklendirmeleri täsir edýär.

Disk boýulmagyny çäklemek üçin, **limit disk size per site** düğümini sağa sürükleyip onu aktif duruma getirip goýuň.

Soňra, **disk space allowance** (disk boýluğu mümkinçligi) saklanjysynda maksimum üst limiti megabaytda belirtiň.

#### Özel Domaina (Custom Domain)

Bu opsiyany aktivleşdirmek arkaly bu plan üçin özel domenleri müşderlere kabul edip bilersiňiz.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Tema (Themes)

Ürün opsionalaryndaky **Themes** sekmesi ağ administratoruna tema ýörelgelerini müşderler üçin saýlamak üçin we opsional bolmaly, tema ýörelgesini zorunlu etmek üçin mümkinçilik berýär.

![Themes tab](/img/config/product-themes.png)

_**Not: Temalary müşderler üçin bar bolmagy üçin olary ağ administratorlary tarapyndan ağda aktif edilmelidir.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

**Visibility** (Görünürlik) opsiyasy, bu tema müşderi öz sitinde **Appearance > Themes** sekmesini görüp bilende görä bu tema görünýärdimi ýa-da görmezdimi kesgitleýär. Bu opsianany **Hidden** (Ýapylmadyk) goýmak onu görnüşden almak we şonuň üçin saýlap we aktivleşdirmek mümkinçiligini çäkler.

![Themes tab](/img/config/product-themes.png)

**Behavior** (Sazatylyk) saýlanyşygy ağ administratoruna müşder sitini döredenden soň tema ýörelgesini kesgitlemek üçin mümkinçilik berýär.

Mevcut durumda tema müçebbetlik (self-activation) üçin müştemmali üzeledilendirilir. Diğer taraftan, **Mevcut Değil** durumu temany aktivasiýa mümkinçiligini müştemmali aňdan alýar. Soň, **Aktivasiýa Zorlamak** opsiyasy temany saýlaýan we aktivleşdirýän we ol site döredilende awtomatik tapawutly (default) etmegi üpjün edýär.

#### Plugins

Themes tab-dan hasapdaşlykda, Ultimate Multisite ulgamy ağ administratoryna pluginleri müştemmali müşteri üçin görkezmek we täze site döredilende olaryň dowamly ýagdaýyny kesgitlemek mümkinçilik berýär.

![Plugins tab](/img/config/product-plugins.png)

**Görkezmek (visibility)** açary, pluginin Plugins menýusy opsiyasy arkaly müştemmali ol site üçin görkeziljekdigini ýa-da ýapylmagyny kesgitleýär.

Ağ administratory pluginleriň işlemekde nädip hereket edjegini **işlem (behavior)** açaryndaky opsionalardan peýdalanmagy arkaly hasaplaryp bilýär.

![Plugins tab](/img/config/product-plugins.png)

**Default** saýlanyş, müştemmali müşteri saýlaýan site şablonunda kesgitlenipdir. Şonuň üçin, şablonda aktivleşdirilen pluginler şablon müştemmali müştemmali site klonlandyrylsa-da aktiv bolup galarlar.

**Aktivasiýa Zorlamak (Force Activate)** pluginini site döredilende aktif ýagdaýa salýar we tersine, **Aktivasiýa Ýok Etmek (Force Inactivate)** pluginini site döredilende deaktiv edýär. Bu iki ýagdaýda her bir pluginin dowamly ýagdaýy müştemmali öz WordPress Plugins menýusy arkaly üzeledip bilýär.

**Force Activate & Lock** ayarını esasa meşhurdir, ancak bu eklentinin durumunun müşteri tarafından değiştirilmesini engeller. Bu yüzden Force Activate ve Lock ayarı, eklentiyi aktif duruma zorlar ve müşterinin onu devre dışı bırakmasını engeller. Benzer şekilde, **Force Inactivate & Lock** ayarı, eklentiyi pasif duruma zorlar ve kullanıcının eklentiyi etkinleştirmesini engeller.

Ağ yöneticisi Force Activate & Lock ve Force Inactivate & Lock ayarlarını site şablonları ile birlikte düşünmek isteyebilir; çünkü bu ayarlar seçildiğinde şablonlardaki eklenti durumları etkilenebilir.

#### Sıfırlama Sınırlamaları

**Reset Limitations** sekmesi, üründe tanımlanan tüm özel limitleri sıfırlar. Limitleri sıfırlamak için **reset limitations** düğmesine tıklayın.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Eylemi onaylamak için sağdaki **confirm reset** anahtarını aktif duruma kaydırın ve **reset limitations** düğmesine tıklayın.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Ürünü Düzenle, Çoğalt veya Sil

Mevcut ürünler, **Ultimate Multisite > Products** menüsüne gidip mevcut ürün adına fareyle gelerek düzenlenebilir, çoğaltılabilir veya silinebilir.

![Product hover actions](/img/config/product-hover-actions.png)
