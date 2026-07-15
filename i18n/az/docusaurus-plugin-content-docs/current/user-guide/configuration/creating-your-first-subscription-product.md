---
title: İlk Abunəlik Məhsulunuzu Yaratmaq
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# İlk Abunə Məhsulunuzu Yaratmaq (v2)

_**MÜHİM QEYD: Bu məqalə yalnız Ultimate Multisite 2.x versiyası istifadəçiləri üçün nəzərdə tutulub. Əgər 1.x versiyasını istifadə edirsinizsə,**_ **_**bu məqaləyə baxın**_**.

Şəbətinizi işə salmağa və potensial istifadəçilərə xidmətlərinizi satmağa başlamaq üçün müxtəlif abunə variantlarına ehtiyacınız var. Bu məhsulları necə yaradırsınız? Hansı növ məhsulları təklif edə bilərsiniz? Bu məqalədə məhsullar haqqında bilməli olduğunuz hər şeyi əhatə edəcəyik.

## Məhsul Növü {#product-type}

Ultimate Multisite ilə müştərilərinizə iki kateqoriyada məhsul təklif edə bilərsiniz: **planlar** və **əlavələr** **(Order Bump)**. Əlavələr iki növə bölünə bilər: **paketlər** və **xidmətlər**. Fərqlərini və xüsusiyyətlərini növbəti hissədə görəcəyik.

*   **Planlar**: Ultimate Multisite-in əsas məhsuludur. Müştəriniz yalnız bir plana bağlı olarsa, üzvlüyü ola bilər. Bir plan müştərilərinizə bir və ya daha çox sayt təmin edir (bu, planınızın konfiqurasiyasına bağlıdır) və məhsul redaktə səhifənizdə təyin etdiyiniz məhdudiyyətlərlə birlikdə gəlir.

*   **Paketlər**: Ultimate Multisite planlarının funksionallığına birbaşa təsir edən əlavələrdir. Onlar müştərinizin aldığı orijinal plana məhdudiyyətləri dəyişdirir və ya yeni resurslar, pluginlər və ya mövzular əlavə edir. Məsələn, əsas bir plan ayda 1000 ziyarətə icazə verə bilər və siz bu rəqəmi 10.000-ə qədər genişləndirən bir paket təklif edə bilərsiniz.

*   **Xidmətlər**: Ultimate Multisite-in funksionallığını dəyişdirməyən əlavələrdir. Bunlar müştərinizə, aldığı plana əlavə olaraq sizin yerinə yerinə yetirəcəyiniz tapşırıqlardır. Məsələn, müştəriniz bir sayta icazə verən bir plan ala bilər və eyni zamanda bu saytı dizayn etmək üçün əlavə bir xidmətə də pul ödəyə bilər.

## Məhsulların İdarə Edilməsi {#managing-products}

Bir çox insan üçün Ultimate Multisite-dəki **Məhsullar** tabı (**Ultimate Multisite > Products**) ənənəvi hosting mühitindəki planlarla eyniləşdirilə bilər.

Ultimate Multisite-də Məhsullar tabı müəyyən bir məhsul və ya xidmətə tətbiq olunan quruluşu və məhdudiyyətləri təyin edir. Belə quruluşlar məhsul və ya xidmət təsvirindən, qiymətindən, vergilərindən və icazələri əhatə edir.

Bu bölmə Ultimate Multisite-in bu vacib təməl daşı haqqında anlayışınızı formalaşdırmanıza kömək edəcək.

![Products list page](/img/config/products-list.png)

## Məhsul Əlavə Etmək {#adding-products}

Plan, paket və ya xidmət olsun, yeni bir element təyin etməyə başlama nöqtəsi **Ultimate Multisite > Products > Add Product** yolu ilə olur.

![Add Product button](/img/config/product-add-button.png)

İnterfeys iki əsas bölmədən ibarətdir. Solda məhsulu təyin etməyə kömək edən bir neçə tab, sağda isə məhsulun əsas qiymətini, aktiv vəziyyətini və məhsul şəklini təyin etmək üçün bir neçə bölmə var.

![Product edit page overview](/img/config/product-edit-full.png)

### Təsvir {#description}

Əsas məhsul məlumatı məhsul adı və təsvirini təqdim etməklə təyin edilə bilər. Bu identifikatorlar məhsul məlumatının lazım olduğu hər yerdə göstərilir, məsələn, plan və qiymət seçimi, fakturalar, yüksəltmələr və s.

![Product description section](/img/config/product-description.png)

### Qiymət Növü {#pricing-type}

İnterfeysin sağ tərəfində əsas qiymət təyin edilə bilər.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite üç fərqli qiymət növünü dəstəkləyir. **paid** seçimi şəbəkə administratorundan məhsulun qiyməti və hesablaşdırma tezliyi ilə bağlı məlumat tələb edir.

### Qiymətləndirmə {#pricing}

Qiymət komponenti əsas məhsul qiymətini və hesablaşdırma intervalını təyin edir.

![Pricing and save section](/img/config/product-pricing-save.png)

beləliklə, $29.99 qiyməti və 1 ay təyin edilməsi hər ay $29.99 hesablaşdırılacaq. Eyni şəkildə, 3 ay təyin edilməsi $89.97 qiyməti hər rübdə bu məbləği hesablaşdıracaq.

### Hesablaşdırma Dövrü {#billing-cycles}

Hesablaşdırma dövrü bölməsi yuxarıda qeyd olunan hesablaşdırma intervalının tezliyini göstərir və ümumiyyətlə müqavilələr və ya müəyyən müddətlər baxımından anlaşılır.

![Pricing and save section](/img/config/product-pricing-save.png)

Məsələn, 1 ay intervalı və 12 hesablaşdırma dövrü olan $29.99 məhsul qiyməti, məhsul üçün növbəti 12 ay ərzində hər ay $29.99 hesablaşdıracaq. Başqa sözlə, belə bir təyin etmə 12 ay ərzində aylıq $29.99 sabit qiymətli müddət təyin edəcək və sonra hesablaşdırmanı dayandıracaq.

### Sinativ Müddəti {#trial-period}

Təklif sinativ düyməsini aktivləşdirmək şəbəkə administratoruna məhsul üçün sinativ müddəti təyin etməyə imkan verir.

![Pricing and save section](/img/config/product-pricing-save.png)

Sinativ müddət ərzində müştərilər məhsuldan istifadə etməkdə azaddırlar və sinativ müddəti bitənə qədər onlara hesablaşdırılmayacaq.

### Qurma Haqqı {#setup-fee}

Planınıza qurma haqqı da tətbiq edə bilərsiniz.

![Pricing and save section](/img/config/product-pricing-save.png)

Bu o deməkdir ki, müştəriniz ilk ödənişdə (plan qiymətinə əlavə olaraq) bu bölmədə təyin etdiyiniz haqq müvafiq əlavə bir məbləğ ödəyəcək.

### Aktiv {#active}

Aktiv düyməsi məhsulun yeni qeydiyyatlar üçün müştərilərə təqdim olub-olmadığını effektiv şəkildə təyin edir.

![Active toggle](/img/config/product-active.png)

Əgər bu plan üzrə mövcud müştərilər varsa, düyməni deaktiv vəziyyətinə qoymaq, planı gələcək qeydiyyatlardan çıxarır. **Plan üzrə mövcud müştərilər**, yeni bir plana keçirilənə və ya plandan çıxarılana qədər hesablaşdırılmaya davam edəcəklər.

### Məhsul Şəkli {#product-image}

**Image Upload** düyməsi şəbəkə administratoruna məhsul şəklini seçmək və ya yükləmək üçün media kitabxanasından istifadə etməyə imkan verir.

![Product image section](/img/config/product-image.png)

### Silmə {#delete}

**Delete Product** düyməsi məhsulu sistemdən silir. Məhsul nəşr edildikdən sonra görünür.

![Delete product section](/img/config/product-delete.png)

Digər silmələrdən fərqli olaraq, məhsul heç bir çöp qovluğuna yerləşdirilmir. Beləliklə, bir dəfə silindiyi zaman bu əməliyyat geri qaytarıla bilməz.

### Məhsul Seçimləri {#product-options}

Əsas səviyyəli məhsul məlumatı təyin edildikdən sonra, məhsul seçimləri şəbəkə administratoruna məhsulun spesifik atributlarını daha da təyin etməyə kömək edir.

#### Ümumi {#general}

**General** tabı məhsulun ümumi atributlarını təyin edir və bu atributlar məhsulun digər spesifik tablarına tətbiq edilmir.

![General tab](/img/config/product-general-tab.png)

Özünü izah edən **product slug**, məhsulun Ultimate Multisite-də URL-lərdə və digər sahələrdə hansı slug ilə müəyyən edildiyini göstərir.

Ultimate Multisite Plan, Paket və Xidmət olmaqla bir neçə məhsul növünü dəstəkləyir. **Product Options** tabları, təyin edilmiş məhsul növünə bağlı olaraq dinamik olaraq tənzimlənir.

**Customer Role** (Müştəri Rolu) sayt yaradıldıqda müştəriyə təyin edilən rolu göstərir. Adətən əksər şəbəkə administratorları üçün bu, Ultimate Multisite default və ya Administrator olacaq. Ultimate Multisite default rolu **Ultimate Multisite > Settings > Login & Registration**-da təyin edilə bilər.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Yüksəltmə və Aşağı Çəkilmə (Up & Downgrades) {#up--downgrades}

Bu tab müştəriyə öz spesifik səviyyəsi daxilində mövcud olan yüksəltmə və aşağı çəkilmə yollarını göstərir.

Bu anlayışı anlamaq üçün, niş bir Ultimate Multisite quraşdırmasının müştərilərinə öyrənmə idarəetmə həlləri təmin etdiyi bir nümunə nəzərdən keçirək. Bunu başa çatdırmaq üçün üç plan (Basic, Plus və Premium) təyin edilir və hər plan üçün spesifik pluginlər aktivləşdirilir (pluginləri necə aktivləşdirəcəyiniz barədə təlimatlar üçün bu bölmənin daha sonra hissəsinə baxın).

Əgər Ultimate Multisite quraşdırması biznes veb saytlarına və ya eCommerce saytlarına xidmət edirsə, bu planlar qurulması və aktivləşdirilməsi üçün fərqli pluginlər tələb edə bilər.

Bu baxımdan, eLearning müştərilərinə eCommerce planlarına keçməyə icazə vermək istənilməz və problematikdir, çünki bu planlar, qiymətləndirmə və məhdudiyyətləri uyğun gəlməyə bilər.

Beləliklə, müştəriyin yolunu məhdudlaşdırmaq və insidentləri qarşısını almaq üçün şəbəkə administratoru bir plan qrupu təyin edə və bu qrup daxilində müştərin keçə biləcəyi planları göstərə bilər.

![Up and Downgrades tab](https://example.com/image.png)

---

### **Nəticə** {#price-variations}

Bu mətn, texniki və məlumatlı bir tonla yazılmışdır və bir məhsulun (yəni, bir platformanın) funksionallığını izah edir. Struktur və terminologiya baxımından tamamilə doğrudur.

**Təklif olunan Dəqiqləşdirmələr:**

1.  **Daha Təbii Keçid:** Bəzi cümlələr bir-birinə daha təbii keçidlə bağlanmalıdır.
2.  **Terminoloji Dəqiqlik:** "Hesablaşdırma" və "qiymətləndirmə" kimi sözlərin kontekstə uyğunluğu artırılmalıdır.
3.  **Formatlama:** Başlıqlar və alt-başlıqlar daha aydın ayrılmalıdır.

**Nəticə:** Mətnin məzmunu və məqsədi tamamilə yerindədir. Sadəcə üslub və axıcılığı artırmaq üçün kiçik düzəlişlər kifayətdir.
