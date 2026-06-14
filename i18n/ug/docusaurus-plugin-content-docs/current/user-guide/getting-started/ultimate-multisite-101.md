---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite Giriş Rehberi

Ultimate Multisite, size müşterilere WaaS (Web as a Service) veya Web Siteleri Hizmeti sunmanızı sağlayan bir WordPress Multisite eklentisidir. Bu konuya dalmadan önce ve Ultimate Multisite'ın işinize ve müşterilerinize nasıl yardımcı olabileceğini öğrenmeden önce edinmemiz gereken bazı temel bilgiler var.

## WordPress Multisite

Çoğumuz standart WordPress kurulumuyla tanışıkız. Ya bunu hosting sağlayıcınızın kontrol paneli aracılığıyla oluşturursunuz ya da cesur olanlar için yeni bir web sunucusu ve veritabanı kurar, ana dosyaları indirir ve kurulum sürecine başlarlar.

Bu yöntem dünya genelindeki milyonlarca WordPress sitesi için işe yarasa da, bir ajans veya hosting sağlayıcısı perspektifinden hacimleri biraz konuşalım.

Tek bir WordPress sitesini veya hatta yüz tane siteyi otomatik bir kontrol paneli ile oluşturmak kolay olsa da, bu sitelerin yönetimine geldiğinde sorunlar yakında ortaya çıkmaya başlar. Yönetilmemiş bırakırsanız, kötü amaçlı yazılımlar için ana hedef olursunuz. Yönetmek, çaba ve kaynak gerektiren bir iştir ve WordPress sitelerini yönetmeyi ve idare etmeyi kolaylaştırmak için harici araçlar ve eklentiler mevcut olsa da, müşterilerin yönetim erişimine sahip olması bu çabaların kolayca yenilebileceği anlamına gelir.

WordPress'in çekirdeğinde, 2010 yılında WordPress 3.0'ın lansmanıyla kökenleri olan sadece 'Multisite' adında bir özellik bulunur. O zamandan beri yeni özellikler eklemek ve güvenliği sıkılaştırmak amacıyla bir dizi revizyon görmüştür.

Özetle, bir WordPress multisiteyi şöyle düşünebilirsiniz: Bir Üniversite tek bir WordPress kurulumu sürdürür ancak her fakülte kendi WordPress sitesini yönetir.

این جمله را برای درک بهتر، بیایید نگاهی به برخی از اصطلاحات اساسی بیندازیم که نه فقط در مستندات Ultimate Multisite بلکه در کل جامعه وردپرس وجود دارند.

### شبکه (The Network)

از نظر وردپرس، یک شبکه چند سایت (multisite network) جایی است که می‌شه مدیریت کرد چندین زیرسایت از یک داشبورد واحد. اگرچه ایجاد یک شبکه چندسایتی بین ارائه‌دهندگان هاست متفاوت است، اما نتیجه نهایی معمولاً چند دستورالعمل اضافی در فایل wp-config.php است تا به وردپرس بگوییم که در این حالت خاص کار می‌کند.

تفاوت‌های متمایزی زیادی بین یک شبکه چندسایتی و یک نصب مستقل وردپرس وجود دارد که ما به طور خلاصه درباره‌اش صحبت خواهیم کرد.

#### زیردامنه در مقابل زیردایرکتوری (Subdomain vs. Subdirectory)

یکی از مهم‌ترین تصمیماتی که باید بگیرید این است که آیا نصب چندسایتی با _زیردایرکتوری‌ها_ یا _زیرنامه‌ها (subdomains)_ کار خواهد کرد. Ultimate Multisite با هر دو گزینه به یک اندازه خوب کار می‌کند، اما بین این دو پیکربندی تفاوت‌های معماری وجود دارد.

در پیکربندی _زیردایرکتوری_، سایت‌های شبکه مسیری را بر اساس نام دامنه اصلی به ارث می‌برند. برای مثال، یک سایت شبکه با نام 'site1' آدرس کامل خود را https://domain.com/site1 خواهد داشت. در پیکربندی _زیرنامه‌ (subdomain)_، سایت شبکه خودش یک _زیردامنه_ منحصر به فرد از نام دامنه اصلی خواهد داشت. بنابراین، سایتی که با نام 'site1' مشخص شده است، آدرس کامل خود را https://site1.domain.com/ خواهد داشت.

اگرچه هر دو گزینه انتخاب‌های کاملاً معتبر هستند، اما استفاده از _زیرنامه‌ها_ مزایای زیادی دارد، اما نیاز به فکر و برنامه‌ریزی بیشتری در معماری آن دارد.

DNS mas'alaqida `_subdirectories_` ishlatish nisbatan oddiy muammol bo'ladi. Tarmoq saytlari asosan asosiy yo'lning farzandlari bo'lgani uchun, asosiy domen nomi uchun faqat bitta domen nomi kiriting mavjud bo'lishi kerak. `_subdomains_` esa biroz murakkabroq muammo tug'diradi va har bir tarmoq sayti uchun alohida CNAME kiritingi yoki DNS yozuvlarida wildcard (\*) kiritingi talab qilinishi mumkin.

Boshqa e'tibor beriladigan soha — SSL va SSL sertifikatlarini chiqarish va ishlatishdir. `subdirectory` konfiguratsiyasida bitta domen sertifikati ishlatilishi mumkin, chunki tarmoq saytlari asosan asosiy domen nomining yo'llaridir. Shunday qilib, domain.com uchun sertifikat https://domain.com/site1, https://domain.com/site2 va hokazo uchun SSLni mos ravishda ta'minlaydi.

`subdomain` konfiguratsiyasida wildcard SSL sertifikatidan foydalanish eng keng tarqalgan variantlardan biridir. Bu turdagi SSL sertifikati domen va uning `subdomains` uchun shifrlashni ta'minlaydi. Shuning uchun, wildcard SSL sertifikati https://site1.domain.com, https://site2.domain.com va hatto domain.com o'zi uchun ham shifrlashni ta'minlaydi.

Boshqa variantlar mavjud bo'lsa-da, ular ko'pincha doirasi va qo'llanilishi bilan cheklangan bo'ladi va moslik nuqtai nazaridan qo'shimcha konfiguratsiya va e'tibor talab qiladi.

#### Pluginlar va Temalar

WordPress nima berganini, kamida mijozning nuqtai nazaridan olib ketadigan narsa ham mavjud. Agar mustaqil WordPress o'rnatmasida sayt administrator yomon plugin o'rnatsa yoki o'rnatmasini yangilab turmasa, bu harakatning faqat qurboni va yo'qotuvchisi o'zi bo'ladi. Biroq, tarmoqli (multisite) o'rnatmasida sayt administrator yomon plugin o'rnatsa, bu tarmoqdagi har bir sayt uchun qurbonni yaratadi.

هنگامی که اینطور پیکربندی yapılırsa، WordPress Multisite, sitelerin yöneticilerinin eklenti (plugin) ve tema (theme) yükleme yeteneğini kaldırır ve bu yetkiyi yeni oluşturulan ağ yöneticisi veya 'super admin' rolüne taşır. Bu ayrıcalıklı rol daha sonra ağ sitelerinin yöneticilerinin kendi panellerinde eklenti menüsünü görüp görmeyeceğine karar verebilir ve eğer öyleyse, bu izinlerin eklentileri _aktif etme_ veya _devre dışı bırakma_ yetkilerini kapsayıp kapsamadığına da karar verir.

Bu kapsamda, ağ yöneticisi ağına eklenti ve temaları yüklemekten sorumlu olur ve bu eklentilerden ve temalardan ağ siteleri için yararlanmak üzere izinleri devredilir. Site yöneticileri kendi sitelerine atanmamış eklentileri veya temaları yükleyemezler veya bunlara erişemezler.

#### Kullanıcılar ve Yöneticiler

Bir WordPress Multisite'ta, tüm ağ siteleri aynı veritabanını paylaşır ve bu nedenle aynı kullanıcıları, rolleri ve yetenekleri paylaşırlar. Bunu düşünmenin en uygun yolu, tüm kullanıcıların belirli bir siteye değil, ağın üyeleri olmasıdır.

Bu anlayışa dayanarak, kullanıcıların oluşturulmasına izin vermek istenmeyebilir ve bu nedenle WordPress Multisite, bu yeteneği site yöneticilerinden kaldırır ve bu yetkiyi ağ yöneticisine devreder. Buna karşılık, ağ yöneticisi, kendi siteleri için kullanıcı hesapları oluşturmalarına izin vermek üzere gerekli ayrıcalıkları bir site yöneticisine devredebilir.

<!-- Ekran görüntüsü mevcut değil: WordPress Multisite ağ kullanıcı yönetimi arayüzü -->

Yukarıdaki ifadeyi tekrar etmek gerekirse, kullanıcı hesaplarının kendileri içinde bulundukları siteden bağımsız görünseler de, aslında ağa atanmışlardır ve bu nedenle ağ genelinde benzersiz olmaları gerekir. Bu sebeple bazı durumlarda kullanıcı adlarının kaydedilememesi söz konusu olabilir.

همکاران، این یک مفهوم جدید نیست که در سیستم‌های سازمانی دیده نشود، اما وقتی با نصب‌های مستقل وردپرس آشنا هستید که مدیریت کاربر کمی راحت‌تر است، این تک منبع ثبت و احراز هویت کاربران اغلب برای شما سخت قابل درک است.

#### رسانه (Media)

وقتی سایت‌های شبکه یک پایگاه داده مشترک در وردپرس دارند، آن‌ها مسیرهای جداگانه‌ای روی سیستم فایل برای فایل‌های رسانه‌ای نگه می‌دارند.

مکان استاندارد وردپرس (wp-content/uploads) باقی می‌ماند؛ اما مسیر آن طوری تغییر می‌کند که شناسه منحصر به فرد سایت شبکه را منعکس کند. در نتیجه، فایل‌های رسانه‌ای یک سایت شبکه به صورت wp-contents/uploads/site/[id] ظاهر می‌شوند.

#### لینک‌های دائمی (Permalinks)

قبلاً اشاره کردیم که تنظیمات _زیردامنه_ (subdomain) نسبت به _زیردایرکتوری_ (subdirectory) مزایای متمایزی دارد و در اینجا آن را توضیح می‌دهیم: مسیرها.

در تنظیمات _زیردایرکتوری_، سایت اصلی (اولین سایتی که وقتی شبکه ایجاد می‌شود ساخته می‌شود) و زیرسایت‌های شبکه باید از نام دامنه به یک مسیر مشترک دسترسی داشته باشند. این موضوع پتانسیل تداخل‌های زیادی را دارد.

برای پست‌ها، برای جلوگیری از تداخل با سایت‌های شبکه، یک مسیر اجباری `/blog/` به سایت اصلی اضافه می‌شود. این بدان معناست که لینک‌های دائمی زیبا مانند ‘نام پست’ به صورت domain.name/blog/post-name/ نمایش داده خواهند شد.

<!-- اسکرین‌شات در دسترس نیست: تنظیمات permalink وردپرس که مسیر /blog/ را در پیکربندی زیردایرکتوری نشان می‌دهد -->

در تنظیمات _زیردامنه_، نیازی به این کار نیست زیرا هر سایت شبکه از جداسازی کامل دامنه بهره می‌برد و بنابراین به یک مسیر واحد وابسته نیست. آن‌ها در عوض بر اساس _زیردامنه_ خود، مسیرهای متمایز خود را حفظ می‌کنند.

<!-- اسکرین‌شات در دسترس نیست: تنظیمات permalink وردپرس برای پیکربندی زیردامنه -->

#### صفحات استاتیک (Static Pages)

_subdirectory_ yapılandırmasında, ana siteden ve ağ sitelerinden aynı yolu paylaşması nedeniyle statik sayfaların adlandırılmasıyla ilgili potansiyel çakışmalar ortaya çıkabilir.

Bunu önlemek için WordPress, belirli site isimlerini kara listeye alabileceğiniz bir yöntem sunar; böylece bu isimler ilk sitenin isimleriyle çakışmaz. Genellikle ağ yöneticisi ana sitenin sayfalarının kök yollarını girer.

<!-- Ekran görüntüsü mevcut değil: Çakışmaları önlemek için yasaklanmış site isimlerini gösteren WordPress ağ ayarları -->

_subdomain_ yapılandırmasında ise, _subdomain_ (alt alan adı) sayesinde isim çakışması olasılığı azaltılır; çünkü bu alt alan adı ağ sitesine özgüdür ve ana siteden hiçbir şekilde ilişkili değildir.

### Kayıt (Registration)

WordPress Multisite'ın ağ ayarlarında, yeni kullanıcıların siteler oluşturmasına olanak tanıyan birkaç yeni kullanıcı kayıt seçeneği bulunur; bu sayede hem yeni hem de mevcut kullanıcılar site oluşturabilirler.

<!-- Ekran görüntüsü mevcut değil: WordPress Multisite ağ ayarlarında kayıt seçeneklerini gösteren ekran görüntüsü -->

Bağımsız WordPress kurulumlarının aksine, ağ siteleri kullanıcı kaydı yapma veya bu kayıtları rollere atama gibi tanıdık seçenekleri korumazlar.

<!-- Ekran görüntüsü mevcut değil: WordPress bağımsız site kullanıcı kayıt ayarları sınırlı seçenekleri gösteren ekran görüntüsü -->

Kullanıcı hesapları oluşturulduğunda, bu hesaplar ağ düzeyinde oluşturulur. Bu nedenle, herhangi bir tek bir siteye ait olmak yerine ağa aittirler. Bunun bazı belirgin avantajları ve dezavantajları vardır.

مثال vermek gerekirse, WordPress Multisite'ınız haber ve bilgi işleriyle uğraşıyor olsun. Siz önce multisite'ı kurarsınız ve ardından finans, teknoloji, eğlence ve diğer ilgi alanları için ağ siteleri oluşturursunuz, ancak eklentiler ve temalar üzerinde genel kontrolü elinizde tutarsınız. Her bir ağ sitesi ise kendi ağ sitesinin görünümü ve kullanıcı deneyimi üzerinde özel post tipleri veya normal kategori gibi çok daha fazla kontrole sahip olur.

Bu noktada, bir kullanıcı giriş yaptığında ağa giriş yapar ve nihayetinde sorunsuz bir deneyim sağlamak için her ağ sitesine de giriş yapmış olur. Eğer yeni siteniz abonelik tabanlı olacaksa bu ideal çözüm ve sonuç olacaktır.

Ancak, multisite'ın amaçlanan doğası ve amacının birbirleriyle hiçbir ilişkisi olmayan farklı ağ siteleri sunmak olması durumunda, kullanıcı rollerini değiştirmek için harici veya ek eklentilere ihtiyaç duyulması neredeyse her zaman söz konusudur.

### Alan Adı ve SSL (Domain and SSL)

Dikkatimizi neredeyse kaçırabilecek bir WordPress Multisite kurulumu olan Wordpress.com'dan bahsedelim. Bu, bir Wordpress multisite örneğinin en kapsamlı örneğüdür ve amacına uygun olarak özelleştirilme ve şekillendirilme konusundaki geniş yeteneklerini gösterir.

Günümüzde modern internette SSL kullanmak neredeyse zorunludur ve WordPress multisite yöneticileri yakında bu zorluklarla karşılaşıyorlar.

_subdomain_ (alt alan adı) yapılandırmasıyla siteler ana alan adına göre oluşturulur. Böylece 'site1' olarak etiketlenmiş bir site, 'site1.domain.com' olarak oluşturulur. Wildcard SSL sertifikasından yararlanarak bir ağ yöneticisi bu zorluğun üstesinden gelebilir ve ağ için SSL şifreleme yetenekleri sağlayabilir.

WordPress Multisite-da bir domen eşleştirme funksiyonasyna sahip, bu da ağ sitelerinin özel alan adları veya ağın ana alan adından farklı olan alan adlarıyla ilişkilendirilmesine olanak tanır.

Ağ yöneticileri için bu durum hem alan adı yapılandırması hem de SSL sertifikalarının düzenlenmesi ve bakımı açısından ek bir karmaşıklık yaratır.

Bu noktada, WordPress Multisite [www.anotherdomain.com](http://www.anotherdomain.com)'un 'site1'e eşleştirilmesine olanak sağlasa da, ağ yöneticisi harici DNS kayıtlarını yönetme ve SSL sertifikalarını uygulama zorluğuyla karşı karşıya kalır.

## Ultimate Multisite

Bağımsız bir WordPress kurulumu ile Multisite kurulumu arasındaki farkları anladığımızda, Ultimate Multisite'ın Web Sitesini Hizmet Olarak (WaaS) sunmak için nihai silah olduğunu görelim.

### Giriş

Ultimate Multisite, bir Web Sitesini Hizmet Olarak (WaaS) oluşturma konusunda sizin İsviçre Çakısı'nızdır. Wix.com, Squarespace, WordPress.com gibi platformları düşünün ve sonra kendi hizmetinizi sahip olmayı düşünün.

Arka planda Ultimate Multisite WordPress Multisite'ı kullanır ancak bunu, ağ yöneticilerinin multisite kurulumlarıyla karşılaştığı sayısız zorluğu çözmenin yanı sıra, çok çeşitli kullanım durumlarını destekleyecek yetenekleri artıran bir şekilde yapar.

Aşağıdaki bölümlerde bu durumları desteklemek için gereken bazı yaygın kullanım durumlarını ve dikkate alınması gereken noktaları inceleyeceğiz.

### Kullanım Durumları

#### Durum 1: Bir Ajans

Genellikle bir ajansın temel becerileri, barındırma veya pazarlamanın ek hizmetler olarak listelendiği web sitelerinin tasarımıyla ilgilidir.

Agencies uchun Ultimate Multisite bir platformada birden çox veb saytları dəstəkləmək və idarə etmək qabiliyyətləri ilə inanılmaz qiymət təklifi yaradır. Xüsusilə, əgər agensiyalar GeneratePress, Astra, OceanWP kimi müəyyən temalarda dizaynını standartlaşdırsaldırsa, Ultimate Multisite-ın bu temaları hər yeni sayt üçün avtomatik aktivləşdirmək qabiliyyətindən istifadə edə bilərlər.

Eyni şəkildə, agensiya qiymətləri ilə populyar və yayılmış pluginlər üçün çoxsaylı təkliflərin olması ilə, Ultimate Multisite-dan istifadə etmək agensiyalara mövcud investisiyalarından faydalanma imkanı verir; çünki bu platformadan pluginlər quraşdırıla, idarə oluna və istifadə edilə bilər.

Ən çox ehtiyac duyulan şey konfiqurasiya istifadə etməkdir və xoşbəxtliklə Ultimate Multisite domen xəritələməsi (domain mapping) və SSL sertifikatları üçün inteqrasiyaları ilə bir sıra populyar hosting təminatçıları, Cloudflare və cPanel kimi xidmətlər üzərində bunu inanılmaz dərəcədə asanlaşdırır.

Beləliklə, bu təminatçilərdən birindən istifadə etmək və ya Ultimate Multisite-ı Cloudflare arxasında yerləşdirmək domen idarəçiliyi və SSL sertifikatları kimi aspektləri bəzən sadələşdirir.

Saytların yaradılması üzərində sıx nəzarət saxlamaq istəyən agensiyalar, Ultimate Multisite-ın sadələşdirilmiş interfeysi vasitəsilə saytları müştərilər və planlarla əlaqələndirmək qabiliyyətinə görə bu asanlıqdan məmnun olacaqlar.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Pluginlər və temalar üzərində saytların yaradılması zamanı onların aktivləşmə və gizlənmə vəziyyətini, həmçinin hər bir yeni sayt üçün instansiyalaşdırılarkən mövcud olmasını təmin edən bu sezgir interfeys vasitəsilə Ultimate Multisite tərəfindən hər məhsul üzrə sıx nəzarət saxlanılır.

![Product plugin limitations interface](/img/config/product-plugins.png)

Theme'ler de benzer işlevsellik sunar, bu da sitenin oluşturulması sırasında belirli temaların etkinleştirilmesine veya gizlenmesine olanak tanır.

![Product theme limitations interface](/img/config/product-themes.png)

Ajanslar Ultimate Multisite sayesinde gönül rahatlığıyla çalışabilirler ve en iyi yaptıkları şeyi yapabilirler - olağanüstü web siteleri tasarlamak.

#### Durum 2: Niş Sağlayıcı

"Bir şeyi iyi yapmak" sözü vardır. Birçok uzman için bu, tek bir ana fikir etrafında bir ürün veya hizmet oluşturmak anlamına gelir.

Belki siz kulüplere web siteleri tanıtan tutkulu bir golfçüsünüz ya da klanlara web siteleri sağlayan tutkulu bir e-spor oyuncusunuz. Belki de restoranlara rezervasyon hizmeti tanıtan bir bireysiniz?

Birçok sebeple, ortak bir çerçeve ve platforma dayalı hizmetler sunmak isteyeceksiniz. Gerekli işlevselliği sağlamak için özel plugin'ler tasarlamış veya yatırım yapmış olabilirsiniz ya da sektördeki en iyi uygulamaların tasarım için bir tür standart yaklaşıma ihtiyaç duyması söz konusu olabilir.

Ultimate Multisite'ın yenilikçi özelliklerinden biri şablon sitelerini kullanmaktır. Şablon sitesi, temanın kurulduğu ve etkinleştirildiği, gerekli plugin'lerin kurulduğu ve etkinleştirildiği, ayrıca örnek gönderilerin veya sayfaların oluşturulduğu bir sitedir. Bir müşteri şablona dayalı yeni bir site oluşturduğunda, şablonun içeriği ve ayarları yeni oluşturulan siteye kopyalanır.

Niş siteler ve hizmetleri sağlayan bir sağlayıcı için bu, özel plugin'ler ve tasarımlarla anında hazır bir site oluşturma yeteneğinde eşsiz bir avantaj sağlar. Müşterinin hizmeti tamamlamak için en az girdiyi sağlaması yeterlidir.

تələblərə görə hem _subdirectory_ və ya _subdomain_ konfiqurasiyaları uyğun ola bilər، bu halda arxitektura seçiminiz _subdirectories_ üçün sadə bir SSL sertifikatı və ya _subdomains_ üçün wildcard SSL sertifikası arasında olacaq.

#### 3-ci Hal: WordPress Web Hosting

WordPress saytlarını barmaqadan çox yollar var, lakin müştəriyə WordPress-in hazır versiyasını quraşdırmaqla sadə bir veb sahəsi təmin etmək nadir hallərdir. Bunun səbəbi, mənalı xidmət göstərmək üçün bir neçə qərar və nəzərə alma zaman müvafiq olmalıdır.

Ultimate Multisite bu sahədə WordPress saytlarını host etmək üçün hərtərəfli hazır həll təklif edərək üstünlük əldirir. Bu həlldə abunəlik xidmətləri, ödəniş toplama, checkout formaları, endirim biletləri və müştəri kommunikasiyası üçün əsas mexanizmlər daxildir.

WordPress Multisite-ı düzgün quraşdırmaq, konfiqurasiya etmək və idarə etmək üçün lazım olan əsas işin böyük bir hissəsi Ultimate Multisite tərəfindən asanlaşdırılır; bu o qədərdir ki, şəbəkə administratorları yalnız onların xidməti və ya nişləri ilə bağlı aspektləri, məsələn, məhsul səviyyələri, qiymətləndirmə və xidmət təklifləri kimi məsələləri nəzərdən keçirmək lazımdır.

Ultimate Multisite-a inteqrasiya etmək istəyən developerlər üçün həll həmçinin əhatəli bir RESTful API və hadisələr üçün Webhooks təklif edir.

Bir çox xarici plugin və lisenziyalara güvənmədən, Ultimate Multisite Wix, Squarespace, WordPress.com və digərlərinin həllü ilə müqayisə edilə bilən funksiyalı bir həll təqdim edir.

### Arxitektura Nəzərə Alınması

Bu tam bir bələdçi olmasa da, Ultimate Multisite quraşdırılmasını dəstəkləmək üçün texnologiyaları düzgün seçmək barədə rəhbərlik etməli olan məqamlar bunlardır.

#### Paylaşımlı vs. Dedikodarlı Hosting

هر میزبانی‌کنندگان همگی یکسان نیستند و برخی از آن‌ها از تراکم سرورهای بسیار بالا استفاده می‌کنند. ارائه‌دهندگان کم‌هزینه معمولاً با به حداکثر رساندن تراکم سرور، درآمد کسب می‌کنند. بنابراین نصب Ultimate Multisite شما ممکن است فقط یکی از چند صد سایت در یک سرور باشد.

اگر از طرف ارائه‌دهنده محافظ‌های مناسبی وجود نداشته باشد، سایت‌هایی که روی یک سرور مشترک هستند با مشکل «همسایه پر سر و صدا» روبرو می‌شوند. یعنی سایتی روی همان سرور منابع آنقدر مصرف می‌کند که سایر سایت‌ها مجبورند برای منابع باقی‌مانده رقابت کنند. اغلب این موضوع به شکل سایت‌هایی ظاهر می‌شود که کند هستند یا به موقع پاسخ نمی‌دهند.

به عنوان یک ارائه‌دهنده هاست وب خود، جریان اثرات به این معنی است که مشتریان شما سرعت پایین، رتبه صفحه کم و نرخ پرش بالا را تجربه می‌کنند که اغلب منجر به ریزش مشتری می‌شود زیرا آن‌ها به دنبال خدمات در جاهای دیگر می‌گردند.

خلاصه اینکه، ارزان بودن به معنای خوب بودن نیست.

Ultimate Multisite برای کار با تعدادی ارائه‌دهنده هاست خوب شناخته شده است و با محیط آن‌ها ادغام می‌شود تا عملکردهای مانند نگاشت دامنه (domain mapping) و SSL خودکار را فراهم کند. این ارائه‌دهندگان از عملکرد اهمیت می‌دهند و خدماتی بالاتر از هاست اشتراکی ارائه می‌دهند.

برای لیست ارائه‌دهندگان سازگار و دستورالعمل‌های کامل تنظیم برای هر کدام، لطفاً مستندات Compatible Providers را بررسی کنید.

#### ملاحظات عملکرد (Performance Considerations)

Ultimate Multisite یک برنامه کند نیست، بلکه به طرز شگفت‌انگیزی سریع است. با این حال، عملکرد آن فقط به خوبی اپلیکیشن و زیرساخت اصلی است و تنها از آنچه که به آن دسترسی دارد بهره می‌برد.

این را در نظر بگیرید: شما مدیر شبکه یک نصب Ultimate Multisite با ۱۰۰ سایت هستید. برخی از آن سایت‌ها خوب عمل می‌کنند و هر روز تعداد زیادی بازدیدکننده وب‌سایت جذب می‌کنند.

این سناریو در مقیاس کوچک، مثلاً یک تا پنج سایت، متفاوت خواهد بود، اما قبل از اینکه مشکلات مربوط به مقیاس بزرگ آشکار شوند، این موضوع قابل مشاهده است.

اگر سایت Ultimate Multisite را بدون نظارت رها کنید، این یک سایت واحد مسئول برآورده کردن درخواست‌های همه بازدیدکنندگان از آن سایت‌ها خواهد بود. این درخواست‌ها می‌توانند شامل صفحات PHP پویا یا فایل‌های استاتیک مانند فایل‌های استایل (stylesheets)، جاوا اسکریپت یا رسانه‌ها باشند. چه یک سایت و چه صد سایت، این کارها تکراری، یکنواخت و هدر رفته می‌شوند. وقتی خروجی برای هر درخواست اطلاعات استاتیکی یکسان باشد، نیازی نیست از قدرت CPU و حافظه برای پردازش یک فایل PHP استفاده کنید.

به همین ترتیب، یک درخواست برای یک صفحه PHP یا HTML به نوبه خود چندین درخواست بعدی را برای اسکریپت‌ها، استایل‌ها و فایل‌های تصویر ایجاد می‌کند. این درخواست‌ها مستقیماً به سرور Ultimate Multisite شما هدایت می‌شوند.

می‌توان با ارتقاء سرور می‌توان این مشکل را راحت حل کرد، اما این کار یک مشکل ثانویه یعنی تأخیرهای جغرافیایی را برطرف نمی‌کند. فقط چندین سرور در مکان‌های مختلف می‌توانند بتوانند به طور مناسب به این مشکل پاسخ دهند.

به همین دلیل اکثر مدیران شبکه از راهکارهای کش فرانت‌اند (front-end caching solutions) و شبکه‌های توزیع محتوا (CDN) برای برآورده کردن درخواست‌های صفحات استاتیک استفاده می‌کنند. برآورده کردن این درخواست‌ها و سرویس‌دهی به دارایی‌ها قبل از رسیدن درخواست به سرور، منابع پردازشی را ذخیره می‌کند، تأخیرها را از بین می‌برد، ارتقاءهای غیرضروری را از میان برمی‌دارد و سرمایه‌گذاری‌های تکنولوژی را به حداکثر می‌رساند.

Ultimate Multisite شامل یک افزونه پیشرفته Cloudflare است که به مدیران شبکه اجازه می‌دهد نصب خود را پشت Cloudflare قرار دهند و نه تنها از قابلیت کش آن، بلکه از هاستینگ DNS، گواهی‌های SSL و مکانیزم‌های امنیتی نیز استفاده کنند.

#### بک‌آپ‌ها (Backups)

می‌توانید از ۵۰ نفر برای مشاوره در مورد بک‌آپ‌ها بخواهید و به ۵۰ نظر مختلف در استراتژی‌های بک‌آپ برسید. پاسخ این است: بستگی دارد.

شاید منازع‌شون نبود که بکاپ گرفتن لازم است و تقریباً غیرقابل تصور است که این کارها توسط ارائه‌دهنده، مخصوصاً یک سرویس مدیریت‌شده‌ای توسط او انجام نشود. بنابراین مشتریان این سرویس را فراهم کردن و مدیریت کردن برای مدیر شبکهye مراجعه edeceklerdir. اما مدیر شبکهye kimlere bakılacağı tamamen farklı bir problemdir.

Bu bölüm için, bir yedeklemenin, yedeğin başlatıldığı andaki sistem durumunun o anki bir kopyası olduğunu kabul edelim. Basitçe söylemek gerekirse, yedekleme anındaki sistemin durumu yakalanır ve yedekte kilitlenir.

Bu anlayışla birlikte, yedeklemeleri nasıl gerçekleştireceğiniz ve ortamınız için en iyisi ne olacağı büyük ölçüde gereksinimlerinize ve barındırma sağlayıcısının bu gereksinimleri karşılayabilme yeteneğine bağlı olacaktır. Ancak, en çok fikir sahibi olandan en az fikir sahibi olana doğru sıralandığında, aşağıdaki seçenekler size bir rehberlik sağlayacaktır.

#### Snapshots (Anlık Görüntüler)

Snapshots yedeklemeler için altın çözümlerdir çünkü kolaydır, karmaşık değildir (geri yüklemek istediğiniz an hariç) ve 'sadece çalışır'. Ancak bu, sağlayıcınızdan biraz yardım gerektirir ve çoğunlukla bir VPS'iniz (Sanal Özel Sunucu) veya benzeri bir şeyiniz varsa geçerlidir. "Uyumluluk Sağlayıcılar" dokümantasyonumuzda listelenen birkaç sağlayıcı, ağ yöneticisinin daha fazla müdahale etmesine veya düşünmesine gerek kalmadan yedekleme gerektiren yedeklemeler sunar.

سنتی بک‌آپ‌ها فایل‌ها و دیتابیس‌ها را هدف قرار می‌دهند، اما اسنپ‌شات (snapshot) کل دیسک را هدف می‌گیرد. این بدان معناست که فقط داده‌های سایت در اسنپ‌شات ثبت نمی‌شوند، بلکه سیستم عامل و تنظیمات هم ذخیره می‌شوند. برای بسیاری این یک مزیت متمایز است زیرا می‌توان تقریباً بلافاصله از یک اسنپ‌شات یک سیستم جدید ایجاد کرد و آن را برای جایگزینی نمونه‌ای که مشکل دارد به کار انداخت. به همین ترتیب، فایل‌ها را بازیابی करने वाली بازسازی فرآیند فقط نیاز به اتصال تصویر اسنپ‌شات به عنوان دیسک به یک نمونه موجود دارد تا بتوان به فایل‌ها دسترسی پیدا کرد و آن‌ها را کپی نمود.

اسنپ‌شات ممکن است با ارائه‌دهنده هاست هزینه اضافی داشته باشد، اما این یک بیمه در برابر حوادث است.

#### اسکریپت‌های خارجی (External Scripts)

برای بک‌آپ گرفتن منابع وردپرس و MySQL وجود کم نیست که از آن‌ها استفاده کرد، و این‌ها برای Ultimate Multisite که از فایل سیستم و دیتابیس وردپرس استفاده می‌کند یک گزینه خوب خواهد بود. بنابراین، یک راه‌حل که سایت‌های وردپرسی را بک‌آپ بگیرد، نیازهای Ultimate Multisite را به خوبی پوشش می‌دهد.

ما نمی‌توانیم هیچ اسکریپت را بر دیگری توصیه کنیم، اما توصیه کلی ما این است که نتایج مورد نظر باشد را تضمین کردن برای اینکه مطمئن شویم و به‌ویژه جایی که نوعی استراتژی بک‌آپ تفاضلی (differential backup strategy) اعمال می‌شود، با مداوم ارزیابی اسکریپت و عملکرد آن «مطمئن باش».

باید توجه داشت که این اسکریپت‌ها در حال اجرا هستند سیستم بار را افزایش خواهند داد که باید در نظر گرفته شود.

#### پلاگین‌ها (Plugins)

در وردپرس تقریباً هیچ مشکلی وجود ندارد که با یک پلاگین حل نشود و اگر مدیریت اسکریپت‌های خارجی برای شما مناسب نیست، شاید پلاگین گزینه بعدی باشد.

پلاگین‌ها seçenekler ve özellikler açısından farklılık gösterse de, çoğunlukla aynı işlevi yerine getirirler: WordPress dosyalarını ve veritabanı içeriğini kopyalamak. Bundan sonra işlevsellik değişir; bazı plugin'ler yedeklemeleri Google Drive veya Dropbox gibi harici servislere ya da S3, Wasabi gibi uyumlu nesne depolama servislerine gönderebilir. Daha kapsamlı plugin'ler ise harici depolama maliyetlerini düşürmek için sadece değişmiş verileri yedekleme (differential backups) veya benzeri bir strateji sunar.

Plugin seçerken, bunun multisite uyumlu olup olmadığını kontrol etmeye özen gösterin. Yedekleme çalışırken sunucuda geçici bir yük bekleyebilirsiniz.

#### Alan Adı ve SSL

Multisite _subdomain_ modunda alan adları hakkında çok şey tartışıldı. Ağ yöneticileri için neredeyse evrensel bir çözüm, joker karakter DNS kayıtlarından yararlanmaktır.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Bu tür bir DNS kaydı, ‘site1.domain.com’ ve ‘site2.domain.com’ gibi _subdomain_leri 1.2.3.4 IP adresine başarıyla yönlendirir ve bu da Ultimate Multisite'ı ve daha geniş ölçüde WordPress Multisite'ı _subdomain_ modu kullanarak destekler.

Bu, HTTP için mükemmel çalışabilir çünkü hedef sunucu HTTP başlıklarından okunur, ancak günümüzde güvenli HTTPS işlemlerinin neredeyse zorunlu olduğu kadar web siteleri bu kadar basit değildir.

Shukr, SSL sertifikatlar uchun oson variantlar mavjud. _subdirectory_ rejimida oddiy domen sertifikatini ishlatish mumkin. Bular hosting provayderlaridan bepul yoki erkin bo'lib olish mumkin, ular LetsEncrypt kabi bepul xizmatlardan foydalanishlari yoki boshqa manbalardan foydalanishlari mumkin. Aks holda, agar siz sertifikat imzol so'rovini (certificate signing request) yaratish qobiliyatiga ega bo'lsangiz, ular otoritetlar tomonidan savdo bilan mavjud bo'ladi.

_subdomain_ rejimida, wildcard SSL sertifikatidan foydalanish wildcard domen bilan mukammal mos keladi va sertifikatni asosiy domen uchun hamda barcha _subdomainlar_ uchun qo'llab-quvvatlash uchun hech qanday qo'shimcha sozlamasiz ishlatish mumkin.

Biroq, wildcard SSL sertifikatlari Cloudflare kabi xizmatlar bilan ishlashi mumkin emasligini eslab qolish kerak, agar siz korporativ (enterprise) rejada bo'lmasangiz yoki kirishni faqat DNS-da qilishni belgilamasangiz, bu holda barcha caching va optimallashtirish o'chiriladi.

Out-of-the-box Ultimate Multisite ushbu muammoning yechimini taqdim etadi va WordPress multisite ehtiyojlari bilan tajribamizni ko'rsatadi. Bu oddiy add-onni faollashtirish orqali Ultimate Multisite sizning Cloudflare ma'lumotlaringizdan foydalanib, tarmoq saytlari uchun DNS yozuvlarini avtomatik ravishda Cloudflare'ga qo'shadi va ularning rejimini 'proxied' (proksi) deb belgilaydi. Bu tarzda har bir tarmoq sousiti yaratilganda, SSLni o'z ichiga olgan Cloudflarening to'liq himoyasi va afzalliklari bo'ladi.

Ultimate Multisite o'rnatilganingizning tabiati va maqsadi haqida bog'liq ravishda mijozlarning o'z domenlaridan foydalanishga ehtiyoj tug'ilishi mumkin. Bu holda tarmoq administrator ikki muammoni hal qilish uchun javobgar bo'ladi: birinchisi, domen nomini joylashtirish va ikkinchisi esa domain uchun SSL sertifikatlarini olish.

Çoğumuz için Cloudflare kullanmak kolay bir seçenek. Müşterinin sadece alan adını Cloudflare'e koyması, Ultimate Multisite'ın ana alan adına CNAME yönlendirmesi yapması ve kendi alan adını Ultimate Multisite'ta eşleştirmesi yeterli olur ki özel alan adınızdan faydalanmaya başlayabilesiniz.

Bunun dışında, alternatif çözümler aranmalı ki bu yüzden Ultimate Multisite Uygun Sağlayıcılar listesini önermektedir. Bunun nedeni DNS ve SSL ayarlama sürecinin biraz karmaşık olabilmesidir. Ancak Ultimate Multisite'ın bu sağlayıcılarla entegrasyonu sayesinde karmaşıklık çok azalır ve işlem otomatikleşir.

#### Pluginler

Müşterilerinize veya ağ sitelerinize işlevsellik sağlamak için ek pluginlere ihtiyacınız olma ihtimaliniz oldukça yüksektir. Tüm pluginler WordPress Multisite ve Ultimate Multisite ile çalışır mı? Bu, duruma bağlıdır.

Çoğu plugin WordPress Multisite'a kurulabilir olsa da etkinleştirme ve lisanslama yazardan yazıya değişir.

Zorluk, bazı pluginlerin domain başına lisans gerektirmesi durumunda lisanslamanın nasıl uygulandığıdır. Bu, bazı pluginler için ağ yöneticisinin her yeni sitede her plugin için lisansı manuel olarak etkinleştirmesi gerektiği anlamına gelir.

Bu nedenle, plugin yazarından plugin'in WordPress Multisite ile nasıl çalışacağı ve onu lisanslamak için gereken özel gereksinimler veya prosedürler olup olmadığı konusunda sormanız en iyisi olabilir.
