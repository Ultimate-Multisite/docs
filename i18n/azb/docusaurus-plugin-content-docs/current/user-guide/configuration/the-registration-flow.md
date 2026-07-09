---
title: Kayıt Akışı
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Qeydiyyat Prosesi (v2) {#the-registration-flow-v2}

_**MÜHİM QEYD: Bu məqalə Ultimate Multisite 2.x versiyasına aiddir.**_

İstifadəçilər şəbəkənizə müxtəlif yollarla qeydiyyatdan keçə bilərlər. Onlar qeydiyyat formanızdan və ya ilkin seçilmiş bir plan üçün paylaşılabilən bir linkdən istifadə edə bilərlər. Burada sizə göstərəcəyik ki, müştəriləriniz mövcud yollardan necə qeydiyyatdan keçə bilərlər və qeydiyyatdan keçdikdən sonra nə baş verir.

## Qeydiyyat Formasından İstifadə: {#using-the-registration-form}

Bu, standart qeydiyyat prosesidir. Siz bir **ödəniş forması** ilə qeydiyyat səhifəsi yaradırsınız və müştərilərinizin şəbəkənizə qeydiyyatdan keçməsi və bir plana abunə olması üçün mənöltəcə yer burası olacaq. İstəsəniz, fərqli qeydiyyat forması olan bir neçə qeydiyyat səhifəsi yarada bilərsiniz.

Qeydiyyat üçün standart səhifə [_**yourdomain.com/register**_](http://yourdomain.com/register) olsa da, bunu istənilən vaxt **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** yerindən dəyişə bilərsiniz.

İstifadəçi qeydiyyat səhifənizə çatdıqda (adətən **Sign in** və ya **Buy now** düyməsinə kliklədikdə), orada qeydiyyat formanızla qarşılaşacaqlar.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Budur, ön tərəfdə görünən ödəniş formasına bir nümunə:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Onların etməli olduğu yeganə şey bütün məcburi sahələri — e-poçt, istifadəçi adı, şifrə və s. — doldurmaq və plana ödəniş etmək və ya pul məlumatı olmadan pulsuz plan və ya sınaq müddətli ödənişli plan üçün e-poçt ünvanlarını təsdiqləməkdir.

"Təşəkkür edirik" səhifəsində isə e-poçt ünvanlarını təsdiqləmələmələri lazım olub-olmadığını və ya veb saytlarının artıq aktivləşdirildiyini və istifadə etməyə başlaya biləcəklərini göstərən bir mesaj görəcəklər.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

Əgər e-poçt təsdiqi tələb olunursa, e-poçt qutusuna keçib təsdiqləmə linkinə klikləmələri lazım olacaq. E-poçt ünvanları təsdiqlənməyən halda veb saytları aktivləşdirilməyəcək.

Əgər onlar ödənişli planla qeydiyyatdan keçibsə və ya e-poçt təsdiqi şəbəkənizdə məcburi deyilsə, ödənişdən dərhal sonra veb saytları aktivləşdiriləcək və dashboard-a daxil olmaq üçün bir link göstəriləcək.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Paylaşılabilən Linkdən İstifadə: {#using-a-shareable-link}

Paylaşılabilən linkdən istifadə edərək qeydiyyatdan keçmə prosesi demək olar ki, qeydiyyat formasından fərqlidir; yeganə fərq ondadır ki, paylaşılabilən linkdən istifadə edərək, müştəriləriniz ödəniş formasında bir məhsul və ya veb saytı şablonunu ilkin seçə bilərlər (URL parametrləri ilə məhsul və şablonların ilkin seçilməsi bölməsinə baxın) və ya bəlkə də bir kupon kodu əlavə edə bilərlər (URL Parametrlərindən İstifadə bölməsinə baxın).

Qeydiyyat prosesi eyni olacaq: onlar adlarını, istifadəçi adlarını, e-poçt ünvanlarını, veb sayt adlarını və başlıqlarını və s. doldurmaq lazım gəlir, lakin plan və ya sayt şablonu artıq onlar üçün ilkin seçilmiş olacaq.

### Əl ilə Ödənişlə Qeydiyyat: {#registering-using-manual-payments}

Əgər Ultimate Multisite və ya onun add-on inteqrasiyaları tərəfindən təklif olunan PayPal, Stripe və ya digər ödəniş şəbəkələrindən istifadə etmək istəmirsinizsə, müştəriləriniz üçün əl ilə ödənişdən istifadə edə bilərsiniz. Bu yolla, onlar şəbəkənizə qeydiyyatdan keçdikdən sonra sizin seçdiyiniz ödəniş emalçisində ödəniş etmələri üçün onlara bir faktura yarada bilərsiniz.

Qeydiyyat prosesi yuxarıdakı proseslə tamamilə eyni olacaq, lakin qeydiyyat səhifəsində müştəriləriniz ödənişi tamamlamaları üçün əlavə təlimatlar verəcəkləri barədə bir mesaj görəcəklər.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

Və qeydiyyat tamamlandıqdan sonra, sizin təyin etdiyiniz ödəniş təlimatlarını görəcəklər (və e-poçtlarına da çatacaqlar).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Ödəniş təlimatları **Ultimate Multisite > Settings > Payments** yerində **Manual** ödəniş seçənliyini yandıraraq dəyişdirilə bilər:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Müştəriləriniz əl ilə ödənişi tamamlayıb sizə təsdiq göndərdikdən sonra, müştəri üzvlüyünü və veb saytını aktivləşdirmək üçün ödənişi **əl ilə təsdiqləməlisiniz**.

Bunu etmək üçün **Ultimate Multisite > Payments** səhifəsinə keçin və müştəri ödənişini tapın. Hələ də **Pending** (Gözləmədə) statusunu göstərməlidir.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Ödəniş nömrəsinə klikləyin və statusunu **Completed** (Tamamlanmış) olaraq dəyişə biləcəksiniz.

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Statusunu **Completed** olaraq dəyişdirdikdən sonra, **Activate membership** (Üzvlüyü aktivləşdir) mesajını görməlisiniz. Bu seçənliyi **on** vəziyyətinə keçirərək müştəriyə aid olan üzvlüyü və veb saytı aktivləşdirin. Sonra, **Save Payment** düyməsinə klikləyin.

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Müştəriniz indi dashboard-a və abunə olduğu bütün funksiyalara daxil ola bilməlidir.
