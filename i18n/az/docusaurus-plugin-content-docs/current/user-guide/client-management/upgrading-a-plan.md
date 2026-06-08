---
title: Planı Yüksəltmək
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Plan Yüksəltmək (v2)

_**ƏHƏMİYYƏTLİ QEYD: Bu məqalə Ultimate Multisite 2.x versiyasına aiddir.**_

Müştəriləriniz istənilən vaxt planlarını yüksəltmələri mümkündür. Onlar ya başqa bir plana yüksəltmə edə bilərlər, ya da şəbəkənizdə təklif etdiyiniz istənilən əlavə xidmətləri və ya paketləri satın ala bilərlər.

Bu təlimatda, planlarını necə yüksəltə biləcəkləri və yüksəltmə prosesindən sonra nə baş verəcəyi haqqında danışacağıq.

Planlarını yüksəltmək üçün müştəriləriniz **dashboard**-larına daxil olmalı və **Account** səhifəsinə keçməlidir.

![Customer subsite dashboard with Account menu link visible](/img/account-page/account-menu.png)

Account səhifəsində onlara hazırkı üzvlüyü və ona uyğun gələn plan göstəriləcək. Başqa bir plana yüksəltmək üçün **Your Membership** bölməsinin yuxarı sağ küncündəki **Change** düyməsinə klikləməlidirlər.

![Account page Your Membership card with Change button](/img/account-page/membership-change-button.png)

Onlar mövcud bütün planların göstəriləcəyi bir ödəniş formasına yönləndiriləcəklər.

Həmçinin, planı yüksəltmək istəməyib, sadəcə müəyyən bir xidməti və ya paketi (məsələn, sonsuz ziyarət və ya disk sahəsi) satın almaq istəyənlər üçün **hazırkı planları üçün mövcud xidmətlər və paketlər** bölməsini görə biləcəklər.

![Upgrade picker showing available plans and packages on the customer side](/img/account-page/upgrade-picker.png)

Satın almaq istədikləri məhsulu seçdikdən sonra, mövcud kreditləri çıxaraq indi nə qədər ödəyəcəkləri və növbəti hesablanma tarixində nə qədər hesablanacağı göstəriləcək.

Adətən, əgər məhsul başqa bir plan və ödəniş bir üzvlük haqqı ilə ediləcəksə, ilk plandan ödənilən məbləğ üçün kredit alacaqlar.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Əgər seçdikləri plan və ya paket mövcud abunəlikdə heç bir dəyişiklik etməyəcəksə, bu barədə izah edən bir mesaj görəcəklər.

![Notice when the selected plan does not change the subscription](/img/account-page/upgrade-no-change.png)

Ödəniş tamamlandıqdan sonra, yeni məhsul(lar) müştərilərinizin hesabına əlavə ediləcək və yeni məhsul(lar)ın bütün limitləri və ya xüsusiyyətləri dərhal ona əlavə ediləcək: ziyarətlər, disk sahəsi, yazılar və s....

##

##

## Plan Yüksəltmə və Aşağı Endirmə Yolları

Məhsullarınızın hər birində **Up & Downgrades** (Yüksəltmə və Aşağı Endirmə) adlı bir tab olacaq. Bu tabdakı ilk seçim **Plan Group** adlı bir sahədir.

**Plan Group** (Plan qrupları), Ultimate Multisite-ə müəyyən planların eyni "ailəyə" aid olduğunu və buna görə də yüksəltmə/aşağı endirmə yolu seçimlərini qurmaq üçün istifadə edilməli olduğunu bildirməyə imkan verir.

![Product edit Up and Downgrades tab with Plan Group field](/img/config/product-upgrades-plan-group.png)

Məsələn, **Free Plan** (Pulsuz Plan), **Basic Plan** (Əsas Plan) və **Premium Plan** (Premium Plan) mövcuddur. Siz istəyirsiniz ki, **Free Plan** altında abunə olan istifadəçilər yalnız **Premium Plan**-a yüksəltmə edə bilsinlər və onlar üçün "Basic Plan"-ı yüksəltmə seçimi kimi görməmələr. Etməli olduğunuz yeganə şey, aşağıdakı skrinşotlarda göstərildiyi kimi, həm Free, həm də Premium planlar üçün eyni plan qrupu adını təyin etməkdir.

![Free Plan product page with High End plan group assigned](/img/config/product-upgrades-free.png)

![Premium Plan product page with High End plan group assigned](/img/config/product-upgrades-premium.png)

Bu isə Ultimate Multisite-ə bildirir ki, şəbəkədə **High End** adlı bir "ailə" planlar var. Yüksəltmə və ya aşağı endirmə təklif edərkən, istifadəçi üçün yalnız eyni ailəyə aid planlar seçim kimi göstəriləcək.
