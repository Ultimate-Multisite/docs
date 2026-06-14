---
title: Ödəniş Formları
sidebar_position: 19
_i18n_hash: b7b1bf89a2997f8916c9f3a3a2cb255b
---
# Checkout Forms

Checkout Forms, yeni müştəriləri cəlb etməyə çalışarkən müxtəlif yanaşmalarla sınaqdan keçirmək üçün sadə və çevik bir yoldur.

Ultimate Multisite 2.0, istədiyiniz qədər formalar yaratmanıza imkan verən, fərqli sahələr, təklif olunan məhsullar və s. ilə bir Checkout Form editoru təklif edir.

Bu xüsusiyyətə çatmaq üçün sol yan çubucdan Checkout Forms menyusuna keçin.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Bu səhifədə yaratdığınız bütün checkout formalarını görə bilərsiniz.

Siyahı cədvəli, hər bir formanın hazırda müştərilər üçün istifadə edilib-edilmədiyini yoxlamağınız üçün bir **Status** sütunu ehtiva edir:

| Status | Meaning |
|---|---|
| **Active** | Forma, qısa kodu və ya qeydiyyat səhifəsi yerləşdirildiyi hər yerdə istifadə edilə bilər. |
| **Inactive** | Forma yadda saxlanılıb, lakin deaktivləşdirilib. Onu yenidən aktivləşdirmədən qədər müştərilər bununla ödəniş edə bilməzlər. |

Xüsusilə əməliyyat formalarını redaktə etməzdən əvvəl, status sütunundan istifadə edin, xüsusilə də canlı formalarınızla yanaşı eskiz və ya mövsimlə bağlı checkout formalarını saxladığınız hallarda.

Yeni bir forma yaratmaq istəyirsinizsə, sadəcə səhifənin yuxarısındakı Add Checkout Form düymasına klikləyin.

Başlanğıc nöqtəsi kimi bu üç seçimdən birini seçə bilərsiniz: single step, multi-step və ya blank. Sonra, Editora Getmək üçün klikləyin.

**Single step** və ya **multi-step** seçdiyiniz zaman, forma şablonu avtomatik olaraq bir **Template Selection** sahəsi əlavə edir. Bu sahə müştərilərin qeydiyyat prosesi zamanı sayt şablonu seçməsinə imkan verir. Onu yerində saxlaya, silə və ya editorun digər sahələri kimi yerini dəyişə bilərsiniz.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternativ olaraq, mövcud formalarınızı adının altındakı seçimlərə klikləyərək redaktə edə və ya duplika edə bilərsiniz. Orada həmçinin formanın `shortcode`-unu kopyalamaq və ya formanı silmək üçün seçimlər tapacaqsınız.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Checkout Form Editor Overview

Checkout form editoru, qeydiyyat formalarınızı qurmaq üçün hərtərəfli bir interfeys təmin edir. Editorun quruluşu haqqında ümumi məlumat aşağıdadır:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Editing a Checkout Form

Müxtəlif məqsədlər üçün checkout formaları yarada bilərsiniz. Bu nümunədə qeydiyyat forması üzərində işləyəcəyik.

Checkout form editoruna keçdikdən sonra formanıza bir ad (yalnız daxili istinad üçün istifadə olunacaq) və bir slug (məsələn, qısa kodlar yaratmaq üçün istifadə olunur) verin.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Formalar addımlar və sahələrdən ibarətdir. Add New Checkout Step düymasına klikləyərək yeni bir addım əlavə edə bilərsiniz.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Modal pəncərəsinin ilk tabında, formanızın addımının məzmununu doldurun. Ona bir ID, bir ad və bir təsvir verin. Bu elementlər əsasən daxili məqsədlər üçün istifadə olunur.

![Checkout form step](/img/config/checkout-form-step.png)

Növbəti olaraq, addımın görünürliliyini təyin edin. "Always show" (Həmişə göstər), "Only show for logged in users" (Yalnız daxil olmuş istifadəçilər üçün göstər) və ya "Only show for guests" (Yalnız qonaqlar üçün göstər) arasından seçim edə bilərsiniz.

![Checkout form step](/img/config/checkout-form-step.png)

Nəhayət, addım stilini konfiqurasiya edin. Bunlar isteğe bağlı sahələrdir.

![Checkout form step](/img/config/checkout-form-step.png)

İndi isə ilk addımımıza sahələr əlavə etmək vaxtıdır. Sadəcə Add New Field düymasına klikləyin və istədiyiniz bölmə növünü seçin.

![Checkout form step with fields](/img/config/checkout-form-step.png)

Hər sahə doldurulması lazım olan fərqli parametrlərə malikdir. Bu ilk nümunə üçün "Username" sahəsini seçəcəyik.

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

Ehtiyac duyduğunuz qədər addım və sahə əlavə edə bilərsiniz. Müştərilərin seçməsi üçün məhsullarınızı göstərmək üçün Pricing Table sahəsindən istifadə edin. Müştərilərin şablon seçməsinə icazə vermək istəyirsinizsə, Template Selection sahəsini əlavə edin. Və s.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Qeyd:** username, email, password, site title, site URL, order summary, payment və submit düyməsi checkout forması yaratmaq üçün məcburi sahələrdir._

Checkout formunuz üzərində işləyərkən, müştərilərin formanı necə görəcəyini görmək üçün həmişə Preview düymasından istifadə edə bilərsiniz. Həmçinin, mövcud istifadəçi kimi və ya ziyarətçi kimi görünüşlər arasında keçid edə bilərsiniz.

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

Nəhayət, Advanced Options (Əlavə Seçimlər) bölməsində "Thank You" səhifəsi üçün mesajı konfiqurasiya edə, konversiyaları izləmək üçün parçalar (snippets) əlavə edə, checkout formanıza xüsusi CSS əlavə edə və ya onu müəyyən ölkələr ilə məhdudlaşdıra bilərsiniz.

![Advanced Options](/img/config/checkout-form-advanced.png)

Həmçinin, checkout formanıza sağ sütunda bu seçimi açmaq və ya söndürməklə əl ilə aktiv və ya deaktiv edə və ya formanı daimi silə bilərsiniz.

![Active toggle](/img/config/checkout-form-active.png)

Bir formanı silmək üçün formanın əməliyyətlərindəki silmə seçiminə klikləyin:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Checkout formunuzu yadda saxlamağı unutmayın!

![Save button](/img/config/checkout-form-save.png)

Formanın `shortcode`-unu almaq üçün Generate Shortcode düymasına klikləyin və modal pəncərədə göstərilən nəticəni kopyalayın.

![Save button with shortcode](/img/config/checkout-form-save.png)

### The Pricing Table Field

**Pricing Table** sahəsi, müştərilərin plan seçməsi üçün məhsullarınızı checkout formasında göstərir. Bu sahəni redaktə edərkən bir neçə seçimləri konfiqurasiya edə bilərsiniz:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Qiymət cədvəlinin ön yüz qeydiyyat formasında necə görünməsi aşağıdadır:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

*   **Products**: Hansı məhsulların göstəriləcəyini və hansı ardıcıllıqla görünəcəyini seçin.
*   **Force Different Durations**: Aktivləşdirildikdə, bütün məhsullar, hazırkı seçilmiş ödəniş dövrü üçün uyğun qiymət dəyişməsi olsa da olmasa da göstərilir. Deaktiv olduqda (default), seçilmiş dövr üçün dəyişməsi olmayan məhsullar gizlənir.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
*   **Hide when Pre-Selected**: URL vasitəsilə bir plan artıq seçildikdə (məsələn, `/register/premium`), qiymət cədvəlini gizlədir.
*   **Pricing Table Template**: Qiymət cədvəli üçün vizual şablonu seçin (Simple List, Legacy və s.).

Əgər formanın həmin məhsulun checkout axınını tamamlamaq üçün tələb olunan sahələri ehtiva etmədən əvvəl Pricing Table-a bir məhsul əlavə edirsinizsə, editor indi bir xəbərdarlıq göstərir. Bu xəbərdarlıqdan istifadə edərək, canlı qeydiyyat forması üçün dəyişikliklər yayınlamazdan və ya yadda saxlamaqdan əvvəl çatışmayan məcburi sahəni əlavə edin.

### Adding a Period Selection Toggle

Əgər məhsullarınızda [Price Variations](creating-your-first-subscription-product#price-variations) konfiqurasiya etmisinizsə (məsələn, aylıq və illik qiymətləndirmə), checkout formanıza bir **Period Selection** sahəsi əlavə edə bilərsiniz. Bu sahə, müştərilərin ödəniş dövrləri arasında keçid etməsinə imkan verən bir düymə (toggle) göstərir və qiymət cədvəli real vaxt rejimində dinamik olaraq yenilənir.

#### Step 1: Set Up Price Variations on Your Products

Period Selection sahəsini əlavə etməzdən əvvəl, məhsullarınızda qiymət dəyişmələri konfiqurasiya olduğundan əmin olun. **Ultimate Multisite > Products**-a keçin, bir məhsulu redaktə edin və alternativ ödəniş dövrləri əlavə etmək üçün **Price Variations** tabına keçin (məsələn, endirimli illik).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Step 2: Add the Period Selection Field to Your Checkout Form

1. **Ultimate Multisite > Checkout Forms**-a keçin və checkout formanı redaktə edin.

2. **Pricing Table** sahənizin yerləşdiyi addıma aşağı sürüşün və **Add new Field** düymasına klikləyin.

3. Sahə növü seçimi dialoq pəncərəsində **Period Select** düymasına klikləyin.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Dövr seçimlərini konfiqurasiya edin. Hər bir seçim üçün aşağıdakılar lazımdır:
   * **Duration**: Rəqəm (məsələn, `1`)
   * **Duration unit**: Dövr növü (Days, Weeks, Months və ya Years)
   * **Label**: Müştərilərin görəcəyi mətn (məsələn, "Monthly", "Annual")

5. Daha çox dövr seçimi əlavə etmək üçün **+ Add Option** düymasına klikləyin. Bu seçimlər məhsullarınızda konfiqurasiya etdiyiniz qiymət dəyişmələri ilə uyğun gəlməlidir.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

Sahə seçimlərini birbaşa konfiqurasiya edə bilərsiniz:

<!-- Screenshot unavailable: Period selection field options -->

6. Bir **Period Selector Template** seçin (Clean defaultdur və xüsusi CSS üçün hazır, sadə bir şablon göstərir).

7. **Save Field** düymasına klikləyin.

#### Step 3: Position the Field Above the Pricing Table

Ən yaxşı istifadəçi təcrübəsi üçün, Period Selection sahəsinin checkout addımınızda Pricing Table sahəsindən **əvvəl** görünməsini təmin edin. Checkout form editorunda sahələri sürüşdürərək yenidən sıralaya bilərsiniz. Bu yolla müştərilər əvvəlcə ödəniş dövrünü seçir və sonra həmin dövr üçün qiymətləri görürlər.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### How It Works on the Frontend

Konfiqurasiya edildikdən sonra, qeydiyyat səhifənizi ziyarət edən müştərilər qiymət cədvəlinin yuxarısında dövr seçicisini görəcəklər. Başqa bir ödəniş dövrünə kliklədikdə:

*   Qiymət cədvəli dərhal yenilənərək seçilmiş dövr üçün qiymətləri göstərir (səhifə yenilənməsi tələb olunmur).
*   Əgər Pricing Table sahəsində **Force Different Durations** deaktivləşdirilibsə, seçilmiş dövr üçün qiymət dəyişməsi olmayan məhsullar gizlənəcək.
*   Əgər **Force Different Durations** aktivləşdirilibsə, bütün məhsullar görünür qalacaq, hətta seçilmiş dövr üçün dəyişmələri olmasa belə (onlar default qiymətlərini göstərəcəklər).

#### Pre-selecting a Billing Period via URL

Həmçinin, URL vasitəsilə bir məhsulu və ödəniş dövrünü əvvəlcədən seçə bilərsiniz. Ultimate Multisite bu URL nümunələrini dəstəkləyir:

*   `/register/premium` — Yalnız "Premium" məhsulunu əvvəlcədən seçir
*   `/register/premium/12` — Məhsulu və 12 aylıq dövrü əvvəlcədən seçir
*   `/register/premium/1/year` — Məhsulu 1 illik dövr ilə əvvəlcədən seçir

### The Template Selection Field

**Template Selection** sahəsi müştərilərə checkout zamanı sayt şablonu seçməyə imkan verir. Bu sahə, Ultimate Multisite v2.6.1-də əlavə edilmiş **single step** və **multi-step** checkout form şablonlarına avtomatik olaraq daxil edilmişdir.

#### Adding the field manually

v2.6.1-dən əvvəl yaradılmış və ya blank şablonundan başlayan bir formayla işləyirsinizsə:

1. **Ultimate Multisite > Checkout Forms**-a keçin və checkout formanı redaktə edin.
2. Sayt detallarının toplandığı addımda **Add new Field** düymasına klikləyin.
3. Sahə növü dialoq pəncerasından **Template Selection** seçin.
4. Sahəni konfiqurasiya edin:
   - **Label** — Müştərilərin şablon paneli yuxarısında gördüyü başlıq (məsələn, "Choose a site template").
   - **Required** — Müştərilərin davam etməzdən əvvəl şablon seçməli olub-olmaması.

#### How it works

Müştəri checkout zamanı bir şablon seçdikdə, Ultimate Multisite bunu yeni sayt qurarkən istifadə edir. Göstərilən şablonlar sizin **Site Templates** siyahınızdan (**Ultimate Multisite > Site Templates**) gəlir. Yalnız müştərilərə mövcud olduğu işarələnmiş şablonlar burada görünür.

#### Removing the field

Əgər sayt şablonları təklif etmirsinizsə, Template Selection sahəsini formanızdan silin. Müştərilər o zaman **Ultimate Multisite > Settings > Site Templates** altında konfiqurasiya edilmiş hansı default şablonu varsa, onu alacaqlar.
