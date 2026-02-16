---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite, müşterilerinize WaaS yani Hizmet Olarak Web Sitesi sunmanızı sağlayan bir WordPress Multisite eklentisidir. Ultimate Multisite'ın işletmenize ve müşterilerinize nasıl yardımcı olabileceğini öğrenmeden önce edinmemiz gereken bazı temel bilgiler var.

## WordPress Multisite

Çoğumuz standart WordPress kurulumuna aşinayızdır. Ya hosting sağlayıcınızın kontrol paneli üzerinden oluşturursunuz ya da cesaretiniz varsa yeni bir web sunucusu ve veritabanı kurar, çekirdek dosyaları indirir ve kurulum sürecini başlatırsınız.

Bu yöntem dünya genelinde milyonlarca WordPress sitesi için işe yarar, ancak bir ajans veya hosting sağlayıcısı perspektifinden bakıldığında hacim konusunu ele almamız gerekiyor.

Otomatik bir kontrol paneli aracılığıyla tek bir WordPress sitesi veya hatta yüzlercesini oluşturmak çok kolay olsa da, bu sitelerin yönetimi söz konusu olduğunda sorunlar kendini göstermeye başlar. Yönetilmeden bırakıldığında kötü amaçlı yazılımlar için kolay bir hedef haline gelirsiniz. Yönetmek ise emek ve kaynak gerektirir. WordPress sitelerinin yönetimini ve idaresini kolaylaştırmak için harici araçlar ve eklentiler mevcut olsa da, müşterilerin yönetici erişimini elinde tutması bu çabaların kolayca boşa çıkabileceği anlamına gelir.

WordPress, çekirdeğinde 'Multisite' adında bir özellik sunar. Bu özellik kökenlerini 2010 yılına, WordPress 3.0'ın lansmanına kadar götürür. O zamandan bu yana yeni özellikler eklemek ve güvenliği artırmak amacıyla çeşitli güncellemeler almıştır.

Özünde WordPress multisite şöyle düşünülebilir: Bir üniversite tek bir WordPress kurulumu yönetir, ancak her fakülte kendi WordPress sitesini sürdürür.

Bu ifadeyi açmak için sadece Ultimate Multisite belgelerinde değil, WordPress topluluğu genelinde de geçerli olan bazı temel terimlere bakalım.

### Ağ (Network)

WordPress açısından multisite ağı, birden fazla alt sitenin tek bir kontrol panelinden yönetilebildiği yapıdır. Multisite ağı oluşturma süreci hosting sağlayıcılarına göre farklılık gösterse de, sonuç genellikle wp-config.php dosyasına WordPress'in bu özel modda çalıştığını bildiren birkaç ek direktif eklenmesidir.

Multisite ağı ile bağımsız WordPress kurulumu arasında kısaca ele alacağımız birkaç belirgin fark vardır.

#### Alt Alan Adı (Subdomain) ve Alt Dizin (Subdirectory)

Almanız gereken en acil kararlardan biri, multisite kurulumunun _alt dizin_ mi yoksa _alt alan adı_ ile mi çalışacağıdır. Ultimate Multisite her iki seçenekle de eşit derecede iyi çalışır, ancak iki yapılandırma arasında bazı mimari farklılıklar bulunur.

_Alt dizin_ yapılandırmasında, ağ siteleri ana alan adına dayalı bir yol devralır. Örneğin 'site1' etiketli bir ağ sitesinin tam URL'si https://domain.com/site1 şeklinde olur. _Alt alan adı_ yapılandırmasında ise ağ sitesi, ana alan adından türetilen kendi _alt alan adına_ sahip olur. Dolayısıyla 'site1' etiketli bir sitenin tam URL'si https://site1.domain.com/ şeklinde olur.

Her iki seçenek de tamamen geçerli tercihler olsa da, _alt alan adları_ kullanımı bazı avantajlar sunar ancak mimarisinde daha fazla düşünce ve planlama gerektirir.

DNS açısından _alt dizinler_ kullanımı nispeten basit bir zorluk sunar. Ağ siteleri ana yolun alt öğeleri olduğundan, ana alan adı için yalnızca tek bir DNS kaydı bulunması yeterlidir. _Alt alan adları_ için zorluk biraz daha karmaşıktır; her ağ sitesi için ayrı bir CNAME kaydı veya DNS kayıtlarında joker (*) bir giriş gerektirir.

Dikkate alınması gereken bir diğer alan ise SSL sertifikalarının düzenlenmesi ve kullanımıdır. _Alt dizin_ yapılandırmasında, ağ siteleri ana alan adının yolları olduğundan tek bir alan sertifikası kullanılabilir. Dolayısıyla domain.com için bir sertifika, https://domain.com/site1, https://domain.com/site2 ve benzeri adresler için yeterli SSL sağlayacaktır.

_Alt alan adı_ yapılandırmasında joker SSL sertifikası kullanımı en yaygın seçeneklerden biridir. Bu tür SSL sertifikası, bir alan adı ve onun _alt alan adları_ için şifreleme sağlar. Dolayısıyla bir joker SSL sertifikası https://site1.domain.com, https://site2.domain.com ve https://domain.com için şifreleme sağlayacaktır.

Başka seçenekler de mevcut olsa da, bunlar genellikle kapsam ve uygulama açısından sınırlıdır ve uygunluk konusunda ek yapılandırma ve değerlendirme gerektirir.

#### Eklentiler ve Temalar

WordPress'in verdiğini, en azından müşteri perspektifinden, bir şekilde geri aldığı söylenebilir. Bağımsız bir WordPress kurulumunda site yöneticisi kötü bir eklenti yükler veya kurulumunu güncel tutmazsa, bu eylemin tek kurbanı kendisidir. Ancak multisite kurulumunda kötü bir eklenti yükleyen site yöneticisi, ağda kurulu her siteyi kurban eder.

Bu nedenle multisite olarak yapılandırıldığında WordPress, site yöneticilerinden eklenti ve tema yükleme yetkisini kaldırır ve bu yetkiyi yeni oluşturulan ağ yöneticisi veya 'süper admin' rolüne taşır. Bu ayrıcalıklı rol, ağ sitelerinin yöneticilerinin kontrol panellerinde eklentiler menüsünü görüp göremeyeceğine veya erişip erişemeyeceğine ve eğer erişebiliyorlarsa bu izinlerin eklentileri _etkinleştirme_ veya _devre dışı bırakma_ yetkisini kapsayıp kapsamayacağına karar verebilir.

Bu kapsamda ağ yöneticisi, eklenti ve temaları ağa yüklemekten sorumludur ve bu eklenti ve temaları kullanma izinlerini ağ sitelerine devreder. Site yöneticileri eklenti ve tema yükleyemez veya sitelerine atanmamış eklenti ve temalara erişemez.

#### Kullanıcılar ve Yöneticiler

WordPress Multisite'ta tüm ağ siteleri aynı veritabanını ve dolayısıyla aynı kullanıcıları, rolleri ve yetkileri paylaşır. Bunu düşünmenin en uygun yolu, tüm kullanıcıların belirli bir sitenin değil, ağın üyeleri olduğudur.

Bu anlayışla, kullanıcı oluşturulmasına izin vermek istenmeyen bir durum olabilir ve bu nedenle WordPress Multisite bu yetkiyi site yöneticilerinden kaldırarak ağ yöneticisine taşır. Ağ yöneticisi de gerekli ayrıcalıkları bir site yöneticisine devredebilir ve böylece kendi siteleri için kullanıcı hesapları oluşturmalarına izin verebilir.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Yukarıdaki ifadeyi tekrarlayarak belirtelim: Kullanıcı hesapları siteyle ilişkili gibi görünse de aslında ağa tahsis edilmiştir ve bu nedenle ağ genelinde benzersiz olmalıdır. Bu nedenle bazı kullanıcı adlarının kaydedilememesi gibi durumlar olabilir.

Kurumsal sistemlerde yabancı bir kavram olmasa da, bu tek kaynaklı kullanıcı kaydı ve kimlik doğrulama yapısı, kullanıcı yönetiminin biraz daha kolay olduğu bağımsız WordPress kurulumlarına aşina kişiler için genellikle anlaşılması zor bir kavramdır.

#### Medya

WordPress Multisite'ta ağ siteleri tek bir veritabanını paylaşırken, medya dosyaları için dosya sisteminde ayrı yollar kullanırlar.

Standart WordPress konumu (wp-content/uploads) korunur; ancak yolu, ağ sitesinin benzersiz kimliğini yansıtacak şekilde değiştirilir. Sonuç olarak bir ağ sitesinin medya dosyaları wp-contents/uploads/site/[id] şeklinde görünür.

#### Kalıcı Bağlantılar

Daha önce _alt alan adı_ yapılandırmasının _alt dizin_ yapılandırmasına göre belirgin avantajları olduğundan bahsetmiştik ve işte burada karşımıza çıkıyor: yollar.

_Alt dizin_ yapılandırmasında, ana site (ağ kurulduğunda oluşturulan ilk site) ve ağ alt siteleri, alan adından başlayan aynı yolu paylaşmak zorundadır. Bu durum çok sayıda çakışma potansiyeli taşır.

Yazılar için, ağ siteleriyle çakışmaları önlemek amacıyla ana siteye zorunlu bir /blog/ yolu eklenir. Bu, 'Yazı adı' gibi güzel kalıcı bağlantıların domain.name/blog/yazi-adi/ şeklinde sunulacağı anlamına gelir.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

_Alt alan adı_ yapılandırmasında bu işlem gerekli değildir çünkü her ağ sitesi tam alan adı ayrımından yararlanır ve dolayısıyla tek bir yola bağlı kalmaz. Bunun yerine _alt alan adlarına_ dayalı kendi ayrı yollarını korurlar.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Statik Sayfalar

_Alt dizin_ yapılandırmasında, ana site ve ağ siteleri aynı yolu paylaştığından isim çakışması potansiyeli statik sayfalara da uzanır.

Bunu önlemek için WordPress, ilk sitenin isimleriyle çakışmaması için belirli site adlarını kara listeye alma imkanı sunar. Tipik olarak ağ yöneticisi, ana sitenin sayfalarının kök yollarını girecektir.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

_Alt alan adı_ yapılandırmasında isim çakışması olasılığı, ağ sitesine özgü olan ve ana siteyle hiçbir şekilde ilişkili olmayan _alt alan adı_ sayesinde azaltılır.

### Kayıt

WordPress Multisite'ın ağ ayarlarında, yeni ve mevcut kullanıcıların site oluşturmasına izin veren birkaç yeni kullanıcı kayıt seçeneği mevcuttur.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Bağımsız WordPress kurulumlarının aksine, ağ siteleri kullanıcı kayıtlarına izin verme veya bu kayıtları rollere atama gibi bilinen seçenekleri içermez.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Kullanıcı hesapları oluşturulduğunda, bu hesaplar ağ düzeyinde oluşturulur. Dolayısıyla belirli bir siteye ait olmak yerine ağa ait olurlar. Bunun bazı belirgin avantajları ve dezavantajları vardır.

Örneğin, WordPress Multisite'ınızın haber ve bilgi alanında faaliyet gösterdiğini varsayalım. Multisite'ı kurar ve ardından finans, teknoloji, eğlence ve diğer ilgi alanları için ağ siteleri oluştururken eklentiler ve temalar üzerinde genel kontrolü elinizde tutarsınız. Her ağ sitesi de özel yazı türleri veya normal yazı kategorilerinden çok daha fazla düzeyde kendi ağ sitelerinin görünümü, hissi ve kullanıcı deneyimi üzerinde kontrol sahibi olur.

Bu kapsamda bir kullanıcı giriş yaptığında ağa giriş yapar ve nihayetinde sorunsuz bir deneyim sağlamak için her ağ sitesine de giriş yapmış olur. Yeni siteniz abonelik tabanlıysa bu ideal çözüm ve sonuç olacaktır.

Ancak multisite'ın amaçlanan doğası ve amacı, birbirleriyle ilişkisi olmayan ayrık ağ siteleri sunmaksa, kullanıcı rollerini manipüle etmek için neredeyse her zaman harici veya ek eklentiler gerekir.

### Alan Adı ve SSL

WordPress Multisite kurulumlarından neredeyse dikkatimizden kaçan birine bakalım - WordPress.com. Bu, bir WordPress multisite'ın en kapsamlı örneğidir ve bir amacı gerçekleştirmek için özelleştirilme ve şekillendirilme konusundaki geniş yeteneklerini gösterir.

Günümüz modern internetinde SSL kullanımı neredeyse zorunludur ve WordPress multisite ağ yöneticileri kısa sürede bu zorluklarla karşılaşır.

_Alt alan adı_ yapılandırmasında siteler kök alan adına dayalı olarak oluşturulur. Dolayısıyla 'site1' etiketli bir site 'site1.domain.com' olarak oluşturulur. Joker SSL sertifikası kullanarak bir ağ yöneticisi bu zorluğu başarıyla çözebilir ve ağ için SSL şifreleme yetenekleri sağlayabilir.

WordPress Multisite, ağ sitelerinin özel alan adları veya ağın kök alan adından farklı alan adlarıyla ilişkilendirilmesine olanak tanıyan bir alan adı eşleme işlevi içerir.

Ağ yöneticileri için bu, hem alan adı yapılandırması hem de SSL sertifikalarının düzenlenmesi ve bakımı açısından ek bir karmaşıklık katmanı sunar.

Bu kapsamda WordPress Multisite, [www.anotherdomain.com](http://www.anotherdomain.com) adresinin 'site1' ile eşlenmesine olanak tanısa da, ağ yöneticisi DNS kayıtlarını harici olarak yönetme ve SSL sertifikalarını uygulama zorluğuyla baş başa kalır.

## Ultimate Multisite

Bağımsız WordPress kurulumu ile Multisite kurulumu arasındaki farkları anladıktan sonra, Ultimate Multisite'ın Hizmet Olarak Web Sitesi sunmak için nasıl nihai bir cephanelik olduğuna bakalım.

### Giriş

Ultimate Multisite, Hizmet Olarak Web Sitesi (WaaS) oluşturmak söz konusu olduğunda İsviçre çakınızdır. Wix.com, Squarespace, WordPress.com'u düşünün ve sonra kendi hizmetinize sahip olmayı hayal edin.

Perde arkasında Ultimate Multisite, WordPress Multisite'ı kullanır ancak bunu yalnızca ağ yöneticilerinin multisite kurulumlarında karşılaştığı sayısız zorluğu çözmekle kalmayıp, çok çeşitli kullanım senaryolarının desteklenmesine olanak tanıyan yetenekleri de geliştiren bir şekilde yapar.

Aşağıdaki bölümlerde bazı yaygın kullanım senaryolarına ve bu senaryoları desteklemek için gereken değerlendirmelere bakacağız.

### Kullanım Senaryoları

#### Senaryo 1: Bir Ajans

Tipik olarak bir ajansın temel becerileri web sitesi tasarımında yatar; hosting veya pazarlama gibi konular ek hizmetler olarak listelenir.

Ajanslar için Ultimate Multisite, birden fazla web sitesini tek bir platformda barındırma ve yönetme yetenekleriyle inanılmaz bir değer önerisi sunar. Özellikle tasarımlarını GeneratePress, Astra, OceanWP veya benzeri belirli temalarda standartlaştıran ajanslar, Ultimate Multisite'ın her yeni site için bu temaları otomatik olarak etkinleştirme yeteneklerinden yararlanabilir.

Benzer şekilde, yaygın ve popüler eklentiler için ajans fiyatlandırması fırsatlarının bolluğuyla, Ultimate Multisite kullanımı ajansların mevcut yatırımlarından eklentilerin kurulabileceği, bakımının yapılabileceği ve kullanılabileceği ortak bir platform sağlayarak yararlanmalarına olanak tanır.

Muhtemelen bir alan adı eşleme yapılandırması istenecektir ve neyse ki Ultimate Multisite, birçok popüler hosting sağlayıcısının yanı sıra Cloudflare ve cPanel gibi hizmetlerle entegrasyonları sayesinde alan adı eşleme ve SSL sertifikalarını kolaylaştırmayı inanılmaz derecede basit hale getirir.

Dolayısıyla bu sağlayıcılardan birini kullanarak veya Ultimate Multisite'ı Cloudflare'in arkasına yerleştirerek alan adları ve SSL sertifikalarının yönetimi gibi konular oldukça basit hale gelir.

Sitelerin oluşturulması üzerinde sıkı kontrol tutmayı tercih eden ajanslar, Ultimate Multisite'ın akıcı arayüzü aracılığıyla site oluşturma ve siteleri müşteriler ve planlarla ilişkilendirme kolaylığını takdir edecektir.

![Ultimate Multisite site yönetim arayüzü](/img/admin/sites-list.png)

Eklentiler ve temalar üzerinde sıkı kontrol, Ultimate Multisite'ın sezgisel arayüzleri aracılığıyla ürün bazında sürdürülür ve eklentiler ile temaların kullanılabilir veya gizli hale getirilmesine ve yeni bir site için örneklendiğinde etkinleştirme durumlarının belirlenmesine olanak tanır.

![Ürün eklenti sınırlamaları arayüzü](/img/config/product-plugins.png)

Temalar benzer işlevsellik sunar ve site oluşturmada belirli temaların etkinleştirilmesine veya gizlenmesine olanak tanır.

![Ürün tema sınırlamaları arayüzü](/img/config/product-themes.png)

Ajanslar, Ultimate Multisite ile en iyi yaptıkları şeye odaklanarak - olağanüstü web siteleri tasarlayarak - gönül rahatlığı bulacaklardır.

#### Senaryo 2: Niş Sağlayıcı

"Bir şeyi yap ve onu iyi yap" diyen eski bir söz vardır. Birçok uzman için bu, tek bir temel fikir etrafında bir ürün veya hizmet oluşturmak anlamına gelir.

Belki de golf meraklısısınız ve kulüplere web siteleri tanıtıyorsunuz veya e-spor oyuncususunuz ve klanlara web siteleri sağlıyorsunuz. Ya da restoranlara rezervasyon hizmeti sunan biri olabilirsiniz.

Birçok nedenden dolayı ortak bir çerçeve ve platform üzerinde hizmetler sunmak istersiniz. Gerekli işlevselliği sağlamak için özel eklentiler tasarlamış veya yatırım yapmış olabilirsiniz ya da endüstri en iyi uygulamaları tasarıma bir tür standartlaştırılmış yaklaşım gerektirebilir.

Ultimate Multisite'ın yenilikçi özelliklerinden biri şablon sitelerin kullanımıdır. Şablon site, temanın kurulup etkinleştirildiği, gerekli eklentilerin kurulup etkinleştirildiği ve örnek yazılar veya sayfaların oluşturulduğu bir sitedir. Bir müşteri şablona dayalı yeni bir site oluşturduğunda, şablonun içeriği ve ayarları yeni oluşturulan siteye kopyalanır.

Niş siteler ve hizmetler sağlayıcısı için bu, özel eklentiler ve tasarımla kullanıma hazır bir siteyi anında oluşturma yeteneğinde eşsiz bir avantaj sağlar. Müşterinin hizmeti tamamlamak için yalnızca en az düzeyde girdi sağlaması yeterlidir.

Gereksinimlere bağlı olarak hem _alt dizin_ hem de _alt alan adı_ yapılandırmaları uygun olabilir; bu durumda mimari seçimler _alt dizinler_ için basit bir SSL sertifikası veya _alt alan adları_ için joker SSL sertifikası arasında olacaktır.

#### Senaryo 3: WordPress Web Hosting

WordPress sitelerini barındırmanın sayısız yolu vardır, ancak nadiren önceden kurulmuş bir WordPress sürümüyle müşteriye web alanı sağlamak kadar basittir. Bunun nedeni, anlamlı bir hizmet sunmak için bir dizi kararın ve değerlendirmenin bir araya gelmesi gerektiğidir.

Ultimate Multisite, WordPress sitelerinin barındırılması için kapsamlı anahtar teslimi bir çözüm sunarak bu alanda üstünlük sağlar. Çözüme abonelik hizmetleri, ödeme tahsilatı, ödeme formları, indirim kuponları ve müşteri iletişimleri sağlamak için temel mekanizmalar dahildir.

WordPress Multisite'ı doğru şekilde kurmak, yapılandırmak ve sürdürmek için gereken entegre çalışmanın büyük bölümü Ultimate Multisite tarafından kolaylaştırılır; böylece ağ yöneticilerinin yalnızca ürün kademeleri, fiyatlandırma ve hizmet teklifleri gibi hizmetleri veya nişleriyle ilgili konuları dikkate alması yeterlidir.

Ultimate Multisite ile entegre olmak isteyen geliştiriciler için çözüm, kapsamlı bir RESTful API ve olay bildirimi için Webhook'lar da sunar.

Çok sayıda harici eklenti ve lisansa bağımlı olmadan, Ultimate Multisite, Wix, Squarespace, WordPress.com ve diğerleriyle karşılaştırılabilir, zengin özelliklere sahip bir çözüm sunar.

### Mimari Değerlendirmeler

Kapsamlı bir rehber olmasa da, aşağıdaki maddeler Ultimate Multisite kurulumunu desteklemek için doğru teknoloji seçimine rehberlik sağlamalıdır.

#### Paylaşımlı ve Özel Hosting

Maalesef tüm hosting sağlayıcıları eşit değildir ve bazıları aşırı sunucu yoğunlukları uygular. Düşük maliyetli sağlayıcılar genellikle sunucu yoğunluğunu maksimize ederek gelir elde eder. Bu nedenle Ultimate Multisite kurulumunuz aynı sunucuda bulunan birkaç yüz siteden yalnızca biri olabilir.

Sağlayıcıdan uygun güvenceler olmadığında, paylaşımlı sunucudaki siteler 'gürültülü komşu' sorununu yaşar. Yani aynı sunucudaki bir site o kadar çok kaynak tüketir ki diğer siteler kalan kaynaklar için rekabet etmek zorunda kalır. Bu genellikle yavaş olan veya zamanında yanıt veremeyen siteler olarak kendini gösterir.

Kendiniz bir web hosting sağlayıcısı olarak, bu zincirleme etkiler müşterilerinizin düşük hızlar, düşük sayfa sıralaması ve yüksek hemen çıkma oranları yaşamasına yol açacak ve genellikle başka yerlerde hizmet arayışına girerek müşteri kaybına neden olacaktır.

Kısacası, ucuz iyi demek değildir.

Ultimate Multisite'ın birçok iyi hosting sağlayıcısıyla çalıştığı bilinmektedir ve alan adı eşleme ve otomatik SSL gibi işlevler sağlamak için bu sağlayıcıların ortamlarıyla iyi entegre olur. Bu sağlayıcılar performansa değer verir ve paylaşımlı hostingden daha yüksek kaliteli hizmet sunar.

Uyumlu sağlayıcıların listesi ve her biri için eksiksiz kurulum talimatları için lütfen Uyumlu Sağlayıcılar belgelerine bakın.

#### Performans Değerlendirmeleri

Ultimate Multisite yavaş bir uygulama değildir, aksine oldukça hızlıdır. Ancak yalnızca temel uygulama ve altyapı kadar iyi performans gösterir ve yalnızca erişebildiği kaynakları kullanabilir.

Şunu düşünün: 100 siteli bir Ultimate Multisite kurulumunun ağ yöneticisisiniz. Bu sitelerden bazıları iyi performans gösteriyor ve her gün birçok ziyaretçi çekiyor.

Bu senaryo, diyelim bir ila beş site gibi daha küçük bir ölçekte farklı olurdu, ancak çok geçmeden ölçek sorunları belirgin hale gelirdi.

Müdahale edilmezse, tek Ultimate Multisite sitesi tüm sitelere gelen ziyaretçilerin isteklerini karşılamaktan sorumlu olurdu. Bu istekler dinamik PHP sayfaları veya stil dosyaları, javascript veya medya dosyaları gibi statik varlıklar için olabilir. İster bir ister yüz site olsun, bu görevler tekrarlayıcı, monoton ve savurgan hale gelir. Çıktı her istek için aynı statik bilgi olduğunda bir PHP dosyasını işlemek için CPU gücü ve bellek kullanmak gereksizdir.

Benzer şekilde, bir PHP veya HTML sayfası için yapılan tek istek, betikler, stil dosyaları ve görüntü dosyaları için birden fazla ardışık istek oluşturur. Bu istekler doğrudan Ultimate Multisite sunucunuza yönelir.

Bu sorunu sunucuyu yükselterek kolayca çözebilirsiniz, ancak bu ikincil bir sorunu çözmez - coğrafi gecikmeler. Yalnızca birden fazla konumda birden fazla sunucu bu sorunu düzgün şekilde çözebilir.

Bu nedenle çoğu ağ yöneticisi, statik sayfalar için istekleri karşılamak üzere ön uç önbellekleme çözümleri ve içerik dağıtım ağları (CDN) kullanır. Bu istekleri karşılamak ve istek sunucuya ulaşmadan önce varlıkları sunmak, işlem kaynaklarını korur, gecikmeleri ortadan kaldırır, gereksiz yükseltmelerden kaçınır ve teknoloji yatırımlarını maksimize eder.

Ultimate Multisite, ağ yöneticilerinin kurulumlarını Cloudflare'in arkasına yerleştirmelerini ve yalnızca önbellekleme yeteneklerinden değil, aynı zamanda DNS barındırma, SSL sertifikaları ve güvenlik mekanizmalarından da yararlanmalarını sağlayan gelişmiş bir Cloudflare eklentisi içerir.

#### Yedeklemeler

50 kişiden yedekleme konusunda tavsiye isteyebilir ve yedekleme stratejileri hakkında 50 farklı görüş alabilirsiniz. Cevap, duruma bağlıdır.

Tartışılmayan şey, yedeklemelerin gerekli olduğu ve özellikle yönetilen hizmet sunan bir sağlayıcı tarafından bunların yönetilmemesinin neredeyse akıl almaz olduğudur. Sonuç olarak müşteriler bu hizmeti sağlamak ve yönetmek için ağ yöneticisine bakacaktır. Ağ yöneticisinin kime bakacağı tamamen farklı bir sorundur.

Bu bölümün amaçları doğrultusunda, bir yedeklemenin yedeklemenin başlatıldığı andaki sistem durumunun zaman noktası kopyası olduğunu kabul edelim. Basitçe söylemek gerekirse, yedekleme anında sistemin durumu ne olursa olsun, bu durum yakalanır ve yedeklemede saklanır.

Bu anlayışla, yedeklemelerin nasıl gerçekleştirileceği ve ortamınız için en iyisinin ne olduğu sorusunun cevabı büyük ölçüde gereksinimlerinize ve hosting sağlayıcısının bu gereksinimleri karşılama yeteneğine bağlı olacaktır. Ancak en iddialıdan en az iddialıya doğru aşağıdaki seçenekler bazı yönlendirmeler sağlamalıdır.

#### Anlık Görüntüler

Anlık görüntüler yedeklemeler için gümüş kurşunlardır çünkü kolaydırlar, basittirler (geri yüklemek isteyene kadar) ve 'sadece çalışırlar'. Bununla birlikte sağlayıcınızdan biraz yardım gerektirir ve çoğunlukla yalnızca bir VPS (Sanal Özel Sunucu) veya benzeri bir şeyiniz varsa geçerlidir. 'Uyumlu Sağlayıcılar' belgelerimizde listelenen birkaç sağlayıcı, ağ yöneticisinin daha fazla müdahalesini veya değerlendirmesini gerektirmeyen yedeklemeler sunar.

Geleneksel yedeklemeler dosyaları ve veritabanlarını hedef alırken, anlık görüntü tüm diski hedef alır. Bu, yalnızca sitenin verilerinin anlık görüntüde yakalanmadığı, aynı zamanda işletim sistemi ve yapılandırmanın da yakalandığı anlamına gelir. Birçokları için bu belirgin bir avantajdır çünkü bir anlık görüntüden neredeyse anında yeni bir sistem oluşturulabilir ve sorunlu bir örneği değiştirmek için çalıştırılabilir. Benzer şekilde, dosyaları geri alma süreci yalnızca anlık görüntü imajını mevcut bir örneğe disk olarak bağlamayı gerektirir, böylece dosyalara erişilebilir ve kopyalanabilir.

Anlık görüntüler hosting sağlayıcısında ek maliyet oluşturabilir, ancak bu kazalara karşı bir sigorta poliçesidir.

#### Harici Betikler

WordPress ve MySQL kaynaklarını yedeklemek için harici betikler ve çözümler konusunda eksiklik yok gibi görünüyor ve bunlar WordPress dosya sistemi ve veritabanını kullanan bir WordPress eklentisi olan Ultimate Multisite için de iyi çalışır. Dolayısıyla WordPress sitelerini yedekleyen bir çözüm, Ultimate Multisite'ın ihtiyaçlarını yeterince karşılayacaktır.

Bir betiği diğerine tercih edemeyiz, ancak genel tavsiyemiz sonuçların istenildiği gibi olduğundan emin olmak için birkaç yedekleme ve geri yükleme testi çalıştırmak ve özellikle bir tür diferansiyel yedekleme stratejisi uygulandığında betiği ve işlevselliğini sürekli değerlendirerek 'emin olmak için emin olmak'tır.

Bu betiklerin çalışırken sistem yükünü artıracağı dikkate alınmalıdır.

#### Eklentiler

WordPress'te bir eklentiyle çözülemeyen neredeyse hiçbir sorun yoktur ve harici betikleri yönetmek sizin için çok zor geliyorsa belki de bir eklenti en iyi seçenektir.

Eklentiler seçenekler ve özellikler açısından farklılık gösterse de, çoğunlukla aynı işlevi yerine getirir: WordPress dosyalarının ve veritabanı içeriklerinin bir kopyasını oluşturmak. Bundan sonra işlevler farklılaşır; bazı eklentiler yedeklemeleri Google Drive veya Dropbox gibi harici hizmetlere veya S3, Wasabi veya benzeri uyumlu nesne depolama hizmetlerine gönderebilir. Daha kapsamlı eklentiler diferansiyel yedeklemeler veya harici depolama maliyetlerinden tasarruf etmek için yalnızca değiştirilen verileri yedeklemek için bir tür strateji sağlar.

Eklentinizi seçerken, multisite uyumlu olduğunu doğrulamaya dikkat edin. Çalışma şekli nedeniyle, yedekleme çalışırken işlem tamamlanana kadar sunucuda geçici yük bekleyebilirsiniz.

#### Alan Adı ve SSL

Multisite _alt alan adı_ modunda alan adları hakkında zaten çok şey tartışıldı. Ağ yöneticileri için neredeyse evrensel bir çözüm, joker DNS girişlerinin kullanımıdır.

![Joker DNS girişi yapılandırma örneği](/img/config/settings-domain-mapping.png)

Bu tür DNS girişi, 'site1.domain.com' ve 'site2.domain.com' gibi _alt alan adlarını_ başarıyla 1.2.3.4 IP adresine çözümleyecek ve böylece Ultimate Multisite'ı ve daha geniş ölçekte _alt alan adı_ modunu kullanan WordPress Multisite'ı destekleyecektir.

Bu HTTP için mükemmel çalışabilir çünkü hedef ana bilgisayar HTTP başlıklarından okunur, ancak güvenli HTTPS işlemlerinin neredeyse zorunlu olduğu günümüzde web nadiren bu kadar basittir.

Neyse ki SSL sertifikaları için kolay seçenekler var. _Alt dizin_ modunda normal bir alan sertifikası kullanılabilir. Bunlar, ücretsiz LetsEncrypt hizmetini veya başka bir kaynağı kullanabilen hosting sağlayıcılarından kolayca ve ücretsiz olarak temin edilebilir. Aksi takdirde, sertifika imzalama isteği oluşturabiliyorsanız bunlar yetkili kurumlardan ticari olarak temin edilebilir.

_Alt alan adı_ modu için joker SSL sertifikası kullanımı, joker alan adıyla mükemmel bir eşleşme oluşturacak ve sertifikanın ek yapılandırma olmaksızın kök alan adı ve tüm _alt alan adları_ için yetkili olmasına olanak tanıyacaktır.

Ancak, kurumsal bir planda olmadığınız veya girişi yalnızca DNS olarak ayarlamadığınız sürece joker SSL sertifikalarının Cloudflare gibi hizmetlerle çalışmayabileceği unutulmamalıdır; bu durumda tüm önbellekleme ve optimizasyon atlanır.

Ultimate Multisite, WordPress multisite'ların ihtiyaçları konusundaki kapsamlı deneyimimizi göstererek bu soruna kutudan çıktığı gibi bir çözüm sunar. Bu basit eklentiyi etkinleştirmek, Ultimate Multisite'ın Cloudflare'de ağ siteleri için otomatik olarak DNS girişleri eklemek ve modlarını 'proxied' olarak ayarlamak için Cloudflare kimlik bilgilerinizi kullanmasını sağlayacaktır. Bu şekilde her ağ alt sitesi oluşturulduğunda, SSL dahil Cloudflare'in tam koruma ve avantajlarına sahip olacaktır.

Ultimate Multisite kurulumunuzun doğası ve amacına bağlı olarak, müşterilerin kendi alan adlarını kullanmaları gerekebilir. Bu durumda ağ yöneticisi iki sorunu çözmekle görevlendirilir. Birincisi, alan adının barındırılması ve ikincisi, alan adı için SSL sertifikaları.

Birçokları için Cloudflare kullanımı kolay bir seçenektir. Müşterinin yalnızca alan adını Cloudflare'e yerleştirmesi, Ultimate Multisite'ın kök alan adına bir CNAME yönlendirmesi yapması ve alan adını Ultimate Multisite'ta eşlemesi yeterlidir; böylece özel alan adının avantajlarından yararlanmaya başlayabilir.

Bunun dışında alternatif çözümler aranmalıdır, bu nedenle Ultimate Multisite Uyumlu Sağlayıcılar listesi önerir. Bunun nedeni, DNS ve SSL kurulum sürecinin önemsiz olmayan bir süreç olabilmesidir. Ancak Ultimate Multisite'ın bu sağlayıcılarla entegrasyonu sayesinde karmaşıklık büyük ölçüde ortadan kaldırılır ve prosedür otomatikleştirilir.

#### Eklentiler

Müşterilerinize veya ağ sitelerinize işlevsellik sağlamak için ek eklentilere ihtiyacınız olması oldukça muhtemeldir. Tüm eklentiler WordPress Multisite ve Ultimate Multisite ile çalışır mı? Duruma bağlı.

Çoğu eklenti WordPress Multisite'a kurulabilir olsa da, etkinleştirme ve lisanslama yazardan yazara değişir.

Zorluk, lisanslamanın nasıl uygulandığında yatar; bazı eklentiler alan adı bazında lisanslama gerektirir. Bu, bazı eklentiler için ağ yöneticisinin her yeni sitede her eklenti için lisansı manuel olarak etkinleştirmesi gerektiği anlamına gelir.

Bu nedenle, eklenti yazarına eklentilerinin WordPress Multisite ile nasıl çalışacağını ve lisanslamak için gereken özel gereksinimler veya prosedürler olup olmadığını sormak en iyisi olabilir.
