---
title: Domen xəritələşdirilməsini necə konfiqurasiya etmək olar
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Domen xəritələnməsini necə konfiqurasiya etmək olar (v2)

_**VACİB QEYD: Bu məqalə Ultimate Multisite 2.x versiyasına aiddir.**_

Premium şəbəkənin ən güclü xüsusiyyətlərindən biri müştərilərimizə saytlarına üst səviyyəli domen qoşmaq imkanı təklif etməkdir. Axı, hansı daha peşəkar görünür: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) yoxsa [_**joesbikeshop.com**_](http://joesbikeshop.com)? Məhz buna görə Ultimate Multisite bu funksiyanı üçüncü tərəf plaginlərindən istifadə etməyə ehtiyac olmadan daxili şəkildə təklif edir.

## Domen xəritələnməsi nədir? {#whats-domain-mapping}

Adından da göründüyü kimi, domen xəritələnməsi Ultimate Multisite tərəfindən təklif olunan, fərdi domen üçün sorğunu qəbul edib həmin sorğunu şəbəkədə həmin xüsusi domenin qoşulduğu uyğun sayta yönləndirmək imkanıdır.

### Ultimate Multisite Şəbəkənizdə domen xəritələnməsini necə qurmaq olar {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Domen xəritələnməsinin işləməsi üçün sizin tərəfinizdən müəyyən quraşdırma tələb olunur. Xoşbəxtlikdən, Ultimate Multisite çətin işi sizin üçün avtomatlaşdırır ki, tələbləri asanlıqla yerinə yetirə biləsiniz.

Ultimate Multisite quraşdırılması zamanı sehrbaz **sunrise.php** faylını avtomatik olaraq təyin olunmuş qovluğa kopyalayıb quraşdıracaq. **Bu addım tamamlanana qədər sehrbaz davam etməyə icazə verməyəcək**.

<!-- Ekran görüntüsü əlçatan deyil: sunrise.php addımı ilə Ultimate Multisite quraşdırma sehrbazı -->

Bu o deməkdir ki, Ultimate Multisite quraşdırma sehrbazı şəbəkənizi qurmağı tamamladıqdan sonra fərdi domeni dərhal xəritələndirməyə başlaya bilərsiniz.

Nəzərə alın ki, Ultimate Multisite-də domen xəritələnməsi məcburi deyil. WordPress Multisite-in yerli domen xəritələnməsi funksiyasından və ya hər hansı digər domen xəritələnməsi həllindən istifadə etmək seçiminiz var.

Digər domen xəritələnməsi həllərinə yer açmaq üçün Ultimate Multisite domen xəritələnməsini deaktiv etməyə ehtiyacınız olarsa, bu funksiyanı **Ultimate Multisite > Parametrlər > Domen Xəritələnməsi** bölməsində deaktiv edə bilərsiniz.

![Admin yönləndirməsi, xəritələnmə mesajı və DNS seçimlərini göstərən Domen Xəritələnməsi parametrləri səhifəsi](/img/config/domain-mapping-settings.png)

Bu seçimin dərhal altında **Admin Yönləndirməsini Məcbur Et** seçimini də görə bilərsiniz. Bu seçim müştərilərinizin admin dashboard-larına həm fərdi domenlərində, həm də subdomenlərində, yoxsa yalnız onlardan birində daxil ola biləcəyini idarə etməyə imkan verir.

Əgər **Xəritələnmiş domenə məcburi yönləndir** seçsəniz, müştəriləriniz admin dashboard-larına yalnız fərdi domenlərində daxil ola biləcəklər.

**Şəbəkə domeninə məcburi yönləndir** seçimi isə bunun tam əksini edəcək - müştəriləriniz fərdi domenlərində daxil olmağa cəhd etsələr belə, dashboard-larına yalnız subdomenlərində daxil ola biləcəklər.

Və **Adminə həm xəritələnmiş domen, həm də şəbəkə domeni ilə girişə icazə ver** seçimi onlara admin dashboard-larına həm subdomen, həm də fərdi domen üzərindən daxil olmağa imkan verir.

![Üç yönləndirmə seçimini göstərən açılmış Admin Yönləndirməsi açılan menyusu](/img/config/domain-mapping-redirect-options.png)

Fərdi domeni xəritələndirməyin iki yolu var. Birincisi, super admin kimi şəbəkə admin dashboard-unuzdan domen adını xəritələndirməkdir, ikincisi isə Account səhifəsi altında alt sayt admin dashboard-u vasitəsilədir.

Lakin fərdi domeni şəbəkənizdəki alt saytlardan birinə xəritələndirməyə başlamazdan əvvəl domen adının **DNS parametrlərinin** düzgün konfiqurasiya olunduğundan əmin olmalısınız.

###

### Domen DNS parametrlərinin düzgün konfiqurasiya olunduğundan əmin olmaq {#making-sure-the-domain-dns-settings-are-properly-configured}

Xəritələnmənin işləməsi üçün xəritələndirməyi planlaşdırdığınız domenin Şəbəkənizin IP ünvanına yönəldiyindən əmin olmalısınız. Nəzərə alın ki, sizə Şəbəkə IP ünvanı lazımdır - xəritələndirmək istədiyiniz fərdi domenin IP ünvanı deyil, Ultimate Multisite-in quraşdırıldığı domenin IP ünvanı. Məsələn, konkret domenin IP ünvanını axtarmaq üçün [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) istifadə etməyi təklif edirik.

Domeni düzgün xəritələndirmək üçün **DNS** konfiqurasiyanızda həmin **IP ünvanına** yönələn **A RECORD** əlavə etməlisiniz. DNS idarəetməsi müxtəlif domen qeydiyyatçıları arasında xeyli fərqlənir, lakin XXXX-in domen qeydiyyatçınız olduğu " _XXXX-də A Record yaratmaq_ " ifadəsini axtarsanız, bunu əhatə edən çoxlu onlayn təlimatlar var (məs.: " _GoDaddy-də A Record yaratmaq_ ").

Bunu işlətməkdə çətinlik çəkirsinizsə, **domen qeydiyyatçınızın dəstəyi ilə əlaqə saxlayın** və onlar bu hissədə sizə kömək edə biləcəklər.

Əgər müştərilərinizə öz domenlərini xəritələndirməyə icazə verməyi planlaşdırırsınızsa, onlar bu hissədə işi özləri görməli olacaqlar. A Record yarada bilmədikləri halda onları qeydiyyatçılarının dəstək sisteminə yönləndirin.

### Super Admin kimi fərdi domen adını xəritələndirmək {#mapping-custom-domain-name-as-super-admin}

Şəbəkənizdə super admin kimi daxil olduqda, **Ultimate Multisite > Domenlər** bölməsinə keçərək fərdi domen adlarını asanlıqla əlavə edib idarə edə bilərsiniz.

![Ultimate Multisite-də Domenlər siyahısı səhifəsi](/img/admin/domains-list.png)

Bu səhifədə yuxarıdakı **Domen Əlavə Et** düyməsinə klikləyə bilərsiniz və bu, **fərdi domen adını**, fərdi domen adını tətbiq etmək istədiyiniz **alt saytı** təyin edib doldura biləcəyiniz və onu **əsas domen** adı kimi təyin edib-etməməyə qərar verə biləcəyiniz modal pəncərə açacaq (nəzərə alın ki, **bir alt sayta bir neçə domen adı xəritələndirə** bilərsiniz).

![Domen adı, sayt seçicisi və əsas domen keçid düyməsi olan Domen Əlavə Et modalı](/img/admin/domain-add-modal.png)

Bütün məlumatları daxil etdikdən sonra aşağıdakı **Mövcud Domeni Əlavə Et** düyməsinə klikləyə bilərsiniz.

Bu, fərdi domenin DNS məlumatlarının yoxlanması və əldə edilməsi prosesini başladacaq. Həmçinin səhifənin aşağısında prosesin necə irəlilədiyini izləməyiniz üçün jurnal görəcəksiniz. Bu prosesin tamamlanması bir neçə dəqiqə çəkə bilər.

Ultimate Multisite v2.13.0 həmçinin yeni sayt hər sayt üçün ayrıca domen kimi qəbul edilməli olan hostda yaradıldıqda daxili domen qeydini avtomatik yaradır. Əgər host şəbəkənin əsas domenidirsə və ya **Sayt URL-i** sahəsində konfiqurasiya edilmiş ortaq checkout-form baza domenlərindən biridirsə, avtomatik mapped-domain qeydi ötürülür ki, həmin ortaq baza domen ondan istifadə edən hər sayt üçün əlçatan qalsın.

Müştəri Domain Seller v1.3.0 və ya daha yeni versiya vasitəsilə yeni domen qeydiyyatdan keçirdikdə, Ultimate Multisite qeydiyyatdan keçirilmiş domeni standart olaraq avtomatik şəkildə müştərinin şəbəkə saytına xəritələndirir. Administratorlar artıq uğurlu qeydiyyatdan sonra əsas-domen bayrağı, aktivləşdirmə vəziyyəti və ya SSL idarəetməsi kimi seçimləri tənzimləmək istəmədikləri halda ayrıca mapped-domain qeydi əlavə etməli deyillər.

Hər şey düzgün qurulubsa, **Mərhələ** və ya status **DNS yoxlanılır** vəziyyətindən **Hazır** vəziyyətinə dəyişməlidir.

<!-- Skrinşot əlçatan deyil: Domenlər siyahısında DNS yoxlanılır mərhələsini göstərən domen sətri -->

<!-- Skrinşot əlçatan deyil: Yaşıl status göstəricisi ilə Hazır mərhələsini göstərən domen sətri -->

Domen adına klikləsəniz, onun daxilində bəzi seçimləri görə biləcəksiniz. Gəlin onlara qısa nəzər salaq:

![Mərhələ, sayt, aktiv, əsas və SSL keçidləri olan domen detalları səhifəsi](/img/admin/domain-edit.png)

**Mərhələ:** Bu, domenin olduğu mərhələdir. Domeni ilk dəfə əlavə etdikdə, o, yəqin ki, **DNS yoxlanılır** mərhələsində olacaq. Proses DNS qeydlərini yoxlayacaq və onların düzgün olduğunu təsdiqləyəcək. Sonra domen **SSL yoxlanılır** mərhələsinə keçiriləcək. Ultimate Multisite domenin SSL-ə sahib olub-olmadığını yoxlayacaq və domeninizi **Hazır** və ya **Hazır (SSL olmadan)** kimi kateqoriyalaşdıracaq.

**Sayt:** Bu domenlə əlaqələndirilmiş subdomendir. Xəritələnmiş domen bu konkret saytın məzmununu göstərəcək.

**Aktiv:** Domeni aktivləşdirmək və ya deaktivləşdirmək üçün bu seçimi açıb-söndürə bilərsiniz.

**Əsas domendir?:** Müştəriləriniz hər sayt üçün birdən çox xəritələnmiş domenə sahib ola bilər. Bunun konkret sayt üçün əsas domen olub-olmadığını seçmək üçün bu seçimdən istifadə edin.

**Təhlükəsizdir?:** Ultimate Multisite domeni aktivləşdirməzdən əvvəl onun SSL sertifikatına sahib olub-olmadığını yoxlasa da, domeni SSL sertifikatı ilə və ya onsuz yükləməyi əl ilə seçə bilərsiniz. Qeyd edin ki, vebsaytın SSL sertifikatı yoxdursa və siz onu SSL ilə məcburi yükləməyə çalışsanız, bu, sizə xətalar verə bilər.

### Fərdi domen adını Subsite istifadəçisi kimi xəritələndirmək {#mapping-custom-domain-name-as-subsite-user}

Subsite administratorları da öz subsite admin dashboard-larından fərdi domen adlarını xəritələndirə bilərlər.

Əvvəlcə bu seçimi **Domen xəritələndirməsi** ayarları altında aktivləşdirdiyinizə əmin olmalısınız. Aşağıdakı skrinşota baxın.

<!-- Skrinşot əlçatan deyil: Customer DNS Management keçidi vasitəsilə subsite istifadəçilərinə domenləri xəritələndirməyə icazə verən domen xəritələndirməsi ayarları -->

Bu seçimi **Plan** səviyyəsində və ya **Ultimate Multisite > Məhsullar** bölməsində məhsul seçimləri altında da qura və ya konfiqurasiya edə bilərsiniz.

![Məhsul redaktə səhifəsində Fərdi domenlər bölməsi](/img/config/product-custom-domains.png)

Bu seçimlərdən hər hansı biri aktivləşdirildikdə və subsite istifadəçisinə fərdi domen adlarını xəritələndirməyə icazə verildikdə, subsite istifadəçisi **Account** səhifəsi altında **Domenlər** adlı metabox görməlidir.

<!-- Skrinşot əlçatan deyil: Subsite Account səhifəsində Domen əlavə et düyməsi olan Domenlər metabox-u -->

İstifadəçi **Domen əlavə et** düyməsinə klikləyə bilər və bu, bəzi təlimatları olan modal pəncərəni açacaq.

<!-- Skrinşot əlçatan deyil: Subsite istifadəçiləri üçün DNS A-record təlimatlarını göstərən Domen əlavə et modalı -->

Sonra istifadəçi **Növbəti addım** düyməsinə klikləyib fərdi domen adını əlavə etməyə davam edə bilər. Onlar bunun əsas domen olub-olmadığını da seçə bilərlər.

<!-- Skrinşot əlçatan deyil: Fərdi domen adı sahəsi və əsas domen keçidi olan Domen əlavə et forması -->

<!-- Skrinşot əlçatan deyil: DNS doğrulamasını işə salan Domen əlavə et təsdiq addımı -->

**Domen əlavə et** üzərinə klikləmək fərdi domenin DNS məlumatlarını doğrulama və əldə etmə prosesini başladacaq.

### Domen sinxronizasiyası haqqında {#about-domain-syncing}

Domen sinxronizasiyası Ultimate Multisite-in fərdi domen adını hosting hesabınıza əlavə domen kimi əlavə etdiyi prosesdir **ki, domen xəritələndirməsi işləsin**.

Hosting provayderinizin Ultimate Multisite domen xəritələndirmə funksiyası ilə inteqrasiyası varsa, domen sinxronizasiyası avtomatik baş verir. Hazırda bu hosting provayderləri _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ və _Cpanel_-dir.

Host-provayder inteqrasiyası aktiv olduqda, Ultimate Multisite yeni yaradılmış saytlar üçün provayder tərəfində DNS və ya subdomen yaratma tapşırığını da növbəyə əlavə edə bilər. Əgər həmin tapşırığı dinləyən inteqrasiya yoxdursa, faydasız növbə qeydlərinin qarşısını almaq üçün fon işi ötürülür. Xəritələnmiş domenlər üçün DNS və SSL yoxlamaları normal domen-mərhələsi prosesi vasitəsilə işləməyə davam edir.

Bu inteqrasiyanı Ultimate Multisite ayarlarında **İnteqrasiya** tabı altında aktivləşdirməlisiniz.

![Hosting provayderlərini göstərən Ultimate Multisite ayarlarında İnteqrasiyalar tabı](/img/config/integrations-tab.png)

<!-- Skrinşot əlçatan deyil: İnteqrasiya ayarları tabında hosting provayderi Konfiqurasiya linkləri -->

_Qeyd edin ki, hosting provayderiniz yuxarıda qeyd olunan provayderlərdən biri deyilsə, **domen adını hosting hesabınızla əl ilə sinxronlaşdırmalı və ya əlavə etməli olacaqsınız**._
