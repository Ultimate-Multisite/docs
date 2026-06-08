---
title: Qeydiyyat Formunuzu Təkmilləşdirmək
sidebar_position: 17
_i18n_hash: b0e3b7cddd099b4260e5cf01fead8685
---
# Qeydiyyat Formunuzu Fərdiləşdirmək

Ultimate Multisite, WordPress platformu üzərində qurulmuş digər bütün SaaS sistemlərindən öz şəbəkənizi fərqli etməyiniz üçün **Checkout Forms** xüsusiyyəti ilə qeydiyyat və giriş səhifələrinizi fərdiləşdirməyə imkan verir.

Yeni müştəriləri cəlb etməyə çalışarkən müxtəlif yanaşmalarla sınaqdan keçirmək üçün asan və çevik bir yol olsa da, bu formalar əsasən fərdiləşdirilmiş qeydiyyat formaları yaratmaq üçün istifadə olunur. Bu məqalə sizə bunu necə edə biləcəyinizi göstərməyi hədəfləyir.

## Giriş və qeydiyyat səhifələri:

Ultimate Multisite quraşdırıldıqdan sonra, əsas saytınızda avtomatik olaraq fərdiləşdirilmiş giriş və qeydiyyat səhifələri yaradır. Bu standart səhifələri istənilən vaxt **Ultimate Multisite > Settings > Login & Registration** səhifəsinə keçərək dəyişə bilərsiniz.

![Login and Registration settings page](/img/config/settings-general.png)

Giriş və qeydiyyat parametrlərinin tam görünüşü budur:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

**Login & Registration** səhifəsində fərdiləşdirə biləcəyiniz hər bir seçimi nəzərdən keçirək:

*   **Enable registration (Qeydiyyatı aktiv et):** Bu seçim şəbəkənizdə qeydiyyatı aktiv və ya deaktiv edir. Əgər bu seçim deaktiv edilərsə, müştəriləriniz qeydiyyatdan keçə və məhsullarınıza abunə ola bilməyəcəklər.

*   **Enable email verification (E-poçt təsdiqini aktiv et):** Bu seçim aktivləşdirildikdə, pulsuz plan üçün və ya sınaq müddətli ödənişli plan üçün abunə olan müştərilər təsdiq e-poçti alacaqlar və saytlarının yaradılması üçün təsdiq linkinə klikləmələri lazım olacaq.

*   **Default registration page (Standart qeydiyyat səhifəsi):** Bu, qeydiyyat üçün standart səhifədir. Bu səhifə saytınızda yayınlanmalı və qeydiyyat forması (yəni checkout forması) olmalıdır – burada müştəriləriniz məhsullarınıza abunə olacaqlar. İstədiyiniz qədər qeydiyyat səhifəsi və checkout forması yarada bilərsiniz, yalnız checkout formasının shortcode-unu qeydiyyat səhifəsinə yerləşdirməyi unutmayın, əks halda görünməyəcək.

*   **Use custom login page (Fərdiləşdirilmiş giriş səhifəsindən istifadə et):** Bu seçim standart `wp-login.php` səhifəsindən başqa, fərdiləşdirilmiş giriş səhifəsi istifadə etməyinizə imkan verir. Əgər bu seçim aktivləşdirilərsə, **Default login page** seçimində (birbaşa aşağısında) hansı səhifənin giriş üçün istifadə ediləcəyini seçə bilərsiniz.

*   **Obfuscate the original login url (wp-login.php) (Orijinal giriş URL-ini gizlət):** Əgər orijinal giriş URL-ini gizlətmək istəyirsinizsə, bu seçimi aktiv edə bilərsiniz. Bu, brute-force hücumlarını qarşısını almaq üçün faydalıdır. Əgər bu seçim aktivdirsə, bir istifadəçi orijinal `wp-login.php` linkinə daxil olmağa çalışdıqda Ultimate Multisite 404 səhvini göstərəcək.

*   **Force synchronous site publication (Sinxron sayt yayınlanmasını məcbur et):** Bir müştəri şəbəkədə bir məhsula abunə olduqdan sonra, yeni gözləyən sayt real şəbəkə saytına çevrilməlidir. Yayınlanma prosesi Job Queue vasitəsilə, asinxron şəkildə baş verir. Bu seçimi aktiv etmək, yayınlanmanın qeydiyyatdan keçmə ilə eyni sorğuda baş verməsinə məcbur edir.

İndi isə giriş və qeydiyyat prosesi ilə bağlı digər vacib seçimlərə nəzər salaq. Onlar eyni Login & registration səhifəsində **Other options** altında yerləşir:

*   **Default role (Standart rol):** Bu, qeydiyyat prosesindən sonra müştərilərin saytlarında olacaq roldur.

*   **Enable Jumper (Jumper-i aktiv et):** Admin sahəsində Jumper qısayolunu aktivləşdirir. Jumper administratorlara hər menyunu yoxlamaq əvəzinə, Ultimate Multisite ekranlarına, şəbəkə obyektlərinə və digər dəstəklənən yerlərə tez keçid etməyə imkan verir. Əgər bu sürətli naviqasiya alətini admin interfeysindən gizlətməyi üstün tutursunuzsa, onu söndürün.

*   **Add users to the main site as well (İstifadəçiləri əsas sayta da əlavə et):** Bu seçimi aktiv etmək, qeydiyyat prosesindən sonra istifadəçini şəbəkənizin əsas saytına da əlavə edəcək. Əgər bu seçimi aktiv edirsinizsə, saytınızda bu istifadəçilərin **default role**-unu təyin etmək üçün bir seçim də görünəcək.

*   **Enable multiple accounts (Bir neçə hesab aktiv et):** İstifadəçilərə şəbəkənizin müxtəlif saytlarında eyni e-poçt ünvanı ilə hesabları olmalarına icazə verir. Əgər bu seçim deaktivdirsə, müştəriləriniz şəbəkənizdə işləyən digər saytlarda eyni e-poçt ünvanı ilə hesab yarada bilməyəcəklər.

Beləliklə, qeydiyyat və girişlə bağlı fərdiləşdirə biləcəyiniz bütün seçimlər bunlardır! Düzenləmə işləriniz bitdikdən sonra parametrlərinizi yadda saxlamağı unutmayın.

## Bir neçə qeydiyyat forması istifadə etmək:

Ultimate Multisite 2.0, istədiyiniz qədər, fərqli sahələr, təklif olunan məhsullar və s. ilə checkout formaları yaratmanıza imkan verən bir editor təklif edir.

Həm giriş, həm də qeydiyyat səhifələri shortcode-larla yerləşdirilir: giriş səhifəsində **[wu_login_form]** və qeydiyyat səhifəsi üçün **[wu_checkout]**. Qeydiyyat səhifəsini checkout formaları quraraq və ya yaradaraq daha da fərdiləşdirə bilərsiniz.

Bu xüsusiyyətə çatmaq üçün sol yan çubucdan **Checkout Forms** menyusuna keçin.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Bu səhifədə bütün checkout formalarınızı görə bilərsiniz.

Yeni bir forması yaratmaq istəyirsinizsə, sadəcə səhifənin yuxarısındakı **Add Checkout Form** düyməsinə klikləyin.

Başlanğıc nöqtəsi kimi bu üç seçimdən birini seçə bilərsiniz: single step (tək addım), multi-step (çox addımlı) və ya blank (boş). Sonra **Go to the Editor** düyməsinə klikləyin.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alternativ olaraq, mövcud formalarınızı aşağıdakı seçimlərə klikləyərək redaktə edə və ya duplika edə bilərsiniz. Orada həmçinin formanın shortcode-unu kopyalamaq və ya formanı silmək seçimlərini də tapacaqsınız.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Əgər single step və ya multi-step seçsəniz, checkout forması işləməsi üçün əsas addımlarla əvvəlcədən doldurulmuş olacaq. Sonra, istəsəniz, ona əlavə addımlar əlavə edə bilərsiniz.

### Checkout Forması Redaktə Etmək:

Əvvəl qeyd etdiyimiz kimi, müxtəlif məqsədlər üçün checkout formaları yarada bilərsiniz. Bu nümunədə qeydiyyat forması üzərində işləyəcəyik.

Checkout forması redaktörünə keçdikdən sonra, formanıza bir ad (yalnız daxili istinad üçün istifadə ediləcək) və bir slug (məsələn, shortcode yaratmaq üçün istifadə olunur) verin.

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Formalar addımlar və sahələrdən ibarətdir. **Add New Checkout Step** düyməsinə klikləyərək yeni bir addım əlavə edə bilərsiniz.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Modal pəncərəsinin ilk tabında, formanızın addımının məzmununu doldurun. Ona bir ID, ad və təsvir verin. Bu elementlər əsasən daxili məqsədlər üçün istifadə olunur.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

Növbəti olaraq, addımın görünürliliyini təyin edin. **Always show** (Həmişə göstər), **Only show for logged in users** (Yalnız daxil olmuş istifadəçilər üçün göstər) və ya **Only show for guests** (Yalnız qonaqlar üçün göstər) arasından seçim edə bilərsiniz.

![Checkout step visibility options](/img/config/checkout-form-step.png)

Nəhayət, addım stilini konfiqurasiya edin. Bunlar isteğe bağlı sahələrdir.

![Checkout step style configuration](/img/config/checkout-form-step.png)

İndi isə ilk addımımıza sahələr əlavə etmək vaxtıdır. Sadəcə **Add New Field** düyməsinə klikləyin və istədiyiniz bölmə növünü seçin.

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

Hər sahə doldurulması lazım olan fərqli parametrlərə malikdir. Bu ilk nümunə üçün **Username** sahəsini seçəcəyik.

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

Ehtiyac duyduğunuz qədər addım və sahə əlavə edə bilərsiniz. Müştərilərinizin seçməsi üçün məhsullarınızı göstərmək üçün Pricing Table sahəsindən istifadə edin. Əgər müştərilərinizin şablon seçməsinə icazə vermək istəyirsinizsə, Template Selection sahəsini əlavə edin. Və s.

_**Qeyd:** Checkout forması yaratdıqdan sonra məhsul yaratsanız, məhsulu Pricing table bölməsində əlavə etməli olacaqsınız. Əgər əlavə etməsəniz, məhsul qeydiyyat səhifəsində müştərilərinizə görünməyəcək._

_**Qeyd 2:** checkout forması yaratmaq üçün username, email, password, site title, site URL, order summary, payment və submit düyməsi məcburi sahələrdir._

Checkout forması üzərində işləyərkən, müştərilərinizin formanı necə görəcəyini görmək üçün həmişə Preview düyməsindən istifadə edə bilərsiniz. Həm də mövcud istifadəçi kimi, həm də ziyarətçi kimi görünüşlər arasında keçid edə bilərsiniz.

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

Nəhayət, **Advanced Options**-da **Thank You** səhifəsi üçün mesajı konfiqurasiya edə, konversiyaları izləmək üçün parçalar əlavə edə, checkout formanıza xüsusi CSS əlavə edə və ya onu müəyyən ölkələr ilə məhdudlaşdıra bilərsiniz.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Həmçinin, checkout formanıza sağ sütunda bu seçimi aktivləşdirərək və ya deaktiv edərək əl ilə aktiv və ya deaktiv edə və ya formanı daimi silə bilərsiniz.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Checkout formanı yadda saxlamağı unutmayın!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Formanızın shortcode-unu almaq üçün **Generate Shortcode** düyməsinə klikləyin və modal pəncərədə göstərilən nəticəni kopyalayın.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Qeyd:** Bu checkout forması qeydiyyat səhifənizə əlavə edilməsi üçün bu shortcode-u oraya əlavə etməli olacaqsınız._

## URL parametrləri vasitəsilə məhsul və şablonların əvvəlcədən seçilməsi:

Məhsullarınız üçün fərdiləşdirilmiş qiymət cədvəlləri yaratmaq və checkout formasında müştərinizin qiymət cədvəlinizdən və ya şablonlar səhifənizdən seçdiyi məhsulu və ya şablonu əvvəlcədən seçmək istəyirsinizsə, bunun üçün URL parametrlərindən istifadə edə bilərsiniz.

### Planlar üçün:

**Ultimate Multisite > Products > Select a plan** yoluna keçin. Səhifənin yuxarısında **Click to copy Shareable Link** düyməsini görməlisiniz. Bu, bu spesifik planı checkout formanızda əvvəlcədən seçmək üçün istifadə edə biləcəyiniz linkdir.

![Product page with shareable link button](/img/config/products-list.png)

Qeyd edin ki, bu paylaşılabilən link yalnız **Planlar** üçün etibarlıdır. Paketlər və ya xidmətlər üçün paylaşılabilən linklərdən istifadə edə bilməzsiniz.

### Şablonlar üçün:

Checkout formanızda sayt şablonlarını əvvəlcədən seçmək istəyirsinizsə, qeydiyyat səhifənizin URL-ində **?template_id=X** parametrlərindən istifadə edə bilərsiniz. "X" yerinə **sayt şablonu ID nömrəsi** yazılmalıdır. Bu nömrəni almaq üçün **Ultimate Multisite > Sites** yoluna keçin.

İstifadə etmək istədiyiniz sayt şablonunun birbaşa altında **Manage** düyməsinə klikləyin. SITE ID nömrəsini görəcəksiniz. Bu nömrədən yalnız bu spesifik sayt şablonu üçün istifadə edin ki, checkout formanızda əvvəlcədən seçilsin. Bizim halımızda, URL parametri **?template_id=2** olacaq.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Deyək ki, şəbəkə saytımız [**www.mynetwork.com**](http://www.mynetwork.com) və checkout forması olan qeydiyyat səhifəmiz **/register** səhifəsində yerləşir. Bu sayt şablonu əvvəlcədən seçilmiş tam URL belə görünəcək: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Və istəsəniz, həm məhsulları, həm də şablonları checkout formanıza əvvəlcədən seçə bilərsiniz. Etməli olduğunuz yeganə şey, planın paylaşılabilən linkini kopyalayıb, sonuna şablon parametrinə yapışdırmaqdır. Belə görünəcək: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
