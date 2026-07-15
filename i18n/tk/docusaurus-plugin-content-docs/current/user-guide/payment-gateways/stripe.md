---
title: Stripe-y goýdyp bilmek
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway'i Kurmak (v2)

_**ÖNEMLİ QAYDAMA: Bu makale Ultimate Multisite versiyasının 2.x sürümünü nəzərdə tutur.**_

Ödəniş ayarlar səhifəsində ödəniş metodlarından qədər dördünü, yəni Stripe, Stripe Checkout, PayPal və Manual-ı aktivləşdirə bilərsiniz. Bu məqalədə biz **Stripe** ilə necə inteqrasiya ediləcəyini görəcəyik.

## Stripe-i Aktivləşdirmək {#enabling-stripe}

Stripe-i şəbəkənizdə mövcud ödəniş portalı kimi aktiv etmək üçün **Ultimate Multisite > Settings > Payments** bölməsinə gedin və Active Payment Gateways hissəsindəki **Stripe** və ya **Stripe Checkout** yanında olan düyməni işarələyin.

![Active payment gateways-da Stripe-i aktivləşdirmək](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Bu üsul, ödəniş zamanı kredit kartı nömrəsini daxil etmək üçün bir yer göstərəcək.

![Ödəniş zamanı Stripe inline kredit kartı sahəsi](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Bu üsul, ödəniş zamanı müştəriyi Stripe Checkout səhifəsinə yönləndirəcək.

![Ödəniş zamanı Stripe Checkout yönləndirmə səhifəsi](/img/config/settings-payment-gateways.png)

Stripe API açarlarını almaq

Stripe ödəniş portalı kimi aktiv olduqdan sonra, **Stripe Publishable Key** və **Stripe Secret Key** sahələrini doldurmanız lazım olacaq. Bunu Stripe hesabınıza daxil olaraq əldə edə bilərsiniz.

_**Qeyd:** Ödəniş metodunun işləyib-işləmədiyini yoxlamaq üçün **Sandbox rejiminə** aktivləşdirə bilərsiniz._

![Stripe API açarı sahələri və sandbox rejimi düyməsi](/img/config/settings-payment-gateways.png)

Stripe panellərinizdə, sağ üst küncdəki **Developers**-a klikləyin, sonra sol menyuda **API Keys**-ə keçin.

![API açarları ilə Stripe dashboard Developers bölməsi](/img/config/settings-payment-gateways.png)

Siz **Test Data** (integrasi sizin prodüksiyada işlediğini barlamak üçin) ulanyp ýa-da ulanyp bilmezden hem ulanyp bilersiňiz. Bu zatı üýtgetmek üçin **Viewing test data** düğmesini geçiriň.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** we **Secret key** bilen **Token** sarynyndan maýlydyry (copy) we Ultimate Multisite Stripe Gateway ulanylyşlarynda ýaplaň. Soňra **Save Changes** üçin basyň.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook goşmagy {#setting-up-stripe-webhook}

Stripe, **siziň stripe hasabynda** haýsy waka bolanda Ultimate Multisite-e habar bermek üçin webhook hadysatlary göndereýär.

**Developers** bilen basyň we soňra sol menyuda **Webhooks** bölümini saýlaň. Soň sağ tähizatda **Add endpoint** (Uçun nokady goşmak) diýip basyň *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Size bir **Endpoint URL** zerur bolar (*.*). Ultimate Multisite awtomatiki we Endpoint URL-i döredip berýär, ony **Ultimate Multisite Stripe Gateway** bölümindäki **Webhook Listener URL** sarynyndan hemen aşakda tapyp bilersiňiz._._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL-i maýlydyryp Stripe **Endpoint URL** saryna ýaplaň.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Soňra bir **Event** (Hadysaty) saýlamaly (*.*). Bu opsiyada, diňe **Select all events** (Barlagdaş ähli hadysatlary saýlaň) saryny we **Add events** (Hadysatlary goşmak) üçin basyň. Soňra üýtgeşmeleri saklamak üçin **Add Endpoint**-e basyň.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Bu, Stripe ödeme integrasiýaňyz tamamlanmady!
