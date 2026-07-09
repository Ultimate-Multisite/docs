---
title: Sayt Şablonları
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Sayt Şablonları (v2)

_**QEYD: Bu məqalə Ultimate Multisite 2.x versiyasına aiddir. Əgər 1.x versiyasından istifadə edirsinizsə,**_ **bu məqaləyə baxın** _**.**_

Ultimate Multisite ilə premium şəbəkə yaradarkən məqsədimiz müştərilərimizə vebsaytlarını yaradarkən çeviklik və seçmək üçün müxtəlif seçimlər verməklə yanaşı, mümkün qədər çox prosesi avtomatlaşdırmaqdır. Bu balansı əldə etməyin asan yollarından biri Ultimate Multisite Sayt Şablonları funksiyasından istifadə etməkdir.

## Sayt Şablonu nədir?

Adından da göründüyü kimi, Sayt Şablonu şəbəkənizdə yeni saytlar yaradılarkən əsas kimi istifadə oluna bilən başlanğıc saytdır.

Bu o deməkdir ki, əsas sayt yarada, müxtəlif plugin-ləri aktivləşdirə, aktiv theme təyin edə və onu istədiyiniz şəkildə fərdiləşdirə bilərsiniz. Sonra müştəriniz yeni account yaratdıqda, daxilində mənalı məzmun olmayan standart WordPress saytı almaq əvəzinə, bütün fərdiləşdirmələr və məzmunlar əvvəlcədən hazır olan əsas saytınızın surətini alacaq.

Bu çox yaxşı səslənir, bəs yeni sayt şablonunu necə yarada bilərəm? Bu, mümkün qədər sadədir.

## Yeni Sayt Şablonunun yaradılması və redaktə edilməsi

Sayt Şablonları şəbəkənizdəki adi saytlardır. Yeni şablon yaratmaq üçün sadəcə **Şəbəkə Admini > Ultimate Multisite > Saytlar > Sayt Əlavə Et** bölməsinə gedə bilərsiniz.

**![Saytlar siyahısı səhifəsində sayt əlavə et düyməsi](/img/config/site-templates-list.png)**

Bu, **Sayt başlığı, Sayt Domeni/yolu** və **Sayt növü**nü soruşan modal pəncərə açacaq. **Sayt Növü** açılan sahəsində **Sayt Şablonu** seçdiyinizə əmin olun *.*

_![Sayt növü açılan menyusu olan sayt şablonu əlavə et modalı](/img/config/site-templates-list.png)_

Şablonun nələri əhatə etdiyini izah etmək üçün müştəriyə görünən təsvir də əlavə edə bilərsiniz:

![Sayt şablonunu redaktə ekranında sayt şablonu təsviri sahəsi](/img/config/site-template-edit-description.png)

Formanın aşağı hissəsində **Saytı Kopyala** keçid düyməsini görəcəksiniz. Bu, sıfırdan sayt şablonu yaratmaq əvəzinə vaxta qənaət etməyinizə kömək etmək üçün başlanğıc nöqtəsi kimi mövcud sayt şablonu əsasında yeni sayt şablonu yaratmağa imkan verəcək.

![Saytı kopyala keçidi olan sayt şablonu əlavə et modalı](/img/config/site-templates-list.png)

### Sayt Şablonunun məzmunlarının fərdiləşdirilməsi

Sayt şablonunuzu fərdiləşdirmək üçün sadəcə onun dashboard panelinə keçin və lazım olan dəyişiklikləri edin. Yeni yazılar, səhifələr yarada, plugin-ləri aktivləşdirə və aktiv theme-ni dəyişə bilərsiniz. Hətta Customizer-ə gedib hər cür fərdiləşdirmə seçimlərini dəyişə bilərsiniz.

![Sayt şablonunu redaktə interfeysi](/img/config/site-template-edit.png)

Müştəri həmin Sayt Şablonu əsasında yeni sayt yaratdıqda bütün bu məlumatlar kopyalanacaq.

### Qabaqcıl Seçimlər

Əgər xüsusi kodlaşdırma ilə işləməyi bilirsinizsə, yeni sayt yaradıldıqdan sonra oradakı məlumatları avtomatik əvəz etmək üçün Search and Replace API-mizdən istifadə edə bilərsiniz. Bu, Haqqımızda səhifəsində şirkət adlarını əvəz etmək, Əlaqə səhifəsində əlaqə emailini dəyişmək və s. kimi hallar üçün faydalıdır.

### Sayt Şablonlarından istifadə

Yaxşı, müxtəlif dizaynlar, theme-lər və ayarlarla bir çox fərqli Sayt Şablonu yaratdınız. İndi onları şəbəkənizdə necə faydalı edirsiniz?

Əsasən, indi istifadə edə biləcəyiniz iki yanaşma var (eyni vaxtda deyil):

  * Planlarınızın hər birinə bir Sayt Şablonu əlavə etmək

**VƏ YA**

  * Qeydiyyat zamanı müştərilərinizə sayt şablonlarını özlərinin seçməsinə imkan vermək.

#### Rejim 1: Sayt Şablonu Təyin Et

Bu rejimdə müştəriləriniz account yaratdıqları zaman şablon seçə bilməyəcəklər; bunun əvəzinə hər Planınızda hansı şablondan istifadə olunacağını siz müəyyən edəcəksiniz.

Bunu etmək üçün **Ultimate Multisite > Məhsullar > Redaktə et** bölməsinə getməlisiniz.

![Sayt şablonu təyin etmək üçün məhsulu redaktə et](/img/config/product-site-templates.png)

Bu sizi **Məhsulu Redaktə Et** səhifəsinə aparacaq. **Məhsul Seçimləri** bölməsində **Sayt şablonu** tabını tapın və açılan sahədən **Sayt Şablonu Təyin Et** seçimini seçin. Bu, mövcud sayt şablonlarının siyahısını göstərəcək və məhsula həsr olunmuş yalnız bir sayt şablonu seçməyə imkan verəcək.

![Sayt şablonu təyin et seçimi olan məhsul sayt şablonu tabı](/img/config/product-site-templates.png)

#### Rejim 2: Mövcud Sayt Şablonunu Seç

Bu rejimdə qeydiyyat prosesi zamanı müştərilərinizə seçim imkanı verəcəksiniz. Onlar məhsul ayarları altında müəyyən etdiyiniz müxtəlif sayt şablonları arasından seçə biləcəklər. Seçilmiş məhsul altında onların seçə biləcəyi sayt şablonunu məhdudlaşdırmaq seçiminiz var. Bu, daha yüksək qiymətli məhsul üçün müxtəlif funksiyaları və xüsusiyyətləri vurğulamaq baxımından ideal olan, hər məhsul altında fərqli sayt şablonu dəstlərinə sahib olmağa imkan verəcək.

**Məhsulu Redaktə Et** səhifəsində. **Məhsul Seçimləri** bölməsində **Sayt şablonu** tabını tapın və açılan sahədən **Mövcud Sayt Şablonunu Seç** seçimini seçin. Bu, mövcud sayt şablonlarının siyahısını göstərəcək və əlçatan olmasını istədiyiniz sayt şablonunu seçməyə imkan verəcək. Bunu onun Davranışını seçməklə edə bilərsiniz: sayt şablonunun siyahıya daxil edilməsini istəyirsinizsə **Mövcud**. Sayt şablonunun seçim kimi görünməməsini istəyirsinizsə _**Mövcud Deyil**_. Siyahıda olan sayt şablonlarından birinin standart seçilmiş olmasını istəyirsinizsə **Əvvəlcədən seçilmiş**.

![Davranış seçimləri ilə mövcud sayt şablonlarını seç](/img/config/product-site-templates.png)

### Standart Rejim: Checkout formasında sayt şablonu seçimi

Əgər bütün sayt şablonlarınızın qeydiyyat zamanı əlçatan olmasını istəyirsinizsə və ya yaratdığınız hər məhsul altında sayt şablonlarını təyin etmək və ya dəqiqləşdirmək kimi əlavə iş görməyə üstünlük vermirsinizsə. O zaman sayt şablonu seçimini sadəcə **Checkout Formanız** altında təyin edə bilərsiniz. Bunu etmək üçün **Ultimate Multisite > Checkout Formaları** bölməsinə gedin və konfiqurasiya etmək istədiyiniz formanın altında **Redaktə et** düyməsinə klikləyin.

Bu, **Checkout Formasını Redaktə Et** səhifəsini açacaq. **Şablon Seçimi** sahəsini tapın və onun altında **Redaktə et** düyməsinə klikləyin.

Modal pəncərə görünəcək. **Şablon Saytlar** sahəsində qeydiyyat zamanı əlçatan olmasını istədiyiniz bütün sayt şablonlarını seçə və siyahıya əlavə edə bilərsiniz. Buradan göstərdiyiniz sayt şablonları istifadəçinin seçdiyi məhsuldan asılı olmayaraq əlçatan olacaq.

![Ödəniş forması redaktorunda şablon seçimi sahəsi](/img/config/checkout-form-template-step.png)

Ön tərəfdə müştərilər ödəniş zamanı şablon seçicisini görür və yeni saytları üçün başlanğıc dizaynı seçə bilirlər.

![Qeydiyyat zamanı ön tərəfdə şablon seçicisi](/img/config/frontend-template-chooser.png)

### Sayt Şablonu Seçimləri

Ultimate Multisite ayarlarında aktivləşdirib-deaktivləşdirə biləcəyiniz başqa sayt şablonu funksiyaları da mövcuddur.

![Ultimate Multisite ayarlarında sayt şablonu seçimləri](/img/config/settings-sites-templates-section.png)

#### Şablon Dəyişdirməyə İcazə Ver

Bu seçimi aktivləşdirmək müştərilərinizə qeydiyyat prosesi zamanı seçdikləri şablonu Account və sayt yaradıldıqdan sonra dəyişdirməyə imkan verəcək. Bu, müştəri baxımından faydalıdır, çünki sonradan ilkin seçimlərinin konkret ehtiyacları üçün ən yaxşı seçim olmadığını aşkar etsələr, şablonu yenidən seçmələrinə imkan yaradır.

#### İstifadəçilərə öz Saytlarını şablon kimi istifadə etməyə icazə ver

Alt sayt istifadəçiləri öz saytlarını qurmağa və dizayn etməyə vaxt sərf etdikləri üçün, şəbəkənizdə başqa bir alt sayt yaradarkən onu klonlayıb mövcud sayt şablonlarından biri kimi istifadə etmək istəyə bilərlər. Bu seçim onlara bunu etməyə imkan verəcək.

#### Şablon Dublikasiyası zamanı Medianı Kopyala

Bu seçimi işarələmək şablon saytına yüklənmiş medianı yeni yaradılmış sayta kopyalayacaq. Bu, hər bir plan üzrə ayrıca dəyişdirilə bilər.

#### **Axtarış Motorlarının Sayt Şablonlarını indeksləməsinin qarşısını al**

Bu məqalədə müzakirə edildiyi kimi sayt şablonları hazır baza olsa da, yenə də şəbəkənizin bir hissəsidir; bu isə onların axtarış motorları tərəfindən tapıla biləcəyi deməkdir. Bu seçim sayt şablonlarını gizlətməyə imkan verəcək ki, axtarış motorları onları indeksləyə bilməsin.

## Avtomatik axtarış və əvəzetmə ilə Sayt Şablonlarının əvvəlcədən doldurulması

Ultimate Multisite-in ən güclü xüsusiyyətlərindən biri qeydiyyat formasına ixtiyari mətn, rəng və seçim sahələri əlavə etmək imkanıdır. Həmin məlumatları topladıqdan sonra onlardan seçilmiş sayt şablonunun müəyyən hissələrində məzmunu əvvəlcədən doldurmaq üçün istifadə edə bilərik. Sonra yeni sayt yayımlanarkən Ultimate Multisite yer tutucuları qeydiyyat zamanı daxil edilmiş real məlumatlarla əvəz edəcək.

Məsələn, qeydiyyat zamanı son istifadəçinizin şirkət adını almaq və şirkət adını avtomatik olaraq ana səhifəyə yerləşdirmək istəyirsinizsə. Şablon saytınızın ana səhifəsində aşağıdakı şəkildə olduğu kimi yer tutucuları əlavə etməlisiniz (yer tutucular ikiqat fiqurlu mötərizələrin içində əlavə edilməlidir - {{placeholder_name}}).

![Fiqurlu mötərizələrdə yer tutucu mətni olan ana səhifə](/img/config/site-templates-list.png)

Sonra həmin məlumatı toplamaq üçün ödəniş formanıza uyğun bir qeydiyyat sahəsi əlavə edə bilərsiniz. Şablon seçimi üçün istifadə olunan eyni ödəniş forması redaktoru sizə şablon seçicisinin yanında xüsusi sahələr yerləşdirməyə imkan verir:

![Ödəniş forması redaktorunda şablon seçimi və qeydiyyat sahələri](/img/config/checkout-form-template-step.png)

Müştəriniz daha sonra qeydiyyat zamanı həmin sahəni doldura biləcək.

![Şablon seçicisi olan ön tərəf ödəniş forması](/img/config/frontend-template-chooser.png)

Ultimate Multisite daha sonra yer tutucuları müştərinin təqdim etdiyi məlumatlarla avtomatik əvəz edəcək.

![Saytda müştəri məlumatları ilə əvəz edilmiş yer tutucular](/img/config/site-templates-list.png)

### "yer tutucularla dolu şablon" probleminin həlli

Bütün bunlar əladır, amma xoşagəlməz bir problemlə qarşılaşırıq: indi müştərilərimizin ziyarət edə biləcəyi sayt şablonlarımız çox məlumat verməyən xoşagəlməz yer tutucularla doludur.

Bunu həll etmək üçün yer tutucular üçün saxta dəyərlər təyin etmək seçimini təklif edirik və müştəriləriniz şablon saytlarını ziyarət edərkən həmin dəyərlərdən onların məzmununu axtarıb əvəz etmək üçün istifadə edirik.

Şablon yer tutucuları redaktoruna **Ultimate Multisite > Ayarlar > Saytlar** bölməsinə keçərək və sonra yan paneldə **Yer Tutucuları Redaktə Et** linkinə klikləyərək daxil ola bilərsiniz.

![Saytlar ayarları səhifəsində sayt şablonu ayarları](/img/config/settings-sites-templates-section.png)

Bu sizi yer tutucuların məzmun redaktoruna aparacaq; burada yer tutucular və onların müvafiq məzmununu əlavə edə bilərsiniz.

![Şablon yer tutucuları məzmun redaktoruna giriş nöqtəsi](/img/config/settings-sites-templates-section.png)
