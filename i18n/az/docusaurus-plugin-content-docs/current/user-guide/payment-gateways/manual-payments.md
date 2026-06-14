---
title: Əl Avtomat Ödənişlərini Qurmaq
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Əl ilə Ödənişlərin Qurulması (v2)

_**VACİB QEYD: Bu məqalə Ultimate Multisite 2.x versiyasına aiddir.**_

Əl ilə ödənişlər, istifadəçiləriniz üçün **Stripe** və ya **PayPal** kimi ödəniş üsulları mövcud olmadıqda, onlara alternativ ödəniş metodları təklif etməyin bir yoludur. Bu, bank köçürməsi, nağd ödəniş və ya istifadəçiləriniz üçün yerli olaraq mövcud olan hər hansı digər ödəniş metodu ola bilər.

## Əl ilə Ödənişləri Necə Aktiv Edəcəksiniz

Əl ilə ödəniş qurmaq çox asandır. Sadəcə ödəniş qapıları (payment gateways) altında bunu aktivləşdirməli və istifadəçinin ödənişi necə göndərməsi barədə ətraflı təlimatlar yazmalısınız.

Əvvəlcə **Ultimate Multisite > Settings > Payments** yolunu izləyin. **Payment Gateways**-in altında **Manual** düyməsini aktiv edin. Görəcəksiniz ki, qarşınızda bir **Payment Instructions** (Ödəniş Təlimatları) qutusu açılacaq.

Bu qutuya müştərinin ödəniş etmək üçün lazım olacaq məlumatları əlavə edin. Bu, bank hesabınızın detalları və ya müştərinin ödəniş təsdiqini sizə göndərə biləcəyi bir e-poçt ünvanı ola bilər, məsələn.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Budur əl ilə ödəniş qapısı ayarları interfeysi:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Qurulumu bitirdikdən sonra sadəcə **Save Settings** (Ayarları Saxla) düyməsinə klikləyin və hazırdır. İstifadəçilər şəbəkənizə qeydiyyatdan keçdikdə, alış-verişi tamamlaması üçün sizin təlimatlarınızı alacağını bildiren bir mesaj görəcəklər.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Həmçinin, **Thank You** (Təşəkkür) səhifənizdə də ödəniş təlimatlarınızla bağlı bir mesaj alacaqlar.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Əl ilə Ödənişləri Təsdiqləmək

Əl ilə ödənişi təsdiqləmək üçün soldakı menyudan **Payments** (Ödənişlər) bölməsinə keçin. Burada şəbəkənizdəki bütün ödənişləri və onların detallarını, o cümlədən **status** (vəziyyət)larını görə bilərsiniz. Əl ilə ödəniş həmişə **Pending** (Gözləyir) statusunda olacaq, ta ki siz onu əl ilə dəyişdirəsiniz.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

**reference code** (istinad kodu) düyməsinə klikləyərək ödəniş səhifəsinə daxil olun. Bu səhifədə istinad ID-si, məhsullar, vaxt qeydləri və daha çox şey kimi gözləyən ödənişin bütün detalları var.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Sağ sütunda ödənişin statusunu dəyişdirə bilərsiniz. Statusu **Completed** (Tamamlanmış) olaraq dəyişdirmək və **toggling the Activate Membership** (Üzvliyi Aktivləşdir) seçiminə işarə etmək, müştərinin saytını aktiv edəcək və onun üyHeyliyi aktiv olacaq.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
