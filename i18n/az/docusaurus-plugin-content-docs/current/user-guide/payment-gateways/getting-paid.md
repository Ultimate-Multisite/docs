---
title: Ödəniş almaq
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Ödənişlərin alınması (v2)

_**VACİB QEYD: Bu məqalə Ultimate Multisite 2.x versiyasına aiddir.**_

Ultimate Multisite daxili üzvlük və hesablaşma sisteminə malikdir. Hesablaşma sistemimizin işləməsi üçün e-ticarətdə istifadə olunan ən yayğın ödəniş keçidlərini inteqrasiya etmişik. Ultimate Multisite-də standart ödəniş keçidləri _Stripe_ , _PayPal_ və Manual Payment-dir. Müvafiq əlavələrini quraşdıraraq ödənişləri qəbul etmək üçün _WooCommerce_ , _GoCardless_ və _Payfast_ da istifadə edə bilərsiniz.

## Əsas parametrlər

Bu ödəniş keçidlərindən hər hansı birini Ultimate Multisite ödəniş parametrləri altında konfiqurasiya edə bilərsiniz. Bunu **Ultimate Multisite menyusu > Settings > Payments** bölməsinə keçərək tapa bilərsiniz.

![Ultimate Multisite-də Payments panelini göstərən ödəniş parametrləri səhifəsi](/img/config/payments-settings-page.png)

Ödəniş keçidinizi qurmazdan əvvəl konfiqurasiya edə biləcəyiniz əsas ödəniş parametrlərinə nəzər salın:

**Avtomatik yenilə** **məni məcburi et:** Bu, istifadəçinin seçdiyi hesablaşma tezliyindən asılı olaraq hər hesablaşma dövrünün sonunda ödənişin avtomatik təkrarlanmasını təmin edəcək.

<!-- Ekran görüntüsü mövcud deyil: Payments parametrləri səhifəsində Force Auto-Renew keçid parametri -->

Ultimate Multisite v2.13.0 avtomatik yenilənmə aktiv olan təkrarlanan üzvlüyü saxlamazdan əvvəl aktiv keçiddə təkrar istifadə oluna bilən yeniləmə etimad məlumatının olub-olmadığını yoxlayır. Yeniləmə etimad məlumatı keçid abunəliyi, hesablaşma razılaşması, saxlanmış vault token və ya ekvivalent təkrar istifadə oluna bilən ödəniş üsulu ola bilər. Keçid istifadə edilə bilən etimad məlumatının olmadığını bildirərsə, Ultimate Multisite üzvlüyü saxlayır, lakin avtomatik yenilənməni söndürür və çatışmayan etimad məlumatı vəziyyətini qeyd edir ki, administrator və ya dəstək prosesi müştəridən yenilənmə tarixindən əvvəl ödənişi yenidən təsdiqləməsini istəyə bilsin.

Bu, keçid yalnız birdəfəlik ödənişləri toplaya bildiyi halda üzvlüyün avtomatik yenilənirmiş kimi görünməsinin qarşısını alır. Keçid əlavələri təkrarlanan ödəniş proseslərinin təkrar istifadə oluna bilən etimad məlumatı saxladığını təsdiqləməlidir, xüsusilə də keçid həm birdəfəlik tutma, həm də saxlanılan/abunəlik ödəniş rejimlərini dəstəklədikdə.

**Ödəniş üsulu olmadan sınaqlara icazə** **ver:** Bu seçim aktiv olduqda, müştəriniz qeydiyyat prosesi zamanı heç bir maliyyə məlumatı əlavə etməli olmayacaq. Bu yalnız sınaq müddəti bitdikdən sonra tələb olunacaq.

<!-- Ekran görüntüsü mövcud deyil: Payments parametrləri səhifəsində Allow Trials Without Payment Method keçidi -->

**Ödəniş təsdiqində faktura göndər:** Bu, ödənişdən sonra faktura göndərib-göndərməməyi seçmək imkanı verir. Qeyd edin ki, istifadəçilər ödəniş tarixçələrinə alt-sayt Dashboard-larında daxil ola biləcəklər. Bu seçim Manual Gateway-ə tətbiq edilmir.

<!-- Ekran görüntüsü mövcud deyil: Payments parametrləri səhifəsində Send Invoice on Payment Confirmation keçidi -->

**Faktura nömrələmə sxemi:** Burada ya ödəniş istinad kodunu, ya da ardıcıl nömrə sxemini seçə bilərsiniz. Fakturalarınız üçün ödəniş istinad kodundan istifadə etməyi seçsəniz, heç nə konfiqurasiya etməyə ehtiyac yoxdur. Ardıcıl nömrə sxemindən istifadə etməyi seçsəniz, **növbəti faktura nömrəsi** (Bu nömrə sistemdə yaradılacaq növbəti faktura üçün faktura nömrəsi kimi istifadə olunacaq. Hər dəfə yeni faktura yaradıldıqda bir vahid artırılır. Faktura ardıcıl nömrəsini konkret dəyərə sıfırlamaq üçün onu dəyişib saxlaya bilərsiniz) və **faktura nömrəsi prefiksi** konfiqurasiya edilməlidir.

<!-- Ekran görüntüsü mövcud deyil: Payment Reference Code və Sequential Number seçimləri olan Invoice numbering scheme açılan siyahısı -->

<!-- Ekran görüntüsü mövcud deyil: Sequential Number seçildikdə göstərilən növbəti faktura nömrəsi və faktura nömrəsi prefiksi sahələri -->

## Keçidləri harada tapmaq olar:

Ödəniş keçidlərini eyni səhifədə qura bilərsiniz ( **Ultimate Multisite > Settings > Payments**). **aktiv ödəniş keçidləri** bölməsinin dərhal altında bunları görə biləcəksiniz: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ və _Manual_.

![Stripe, Stripe Checkout, PayPal və Manual siyahısını göstərən Active Payment Gateways bölməsi](/img/config/payments-active-gateways.png)

Hər ödəniş keçidi üçün onun qurulması addımlarında sizə bələdçilik edəcək ayrıca məqaləmiz var; onları aşağıdakı keçidlərdə tapa bilərsiniz.

Ödəniş təfərrüatlarına baxa və onları redaktə edə bilərsiniz:

![Ödəniş redaktə interfeysi](/img/admin/payment-edit.png)

Ödəniş redaktə səhifəsinin tam görünüşü belədir:

![Ödəniş redaktəsinin tam interfeysi](/img/admin/payment-edit-full.png)

Ödəniş keçidləri parametrlərinin də tam görünüşü belədir:

![Ödəniş keçidləri parametrlərinin tam səhifəsi](/img/config/settings-payments-gateways-full.png)

**Stripe keçidinin qurulması**

**PayPal keçidinin qurulması**** **

**Əl ilə ödənişlərin qurulması**

İndi, ödəniş keçidiniz kimi _WooCommerce_ , _GoCardless_ və ya _Payfast_ istifadə etmək istəyirsinizsə, onların **əlavələrini quraşdırmalı və konfiqurasiya etməlisiniz**.

### WooCommerce əlavəsini necə quraşdırmaq olar:

Biz başa düşürük ki, _Stripe_ və _PayPal_ bəzi ölkələrdə mövcud deyil və bu, Ultimate Multisite istifadəçilərinin plugin-imizi effektiv şəkildə istifadə etməsini məhdudlaşdırır və ya çətinləşdirir. Buna görə də çox populyar e-ticarət plugin-i olan _WooCommerce,_ inteqrasiya etmək üçün əlavə yaratdıq. Dünyanın müxtəlif yerlərindəki tərtibatçılar ona fərqli ödəniş keçidlərini inteqrasiya etmək üçün əlavələr yaratdılar. Ultimate Multisite hesablaşma sistemi ilə istifadə edə biləcəyiniz ödəniş keçidlərini genişləndirmək üçün bundan yararlandıq.

_**VACİB:** Ultimate Multisite: WooCommerce Integration WooCommerce-in ən azı əsas saytınızda aktivləşdirilməsini tələb edir._

Əvvəlcə əlavələr səhifəsinə keçin. Bunu **Ultimate Multisite > Settings** bölməsinə keçərək tapa bilərsiniz. **Əlavələr** cədvəlini görməlisiniz. **Əlavələrimizi yoxlayın** üzərinə klikləyin.

<!-- Ekran görüntüsü mövcud deyil: Ultimate Multisite Settings yan panelində Add-ons cədvəli və Check our Add-ons keçidi -->

**Əlavələrimizi yoxlayın** üzərinə kliklədikdən sonra əlavələr səhifəsinə yönləndiriləcəksiniz. Burada bütün Ultimate Multisite əlavələrini tapa bilərsiniz. **Ultimate Multisite: WooCommerce Integration** əlavəsinə klikləyin.

![WooCommerce Integration daxil olmaqla Ultimate Multisite əlavələrini göstərən əlavələr səhifəsi](/img/addons/addons-page.png)

Əlavənin təfərrüatları ilə bir pəncərə açılacaq. Sadəcə **İndi quraşdırın** düyməsinə klikləyin.

<!-- Skrinşot mövcud deyil: İndi quraşdırın düyməsi olan Ultimate Multisite WooCommerce Integration əlavəsinin təfərrüat dialoqu -->

Quraşdırma tamamlandıqdan sonra qoşmalar səhifəsinə yönləndiriləcəksiniz. Burada sadəcə **Şəbəkədə aktivləşdirin** üzərinə klikləyin və WooCommerce əlavəsi şəbəkənizdə aktivləşdiriləcək.

<!-- Skrinşot mövcud deyil: WooCommerce Integration əlavəsi üçün Şəbəkədə aktivləşdirin keçidi olan qoşmalar səhifəsi -->

Onu aktivləşdirdikdən sonra, əgər vebsaytınızda WooCommerce qoşması hələ də quraşdırılıb aktivləşdirilməyibsə, siz xatırlatma alacaqsınız.

<!-- Skrinşot mövcud deyil: Administratora WooCommerce qoşmasını quraşdırıb aktivləşdirməyi xatırladan admin bildirişi -->

WooCommerce Integration əlavəsi haqqında daha çox oxumaq üçün **buraya klikləyin**.

### GoCardless əlavəsini necə quraşdırmaq olar:

_GoCardless_ əlavəsini quraşdırmaq üçün addımlar _WooCommerce_ əlavəsi ilə demək olar ki, eynidir. Zəhmət olmasa əlavələr səhifəsinə keçin və **Ultimate Multisite: GoCardless Gateway** əlavəsini seçin.

<!-- Skrinşot mövcud deyil: Ultimate Multisite GoCardless Gateway əlavəsi vurğulanmış əlavələr səhifəsi -->

Əlavə pəncərəsi açılacaq. **İndi quraşdırın** düyməsinə klikləyin.

<!-- Skrinşot mövcud deyil: İndi quraşdırın düyməsi olan Ultimate Multisite GoCardless Gateway əlavəsinin təfərrüat dialoqu -->

Quraşdırma tamamlandıqdan sonra qoşmalar səhifəsinə yönləndiriləcəksiniz. Burada sadəcə **Şəbəkədə aktivləşdirin** üzərinə klikləyin və _GoCardless_ əlavəsi şəbəkənizdə aktivləşdiriləcək.

<!-- Skrinşot mövcud deyil: GoCardless Gateway əlavəsi üçün Şəbəkədə aktivləşdirin keçidi olan qoşmalar səhifəsi -->

_GoCardless_ ödəniş keçidi ilə necə başlamağı öyrənmək üçün **bu məqaləni oxuyun**.

### Payfast əlavəsini necə quraşdırmaq olar:

Əlavələr səhifəsinə keçin və **Ultimate Multisite: Payfast Gateway** əlavəsini seçin.

<!-- Skrinşot mövcud deyil: Ultimate Multisite Payfast Gateway əlavəsi vurğulanmış əlavələr səhifəsi -->

Əlavə pəncərəsi açılacaq. **İndi quraşdırın.** düyməsinə klikləyin

<!-- Skrinşot mövcud deyil: İndi quraşdırın düyməsi olan Ultimate Multisite Payfast Gateway əlavəsinin təfərrüat dialoqu -->

Quraşdırma tamamlandıqdan sonra qoşmalar səhifəsinə yönləndiriləcəksiniz. Burada sadəcə **Şəbəkədə aktivləşdirin** üzərinə klikləyin və _Payfast_ əlavəsi şəbəkənizdə aktivləşdiriləcək.

<!-- Skrinşot mövcud deyil: Payfast Gateway əlavəsi üçün Şəbəkədə aktivləşdirin keçidi olan qoşmalar səhifəsi -->
