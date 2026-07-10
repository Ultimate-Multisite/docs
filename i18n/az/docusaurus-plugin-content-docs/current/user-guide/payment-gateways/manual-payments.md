---
title: Manual ödənişlərin qurulması
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Manual Ödənişlərin Qurulması (v2) {#setting-up-manual-payments-v2}

_**VACİB QEYD: Bu məqalə Ultimate Multisite 2.x versiyasına aiddir.**_

Manual ödənişlər, istifadəçiləriniz üçün **Stripe** və ya **PayPal** əlçatan olmadıqda başqa ödəniş üsulları təklif etməyinizin bir yoludur. Bu, istifadəçiləriniz üçün yerli olaraq əlçatan olan pul köçürməsi, bank köçürməsi və ya hər hansı başqa ödəniş üsulu ola bilər.

## Manual Ödənişləri necə aktivləşdirmək olar {#how-to-enable-manual-payments}

Manual ödənişi qurmaq çox asandır. Sadəcə onu ödəniş şlüzləri altında aktivləşdirməli və istifadəçinin ödənişi necə göndərməli olduğu barədə ətraflı təlimatlar daxil etməlisiniz.

Əvvəlcə **Ultimate Multisite > Settings > Payments** bölməsinə keçin. **Payment Gateways** altında **Manual** seçimini aktiv edin. Sizin üçün **Payment Instructions** qutusunun göründüyünü görəcəksiniz.

Bu qutuya müştərinizin ödənişi etmək üçün ehtiyac duyacağı məlumatları əlavə edin. Məsələn, bu, bank hesabı məlumatlarınız və müştərinin sizə ödəniş təsdiqini göndərə bilməsi üçün email ünvanınız ola bilər.

![Payment Instructions mətn sahəsi ilə Manual ödəniş şlüzü keçidi](/img/config/manual-gateway-expanded.png)

Manual şlüz ayarları interfeysi belədir:

![Manual şlüz ayarları](/img/config/manual-gateway-settings.png)

Qurduqdan sonra sadəcə **Save Settings** üzərinə klikləyin və iş tamamdır. İstifadəçilər şəbəkənizdə qeydiyyatdan keçəndə, alış-verişi tamamlamaq üçün təlimatlarınızı alacaqlarını bildirən bir mesaj görəcəklər.

![İstifadəçiyə ödəniş təlimatlarını alacağını bildirən qeydiyyat təsdiqi mesajı](/img/frontend/registration-manual-notice.png)

Həmçinin **Thank You** səhifənizdə ödəniş təlimatlarınızla birlikdə bir mesaj alacaqlar.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Manual ödənişlərin təsdiqlənməsi {#confirming-manual-payments}

Manual ödənişi təsdiqləmək üçün sol paneldəki **Payments** menyusuna keçin. Orada şəbəkənizdəki bütün ödənişləri və onların təfərrüatlarını, o cümlədən **status** məlumatını görə bilərsiniz. Manual ödəniş siz onu əl ilə dəyişənə qədər həmişə **Pending** statusuna malik olacaq.

![Pending manual ödənişi göstərən ödənişlər siyahısı](/img/admin/payments-list.png)

**reference code** üzərinə klikləyərək ödəniş səhifəsinə daxil olun. Bu səhifədə gözləyən ödənişin bütün təfərrüatları, məsələn, istinad ID-si, məhsullar, vaxt qeydləri və daha çox məlumat var.

![Reference code, məhsullar və yekun məbləğləri göstərən ödəniş təfərrüatları səhifəsi](/img/admin/payment-edit.png)

Sağ sütunda ödənişin statusunu dəyişə bilərsiniz. Onu **Completed** olaraq dəyişmək və **Activate Membership** seçimini aktiv etmək müştərinizin saytını aktivləşdirəcək və onun üzvlüyü aktiv olacaq.

![Status Completed olaraq təyin edilmiş və Activate Membership keçidi olan ödəniş redaktə səhifəsi](/img/admin/payment-activate-membership.png)
