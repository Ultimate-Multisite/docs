---
title: Konfigurasi Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Ağ Geçidini Kurmak (v2) {#setting-up-the-stripe-gateway-v2}

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x'i kapsamaktadır.**_

Ödeme ayarları sayfamızda dört farklı ödeme yöntemini etkinleştirebilirsiniz: Stripe, Stripe Checkout, PayPal ve Manuel. Bu makalede, **Stripe** ile nasıl entegre olacağımıza bakacağız.

## Stripe'ı Etkinleştirme {#enabling-stripe}

Stripe'ı ağınızda kullanabileceğiniz bir ödeme ağ geçidi olarak etkinleştirmek için, **Ultimate Multisite > Ayarlar > Ödemeler** sayfasına gidin ve Aktif Ödeme Ağ Geçitleri bölümündeki **Stripe** veya **Stripe Checkout** yanındaki anahtarı açın.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Bu yöntem, ödeme sırasında kredi kartı numarasını girmeniz için bir alan gösterecektir.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Bu yöntem, ödeme sırasında müşteriyi bir Stripe Checkout sayfasına yönlendirecektir.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

Stripe API anahtarlarınızı alma

Stripe bir ödeme ağ geçidi olarak etkinleştirildikten sonra, **Stripe Publishable Key** ve **Stripe Secret Key** alanlarını doldurmanız gerekecek. Bunları Stripe hesabınıza giriş yaparak alabilirsiniz.

_**Not:** Ödeme yönteminin çalışıp çalışmadığını test etmek için **Sandbox modunu** etkinleştirebilirsiniz._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Stripe dashboard'ınızda, sağ üst köşedeki **Developers**'a, ardından sol menüdeki **API Keys**'e tıklayın.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Ya **Test Verisi** kullanabilirsiniz (üretim sitenizde entegrasyonun çalışıp çalışmadığını test etmek için) ya da kullanmayabilirsiniz. Bunu değiştirmek için **Viewing test data** anahtarını açıp kapatın.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** ve **Secret key** değerlerini **Token** sütunundan kopyalayın ve Ultimate Multisite Stripe Gateway alanlarına yapıştırın. Ardından **Değişiklikleri Kaydet**'e tıklayın.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook Kurulumu {#setting-up-stripe-webhook}

Stripe, **Stripe hesabınızda** herhangi bir olay gerçekleştiğinde Ultimate Multisite'ı bilgilendiren webhook olayları gönderir.

**Developers**'a tıklayın ve sol menüdeki **Webhooks** öğesini seçin. Ardından sağ tarafta **Add endpoint**'a tıklayın.

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Bir **Endpoint URL**'ye ihtiyacınız olacak. Ultimate Multisite, bu URL'yi otomatik olarak oluşturur ve bunu **Ultimate Multisite Stripe Gateway** bölümündeki **Webhook Listener URL** alanının hemen altında bulabilirsiniz.

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL'yi **Kopyalayın** ve Stripe **Endpoint URL** alanına **yapıştırın**.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Sıradaki adım bir **Event** seçmek. Bu seçenek altında, sadece **Select all events** kutucuğunu işaretlemeniz ve **Add events**'a tıklamanız yeterli. Bundan sonra değişiklikleri kaydetmek için **Add Endpoint**'a tıklayın.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Bu kadar! Stripe ödeme entegrasyonunuz tamamlandı!
