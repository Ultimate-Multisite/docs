---
title: PayPal'ı Kurma
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# PayPal Ödeme Geçidi Kurulumu (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite 2.x sürümü için geçerlidir.**_

Ödeme ayarları sayfamızda dört farklı ödeme yöntemini etkinleştirebilirsiniz: Stripe, Stripe Checkout, PayPal ve Manuel. Bu makalede **PayPal** entegrasyonunun nasıl yapılacağını göreceğiz.

Stripe gibi PayPal da özellikle WordPress web sitelerinde çevrimiçi ödemeler için yaygın olarak kullanılmaktadır. Bu makale, ağınızda PayPal'ı bir ödeme yöntemi olarak nasıl kullanabileceğiniz konusunda size rehberlik edecektir.

Bu entegrasyon için gereken API kimlik bilgilerini alabilmek için bir **PayPal Business hesabına** sahip olmanız gerektiğini unutmayın.

## Ağınızda PayPal'ı etkinleştirme

Ağınızda PayPal'ı kullanılabilir bir ödeme yöntemi olarak etkinleştirmek için **Ultimate Multisite > Settings > Payments** sekmesine gidin ve PayPal'ın yanındaki kutuyu işaretleyin.

![Aktif ödeme geçitlerinde PayPal'ı etkinleştirme](/img/config/settings-payment-gateways.png)

## PayPal API kimlik bilgilerini alma

PayPal ödeme geçidi olarak etkinleştirildikten sonra PayPal API **Username**, PayPal API **Password** ve PayPal API **Signature** alanlarını doldurmanız gerekecektir.

Bu bilgileri PayPal [Canlı](https://www.paypal.com/home) veya [Sandbox](https://www.sandbox.paypal.com/home) hesabınıza giriş yaparak alabilirsiniz.

(Ödemeleri test etmek ve geçidin doğru şekilde kurulup kurulmadığını görmek için **sandbox modunu** kullanabileceğinizi unutmayın. Bunun için ilgili bölümdeki düğmeyi açık konuma getirin.)

![PayPal API kimlik bilgileri alanları ve sandbox modu düğmesi](/img/config/settings-payment-gateways.png)

PayPal hesabınız için API Signature veya Certificate kimlik bilgilerini talep etmek için:

  1. [Hesap Ayarları](https://www.paypal.com/businessmanage/account/accountAccess) sayfasına gidin.

  2. **API access** bölümünde **Update** seçeneğine tıklayın.  
![API access bölümü ile PayPal Hesap Ayarları](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** altında **Manage API credentials** seçeneğine tıklayın.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Daha önce bir API Signature veya Certificate oluşturduysanız, kimlik bilgilerinizi bulabileceğiniz bir sayfaya yönlendirileceksiniz.

     * _**Not:** PayPal hesabınızı doğrulamanız istenirse ekrandaki talimatları izleyin._

  4. Aşağıdaki seçeneklerden _birini_ seçin, ardından **Agree and Submit** düğmesine tıklayın.

     * **Request API Signature** – API Signature kimlik doğrulaması için seçin.

     * **Request API Certificate** – API Certificate kimlik doğrulaması için seçin.

  5. PayPal, API kimlik bilgilerinizi aşağıdaki şekilde oluşturur:  
![PayPal tarafından oluşturulan API kimlik bilgileri](/img/config/settings-payment-gateways.png)

     * **API Signature kimlik bilgileri**; süresi dolmayan bir API Username, API Password ve Signature içerir. Bu değerler ek güvenlik için varsayılan olarak gizlidir. Bunları göstermek veya gizlemek için **Show/Hide** düğmesine tıklayın. İşlem tamamlandığında **Done** düğmesine tıklayın.

     * **API Certificate kimlik bilgileri**; üç yıl sonra otomatik olarak süresi dolan bir API Username, API Password ve Certificate içerir. API Certificate'i masaüstünüze kaydetmek için **Download Certificate** düğmesine tıklayın.

Hepsi bu kadar, PayPal ödeme entegrasyonunuz tamamlandı!

PayPal ayarlarıyla ilgili sorularınız varsa PayPal'ın [Yardım Merkezi](https://www.paypal.com/br/smarthelp/home)'ne başvurabilirsiniz.
