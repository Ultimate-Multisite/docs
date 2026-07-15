---
title: Qeydiyyat formanızı fərdiləşdirmək
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Qeydiyyat Formanızı fərdiləşdirmək

WordPress platformasında qurulmuş digər bütün SaaS-lardan şəbəkənizin unikal görünməsi üçün Ultimate Multisite sizə **Checkout Forms** xüsusiyyəti ilə qeydiyyat və giriş səhifələrinizi fərdiləşdirməyə imkan verir.

Onlar yeni müştəriləri cəlb etməyə çalışarkən fərqli yanaşmaları sınaqdan keçirmək üçün asan və çevik üsul olsa da, əsasən fərdiləşdirilmiş qeydiyyat formaları yaratmaq üçün istifadə olunur. Bu məqalənin məqsədi bunu necə edə biləcəyinizi göstərməkdir.

## Giriş və qeydiyyat səhifələri: {#login-and-registration-pages}

Ultimate Multisite quraşdırıldıqda, əsas saytınızda avtomatik olaraq fərdi giriş və qeydiyyat səhifələri yaradır. Bu standart səhifələri istənilən vaxt **Ultimate Multisite > Settings > Login & Registration** səhifənizə keçərək dəyişə bilərsiniz.

![Giriş və Qeydiyyat ayarları səhifəsi](/img/config/settings-general.png)

Giriş və qeydiyyat ayarları səhifəsinin tam görünüşü budur:

![Giriş və Qeydiyyat ayarlarının tam səhifəsi](/img/config/settings-login-registration-full.png)

**Login & Registration** səhifəsində fərdiləşdirə biləcəyiniz seçimlərin hər birinə nəzər salaq:

  * **Qeydiyyatı aktivləşdir:** Bu seçim şəbəkənizdə qeydiyyatı aktivləşdirəcək və ya deaktiv edəcək. Əgər söndürülərsə, müştəriləriniz qeydiyyatdan keçə və məhsullarınıza abunə ola bilməyəcək.

  * **E-poçt təsdiqini aktivləşdir:** Əgər bu seçim aktivdirsə, pulsuz plana və ya sınaq müddəti olan ödənişli plana abunə olan müştərilər təsdiq e-poçtu alacaq və veb-saytlarının yaradılması üçün təsdiq linkinə klikləməli olacaqlar.

  * **Standart qeydiyyat səhifəsi:** Bu, qeydiyyat üçün standart səhifədir. Bu səhifə veb-saytınızda dərc edilməli və qeydiyyat forması (checkout form kimi də tanınır) olmalıdır - müştəriləriniz burada məhsullarınıza abunə olacaqlar. İstədiyiniz qədər qeydiyyat səhifəsi və checkout form yarada bilərsiniz, sadəcə checkout form qısa kodunu qeydiyyat səhifəsinə yerləşdirməyi unutmayın, əks halda görünməyəcək.

  * **Fərdi giriş səhifəsindən istifadə et:** Bu seçim sizə standart wp-login.php səhifəsindən başqa fərdiləşdirilmiş giriş səhifəsindən istifadə etməyə imkan verir. Əgər bu seçim aktivdirsə, giriş üçün hansı səhifənin istifadə olunacağını **Default login page** seçimində (birbaşa aşağıda) seçə bilərsiniz.

  * **Orijinal giriş url-ni gizlət (wp-login.php)** : Orijinal giriş URL-ni gizlətmək istəyirsinizsə, bu seçimi aktivləşdirə bilərsiniz. Bu, brute-force hücumlarının qarşısını almaq üçün faydalıdır. Bu seçim aktivdirsə, istifadəçi orijinal wp-login.php linkinə daxil olmağa çalışdıqda Ultimate Multisite 404 xətası göstərəcək

  * **Sinxron sayt dərcini məcburi et:** Müştəri şəbəkədə bir məhsula abunə olduqdan sonra yeni gözləmədə olan sayt real şəbəkə saytına çevrilməlidir. Dərc prosesi Job Queue vasitəsilə asinxron şəkildə baş verir. Dərcin qeydiyyatla eyni sorğuda baş verməsini məcbur etmək üçün bu seçimi aktivləşdirin.

İndi isə giriş və qeydiyyat prosesi ilə hələ də əlaqəli olan digər seçimlərə baxaq. Onlar eyni Login & registration səhifəsində **Other options** bölməsinin birbaşa altındadır:

  * **Standart rol:** Bu, qeydiyyat prosesindən sonra müştərilərinizin veb-saytlarında sahib olacağı roldur.

  * **Jumper-i aktivləşdir:** İdarəetmə sahəsində Jumper qısayolunu aktivləşdirir. Jumper administratorlara hər menyunu ayrı-ayrılıqda gəzmədən Ultimate Multisite ekranlarına, şəbəkə obyektlərinə və digər dəstəklənən istiqamətlərə sürətlə keçməyə imkan verir. Bu sürətli naviqasiya alətini idarəetmə interfeysindən gizlətməyi üstün tutursunuzsa, onu söndürün.

  * **İstifadəçiləri əsas sayta da əlavə et:** Bu seçimi aktivləşdirmək qeydiyyat prosesindən sonra istifadəçini şəbəkənizin əsas saytına da əlavə edəcək. Bu seçimi aktivləşdirsəniz, bu istifadəçilərin veb-saytınızdakı **standart rolunu** təyin etmək üçün seçim də birbaşa aşağıda görünəcək.

  * **Çoxsaylı hesabları aktivləşdir:** İstifadəçilərə eyni e-poçt ünvanı ilə şəbəkənizin müxtəlif saytlarında hesablar yaratmağa icazə verin. Əgər bu seçim söndürülübsə, müştəriləriniz eyni e-poçt ünvanı ilə şəbəkənizdə işləyən digər veb-saytlarda hesab yarada bilməyəcək.

Giriş və qeydiyyatla bağlı fərdiləşdirə biləcəyiniz bütün seçimlər bunlardır! Redaktəni bitirdikdən sonra ayarlarınızı yadda saxlamağı unutmayın.

## Çoxsaylı qeydiyyat formalarından istifadə: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 sizə istədiyiniz qədər forma yaratmağa imkan verən, fərqli sahələr, təklifdə olan məhsullar və s. ilə checkout form redaktoru təqdim edir.

Həm giriş, həm də qeydiyyat səhifələri qısa kodlarla yerləşdirilib: giriş səhifəsində **[wu_login_form]** və qeydiyyat səhifəsi üçün**[wu_checkout]**. Qeydiyyat səhifəsini checkout formaları quraraq və ya yaradaraq daha da fərdiləşdirə bilərsiniz.

Bu xüsusiyyətə daxil olmaq üçün sol yan paneldə **Checkout Forms** menyusuna keçin.

![Yan paneldə Checkout Forms menyusu](/img/config/checkout-forms-list.png)

Bu səhifədə sahib olduğunuz bütün checkout formalarını görə bilərsiniz.

Yenisini yaratmaq istəyirsinizsə, sadəcə səhifənin yuxarısındakı **Add Checkout Form** üzərinə klikləyin.

Başlanğıc nöqtəsi kimi bu üç seçimdən birini seçə bilərsiniz: tək addım, çoxaddımlı və ya boş. Sonra **Go to the Editor** üzərinə klikləyin.

![Tək addım, çoxaddımlı və ya boş seçimləri ilə Add Checkout Form](/img/config/checkout-forms-list.png)

Alternativ olaraq, artıq sahib olduğunuz formaları adının altındakı seçimlərə klikləyərək redaktə edə və ya dublikatını yarada bilərsiniz. Orada həmçinin formanın qısa kodunu kopyalamaq və ya formanı silmək seçimlərini tapacaqsınız.

![Redaktə, dublikat yaratma və silmə ilə checkout form üzərinə gətirmə əməliyyatları](/img/config/checkout-form-hover-actions.png)

Tək addım və ya çoxaddımlı seçsəniz, checkout form işləməsi üçün əsas addımlarla əvvəlcədən doldurulmuş olacaq. Sonra istəsəniz, ona əlavə addımlar əlavə edə bilərsiniz.

### Checkout Formunu redaktə etmək: {#editing-a-checkout-form}

Daha əvvəl qeyd etdiyimiz kimi, müxtəlif məqsədlər üçün checkout formaları yarada bilərsiniz. Bu nümunədə qeydiyyat forması üzərində işləyəcəyik.

Checkout form redaktoruna keçdikdən sonra formanıza ad (yalnız daxili istinad üçün istifadə olunacaq) və slug (məsələn, qısa kodlar yaratmaq üçün istifadə olunur) verin.

![Ad və slug sahələri olan checkout form redaktoru](/img/config/checkout-form-name-slug.png)

Formlar addımlardan və sahələrdən ibarətdir. **Yeni Checkout Addımı Əlavə Et** üzərinə klikləyərək yeni addım əlavə edə bilərsiniz.

![Yeni Checkout Addımı Əlavə Et düyməsi](/img/config/checkout-form-add-step.png)

Modal pəncərənin ilk tabında formunuzun addımının məzmununu doldurun. Ona ID, ad və təsvir verin. Bu elementlər əsasən daxili istifadə olunur.

![ID, ad və təsvir olan checkout addımı məzmun tabu](/img/config/checkout-form-step-content.png)

Sonra addımın görünməsini təyin edin. **Həmişə göstər**, **Yalnız daxil olmuş istifadəçilər üçün göstər** və ya **Yalnız qonaqlar üçün göstər** seçimlərindən birini seçə bilərsiniz.

![Checkout addımı görünmə seçimləri](/img/config/checkout-form-step-visibility.png)

Sonda addım üslubunu konfiqurasiya edin. Bunlar istəyə bağlı sahələrdir.

![Checkout addımı üslub konfiqurasiyası](/img/config/checkout-form-step-style.png)

İndi ilk addımımıza sahələr əlavə etməyin vaxtıdır. Sadəcə **Yeni Sahə Əlavə Et** üzərinə klikləyin və istədiyiniz bölmə növünü seçin.

![Yeni Sahə Əlavə Et düyməsi](/img/config/checkout-form-add-field-button.png)![Sahə növü seçim açılan menyusu](/img/config/checkout-form-field-type-dropdown.png)

Hər sahənin doldurulmalı fərqli parametrləri var. Bu ilk giriş üçün **İstifadəçi adı** sahəsini seçəcəyik.

![İstifadəçi adı sahəsi konfiqurasiyası](/img/config/checkout-form-username-content.png)![İstifadəçi adı sahəsi parametrləri](/img/config/checkout-form-username-visibility.png)![İstifadəçi adı sahəsi əlavə parametrləri](/img/config/checkout-form-username-style.png)

Ehtiyacınız olduğu qədər addım və sahə əlavə edə bilərsiniz. Müştərilərinizin birini seçməsi üçün məhsullarınızı göstərmək istəyirsinizsə, Qiymət Cədvəli sahəsindən istifadə edin. Müştərilərinizin şablon seçməsinə imkan vermək istəyirsinizsə, Şablon Seçimi sahəsini əlavə edin. Və sair.

![Şablon seçimi sahəsi olan checkout form redaktoru](/img/config/checkout-form-with-template-field.png)

_**Qeyd:** Checkout formunuzu yaratdıqdan sonra məhsul yaratsanız, məhsulu Qiymət Cədvəli bölməsinə əlavə etməlisiniz. Əlavə etməsəniz, məhsul qeydiyyat səhifəsində müştərilərinizə görünməyəcək._

_**Qeyd 2:** checkout form yaratmaq üçün istifadəçi adı, email, parol, sayt başlığı, sayt URL-i, sifariş xülasəsi, ödəniş və göndər düyməsi məcburi sahələrdir._

Checkout formunuz üzərində işləyərkən, müştərilərinizin formu necə görəcəyini görmək üçün Preview düyməsindən hər zaman istifadə edə bilərsiniz. Həmçinin mövcud istifadəçi və ya ziyarətçi kimi görünüş arasında keçid edə bilərsiniz.

![Checkout form redaktorunda Preview düyməsi](/img/config/checkout-form-preview-button.png)![Checkout formunun ziyarətçi və ya mövcud istifadəçi kimi önizləməsi](/img/config/checkout-form-preview-modal.png)

Sonda **Qabaqcıl Seçimlər** bölməsində **Təşəkkür Edirik** səhifəsi üçün mesajı konfiqurasiya edə, dönüşümləri izləmək üçün snippet-lər əlavə edə, checkout formunuza xüsusi CSS əlavə edə və ya onu müəyyən ölkələrlə məhdudlaşdıra bilərsiniz.

![Təşəkkür Edirik səhifəsi, dönüşüm izləmə və xüsusi CSS olan Qabaqcıl Seçimlər](/img/config/checkout-form-advanced.png)

Sağ sütunda bu seçimi dəyişdirərək checkout formunuzu əl ilə aktivləşdirə və ya deaktiv edə, yaxud formu həmişəlik silə bilərsiniz.

![Checkout form üçün aktiv keçid və silmə seçimi](/img/config/checkout-form-active.png)

Checkout formunuzu yadda saxlamağı unutmayın!

![Checkout Formunu Yadda Saxla düyməsi](/img/config/checkout-form-save.png)

Formunuzun shortcode-unu əldə etmək üçün **Shortcode Yarat** üzərinə klikləyin və modal pəncərədə göstərilən nəticəni kopyalayın.

![Kopyalamaq üçün shortcode olan Shortcode Yarat modalı](/img/config/checkout-form-editor.png)

_**Qeyd:** Bu checkout formun ona əlavə edilməsi üçün bu shortcode-u qeydiyyat səhifənizə əlavə etməlisiniz._

## URL parametrləri vasitəsilə məhsulların və şablonların əvvəlcədən seçilməsi: {#pre-selecting-products-and-templates-via-url-parameters}

Məhsullarınız üçün fərdiləşdirilmiş qiymət cədvəlləri yaratmaq və müştərinizin qiymət cədvəlinizdən və ya şablonlar səhifənizdən seçdiyi məhsulu və ya şablonu checkout formda əvvəlcədən seçmək istəyirsinizsə, bunun üçün URL parametrlərindən istifadə edə bilərsiniz.

### **Planlar üçün:** {#for-plans}

**Ultimate Multisite > Məhsullar > Plan seçin** bölməsinə keçin. Səhifənin yuxarısında **Paylaşıla bilən Linki kopyalamaq üçün klikləyin** düyməsini görməlisiniz. Bu, checkout formunuzda bu konkret planı əvvəlcədən seçmək üçün istifadə edə biləcəyiniz linkdir.

![Paylaşıla bilən link düyməsi olan məhsul səhifəsi](/img/config/products-list.png)

Nəzərə alın ki, bu paylaşıla bilən link yalnız **Planlar** üçün keçərlidir. Paketlər və ya xidmətlər üçün paylaşıla bilən linklərdən istifadə edə bilməzsiniz.

### Şablonlar üçün: {#for-templates}

Checkout formunuzda sayt şablonlarını əvvəlcədən seçmək istəyirsinizsə, qeydiyyat səhifənizin URL-ində bu parametrdən istifadə edə bilərsiniz: **?template_id=X**. "X" **sayt şablonu ID nömrəsi** ilə əvəz edilməlidir. Bu nömrəni əldə etmək üçün **Ultimate Multisite > Saytlar** bölməsinə keçin.

İstifadə etmək istədiyiniz sayt şablonunun birbaşa altında **İdarə et** üzərinə klikləyin. SITE ID nömrəsini görəcəksiniz. Bu konkret sayt şablonunun checkout formunuzda əvvəlcədən seçilməsi üçün sadəcə bu nömrədən istifadə edin. Buradakı nümunəmizdə URL parametri **?template_id=2** olacaq.

![Sayt şablonu ID-sini göstərən saytlar siyahısı](/img/config/site-templates-list.png)

Tutaq ki, şəbəkə veb-saytımız [**www.mynetwork.com**](http://www.mynetwork.com)-dur və checkout formumuz olan qeydiyyat səhifəmiz **/register** səhifəsində yerləşir. Bu sayt şablonu əvvəlcədən seçilmiş tam URL belə görünəcək: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

İstəsəniz, checkout formunuz üçün həm məhsulları, həm də şablonları əvvəlcədən seçə bilərsiniz. Etməli olduğunuz tək şey planın paylaşıla bilən linkini kopyalamaq və şablon parametrini sonuna yapışdırmaqdır. Bu belə görünəcək: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
