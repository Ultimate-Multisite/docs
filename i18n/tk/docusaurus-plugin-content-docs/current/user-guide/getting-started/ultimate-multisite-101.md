---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite bu sizlere WaaS (Web-as-a-Service) ýa-da Web sazlaryny hizm arkaly müşderilere hyzmat bermegi mümkinçilik berýän bir WordPress Multisite pluginidir. Biz bu meselelere çykyşyň we Ultimate Multisite-yň biznesiňiz we müşderileri üçin nähili kömek edip biljekdigini öwrenmäge başlap, bizde belli bir esas barada bilmek gerekdir.

## WordPress Multisite {#the-wordpress-multisite}

Bizim iňlis standartdaky WordPress instalasiýasy bilen köpden-köp tanaly. Siz ony hosting provayderiňiz kontrol paneli arkaly döredip bilersiňiz ýa-da, ýaşyl adamlar üçin täze web server we database goýup, esas fayllary indirip instalasiýa prosesini başlatyp bilersiňiz.

Bu dünýäde millionlarça WordPress sazlary üçin işleýär, ýöne bir agensi ýa-da hosting provayderi perspektiwinden hili barada gürrüň edeli.

Bir WordPress sazy ýa-da ýüz sanysa hem awtomatiki kontrol paneli arkaly döretmekde problem başa gelmese-de, bu sazlary dolandyrmaga başlap bilerlikde size çabalar görkezmek başlap biler. Dolandyryp bilmezden saklanýan sazyňiz malware üçin esasy maksat bolup biler. Dolandyrmak diýmek – bu çaba we resurslary ulanmakdyr. WordPress sazlaryny dolandyrmagy we administrasiýasyny gysgalaşdyrmaga kömek edän daşky gurallar we pluginler bar bolsa-da, müşderileri administratiw haklara eýe bolmagy sebäpli bu çabalary aňsatlyk bilen ýitirmek mümkin.

Onun esasynda WordPress "Multisite" diýlip adlandyrylýan bir funksiýa berýär we ol 2010-da WordPress 3.0 gorşaw arkaly başlanmagy bilen baglanyp durýar. Şondan bäri ol täze funksiýalar getirmek we howpsuzlygy kämilleşdirmek üçin birnäçe gözden geçirmelerden geçipdir.

Esasy düşünje boýunça, WordPress multisite şu ýagda-da pikir edip bilner: Bir Uniwersitet bir WordPress instalasiýasyny saklap durýar, ýöne her bir fakultet özüniň WordPress sazyny saklap durýar.

### Şebeke (The Network) {#the-network}

WordPress terminologiyasından bahsedersek, multisite ağı demek, bir çox alt siteyi tek bir panelden idarə etmək demektir. Multisite ağı yaratmak hosting provayderlerine görä ozal-ozal farqlar olsa-da, nihoyat olaraq WordPress-e bu ani mode-da işlədiyini bildirmek üçin wp-config.php faylunda birnäçe əlavə təlimat olur.

Multisite ağı ilə müstəqil (stand-alone) WordPress quraşdırılması arasında bir neçə fərq var ki, biz bunu qısa şəkildə müzakirə edəcəyik.

#### Subdomain vs. Subdirectory {#subdomain-vs-subdirectory}

Ən dərhal verməli olduğunuz qərarlardan biri, multisite quraşdırmasının _alt-klaslor (subdirectories)_ və ya _alt-domenlər (subdomains)_ ilə işləyəcəyi barədədir. Ultimate Multisite hər iki seçimdə eyni dərəcədə yaxşı işləyir, lakin bu iki konfiqurasiya arasında bəzi arxitektura fərqləri var.

_Alt-klaslor (subdirectory)_ konfiqurasiyasında, şəbəkə sitələri əsas domen adına əsaslanan bir yol miras alır. Məsələn, 'site1' adlı bir şəbəkə sitesinin tam URL-i https://domain.com/site1 olacaq. _Alt-domen (subdomain)_ konfiqurasiyasında isə şəbəkə sitesinin əsas domen adından türeyən öz alt-domenidir. Beləliklə, 'site1' adlı bir site tam URL-i https://site1.domain.com/.

Hər iki seçim mükəmməl valid seçimlər olsa da, _alt-domenlərin (subdomains)_ istifadəsi bir neçə üstünlük təklif etsə də, onun arxitekturasında daha çox düşünmə və planlaşdırma tələb edir.

DNS meseleleri baradaky SSL sertifikatlaryny ulanmak bilen baglydyr. Network saytlary esasy yolun çagalar olduğu üçin, esas domen adı üçin diňe bir tane domain name girişi bolmaly. Subdomainler bolsa biraz has çylşyrymlydyr; her bir network site üçin aýry CNAME girişi gerekdirýär ýa-da DNS goşawlarynda wildcard (\*) girişi gerek biler.

Başga bir göz öňünde tutuljak mesele SSL we SSL sertifikatlaryny berip ulanyp bilmekdir. Subdirectory görnüşinde, network saytlary esasy domen adynyň ýollary olduğu üçin, bir tane domain sertifikaty ulanyp bilner. Şeýlelik, domain.com üçin sertifikat HTTPS://domain.com/site1, https://domain.com/site2 we şeýleler üçin SSL-i amatly berer.

Subdomain görnüşinde wildcard SSL sertifikaty ulanmak iň köp ulanylýan opsiyilerden biridir. Bu görnüşdäki SSL sertifikaty domain we onuň subdomainlaryny şifrelemek üçin gorag berýär. Şeýlelik, wildcard SSL sertifikaty https://site1.domain.com, https://site2.domain.com we HTTPS://domain.com özü üçin şifreleme berer.

Başga opsiyalar hem bar bolsa, olar köplenç çäkli bolup biler we ulanylyş bilen baglanyp has töweregilerde goşma-çaşma gerek bolýar.

Bu sebäbi, WordPress-i multisite sifatida yapılandırıldığında, sitenin yöneticilerinin eklenti ve temaları yükleme yeteneği kaldırılır ve bu yetki yeni oluşturulan ağ yöneticisi veya 'super admin' rolüne taşınır. Bu ayrıcalıklı rol daha sonra ağ sitelerinin yöneticilerinin kendi panellerinde eklenti menüsünü görüp görmeyeceğine karar verebilir ve eğer öyleyse, böyle izinlerin eklentileri _aktiv etmeye_ veya _deaktive etmeye_ uzanıp uzanmayacağına karar verir.

Bu ölçüde, ağ yöneticisi ağına eklenti ve temaları yüklemekten sorumlu olur ve bu eklentilerden ve temalardan ağ siteleri için yararlanmak üzere izinleri devredilir. Site yöneticileri kendi sitelerine atanmamış eklentileri veya temaları yükleyemezler veya bunlara erişemezler.

#### Kullanıcılar ve Yöneticiler {#plugins-and-themes}

WordPress Multisite'da, tüm ağ siteleri aynı veritabanını paylaşır ve bu nedenle aynı kullanıcıları, rolleri ve yetenekleri paylaşırlar. Bunu düşünmenin en uygun yolu, tüm kullanıcıların belirli bir siteye değil, ağın üyeleri olmasıdır.

Bu anlayışa dayanarak, kullanıcıların oluşturulmasına izin vermek istenmeyebilir ve bu nedenle WordPress Multisite bu yeteneği site yöneticilerinden kaldırır ve bunu ağ yöneticisinin yetkisine taşır. Buna karşılık, ağ yöneticisi, kendi siteleri için kullanıcı hesapları oluşturmalarına izin vermek üzere gerekli ayrıcalıkları bir site yöneticisine devredebilir.

<!-- Ekran görüntüsü mevcut değil: WordPress Multisite ağ kullanıcı yönetimi arayüzü -->

Yukarıdaki ifadeyi tekrar etmek gerekirse, kullanıcı hesapları ilgili oldukları siteden bağımsız olarak ağa atanmıştır ve bu nedenle ağ genelinde benzersiz olmalıdırlar. Bu sebeple bazı durumlarda kullanıcı adlarının kaydedilememesi görülebilir.

Media

WordPress Multisite-de bir tek saytda köpük (database) paylaşıldığında, media faylları için dosya sisteminde ayrı yollar tutulur.

Standart WordPress konumu (wp-content/uploads) aynı kalır; ancak yolu ağ sitesinin benzersiz kimliğini yansıtacak şekilde değiştirilir. Sonuç olarak bir ağ sitesine ait medya dosyaları wp-contents/uploads/site/[id] şeklinde görünür.

Permalinks

Daha önce bahsettiğimiz gibi, _alt alan adı_ (subdomain) yapılandırmasının _alt dizin_ (subdirectory) yapılandırmasına göre belirgin avantajları vardı ve işte yollar:

Bir _alt dizin_ yapısında, ana site (ağ kurulduğunda oluşturulan ilk site) ve ağ alt siteleri alan adından gelen aynı yolu paylaşmak zorundadır. Bu durum çok sayıda çakışma potansiyeli taşır.

Gönderiler için, ağ siteleriyle çakışmayı önlemek amacıyla ana siteye zorunlu bir /blog/ yolu eklenir. Bu, 'Post adı' gibi güzel permalinklerin domain.name/blog/post-name/ şeklinde gösterilmesi anlamına gelir.

<!-- Ekran görüntüsü mevcut değil: Alt dizin yapılandırmasında /blog/ yolunu gösteren WordPress permalink ayarları -->

Bir _alt alan adı_ yapısında bu işlem gerekli değildir çünkü her ağ sitesi tam alan adı ayrımından faydalanır ve bu nedenle tek bir yola güvenmek zorunda kalmaz. Bunun yerine, kendi _alt alan adına_ dayanarak kendine özgü farklı yollar tutarlar.

<!-- Ekran görüntüsü mevcut değil: Alt alan adı yapılandırması için WordPress permalink ayarları -->

Statik Sayfalar

_subdirectory_ konfigurasinda, statik sayfalara kadar isim çakışması potansiyeli baş ana siteleri ve ağ sitelerini aynı yolda paylaşmasından kaynaklanır.

Bunu önlemek için WordPress, belirli site isimlerini kara listeye alma (blacklist) imkanı sunar ki bunlar ilk sitenin isimleriyle çakışmasınlar. Genellikle ağ yöneticisi ana sitenin sayfalarının kök yollarını girer.

<!-- Ekran görüntüsü mevcut değil: Çakışmaları önlemek için yasaklanmış site isimlerini gösteren WordPress ağ ayarları -->

_subdomain_ konfigürasyonunda ise, _subdomain_ ağ sitesine özgü olduğu ve ana siteden hiçbir şekilde ilişkili olmadığı için isim çakışması olasılığı azaltılır.

### Kayıt (Registration) {#users-and-administrators}

WordPress Multisite'ın ağ ayarlarında yeni kullanıcı kayıt seçenekleri mevcuttur; bu sayede hem yeni hem de mevcut kullanıcılar site oluşturabilirler.

<!-- Ekran görüntüsü mevcut değil: WordPress Multisite ağ ayarları kayıt seçeneklerini gösteriyor -->

Bağımsız WordPress kurulumlarının aksine, ağ siteleri kullanıcı kaydı yapma veya bu kayıtları rollara atama gibi tanıdık seçenekleri korumazlar.

<!-- Ekran görüntüsü mevcut değil: WordPress bağımsız site kullanıcı kayıt ayarlarını gösteriyor; sınırlı seçenekler -->

Kullanıcı hesapları oluşturulduğunda, bu hesaplar ağ düzeyinde oluşturulur. Bu nedenle, herhangi bir tek bir siteye ait olmak yerine ağa aittirler. Bunun bazı belirgin avantajları ve dezavantajları vardır.

Meselemiňiz WordPress Multisite-y news we maglumat bilen meşgullanýan bir işde boljakdiňyz diýip hasaplanyň. Siz multisiteyi döredip, olaryň üstünde finans, tehnologiýa, meşhurlyk we beýleki gyzyklanýan ugurlardaky ulgamlary döredip, pluginler we temalar boýunça umumy dolandyrmagy saklap bilersiňiz. Her bir ulgamda (network site) özüniň görnüşi we ulanyjylar üçin taýynlygy barada custom post types ýa-da adatdaky post kategoriýalaryndan has uly dolandyryş derejesinde kontrol saýlanar.

Bu ýagdaýda, ulanyjylar giriş edende ol ulgama (network) girip, esasanam her bir ulgam üçin hem girişli bolup, bu bolsa jogapkärliksiz bir tapawudy döredýär. Eger siziň täze sahypanyňiz subskripsiýa esasynda bolsa, bu iň amatly çözgüş we netije bolardy.

Eger bolsa, multisiteyiň maksady özara hiç hili baglantsaly bolmadyk ulgamlar bermek bolsa, ulanyjylar rolyny üýtgetmek üçin daşky ýa-da goşmaça pluginler gerek bolmagy neredeyse her wagt ýagdaýdyr.

### Domain we SSL {#media}

WordPress Multisite kurulumynda bizi hasapdan çykaryp biljek bir zat bar: Wordpress.com. Bu, WordPress multisite-yň iň giňişleýin mysaly bolup, onuň maksady doldurmak üçin özüni üýtgetmek we şekillendirmek uly ukyplylyklaryny görkezýär.

Bugda modern internetde SSL ulanylyşy neredeyse zora bolan zatdyr we WordPress multisite administratory bu meseleler bilen çalt ýakynlaşýar.

_subdomain_ görnüşinde sahypalar esasym domain adynyň kökünden döredilýär. Şonuň üçin 'site1' diýlip belendirilmiş sahypa 'site1.domain.com' hökmünde döredilýär. Wildcard SSL sertifikatyny ulanyp, bir multisite administratory bu meseleleri üstünlikli çözüp, ulgam üçin SSL şifirlenme ukyplarını bermek bilýär.

WordPress Multisite, bu bir domen eşleştirme funksiyonasyna sahip bol-bolukdir. Bu funksi size ağ sitelerini özel alan adları veya ağın ana alan adından farklı olan alan adları ile əlaqələndirməyə imkan verir.

Ağ administratorları üçün bu, həm domen adı konfiqurasiyası, həm də SSL sertifikatlarının verilməsi və idarə edilməsi baxımından əlavə bir mürəkkəbliyi təmsil edir.

Bu məhdudiyyət səviyyəsində WordPress Multisite [www.anotherdomain.com](http://www.anotherdomain.com)-u 'site1'ə eşlətməyə imkan verərkən, ağ administratoruna DNS qeydlərini xaricdən idarə etmək və SSL sertifikatlarını tətbiq etmək çətinliyini buraxır.

## Ultimate Multisite {#permalinks}

Tək WordPress quraşdırılması ilə Multisite quraşdırılması arasındakı fərqləri başa düşsək, Ultimate Multisite-ın Website as a Service (WaaS) təmin etmək üçün nə qədər əla vasitə olduğunu nəzərdən keçirək.

### Giriş {#static-pages}

Ultimate Multisite, bir Website as a Service (WaaS) yaratmaq baxımından sizin İsviçre çakıqlarınızdır. Wix.com, Squarespace və WordPress.com-u düşünün, sonra özünüzün xidmətini sahib olmaq barədə düşünün.

Arxa planda Ultimate Multisite WordPress Multisite-dan istifadə edir, lakin bunu ağ administratorlarının multisite quraşdırmaları ilə üzləşdiyi bir çox çətinlikləri həll etməklə kifayətlənmək və geniş bir çox istifadə hallərini dəstəkləməyə imkan verən imkanları artıraraq edir.

Növbəti bölümlərdə bu halları dəstəkləmək üçün lazım olan bəzi ümumi istifadə hallarına və nəzərə alınmalı məsələlərə baxacağıq.

### İstifadə Halları {#registration}

#### Hal 1: Agentlik (Agency) {#domain-and-ssl}

Adətən bir agentliyin əsas bacarıqları veb saytların dizaynında olur, burada onların hostingi və ya marketinqi əlavə xidmətlər kimi siyahıya daxil edilir.

Agency üçin Ultimate Multisite, bir platforma birden çok web saytını barmaq we idare etme qabiliyyeti bilen görnüşde inanılmaz qiymət təklifi təqdim edir. Xüsusilə, agensiyalar öz dizaynlarını GeneratePress, Astra, OceanWP və ya digər müəyyən temalarda standartlaşdıranlar üçün Ultimate Multisite-ın bu temaları hər yeni sayt üçün avtomatik aktivləşdirmək qabiliyyətindən istifadə edə bilərlər.

Eyni şəkildə, agensiya qiymətləri ilə populyar və yayğın pluginlər üçün çoxlu təkliflərin olması ilə, Ultimate Multisite-dan istifadə etmək agensiyalara mövcud investisiyalarından istifadə etməyə imkan verir; çünki bu, pluginlərin quraşdırıla biləcəyi, saxlanıla biləcəyi və istifadə edilə biləcəyi bir ümumi platform təmin edir.

Ən çox ehtiyac duyulan şey konfiqurasiya olacaq və xoşbəxtliklə Ultimate Multisite domen xəritələnməsi və SSL sertifikatları üçün inteqrasiyaları ilə Cloudflare və cPanel kimi bir neçə populyar hosting provayderləri ilə asanlaşdırmalarla çox asanlaşdırır.

Beləliklə, bu provayderlərdən birindən istifadə etmək və ya Ultimate Multisite-ı Cloudflare arxasında yerləşdirmək domenlər və SSL sertifikatları idarə edilməsi kimi aspektləri bir az sadələşdirir.

Saytların yaradılması üzərində sıx nəzarət saxlamaq istəyən agensiyalar, Ultimate Multisite-ın sadələşdirilmiş interfeysi vasitəsilə saytları müştərilər və planlarla əlaqələndirmək qabiliyyəti ilə bu prosesin asanlığını qiymətləndirəcək.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Pluginlər və temalar üzərində hər bir məhsul üçün sıx nəzarət Ultimate Multisite-ın sezgili interfeysləri vasitəsilə təmin edilir; bu, pluginlərin və temaların yeni sayt üçün instansiya edildikdə mövcud olmasını və ya gizlədilməsini, həm də aktivləşmə vəziyyətini göstərməyə imkan verir.

![Product plugin limitations interface](/img/config/product-plugins.png)

Temalar birme-birme funksionallik berýär, bu bolsa belli temalary sahypa döredilende işläp bilmek ýa-da gizlemek mümkinçiligi berýär.

![Product theme limitations interface](/img/config/product-themes.png)

Agensiallar Ultimate Multisite bilen hakyky weşagyny edip biljekdigini bilip galarlar, olar iň gowy edýän zatlaryny – aýratyn web sahypalary döretmeki – etmegi mümkinçiligi berilýär.

#### 2-nji Kas: Niş Edaranyň Paydaşy {#ultimate-multisite}

"Bir zady we onuň iň gowy görnüşinde edip bilmek" diýen köne aýdymlary bar. Köp hünärmenler üçin bu, bir sanly pikir etwar etmäge degişlidir. Bu bolsa sizi klublarga web sahypalary tanıtýan weşagynyň iň esasy ideýa etrafında bir maglumat ýa-da hyzmat döretmekdir. Belki siz klublara web sahypalary tanıtýan hemman golfçisi ýa-da klanalara web sahypalary berýän amatly esports oýnjuru bolmaly? Belki restoranlarga sagat bermek üçin bir hünärmen?

Köpekler üçin köp sebäpler bilen umumy çäklemelerden we platformadan esaslanýan hyzmatlar bermegi isleseňiz. Bu, sizde zerur funksionalligi berjek özgertilip-göripen pluginleri döredip ýa-da endirji işgärlik usullaryndan birnäçe standartlaşdyryp bilmek gerek bolmagy mümkinçiligi bolup biler.

Ultimate Multisite-yň iň täsirli funksiýalaryndan biri template sahypalaryny ulanmakdyr. Template sahypasy – bu tema goýulyp, işläpdirilen, zerur pluginler goýulyp we işläpdirilen, sanly postlar ýa-da sahypalar döredilip bilýän sahypadyr. Kunde template esaslanyp täze sahypa döredende, template-iň iň gowy zatlaryny we sazlamalary täze döredilen sahypaga köçürilýär.

Niş sahypa we hyzmatlar beriji üçin bu, mysal üçin, amatly pluginler we dizelmek bilen daşary çykaryp biljek bir sahypany okam bolan ýagdaýy bar. Kunde diňe hyzmaty tamamlamak üçin iň az zerur maglumatlary bermeli.

Gerekliliklere baglyly, hem _subdirectory_ hem de _subdomain_ konfigurasi uygun olabilir; bu durumda mimari seçimler _subdirectories_ için basit bir SSL sertifikası veya _subdomains_ için joker karakterli (wildcard) bir SSL sertifikası arasında olacaktır.

#### 3-ci Hal: WordPress Web Hosting {#introduction}

WordPress sitelerini barındırmanın pek çok yolu olsa da, bir müşteriye önceden kurulu WordPress sürümüyle web alanı sağlamaktan daha basit olan nadirdir. Bunun nedeni anlamlı bir hizmet sunmak için birçok kararın ve dikkate alınması gereken hususun bir araya gelmesi gerektiğidir.

Ultimate Multisite bu alanda öne çıkar çünkü WordPress sitelerini barındırmak için kapsamlı bir hazır çözüm sunar. Çözüme, abonelik hizmetleri, ödeme toplama, checkout formları, indirim kuponları ve müşteri iletişimleri sağlamak için temel mekanizmalar dahildir.

Bir WordPress Multisite'ı doğru şekilde kurmak, yapılandırmak ve sürdürmek için gereken büyük işin çoğu, Ultimate Multisite tarafından kolaylaştırılır; bu da ağ yöneticilerinin yalnızca ürün katmanları, fiyatlandırma ve hizmet teklifleri gibi hizmetleriyle veya nişleriyle ilgili yönleri düşünmelerini gerektirir.

Ultimate Multisite ile entegre olmak isteyen geliştiriciler için çözüm ayrıca kapsamlı bir RESTful API ve olay bildirimleri (event notification) için Webhooks sunar.

Birçok harici eklenti ve lisansa bağımlı olmadan, Ultimate Multisite Wix, Squarespace, WordPress.com ve diğerlerinin sunduğu özellik açısından zengin ve karşılaştırılabilir bir çözüm sağlar.

### Mimari Düşünceler {#use-cases}

Bu kapsamlı bir rehber olmasa da, Ultimate Multisite kurulumunu desteklemek için doğru teknolojileri seçmeye yardımcı olacak aşağıdaki maddeler yol gösterici olabilir.

#### Paylaşımlı vs. Özel Hosting {#case-1-an-agency}

Maşkul, ähli hosting sağlayıcılar bir-birini deňeşdirip bilmezler we käbirleri aşırı server yoğunluğunu tətbiq edýärler. Käbir arzan malipli sağlayıcılar server yoğunlygyny maksimuma giderek hasabat döredijilerler. Şonuň üç, siziň Ultimate Multisite instalasiýanyňiz birnäçe yüz site bilen birmejinde bolmagy mümkin.

Saýlaryňda käbir goraglar ýok bolsa, paylaşımlı serverdäki site-ler "göwrüli komşy" problemini üçin duýar. Bu şu demake, eýeňde birnäçe resursu ulanyp bilýän site başga site-ler bilen galan resurslar üçin täsir etmek meýil bolýar. Käwagt bu, site-ler yavaş bolmagy ýa-da wagtlaýyn jogap bermegiňde tapawutly bolmadykdyr.

Eger siz özüňiz web hosting sağlayyysyz bolsaňyz, hasabatlar siziň müşderileriňiz kötü sürati, aşak sayda səhimetler we ýokary bounce rate bilen duýanlarynyň düşýändigini aňladar we olar başga ýerde hyzmat tapyp bilmek üçin müşderi tabşyryşyny artdyrýar.

Gysgaça, arzan bolsa gowy demek däl.

Ultimate Multisite belli birnäçe gowy hosting sağlayıcı bilen işleýändigini we domain mapping we awtomatiki SSL ýaly funksiýalary bermek üçin olaryň mühiti bilen amatly baglanýandygyny görkezýär. Bu sağlayıcılar performansyň ähmiýetine tapýarlar we paylaşımlı hostingden has ýokary derejeli hyzmat bermäge mümkinçilik berýärler.

Bellikli dostlar üçin degişli sağlayıcılar listi we her biri üçin doly guramak maslahatlaryny "Compatible Providers" dokumentasiýasyny barlap bilersiňiz.

#### Performans gözlegleri {#case-2-niche-provider}

Ultimate Multisite yavaş programma däl, ýöne oňat çaltdyr. Ýöne ol esaslaryndaky programma we infrastrukturdan has gowy bolan ýaly işlemek üçin mümkinçilikli resurslardan başga bir zatdan peýda almaz.

Bu pikir etseň: Sizi 100 site bilen Ultimate Multisite instalasiýasynyň ulgamynda ulgamy administratorydyk hasap edýärsiňiz. Şol site-lerindäki käbirleri gowy işledir we her gün birnäçe web sayt zähmetçiligini çäkler.

Bu senaryo bir neçeden beş site kimi ki daha kiçi mi olsaydı fərqli bolardy, amma uly (Ultimate) Multisite üçin böyük ölçekde problem leri çabuk göründü.

Gözetmeksiz qala, bir tek Ultimate Multisite site ähli saytlara gəlänlerdäki talapları yerinə yetirmäge ehtiyatda bolardy. Bu talaplar dinamik PHP səhifələri ýa-da stil fayllary (stylesheets), javascript ýa-da media fayllary ýaly statik assetler üçin bolup biler. Bir site ýa-da bir yüz site bolsa, bu wezipeler takrar, monoton we ismetdirici bolardy. Her talap üçin PHP faylyny işlemek üçin CPU güýjini we xatırlaryny ulanmak zerur däldir, sebäbi her talap üçin netji statik maglumatdyr.

Aynakla, bir PHP ýa-da HTML səhife üçin bir talap, oňatça skriptler, stil fayllary we surat fayllary üçin köp soňky talaplary döredýär. Bu talaplar dogry size ülen Ultimate Multisite serverine üpjün edilipdir.

Bu problemi serveri ýokarlandyrmak bilen oňat çözmek mümkin, amma bu ikinji bir problemi (geografiki gecikmeler) çözmeýär. Bu problemi dogry çözmek üçin köpli joydaky köp server gerek bolardy.

Bu sebäpli, köp ulgama administratory statik səhifeler üçin önümki (front-end) caching çözümlerinden we içerik ýaýrama ulgamlaryndan (CDN) peýdalanyp talaplary yerinə yetirýärler. Bu talaplary yerinə yetirmek we servere talap gelmeden assetleri bermek işleme resurslaryny saklaýar, geçki durkumlary ortadan aýyrýar, zerur däl ýokarlandyrmalaryň öňüni çeker we tehnologiýa sarynalaryny maksimuma eýeleýär.

Ultimate Multisite Cloudflare add-onlaryny öz içine alýar, bu hem ulgama administratoryna öz kuramalaryny Cloudflare arkasynda ýerleşdirip onu diňe caching kämilçiliklerinden däl-de DNS hostlama, SSL sertifikatları we howpsuzlyk mehanizmalarından peýdalanmagy mümkin bolan bir funksiýa berýär.

#### Backuplar {#case-3-wordpress-web-hosting}

Backuplar barada 50 adyndan maslahat soraýa we backup strategiyalary barada 50 dürli pikir alsaňyz, jogap şudur: bu baş saňa baglydyr.

Sözleşilme meselesi şudur ki, yedeklemeler şarttır ve bu yedeklemelerin sağlayıcı tarafından yönetilmemesi neredeyse düşünülemezdir, özellikle de yönetim hizmeti sunan bir sağlayıcıdan bahsediyorsak. Sonuç olarak müşteriler bu hizmeti sağlamak ve yönetmek için ağ yöneticisine bakacaklardır. Ağ yöneticisinin kim olduğuna bakmak ise tamamen farklı bir sorundur.

Bu bölümün amacı için bir yedeklemenin, yedekleme başlatıldığı andaki sistem durumunun o anki kopyası olduğunu kabul edelim. Basitçe söylemek gerekirse, yedekleme anındaki sistemin durumu yakalanır ve yedeklemeye kaydedilir.

Bu anlayışla birlikte, yedeklemeleri nasıl gerçekleştireceğiniz ve ortamınız için en iyisi ne olacağı büyük ölçüde gereksinimlerinize ve barındırma sağlayıcısının bu gereksinimleri karşılayabilme yeteneğine bağlı olacaktır. Ancak, en çok fikir sahibi olandan en az fikir sahibi olana doğru sıralandığında, aşağıdaki seçenekler size bir rehberlik sağlamalıdır.

#### Snapshots (Anlık Görüntüler) {#architecture-considerations}

Snapshots yedeklemeler için altın yumurtalardır çünkü kolaydır, karmaşık değildir (geri yüklemek istediğinizde hariçtir) ve 'sadece çalışır'. Ancak bu, sağlayıcınızdan biraz yardım gerektirir ve çoğunlukla bir VPS'iniz (Sanal Özel Sunucu) veya benzeri bir şeyiniz olduğunda geçerlidir. 'Uygun Sağlayıcılar' dokümantasyonumuzda listelenen birkaç sağlayıcı, ağ yöneticisinden daha fazla müdahale veya düşünme gerektirmeyen yedeklemeler sunar.

Geleneksel yedeklemeler fayllara we bazalara (databases) niň tarym, snapshot-lar bolsa doly diskäni hedeflemekdir. Bu demekdir, snapshotda diňe sahypanyň maglumatlary başga bir zat hem – işletim sistemasy we konfigurasiýa hem saklanýar. Köpüsi üçin bu aýratyn üstünlikdir, sebäbi yeni sistem snapshotdan häzirki wagtda neredeyse okamadan döredilip ýok bolan bir sanly nusga bilen ýok bolan bir nusgany üpjün etmek üçin gowulyp bilner. Şonuňla, fayllary geri almak üçin özüniň diskini barada snapshotny mövcet nusga hökmünde goýmak bilen hasaplanýan hasapda-da işlemek mümkin bolýar we köçürmek bolar.

Snapshotlar meýilnamälik häzirki awstodarlygyny artdyrýan bir çyzyk hem, ýöne bu ýagtylygy ýitirmemek üçin hakyky sigorta hasaplanýar.

#### Dışsy skriptler (External Scripts) {#shared-vs-dedicated-hosting}

WordPress we MySQL resurslaryny yedeklemek üçin dışsy skriptler we çözgütler bilen çäkli bir zat ýok görkezilýär we bu Ultimate Multisite üçin hem gowy işleýär, sebäbi ol WordPress fayl sistemasyndan we bazasından peýdalanýan bir plugindir. Şonuň üçin, WordPress sahypalaryny yedeklemek üçin çözgüt Ultimate Multisite-yň zerurlyklaryna amatly görkezmeli.

Biz bir skripti beýleki skriptden has gowy düşündirip bilmeýär, ýöne umumy maslahatamiz – netijeleri islegli bolmagyny üpjün etmek üçin birnäçe yedekleme we geri almagy testlemekdir we meselemizi belli bir wagtda çäklemek üçin skripti we onuň işini dowamly barlamakdir, esasanam barmy bir farkly yedekleme strategýasy ulanylýan ýerlerde.

Bu skriptler işleýärlik döwründe sistem yükünü artdyrjakdyr, bu hem hasapda-da bolmaly.

#### Pluginler (Plugins) {#performance-considerations}

WordPressde plugin bilen çözülip biljek mesele neredeyse hiç ýokdur we eger dışsy skriptleri dolandyrmak size gowy gelmese bolsa, belki de plugin başga bir iň gowy opsiyadyr.

Pluginler opsiyonlar ve özellikler açısından farklılık gösterse de, çoğunlukla aynı işlevi yerine getirirler: WordPress dosyalarının ve veritabanı içeriğinin bir kopyasını oluşturmak. Bundan sonra işlevsellik farklılaşır; bazı eklentiler yedeklemeleri Google Drive veya Dropbox gibi harici hizmetlere ya da S3, Wasabi gibi uyumlu nesne depolama servislerine gönderip göndermeyeceğini belirler. Daha kapsamlı eklentiler ise harici depolama maliyetlerini düşürmek için yalnızca değişmiş verileri yedekleme stratejisi veya farklı yedekleme yöntemleri sunar.

Eklenti seçerken, bunun multisite uyumlu olup olmadığını kontrol etmeye özen gösterin. İşleyiş doğası gereği, yedekleme çalışırken sunucuda geçici bir yük bekleyebilirsiniz; bu işlem tamamlanana kadar.

#### Alan Adı ve SSL {#backups}

Multisite _subdomain_ modunda alan adları hakkında çok şey konuşuldu. Ağ yöneticileri için neredeyse evrensel bir çözüm, joker karakter DNS kayıtlarından yararlanmaktır.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Bu tür bir DNS kaydı, ‘site1.domain.com’ ve ‘site2.domain.com’ gibi _subdomain_ları 1.2.3.4 IP adresine başarıyla yönlendirir ve bu da Ultimate Multisite'ı ve daha geniş ölçüde WordPress Multisite'ı _subdomain_ modu kullanarak destekler.

Bu, HTTP için mükemmel çalışabilir çünkü hedef sunucu HTTP başlıklarından okunur; ancak günümüzde güvenli HTTPS işlemlerinin neredeyse zorunlu olduğu kadar basit web siteleri nadirdir.

Şanslı bir şeydir ki SSL sertifikatları için kolay seçenekler var. _subdirectory_ rejiminde normal domen sertifikası kullanılabilir. Bunlar barındırma sağlayıcılarından ücretsiz LetsEncrypt hizmetini veya başka bir kaynaktan alabileceğiniz gibi hazır ve ücretsiz olarak mevcuttur. Aksi takdirde, sertifika imzalama talebini oluşturabiliyorsanız yetkililerden ticari olarak temin edebilirsiniz.

_subdomain_ rejiminde joker karakterli SSL sertifikasının kullanımı, joker karakterli alan adı ile mükemmel bir uyum sağlar ve sertifikanın ek yapılandırma yapmadan kök alan adı ve tüm _subdomainler_ için yetkili olmasını sağlar.

Ancak, joker karakterli SSL sertifikalarının Cloudflare gibi hizmetlerle çalışmayabileceğini unutmamak gerekir; bu durum yalnızca kurumsal plan kullanıyorsanız veya girişi DNS'ye sadece yönlendirme olarak ayarlarsanız geçerlidir ki bu durumda tüm önbellekleme ve optimizasyon devre dışı kalır.

Out-of-the-box Ultimate Multisite bu soruna bir çözüm sunar ve WordPress multisite ihtiyaçlarıyla olan kapsamlı deneyimimizi gösterir. Bu basit eklentiyi etkinleştirdiğinizde, Ultimate Multisite Cloudflare kimlik bilgilerinizi kullanarak ağ siteleri için otomatik olarak Cloudflare'da DNS kayıtları ekleyecek ve bunların modunu 'proxied' (yönlendirildi) olarak ayarlayacaktır. Bu şekilde her bir ağ alt sitesi oluşturulduğunda SSL dahil Cloudflare'ın tam korumasından ve avantajlarından yararlanacaktır.

Ultimate Multisite kurulumunuzun niteliğine ve amacına bağlı olarak müşterilerin kendi alan adlarını kullanma ihtiyacı doğabilir. Bu durumda ağ yöneticisinden iki sorunu çözmesi istenir: birincisi, alan adının barındırılması ve ikincisi ise o alan adı için SSL sertifikalarıdır.

Birçok kişi Cloudflare'i kullanmayı kolay bir seçenek olarak görür. Müşterinin sadece alan adını Cloudflare'e yerleştirmesi, Ultimate Multisite'ın ana alan adına CNAME işaret etmesi ve kendi alan adını Ultimate Multisite'ta eşleştirmesi yeterlidir ki özel alan adı avantajlarından yararlanmaya başlayabilsin.

Bunun dışında, alternatif çözümler aranmalıdır ve bu yüzden Ultimate Multisite Uyumlu Sağlayıcılar listesini önermektedir. Bunun nedeni DNS ve SSL ayarlama sürecinin zahmetli bir süreç olabilmesidir. Ancak Ultimate Multisite'ın bu sağlayıcılarla entegrasyonu sayesinde karmaşıklık çok azalır ve işlem otomatikleşir.

#### Plugins (Eklentiler) {#snapshots}

Müşterilerinize veya ağ sitelerinize işlevsellik sağlamak için ek eklentilere ihtiyacınız olması oldukça muhtemeldir. Tüm eklentiler WordPress Multisite ve Ultimate Multisite ile çalışır mı? Bu, duruma bağlıdır.

Çoğu eklenti bir WordPress Multisite'a kurulabilir ancak etkinleştirme ve lisanslama yazardan yazıya değişir.

Zorluk, bazı eklentilerin lisanslamanın alan başına yapılması gerektiği durumlarda lisanslamanın nasıl uygulandığıdır. Bu, bazı eklentiler için ağ yöneticisinin her yeni sitede her eklenti için lisansı manuel olarak etkinleştirmesi gerektiği anlamına gelir.

Bu nedenle, eklentinin bir WordPress Multisite ile nasıl çalışacağını ve onu lisanslamak için gereken özel gereksinimler veya prosedürler olup olmadığını eklenti yazarıyla kontrol etmek en iyisi olabilir.
