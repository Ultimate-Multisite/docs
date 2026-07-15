---
title: PayPal Qurmaq
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal Gateway-i Qurmaq (v2)

_**MÜHİM QEYD: Bu məqalə Ultimate Multisite 2.x versiyasına aiddir.**_

Ödəniş ayarları səhifəmizdə dörd ödəniş metodunu aktivləşdirə bilərsiniz: Stripe, Stripe Checkout, PayPal və Əl ilə (Manual). Bu məqalədə isə **PayPal** ilə necə inteqrasiya olunacağını öyrənəcəyik.

Stripe kimi, PayPal da onlayn ödənişlər üçün, xüsusilə WordPress saytlarında geniş istifadə olunur. Bu məqalə sizə PayPal-dan necə istifadə edəcəyinizi, onu şəbəkənizdə mövcud bir ödəniş metodu kimi istifadə etməyi öyrədir.

Qeyd edin ki, bu inteqrasiya üçün lazım olan API kimlik məlumatlarını əldə etmək üçün **PayPal Business hesabı** sahibi olmalısınız.

## Şəbəkənizdə PayPal-ı aktivləşdirmək {#enabling-paypal-on-your-network}

PayPal-ı şəbəkənizdə mövcud bir ödəniş metodu kimi aktivləşdirmək üçün **Ultimate Multisite > Settings > Payments** bölməsinə keçin və PayPal yanındakı qutucuğu işarələyin.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Təlimatlı qurulma alətindən istifadə etmək {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 ödəniş qapısı ayarları hissəsinə təlimatlı bir PayPal qurulma aləti əlavə edir. PayPal-ı aktivləşdirdiyiniz zaman, gateway-i necə bağlamaq istədiyinizi seçmək və yadda saxlamaqdan əvvəl hansı kimlik məlumatlarının hələ də lazım olduğunu təsdiqləmək üçün **Ultimate Multisite > Settings > Payments**-dəki alətdən istifadə edin.

Alət iki qurulma yolu dəstəkləyir:

* **Əl ilə kimlik məlumatı daxiletməsi (Manual credential entry)**: Bu yolu, əgər artıq PayPal API kimlik məlumatlarınız varsa, OAuth qurulması hesabınız üçün mövcud deyilsə və ya kimlik məlumatlarını PayPal-dan özünüz kopyalamağı üstün tutursunuzsa, istifadə edin. API İstifadəçi Adını (API Username), API Şifrəsini (API Password) və API İmzasını (API Signature) PayPal sahələrinə daxil edin, sonra ödəniş ayarlarını yadda saxlayın.
* **OAuth bağlantı qapısı (OAuth connection gate)**: Bu yolu yalnız OAuth seçimi mövcuddur və sizin quraşdırmanız üçün aktivləşdirilibsə istifadə edin. Alət, OAuth axınını bir funksiya bayrağı (feature flag) arxasında göstərir, buna görə də bayraq yox olan şəbəkələr əl ilə kimlik məlumatı daxiletmə sahələrindən istifadə etməyə davam edir.

Əgər alətdə OAuth seçimi görmürsünüzsə, aşağıdakı əl ilə kimlik məlumatı daxiletmə prosesini tamamlayın. Gateway, əvvəlki Ultimate Multisite 2.x buraxılışlarındakı PayPal Business API kimlik məlumatları ilə işləyir.

## PayPal API kimlik məlumatlarını almaq {#getting-the-paypal-api-credentials}

PayPal ödəniş qapısı kimi aktivləşdirildikdən sonra, PayPal API **Username** , PayPal API **Password** və PayPal API **Signature** üçün sahələri doldurmanız lazım olacaq.

Bunu PayPal [Live](https://www.paypal.com/home) və ya [Sandbox](https://www.sandbox.paypal.com/home) hesabınıza daxil olaraq ala bilərsiniz.

(Yadda saxlayın ki, ödənişləri test etmək və gateway-in düzgün qurulub qurulmadığını görmək üçün **sandbox rejimindən** istifadə edə bilərsiniz. Sadəcə müvafiq bölməni yandırın.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

PayPal hesabınız üçün API Signature və ya Certificate kimlik məlumatlarını tələb etmək üçün:

  1. [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) səhifənizə keçin.

  2. **API access** bölməsində **Update** düymasına basın.
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** altında **Manage API credentials** düymasına basın.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Əgər artıq bir API Signature və ya Certificate yaratmısınızsa, kimlik məlumatlarınızı tapa biləcəyiniz bir səhifəyə yönləndiriləcəksiniz.

     * _**Qeyd:** PayPal hesabınızı təsdiqləməyiniz istənilərsə, ekranda göstərilən təlimatları izləyin._

  4. Aşağıdakı seçimlərdən *birini* seçin, sonra **Agree and Submit** düymasına basın.

     * **Request API Signature** – API Signature autentifikasiyası üçün seçin.

     * **Request API Certificate** – API Certificate autentifikasiyası üçün seçin.

  5. PayPal API kimlik məlumatlarınızı aşağıdakı kimi yaradır:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature kimlik məlumatları** API Username, API Password və Signature-dan ibarətdir və vaxtla bitmir. Bu dəyərlər əlavə təhlükəsizlik üçün default olaraq gizlənir. Onları yandır və söndürmək üçün **Show/Hide** düymasına basın. Bitirəndə **Done** düymasına basın.

     * **API Certificate kimlik məlumatları** API Username, API Password və Certificate-dan ibarətdir və üç il sonra avtomatik olaraq bitir. API Certificate-i masaüstünüzə yadda saxlamaq üçün **Download Certificate** düymasına basın.

Bu qədər, PayPal ödəniş inteqrasiyanız tamamlandı!

PayPal ayarları ilə bağlı suallarınız varsa, PayPal-ın [Help Center](https://www.paypal.com/br/smarthelp/home) səhifəsinə istinad edə bilərsiniz.
