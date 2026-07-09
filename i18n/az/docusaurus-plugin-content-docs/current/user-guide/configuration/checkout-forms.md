---
title: Ödəniş formaları
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Ödəniş formaları {#checkout-forms}

Ödəniş formaları yeni müştəriləri çevirməyə çalışarkən müxtəlif yanaşmaları sınaqdan keçirmək üçün asan və çevik üsuldur.

Ultimate Multisite 2.0 istədiyiniz qədər forma yaratmağa imkan verən, müxtəlif sahələr, təklif olunan məhsullar və s. olan Ödəniş Forması redaktoru təqdim edir.

Bu funksiyaya daxil olmaq üçün sol yan paneldə Checkout Forms menyusuna keçin.

![Ödəniş formalarının siyahısı](/img/config/checkout-forms-list.png)

Bu səhifədə malik olduğunuz bütün ödəniş formalarını görə bilərsiniz.

Siyahı cədvəlində hər formanın hazırda müştərilər üçün əlçatan olub-olmadığını təsdiqləməyiniz üçün **Status** sütunu var:

| Status | Məna |
|---|---|
| **Aktiv** | Forma onun shortcode-u və ya qeydiyyat səhifəsi dərc olunduğu istənilən yerdə istifadə edilə bilər. |
| **Qeyri-aktiv** | Forma saxlanılıb, lakin deaktiv edilib. Siz onu yenidən aktiv etməyənə qədər müştərilər onunla ödənişi tamamlaya bilməzlər. |

İctimai qeydiyyat axınını redaktə etməzdən əvvəl, xüsusilə qaralama və ya mövsümi ödəniş formalarını canlı formalarınızla yanaşı saxladığınız zaman status sütunundan istifadə edin.

Yeni forma yaratmaq istəyirsinizsə, sadəcə səhifənin yuxarısındakı Add Checkout Form düyməsinə klikləyin.

Başlanğıc nöqtəsi kimi bu üç seçimdən birini seçə bilərsiniz: tək addımlı, çox addımlı və ya boş. Sonra Go to the Editor düyməsinə klikləyin.

Başlanğıc nöqtəsi kimi **tək addımlı** və ya **çox addımlı** seçdiyiniz zaman forma şablonu indi standart olaraq **Template Selection** sahəsini daxil edir. Bu sahə müştərilərinizə qeydiyyat prosesi zamanı sayt şablonu seçməyə imkan verir. Onu yerində saxlaya, silə və ya redaktordakı hər hansı digər sahə kimi yerini dəyişə bilərsiniz.

![Ödəniş forması redaktoru](/img/config/checkout-form-editor.png)

Alternativ olaraq, adının altındakı seçimlərə klikləyərək artıq mövcud olan formaları redaktə edə və ya dublikatını yarada bilərsiniz. Orada həmçinin formanın shortcode-unu kopyalamaq və ya formanı silmək seçimlərini tapacaqsınız.

![Ödəniş formasında üzərinə gətirmə əməliyyatları](/img/config/checkout-form-hover-actions.png)

#### Ödəniş forması redaktoruna baxış {#checkout-form-editor-overview}

Ödəniş forması redaktoru qeydiyyat formalarınızı qurmaq üçün hərtərəfli interfeys təqdim edir. Redaktor düzəninə ümumi baxış belədir:

![Ödəniş forması redaktoruna baxış](/img/config/checkout-form-editor-overview.png)

### Ödəniş formasının redaktə edilməsi {#editing-a-checkout-form}

Müxtəlif məqsədlər üçün ödəniş formaları yarada bilərsiniz. Bu nümunədə qeydiyyat forması üzərində işləyəcəyik.

Ödəniş forması redaktoruna keçdikdən sonra formanıza ad (yalnız daxili istinad üçün istifadə olunacaq) və slug (məsələn, qısa kodlar yaratmaq üçün istifadə olunur) verin.

![Ödəniş forması redaktoru](/img/config/checkout-form-editor.png)

Formalar addımlardan və sahələrdən ibarətdir. Add New Checkout Step düyməsinə klikləyərək yeni addım əlavə edə bilərsiniz.

![Yeni ödəniş addımı əlavə et](/img/config/checkout-form-add-step.png)

Modal pəncərənin birinci tabında formanızın addım məzmununu doldurun. Ona ID, ad və təsvir verin. Bu elementlər əsasən daxili istifadə olunur.

![Ödəniş forması addımının məzmun tabu](/img/config/checkout-form-step-content.png)

Sonra addımın görünməsini təyin edin. "Həmişə göstər", "Yalnız daxil olmuş istifadəçilər üçün göstər" və ya "Yalnız qonaqlar üçün göstər" seçimlərindən birini seçə bilərsiniz.

![Ödəniş forması addımının görünmə tabu](/img/config/checkout-form-step-visibility.png)

Nəhayət, addım üslubunu konfiqurasiya edin. Bunlar istəyə bağlı sahələrdir.

![Ödəniş forması addımının üslub tabu](/img/config/checkout-form-step-style.png)

İndi birinci addımımıza sahələr əlavə etməyin vaxtıdır. Sadəcə Add New Field düyməsinə klikləyin və istədiyiniz bölmə növünü seçin.

![Sahələri olan ödəniş forması addımı](/img/config/checkout-form-step-with-fields.png)

Hər sahənin doldurulmalı müxtəlif parametrləri var. Bu ilk giriş üçün "Username" sahəsini seçəcəyik.

![Sahə növü seçimi açılan siyahısı](/img/config/checkout-form-field-type-dropdown.png)

![Username sahəsinin məzmun ayarları](/img/config/checkout-form-username-content.png)

![Username sahəsinin görünmə ayarları](/img/config/checkout-form-username-visibility.png)

![Username sahəsinin üslub ayarları](/img/config/checkout-form-username-style.png)

Ehtiyacınız olan qədər addım və sahə əlavə edə bilərsiniz. Müştərilərinizin seçməsi üçün məhsullarınızı göstərmək məqsədilə Pricing Table sahəsindən istifadə edin. Müştərilərinizə şablon seçməyə imkan vermək istəyirsinizsə, Template Selection sahəsini əlavə edin. Və sair.

![Yeni sahə əlavə etmə dialoqu](/img/config/checkout-form-add-field-dialog.png)

_**Qeyd:** ödəniş forması yaratmaq üçün username, email, password, site title, site URL, order summary, payment və submit button məcburi sahələrdir._

Ödəniş formanız üzərində işləyərkən müştərilərinizin formanı necə görəcəyini görmək üçün istənilən vaxt Preview düyməsindən istifadə edə bilərsiniz. Həmçinin mövcud istifadəçi və ya ziyarətçi kimi görünüş arasında keçid edə bilərsiniz

![Ödəniş forması önizləmə düyməsi](/img/config/checkout-form-preview-button.png)

![Ödəniş forması önizləmə modalı](/img/config/checkout-form-preview-modal.png)

Nəhayət, Advanced Options bölməsində "Thank You" səhifəsi üçün mesajı konfiqurasiya edə, çevrilmələri izləmək üçün snippet-lər əlavə edə, ödəniş formanıza fərdi CSS əlavə edə və ya onu müəyyən ölkələrlə məhdudlaşdıra bilərsiniz.

![Qabaqcıl seçimlər](/img/config/checkout-form-advanced.png)

Siz həmçinin sağ sütunda bu seçimi dəyişdirərək ödəniş formanızı əl ilə aktiv və ya deaktiv edə, yaxud formanı həmişəlik silə bilərsiniz.

![Aktiv keçid düyməsi](/img/config/checkout-form-active.png)

Formanı silmək üçün forma əməliyyatlarında silmə seçiminə klikləyin:

![Ödəniş forması silmə seçimi](/img/config/checkout-form-delete.png)

Ödəniş formanızı yadda saxlamağı unutmayın!

![Yadda saxla düyməsi](/img/config/checkout-form-save.png)

Formanızın shortcode-unu əldə etmək üçün Generate Shortcode düyməsinə klikləyin və modal pəncərədə göstərilən nəticəni kopyalayın.

![Shortcode ilə yadda saxla düyməsi](/img/config/checkout-form-save.png)

### Pricing Table sahəsi {#the-pricing-table-field}

**Pricing Table** sahəsi məhsullarınızı ödəniş formasında göstərir ki, müştərilər plan seçə bilsinlər. Bu sahəni redaktə edərkən bir neçə seçimi konfiqurasiya edə bilərsiniz:

![Pricing Table sahəsinin ayarları](/img/config/pricing-table-field-settings.png)

Pricing table-ın frontend qeydiyyat formasında necə göründüyü belədir:

![Frontend checkout qiymət cədvəli](/img/config/frontend-checkout-pricing-table.png)

  * **Məhsullar**: Hansı məhsulların göstəriləcəyini və onların görünmə sırasını seçin.
  * **Fərqli Müddətləri Məcbur Et**: Aktiv edildikdə, hazırda seçilmiş hesablaşma dövrü üçün uyğun qiymət variasiyası olub-olmamasından asılı olmayaraq bütün məhsullar göstərilir. Deaktiv edildikdə (standart), seçilmiş dövr üçün variasiyası olmayan məhsullar gizlədilir.
    ![Qiymət cədvəlində müddətləri məcbur etmə seçimi](/img/config/pricing-table-force-durations.png)
  * **Əvvəlcədən Seçiləndə Gizlət**: URL vasitəsilə artıq plan seçilibsə (məsələn, `/register/premium`), qiymət cədvəlini gizlədir.
  * **Qiymət Cədvəli Şablonu**: Qiymət cədvəli üçün vizual şablonu seçin (Sadə Siyahı, Legacy və s.).

Formaya həmin məhsulun checkout axınını tamamlamaq üçün tələb olunan sahələr daxil edilməmişdən əvvəl Pricing Table-a məhsul əlavə etsəniz, redaktor indi xəbərdarlıq göstərir. Canlı qeydiyyat formasını dərc etməzdən və ya dəyişiklikləri yadda saxlamazdan əvvəl çatışmayan tələb olunan sahəni əlavə etmək üçün xəbərdarlıqdan istifadə edin.

### Dövr Seçimi Keçidi Əlavə Etmək {#adding-a-period-selection-toggle}

Məhsullarınızda [Qiymət Variasiyalarını](creating-your-first-subscription-product#price-variations) konfiqurasiya etmisinizsə (məsələn, aylıq və illik qiymətləndirmə), checkout formanıza **Dövr Seçimi** sahəsi əlavə edə bilərsiniz. Bu sahə müştərilərə hesablaşma dövrləri arasında keçid etməyə imkan verən keçid göstərir və qiymət cədvəli real vaxtda dinamik olaraq yenilənir.

#### Addım 1: Məhsullarınızda Qiymət Variasiyalarını Quraşdırın {#step-1-set-up-price-variations-on-your-products}

Dövr Seçimi sahəsini əlavə etməzdən əvvəl məhsullarınızda qiymət variasiyalarının konfiqurasiya edildiyinə əmin olun. **Ultimate Multisite > Products** bölməsinə gedin, bir məhsulu redaktə edin və alternativ hesablaşma dövrləri əlavə etmək üçün **Price Variations** vərəqəsinə keçin (məsələn, endirimli qiymətlə İllik).

![Məhsulda Price Variations vərəqəsi](/img/config/product-price-variations-tab.png)

#### Addım 2: Checkout Formanıza Dövr Seçimi Sahəsini Əlavə Edin {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. **Ultimate Multisite > Checkout Forms** bölməsinə gedin və checkout formanızı redaktə edin.

2. **Pricing Table** sahənizi ehtiva edən addıma qədər aşağı sürüşdürün və **Add new Field** düyməsinə klikləyin.

3. Sahə növü seçimi dialoqunda **Period Select** üzərinə klikləyin.

![Period Select göstərən Add New Field dialoqu](/img/config/checkout-form-add-field-dialog.png)

4. Dövr seçimlərini konfiqurasiya edin. Hər seçimə lazımdır:
   * **Müddət**: Rəqəm (məsələn, `1`)
   * **Müddət vahidi**: Dövr növü (Günlər, Həftələr, Aylar və ya İllər)
   * **Etiket**: Müştərilərin görəcəyi mətn (məsələn, "Aylıq", "İllik")

5. Daha çox dövr seçimi əlavə etmək üçün **+ Add Option** üzərinə klikləyin. Bu seçimlər məhsullarınızda konfiqurasiya etdiyiniz qiymət variasiyaları ilə uyğun olmalıdır.

![Dövr Seçimi sahəsi parametrləri](/img/config/period-selection-field-settings.png)

6. **Dövr Seçicisi Şablonu** seçin (Clean standartdır və xüsusi CSS üçün hazır, sadə üslublu seçici göstərir).

7. **Save Field** üzərinə klikləyin.

#### Addım 3: Sahəni Qiymət Cədvəlinin Üstündə Yerləşdirin {#step-3-position-the-field-above-the-pricing-table}

Ən yaxşı istifadəçi təcrübəsi üçün Dövr Seçimi sahəsinin checkout addımınızda Pricing Table sahəsindən **əvvəl** göründüyünə əmin olun. Checkout forma redaktorunda sahələri sürükləyərək onların sırasını dəyişə bilərsiniz. Beləliklə, müştərilər əvvəlcə hesablaşma dövrünü seçir, sonra isə həmin dövr üçün qiymətləri görürlər.

![Sahə sırasını göstərən checkout forma redaktoru](/img/config/checkout-form-editor-with-fields.png)

#### Frontend-də Necə İşləyir {#how-it-works-on-the-frontend}

Konfiqurasiya edildikdən sonra qeydiyyat səhifənizə gələn müştərilər qiymət cədvəlinin üstündə dövr seçicisini görəcəklər. Onlar fərqli hesablaşma dövrünə kliklədikdə:

  * Qiymət cədvəli seçilmiş dövr üçün qiymətləri göstərmək məqsədilə dərhal yenilənir (səhifənin yenidən yüklənməsi tələb olunmur).
  * Pricing Table sahəsində **Fərqli Müddətləri Məcbur Et** deaktivdirsə, seçilmiş dövr üçün qiymət variasiyası olmayan məhsullar gizlədiləcək.
  * **Fərqli Müddətləri Məcbur Et** aktivdirsə, seçilmiş dövr üçün variasiyası olmasa belə bütün məhsullar görünən qalır (onlar öz standart qiymətini göstərəcək).

#### URL vasitəsilə Hesablaşma Dövrünü Əvvəlcədən Seçmək {#pre-selecting-a-billing-period-via-url}

URL vasitəsilə məhsulu və hesablaşma dövrünü də əvvəlcədən seçə bilərsiniz. Ultimate Multisite bu URL nümunələrini dəstəkləyir:

  * `/register/premium` — Yalnız "Premium" məhsulunu əvvəlcədən seçir
  * `/register/premium/12` — Məhsulu və 12 aylıq müddəti əvvəlcədən seçir
  * `/register/premium/1/year` — Məhsulu 1 illik müddətlə əvvəlcədən seçir

### Şablon Seçimi Sahəsi {#the-template-selection-field}

**Şablon Seçimi** sahəsi müştərilərə checkout zamanı sayt şablonu seçməyə imkan verir. O, indi Ultimate Multisite v2.6.1-də əlavə edilmiş **tək addımlı** və **çox addımlı** checkout forma şablonlarına standart olaraq daxildir.

#### Sahəni əl ilə əlavə etmək {#adding-the-field-manually}

v2.6.1-dən əvvəl yaradılmış forma ilə işləyirsinizsə və ya boş şablondan başlamısınızsa:

1. **Ultimate Multisite > Checkout Forms** bölməsinə gedin və checkout formanızı redaktə edin.
2. Sayt təfərrüatlarının toplandığı addımda **Add new Field** üzərinə klikləyin.
3. Sahə növü dialoqundan **Template Selection** seçin.
4. Sahəni konfiqurasiya edin:
   - **Etiket** — Müştərilərin şablon torunun üstündə gördüyü başlıq (məsələn, "Sayt şablonu seçin").
   - **Tələb olunur** — Davam etməzdən əvvəl müştərilərin şablon seçməsinin məcburi olub-olmaması.

#### Necə işləyir {#how-it-works}

Müştəri checkout zamanı şablon seçdikdə, Ultimate Multisite onların yeni saytını hazırlayarkən ondan istifadə edir. Göstərilən şablonlar **Site Templates** siyahınızdan gəlir (**Ultimate Multisite > Site Templates**). Burada yalnız müştərilər üçün əlçatan kimi işarələnmiş şablonlar görünür.

### Checkout formasının baza domenləri {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 checkout forması **Site URL** sahələrində konfiqurasiya edilmiş domenləri şəbəkə baza domenləri kimi qəbul edir. Müştərilərin `example.com` və `sites.example.com` kimi bir və ya daha çox ortaq qeydiyyat domeni altında saytlar yaratmasını istədikdə sahənin mövcud domen parametrlərindən istifadə edin.

Paylaşılan checkout-form baza domenləri hər sayt üçün xüsusi domen xəritələmələri kimi qəbul edilmir. Müştəri həmin bazalardan birində alt-kataloq saytı yaratdıqda, Ultimate Multisite paylaşılan hostun yalnız həmin bir sayta aid olmasına səbəb olacaq xəritələnmiş domen qeydi yaratmır. Paylaşılan host eyni checkout form bazasından istifadə edən qardaş saytlar üçün əlçatan qalır.

Xüsusi domenləri `customer-example.com` kimi hər müştəri üçün xəritələnmiş hostlar üçün saxlayın. Checkout-form baza domenlərini bir çox saytın istifadə edə biləcəyi paylaşılan qeydiyyat hostları üçün saxlayın.

#### Sahənin silinməsi {#removing-the-field}

Sayt şablonları təklif etmirsinizsə, formanızdan Şablon Seçimi sahəsini silin. Müştərilər bundan sonra **Ultimate Multisite > Settings > Site Templates** altında konfiqurasiya edilmiş standart şablonu alacaqlar.
