---
title: Pul Almaq
sidebar_position: 15
_i18n_hash: 4d43609c920fa8085a3cea69343ad2fa
---
# Ödəniş Almaq (v2)

\_**MÜHİM QEYD: Bu məqalə Ultimate Multisite 2.x versiyasına aiddir.**\_

Ultimate Multisite-da yerleşik üzvlük və hesablaşma sistemi var. Hesablaşma sistemimizin işləməsi üçün, e-commerce-da ən çox istifadə olunan ödəniş qapılarını (payment gateways) inteqrasiya etmişik. Ultimate Multisite-dakı standart ödəniş qapıları \_Stripe\_, \_PayPal\_ və Əl ilə Ödənişdir (Manual Payment). Həmçinin, müvafiq add-onları quraşdıraraq ödəniş almaq üçün \_WooCommerce\_, \_GoCardless\_ və \_Payfast\_dan istifadə edə bilərsiniz.

## Əsas Parametrlər

Bu ödəniş qapılarının hamısını Ultimate Multisite ödəniş parametrləri altında konfiqurasiya edə bilərsiniz. Buna **Ultimate Multisite menyusu > Settings > Payments** yolundan çata bilərsiniz.

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Ödəniş qapınızı qurmazdan əvvəl, konfiqurasiya edə biləcəyiniz əsas ödəniş parametrlərinə nəzər salmağınız tövsiyə olunur:

**Avtomatik Yeniləməni Zorlama (Force auto-renew):** Bu, istifadəçinin seçdiyi hesablaşma tezliyinə əsasən ödənişin hər hesablaşma dövrünün sonunda avtomatik olaraq təkrarlanmasını təmin edir.

![Force Auto-Renew toggle setting on the Payments settings page](/img/config/payments-force-auto-renew.png)

**Ödəniş Yolu olmadan sınaqları icazə et (Allow trials without payment method):** Bu seçimlər aktiv olduqda, müştəriniz qeydiyyat prosesi zamanı heç bir maliyyə məlumatı əlavə etməyəcək. Bu, yalnız sınaq müddəti bitdikdən sonra tələb olunacaq.

![Allow Trials Without Payment Method toggle on the Payments settings page](/img/config/payments-allow-trials.png)

**Ödəniş təsdiq edildikdə faktura göndər (Send invoice on payment confirmation):** Bu, ödənişdən sonra faktura göndərmək və ya göndərməmək imkanı verir. Qeyd edin ki, istifadəçilər öz ödəniş tarixçələrinə öz subsite dashboardları vasitəsilə daxil olacaqlar. Bu seçim Əl ilə Qapı (Manual Gateway) üçün keçərli deyil.

![Send Invoice on Payment Confirmation toggle on the Payments settings page](/img/config/payments-send-invoice.png)

**Faktura nömrələmə sxemi (Invoice numbering scheme):** Burada ödəniş istinad kodu (payment reference code) və ya ardıcıl nömrə sxemi (sequential number scheme) seçə bilərsiniz. Fakturalarınız üçün ödəniş istinad kodu istifadə etməyi seçsəniz, heç nə konfiqurasiya etməyiniz lazım deyil. Əgər ardıcıl nömrə sxemi istifadə etməyi seçsəniz, **növbəti faktura nömrəsini** (Bu nömrə sistemdə yaradılan növbəti faktura üçün faktura nömrəsi kimi istifadə ediləcək. Hər yeni faktura yaradıldıqda bir vahid artırılır. Onu dəyişdirib, faktura ardıcıl nömrəsini müəyyən bir dəyərə sıfırlamaq üçün yadda saxlaya bilərsiniz) və **faktura nömrəsi prefiksini** konfiqurasiya etməlisiniz.

![Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options](/img/config/payments-invoice-scheme.png)

![Next invoice number and invoice number prefix fields shown when Sequential Number is selected](/img/config/payments-invoice-sequential.png)

## Qapıları Harada Tapmaq Olar:

Ödəniş qapılarını eyni səhifədə ( **Ultimate Multisite > Settings > Payments**) qura bilərsiniz. **Aktiv ödəniş qapıları (active payment gateways)**-nın birbaşa altında aşağıdakıları görəcəksiniz: \_Stripe\_, \_Stripe\_ _Checkout_, \_PayPal\_ və \_Manual\_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Hər ödəniş qapısı üçün ona qurulması addımlarını göstərən xüsusi bir məqaləmiz var, bunu aşağıdakı linklərdə tapa bilərsiniz.

Ödəniş detallarını görə və redaktə edə bilərsiniz:

![Payment edit interface](/img/admin/payment-edit.png)

Bu, ödəniş redaktə səhifəsinin tam görünüşüdür:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Bu, ödəniş qapıları parametrlərinin tam görünüşüdür:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe qapısını qurmaq**

**PayPal qapısını qurmaq**** **

**Əl ilə ödənişləri qurmaq**

İndi, əgər ödəniş qapısı kimi \_WooCommerce\_, \_GoCardless\_ və ya \_Payfast\_dan istifadə etmək istəyirsinizsə, onların **add-onlarını quraşdırmalı və konfiqurasiya etməlisiniz**.

### WooCommerce add-onunu necə quraşdırmaq:

Bilirik ki, \_Stripe\_ və \_PayPal\_ bəzi ölkələrdə mövcud deyil və bu da Ultimate Multisite istifadəçilərinin plugin-imizi effektiv istiqamətləndirməsinə mane olur. Buna görə də, çox populyar bir e-commerce plugin-i olan \_WooCommerce\_-u inteqrasiya etmək üçün bir add-on yaratdıq. Dünyanın yerli developerləri buna fərqli ödəniş qapılarını inteqrasiya etmək üçün add-onlar yaratdılar. Biz də bu fürsətdən istifadə edərək Ultimate Multisite hesablaşma sistemi ilə istifadə edə biləcəyiniz ödəniş qapılarını genişləndirdik.

\_**MÜHİM:** Ultimate Multisite: WooCommerce Integration-ın işləməsi üçün WooCommerce-un ən azı əsas saytınızda aktiv olması tələb olunur.\_*

Əvvəlcə, zəhmət olmasa add-onlar səhifəsinə gedin. Buna **Ultimate Multisite > Settings** yolundan çata bilərsiniz. **Add-ons** cədvəlini görməlisiniz. **Check our Add-ons** düyməsinə klikləyin.

![Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link](/img/config/settings-addons-table.png)

**Check our Add-ons** düyməsinə kliklədikdən sonra, add-onlar səhifəsinə yönləndiriləcəksiniz. Burada bütün Ultimate Multisite add-onlarını tapa bilərsiniz. **Ultimate Multisite: WooCommerce Integration** add-onuna klikləyin.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

Add-on detalları ilə bir pəncərə açılacaq. Sadəcə **Install Now** düyməsinə klikləyin.

![Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button](/img/addons/addon-install-woocommerce.png)

Quraşdırma tamamlandıqdan sonra, pluginlər səhifəsinə yönləndiriləcəksiniz. Burada sadəcə **Network Activate** düyməsinə klikləyin və WooCommerce add-onu şəbəkənizdə aktiv olacaq.

![Plugins page with the Network Activate link for the WooCommerce Integration add-on](/img/addons/addon-network-activate-woocommerce.png)

Aktivləşdirildikdən sonra, əgər hələ də saytınızda WooCommerce plugin-i quraşdırılıb aktivləşdirilməyibsə, bir xatırlatma alacaqsınız.

![Admin notice reminding the administrator to install and activate the WooCommerce plugin](/img/addons/addon-woocommerce-reminder.png)

WooCommerce Integration add-onu haqqında daha çox məlumat oxumaq üçün **bura klikləyin**.

### GoCardless add-onunu necə quraşdırmaq:

\_GoCardless\_ add-onunu quraşdırmaq addımları \_WooCommerce\_ add-onuna çox oxşardır. Zəhmət olmasa add-onlar səhifəsinə gedin və **Ultimate Multisite: GoCardless Gateway** add-onunu seçin.

![Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted](/img/addons/addons-page-gocardless.png)

Add-on pəncərəsi açılacaq. **Install Now** düyməsinə klikləyin.

![Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button](/img/addons/addon-install-gocardless.png)

Quraşdırma tamamlandıqdan sonra, pluginlər səhifəsinə yönləndiriləcəksiniz. Burada sadəcə **Network Activate** düyməsinə klikləyin və \_GoCardless\_ add-onu şəbəkənizdə aktiv olacaq.

![Plugins page with the Network Activate link for the GoCardless Gateway add-on](/img/addons/addon-network-activate-gocardless.png)

\_GoCardless\_ qapısı ilə necə başlamaq öyrənmək üçün **bu məqaləni oxuyun**.

### Payfast add-onunu necə quraşdırmaq:

Add-onlar səhifəsinə gedin və **Ultimate Multisite: Payfast Gateway** add-onunu seçin.

![Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted](/img/addons/addons-page-payfast.png)

Add-on pəncərəsi açılacaq. **Install Now.** düyməsinə klikləyin.

![Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button](/img/addons/addon-install-payfast.png)

Quraşdırma tamamlandıqdan sonra, pluginlər səhifəsinə yönləndiriləcəksiniz. Burada sadəcə **Network Activate** düyməsinə klikləyin və \_Payfast\_ add-onu şəbəkənizdə aktiv olacaq.

![Plugins page with the Network Activate link for the Payfast Gateway add-on](/img/addons/addon-network-activate-payfast.png)
