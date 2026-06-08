---
title: Sayt Şablonları
sidebar_position: 4
_i18n_hash: da303a4b11e2b54bb7892c08b88a4d24
---
# Site Templates (v2)

_**QEYD: Bu məqalə Ultimate Multisite 2.x versiyasına aiddir. Əgər 1.x versiyasını istifadə edirsinizsə,**_ **bu məqaləyə baxın** _**.**_

Ultimate Multisite ilə premium bir şəbəkə yaratarkən məqsədimiz, müştərilərimizə öz veb saytlarını yaratarkən çeviklik və seçimlər verməklə, mümkün qədər çox prosesi avtomatlaşdırmaqdır. Bu balansı əldə etmək üçün asan yollardan biri də Ultimate Multisite Site Templates funksionallarından istifadə etməkdir.

## Site Template nədir?

Adından göründüyü kimi, Site Template, şəbəkənizdə yeni saytlar yaradarkən istifadə edilə bilən bir başlanğıc şablon saytıdır.

Bu o deməkdir ki, siz bir baz sayt yarada, müxtəlif pluginlər aktivləşdirə, aktiv mövzu təyin edə və istədiyiniz kimi fərdiləşdirə bilərsiniz. Sonra, müştəriniz yeni bir hesab yaratdıqda, mənasız məzmunu olmayan standart bir WordPress saytı əldə etmək əvəzinə, bütün fərdiləşdirmə və məzmunlar artıq yerində olan baz saytınızın bir nüsxəsini alacaq.

Bu əla səslənir, amma yeni bir site template necə yaradıram? Bu, mümkün olduğu qədər sadədir.

## Yeni Site Template Yaratmaq və Redaktə Etmək

Site Templates, şəbəkənizdə sadəcə normal saytlardır. Yeni bir şablon yaratmaq üçün sadəcə **Network Admin > Ultimate Multisite > Sites > Add Site** yolunu izləyə bilərsiniz.

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Bu, bir modal pəncərə açacaq və sizdən **Site title (Sayt adı), Site Domain/path (Sayt Domeni/yolu)** və **Site type (Sayt tipi)** soruşacaq. **Site Type** açılır menyusunda **Site Template** seçdiyinizdən əmin olun.

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Həmçinin site template təsvirini də görə bilərsiniz:

![Site template description](/img/config/site-template-description.png)

Formanın altında **Copy Site** (Saytı kopyala) açma/bağlama düyməsi (toggle switch) görünəcək. Bu, sizə sıfırdan bir site template yaratmaq əvəzinə, mövcud bir site template-dən istifadə edərək yeni bir site template yaratmağa imkan verəcək və bu da vaxt qənaət etməyinizə kömək edəcək.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Site Template-in Məzmununu Fərdiləşdirmək

Site template-inizi fərdiləşdirmək üçün sadəcə onun dashboard panelinə daxil olun və lazım olan dəyişiklikləri edin. Yeni məqalələr, səhifələr yarada, pluginlər aktivləşdirə və aktiv mövzunu dəyişə bilərsiniz. Hətta Customizer-ə daxil olub bütün növ fərdiləşdirmə seçimlərini də dəyişə bilərsiniz.

![Site template edit interface](/img/config/site-template-edit.png)

Müştəri bu Site Template-ə əsaslanaraq yeni bir sayt yaratdıqda, bütün bu məlumatlar kopyalanacaq.

### İrəli Seçimlər

Əgər özünüzü bir az kodlaşdırma ilə tanıyırsınızsa, yeni sayt yaradıldıqdan sonra məlumatları avtomatik dəyişdirmək üçün Search and Replace API-dən istifadə edə bilərsiniz. Bu, Mənim Saytımda (About page) şirkət adlarını dəyişdirmək, Əlaqə səhifəsində (Contact page) e-poçt ünvanını dəyişdirmək kimi şeylər üçün faydalıdır.

### Site Templates-dən İstifadə Etmək

Yaxşı, demək ki, müxtəlif dizaynlar, mövzular və parametrlərlə bir çox Site Template yaratdınız. İndi bunları şəbəkənizdə necə faydalı edə bilərsiniz?

Əsasən, indi istifadə edə biləcəyiniz iki yanaşma var (eyni anda yox):

  * Hər bir Planınıza bir Site Template təyin etmək

**VƏ YA**

  * Müştərilərin qeydiyyat zamanı özləri site template seçməsinə icazə vermək.

#### Rejim 1: Site Template Təyin Etmək (Assign Site Template)

Bu rejimdə, müştərilərin hesab yaratdıqda şablon seçməsi mümkün olmayacaq, əksinə, hansı Planınızda hansı şablonun istifadə edilməli olduğunu siz müəyyən edəcəksiniz.

Bunu etmək üçün **Ultimate Multisite > Products > Edit** yoluna getməlisiniz.

![Edit product to assign site template](/img/config/product-site-templates.png)

Bu sizi **Edit Product** səhifəsinə aparacaq. **Product Options** (Məhsul Seçimləri) bölməsi altında **Site template** (Site şablonu) tabını tapın və açılır menyudan **Assign Site** **Template** (Site Şablonu Təyin Et) seçənəyini seçin. Bu, mövcud site template siyahısını göstərəcək və məhsula xüsusi olan yalnız bir site template seçməyinizə imkan verəcək.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Rejim 2: Seçiləbilən Site Template (Choose Available Site Template)

Bu rejimdə, müştərilərin qeydiyyat zamanı bir seçim hüququ olacaq. Onlar məhsul parametrləri altında müəyyən etdiyiniz müxtəlif site template-lərdən seçim edə biləcəklər. Seçilmiş məhsul altında hansı site template-lərindən seçim edə biləcəklərini məhdudlaşdırmaq imkanınız var. Bu, daha yüksək qiymətli bir məhsul üçün müxtəlif funksionallıq və xüsusiyyətləri vurğulamaq üçün ideal olan, hər məhsul altında fərqli site template dəstləri sahibi olmanızı təmin edir.

**Edit Product** səhifəsində. **Product Options** bölməsi altında **Site template** tabını tapın və açılır menyudan **Choose Available Site Template** (Seçiləbilən Site Template) seçənəyini seçin. Bu, mövcud site template siyahısını göstərəcək və istədiyiniz site template-i seçməyinizə imkan verəcək. Bunu onun Davranışını (Behavior) seçərək edə bilərsiniz: site template-in siyahıda görünməsini istəyirsinizsə: **Available** (Seçiləbilən); site template-in seçim olaraq görünməməsini istəyirsinizsə: _**Not Available**_ (Seçiləbilən Deyil); və siyahıda göstərilən site template-lərindən birinin default seçilmiş olmasını istəyirsinizsə: **Pre-selected** (Əvvəlcədən Seçilmiş).

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Default Rejim: Checkout form-unda site template seçimi

Əgər bütün site template-lərinizin qeydiyyat zamanı mövcud olmasını istəyirsinizsə, və ya hər yaratdığınız məhsul altında site template təyin etmək və ya göstərmək əlavə işləməyi üstün tutmursunuzsa. Onda sadəcə site template seçimini **Checkout Form** (Ödəniş Formu) altında təyin edə bilərsiniz. Bunu etmək üçün sadəcə **Ultimate Multisite > Checkout Forms** yoluna getməlisiniz. Sonra konfiqurasiya etmək istədiyiniz formanın altında **Edit** (Redaktə et) düyməsinə klikləyin.

![Checkout forms list page](/img/config/checkout-forms-list.png)

Bu, **Edit Checkout Form** səhifəsinə aparacaq. **Template Selection** (Şablon Seçimi) sahəsini tapın və onun altında **Edit** (Redaktə et) düyməsinə klikləyin.

![Checkout form editor with template selection field](/img/config/checkout-form-editor.png)

Bir modal pəncərə görünəcək. **Template Sites** (Şablon Saytları) sahəsi altında qeydiyyat zamanı mövcud olmasını istədiyiniz bütün site template-ləri seçib siyahı halına gətirə bilərsiniz. Buradan göstərdiyiniz site template-lər, istifadəçi hansı məhsulu seçsə də, mövcud olacaq.

![Template sites field in checkout form editor](/img/config/checkout-form-step.png)

### Site Template Seçimləri

Ultimate Multisite parametrləri altında yandırılıb söndürülə bilən digər site template funksiyaları mövcuddur.

![Site template options in Ultimate Multisite settings](/img/config/settings-sites.png)

#### Template Dəyişməsinə İcazə Ver (Allow Template Switching)

Bu seçimi aktivləşdirmək, müştərilərin hesab və sayt yaradıldıqdan sonra qeydiyyat prosesi zamanı seçdikləri şablonu dəyişməsinə imkan verəcək. Bu, müştərinin nöqteyi-nəzərindən faydalıdır, çünki daha sonra orijinal seçimlərinin öz xüsusi ehtiyacları üçün ən yaxşı olmadığını öyrənə bilərlər və şablonu yenidən seçmələrinə imkan verir.

#### İstifadəçilərə Öz Saytlarını Template kimi İstifadə Etməyə İcazə Ver (Allow Users to use their Site as templates)

Subsite istifadəçiləri öz saytlarını qurmaq və dizayn etmək üçün vaxt sərf etdikləri üçün, onlar bu saytı şəbəkənizdə başqa bir subsite yaratdıqda mövcud olan site template-ləri siyahısından birini klonlamaq və istifadə etmək istəyə bilərlər. Bu seçim onlara bunu etməyə imkan verəcək.

#### Template Duplikasiyasında Media Kopyalama (Copy Media on Template Duplication)

Bu seçimi işarələmək, template saytında yüklənmiş media fayllarını yeni yaradılan sayta kopyalayacaq. Bu, hər bir planda ləğv edilə bilər.

#### **Axtarış Motorlarının Site Template-lərini İndeksləməsini Qarşısını Almaq (Prevent Search Engines from indexing Site Templates)**

Bu məqalədə müzakirə olunan site template-lər başlanğıc şablonları olsa da, hələ də şəbəkənizin bir hissəsidir, bu o deməkdir ki, hələ də axtarış motorları üçün mövcuddur. Bu seçim, site template-lərini gizlətməyə imkan verəcək, beləliklə axtarış motorları onları indeksləyə bilməyəcək.

## Site Template-ləri avtomatik axtarış-dəyişmə ilə doldurmaq (Pre-populating Site Templates with auto search-and-replace)

Ultimate Multisite-in ən güclü funksionallıqlarından biri qeydiyyat formasına istənilən mətni, rəngi və seçilmiş sahələri əlavə etmək imkanıdır. Bu məlumatları əldə etdikdən sonra, bunu seçilmiş site template-in müəyyən hissələrindəki məzmunu əvvəlcədən doldurmaq üçün istifadə edə bilərik. Sonra, yeni sayt nəşr edilərkən, Ultimate Multisite yer tutucuları (placeholders) qeydiyyat zamanı daxil edilmiş faktiki məlumatlarla əvəz edəcək.

Məsələn, qeydiyyat zamanı end-user-in şirkət adını almaq və şirkət adını avtomatik olaraq ana səhifədə göstərmək istəyirsinizsə. Şablon saytınızın ana səhifəsinə aşağıdakı şəkil kimi yer tutucuları əlavə etməlisiniz (yer tutucular iki qurtlu mötərizə ilə əhatə edilməlidir - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Sonra, bu məlumatları almaq üçün checkout formunuzda uyğun bir qeydiyyat sahəsi əlavə edə bilərsiniz:

![Checkout form with matching registration field](/img/config/checkout-form-editor.png)

Müştəriniz o zaman bu sahəni doldura biləcək.

![Registration field filled by customer](/img/config/checkout-form-step.png)

![Preview of the registration form](/img/config/checkout-form-editor.png)

Ultimate Multisite daha sonra yer tutucuları müştəri tərəfindən verilən məlumatlarla avtomatik olaraq əvəz edəcək.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### "Yer tutucu dolu şablon" problemini həll etmək

Bütün bunlar əladır, amma pis bir problemə rastlaşırıq: indi site template-lərimiz – ki, müştərilərimiz gələ bilərlər – çoxlu, məlumat verməyən pis yer tutucularla doludur.

Bunu həll etmək üçün, yer tutucular üçün saxta dəyərlər təyin etmək seçimlərimiz var və müştərilərin ziyarət etdiyi zaman bu dəyərlərdən istifadə edərək template saytlarındakı məzmunlarını axtarış və dəyişmə üçün istifadə edirik.

Template yer tutucu redaktoru (editor) **Ultimate Multisite > Settings > Sites** yoluna getməklə və sonra yan çubuğunda **Edit Placeholders** (Yer Tutucuları Redaktə Et) linkinə klikləməklə əldə edə bilərsiniz.

![Placeholder settings under Sites settings page](/img/config/settings-sites.png)

Bu sizi yer tutucuların məzmun redaktoruna aparacaq, burada yer tutucuları və onların müvafiq məzmunlarını əlavə edə bilərsiniz.

![Template placeholders content editor](/img/config/settings-sites.png)
