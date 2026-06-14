---
title: Vergi Emalı
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Vergi İdarəetməsi

Ultimate Multisite, əsas plugin-imizə daxil edilmiş bir vergi toplama modulu ilə gəlir. Beləliklə, əgər planlarınız, paketləriniz və xidmətləriniz üzrə satış vergisi toplamaq istəyirsinizsə, heç bir add-on quraşdırmadan bunu asanlıqla edə bilərsiniz.

Avropa ölkələrində yerləşən şirkətlər üçün isə, **ƏDV (VAT)** uyğunluğuna daha yaxşı dəstək vermək üçün alətlər və funksiyalar əlavə edən bir **add-on** təklif edirik.

Ultimate Multisite sizin adınıza hökumətə vergi ödəmir və ya köçürmür; biz sadəcə əməliyyat zamanı müvafiq vergilərin toplanmasına kömək edirik. **Vergiləri ödəniş etmək məsuliyyəti hələ də sizin olar.**

## Vergi Toplamağı Aktivləşdirmək

Vergi toplamaq standart olaraq aktiv deyil. Bunu aktivləşdirmək üçün **Ultimate Multisite > Settings > Taxes** səhifəsinə keçməli və "Enable Taxes" ayarını aktivləşdirməlisiniz.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Vergi ayarları səhifəsinin tam görünüşü budur:

![Tax settings full page](/img/config/settings-taxes-full.png)

Həmçinin, fərdi məhsullar üçün vergi ayarlarını da görə bilərsiniz:

![Tax settings for products](/img/config/settings-taxes.png)

### Vergisiz mi yoxsa Vergi daxil mi

Standart olaraq, bütün məhsul qiymətləriniz vergisizdir, yəni vergilər məhsulun qiymətinə **daxil deyil**. Əgər müştərinin müəyyən bir alış-veriş üzrə vergi ödəməsi lazım olduğuna qərar verərsək, vergini alt-iqtisadiyə **əlavə edəcəyik**.

Əgər vergilərin məhsulun qiymətinə daxil olmasını üstün tutursunuzsa, bunu **Inclusive Tax** (Vergi daxil) ayarını aktivləşdirərək edə bilərsiniz.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Ediğiniz dəyişiklikləri **yadda saxlamağı** unutmayın.

###

## Vergi Tarifləri Yaratmaq

Vergi Toplamağını aktivləşdirdikdən sonra, vergi tarifləri redaktoru vasitəsilə müəyyən yerlər üçün vergi tarifləri yaratmalısınız.

Redaktora, Vergi ayarları səhifəsinin yan çubuğundakı **Manage Tax Rates** düymasına klikləyərək daxil ola bilərsiniz.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Vergi tarifləri redaktoru səhifəsində, **Add new Row** düymasına klikləyərək yeni Vergi Tarifləri əlavə edə bilərsiniz.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Hər vergi tarifinə bir **başlıq** (fakturalarda istifadə olunur) verməlisiniz. Sonra bu verginin hansı **ölkə** (mütləq), **şəhər** və **şehir** (hər ikisi isteğe bağlı) üzrə tətbiq ediləcəyini seçə bilərsiniz. Nəhayət, **vergi faizini** əlavə edin.

### Vergi Kateqoriyaları

Fərqli məhsul növləri üçün fərqli vergi tarifləri əlavə etmək üçün bir neçə Vergi Kateqoriyası da yarada bilərsiniz.

**Add new Tax Category** düymasına klikləyin, sonra kateqoriya adınızı yazın və **Create** düymasına basın.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Kateqoriyalara baxmaq üçün **Switch** düymasına klikləyin və yeni vergilər əlavə etmək istədiyiniz kateqoriyanı seçin.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Müəyyən bir məhsul üçün vergi kateqoriyasını **Product edit page** səhifəsinə və sonra Taxes tab-ına keçərək təyin edə bilərsiniz.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Eyni ekranda, Ultimate Multisite-ə həmin məhsul üzrə vergi toplamaq lazım olmadığını bildirmək üçün **Is Taxable?** (Vergiye tabe?) düymasını söndürə bilərsiniz.

## Avropa ƏDV Dəstəyi

Əvvəl qeyd etdiyimiz kimi, Avropa ƏDV qaydaları səbəbindən əlavə tələbləri olan EU müştəriləri üçün bir add-on mövcuddur.

ƏDV alətlərimiz bir neçə vacib şeyə kömək edir:

*   EU ƏDV tariflərinin asan yüklənməsi;
*   ƏDV Nömrəsi toplama və yoxlanılması – və ƏDV-dən azad olan qurumlar üçün (məsələn, etibarlı ƏDV nömrəsi olan şirkətlər) tərs vergiləndirmə.

Bu add-onu quraşdırmaq üçün **Ultimate Multisite > Settings** səhifəsinə gedin və sonra yan çubuqdakı **Check our Add-ons** linkinə klikləyin.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Sizi add-on-lar səhifəmizə yönləndirəcək. Orada **Ultimate Multisite VAT add-on** axtarıb onu quraşdıra bilərsiniz.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Sonra, **Network Admin > Plugins** səhifəsinə keçin və bu add-onu bütün şəbəkə üçün aktivləşdirin.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Əgər **Tax Settings tab** səhifəsinə qayıtsanız, yeni seçimlər görməyəcəksiniz. Yeni ƏDV alətlərini aktivləşdirmək üçün **Enable VAT Support** seçiminə keçirin. Ayarlarınızı **yadda saxlamağı** unutmayın!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### ƏDV Vergi Tariflərini Çəkmək (Pulling)

İnteqrasiyamızın əlavə etdiyi alətlərdən biri də EU üzv dövlətləri üçün vergi tariflərini yükləmək imkanıdır. Bu, EU ƏDV dəstəyini aktivləşdirdikdən sonra vergi tarifləri redaktoru səhifəsinə daxil olmaqla edilə bilər.

Səhifənin altında ƏDV çəkmə (pulling) seçimlərini görəcəksiniz. Bir tarif növü seçib **Update EU VAT Rates** düymasına klikləmək, hər bir EU üzv dövləti üçün vergi tarifləri ilə cədvəli yükləyəcək və avtomatik dolduracaq. Sonra, sadəcə yadda saxlamaq kifayətdir.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Çəkdikdən sonra dəyərləri də redaktə edə bilərsiniz. Bunu etmək üçün, sadəcə lazım olan cədvəl sətirini redaktə edin və yeni dəyərləri yadda saxlamaq üçün klikləyin.

### ƏDV Yoxlaması (Validation)

ƏDV dəstəyi aktivləşdirildikdə, Ultimate Multisite ödəniş formasına, fakturalandırma ünvanı sahəsinin altına əlavə bir sahə əlavə edəcək. Bu sahə yalnız EU-da yerləşən müştərilər üçün görünəcək.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite sonra ƏDV Nömrəsini yoxlayacaq və əgər bu nömrə etibarlı olaraq gəlsə, tərs vergiləndirmə mexanizmi tətbiq ediləcək və həmin sifariş üzrə vergi faizi 0% olaraq təyin ediləcək.
