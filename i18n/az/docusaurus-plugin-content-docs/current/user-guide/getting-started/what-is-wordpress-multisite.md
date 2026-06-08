---
title: WordPress Multisite nədir?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# WordPress Multisite nədir?

WordPress öz əsasında ‘Multisite’ adlı bir funksionallıq təqdim edir ki, bu funksionallığın kökləri 2010-cu ildə, WordPress 3.0-ın çıxarılması ilə izlənilir. O vaqtdan bəri, yeni funksionallıqlar əlavə etmək və təhlükəsizliyi gücləndirmək məqsədi daşıyan bir sıra yeniləmələr alıb.

Əsasında, WordPress multisite-ı belə düşünə bilərsiniz: Bir universitet tək bir WordPress qurulumundan istifadə edir, lakin hər fakültə öz WordPress saytını idarə edir.

##

## WordPress Multisite tam olaraq nədir?

Multisite, bir neçə saytın tək bir WordPress qurulumundan istifadə etməsinə imkan verən bir WordPress funksionallığıdır. Multisite aktivləşdirildikdə, orijinal WordPress saytı adətən **sayt şəbəkəsi** adlandırılan bir quruluşu dəstəkləmək üçün dəyişdirilir.

Bu şəbəkə fayl sistemini (bu o deməkdir ki, **plugin və temalar da paylaşılır**), verilənlər bazasını, WordPress əsas fayllarını, wp-config.php və s. paylaşır.

Bu o deməkdir ki, fayl sistemində eyni faylları paylaşdıqları üçün WordPress, tema və plugin yeniləmələri bütün şəbəkə saytlarınız üçün yalnız bir dəfə aparılmalıdır.

Bu fakt, multisite-ın əsas üstünlüklərindən biridir, çünki siz müştərilərinizin saytlarını saxlamaq üçün lazım olan işlərin sayını eyni tutaraq idarə etdiyiniz saytların sayını artırmağa imkan verir.

##

## Subdomain yoxsa Subdirectory?

WordPress multisite-ı işlətməyin iki rejimi var – və adi WordPress qurulumunuzu multisite qurulumuna çevirərkən bunlardan birini seçməlisiniz:

**Subdomain:** məs.: [site.domain.com](http://site.domain.com)

…yoxsa

**Subdirectory:** məs.: [yourdomain.com/site](http://yourdomain.com/site)

Hər rejim, bu qərarı verərkən nəzərə almanız lazım olan üstünlüklər və çatışmazlıqlar daşıyır.

Bununla bağlı nəzərə alınması vacib bir şey var: qərarınızı verdikdən sonra, şəbəkənizi subdirectory-dən subdomain-ə və ya əksinə dəyişdirmək çox çətindir – xüsusilə əlinizdə artıq bir neçə sayt varsa.

Bu qərarı verməzdən əvvəl, nəzərdə saxlamaq üçün bir neçə məqam var:

**Subdirectory Rejimi** qurulması və idarə edilməsi baxımından ən asan rejimlərdən biridir. Bu, çünki bütün saytlar əsas domenə qoşulmuş yollardır (məsələn, [yourdomain.com/subsite](http://yourdomain.com/subsite)). Nəticədə, yalnız əsas domen üçün **bir SSL sertifikatı** kifayətdir və bu, bütün şəbəkəni əhatə edir.

Eyni zamanda, URL quruluşu səbəbindən, Google və digər axtarış motorları subdirectory əsaslı şəbəkənizdəki bütün alt saytları bir böyük sayt kimi qəbul edəcəklər. Nəticədə, son müştərilərinizin alt saytlara əlavə etdiyi məzmun, məsələn, sizin ana saytınızın SEO performansına təsir edə bilər. Təsir səviyyəsi mübahisəli bir mövzudur və belə bir quruluşun SEO performansı üçün hətta faydalı ola biləcəyi arqumentlər mövcuddur.

**Subdomain Rejimi** qurmaq bir az daha mürəkkəbdir, lakin onun URL quruluşu (məsələn, [subsite.yournetwork.com](http://subsite.yournetwork.com)) ümumiyyətlə "daha peşəkar" görünür.

Subdomain rejimini qurmaqda əsas çətinliklərdən biri bütün şəbəkə üçün SSL əhatəsidir (HTTPS). Bu, brauzerlərin alt domenləri təcrid olunmuş varlıqlar kimi qiymətləndirməsi faktına bağlıdır. Nəticədə, şəbəkənizdəki hər alt domen üçün fərqli SSL sertifikatı və ya **Wildcard SSL sertifikatı** adlanan xüsusi bir sertifikat lazım olacaq. Son illərdə, hosting provayderləri və panellər SSL təminatı baxımından özlərini inkişaf etdirir və bəziləri düymə klikləməklə wildcard sertifikatları təklif edərək, qurulması baxımından iki rejim arasındakı boşluğu doldurur.

Subdirectory rejiminin əksinə, subdomain əsaslı şəbəkədəki alt saytlar axtarış motorları tərəfindən ayrı veb saytlar kimi qəbul edilir, bu da o deməkdir ki, bir alt saytda olan məzmun digər alt saytların SEO performansına heç bir təsir etmir.

## Super Admin

Tək saytlı WordPress qurulumları sizə məhdudiyyətsiz sayda istifadəçi əlavə etməyə və bu istifadəçilərə fərqli icazələr və fərqli istifadəçi rolları verməyə imkan verir.

WordPress Multisite-da yeni bir istifadəçi tipi açılır: **super admin** – və yeni bir admin paneli açılır: **şəbəkə admin paneli**.

Adından da göründüyü kimi, super admin şəbəkə üzərində super güclərə malikdir, bütün alt saytlarını, pluginlərini, temalarını, hər şeyini idarə etmə qabiliyyətinə malikdir!

Tək saytlı WordPress qurulumunuzu multisite-a çevirdiyiniz zaman, tək saytın orijinal admini avtomatik olaraq super adminə yüksəldiriləcək.

Pluginlər və temalar yalnız super adminlər tərəfindən şəbəkə admin panelindən quraşdırıl və ya silinə bilər. Alt sayt adminləri isə bu pluginləri və ya temaları aktiv etmək və ya deaktiv etmək seçimini edə bilərlər, əgər super admin şəbəkəsi bir plugin aktiv etmirsə, bu, bütün alt saytlar üçün daimi olaraq aktiv olaraq qalır.

_Qeyd: Gördüyünüz kimi, kimisə şəbəkənizə dəvət etmək və ona super admin statusu vermək bu istifadəçiyə şəbəkəniz üzərində tam nəzarət verir. Məsələn, digər super adminlər hətta sizin super admin statusunuzu silə bilər, bu da sizi öz şəbəkə admin panelinizindən effektiv şəkildə uzaqlaşdırır. Ultimate Multisite müştərilərinə əlavə super adminlərin nə edə biləcəyi barədə incə nəzarət etməyə imkan vermək üçün, "Support Agents" adlı bir add-onumuz var. Bu add-on sizə həmçinin bir növ istifadəçi – agent yaratmağa imkan verir və bu agent yalnız öz vəzifələrini yerinə yetirmək üçün lazım ola biləcəyi icazələrə malik olur._

## Alt saytlarda nə paylaşılır və nə paylaşılmır

Əvvəl qeyd etdiyimiz kimi, WordPress multisite-ın əsas üstünlüklərindən biri bütün alt saytların eyni konfiqurasiyaları, əsas faylları, temaları, pluginləri, WordPress əsas faylları və s. paylaşmasıdır.

Bununla belə, alt sayt başına nəzərdə tutulmuş elementlər də mövcuddur.

\- Məsələn, hər alt sayt öz yükləmələr (uploads) qovluğunu alır. Nəticədə, müəyyən bir alt saytın istifadəçiləri tərəfindən edilən yükləmələr başqa bir alt saytda əlçatan olmur.

\- Hər alt sayt öz ayrılmış admin paneli ilə sahibdir və super admin tərəfindən şəbəkə aktiv edilməmiş olduqda, pluginləri və ya temaları aktiv etmək və ya deaktiv etmək qabiliyyətinə malikdir.

\- Əksər verilənlər bazası cədvelləri hər alt sayt üçün yaradılır, bu o deməkdir ki, yazılar, şərhlər, səhifələr, parametrlər və s. hər alt sayt üçün nəzərdə tutulur.

## WordPress Multisite-da istifadəçi idarəetməsi

WordPress multisite-da incə bir mövzu istifadəçi idarəetməsidir. WordPress istifadəçi cədvəli bütün alt saytlar arasında paylaşılan az saylı cədvəllərdən biridir.

Bu quruluş, şəbəkənizlə nə qurmağı planlaşdırdığınıza bağlı olaraq bəzi problemlər yarada bilər. Aşağıdakı nümunə ən təcili olanını izah etməyə kömək edir.

Aşağıdakı ssenarini təsəvvür edin:

Siz bir WordPress multisite şəbəkəsi yaradırsınız və e-commerce mağazası sahibi olmaq istəyən insanlara alt saytlar təklif etməyə başlayırsınız.

İlk ödəniş edən müştərinizi – John-u əldə edirsiniz. John üçün şəbəkənizdə bir sayt yaradırsınız, bütün zəruri pluginləri quraşdırır, sonra da John-un mağazasını idarə etməsi üçün ona bir istifadəçi yaradırsınız.

Sonra ikinci müştəri – Alice gəlir. Onun üçün də eyni şeyi edirsiniz və o da artıq şəbəkənizdə bir mağazaya malikdir.

John və Alice hər ikisi sizin müştərilərinizdir, lakin bir-birini tanımırlar. Daha əsası, əgər onlardan biri digərinin mağaza saytını ziyarət edərsə, bu mağazanın eyni sayt şəbəkəsində yerləşdiyini bilməyin yolları yoxdur.

Bir gün John yeni bir cüt ayaqqabı almaq istəyir və Alice-in mağazasında mükəmməl olanı tapır. Alış-verişi bitirməyə çalışanda, "email already in use" (elektron poçt artıq istifadə olunub) xətası alır, bu da çaşqınlıqdır, çünki John 100% əmin ki, Alice-in saytını ziyarət etməsi bu ilk dəfədir.

Burada baş verən şey ondan ibarətdir ki, John-un istifadəçisi bütün şəbəkə boyunca paylaşılır, buna görə də o, Alice-in saytında hesab yaratmağa çalışanda, WordPress eyni elektron poçt ünvanına malik bir istifadəçinin artıq mövcud olduğunu aşkarlayır və bir xəta verir.

_Qeyd: İstifadə ssenariyinizə bağlı olaraq nə qədər pis ola biləcəyini başa düşürük, buna görə də Ultimate Multisite-da mövcud istifadəçi üçün adi yoxlamaları atlayaraq, eyni elektron poçt ünvanından bir neçə hesab yaradılmasına imkan verən bir seçim var. Hər hesab bir alt sayta bağlıdır, buna görə də toqquşma riski minimumda saxlanılır. Yuxarıdakı nümunədə, John xəta mesajı almaz və o ayaqqabıları problem olmadan ala bilər. Bu seçim "Enable Multiple Accounts" adlanır və Ultimate Multisite → Settings → Login & Registration-da aktiv edilə bilər._

İstifadəçi cədvəli paylaşılsa da, alt sayt adminləri və ya super admin tərəfindən alt saytlara istifadəçilər əlavə edilə və ya silinə bilər və onlar müxtəlif alt saytlarda fərqli istifadəçi rollarına malik ola bilərlər.

## Performans nəzərdən keçirilməsi

WordPress multisite, dəstəkləyə biləcəyi sayt sayı baxımından həqiqətən güclüdür. Bu, [WordPress.com](https://WordPress.com), Edublogs və Campuspress-in hamısının multisite əsaslı xidmətlər olması və hər birinin minlərlə sayta ev sahibliyi etməsi faktı ilə yoxlanıla bilər.

Nəzəri olaraq tək bir WordPress multisite qurulumunda neçə sayt ev sahibliyi edə biləcəyinizə dair maksimum limit olmasa da, praktikada nə qədər saytı məmni edici şəkildə idarə edə biləcəyiniz bir sıra fərqli amillərdən asılı olaraq böyük fərqlilik göstərə bilər: saytlar nə qədər dinamikdir, alt saytlara hansı pluginlər mövcuddur və s.

Ümumi qayda olaraq, şəbəkəniz nə qədər sadə olsa, o qədər yaxşıdır. Məzmunu həqiqətən dinamik olmayan saytlara üstünlük vermək (bu onları aqressiv caching strategiyaları üçün əla namizədlər edir) və plugin yığınını mümkün qədər yüngü saxlamaq (aktiv pluginlərin sayı nə qədər az olsa, o qədər yaxşıdır) idarə edə biləcəyiniz alt sayt sayını kəskin şəkildə artdıra bilər.

Ən yaxşı tərəfi odur ki, burada hər şey WordPress olduğu üçün, performans yaxşılaşdırması üçün artıq bildiyiniz və sevdiyiniz eyni alətlər multisite şəbəkəsi üçün də işləyəcək.

Multisite üçün əsas darboğaz verilənlər bazasıdır, lakin digər hər şey düzgün qurulsa, bu barədə narahat olmaq üçün bir neçə min sayt keçə bilər. Hətta o zamanlar belə, bu mərhələdə tədricən əlavə edilə biləcək həll yolları var (məsələn, verilənlər bazası sharding həll yolları).
