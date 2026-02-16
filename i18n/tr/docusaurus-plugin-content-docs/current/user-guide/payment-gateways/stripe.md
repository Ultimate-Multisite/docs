---
title: Stripe'ı Ayarlama
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Ödeme Yöntemini Kurma (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite 2.x sürümünü kapsamaktadır.**_

Ödeme ayarları sayfamızda dört farklı ödeme yöntemini etkinleştirebilirsiniz: Stripe, Stripe Checkout, PayPal ve Manuel. Bu makalede **Stripe** entegrasyonunun nasıl yapılacağını göreceğiz.

## Stripe'ı Etkinleştirme

Stripe'ı ağınızda kullanılabilir bir ödeme yöntemi olarak etkinleştirmek için **Ultimate Multisite > Settings > Payments** bölümüne gidin ve Aktif Ödeme Yöntemleri kısmında **Stripe** veya **Stripe Checkout** seçeneğinin yanındaki düğmeyi işaretleyin.

![Aktif ödeme yöntemlerinde Stripe'ı etkinleştirme](/img/config/settings-payment-gateways.png)

### Stripe ile Stripe Checkout Arasındaki Fark:

**Stripe:** Bu yöntem, ödeme sırasında kredi kartı numarasının girileceği bir alan gösterir.

![Ödeme sırasında satır içi Stripe kredi kartı alanı](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Bu yöntem, ödeme sırasında müşteriyi Stripe Checkout sayfasına yönlendirir.

![Ödeme sırasında Stripe Checkout yönlendirme sayfası](/img/config/settings-payment-gateways.png)

Stripe API Anahtarlarınızı Alma

Stripe ödeme yöntemi olarak etkinleştirildikten sonra **Stripe Publishable Key** ve **Stripe Secret Key** alanlarını doldurmanız gerekecektir. Bu bilgileri Stripe hesabınıza giriş yaparak alabilirsiniz.

_**Not:** Ödeme yönteminin düzgün çalışıp çalışmadığını test etmek için **Sandbox mode** seçeneğini etkinleştirebilirsiniz._

![Stripe API anahtarı alanları ve sandbox modu düğmesi](/img/config/settings-payment-gateways.png)

Stripe kontrol panelinizde sağ üst köşedeki **Developers** seçeneğine tıklayın, ardından sol menüden **API Keys** öğesini seçin.

![API Keys bölümü bulunan Stripe Developers sayfası](/img/config/settings-payment-gateways.png)

**Test Data** (entegrasyonun canlı sitenizde çalışıp çalışmadığını test etmek için) kullanabilir veya kullanmayabilirsiniz. Bunu değiştirmek için **Viewing test data** düğmesine tıklayın.

![Stripe test verilerini görüntüleme düğmesi](/img/config/settings-payment-gateways.png)

**Token** sütunundaki **Publishable key** ve **Secret key** değerlerini kopyalayın ve Ultimate Multisite Stripe Gateway alanlarına yapıştırın. Ardından **Save Changes** butonuna tıklayın.

![Stripe publishable ve secret key değerleri](/img/config/settings-payment-gateways.png)

![Ultimate Multisite ayarlarına Stripe anahtarlarını yapıştırma](/img/config/settings-payment-gateways.png)

## Stripe Webhook Kurulumu

Stripe, **Stripe hesabınızda** herhangi bir olay gerçekleştiğinde Ultimate Multisite'ı bilgilendiren webhook etkinlikleri gönderir.

**Developers** seçeneğine tıklayın ve ardından sol menüden **Webhooks** öğesini seçin. Sonra sağ taraftaki **Add endpoint** butonuna tıklayın.

![Add endpoint butonu bulunan Stripe Webhooks sayfası](/img/config/settings-payment-gateways.png)

Bir **Endpoint URL**'ye ihtiyacınız olacak. Ultimate Multisite, endpoint URL'sini otomatik olarak oluşturur ve bunu **Ultimate Multisite Stripe Gateway** bölümündeki **Webhook Listener URL** alanının hemen altında bulabilirsiniz.

![Stripe gateway ayarlarındaki Webhook Listener URL alanı](/img/config/settings-payment-gateways.png)

Endpoint URL'sini **kopyalayın** ve Stripe'daki **Endpoint URL** alanına **yapıştırın**.

![Stripe webhook kurulumuna endpoint URL yapıştırma](/img/config/settings-payment-gateways.png)

Sırada bir **Event** seçmek var. Bu seçeneğin altında **Select all events** kutusunu işaretlemeniz ve **Add events** butonuna tıklamanız yeterlidir. Ardından değişiklikleri kaydetmek için **Add Endpoint** butonuna tıklayın.

![Tüm etkinlikleri seçme ve Stripe endpoint'ini ekleme](/img/config/settings-payment-gateways.png)

İşte bu kadar, Stripe ödeme entegrasyonunuz tamamlandı!
