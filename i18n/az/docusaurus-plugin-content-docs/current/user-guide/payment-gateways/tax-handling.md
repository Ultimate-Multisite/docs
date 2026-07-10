---
title: Vergilərin idarə olunması
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Vergi İdarəetməsi {#tax-handling}

Ultimate Multisite əsas plugin-imizə daxil edilmiş vergi toplama moduluna malikdir, buna görə planlarınız, paketləriniz və xidmətləriniz üzrə satış vergilərini toplamalısınızsa, bunu heç bir add-on quraşdırmağa müraciət etmədən asanlıqla edə bilərsiniz.

Avropada yerləşən şirkətlər üçün VAT uyğunluğunu daha yaxşı **dəstəkləmək** üçün alətlər və funksiyalar əlavə edən bir **add-on** təklif edirik.

Ultimate Multisite sizin adınızdan hökumətə vergi bəyannaməsi təqdim etmir və ya vergi ödəmir; biz sadəcə tranzaksiya zamanı uyğun vergiləri toplamağınıza kömək edirik. **Vergiləri yenə də özünüz ödəməli olacaqsınız.**

## Vergi Toplamanın Aktivləşdirilməsi {#enabling-tax-collection}

Vergi toplama standart olaraq aktiv deyil. Onu aktivləşdirmək üçün **Ultimate Multisite > Settings > Taxes** bölməsinə keçməli və Enable Taxes ayarını aktivləşdirmək üçün keçidi dəyişməlisiniz.

![Tax ayarları səhifəsinin yuxarısında Enable Taxes keçidi](/img/config/settings-taxes-enable.png)

Vergi ayarları səhifəsinin tam görünüşü belədir:

![Tax ayarlarının tam səhifəsi](/img/config/settings-taxes-full.png)

Ayrı-ayrı məhsullar üçün vergi ayarlarına da baxa bilərsiniz:

![Məhsullar üçün vergi ayarları](/img/config/settings-taxes.png)

### Vergi xaric vs. Vergi daxil {#tax-excluded-vs-tax-included}

Standart olaraq, bütün məhsul qiymətləriniz vergi xaricdir, yəni vergilər məhsulun qiymətinə **daxil deyil**. Müəyyən bir alış üçün müştərinin vergi ödəməli olduğunu müəyyən etsək, vergiləri ara cəmin **üzərinə** əlavə edəcəyik.

Vergilərin məhsulunuzun qiymətinə daxil olmasını istəyirsinizsə, bunu **Inclusive Tax** ayarını aktivləşdirərək edə bilərsiniz.

![Enable Taxes ayarının altında Inclusive Tax keçid sətri](/img/config/settings-taxes-inclusive.png)

Etdiyiniz dəyişiklikləri **yadda saxlamağı** unutmayın.

###

## Vergi Dərəcələrinin Yaradılması {#creating-tax-rates}

Tax Collection aktivləşdirildikdən sonra vergi dərəcələri redaktorumuzdan istifadə edərək konkret məkanlar üçün vergi dərəcələri yaratmalısınız.

Redaktora Tax ayarları səhifəsinin yan panelindəki **Manage Tax Rates** düyməsinə klikləməklə daxil ola bilərsiniz.

![Ayarlar səhifəsində Tax Rates panelində Manage Tax Rates linki](/img/config/settings-taxes-manage-rates.png)

Vergi dərəcələri redaktoru səhifəsində **Add new Row** düyməsinə klikləməklə yeni Tax Rates əlavə edə bilərsiniz.

![Yuxarıda Add new Row düyməsi olan vergi dərəcələri redaktoru cədvəli](/img/config/tax-rates-editor.png)

Hər vergi dərəcəsinə bir **başlıq** verməlisiniz (fakturalarda istifadə olunur). Sonra bu verginin tutulacağı **ölkəni** (məcburi), **ştatı,** və **şəhəri** (hər ikisi ixtiyari) seçə bilərsiniz. Sonda **vergi dərəcəsini faizlə** əlavə edin.

### Vergi Kateqoriyaları {#tax-categories}

Müxtəlif növ məhsullar üçün fərqli vergi dərəcələri əlavə etmək məqsədilə bir neçə Tax Categories də yarada bilərsiniz.

**Add new Tax Category** düyməsinə klikləyin, sonra kateqoriyanızın adını yazın və **Create** düyməsini basın.

![Vergi dərəcələri redaktorunun yuxarısında Add new Tax Category düyməsi](/img/config/tax-categories-add.png)

![Kateqoriya yaratma modalında Tax Category Name giriş sahəsi](/img/config/tax-categories-create-modal.png)

Kateqoriyalar arasında gəzmək üçün **Switch** düyməsinə klikləyin və yeni vergilər əlavə etmək istədiyiniz kateqoriyanı seçin.

![Vergi kateqoriyaları arasında dəyişmək üçün Switch açılan siyahı düyməsi](/img/config/tax-categories-switch.png)

![Mövcud kateqoriyaları göstərən vergi kateqoriyası seçici açılan siyahısı](/img/config/tax-categories-select.png)

Müəyyən bir məhsul üçün vergi kateqoriyasını **Product edit page** bölməsinə, sonra isə Taxes tabına keçərək təyin edə bilərsiniz.

![Vergi kateqoriyası və taxable keçidi olan məhsul vergiləri tabı](/img/config/product-taxes.png)

Eyni ekranda, Ultimate Multisite-a həmin məhsul üzrə vergi toplamamalı olduğunu bildirmək üçün **Is Taxable?** keçidini söndürə bilərsiniz.

## Avropa VAT Dəstəyi {#european-vat-support}

Daha əvvəl qeyd edildiyi kimi, Avropa VAT qaydalarına görə əlavə tələbləri olan AB-dəki müştərilər üçün əlçatan bir add-on-umuz var.

VAT alətlərimiz bir neçə vacib məsələdə kömək edir:

  * AB VAT dərəcələrinin asan yüklənməsi;

  * VAT nömrəsinin toplanması və doğrulanması - və VAT-dan azad qurumlar üçün əks ödəniş tətbiqi (məsələn, etibarlı VAT nömrəsi olan şirkətlər);

Həmin add-on-u quraşdırmaq üçün **Ultimate Multisite > Settings** bölməsinə keçin və sonra yan paneldəki **Check our Add-ons** linkinə klikləyin.

![Check our Add-ons linki olan Settings səhifəsi yan paneli](/img/config/settings-taxes-addons-link.png)

Add-ons səhifəmizə yönləndiriləcəksiniz. Orada **Ultimate Multisite VAT add-on** axtarıb quraşdıra bilərsiniz.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Sonra **Network Admin > Plugins** bölməsinə keçin və həmin add-on-u bütün şəbəkə üzrə aktivləşdirin.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

**Tax Settings tab**-ına qayıtsanız, yeni seçimlərin mövcud olduğunu görəcəksiniz. Yeni VAT alətlərini aktivləşdirmək üçün **Enable VAT Support** seçimini aktivləşdirin. Ayarlarınızı **yadda saxlamağı** unutmayın!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT Vergi Dərəcələrinin Çəkilməsi {#pulling-on-vat-tax-rates}

İnteqrasiyamızın əlavə etdiyi alətlərdən biri AB üzv dövlətləri üçün vergi dərəcələrini yükləmək imkanıdır. Bu, EU VAT dəstəyi aktivləşdirildikdən sonra vergi dərəcələri redaktoru səhifəsinə daxil olmaqla edilə bilər.

Səhifənin aşağı hissəsində VAT çəkmə seçimlərini görəcəksiniz. Dərəcə növünü seçib **Update EU VAT Rates** düyməsinə kliklədikdə, hər bir AB üzv dövləti üçün vergi dərəcələri çəkiləcək və cədvəl avtomatik doldurulacaq. Sonra yalnız onu yadda saxlamağınız lazımdır.

![Vergi dərəcələri redaktorunun aşağı hissəsində Update EU VAT Rates düyməsi](/img/config/tax-rates-vat-pull.png)

Dəyərləri çəkdikdən sonra onları redaktə də edə bilərsiniz. Bunu etmək üçün sadəcə lazım olan cədvəl sətrini redaktə edin və yeni dəyərləri yadda saxlamaq üçün klikləyin.

### VAT Doğrulaması {#vat-validation}

VAT dəstəyi aktiv olduqda, Ultimate Multisite checkout formasına, billing address sahəsinin altına əlavə bir sahə əlavə edəcək. Sahə yalnız AB-də yerləşən müştərilər üçün görünəcək.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite daha sonra VAT nömrəsini yoxlayacaq və əgər etibarlı olduğu təsdiqlənərsə, reverse charge mexanizmi tətbiq ediləcək və həmin sifarişdə vergi dərəcəsi 0% olaraq təyin ediləcək.
