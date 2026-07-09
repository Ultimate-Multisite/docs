---
title: Stripe-ı Qurmaq
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway-i Qurmaq (v2) {#setting-up-the-stripe-gateway-v2}

_**MÜHİM QEYD: Bu məqalə Ultimate Multisite-in 2.x versiyasına aiddir.**_

Ödəniş ayarları səhifəmizdə dörd ödəniş metodunu aktivləşdirə bilərsiniz: Stripe, Stripe Checkout, PayPal və Əl ilə (Manual). Bu məqalədə isə **Stripe** ilə necə inteqrasiya olunacağını görəcəyik.

## Stripe-i Aktivləşdirmək {#enabling-stripe}

Networkinizdə mövcud ödəniş qapısı kimi Stripe-i aktivləşdirmək üçün **Ultimate Multisite > Settings > Payments** yoluna gedin və "Active Payment Gateways" (Aktiv Ödəniş Qapıları) bölməsindəki **Stripe** və ya **Stripe Checkout** yanındakı toggle düyməsini işarələyin.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Bu metod ödəniş zamanı kredit kartı nömrəsini daxil etmək üçün bir sahə göstərəcək.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Bu metod ödəniş zamanı müştəriyə Stripe Checkout səhifəsinə yönləndirəcək.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

Stripe API açarlarınızı almaq

Stripe ödəniş qapısı kimi aktivləşdirildikdən sonra, **Stripe Publishable Key** və **Stripe Secret Key** üçün sahələri doldurmanız lazım olacaq. Bunu Stripe hesabınıza daxil olaraq ala bilərsiniz.

_**Qeyd:** Ödəniş metodunun işlədiyini yoxlamaq üçün **Sandbox mode** (Sandbox rejimi) aktivləşdirə bilərsiniz._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Stripe dashboard-unuzda, yuxarı sağ küncdə **Developers** düymasına, sonra isə sol menyuda **API Keys** düymasına klikləyin.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Ya **Test Data** (istehsal saytınızda inteqrasiyanın işlədiyini yoxlamaq üçün) istifadə edə bilərsiniz, ya da istifadə etməyə bilərsiniz. Bunu dəyişmək üçün **Viewing test data** toggle düymasını işarələyin.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** və **Secret key** dəyərlərini **Token** sütunundan kopyalayın və Ultimate Multisite Stripe Gateway sahələrinə yapışdırın. Sonra **Save Changes** düymasına klikləyin.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook Qurulması {#setting-up-stripe-webhook}

Stripe, **Stripe hesabınızda** hər hansı bir hadisə baş verdikdə Ultimate Multisite-ə bildiriş göndərən webhook hadisələri göndərir.

**Developers** düymasına klikləyin və sonra sol menyuda **Webhooks** maddəsini seçin. Sonra sağ tərəfdə **Add endpoint** düymasına klikləyin.

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Bir **Endpoint URL**-ə ehtiyacınız olacaq. Ultimate Multisite bu endpoint URL-ni avtomatik olaraq yaradır və onu **Ultimate Multisite Stripe Gateway** bölməsindəki **Webhook Listener URL** sahəsinin birbaşa altında tapa bilərsiniz.

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL-ni **kopyalayın** və Stripe **Endpoint URL** sahəsinə **yapışdırın**.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Növbəti addım isə bir **Event** (Hadisə) seçməkdir. Bu seçim altında, sadəcə **Select all events** (Bütün hadisələri seç) qutusunu işarələməli və **Add events** düymasına klikləməlisiniz. Bundan sonra dəyişiklikləri saxlamaq üçün **Add Endpoint** düymasına klikləyin.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Bu qədər, Stripe ödəniş inteqrasiyanız tamamlandı!
