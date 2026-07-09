---
title: PayPal Kurulumu
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal Gateway Kurulumu (v2) {#setting-up-the-paypal-gateway-v2}

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite 2.x sürümüne ilişkindir.**_

Ödeme ayarları sayfamızda en fazla dört ödeme yöntemini etkinleştirebilirsiniz: Stripe, Stripe Checkout, PayPal ve Manuel. Bu makalede **PayPal** ile nasıl entegre olunacağını göreceğiz.

Stripe gibi PayPal da çevrimiçi ödemeler için, özellikle WordPress web sitelerinde yaygın olarak kullanılır. Bu makale, ağınızda kullanılabilir bir ödeme yöntemi olarak PayPal’ı nasıl kullanacağınız konusunda size rehberlik edecektir.

Bu entegrasyon için gerekli API kimlik bilgisini almak üzere bir **PayPal Business hesabınız** olması gerektiğini unutmayın.

## Ağınızda PayPal’ı etkinleştirme {#enabling-paypal-on-your-network}

PayPal’ı ağınızda kullanılabilir bir ödeme yöntemi olarak etkinleştirmek için **Ultimate Multisite > Settings > Payments** sekmesine gidin ve PayPal’ın yanındaki kutuyu işaretleyin.

![Etkin ödeme gateway’lerinde PayPal’ı etkinleştirme](/img/config/settings-payment-gateways.png)

## Rehberli kurulum sihirbazını kullanma {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0, ödeme gateway ayarlarına rehberli bir PayPal kurulum sihirbazı ekler. PayPal’ı etkinleştirdikten sonra, gateway’i nasıl bağlamak istediğinizi seçmek ve kaydetmeden önce hangi kimlik bilgilerinin hâlâ gerekli olduğunu doğrulamak için **Ultimate Multisite > Settings > Payments** üzerindeki sihirbazı kullanın.

Sihirbaz iki kurulum yolunu destekler:

* **Manuel kimlik bilgisi girişi**: Zaten PayPal API kimlik bilgileriniz varsa, OAuth kurulumu Account’ınız için mevcut değilse veya kimlik bilgilerini PayPal’dan kendiniz kopyalamayı tercih ediyorsanız bu yolu kullanın. PayPal alanlarına API Username, API Password ve API Signature bilgilerini girin, ardından ödeme ayarlarını kaydedin.
* **OAuth bağlantı kapısı**: Bu yolu yalnızca OAuth seçeneği kurulumunuz için mevcut ve etkin olduğunda kullanın. Sihirbaz, OAuth akışını bir özellik bayrağının arkasında gösterir; böylece bayrağa sahip olmayan ağlar manuel kimlik bilgisi giriş alanlarını kullanmaya devam eder.

Sihirbazda OAuth seçeneğini görmüyorsanız aşağıdaki manuel kimlik bilgisi giriş akışını tamamlayın. Gateway, önceki Ultimate Multisite 2.x sürümleriyle aynı PayPal Business API kimlik bilgileriyle çalışır.

## PayPal API kimlik bilgilerini alma {#getting-the-paypal-api-credentials}

PayPal bir ödeme gateway’i olarak etkinleştirildikten sonra, PayPal API **Username** , PayPal API **Password** ve PayPal API **Signature** alanlarını doldurmanız gerekecektir.

Bunu PayPal [Live](https://www.paypal.com/home) veya [Sandbox](https://www.sandbox.paypal.com/home) Account’ınıza giriş yaparak alabilirsiniz.

(Ödemeleri test etmek ve gateway’in doğru şekilde kurulup kurulmadığını görmek için **sandbox modunu** kullanabileceğinizi unutmayın. Sadece ilgili bölümü açın.)

![PayPal API kimlik bilgileri alanları ve sandbox modu açma/kapama düğmesi](/img/config/settings-payment-gateways.png)

PayPal Account’ınız için API Signature veya Certificate kimlik bilgileri istemek üzere:

  1. [Account Ayarları](https://www.paypal.com/businessmanage/account/accountAccess) bölümünüze gidin.

  2. **API erişimi** bölümünde **Güncelle**’ye tıklayın.
![API erişimi bölümüyle PayPal Account Ayarları](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API entegrasyonu (Klasik)** altında **API kimlik bilgilerini yönet**’e tıklayın.
![PayPal NVP/SOAP API entegrasyonu API kimlik bilgilerini yönet](/img/config/settings-payment-gateways.png)

     * Zaten bir API Signature veya Certificate oluşturduysanız kimlik bilgilerinizi bulabileceğiniz bir sayfaya yönlendirilirsiniz.

     * _**Not:** PayPal Account’ınızı doğrulamanız istenirse ekrandaki talimatları izleyin._

  4. Aşağıdaki seçeneklerden _birini_ seçin, ardından **Kabul Et ve Gönder**’e tıklayın.

     * **API Signature iste** – API Signature kimlik doğrulaması için seçin.

     * **API Certificate iste** – API Certificate kimlik doğrulaması için seçin.

  5. PayPal, API kimlik bilgilerinizi şu şekilde oluşturur:
![PayPal tarafından oluşturulan API kimlik bilgileri](/img/config/settings-payment-gateways.png)

     * **API Signature kimlik bilgileri**, süresi dolmayan bir API Username, API Password ve Signature içerir. Bu değerler, ek güvenlik için varsayılan olarak gizlidir. Bunları açıp kapatmak için **Göster/Gizle**’ye tıklayın. Bittiğinde **Bitti**’ye tıklayın.

     * **API Certificate kimlik bilgileri**, üç yıl sonra otomatik olarak süresi dolan bir API Username, API Password ve Certificate içerir. API Certificate’i masaüstünüze kaydetmek için **Certificate’i indir**’e tıklayın.

İşte bu kadar, PayPal ödeme entegrasyonunuz tamamlandı!

PayPal ayarlarıyla ilgili sorularınız varsa PayPal’ın [Yardım Merkezi](https://www.paypal.com/br/smarthelp/home) sayfasına başvurabilirsiniz.
