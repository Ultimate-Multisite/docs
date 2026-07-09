---
title: Qeydiyyat Axını
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Qeydiyyat Prosesi (v2) {#the-registration-flow-v2}

_**MÜHİM QEYD: Bu məqalə Ultimate Multisite 2.x versiyasına aiddir.**_

İstifadəçilər şəbəkənizə müxtəlif yollarla qeydiyyatdan keçə bilərlər. Onlar qeydiyyat formanızdan və ya əvvəlcədən seçilmiş bir plan üçün paylaşılan bir linkdən istifadə edə bilərlər. Burada sizə göstərəcəyik ki, müştəriləriniz mövcud yollardan necə qeydiyyatdan keçə bilərlər və şəbəkənizdə qeydiyyatdan keçdikdən sonra nə baş verir.

## Qeydiyyat Formasından İstifadə: {#using-the-registration-form}

Bu, standart qeydiyyat prosesidir. Siz bir **ödəniş forması** ilə qeydiyyat səhifəsi yaradırsınız və müştərilərinizin şəbəkənizdə qeydiyyatdan keçməsi və bir plana abunə olması üçün müraciət edəcəyi yer burasıdır. İstəsəniz, müxtəlif qeydiyyat formaları olan bir neçə qeydiyyat səhifəsi saxlaya bilərsiniz.

Qeydiyyat üçün standart səhifə [_**yourdomain.com/register**_](http://yourdomain.com/register) olsa da, bunu istənilən vaxt **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** yerində dəyişə bilərsiniz.

İstifadəçi qeydiyyat səhifənizə çatdıqda (adətən **Sign in** və ya **Buy now** düyməsinə klikləməklə), orada qeydiyyat formanızla qarşılaşacaq.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Budur, ön tərəfdə görünən ödəniş formasının bir nümunəsi:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Onların etməli olduğu yeganə şey bütün məcburi sahələri — e-poçt, istifadəçi adı, şifrə və s. — doldurmaq və plana ödəniş etmək və ya pul məlumatı olmadan pulsuz plan və ya sınaq müddətli ödənişli plan üçün e-poçt ünvanlarını təsdiqləməkdir.

"Təşəkkür edirik" səhifəsində, e-poçt ünvanlarını təsdiqləməyə ehtiyac olub-olmadığı və ya veb saytlarının artıq aktivləşdirildiyi və istifadə etməyə başlaya biləcəkləri barədə bir mesaj görəcəklər.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

Əgər e-poçt təsdiqləməsi tələb olunursa, e-poçt qutusuna keçməli və təsdiqləmə linkinə klikləməlidir. E-poçt ünvanı təsdiqlənməyən halda veb saytları aktivləşdirilməyəcək.

Əgər onlar ödənişli planla qeydiyyatdan keçibsə və ya e-poçt təsdiqləməsi şəbəkənizdə məcburi deyilsə, ödənişdən dərhal sonra veb saytları aktivləşdiriləcək və onların panelinə daxil olmaq üçün bir link göstəriləcək.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Paylaşılan Linkdən İstifadə: {#using-a-shareable-link}

Paylaşılan linkdən istifadə edərək qeydiyyatdan keçmə prosesi demək olar ki, qeydiyyat formasından fərqlidir; yeganə fərq ondadır ki, paylaşılan linkdən istifadə edərək, müştəriləriniz ödəniş formasında bir məhsul və ya veb sayt şablonu əvvəlcədən seçilmiş ola bilər (URL parametrləri ilə məhsul və şablonların əvvəlcədən seçilməsi bölməsinə baxın) və ya bəlkə də bir kupon kodu əlavə edilmiş ola bilər (URL Parametrlərindən İstifadə bölməsinə baxın).

Qeydiyyat prosesi eyni olacaq: onlar adlarını, istifadəçi adlarını, e-poçt ünvanlarını, veb sayt adlarını və başlıqlarını və s. doldurmalıdırlar, lakin plan və ya sayt şablonu artıq onlar üçün əvvəlcədən seçilmiş olacaq.

### Əl ilə Ödənişlərlə Qeydiyyat: {#registering-using-manual-payments}

Əgər Ultimate Multisite və ya onun əlavə inteqrasiyaları tərəfindən təklif edilən PayPal, Stripe və ya digər ödəniş şəbəkələrindən istifadə etmək istəmirsinizsə, müştəriləriniz üçün əl ilə ödənişlərdən istifadə edə bilərsiniz. Bu yolla, onlar şəbəkənizdə qeydiyyatdan keçdikdən sonra sizin seçdiyiniz ödəniş emalçisində ödəniş etmələri üçün onlara bir faktura yarada bilərsiniz.

Qeydiyyat prosesi yuxarıdakıdan tamamilə eyni olacaq, lakin qeydiyyat səhifəsində müştəriləriniz ödənişi tamamlamaq üçün əlavə təlimatlar verən bir e-poçt alacaqlarını bildirən bir mesaj görəcəklər.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

Və qeydiyyat tamamlandıqdan sonra, sizin təyin etdiyiniz ödəniş təlimatlarını görəcəklər (və e-poçtlarına da alacaqlar).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Ödəniş təlimatları **Ultimate Multisite > Settings > Payments** yerində **Manual** ödəniş seçimini yandıraraq dəyişdirilə bilər:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Müştəriləriniz əl ilə ödənişi tamamlayıb sizə təsdiq göndərdikdən sonra, müştəri üzvlüyünü və veb saytını aktivləşdirmək üçün ödənişi **əl ilə təsdiqləməlisiniz**.

Bunu etmək üçün **Ultimate Multisite > Payments** səhifəsinə keçin və müştəri ödənişini tapın. Hələ də **Pending** (Gözləmədə) vəziyyətini göstərməlidir.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Ödəniş nömrəsinə klikləyin və onun vəziyyətini **Completed** (Tamamlanmış) olaraq dəyişdirə biləcəksiniz.

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Və vəziyyətini **Completed** olaraq dəyişdirdikdən sonra, **Activate membership** (Üzvlüyü aktivləşdir) mesajını görməlisiniz. Bu seçimi **on** vəziyyətinə keçirərək müştəriyə aid olan üzvlüyü və veb saytı aktivləşdirin. Sonra, **Save Payment** düyməsinə klikləyin.

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Müştəriniz indi panelə və abunə olduğu bütün funksiyalara daxil ola bilməlidir.
